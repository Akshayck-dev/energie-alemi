import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function Stromverbrauch4Personen() {
  const { i18n } = useTranslation();
  const article = articles.find(a => a.slug === 'stromverbrauch-4-personen')!;

  const faqsDe = [
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
  const faqsEn = [
    {
      question: "Are 4,000 kWh normal for four people?",
      answer: "In an apartment with electrical hot water, this corresponds approximately to the benchmark. Without electrical water heating, the value would be above average for an apartment; in a detached house, it is close to the average."
    },
    {
      question: "Why does a house consume more than an apartment?",
      answer: "In a house, there are additional consumers such as pumps, exterior lighting, garage, or building services. In addition, the living area is often larger."
    },
    {
      question: "How can a family reliably track consumption?",
      answer: "Read the meter once a month on the same day. Also, make a note of longer absences and new devices. This creates a reliable consumption profile after a few months."
    },
  ];
  const faqs = i18n.language === 'en' ? faqsEn : faqsDe;

  return (
    <ArticleLayout 
      article={article} 
      customH1={i18n.language === 'en' ? "Electricity Consumption in a 4-Person Household: Benchmarks for Families" : "Stromverbrauch im 4-Personen-Haushalt: Richtwerte für Familien"}
      faqs={faqs}
    >
      {i18n.language === 'en' ? (
        <>

      <h2>For four people, the average varies widely depending on the housing type</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        The electricity mirror states around 2,600 kWh per year in an apartment and around 3,800 kWh in a detached house for four people, if hot water is not generated electrically. With electrical water heating, the comparative values are around 4,000 and 4,700 kWh per year, respectively.
      </p>
      <p>
        A single flat-rate value is therefore not very helpful. A family in an apartment with a central hot water supply has a different load profile than a household in a house with an instantaneous water heater, garden pump, freezer, and several home office workstations.
      </p>
      <h2>Benchmarks for a four-person household</h2>
      <h2>Apartment, hot water not electrical: approx. 2,600 kWh/year</h2>
      <h2>Apartment, hot water electrical: approx. 4,000 kWh/year</h2>
      <h2>Detached house, hot water not electrical: approx. 3,800 kWh/year</h2>
      <h2>Detached house, hot water electrical: approx. 4,700 kWh/year</h2>
      <p>
        The values are averages. A higher consumption does not automatically prove waste. It shows that it is worth taking a look at hot water, domestic technology, and larger devices.
      </p>
      <h2>Where families need a particularly large amount of electricity</h2>
      <p>
        Washing machine and dryer run more often, cooling and freezing capacity is larger, and multiple screens can be active at the same time. With electrical hot water, consumption also grows with the number and duration of showers. In a detached house, pumps, exterior lighting, garage, or ventilation are often added.
      </p>
      <p>
        A simple sequence helps for cause analysis: first check the hot water type, then heating and building services, then refrigerators, dryers, and consumer electronics. Small chargers are rarely the most important lever.
      </p>
      <h2>Reduce consumption without complicating everyday life</h2>
      <p>
        Fully load the washing machine and dishwasher and use eco programs.
      </p>
      <p>
        Air-dry laundry if possible and use the dryer selectively.
      </p>
      <p>
        Set the refrigerator to about 7 °C and the freezer compartment to about −18 °C.
      </p>
      <p>
        Turn off game consoles, televisions, and computers completely if they are not used for a longer period.
      </p>
      <p>
        Reduce shower time if hot water is generated electrically.
      </p>
      <p>
        Note monthly values and check unusual jumps immediately.
      </p>
      <p>
        A family does not have to change every habit at the same time. Two or three measurable measures are more effective than a long list without control.
      </p>
      <h2>Example: What a 1,000 kWh difference costs</h2>
      <p>
        With an example unit price of 0.35 Euro/kWh, 1,000 kWh additional consumption correspond to 350 Euros of additional consumption costs per year. The base price does not change as a result. The example shows why an instantaneous water heater or an old continuous device can noticeably affect the bill.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Consulting & Service</h3>
        <p className="mb-6">Bring your last annual statement with you. Energie Alemi classifies consumption and tariff and compares suitable offers for your household.</p>
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
          <li><Link to="/ratgeber/stromverbrauch-2-personen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity Consumption 2 People</Link></li>
          <li><Link to="/ratgeber/stromkosten-berechnen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Calculate Electricity Costs</Link></li>
          <li><Link to="/ratgeber/stromvergleich" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity Comparison</Link></li>
          <li><Link to="/electricity" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity</Link></li>
        </ul>
      </div>

        </>
      ) : (
        <>
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

    </>
      )}
    </ArticleLayout>
  );
}
