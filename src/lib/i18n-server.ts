import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fs from 'fs';
import path from 'path';

// Helper to load translations directly from the local filesystem during build
function loadLocale(lng: string) {
  try {
    const localePath = path.join(process.cwd(), `public/locales/${lng}/translation.json`);
    return JSON.parse(fs.readFileSync(localePath, 'utf-8'));
  } catch (e) {
    return {};
  }
}

// Initialize i18next synchronously with filesystem translations
i18n
  .use(initReactI18next)
  .init({
    lng: 'de',
    fallbackLng: 'de',
    supportedLngs: ['de', 'en', 'ar', 'tr'],
    resources: {
      de: { translation: loadLocale('de') },
      en: { translation: loadLocale('en') },
      ar: { translation: loadLocale('ar') },
      tr: { translation: loadLocale('tr') }
    },
    interpolation: {
      escapeValue: false, // React already safeguards against XSS
    }
  });

export default i18n;
