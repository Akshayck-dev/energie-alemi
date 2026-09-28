import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function StromkostenBerechnen() {
  const { i18n } = useTranslation();
  const article = articles.find(a => a.slug === 'stromkosten-berechnen')!;

  const faqsDe = [
    {
      question: "Wie berechne ich den monatlichen Abschlag?",
      answer: "Teilen Sie die erwarteten Jahreskosten durch zwölf. Berücksichtigen Sie, dass der Anbieter den Abschlag anhand von Verbrauchsprognose und bisherigen Daten abweichend festlegen kann."
    },
    {
      question: "Welcher Preis ist wichtiger: Arbeits- oder Grundpreis?",
      answer: "Bei hohem Verbrauch hat der Arbeitspreis meist mehr Gewicht. Bei sehr niedrigem Verbrauch kann ein niedriger Grundpreis entscheidend sein. Maßgeblich sind immer die gesamten Jahreskosten."
    },
    {
      question: "Gehört der Bonus in den Vergleich?",
      answer: "Ja, aber getrennt. Zeigen Sie die Kosten des ersten Jahres mit Bonus und die regulären Kosten ohne Bonus. So vermeiden Sie einen verzerrten Langfristvergleich."
    },
  ];
  const faqsEn = [
    {
      question: "How do I calculate the monthly installment?",
      answer: "Divide the expected annual costs by twelve. Keep in mind that the provider may set the installment differently based on a consumption forecast and previous data."
    },
    {
      question: "Which price is more important: unit or base price?",
      answer: "With high consumption, the unit price usually has more weight. With very low consumption, a low base price can be decisive. The total annual costs are always decisive."
    },
    {
      question: "Does the bonus belong in the comparison?",
      answer: "Yes, but separately. Show the costs of the first year with the bonus and the regular costs without the bonus. This avoids a distorted long-term comparison."
    },
  ];
  const faqs = i18n.language === 'en' ? faqsEn : faqsDe;

  return (
    <ArticleLayout 
      article={article} 
      customH1={i18n.language === 'en' ? "Calculate Electricity Costs: Formula, Examples & Tariff Comparison" : "Stromkosten berechnen: Formel, Beispiele und Tarifvergleich"}
      faqs={faqs}
    >
      {i18n.language === 'en' ? (
        <>

      <h2>The annual costs consist of the unit price and the base price</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        The simple formula is: Annual consumption in kWh × Unit price in euros per kWh + annual base price = expected electricity costs per year. For a realistic calculation, both price components must be taken into account.
      </p>
      <p>
        Example: 2,500 kWh × 0.35 Euro/kWh + 120 Euro base price equals 995 Euros per year. The calculated monthly value is around 82.92 Euros. This example is not a tariff offer.
      </p>
      <h2>Convert cents to euros correctly</h2>
      <p>
        Tariffs usually state the unit price in cents per kilowatt-hour. Divide the cent value by 100. 35 cents/kWh becomes 0.35 euros/kWh. Only then is it multiplied by the annual consumption.
      </p>
      <h2>Formula: Annual costs = (Annual consumption × Unit price/100) + Base price</h2>
      <p>
        With a monthly base price, this is first multiplied by twelve. A base price of 10 euros per month equals 120 euros per year.
      </p>
      <h2>Calculation examples for different households</h2>
      <h2>With an example tariff of 35 cents/kWh and 120 euros base price, the results are:</h2>
      <h2>1,200 kWh: 540 euros/year</h2>
      <h2>1,900 kWh: 785 euros/year</h2>
      <h2>2,600 kWh: 1,030 euros/year</h2>
      <h2>3,800 kWh: 1,450 euros/year</h2>
      <p>
        The examples show: With low consumption, the base price weighs relatively heavier. With high consumption, the unit price is usually the larger lever.
      </p>
      <h2>Bonus and installment are not the same as tariff costs</h2>
      <p>
        An instant bonus or new customer bonus can lower the costs in the first year but is often not permanent. Therefore, compare both the costs in the first contract year and the costs without a bonus. Check the conditions for payout and minimum supply time.
      </p>
      <p>
        The monthly installment is only an advance payment. The final invoice is based on the actual consumption and the agreed prices. A low installment does not automatically make a tariff cheap; it can later lead to an additional payment.
      </p>
      <h2>Local example: Basic electricity supply in Aachen</h2>
      <p>
        The published STAWAG price sheet for "Strom Basis" states a gross unit price of 37.13 cents/kWh and a gross base price of 114 euros per year for household needs from January 1, 2026. For 2,500 kWh, this arithmetically results in 1,042.25 euros per year. Prices can change; always check the currently valid price sheet before making a decision.
      </p>
      <h2>How to compare two tariffs fairly</h2>
      <p>
        Use the same annual consumption for both tariffs.
      </p>
      <p>
        Add up the unit price and the base price.
      </p>
      <p>
        Compare costs with and without a bonus.
      </p>
      <p>
        Check the contract term, notice period, and price guarantee.
      </p>
      <p>
        Evaluate not only the first year but also the follow-up costs.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Consulting & Service</h3>
        <p className="mb-6">Energie Alemi calculates your expected annual costs based on the last bill and clearly explains the contract conditions.</p>
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
          <li><Link to="/ratgeber/stromvergleich" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity Comparison</Link></li>
          <li><Link to="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Switching Electricity Providers</Link></li>
          <li><Link to="/ratgeber/stromverbrauch-1-person" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity Consumption 1 Person</Link></li>
          <li><Link to="/stromanbieter-aachen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity Providers Aachen</Link></li>
        </ul>
      </div>

        </>
      ) : (
        <>
      <h2>Die Jahreskosten bestehen aus Arbeitspreis und Grundpreis</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Die einfache Formel lautet: Jahresverbrauch in kWh × Arbeitspreis in Euro pro kWh + jährlicher Grundpreis = erwartete Stromkosten pro Jahr. Für eine realistische Rechnung müssen beide Preisbestandteile berücksichtigt werden.
      </p>
      <p>
        Beispiel: 2.500 kWh × 0,35 Euro/kWh + 120 Euro Grundpreis ergeben 995 Euro pro Jahr. Der rechnerische Monatswert beträgt rund 82,92 Euro. Dieses Beispiel ist kein Tarifangebot.
      </p>
      <h2>Cent richtig in Euro umrechnen</h2>
      <p>
        Tarife nennen den Arbeitspreis meist in Cent pro Kilowattstunde. Teilen Sie den Cent-Wert durch 100. Aus 35 Cent/kWh werden 0,35 Euro/kWh. Erst dann wird mit dem Jahresverbrauch multipliziert.
      </p>
      <h2>Formel: Jahreskosten = (Jahresverbrauch × Arbeitspreis/100) + Grundpreis</h2>
      <p>
        Bei monatlichem Grundpreis wird dieser zuerst mit zwölf multipliziert. Ein Grundpreis von 10 Euro pro Monat entspricht 120 Euro pro Jahr.
      </p>
      <h2>Rechenbeispiele für unterschiedliche Haushalte</h2>
      <h2>Bei einem Beispieltarif mit 35 Cent/kWh und 120 Euro Grundpreis ergeben sich:</h2>
      <h2>1.200 kWh: 540 Euro/Jahr</h2>
      <h2>1.900 kWh: 785 Euro/Jahr</h2>
      <h2>2.600 kWh: 1.030 Euro/Jahr</h2>
      <h2>3.800 kWh: 1.450 Euro/Jahr</h2>
      <p>
        Die Beispiele zeigen: Bei niedrigem Verbrauch wiegt der Grundpreis relativ stärker. Bei hohem Verbrauch ist der Arbeitspreis meist der größere Hebel.
      </p>
      <h2>Bonus und Abschlag sind nicht dasselbe wie Tarifkosten</h2>
      <p>
        Ein Sofortbonus oder Neukundenbonus kann die Kosten im ersten Jahr senken, gilt aber häufig nicht dauerhaft. Vergleichen Sie deshalb sowohl die Kosten im ersten Vertragsjahr als auch die Kosten ohne Bonus. Prüfen Sie die Bedingungen für Auszahlung und Mindestbelieferungszeit.
      </p>
      <p>
        Der monatliche Abschlag ist lediglich eine Vorauszahlung. Die endgültige Rechnung richtet sich nach dem tatsächlichen Verbrauch und den vereinbarten Preisen. Ein niedriger Abschlag macht einen Tarif nicht automatisch günstig; er kann später zu einer Nachzahlung führen.
      </p>
      <h2>Lokales Beispiel: Grundversorgung Strom in Aachen</h2>
      <p>
        Das veröffentlichte STAWAG-Preisblatt für „Strom Basis“ nennt ab 1. Januar 2026 für Haushaltsbedarf einen Brutto-Arbeitspreis von 37,13 Cent/kWh und einen Brutto-Grundpreis von 114 Euro pro Jahr. Bei 2.500 kWh ergibt das rechnerisch 1.042,25 Euro pro Jahr. Preise können sich ändern; prüfen Sie vor einer Entscheidung immer das aktuell gültige Preisblatt.
      </p>
      <h2>So vergleichen Sie zwei Tarife fair</h2>
      <p>
        Verwenden Sie bei beiden Tarifen denselben Jahresverbrauch.
      </p>
      <p>
        Rechnen Sie Arbeitspreis und Grundpreis zusammen.
      </p>
      <p>
        Stellen Sie Kosten mit und ohne Bonus gegenüber.
      </p>
      <p>
        Prüfen Sie Laufzeit, Kündigungsfrist und Preisgarantie.
      </p>
      <p>
        Bewerten Sie nicht nur das erste Jahr, sondern auch die Folgekosten.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Beratung & Service</h3>
        <p className="mb-6">Energie Alemi berechnet Ihre voraussichtlichen Jahreskosten auf Basis der letzten Abrechnung und erklärt die Vertragsbedingungen verständlich.</p>
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
          <li><Link to="/ratgeber/stromvergleich" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Stromvergleich</Link></li>
          <li><Link to="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Stromanbieter Wechseln</Link></li>
          <li><Link to="/ratgeber/stromverbrauch-1-person" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Stromverbrauch 1 Person</Link></li>
          <li><Link to="/stromanbieter-aachen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Stromanbieter Aachen</Link></li>
        </ul>
      </div>

    </>
      )}
    </ArticleLayout>
  );
}
