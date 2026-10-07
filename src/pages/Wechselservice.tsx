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
import SEO from "../components/SEO";

export default function Wechselservice() {
  const features = [
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

  const steps = [
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

  const faqs = [
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
      answer: "In der Regel dauert der gesamte bürokratische Prozess von der Unterschrift bis zum tatsächlichen Lieferbeginn durch den neuen Anbieter etwa 3 bis 6 Wochen. Dies ist stark abhängig von den individuellen Kündigungsfristen Ihres Altvertrags und der Bearbeitungsgeschwindigkeit des Netzbetreibers. Bei der Neuanmeldung in einer neuen Wohnung (im Rahmen eines Umzugs) kann die Belieferung sogar rückwirkend für bis zu 6 Wochen angemeldet werden, sodass Sie direkt vom günstigen Tarif profitieren."
    }
  ];

  return (
    <div className="relative bg-white dark:bg-[#0a1628]">
      <SEO 
        title="Energievertrag wechseln lassen in Aachen | Energie Alemi"
        description="Strom-, Gas- oder Internetvertrag wechseln lassen, ohne selbst zu kündigen: Energie Alemi vergleicht Tarife, übernimmt Kündigung und Anmeldung in Aachen. Kostenlose Beratung."
        url="/energievertrag-wechseln-lassen"
        faqs={faqs} 
      />
      
      <div className="sticky top-0 z-0 md:relative">
        <ServiceHero 
          theme="dark"
          badgeIcon={<Zap size={24} />}
          badgeText="Komfortabler Wechselservice"
          title="Energievertrag wechseln lassen – wir übernehmen Kündigung & Anmeldung"
          description="Viele Haushalte bleiben aus Zeitmangel oder Unsicherheit im teuren Tarif. Lassen Sie Ihren Vertrag für Strom, Gas oder Internet bequem von uns wechseln. Energie Alemi übernimmt für Sie den kompletten Wechselprozess von A bis Z."
          bgImage={bgHeroDesk}
          bgImageMobile={bgHeroMob}
          buttonText="Kostenlose Beratung anfordern"
          onButtonClick={() => {
            window.location.href = '/contact';
          }}
          bulletPoints={[
            { icon: <ShieldCheck size={24} />, title: "100% Kostenlos & Unverbindlich" },
            { icon: <ArrowLeftRight size={24} />, title: "Wir kündigen für Sie" },
            { icon: <Handshake size={24} />, title: "Persönliche Beratung in Aachen" },
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
              <Link to="/" className="hover:text-[#0047AB] dark:hover:text-[#60a5fa] transition-colors">Startseite</Link>
              <ChevronRight size={14} className="shrink-0" />
              <span className="text-slate-800 dark:text-slate-200 truncate">Energievertrag wechseln lassen</span>
            </nav>

            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <SectionHeader 
                    title={<>So läuft es ab <span className="font-serif italic font-normal block mt-2 text-[#0047AB]">in 4 simplen Schritten</span></>}
                    subtitle="Das übernehmen wir für Sie"
                    align="left"
                    className="mb-8"
                  />
                  
                  <div className="prose dark:prose-invert prose-lg text-slate-600 dark:text-white/80 leading-relaxed space-y-6">
                    <p>
                      Viele Haushalte zahlen Jahr für Jahr Hunderte Euro zu viel für ihre Energieversorgung. Der Hauptgrund? Aus purem Zeitmangel, Unsicherheit oder Angst vor einem komplizierten Bürokratieaufwand bleiben sie lieber in ihrem teuren Grundversorgungstarif oder einem veralteten Vertrag stecken. Dabei ist der Wechsel heute so einfach, schnell und risikolos wie noch nie zuvor. Bei uns müssen Sie sich nicht mühsam durch Hunderte von unübersichtlichen Tarifen auf anonymen Vergleichsportalen klicken. Egal ob <Link to="/electricity" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">Strom</Link>, <Link to="/gas" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">Gas</Link> oder <Link to="/internet" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">Internet</Link> – wir finden für Sie stets den exakt passenden Tarif, der perfekt auf Ihr individuelles Verbrauchsverhalten, Ihre Wohnsituation in Aachen und Ihre Wünsche abgestimmt ist.
                    </p>
                    
                    <p>
                      Unser oberster Anspruch ist es, den gesamten bürokratischen Ablauf für Sie so extrem komfortabel und absolut stressfrei wie möglich zu gestalten. Das bedeutet konkret: Sie müssen sich weder um stundenlange, nervige Hotlines der Energiekonzerne, das fehleranfällige Ausfüllen von endlosen Online-Formularen noch um das mühsame Formulieren von komplizierten Kündigungsschreiben kümmern. Wir haben Ihre wichtigen Termine, Kündigungsfristen, Sonderkündigungsrechte und Vertragsbindungen stets präzise und zuverlässig im Blick. Wenn Sie die Experten der Energie Alemi beauftragen, erhalten Sie einen persönlichen, maßgeschneiderten Rundum-Service direkt hier in Aachen – von Menschen für Menschen.
                    </p>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 mt-8 mb-8">
                      <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-xl">Das brauchen wir von Ihnen:</h3>
                      <p className="text-slate-600 dark:text-white/80 mb-4">Um den reibungslosen und schnellen Ablauf Ihres Wechsels zu garantieren, benötigen wir im Vorfeld nur wenige Eckdaten von Ihnen. Wir machen es Ihnen so leicht wie möglich, Sie haben fast keinen Aufwand:</p>
                      <ul className="list-disc pl-5 space-y-3 text-slate-600 dark:text-white/80">
                        <li><strong>Ihre letzte Jahresrechnung</strong> oder die aktuellen Vertragsunterlagen (damit wir Ihren genauen Jahresverbrauch, Ihre Zählernummer und die bestehende Kündigungsfrist exakt ablesen können).</li>
                        <li><strong>Ihre Zählernummer</strong> (diese Nummer ist speziell bei einem Strom- oder Gasanbieterwechsel zwingend erforderlich, um Ihren physischen Anschluss am Wohnort eindeutig zu identifizieren).</li>
                        <li><strong>Ihren gewünschten Wechseltermin</strong> (beispielsweise im Rahmen eines anstehenden Umzugs in eine neue Wohnung, nach einer Preiserhöhung oder direkt nach regulärem Ablauf der bestehenden Vertragsbindung).</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-[#0047AB]/10 p-6 rounded-2xl border border-blue-100 dark:border-[#0047AB]/30">
                      <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-3 text-xl">Keine Versorgungslücke</h3>
                      <p className="text-blue-800 dark:text-blue-300">
                        Haben Sie vielleicht Bedenken, beim Wechselprozess plötzlich komplett ohne Strom oder Gas dazustehen? Seien Sie unbesorgt: Die ununterbrochene Belieferung ist in Deutschland gesetzlich streng gesichert. Der lokale Netzbetreiber (in Aachen meist die Regionetz) ist verpflichtet, die Energieversorgung unter allen Umständen aufrechtzuerhalten. Selbst wenn sich ein Wechselprozess einmal unerwartet verzögern sollte – etwa durch fehlende Daten –, greifen automatisch die Regelungen der lokalen Ersatz- oder Grundversorgung (welche oftmals nur eine Kündigungsfrist von 2 Wochen aufweist), sodass Sie niemals "im Dunkeln" sitzen. Ihre Energieversorgung ist jederzeit absolut sicher und garantiert.
                      </p>
                    </div>

                    <p>
                      Möchten Sie mehr detaillierte Hintergrundinformationen zum eigentlichen rechtlichen und technischen Vorgang erfahren? Lesen Sie dazu gerne unseren umfangreichen und informativen Artikel zum Thema <Link to="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">Stromanbieter wechseln</Link>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <Timeline steps={steps} />
                
                <div className="mt-16 bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-700">
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Warum Energie Alemi der richtige Partner für Aachen ist</h3>
                  <div className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed space-y-6">
                    <p>
                      Die Energie Alemi ist nicht einfach nur ein weiteres anonymes Vergleichsportal im Internet, bei dem Sie nach dem schnellen Abschluss auf sich allein gestellt sind. Wir sind Ihr lokaler, persönlicher und greifbarer Partner direkt in Aachen und der gesamten Städteregion. Unsere Firmenphilosophie basiert auf langfristigem Vertrauen, ehrlicher Beratung und absoluter Transparenz. Wir wissen aus täglicher Erfahrung, dass der deutsche Energiemarkt mit seinen unzähligen, oft unübersichtlichen Tarifen, versteckten Neukunden-Boni und extrem komplexen Vertragsklauseln im Kleingedruckten oft einschüchternd wirken kann. Genau hier setzen wir als Ihre Experten an: Wir übersetzen das Kleingedruckte der Versorger für Sie in klares Deutsch und zeigen Ihnen offen und ehrlich auf, welcher Tarif sich wirklich langfristig für Sie lohnt und welcher nur im ersten Jahr durch einen künstlichen Bonus günstig erscheint.
                    </p>
                    <p>
                      Ein großes Problem für Endverbraucher sind die versteckten Kostenfallen bei Online-Vergleichsportalen. Viele Menschen wechseln ihren Tarif auf eigene Faust und werden im zweiten Vertragsjahr von horrenden Preiserhöhungen überrascht, weil der vermeintliche Rabatt weggefallen ist. Wir bewahren Sie vor genau diesen Fehlern. Wir prüfen nicht nur die oberflächlichen Zahlenbündel, sondern auch das Kleingedruckte, die echten Kundenbewertungen und die tatsächliche, nachweisbare Zuverlässigkeit der potenziellen neuen Anbieter, bevor wir Ihnen einen Tarif reinen Gewissens empfehlen. Ein Wechsel über die Energie Alemi ist deshalb immer ein Wechsel mit einem eingebauten, doppelten Sicherheitsnetz.
                    </p>
                    <p>
                      Die lokale Nähe macht für unsere Kunden den entscheidenden Unterschied: Sollte es im Zuge des Wechsels jemals zu komplexen Rückfragen des Netzbetreibers kommen, ein übermittelter Zählerstand unklar sein oder eine erhaltene Abrechnung fehlerhaft ausfallen, haben Sie uns direkt vor Ort in Aachen als Ihren persönlichen Anwalt in Energiefragen. Wir hängen uns ans Telefon, schreiben die notwendigen Mails und klären das Problem proaktiv für Sie, während Sie sich um die wirklich wichtigen Dinge in Ihrem Leben kümmern können. So profitieren Sie von der perfekten Kombination aus besten, bundesweit verfügbaren Konditionen und einem exzellenten, regionalen Kundenservice, der Sie niemals im Stich lässt.
                    </p>
                    <p>
                      Indem Sie uns das Vertrauen schenken und Ihren Energievertrag durch uns wechseln lassen, sparen Sie nicht nur Monat für Monat bares Geld, sondern vor allem kostbare Lebenszeit und strapazierte Nerven. Von der genauen Analyse Ihres bisherigen Verbrauchsverhaltens über das Einholen der absolut besten Angebote bis hin zum rechtssicheren und fristgerechten Kündigungsschreiben an Ihren Altversorger – wir nehmen Ihnen garantiert alle unangenehmen bürokratischen Aufgaben komplett ab. Darüber hinaus ist unsere Dienstleistung mit dem einmaligen Wechsel nicht beendet: Wir bleiben auch in den Folgejahren stets an Ihrer Seite. Wir erinnern Sie rechtzeitig und proaktiv, bevor Ihre vertragliche Kündigungsfrist abläuft, und prüfen erneut völlig kostenlos, ob Ihr aktueller Tarif noch immer die beste Wahl für Ihre Situation ist oder ob wir einen erneuten, noch günstigeren Wechsel für Sie veranlassen sollten. Dieser nachhaltige, langfristige Betreuungsansatz der Energie Alemi garantiert Ihnen dauerhaft und zuverlässig niedrige Fixkosten in Ihrem Haushalt, ohne dass Sie sich jemals wieder selbst durch den unübersichtlichen Tarifdschungel kämpfen oder stundenlang in Hotline-Warteschleifen ausharren müssen.
                    </p>
                    <p>
                      Vertrauen Sie auf unsere langjährige Expertise im Energiemarkt und unsere tiefe Verwurzelung hier in Aachen. Ob Sie in einem Einfamilienhaus in Kornelimünster wohnen, eine Wohnung direkt im Frankenberger Viertel mieten oder ein kleines Unternehmen in Würselen führen – wir haben die regionale Erfahrung und das nötige Fachwissen, um Ihre Energieversorgung zu optimieren. Kommen Sie gerne persönlich in unserem Büro vorbei, rufen Sie uns an oder schreiben Sie uns unkompliziert per WhatsApp. Lassen Sie uns gemeinsam den ersten Schritt machen: Holen Sie Ihre letzte Jahresabrechnung aus dem Ordner, machen Sie schnell ein Foto davon und schicken Sie es uns einfach per WhatsApp. Wir schauen sofort unverbindlich darüber und sagen Ihnen transparent, ob und wie viel Geld Sie durch einen Wechsel sparen können. Wenn sich ein Wechsel aktuell nicht für Sie lohnt, sagen wir Ihnen das auch ganz offen – denn ehrliche Kommunikation ist das fundamentale Prinzip unserer täglichen Arbeit hier in Aachen.
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
              title="Häufig gestellte Fragen (FAQ)"
              subtitle="Wissenswertes rund um Ihren professionellen Anbieterwechsel"
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
