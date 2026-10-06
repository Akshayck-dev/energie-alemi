
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function StromvergleichWoraufAchten() {
  const { i18n } = useTranslation();
  const article = articles.find(a => a.slug === 'stromvergleich')!;
  
  return (
    <ArticleLayout article={article}>
      {i18n.language === 'en' ? (
        <>

      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        The electricity market offers hundreds of different tariffs. But the cheapest tariff is not always the best. Anyone who understands the price structures and contract conditions avoids nasty surprises in the second contract year. Once you have found the right tariff, you can <Link to="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">switch your electricity provider</Link> – we explain the exact procedure to you.
      </p>

      <h2>Unit price vs. Base price</h2>
      <p>
        Your electricity bill consists of two main components:
      </p>
      <ul>
        <li><strong>The unit price (cents/kWh):</strong> This is the price you pay for every kilowatt-hour consumed. Those who consume a lot of electricity should look for a low unit price.</li>
        <li><strong>The base price (euros/month):</strong> A fixed monthly fee, independent of consumption. Single households with low consumption benefit from a low base price.</li>
      </ul>

      <h2>Contract term and notice period</h2>
      <p>
        We recommend contract terms of a maximum of 12 months. This keeps you flexible and allows you to benefit from new switching bonuses annually. Under current law, contracts that automatically extend after the initial term can now be canceled monthly.
      </p>

      <h2>The price guarantee</h2>
      <p>
        Make sure that the tariff includes a price guarantee that is valid at least for the duration of the initial term (e.g., 12 months). A <em>limited price guarantee</em> covers the energy price and grid fees, but not state taxes.
      </p>

      <h2>Eco-electricity</h2>
      <p>
        If sustainability is important to you, look for certified eco-electricity (e.g., ok-power label or Grüner Strom label), which not only comes from renewable energies but also promotes the expansion of new plants.
      </p>

      <h2>The right handling of bonuses</h2>
      <p>
        Many providers offer attractive bonuses to win new customers. These are divided into immediate bonuses (Sofortbonus), which are paid out shortly after the start of delivery, and new customer bonuses (Neukundenbonus), which are usually credited with the first annual statement. 
      </p>
      <p>
        <strong>Tip:</strong> Tariffs with high bonuses are often very cheap in the first year but become significantly more expensive in the second year. If you choose such a tariff, you should compare again in good time before the notice period expires and switch if necessary.
      </p>

      <h2>What to do in the event of price increases?</h2>
      <p>
        If your current provider increases the prices, you have a statutory special right of termination. You can then terminate the contract without notice until the price increase takes effect. This is the ideal time to look for a cheaper alternative.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Compare tariffs transparently</h3>
        <p className="mb-6">Find the tariff that perfectly matches your consumption.</p>
        <Link to="/electricity">
          <Button variant="primary">To the free electricity comparison</Button>
        </Link>
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-6 mt-8">
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold mt-0 mb-2">Is a switch worthwhile despite a new customer bonus?</h3>
          <p className="mb-0 text-slate-600 dark:text-slate-300">Yes, but you should look closely at the total costs for the first year. Sometimes tariffs without a bonus but with a lower basic and unit price are cheaper in the long run.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold mt-0 mb-2">What is the difference between a price guarantee and a limited price guarantee?</h3>
          <p className="mb-0 text-slate-600 dark:text-slate-300">A full price guarantee covers all price components except VAT. A limited price guarantee excludes state taxes, levies, and surcharges. If these rise, your price can increase despite the guarantee.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold mt-0 mb-2">How long does the provider switch take?</h3>
          <p className="mb-0 text-slate-600 dark:text-slate-300">A regular switch usually takes three to six weeks. The exact date depends on the notice period of your old contract.</p>
        </div>
      </div>
        </>
      ) : (
        <>
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

      <h2>Der richtige Umgang mit Boni</h2>
      <p>
        Viele Anbieter gewähren attraktive Boni, um Neukunden zu gewinnen. Diese unterteilen sich in Sofortboni, die kurz nach Lieferbeginn ausgezahlt werden, und Neukundenboni, die meist mit der ersten Jahresabrechnung gutgeschrieben werden.
      </p>
      <p>
        <strong>Tipp:</strong> Tarife mit hohen Boni sind im ersten Jahr oft sehr günstig, werden im zweiten Jahr aber deutlich teurer. Wenn Sie einen solchen Tarif wählen, sollten Sie rechtzeitig vor Ablauf der Kündigungsfrist erneut vergleichen und gegebenenfalls wechseln.
      </p>

      <h2>Was tun bei Preiserhöhungen?</h2>
      <p>
        Wenn Ihr aktueller Anbieter die Preise erhöht, steht Ihnen ein gesetzliches Sonderkündigungsrecht zu. Sie können den Vertrag dann fristlos bis zum Wirksamwerden der Preiserhöhung kündigen. Dies ist der ideale Zeitpunkt, um nach einer günstigeren Alternative zu suchen.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Tarife transparent vergleichen</h3>
        <p className="mb-6">Finden Sie den Tarif, der perfekt zu Ihrem Verbrauch passt.</p>
        <Link to="/electricity">
          <Button variant="primary">Zum kostenlosen Stromvergleich</Button>
        </Link>
      </div>

      <h2>Häufige Fragen (FAQ)</h2>
      <div className="space-y-6 mt-8">
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold mt-0 mb-2">Lohnt sich ein Wechsel trotz Neukundenbonus?</h3>
          <p className="mb-0 text-slate-600 dark:text-slate-300">Ja, aber Sie sollten die Gesamtkosten für das erste Jahr genau betrachten. Manchmal sind Tarife ohne Bonus, aber mit niedrigerem Grund- und Arbeitspreis langfristig günstiger.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold mt-0 mb-2">Was ist der Unterschied zwischen Preisgarantie und eingeschränkter Preisgarantie?</h3>
          <p className="mb-0 text-slate-600 dark:text-slate-300">Eine volle Preisgarantie sichert alle Preisbestandteile bis auf die Mehrwertsteuer ab. Eine eingeschränkte Preisgarantie klammert staatliche Steuern, Abgaben und Umlagen aus. Steigen diese, kann Ihr Preis trotz Garantie steigen.</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
          <h3 className="text-lg font-bold mt-0 mb-2">Wie lange dauert der Anbieterwechsel?</h3>
          <p className="mb-0 text-slate-600 dark:text-slate-300">Ein regulärer Wechsel dauert in der Regel drei bis sechs Wochen. Das genaue Datum hängt von der Kündigungsfrist Ihres alten Vertrages ab.</p>
        </div>
      </div>
    </>
      )}
    </ArticleLayout>
  );
}
