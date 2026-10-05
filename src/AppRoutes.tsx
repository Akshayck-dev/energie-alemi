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
import StromanbieterHerzogenrath from './pages/StromanbieterHerzogenrath';
import GasanbieterHerzogenrath from './pages/GasanbieterHerzogenrath';
import InternetanbieterHerzogenrath from './pages/InternetanbieterHerzogenrath';
import StromanbieterWuerselen from './pages/StromanbieterWuerselen';
import GasanbieterWuerselen from './pages/GasanbieterWuerselen';
import InternetanbieterWuerselen from './pages/InternetanbieterWuerselen';
import EnergieFragen from './pages/EnergieFragen';

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

import StromAnmeldenUmzug from './pages/Ratgeber/articles/StromAnmeldenUmzug';
import Stromverbrauch1Person from './pages/Ratgeber/articles/Stromverbrauch1Person';
import Stromverbrauch2Personen from './pages/Ratgeber/articles/Stromverbrauch2Personen';
import Stromverbrauch4Personen from './pages/Ratgeber/articles/Stromverbrauch4Personen';
import StromkostenBerechnen from './pages/Ratgeber/articles/StromkostenBerechnen';
import GasAnmeldenUmzug from './pages/Ratgeber/articles/GasAnmeldenUmzug';
import GasverbrauchBerechnen from './pages/Ratgeber/articles/GasverbrauchBerechnen';
import GaspreiseVerstehen from './pages/Ratgeber/articles/GaspreiseVerstehen';

import EnergieberaterAachen from './pages/Ratgeber/articles/EnergieberaterAachen';
export default function AppRoutes() {
  const { i18n } = useTranslation();

  // Handle RTL direction
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.dir = i18n.dir();
    }
  }, [i18n, i18n.language]);

  // Track SPA page views and global clicks
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href') || '';
      if (href.includes('wa.me')) {
        window.gtag?.('event', 'whatsapp_click', { page_path: location.pathname });
      } else if (href.startsWith('tel:')) {
        window.gtag?.('event', 'phone_click', { page_path: location.pathname });
      } else if (href.includes('google.com/maps') || href.includes('maps.google.com') || href.includes('maps.app.goo.gl')) {
        window.gtag?.('event', 'maps_click', { page_path: location.pathname });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
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
          <Route path="/stromanbieter-herzogenrath" element={<StromanbieterHerzogenrath />} />
          <Route path="/gasanbieter-herzogenrath" element={<GasanbieterHerzogenrath />} />
          <Route path="/internetanbieter-herzogenrath" element={<InternetanbieterHerzogenrath />} />
          <Route path="/stromanbieter-wuerselen" element={<StromanbieterWuerselen />} />
          <Route path="/gasanbieter-wuerselen" element={<GasanbieterWuerselen />} />
          <Route path="/internetanbieter-wuerselen" element={<InternetanbieterWuerselen />} />
          <Route path="/energie-fragen" element={<EnergieFragen />} />
          
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
          
                <Route path="/ratgeber/strom-anmelden-umzug" element={<StromAnmeldenUmzug />} />
      <Route path="/ratgeber/stromverbrauch-1-person" element={<Stromverbrauch1Person />} />
      <Route path="/ratgeber/stromverbrauch-2-personen" element={<Stromverbrauch2Personen />} />
      <Route path="/ratgeber/stromverbrauch-4-personen" element={<Stromverbrauch4Personen />} />
      <Route path="/ratgeber/stromkosten-berechnen" element={<StromkostenBerechnen />} />
      <Route path="/ratgeber/gas-anmelden-umzug" element={<GasAnmeldenUmzug />} />
      <Route path="/ratgeber/gasverbrauch-berechnen" element={<GasverbrauchBerechnen />} />
      <Route path="/ratgeber/gaspreise-verstehen" element={<GaspreiseVerstehen />} />
            <Route path="/ratgeber/energieberater-aachen" element={<EnergieberaterAachen />} />
<Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
