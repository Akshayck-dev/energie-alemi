import { Link, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Zap, Flame, Wifi, ArrowRight, ShieldCheck, CheckSquare, Search, Handshake } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeader from '../components/ui/SectionHeader';
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
      <section className="py-20 bg-white dark:bg-[#0a1628]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <SectionHeader
            title={t('tarifberatung.services_sub')}
            subtitle={t('tarifberatung.services_title')}
            align="center"
          />
          
          {/* Services Overview Banner Image */}
          <div className="w-full h-[30vh] md:h-[50vh] rounded-[24px] overflow-hidden mb-12 shadow-2xl relative group mt-8">
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

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Strom */}
            <div className="bg-slate-50 dark:bg-[#0f2847] p-8 rounded-2xl border border-slate-100 dark:border-white/5 transition-all hover:shadow-xl group">
              <div className="w-16 h-16 rounded-full bg-amber-400/10 flex items-center justify-center mb-6">
                <Zap className="text-amber-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('tarifberatung.strom_title')}</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                {t('tarifberatung.strom_desc')}
              </p>
              <Link to="/electricity" className="inline-flex items-center text-amber-500 hover:text-amber-600 font-semibold transition-colors">
                {t('tarifberatung.strom_link')} <ArrowRight className={cn("w-4 h-4 transition-transform", i18n.dir() === 'rtl' ? "mr-2 rotate-180" : "ml-2")} />
              </Link>
            </div>
            {/* Gas */}
            <div className="bg-slate-50 dark:bg-[#0f2847] p-8 rounded-2xl border border-slate-100 dark:border-white/5 transition-all hover:shadow-xl group">
              <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center mb-6">
                <Flame className="text-rose-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('tarifberatung.gas_title')}</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                {t('tarifberatung.gas_desc')}
              </p>
              <Link to="/gas" className="inline-flex items-center text-rose-500 hover:text-rose-600 font-semibold transition-colors">
                {t('tarifberatung.gas_link')} <ArrowRight className={cn("w-4 h-4 transition-transform", i18n.dir() === 'rtl' ? "mr-2 rotate-180" : "ml-2")} />
              </Link>
            </div>
            {/* Internet */}
            <div className="bg-slate-50 dark:bg-[#0f2847] p-8 rounded-2xl border border-slate-100 dark:border-white/5 transition-all hover:shadow-xl group">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                <Wifi className="text-blue-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('tarifberatung.internet_title')}</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                {t('tarifberatung.internet_desc')}
              </p>
              <Link to="/internet" className="inline-flex items-center text-blue-500 hover:text-blue-600 font-semibold transition-colors">
                {t('tarifberatung.internet_link')} <ArrowRight className={cn("w-4 h-4 transition-transform", i18n.dir() === 'rtl' ? "mr-2 rotate-180" : "ml-2")} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50 dark:bg-[#0f2847]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <SectionHeader
            title={t('tarifberatung.process_sub')}
            subtitle={t('tarifberatung.process_title')}
            align="center"
          />
          <div className="grid md:grid-cols-4 gap-8 mt-12 relative">
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200 dark:bg-slate-700 z-0"></div>
            {[
              { icon: Search, title: t('tarifberatung.process_s1_t'), desc: t('tarifberatung.process_s1_d') },
              { icon: ShieldCheck, title: t('tarifberatung.process_s2_t'), desc: t('tarifberatung.process_s2_d') },
              { icon: Handshake, title: t('tarifberatung.process_s3_t'), desc: t('tarifberatung.process_s3_d') },
              { icon: CheckSquare, title: t('tarifberatung.process_s4_t'), desc: t('tarifberatung.process_s4_d') }
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-white dark:bg-[#0a1628] border-4 border-slate-50 dark:border-[#0f2847] shadow-lg flex items-center justify-center mb-6 text-[#0047AB] dark:text-[#f0a83f]">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Location Section */}
      <section className="py-20 bg-white dark:bg-[#0a1628]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="bg-slate-50 dark:bg-[#0f2847] rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-white/5 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                {t('tarifberatung.trust_title')}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {t('tarifberatung.trust_desc')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className={cn("w-6 h-6 text-[#0047AB] dark:text-[#f0a83f] mt-1 shrink-0", i18n.dir() === 'rtl' ? "ml-4" : "mr-4")} />
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">{t('tarifberatung.trust_location')}</h5>
                    <p className="text-slate-600 dark:text-slate-300">Alexianergraben 9, 52064 Aachen</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className={cn("w-6 h-6 text-[#0047AB] dark:text-[#f0a83f] mt-1 shrink-0", i18n.dir() === 'rtl' ? "ml-4" : "mr-4")} />
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">{t('tarifberatung.trust_phone')}</h5>
                    <p className="text-slate-600 dark:text-slate-300" dir="ltr">0176 659 493 90</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className={cn("w-6 h-6 text-[#0047AB] dark:text-[#f0a83f] mt-1 shrink-0", i18n.dir() === 'rtl' ? "ml-4" : "mr-4")} />
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">{t('tarifberatung.trust_email')}</h5>
                    <p className="text-slate-600 dark:text-slate-300">info@energie-alemi.de</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className={cn("w-6 h-6 text-[#0047AB] dark:text-[#f0a83f] mt-1 shrink-0", i18n.dir() === 'rtl' ? "ml-4" : "mr-4")} />
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">{t('tarifberatung.trust_hours')}</h5>
                    <p className="text-slate-600 dark:text-slate-300">{t('tarifberatung.trust_hours_val')}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="w-full h-full min-h-[300px] bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden relative flex flex-col items-center justify-center text-center p-8 border border-slate-300 dark:border-slate-700">
                  <MapPin className="w-16 h-16 mb-4 text-slate-400 dark:text-slate-500" />
                  <p className="text-slate-500 dark:text-slate-400 font-medium">{t('tarifberatung.trust_box_1')}<br/>{t('tarifberatung.trust_box_2')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
