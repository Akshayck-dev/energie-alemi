import { Link, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Zap, Flame, Wifi, ArrowRight, ShieldCheck, CheckSquare, Search, Handshake } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import { trackEvent } from '../lib/analytics';
import { cn } from '../lib/utils';
import heroDesk from '../assets/hero_desk.webp';
import heroMob from '../assets/hero_mob.webp';
import bannerDesk from '../assets/banner_desk.webp';
import bannerMob from '../assets/banner_mob.webp';

export default function Tarifberatung() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleCtaClick = () => {
    trackEvent('service_cta_click', { service_type: 'tarifberatung', cta_location: 'tarifberatung_aachen_page' });
    navigate('/contact');
  };

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/tarifberatung-aachen" 
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white dark:bg-[#0a1628]">
        <div className="absolute inset-0 z-0">
          <picture className="absolute inset-0 w-full h-full">
            <source media="(min-width: 768px)" srcSet={heroDesk} />
            <img 
              src={heroMob} 
              alt="Tarifberatung Aachen" 
              className="w-full h-full object-cover object-center" 
            />
          </picture>
          {/* LTR: dark on left, transparent on right */}
          <div className="ltr:block rtl:hidden absolute top-0 left-0 bottom-0 w-full md:w-[80%] bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/60 to-transparent z-10" />
          {/* RTL: dark on right, transparent on left */}
          <div className="rtl:block ltr:hidden absolute top-0 right-0 bottom-0 w-full md:w-[80%] bg-gradient-to-l from-[#0a1628]/95 via-[#0a1628]/60 to-transparent z-10" />
          
          {/* Subtle bottom gradient to blend with the next section */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-[#0a1628] to-transparent z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-[60%] lg:w-[55%] pt-12 md:pt-0">
            <p className="text-[#E5A937] font-heading font-medium tracking-widest uppercase mb-3 md:mb-4 text-xs">
              {t('tarifberatung.hero_badge', 'TARIFBERATUNG')}
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 md:mb-6 tracking-tight">
              {t('tarifberatung.hero_title')}
            </h1>
            <p className="text-base text-white/75 mb-8 md:mb-10 max-w-md leading-relaxed font-light">
              {t('tarifberatung.hero_desc')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-0">
              <Button 
                variant="primary" 
                className="w-full sm:w-auto justify-center bg-[#0047AB] hover:bg-[#003380] text-white font-semibold" 
                icon={<ArrowRight size={18} className="rtl:rotate-180" />} 
                onClick={handleCtaClick}
              >
                {t('tarifberatung.hero_btn_primary')}
              </Button>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto justify-center border-white/20 text-white hover:bg-white/10 hover:text-white" 
                icon={<ArrowRight size={18} className="rtl:rotate-180" />}
                onClick={() => navigate('/ratgeber')}
              >
                {t('tarifberatung.hero_btn_secondary')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-[#051024] relative z-20 overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-[#0047AB] dark:text-[#4F8CFF] font-heading font-medium tracking-wider uppercase text-sm mb-2">
              {t('tarifberatung.services_sub')}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {t('tarifberatung.services_title')}
            </h2>
          </div>
          
          {/* Services Overview Banner Image */}
          <div className="w-full h-[30vh] md:h-[50vh] rounded-[24px] overflow-hidden mb-16 shadow-[0_20px_60px_rgba(5,16,36,0.12)] border border-slate-100 dark:border-white/5 relative group">
            <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-700 group-hover:bg-black/5" />
            <picture>
              <source media="(min-width: 768px)" srcSet={bannerDesk} />
              <img 
                src={bannerMob} 
                alt="Services Overview"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
            </picture>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Strom */}
            <div className="bg-white dark:bg-[#0a1628] p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] dark:shadow-none border border-slate-100 dark:border-white/5 transition-all hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              <div className="w-16 h-16 rounded-full bg-white dark:bg-[#051024] border border-slate-100 dark:border-white/10 shadow-sm flex items-center justify-center mb-6 relative z-10 group-hover:shadow-[0_0_24px_rgba(251,191,36,0.35)] transition-shadow">
                <div className="absolute inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-amber-400/10" />
                <Zap className="text-amber-500 w-8 h-8 relative z-10 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">{t('tarifberatung.strom_title')}</h3>
              <p className="text-slate-600 dark:text-white/70 mb-8 relative z-10 flex-grow">
                {t('tarifberatung.strom_desc')}
              </p>
              <Link to="/electricity" className="inline-flex items-center text-amber-500 hover:text-amber-600 font-semibold transition-colors relative z-10 group/link mt-auto">
                {t('tarifberatung.strom_link')} <ArrowRight className={cn("w-4 h-4 transition-transform group-hover/link:translate-x-1", i18n.dir() === 'rtl' ? "mr-2 rotate-180 group-hover/link:-translate-x-1" : "ml-2")} />
              </Link>
            </div>
            {/* Gas */}
            <div className="bg-white dark:bg-[#0a1628] p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] dark:shadow-none border border-slate-100 dark:border-white/5 transition-all hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              <div className="w-16 h-16 rounded-full bg-white dark:bg-[#051024] border border-slate-100 dark:border-white/10 shadow-sm flex items-center justify-center mb-6 relative z-10 group-hover:shadow-[0_0_24px_rgba(244,63,94,0.35)] transition-shadow">
                <div className="absolute inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-rose-500/10" />
                <Flame className="text-rose-500 w-8 h-8 relative z-10 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">{t('tarifberatung.gas_title')}</h3>
              <p className="text-slate-600 dark:text-white/70 mb-8 relative z-10 flex-grow">
                {t('tarifberatung.gas_desc')}
              </p>
              <Link to="/gas" className="inline-flex items-center text-rose-500 hover:text-rose-600 font-semibold transition-colors relative z-10 group/link mt-auto">
                {t('tarifberatung.gas_link')} <ArrowRight className={cn("w-4 h-4 transition-transform group-hover/link:translate-x-1", i18n.dir() === 'rtl' ? "mr-2 rotate-180 group-hover/link:-translate-x-1" : "ml-2")} />
              </Link>
            </div>
            {/* Internet */}
            <div className="bg-white dark:bg-[#0a1628] p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] dark:shadow-none border border-slate-100 dark:border-white/5 transition-all hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              <div className="w-16 h-16 rounded-full bg-white dark:bg-[#051024] border border-slate-100 dark:border-white/10 shadow-sm flex items-center justify-center mb-6 relative z-10 group-hover:shadow-[0_0_24px_rgba(59,130,246,0.35)] transition-shadow">
                <div className="absolute inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-blue-500/10" />
                <Wifi className="text-blue-500 w-8 h-8 relative z-10 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">{t('tarifberatung.internet_title')}</h3>
              <p className="text-slate-600 dark:text-white/70 mb-8 relative z-10 flex-grow">
                {t('tarifberatung.internet_desc')}
              </p>
              <Link to="/internet" className="inline-flex items-center text-blue-500 hover:text-blue-600 font-semibold transition-colors relative z-10 group/link mt-auto">
                {t('tarifberatung.internet_link')} <ArrowRight className={cn("w-4 h-4 transition-transform group-hover/link:translate-x-1", i18n.dir() === 'rtl' ? "mr-2 rotate-180 group-hover/link:-translate-x-1" : "ml-2")} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-[#0a1628] relative z-20">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#0047AB] dark:text-[#4F8CFF] font-heading font-medium tracking-wider uppercase text-sm mb-2">
              {t('tarifberatung.process_sub')}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {t('tarifberatung.process_title')}
            </h2>
            <div className="w-16 h-[3px] bg-[#0047AB] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative mt-8 pb-[10vh] md:pb-0">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-[56px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent z-0">
              <div className="w-full h-full bg-gradient-to-r from-[#0047AB] via-[#f0a83f] to-[#0047AB] opacity-60" />
            </div>

            {[
              { icon: Search, title: t('tarifberatung.process_s1_t'), desc: t('tarifberatung.process_s1_d') },
              { icon: ShieldCheck, title: t('tarifberatung.process_s2_t'), desc: t('tarifberatung.process_s2_d') },
              { icon: Handshake, title: t('tarifberatung.process_s3_t'), desc: t('tarifberatung.process_s3_d') },
              { icon: CheckSquare, title: t('tarifberatung.process_s4_t'), desc: t('tarifberatung.process_s4_d') }
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="sticky md:relative top-[var(--card-top)] md:top-auto w-full bg-slate-50 dark:bg-[#051024] p-6 md:p-8 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.3)] md:shadow-sm flex flex-col items-center text-center mb-16 md:mb-0 gap-5 hover:scale-[1.03] hover:shadow-md hover:border-[#0047AB]/20 transition-all duration-300 group"
                  style={{ '--card-top': `calc(12vh + ${idx * 1.5}rem)`, zIndex: idx + 10 } as React.CSSProperties}
                >
                  <div className="w-16 h-16 shrink-0 rounded-full bg-white dark:bg-[#0a1628] border-2 border-[#0047AB] shadow-[0_5px_15px_rgba(0,71,171,0.15)] flex items-center justify-center text-[#0047AB] dark:text-[#f0a83f] relative mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="absolute -top-1.5 -right-1.5 text-[10px] md:text-xs font-bold bg-[#f0a83f] text-white w-5.5 h-5.5 rounded-full flex items-center justify-center shadow-md">
                      {idx + 1}
                    </span>
                    <div className="scale-100 md:scale-110">
                      <Icon className="w-6 h-6" />
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Location Section */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-[#051024] relative overflow-hidden text-slate-900 dark:text-white">
        {/* Background Graphic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0047AB]/5 rounded-full blur-[100px] pointer-events-none transform-gpu" />
        
        <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            
            <div className="w-full lg:w-1/2 relative z-20">
              <p className="text-[#0047AB] dark:text-[#4F8CFF] font-heading font-medium tracking-wider uppercase text-sm mb-2">
                {t('tarifberatung.trust_subtitle', 'Lokal & Persönlich')}
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                {t('tarifberatung.trust_title')}
              </h2>
              <p className="text-slate-600 dark:text-white/80 text-base mb-10 leading-relaxed">
                {t('tarifberatung.trust_desc')}
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 shadow-sm rounded-xl flex items-center justify-center shrink-0 mr-4">
                    <MapPin className="text-[#0047AB] dark:text-[#f0a83f]" size={24} />
                  </div>
                  <div className="pt-1">
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-1">{t('tarifberatung.trust_location')}</h5>
                    <p className="text-slate-600 dark:text-slate-300">Alexianergraben 9, 52064 Aachen</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 shadow-sm rounded-xl flex items-center justify-center shrink-0 mr-4">
                    <Phone className="text-[#0047AB] dark:text-[#f0a83f]" size={24} />
                  </div>
                  <div className="pt-1">
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-1">{t('tarifberatung.trust_phone')}</h5>
                    <p className="text-slate-600 dark:text-slate-300" dir="ltr">0176 659 493 90</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 shadow-sm rounded-xl flex items-center justify-center shrink-0 mr-4">
                    <Mail className="text-[#0047AB] dark:text-[#f0a83f]" size={24} />
                  </div>
                  <div className="pt-1">
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-1">{t('tarifberatung.trust_email')}</h5>
                    <p className="text-slate-600 dark:text-slate-300">info@energie-alemi.de</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 shadow-sm rounded-xl flex items-center justify-center shrink-0 mr-4">
                    <Clock className="text-[#0047AB] dark:text-[#f0a83f]" size={24} />
                  </div>
                  <div className="pt-1">
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-1">{t('tarifberatung.trust_hours')}</h5>
                    <p className="text-slate-600 dark:text-slate-300">{t('tarifberatung.trust_hours_val')}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center mt-12 lg:mt-0 relative z-20">
              <div className="w-full h-full min-h-[400px] lg:min-h-[500px] bg-white dark:bg-[#0a1628] rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-[0_20px_60px_rgba(5,16,36,0.05)] overflow-hidden relative flex flex-col items-center justify-center text-center p-12 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-[#051024] dark:to-[#0a1628] z-0" />
                  <div className="absolute inset-0 bg-[#0047AB]/5 dark:bg-[#0047AB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
                  
                  <div className="w-24 h-24 bg-white dark:bg-[#051024] rounded-full shadow-lg border border-slate-100 dark:border-white/5 flex items-center justify-center relative z-10 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <MapPin className="w-12 h-12 text-[#0047AB] dark:text-[#f0a83f]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">
                    {t('tarifberatung.trust_box_1')}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-lg relative z-10">
                    {t('tarifberatung.trust_box_2')}
                  </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
