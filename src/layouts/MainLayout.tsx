import { useEffect } from 'react';
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
  
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, []);

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
