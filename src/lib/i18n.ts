import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import deTranslation from '../../public/locales/de/translation.json';
import enTranslation from '../../public/locales/en/translation.json';
import arTranslation from '../../public/locales/ar/translation.json';
import faTranslation from '../../public/locales/fa/translation.json';

/**
 * Map any browser locale to one of our four supported languages.
 * Anything not explicitly matched falls back to English.
 *
 * Examples:
 *   de, de-AT, de-CH  → de
 *   ar, ar-SA, ar-EG  → ar
 *   fa, fa-IR, fa-AF  → fa
 *   en-IN, hi-IN, en-US, fr, ... → en
 */
function mapLocaleToSupported(locale: string): string {
  const prefix = locale.split('-')[0].toLowerCase();
  if (prefix === 'de') return 'de';
  if (prefix === 'ar') return 'ar';
  if (prefix === 'fa') return 'fa';
  return 'en'; // Default for every other language / country
}

/**
 * Resolve the initial language:
 *   1. If the user has previously chosen a language (stored in localStorage) → honour it.
 *   2. Otherwise detect from browser locale and map to a supported language.
 */
function resolveInitialLanguage(): string {
  const stored = typeof window !== 'undefined'
    ? localStorage.getItem('i18nextLng')
    : null;

  if (stored && ['de', 'en', 'ar', 'fa'].includes(stored)) {
    return stored;
  }

  const browserLocale =
    typeof navigator !== 'undefined'
      ? navigator.language || (navigator as unknown as { userLanguage?: string }).userLanguage || 'en'
      : 'en';

  return mapLocaleToSupported(browserLocale);
}

const initialLanguage = resolveInitialLanguage();

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: deTranslation },
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
      fa: { translation: faTranslation },
    },
    lng: initialLanguage,           // Resolved language (not left to detector guessing)
    fallbackLng: 'en',              // Always fall back to English, never German
    supportedLngs: ['de', 'en', 'ar', 'fa'],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'cookie'],
      caches: ['localStorage', 'cookie'],
    },
  });

i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng;
    document.documentElement.dir = ['ar', 'fa'].includes(lng) ? 'rtl' : 'ltr';
  }
});

// Apply direction for the initial language immediately
if (typeof document !== 'undefined') {
  document.documentElement.lang = initialLanguage;
  document.documentElement.dir = ['ar', 'fa'].includes(initialLanguage) ? 'rtl' : 'ltr';
}

export default i18n;
