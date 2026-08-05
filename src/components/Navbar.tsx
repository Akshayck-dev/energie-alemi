import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';
import Button from './ui/Button';
import logo from '../assets/logo_transparent.png';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'ELECTRICITY', path: '/electricity' },
  { name: 'GAS', path: '/gas' },
  { name: 'INTERNET', path: '/internet' },
  { name: 'ABOUT US', path: '/about' },
  { name: 'CONTACT', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

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
        <Link to="/" className="flex items-center z-50 shrink-0">
          <img 
            src={logo} 
            alt="Energie Alemi Logo" 
            className={cn(
              "w-auto object-contain transition-all duration-500 dark:brightness-0 dark:invert",
              isScrolled ? "h-8 md:h-10" : "h-10 md:h-14"
            )} 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:text-white transition-colors group"
              >
                {link.name}
                <span 
                  className={cn(
                    "absolute -bottom-2 left-0 h-[2px] bg-[#0047AB] transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            )
          })}
        </div>

        {/* CTA and Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button variant="primary" icon={<ArrowRight size={16} />}>
            Get in touch
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button 
            onClick={toggleTheme} 
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors z-50 pointer-events-auto"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            className="text-slate-900 dark:text-white z-50 shrink-0 pointer-events-auto"
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
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-heading font-bold text-slate-900 dark:text-white hover:text-[#0047AB] transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Button variant="primary" icon={<ArrowRight size={16} />} onClick={() => setMobileMenuOpen(false)}>
          Get in touch
        </Button>
      </div>
    </div>
  );
}
