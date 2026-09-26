import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import MainLayout from './layouts/MainLayout';
import SplashScreen from './components/SplashScreen';
import { ThemeProvider } from './contexts/ThemeContext';
import { trackPageView } from './lib/analytics';

import Home from './pages/Home';
import Gas from './pages/Gas';
import Internet from './pages/Internet';
import Electricity from './pages/Electricity';
import About from './pages/About';
import Contact from './pages/Contact';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import NotFound from './pages/NotFound';
import StromanbieterAachen from './pages/StromanbieterAachen';
import GasanbieterAachen from './pages/GasanbieterAachen';
import InternetanbieterAachen from './pages/InternetanbieterAachen';
import StromanbieterStolberg from './pages/StromanbieterStolberg';
import GasanbieterStolberg from './pages/GasanbieterStolberg';
import InternetanbieterStolberg from './pages/InternetanbieterStolberg';
import StromanbieterEschweiler from './pages/StromanbieterEschweiler';
import GasanbieterEschweiler from './pages/GasanbieterEschweiler';
import InternetanbieterEschweiler from './pages/InternetanbieterEschweiler';

import FAQ from './pages/FAQ';
import RatgeberIndex from './pages/Ratgeber/RatgeberIndex';
import StromanbieterWechseln from './pages/Ratgeber/articles/StromanbieterWechseln';
import StromvergleichWoraufAchten from './pages/Ratgeber/articles/StromvergleichWoraufAchten';
import GasvergleichPassenderTarif from './pages/Ratgeber/articles/GasvergleichPassenderTarif';
import GasanbieterWechselnSchritt from './pages/Ratgeber/articles/GasanbieterWechselnSchritt';
import InternetanbieterVergleichen from './pages/Ratgeber/articles/InternetanbieterVergleichen';
import UmzugAachenStromGasInternet from './pages/Ratgeber/articles/UmzugAachenStromGasInternet';
import GrundversorgungAachenStromGas from './pages/Ratgeber/articles/GrundversorgungAachenStromGas';
import DslVsGlasfaserAachen from './pages/Ratgeber/articles/DslVsGlasfaserAachen';

export default function AppRoutes() {
  const { i18n } = useTranslation();

  // Handle RTL direction
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.dir = i18n.dir();
    }
  }, [i18n, i18n.language]);

  // Track SPA page views
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <SplashScreen />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/gas" element={<Gas />} />
          <Route path="/internet" element={<Internet />} />
          <Route path="/electricity" element={<Electricity />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          
          {/* FAQ Route */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/stromanbieter-aachen" element={<StromanbieterAachen />} />
          <Route path="/gasanbieter-aachen" element={<GasanbieterAachen />} />
          <Route path="/internetanbieter-aachen" element={<InternetanbieterAachen />} />
          <Route path="/stromanbieter-stolberg" element={<StromanbieterStolberg />} />
          <Route path="/gasanbieter-stolberg" element={<GasanbieterStolberg />} />
          <Route path="/internetanbieter-stolberg" element={<InternetanbieterStolberg />} />
          <Route path="/stromanbieter-eschweiler" element={<StromanbieterEschweiler />} />
          <Route path="/gasanbieter-eschweiler" element={<GasanbieterEschweiler />} />
          <Route path="/internetanbieter-eschweiler" element={<InternetanbieterEschweiler />} />
          
          {/* Ratgeber Routes */}
          <Route path="/ratgeber" element={<RatgeberIndex />} />
          <Route path="/ratgeber/stromanbieter-wechseln" element={<StromanbieterWechseln />} />
          <Route path="/ratgeber/stromvergleich" element={<StromvergleichWoraufAchten />} />
          <Route path="/ratgeber/gasvergleich" element={<GasvergleichPassenderTarif />} />
          <Route path="/ratgeber/gasanbieter-wechseln" element={<GasanbieterWechselnSchritt />} />
          <Route path="/ratgeber/internetanbieter-vergleichen" element={<InternetanbieterVergleichen />} />
          <Route path="/ratgeber/umzug-aachen-strom-gas-internet" element={<UmzugAachenStromGasInternet />} />
          <Route path="/ratgeber/grundversorgung-aachen-strom-gas" element={<GrundversorgungAachenStromGas />} />
          <Route path="/ratgeber/dsl-vs-glasfaser-aachen" element={<DslVsGlasfaserAachen />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
