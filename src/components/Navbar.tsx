import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '../lib/utils';
import Button from './ui/Button';
import LogoVideo from './LogoVideo';
import { useTheme } from '../contexts/ThemeContext';
import LanguageSwitcher from './LanguageSwitcher';

const navLinks = [
  { key: 'home', path: '/' },
  { key: 'electricity', path: '/electricity' },
  { key: 'gas', path: '/gas' },
  { key: 'internet', path: '/internet' },
  { key: 'ratgeber', path: '/ratgeber' },
  { key: 'about_us', path: '/about' },
  { key: 'contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  // Pages with a dark hero section background (where white text is needed at the top)
  const hasDarkHero = ['/', '/electricity', '/gas', '/internet'].includes(location.pathname);
  // If we are at the top of a page WITHOUT a dark hero, force the adaptive (dark/light mode aware) text styling
  const useAdaptiveText = isScrolled || !hasDarkHero;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pointer-events-none px-4 md:px-8 mt-2 md:mt-6 transition-all duration-500">
      <nav
        className={cn(
          'pointer-events-auto transition-all duration-500 w-full flex items-center justify-between transform-gpu',
          isScrolled 
            ? 'bg-white/85 dark:bg-[#0a1628]/70 backdrop-blur-xl py-2 md:py-3 px-5 md:px-8 rounded-full border border-slate-200 dark:border-white/10 shadow-lg shadow-slate-200/20 dark:shadow-none max-w-5xl' 
            : 'bg-transparent py-2 md:py-0 px-2 md:px-0 max-w-[1400px]'
        )}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center z-50 shrink-0 pointer-events-auto">
          <div 
            className={cn(
              "relative overflow-hidden flex items-center justify-center rounded-xl shrink-0 transition-all duration-500",
              isScrolled ? "h-8 w-8 md:h-10 md:w-10" : "h-10 w-10 md:h-14 md:w-14"
            )}
          >
            <LogoVideo className="h-[140%] w-auto max-w-none object-cover mix-blend-multiply dark:mix-blend-screen dark:invert dark:brightness-125" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.key}
                to={link.path}
                className={cn(
                  "relative text-sm font-semibold transition-colors group",
                  useAdaptiveText
                    ? "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    : "text-white/80 hover:text-white"
                )}
              >
                {t(`nav.${link.key}`)}
                <span 
                  className={cn(
                    "absolute -bottom-2 rtl:right-0 ltr:left-0 h-[2px] bg-[#0047AB] transition-all duration-300",
                    i18n.dir() === 'rtl' ? (isActive ? "w-full" : "w-0 group-hover:w-full right-0") : (isActive ? "w-full" : "w-0 group-hover:w-full left-0")
                  )}
                  style={{
                    [i18n.dir() === 'rtl' ? 'right' : 'left']: 0,
                  }}
                />
              </Link>
            )
          })}
        </div>

        {/* CTA and Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher isScrolled={useAdaptiveText} />
          <button 
            onClick={toggleTheme} 
            className={cn(
              "w-10 h-10 rounded-full border flex items-center justify-center transition-colors",
              useAdaptiveText
                ? "border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"
                : "border-white/20 text-white/80 hover:bg-white/10 hover:text-white"
            )}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button variant="primary" icon={<ArrowRight size={16} className={cn("transition-transform", i18n.dir() === 'rtl' && "rotate-180")} />}>
            {t('nav.get_in_touch')}
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher isScrolled={useAdaptiveText} />
          <button 
            onClick={toggleTheme} 
            className={cn(
              "w-10 h-10 rounded-full border flex items-center justify-center transition-colors z-50 pointer-events-auto",
              useAdaptiveText
                ? "border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"
                : "border-white/20 text-white/80 hover:bg-white/10 hover:text-white"
            )}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            className={cn(
              "z-50 shrink-0 pointer-events-auto",
              useAdaptiveText ? "text-slate-900 dark:text-white" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[90] pointer-events-auto"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: i18n.dir() === 'rtl' ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: i18n.dir() === 'rtl' ? '-100%' : '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 bottom-0 ltr:right-0 rtl:left-0 w-[85%] max-w-sm bg-white dark:bg-[#0a1628] z-[100] shadow-2xl flex flex-col pointer-events-auto overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-white/10">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                  <div className="relative overflow-hidden flex items-center justify-center rounded-xl shrink-0 h-10 w-10">
                    <LogoVideo className="h-[140%] w-auto max-w-none object-cover mix-blend-multiply dark:mix-blend-screen dark:invert dark:brightness-125" />
                  </div>
                  <span className="font-heading font-bold text-lg text-slate-900 dark:text-white">Energie Alemi</span>
                </Link>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 -mr-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
                {navLinks.map((link, i) => {
                  const isPrimary = ['home', 'electricity', 'gas', 'internet'].includes(link.key);
                  return (
                    <motion.div
                      key={link.key}
                      initial={{ opacity: 0, x: i18n.dir() === 'rtl' ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                    >
                      {i === 4 && (
                         <div className="w-full h-px bg-slate-100 dark:bg-white/10 mb-5" />
                      )}
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "block font-heading font-bold transition-colors",
                          isPrimary 
                            ? "text-2xl text-slate-900 dark:text-white hover:text-[#0047AB] dark:hover:text-[#f0a83f]" 
                            : "text-lg text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white"
                        )}
                      >
                        {t(`nav.${link.key}`)}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="p-6 border-t border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-[#051024]"
              >
                <Button 
                  variant="primary" 
                  className="w-full justify-center shadow-lg"
                  icon={<ArrowRight size={18} className={cn("transition-transform", i18n.dir() === 'rtl' && "rotate-180")} />} 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.get_in_touch')}
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
