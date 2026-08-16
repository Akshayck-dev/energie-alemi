import { Link } from 'react-router';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function DslVsGlasfaserAachen() {
  const article = articles.find(a => a.slug === 'dsl-vs-glasfaser-aachen')!;
  
  return (
    <ArticleLayout article={article}>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Aachen baut sein Glasfasernetz massiv aus. Doch lohnt sich der Umstieg von DSL auf Glasfaser wirklich für jeden Haushalt? Wir klären die wichtigsten Unterschiede und zeigen, wann sich der Wechsel lohnt.
      </p>

      <h2>Der technische Unterschied</h2>
      <p>
        <strong>DSL (VDSL):</strong> Die Daten werden über die alten Kupferkabel des Telefonnetzes übertragen. Je weiter Ihr Haus vom nächsten Verteilerkasten entfernt ist, desto langsamer wird die Verbindung.
      </p>
      <p>
        <strong>Glasfaser (FTTH - Fiber to the Home):</strong> Die Daten reisen als Lichtsignale durch hauchdünne Glasfaserkabel direkt bis in Ihre Wohnung. Es gibt keine Geschwindigkeitsverluste, egal wie weit der nächste Knotenpunkt entfernt ist.
      </p>

      <h2>Vorteile von Glasfaser in Aachen</h2>
      <ul>
        <li><strong>Stabile Leistung:</strong> Auch in den Abendstunden, wenn ganz Aachen streamt, bleibt die Geschwindigkeit konstant.</li>
        <li><strong>Symmetrische Bandbreiten:</strong> Der Upload ist oft genauso schnell wie der Download – perfekt fürs Home-Office und Videokonferenzen.</li>
        <li><strong>Zukunftssicherheit:</strong> Glasfaser bietet schon heute Geschwindigkeiten von bis zu 1.000 Mbit/s (Gigabit) und hat noch viel Luft nach oben.</li>
      </ul>

      <h2>Brauche ich wirklich Glasfaser?</h2>
      <p>
        Für einen 1- bis 2-Personen-Haushalt, der abends einen Film streamt und etwas im Internet surft, reicht ein guter VDSL-Anschluss (50 bis 100 Mbit/s) völlig aus. Wenn Sie jedoch regelmäßig große Datenmengen hochladen, in einem Smart-Home leben oder mit mehreren Personen gleichzeitig das Internet intensiv nutzen (4K-Streaming, Gaming, Home-Office), ist Glasfaser die deutlich bessere Wahl.
      </p>

      <h2>Wie ist der Ausbaustatus in Aachen?</h2>
      <p>
        Lokale Anbieter wie NetAachen sowie große Player wie Telekom und Deutsche Glasfaser treiben den Ausbau in verschiedenen Aachener Vierteln voran. Häufig gibt es Vorvermarktungsphasen, in denen der Hausanschluss kostenlos ist, wenn Sie sich frühzeitig für einen Vertrag entscheiden.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Ist Glasfaser bei Ihnen verfügbar?</h3>
        <p className="mb-6">Nutzen Sie unseren Internetvergleich oder besuchen Sie uns in unserer Aachener Filiale, um die Verfügbarkeit an Ihrer Adresse zu prüfen.</p>
        <Link to="/internet">
          <Button variant="primary">Internetanbieter vergleichen</Button>
        </Link>
      </div>
    </ArticleLayout>
  );
}
