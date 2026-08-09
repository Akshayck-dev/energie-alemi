
import { Link } from 'react-router';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function GasvergleichPassenderTarif() {
  const article = articles.find(a => a.slug === 'gasvergleich')!;
  
  return (
    <ArticleLayout article={article}>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Die Heizkosten machen einen großen Teil der monatlichen Ausgaben aus. Ein regelmäßiger <Link to="/gas" className="text-[#0047AB] hover:underline">Gasvergleich</Link> ist daher eine der effektivsten Methoden, um die Haushaltskasse zu entlasten.
      </p>

      <h2>Den eigenen Verbrauch ermitteln</h2>
      <p>
        Für einen aussagekräftigen Gasvergleich benötigen Sie Ihren Jahresverbrauch in Kilowattstunden (kWh). Diesen finden Sie auf Ihrer letzten Jahresabrechnung. Wenn Sie diese nicht zur Hand haben, können Sie Richtwerte nutzen:
      </p>
      <ul>
        <li>30 m² Wohnung: ca. 4.000 kWh</li>
        <li>50 m² Wohnung: ca. 7.000 kWh</li>
        <li>100 m² Wohnung: ca. 14.000 kWh</li>
        <li>Reihenhaus: ca. 20.000 kWh</li>
      </ul>

      <h2>Wichtige Vertragsbedingungen</h2>
      <p>
        Wie beim Strom gilt auch beim Gas: Der Preis ist nicht alles. Achten Sie auf eine <strong>Preisgarantie</strong> von mindestens 12 Monaten. Diese schützt Sie vor unerwarteten Preiserhöhungen während der Erstlaufzeit. Die <strong>Vertragslaufzeit</strong> sollte ebenfalls 12 Monate nicht überschreiten.
      </p>

      <h2>Klimatarife und Biogas</h2>
      <p>
        Immer mehr Anbieter bieten Ökogas oder Biogas-Beimischungen an. Bei reinen "Klimatarifen" wird meist herkömmliches Erdgas geliefert, die CO2-Emissionen werden jedoch durch Klimaschutzprojekte kompensiert. Wer echten Einfluss nehmen will, sollte auf Tarife mit einem echten Biogas-Anteil (z.B. 10% oder mehr) achten.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Starten Sie Ihren Gasvergleich</h3>
        <p className="mb-6">Sichern Sie sich jetzt günstige Konditionen für die nächste Heizperiode.</p>
        <Link to="/gas">
          <Button variant="primary">Jetzt Gastarife vergleichen</Button>
        </Link>
      </div>
    </ArticleLayout>
  );
}
