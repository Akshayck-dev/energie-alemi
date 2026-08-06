import { ShieldCheck, Eye, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ownerImg from '../assets/owner.png';

export default function HomePromise() {
  const { t } = useTranslation();

  return (
    <section className="py-14 md:py-24 bg-slate-50 dark:bg-[#051024] relative overflow-x-hidden md:overflow-hidden text-slate-900 dark:text-white">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0047AB]/5 rounded-full blur-[100px] pointer-events-none transform-gpu" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          
          <div className="w-full lg:w-5/12 relative z-20">
            <h3 className="text-[#0047AB] font-heading font-medium tracking-wider uppercase text-sm mb-2">
              {t('home_promise.subtitle')}
            </h3>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              {t('home_promise.title_line1')}<br />
              <span className="text-[#0047AB]">{t('home_promise.title_line2')}</span>
            </h2>
            <p className="text-slate-600 dark:text-white/80 text-base mb-12 leading-relaxed max-w-md">
              {t('home_promise.description')}
            </p>

            <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 shadow-sm rounded-lg flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-[#0047AB]" size={20} />
                </div>
                <span className="text-slate-700 dark:text-slate-300 font-medium text-xs leading-tight">{t('home_promise.feature1_line1')}<br/>{t('home_promise.feature1_line2')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 shadow-sm rounded-lg flex items-center justify-center shrink-0">
                  <Eye className="text-[#0047AB]" size={20} />
                </div>
                <span className="text-slate-700 dark:text-slate-300 font-medium text-xs leading-tight">{t('home_promise.feature2_line1')}<br/>{t('home_promise.feature2_line2')}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 shadow-sm rounded-lg flex items-center justify-center shrink-0">
                  <TrendingUp className="text-[#0047AB]" size={20} />
                </div>
                <span className="text-slate-700 dark:text-slate-300 font-medium text-xs leading-tight">{t('home_promise.feature3_line1')}<br/>{t('home_promise.feature3_line2')}</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 h-full flex justify-center lg:justify-end items-end relative mt-16 lg:mt-0">
            {/* Cut out person image */}
            <div className="relative z-10 bottom-0 w-full max-w-[600px] flex items-end justify-center lg:justify-end">
               <img 
                 src={ownerImg} 
                 alt="Advisor" 
                 className="w-full aspect-square md:aspect-auto md:h-auto md:max-h-[600px] object-cover object-top rounded-3xl shadow-xl border border-slate-200 dark:border-white/10"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-[#051024] via-transparent to-transparent z-10 rounded-3xl" />
            </div>

            {/* Blockquote card */}
            <div className="absolute bottom-12 rtl:-right-4 ltr:-left-4 lg:rtl:-right-12 lg:ltr:-left-12 z-20 bg-white dark:bg-[#0a1628] rounded-2xl p-8 max-w-sm border border-slate-100 shadow-xl hidden md:block">
              <div className="text-[#E5A937] text-6xl font-serif absolute -top-2 ltr:left-6 rtl:right-6 opacity-80 leading-none">"</div>
              <p className="text-slate-700 dark:text-slate-300 text-lg font-medium relative z-10 leading-relaxed mt-4">
                {t('home_promise.quote')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
