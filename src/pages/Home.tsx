import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
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
  const { t, i18n } = useTranslation();

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO url="/" image={heroDesk} />
      {/* Hero is sticky on mobile so the rest of the page slides over it */}
      <div className="sticky top-0 z-0 md:relative">
        <HomeHero />
      </div>
      
      {/* SEO Intro Section */}
      <div className="relative z-[5] bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 md:pt-20 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-[1240px] text-slate-700 dark:text-slate-300">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">{i18n.language === 'en' ? 'Your Tariff Consultancy in Aachen' : 'Ihre Tarifberatung in Aachen'}</h2>
          <p className="mb-4 text-lg leading-relaxed">
            {i18n.language === 'en' ? 'Welcome to Energie Alemi, your personal and independent tariff consultancy in the heart of Aachen. We specialize in making the energy market transparent and easy to understand for private households, commercial businesses, and industry. A free tariff comparison for electricity, gas, and internet helps you sustainably reduce high fixed costs and benefit from fair contract conditions.' : 'Herzlich willkommen bei Energie Alemi, Ihrer persönlichen und unabhängigen Tarifberatung im Herzen von Aachen. Wir sind darauf spezialisiert, für Privathaushalte, Gewerbebetriebe und die Industrie den Energiemarkt transparent und verständlich zu machen. Ein kostenloser Tarifvergleich für Strom, Gas und Internet hilft Ihnen dabei, hohe Fixkosten nachhaltig zu senken und von fairen Vertragskonditionen zu profitieren.'}
          </p>
          <p className="text-lg leading-relaxed">
            {i18n.language === 'en' ? 'As your local point of contact right here at Alexianergraben 9, we offer you completely non-binding and free advice. We take care of the detailed analysis of your existing contracts, look for hidden price increases, and find tailor-made tariffs that perfectly match your individual consumption behavior. Our service does not commit you to anything: you decide at your own pace whether you want to switch providers, while we handle all the bureaucracy, cancellation periods, and the smooth transition. Save time, hassle, and hard-earned money with our expertise. ' : 'Als lokaler Ansprechpartner direkt vor Ort am Alexianergraben 9 bieten wir Ihnen eine völlig unverbindliche und kostenfreie Beratung an. Wir übernehmen die detaillierte Analyse Ihrer bestehenden Verträge, suchen nach versteckten Preiserhöhungen und finden maßgeschneiderte Tarife, die exakt zu Ihrem individuellen Verbrauchsverhalten passen. Unser Service verpflichtet Sie zu nichts: Sie entscheiden in aller Ruhe, ob Sie den Anbieter wechseln möchten, während wir uns um die gesamte Bürokratie, Kündigungsfristen und den reibungslosen Übergang kümmern. Sparen Sie Zeit, Nerven und bares Geld mit unserer Expertise. '}<Link to="/energie-fragen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">{i18n.language === 'en' ? 'Read our answers to frequently asked energy questions' : 'Lesen Sie unsere Antworten auf häufige Energie-Fragen'}</Link>.
          </p>
        </div>
      </div>

      {/* Features slides over Intro */}
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
              title: i18n.language === 'de' ? 'Internettarife vergleichen' : t('home_services.items.internet.title'),
              description: t('home_services.items.internet.description'),
              link: '/internetanbieter-aachen'
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

      {/* SEO Process Explanation Section */}
      <div className="relative z-[35] bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-[1240px] text-slate-700 dark:text-slate-300">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">{i18n.language === 'en' ? 'How Our Consultancy Works' : 'So funktioniert die Beratung'}</h2>
          <p className="mb-4 text-lg leading-relaxed">
            {i18n.language === 'en' ? 'The path to lower energy costs is incredibly simple with Energie Alemi and structured in three clear steps. First, we analyze your personal needs: simply bring your last annual statement to our office at Alexianergraben 9 or submit your data to us online. We check your current consumption, the cancellation periods of your existing contract, and your specific preferences – for example, whether you place great value on green electricity or a particularly long price guarantee.' : 'Der Weg zu geringeren Energiekosten ist mit Energie Alemi denkbar einfach und in drei klaren Schritten strukturiert. Zunächst analysieren wir Ihren persönlichen Bedarf: Bringen Sie einfach Ihre letzte Jahresabrechnung mit in unser Büro am Alexianergraben 9 oder übermitteln Sie uns die Daten online. Wir prüfen Ihren aktuellen Verbrauch, die Kündigungsfristen Ihres bestehenden Vertrages und Ihre spezifischen Präferenzen – beispielsweise, ob Sie großen Wert auf Ökostrom oder eine besonders lange Preisgarantie legen.'}
          </p>
          <p className="text-lg leading-relaxed">
            {i18n.language === 'en' ? 'In the second step, we transparently compare hundreds of current tariffs on the energy market. We show you clearly how the monthly and annual costs are composed and what savings are possible. If you are satisfied with one of our recommendations, we accompany the entire switch in the third step. We handle the communication with the new supplier, take care of the timely cancellation with your old provider, and ensure that your electricity or gas supply continues seamlessly. This complete service is 100% free of charge for you.' : 'Im zweiten Schritt vergleichen wir transparent hunderte aktuelle Tarife auf dem Energiemarkt. Wir zeigen Ihnen übersichtlich, wie sich die monatlichen und jährlichen Kosten zusammensetzen und welche Einsparungen möglich sind. Sind Sie mit einer unserer Empfehlungen zufrieden, begleiten wir im dritten Schritt den gesamten Wechsel. Wir übernehmen die Kommunikation mit dem neuen Versorger, kümmern uns um die fristgerechte Kündigung beim alten Anbieter und stellen sicher, dass Ihre Strom- oder Gasversorgung lückenlos weiterläuft. Dieser komplette Service ist für Sie zu 100 % kostenlos.'}
          </p>
        </div>
      </div>

      {/* Promise slides over Process */}
      <div className="relative z-40 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
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

      {/* SEO Local Section */}
      <div className="relative z-[45] bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-20 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-[1240px] text-slate-700 dark:text-slate-300">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">{i18n.language === 'en' ? 'For Aachen and the Region' : 'Für Aachen und die Region'}</h2>
          <p className="text-lg leading-relaxed">
            {i18n.language === 'en' ? (
              <>Energie Alemi is deeply rooted in the region. We offer our professional tariff consultancy not only directly in the city center of Aachen but also support households and businesses throughout the surrounding area in optimizing their contracts. Whether you are looking for an <Link to="/stromanbieter-stolberg" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">affordable electricity provider in Stolberg</Link> in the historic copper city, desire detailed <Link to="/gasanbieter-eschweiler" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">advice on switching gas providers in Eschweiler</Link>, need a <Link to="/internetanbieter-herzogenrath" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">reliable internet provider for Herzogenrath</Link> in the Euregio, or are interested in current <Link to="/stromanbieter-wuerselen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">electricity tariffs in Würselen</Link> – we are your competent local partner. Do not hesitate to contact us to reduce your energy costs locally and sustainably.</>
            ) : (
              <>Energie Alemi ist fest in der Region verwurzelt. Wir bieten unsere professionelle Tarifberatung nicht nur direkt im Stadtzentrum von Aachen an, sondern unterstützen auch Haushalte und Unternehmen im gesamten Umland bei der Optimierung ihrer Verträge. Ganz gleich, ob Sie in der historischen Kupferstadt nach einem <Link to="/stromanbieter-stolberg" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">günstigen Stromanbieter in Stolberg</Link> suchen, eine ausführliche <Link to="/gasanbieter-eschweiler" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">Beratung zum Gasanbieterwechsel in Eschweiler</Link> wünschen, in der Euregio einen <Link to="/internetanbieter-herzogenrath" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">zuverlässigen Internetanbieter für Herzogenrath</Link> benötigen oder sich für aktuelle <Link to="/stromanbieter-wuerselen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">Stromtarife in Würselen</Link> interessieren – wir sind Ihr kompetenter Ansprechpartner vor Ort. Zögern Sie nicht, uns anzusprechen, um Ihre Energiekosten lokal und nachhaltig zu senken.</>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
