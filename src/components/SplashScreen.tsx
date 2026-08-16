import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import brandLogo from '../assets/logo_transparent.webp';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 767) {
      return false;
    }
    return true;
  });
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 767) {
      setIsVisible(false);
      return;
    }
    let timer: ReturnType<typeof setInterval>;
    let fadeTimeout: ReturnType<typeof setTimeout>;
    let isListenerAdded = false;

    const triggerFadeOut = () => {
      clearInterval(timer);
      setProgress(100);
      setIsFadingOut(true);
      fadeTimeout = setTimeout(() => setIsVisible(false), 300);
    };

    const handleHeroLoaded = () => {
      triggerFadeOut();
    };

    if (window.__heroImageLoaded) {
      triggerFadeOut();
    } else {
      const duration = 1500; // 1.5 seconds fallback progress duration
      const intervalTime = 25;
      const step = 100 / (duration / intervalTime);

      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            triggerFadeOut();
            return 100;
          }
          return prev + step;
        });
      }, intervalTime);

      window.addEventListener('hero-image-loaded', handleHeroLoaded);
      isListenerAdded = true;
    }

    return () => {
      clearInterval(timer);
      clearTimeout(fadeTimeout);
      if (isListenerAdded) {
        window.removeEventListener('hero-image-loaded', handleHeroLoaded);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        @keyframes splashLogoReveal {
          0%   { opacity: 0; transform: scale(0.85) translateY(12px); filter: blur(6px); }
          100% { opacity: 1; transform: scale(1)    translateY(0);    filter: blur(0px); }
        }
        @keyframes splashBarGlow {
          0%, 100% { box-shadow: 0 0 6px 2px rgba(0, 71, 171, 0.4); }
          50%       { box-shadow: 0 0 14px 4px rgba(240, 168, 63, 0.6); }
        }
        .splash-logo-img {
          animation: splashLogoReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .splash-bar-fill {
          animation: splashBarGlow 1.4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .splash-logo-img { animation: none; opacity: 1; transform: none; filter: none; }
          .splash-bar-fill { animation: none; }
        }
      `}</style>

      <div
        className={cn(
          // Full-screen overlay, flex column centred both axes
          'fixed inset-0 z-[9999]',
          'splash-overlay-container',
          'flex flex-col items-center justify-center',
          'transition-opacity duration-500 ease-in-out',
          isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100',
          'bg-white dark:bg-[#0a1628]',
        )}
      >
        {/* ── Inner wrapper: keeps logo + bar together and centred ── */}
        <div className="flex flex-col items-center justify-center gap-8 w-full px-4">

          {/* ── Logo ── responsive: 120 px → 160 px → 200 px ── */}
          <div
            className={cn(
              'flex items-center justify-center',
              // Responsive sizing: mobile / tablet / desktop
              'w-[120px] h-[120px]',
              'sm:w-[160px] sm:h-[160px]',
              'md:w-[200px] md:h-[200px]',
            )}
          >
            <img
              src={brandLogo}
              alt="Energie Alemi Logo"
              className="splash-logo-img dark:brightness-0 dark:invert"
              // Hint the browser about the image dimensions so it never clips
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>

          {/* ── Progress bar ── */}
          <div
            className={cn(
              'relative rounded-full overflow-hidden',
              'bg-slate-100 dark:bg-white/10',
              // Responsive width: narrow on mobile, wider on larger screens
              'w-[140px] sm:w-[180px] md:w-[220px]',
              'h-[3px] sm:h-[3px] md:h-[4px]',
            )}
          >
            <div
              className="splash-bar-fill h-full rounded-full bg-gradient-to-r from-[#0047AB] via-[#f0a83f] to-[#0047AB] transition-all ease-out duration-[30ms]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
