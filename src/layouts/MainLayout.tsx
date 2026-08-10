import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActionButtons from '../components/FloatingActionButtons';
import ScrollProgress from '../components/ScrollProgress';
import MobileBottomNav from '../components/MobileBottomNav';
import { useScrollAnimations } from '../hooks/useScrollAnimations';

gsap.registerPlugin(ScrollTrigger);

export default function MainLayout() {
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Guard against React StrictMode double-invoke.
    if (lenisRef.current) return;

    // Respect reduced motion in JS: disable Lenis entirely if preferred
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      syncTouch: false,   // native touch scroll on mobile
      autoRaf: false,     // explicitly false since we drive it via GSAP
    });

    lenisRef.current = lenis;

    // Keep GSAP ScrollTrigger positions in sync with Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis through the GSAP ticker (time comes in seconds → convert to ms)
    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0); // prevent GSAP from "catching up" after tab-switch lag

    return () => {
      lenis.off('scroll', ScrollTrigger.update);
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useScrollAnimations();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a1628]">
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <FloatingActionButtons />
      <MobileBottomNav />
    </div>
  );
}
