import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function GasanbieterWechselnSchritt() {
  const { i18n } = useTranslation();
  const article = articles.find(a => a.slug === 'gasanbieter-wechseln')!;

  const faqsDe = [
    {
      question: "Wie lange dauert ein Gasanbieterwechsel?",
      answer: "Nach § 20a EnWG muss das Verfahren zum Lieferantenwechsel innerhalb von drei Wochen abgeschlossen sein. Zudem muss der technische Wechsel ab 2026 an Werktagen innerhalb von 24 Stunden möglich sein. Der tatsächliche Lieferbeginn hängt jedoch von den Fristen Ihres Altvertrags ab."
    },
    {
      question: "Muss ich meinen alten Gasanbieter selbst kündigen?",
      answer: "Nein, im Regelfall kündigt Ihr neuer Anbieter für Sie. Selbst kündigen sollten Sie nur, wenn die Kündigungsfrist sehr kurz bevorsteht, z. B. bei einem Sonderkündigungsrecht wegen einer Preiserhöhung."
    },
    {
      question: "Wird meine Gasversorgung beim Anbieterwechsel unterbrochen?",
      answer: "Nein, eine Unterbrechung ist gesetzlich ausgeschlossen. Der lokale Grundversorger sichert die Gaslieferung über die Ersatz- oder Grundversorgung gemäß § 36/38 EnWG jederzeit ab."
    },
    {
      question: "Welche Daten brauche ich für den Gasanbieterwechsel?",
      answer: "Sie benötigen Ihre Postleitzahl, Ihren Jahresverbrauch in kWh (von der letzten Rechnung), Ihren aktuellen Anbieter sowie Ihre Gaszählernummer."
    },
    {
      question: "Kann ich meinen Gasanbieter bei einem Umzug wechseln?",
      answer: "Ja, wenn Ihr bisheriger Anbieter Ihnen am neuen Wohnort keinen vergleichbaren Tarif anbieten kann, steht Ihnen ein Sonderkündigungsrecht mit einer Frist von sechs Wochen zu (§ 41b Abs. 4 EnWG)."
    }
  ];
  const faqsEn = [
    {
      question: "How long does a gas provider switch take?",
      answer: "According to § 20a EnWG, the supplier switching procedure must be completed within three weeks. In addition, the technical switch must be possible within 24 hours on working days from 2026. However, the actual start of delivery depends on the deadlines of your old contract."
    },
    {
      question: "Do I have to cancel my old gas provider myself?",
      answer: "No, as a rule, your new provider cancels for you. You should only cancel yourself if the notice period is very imminent, e.g., in the case of a special right of termination due to a price increase."
    },
    {
      question: "Will my gas supply be interrupted when switching providers?",
      answer: "No, an interruption is legally excluded. The local basic supplier secures the gas delivery via the substitute or basic supply according to § 36/38 EnWG at any time."
    },
    {
      question: "What data do I need for the gas provider switch?",
      answer: "You need your zip code, your annual consumption in kWh (from the last bill), your current provider, and your gas meter number."
    },
    {
      question: "Can I switch my gas provider when moving?",
      answer: "Yes, if your previous provider cannot offer you a comparable tariff at the new residence, you are entitled to a special right of termination with a notice period of six weeks (§ 41b Paragraph 4 EnWG)."
    }
  ];
  const faqs = i18n.language === 'en' ? faqsEn : faqsDe;

  return (
    <ArticleLayout 
      article={article} 
      customH1={i18n.language === 'en' ? "Switching Gas Providers: Step-by-Step Guide" : "Gasanbieter wechseln: Schritt-für-Schritt-Anleitung"}
      faqs={faqs}
    >
      {i18n.language === 'en' ? (
        <>

      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Switching gas providers works smoothly in the background. No technical adjustments to your heating or pipes are necessary.
      </p>

      <h2>What you should have ready for a gas provider switch</h2>
      <p>
        To carry out the gas provider switch quickly and easily, you should have the following documents and data at hand:
      </p>
      <ul>
        <li><strong>Zip code and city:</strong> Since network usage charges vary regionally, your address determines the available tariffs.</li>
        <li><strong>Annual gas consumption (in kWh):</strong> You can find this value on your last annual statement.</li>
        <li><strong>Previous gas supplier &amp; tariff name:</strong> Serves for a direct price comparison.</li>
        <li><strong>Gas meter number:</strong> Located directly on your gas meter.</li>
        <li><strong>Market Location ID (MaLo-ID):</strong> An 11-digit number sequence for the clear identification of your gas grid connection (if present on the invoice).</li>
        <li><strong>Desired delivery date / notice periods:</strong> Indicates when the switch should take place.</li>
      </ul>

      <h2>Procedure for switching gas providers: Step-by-Step</h2>
      
      <h3>Step 1: Compare tariffs</h3>
      <p>
        Compare different offers via our <Link to="/gas" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Gas Tariff Comparison</Link>. Pay attention to contract terms and price guarantees. Further details on choosing a tariff are provided in our <Link to="/ratgeber/gasvergleich" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Gas Comparison Guide</Link>.
      </p>

      <h3>Step 2: Sign a new contract</h3>
      <p>
        Once you have chosen a suitable tariff, fill out the online form. By doing so, you give the new provider a power of attorney to carry out the cancellation with the old supplier.
      </p>

      <h3>Step 3: Cancellation and handover</h3>
      <p>
        Your new provider will cancel the previous contract at the next possible date. Only cancel yourself if deadlines are very tight (e.g., in the case of a special right of termination).
      </p>

      <h2>Deadlines and special rights of termination</h2>
      
      <h3>Notice periods and contract term</h3>
      <p>
        In the statutory basic supply, the notice period is two weeks (§ 20 GasGVV). For special contracts (e.g., tariffs with a 12 or 24-month term), you must comply with the contractually agreed notice period. According to the regulations of the Act for Fair Consumer Contracts, the following applies to contracts concluded from March 1, 2022: After the initial term expires, they only extend for an indefinite period and can be terminated with a maximum notice period of one month.
      </p>

      <h3>Special right of termination in case of price increases</h3>
      <p>
        In the event of a price or contract change by your provider, you are entitled to a statutory special right of termination under § 41 Paragraph 5 EnWG. You can cancel the contract without notice until the change takes effect.
      </p>

      <h3>Switching when moving</h3>
      <p>
        When moving, you can cancel your gas contract according to § 41b Paragraph 4 EnWG with a notice period of six weeks if your previous provider cannot offer you a continuation of the contract under the same conditions at the new residence. Detailed information can be found in the <Link to="/ratgeber/umzug-aachen-strom-gas-internet" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Moving Guide</Link>.
      </p>

      <h2>Duration of switch and security of supply</h2>

      <h3>How long does the switch take?</h3>
      <p>
        According to § 20a EnWG, the procedure for switching energy suppliers must be completed within three weeks. In addition, from January 1, 2026, the requirement applies that the purely technical switch of the energy provider must be feasible on working days within 24 hours. Please note, however, that the actual start of delivery continues to depend on your notice periods and the regular end of the contract with the previous supplier.
      </p>

      <h3>Seamless gas supply is legally secured</h3>
      <p>
        The seamless energy supply is regulated by law in Germany. Should there be delays in the changeover, the local basic supplier is obliged according to § 36 and § 38 EnWG to supply you without interruption as part of the substitute or basic supply. The <a href="https://www.bundesnetzagentur.de" target="_blank" rel="noopener noreferrer" className="text-[#0047AB] dark:text-[#60a5fa] underline hover:text-[#003380]">Federal Network Agency</a> provides further official consumer information on this.
      </p>

      <h2>Do I have to read the meter?</h2>
      <p>
        Yes. On the switching date, your network operator or the old provider will ask you to report the meter reading so that an accurate final billing can take place.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Check switch now</h3>
        <p className="mb-6">Compare tariffs now or contact us for personal support via our <Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Contact form</Link>.</p>
        <Link to="/gas">
          <Button variant="primary">To the gas comparison</Button>
        </Link>
      </div>

      <h2>Frequently asked questions</h2>
      <div className="space-y-6 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-lg font-bold mt-0 mb-2">{faq.question}</h3>
            <p className="mb-0 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </div>
        ))}
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
        Der Wechsel des Gasanbieters funktioniert reibungslos im Hintergrund. Es sind keine technischen Anpassungen an Ihrer Heizung oder den Leitungen nötig.
      </p>

      <h2>Was Sie für einen Gasanbieterwechsel bereithalten sollten</h2>
      <p>
        Um den Gasanbieterwechsel schnell und unkompliziert durchzuführen, sollten Sie folgende Unterlagen und Daten griffbereit haben:
      </p>
      <ul>
        <li><strong>Postleitzahl und Ort:</strong> Da die Netznutzungsentgelte regional variieren, bestimmt Ihre Adresse die verfügbaren Tarife.</li>
        <li><strong>Jährlicher Gasverbrauch (in kWh):</strong> Diesen Wert finden Sie auf Ihrer letzten Jahresabrechnung.</li>
        <li><strong>Bisheriger Gasversorger &amp; Tarifname:</strong> Dient dem direkten Preisvergleich.</li>
        <li><strong>Gaszählernummer:</strong> Befindet sich direkt auf Ihrem Gaszähler.</li>
        <li><strong>Marktlokations-ID (MaLo-ID):</strong> Eine 11-stellige Ziffernfolge zur eindeutigen Kennzeichnung Ihres Gas-Netzanschlusses (falls auf der Rechnung vorhanden).</li>
        <li><strong>Gewünschter Liefertermin / Kündigungsfristen:</strong> Gibt an, wann der Wechsel erfolgen soll.</li>
      </ul>

      <h2>Ablauf des Gasanbieterwechsels: Schritt-für-Schritt</h2>
      
      <h3>Schritt 1: Tarife vergleichen</h3>
      <p>
        Vergleichen Sie über unseren <Link to="/gas" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Gastarifvergleich</Link> verschiedene Angebote. Achten Sie auf Vertragslaufzeiten und Preisgarantien. Weitere Details zur Tarifwahl liefert unser <Link to="/ratgeber/gasvergleich" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Gasvergleich-Ratgeber</Link>.
      </p>

      <h3>Schritt 2: Neuen Vertrag abschließen</h3>
      <p>
        Haben Sie einen passenden Tarif gewählt, füllen Sie das Online-Formular aus. Sie erteilen dem neuen Anbieter damit eine Vollmacht, die Kündigung beim alten Versorger durchzuführen.
      </p>

      <h3>Schritt 3: Kündigung und Übergabe</h3>
      <p>
        Ihr neuer Anbieter kündigt den bisherigen Vertrag zum nächstmöglichen Termin. Kündigen Sie nur selbst, wenn Fristen sehr knapp sind (z. B. bei einem Sonderkündigungsrecht).
      </p>

      <h2>Fristen und Sonderkündigungsrechte</h2>
      
      <h3>Kündigungsfristen und Vertragslaufzeit</h3>
      <p>
        In der gesetzlichen Grundversorgung beträgt die Kündigungsfrist zwei Wochen (§ 20 GasGVV). Bei Sonderverträge (z. B. Tarife mit 12 oder 24 Monaten Laufzeit) müssen Sie die vertraglich vereinbarte Kündigungsfrist einhalten. Nach den Regelungen des Gesetzes für faire Verbraucherverträge gilt für Verträge mit Abschlussdatum ab dem 1. März 2022: Nach Ablauf der Erstlaufzeit verlängern sie sich nur auf unbestimmte Zeit und sind mit einer Frist von maximal einem Monat kündbar.
      </p>

      <h3>Sonderkündigungsrecht bei Preiserhöhungen</h3>
      <p>
        Bei einer Preis- oder Vertragsänderung Ihres Anbieters steht Ihnen ein gesetzliches Sonderkündigungsrecht nach § 41 Abs. 5 EnWG zu. Sie können den Vertrag bis zum Wirksamwerden der Änderung fristlos kündigen.
      </p>

      <h3>Wechsel bei einem Umzug</h3>
      <p>
        Bei einem Umzug können Sie Ihren Gasvertrag nach § 41b Abs. 4 EnWG mit einer Frist von sechs Wochen kündigen, falls Ihr bisheriger Anbieter Ihnen am neuen Wohnort keine Fortführung des Vertrags zu den gleichen Konditionen anbieten kann. Detaillierte Infos finden Sie im <Link to="/ratgeber/umzug-aachen-strom-gas-internet" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Umzugs-Ratgeber</Link>.
      </p>

      <h2>Wechseldauer und Versorgungssicherheit</h2>

      <h3>Wie lange dauert der Wechsel?</h3>
      <p>
        Gemäß § 20a EnWG muss das Verfahren für den Energielieferantenwechsel innerhalb von drei Wochen abgeschlossen sein. Zudem gilt ab dem 1. Januar 2026 die Vorgabe, dass der rein technische Wechsel des Energieanbieters an Werktagen innerhalb von 24 Stunden durchführbar sein muss. Bitte beachten Sie jedoch, dass sich der tatsächliche Lieferbeginn weiterhin nach Ihren Kündigungsfristen und dem regulären Vertragsende beim bisherigen Versorger richtet.
      </p>

      <h3>Lückenlose Gasversorgung ist gesetzlich gesichert</h3>
      <p>
        Die lückenlose Energieversorgung ist in Deutschland gesetzlich geregelt. Sollte es bei der Umstellung zu Verzögerungen kommen, ist der lokale Grundversorger nach § 36 und § 38 EnWG verpflichtet, Sie im Rahmen der Ersatz- oder Grundversorgung unterbrechungsfrei zu beliefern. Die <a href="https://www.bundesnetzagentur.de" target="_blank" rel="noopener noreferrer" className="text-[#0047AB] dark:text-[#60a5fa] underline hover:text-[#003380]">Bundesnetzagentur</a> stellt hierzu weitere offizielle Verbraucherinformationen bereit.
      </p>

      <h2>Muss ich den Zählerstand ablesen?</h2>
      <p>
        Ja. Zum Wechseltermin fordert Sie Ihr Netzbetreiber oder der alte Anbieter auf, den Zählerstand mitzuteilen, damit eine genaue Endabrechnung erfolgen kann.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Jetzt Wechsel prüfen</h3>
        <p className="mb-6">Vergleichen Sie jetzt die Tarife oder kontaktieren Sie uns für eine persönliche Unterstützung über unser <Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Kontaktformular</Link>.</p>
        <Link to="/gas">
          <Button variant="primary">Zum Gasvergleich</Button>
        </Link>
      </div>

      <h2>Häufig gestellte Fragen</h2>
      <div className="space-y-6 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-lg font-bold mt-0 mb-2">{faq.question}</h3>
            <p className="mb-0 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </div>
        ))}
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
