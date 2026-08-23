
import { Link } from 'react-router';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function StromvergleichWoraufAchten() {
  const article = articles.find(a => a.slug === 'stromvergleich')!;
  
  return (
    <ArticleLayout article={article}>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Der Strommarkt bietet hunderte verschiedene Tarife. Doch der billigste Tarif ist nicht immer der beste. Wer die Preisstrukturen und Vertragsbedingungen versteht, vermeidet böse Überraschungen im zweiten Vertragsjahr. Sobald Sie den passenden Tarif ermittelt haben, können Sie Ihren <Link to="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Stromanbieter wechseln</Link> – wir erklären Ihnen das genaue Vorgehen.
      </p>

      <h2>Arbeitspreis vs. Grundpreis</h2>
      <p>
        Ihre Stromrechnung setzt sich aus zwei Hauptkomponenten zusammen:
      </p>
      <ul>
        <li><strong>Der Arbeitspreis (Cent/kWh):</strong> Dies ist der Preis, den Sie für jede verbrauchte Kilowattstunde zahlen. Wer viel Strom verbraucht, sollte auf einen niedrigen Arbeitspreis achten.</li>
        <li><strong>Der Grundpreis (Euro/Monat):</strong> Eine feste monatliche Gebühr, unabhängig vom Verbrauch. Single-Haushalte mit niedrigem Verbrauch profitieren von einem niedrigen Grundpreis.</li>
      </ul>

      <h2>Vertragslaufzeit und Kündigungsfrist</h2>
      <p>
        Wir empfehlen Vertragslaufzeiten von maximal 12 Monaten. So bleiben Sie flexibel und können jährlich von neuen Wechselboni profitieren. Nach geltendem Recht dürfen Verträge, die sich nach der Erstlaufzeit automatisch verlängern, mittlerweile monatlich gekündigt werden.
      </p>

      <h2>Die Preisgarantie</h2>
      <p>
        Achten Sie darauf, dass der Tarif eine Preisgarantie beinhaltet, die mindestens für die Dauer der Erstlaufzeit gilt (z.B. 12 Monate). Eine <em>eingeschränkte Preisgarantie</em> deckt den Energiepreis und die Netzentgelte ab, nicht aber staatliche Steuern.
      </p>

      <h2>Ökostrom</h2>
      <p>
        Wenn Ihnen Nachhaltigkeit wichtig ist, achten Sie auf zertifizierten Ökostrom (z.B. ok-power-Label oder Grüner Strom-Label), der nicht nur aus Erneuerbaren Energien stammt, sondern auch den Ausbau neuer Anlagen fördert.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Tarife transparent vergleichen</h3>
        <p className="mb-6">Finden Sie den Tarif, der perfekt zu Ihrem Verbrauch passt.</p>
        <Link to="/electricity">
          <Button variant="primary">Zum kostenlosen Stromvergleich</Button>
        </Link>
      </div>
    </ArticleLayout>
  );
}
