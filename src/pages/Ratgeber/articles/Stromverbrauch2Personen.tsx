import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function Stromverbrauch2Personen() {
  const { i18n } = useTranslation();
  const article = articles.find(a => a.slug === 'stromverbrauch-2-personen')!;

  const faqsDe = [
    {
      question: "Sind 3.000 kWh für zwei Personen zu viel?",
      answer: "Das hängt von Wohnform und Warmwasser ab. Im Einfamilienhaus oder bei elektrischem Warmwasser kann der Wert plausibel sein. In einer Wohnung ohne elektrische Warmwasserbereitung liegt er deutlich über dem Durchschnitt und sollte geprüft werden."
    },
    {
      question: "Welcher Verbrauch gehört in den Tarifvergleich?",
      answer: "Nutzen Sie möglichst den tatsächlichen Jahresverbrauch aus der letzten Abrechnung. Fehlt er, ist ein passender Richtwert besser als eine willkürliche Schätzung."
    },
    {
      question: "Wie oft sollte ich den Zähler ablesen?",
      answer: "Für die laufende Kontrolle ist eine monatliche Ablesung sinnvoll. So werden Veränderungen früh sichtbar und lassen sich leichter einem Gerät oder einer Nutzungsänderung zuordnen."
    },
  ];
  const faqsEn = [
    {
      question: "Are 3,000 kWh too much for two people?",
      answer: "That depends on the type of housing and hot water. In a detached house or with electrical hot water, the value can be plausible. In an apartment without electrical water heating, it is significantly above average and should be checked."
    },
    {
      question: "Which consumption belongs in the tariff comparison?",
      answer: "Use the actual annual consumption from the last statement if possible. If it is missing, a suitable benchmark is better than an arbitrary estimate."
    },
    {
      question: "How often should I read the meter?",
      answer: "For ongoing control, a monthly reading makes sense. This way, changes become visible early and can be more easily assigned to a device or a change in usage."
    },
  ];
  const faqs = i18n.language === 'en' ? faqsEn : faqsDe;

  return (
    <ArticleLayout 
      article={article} 
      customH1={i18n.language === 'en' ? "Electricity Consumption in a 2-Person Household: Benchmarks and Costs" : "Stromverbrauch im 2-Personen-Haushalt: Richtwerte und Kosten"}
      faqs={faqs}
    >
      {i18n.language === 'en' ? (
        <>

      <h2>Two people do not consume twice as much as one</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        For two people, the electricity mirror states an average of around 1,900 kWh per year in an apartment and around 2,700 kWh in a detached house, each without electrical water heating. With a boiler or instantaneous water heater, the comparative values are around 2,500 and 3,200 kWh per year, respectively.
      </p>
      <p>
        Consumption does not increase proportionally to the number of people. Refrigerator, router, lighting, or television are used together. This reduces the average consumption per person compared to a single household.
      </p>
      <h2>Benchmarks for two people</h2>
      <h2>Apartment, hot water not electrical: approx. 1,900 kWh/year</h2>
      <h2>Apartment, hot water electrical: approx. 2,500 kWh/year</h2>
      <h2>Detached house, hot water not electrical: approx. 2,700 kWh/year</h2>
      <h2>Detached house, hot water electrical: approx. 3,200 kWh/year</h2>
      <p>
        For a fair classification, the type of housing and hot water type must match. A value of 2,800 kWh can be normal in an apartment with electrical hot water, but a reason for review in a comparable apartment without an instantaneous water heater.
      </p>
      <h2>Why consumption can be higher or lower</h2>
      <p>
        Working from home on several days, two powerful computers, a tumble dryer, or a second refrigerator increase consumption. Permanently running pumps, old freezers, and electrical auxiliary heaters also carry significant weight. The number of small chargers is often less relevant.
      </p>
      <p>
        With an unexpectedly high value, first check devices with high power or a long runtime. A simple power meter shows how much plug-in devices need within 24 hours or a week.
      </p>
      <h2>Four steps for a reliable comparison</h2>
      <p>
        Read the annual consumption on the last bill.
      </p>
      <p>
        Clarify whether hot water is generated electrically.
      </p>
      <p>
        Only compare with the same type of housing.
      </p>
      <p>
        Observe the meter monthly if the value is conspicuous.
      </p>
      <p>
        A single high monthly reading does not necessarily mean a problem. Season, vacation, home office, and new devices should also be considered. A permanently rising basic consumption, on the other hand, deserves attention.
      </p>
      <h2>Calculation example for the annual costs</h2>
      <p>
        At 1,900 kWh annual consumption, 0.35 euros unit price per kWh, and 120 euros base price, the arithmetical result is 785 euros per year. At 2,700 kWh, it would be 1,065 euros. The values serve only as calculation examples; for a real comparison, the current conditions of the respective tariff apply.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Consulting & Service</h3>
        <p className="mb-6">Energie Alemi compares electricity tariffs based on your real annual consumption and explains transparently how the unit price and base price affect it.</p>
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
          <li><Link to="/ratgeber/stromverbrauch-1-person" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity Consumption 1 Person</Link></li>
          <li><Link to="/ratgeber/stromverbrauch-4-personen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity Consumption 4 People</Link></li>
          <li><Link to="/ratgeber/stromkosten-berechnen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Calculate Electricity Costs</Link></li>
          <li><Link to="/stromanbieter-aachen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Electricity Providers Aachen</Link></li>
        </ul>
      </div>

        </>
      ) : (
        <>
      <h2>Zwei Personen verbrauchen nicht doppelt so viel wie eine</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Für zwei Personen nennt der Stromspiegel durchschnittlich rund 1.900 kWh pro Jahr in einer Wohnung und etwa 2.700 kWh im Einfamilienhaus, jeweils ohne elektrische Warmwasserbereitung. Mit Boiler oder Durchlauferhitzer liegen die Vergleichswerte bei rund 2.500 beziehungsweise 3.200 kWh pro Jahr.
      </p>
      <p>
        Der Verbrauch steigt nicht proportional zur Personenzahl. Kühlschrank, Router, Beleuchtung oder Fernseher werden gemeinsam genutzt. Dadurch sinkt der durchschnittliche Verbrauch pro Person gegenüber einem Singlehaushalt.
      </p>
      <h2>Vergleichswerte für zwei Personen</h2>
      <h2>Wohnung, Warmwasser nicht elektrisch: etwa 1.900 kWh/Jahr</h2>
      <h2>Wohnung, Warmwasser elektrisch: etwa 2.500 kWh/Jahr</h2>
      <h2>Einfamilienhaus, Warmwasser nicht elektrisch: etwa 2.700 kWh/Jahr</h2>
      <h2>Einfamilienhaus, Warmwasser elektrisch: etwa 3.200 kWh/Jahr</h2>
      <p>
        Für eine faire Einordnung müssen Wohnform und Warmwasserart zusammenpassen. Ein Wert von 2.800 kWh kann in einer Wohnung mit elektrischem Warmwasser normal, in einer vergleichbaren Wohnung ohne Durchlauferhitzer aber ein Anlass zur Prüfung sein.
      </p>
      <h2>Warum der Verbrauch höher oder niedriger ausfallen kann</h2>
      <p>
        Homeoffice an mehreren Tagen, zwei leistungsstarke Computer, ein Wäschetrockner oder ein zweiter Kühlschrank erhöhen den Verbrauch. Auch dauerhaft laufende Pumpen, alte Gefriertruhen und elektrische Zusatzheizungen fallen stark ins Gewicht. Weniger relevant ist oft die Zahl kleiner Ladegeräte.
      </p>
      <p>
        Prüfen Sie bei einem unerwartet hohen Wert zuerst Geräte mit hoher Leistung oder langer Laufzeit. Ein einfaches Strommessgerät zeigt bei steckbaren Geräten, wie viel sie innerhalb von 24 Stunden oder einer Woche benötigen.
      </p>
      <h2>Vier Schritte für einen belastbaren Vergleich</h2>
      <p>
        Lesen Sie den Jahresverbrauch auf der letzten Rechnung ab.
      </p>
      <p>
        Klären Sie, ob Warmwasser elektrisch erzeugt wird.
      </p>
      <p>
        Vergleichen Sie nur mit derselben Wohnform.
      </p>
      <p>
        Beobachten Sie den Zähler monatlich, wenn der Wert auffällig ist.
      </p>
      <p>
        Eine einzelne hohe Monatsablesung muss noch kein Problem bedeuten. Saison, Urlaub, Homeoffice und neue Geräte sollten mitbetrachtet werden. Ein dauerhaft steigender Grundverbrauch verdient dagegen Aufmerksamkeit.
      </p>
      <h2>Beispielrechnung für die Jahreskosten</h2>
      <p>
        Bei 1.900 kWh Jahresverbrauch, 0,35 Euro Arbeitspreis pro kWh und 120 Euro Grundpreis ergeben sich rechnerisch 785 Euro im Jahr. Bei 2.700 kWh wären es 1.065 Euro. Die Werte dienen nur als Rechenbeispiele; für einen echten Vergleich gelten die aktuellen Konditionen des jeweiligen Tarifs.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Beratung & Service</h3>
        <p className="mb-6">Energie Alemi vergleicht Stromtarife anhand Ihres realen Jahresverbrauchs und erklärt transparent, wie sich Arbeitspreis und Grundpreis auswirken.</p>
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
          <li><Link to="/ratgeber/stromverbrauch-1-person" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Stromverbrauch 1 Person</Link></li>
          <li><Link to="/ratgeber/stromverbrauch-4-personen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Stromverbrauch 4 Personen</Link></li>
          <li><Link to="/ratgeber/stromkosten-berechnen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Stromkosten Berechnen</Link></li>
          <li><Link to="/stromanbieter-aachen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Stromanbieter Aachen</Link></li>
        </ul>
      </div>

    </>
      )}
    </ArticleLayout>
  );
}
