import { useState, useEffect, useRef } from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import splashVideo from '../assets/hero_splash_final.mp4';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setIsFadingOut(true);
    setTimeout(() => setIsVisible(false), 800);
  };

  // Failsafe in case video doesn't play automatically or gets stuck
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isVisible && !isFadingOut) {
        handleVideoEnd();
      }
    }, 4500); // 4.5 seconds gives the new video time to play
    return () => clearTimeout(timer);
  }, [isVisible, isFadingOut]);

  // Force play for mobile browsers that might ignore autoPlay attribute
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // If play fails, the failsafe timeout will handle removing the splash screen
      });
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ease-in-out",
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100",
        "bg-[#051024]"
      )}
    >
      <video 
        ref={videoRef}
        src={splashVideo}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80" 
      />
      
      {/* Animated Text Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        className="absolute top-[60%] left-0 right-0 z-10 flex flex-col items-center justify-center pointer-events-none"
      >
        <h1 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-[0.3em] uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
          Energie Alemi
        </h1>
      </motion.div>
    </div>
  );
}
