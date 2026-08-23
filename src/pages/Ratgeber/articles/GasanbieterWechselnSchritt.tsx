import { Link } from 'react-router';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function GasanbieterWechselnSchritt() {
  const article = articles.find(a => a.slug === 'gasanbieter-wechseln')!;

  const faqs = [
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

  return (
    <ArticleLayout article={article} faqs={faqs}>
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
        Vergleichen Sie über unseren <Link to="/gas" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Vergleichsrechner</Link> verschiedene Angebote. Achten Sie auf Vertragslaufzeiten und Preisgarantien. Weitere Details zur Tarifwahl liefert unser <Link to="/ratgeber/gasvergleich" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Gasvergleich-Ratgeber</Link>.
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
        <p className="mb-6">Vergleichen Sie jetzt die Tarife und ermitteln Sie Ihr Sparpotenzial.</p>
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
    </ArticleLayout>
  );
}
