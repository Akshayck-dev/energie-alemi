import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function DslVsGlasfaserAachen() {
  const { i18n } = useTranslation();
  const article = articles.find(a => a.slug === 'dsl-vs-glasfaser-aachen')!;
  
  const faqsDe = [
    {
      question: "Ist Glasfaser in Aachen verfügbar?",
      answer: "Der Glasfaserausbau in Aachen ist in vollem Gange, jedoch noch nicht flächendeckend abgeschlossen. In vielen Stadtteilen wie Brand oder Haaren finden aktuell Bauarbeiten oder Vorvermarktungen statt, in der Innenstadt oder in Burtscheid ist das Netz teils schon sehr gut ausgebaut. Ob Ihre konkrete Adresse bereits über einen aktiven Glasfaseranschluss verfügt, hängt vom Straßenabschnitt und der Hausnummer ab."
    },
    {
      question: "Wie prüfe ich die Verfügbarkeit an meiner Adresse?",
      answer: "Da die Verfügbarkeit von Glasfaser in Aachen sehr kleinteilig ist, lässt sich dies nur durch eine adressgenaue Prüfung mit Straße und Hausnummer herausfinden. Sie können diese Prüfung selbst auf den Webseiten der Anbieter (z.B. NetAachen, Telekom, Deutsche Glasfaser) durchführen oder unseren kostenlosen Service bei Energie Alemi am Alexianergraben 9 nutzen. Wir vergleichen die Netze und geben Ihre Daten dabei niemals ohne Ihre Zustimmung weiter."
    },
    {
      question: "Ist Glasfaser teurer als DSL?",
      answer: "In den Einstiegstarifen (z.B. 50 oder 100 Mbit/s) sind Glasfasertarife heutzutage oft preislich auf einem sehr ähnlichen Niveau wie vergleichbare DSL-Tarife, manchmal sogar durch spezielle Neukundenboni günstiger. Wenn Sie jedoch sehr hohe Bandbreiten (z.B. 500 oder 1.000 Mbit/s) buchen möchten, steigen die monatlichen Kosten naturgemäß an. Der entscheidende Punkt ist, dass Sie für Ihr Geld eine deutlich stabilere Leistung bekommen."
    },
    {
      question: "Kann ich meinen DSL-Vertrag auf Glasfaser wechseln?",
      answer: "Ein sofortiger Wechsel von DSL auf Glasfaser ist meistens problemlos möglich, wenn Sie beim gleichen Anbieter bleiben und ein sogenanntes Upgrade auf eine höherwertige Technologie durchführen. Möchten Sie jedoch den Anbieter wechseln (z.B. von Vodafone DSL zu NetAachen Glasfaser), müssen Sie in der Regel die verbleibende Restlaufzeit und die reguläre Kündigungsfrist Ihres alten Vertrages abwarten. Manchmal gibt es aber Wechselangebote, bei denen Sie für die Übergangszeit keine doppelten Grundgebühren zahlen."
    },
    {
      question: "Was, wenn Glasfaser bei mir noch nicht ausgebaut ist?",
      answer: "Wenn ein Glasfaseranschluss (FTTH) an Ihrer Adresse in absehbarer Zeit nicht realisiert wird, ist ein klassischer (V)DSL-Anschluss oder das Kabelnetz in Aachen meist die beste Alternative. Mit Supervectoring sind über DSL immerhin bis zu 250 Mbit/s möglich, über das TV-Kabel sogar bis zu 1.000 Mbit/s im Download. Für die allermeisten privaten Haushalte sind diese Bandbreiten aktuell völlig ausreichend."
    }
  ];

  const faqsEn = [
    {
      question: "Is fiber optic available in Aachen?",
      answer: "The fiber optic expansion in Aachen is in full swing, but not yet completed nationwide. Construction work or pre-marketing is currently taking place in many districts such as Brand or Haaren. Whether your specific address already has an active fiber optic connection depends on the street section and house number."
    },
    {
      question: "How do I check availability at my address?",
      answer: "Since the availability of fiber optics in Aachen is very fragmented, this can only be found out through an address-specific check. You can carry out this check yourself on the providers' websites or use our free service at Energie Alemi. We compare the networks and never pass on your data without your consent."
    },
    {
      question: "Is fiber optic more expensive than DSL?",
      answer: "In the entry-level tariffs, fiber optic tariffs are nowadays often at a very similar price level as comparable DSL tariffs. If you want to book very high bandwidths, the monthly costs naturally increase. The crucial point is that you get much more stable performance for your money."
    },
    {
      question: "Can I switch my DSL contract to fiber optic?",
      answer: "An immediate switch from DSL to fiber optic is usually possible without any problems if you stay with the same provider. However, if you want to switch providers, you generally have to wait for the remaining term and notice period of your old contract to expire."
    },
    {
      question: "What if fiber optic is not yet expanded for me?",
      answer: "If a fiber optic connection is not realized at your address in the foreseeable future, a classic (V)DSL connection or the cable network in Aachen is usually the best alternative. For the vast majority of private households, these bandwidths are currently perfectly adequate."
    }
  ];

  return (
    <ArticleLayout article={article} faqs={i18n.language === 'en' ? faqsEn : faqsDe}>
      {i18n.language === 'en' ? (
        <>
            <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
              Aachen is massively expanding its fiber optic network. But is the switch from DSL to fiber optics really worthwhile for every household? We clarify the most important differences and show when the switch is worthwhile.
            </p>

            <h2>The technical difference</h2>
            <p>
              <strong>DSL (VDSL):</strong> Data is transmitted over the old copper cables of the telephone network. The further your house is from the nearest distribution box, the slower the connection becomes.
            </p>
            <p>
              <strong>Fiber optics (FTTH - Fiber to the Home):</strong> Data travels as light signals through wafer-thin fiber optic cables directly into your apartment. There are no speed losses, no matter how far away the nearest node is.
            </p>

            <h2>Advantages of fiber optics in Aachen</h2>
            <ul>
              <li><strong>Stable performance:</strong> Even in the evening hours, when all of Aachen is streaming, the speed remains constant.</li>
              <li><strong>Symmetrical bandwidths:</strong> Upload is often just as fast as download – perfect for home office and video conferences.</li>
              <li><strong>Future-proofing:</strong> Fiber optics already offer speeds of up to 1,000 Mbit/s (Gigabit) today and still have plenty of room for improvement.</li>
            </ul>

            <h2>Do I really need fiber optics?</h2>
            <p>
              For a 1- to 2-person household that streams a movie in the evening and surfs the internet a bit, a good VDSL connection (50 to 100 Mbit/s) is perfectly sufficient. However, if you regularly upload large amounts of data, live in a smart home, or intensively use the internet with several people at the same time (4K streaming, gaming, home office), fiber optics is the much better choice.
            </p>

            <h2>What is the expansion status in Aachen?</h2>
            <p>
              Local providers like NetAachen as well as big players like Telekom and Deutsche Glasfaser are driving the expansion in various districts of Aachen. There are often pre-marketing phases where the house connection is free if you sign a contract early. Are you planning to move to a new expansion area soon? Also remember to <Link to="/ratgeber/strom-umzug-anmelden" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">register electricity when moving</Link> in good time.
            </p>

            <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
              <h3 className="text-2xl font-bold mb-4 mt-0">Is fiber optic available at your location?</h3>
              <p className="mb-6">Use our internet comparison or visit us in our Aachen branch to check availability at your address.</p>
              <Link to="/contact">
                <Button variant="primary">Free consultation</Button>
              </Link>
            </div>
        </>
      ) : (
        <>
        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          
          <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
            Das Thema Internet ist in Aachen aktuell allgegenwärtig. Fast jede Woche sieht man in einem anderen Viertel der Kaiserstadt Baustellen, die auf den groß angelegten FTTH-Ausbau (Fiber to the Home) hinweisen. Doch was genau bedeutet das für Sie als Endverbraucher? Aachen baut sein Glasfasernetz massiv aus, doch der Umstieg von der klassischen Kupferleitung auf die moderne Lichtleitertechnologie wirft viele Fragen auf. Lohnt sich der Wechsel von DSL auf Glasfaser wirklich für jeden Aachener Haushalt? Ist es eine Notwendigkeit oder eher ein netter Luxus? In diesem Ratgeber klären wir auf, vergleichen ehrlich und zeigen Ihnen, wie Sie am besten vorgehen.
          </p>

          <h2>Der Glasfaser-Ausbau in Aachen: Brand, Haaren und Co.</h2>
          <p>
            Der Glasfaser-Ausbau in Aachen ist ein massives Infrastrukturprojekt, das von verschiedenen lokalen und überregionalen Akteuren vorangetrieben wird. Neben NetAachen, einem Anbieter mit starken lokalen Wurzeln, sind auch große Konzerne wie die Deutsche Telekom und die Deutsche Glasfaser stark engagiert. Die Arbeiten verteilen sich dabei über das gesamte Stadtgebiet, doch der Fortschritt ist von Stadtteil zu Stadtteil, teilweise sogar von Straße zu Straße, höchst unterschiedlich. 
          </p>
          <p>
            Besonders in den Randbezirken wie Aachen-Brand oder Aachen-Haaren gibt es oft groß angelegte Vorvermarktungskampagnen. Hier buhlen die Unternehmen um Kunden, um die nötige Ausbauquote für einen wirtschaftlichen Netzausbau zu erreichen. Wer in diesen frühen Phasen einen Vertrag unterzeichnet, erhält den Hausanschluss, für den sonst Kosten im vierstelligen Bereich anfallen können, oftmals völlig kostenlos bis ins Haus gelegt. 
          </p>
          <p>
            Wir bei Energie Alemi möchten hier völlig ehrlich mit Ihnen sein: Der Ausbau läuft, aber Sie sollten sich nicht auf erfundene Ausbaudaten oder pauschale Versprechen aus dubiosen Werbebroschüren verlassen. Es kommt immer wieder zu Verzögerungen durch Baukapazitäten oder Genehmigungsverfahren. Der reale, unsichere Stand ist oft nur schwer durchschaubar. Verlassen Sie sich daher stets auf eine adressgenaue Prüfung und nicht auf ungefähre Aussagen.
          </p>

          <h2>Verfügbarkeit prüfen: Adressgenau und sicher</h2>
          <p>
            Da der Status so extrem unterschiedlich ist, gibt es nur eine einzige verlässliche Methode, um herauszufinden, ob und wann Sie schnelles Glasfaserinternet bekommen können: die adressgenaue Prüfung. Dabei wird nicht nur der Stadtteil abgefragt, sondern konkret Ihre Straße inklusive Ihrer Hausnummer herangezogen. Nur so lässt sich ermitteln, ob das Lichtleitkabel bereits im Keller anliegt oder noch in der Planung ist.
          </p>
          <p>
            Viele Bürger scheuen sich jedoch völlig zurecht davor, ihre Adress- und Kontaktdaten auf unzähligen Portalen im Internet einzugeben, aus Angst vor lästigen Werbeanrufen. Hier springen wir ein. Wir prüfen für Sie gerne und völlig unverbindlich die Verfügbarkeit an Ihrer konkreten Adresse. Wir garantieren Ihnen dabei, dass es keinerlei Datenweitergabe ohne Ihre ausdrückliche Zustimmung gibt. Wir prüfen absolut neutral über alle verfügbaren <Link to="/internetanbieter-aachen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">Internetanbieter Aachen</Link> hinweg, welches Netz an Ihrem Standort wirklich anliegt.
          </p>

          <h2>DSL oder Glasfaser — ein ehrlicher Vergleich</h2>
          <p>
            Wenn Sie nun die komfortable Wahl zwischen einem klassischen DSL-Vertrag (VDSL) und einem modernen Glasfaseranschluss haben, stehen Sie vor einer wichtigen Entscheidung. Hier ist unser vollkommen ehrlicher Vergleich hinsichtlich Geschwindigkeit, Stabilität und Preis:
          </p>
          
          <h3>Geschwindigkeit und Stabilität</h3>
          <p>
            <strong>DSL (VDSL):</strong> Die Daten werden bei DSL über die alten, oftmals jahrzehntealten Kupferkabel des Telefonnetzes übertragen. Das größte Problem dieser Technik ist die Leitungsdämpfung: Je weiter Ihr Haus vom nächsten grauen Verteilerkasten an der Straße entfernt ist, desto langsamer und störanfälliger wird Ihre Verbindung. Zwar sind durch sogenanntes Super-Vectoring heute bis zu 250 Mbit/s möglich, diese kommen aber oft nicht vollständig in der heimischen Wohnung an.
          </p>
          <p>
            <strong>Glasfaser (FTTH):</strong> FTTH bedeutet "Fiber to the Home". Die Daten reisen hierbei als schnelle Lichtsignale durch hauchdünne Glasfaserkabel – und das ohne jede Unterbrechung direkt bis in Ihre Wohnung oder Ihr Einfamilienhaus. Es gibt keinerlei nennenswerte Geschwindigkeitsverluste über Distanz. Auch in den Abendstunden, wenn ganz Aachen gleichzeitig streamt oder online spielt, bleibt die Leistung absolut konstant und stabil. Zudem sind symmetrische Bandbreiten problemlos möglich, bei denen der Upload genauso rasend schnell ist wie der Download. Ein absoluter Traum für jeden, der viel im Home-Office arbeitet, Videokonferenzen abhält oder große Dateien in die Cloud lädt.
          </p>

          <h3>Preis und Wirtschaftlichkeit</h3>
          <p>
            Oft herrscht der Irrglaube, Glasfaser sei für den Normalverbraucher unerschwinglich teuer. Das stimmt in der heutigen Zeit so absolut nicht mehr. Die Einstiegstarife für Bandbreiten von 50 oder 100 Mbit/s kosten über einen modernen Glasfaseranschluss oft exakt dasselbe wie über das alte Kupferkabel bei DSL. Oft gibt es in den ersten 6 oder 12 Monaten sogar extrem lukrative Neukundenboni, die den Tarif extrem vergünstigen. Erst wenn Sie sich entscheiden, die Leistung massiv nach oben zu schrauben – etwa auf 500 Mbit/s oder gar den vollen Gigabit – zahlen Sie natürlich einen höheren Premiumpreis. Der wesentliche Vorteil bleibt aber: Sie erhalten für jeden investierten Euro eine verlässliche und zugesicherte Bandbreite, die keinen Schwankungen unterliegt.
          </p>

          <h3>Wann reicht DSL, wann lohnt Glasfaser?</h3>
          <p>
            Für einen durchschnittlichen 1- bis 2-Personen-Haushalt, der am Abend entspannt einen Film über einen Streaming-Dienst schaut, E-Mails abruft, Social Media nutzt und ganz normal im Internet surft, reicht ein stabiler VDSL-Anschluss mit 50 bis 100 Mbit/s heute völlig aus. Hier wäre ein teurer Gigabit-Glasfasertarif schlichtweg überdimensioniert und würde unnötig Geld kosten. Wenn Sie mit Ihrer aktuellen Kupferleitung keinerlei Verbindungsabbrüche erleben, gibt es keinen akuten Grund für Panik.
          </p>
          <p>
            Wenn Sie jedoch in einem mehrköpfigen Haushalt leben, regelmäßig extrem große Datenmengen hoch- und runterladen, ein stark vernetztes Smart-Home betreiben oder mit mehreren Personen gleichzeitig sehr intensiv das Internet nutzen (4K-Streaming parallel zum Online-Gaming und der beruflichen Videokonferenz), ist Glasfaser zweifelsohne die deutlich bessere Wahl für die Zukunft. Auch als umsichtiger Immobilienbesitzer lohnt sich der Ausbau fast immer, da ein aktiver FTTH-Anschluss den Marktwert des Hauses direkt steigert. Ein unabhängiger <Link to="/energieberater-aachen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">Energieberater Aachen</Link> kann Ihnen neben Strom und Gas auch in diesen Belangen kompetent helfen, das nachhaltigste Setup für Ihr Haus zu finden.
          </p>

          <h2>Internet beim Umzug: Was muss ich zwingend beachten?</h2>
          <p>
            Ein Umzug innerhalb von Aachen oder der komplette Zuzug in die Kaiserstadt ist der perfekte Moment, um den eigenen Internetanschluss kritisch zu hinterfragen. Prüfen Sie am besten schon viele Wochen vor dem Umzug, welche Technologien in der neuen Wohnung anliegen. Denken Sie auch daran, dass Sie in dieser hektischen Zeit nicht nur das Internet, sondern parallel auch Ihre Energieversorgung regeln müssen. Weitere wertvolle Informationen und eine praktische Checkliste für die Anmeldung finden Sie in unserem ausführlichen Ratgeber <Link to="/ratgeber/strom-umzug-anmelden" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline font-semibold">Strom beim Umzug anmelden</Link>. Erledigen Sie beides gemeinsam und aus einer Hand, sparen Sie sich unglaublich viel Zeit und Stress.
          </p>
          <p>
            Lassen Sie sich bei der Wahl des passenden Internetanbieters nicht von vollmundigen Werbeversprechen blenden. Wir stehen für zu 100% transparente Beratung ohne versteckte Kosten oder ungedeckte Preis- und Terminversprechen. Alles, was wir Ihnen empfehlen, beruht auf belegbaren Quellen und adressgenauen Analysen vor Ort.
          </p>

        </div>

        <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
          <h3 className="text-2xl font-bold mb-4 mt-0">Kostenlose Beratung und ehrliche Verfügbarkeitsprüfung</h3>
          <p className="mb-6">
            Möchten Sie genau wissen, ob an Ihrer Adresse in Aachen bereits Glasfaser liegt oder ob Sie mit DSL aktuell besser fahren? Wir helfen Ihnen sehr gerne bei der individuellen Prüfung, vergleichen völlig neutral die Tarife und kümmern uns um den gesamten Wechsel – komplett kostenlos. Rufen Sie uns einfach an unter <strong>0176 659 493 90</strong>, schreiben Sie uns, oder kommen Sie direkt bei uns am <strong>Alexianergraben 9</strong> in Aachen vorbei (Mo–Sa 10–19 Uhr).
          </p>
          <Link to="/contact">
            <Button>Kostenlose Beratung anfragen</Button>
          </Link>
        </div>
        </>
      )}
    </ArticleLayout>
  );
}
