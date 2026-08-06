import { ArrowRight, ShieldCheck, Award, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from '../components/ui/Button';

export default function HomeHero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[max(100vh,900px)] flex items-center py-20 md:py-32 overflow-hidden bg-white dark:bg-[#0a1628]">
      {/* Background Image / Glow Effects Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] transform-gpu" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] transform-gpu" />
        {/* Placeholder for the actual building/turbine image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#0a1628] via-white/90 dark:via-[#0a1628]/90 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-[60%] lg:w-[50%] pt-12 md:pt-0">
          <p className="text-[#E5A937] font-heading font-medium tracking-widest uppercase mb-3 md:mb-4 text-xs">
            {t('home_hero.subtitle')}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold text-slate-900 dark:text-white leading-[1.1] mb-4 md:mb-6 tracking-tight">
            {t('home_hero.title_line1')}<br />
            <span className="text-[#0047AB]">{t('home_hero.title_line2')}</span><br />
            {t('home_hero.title_line3')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-white/80 mb-8 md:mb-10 max-w-md leading-relaxed font-light">
            {t('home_hero.description_part1')}<span className="text-[#0047AB] font-medium">{t('home_hero.description_part2')}</span>{t('home_hero.description_part3')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="primary" icon={<ArrowRight size={18} className="rtl:rotate-180" />} className="w-full sm:w-auto justify-center">
              {t('home_hero.get_comparison')}
            </Button>
            <Button variant="outline" className="w-full sm:w-auto justify-center border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#051024] hover:text-slate-900 dark:hover:text-white" icon={<ArrowRight size={18} className="rtl:rotate-180" />}>
              {t('home_hero.our_services')}
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 border-t border-slate-200 dark:border-white/10 pt-8 divide-y sm:divide-y-0 divide-slate-200">
            <div className="flex items-center gap-4 text-slate-900 dark:text-white pt-4 sm:pt-0 first:pt-0">
              <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 bg-slate-50 dark:bg-[#051024] shadow-sm">
                <ShieldCheck className="text-[#0047AB]" size={20} />
              </div>
              <span className="text-sm font-medium leading-tight">{t('home_hero.feature1_line1')}<br/>{t('home_hero.feature1_line2')}</span>
            </div>
            <div className="flex items-center gap-4 text-slate-900 dark:text-white pt-4 sm:pt-0">
              <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 bg-slate-50 dark:bg-[#051024] shadow-sm">
                <Award className="text-[#0047AB]" size={20} />
              </div>
              <span className="text-sm font-medium leading-tight">{t('home_hero.feature2_line1')}<br/>{t('home_hero.feature2_line2')}</span>
            </div>
            <div className="flex items-center gap-4 text-slate-900 dark:text-white pt-4 sm:pt-0">
              <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 bg-slate-50 dark:bg-[#051024] shadow-sm">
                <User className="text-[#0047AB]" size={20} />
              </div>
              <span className="text-sm font-medium leading-tight">{t('home_hero.feature3_line1')}<br/>{t('home_hero.feature3_line2')}</span>
            </div>
          </div>
        </div>

        {/* Right side neon graphic */}
        <div className="hidden md:flex w-full md:w-[40%] lg:w-[50%] justify-end mt-12 md:mt-0 relative">
          <div className="w-80 h-80 lg:w-[450px] lg:h-[450px] rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a1628] shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex items-center justify-center relative">
            <div className="text-[#0047AB] absolute">
              {/* Complex SVG for neon graphic - flame, plug, wifi */}
              <svg width="240" height="240" viewBox="0 0 240 240" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#0047AB]">
                {/* Plug */}
                <path d="M140 60 V40 M160 60 V40 M130 60 H170 V90 Q170 110 150 110 V130 M150 110 Q130 110 130 90 V60" />
                {/* Flame */}
                <path d="M90 120 Q60 120 60 90 Q60 60 90 40 Q80 70 100 80 Q100 90 90 120" />
                <path d="M90 120 Q80 110 80 100 Q80 90 90 85" />
                {/* Wifi */}
                <path d="M80 170 Q120 140 160 170" />
                <path d="M95 185 Q120 165 145 185" />
                <circle cx="120" cy="205" r="5" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
