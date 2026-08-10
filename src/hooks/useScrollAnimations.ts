import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
  useEffect(() => {
    // Only animate explicitly marked elements — avoids creating hundreds
    // of ScrollTrigger instances on every section > div > div
    const fadeUpElements = document.querySelectorAll('[data-animate="fade-up"]');

    if (fadeUpElements.length === 0) {
      ScrollTrigger.refresh();
      return;
    }

    // Batch for better performance — one IntersectionObserver instead of N ScrollTriggers
    ScrollTrigger.batch(fadeUpElements, {
      onEnter: (elements) => {
        gsap.fromTo(
          elements,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.08,
            overwrite: true,
          }
        );
      },
      start: 'top 88%',
      once: true, // only play once — no reverse causing reflows
    });

    // Refresh after images may have loaded
    const timer = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
