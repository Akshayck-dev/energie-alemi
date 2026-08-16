import { Zap, ShieldCheck, Users, LineChart, Handshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, type Variants } from 'framer-motion';
import ownerImg from '../assets/image-admin.JPG.webp';
import SEO from "../components/SEO";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="relative bg-white dark:bg-[#0a1628] min-h-screen">
      <SEO url="/about" />
      {/* Hero Section */}
      <div className="sticky top-0 z-0 md:relative">
        <section className="relative flex items-center pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-white dark:bg-[#051024]">
          <div className="container mx-auto px-5 md:px-10 max-w-[1240px] relative z-20">
            <div className="md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:items-center">
              
              {/* Left Header Content */}
              <motion.div 
                className="pt-8 md:pt-0"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-2 text-[11px] md:text-[12px] font-bold tracking-[0.15em] uppercase text-[#f0a83f] mb-4">
                  <div className="w-6 h-[2px] bg-[#f0a83f] rounded-sm"></div>
                  {t('about.hero_subtitle')}
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="font-heading text-[44px] md:text-[64px] lg:text-[72px] leading-[1.05] font-extrabold text-[#00173A] dark:text-white mb-6 tracking-[-0.02em]">
                  {t('about.hero_title')}
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-[16px] md:text-[18px] leading-[1.6] text-slate-600 dark:text-white/80 max-w-[500px] mb-10 font-medium">
                  {t('about.hero_desc')}
                </motion.p>
                
                {/* Feature Cards Container */}
                <motion.div variants={fadeInUp} className="flex flex-wrap md:flex-nowrap gap-8 md:gap-12 mb-10">
                  <motion.div whileHover={{ y: -5 }} className="flex flex-col gap-3 group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-[#f0f4ff] dark:bg-[#0c1d3d] flex items-center justify-center text-[#0047AB] dark:text-[#60a5fa] border border-[#e2e8f0] dark:border-white/10 group-hover:bg-[#0047AB] group-hover:text-white dark:group-hover:bg-[#60a5fa] dark:group-hover:text-[#0c1d3d] transition-colors duration-300">
                      <Zap size={20} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#00173A] dark:text-white text-[15px] mb-1 group-hover:text-[#0047AB] dark:group-hover:text-[#60a5fa] transition-colors">{t('about.hero_f1_title')}</h4>
                      <p className="text-slate-500 dark:text-white/60 text-[13px]">{t('about.hero_f1_desc')}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div whileHover={{ y: -5 }} className="flex flex-col gap-3 group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-[#f0f4ff] dark:bg-[#0c1d3d] flex items-center justify-center text-[#0047AB] dark:text-[#60a5fa] border border-[#e2e8f0] dark:border-white/10 group-hover:bg-[#0047AB] group-hover:text-white dark:group-hover:bg-[#60a5fa] dark:group-hover:text-[#0c1d3d] transition-colors duration-300">
                      <ShieldCheck size={20} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#00173A] dark:text-white text-[15px] mb-1 group-hover:text-[#0047AB] dark:group-hover:text-[#60a5fa] transition-colors">{t('about.hero_f2_title')}</h4>
                      <p className="text-slate-500 dark:text-white/60 text-[13px]">{t('about.hero_f2_desc')}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div whileHover={{ y: -5 }} className="flex flex-col gap-3 group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-[#f0f4ff] dark:bg-[#0c1d3d] flex items-center justify-center text-[#0047AB] dark:text-[#60a5fa] border border-[#e2e8f0] dark:border-white/10 group-hover:bg-[#0047AB] group-hover:text-white dark:group-hover:bg-[#60a5fa] dark:group-hover:text-[#0c1d3d] transition-colors duration-300">
                      <Handshake size={20} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#00173A] dark:text-white text-[15px] mb-1 group-hover:text-[#0047AB] dark:group-hover:text-[#60a5fa] transition-colors">{t('about.hero_f3_title')}</h4>
                      <p className="text-slate-500 dark:text-white/60 text-[13px]">{t('about.hero_f3_desc')}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              {/* Right Column Graphic */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:flex relative h-[350px] items-center justify-center w-full mt-10 md:mt-0"
              >
                {/* Decorative dashed/dotted circles */}
                <div className="absolute w-[300px] h-[300px] rounded-full border-[1.5px] border-dashed border-[#cbd5e1] dark:border-white/10 animate-[spin_120s_linear_infinite]" />
                <div className="absolute w-[220px] h-[220px] rounded-full border-[1.5px] border-dotted border-[#94a3b8] dark:border-white/20 shadow-[inset_0_0_40px_rgba(0,0,0,0.02)] animate-[spin_80s_linear_infinite_reverse]" />
                <div className="absolute w-[150px] h-[150px] rounded-full border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 backdrop-blur-sm" />
                
                {/* Floating elements */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[15%] right-[22%] w-9 h-9 bg-[#f0a83f] rounded-full flex items-center justify-center text-white shadow-lg z-20"
                >
                  <Zap size={14} fill="currentColor" />
                </motion.div>
                <motion.div 
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-[22%] left-[18%] w-12 h-12 bg-[#0047AB] rounded-full flex items-center justify-center text-white shadow-[0_10px_25px_rgba(0,71,171,0.4)] z-20"
                >
                  <LineChart size={20} fill="currentColor" />
                </motion.div>
                
                {/* Floating tiny dots */}
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-[35%] left-[8%] w-2 h-2 bg-[#f0a83f] rounded-full shadow-md z-10" />
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute top-[45%] left-[5%] w-4 h-4 bg-blue-100 dark:bg-blue-900/50 rounded-full shadow-sm z-10" />
                <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} className="absolute bottom-[40%] right-[12%] w-2 h-2 bg-[#0047AB] rounded-full opacity-50 z-10" />
                
                {/* Center Graphic Placeholder */}
                <div className="relative z-10 w-[120px] h-[120px] flex items-center justify-center group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 dark:from-[#0c1d3d] dark:to-[#051024] rounded-full shadow-2xl overflow-hidden flex items-center justify-center border-[4px] border-white dark:border-[#0a1628] group-hover:shadow-[0_0_30px_rgba(0,71,171,0.3)] transition-shadow duration-500">
                    <Users size={48} className="text-[#00173A] dark:text-white drop-shadow-lg" strokeWidth={1.5} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[90px] drop-shadow-sm">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white dark:fill-[#0a1628]"></path>
            </svg>
          </div>
        </section>
      </div>

      {/* Philosophy / Intro Section */}
      <div className="relative z-10 bg-white dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.5)] md:shadow-none overflow-hidden">
        <section className="pt-8 pb-20 md:pt-10 md:pb-32 relative">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col lg:flex-row gap-16 md:gap-24 items-start"
            >
              
              {/* Left side: Typography & Content */}
              <motion.div variants={fadeInUp} className="w-full lg:w-[55%]">
                <h3 className="text-[#0047AB] font-heading font-medium tracking-wider uppercase text-sm mb-4">
                  {t('about.phil_subtitle')}
                </h3>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                  {t('about.phil_title1')}<br/>
                  <span className="text-slate-400 dark:text-white/50">{t('about.phil_title2')}</span>
                </h2>
                <div className="space-y-6 text-slate-600 dark:text-white/80 text-lg leading-relaxed">
                  <p>
                    {t('about.phil_p1')}
                  </p>
                  <p>
                    {t('about.phil_p2')}
                  </p>
                  <p>
                    {t('about.phil_p3')}
                  </p>
                </div>

                {/* Stats/Badges */}
                <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-slate-100 dark:border-white/10">
                  <div>
                    <h4 className="font-heading text-4xl font-bold text-[#0047AB] dark:text-[#60a5fa] mb-1">{t('about.phil_stat1_num')}</h4>
                    <p className="text-sm text-slate-500 dark:text-white/60 font-medium uppercase tracking-wider">{t('about.phil_stat1_text')}</p>
                  </div>
                  <div>
                    <h4 className="font-heading text-4xl font-bold text-[#0047AB] dark:text-[#60a5fa] mb-1">{t('about.phil_stat2_num')}</h4>
                    <p className="text-sm text-slate-500 dark:text-white/60 font-medium uppercase tracking-wider">{t('about.phil_stat2_text')}</p>
                  </div>
                  <div>
                    <h4 className="font-heading text-4xl font-bold text-[#0047AB] dark:text-[#60a5fa] mb-1">{t('about.phil_stat3_num')}</h4>
                    <p className="text-sm text-slate-500 dark:text-white/60 font-medium uppercase tracking-wider">{t('about.phil_stat3_text')}</p>
                  </div>
                </div>
              </motion.div>

              {/* Right side: Founder / Image */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.95, x: 20 },
                  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
                }}
                className="w-full lg:w-[45%] h-full flex justify-center lg:justify-end items-center relative mt-12 lg:mt-0"
              >
                {/* Cut out person image */}
                <div className="relative z-10 flex flex-col items-center justify-center w-full gap-6 group">
                   <img 
                     src={ownerImg} 
                     alt={t('about.founder_image_alt', 'Shoaib Alemi, Founder of Energie Alemi')}
                     className="w-[85%] max-w-[500px] object-cover transform scale-x-[-1] rounded-3xl transition-transform duration-700 group-hover:scale-[1.02]"
                    width="500" height="600" />
                 
                   {/* Signature Graphic */}
                   <div className="z-20 w-[85%] max-w-[500px] flex justify-center">
                      <span className="font-serif italic text-3xl text-slate-900 dark:text-white opacity-90 inline-block">
                        Shoaib Alemi
                      </span>
                   </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Experience Section */}
      <div className="relative z-20 bg-slate-50 dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.3)] md:shadow-none overflow-hidden">
        <section className="py-14 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start max-w-7xl mx-auto"
            >
              
              {/* Left Content */}
              <motion.div variants={fadeInUp} className="w-full lg:w-[55%]">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                  {t('about.exp_title1')} <span className="text-[#E5A937]">{t('about.exp_title_high')}</span> {t('about.exp_title2')}
                </h2>
                <div className="w-full h-px bg-slate-200 dark:bg-white/10 mb-8" />
                
                <div className="space-y-6 text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  <p>
                    {t('about.exp_p1')}
                  </p>
                  <p>
                    {t('about.exp_p2')}
                  </p>
                  <p>
                    {t('about.exp_p3')}
                  </p>
                  <p>
                    {t('about.exp_p4')}
                  </p>
                </div>

                {/* Blockquote area */}
                <div className="mt-10 bg-white dark:bg-[#0a1628] p-6 md:p-8 rounded-2xl flex items-center gap-6 border border-slate-100 dark:border-white/10 shadow-sm">
                  <div className="w-14 h-14 bg-slate-50 dark:bg-[#051024] border border-slate-200 dark:border-white/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[#0047AB] dark:text-[#60a5fa] text-3xl font-serif leading-none mt-1" aria-hidden="true">"</span>
                  </div>
                  <p className="font-medium text-slate-900 dark:text-white leading-relaxed">
                    {t('about.exp_quote')}
                  </p>
                </div>
              </motion.div>
              
              {/* Right Features Column */}
              <motion.div variants={fadeInUp} className="w-full lg:w-[45%]">
                <div className="bg-white dark:bg-[#0a1628] p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex flex-col gap-8">
                  
                  {/* Feature 1 */}
                  <motion.div whileHover={{ x: 5 }} className="flex gap-6 pb-8 border-b border-slate-100 dark:border-white/10 relative group cursor-default transition-transform">
                    <div className="absolute ltr:left-0 rtl:right-0 top-2 bottom-8 w-[3px] bg-[#E5A937] rounded-full" />
                    <div className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#0047AB] dark:text-[#60a5fa] shrink-0 ltr:ml-6 rtl:mr-6 bg-slate-50 dark:bg-[#051024] group-hover:bg-[#0047AB] group-hover:text-white dark:group-hover:bg-[#60a5fa] dark:group-hover:text-[#0c1d3d] transition-colors duration-300">
                      <Zap size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-[#0047AB] dark:group-hover:text-[#60a5fa] transition-colors">{t('about.exp_f1_title')}</h4>
                      <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed">{t('about.exp_f1_desc')}</p>
                    </div>
                  </motion.div>

                  {/* Feature 2 */}
                  <motion.div whileHover={{ x: 5 }} className="flex gap-6 pb-8 border-b border-slate-100 dark:border-white/10 relative group cursor-default transition-transform">
                    <div className="absolute ltr:left-0 rtl:right-0 top-2 bottom-8 w-[3px] bg-[#E5A937] rounded-full" />
                    <div className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#0047AB] dark:text-[#60a5fa] shrink-0 ltr:ml-6 rtl:mr-6 bg-slate-50 dark:bg-[#051024] group-hover:bg-[#0047AB] group-hover:text-white dark:group-hover:bg-[#60a5fa] dark:group-hover:text-[#0c1d3d] transition-colors duration-300">
                      <ShieldCheck size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-[#0047AB] dark:group-hover:text-[#60a5fa] transition-colors">{t('about.exp_f2_title')}</h4>
                      <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed">{t('about.exp_f2_desc')}</p>
                    </div>
                  </motion.div>

                  {/* Feature 3 */}
                  <motion.div whileHover={{ x: 5 }} className="flex gap-6 pb-8 border-b border-slate-100 dark:border-white/10 relative group cursor-default transition-transform">
                    <div className="absolute ltr:left-0 rtl:right-0 top-2 bottom-8 w-[3px] bg-[#E5A937] rounded-full" />
                    <div className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#0047AB] dark:text-[#60a5fa] shrink-0 ltr:ml-6 rtl:mr-6 bg-slate-50 dark:bg-[#051024] group-hover:bg-[#0047AB] group-hover:text-white dark:group-hover:bg-[#60a5fa] dark:group-hover:text-[#0c1d3d] transition-colors duration-300">
                      <Users size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-[#0047AB] dark:group-hover:text-[#60a5fa] transition-colors">{t('about.exp_f3_title')}</h4>
                      <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed">{t('about.exp_f3_desc')}</p>
                    </div>
                  </motion.div>

                  {/* Feature 4 */}
                  <motion.div whileHover={{ x: 5 }} className="flex gap-6 relative group cursor-default transition-transform">
                    <div className="absolute ltr:left-0 rtl:right-0 top-2 bottom-2 w-[3px] bg-[#E5A937] rounded-full" />
                    <div className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#0047AB] dark:text-[#60a5fa] shrink-0 ltr:ml-6 rtl:mr-6 bg-slate-50 dark:bg-[#051024] group-hover:bg-[#0047AB] group-hover:text-white dark:group-hover:bg-[#60a5fa] dark:group-hover:text-[#0c1d3d] transition-colors duration-300">
                      <LineChart size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-[#0047AB] dark:group-hover:text-[#60a5fa] transition-colors">{t('about.exp_f4_title')}</h4>
                      <p className="text-slate-600 dark:text-white/80 text-sm leading-relaxed">{t('about.exp_f4_desc')}</p>
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* CTA Banner */}
      <div className="relative z-30 bg-white dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.3)] md:shadow-none overflow-hidden">
        <section className="py-14 md:py-16 relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden bg-white dark:bg-[#0a1628] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-200 dark:border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
            >
              {/* Background graphic */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-multiply dark:opacity-10 dark:mix-blend-overlay" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 w-full">
                <div className="w-24 h-24 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#051024] flex items-center justify-center text-[#0047AB] dark:text-[#60a5fa] shrink-0 mt-1 shadow-sm">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    <line x1="9" y1="9" x2="15" y2="9"></line>
                    <line x1="9" y1="13" x2="15" y2="13"></line>
                  </svg>
                </div>
                <div className="text-center md:text-left flex-grow">
                  <h3 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-3">
                    {t('about.cta_title')}
                  </h3>
                  <p className="text-slate-600 dark:text-white/80 text-base max-w-lg">
                    {t('about.cta_desc')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
