import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../lib/utils';
import Button from './ui/Button';
import logoVideo from '../assets/Animate_the_attached_logo_in_a (1).mp4';
import { useTheme } from '../contexts/ThemeContext';
import LanguageSwitcher from './LanguageSwitcher';

const navLinks = [
  { key: 'home', path: '/' },
  { key: 'electricity', path: '/electricity' },
  { key: 'gas', path: '/gas' },
  { key: 'internet', path: '/internet' },
  { key: 'about_us', path: '/about' },
  { key: 'contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

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
            ? 'bg-white dark:bg-[#0a1628]/70 backdrop-blur-xl py-2 md:py-3 px-5 md:px-8 rounded-full border border-slate-200 dark:border-white/10 shadow-sm max-w-5xl' 
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
            <video
              src={logoVideo}
              autoPlay
              muted
              loop
              playsInline
              className="h-[140%] w-auto max-w-none object-cover mix-blend-multiply dark:mix-blend-screen dark:invert dark:brightness-125 pointer-events-none"
            />
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
                  isScrolled
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
          <LanguageSwitcher isScrolled={isScrolled} />
          <button 
            onClick={toggleTheme} 
            className={cn(
              "w-10 h-10 rounded-full border flex items-center justify-center transition-colors",
              isScrolled
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
          <LanguageSwitcher isScrolled={isScrolled} />
          <button 
            onClick={toggleTheme} 
            className={cn(
              "w-10 h-10 rounded-full border flex items-center justify-center transition-colors z-50 pointer-events-auto",
              isScrolled
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
              isScrolled ? "text-slate-900 dark:text-white" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-slate-50 dark:bg-[#051024] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out pointer-events-auto",
          mobileMenuOpen ? "translate-x-0" : (i18n.dir() === 'rtl' ? "-translate-x-full" : "translate-x-full")
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.key}
            to={link.path}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-heading font-bold text-slate-900 dark:text-white hover:text-[#0047AB] transition-colors"
          >
            {t(`nav.${link.key}`)}
          </Link>
        ))}
        <Button variant="primary" icon={<ArrowRight size={16} className={cn("transition-transform", i18n.dir() === 'rtl' && "rotate-180")} />} onClick={() => setMobileMenuOpen(false)}>
          {t('nav.get_in_touch')}
        </Button>
      </div>
    </div>
  );
}
