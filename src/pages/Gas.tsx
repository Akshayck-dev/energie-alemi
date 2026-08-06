import { Search, Handshake, ArrowLeftRight, Leaf, Calendar, BarChart3, CheckSquare, Truck, ArrowRight, Flame, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ServiceHero from '../sections/ServiceHero';
import ServiceFeatures from '../sections/ServiceFeatures';
import SectionHeader from '../components/ui/SectionHeader';
import Timeline from '../components/ui/Timeline';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';
import { cn } from '../lib/utils';
import gasHeroDesk from '../assets/gas hero desk.png';
import gasHeroMob from '../assets/gas hero mob.png';

export default function Gas() {
  const { t, i18n } = useTranslation();
  const features = [
    {
      icon: <Search size={28} strokeWidth={1.5} />,
      title: t('gas.f1_t'),
      description: t('gas.f1_d')
    },
    {
      icon: <Handshake size={28} strokeWidth={1.5} />,
      title: t('gas.f2_t'),
      description: t('gas.f2_d')
    },
    {
      icon: <ArrowLeftRight size={28} strokeWidth={1.5} />,
      title: t('gas.f3_t'),
      description: t('gas.f3_d')
    },
    {
      icon: <Leaf size={28} strokeWidth={1.5} />,
      title: t('gas.f4_t'),
      description: t('gas.f4_d')
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Calendar size={24} />,
      title: t('gas.s1_t'),
      description: t('gas.s1_d')
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: t('gas.s2_t'),
      description: t('gas.s2_d')
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: t('gas.s3_t'),
      description: t('gas.s3_d')
    },
    {
      number: 4,
      icon: <Truck size={24} />,
      title: t('gas.s4_t'),
      description: t('gas.s4_d')
    }
  ];

  const faqs = [
    {
      question: t('gas.q1'),
      answer: t('gas.a1')
    },
    {
      question: t('gas.q2'),
      answer: t('gas.a2')
    },
    {
      question: t('gas.q3'),
      answer: t('gas.a3')
    }
  ];

  return (
    <div>
      <ServiceHero 
        theme="dark"
        badgeIcon={<Flame size={24} />}
        badgeText={t('gas_hero.badge')}
        title={t('gas_hero.title')}
        description={t('gas_hero.desc')}
        bgImage={gasHeroDesk}
        bgImageMobile={gasHeroMob}
        buttonText={t('gas_hero.btn')}
        bulletPoints={[
          { icon: <CheckCircle2 size={24} />, title: t('gas_hero.bullet1_title'), description: t('gas_hero.bullet1_desc') },
          { icon: <CheckCircle2 size={24} />, title: t('gas_hero.bullet2_title'), description: t('gas_hero.bullet2_desc') },
          { icon: <CheckCircle2 size={24} />, title: t('gas_hero.bullet3_title'), description: t('gas_hero.bullet3_desc') },
        ]}
        accentColor="bg-orange-500 hover:bg-orange-600"
      />
      <ServiceFeatures features={features} />
      
      {/* Timeline Section */}
      <section className="py-24 bg-slate-50 dark:bg-[#051024]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <SectionHeader 
                  title={
                    <>
                      {t('gas.tl_t1')} <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">{t('gas.tl_t_high')}</span>
                    </>
                  }
                  subtitle={t('gas.tl_sub')}
                  align={i18n.dir() === 'rtl' ? 'right' : 'left'}
                  className="mb-8"
                />
                <p className="text-slate-600 dark:text-white/80 text-lg leading-relaxed">
                  {t('gas.tl_desc')}
                </p>
                {/* Windmill graphic placeholder */}
                <div className="mt-12 opacity-50 flex flex-col items-center">
                  <svg width="100%" height="200" viewBox="0 0 200 100" fill="none" stroke="#94a3b8" strokeWidth="1" className="mb-4">
                    <path d="M20 90 L20 40 L40 40 L40 90 Z" />
                    <circle cx="30" cy="40" r="15" />
                    <path d="M80 90 L80 20 L110 20 L110 90 Z" />
                    <rect x="85" y="30" width="8" height="8" />
                    <rect x="97" y="30" width="8" height="8" />
                    <rect x="85" y="45" width="8" height="8" />
                    <rect x="97" y="45" width="8" height="8" />
                    <path d="M150 90 L150 50 L180 50 L180 90 Z" />
                    <path d="M165 50 L165 20 M150 35 L180 35" />
                  </svg>
                  <p className="text-slate-600 dark:text-white/80 text-sm font-medium">{t('gas.tl_graphic')}</p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <Timeline steps={steps} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-[#0a1628]">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader 
            title={t('gas.faq_t')}
            subtitle={t('gas.faq_sub')}
            align="center"
            className="mb-12"
          />
          <FAQ items={faqs} className="mb-12" />
          <div className="text-center">
            <Button variant="primary" icon={<ArrowRight size={18} className={cn("transition-transform", i18n.dir() === 'rtl' && "rotate-180")} />}>
              {t('gas.btn')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
