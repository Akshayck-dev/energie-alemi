import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressRef.current) return;

    // Use GSAP ScrollTrigger to sync exactly with Lenis's tick
    const animation = gsap.to(progressRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.1, // Slight scrub gives the same spring effect as framer-motion damping
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0047AB] via-[#f0a83f] to-[#0047AB] origin-left z-[9999]"
      style={{ transform: 'scaleX(0)' }}
    />
  );
}
