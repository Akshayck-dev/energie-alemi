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

export default function EnergieberaterServiceAachen() {
  const features = [
    {
      icon: <Search size={28} strokeWidth={1.5} />,
      title: "Kostenloser Tarifvergleich",
      description: "Wir prüfen Ihre aktuellen Verträge für Strom, Gas und Internet komplett kostenlos und suchen nach den wirtschaftlich sinnvollsten Angeboten für Ihren Haushalt oder Betrieb."
    },
    {
      icon: <ArrowLeftRight size={28} strokeWidth={1.5} />,
      title: "Wechsel ohne Papierkram",
      description: "Wenn wir einen besseren Tarif gefunden haben, übernehmen wir die gesamte Bürokratie für Sie. Von der Kündigung des alten Vertrags bis zur Anmeldung beim neuen Anbieter."
    },
    {
      icon: <MapPin size={28} strokeWidth={1.5} />,
      title: "Persönlich vor Ort in Aachen",
      description: "Anstatt mit anonymen Callcentern zu telefonieren, finden Sie uns direkt am Alexianergraben 9 in Aachen. Wir beraten Sie ehrlich, transparent und auf Augenhöhe."
    },
    {
      icon: <ShieldCheck size={28} strokeWidth={1.5} />,
      title: "Langfristige Betreuung",
      description: "Auch nach dem Wechsel bleiben wir Ihr fester Ansprechpartner. Bei einer Preiserhöhung oder vor Ablauf der Kündigungsfrist prüfen wir Ihren Tarif erneut."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Calendar size={24} />,
      title: "1. Termin vereinbaren",
      description: "Kontaktieren Sie uns telefonisch unter 0176 659 493 90, per WhatsApp oder besuchen Sie uns direkt in unserem Büro am Alexianergraben 9 in Aachen (Mo–Sa 10–19 Uhr). Bringen Sie einfach Ihre letzte Jahresabrechnung mit."
    },
    {
      number: 2,
      icon: <Search size={24} />,
      title: "2. Tarif-Check & Beratung",
      description: "Wir analysieren Ihren aktuellen Verbrauch und die Konditionen Ihres bestehenden Vertrags. Anschließend vergleichen wir die Angebote des Marktes und zeigen Ihnen transparent auf, wie viel Geld Sie durch einen Wechsel sparen können."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "3. Wir übernehmen den Wechsel",
      description: "Wenn Sie sich für einen günstigeren Tarif entscheiden, erteilen Sie uns die Wechselfreigabe. Wir kümmern uns um die rechtssichere Kündigung Ihres alten Vertrags und melden Sie nahtlos beim neuen Wunschanbieter an."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: "4. Dauerhaft Geld sparen",
      description: "Ihre Energieversorgung läuft ununterbrochen weiter, während Sie ab dem neuen Lieferbeginn (meist nach 3 bis 6 Wochen) spürbar Kosten sparen. Wir bleiben auch danach Ihr lokaler Ansprechpartner für alle Energie-Fragen."
    }
  ];

  const faqs = [
    {
      question: "Was macht ein Energieberater für Tarife?",
      answer: "Ein Energieberater für Tarife (wie die Energie Alemi) analysiert Ihre bestehenden Verträge für Strom, Gas und Internet. Wir vergleichen die Konditionen mit dem aktuellen Markt, decken versteckte Kosten auf und übernehmen für Sie den kompletten Wechsel zu einem günstigeren Anbieter, um Ihre monatlichen Fixkosten dauerhaft zu senken."
    },
    {
      question: "Was kostet die Beratung bei Energie Alemi?",
      answer: "Unsere Beratung und der komplette Wechselservice sind für Sie zu 100% kostenlos. Wir finanzieren unsere Dienstleistung ausschließlich über faire Provisionen, die wir direkt von den jeweiligen Energieanbietern und Netzbetreibern erhalten – ganz ohne versteckte Gebühren oder Mehrkosten für unsere Kunden."
    },
    {
      question: "Sind Sie auch für die energetische Sanierung zuständig?",
      answer: "Nein, Energie Alemi ist ausdrücklich nicht für die Gebäudeenergieberatung zuständig. Wir erstellen keine Sanierungsfahrpläne, stellen keine Energieausweise aus und beraten nicht zu staatlichen Förderungen für Wärmepumpen oder Fassadendämmung. Hierfür sind zertifizierte Energie-Effizienz-Experten der BAFA zuständig. Wir sind rein auf die Tarifoptimierung spezialisiert."
    },
    {
      question: "Muss ich nach Aachen kommen?",
      answer: "Nein, Sie müssen nicht zwingend in unser Büro am Alexianergraben 9 kommen. Obwohl wir uns sehr über einen persönlichen Besuch freuen, bieten wir unsere gesamte Beratung und den Wechselservice auch bequem per Telefon, E-Mail oder über WhatsApp an. Sie können uns Ihre Unterlagen einfach digital zusenden."
    },
    {
      question: "Wie schnell sehe ich eine Ersparnis?",
      answer: "Die Ersparnis macht sich direkt ab dem neuen Lieferbeginn bemerkbar, der in der Regel 3 bis 6 Wochen nach Vertragsabschluss liegt – abhängig von der Kündigungsfrist Ihres Altvertrags. Bei einem kurzfristigen Einzug in eine neue Wohnung kann die Belieferung sogar rückwirkend für bis zu 6 Wochen angemeldet werden."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        title="Energieberater Aachen: Strom, Gas & Internet sparen | Energie Alemi"
        description="Ihr Energieberater in Aachen für Strom-, Gas- und Internettarife: kostenloser Tarifvergleich, Wechsel ohne Papierkram, Beratung vor Ort am Alexianergraben 9."
        url="/energieberater-aachen"
        faqs={faqs} 
      />
      
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Zap size={24} />}
          badgeText="Ihr lokaler Tarifberater in Aachen"
          title="Energieberater in Aachen – Tarife vergleichen, Kosten senken"
          description="Energie Alemi ist Ihre Tarifberatung in Aachen: Wir vergleichen und wechseln Strom-, Gas- und Internettarife. Wir kümmern uns um den Papierkram, damit Sie bares Geld sparen."
          bgImage={bgHeroDesk}
          bgImageMobile={bgHeroMob}
          buttonText="Kostenlose Beratung anfordern"
          onButtonClick={() => {
            window.location.href = '/contact';
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: "100% Kostenlose Beratung" },
            { icon: <MapPin size={24} />, title: "Büro am Alexianergraben 9" },
            { icon: <Phone size={24} />, title: "0176 659 493 90 (Mo-Sa)" },
          ]}
          accentColor="bg-blue-600 hover:bg-blue-700"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <div className="prose dark:prose-invert prose-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-none space-y-6 mb-16">
            <p className="text-xl font-medium text-slate-900 dark:text-white">
              Energie Alemi ist Ihre Tarifberatung in Aachen: Wir vergleichen und wechseln Strom-, Gas- und Internettarife. Keine Gebäudeenergieberatung, keine Sanierungsfahrpläne, keine Förderberatung für Dämmung oder Heizung – dafür sind wir ehrlich spezialisiert auf Tarife.
            </p>
            <p>
              In den letzten Jahren hat sich der Energiemarkt zunehmend zu einem komplexen Gebilde aus schwankenden Börsenpreisen, staatlichen Abgaben, variablen Netzentgelten und schwer durchschaubaren Bonusstrukturen entwickelt. Wer hier als Laie versucht, den absoluten Durchblick zu behalten, stößt schnell an seine Grenzen. Ein unabhängiger Energieberater, der den Markt täglich beobachtet, bietet hier den entscheidenden Vorteil. Wir von Energie Alemi nehmen Ihnen nicht nur die Recherche und den lästigen Vergleich ab, sondern bewerten auch die Seriosität der Anbieter. Denn nicht jeder günstige Anbieter ist auch ein guter Anbieter. Wir stellen sicher, dass Sie bei einem Wechsel nicht in einer Kostenfalle oder bei einem insolventen Versorger landen.
            </p>
            <p>
              Die stetig steigenden Lebenshaltungskosten sind für viele Haushalte und Unternehmen eine enorme finanzielle Belastung. Ein Großteil dieser Fixkosten entfällt auf die Energieversorgung und die Telekommunikation. Viele Verbraucher zahlen Monat für Monat Hunderte Euro zu viel, weil sie in veralteten, überteuerten Verträgen feststecken oder aus Bequemlichkeit und Respekt vor dem bürokratischen Aufwand im teuren Grundversorgungstarif verbleiben. Genau an diesem Punkt kommen wir als Ihr engagierter Energieberater ins Spiel: Wir haben es uns zur Aufgabe gemacht, den unübersichtlichen deutschen Tarifdschungel für Sie transparent zu machen und Ihre laufenden Fixkosten drastisch zu senken – ohne dass Sie sich selbst mit lästigem Kleingedrucktem oder endlosen Warteschleifen herumärgern müssen.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Was Ihr Energieberater bei Energie Alemi für Sie tut</h2>
            <p>
              Unsere Dienstleistung geht weit über einen simplen Online-Vergleich hinaus. Wir bieten Ihnen einen ganzheitlichen, persönlichen Rundum-Service. Zunächst prüfen wir gemeinsam mit Ihnen Ihren aktuellen Strom-, Gas- oder Internettarif. Wir schauen uns die Vertragslaufzeit, die verbleibende Kündigungsfrist, den festen Grundpreis und den entscheidenden Arbeitspreis ganz genau an. Häufig decken wir dabei versteckte Kostenfallen auf, die auf den ersten Blick gar nicht ersichtlich waren.
            </p>
            <p>
              Anschließend vergleichen wir die Konditionen Ihres Altvertrags mit den aktuell günstigsten und zuverlässigsten Angeboten am Markt. Wenn wir ein deutlich besseres Angebot finden, besprechen wir dieses transparent und ehrlich mit Ihnen. Erteilen Sie uns die Freigabe, <Link to="/energievertrag-wechseln-lassen" className="text-blue-600 dark:text-blue-400 hover:underline">übernehmen wir den kompletten Wechsel für Sie</Link>. Wir kündigen Ihren alten Vertrag fristgerecht und rechtssicher und melden Sie zeitgleich bei Ihrem neuen Versorger an. 
            </p>
            <p>
              Doch unsere Arbeit endet nicht nach dem ersten Wechsel. Ein guter Energieberater denkt langfristig: Wir behalten Ihre Verträge im Blick und melden uns proaktiv bei Ihnen, falls eine plötzliche Preiserhöhung ansteht oder Ihre Kündigungsfrist abzulaufen droht. In solchen Fällen prüfen wir den Markt erneut und wechseln Sie bei Bedarf abermals zu einem günstigeren Anbieter. So garantieren wir Ihnen dauerhaft optimierte Tarife.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Für wen lohnt sich unsere Energieberatung?</h2>
            <p>
              Grundsätzlich lohnt sich unser Tarif-Check für jeden, der das Gefühl hat, zu viel für Strom, Gas oder Internet zu bezahlen. Unsere Dienstleistung richtet sich primär an <strong>private Haushalte in der gesamten Städteregion Aachen</strong>. Aber auch für kleine Betriebe, Gastronomien, Einzelhändler und Handwerksunternehmen sind wir der richtige Ansprechpartner, da gewerbliche Tarife oft noch größeres Optimierungspotenzial bieten.
            </p>
            <p>
              Darüber hinaus richtet sich unser Angebot an Personen, die schlichtweg nicht die Zeit oder das Fachwissen haben, sich in ihrer Freizeit mit Kündigungsfristen, Sonderkündigungsrechten und der Preisentwicklung an der Strombörse auseinanderzusetzen. Gerade Familien, Berufstätige und Senioren schätzen unseren Komplettservice. Wenn Sie beispielsweise eine Jahresrechnung erhalten haben, bei der Ihnen eine erhebliche Nachzahlung droht, analysieren wir gerne gemeinsam mit Ihnen die Ursachen – ob es am Tarif oder am Verbrauch liegt – und zeigen Ihnen konkrete Handlungsoptionen auf, um die zukünftigen Abschläge wieder in ein erträgliches Maß zu senken. Wir kümmern uns um alles, damit Sie sich wieder auf die wichtigen Dinge in Ihrem Leben konzentrieren können.
            </p>
            <p>
              Besonders wichtig wird ein Tarifvergleich in bestimmten Lebenssituationen:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Bei einem Umzug:</strong> Wer neu in eine Wohnung einzieht, fällt oft automatisch in die teure Grundversorgung. Ein sofortiger Anbieterwechsel ist hier dringend geboten.</li>
              <li><strong>Bei Preiserhöhungen:</strong> Wenn Ihr aktueller Versorger die Preise anhebt, haben Sie ein gesetzliches Sonderkündigungsrecht. Wir helfen Ihnen, dieses Recht fristgerecht auszuüben und den Anbieter schnell zu wechseln.</li>
              <li><strong>Nach Ablauf von Preisgarantien:</strong> Viele Tarife locken im ersten Jahr mit hohen Boni und extrem niedrigen Preisen, die im zweiten Jahr drastisch ansteigen. Wir bewahren Sie vor dieser "Bonusfalle".</li>
            </ul>
            <p>
              Wir betreuen nicht nur das Aachener Stadtgebiet. Wenn Sie nach den besten Tarifen suchen, unterstützen wir Sie als Ihr kompetenter Berater auch gerne, wenn Sie sich für <Link to="/stromanbieter-herzogenrath" className="text-blue-600 dark:text-blue-400 hover:underline">Stromanbieter in Herzogenrath</Link>, <Link to="/gasanbieter-wuerselen" className="text-blue-600 dark:text-blue-400 hover:underline">Gasanbieter in Würselen</Link>, <Link to="/internetanbieter-stolberg" className="text-blue-600 dark:text-blue-400 hover:underline">Internetanbieter in Stolberg</Link> oder für günstige Energieverträge in <Link to="/stromanbieter-eschweiler" className="text-blue-600 dark:text-blue-400 hover:underline">Eschweiler</Link> interessieren. Die Auswahl ist groß, aber wir behalten für Sie den Überblick.
            </p>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Was kostet die Beratung bei uns?</h2>
            <p>
              Diese Frage wird uns sehr oft gestellt, und unsere Antwort ist stets dieselbe ehrliche und transparente Aussage: <strong>Die komplette Tarifberatung und der anschließende Wechselservice sind für Sie zu 100% kostenlos.</strong> 
            </p>
            <p>
              Wie finanzieren wir uns? Die Energie Alemi arbeitet als unabhängiger Vermittler. Wenn Sie sich durch unsere Beratung für einen neuen Tarif entscheiden und wir den Vertrag erfolgreich für Sie abschließen, erhalten wir von dem jeweiligen Energieversorger oder Internetanbieter eine Vermittlungsprovision. Diese Provisionen sind marktüblich und verteuern Ihren Tarif in keiner Weise.
            </p>
            <p>
              Auch die Frage nach versteckten Kosten oder einem Abo-Modell können wir klar verneinen. Unsere Dienstleistung ist für unsere Kunden keine Mogelpackung, sondern ein transparenter Service, der auf langjährigen Partnerschaften mit verlässlichen Versorgern beruht. Die Energie Alemi steht für Ehrlichkeit in der Beratung. Sollten wir feststellen, dass Ihr aktueller Tarif bereits hervorragend ist und sich ein Wechsel für Sie finanziell gar nicht lohnen würde, dann sagen wir Ihnen auch das ganz offen und direkt. In diesem Fall raten wir Ihnen aktiv von einem Wechsel ab und bleiben bei Ihrem bestehenden Vertrag. Denn unser oberstes Ziel ist nicht der schnelle Abschluss, sondern eine langfristige, vertrauensvolle Zusammenarbeit mit Ihnen als unserem Kunden.
            </p>
            <p>
              Ganz im Gegenteil: Durch unsere exklusiven Kontakte und gebündelte Marktübersicht können wir Ihnen oft Tarife anbieten, die Sie als Privatkunde so gar nicht im Internet finden würden. Sie profitieren von besten Konditionen, wir von einer fairen Provision – eine klassische Win-Win-Situation.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Warum ein lokaler Berater besser ist als ein Online-Portal</h2>
            <p>
              Warum sollten Sie ausgerechnet zu uns kommen, wenn es doch unzählige anonyme Vergleichsportale im Internet gibt? Der entscheidende Unterschied liegt in der <strong>persönlichen und lokalen Verantwortung</strong>. Bei großen Vergleichsportalen sind Sie nach dem Abschluss des Vertrags meist auf sich allein gestellt. Gibt es Probleme bei der Ummeldung, stimmt der Zählerstand nicht oder berechnet der neue Versorger den Abschlag falsch, verbringen Sie oft Stunden in den Warteschleifen unpersönlicher Callcenter.
            </p>
            <p>
              Als Ihr lokaler Energieberater in Aachen übernehmen wir exakt diesen Ärger für Sie. Unser Büro befindet sich gut erreichbar mitten in der Stadt, direkt am <strong>Alexianergraben 9, 52064 Aachen</strong>. Wir kennen die Besonderheiten der regionalen Netzinfrastruktur, die lokalen <Link to="/stromanbieter-aachen" className="text-blue-600 dark:text-blue-400 hover:underline">Stromanbieter (z.B. STAWAG, Regionetz)</Link>, die Herausforderungen bei den regionalen <Link to="/gasanbieter-aachen" className="text-blue-600 dark:text-blue-400 hover:underline">Gasanbietern</Link> und wissen, welche <Link to="/internetanbieter-aachen" className="text-blue-600 dark:text-blue-400 hover:underline">Internetanbieter</Link> (Telekom, Vodafone, NetAachen) in welchen Stadtteilen wirklich die versprochene Leistung erbringen. 
            </p>
            <p>
              Wir sind von <strong>Montag bis Samstag zwischen 10:00 Uhr und 19:00 Uhr</strong> persönlich für Sie da. Sie können jederzeit mit Ihren Unterlagen in unser Büro kommen, uns unter der Nummer <strong>0176 659 493 90</strong> anrufen oder uns ganz bequem per WhatsApp kontaktieren. Bei uns sprechen Sie immer mit echten Menschen, die Ihre persönliche Situation kennen, und nicht mit einem Chatbot oder einem ständig wechselnden Callcenter-Agenten. Diese Kombination aus topaktuellen bundesweiten Tarifen und einer exzellenten, ehrlichen Betreuung vor Ort macht Energie Alemi zu Ihrem stärksten Partner, wenn es um das Sparen von Haushaltskosten geht.
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
                    title={<>So einfach wechseln Sie <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">mit Energie Alemi</span></>}
                    subtitle="Der Ablauf im Detail"
                    align="left"
                    className="mb-8"
                  />
                  
                  <div className="prose dark:prose-invert prose-lg text-slate-600 dark:text-white/80 leading-relaxed space-y-6">
                    <p>
                      Der Wechsel des Energieanbieters oder des Internet-Providers war noch nie so unkompliziert. Viele Menschen schrecken vor dem bürokratischen Aufwand zurück – doch genau diesen Aufwand nehmen wir Ihnen komplett ab. 
                    </p>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 mt-8 mb-8">
                      <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-xl">Ihre Unterlagen</h3>
                      <p className="text-slate-600 dark:text-white/80 mb-4">Für eine erfolgreiche Beratung und einen sofortigen Tarif-Check benötigen wir im Idealfall lediglich:</p>
                      <ul className="list-disc pl-5 space-y-3 text-slate-600 dark:text-white/80">
                        <li>Die letzte Jahresabrechnung Ihres aktuellen Versorgers.</li>
                        <li>Den aktuellen Zählerstand (können wir auch später nachreichen).</li>
                        <li>Ihre Kundennummer beim bisherigen Anbieter.</li>
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
              title="Häufig gestellte Fragen (FAQ)"
              subtitle="Wissenswertes zur Tarifberatung bei Energie Alemi"
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            <div className="text-center space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" icon={<ArrowRight size={18} className="transition-transform" />}>
                    Kostenlose Beratung anfordern
                  </Button>
                </Link>
                <a href="tel:017665949390">
                  <Button variant="outline">
                    Telefon: 0176 659 493 90
                  </Button>
                </a>
                <a href="https://wa.me/4917665949390" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="bg-[#25D366]/10 text-[#25D366] border-[#25D366]/30 hover:bg-[#25D366]/20">
                    WhatsApp Chat starten
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
