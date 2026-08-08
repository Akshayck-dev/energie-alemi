import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { useTranslation } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Gas from './pages/Gas';
import Internet from './pages/Internet';
import Electricity from './pages/Electricity';
import About from './pages/About';
import Contact from './pages/Contact';
import SplashScreen from './components/SplashScreen';
import { ThemeProvider } from './contexts/ThemeContext';
import SEO from './components/SEO';

export default function App() {
  const { i18n } = useTranslation();

  // Handle RTL direction
  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <SEO />
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
    </HelmetProvider>
  );
}
