import { Link } from 'react-router';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function GasverbrauchBerechnen() {
  const article = articles.find(a => a.slug === 'gasverbrauch-berechnen')!;

  const faqs = [
    {
      question: "Wie viele kWh sind ein Kubikmeter Gas?",
      answer: "Das hängt von Brennwert und Zustandszahl ab. Als grobe Orientierung wird oft mit etwa 10 kWh pro m³ gerechnet; exakt ist nur die Formel mit den Faktoren Ihrer Abrechnung."
    },
    {
      question: "Wo finde ich Brennwert und Zustandszahl?",
      answer: "Beide Werte stehen im technischen oder Verbrauchsabschnitt der Jahresabrechnung. Der Brennwert kann für Teilzeiträume unterschiedlich ausgewiesen sein."
    },
    {
      question: "Kann ich mit der Formel meine Rechnung kontrollieren?",
      answer: "Ja. Verwenden Sie die auf der Rechnung genannten Faktoren und denselben Abrechnungszeitraum. Kleine Abweichungen können durch Rundungen entstehen."
    },
  ];

  return (
    <ArticleLayout 
      article={article} 
      customH1="Gasverbrauch berechnen: Kubikmeter in kWh umrechnen"
      faqs={faqs}
    >
      <h2>Der Gaszähler misst m³, die Rechnung verwendet kWh</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Der Gasverbrauch am Zähler wird in Kubikmetern (m³) erfasst. Für die Abrechnung wird dieses Volumen in Kilowattstunden (kWh) umgerechnet. Die genaue Formel lautet: Verbrauch in m³ × Zustandszahl × Brennwert = Verbrauch in kWh.
      </p>
      <p>
        Brennwert und Zustandszahl stehen auf der Gasabrechnung. Ohne diese Werte ist nur eine grobe Schätzung möglich. Eine verbreitete Faustformel lautet m³ × 10, ersetzt aber nicht die exakte Abrechnung.
      </p>
      <h2>Die drei Werte der Formel</h2>
      <p>
        Verbrauch in m³: Ziehen Sie den alten Zählerstand vom neuen Stand ab. Die Differenz ist das im Zeitraum gemessene Gasvolumen.
      </p>
      <p>
        Zustandszahl: Sie korrigiert das gemessene Volumen auf einen definierten Normzustand, unter anderem wegen Druck und Temperatur an der Lieferstelle.
      </p>
      <p>
        Brennwert: Er beschreibt, wie viel Energie im gelieferten Gas steckt. Der Wert wird in kWh pro m³ angegeben und kann je nach Gasbeschaffenheit und Abrechnungszeitraum variieren.
      </p>
      <h2>Beispiel für die exakte Umrechnung</h2>
      <p>
        Angenommen, der Zähler zeigt für den Abrechnungszeitraum eine Differenz von 1.200 m³. Auf der Rechnung stehen eine Zustandszahl von 0,95 und ein Brennwert von 11,1 kWh/m³.
      </p>
      <p>
        1.200 m³ × 0,95 × 11,1 kWh/m³ = 12.654 kWh.
      </p>
      <p>
        Mit der Faustformel m³ × 10 wären es 12.000 kWh. Die Abweichung zeigt, warum für die Rechnungsprüfung die echten Faktoren verwendet werden sollten.
      </p>
      <h2>Vom Verbrauch zu den Gaskosten</h2>
      <h2>Sind die Kilowattstunden bekannt, lautet die Kostenformel:</h2>
      <p>
        Jahresverbrauch in kWh × Arbeitspreis in Euro/kWh + jährlicher Grundpreis = erwartete Jahreskosten.
      </p>
      <p>
        Beispiel: 12.654 kWh × 0,10 Euro/kWh + 180 Euro Grundpreis ergeben 1.445,40 Euro pro Jahr. Das ist ein Rechenbeispiel und kein aktuelles Tarifangebot.
      </p>
      <h2>Warum der Verbrauch von Jahr zu Jahr schwankt</h2>
      <p>
        Gas wird häufig zum Heizen eingesetzt. Ein kalter Winter, längere Anwesenheit, eine höhere Raumtemperatur oder veränderte Warmwassernutzung können den Jahresverbrauch erhöhen. Auch Wohnfläche, Dämmung, Heizungszustand und Anzahl der Bewohner wirken sich aus.
      </p>
      <p>
        Vergleichen Sie daher nicht nur zwei absolute Jahreswerte. Berücksichtigen Sie Wetter, Abrechnungsdauer und Veränderungen im Haushalt. Für eine frühe Kontrolle können monatliche Zählerstände hilfreich sein.
      </p>
      <h2>Gasrechnung prüfen</h2>
      <p>
        Kontrollieren Sie Anfangs- und Endzählerstand, Abrechnungszeitraum, Umrechnungsfaktoren, Arbeitspreis und Grundpreis. Kennzeichnen Rechnung oder Anbieter einen Zählerstand als geschätzt, vergleichen Sie ihn mit eigenen Fotos oder Notizen.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Beratung & Service</h3>
        <p className="mb-6">Energie Alemi hilft Ihnen, Verbrauch und Tarifkosten nachvollziehbar einzuordnen und passende Gastarife zu vergleichen.</p>
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
          <li><Link to="/ratgeber/gaspreise-verstehen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gaspreise Verstehen</Link></li>
          <li><Link to="/ratgeber/gasvergleich" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gasvergleich</Link></li>
          <li><Link to="/ratgeber/gasanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gasanbieter Wechseln</Link></li>
          <li><Link to="/gas" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gas</Link></li>
        </ul>
      </div>

    </ArticleLayout>
  );
}
