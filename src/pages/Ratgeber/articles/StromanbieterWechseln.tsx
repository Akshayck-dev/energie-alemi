import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function StromanbieterWechseln() {
  const { i18n } = useTranslation();
  const article = articles.find(a => a.slug === 'stromanbieter-wechseln')!;

  const faqsDe = [
    {
      question: "Wie kann ich meinen Stromanbieter wechseln?",
      answer: "Der Wechsel ist unkompliziert: Sie vergleichen Stromtarife online, wählen einen neuen Anbieter und füllen das Formular aus. Die Kündigung beim bisherigen Versorger übernimmt meist der neue Anbieter."
    },
    {
      question: "Wie lange dauert ein Stromanbieterwechsel?",
      answer: "Nach den gesetzlichen Vorgaben (§ 20a EnWG) muss der technische Wechsel des Stromanbieters innerhalb von drei Wochen abgeschlossen sein. Ab dem 1. Januar 2026 gilt zudem die Vorgabe, dass der rein technische Anbieterwechsel an Werktagen innerhalb von 24 Stunden durchführbar sein muss. Bitte beachten Sie jedoch, dass sich der tatsächliche Lieferbeginn nach Ihren Kündigungsfristen und Vertragslaufzeiten beim bisherigen Versorger richtet."
    },
    {
      question: "Muss ich meinen alten Stromvertrag selbst kündigen?",
      answer: "Nein, in der Regel nicht. Wenn Sie regulär den Anbieter wechseln, kündigt Ihr neuer Anbieter für Sie. Kündigen Sie nur selbst, wenn Sie ein Sonderkündigungsrecht wegen einer Preiserhöhung nutzen oder sehr kurzfristig umziehen."
    },
    {
      question: "Kann ich den Stromanbieter trotz laufendem Vertrag wechseln?",
      answer: "Ja, Sie können den neuen Tarif jederzeit abschließen. Der eigentliche Anbieterwechsel findet jedoch erst nach Ablauf Ihrer aktuellen Vertragslaufzeit und Kündigungsfrist statt."
    },
    {
      question: "Was kostet der Stromanbieterwechsel?",
      answer: "Ein Stromanbieterwechsel ist immer kostenlos. Weder der bisherige noch der zukünftige Stromanbieter dürfen Wechselgebühren erheben."
    },
    {
      question: "Gibt es eine Unterbrechung der Stromversorgung?",
      answer: "Nein, eine Unterbrechung ist gesetzlich ausgeschlossen. Der Gesetzgeber garantiert die kontinuierliche Stromversorgung über die sogenannte Ersatz- oder Grundversorgung gemäß § 36 und § 38 des Energiewirtschaftsgesetzes (EnWG), sodass Sie zu keinem Zeitpunkt ohne Strom dastehen."
    }
  ];
  const faqsEn = [
    {
      question: "How can I switch my electricity provider?",
      answer: "The switch is straightforward: You compare electricity tariffs online, choose a new provider, and fill out the form. The new provider usually handles the cancellation with the previous supplier."
    },
    {
      question: "How long does an electricity provider switch take?",
      answer: "According to legal requirements (§ 20a EnWG), the technical switch of the electricity provider must be completed within three weeks. From January 1, 2026, the requirement also applies that the purely technical provider switch must be feasible on working days within 24 hours. Please note, however, that the actual start of delivery depends on your notice periods and contract terms with the previous supplier."
    },
    {
      question: "Do I have to cancel my old electricity contract myself?",
      answer: "No, generally not. If you regularly switch providers, your new provider will cancel for you. Only cancel yourself if you are using a special right of termination due to a price increase or if you are moving at very short notice."
    },
    {
      question: "Can I switch electricity providers despite an ongoing contract?",
      answer: "Yes, you can conclude the new tariff at any time. However, the actual provider switch only takes place after your current contract term and notice period have expired."
    },
    {
      question: "How much does it cost to switch electricity providers?",
      answer: "Switching electricity providers is always free. Neither the previous nor the future electricity provider may charge switching fees."
    },
    {
      question: "Is there an interruption in the electricity supply?",
      answer: "No, an interruption is legally excluded. The legislature guarantees continuous electricity supply via the so-called substitute or basic supply according to § 36 and § 38 of the Energy Industry Act (EnWG), so that you are never without electricity at any time."
    }
  ];
  const faqs = i18n.language === 'en' ? faqsEn : faqsDe;

  return (
    <ArticleLayout 
      article={article} 
      customH1={i18n.language === 'en' ? "Switching Electricity Providers: How the Switch Works" : "Stromanbieter wechseln: So funktioniert der Wechsel"}
      faqs={faqs}
    >
      {i18n.language === 'en' ? (
        <>

      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Energy prices fluctuate, and many households pay too much for their electricity. Those who want to <strong>switch their electricity provider</strong> can save several hundred euros a year. In this guide, we explain the exact procedure, which notice periods are important, and how you can safely find a cheap electricity tariff.
      </p>

      <h2>When is a switch worthwhile?</h2>
      <p>
        An <strong>electricity provider switch</strong> is worthwhile for almost everyone, but especially for households that are still in the expensive basic supply. Basic supply tariffs are flexible but often the most expensive option on the market. Even if your price guarantee with an alternative provider expires or you have received a price increase, it is the perfect time to switch electricity providers. New customers also frequently benefit from attractive switching premiums.
      </p>

      <h2>How does the electricity provider switch work?</h2>
      <p>
        The process to be able to <strong>switch electricity tariffs</strong> is legally standardized in Germany and extremely simple for you as a consumer:
      </p>

      <h3>Compare electricity tariffs</h3>
      <p>
        Use our free <Link to="/electricity" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">electricity tariff comparison</Link> to compare the offers of different providers. You only need your zip code and your approximate annual consumption in kWh, which you can find on your last annual statement.
      </p>

      <h3>Select a new electricity provider</h3>
      <p>
        Decide on a tariff that combines good prices with fair contract conditions (such as a price guarantee and short term).
      </p>

      <h3>Sign the contract and start the switch</h3>
      <p>
        Enter your data, your meter number, and the name of your previous provider online. By concluding, you instruct the new provider to carry out the switching process for you.
      </p>

      <h2>What you should have ready for an electricity provider switch</h2>
      <p>
        To carry out the switch quickly and smoothly online, you should have the following information and documents ready:
      </p>
      <ul>
        <li><strong>Zip code and city:</strong> Enables the determination of network usage charges at your address.</li>
        <li><strong>Annual electricity consumption in kWh:</strong> To be found on your last annual statement.</li>
        <li><strong>Current provider &amp; contract data:</strong> Important for timely cancellation.</li>
        <li><strong>Meter number:</strong> This is located directly on your electricity meter.</li>
        <li><strong>Market Location ID (MaLo-ID):</strong> An 11-digit number that identifies your specific grid connection and can be found on your electricity bill (not to be confused with the meter number).</li>
        <li><strong>Personal customer data:</strong> Including your customer number with the current electricity provider.</li>
      </ul>

      <h2>Which deadlines apply when switching electricity providers?</h2>
      <p>
        Before you switch providers, you should know the deadlines of your current contract.
      </p>

      <h3>Notice period and contract term</h3>
      <p>
        Every electricity contract has a specific notice period. In the basic supply, this is legally two weeks (§ 36 EnWG). For special contracts, since the Act for Fair Consumer Contracts, the following applies to many electricity contracts concluded after March 1, 2022: After the end of the initial contractual term, they only extend for an indefinite period and can be canceled with a maximum notice period of one month. Older contracts or different tariff structures may have different deadlines. Therefore, check your individual contract data.
      </p>

      <h3>Switch electricity providers despite an ongoing contract</h3>
      <p>
        Many consumers wonder: Can I <strong>switch electricity providers despite a contract</strong>? Yes, you can secure a cheap tariff for the future today. The actual start of delivery then takes place seamlessly after the expiration of your current contract. An exception is made for price increases: Here, a statutory special right of termination according to § 41 Paragraph 5 EnWG takes effect, allowing you to terminate the contract immediately without observing the regular notice period.
      </p>

      <h2>What happens to the old electricity contract?</h2>
      <p>
        The most important thing with a regular provider switch: Never cancel your old contract yourself. Your new supplier takes over the cancellation for you to ensure a smooth handover of the electricity supply. Only if the deadline for a special right of termination is very tight should you cancel in writing yourself and inform the new provider of this upon conclusion of the contract.
      </p>

      <h2>How much does an electricity provider switch cost?</h2>
      <p>
        An <strong>electricity provider switch</strong> is basically and legally required to be free of charge. No switching or processing fees are charged by the energy suppliers. 
      </p>

      <h2>What should one look out for with the new electricity tariff?</h2>
      <p>
        To really save, a look at the monthly installments is not enough. Pay attention to the following details before you <strong>switch electricity contracts</strong>. For a detailed explanation of all tariff details, also read our article: <Link to="/ratgeber/stromvergleich" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Compare electricity contracts correctly</Link>.
      </p>

      <h3>Unit price and base price</h3>
      <p>
        The unit price (cents per kWh) is crucial if you consume a lot of electricity. The base price (euros per month) is a fixed fee that carries weight especially with very low electricity consumption.
      </p>

      <h3>Contract term</h3>
      <p>
        Choose terms of a maximum of 12 months. This way you remain flexible and can again benefit from market fluctuations and bonuses next year.
      </p>

      <h3>Price guarantee</h3>
      <p>
        A price guarantee that extends over the entire first contract term reliably protects you from surprising cost increases on the energy market.
      </p>

      <h3>Bonus and new customer offers</h3>
      <p>
        Many providers lure with high bonuses. These are usually paid out after the first year and make the tariff very cheap in the first year. Pay attention to how the price develops in the second year if you forget to switch again.
      </p>

      <h2>What happens during the provider switch?</h2>
      <p>
        During the switch, you notice absolutely nothing in your household. The electricity meter and the lines remain untouched. There are no technician visits and above all no power outage. In the background, your new provider re-registers your meter with the network operator. The seamless electricity supply is legally regulated in Germany. Should the switch be delayed, the statutory basic and substitute supply according to the Energy Industry Act (EnWG) takes effect, as also confirmed by the <a href="https://www.bundesnetzagentur.de" target="_blank" rel="noopener noreferrer" className="text-[#0047AB] dark:text-[#60a5fa] underline hover:text-[#003380]">Federal Network Agency</a>.
      </p>

      <h2>Avoid common mistakes when switching electricity providers</h2>
      <p>
        The most common mistake is independent cancellation during a regular switch, which can lead to delays. Another mistake is ignoring price increases. When you receive a letter from your provider, immediately check your special right of termination. Should you need support with the comparison or the switching process, we will gladly help you in our <Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">personal tariff advice</Link> or directly via our <Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">contact form</Link>.
      </p>

      <h2>Frequently asked questions about switching electricity providers</h2>
      <div className="space-y-6 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-lg font-bold mt-0 mb-2">{faq.question}</h3>
            <p className="mb-0 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Ready for cheaper electricity prices?</h3>
        <p className="mb-6">Compare current tariffs now and permanently reduce your electricity costs.</p>
        <Link to="/electricity">
          <Button variant="primary">Compare electricity tariffs now</Button>
        </Link>
      </div>

      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold mb-4">Further Information</h3>
        <ul className="flex flex-col gap-2">
          <li><Link to="/energie-fragen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Energy Q&A</Link></li>
          <li><Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Contact us</Link></li>
        </ul>
      </div>
        </>
      ) : (
        <>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Die Energiepreise schwanken, und viele Haushalte zahlen zu viel für ihren Strom. Wer seinen <strong>Stromanbieter wechseln</strong> möchte, kann jährlich mehrere hundert Euro sparen. In diesem Ratgeber erklären wir Ihnen den genauen Ablauf, welche Kündigungsfristen wichtig sind und wie Sie sicher einen günstigen Stromtarif finden.
      </p>

      <h2>Wann lohnt sich ein Wechsel?</h2>
      <p>
        Ein <strong>Stromanbieterwechsel</strong> lohnt sich für fast jeden, insbesondere aber für Haushalte, die sich noch in der teuren Grundversorgung befinden. Grundversorgungstarife sind zwar flexibel, aber oft die teuerste Option am Markt. Auch wenn Ihre Preisgarantie bei einem alternativen Anbieter ausläuft oder Sie eine Preiserhöhung erhalten haben, ist es der perfekte Zeitpunkt, um den Stromanbieter zu wechseln. Neukunden profitieren zudem häufig von attraktiven Wechselprämien.
      </p>

      <h2>Wie funktioniert der Stromanbieterwechsel?</h2>
      <p>
        Der Prozess, um den <strong>Stromtarif wechseln</strong> zu können, ist in Deutschland gesetzlich standardisiert und für Sie als Verbraucher extrem einfach:
      </p>

      <h3>Stromtarif vergleichen</h3>
      <p>
        Nutzen Sie unseren kostenlosen <Link to="/electricity" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Stromtarif-Vergleich</Link>, um die Angebote verschiedener Anbieter abzugleichen. Sie benötigen lediglich Ihre Postleitzahl und Ihren ungefähren Jahresverbrauch in kWh, den Sie auf Ihrer letzten Jahresabrechnung finden.
      </p>

      <h3>Neuen Stromanbieter auswählen</h3>
      <p>
        Entscheiden Sie sich für einen Tarif, der gute Preise mit fairen Vertragsbedingungen (wie einer Preisgarantie und kurzer Laufzeit) kombiniert.
      </p>

      <h3>Vertrag abschließen und Wechsel starten</h3>
      <p>
        Geben Sie online Ihre Daten, Ihre Zählernummer und den Namen Ihres bisherigen Anbieters ein. Mit dem Abschluss beauftragen Sie den neuen Anbieter, den Wechselprozess für Sie durchzuführen.
      </p>

      <h2>Was Sie für einen Stromanbieterwechsel bereithalten sollten</h2>
      <p>
        Um den Wechsel schnell und reibungslos online durchzuführen, sollten Sie folgende Informationen und Unterlagen bereithalten:
      </p>
      <ul>
        <li><strong>Postleitzahl und Ort:</strong> Ermöglicht die Ermittlung der Netznutzungsentgelte an Ihrer Adresse.</li>
        <li><strong>Jahresstromverbrauch in kWh:</strong> Zu finden auf Ihrer letzten Jahresabrechnung.</li>
        <li><strong>Aktueller Anbieter &amp; Vertragsdaten:</strong> Wichtig für die fristgerechte Kündigung.</li>
        <li><strong>Zählernummer:</strong> Diese befindet sich direkt auf Ihrem Stromzähler.</li>
        <li><strong>Marktlokations-ID (MaLo-ID):</strong> Eine 11-stellige Nummer, die Ihren konkreten Netzanschluss kennzeichnet und auf Ihrer Stromrechnung zu finden ist (nicht zu verwechseln mit der Zählernummer).</li>
        <li><strong>Persönliche Kundendaten:</strong> Einschließlich Ihrer Kundennummer beim aktuellen Stromanbieter.</li>
      </ul>

      <h2>Welche Fristen gelten beim Stromanbieterwechsel?</h2>
      <p>
        Bevor Sie den Anbieter wechseln, sollten Sie die Fristen Ihres aktuellen Vertrags kennen.
      </p>

      <h3>Kündigungsfrist und Vertragslaufzeit</h3>
      <p>
        Jeder Stromvertrag hat eine spezifische Kündigungsfrist. In der Grundversorgung beträgt diese gesetzlich zwei Wochen (§ 36 EnWG). Für Sonderverträge gilt seit dem Gesetz für faire Verbraucherverträge bei vielen nach dem 1. März 2022 abgeschlossenen Stromverträgen: Nach dem Ablauf der vertraglichen Erstlaufzeit verlängern sich diese nur noch auf unbestimmte Zeit und können mit einer Frist von maximal einem Monat gekündigt werden. Ältere Verträge oder abweichende Tarifkonstruktionen können andere Fristen aufweisen. Prüfen Sie daher Ihre individuellen Vertragsdaten.
      </p>

      <h3>Stromanbieter wechseln trotz laufendem Vertrag</h3>
      <p>
        Viele Verbraucher fragen sich: Kann ich den <strong>Stromanbieter wechseln trotz Vertrag</strong>? Ja, Sie können sich heute schon einen günstigen Tarif für die Zukunft sichern. Der tatsächliche Lieferbeginn erfolgt dann nahtlos nach Ablauf Ihres aktuellen Vertrags. Eine Ausnahme besteht bei Preiserhöhungen: Hier greift ein gesetzliches Sonderkündigungsrecht nach § 41 Abs. 5 EnWG, durch das Sie den Vertrag sofort ohne Einhaltung der regulären Frist beenden können.
      </p>

      <h2>Was passiert mit dem alten Stromvertrag?</h2>
      <p>
        Das Wichtigste beim regulären Anbieterwechsel: Kündigen Sie Ihren alten Vertrag niemals selbst. Ihr neuer Versorger übernimmt die Kündigung für Sie, um eine reibungslose Übergabe der Stromversorgung sicherzustellen. Nur wenn die Frist für ein Sonderkündigungsrecht sehr knapp ist, sollten Sie selbst schriftlich kündigen und dies dem neuen Anbieter bei Vertragsschluss mitteilen.
      </p>

      <h2>Was kostet ein Stromanbieterwechsel?</h2>
      <p>
        Ein <strong>Stromanbieterwechsel</strong> ist grundsätzlich und gesetzlich vorgeschrieben kostenlos. Es fallen keinerlei Wechsel- oder Bearbeitungsgebühren durch die Energieversorger an. 
      </p>

      <h2>Worauf sollte man beim neuen Stromtarif achten?</h2>
      <p>
        Um wirklich zu sparen, reicht ein Blick auf die monatlichen Abschläge nicht aus. Achten Sie auf folgende Details, bevor Sie den <strong>Stromvertrag wechseln</strong>. Für eine ausführliche Erklärung aller Tarifdetails lesen Sie auch unseren Beitrag: <Link to="/ratgeber/stromvergleich" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Stromvertrag richtig vergleichen</Link>.
      </p>

      <h3>Arbeitspreis und Grundpreis</h3>
      <p>
        Der Arbeitspreis (Cent pro kWh) ist entscheidend, wenn Sie viel Strom verbrauchen. Der Grundpreis (Euro pro Monat) ist eine Fixgebühr, die besonders bei einem sehr geringen Stromverbrauch ins Gewicht fällt.
      </p>

      <h3>Vertragslaufzeit</h3>
      <p>
        Wählen Sie Laufzeiten von maximal 12 Monaten. So bleiben Sie flexibel und können im nächsten Jahr erneut von Marktschwankungen und Boni profitieren.
      </p>

      <h3>Preisgarantie</h3>
      <p>
        Eine Preisgarantie, die sich über die gesamte erste Vertragslaufzeit erstreckt, schützt Sie zuverlässig vor überraschenden Kostensteigerungen am Energiemarkt.
      </p>

      <h3>Bonus und Neukundenangebote</h3>
      <p>
        Viele Anbieter locken mit hohen Boni. Diese werden meist nach dem ersten Jahr ausgezahlt und machen den Tarif im ersten Jahr sehr günstig. Achten Sie darauf, wie sich der Preis im zweiten Jahr entwickelt, falls Sie vergessen, erneut zu wechseln.
      </p>

      <h2>Was passiert während des Anbieterwechsels?</h2>
      <p>
        Während des Wechsels merken Sie in Ihrem Haushalt absolut nichts. Der Stromzähler und die Leitungen bleiben unangetastet. Es gibt keine Technikerbesuche und vor allem keinen Stromausfall. Im Hintergrund meldet Ihr neuer Anbieter Ihren Zähler beim Netzbetreiber um. Die lückenlose Stromversorgung ist dabei in Deutschland gesetzlich geregelt. Sollte sich der Wechsel verzögern, greift die gesetzliche Grund- und Ersatzversorgung nach dem Energiewirtschaftsgesetz (EnWG), wie auch die <a href="https://www.bundesnetzagentur.de" target="_blank" rel="noopener noreferrer" className="text-[#0047AB] dark:text-[#60a5fa] underline hover:text-[#003380]">Bundesnetzagentur</a> bestätigt.
      </p>

      <h2>Häufige Fehler beim Stromanbieterwechsel vermeiden</h2>
      <p>
        Der häufigste Fehler ist die eigenständige Kündigung bei einem regulären Wechsel, was zu Verzögerungen führen kann. Ein weiterer Fehler ist das Ignorieren von Preiserhöhungen. Wenn Sie ein Schreiben Ihres Anbieters erhalten, prüfen Sie sofort Ihr Sonderkündigungsrecht. Sollten Sie Unterstützung beim Vergleich oder dem Wechselprozess benötigen, helfen wir Ihnen gerne in unserer <Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">persönlichen Tarifberatung</Link> oder direkt über unser <Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Kontaktformular</Link>.
      </p>

      <h2>Häufige Fragen zum Stromanbieterwechsel</h2>
      <div className="space-y-6 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-lg font-bold mt-0 mb-2">{faq.question}</h3>
            <p className="mb-0 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Bereit für günstigere Strompreise?</h3>
        <p className="mb-6">Vergleichen Sie jetzt die aktuellen Tarife und senken Sie Ihre Stromkosten dauerhaft.</p>
        <Link to="/electricity">
          <Button variant="primary">Jetzt Stromtarife vergleichen</Button>
        </Link>
      </div>

      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-bold mb-4">Weitere Informationen</h3>
        <ul className="flex flex-col gap-2">
          <li><Link to="/energie-fragen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Energie-Fragen & Antworten</Link></li>
          <li><Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Kontakt aufnehmen</Link></li>
        </ul>
      </div>
    </>
      )}
    </ArticleLayout>
  );
}
