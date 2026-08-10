import { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

export type OptimizedVideoProps = {
  desktopMp4: string;
  mobileMp4?: string;
  desktopWebm?: string;
  mobileWebm?: string;
  poster: string;
  mobilePoster?: string;
  priority?: boolean;
  className?: string;
  decorative?: boolean;
  active?: boolean;
  style?: React.CSSProperties;
};

export default function OptimizedVideo({
  desktopMp4,
  mobileMp4,
  desktopWebm,
  mobileWebm,
  poster,
  mobilePoster,
  priority = false,
  className,
  decorative = true,
  active = true,
  style,
}: OptimizedVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Safe SSR initial values (no window or document references)
  const [isInRange, setIsInRange] = useState(priority);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isDataSaver, setIsDataSaver] = useState(false);
  const [isTabHidden, setIsTabHidden] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Setup device preference listeners on mount to avoid server hydration warnings
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Check for reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);

    // 2. Check for data saver mode using custom typecast
    const nav = navigator as any;
    if (nav.connection && 'saveData' in nav.connection) {
      setIsDataSaver(!!nav.connection.saveData);
    }

    // 3. Track page/tab hidden state to pause background renders
    setIsTabHidden(document.hidden);
    const handleVisibilityChange = () => {
      setIsTabHidden(document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Setup pre-load range Observer (loads source when close to viewport)
  useEffect(() => {
    if (priority || isReducedMotion || isDataSaver) return;

    const container = containerRef.current;
    if (!container) return;

    const rangeObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInRange(true);
          rangeObserver.disconnect(); // Keep sources loaded once intersected
        }
      },
      { rootMargin: '400px' } // Preload 400px before section enters viewport
    );

    rangeObserver.observe(container);

    return () => {
      rangeObserver.disconnect();
    };
  }, [priority, isReducedMotion, isDataSaver]);

  // Setup visibility observer for play/pause control
  useEffect(() => {
    if (isReducedMotion || isDataSaver) return;

    const container = containerRef.current;
    if (!container) return;

    const playObserver = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    playObserver.observe(container);

    return () => {
      playObserver.disconnect();
    };
  }, [isReducedMotion, isDataSaver]);

  // Handle Play/Pause execution
  useEffect(() => {
    const video = videoRef.current;
    if (!video || isReducedMotion || isDataSaver) return;

    const shouldPlay = active && isIntersecting && !isTabHidden;

    if (shouldPlay) {
      if (video.paused) {
        // Reset playing head to 0 to prevent frame freezing or mid-timeline starting
        video.currentTime = 0;
        video.play().catch((err) => {
          console.warn('OptimizedVideo play rejected:', err);
        });
      }
    } else {
      if (!video.paused) {
        video.pause();
      }
    }
  }, [active, isIntersecting, isTabHidden, isReducedMotion, isDataSaver]);

  // Run video.load() manually when video becomes range-active
  useEffect(() => {
    const video = videoRef.current;
    if (video && isInRange) {
      video.load();
    }
  }, [isInRange]);

  // Poster matching based on screen size
  const resolvedPoster = mobilePoster && typeof window !== 'undefined' && window.innerWidth <= 768
    ? mobilePoster
    : poster;

  const disableVideo = isReducedMotion || (isDataSaver && !priority);
  const showVideoSource = isInRange && !disableVideo;

  const hasPositioning = className?.includes('absolute') || className?.includes('fixed') || className?.includes('relative');

  return (
    <div 
      ref={containerRef} 
      className={cn(!hasPositioning && "relative", className)}
      style={style}
    >
      {/* Poster Image (Visible initially, fades out when video is ready to play) */}
      <img
        src={resolvedPoster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          zIndex: 1,
          opacity: isVideoLoaded ? 0 : 1,
          transition: 'opacity 800ms ease-in-out',
        }}
      />

      {/* Video Element */}
      {!disableVideo && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          aria-hidden={decorative ? "true" : undefined}
          preload={priority ? "metadata" : "none"}
          onPlaying={() => setIsVideoLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            zIndex: 0,
            opacity: isVideoLoaded ? 1 : 0,
            transition: 'opacity 800ms ease-in-out',
          }}
        >
          {showVideoSource && (
            <>
              {mobileWebm && <source src={mobileWebm} type="video/webm" media="(max-width: 768px)" />}
              {mobileMp4 && <source src={mobileMp4} type="video/mp4" media="(max-width: 768px)" />}
              {desktopWebm && <source src={desktopWebm} type="video/webm" media="(min-width: 769px)" />}
              <source src={desktopMp4} type="video/mp4" />
            </>
          )}
        </video>
      )}
    </div>
  );
}
