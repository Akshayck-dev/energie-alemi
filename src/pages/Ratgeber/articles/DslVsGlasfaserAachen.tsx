import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function DslVsGlasfaserAachen() {
  const { i18n } = useTranslation();
  const article = articles.find(a => a.slug === 'dsl-vs-glasfaser-aachen')!;
  
  return (
    <ArticleLayout article={article}>
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
        Local providers like NetAachen as well as big players like Telekom and Deutsche Glasfaser are driving the expansion in various districts of Aachen. There are often pre-marketing phases where the house connection is free if you sign a contract early.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Is fiber optic available at your location?</h3>
        <p className="mb-6">Use our internet comparison or visit us in our Aachen branch to check availability at your address.</p>
        <Link to="/internet">
          <Button variant="primary">Compare Internet Providers</Button>
        </Link>
      </div>

        </>
      ) : (
        <>
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
    </>
      )}
    </ArticleLayout>
  );
}
