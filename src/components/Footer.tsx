import { Link } from 'react-router';
import { Mail, MapPin, Phone, Zap } from 'lucide-react';
import logo from '../assets/logo_transparent.png';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-[#051024] pt-12 md:pt-20 pb-8 border-t border-slate-200 dark:border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 mb-12 md:mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Energie Alemi Logo" className="h-16 w-auto object-contain" />
            </Link>
            <div>
              <p className="text-slate-600 dark:text-white/80 font-medium">Smart advice.</p>
              <p className="text-[#0047AB] font-medium">Lower costs.</p>
            </div>
            {/* Some versions of footer have extra text, keeping it simple or adding if needed based on pages */}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading font-medium text-slate-900 dark:text-white text-lg">Contact</h4>
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
            <h4 className="font-heading font-medium text-slate-900 dark:text-white text-lg">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Electricity', 'Gas', 'Internet', 'About us', 'Contact', 'Data protection'].map((link) => (
                <li key={link}>
                  <Link 
                    to={`/${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-slate-600 dark:text-white/80 hover:text-[#0047AB] transition-colors flex items-center justify-between group py-2 md:py-0"
                  >
                    {link}
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-xs">
                      &#10095;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading font-medium text-slate-900 dark:text-white text-lg">Follow us</h4>
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
          <p>&copy; 2024 Energie Alemi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
