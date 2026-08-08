import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { useTranslation } from 'react-i18next';
import Lenis from 'lenis';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Gas from './pages/Gas';
import Internet from './pages/Internet';
import Electricity from './pages/Electricity';
import About from './pages/About';
import Contact from './pages/Contact';
import SplashScreen from './components/SplashScreen';
import { ThemeProvider } from './contexts/ThemeContext';

import { useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/gas" element={<PageTransition><Gas /></PageTransition>} />
          <Route path="/internet" element={<PageTransition><Internet /></PageTransition>} />
          <Route path="/electricity" element={<PageTransition><Electricity /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const { i18n } = useTranslation();

  // Handle RTL direction
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <SplashScreen />
        <AnimatedRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
