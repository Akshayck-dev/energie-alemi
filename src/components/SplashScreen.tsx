import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import brandLogo from '../assets/logo_transparent.png';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1200; // 1.2 seconds loading progress
    const intervalTime = 25;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsFadingOut(true);
          setTimeout(() => setIsVisible(false), 500); // 500ms fadeout transition
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out",
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100",
        "bg-white dark:bg-[#0a1628]" 
      )}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo Container */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
          <style>{`
            @keyframes logoReveal {
              0% { opacity: 0; transform: scale(0.9) translateY(10px); filter: blur(4px); }
              100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0px); }
            }
            .splash-logo {
              animation: logoReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            @media (prefers-reduced-motion: reduce) {
              .splash-logo { animation: none; opacity: 1; transform: scale(1); filter: blur(0); }
            }
          `}</style>
          <img 
            src={brandLogo}
            alt="Energie Alemi Logo"
            className="w-full h-full object-contain splash-logo dark:brightness-0 dark:invert" 
          />
        </div>

        {/* Premium Progress Bar */}
        <div className="w-40 h-[3px] bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden relative">
          <div 
            className="h-full bg-gradient-to-r from-[#0047AB] via-[#f0a83f] to-[#0047AB] rounded-full shadow-[0_0_8px_rgba(79,140,255,0.5)] transition-all ease-out duration-[30ms]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
