import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import splashImg from '../assets/hero_splash_transparent.webp';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleEnd = () => {
    setIsFadingOut(true);
    setTimeout(() => setIsVisible(false), 800);
  };

  // Failsafe timer: WebP is 10s, but let's keep the splash short (4.5s) to not block the user too long
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isVisible && !isFadingOut) {
        handleEnd();
      }
    }, 4500); 
    return () => clearTimeout(timer);
  }, [isVisible, isFadingOut]);

  if (!isVisible) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ease-in-out",
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100",
        "bg-white" 
      )}
    >
      <img 
        src={splashImg}
        alt="Splash Animation"
        className="absolute inset-0 w-full h-full object-contain scale-50 sm:scale-75 md:scale-[0.6]" 
      />
    </div>
  );
}
