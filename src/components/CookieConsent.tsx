import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Check, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { initializeConsentDefaults, grantAnalyticsConsent, revokeAnalyticsConsent } from '../lib/analytics';

const CONSENT_VERSION = 'v1';
const CONSENT_KEY = 'ea_cookie_consent';

export interface ConsentState {
  version: string;
  necessary: boolean;
  analytics: boolean;
  timestamp: number;
}

export function openCookieSettings() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('open-cookie-settings'));
  }
}

export default function CookieConsent() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    // Initialize default consent BEFORE checking saved state
    initializeConsentDefaults();

    const saved = localStorage.getItem(CONSENT_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as ConsentState;
        if (parsed.version === CONSENT_VERSION) {
          if (parsed.analytics) {
            grantAnalyticsConsent();
            setAnalyticsConsent(true);
          } else {
            revokeAnalyticsConsent();
          }
        } else {
          // Version mismatch, show banner again
          setIsOpen(true);
        }
      } catch (e) {
        setIsOpen(true);
      }
    } else {
      setIsOpen(true);
    }

    const handleOpenSettings = () => {
      setIsOpen(true);
      setShowSettings(true);
    };

    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  const saveConsent = (analytics: boolean) => {
    const state: ConsentState = {
      version: CONSENT_VERSION,
      necessary: true,
      analytics,
      timestamp: Date.now(),
    };
    
    localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
    
    if (analytics) {
      grantAnalyticsConsent();
    } else {
      revokeAnalyticsConsent();
    }
    
    setIsOpen(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => saveConsent(true);
  const handleRejectOptional = () => saveConsent(false);
  const handleSaveSettings = () => saveConsent(analyticsConsent);

  // If user prefers reduced motion, disable animations
  const reduceMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { y: 100, opacity: 0 }}
          animate={reduceMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-white dark:bg-[#0f2341] rounded-[24px] shadow-2xl border border-slate-200 dark:border-white/10 pointer-events-auto overflow-hidden">
            {!showSettings ? (
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="text-[#0047AB] dark:text-[#60a5fa] w-6 h-6" />
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t('cookie_consent.title')}</h2>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed">
                    {t('cookie_consent.description')}
                  </p>
                </div>
                
                <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-3 min-w-[200px]">
                  <button 
                    onClick={handleAcceptAll}
                    className="w-full py-3 px-6 bg-[#0047AB] hover:bg-[#003380] text-white rounded-full font-bold transition-colors focus:ring-4 focus:ring-[#0047AB]/30 outline-none"
                  >
                    {t('cookie_consent.acceptAll')}
                  </button>
                  <button 
                    onClick={handleRejectOptional}
                    className="w-full py-3 px-6 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-white rounded-full font-bold transition-colors focus:ring-4 focus:ring-slate-200 dark:focus:ring-white/20 outline-none"
                  >
                    {t('cookie_consent.necessaryOnly')}
                  </button>
                  <button 
                    onClick={() => setShowSettings(true)}
                    className="w-full py-2 px-6 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 outline-none focus:underline"
                  >
                    <Settings size={14} />
                    {t('cookie_consent.settings')}
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-100 dark:border-white/10">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t('cookie_consent.settingsTitle')}</h2>
                  <button 
                    onClick={() => setShowSettings(false)}
                    className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-white/10"
                    aria-label={t('cookie_consent.cancel')}
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-6 mb-8 max-h-[50vh] overflow-y-auto pr-2">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-md bg-[#0047AB]/20 flex items-center justify-center">
                        <Check size={14} className="text-[#0047AB] dark:text-[#60a5fa]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white mb-1">{t('cookie_consent.necessaryTitle')}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {t('cookie_consent.necessaryDesc')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 dark:border-white/10">
                    <div className="mt-1">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={analyticsConsent}
                          onChange={(e) => setAnalyticsConsent(e.target.checked)}
                        />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0047AB]/30 dark:peer-focus:ring-[#60a5fa]/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#0047AB] dark:peer-checked:bg-[#60a5fa]"></div>
                      </label>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white mb-1">{t('cookie_consent.analyticsTitle')}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {t('cookie_consent.analyticsDesc')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-100 dark:border-white/10">
                  <button 
                    onClick={handleSaveSettings}
                    className="flex-1 py-3 px-6 bg-[#0047AB] hover:bg-[#003380] text-white rounded-full font-bold transition-colors focus:ring-4 focus:ring-[#0047AB]/30 outline-none"
                  >
                    {t('cookie_consent.saveSelection')}
                  </button>
                  <button 
                    onClick={handleAcceptAll}
                    className="flex-1 py-3 px-6 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-white rounded-full font-bold transition-colors focus:ring-4 focus:ring-slate-200 dark:focus:ring-white/20 outline-none"
                  >
                    {t('cookie_consent.acceptAll')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
