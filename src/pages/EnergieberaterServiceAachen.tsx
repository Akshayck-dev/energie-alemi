import { Handshake, Search, ArrowLeftRight, CheckSquare, Calendar, ArrowRight, ShieldCheck, MapPin, Zap, Phone } from 'lucide-react';
import { Link } from 'react-router';
import ServiceHero from '../sections/ServiceHero';
import ServiceFeatures from '../sections/ServiceFeatures';
import SectionHeader from '../components/ui/SectionHeader';
import Timeline from '../components/ui/Timeline';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';
import bgHeroDesk from '../assets/electricity hero desk.webp';
import bgHeroMob from '../assets/hero_mob.webp';
import SEO from "../components/SEO";
import { useTranslation } from 'react-i18next';

export default function EnergieberaterServiceAachen() {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const features = [
    {
      icon: <Search size={28} strokeWidth={1.5} />,
      title: isEn ? "Free tariff comparison" : "Kostenloser Tarifvergleich",
      description: isEn ? "We review your current electricity, gas, and internet contracts completely free of charge and look for the most economical offers for your household or business." : "Wir prüfen Ihre aktuellen Verträge für Strom, Gas und Internet komplett kostenlos und suchen nach den wirtschaftlich sinnvollsten Angeboten für Ihren Haushalt oder Betrieb."
    },
    {
      icon: <ArrowLeftRight size={28} strokeWidth={1.5} />,
      title: isEn ? "Switching without paperwork" : "Wechsel ohne Papierkram",
      description: isEn ? "Once we find a better tariff, we handle all the bureaucracy for you – from cancelling the old contract to registering with the new provider." : "Wenn wir einen besseren Tarif gefunden haben, übernehmen wir die gesamte Bürokratie für Sie. Von der Kündigung des alten Vertrags bis zur Anmeldung beim neuen Anbieter."
    },
    {
      icon: <MapPin size={28} strokeWidth={1.5} />,
      title: isEn ? "In person in Aachen" : "Persönlich vor Ort in Aachen",
      description: isEn ? "Instead of calling anonymous call centers, you\\u2019ll find us right at Alexianergraben 9 in Aachen. We advise you honestly, transparently, and at eye level." : "Anstatt mit anonymen Callcentern zu telefonieren, finden Sie uns direkt am Alexianergraben 9 in Aachen. Wir beraten Sie ehrlich, transparent und auf Augenhöhe."
    },
    {
      icon: <ShieldCheck size={28} strokeWidth={1.5} />,
      title: isEn ? "Long-term support" : "Langfristige Betreuung",
      description: isEn ? "Even after the switch, we remain your dedicated contact. If prices rise or your cancellation period is about to expire, we review your tariff again." : "Auch nach dem Wechsel bleiben wir Ihr fester Ansprechpartner. Bei einer Preiserhöhung oder vor Ablauf der Kündigungsfrist prüfen wir Ihren Tarif erneut."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Calendar size={24} />,
      title: isEn ? "1. Book an appointment" : "1. Termin vereinbaren",
      description: isEn ? "Contact us by phone at 0176 659 493 90, via WhatsApp, or visit us directly at our office at Alexianergraben 9 in Aachen (Mon\\u2013Sat 10am\\u20137pm). Just bring your last annual statement." : "Kontaktieren Sie uns telefonisch unter 0176 659 493 90, per WhatsApp oder besuchen Sie uns direkt in unserem Büro am Alexianergraben 9 in Aachen (Mo–Sa 10–19 Uhr). Bringen Sie einfach Ihre letzte Jahresabrechnung mit."
    },
    {
      number: 2,
      icon: <Search size={24} />,
      title: isEn ? "2. Tariff check & consultation" : "2. Tarif-Check & Beratung",
      description: isEn ? "We analyze your current consumption and the terms of your existing contract. Then we compare the market\\u2019s offers and transparently show you how much money you can save by switching." : "Wir analysieren Ihren aktuellen Verbrauch und die Konditionen Ihres bestehenden Vertrags. Anschließend vergleichen wir die Angebote des Marktes und zeigen Ihnen transparent auf, wie viel Geld Sie durch einen Wechsel sparen können."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: isEn ? "3. We handle the switch" : "3. Wir übernehmen den Wechsel",
      description: isEn ? "If you choose a cheaper tariff, you give us the go-ahead to switch. We take care of the legally compliant cancellation of your old contract and seamlessly register you with your new preferred provider." : "Wenn Sie sich für einen günstigeren Tarif entscheiden, erteilen Sie uns die Wechselfreigabe. Wir kümmern uns um die rechtssichere Kündigung Ihres alten Vertrags und melden Sie nahtlos beim neuen Wunschanbieter an."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: isEn ? "4. Save money permanently" : "4. Dauerhaft Geld sparen",
      description: isEn ? "Your energy supply continues uninterrupted, while you noticeably save costs from the new delivery start (usually after 3 to 6 weeks). We remain your local contact for all energy questions afterwards." : "Ihre Energieversorgung läuft ununterbrochen weiter, während Sie ab dem neuen Lieferbeginn (meist nach 3 bis 6 Wochen) spürbar Kosten sparen. Wir bleiben auch danach Ihr lokaler Ansprechpartner für alle Energie-Fragen."
    }
  ];

  const faqs = [
    {
      question: isEn ? "What does an energy tariff consultant do?" : "Was macht ein Energieberater für Tarife?",
      answer: isEn ? "An energy tariff consultant (like Energie Alemi) analyzes your existing contracts for electricity, gas, and internet. We compare the terms with the current market, uncover hidden costs, and handle the complete switch to a cheaper provider for you to permanently lower your monthly fixed costs." : "Ein Energieberater für Tarife (wie die Energie Alemi) analysiert Ihre bestehenden Verträge für Strom, Gas und Internet. Wir vergleichen die Konditionen mit dem aktuellen Markt, decken versteckte Kosten auf und übernehmen für Sie den kompletten Wechsel zu einem günstigeren Anbieter, um Ihre monatlichen Fixkosten dauerhaft zu senken."
    },
    {
      question: isEn ? "What does the consultation at Energie Alemi cost?" : "Was kostet die Beratung bei Energie Alemi?",
      answer: isEn ? "Our consultation and complete switching service are 100% free for you. We finance our service exclusively through fair commissions that we receive directly from the respective energy providers and grid operators \\u2013 with no hidden fees or extra costs for our customers." : "Unsere Beratung und der komplette Wechselservice sind für Sie zu 100% kostenlos. Wir finanzieren unsere Dienstleistung ausschließlich über faire Provisionen, die wir direkt von den jeweiligen Energieanbietern und Netzbetreibern erhalten – ganz ohne versteckte Gebühren oder Mehrkosten für unsere Kunden."
    },
    {
      question: isEn ? "Do you also handle energy-efficient building renovation?" : "Sind Sie auch für die energetische Sanierung zuständig?",
      answer: isEn ? "No, Energie Alemi is explicitly not responsible for building energy consulting. We do not create renovation roadmaps, issue energy performance certificates, or advise on government subsidies for heat pumps or facade insulation. Certified BAFA energy-efficiency experts are responsible for that. We specialize purely in tariff optimization." : "Nein, Energie Alemi ist ausdrücklich nicht für die Gebäudeenergieberatung zuständig. Wir erstellen keine Sanierungsfahrpläne, stellen keine Energieausweise aus und beraten nicht zu staatlichen Förderungen für Wärmepumpen oder Fassadendämmung. Hierfür sind zertifizierte Energie-Effizienz-Experten der BAFA zuständig. Wir sind rein auf die Tarifoptimierung spezialisiert."
    },
    {
      question: isEn ? "Do I have to come to Aachen?" : "Muss ich nach Aachen kommen?",
      answer: isEn ? "No, you don\\u2019t necessarily have to visit our office at Alexianergraben 9. Although we\\u2019d love to welcome you in person, we also offer our full consultation and switching service conveniently by phone, email, or WhatsApp. You can simply send us your documents digitally." : "Nein, Sie müssen nicht zwingend in unser Büro am Alexianergraben 9 kommen. Obwohl wir uns sehr über einen persönlichen Besuch freuen, bieten wir unsere gesamte Beratung und den Wechselservice auch bequem per Telefon, E-Mail oder über WhatsApp an. Sie können uns Ihre Unterlagen einfach digital zusenden."
    },
    {
      question: isEn ? "How quickly will I see savings?" : "Wie schnell sehe ich eine Ersparnis?",
      answer: isEn ? "You\\u2019ll notice the savings right from the new delivery start, which is usually 3 to 6 weeks after signing the contract \\u2013 depending on the cancellation period of your old contract. The purely technical switch at the grid operator has taken place within 24 hours since June 2025; however, your contractual cancellation periods remain decisive for the actual start date. Important when moving: be sure to register your move-in in advance \\u2013 retroactive registration has no longer been legally possible since June 2025." : "Die Ersparnis macht sich direkt ab dem neuen Lieferbeginn bemerkbar, der in der Regel 3 bis 6 Wochen nach Vertragsabschluss liegt – abhängig von der Kündigungsfrist Ihres Altvertrags. Die rein technische Umstellung beim Netzbetreiber erfolgt seit Juni 2025 innerhalb von 24 Stunden; entscheidend für den tatsächlichen Starttermin bleiben jedoch Ihre vertraglichen Kündigungsfristen. Wichtig bei einem Umzug: Melden Sie Ihren Einzug unbedingt vorab an – eine rückwirkende Anmeldung ist seit Juni 2025 gesetzlich nicht mehr möglich."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        title="Energieberater Aachen – Tarifberatung | Energie Alemi"
        description="Energieberater in Aachen: Strom, Gas & Internet – wir prüfen Ihre Verträge und finden die passenden Tarife. Kostenlos & unverbindlich, 5,0★ auf Google."
        url="/energieberater-aachen"
        faqs={faqs} 
      />
      
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Zap size={24} />}
          badgeText={isEn ? "Your local tariff consultant in Aachen" : "Ihr lokaler Tarifberater in Aachen"}
          title={isEn ? "Energy consultant in Aachen \u2013 compare tariffs, cut costs" : "Energieberater in Aachen \u2013 Tarife vergleichen, Kosten senken"}
          description={isEn ? "Energie Alemi is your tariff consultancy in Aachen: we compare and switch electricity, gas, and internet tariffs. We handle the paperwork so you save real money." : "Energie Alemi ist Ihre Tarifberatung in Aachen: Wir vergleichen und wechseln Strom-, Gas- und Internettarife. Wir kümmern uns um den Papierkram, damit Sie bares Geld sparen."}
          bgImage={bgHeroDesk}
          bgImageMobile={bgHeroMob}
          buttonText={isEn ? "Request free consultation" : "Kostenlose Beratung anfordern"}
          onButtonClick={() => {
            window.location.href = '/contact';
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: isEn ? "100% Free consultation" : "100% Kostenlose Beratung" },
            { icon: <MapPin size={24} />, title: isEn ? "Office at Alexianergraben 9" : "Büro am Alexianergraben 9" },
            { icon: <Phone size={24} />, title: isEn ? "0176 659 493 90 (Mon-Sat)" : "0176 659 493 90 (Mo-Sa)" },
          ]}
          accentColor="bg-blue-600 hover:bg-blue-700"
          bgAltText={isEn ? "Consultation at Energie Alemi in Aachen" : "Beratung bei Energie Alemi in Aachen"}
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <div className="prose dark:prose-invert prose-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-none space-y-6 mb-16">
            <p className="text-xl font-medium text-slate-900 dark:text-white">
              {isEn ? 'Energie Alemi is your tariff consultancy in Aachen: we compare and switch electricity, gas, and internet tariffs. No building energy consulting, no renovation roadmaps, no subsidy advice for insulation or heating \u2013 instead, we honestly specialize in tariffs.' : 'Energie Alemi ist Ihre Tarifberatung in Aachen: Wir vergleichen und wechseln Strom-, Gas- und Internettarife. Keine Gebäudeenergieberatung, keine Sanierungsfahrpläne, keine Förderberatung für Dämmung oder Heizung \u2013 dafür sind wir ehrlich spezialisiert auf Tarife.'}
            </p>
            <p>
              {isEn ? 'In recent years, the energy market has increasingly become a complex web of fluctuating exchange prices, government levies, variable grid fees, and hard-to-understand bonus structures. Anyone trying to keep track of it all as a layperson quickly reaches their limits. An independent energy consultant who watches the market daily offers the decisive advantage here. At Energie Alemi, we don\u2019t just take the research and tedious comparison off your hands \u2013 we also assess the reliability of providers. Because not every cheap provider is a good provider. We make sure you don\u2019t end up in a cost trap or with an insolvent supplier when switching.' : 'In den letzten Jahren hat sich der Energiemarkt zunehmend zu einem komplexen Gebilde aus schwankenden Börsenpreisen, staatlichen Abgaben, variablen Netzentgelten und schwer durchschaubaren Bonusstrukturen entwickelt. Wer hier als Laie versucht, den absoluten Durchblick zu behalten, stößt schnell an seine Grenzen. Ein unabhängiger Energieberater, der den Markt täglich beobachtet, bietet hier den entscheidenden Vorteil. Wir von Energie Alemi nehmen Ihnen nicht nur die Recherche und den lästigen Vergleich ab, sondern bewerten auch die Seriosität der Anbieter. Denn nicht jeder günstige Anbieter ist auch ein guter Anbieter. Wir stellen sicher, dass Sie bei einem Wechsel nicht in einer Kostenfalle oder bei einem insolventen Versorger landen.'}
            </p>
            <p>
              {isEn ? 'The steadily rising cost of living is an enormous financial burden for many households and businesses. A large share of these fixed costs goes to energy supply and telecommunications. Many consumers pay hundreds of euros too much month after month because they\u2019re stuck in outdated, overpriced contracts or stay in the expensive basic supply tariff out of convenience and respect for the bureaucratic effort. This is exactly where we come in as your dedicated energy consultant: we\u2019ve made it our mission to make the confusing German tariff jungle transparent for you and to drastically reduce your ongoing fixed costs \u2013 without you having to deal with annoying fine print or endless hold queues yourself.' : 'Die stetig steigenden Lebenshaltungskosten sind für viele Haushalte und Unternehmen eine enorme finanzielle Belastung. Ein Großteil dieser Fixkosten entfällt auf die Energieversorgung und die Telekommunikation. Viele Verbraucher zahlen Monat für Monat Hunderte Euro zu viel, weil sie in veralteten, überteuerten Verträgen feststecken oder aus Bequemlichkeit und Respekt vor dem bürokratischen Aufwand im teuren Grundversorgungstarif verbleiben. Genau an diesem Punkt kommen wir als Ihr engagierter Energieberater ins Spiel: Wir haben es uns zur Aufgabe gemacht, den unübersichtlichen deutschen Tarifdschungel für Sie transparent zu machen und Ihre laufenden Fixkosten drastisch zu senken \u2013 ohne dass Sie sich selbst mit lästigem Kleingedrucktem oder endlosen Warteschleifen herumärgern müssen.'}
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6">{isEn ? "What your energy consultant at Energie Alemi does for you" : "Was Ihr Energieberater bei Energie Alemi für Sie tut"}</h2>
            <p>
              {isEn ? 'Our service goes far beyond a simple online comparison. We offer you a holistic, personal all-round service. First, we review your current electricity, gas, or internet tariff together with you. We take a close look at the contract term, the remaining cancellation period, the fixed base price, and the decisive usage price. We often uncover hidden cost traps that weren\u2019t apparent at first glance.' : 'Unsere Dienstleistung geht weit über einen simplen Online-Vergleich hinaus. Wir bieten Ihnen einen ganzheitlichen, persönlichen Rundum-Service. Zunächst prüfen wir gemeinsam mit Ihnen Ihren aktuellen Strom-, Gas- oder Internettarif. Wir schauen uns die Vertragslaufzeit, die verbleibende Kündigungsfrist, den festen Grundpreis und den entscheidenden Arbeitspreis ganz genau an. Häufig decken wir dabei versteckte Kostenfallen auf, die auf den ersten Blick gar nicht ersichtlich waren.'}
            </p>
            <p>
              {isEn ? 'We then compare the terms of your old contract with the currently cheapest and most reliable offers on the market. If we find a clearly better offer, we discuss it with you transparently and honestly. Give us the go-ahead, ' : 'Anschließend vergleichen wir die Konditionen Ihres Altvertrags mit den aktuell günstigsten und zuverlässigsten Angeboten am Markt. Wenn wir ein deutlich besseres Angebot finden, besprechen wir dieses transparent und ehrlich mit Ihnen. Erteilen Sie uns die Freigabe, '}<Link to="/energievertrag-wechseln-lassen" className="text-blue-600 dark:text-blue-400 hover:underline">{isEn ? 'we\u2019ll handle the complete switch for you' : 'übernehmen wir den kompletten Wechsel für Sie'}</Link>{isEn ? '. We cancel your old contract on time and in compliance with the law, and simultaneously register you with your new provider.' : '. Wir kündigen Ihren alten Vertrag fristgerecht und rechtssicher und melden Sie zeitgleich bei Ihrem neuen Versorger an.'} 
            </p>
            <p>
              {isEn ? 'But our work doesn\u2019t end after the first switch. A good energy consultant thinks long-term: we keep an eye on your contracts and proactively contact you if a sudden price increase is looming or your cancellation period is about to expire. In such cases, we check the market again and switch you to a cheaper provider if needed. This guarantees you permanently optimized tariffs.' : 'Doch unsere Arbeit endet nicht nach dem ersten Wechsel. Ein guter Energieberater denkt langfristig: Wir behalten Ihre Verträge im Blick und melden uns proaktiv bei Ihnen, falls eine plötzliche Preiserhöhung ansteht oder Ihre Kündigungsfrist abzulaufen droht. In solchen Fällen prüfen wir den Markt erneut und wechseln Sie bei Bedarf abermals zu einem günstigeren Anbieter. So garantieren wir Ihnen dauerhaft optimierte Tarife.'}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6">{isEn ? "Who benefits from our energy consultation?" : "Für wen lohnt sich unsere Energieberatung?"}</h2>
            <p>
              {isEn ? 'As a rule, our tariff check is worthwhile for anyone who feels they\u2019re paying too much for electricity, gas, or internet. Our service is aimed primarily at ' : 'Grundsätzlich lohnt sich unser Tarif-Check für jeden, der das Gefühl hat, zu viel für Strom, Gas oder Internet zu bezahlen. Unsere Dienstleistung richtet sich primär an '}<strong>{isEn ? 'private households across the entire Aachen city region' : 'private Haushalte in der gesamten Städteregion Aachen'}</strong>{isEn ? '. But we\u2019re also the right contact for small businesses, restaurants, retailers, and craft companies, since commercial tariffs often offer even greater optimization potential.' : '. Aber auch für kleine Betriebe, Gastronomien, Einzelhändler und Handwerksunternehmen sind wir der richtige Ansprechpartner, da gewerbliche Tarife oft noch größeres Optimierungspotenzial bieten.'}
            </p>
            <p>
              {isEn ? 'Our offer is also aimed at people who simply don\u2019t have the time or expertise to deal with cancellation periods, special termination rights, and electricity exchange price trends in their free time. Families, working professionals, and seniors especially appreciate our complete service. If, for example, you\u2019ve received an annual statement threatening a significant back payment, we\u2019ll gladly analyze the causes together with you \u2013 whether it\u2019s the tariff or the consumption \u2013 and show you concrete options to bring future advance payments back to a manageable level. We take care of everything so you can focus on the important things in your life again.' : 'Darüber hinaus richtet sich unser Angebot an Personen, die schlichtweg nicht die Zeit oder das Fachwissen haben, sich in ihrer Freizeit mit Kündigungsfristen, Sonderkündigungsrechten und der Preisentwicklung an der Strombörse auseinanderzusetzen. Gerade Familien, Berufstätige und Senioren schätzen unseren Komplettservice. Wenn Sie beispielsweise eine Jahresrechnung erhalten haben, bei der Ihnen eine erhebliche Nachzahlung droht, analysieren wir gerne gemeinsam mit Ihnen die Ursachen \u2013 ob es am Tarif oder am Verbrauch liegt \u2013 und zeigen Ihnen konkrete Handlungsoptionen auf, um die zukünftigen Abschläge wieder in ein erträgliches Maß zu senken. Wir kümmern uns um alles, damit Sie sich wieder auf die wichtigen Dinge in Ihrem Leben konzentrieren können.'}
            </p>
            <p>
              {isEn ? 'A tariff comparison becomes especially important in certain life situations:' : 'Besonders wichtig wird ein Tarifvergleich in bestimmten Lebenssituationen:'}
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>{isEn ? "When moving:" : "Bei einem Umzug:"}</strong> {isEn ? "Anyone moving into a new apartment often automatically falls into the expensive basic supply tariff. An immediate provider switch is strongly advised here." : "Wer neu in eine Wohnung einzieht, fällt oft automatisch in die teure Grundversorgung. Ein sofortiger Anbieterwechsel ist hier dringend geboten."}</li>
              <li><strong>{isEn ? "When prices rise:" : "Bei Preiserhöhungen:"}</strong> {isEn ? "If your current provider raises prices, you have a statutory special termination right. We help you exercise this right on time and switch providers quickly." : "Wenn Ihr aktueller Versorger die Preise anhebt, haben Sie ein gesetzliches Sonderkündigungsrecht. Wir helfen Ihnen, dieses Recht fristgerecht auszuüben und den Anbieter schnell zu wechseln."}</li>
              <li><strong>{isEn ? "After price guarantees expire:" : "Nach Ablauf von Preisgarantien:"}</strong> {isEn ? "Many tariffs lure customers in the first year with high bonuses and extremely low prices that rise drastically in the second year. We protect you from this \"bonus trap\"." : "Viele Tarife locken im ersten Jahr mit hohen Boni und extrem niedrigen Preisen, die im zweiten Jahr drastisch ansteigen. Wir bewahren Sie vor dieser \"Bonusfalle\"."}</li>
            </ul>
            <p>
              {isEn ? 'We don\u2019t just serve the Aachen city area. If you\u2019re looking for the best tariffs, we\u2019ll gladly support you as your competent consultant \u2013 whether you\u2019re interested in ' : 'Wir betreuen nicht nur das Aachener Stadtgebiet. Wenn Sie nach den besten Tarifen suchen, unterstützen wir Sie als Ihr kompetenter Berater auch gerne, wenn Sie sich für '} <Link to="/stromanbieter-herzogenrath" className="text-blue-600 dark:text-blue-400 hover:underline">{isEn ? 'electricity providers in Herzogenrath' : 'Stromanbieter in Herzogenrath'}</Link>, <Link to="/gasanbieter-wuerselen" className="text-blue-600 dark:text-blue-400 hover:underline">{isEn ? 'gas providers in Würselen' : 'Gasanbieter in Würselen'}</Link>, <Link to="/internetanbieter-stolberg" className="text-blue-600 dark:text-blue-400 hover:underline">{isEn ? 'internet providers in Stolberg' : 'Internetanbieter in Stolberg'}</Link>{isEn ? ' or affordable energy contracts in ' : ' oder für günstige Energieverträge in '} <Link to="/stromanbieter-eschweiler" className="text-blue-600 dark:text-blue-400 hover:underline">{isEn ? 'Eschweiler' : 'Eschweiler'}</Link>{isEn ? '. The choice is large, but we keep track of it for you.' : ' interessieren. Die Auswahl ist groß, aber wir behalten für Sie den Überblick.'}
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6">{isEn ? "What does the consultation cost?" : "Was kostet die Beratung bei uns?"}</h2>
            <p>
              {isEn ? 'This question comes up very often, and our answer is always the same honest and transparent statement: ' : 'Diese Frage wird uns sehr oft gestellt, und unsere Antwort ist stets dieselbe ehrliche und transparente Aussage: '}<strong>{isEn ? 'The complete tariff consultation and subsequent switching service are 100% free for you.' : 'Die komplette Tarifberatung und der anschließende Wechselservice sind für Sie zu 100% kostenlos.'}</strong> 
            </p>
            <p>
              {isEn ? 'How do we finance ourselves? Energie Alemi works as an independent broker. If you choose a new tariff through our consultation and we successfully conclude the contract for you, we receive a brokerage commission from the respective energy provider or internet provider. These commissions are standard in the market and don\u2019t make your tariff any more expensive.' : 'Wie finanzieren wir uns? Die Energie Alemi arbeitet als unabhängiger Vermittler. Wenn Sie sich durch unsere Beratung für einen neuen Tarif entscheiden und wir den Vertrag erfolgreich für Sie abschließen, erhalten wir von dem jeweiligen Energieversorger oder Internetanbieter eine Vermittlungsprovision. Diese Provisionen sind marktüblich und verteuern Ihren Tarif in keiner Weise.'}
            </p>
            <p>
              {isEn ? 'We can also clearly rule out hidden costs or a subscription model. Our service is no trick package for our customers, but a transparent service based on long-standing partnerships with reliable providers. Energie Alemi stands for honesty in consulting. If we find that your current tariff is already excellent and a switch wouldn\u2019t pay off for you financially, we\u2019ll tell you that openly and directly too. In that case, we actively advise against switching and stick with your existing contract. Because our top goal is not the quick deal, but a long-term, trusting collaboration with you as our customer.' : 'Auch die Frage nach versteckten Kosten oder einem Abo-Modell können wir klar verneinen. Unsere Dienstleistung ist für unsere Kunden keine Mogelpackung, sondern ein transparenter Service, der auf langjährigen Partnerschaften mit verlässlichen Versorgern beruht. Die Energie Alemi steht für Ehrlichkeit in der Beratung. Sollten wir feststellen, dass Ihr aktueller Tarif bereits hervorragend ist und sich ein Wechsel für Sie finanziell gar nicht lohnen würde, dann sagen wir Ihnen auch das ganz offen und direkt. In diesem Fall raten wir Ihnen aktiv von einem Wechsel ab und bleiben bei Ihrem bestehenden Vertrag. Denn unser oberstes Ziel ist nicht der schnelle Abschluss, sondern eine langfristige, vertrauensvolle Zusammenarbeit mit Ihnen als unserem Kunden.'}
            </p>
            <p>
              {isEn ? 'Quite the opposite: thanks to our exclusive contacts and bundled market overview, we can often offer you tariffs that you as a private customer wouldn\u2019t even find on the internet. You benefit from the best conditions, we from a fair commission \u2013 a classic win-win situation.' : 'Ganz im Gegenteil: Durch unsere exklusiven Kontakte und gebündelte Marktübersicht können wir Ihnen oft Tarife anbieten, die Sie als Privatkunde so gar nicht im Internet finden würden. Sie profitieren von besten Konditionen, wir von einer fairen Provision \u2013 eine klassische Win-Win-Situation.'}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6">{isEn ? "Why a local consultant beats an online portal" : "Warum ein lokaler Berater besser ist als ein Online-Portal"}</h2>
            <p>
              {isEn ? 'Why should you come to us when there are countless anonymous comparison portals on the internet? The decisive difference lies in ' : 'Warum sollten Sie ausgerechnet zu uns kommen, wenn es doch unzählige anonyme Vergleichsportale im Internet gibt? Der entscheidende Unterschied liegt in der '}<strong>{isEn ? 'personal and local responsibility' : 'persönlichen und lokalen Verantwortung'}</strong>{isEn ? '. With large comparison portals, you\u2019re usually on your own after signing the contract. If there are problems with the re-registration, the meter reading is wrong, or the new provider calculates the advance payment incorrectly, you often spend hours in the hold queues of impersonal call centers.' : '. Bei großen Vergleichsportalen sind Sie nach dem Abschluss des Vertrags meist auf sich allein gestellt. Gibt es Probleme bei der Ummeldung, stimmt der Zählerstand nicht oder berechnet der neue Versorger den Abschlag falsch, verbringen Sie oft Stunden in den Warteschleifen unpersönlicher Callcenter.'}
            </p>
            <p>
              {isEn ? 'As your local energy consultant in Aachen, we take exactly this hassle off your hands. Our office is conveniently located in the middle of the city, right at ' : 'Als Ihr lokaler Energieberater in Aachen übernehmen wir exakt diesen Ärger für Sie. Unser Büro befindet sich gut erreichbar mitten in der Stadt, direkt am '}<strong>Alexianergraben 9, 52064 Aachen</strong>{isEn ? '. We know the specifics of the regional grid infrastructure, the local ' : '. Wir kennen die Besonderheiten der regionalen Netzinfrastruktur, die lokalen '} <Link to="/stromanbieter-aachen" className="text-blue-600 dark:text-blue-400 hover:underline">{isEn ? 'electricity providers (e.g. STAWAG, Regionetz)' : 'Stromanbieter (z.B. STAWAG, Regionetz)'}</Link>{isEn ? ', the challenges with regional ' : ', die Herausforderungen bei den regionalen '} <Link to="/gasanbieter-aachen" className="text-blue-600 dark:text-blue-400 hover:underline">{isEn ? 'gas providers' : 'Gasanbietern'}</Link>{isEn ? ' and know which ' : ' und wissen, welche '} <Link to="/internetanbieter-aachen" className="text-blue-600 dark:text-blue-400 hover:underline">{isEn ? 'internet providers' : 'Internetanbieter'}</Link>{isEn ? ' (Telekom, Vodafone, NetAachen) truly deliver the promised performance in which districts.' : ' (Telekom, Vodafone, NetAachen) in welchen Stadtteilen wirklich die versprochene Leistung erbringen.'} 
            </p>
            <p>
              {isEn ? 'We\u2019re personally available for you ' : 'Wir sind von '}<strong>{isEn ? 'Monday to Saturday between 10:00 AM and 7:00 PM' : 'Montag bis Samstag zwischen 10:00 Uhr und 19:00 Uhr'}</strong>{isEn ? '. You can visit our office anytime with your documents, call us at ' : ' persönlich für Sie da. Sie können jederzeit mit Ihren Unterlagen in unser Büro kommen, uns unter der Nummer '}<strong>0176 659 493 90</strong>{isEn ? ' or contact us conveniently via WhatsApp. With us, you always talk to real people who know your personal situation \u2013 not a chatbot or an ever-changing call-center agent. This combination of up-to-date nationwide tariffs and excellent, honest on-site support makes Energie Alemi your strongest partner when it comes to saving on household costs.' : ' anrufen oder uns ganz bequem per WhatsApp kontaktieren. Bei uns sprechen Sie immer mit echten Menschen, die Ihre persönliche Situation kennen, und nicht mit einem Chatbot oder einem ständig wechselnden Callcenter-Agenten. Diese Kombination aus topaktuellen bundesweiten Tarifen und einer exzellenten, ehrlichen Betreuung vor Ort macht Energie Alemi zu Ihrem stärksten Partner, wenn es um das Sparen von Haushaltskosten geht.'}
            </p>
          </div>
        </div>

        <ServiceFeatures features={features} />
      </div>
      
      <div className="relative z-20 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <SectionHeader 
                    title={isEn ? <>Switching made easy <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">with Energie Alemi</span></> : <>So einfach wechseln Sie <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">mit Energie Alemi</span></>}
                    subtitle={isEn ? "The process in detail" : "Der Ablauf im Detail"}
                    align="left"
                    className="mb-8"
                  />
                  
                  <div className="prose dark:prose-invert prose-lg text-slate-600 dark:text-white/80 leading-relaxed space-y-6">
                    <p>
                      {isEn ? 'Switching energy providers or internet providers has never been this uncomplicated. Many people shy away from the bureaucratic effort \u2013 but we take exactly that effort completely off your hands.' : 'Der Wechsel des Energieanbieters oder des Internet-Providers war noch nie so unkompliziert. Viele Menschen schrecken vor dem bürokratischen Aufwand zurück \u2013 doch genau diesen Aufwand nehmen wir Ihnen komplett ab.'} 
                    </p>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 mt-8 mb-8">
                      <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-xl">{isEn ? "Your documents" : "Ihre Unterlagen"}</h3>
                      <p className="text-slate-600 dark:text-white/80 mb-4">{isEn ? "For a successful consultation and an instant tariff check, we ideally only need:" : "Für eine erfolgreiche Beratung und einen sofortigen Tarif-Check benötigen wir im Idealfall lediglich:"}</p>
                      <ul className="list-disc pl-5 space-y-3 text-slate-600 dark:text-white/80">
                        <li>{isEn ? "Your current provider\u2019s last annual statement." : "Die letzte Jahresabrechnung Ihres aktuellen Versorgers."}</li>
                        <li>{isEn ? "Your current meter reading (we can also submit this later)." : "Den aktuellen Zählerstand (können wir auch später nachreichen)."}</li>
                        <li>{isEn ? "Your customer number with your previous provider." : "Ihre Kundennummer beim bisherigen Anbieter."}</li>
                      </ul>
                    </div>
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

      <div className="relative z-30 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <SectionHeader 
              title={isEn ? "Frequently asked questions (FAQ)" : "Häufig gestellte Fragen (FAQ)"}
              subtitle={isEn ? "Useful facts about tariff consulting at Energie Alemi" : "Wissenswertes zur Tarifberatung bei Energie Alemi"}
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            <div className="text-center space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" icon={<ArrowRight size={18} className="transition-transform" />}>
                    {isEn ? 'Request free consultation' : 'Kostenlose Beratung anfordern'}
                  </Button>
                </Link>
                <a href="tel:017665949390">
                  <Button variant="outline">
                    {isEn ? 'Phone: 0176 659 493 90' : 'Telefon: 0176 659 493 90'}
                  </Button>
                </a>
                <a href="https://wa.me/4917665949390" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="bg-[#25D366]/10 text-[#25D366] border-[#25D366]/30 hover:bg-[#25D366]/20">
                    {isEn ? 'Start WhatsApp chat' : 'WhatsApp Chat starten'}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
