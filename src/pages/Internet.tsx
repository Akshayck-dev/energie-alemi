import { Search, Handshake, ArrowLeftRight, Wifi, Calendar, BarChart3, CheckSquare, Settings, ArrowRight, Gauge, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useState, lazy, Suspense } from 'react';

import ServiceFeatures from '../sections/ServiceFeatures';
import { trackEvent } from '../lib/analytics';
import ServiceHero from '../sections/ServiceHero';
import SectionHeader from '../components/ui/SectionHeader';
import Timeline from '../components/ui/Timeline';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';
import { cn } from '../lib/utils';
import netHeroDesk from '../assets/internet hero desktop.webp';
import netHeroMob from '../assets/internet hero mob.webp';
import SEO from "../components/SEO";

const CompareModal = lazy(() => import('../components/CompareModal'));

export default function Internet() {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const features = [
    {
      icon: <Search size={28} strokeWidth={1.5} />,
      title: t('internet.f1_t'),
      description: t('internet.f1_d')
    },
    {
      icon: <Handshake size={28} strokeWidth={1.5} />,
      title: t('internet.f2_t'),
      description: t('internet.f2_d')
    },
    {
      icon: <ArrowLeftRight size={28} strokeWidth={1.5} />,
      title: t('internet.f3_t'),
      description: t('internet.f3_d')
    },
    {
      icon: <Wifi size={28} strokeWidth={1.5} />,
      title: t('internet.f4_t'),
      description: t('internet.f4_d')
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Calendar size={24} />,
      title: t('internet.s1_t'),
      description: t('internet.s1_d')
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: t('internet.s2_t'),
      description: t('internet.s2_d')
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: t('internet.s3_t'),
      description: t('internet.s3_d')
    },
    {
      number: 4,
      icon: <Settings size={24} />,
      title: t('internet.s4_t'),
      description: t('internet.s4_d')
    }
  ];

  const faqs = [
    {
      question: t('internet.q1'),
      answer: t('internet.a1')
    },
    {
      question: t('internet.q2'),
      answer: t('internet.a2')
    },
    {
      question: t('internet.q3'),
      answer: t('internet.a3')
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO title="Internetanbieter vergleichen Aachen: DSL & Glasfaser" description="Internetanbieter vergleichen in Aachen. Sichern Sie sich passende und schnelle Tarife für DSL, Kabel und Glasfaser." url="/internet" faqs={faqs} />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Wifi size={24} />}
          badgeText={t('net_hero.badge')}
          title={t('net_hero.title')}
          description={t('net_hero.desc')}
          bgImage={netHeroDesk}
          bgImageMobile={netHeroMob}
          buttonText={t('home_hero.contact_us', 'Contact us')}
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'internet', cta_location: 'service_hero' });
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: 'Top providers' },
            { icon: <Gauge size={24} />, title: 'Quick activation' },
            { icon: <Handshake size={24} />, title: 'Independent advice' },
          ]}
          accentColor="bg-blue-600 hover:bg-blue-700"
        />
      </div>
      
      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.5)] md:shadow-none">
        <ServiceFeatures features={features} />
      </div>
      
      <div className="relative z-20 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.3)] md:shadow-none">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <SectionHeader 
                    title={
                      <>
                        {t('internet.tl_t1')} <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">{t('internet.tl_t_high')}</span>
                      </>
                    }
                    subtitle={t('internet.tl_sub')}
                    align={i18n.dir() === 'rtl' ? 'right' : 'left'}
                    className="mb-8"
                  />
                  <p className="text-slate-600 dark:text-white/80 text-lg leading-relaxed">
                    {t('internet.tl_desc')}
                  </p>
                  <p className="text-slate-600 dark:text-white/80 text-lg leading-relaxed mt-4">
                    Profitieren Sie von unserer Aachener Tarifberatung auch in anderen Bereichen: Nutzen Sie unseren <Link to="/electricity" className="text-[#2563eb] dark:text-[#60a5fa] hover:underline font-semibold">persönlichen Stromvergleich</Link> und finden Sie <Link to="/gas" className="text-[#2563eb] dark:text-[#60a5fa] hover:underline font-semibold">passende Gastarife</Link>. Hilfreiche Informationen bietet auch unser <Link to="/ratgeber" className="text-[#2563eb] dark:text-[#60a5fa] hover:underline font-semibold">Tarif-Ratgeber</Link>.
                  </p>
                  {/* Router graphic placeholder */}
                  <div className="mt-12 opacity-80 flex flex-col items-center">
                    <div className="w-48 h-32 bg-white dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 shadow-sm rounded-xl flex items-center justify-center relative shadow-xl mb-4">
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-4">
                        <div className="w-1 h-8 bg-slate-300 dark:bg-white dark:bg-[#0a1628]/20 rounded-full"></div>
                        <div className="w-1 h-8 bg-slate-300 dark:bg-white dark:bg-[#0a1628]/20 rounded-full"></div>
                      </div>
                      <Wifi size={48} className="text-cyan-400" />
                    </div>
                    <p className="text-slate-600 dark:text-white/80 text-sm font-medium">{t('internet.tl_graphic')}</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <Timeline steps={steps} />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative z-30 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.3)] md:shadow-none">
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <SectionHeader 
              title={t('internet.faq_t')}
              subtitle={t('internet.faq_sub')}
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            <div className="text-center">
              <Button variant="primary" icon={<ArrowRight size={18} className={cn("transition-transform", i18n.dir() === 'rtl' && "rotate-180")} />} onClick={() => setIsModalOpen(true)}>
                {t('home_hero.contact_us', 'Contact us')}
              </Button>
            </div>
          </div>
        </section>
      </div>
      {isModalOpen && (
        <Suspense fallback={null}>
          <CompareModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultService="Internet" />
        </Suspense>
      )}
    </div>
  );
}
