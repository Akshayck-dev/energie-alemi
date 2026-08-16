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
          <p className="text-[#0047AB] dark:text-[#4F8CFF] font-heading font-medium tracking-wider uppercase text-sm mb-2">
            {t('home_process.subtitle')}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t('home_process.title')}
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
                viewport={{ once: true, margin: "-100px" }}
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
  );
}
