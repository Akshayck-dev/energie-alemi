import { Link } from 'react-router';
import { 
  Building2, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  Phone, 
  FileText, 
  Stethoscope, 
  Utensils, 
  ShoppingBag, 
  Wrench, 
  Zap, 
  Flame, 
  Wifi, 
  MapPin, 
  Sparkles, 
  Scale, 
  RefreshCw, 
  HelpCircle, 
  TrendingDown, 
  ChevronRight, 
  Handshake, 
  Check,
  Users
} from 'lucide-react';
import SEO from '../components/SEO';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';
import ContactForm from '../components/ContactForm';
import { trackEvent } from '../lib/analytics';

export default function Gewerbe() {
  const faqs = [
    {
      question: "Ab welchem Jahresverbrauch lohnt sich eine gewerbliche Energieberatung in Aachen?",
      answer: "Eine professionelle Tarifoptimierung lohnt sich für jeden Gewerbebetrieb – vom kleinen Freiberufler-Büro mit 3.000 kWh Stromverbrauch bis hin zum mittelständischen Handwerks- oder Produktionsbetrieb mit über 100.000 kWh. Während kleine Betriebe oft in teuren Standard-Gewerbetarifen festhängen, profitieren größere Abnehmer von individuellen Ausschreibungen und Bündelungskonditionen an der Strombörse."
    },
    {
      question: "Welche Unterlagen benötigt Energie Alemi für die B2B-Tarifanalyse?",
      answer: "Für eine fundierte Analyse benötigen wir lediglich Ihre jeweils letzte Jahresabrechnung für Strom und Gas sowie optional die aktuelle Internet- bzw. Telefonrechnung. Bei größeren Gewerbekunden mit registrierender Leistungsmessung (RLM) ist zusätzlich der 1/4-Stunden-Lastgang des Netzbetreibers hilfreich. Senden Sie uns die Dokumente einfach digital per E-Mail oder WhatsApp zu oder bringen Sie diese in unser Aachener Büro mit."
    },
    {
      question: "Entstehen für unser Unternehmen Kosten für die Beratung oder den Wechsel?",
      answer: "Nein. Unsere Tarifanalyse, Marktverhandlung und die gesamte Wechselbegleitung sind für Ihr Unternehmen zu 100 % kostenfrei und unverbindlich. Als unabhängige Tarifberater finanzieren wir unseren Service über marktübliche Abwicklungsprovisionen, die von den Energie- und Telekommunikationsanbietern getragen werden – ohne jeden Aufschlag auf Ihre Verbrauchspreise."
    },
    {
      question: "Besteht beim Wechsel des Strom-, Gas- oder Internetanbieters ein Risiko für den Betriebsablauf?",
      answer: "Nein, eine Unterbrechung Ihrer Energieversorgung ist in Deutschland gesetzlich ausgeschlossen (§ 36 EnWG). Strom und Gas fließen während des Wechsels unterbrechungsfrei über das bestehende Verteilnetz weiter. Bei Internet- und Telefonanschlüssen koordinieren wir den Portierungstermin exakt so, dass Ihre geschäftliche Erreichbarkeit nahtlos erhalten bleibt."
    },
    {
      question: "Was unterscheidet Standardlastprofil- (SLP) von registrierender Leistungsmessung (RLM)?",
      answer: "Kleinere Gewerbebetriebe (bis ca. 100.000 kWh Strom bzw. 1,5 Mio. kWh Gas pro Jahr) werden über Standardlastprofile (SLP) abgerechnet. Größere Unternehmen verfügen über RLM-Zähler, die den tatsächlichen Leistungsbedarf im Viertelstundentakt messen. Für RLM-Kunden verhandeln wir maßgeschneiderte Tranchen- und Festpreismodelle, während wir für SLP-Gewerbe gebündelte Gewerbesondertarife sichern."
    }
  ];

  const services = [
    {
      icon: <FileText size={26} className="text-[#0047AB] dark:text-[#60a5fa]" />,
      title: "1. Unabhängige Tarifanalyse",
      description: "Wir analysieren Ihre bestehenden Verträge, Abrechnungen und Zählpunkte detailliert. Dabei prüfen wir Arbeitspreise, Grundpreise, Leistungsentgelte sowie verborgene Preisanpassungsklauseln und decken konkrete Sparpotenziale auf."
    },
    {
      icon: <Scale size={26} className="text-[#0047AB] dark:text-[#60a5fa]" />,
      title: "2. Verhandlung & Bündelung",
      description: "Als etablierter Energieberater in der Region Aachen bündeln wir Abnahmemengen und verhandeln Sonderkonditionen direkt mit Versorgern. So erhalten auch kleine und mittlere Betriebe Großkundenpreise, die im freien Markt nicht öffentlich sind."
    },
    {
      icon: <Handshake size={26} className="text-[#0047AB] dark:text-[#60a5fa]" />,
      title: "3. Kompletter Wechselservice",
      description: "Wir übernehmen die gesamte bürokratische Abwicklung für Ihr Unternehmen: von der fristgerechten Kündigung des Altvertrags über die Zählerstandserfassung bis zur nahtlosen Neuanmeldung – vollkommen ohne Unterbrechungsrisiko."
    },
    {
      icon: <RefreshCw size={26} className="text-[#0047AB] dark:text-[#60a5fa]" />,
      title: "4. Kontinuierliche Tarifüberwachung",
      description: "Nach dem Wechsel ist vor dem nächsten Einsparpotenzial. Wir überwachen Ihre Vertragslaufzeiten und Preisgarantien kontinuierlich. Rechtzeitig vor Ablauf der Frist prüfen wir den Markt erneut und sichern Folgekonditionen."
    }
  ];

  const targetIndustries = [
    {
      icon: <Briefcase size={24} className="text-blue-600 dark:text-blue-400" />,
      title: "Büros, Kanzleien & Agenturen",
      points: [
        "Planbare Energiekosten für Büroflächen & IT-Infrastruktur",
        "Hochverfügbare Gigabit-Glasfaser- & DSL-Lösungen für digitale Workflows",
        "Mehrplatzfähige Cloud-Telefonie mit fester IP-Adresse"
      ]
    },
    {
      icon: <Stethoscope size={24} className="text-emerald-600 dark:text-emerald-400" />,
      title: "Arztpraxen, Labore & Kliniken",
      points: [
        "Höchste Versorgungssicherheit für sensible Medizintechnik & Kühlketten",
        "Optimierte Stromtarife für personalintensive Öffnungszeiten",
        "Ausfallsichere Datenleitungen für Telematikinfrastruktur & Praxissoftware"
      ]
    },
    {
      icon: <Utensils size={24} className="text-amber-600 dark:text-amber-400" />,
      title: "Gastronomie & Hotellerie",
      points: [
        "Großer Hebel bei hohem Energiebedarf (Großküchen, Kühlhäuser, Lüftung)",
        "Günstige Gas- und Fernwärmetarife für Beheizung & Warmwasser",
        "WLAN-Lösungen für Gäste mit rechtssicherer Trennung vom Betriebsnetz"
      ]
    },
    {
      icon: <ShoppingBag size={24} className="text-purple-600 dark:text-purple-400" />,
      title: "Einzelhandel & Filialisten",
      points: [
        "Kostenreduktion für Dauerbeleuchtung, Klimatisierung & Schaufenster",
        "Einheitliche Rahmenverträge bei mehreren Filialen oder Standorten",
        "Stabile Anbindung für moderne Kassensysteme & EC-Terminals"
      ]
    },
    {
      icon: <Wrench size={24} className="text-rose-600 dark:text-rose-400" />,
      title: "Handwerk & Produktionsbetriebe",
      points: [
        "Tarife abgestimmt auf Maschinenparks, Schweißanlagen & Spitzenlasten",
        "Prüfung von Sonderabgaben, Konzessionsabgaben & Spitzenlastoptimierung",
        "Persönliche Betreuung direkt vor Ort im Betrieb oder auf der Baustelle"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#071120] text-slate-800 dark:text-slate-100 antialiased selection:bg-[#0047AB]/20 selection:text-[#0047AB]">
      <SEO 
        url="/gewerbe"
        title="Energieberatung Gewerbe Aachen: Kosten senken | Energie Alemi"
        description="Energieberatung für Gewerbe in Aachen: Strom, Gas & Internet optimieren. Kostenlose Tarifanalyse, Verhandlung & Wechselservice für Ihr Unternehmen."
        faqs={faqs}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white dark:bg-[#0a1628] border-b border-slate-200 dark:border-white/5 py-3">
        <div className="container mx-auto px-4 max-w-6xl">
          <nav aria-label="Breadcrumb" className="flex items-center text-xs md:text-sm text-slate-500 dark:text-slate-400 gap-2">
            <Link to="/" className="hover:text-[#0047AB] dark:hover:text-[#f0a83f] transition-colors">Startseite</Link>
            <ChevronRight size={14} className="opacity-60" />
            <span className="text-slate-900 dark:text-white font-medium truncate">Gewerbekunden Aachen</span>
          </nav>
        </div>
      </div>

      {/* Hero Header Section */}
      <header className="relative bg-gradient-to-b from-white via-blue-50/40 to-slate-50 dark:from-[#0a1628] dark:via-[#0c1a30] dark:to-[#071120] pt-12 pb-16 md:py-20 border-b border-slate-200/80 dark:border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700/50 text-[#0047AB] dark:text-[#60a5fa] text-xs sm:text-sm font-bold mb-6">
            <Building2 size={16} />
            <span>B2B-Tarifberatung für die StädteRegion Aachen</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.15] max-w-4xl">
            Strom, Gas &amp; Internet für Gewerbe in Aachen: Kosten senken
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-8">
            Steigende Energiekosten belasten die Wettbewerbsfähigkeit von Unternehmen spürbar. Ob Einzelunternehmen, Praxis, Handwerksbetrieb oder mittelständischer Filialist: Energie Alemi analysiert Ihre betrieblichen Versorgungsverträge unabhängig, verhandelt Großkundenkonditionen und übernimmt den gesamten Wechselprozess vollkommen kostenfrei für Sie.
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 mb-10">
            <Button
              variant="primary"
              size="lg"
              className="bg-[#0047AB] hover:bg-[#003380] text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-blue-900/10 text-base"
              onClick={() => {
                const el = document.getElementById('b2b-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                trackEvent('cta_click', { cta_type: 'gewerbe_hero_form', page: '/gewerbe' });
              }}
            >
              Kostenlose Erstberatung für Ihr Unternehmen
            </Button>

            <a
              href="https://wa.me/4917665949390?text=Hallo%20Energie%20Alemi,%20wir%20m%C3%B6chten%20unsere%20betrieblichen%20Energiekosten%20in%20Aachen%20optimieren."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold transition-all shadow-md text-base"
            >
              <span>Per WhatsApp anfragen</span>
            </a>

            <a
              href="tel:017665949390"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white dark:bg-[#0d1d36] hover:bg-slate-100 dark:hover:bg-[#122340] text-slate-900 dark:text-white font-bold transition-all border border-slate-200 dark:border-white/10 shadow-sm text-base"
            >
              <Phone size={18} className="text-[#0047AB] dark:text-[#f0a83f]" />
              <span>0176 659 493 90</span>
            </a>
          </div>

          {/* 4 Pillars Stat Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-200/80 dark:border-white/10">
            <div className="p-4 rounded-xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block mb-1">Einsparpotenzial</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">bis zu 30 %</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">der Energiekosten</span>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block mb-1">Unser Service</span>
              <span className="text-xl sm:text-2xl font-black text-[#0047AB] dark:text-[#60a5fa]">100 % Kostenlos</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">Erfolgsunabhängig</span>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block mb-1">Versorgungssicherheit</span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">0 Ausfallrisiko</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">gesetzlich garantiert</span>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 shadow-sm">
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block mb-1">Vor-Ort-Präsenz</span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">Aachen Zentrum</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">Alexianergraben 9</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="container mx-auto px-4 max-w-6xl py-14 md:py-20">
        <article className="space-y-20">

          {/* Section 1: Warum Unternehmen zu viel bezahlen */}
          <section id="warum-unternehmen-zu-viel-zahlen" className="scroll-mt-24">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
                <TrendingDown size={16} />
                <span>Kostenfallen im B2B-Alltag</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Warum Betriebe in Aachen oft tausende Euro zu viel für Energie bezahlen
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Im hektischen Betriebsalltag zwischen Kundenaufträgen, Personalplanung und Buchhaltung bleibt selten Zeit, die Strom-, Gas- und Telekommunikationsverträge kontinuierlich mit dem Markt abzugleichen. Genau darauf spekulieren viele etablierte Versorger. In unserer täglichen Beratungspraxis in Aachen sehen wir immer wieder die gleichen fünf Ursachen für überhöhte Betriebskosten:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Automatische Vertragsverlängerung zu Altkonditionen
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Nach Ablauf der Erstlaufzeit verlängern sich gewerbliche Energietarife häufig stillschweigend um 12 Monate. Rabatte und Neukundenvorteile verfallen, während Arbeitspreise oft stillschweigend auf teure Bestandskundentarife umgestellt werden.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Fehlende Bündelungseffekte für kleine Betriebe
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Großkonzerne verhandeln direkt an der Strombörse EEX. Einzelne Praxen, Kanzleien oder Restaurants treten Versorgern jedoch isoliert gegenüber und erhalten lediglich starre Standardkonditionen mit hohen Sicherheitsmargen.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-[#0047AB] dark:text-[#60a5fa] flex items-center justify-center font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Falsche Einstufung bei Leistung &amp; Lastprofil
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Ob Standardlastprofil (SLP) oder registrierende Leistungsmessung (RLM): Wenn Zählerwerte und tatsächliche Spitzenlasten nicht präzise analysiert werden, zahlen Betriebe unnötig hohe Bereitstellungs- und Grundpreise.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold mb-4">
                    4
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Überholte DSL- &amp; Telefonverträge im Gewerbe
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Viele Aachener Unternehmen zahlen noch für alte 16- oder 50-Mbit-Kupferleitungen den Preis moderner Gigabit-Glasfaseranschlüsse. Neben hohen Kosten leidet darunter die Produktivität im Arbeitsalltag.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col justify-between sm:col-span-2 lg:col-span-2">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold mb-4">
                    5
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Fehlende Markttransparenz bei Kündigungsfristen
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    B2B-Verträge fallen nicht unter das Verbraucherschutzgesetz für Privatkunden. Wer das Kündigungsfenster um wenige Tage verpasst, ist oft ein weiteres Jahr an überteuerte Tarife gebunden. Eine professionelle Fristenüberwachung verhindert diese Kostenfalle zuverlässig.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Unsere B2B-Leistungen */}
          <section id="unsere-leistungen" className="scroll-mt-24">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0047AB] dark:text-[#60a5fa] mb-2">
                <Briefcase size={16} />
                <span>Ganzheitliche Betreuung</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Unsere B2B-Services: So optimieren wir Ihre Betriebskosten
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Wir verstehen uns als externe Energieabteilung für Ihr Unternehmen in Aachen. Anstatt Ihnen unübersichtliche Vergleichslisten zuzusenden, übernehmen wir die Arbeit von A bis Z:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {services.map((srv, idx) => (
                <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/40 flex items-center justify-center mb-5">
                    {srv.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-slate-900 border border-blue-200 dark:border-blue-900/50 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Möchten Sie auch private Verträge oder Detailtarife prüfen?
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Entdecken Sie unsere Spezialbereiche für <Link to="/strom" className="text-[#0047AB] dark:text-[#f0a83f] font-semibold hover:underline">Gewerbestrom</Link>, <Link to="/gas" className="text-[#0047AB] dark:text-[#f0a83f] font-semibold hover:underline">Gewerbegas</Link> und <Link to="/internet" className="text-[#0047AB] dark:text-[#f0a83f] font-semibold hover:underline">Business-Internet</Link>.
                </p>
              </div>
              <Link to="/energieberater-aachen">
                <Button variant="outline" className="shrink-0 border-[#0047AB] text-[#0047AB] dark:border-white/20 dark:text-white">
                  Mehr über Energieberater Aachen
                </Button>
              </Link>
            </div>
          </section>

          {/* Section 3: Für wen wir da sind (Zielbranchen) */}
          <section id="zielbranchen" className="scroll-mt-24">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                <Users size={16} />
                <span>Branchenfokus StädteRegion Aachen</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Maßgeschneiderte Lösungen für Ihre Branche
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Jedes Gewerbe hat spezifische Verbrauchsmuster. Wir passen unsere Ausschreibungen und Tarifmodelle exakt an Ihr Geschäftsmodell an:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {targetIndustries.map((ind, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                        {ind.icon}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        {ind.title}
                      </h3>
                    </div>
                    <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                      {ind.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                          <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              {/* Special B2B Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0047AB] to-[#0a2f75] text-white flex flex-col justify-between shadow-md">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-amber-300 text-xs font-bold uppercase tracking-wider">
                    <Sparkles size={16} />
                    <span>Individuelle Betreuung</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Ihr Gewerbe ist nicht aufgeführt?
                  </h3>
                  <p className="text-sm text-blue-100 leading-relaxed mb-4">
                    Ob IT-Dienstleister, Fitnessstudio, Bildungszentrum oder Logistikbetrieb: Wir analysieren jedes Lastprofil in Aachen und entwickeln die passende Einkaufsstrategie für Sie.
                  </p>
                </div>
                <a
                  href="tel:017665949390"
                  className="inline-flex items-center gap-2 font-bold text-white hover:text-amber-300 transition-colors text-sm underline underline-offset-4"
                >
                  <span>Jetzt direkt beraten lassen</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </section>

          {/* Section 4: B2B CTA Box mit WhatsApp + Telefon + Formular */}
          <section id="b2b-form" className="scroll-mt-24 pt-4">
            <div className="rounded-3xl bg-white dark:bg-[#0a1628] border-2 border-[#0047AB]/30 dark:border-blue-500/30 p-8 sm:p-10 md:p-12 shadow-xl shadow-slate-200/50 dark:shadow-black/40">
              <div className="max-w-3xl mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-300 dark:border-emerald-700/50">
                  <ShieldCheck size={14} /> 100 % Kostenfreie Erstberatung
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                  Kostenlose Erstberatung für Ihr Unternehmen
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                  Lassen Sie Ihre aktuellen Verträge von unseren Experten prüfen. Wählen Sie Ihren bevorzugten Kontaktweg – wir melden uns innerhalb eines Werktages mit einer ersten Einschätzung bei Ihnen:
                </p>
              </div>

              {/* Quick Contact Buttons Row */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10 pb-8 border-b border-slate-200 dark:border-white/10">
                <a
                  href="https://wa.me/4917665949390?text=Hallo%20Energie%20Alemi,%20wir%20bitten%20um%20eine%20kostenlose%20B2B-Tarifanalyse%20f%C3%BCr%20unser%20Unternehmen."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold transition-all shadow-md text-base"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  <span>Direkt per WhatsApp anfragen</span>
                </a>

                <a
                  href="tel:017665949390"
                  className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-[#0047AB] hover:bg-[#003380] text-white font-bold transition-all shadow-md text-base"
                >
                  <Phone size={20} />
                  <span>Telefon: 0176 659 493 90</span>
                </a>
              </div>

              {/* Formular-Bereich */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Oder schreiben Sie uns online eine Nachricht:
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                  Füllen Sie kurz die wichtigsten Eckdaten aus. Sie erhalten zeitnah eine Rückmeldung von unserem Team in Aachen.
                </p>
                <div className="bg-slate-50 dark:bg-[#071324] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10">
                  <ContactForm />
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Häufige Fragen (FAQ) */}
          <section id="faq" className="scroll-mt-24 pt-4 border-t border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-[#0047AB] dark:text-[#60a5fa] flex items-center justify-center font-bold">
                <HelpCircle size={22} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Häufige Fragen zur Energieberatung für Gewerbe (FAQ)
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-base mb-8">
              Wichtige Fragen und Antworten rund um die Optimierung gewerblicher Verträge in Aachen:
            </p>

            <FAQ items={faqs} />
          </section>

          {/* Section 6: Weiterführende interne Themen */}
          <section className="pt-8 border-t border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Verwandte Leistungen &amp; Fachbereiche
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link 
                to="/strom" 
                className="p-5 rounded-xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 hover:border-[#0047AB] dark:hover:border-blue-500 transition-all group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-amber-500 mb-2 font-semibold text-sm flex items-center justify-between">
                    <Zap size={18} />
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    Gewerbestrom
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Günstige Kilowattstundenpreise &amp; Ökostromlösungen für Unternehmen.
                  </p>
                </div>
              </Link>

              <Link 
                to="/gas" 
                className="p-5 rounded-xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 hover:border-[#0047AB] dark:hover:border-blue-500 transition-all group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-orange-500 mb-2 font-semibold text-sm flex items-center justify-between">
                    <Flame size={18} />
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    Gewerbegas
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Heizkosten und Prozessgas für Betriebe wirtschaftlich sichern.
                  </p>
                </div>
              </Link>

              <Link 
                to="/internet" 
                className="p-5 rounded-xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 hover:border-[#0047AB] dark:hover:border-blue-500 transition-all group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-blue-500 mb-2 font-semibold text-sm flex items-center justify-between">
                    <Wifi size={18} />
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    Business Internet
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Glasfaser, DSL &amp; feste IP-Adressen für moderne Unternehmen.
                  </p>
                </div>
              </Link>

              <Link 
                to="/energieberater-aachen" 
                className="p-5 rounded-xl bg-white dark:bg-[#0d1d36] border border-slate-200/80 dark:border-white/10 hover:border-[#0047AB] dark:hover:border-blue-500 transition-all group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-emerald-500 mb-2 font-semibold text-sm flex items-center justify-between">
                    <MapPin size={18} />
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    Energieberater Aachen
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Persönliche Vor-Ort-Beratung direkt am Alexianergraben 9.
                  </p>
                </div>
              </Link>
            </div>
          </section>

        </article>
      </main>
    </div>
  );
}
