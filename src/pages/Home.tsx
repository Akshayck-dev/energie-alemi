import { useTranslation } from 'react-i18next';
import { Zap, Flame, Wifi, PhoneCall, Search, FileCheck, Handshake, ShieldCheck, Eye, TrendingUp } from 'lucide-react';
import HomeHero from '../sections/HomeHero';
import HomeFeatures from '../sections/HomeFeatures';
import ServicesSection from '../components/sections/ServicesSection';
import ProcessSection from '../components/sections/ProcessSection';
import PromiseSection from '../components/sections/PromiseSection';
import SEO from "../components/SEO";

import heroDesk from '../assets/hero_desk.webp';
import bannerDesk from '../assets/banner_desk.webp';
import bannerMob from '../assets/banner_mob.webp';
import ownerImg from '../assets/image-admin.JPG.webp';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO url="/" image={heroDesk} />
      {/* Hero is sticky on mobile so the rest of the page slides over it */}
      <div className="sticky top-0 z-0 md:relative">
        <HomeHero />
      </div>
      
      {/* Features slides over Hero */}
      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <HomeFeatures />
      </div>
      
      {/* Services slides over Features */}
      <div className="relative z-20 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <ServicesSection 
          subtitle={t('home_services.subtitle')}
          title={<>{t('home_services.title_part1')} <span className="text-slate-400 dark:text-white/50">{t('home_services.title_part2')}</span></>}
          imageDesk={bannerDesk}
          imageMob={bannerMob}
          items={[
            {
              id: 'electricity',
              icon: Zap,
              color: 'text-amber-400',
              glow: 'group-hover:shadow-[0_0_24px_rgba(251,191,36,0.35)]',
              bg: 'bg-amber-400/10',
              title: t('home_services.items.electricity.title'),
              description: t('home_services.items.electricity.description'),
              link: '/electricity'
            },
            {
              id: 'gas',
              icon: Flame,
              color: 'text-rose-500',
              glow: 'group-hover:shadow-[0_0_24px_rgba(244,63,94,0.35)]',
              bg: 'bg-rose-500/10',
              title: t('home_services.items.gas.title'),
              description: t('home_services.items.gas.description'),
              link: '/gas'
            },
            {
              id: 'internet',
              icon: Wifi,
              color: 'text-blue-500',
              glow: 'group-hover:shadow-[0_0_24px_rgba(59,130,246,0.35)]',
              bg: 'bg-blue-500/10',
              title: t('home_services.items.internet.title'),
              description: t('home_services.items.internet.description'),
              link: '/internet'
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
          subtitle={t('home_promise.subtitle')}
          titleLine1={t('home_promise.title_line1')}
          titleLine2={t('home_promise.title_line2')}
          description={t('home_promise.description')}
          features={[
            { icon: <ShieldCheck className="text-[#0047AB] dark:text-[#f0a83f]" size={20} />, text1: t('home_promise.feature1_line1'), text2: t('home_promise.feature1_line2') },
            { icon: <Eye className="text-[#0047AB] dark:text-[#f0a83f]" size={20} />, text1: t('home_promise.feature2_line1'), text2: t('home_promise.feature2_line2') },
            { icon: <TrendingUp className="text-[#0047AB] dark:text-[#f0a83f]" size={20} />, text1: t('home_promise.feature3_line1'), text2: t('home_promise.feature3_line2') },
          ]}
          image={ownerImg}
          quote={t('home_promise.quote')}
        />
      </div>
    </div>
  );
}
