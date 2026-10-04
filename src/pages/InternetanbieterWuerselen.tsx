import { Search, Handshake, BarChart3, CheckSquare, Wifi, ArrowRight, MapPin, Phone, Building2, Home as HomeIcon } from 'lucide-react';
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
import internetHeroDesk from '../assets/internet hero desktop.webp';
import SEO from "../components/SEO";

const CompareModal = lazy(() => import('../components/CompareModal'));

export default function InternetanbieterWürselen() {
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const features = [
    {
      icon: <HomeIcon size={28} strokeWidth={1.5} />,
      title: i18n.language === 'en' ? 'Private households' : 'Privathaushalte',
      description: i18n.language === "en" ? "Für Streaming, Homeoffice, Gaming, Videokonferenzen und Cloud-Dienste sind Anzahl der Personen, gleichzeitig aktive Geräte und Upload-Bedarf wichtig. Wer regularly große Dateien sendet oder Backups hochlädt, sollte die Upload-Leistung ausdrücklich mitprüfen." : "Für Streaming, Homeoffice, Gaming, Videokonferenzen und Cloud-Dienste sind Anzahl der Personen, gleichzeitig aktive Geräte und Upload-Bedarf wichtig. Wer regelmäßig große Dateien sendet oder Backups hochlädt, sollte die Upload-Leistung ausdrücklich mitprüfen."
    },
    {
      icon: <Building2 size={28} strokeWidth={1.5} />,
      title: i18n.language === "en" ? "Business & Industry" : "Gewerbe & Industrie",
      description: i18n.language === "en" ? "business customers benötigen je nach Arbeitsweise zusätzlich passende service conditions, stabile Telefonie, genügend Leistungsreserve und gegebenenfalls eine Ausfallstrategie. Mehr bandwidth ist nur dann sinnvoll, wenn sie am Standort nutzbar ist und einen konkreten Bedarf erfüllt." : "Geschäftskunden benötigen je nach Arbeitsweise zusätzlich passende Servicebedingungen, stabile Telefonie, genügend Leistungsreserve und gegebenenfalls eine Ausfallstrategie. Mehr Bandbreite ist nur dann sinnvoll, wenn sie am Standort nutzbar ist und einen konkreten Bedarf erfüllt."
    }
  ];

  const steps = [
    {
      number: 1,
      icon: <Search size={24} />,
      title: "Adresse erfassen",
      description: i18n.language === "en" ? "You provide the connection location, street, house number and, if applicable, apartment details." : "Sie nennen Anschlussort, Straße, Hausnummer und gegebenenfalls Wohnungsangaben."
    },
    {
      number: 2,
      icon: <BarChart3 size={24} />,
      title: "Nutzung beschreiben",
      description: i18n.language === "en" ? "Number of users, devices, home office, streaming, gaming, telephony and business requirements are recorded." : "Nutzerzahl, Geräte, Homeoffice, Streaming, Gaming, Telefonie und geschäftliche Anforderungen werden erfasst."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "Angebote vergleichen",
      description: i18n.language === "en" ? "availability, Download, Upload, Hardware, Bereitstellung, promotional price und contract conditions werden geprüft." : "Verfügbarkeit, Download, Upload, Hardware, Bereitstellung, Aktionspreis und Vertragsbedingungen werden geprüft."
    },
    {
      number: 4,
      icon: <Handshake size={24} />,
      title: "Wechsel planen",
      description: i18n.language === "en" ? "Nach Ihrer Entscheidung werden Beauftragung, Wunschtermin und bei Bedarf number porting abgestimmt." : "Nach Ihrer Entscheidung werden Beauftragung, Wunschtermin und bei Bedarf Rufnummernmitnahme abgestimmt."
    }
  ];

  const faqs = [
    {
      question: i18n.language === "en" ? "Which internet providers are available at my address in Wuerselen?" : "Welche Internetanbieter sind an meiner Adresse in Würselen verfügbar?",
      answer: i18n.language === "en" ? "The selection depends on street, house number, network expansion and house connection. An address-specific check shows which technologies and tariffs can actually be booked." : "Die Auswahl hängt von Straße, Hausnummer, Netzausbau und Hausanschluss ab. Eine adressgenaue Prüfung zeigt, welche Technologien und Tarife konkret buchbar sind."
    },
    {
      question: i18n.language === "en" ? "Unterscheidet sich die availability zwischen Bardenberg, Mitte und Broichweiden?" : "Unterscheidet sich die Verfügbarkeit zwischen Bardenberg, Mitte und Broichweiden?",
      answer: i18n.language === "en" ? "Ja, die technische availability kann zwischen districts, Straßen und sogar benachbarten Gebäuden abweichen. Maßgeblich ist daher immer die konkrete connection address." : "Ja, die technische Verfügbarkeit kann zwischen Stadtteilen, Straßen und sogar benachbarten Gebäuden abweichen. Maßgeblich ist daher immer die konkrete Anschlussadresse."
    },
    {
      question: "Wie viel Internetgeschwindigkeit brauche ich?",
      answer: i18n.language === "en" ? "That depends on the number of people, devices and simultaneous applications. Home office, video conferences, multiple streams, gaming and large uploads should be considered together." : "Das hängt von Personen, Geräten und gleichzeitigen Anwendungen ab. Homeoffice, Videokonferenzen, mehrere Streams, Gaming und große Uploads sollten gemeinsam berücksichtigt werden."
    },
    {
      question: i18n.language === "en" ? "Wann ist fiber die richtige Wahl?" : "Wann ist Glasfaser die richtige Wahl?",
      answer: i18n.language === "en" ? "fiber bietet hohe performance reserves. Entscheidend ist aber, ob der Anschluss an Ihrer Adresse verfügbar oder buchbar ist und ob Kosten und contract conditions zu Ihrem Bedarf passen." : "Glasfaser bietet hohe Leistungsreserven. Entscheidend ist aber, ob der Anschluss an Ihrer Adresse verfügbar oder buchbar ist und ob Kosten und Vertragsbedingungen zu Ihrem Bedarf passen."
    },
    {
      question: i18n.language === "en" ? "What costs belong in an internet comparison?" : "Welche Kosten gehören in einen Internetvergleich?",
      answer: i18n.language === "en" ? "Neben dem Monatsentgelt zählen Aktions- und Regelpreis, Bereitstellung, Router, Versand, mögliche Anschlusskosten sowie die Kosten über die vereinbarte contract duration." : "Neben dem Monatsentgelt zählen Aktions- und Regelpreis, Bereitstellung, Router, Versand, mögliche Anschlusskosten sowie die Kosten über die vereinbarte Vertragsdauer."
    },
    {
      question: "Kann ich meine Festnetznummer mitnehmen?",
      answer: i18n.language === "en" ? "Eine number porting ist generally möglich und sollte on time beauftragt werden. Die contract data beim bisherigen und beim neuen Anbieter müssen übereinstimmen." : "Eine Rufnummernmitnahme ist grundsätzlich möglich und sollte rechtzeitig beauftragt werden. Die Vertragsdaten beim bisherigen und beim neuen Anbieter müssen übereinstimmen."
    },
    {
      question: i18n.language === "en" ? "Bleibt der Anschluss während des provider switchs aktiv?" : "Bleibt der Anschluss während des Anbieterwechsels aktiv?",
      answer: i18n.language === "en" ? "Bei einem on time eingeleiteten Wechsel muss der bisherige Anbieter generally bis zum abgeschlossenen Wechsel weiterversorgen. Am Umschalttag kann eine kurze Unterbrechung auftreten." : "Bei einem rechtzeitig eingeleiteten Wechsel muss der bisherige Anbieter grundsätzlich bis zum abgeschlossenen Wechsel weiterversorgen. Am Umschalttag kann eine kurze Unterbrechung auftreten."
    },
    {
      question: "Ist die Internetberatung für Würselen kostenlos?",
      answer: i18n.language === "en" ? "Ja. Energie Alemi bietet die tariff advice free of charge an. Sie ist by phone oder personally am Beratungsstandort in Aachen möglich." : "Ja. Energie Alemi bietet die Tarifberatung kostenlos an. Sie ist telefonisch oder persönlich am Beratungsstandort in Aachen möglich."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        url="/internetanbieter-wuerselen" 
        title="Internettarife Würselen vergleichen | Energie Alemi"
        description={i18n.language === "en" ? "internet tariffs in Würselen vergleichen: availability, speed, Kosten und Laufzeit prüfen – mit personallyer Beratung von Energie Alemi." : "Internettarife in Würselen vergleichen: Verfügbarkeit, Geschwindigkeit, Kosten und Laufzeit prüfen – mit persönlicher Beratung von Energie Alemi."}
        image={internetHeroDesk} 
        faqs={faqs} 
      />
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Wifi size={24} />}
          badgeText={i18n.language === 'en' ? 'Internet Providers Würselen' : 'Internetanbieter Würselen'}
          title="Internetanbieter in Würselen vergleichen – Verfügbarkeit zuerst prüfen"
          description={<>Welche Internetverbindung ist an Ihrer Adresse in Würselen tatsächlich buchbar? Energie Alemi prüft die Verfügbarkeit und vergleicht Leistung, Gesamtkosten und Vertragsdetails passend zu Ihrer Nutzung. Übrigens prüfen wir auch gerne für Sie den Wechsel zu einem günstigen <Link to="/stromanbieter-wuerselen" className="hover:underline font-semibold text-blue-300">Stromanbieter in Würselen</Link>.</>}
          bgImage={internetHeroDesk}
          buttonText="Internetverfügbarkeit in Würselen prüfen lassen"
          onButtonClick={() => {
            setIsModalOpen(true);
            trackEvent('service_cta_click', { service_type: 'internetanbieter_wuerselen', cta_location: 'service_hero', page_path: window.location.pathname });
          }}
          bulletPoints={[
            { icon: <MapPin size={24} />, title: i18n.language === "en" ? "Adressgenaue availability check" : "Adressgenaue Verfügbarkeitsprüfung" },
            { icon: <BarChart3 size={24} />, title: i18n.language === "en" ? "Compare download, upload and costs" : "Download, Upload und Kosten vergleichen" },
            { icon: <Building2 size={24} />, title: i18n.language === "en" ? "For home and business" : "Für Zuhause und Geschäft" },
          ]}
          accentColor="bg-amber-500 hover:bg-amber-600"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-12 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Die Hausnummer entscheidet über die verfügbaren Anschlüsse</h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            {i18n.language === "en" ? "internet tariffs werden häufig mit einer maximalen bandwidth beworben. Ob diese Leistung an einem konkreten Gebäude verfügbar ist, zeigt jedoch erst die Prüfung von Straße und Hausnummer. Technik, Ausbau und Hausanschluss können sich sogar innerhalb desselben districts unterscheiden." : "Internettarife werden häufig mit einer maximalen Bandbreite beworben. Ob diese Leistung an einem konkreten Gebäude verfügbar ist, zeigt jedoch erst die Prüfung von Straße und Hausnummer. Technik, Ausbau und Hausanschluss können sich sogar innerhalb desselben Stadtteils unterscheiden."}
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4">
            {i18n.language === "en" ? "Deshalb beginnt die Beratung für Würselen-Mitte, Bardenberg und Broichweiden immer mit der vollständigen connection address. Anschließend werden die actually buchbaren Optionen mit dem personallyen oder betrieblichen usage profile abgeglichen." : "Deshalb beginnt die Beratung für Würselen-Mitte, Bardenberg und Broichweiden immer mit der vollständigen Anschlussadresse. Anschließend werden die tatsächlich buchbaren Optionen mit dem persönlichen oder betrieblichen Nutzungsprofil abgeglichen."}
          </p>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-12">
            Ein reduzierter Monatspreis gilt häufig nur für einen Aktionszeitraum. Für einen fairen Vergleich werden daher regulärer Monatspreis, Bereitstellungsentgelt, Routerkosten, Versand, mögliche Anschlussarbeiten und die Vertragsdauer gemeinsam betrachtet. Erfahren Sie mehr über unsere Leistungen als <Link to="/internetanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Internetanbieter Aachen</Link>.
          </p>
        </div>
        
        <div className="container mx-auto px-6 mb-12">
          <SectionHeader 
            title={i18n.language === "en" ? "Don't just look at the download" : "Nicht nur auf den Download achten"}
            align="center"
            className="mb-12 max-w-4xl mx-auto"
          />
          <ServiceFeatures features={features} />
          <p className="text-center text-slate-700 dark:text-slate-300 text-lg leading-relaxed mt-6 max-w-4xl mx-auto">
            Übrigens: Neben der Internetberatung helfen wir Ihnen auch dabei, den passenden <Link to="/gasanbieter-wuerselen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline font-semibold">{i18n.language === 'en' ? 'gas provider in Würselen' : 'Gasanbieter in Würselen'}</Link> zu finden.
          </p>
          <p className="text-center text-slate-700 dark:text-slate-300 text-lg leading-relaxed mt-4 max-w-4xl mx-auto border-t border-slate-200 dark:border-slate-800 pt-6">
            Wir beraten Sie nicht nur in Würselen, sondern in der gesamten Städteregion. Vergleichen Sie auch Tarife für <Link to="/internetanbieter-aachen" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Aachen</Link>, <Link to="/internetanbieter-stolberg" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Stolberg</Link>, <Link to="/internetanbieter-eschweiler" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Eschweiler</Link> und <Link to="/internetanbieter-herzogenrath" className="text-[#0047AB] dark:text-[#f0a83f] hover:underline">Herzogenrath</Link>.
          </p>
        </div>
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
                        {i18n.language === "en" ? "This is how the " : "So läuft die "}<span className="font-serif italic font-normal block mt-2 text-[#0047AB]">{i18n.language === "en" ? "internet advice" : "Internetberatung"}</span>{i18n.language === "en" ? " works in four steps" : " in vier Schritten"}
                      </>
                    }
                    subtitle={i18n.language === "en" ? "Auch cancellation period, automatische Verlängerung und number porting gehören vor der Beauftragung geklärt. So entsteht ein Bild der actuallyen Kosten und des organisatorischen Ablaufs." : "Auch Kündigungsfrist, automatische Verlängerung und Rufnummernmitnahme gehören vor der Beauftragung geklärt. So entsteht ein Bild der tatsächlichen Kosten und des organisatorischen Ablaufs."}
                    align="left"
                    className="mb-8"
                  />
                </div>
              </div>
              <div className="lg:w-2/3">
                <Timeline steps={steps} />
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Criteria Section */}
      <div className="relative z-25 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-16 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeader 
            title={i18n.language === "en" ? "DSL, Kabel, fiber und Mobilfunk passend einordnen" : "DSL, Kabel, Glasfaser und Mobilfunk passend einordnen"}
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "DSL", desc: i18n.language === "en" ? "DSL wird über die telephone line bereitgestellt; die erreichbare speed hängt von den technischen Bedingungen vor Ort ab." : "DSL wird über die Telefonleitung bereitgestellt; die erreichbare Geschwindigkeit hängt von den technischen Bedingungen vor Ort ab." },
              { title: "Kabel", desc: i18n.language === "en" ? "Cable requires a suitable house connection." : "Kabel benötigt einen geeigneten Hausanschluss." },
              { title: "Glasfaser", desc: i18n.language === "en" ? "fiber bietet hohe performance reserves, ist aber nur eine Wahl, wenn der Anschluss an der Adresse vorhanden oder konkret buchbar ist." : "Glasfaser bietet hohe Leistungsreserven, ist aber nur eine Wahl, wenn der Anschluss an der Adresse vorhanden oder konkret buchbar ist.", link: "/ratgeber/dsl-vs-glasfaser-aachen" },
              { title: i18n.language === "en" ? "LTE or 5G" : "LTE oder 5G", desc: i18n.language === "en" ? "Kann als Alternative oder Zwischenlösung infrage kommen. Dabei zählen network coverage, Empfang im Gebäude, Datenvolumen und mögliche Schwankungen." : "Kann als Alternative oder Zwischenlösung infrage kommen. Dabei zählen Netzabdeckung, Empfang im Gebäude, Datenvolumen und mögliche Schwankungen." },
              { title: "Bandbreite", desc: i18n.language === "en" ? "The best technology is not the one with the strongest advertising promise, but the available solution that reliably covers the need." : "Die beste Technik ist nicht die mit dem stärksten Werbeversprechen, sondern die verfügbare Lösung, die den Bedarf zuverlässig abdeckt." },
              { title: "Hardware", desc: i18n.language === "en" ? "Whether your own or a provider-supplied router makes more sense depends on the respective requirements." : "Ob ein eigener oder ein vom Anbieter bereitgestellter Router sinnvoller ist, hängt von den jeweiligen Anforderungen ab." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-slate-50 dark:bg-[#0a1628] rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex-shrink-0 mt-1 text-[#0047AB] dark:text-[#f0a83f]">
                  <CheckSquare size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {item.link ? <Link to={item.link} className="hover:underline">{item.title}</Link> : <Link to="/ratgeber/internetanbieter-vergleichen" className="hover:underline">{item.title}</Link>}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="relative z-25 bg-[#0047AB] dark:bg-[#002f75] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 pb-16 text-white text-center shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Internetberatung für Würselen – telefonisch oder in Aachen</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            {i18n.language === "en" ? "Für die erste Prüfung benötigt Energie Alemi die vollständige connection address und if possible die Daten des bestehenden Vertrags. Die Beratung für customers aus Würselen erfolgt by phone oder personally am Alexianergraben 9 in 52064 Aachen." : "Für die erste Prüfung benötigt Energie Alemi die vollständige Anschlussadresse und möglichst die Daten des bestehenden Vertrags. Die Beratung für Kundinnen und Kunden aus Würselen erfolgt telefonisch oder persönlich am Alexianergraben 9 in 52064 Aachen."}
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
            <div className="flex flex-col items-center">
              <MapPin size={32} className="mb-3 text-blue-300" />
              <h4 className="font-semibold text-xl mb-1">{i18n.language === 'en' ? 'Address' : 'Adresse'}</h4>
              <p className="text-blue-100">Alexianergraben 9, 52064 Aachen</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-blue-400/50"></div>
            <div className="flex flex-col items-center">
              <Phone size={32} className="mb-3 text-blue-300" />
              <h4 className="font-semibold text-xl mb-1">{i18n.language === 'en' ? 'Phone' : 'Telefon'}</h4>
              <a data-track="phone" href="tel:017665949390" className="text-blue-100 hover:text-white hover:underline">0176 659 493 90</a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-30 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-16 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <section className="py-14 md:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <SectionHeader 
              title={i18n.language === "en" ? "Frequently asked questions about internet tariffs in Wuerselen" : "Häufige Fragen zu Internettarifen in Würselen"}
              align="center"
              className="mb-12"
            />
            <FAQ items={faqs} className="mb-12" />
            
            <div className="bg-white dark:bg-[#122340] rounded-3xl p-8 md:p-12 text-center shadow-sm border border-slate-100 dark:border-slate-800 mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Internetverfügbarkeit in Würselen prüfen lassen</h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                {i18n.language === "en" ? "Free advice at 0176 659 493 90 or via the contact page." : "Kostenlose Beratung unter 0176 659 493 90 oder über die Kontaktseite."}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button variant="primary" icon={<ArrowRight size={18} />} onClick={() => setIsModalOpen(true)}>
                  Internetverfügbarkeit in Würselen prüfen lassen
                </Button>
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#0047AB] dark:border-[#f0a83f] text-[#0047AB] dark:text-[#f0a83f] font-semibold rounded-full hover:bg-[#0047AB] hover:text-white dark:hover:bg-[#f0a83f] dark:hover:text-[#0a1628] transition-colors">
                  <Phone size={18} className="mr-2" />
                  {i18n.language === "en" ? "Free advice" : "Kostenlose Beratung"}
                </Link>
              </div>
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
