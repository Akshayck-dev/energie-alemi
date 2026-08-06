import { useState, useEffect, useRef } from 'react';
import { cn } from '../lib/utils';
import splashVideo from '../assets/spalsh final.mp4';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const endTimeRef = useRef<number>(0);

  const handleVideoEnd = () => {
    setIsFadingOut(true);
    setTimeout(() => setIsVisible(false), 800);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      // Trim the last 3 seconds
      const targetDuration = Math.max(0.1, duration - 3);
      endTimeRef.current = targetDuration;
      
      // Calculate speed so the trimmed video plays in exactly 5 seconds
      const speed = targetDuration / 5;
      videoRef.current.playbackRate = speed;
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && endTimeRef.current > 0) {
      if (videoRef.current.currentTime >= endTimeRef.current && !isFadingOut) {
        videoRef.current.pause(); // pause so we don't see the trimmed part while fading
        handleVideoEnd();
        endTimeRef.current = 0;
      }
    }
  };

  // Failsafe in case video doesn't play automatically (browser policies)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isVisible && !isFadingOut) {
        handleVideoEnd();
      }
    }, 5500); // Failsafe after 5.5 seconds
    return () => clearTimeout(timer);
  }, [isVisible, isFadingOut]);

  if (!isVisible) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ease-in-out",
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100",
        // Defaulting to a transparent container but with dark overlay just in case
        // Using bg-[#051024] to match the brand color
        "bg-[#051024]"
      )}
    >
      <video 
        ref={videoRef}
        src={splashVideo}
        autoPlay
        muted
        playsInline
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        className="absolute inset-0 w-full h-full object-cover" 
      />
    </div>
  );
}
