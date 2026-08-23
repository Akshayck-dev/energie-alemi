import { Link } from 'react-router';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LogoVideo from './LogoVideo';
import { cn } from '../lib/utils';
import { openCookieSettings } from './CookieConsent';
import { trackEvent } from '../lib/analytics';

export default function Footer() {
  const { t, i18n } = useTranslation();

  const quickLinks = [
    { key: 'electricity', path: '/electricity', name: t('nav.electricity') },
    { key: 'gas', path: '/gas', name: t('nav.gas') },
    { key: 'internet', path: '/internet', name: t('nav.internet') },
    { key: 'ratgeber', path: '/ratgeber', name: t('nav.ratgeber') },
    { key: 'faq', path: '/faq', name: t('nav.faq', 'FAQ') },
    { key: 'about_us', path: '/about', name: t('nav.about_us') },
    { key: 'contact', path: '/contact', name: t('nav.contact') },
    { key: 'impressum', path: '/impressum', name: 'Impressum' },
    { key: 'datenschutz', path: '/datenschutz', name: 'Datenschutz' }
  ];

  return (
    <footer className="bg-white dark:bg-[#051024] pt-12 md:pt-20 pb-32 md:pb-8 border-t border-slate-200 dark:border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-12 lg:gap-8 mb-12 md:mb-16 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="flex items-center">
              <div className="relative w-20 h-20 overflow-hidden flex items-center justify-center rounded-xl shrink-0">
                <LogoVideo className="w-full h-full" />
              </div>
            </Link>
            <div>
              <p className="text-slate-600 dark:text-white/80 font-medium text-lg">{t('footer.smart_advice')}</p>
              <p className="text-[#0047AB] dark:text-[#4F8CFF] font-bold text-lg">{t('footer.lower_costs')}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <h2 className="font-heading font-bold text-slate-900 dark:text-white text-xl">{t('footer.contact')}</h2>
            <ul className="flex flex-col items-center md:items-start gap-4">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-slate-600 dark:text-white/80">
                <Phone size={20} className="md:mt-0.5 text-[#0047AB] dark:text-[#f0a83f]" />
                <a 
                  href="tel:+4917665949390" 
                  onClick={() => trackEvent('phone_click', { cta_location: 'footer', page_path: window.location.pathname })}
                  className="hover:text-[#0047AB] dark:hover:text-[#f0a83f] transition-colors"
                >
                  0176 659 493 90
                </a>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-slate-600 dark:text-white/80">
                <Mail size={20} className="md:mt-0.5 text-[#0047AB] dark:text-[#f0a83f]" />
                <a 
                  href="mailto:info@energie-alemi.de" 
                  onClick={() => trackEvent('email_click', { cta_location: 'footer', page_path: window.location.pathname })}
                  className="hover:text-[#0047AB] dark:hover:text-[#f0a83f] transition-colors"
                >
                  info@energie-alemi.de
                </a>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-slate-600 dark:text-white/80">
                <MapPin size={20} className="md:mt-0.5 text-[#0047AB] dark:text-[#f0a83f]" />
                <a 
                  href="https://maps.google.com/?q=Alexianergraben+9,+52064+Aachen" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#0047AB] dark:hover:text-[#f0a83f] transition-colors text-center md:text-left"
                >
                  Alexianergraben 9<br className="hidden md:block" /> <span className="md:hidden">, </span>52064 Aachen
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <h2 className="font-heading font-bold text-slate-900 dark:text-white text-xl">{t('footer.quick_links')}</h2>
            <ul className="flex flex-col items-center md:items-start gap-3 w-full md:w-auto">
              {quickLinks.map((link) => (
                <li key={link.key} className="w-full md:w-auto flex justify-center md:justify-start">
                  <Link 
                    to={link.path} 
                    className="text-slate-600 dark:text-white/80 hover:text-[#0047AB] transition-colors flex items-center gap-2 group capitalize font-medium"
                  >
                    {link.name}
                    <span className={cn("hidden md:inline-block opacity-0 group-hover:opacity-100 transition-all text-xs", i18n.dir() === 'rtl' ? "translate-x-2 group-hover:translate-x-0" : "-translate-x-2 group-hover:translate-x-0")}>
                      {i18n.dir() === 'rtl' ? '❮' : '❯'}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <h2 className="font-heading font-bold text-slate-900 dark:text-white text-xl">{t('footer.follow_us')}</h2>
            <div className="flex gap-4 text-slate-600 dark:text-white/80">
              <a href="#" aria-label={t('footer.instagram', 'Instagram')} className="w-10 h-10 rounded-full bg-[#f0f4ff] dark:bg-[#0a1628] flex items-center justify-center text-[#0047AB] dark:text-[#f0a83f] hover:bg-[#0047AB] hover:text-white dark:hover:bg-[#f0a83f] dark:hover:text-[#051024] transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0047AB] dark:focus-visible:ring-[#f0a83f] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#051024]">
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label={t('footer.facebook', 'Facebook')} className="w-10 h-10 rounded-full bg-[#f0f4ff] dark:bg-[#0a1628] flex items-center justify-center text-[#0047AB] dark:text-[#f0a83f] hover:bg-[#0047AB] hover:text-white dark:hover:bg-[#f0a83f] dark:hover:text-[#051024] transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0047AB] dark:focus-visible:ring-[#f0a83f] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#051024]">
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/10 text-center flex flex-col justify-center items-center gap-4 text-sm text-slate-500 dark:text-white/60">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights_reserved')}</p>
          <button 
            onClick={openCookieSettings}
            className="hover:text-slate-800 dark:hover:text-white transition-colors underline decoration-slate-300 dark:decoration-white/20 underline-offset-4"
          >
            {t('footer.cookie_settings', 'Cookie-Einstellungen')}
          </button>
        </div>
      </div>
    </footer>
  );
}
