import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function GaspreiseVerstehen() {
  const { i18n } = useTranslation();
  const article = articles.find(a => a.slug === 'gaspreise-verstehen')!;

  const faqsDe = [
    {
      question: "Was ist wichtiger: Arbeitspreis oder Grundpreis?",
      answer: "Das hängt vom Verbrauch ab. Bei hohem Verbrauch wirkt sich der Arbeitspreis stärker aus. Bei niedrigem Verbrauch kann ein geringer Grundpreis den Ausschlag geben. Vergleichen Sie immer die Gesamtkosten."
    },
    {
      question: "Ist der Abschlag der monatliche Preis?",
      answer: "Nein. Der Abschlag ist eine Vorauszahlung. Die endgültigen Kosten ergeben sich aus tatsächlichem Verbrauch, Arbeitspreis und Grundpreis."
    },
    {
      question: "Was passiert bei einer Preiserhöhung?",
      answer: "Prüfen Sie das Schreiben, den Geltungstermin und ein mögliches Sonderkündigungsrecht. Lesen Sie außerdem den Zählerstand zum Änderungszeitpunkt ab, damit der Verbrauch sauber abgegrenzt werden kann."
    },
    {
      question: "Sind Tarife mit Bonus immer günstiger?",
      answer: "Nein. Der Bonus kann nur das erste Jahr verbilligen. Entscheidend sind auch die regulären Kosten, Bedingungen und Folgekosten."
    },
  ];
  const faqsEn = [
    {
      question: "What is more important: unit price or base price?",
      answer: "That depends on consumption. With high consumption, the unit price has a stronger effect. With low consumption, a low base price can tip the scales. Always compare the total costs."
    },
    {
      question: "Is the installment the monthly price?",
      answer: "No. The installment is an advance payment. The final costs are based on actual consumption, unit price, and base price."
    },
    {
      question: "What happens in case of a price increase?",
      answer: "Check the letter, the effective date, and a possible special right of termination. In addition, read the meter at the time of the change so that consumption can be cleanly demarcated."
    },
    {
      question: "Are tariffs with a bonus always cheaper?",
      answer: "No. The bonus can only make the first year cheaper. The regular costs, conditions, and follow-up costs are also decisive."
    },
  ];
  const faqs = i18n.language === 'en' ? faqsEn : faqsDe;

  return (
    <ArticleLayout 
      article={article} 
      customH1={i18n.language === 'en' ? "Understanding Gas Prices: Unit Price, Base Price and Total Costs" : "Gaspreise verstehen: Arbeitspreis, Grundpreis und Gesamtkosten"}
      faqs={faqs}
    >
      {i18n.language === 'en' ? (
        <>

      <h2>The cheapest unit price is not automatically the cheapest tariff</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        A gas tariff usually consists of a consumption-dependent unit price and a fixed base price. Only the sum of both components shows the expected annual costs. With high consumption, the unit price has a stronger effect; with low consumption, the base price can be decisive.
      </p>
      <p>
        The comparison formula is: Annual consumption in kWh × Unit price in Euro/kWh + Base price per year = expected annual costs.
      </p>
      <h2>Unit price and base price simply explained</h2>
      <p>
        The unit price is calculated for every kilowatt-hour consumed. A difference of 1 Cent/kWh amounts to 150 Euro at 15,000 kWh annual consumption.
      </p>
      <p>
        The base price is incurred regardless of consumption. It covers fixed cost components of the tariff. A base price of 15 Euro per month equals 180 Euro per year.
      </p>
      <p>
        Example A: 15,000 kWh × 0.10 Euro + 180 Euro = 1,680 Euro/year.
      </p>
      <p>
        Example B: 15,000 kWh × 0.095 Euro + 260 Euro = 1,685 Euro/year.
      </p>
      <p>
        Although Tariff B has the lower unit price, Tariff A is mathematically cheaper with this consumption. The example is not a current offer.
      </p>
      <h2>What a price guarantee actually covers</h2>
      <p>
        A price guarantee is not always the same. A complete guarantee can cover more price components than a limited guarantee, which, for example, only protects procurement and distribution. Taxes, levies, or regulated charges can be excluded depending on the contract clause.
      </p>
      <p>
        Therefore, read the duration and scope of the guarantee. A long guarantee is only valuable if it matches the planned contract period and includes the important components.
      </p>
      <h2>Consider bonuses separately</h2>
      <p>
        Instant and new customer bonuses can lower the costs of the first year. Check payout requirements, minimum supply time, and regular costs without a bonus. A tariff should not be chosen solely because of a high bonus.
      </p>
      <p>
        The monthly installment is also not a tariff price. It is an advance payment on the later billing. Actual consumption and agreed price components remain decisive.
      </p>
      <h2>Other contract features in comparison</h2>
      <h2>Minimum contract term and automatic extension;</h2>
      <h2>Notice period;</h2>
      <h2>Price guarantee and exceptions;</h2>
      <h2>Advance payment or deposit;</h2>
      <h2>Package quantities and consequences in case of over- or under-consumption;</h2>
      <h2>Contract conditions for moving and price changes;</h2>
      <p>
        Customer service and accessibility.
      </p>
      <p>
        Tariffs with advance payment or large package quantities can pose additional risks. A transparent comparison therefore evaluates not only the calculated price.
      </p>
      <h2>How to use your annual statement</h2>
      <p>
        On the statement, you will find annual consumption, previous unit price, base price, and installments paid. Use the consumption for a current tariff comparison. If the living space, heating behavior, or number of people has changed, carefully adjust the forecast.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Consulting & Service</h3>
        <p className="mb-6">Energie Alemi compares gas tariffs based on your consumption and shows annual costs, bonus effects, and contract conditions separately.</p>
        <Link to="/contact">
          <Button variant="primary">Contact us now</Button>
        </Link>
      </div>

      <h2>Frequently Asked Questions</h2>
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
          <li><Link to="/ratgeber/gasverbrauch-berechnen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Calculate Gas Consumption</Link></li>
          <li><Link to="/ratgeber/gasvergleich" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gas Comparison</Link></li>
          <li><Link to="/ratgeber/gasanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Switching Gas Providers</Link></li>
          <li><Link to="/gasanbieter-aachen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gas Providers Aachen</Link></li>
        </ul>
      </div>

        </>
      ) : (
        <>
      <h2>Der günstigste Arbeitspreis ist nicht automatisch der günstigste Tarif</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Ein Gastarif besteht in der Regel aus einem verbrauchsabhängigen Arbeitspreis und einem festen Grundpreis. Erst die Summe beider Bestandteile zeigt die erwarteten Jahreskosten. Bei hohem Verbrauch wirkt der Arbeitspreis stärker; bei niedrigem Verbrauch kann der Grundpreis entscheidend sein.
      </p>
      <p>
        Die Vergleichsformel lautet: Jahresverbrauch in kWh × Arbeitspreis in Euro/kWh + Grundpreis pro Jahr = erwartete Jahreskosten.
      </p>
      <h2>Arbeitspreis und Grundpreis einfach erklärt</h2>
      <p>
        Der Arbeitspreis wird für jede verbrauchte Kilowattstunde berechnet. Ein Unterschied von 1 Cent/kWh macht bei 15.000 kWh Jahresverbrauch 150 Euro aus.
      </p>
      <p>
        Der Grundpreis fällt unabhängig vom Verbrauch an. Er deckt feste Kostenbestandteile des Tarifs. Ein Grundpreis von 15 Euro pro Monat entspricht 180 Euro pro Jahr.
      </p>
      <p>
        Beispiel A: 15.000 kWh × 0,10 Euro + 180 Euro = 1.680 Euro/Jahr.
      </p>
      <p>
        Beispiel B: 15.000 kWh × 0,095 Euro + 260 Euro = 1.685 Euro/Jahr.
      </p>
      <p>
        Obwohl Tarif B den niedrigeren Arbeitspreis hat, ist Tarif A bei diesem Verbrauch rechnerisch günstiger. Das Beispiel ist kein aktuelles Angebot.
      </p>
      <h2>Was eine Preisgarantie tatsächlich abdeckt</h2>
      <p>
        Preisgarantie ist nicht gleich Preisgarantie. Eine vollständige Garantie kann mehr Preisbestandteile erfassen als eine eingeschränkte Garantie, die beispielsweise nur Beschaffung und Vertrieb schützt. Steuern, Abgaben oder regulierte Entgelte können je nach Vertragsklausel ausgenommen sein.
      </p>
      <p>
        Lesen Sie deshalb Dauer und Umfang der Garantie. Eine lange Garantie ist nur dann wertvoll, wenn sie zum geplanten Vertragszeitraum passt und die wichtigen Bestandteile einschließt.
      </p>
      <h2>Boni getrennt betrachten</h2>
      <p>
        Sofort- und Neukundenboni können die Kosten des ersten Jahres senken. Prüfen Sie Auszahlungsvoraussetzungen, Mindestbelieferungszeit und die regulären Kosten ohne Bonus. Ein Tarif sollte nicht allein wegen eines hohen Bonus gewählt werden.
      </p>
      <p>
        Auch der monatliche Abschlag ist kein Tarifpreis. Er ist eine Vorauszahlung auf die spätere Abrechnung. Entscheidend bleiben tatsächlicher Verbrauch und vereinbarte Preisbestandteile.
      </p>
      <h2>Weitere Vertragsmerkmale im Vergleich</h2>
      <h2>Mindestvertragslaufzeit und automatische Verlängerung;</h2>
      <h2>Kündigungsfrist;</h2>
      <h2>Preisgarantie und Ausnahmen;</h2>
      <h2>Vorkasse oder Kaution;</h2>
      <h2>Paketmengen und Folgen bei Mehr- oder Minderverbrauch;</h2>
      <h2>Vertragsbedingungen für Umzug und Preisänderung;</h2>
      <p>
        Kundenservice und Erreichbarkeit.
      </p>
      <p>
        Tarife mit Vorkasse oder großen Paketmengen können zusätzliche Risiken bergen. Ein transparenter Vergleich bewertet daher nicht nur den rechnerischen Preis.
      </p>
      <h2>So nutzen Sie Ihre Jahresabrechnung</h2>
      <p>
        Auf der Abrechnung finden Sie Jahresverbrauch, bisherigen Arbeitspreis, Grundpreis und geleistete Abschläge. Verwenden Sie den Verbrauch für einen aktuellen Tarifvergleich. Hat sich Wohnfläche, Heizverhalten oder Personenzahl geändert, passen Sie die Prognose vorsichtig an.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Beratung & Service</h3>
        <p className="mb-6">Energie Alemi vergleicht Gastarife anhand Ihres Verbrauchs und zeigt Jahreskosten, Bonuswirkung und Vertragsbedingungen getrennt voneinander.</p>
        <Link to="/contact">
          <Button variant="primary">Jetzt Kontakt aufnehmen</Button>
        </Link>
      </div>

      <h2>Häufige Fragen</h2>
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
          <li><Link to="/ratgeber/gasverbrauch-berechnen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gasverbrauch Berechnen</Link></li>
          <li><Link to="/ratgeber/gasvergleich" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gasvergleich</Link></li>
          <li><Link to="/ratgeber/gasanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gasanbieter Wechseln</Link></li>
          <li><Link to="/gasanbieter-aachen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gasanbieter Aachen</Link></li>
        </ul>
      </div>

    </>
      )}
    </ArticleLayout>
  );
}
