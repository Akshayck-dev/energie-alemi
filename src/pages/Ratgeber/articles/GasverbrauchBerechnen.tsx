import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function GasverbrauchBerechnen() {
  const { i18n } = useTranslation();
  const article = articles.find(a => a.slug === 'gasverbrauch-berechnen')!;

  const faqsDe = [
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
  const faqsEn = [
    {
      question: "How many kWh is one cubic meter of gas?",
      answer: "That depends on the calorific value and the state number. As a rough guide, about 10 kWh per m³ is often used; only the formula with the factors of your bill is exact."
    },
    {
      question: "Where can I find the calorific value and state number?",
      answer: "Both values can be found in the technical or consumption section of the annual statement. The calorific value can be stated differently for partial periods."
    },
    {
      question: "Can I check my bill with the formula?",
      answer: "Yes. Use the factors mentioned on the bill and the same billing period. Small deviations can arise from rounding."
    },
  ];
  const faqs = i18n.language === 'en' ? faqsEn : faqsDe;

  return (
    <ArticleLayout 
      article={article} 
      customH1={i18n.language === 'en' ? "Calculate Gas Consumption: Convert Cubic Meters to kWh" : "Gasverbrauch berechnen: Kubikmeter in kWh umrechnen"}
      faqs={faqs}
    >
      {i18n.language === 'en' ? (
        <>

      <h2>The gas meter measures m³, the bill uses kWh</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Gas consumption at the meter is recorded in cubic meters (m³). For billing, this volume is converted into kilowatt-hours (kWh). The exact formula is: Consumption in m³ × State number × Calorific value = Consumption in kWh.
      </p>
      <p>
        Calorific value and state number are stated on the gas bill. Without these values, only a rough estimate is possible. A common rule of thumb is m³ × 10, but this does not replace the exact billing.
      </p>
      <h2>The three values of the formula</h2>
      <p>
        Consumption in m³: Subtract the old meter reading from the new reading. The difference is the gas volume measured in the period.
      </p>
      <p>
        State number: It corrects the measured volume to a defined standard state, including pressure and temperature at the delivery point.
      </p>
      <p>
        Calorific value: It describes how much energy is contained in the delivered gas. The value is given in kWh per m³ and can vary depending on the gas properties and the billing period.
      </p>
      <h2>Example of the exact conversion</h2>
      <p>
        Assuming the meter shows a difference of 1,200 m³ for the billing period. The bill shows a state number of 0.95 and a calorific value of 11.1 kWh/m³.
      </p>
      <p>
        1,200 m³ × 0.95 × 11.1 kWh/m³ = 12,654 kWh.
      </p>
      <p>
        With the rule of thumb m³ × 10, it would be 12,000 kWh. The deviation shows why the real factors should be used for invoice verification.
      </p>
      <h2>From consumption to gas costs</h2>
      <h2>Once the kilowatt-hours are known, the cost formula is:</h2>
      <p>
        Annual consumption in kWh × Unit price in Euro/kWh + annual base price = expected annual costs.
      </p>
      <p>
        Example: 12,654 kWh × 0.10 Euro/kWh + 180 Euro base price equals 1,445.40 Euro per year. This is a calculation example and not a current tariff offer.
      </p>
      <h2>Why consumption fluctuates from year to year</h2>
      <p>
        Gas is often used for heating. A cold winter, longer presence, a higher room temperature, or changed hot water use can increase annual consumption. Living space, insulation, heating condition, and the number of residents also have an effect.
      </p>
      <p>
        Therefore, do not just compare two absolute annual values. Consider weather, billing duration, and changes in the household. Monthly meter readings can be helpful for early control.
      </p>
      <h2>Check gas bill</h2>
      <p>
        Check the initial and final meter readings, billing period, conversion factors, unit price, and base price. If the bill or provider indicates a meter reading as estimated, compare it with your own photos or notes.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Consulting & Service</h3>
        <p className="mb-6">Energie Alemi helps you understandably classify consumption and tariff costs and compare suitable gas tariffs.</p>
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
          <li><Link to="/ratgeber/gaspreise-verstehen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Understanding Gas Prices</Link></li>
          <li><Link to="/ratgeber/gasvergleich" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gas Comparison</Link></li>
          <li><Link to="/ratgeber/gasanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Switching Gas Providers</Link></li>
          <li><Link to="/gas" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gas</Link></li>
        </ul>
      </div>

        </>
      ) : (
        <>
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

    </>
      )}
    </ArticleLayout>
  );
}
