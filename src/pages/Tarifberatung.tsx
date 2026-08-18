import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Clock, Zap, Flame, Wifi, ArrowRight, ShieldCheck, CheckSquare, Search, Handshake } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import HomeHero from '../sections/HomeHero';
import ownerImg from '../assets/image-admin.JPG.webp';

export default function Tarifberatung() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 1,
      icon: <Search size={24} />,
      title: t('tarifberatung.process_s1_t'),
      desc: t('tarifberatung.process_s1_d'),
    },
    {
      id: 2,
      icon: <ShieldCheck size={24} />,
      title: t('tarifberatung.process_s2_t'),
      desc: t('tarifberatung.process_s2_d'),
    },
    {
      id: 3,
      icon: <Handshake size={24} />,
      title: t('tarifberatung.process_s3_t'),
      desc: t('tarifberatung.process_s3_d'),
    },
    {
      id: 4,
      icon: <CheckSquare size={24} />,
      title: t('tarifberatung.process_s4_t'),
      desc: t('tarifberatung.process_s4_d'),
    },
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO url="/tarifberatung-aachen" />

      {/* Hero is sticky on mobile so the rest of the page slides over it */}
      <div className="sticky top-0 z-0 md:relative">
        <HomeHero />
      </div>

      
      {/* Services Section */}
      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.5)] md:shadow-none">
        {/* Services Section -> Copied from HomeFeatures.tsx */}
      <section className="py-10 md:py-24 bg-slate-50 dark:bg-[#051024] relative z-20 -mt-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-1/3"
            >
              <p className="text-[#0047AB] dark:text-[#4F8CFF] font-heading font-medium tracking-wider uppercase text-sm mb-2">
                {t('tarifberatung.services_sub')}
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">
                {t('tarifberatung.services_title')}
              </h2>
              <p className="text-slate-600 dark:text-white/80 text-lg leading-relaxed mb-6">
                {t('tarifberatung.hero_desc')}
              </p>
              <div className="w-12 h-[3px] bg-[#0047AB]"></div>
            </motion.div>

            {/* Right Features Box */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-2/3"
            >
              <div className="bg-white dark:bg-[#0a1628] rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100 p-6 md:py-8 md:px-12 relative overflow-hidden md:overflow-visible">
                <div 
                  className="flex md:grid md:grid-cols-3 md:gap-0 relative transition-transform duration-500 ease-in-out md:!transform-none"
                  style={{ transform: i18n.dir() === 'rtl' ? `translateX(${activeIndex * 100}%)` : `translateX(-${activeIndex * 100}%)` }}
                >
                  
                  {/* Feature 1: Strom */}
                  <div className="w-full shrink-0 md:w-auto flex flex-col items-center text-center px-2 md:px-4 h-full">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: [-5, 5, 0] }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      className="w-16 h-16 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-amber-500 shadow-sm shrink-0 mb-4 cursor-pointer"
                    >
                      <Zap size={28} strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">{t('tarifberatung.strom_title')}</h3>
                    <p className="text-slate-600 dark:text-white/80 text-[13.5px] leading-snug min-h-[60px] flex items-start justify-center max-w-[220px]">
                      {t('tarifberatung.strom_desc')}
                    </p>
                    <button onClick={() => navigate('/electricity')} aria-label="Mehr erfahren" className="mt-auto w-10 h-10 rounded-full bg-[#0047AB] text-white flex items-center justify-center hover:bg-[#051024] transition-colors shadow-md shadow-blue-900/20 shrink-0 hover:scale-110 active:scale-95 duration-200">
                      <ArrowRight size={18} className="rtl:rotate-180" />
                    </button>
                  </div>

                  {/* Divider 1 */}
                  <div className="hidden md:block absolute ltr:left-1/3 rtl:right-1/3 top-2 bottom-2 w-px bg-slate-100 dark:bg-[#0c1d3d] z-10"></div>

                  {/* Feature 2: Gas */}
                  <div className="w-full shrink-0 md:w-auto flex flex-col items-center text-center px-2 md:px-4 h-full">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: [-5, 5, 0] }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      className="w-16 h-16 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-rose-500 shadow-sm shrink-0 relative mb-4 cursor-pointer"
                    >
                      <Flame size={28} strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">{t('tarifberatung.gas_title')}</h3>
                    <p className="text-slate-600 dark:text-white/80 text-[13.5px] leading-snug min-h-[60px] flex items-start justify-center max-w-[220px]">
                      {t('tarifberatung.gas_desc')}
                    </p>
                    <button onClick={() => navigate('/gas')} aria-label="Mehr erfahren" className="mt-auto w-10 h-10 rounded-full bg-[#0047AB] text-white flex items-center justify-center hover:bg-[#051024] transition-colors shadow-md shadow-blue-900/20 shrink-0 hover:scale-110 active:scale-95 duration-200">
                      <ArrowRight size={18} className="rtl:rotate-180" />
                    </button>
                  </div>

                  {/* Divider 2 */}
                  <div className="hidden md:block absolute ltr:left-2/3 rtl:right-2/3 top-2 bottom-2 w-px bg-slate-100 dark:bg-[#0c1d3d] z-10"></div>

                  {/* Feature 3: Internet */}
                  <div className="w-full shrink-0 md:w-auto flex flex-col items-center text-center px-2 md:px-4 h-full">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: [-5, 5, 0] }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      className="w-16 h-16 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-blue-500 shadow-sm shrink-0 mb-4 cursor-pointer"
                    >
                      <Wifi size={28} strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">{t('tarifberatung.internet_title')}</h3>
                    <p className="text-slate-600 dark:text-white/80 text-[13.5px] leading-snug min-h-[60px] flex items-start justify-center max-w-[220px]">
                      {t('tarifberatung.internet_desc')}
                    </p>
                    <button onClick={() => navigate('/internet')} aria-label="Mehr erfahren" className="mt-auto w-10 h-10 rounded-full bg-[#0047AB] text-white flex items-center justify-center hover:bg-[#051024] transition-colors shadow-md shadow-blue-900/20 shrink-0 hover:scale-110 active:scale-95 duration-200">
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
      </div>

      {/* Process Section */}
      <div className="relative z-20 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.3)] md:shadow-none">
        {/* Process Section -> Copied from HomeProcess.tsx */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#051024] relative z-20">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#0047AB] dark:text-[#4F8CFF] font-heading font-medium tracking-wider uppercase text-sm mb-2">
              {t('tarifberatung.process_sub')}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {t('tarifberatung.process_title')}
            </h2>
            <div className="w-16 h-[3px] bg-[#0047AB] mx-auto"></div>
          </div>

          {/* Mobile Sticky Stack / Desktop Horizontal Timeline */}
          <div className="relative mt-8 pb-[20vh] md:pb-0">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-[56px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent z-0">
              <div className="w-full h-full bg-gradient-to-r from-[#0047AB] via-[#f0a83f] to-[#0047AB] opacity-60" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6 lg:gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="sticky md:relative top-[var(--card-top)] md:top-auto w-full bg-slate-50 dark:bg-[#0a1628] p-6 md:p-8 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.3)] md:shadow-sm dark:md:shadow-[0_10px_25px_rgba(0,0,0,0.2)] flex flex-col items-center text-center mb-16 md:mb-0 gap-5 hover:scale-[1.03] hover:shadow-md hover:border-[#0047AB]/20 transition-all duration-300 group"
                  style={{ '--card-top': `calc(12vh + ${index * 1.5}rem)`, zIndex: index + 10 } as React.CSSProperties}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 shrink-0 rounded-full bg-white dark:bg-[#051024] border-2 border-[#0047AB] shadow-[0_5px_15px_rgba(0,71,171,0.15)] flex items-center justify-center text-[#0047AB] dark:text-[#f0a83f] relative mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="absolute -top-1.5 -right-1.5 text-[10px] md:text-xs font-bold bg-[#f0a83f] text-white w-5.5 h-5.5 rounded-full flex items-center justify-center shadow-md">
                      {step.id}
                    </span>
                    <div className="scale-100 md:scale-110">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <h3 className="font-heading text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#0047AB] dark:group-hover:text-[#f0a83f] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-white/70 text-[13.5px] md:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
      </div>

      {/* Trust Section */}
      <div className="relative z-30 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.3)] md:shadow-none">
        {/* Trust & Location Section -> Copied from HomePromise.tsx */}
      <section className="py-14 md:py-24 bg-slate-50 dark:bg-[#051024] relative overflow-x-hidden md:overflow-hidden text-slate-900 dark:text-white">
        {/* Background Graphic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0047AB]/5 rounded-full blur-[100px] pointer-events-none transform-gpu" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            
            <div className="w-full lg:w-5/12 relative z-20">
              <p className="text-[#0047AB] dark:text-[#4F8CFF] font-heading font-medium tracking-wider uppercase text-sm mb-2">
                {t('tarifberatung.trust_subtitle', 'Lokal & Persönlich')}
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                {t('tarifberatung.trust_title')}
              </h2>
              <p className="text-slate-600 dark:text-white/80 text-base mb-12 leading-relaxed max-w-md">
                {t('tarifberatung.trust_desc')}
              </p>
   
              <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 shadow-sm rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-[#0047AB] dark:text-[#f0a83f]" size={20} />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-xs leading-tight">Alexianergraben 9<br/>52064 Aachen</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 shadow-sm rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="text-[#0047AB] dark:text-[#f0a83f]" size={20} />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-xs leading-tight">0176 659<br/>493 90</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 shadow-sm rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="text-[#0047AB] dark:text-[#f0a83f]" size={20} />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-xs leading-tight">Mo-Sa<br/>10-19 Uhr</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-7/12 h-full flex justify-center lg:justify-end items-end relative mt-16 lg:mt-0">
              {/* Cut out person image */}
              <div className="relative z-10 bottom-0 w-full max-w-[600px] flex items-end justify-center lg:justify-end">
                 <img 
                   src={ownerImg} 
                   alt="Advisor" 
                   loading="lazy"
                   decoding="async"
                   className="w-full aspect-square md:aspect-auto md:h-auto md:max-h-[600px] object-cover object-top rounded-3xl shadow-xl border border-slate-200 dark:border-white/10"
                  width="500" height="600" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#051024] via-transparent to-transparent z-10 rounded-3xl" />
              </div>

              {/* Blockquote card */}
              <div className="absolute bottom-12 rtl:-right-4 ltr:-left-4 lg:rtl:-right-12 lg:ltr:-left-12 z-20 bg-white dark:bg-[#0a1628] rounded-2xl p-8 max-w-sm border border-slate-100 shadow-xl hidden md:block">
                <div className="text-[#E5A937] text-6xl font-serif absolute -top-2 ltr:left-6 rtl:right-6 opacity-80 leading-none">"</div>
                <p className="text-slate-700 dark:text-slate-300 text-lg font-medium relative z-10 leading-relaxed mt-4">
                  {t('tarifberatung.trust_box_1')} {t('tarifberatung.trust_box_2')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      </div>

    </div>
  );
}
