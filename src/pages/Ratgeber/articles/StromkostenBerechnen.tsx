import { Link } from 'react-router';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function StromkostenBerechnen() {
  const article = articles.find(a => a.slug === 'stromkosten-berechnen')!;

  const faqs = [
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

  return (
    <ArticleLayout 
      article={article} 
      customH1="Stromkosten berechnen: Formel, Beispiele und Tarifvergleich"
      faqs={faqs}
    >
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

    </ArticleLayout>
  );
}
