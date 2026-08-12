
import { Link } from 'react-router';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function StromanbieterWechseln() {
  const article = articles.find(a => a.slug === 'stromanbieter-wechseln')!;
  
  return (
    <ArticleLayout article={article}>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Ein Wechsel des Stromanbieters ist heutzutage unkompliziert und kann mehrere hundert Euro im Jahr sparen. Dennoch zögern viele Verbraucher aus Angst vor einer Unterbrechung der Stromversorgung oder rechtlichen Fallstricken.
      </p>

      <h2>Wann lohnt sich ein Wechsel?</h2>
      <p>
        Besonders Verbraucher, die noch in der teuren <Link to="/ratgeber/grundversorgung-aachen-strom-gas" className="text-[#0047AB] hover:underline">Grundversorgung</Link> ihres lokalen Anbieters sind, haben enormes Sparpotenzial. Aber auch nach Ablauf einer Preisgarantie bei einem alternativen Anbieter lohnt sich ein erneuter <Link to="/electricity" className="text-[#0047AB] hover:underline">Stromvergleich</Link>. Falls Sie einen <Link to="/ratgeber/umzug-aachen-strom-gas-internet" className="text-[#0047AB] hover:underline">Umzug nach Aachen</Link> planen, gelten beim Anbieterwechsel und der Mitnahme des Vertrags gesonderte Fristen und Regelungen.
      </p>

      <h2>Wie funktioniert der Prozess?</h2>
      <ol>
        <li><strong>Vergleich durchführen:</strong> Nutzen Sie unseren Vergleichsrechner.</li>
        <li><strong>Tarif auswählen:</strong> Achten Sie nicht nur auf den Preis, sondern auch auf die Konditionen.</li>
        <li><strong>Auftrag erteilen:</strong> Füllen Sie das Wechselformular online aus.</li>
        <li><strong>Zurücklehnen:</strong> Ihr neuer Anbieter übernimmt in der Regel die Kündigung beim alten Versorger.</li>
      </ol>

      <h2>Was passiert mit dem alten Vertrag?</h2>
      <p>
        Wenn Sie nicht von einem Sonderkündigungsrecht (z.B. wegen einer Preiserhöhung) Gebrauch machen müssen, kündigt Ihr neuer Anbieter den alten Vertrag fristgerecht für Sie. Sie müssen selbst nicht aktiv werden.
      </p>

      <h2>Häufige Fehler vermeiden</h2>
      <p>
        Kündigen Sie niemals selbst, es sei denn, Sie haben ein Sonderkündigungsrecht. Wenn Sie selbst kündigen, weiß der neue Anbieter nichts davon, und es kann zu Komplikationen bei der nahtlosen Übergabe kommen.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Bereit für günstigere Strompreise?</h3>
        <p className="mb-6">Vergleichen Sie jetzt die aktuellen Tarife und wechseln Sie in wenigen Minuten.</p>
        <Link to="/electricity">
          <Button variant="primary">Jetzt Stromtarife vergleichen</Button>
        </Link>
      </div>
    </ArticleLayout>
  );
}
