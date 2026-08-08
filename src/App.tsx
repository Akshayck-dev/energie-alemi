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
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gas" element={<Gas />} />
          <Route path="/internet" element={<Internet />} />
          <Route path="/electricity" element={<Electricity />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
