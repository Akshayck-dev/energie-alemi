import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import brandLogo from '../assets/logo_transparent.webp';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleEnd = () => {
    setIsFadingOut(true);
    setTimeout(() => setIsVisible(false), 800);
  };

  // Reduced failsafe timer since CSS animation is faster
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isVisible && !isFadingOut) {
        handleEnd();
      }
    }, 1500); 
    return () => clearTimeout(timer);
  }, [isVisible, isFadingOut]);

  if (!isVisible) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ease-in-out",
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100",
        "bg-white dark:bg-[#0a1628]" 
      )}
    >
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
        <style>{`
          @keyframes logoReveal {
            0% { opacity: 0; transform: scale(0.8); filter: blur(4px); }
            100% { opacity: 1; transform: scale(1); filter: blur(0px); }
          }
          .splash-logo {
            animation: logoReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          @media (prefers-reduced-motion: reduce) {
            .splash-logo { animation: none; opacity: 1; transform: scale(1); filter: blur(0); }
          }
        `}</style>
        <img 
          src={brandLogo}
          alt="Energie Alemi Logo"
          className="w-full h-full object-contain splash-logo" 
        />
      </div>
    </div>
  );
}
