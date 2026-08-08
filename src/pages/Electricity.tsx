import { Search, Handshake, ArrowLeftRight, Leaf, Calendar, BarChart3, CheckSquare, Zap, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ServiceHero from '../sections/ServiceHero';
import ServiceFeatures from '../sections/ServiceFeatures';
import SectionHeader from '../components/ui/SectionHeader';
import Timeline from '../components/ui/Timeline';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';
import { cn } from '../lib/utils';
import elecHeroDesk from '../assets/electricity hero desk.webp';
import SEO from "../components/SEO";

export default function Electricity() {
  const { t, i18n } = useTranslation();
  const features = [
    {
      icon: <Search size={28} strokeWidth={1.5} />,
      title: t('elec.f1_t'),
      description: t('elec.f1_d')
    },
    {
      icon: <Handshake size={28} strokeWidth={1.5} />,
      title: t('elec.f2_t'),
      description: t('elec.f2_d')
    },
    {
      icon: <ArrowLeftRight size={28} strokeWidth={1.5} />,
      title: t('elec.f3_t'),
      description: t('elec.f3_d')
    },
    {
      icon: <Leaf size={28} strokeWidth={1.5} />,
      title: t('elec.f4_t'),
      description: t('elec.f4_d')
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Calendar size={24} />,
      title: t('elec.s1_t'),
      description: t('elec.s1_d')
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: t('elec.s2_t'),
      description: t('elec.s2_d')
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: t('elec.s3_t'),
      description: t('elec.s3_d')
    },
    {
      number: 4,
      icon: <Zap size={24} />,
      title: t('elec.s4_t'),
      description: t('elec.s4_d')
    }
  ];

  const faqs = [
    {
      question: t('elec.q1'),
      answer: t('elec.a1')
    },
    {
      question: t('elec.q2'),
      answer: t('elec.a2')
    },
    {
      question: t('elec.q3'),
      answer: t('elec.a3')
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO title="Stromvergleich" description="Jetzt Stromanbieter vergleichen und sparen. Günstige Stromtarife für Ihren Haushalt oder Ihr Unternehmen." url="/electricity" />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Zap size={24} />}
          badgeText={t('elec_hero.badge')}
          title={t('elec_hero.title')}
          description={t('elec_hero.desc')}
          bgImage={elecHeroDesk}
          buttonText={t('elec_hero.btn')}
          bulletPoints={[
            { icon: <Zap size={24} />, title: t('elec_hero.bullet1_title'), description: t('elec_hero.bullet1_desc') },
            { icon: <Clock size={24} />, title: t('elec_hero.bullet2_title'), description: t('elec_hero.bullet2_desc') },
            { icon: <ShieldCheck size={24} />, title: t('elec_hero.bullet3_title'), description: t('elec_hero.bullet3_desc') },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.5)] md:shadow-none">
        <ServiceFeatures features={features} />
      </div>
      
      {/* Timeline Section */}
      <div className="relative z-20 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.3)] md:shadow-none">
        <section className="py-14 md:py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <SectionHeader 
                    title={
                      <>
                        {t('elec.tl_t1')} <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">{t('elec.tl_t_high')}</span>
                      </>
                    }
                    subtitle={t('elec.tl_sub')}
                    align={i18n.dir() === 'rtl' ? 'right' : 'left'}
                    className="mb-8"
                  />
                  <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                    {t('elec.tl_desc')}
                  </p>
                </div>
              </div>
              <div className="lg:w-2/3">
                <Timeline steps={steps} />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <div className="relative z-30 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_50px_rgba(0,0,0,0.3)] md:shadow-none">
        <section className="py-14 md:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <SectionHeader 
              title={t('elec.faq_t')}
              subtitle={t('elec.faq_sub')}
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            <div className="text-center">
              <Button variant="primary" icon={<ArrowRight size={18} className={cn("transition-transform", i18n.dir() === 'rtl' && "rotate-180")} />} className="w-full sm:w-auto justify-center">
                {t('elec.btn')}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
