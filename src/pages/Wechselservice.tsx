import { Handshake, Search, ArrowLeftRight, CheckSquare, Calendar, Truck, ArrowRight, ShieldCheck, Zap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import ServiceHero from '../sections/ServiceHero';
import ServiceFeatures from '../sections/ServiceFeatures';
import SectionHeader from '../components/ui/SectionHeader';
import Timeline from '../components/ui/Timeline';
import FAQ from '../components/ui/FAQ';
import Button from '../components/ui/Button';
import bgHeroDesk from '../assets/electricity hero desk.webp';
import bgHeroMob from '../assets/hero_mob.webp';
import { useTranslation } from 'react-i18next';
import SEO from "../components/SEO";

export default function Wechselservice() {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const featuresDe = [
    {
      icon: <Search size={28} strokeWidth={1.5} />,
      title: "Kostenlose Tarifprüfung",
      description: "Wir vergleichen völlig unverbindlich und kostenfrei Ihre aktuellen Tarife mit den besten Angeboten am Markt für Strom, Gas und Internet. Dabei achten wir auf versteckte Gebühren und faire Konditionen, damit Sie am Ende wirklich sparen."
    },
    {
      icon: <Handshake size={28} strokeWidth={1.5} />,
      title: "Persönliche Beratung in Aachen",
      description: "Ob telefonisch, per WhatsApp oder direkt vor Ort in unserem Büro in Aachen – wir sind als greifbarer Ansprechpartner für Sie da und nehmen uns die nötige Zeit, um alle Ihre offenen Fragen in Ruhe und verständlich zu klären."
    },
    {
      icon: <ArrowLeftRight size={28} strokeWidth={1.5} />,
      title: "Kompletter Wechselservice inklusive",
      description: "Wir übernehmen die gesamte bürokratische Abwicklung für Sie, von der fristgerechten Kündigung beim alten Anbieter über die Zählerstandsmeldung bis hin zur erfolgreichen Anmeldung beim neuen, günstigeren Versorger."
    },
    {
      icon: <ShieldCheck size={28} strokeWidth={1.5} />,
      title: "Lückenlose Versorgung garantiert",
      description: "Ihre Belieferung mit Energie oder Internet ist in Deutschland gesetzlich garantiert. Es entsteht zu keinem Zeitpunkt eine Versorgungslücke – niemand dreht Ihnen den Strom oder das Gas während des Wechsels ab."
    }
  ];

  const featuresEn = [
    {
      icon: <Search size={28} strokeWidth={1.5} />,
      title: "Free tariff check",
      description: "We compare your current tariffs with the best offers on the market for electricity, gas, and internet \u2013 completely non-binding and free of charge. We watch out for hidden fees and fair terms so you really save in the end."
    },
    {
      icon: <Handshake size={28} strokeWidth={1.5} />,
      title: "Personal consultation in Aachen",
      description: "Whether by phone, via WhatsApp, or directly on site in our Aachen office \u2013 we are a tangible contact for you and take the time to calmly clarify all your open questions."
    },
    {
      icon: <ArrowLeftRight size={28} strokeWidth={1.5} />,
      title: "Complete switching service included",
      description: "We handle all the bureaucratic work for you, from timely cancellation with your old provider and meter reading reports to successful registration with the new, cheaper supplier."
    },
    {
      icon: <ShieldCheck size={28} strokeWidth={1.5} />,
      title: "Gap-free supply guaranteed",
      description: "Your supply of energy or internet is legally guaranteed in Germany. There is never a supply gap \u2013 nobody will cut off your electricity or gas during the switch."
    }
  ];
  const features = isEn ? featuresEn : featuresDe;

  const stepsDe = [
    {
      number: 1,
      icon: <Calendar size={24} />,
      title: "1. Kostenlose Erstberatung",
      description: "Kontaktieren Sie uns telefonisch, per WhatsApp oder besuchen Sie uns direkt vor Ort in Aachen. Wir besprechen Ihre aktuelle Vertragssituation völlig unverbindlich. Sie können uns alle Fragen stellen, die Ihnen zum Thema Tarifwechsel auf dem Herzen liegen. Unsere Experten nehmen sich die nötige Zeit, um Ihre speziellen Bedürfnisse zu verstehen, sei es ein anstehender Umzug, ein auslaufender Vertrag oder einfach der tiefe Wunsch nach dauerhaft niedrigeren monatlichen Fixkosten."
    },
    {
      number: 2,
      icon: <Search size={24} />,
      title: "2. Wir vergleichen Tarife individuell",
      description: "Anhand Ihrer letzten Jahresabrechnung oder Ihrer Verbrauchsdaten suchen wir akribisch die besten und günstigsten Anbieter für Sie heraus. Dabei berücksichtigen wir nicht nur den reinen Arbeitspreis, sondern auch versteckte Gebühren, langfristige Preisgarantien, Kündigungsfristen und vor allem die Zuverlässigkeit der potenziellen neuen Anbieter. Wir erklären Ihnen die Unterschiede der verschiedenen Tarife transparent, objektiv und völlig ohne Fachjargon, damit Sie eine fundierte und sichere Entscheidung treffen können."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "3. Sie entscheiden, wir handeln (Kündigung & Anmeldung)",
      description: "Wenn Sie mit dem vorgeschlagenen Angebot absolut zufrieden sind, erteilen Sie uns die Wechselfreigabe bzw. Vollmacht. Wir kündigen Ihren alten Vertrag fristgerecht, rechtssicher und melden Sie zeitgleich beim neuen Anbieter an. Sie müssen sich nicht mit zeitraubenden Warteschleifen am Telefon, komplizierten Kündigungsschreiben oder unübersichtlichen Online-Formularen herumschlagen. Wir überwachen den gesamten Wechselprozess für Sie bis zum erfolgreichen Abschluss."
    },
    {
      number: 4,
      icon: <Truck size={24} />,
      title: "4. Bestätigung & nahtloser neuer Vertrag",
      description: "Sie erhalten alle relevanten Vertragsunterlagen, die offizielle Auftragsbestätigung und den genauen Liefertermin direkt vom neuen Anbieter zugesandt. Ihre Versorgung läuft während des gesamten Wechsels absolut reibungslos und ohne die geringste Unterbrechung weiter. Auch nach dem erfolgreichen Wechsel bleiben wir Ihr persönlicher, lokaler Ansprechpartner für alle zukünftigen Energie- und Vertragsfragen in Aachen."
    }
  ];

  const stepsEn = [
    {
      number: 1,
      icon: <Calendar size={24} />,
      title: "1. Free initial consultation",
      description: "Contact us by phone, via WhatsApp, or visit us directly on site in Aachen. We discuss your current contract situation with no obligation. You can ask us anything about switching tariffs. Our experts take the time to understand your specific needs, whether it's an upcoming move, an expiring contract, or simply the desire for permanently lower monthly fixed costs."
    },
    {
      number: 2,
      icon: <Search size={24} />,
      title: "2. We compare tariffs individually",
      description: "Based on your last annual statement or consumption data, we meticulously find the best and cheapest providers for you. We consider not only the pure unit price but also hidden fees, long-term price guarantees, cancellation periods, and above all the reliability of potential new providers. We explain the differences between tariffs transparently, objectively, and without jargon, so you can make an informed and confident decision."
    },
    {
      number: 3,
      icon: <CheckSquare size={24} />,
      title: "3. You decide, we act (cancellation & registration)",
      description: "Once you are completely satisfied with the proposed offer, you give us the go-ahead or power of attorney. We cancel your old contract on time and in compliance with the law, and register you with the new provider at the same time. No tedious phone queues, complicated cancellation letters, or confusing online forms for you. We monitor the entire switching process until successful completion."
    },
    {
      number: 4,
      icon: <Truck size={24} />,
      title: "4. Confirmation & seamless new contract",
      description: "You receive all relevant contract documents, the official order confirmation, and the exact delivery date directly from the new provider. Your supply continues absolutely smoothly throughout the switch without the slightest interruption. Even after the successful switch, we remain your personal local contact for all future energy and contract questions in Aachen."
    }
  ];
  const steps = isEn ? stepsEn : stepsDe;

  const faqsDe = [
    {
      question: "Was kostet es, den Energievertrag wechseln zu lassen?",
      answer: "Unser kompletter Service – von der ausführlichen Erstberatung über den maßgeschneiderten Tarifvergleich bis hin zum eigentlichen Wechselservice (inklusive Kündigung und Neuanmeldung) – ist für Sie völlig kostenlos und absolut unverbindlich. Wir finanzieren uns über Provisionen der Energieversorger, ohne dass dies Ihren Tarif in irgendeiner Weise verteuert oder Ihre Einsparungen schmälert."
    },
    {
      question: "Wie oft kann ich meinen Strom- oder Gasvertrag wechseln?",
      answer: "Sie können Ihren Vertrag prinzipiell immer dann wechseln, wenn Ihre reguläre Vertragslaufzeit endet und die geltende Kündigungsfrist eingehalten wird (meist 4 Wochen zum Laufzeitende). Im Falle einer angekündigten Preiserhöhung durch Ihren aktuellen Anbieter haben Sie zudem immer ein gesetzliches Sonderkündigungsrecht, unabhängig von der restlichen Vertragslaufzeit. Wir prüfen gerne Ihre aktuellen Fristen und Verträge detailliert für Sie."
    },
    {
      question: "Muss ich selbst kündigen?",
      answer: "Nein, in aller Regel übernehmen wir die Kündigung beim alten Versorger komplett für Sie, sobald Sie uns die entsprechende Wechselfreigabe oder Vollmacht erteilen. Ausnahmen bestehen lediglich bei extrem kurzfristigen Sonderkündigungen, bei denen Sie aus rechtlichen Gründen eventuell selbst unterschreiben müssen – aber auch in diesen Fällen bereiten wir das Kündigungsschreiben vollständig für Sie vor und unterstützen Sie aktiv beim Versand."
    },
    {
      question: "Entsteht eine Versorgungslücke?",
      answer: "Nein, eine Versorgungslücke ist in Deutschland per Gesetz strikt ausgeschlossen. Ihre physische Belieferung mit Strom, Gas oder auch Wasser läuft während des gesamten Wechselprozesses kontinuierlich, sicher und absolut nahtlos weiter. Niemand wird Ihnen bei einem Versorgerwechsel sprichwörtlich den Stecker ziehen, den Gashahn zudrehen oder Sie im Kalten sitzen lassen."
    },
    {
      question: "Wie lange dauert ein Anbieterwechsel?",
      answer: "In der Regel dauert der gesamte bürokratische Prozess von der Unterschrift bis zum tatsächlichen Lieferbeginn durch den neuen Anbieter etwa 3 bis 6 Wochen. Dies ist stark abhängig von den individuellen Kündigungsfristen Ihres Altvertrags und der Bearbeitungsgeschwindigkeit des Netzbetreibers. Die rein technische Umstellung erfolgt seit Juni 2025 innerhalb von 24 Stunden. Bei einem Umzug melden Sie Ihren Einzug bitte unbedingt vorab an – eine rückwirkende Anmeldung ist seit Juni 2025 gesetzlich nicht mehr möglich, sonst fallen Sie automatisch in die meist teurere Grundversorgung."
    }
  ];

  const faqsEn = [
    {
      question: "What does it cost to have my energy contract switched?",
      answer: "Our complete service \u2013 from detailed initial consultation and tailored tariff comparison to the actual switching service (including cancellation and new registration) \u2013 is completely free and non-binding for you. We finance ourselves through commissions from energy providers, without making your tariff more expensive in any way."
    },
    {
      question: "How often can I switch my electricity or gas contract?",
      answer: "You can generally switch whenever your regular contract term ends and the applicable cancellation period is observed (usually 4 weeks to the end of the term). If your current provider announces a price increase, you always have a legal special right of termination, regardless of the remaining contract term. We are happy to check your current deadlines and contracts in detail."
    },
    {
      question: "Do I have to cancel myself?",
      answer: "No, as a rule we handle the cancellation with your old supplier completely for you once you give us the go-ahead or power of attorney. Exceptions only exist for extremely short-notice special cancellations, where you may have to sign yourself for legal reasons \u2013 but even then we fully prepare the cancellation letter for you and actively support you with sending it."
    },
    {
      question: "Will there be a supply gap?",
      answer: "No, a supply gap is strictly excluded by law in Germany. Your physical supply of electricity, gas, or water continues continuously, safely, and seamlessly throughout the switching process. Nobody will cut you off during a supplier switch."
    },
    {
      question: "How long does a provider switch take?",
      answer: "The entire bureaucratic process from signature to actual delivery start by the new provider usually takes about 3 to 6 weeks. This depends heavily on the individual cancellation periods of your old contract and the processing speed of the grid operator. The purely technical switchover has been completed within 24 hours since June 2025. When moving, please register your move-in in advance \u2013 retroactive registration has been illegal since June 2025, otherwise you automatically fall into the usually more expensive basic supply."
    }
  ];
  const faqs = isEn ? faqsEn : faqsDe;

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        title="Energievertrag wechseln lassen in Aachen | Energie Alemi"
        description="Energievertrag wechseln lassen in Aachen – wir vergleichen Tarife und übernehmen Kündigung & Anmeldung. Kostenlos, 5,0★ auf Google."
        url="/energievertrag-wechseln-lassen"
        faqs={faqs} 
      />
      
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Zap size={24} />}
          badgeText={isEn ? "Convenient switching service" : "Komfortabler Wechselservice"}
          title={isEn ? "Have your energy contract switched \u2013 we handle cancellation & registration" : "Energievertrag wechseln lassen \u2013 wir übernehmen Kündigung & Anmeldung"}
          description={isEn ? "Many households stay in expensive tariffs due to lack of time or uncertainty. Let us conveniently switch your electricity, gas, or internet contract. Energie Alemi handles the complete switching process for you from A to Z." : "Viele Haushalte bleiben aus Zeitmangel oder Unsicherheit im teuren Tarif. Lassen Sie Ihren Vertrag für Strom, Gas oder Internet bequem von uns wechseln. Energie Alemi übernimmt für Sie den kompletten Wechselprozess von A bis Z."}
          bgImage={bgHeroDesk}
          bgImageMobile={bgHeroMob}
          buttonText={isEn ? "Request free consultation" : "Kostenlose Beratung anfordern"}
          onButtonClick={() => {
            window.location.href = '/contact';
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: isEn ? "100% Free & Non-binding" : "100% Kostenlos & Unverbindlich" },
            { icon: <ArrowLeftRight size={24} />, title: isEn ? "We cancel for you" : "Wir kündigen für Sie" },
            { icon: <Handshake size={24} />, title: isEn ? "Personal consultation in Aachen" : "Persönliche Beratung in Aachen" },
          ]}
          accentColor="bg-blue-600 hover:bg-blue-700"
        />
      </div>

      <div className="relative z-10 bg-white dark:bg-[#051024] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <ServiceFeatures features={features} />
      </div>
      
      <div className="relative z-20 bg-slate-50 dark:bg-[#0a1628] rounded-t-[2.5rem] md:rounded-none mt-[-2.5rem] md:mt-0 pt-6 md:pt-0 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_-5px_15px_rgba(0,0,0,0.2)] md:shadow-none">
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-6">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
              <Link to="/" className="hover:text-[#0047AB] dark:hover:text-[#60a5fa] transition-colors">{isEn ? 'Home' : 'Startseite'}</Link>
              <ChevronRight size={14} className="shrink-0" />
              <span className="text-slate-800 dark:text-slate-200 truncate">{isEn ? 'Have your energy contract switched' : 'Energievertrag wechseln lassen'}</span>
            </nav>

            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <SectionHeader 
                    title={isEn ? <>How it works <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">in 4 simple steps</span></> : <>So läuft es ab <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">in 4 simplen Schritten</span></>}
                    subtitle={isEn ? "What we handle for you" : "Das übernehmen wir für Sie"}
                    align="left"
                    className="mb-8"
                  />
                  
                  <div className="prose dark:prose-invert prose-lg text-slate-600 dark:text-white/80 leading-relaxed space-y-6">
                    <p>
                      {isEn ? 'Many households pay hundreds of euros too much for their energy supply year after year. The main reason? Out of pure lack of time, uncertainty, or fear of complicated bureaucracy, they prefer to stay stuck in their expensive basic supply tariff or an outdated contract. Yet switching today is easier, faster, and less risky than ever before. With us, you don\u2019t have to painstakingly click through hundreds of confusing tariffs on anonymous comparison portals. Whether ' : 'Viele Haushalte zahlen Jahr für Jahr Hunderte Euro zu viel für ihre Energieversorgung. Der Hauptgrund? Aus purem Zeitmangel, Unsicherheit oder Angst vor einem komplizierten Bürokratieaufwand bleiben sie lieber in ihrem teuren Grundversorgungstarif oder einem veralteten Vertrag stecken. Dabei ist der Wechsel heute so einfach, schnell und risikolos wie noch nie zuvor. Bei uns müssen Sie sich nicht mühsam durch Hunderte von unübersichtlichen Tarifen auf anonymen Vergleichsportalen klicken. Egal ob '} <Link to="/electricity" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">Strom</Link>, <Link to="/gas" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">Gas</Link> oder <Link to="/internet" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">Internet</Link> {isEn ? '\u2013 we always find exactly the right tariff for you, perfectly tailored to your individual consumption behavior, your living situation in Aachen, and your wishes.' : '\u2013 wir finden für Sie stets den exakt passenden Tarif, der perfekt auf Ihr individuelles Verbrauchsverhalten, Ihre Wohnsituation in Aachen und Ihre Wünsche abgestimmt ist.'}
                    </p>
                    
                    <p>
                      {isEn ? 'Our top priority is to make the entire bureaucratic process as comfortable and stress-free as possible for you. Specifically, this means: no hours-long, annoying hotlines of energy corporations, no error-prone filling out of endless online forms, and no laborious drafting of complicated cancellation letters. We always keep your important dates, cancellation periods, special termination rights, and contract commitments precisely and reliably in view. When you hire the experts at Energie Alemi, you get a personal, tailored all-round service right here in Aachen \u2013 from people for people.' : 'Unser oberster Anspruch ist es, den gesamten bürokratischen Ablauf für Sie so extrem komfortabel und absolut stressfrei wie möglich zu gestalten. Das bedeutet konkret: Sie müssen sich weder um stundenlange, nervige Hotlines der Energiekonzerne, das fehleranfällige Ausfüllen von endlosen Online-Formularen noch um das mühsame Formulieren von komplizierten Kündigungsschreiben kümmern. Wir haben Ihre wichtigen Termine, Kündigungsfristen, Sonderkündigungsrechte und Vertragsbindungen stets präzise und zuverlässig im Blick. Wenn Sie die Experten der Energie Alemi beauftragen, erhalten Sie einen persönlichen, maßgeschneiderten Rundum-Service direkt hier in Aachen \u2013 von Menschen für Menschen.'}
                    </p>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 mt-8 mb-8">
                      <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-xl">{isEn ? "What we need from you:" : "Das brauchen wir von Ihnen:"}</h3>
                      <p className="text-slate-600 dark:text-white/80 mb-4">{isEn ? 'To guarantee a smooth and fast switch, we only need a few key details from you in advance. We make it as easy as possible for you \u2013 almost no effort on your part:' : 'Um den reibungslosen und schnellen Ablauf Ihres Wechsels zu garantieren, benötigen wir im Vorfeld nur wenige Eckdaten von Ihnen. Wir machen es Ihnen so leicht wie möglich, Sie haben fast keinen Aufwand:'}</p>
                      <ul className="list-disc pl-5 space-y-3 text-slate-600 dark:text-white/80">
                        <li><strong>{isEn ? "Your last annual bill" : "Ihre letzte Jahresrechnung"}</strong> {isEn ? "or your current contract documents (so we can read your exact annual consumption, meter number, and existing cancellation period)." : "oder die aktuellen Vertragsunterlagen (damit wir Ihren genauen Jahresverbrauch, Ihre Zählernummer und die bestehende Kündigungsfrist exakt ablesen können)."}</li>
                        <li><strong>{isEn ? "Your meter number" : "Ihre Zählernummer"}</strong> {isEn ? "(this number is mandatory for an electricity or gas provider switch to clearly identify your physical connection at your residence)." : "(diese Nummer ist speziell bei einem Strom- oder Gasanbieterwechsel zwingend erforderlich, um Ihren physischen Anschluss am Wohnort eindeutig zu identifizieren)."}</li>
                        <li><strong>{isEn ? "Your desired switching date" : "Ihren gewünschten Wechseltermin"}</strong> {isEn ? "(for example as part of an upcoming move to a new apartment, after a price increase, or directly after the regular end of your existing contract)." : "(beispielsweise im Rahmen eines anstehenden Umzugs in eine neue Wohnung, nach einer Preiserhöhung oder direkt nach regulärem Ablauf der bestehenden Vertragsbindung)."}</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-[#0047AB]/10 p-6 rounded-2xl border border-blue-100 dark:border-[#0047AB]/30">
                      <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-3 text-xl">{isEn ? "No supply gap" : "Keine Versorgungslücke"}</h3>
                      <p className="text-blue-800 dark:text-blue-300">
                        {isEn ? "Worried you might suddenly be left completely without electricity or gas during the switching process? Rest assured: uninterrupted supply is strictly secured by law in Germany. The local grid operator (in Aachen usually Regionetz) is obligated to maintain the energy supply under all circumstances. Even if a switching process should unexpectedly be delayed \u2013 for example due to missing data \u2013 the regulations of the local replacement or basic supply automatically apply (which often has a cancellation period of only 2 weeks), so you will never be left in the dark. Your energy supply is absolutely secure and guaranteed at all times." : "Haben Sie vielleicht Bedenken, beim Wechselprozess plötzlich komplett ohne Strom oder Gas dazustehen? Seien Sie unbesorgt: Die ununterbrochene Belieferung ist in Deutschland gesetzlich streng gesichert. Der lokale Netzbetreiber (in Aachen meist die Regionetz) ist verpflichtet, die Energieversorgung unter allen Umständen aufrechtzuerhalten. Selbst wenn sich ein Wechselprozess einmal unerwartet verzögern sollte \u2013 etwa durch fehlende Daten \u2013, greifen automatisch die Regelungen der lokalen Ersatz- oder Grundversorgung (welche oftmals nur eine Kündigungsfrist von 2 Wochen aufweist), sodass Sie niemals \"im Dunkeln\" sitzen. Ihre Energieversorgung ist jederzeit absolut sicher und garantiert."}
                      </p>
                    </div>

                    <p>
                      {isEn ? "Would you like more detailed background information on the actual legal and technical process? Feel free to read our comprehensive and informative article on " : "Möchten Sie mehr detaillierte Hintergrundinformationen zum eigentlichen rechtlichen und technischen Vorgang erfahren? Lesen Sie dazu gerne unseren umfangreichen und informativen Artikel zum Thema "} <Link to="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">{isEn ? "Switching electricity providers" : "Stromanbieter wechseln"}</Link>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <Timeline steps={steps} />
                
                <div className="mt-16 bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-700">
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{isEn ? "Why Energie Alemi is the right partner for Aachen" : "Warum Energie Alemi der richtige Partner für Aachen ist"}</h3>
                  <div className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed space-y-6">
                    <p>
                      {isEn ? 'Energie Alemi is not just another anonymous comparison portal on the internet where you are left on your own after a quick sign-up. We are your local, personal, and tangible partner right in Aachen and the entire city region. Our company philosophy is based on long-term trust, honest advice, and absolute transparency. From daily experience, we know that the German energy market \u2013 with its countless, often confusing tariffs, hidden new-customer bonuses, and extremely complex contract clauses in the fine print \u2013 can be intimidating. This is exactly where we come in as your experts: we translate the providers\u2019 fine print into plain language for you and openly and honestly show you which tariff is truly worthwhile for you in the long term and which only appears cheap in the first year due to an artificial bonus.' : 'Die Energie Alemi ist nicht einfach nur ein weiteres anonymes Vergleichsportal im Internet, bei dem Sie nach dem schnellen Abschluss auf sich allein gestellt sind. Wir sind Ihr lokaler, persönlicher und greifbarer Partner direkt in Aachen und der gesamten Städteregion. Unsere Firmenphilosophie basiert auf langfristigem Vertrauen, ehrlicher Beratung und absoluter Transparenz. Wir wissen aus täglicher Erfahrung, dass der deutsche Energiemarkt mit seinen unzähligen, oft unübersichtlichen Tarifen, versteckten Neukunden-Boni und extrem komplexen Vertragsklauseln im Kleingedruckten oft einschüchternd wirken kann. Genau hier setzen wir als Ihre Experten an: Wir übersetzen das Kleingedruckte der Versorger für Sie in klares Deutsch und zeigen Ihnen offen und ehrlich auf, welcher Tarif sich wirklich langfristig für Sie lohnt und welcher nur im ersten Jahr durch einen künstlichen Bonus günstig erscheint.'}
                    </p>
                    <p>
                      {isEn ? 'A big problem for consumers is the hidden cost traps on online comparison portals. Many people switch tariffs on their own and are surprised by horrendous price increases in the second contract year because the supposed discount has disappeared. We protect you from exactly these mistakes. We check not only the superficial numbers but also the fine print, genuine customer reviews, and the actual, verifiable reliability of potential new providers before we recommend a tariff to you with a clear conscience. A switch through Energie Alemi is therefore always a switch with a built-in double safety net.' : 'Ein großes Problem für Endverbraucher sind die versteckten Kostenfallen bei Online-Vergleichsportalen. Viele Menschen wechseln ihren Tarif auf eigene Faust und werden im zweiten Vertragsjahr von horrenden Preiserhöhungen überrascht, weil der vermeintliche Rabatt weggefallen ist. Wir bewahren Sie vor genau diesen Fehlern. Wir prüfen nicht nur die oberflächlichen Zahlenbündel, sondern auch das Kleingedruckte, die echten Kundenbewertungen und die tatsächliche, nachweisbare Zuverlässigkeit der potenziellen neuen Anbieter, bevor wir Ihnen einen Tarif reinen Gewissens empfehlen. Ein Wechsel über die Energie Alemi ist deshalb immer ein Wechsel mit einem eingebauten, doppelten Sicherheitsnetz.'}
                    </p>
                    <p>
                      {isEn ? 'Local proximity makes the decisive difference for our customers: if there are ever complex queries from the grid operator during the switch, a submitted meter reading is unclear, or a bill turns out to be incorrect, you have us right on site in Aachen as your personal advocate in energy matters. We get on the phone, write the necessary emails, and proactively resolve the problem for you while you take care of the truly important things in your life. This way you benefit from the perfect combination of the best nationwide conditions and excellent regional customer service that never lets you down.' : 'Die lokale Nähe macht für unsere Kunden den entscheidenden Unterschied: Sollte es im Zuge des Wechsels jemals zu komplexen Rückfragen des Netzbetreibers kommen, ein übermittelter Zählerstand unklar sein oder eine erhaltene Abrechnung fehlerhaft ausfallen, haben Sie uns direkt vor Ort in Aachen als Ihren persönlichen Anwalt in Energiefragen. Wir hängen uns ans Telefon, schreiben die notwendigen Mails und klären das Problem proaktiv für Sie, während Sie sich um die wirklich wichtigen Dinge in Ihrem Leben kümmern können. So profitieren Sie von der perfekten Kombination aus besten, bundesweit verfügbaren Konditionen und einem exzellenten, regionalen Kundenservice, der Sie niemals im Stich lässt.'}
                    </p>
                    <p>
                      {isEn ? 'By trusting us and having your energy contract switched through us, you save not only hard cash month after month, but above all precious lifetime and frayed nerves. From precise analysis of your previous consumption behavior and obtaining the very best offers to the legally compliant, timely cancellation letter to your old provider \u2013 we guaranteed take all unpleasant bureaucratic tasks completely off your hands. Moreover, our service doesn\u2019t end with the one-time switch: we stay by your side in the years to come. We remind you in good time and proactively before your contractual cancellation period expires, and check again completely free of charge whether your current tariff is still the best choice for your situation or whether we should arrange another, even cheaper switch for you. This sustainable, long-term support approach from Energie Alemi guarantees you permanently and reliably low fixed costs in your household, without you ever having to fight your way through the confusing tariff jungle yourself or wait for hours in hotline queues.' : 'Indem Sie uns das Vertrauen schenken und Ihren Energievertrag durch uns wechseln lassen, sparen Sie nicht nur Monat für Monat bares Geld, sondern vor allem kostbare Lebenszeit und strapazierte Nerven. Von der genauen Analyse Ihres bisherigen Verbrauchsverhaltens über das Einholen der absolut besten Angebote bis hin zum rechtssicheren und fristgerechten Kündigungsschreiben an Ihren Altversorger – wir nehmen Ihnen garantiert alle unangenehmen bürokratischen Aufgaben komplett ab. Darüber hinaus ist unsere Dienstleistung mit dem einmaligen Wechsel nicht beendet: Wir bleiben auch in den Folgejahren stets an Ihrer Seite. Wir erinnern Sie rechtzeitig und proaktiv, bevor Ihre vertragliche Kündigungsfrist abläuft, und prüfen erneut völlig kostenlos, ob Ihr aktueller Tarif noch immer die beste Wahl für Ihre Situation ist oder ob wir einen erneuten, noch günstigeren Wechsel für Sie veranlassen sollten. Dieser nachhaltige, langfristige Betreuungsansatz der Energie Alemi garantiert Ihnen dauerhaft und zuverlässig niedrige Fixkosten in Ihrem Haushalt, ohne dass Sie sich jemals wieder selbst durch den unübersichtlichen Tarifdschungel kämpfen oder stundenlang in Hotline-Warteschleifen ausharren müssen.'}
                    </p>
                    <p>
                      {isEn ? 'Trust our many years of expertise in the energy market and our deep roots here in Aachen. Whether you live in a single-family home in Kornelimünster, rent an apartment right in the Frankenberger Viertel, or run a small business in Würselen \u2013 we have the regional experience and expertise to optimize your energy supply. Feel free to visit our office in person, call us, or simply message us on WhatsApp. Let\u2019s take the first step together: grab your last annual statement from your files, quickly take a photo of it, and just send it to us via WhatsApp. We\u2019ll take a look right away with no obligation and transparently tell you whether and how much money you can save by switching. If a switch isn\u2019t worthwhile for you right now, we\u2019ll tell you that openly too \u2013 because honest communication is the fundamental principle of our daily work here in Aachen.' : 'Vertrauen Sie auf unsere langjährige Expertise im Energiemarkt und unsere tiefe Verwurzelung hier in Aachen. Ob Sie in einem Einfamilienhaus in Kornelimünster wohnen, eine Wohnung direkt im Frankenberger Viertel mieten oder ein kleines Unternehmen in Würselen führen – wir haben die regionale Erfahrung und das nötige Fachwissen, um Ihre Energieversorgung zu optimieren. Kommen Sie gerne persönlich in unserem Büro vorbei, rufen Sie uns an oder schreiben Sie uns unkompliziert per WhatsApp. Lassen Sie uns gemeinsam den ersten Schritt machen: Holen Sie Ihre letzte Jahresabrechnung aus dem Ordner, machen Sie schnell ein Foto davon und schicken Sie es uns einfach per WhatsApp. Wir schauen sofort unverbindlich darüber und sagen Ihnen transparent, ob und wie viel Geld Sie durch einen Wechsel sparen können. Wenn sich ein Wechsel aktuell nicht für Sie lohnt, sagen wir Ihnen das auch ganz offen – denn ehrliche Kommunikation ist das fundamentale Prinzip unserer täglichen Arbeit hier in Aachen.'}
                    </p>
                  </div>
                </div>
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
              subtitle={isEn ? "Useful facts about your professional provider switch" : "Wissenswertes rund um Ihren professionellen Anbieterwechsel"}
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
