import { Search, Handshake, ArrowLeftRight, Leaf, Calendar, BarChart3, CheckSquare, Zap, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useState, lazy, Suspense } from 'react';
import ServiceHero from '../sections/ServiceHero';
import ServiceFeatures from '../sections/ServiceFeatures';
import { trackEvent } from '../lib/analytics';
import SectionHeader from '../components/ui/SectionHeader';
import Timeline from '../components/ui/Timeline';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';
import { cn } from '../lib/utils';
import elecHeroDesk from '../assets/electricity hero desk.webp';
import SEO from "../components/SEO";

const CompareModal = lazy(() => import('../components/CompareModal'));

export default function Electricity() {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <SEO url="/electricity" image={elecHeroDesk} faqs={faqs} />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Zap size={24} />}
          badgeText={t('elec_hero.badge')}
          title={t('elec_hero.title')}
          description={t('elec_hero.desc')}
          bgImage={elecHeroDesk}
          buttonText={t('home_hero.contact_us', 'Contact us')}
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'electricity', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: t('elec_hero.bullet1_title') },
            { icon: <Zap size={24} />, title: t('elec_hero.bullet2_title') },
            { icon: <Clock size={24} />, title: t('elec_hero.bullet3_title') },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <ServiceFeatures features={features} />
      </div>
      
      {/* Timeline Section */}
      <div className="relative z-20 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
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
                  <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mt-4">
                    <span>{t('elec.cross_p1')}</span>
                    <Link to="/gas" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">{t('elec.cross_l1')}</Link>
                    <span>{t('elec.cross_p2')}</span>
                    <Link to="/internet" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">{t('elec.cross_l2')}</Link>
                    <span>{t('elec.cross_p3')}</span>
                    <Link to="/ratgeber" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">{t('elec.cross_l3')}</Link>
                    <span>{t('elec.cross_p4')}</span>
                    <Link to="/ratgeber/grundversorgung-aachen-strom-gas" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">{t('elec.cross_l4')}</Link>
                    <span>{t('elec.cross_p5', i18n.language === 'en' ? ' or read our guide on ' : ' oder in unserem Ratgeber zum ')}</span>
                    <Link to="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">{t('elec.cross_l5', i18n.language === 'en' ? 'switching electricity providers' : 'Stromanbieter wechseln')}</Link>
                    <span>.</span>
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

      
      <div className="relative z-25 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <section className="py-14 md:py-24">
          <div className="container mx-auto px-6 max-w-[1000px]">
            <div className="bg-white dark:bg-[#051024] p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 dark:border-white/10 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white font-heading">{i18n.language === 'en' ? 'Electricity Costs in Aachen: What is Normal?' : 'Stromkosten in Aachen: Was ist normal?'}</h2>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Um zu beurteilen, ob Ihr aktueller Stromtarif zu teuer ist, hilft ein Blick auf die durchschnittlichen Verbrauchswerte. Der Stromverbrauch hängt stark von der Haushaltsgröße{i18n.language === 'en' ? ' and ' : ' und '}der Art der Warmwasserbereitung ab.
              </p>
              <ul className="list-disc pl-6 mb-6 text-slate-700 dark:text-slate-300 text-lg space-y-2">
                <li><strong>{i18n.language === 'en' ? '1-Person Household:' : '1-Personen-Haushalt:'}</strong> {i18n.language === 'en' ? 'approx. 1,500 kWh per year. (' : 'ca. 1.500 kWh pro Jahr. ('}<a href="/ratgeber/stromverbrauch-1-person" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">{i18n.language === 'en' ? 'Details for single households' : 'Details zum Single-Haushalt'}</a>)</li>
                <li><strong>{i18n.language === 'en' ? '2-Person Household:' : '2-Personen-Haushalt:'}</strong> {i18n.language === 'en' ? 'approx. 2,500 kWh per year. (' : 'ca. 2.500 kWh pro Jahr. ('}<a href="/ratgeber/stromverbrauch-2-personen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">{i18n.language === 'en' ? 'Details for couples' : 'Details für Paare'}</a>)</li>
                <li><strong>{i18n.language === 'en' ? '4-Person Household:' : '4-Personen-Haushalt:'}</strong> {i18n.language === 'en' ? 'approx. 4,000 kWh per year. (' : 'ca. 4.000 kWh pro Jahr. ('}<a href="/ratgeber/stromverbrauch-4-personen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">{i18n.language === 'en' ? 'Details for families' : 'Details für Familien'}</a>)</li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                Liegt Ihr Verbrauch deutlich darüber, helfen Energiespartipps. Liegen Ihre Kosten pro kWh jedoch deutlich über dem Marktdurchschnitt, sollten Sie umgehend den Tarif wechseln.
              </p>
            </div>

            <div className="bg-white dark:bg-[#051024] p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 dark:border-white/10 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white font-heading">{i18n.language === 'en' ? 'Green Electricity or Normal Electricity?' : 'Ökostrom oder Normalstrom?'}</h2>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
                Viele Kunden fragen uns, ob sich der Umstieg auf Ökostrom lohnt. Die Antwort lautet ganz klar: Ja. Strom aus erneuerbaren Energien (wie Wind-, Sonnen- oder Wasserkraft) ist in den letzten Jahren enorm konkurrenzfähig geworden.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
                Oftmals sind reine Ökostromtarife sogar günstiger als die klassischen Graustrom-Mixe der regionalen Grundversorger. Ein Wechsel zu Ökostrom bedeutet also nicht, dass Sie mehr bezahlen müssen. Im Gegenteil: Sie schonen die Umwelt{i18n.language === 'en' ? ' and ' : ' und '}entlasten gleichzeitig Ihren Geldbeutel.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                In unserer Tarifberatung weisen wir echte Ökotarife (mit Zertifikaten wie ok-power oder Grüner Strom Label) transparent aus, sodass Sie eine informierte Entscheidung treffen können.
              </p>
            </div>

            <div className="bg-white dark:bg-[#051024] p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 dark:border-white/10 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white font-heading">{i18n.language === 'en' ? 'Who benefits most from switching?' : 'Für wen lohnt sich der Wechsel besonders?'}</h2>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
                Das größte Sparpotenzial haben Haushalte, die noch nie ihren Stromanbieter gewechselt haben{i18n.language === 'en' ? ' and ' : ' und '}sich in der sogenannten Grundversorgung befinden. Die Grundversorgung ist zwar flexibel, aber strukturell oft sehr teuer.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
                Auch nach einer Preiserhöhung Ihres aktuellen Anbieters oder bei einem anstehenden Umzug ist der optimale Zeitpunkt gekommen, um aktiv zu werden. Sie profitieren dann nicht nur von besseren Kilowattstundenpreisen, sondern oft auch von attraktiven Neukundenboni.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                Erfahren Sie in unserem Ratgeber mehr darüber, wie Sie den <a href="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">{i18n.language === 'en' ? 'switch electricity providers correctly' : 'Stromanbieter richtig wechseln'}</a>{i18n.language === 'en' ? ' and ' : ' und '}Fristen optimal nutzen.
              </p>
            </div>

            <div className="bg-white dark:bg-[#051024] p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 dark:border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white font-heading">{i18n.language === 'en' ? 'Electricity, Gas & Internet from a Single Source' : 'Strom, Gas & Internet aus einer Hand'}</h2>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
                Energie Alemi bietet Ihnen den Komfort, nicht nur Ihren Stromtarif zu optimieren. Wir prüfen auf Wunsch auch Ihre Verträge für andere grundlegende Haushaltsausgaben.
              </p>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                Mit einem kombinierten Blick auf Ihre Kosten für <a href="/gas" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">{i18n.language === 'en' ? 'gas' : 'Gas'}</a>{i18n.language === 'en' ? ' and ' : ' und '}<a href="/internet" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">{i18n.language === 'en' ? 'internet (DSL & fiber optics)' : 'Internet (DSL & Glasfaser)'}</a> lässt sich die Haushaltskasse oft um mehrere hundert Euro im Jahr entlasten. Wir sind Ihr zentraler Ansprechpartner für alle Versorgungsverträge in Aachen{i18n.language === 'en' ? ' and ' : ' und '}bundesweit.
              </p>
            </div>
          </div>
        </section>
      </div>
{/* FAQ Section */}
      <div className="relative z-30 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
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
              <Button variant="primary" icon={<ArrowRight size={18} className={cn("transition-transform", i18n.dir() === 'rtl' && "rotate-180")} />} className="w-full sm:w-auto justify-center" onClick={() => setIsModalOpen(true)}>
                {t('home_hero.contact_us', 'Contact us')}
              </Button>
            </div>
          </div>
        </section>
      </div>
      {isModalOpen && (
        <Suspense fallback={null}>
          <CompareModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultService="Strom" />
        </Suspense>
      )}
    </div>
  );
}
