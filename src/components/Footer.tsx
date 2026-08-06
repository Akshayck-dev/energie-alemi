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
    <footer className="bg-slate-50 dark:bg-[#051024] pt-12 md:pt-20 pb-8 border-t border-slate-200 dark:border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 mb-12 md:mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center">
              <div className="relative w-16 h-16 overflow-hidden flex items-center justify-center rounded-xl shrink-0">
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
            <div>
              <p className="text-slate-600 dark:text-white/80 font-medium">{t('footer.smart_advice')}</p>
              <p className="text-[#0047AB] font-medium">{t('footer.lower_costs')}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading font-medium text-slate-900 dark:text-white text-lg">{t('footer.contact')}</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-slate-600 dark:text-white/80">
                <Phone size={20} className="mt-0.5 text-slate-400 dark:text-white/50" />
                <span>0176 659 493 90</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600 dark:text-white/80">
                <Mail size={20} className="mt-0.5 text-slate-400 dark:text-white/50" />
                <span>info (at) energie-alemi.de</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600 dark:text-white/80">
                <MapPin size={20} className="mt-0.5 text-slate-400 dark:text-white/50" />
                <span>Alexianergraben 9<br />52064 Aachen</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading font-medium text-slate-900 dark:text-white text-lg">{t('footer.quick_links')}</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link 
                    to={link.path} 
                    className="text-slate-600 dark:text-white/80 hover:text-[#0047AB] transition-colors flex items-center justify-between group py-2 md:py-0"
                  >
                    {link.key === 'data_protection' ? t(`footer.data_protection`) : t(`nav.${link.key}`)}
                    <span className={cn("opacity-0 group-hover:opacity-100 transition-all text-xs", i18n.dir() === 'rtl' ? "translate-x-2 group-hover:translate-x-0" : "-translate-x-2 group-hover:translate-x-0")}>
                      {i18n.dir() === 'rtl' ? '❮' : '❯'}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading font-medium text-slate-900 dark:text-white text-lg">{t('footer.follow_us')}</h4>
            <div className="flex gap-4 text-slate-600 dark:text-white/80">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 hover:border-slate-900 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 hover:border-slate-900 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-white/60">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights_reserved')}</p>
        </div>
      </div>
    </footer>
  );
}
