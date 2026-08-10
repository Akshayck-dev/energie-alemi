import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { cn } from '../lib/utils';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'ar', name: 'العربية' },
  { code: 'fa', name: 'فارسی' }
];

export default function LanguageSwitcher({ isScrolled = true }: { isScrolled?: boolean }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-10 h-10 rounded-full border flex items-center justify-center transition-colors",
          isScrolled
            ? "border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"
            : "border-white/20 text-white/80 hover:bg-white/10 hover:text-white"
        )}
        aria-label="Change language"
      >
        <Globe size={18} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-xl bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 shadow-lg overflow-hidden z-50">
          <div className="py-1">
            {languages.map((lng) => (
              <button
                key={lng.code}
                onClick={() => changeLanguage(lng.code)}
                className={cn(
                  'w-full text-left px-4 py-2 text-sm transition-colors',
                  i18n.language === lng.code
                    ? 'bg-slate-100 dark:bg-white/10 font-semibold text-slate-900 dark:text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'
                )}
              >
                {lng.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
