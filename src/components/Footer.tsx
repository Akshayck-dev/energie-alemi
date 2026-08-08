import { Link } from 'react-router';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logoVideo from '../assets/Animate_the_attached_logo_in_a (1).mp4';
import { cn } from '../lib/utils';

export default function Footer() {
  const { t, i18n } = useTranslation();

  const quickLinks = [
    { key: 'electricity', path: '/electricity' },
    { key: 'gas', path: '/gas' },
    { key: 'internet', path: '/internet' },
    { key: 'about_us', path: '/about' },
    { key: 'contact', path: '/contact' },
    { key: 'data_protection', path: '/data-protection' }
  ];

  return (
    <footer className="bg-white dark:bg-[#051024] pt-12 md:pt-20 pb-32 md:pb-8 border-t border-slate-200 dark:border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-12 lg:gap-8 mb-12 md:mb-16 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="flex items-center">
              <div className="relative w-20 h-20 overflow-hidden flex items-center justify-center rounded-xl shrink-0">
                <video
                  src={logoVideo}
                  autoPlay
                  muted
                  defaultMuted
                  loop
                  playsInline
                  className="h-[140%] w-auto max-w-none object-cover mix-blend-multiply dark:mix-blend-screen dark:invert dark:brightness-125 pointer-events-none"
                />
              </div>
            </Link>
            <div>
              <p className="text-slate-600 dark:text-white/80 font-medium text-lg">{t('footer.smart_advice')}</p>
              <p className="text-[#0047AB] font-bold text-lg">{t('footer.lower_costs')}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <h4 className="font-heading font-bold text-slate-900 dark:text-white text-xl">{t('footer.contact')}</h4>
            <ul className="flex flex-col items-center md:items-start gap-4">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-slate-600 dark:text-white/80">
                <Phone size={20} className="md:mt-0.5 text-[#0047AB] dark:text-[#f0a83f]" />
                <span>0176 659 493 90</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-slate-600 dark:text-white/80">
                <Mail size={20} className="md:mt-0.5 text-[#0047AB] dark:text-[#f0a83f]" />
                <span>info (at) energie-alemi.de</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 text-slate-600 dark:text-white/80">
                <MapPin size={20} className="md:mt-0.5 text-[#0047AB] dark:text-[#f0a83f]" />
                <span>Alexianergraben 9<br className="hidden md:block" /> <span className="md:hidden">, </span>52064 Aachen</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <h4 className="font-heading font-bold text-slate-900 dark:text-white text-xl">{t('footer.quick_links')}</h4>
            <ul className="flex flex-col items-center md:items-start gap-3 w-full md:w-auto">
              {quickLinks.map((link) => (
                <li key={link.key} className="w-full md:w-auto flex justify-center md:justify-start">
                  <Link 
                    to={link.path} 
                    className="text-slate-600 dark:text-white/80 hover:text-[#0047AB] transition-colors flex items-center gap-2 group capitalize font-medium"
                  >
                    {link.key === 'data_protection' ? t(`footer.data_protection`) : t(`nav.${link.key}`).toLowerCase()}
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
            <h4 className="font-heading font-bold text-slate-900 dark:text-white text-xl">{t('footer.follow_us')}</h4>
            <div className="flex gap-4 text-slate-600 dark:text-white/80">
              <a href="#" className="w-10 h-10 rounded-full bg-[#f0f4ff] dark:bg-[#0a1628] flex items-center justify-center text-[#0047AB] dark:text-[#f0a83f] hover:bg-[#0047AB] hover:text-white dark:hover:bg-[#f0a83f] dark:hover:text-[#051024] transition-all shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#f0f4ff] dark:bg-[#0a1628] flex items-center justify-center text-[#0047AB] dark:text-[#f0a83f] hover:bg-[#0047AB] hover:text-white dark:hover:bg-[#f0a83f] dark:hover:text-[#051024] transition-all shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/10 text-center flex flex-col justify-center items-center gap-4 text-sm text-slate-500 dark:text-white/60">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights_reserved')}</p>
        </div>
      </div>
    </footer>
  );
}
