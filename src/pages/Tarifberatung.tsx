import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { ArrowRight, Zap, Flame, Wifi, PhoneCall, Search, FileCheck, Handshake, ShieldCheck, Eye, TrendingUp } from 'lucide-react';
import ServicesSection from '../components/sections/ServicesSection';
import ProcessSection from '../components/sections/ProcessSection';
import PromiseSection from '../components/sections/PromiseSection';
import HomeFeatures from '../sections/HomeFeatures';
import SEO from "../components/SEO";

import heroDesk from '../assets/hero_desk.webp';
import heroMob from '../assets/hero_mob.webp';
import bannerDesk from '../assets/banner_desk.webp';
import bannerMob from '../assets/banner_mob.webp';
import ownerImg from '../assets/image-admin.JPG.webp';

export default function Tarifberatung() {
  const { t } = useTranslation();

  // Ensure we start at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO url="/tarifberatung-aachen" />

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
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0047AB] hover:bg-[#003380] text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                {t('tarifberatung.hero_btn_primary', 'Unverbindliche Anfrage stellen')} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section ("WILLKOMMEN BEI ENERGIE ALEMI") */}
      <HomeFeatures />
      
      {/* Services Section */}
      <div className="relative z-30 bg-white dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <ServicesSection 
          subtitle={t('tarifberatung.services_sub')}
          title={t('tarifberatung.services_title')}
          imageDesk={bannerDesk}
          imageMob={bannerMob}
          items={[
            {
              id: 'electricity',
              icon: Zap,
              color: 'text-amber-400',
              glow: 'group-hover:shadow-[0_0_24px_rgba(251,191,36,0.35)]',
              bg: 'bg-amber-400/10',
              title: t('tarifberatung.strom_title'),
              description: t('tarifberatung.strom_desc'),
              link: '/tarifberatung-aachen'
            },
            {
              id: 'gas',
              icon: Flame,
              color: 'text-rose-500',
              glow: 'group-hover:shadow-[0_0_24px_rgba(244,63,94,0.35)]',
              bg: 'bg-rose-500/10',
              title: t('tarifberatung.gas_title'),
              description: t('tarifberatung.gas_desc'),
              link: '/tarifberatung-aachen'
            },
            {
              id: 'internet',
              icon: Wifi,
              color: 'text-blue-500',
              glow: 'group-hover:shadow-[0_0_24px_rgba(59,130,246,0.35)]',
              bg: 'bg-blue-500/10',
              title: t('tarifberatung.internet_title'),
              description: t('tarifberatung.internet_desc'),
              link: '/tarifberatung-aachen'
            }
          ]}
        />
      </div>

      {/* Process section slides over Services */}
      <div className="relative z-30 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <ProcessSection 
          subtitle={t('home_process.subtitle')}
          title={t('home_process.title')}
          steps={[
            { id: 1, icon: <PhoneCall size={24} />, title: t('home_process.step1_title'), desc: t('home_process.step1_desc') },
            { id: 2, icon: <Search size={24} />, title: t('home_process.step2_title'), desc: t('home_process.step2_desc') },
            { id: 3, icon: <FileCheck size={24} />, title: t('home_process.step3_title'), desc: t('home_process.step3_desc') },
            { id: 4, icon: <Handshake size={24} />, title: t('home_process.step4_title'), desc: t('home_process.step4_desc') },
          ]}
        />
      </div>

      {/* Promise slides over Process */}
      <div className="relative z-40 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <PromiseSection 
          subtitle={''}
          titleLine1={t('tarifberatung.trust_title')}
          titleLine2={t('home_promise.title_line2')}
          description={t('tarifberatung.trust_desc')}
          features={[
            { icon: <ShieldCheck className="text-[#0047AB] dark:text-[#f0a83f]" size={20} />, text1: t('home_promise.feature1_line1'), text2: t('home_promise.feature1_line2') },
            { icon: <Eye className="text-[#0047AB] dark:text-[#f0a83f]" size={20} />, text1: t('home_promise.feature2_line1'), text2: t('home_promise.feature2_line2') },
            { icon: <TrendingUp className="text-[#0047AB] dark:text-[#f0a83f]" size={20} />, text1: t('home_promise.feature3_line1'), text2: t('home_promise.feature3_line2') },
          ]}
          image={ownerImg}
          quote={t('tarifberatung.trust_box_1')}
        />
      </div>
    </div>
  );
}
