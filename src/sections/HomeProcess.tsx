import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PhoneCall, Search, FileCheck, Handshake } from 'lucide-react';

export default function HomeProcess() {
  const { t } = useTranslation();

  const steps = [
    {
      id: 1,
      icon: <PhoneCall size={24} />,
      title: t('home_process.step1_title'),
      desc: t('home_process.step1_desc'),
    },
    {
      id: 2,
      icon: <Search size={24} />,
      title: t('home_process.step2_title'),
      desc: t('home_process.step2_desc'),
    },
    {
      id: 3,
      icon: <FileCheck size={24} />,
      title: t('home_process.step3_title'),
      desc: t('home_process.step3_desc'),
    },
    {
      id: 4,
      icon: <Handshake size={24} />,
      title: t('home_process.step4_title'),
      desc: t('home_process.step4_desc'),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#051024] relative z-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h3 className="text-[#0047AB] font-heading font-medium tracking-wider uppercase text-sm mb-2">
            {t('home_process.subtitle')}
          </h3>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t('home_process.title')}
          </h2>
          <div className="w-16 h-[3px] bg-[#0047AB] mx-auto"></div>
        </div>

        {/* Sticky Stack (All Screens) */}
        <div className="relative pb-[20vh] md:pb-[30vh] mt-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="sticky w-full bg-slate-50 dark:bg-[#0a1628] p-8 md:p-12 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.4)] flex flex-col md:flex-row items-center md:items-start text-center md:text-left mb-16 md:mb-24 gap-6 md:gap-10"
              style={{ top: `calc(15vh + ${index * 1.5}rem)`, zIndex: index + 10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-white dark:bg-[#051024] border-2 border-[#0047AB] shadow-[0_5px_15px_rgba(0,71,171,0.15)] flex items-center justify-center text-[#0047AB] dark:text-[#f0a83f] relative mb-2 md:mb-0">
                <span className="absolute -top-2 -right-2 md:-top-3 md:-right-3 text-[11px] md:text-sm font-bold bg-[#f0a83f] text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shadow-md">
                  {step.id}
                </span>
                <div className="scale-100 md:scale-125">
                  {step.icon}
                </div>
              </div>
              
              <div className="flex-grow">
                <h4 className="font-heading text-xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">
                  {step.title}
                </h4>
                <p className="text-slate-600 dark:text-white/70 text-[15px] md:text-lg leading-relaxed max-w-2xl">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
