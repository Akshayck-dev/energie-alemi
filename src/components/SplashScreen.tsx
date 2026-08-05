import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import splashVideo from '../assets/splash.mp4';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleVideoEnd = () => {
    setIsFadingOut(true);
    setTimeout(() => setIsVisible(false), 800);
  };

  // Failsafe in case video doesn't play automatically (browser policies)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isVisible && !isFadingOut) {
        handleVideoEnd();
      }
    }, 8000); // Max 8 seconds before auto-dismiss
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
        src={splashVideo}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover" 
      />
    </div>
  );
}
