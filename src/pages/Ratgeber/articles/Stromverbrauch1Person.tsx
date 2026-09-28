import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function Stromverbrauch1Person() {
  const { i18n } = useTranslation();
  const article = articles.find(a => a.slug === 'stromverbrauch-1-person')!;

  const faqsDe = [
    {
      question: "Sind 1.500 kWh für eine Person viel?",
      answer: "In einer Wohnung ohne elektrische Warmwasserbereitung liegt der Wert über dem Stromspiegel-Durchschnitt von rund 1.200 kWh, kann aber je nach Ausstattung plausibel sein. In einem Einfamilienhaus ist 1.500 kWh eher niedrig."
    },
    {
      question: "Warum ist der Pro-Kopf-Verbrauch allein höher?",
      answer: "Viele Geräte verursachen eine Grundlast unabhängig von der Personenzahl. Kühlschrank, Router oder Herd werden in größeren Haushalten gemeinsam genutzt; ein Single trägt diesen Verbrauch allein."
    },
    {
      question: "Wie erkenne ich elektrisches Warmwasser?",
      answer: "Typische Hinweise sind ein Durchlauferhitzer im Bad oder ein Boiler unter dem Waschbecken. Im Zweifel helfen Mietunterlagen, Vermieter oder Hausverwaltung."
    },
  ];
  const faqsEn = [
    {
      question: "Are 1,500 kWh a lot for one person?",
      answer: "In an apartment without electrical water heating, the value is above the electricity mirror average of around 1,200 kWh, but can be plausible depending on the equipment. In a detached house, 1,500 kWh is rather low."
    },
    {
      question: "Why is the per-capita consumption higher alone?",
      answer: "Many devices cause a base load regardless of the number of people. A refrigerator, router, or stove are used together in larger households; a single person bears this consumption alone."
    },
    {
      question: "How do I recognize electrical hot water?",
      answer: "Typical indications are an instantaneous water heater in the bathroom or a boiler under the sink. In case of doubt, rental documents, the landlord, or property management can help."
    },
  ];
  const faqs = i18n.language === 'en' ? faqsEn : faqsDe;

  return (
    <ArticleLayout 
      article={article} 
      customH1={i18n.language === 'en' ? "Electricity Consumption in a 1-Person Household: What is Normal?" : "Stromverbrauch im 1-Personen-Haushalt: Was ist normal?"}
      faqs={faqs}
    >
      {i18n.language === 'en' ? (
        <>

      <h2>For one person, the type of housing and hot water are decisive</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        According to the comparative values of the electricity mirror, a 1-person household consumes on average around 1,200 kilowatt-hours (kWh) per year in an apartment and around 1,800 kWh in a detached house, each without electrical water heating. If hot water is generated via a boiler or instantaneous water heater, the comparative values increase to around 1,600 and 2,100 kWh per year, respectively.
      </p>
      <p>
        These figures are a guide, not a fixed upper limit. Working from home, old refrigerators, an aquarium, air conditioners, or frequent cooking can increase consumption. Conversely, a small, efficiently equipped apartment can be significantly lower.
      </p>
      <h2>Classifying benchmarks correctly</h2>
      <h2>Apartment, hot water not electrical: approx. 1,200 kWh/year</h2>
      <h2>Apartment, hot water electrical: approx. 1,600 kWh/year</h2>
      <h2>Detached house, hot water not electrical: approx. 1,800 kWh/year</h2>
      <h2>Detached house, hot water electrical: approx. 2,100 kWh/year</h2>
      <p>
        In a detached house, one person bears additional base loads alone, such as for a heating pump, exterior lighting, garage, or building services. Therefore, the consumption is usually higher there than in an apartment in a multi-family house.
      </p>
      <h2>How to read your own consumption</h2>
      <p>
        The most reliable value is on the last annual statement. Compare the reading period and actual days before comparing the value with an annual benchmark. With a shorter period, the consumption can only be roughly extrapolated, because winter and summer can turn out differently.
      </p>
      <p>
        If no statement is available, a monthly meter reading helps. The difference between two readings shows the consumption in the period. Noticeable jumps can then be compared with usage, vacation, new devices, or electrical water heating.
      </p>
      <h2>The biggest levers in a single household</h2>
      <p>
        Refrigerator, freezer, washing machine, dryer, and consumer electronics often make up a large part of household electricity. In a home office, a monitor, computer, and router are added. It makes sense to first check the continuous consumers:
      </p>
      <h2>Adjust the temperature of refrigerators and freezers appropriately;</h2>
      <h2>Check old devices with a power meter;</h2>
      <h2>Reduce stand-by consumption via switchable sockets;</h2>
      <h2>Fully load the washing machine and use eco programs;</h2>
      <h2>Heat water in the kettle instead of on the stove;</h2>
      <p>
        Consciously control shower duration and temperature with electrical hot water.
      </p>
      <p>
        Not every new purchase pays off immediately. First, measure the real consumption and compare acquisition costs with the potential annual savings.
      </p>
      <h2>Deriving electricity costs from consumption</h2>
      <p>
        The annual electricity costs consist of consumption multiplied by the unit price plus the base price. At 1,200 kWh, an example unit price of 0.35 Euro/kWh, and 120 Euros base price, the result is 540 Euros per year. This is a calculation example, not a current tariff offer.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Consulting & Service</h3>
        <p className="mb-6">Do you want to know which tariff fits your actual single consumption? Energie Alemi compares unit price, base price, and contract terms free of charge.</p>
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
          <li><Link to="/ratgeber/stromkosten-berechnen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Calculate Electricity Costs</Link></li>
          <li><Link to="/ratgeber/stromvergleich" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity Comparison</Link></li>
          <li><Link to="/electricity" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity</Link></li>
          <li><Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Contact</Link></li>
        </ul>
      </div>

        </>
      ) : (
        <>
      <h2>Für eine Person sind Wohnform und Warmwasser entscheidend</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Ein 1-Personen-Haushalt verbraucht nach den Vergleichswerten des Stromspiegels im Durchschnitt rund 1.200 Kilowattstunden (kWh) pro Jahr in einer Wohnung und etwa 1.800 kWh in einem Einfamilienhaus, jeweils ohne elektrische Warmwasserbereitung. Wird Warmwasser über Boiler oder Durchlauferhitzer erzeugt, steigen die Vergleichswerte auf rund 1.600 beziehungsweise 2.100 kWh pro Jahr.
      </p>
      <p>
        Diese Zahlen sind Orientierung, keine feste Obergrenze. Homeoffice, alte Kühlgeräte, ein Aquarium, Klimageräte oder häufiges Kochen können den Verbrauch erhöhen. Umgekehrt kann eine kleine, effizient ausgestattete Wohnung deutlich darunterliegen.
      </p>
      <h2>Richtwerte richtig einordnen</h2>
      <h2>Wohnung, Warmwasser nicht elektrisch: etwa 1.200 kWh/Jahr</h2>
      <h2>Wohnung, Warmwasser elektrisch: etwa 1.600 kWh/Jahr</h2>
      <h2>Einfamilienhaus, Warmwasser nicht elektrisch: etwa 1.800 kWh/Jahr</h2>
      <h2>Einfamilienhaus, Warmwasser elektrisch: etwa 2.100 kWh/Jahr</h2>
      <p>
        Im Einfamilienhaus trägt eine Person zusätzliche Grundlast allein, etwa für Heizungspumpe, Außenbeleuchtung, Garage oder Gebäudetechnik. Deshalb ist der Verbrauch dort meist höher als in einer Wohnung im Mehrfamilienhaus.
      </p>
      <h2>So lesen Sie Ihren eigenen Verbrauch</h2>
      <p>
        Der verlässlichste Wert steht auf der letzten Jahresabrechnung. Vergleichen Sie Ablesezeitraum und tatsächliche Tage, bevor Sie den Wert mit einem Jahresrichtwert abgleichen. Bei einem kürzeren Zeitraum lässt sich der Verbrauch nur grob hochrechnen, weil Winter und Sommer unterschiedlich ausfallen können.
      </p>
      <p>
        Wenn keine Abrechnung vorliegt, hilft eine monatliche Zählerablesung. Die Differenz zwischen zwei Ständen zeigt den Verbrauch im Zeitraum. Auffällige Sprünge lassen sich anschließend mit Nutzung, Urlaub, neuen Geräten oder elektrischer Warmwasserbereitung abgleichen.
      </p>
      <h2>Die größten Hebel im Singlehaushalt</h2>
      <p>
        Kühlschrank, Gefriergerät, Waschmaschine, Trockner und Unterhaltungselektronik bilden oft einen großen Teil des Haushaltsstroms. Im Homeoffice kommen Monitor, Computer und Router hinzu. Sinnvoll ist es, zuerst die Dauerverbraucher zu prüfen:
      </p>
      <h2>Temperatur von Kühl- und Gefriergeräten passend einstellen;</h2>
      <h2>alte Geräte mit einem Strommessgerät kontrollieren;</h2>
      <h2>Stand-by-Verbrauch über schaltbare Steckdosen reduzieren;</h2>
      <h2>Waschmaschine voll beladen und Eco-Programme nutzen;</h2>
      <h2>Wasser im Wasserkocher statt auf der Herdplatte erhitzen;</h2>
      <p>
        bei elektrischem Warmwasser Duschdauer und Temperatur bewusst steuern.
      </p>
      <p>
        Nicht jede Neuanschaffung rechnet sich sofort. Messen Sie zunächst den realen Verbrauch und vergleichen Sie Anschaffungskosten mit der möglichen jährlichen Einsparung.
      </p>
      <h2>Stromkosten aus dem Verbrauch ableiten</h2>
      <p>
        Die jährlichen Stromkosten bestehen aus Verbrauch mal Arbeitspreis plus Grundpreis. Bei 1.200 kWh, einem Beispiel-Arbeitspreis von 0,35 Euro/kWh und 120 Euro Grundpreis ergeben sich 540 Euro pro Jahr. Das ist ein Rechenbeispiel, kein aktuelles Tarifangebot.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Beratung & Service</h3>
        <p className="mb-6">Sie möchten wissen, welcher Tarif zu Ihrem tatsächlichen Single-Verbrauch passt? Energie Alemi vergleicht Arbeitspreis, Grundpreis und Vertragsbedingungen kostenlos.</p>
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
          <li><Link to="/ratgeber/stromkosten-berechnen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Stromkosten Berechnen</Link></li>
          <li><Link to="/ratgeber/stromvergleich" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Stromvergleich</Link></li>
          <li><Link to="/electricity" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity</Link></li>
          <li><Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Kontakt</Link></li>
        </ul>
      </div>

    </>
      )}
    </ArticleLayout>
  );
}
