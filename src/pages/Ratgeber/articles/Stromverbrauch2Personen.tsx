import { Link } from 'react-router';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function Stromverbrauch2Personen() {
  const article = articles.find(a => a.slug === 'stromverbrauch-2-personen')!;

  const faqs = [
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

  return (
    <ArticleLayout 
      article={article} 
      customH1="Stromverbrauch im 2-Personen-Haushalt: Richtwerte und Kosten"
      faqs={faqs}
    >
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

    </ArticleLayout>
  );
}
