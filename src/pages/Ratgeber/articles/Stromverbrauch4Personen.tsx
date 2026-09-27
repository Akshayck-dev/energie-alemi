import { Link } from 'react-router';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function Stromverbrauch4Personen() {
  const article = articles.find(a => a.slug === 'stromverbrauch-4-personen')!;

  const faqs = [
    {
      question: "Sind 4.000 kWh für vier Personen normal?",
      answer: "In einer Wohnung mit elektrischem Warmwasser entspricht das ungefähr dem Vergleichswert. Ohne elektrische Warmwasserbereitung wäre der Wert für eine Wohnung überdurchschnittlich; in einem Einfamilienhaus liegt er nahe am Durchschnitt."
    },
    {
      question: "Warum verbraucht ein Haus mehr als eine Wohnung?",
      answer: "Im Haus fallen zusätzliche Verbraucher wie Pumpen, Außenbeleuchtung, Garage oder Gebäudetechnik an. Außerdem ist die Wohnfläche häufig größer."
    },
    {
      question: "Wie kann eine Familie den Verbrauch zuverlässig verfolgen?",
      answer: "Lesen Sie den Zähler einmal pro Monat am gleichen Tag ab. Notieren Sie zusätzlich längere Abwesenheiten und neue Geräte. So entsteht nach wenigen Monaten ein belastbares Verbrauchsprofil."
    },
  ];

  return (
    <ArticleLayout 
      article={article} 
      customH1="Stromverbrauch im 4-Personen-Haushalt: Richtwerte für Familien"
      faqs={faqs}
    >
      <h2>Für vier Personen liegt der Durchschnitt je nach Wohnform weit auseinander</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Der Stromspiegel nennt für vier Personen rund 2.600 kWh pro Jahr in einer Wohnung und etwa 3.800 kWh im Einfamilienhaus, wenn Warmwasser nicht elektrisch erzeugt wird. Mit elektrischer Warmwasserbereitung liegen die Vergleichswerte bei rund 4.000 beziehungsweise 4.700 kWh pro Jahr.
      </p>
      <p>
        Ein einzelner Pauschalwert ist deshalb wenig hilfreich. Eine Familie in einer Wohnung mit zentraler Warmwasserversorgung hat ein anderes Lastprofil als ein Haushalt im Haus mit Durchlauferhitzer, Gartenpumpe, Gefriertruhe und mehreren Homeoffice-Arbeitsplätzen.
      </p>
      <h2>Richtwerte für einen Vier-Personen-Haushalt</h2>
      <h2>Wohnung, Warmwasser nicht elektrisch: etwa 2.600 kWh/Jahr</h2>
      <h2>Wohnung, Warmwasser elektrisch: etwa 4.000 kWh/Jahr</h2>
      <h2>Einfamilienhaus, Warmwasser nicht elektrisch: etwa 3.800 kWh/Jahr</h2>
      <h2>Einfamilienhaus, Warmwasser elektrisch: etwa 4.700 kWh/Jahr</h2>
      <p>
        Die Werte sind Durchschnittswerte. Ein höherer Verbrauch beweist nicht automatisch Verschwendung. Er zeigt, dass sich ein Blick auf Warmwasser, Haustechnik und größere Geräte lohnt.
      </p>
      <h2>Wo Familien besonders viel Strom benötigen</h2>
      <p>
        Waschmaschine und Trockner laufen häufiger, Kühl- und Gefrierkapazität ist größer und mehrere Bildschirme können gleichzeitig aktiv sein. Bei elektrischem Warmwasser wächst der Verbrauch zusätzlich mit Zahl und Dauer der Duschen. Im Einfamilienhaus kommen häufig Pumpen, Außenbeleuchtung, Garage oder Lüftung hinzu.
      </p>
      <p>
        Für die Ursachenanalyse hilft eine einfache Reihenfolge: zuerst Warmwasserart, dann Heiz- und Gebäudetechnik, danach Kühlgeräte, Trockner und Unterhaltungselektronik prüfen. Kleine Ladegeräte sind selten der wichtigste Hebel.
      </p>
      <h2>Verbrauch senken, ohne den Alltag kompliziert zu machen</h2>
      <p>
        Wasch- und Spülmaschine voll beladen und Eco-Programme nutzen.
      </p>
      <p>
        Wäsche möglichst lufttrocknen und den Trockner gezielt einsetzen.
      </p>
      <p>
        Kühlschrank auf etwa 7 °C und Gefrierfach auf etwa −18 °C einstellen.
      </p>
      <p>
        Spielekonsolen, Fernseher und Computer vollständig ausschalten, wenn sie länger nicht genutzt werden.
      </p>
      <p>
        Duschdauer reduzieren, wenn Warmwasser elektrisch erzeugt wird.
      </p>
      <p>
        Monatswerte notieren und ungewöhnliche Sprünge sofort prüfen.
      </p>
      <p>
        Eine Familie muss nicht jede Gewohnheit gleichzeitig ändern. Zwei oder drei messbare Maßnahmen sind wirksamer als eine lange Liste ohne Kontrolle.
      </p>
      <h2>Beispiel: Was 1.000 kWh Unterschied kosten</h2>
      <p>
        Bei einem Beispiel-Arbeitspreis von 0,35 Euro/kWh entsprechen 1.000 kWh Mehrverbrauch 350 Euro zusätzlichen Verbrauchskosten pro Jahr. Der Grundpreis verändert sich dadurch nicht. Das Beispiel zeigt, warum ein Durchlauferhitzer oder ein altes Dauergerät die Rechnung merklich beeinflussen kann.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Beratung & Service</h3>
        <p className="mb-6">Bringen Sie Ihre letzte Jahresabrechnung mit. Energie Alemi ordnet Verbrauch und Tarif ein und vergleicht passende Angebote für Ihren Haushalt.</p>
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
          <li><Link to="/ratgeber/stromverbrauch-2-personen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Stromverbrauch 2 Personen</Link></li>
          <li><Link to="/ratgeber/stromkosten-berechnen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Stromkosten Berechnen</Link></li>
          <li><Link to="/ratgeber/stromvergleich" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Stromvergleich</Link></li>
          <li><Link to="/electricity" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity</Link></li>
        </ul>
      </div>

    </ArticleLayout>
  );
}
