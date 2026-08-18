import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Search, FileCheck, Handshake, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function HomeFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 md:py-24 bg-slate-50 dark:bg-[#051024] relative z-20 -mt-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/3"
          >
            <p className="text-[#0047AB] dark:text-[#4F8CFF] font-heading font-medium tracking-wider uppercase text-sm mb-2">
              {t('home_features.subtitle')}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">
              {t('home_features.title')}
            </h2>
            <p className="text-slate-600 dark:text-white/80 text-lg leading-relaxed mb-6">
              {t('home_features.description')}
            </p>
            <p className="text-slate-600 dark:text-white/80 text-lg leading-relaxed mb-6">
              Besuchen Sie uns direkt vor Ort und profitieren Sie von einer persönlichen <Link to="/tarifberatung-aachen" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Tarifberatung in Aachen</Link>.
            </p>
            <div className="w-12 h-[3px] bg-[#0047AB]"></div>
          </motion.div>

          {/* Right Features Box */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <div className="bg-white dark:bg-[#0a1628] rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100 p-6 md:py-8 md:px-12 relative overflow-hidden md:overflow-visible">
              <div 
                className="flex md:grid md:grid-cols-3 md:gap-0 relative transition-transform duration-500 ease-in-out md:!transform-none"
                style={{ transform: i18n.dir() === 'rtl' ? `translateX(${activeIndex * 100}%)` : `translateX(-${activeIndex * 100}%)` }}
              >
                
                {/* Feature 1 */}
                <div className="w-full shrink-0 md:w-auto flex flex-col items-center text-center px-2 md:px-4 h-full">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: [-5, 5, 0] }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="w-16 h-16 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white shadow-sm shrink-0 mb-4 cursor-pointer"
                  >
                    <Search size={28} strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">{t('home_features.feature1_title1')}<br/>{t('home_features.feature1_title2')}</h3>
                  <p className="text-slate-600 dark:text-white/80 text-[13.5px] leading-snug min-h-[60px] flex items-start justify-center max-w-[220px]">
                    {t('home_features.feature1_desc')}
                  </p>
                  <button aria-label="Mehr erfahren" className="mt-auto w-10 h-10 rounded-full bg-[#0047AB] text-white flex items-center justify-center hover:bg-[#051024] transition-colors shadow-md shadow-blue-900/20 shrink-0 hover:scale-110 active:scale-95 duration-200">
                    <ArrowRight size={18} className="rtl:rotate-180" />
                  </button>
                </div>

                {/* Divider 1 */}
                <div className="hidden md:block absolute ltr:left-1/3 rtl:right-1/3 top-2 bottom-2 w-px bg-slate-100 dark:bg-[#0c1d3d] z-10"></div>

                {/* Feature 2 */}
                <div className="w-full shrink-0 md:w-auto flex flex-col items-center text-center px-2 md:px-4 h-full">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: [-5, 5, 0] }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="w-16 h-16 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white shadow-sm shrink-0 relative mb-4 cursor-pointer"
                  >
                    <FileCheck size={28} strokeWidth={1.5} />
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 rounded-full flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#E5A937" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                  </motion.div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">{t('home_features.feature2_title1')}<br/>{t('home_features.feature2_title2')}</h3>
                  <p className="text-slate-600 dark:text-white/80 text-[13.5px] leading-snug min-h-[60px] flex items-start justify-center max-w-[220px]">
                    {t('home_features.feature2_desc')}
                  </p>
                  <button aria-label="Mehr erfahren" className="mt-auto w-10 h-10 rounded-full bg-[#0047AB] text-white flex items-center justify-center hover:bg-[#051024] transition-colors shadow-md shadow-blue-900/20 shrink-0 hover:scale-110 active:scale-95 duration-200">
                    <ArrowRight size={18} className="rtl:rotate-180" />
                  </button>
                </div>

                {/* Divider 2 */}
                <div className="hidden md:block absolute ltr:left-2/3 rtl:right-2/3 top-2 bottom-2 w-px bg-slate-100 dark:bg-[#0c1d3d] z-10"></div>

                {/* Feature 3 */}
                <div className="w-full shrink-0 md:w-auto flex flex-col items-center text-center px-2 md:px-4 h-full">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: [-5, 5, 0] }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="w-16 h-16 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-900 dark:text-white shadow-sm shrink-0 mb-4 cursor-pointer"
                  >
                    <Handshake size={28} strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">{t('home_features.feature3_title1')}<br/>{t('home_features.feature3_title2')}</h3>
                  <p className="text-slate-600 dark:text-white/80 text-[13.5px] leading-snug min-h-[60px] flex items-start justify-center max-w-[220px]">
                    {t('home_features.feature3_desc')}
                  </p>
                  <button aria-label="Mehr erfahren" className="mt-auto w-10 h-10 rounded-full bg-[#0047AB] text-white flex items-center justify-center hover:bg-[#051024] transition-colors shadow-md shadow-blue-900/20 shrink-0 hover:scale-110 active:scale-95 duration-200">
                    <ArrowRight size={18} className="rtl:rotate-180" />
                  </button>
                </div>

              </div>

              {/* Mobile Pagination Dots */}
              <div className="flex md:hidden justify-center gap-2 mt-5 relative z-10">
                {[0, 1, 2].map((index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-6 bg-[#0047AB]' : 'w-1.5 bg-slate-200 dark:bg-[#0a1628]/10'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
