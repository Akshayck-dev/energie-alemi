import { Link } from 'react-router';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function GasvergleichPassenderTarif() {
  const article = articles.find(a => a.slug === 'gasvergleich')!;

  const faqs = [
    {
      question: "Wann ist der beste Zeitpunkt für einen Gastarifvergleich?",
      answer: "Der beste Zeitpunkt ist etwa 4 bis 6 Wochen vor Ablauf der Kündigungsfrist Ihres aktuellen Vertrags oder unmittelbar nach einer angekündigten Preiserhöhung. Bei einem Umzug sollten Sie ebenfalls rechtzeitig vergleichen."
    },
    {
      question: "Was brauche ich, um Erdgastarife vergleichen zu können?",
      answer: "Sie benötigen lediglich Ihre Postleitzahl und Ihren ungefähren jährlichen Gasverbrauch in Kilowattstunden (kWh), welchen Sie auf Ihrer letzten Jahresabrechnung finden."
    },
    {
      question: "Wie berechnen sich die Kosten bei 30.000 kWh Gasverbrauch?",
      answer: "Die Kosten bei 30.000 kWh berechnen sich aus dem Grundpreis (fixe monatliche Gebühr) und dem Arbeitspreis (Preis pro verbrauchter kWh). Die exakten Kosten variieren je nach gewähltem Gastarif."
    }
  ];

  return (
    <ArticleLayout 
      article={article} 
      customH1="Gastarife vergleichen und günstigen Gastarif finden"
      faqs={faqs}
    >
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Die Heizkosten machen oft den größten Teil der Energiekosten eines Haushalts aus. Wer regelmäßig <Link to="/gas" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Gas-Tarife vergleichen</Link> lässt, kann mehrere Hundert Euro im Jahr sparen. Finden Sie heraus, wie Sie den optimalen Gastarif auswählen und Ihre Kosten dauerhaft senken.
      </p>

      <h2>Warum lohnt sich ein Gastarifvergleich?</h2>
      <p>
        Der Energiemarkt ist stetig in Bewegung. Viele Haushalte verbleiben aus Bequemlichkeit über Jahre im Tarif des örtlichen Grundversorgers. Diese Treue kann teuer werden, da Neukundentarife alternativer Anbieter oft deutlich günstigere Konditionen und attraktive Wechselprämien bieten. Ein regelmäßiger <strong>Gastarifvergleich</strong> hilft Ihnen, Preisentwicklungen im Auge zu behalten und sicherzustellen, dass Sie nicht mehr für Ihr Erdgas bezahlen als nötig.
      </p>

      <h2>Wie finde ich den passenden Gastarif?</h2>
      <p>
        Um den passenden Tarif zu finden, benötigen Sie lediglich zwei Informationen: Ihre Postleitzahl und Ihren jährlichen Gasverbrauch in Kilowattstunden (kWh). Letzteren entnehmen Sie einfach Ihrer letzten Jahresabrechnung. Wenn Sie keine Vorjahresrechnung haben, können Sie für den <strong>Gasverbrauch Vergleich</strong> folgende Richtwerte nutzen:
      </p>
      <ul>
        <li>30 m² Wohnung: ca. 4.000 kWh</li>
        <li>50 m² Wohnung: ca. 7.000 kWh</li>
        <li>100 m² Wohnung: ca. 14.000 kWh</li>
        <li>Reihenhaus / Einfamilienhaus: ca. 20.000 bis 30.000 kWh</li>
      </ul>

      <h2>Welche Faktoren beeinflussen den Gaspreis?</h2>
      <p>
        Beim Vergleich verschiedener <strong>Gastarife</strong> stoßen Sie stets auf zwei zentrale Preisbestandteile. Es ist wichtig, den Unterschied zu kennen, um die tatsächlichen Kosten einschätzen zu können.
      </p>

      <h3>Arbeitspreis</h3>
      <p>
        Der Arbeitspreis (Verbrauchspreis) wird in Cent pro Kilowattstunde (ct/kWh) angegeben. Er gibt an, wie viel Sie für die tatsächlich verbrauchte Menge an Gas bezahlen. Wenn Sie einen hohen Gasverbrauch haben, ist ein Tarif mit einem besonders niedrigen Arbeitspreis entscheidend für Ihre Ersparnis.
      </p>

      <h3>Grundpreis</h3>
      <p>
        Der Grundpreis ist eine verbrauchsunabhängige, fixe Gebühr, die meist monatlich berechnet wird (z. B. 10 bis 15 Euro pro Monat). Er deckt die Kosten für die Bereitstellung, den Gaszähler und die Netzwerknutzung ab. Bei einem geringen Verbrauch (z. B. in einer kleinen Wohnung) ist ein niedriger Grundpreis oft wichtiger als ein minimal günstigerer Arbeitspreis.
      </p>

      <h3>Gasverbrauch</h3>
      <p>
        Je nachdem, ob Sie nur warmes Wasser erzeugen, auch heizen oder gar ein ganzes Haus versorgen, ändert sich Ihr Verbrauch drastisch. Ihr individuelles Verbrauchsverhalten entscheidet darüber, ob sich eher ein Tarif mit hohem Grundpreis und niedrigem Arbeitspreis lohnt oder umgekehrt.
      </p>

      <h3>Staatliche Abgaben und Netzentgelte</h3>
      <p>
        Neben den Beschaffungskosten des Anbieters wird der Gaspreis auch durch staatlich bestimmte Preisbestandteile und regulierte Netzentgelte beeinflusst. Die CO₂-Bepreisung fossiler Brennstoffe ist dabei ein Kostenfaktor, der sich auf die Gaspreise für Verbraucher auswirken kann. Informationen zu regulatorischen Rahmenbedingungen und Netzentgelten stellt unter anderem die <a href="https://www.bundesnetzagentur.de" target="_blank" rel="noopener noreferrer" className="text-[#0047AB] dark:text-[#60a5fa] underline hover:text-[#003380]">Bundesnetzagentur</a> bereit.
      </p>

      <h2>Was kostet Gas bei 30.000 kWh?</h2>
      <p>
        Viele Hausbesitzer fragen sich: "Wie hoch sind meine <strong>30000 kWh Gas Kosten</strong>?" Die genauen Kosten lassen sich nicht pauschal beziffern, da sie von Ihrem aktuellen Tarif abhängen. Zur Berechnung multiplizieren Sie einfach den jährlichen Verbrauch (30.000 kWh) mit dem Arbeitspreis Ihres Tarifs und addieren anschließend den jährlichen Grundpreis (12 Monate × monatlicher Grundpreis).
      </p>
      <p>
        Beispiel bei einem Arbeitspreis von 10 Cent/kWh und einem Grundpreis von 15 Euro im Monat:
        <br/><em>(30.000 kWh × 0,10 €) + (12 × 15 €) = 3.000 € + 180 € = 3.180 € im Jahr.</em>
      </p>
      <p>
        Schon eine Differenz von wenigen Cent beim Arbeitspreis macht bei diesem Volumen Hunderte Euro im Jahr aus, was einen Wechsel besonders lukrativ macht.
      </p>

      <h2>Erdgas-Tarife vergleichen</h2>
      <p>
        Wenn Sie <strong>Erdgastarife</strong> vergleichen, sollten Sie nicht nur auf den reinen Preis schauen. Achten Sie auf die Herkunft des Gases. Neben klassischem Erdgas bieten viele Versorger mittlerweile "Ökogas" an. Bei reinen Klimatarifen wird meist herkömmliches Erdgas geliefert, die CO2-Emissionen werden jedoch durch Klimaschutzprojekte kompensiert. Wenn Sie einen echten Beitrag zur Energiewende leisten möchten, sollten Sie auf Tarife mit einem echten Biogas-Anteil achten.
      </p>

      <h2>Worauf sollte man beim Gasanbieter achten?</h2>
      <p>
        Der günstigste Preis ist wertlos, wenn die Vertragsbedingungen schlecht sind. Achten Sie bei der Auswahl Ihres neuen Anbieters auf folgende Kriterien:
      </p>
      <ul>
        <li><strong>Preisgarantie:</strong> Suchen Sie nach Tarifen mit einer eingeschränkten oder vollen Preisgarantie von mindestens 12 Monaten. Sie schützt Sie vor überraschenden Preiserhöhungen.</li>
        <li><strong>Vertragslaufzeit:</strong> Binden Sie sich nicht länger als 12 Monate an einen Versorger, um flexibel auf den Markt reagieren zu können.</li>
        <li><strong>Kündigungsfrist:</strong> Die Frist sollte maximal vier Wochen zum Vertragsende betragen.</li>
        <li><strong>Boni und Prämien:</strong> Neukundenboni machen das erste Jahr oft sehr günstig, entfallen aber im zweiten Jahr. Prüfen Sie, ob der Tarif auch ohne Bonus wirtschaftlich sinnvoll ist.</li>
      </ul>

      <h2>Was Sie für einen Gastarifvergleich bereithalten sollten</h2>
      <p>
        Um Tarife schnell und passgenau vergleichen zu können, sollten Sie folgende Unterlagen bzw. Angaben zur Hand haben:
      </p>
      <ul>
        <li><strong>Postleitzahl (PLZ):</strong> Da Netznutzungsentgelte regional variieren, bestimmt Ihr Wohnort die verfügbaren Tarife.</li>
        <li><strong>Jahresverbrauch in kWh:</strong> Diesen finden Sie auf Ihrer letzten Jahresabrechnung. Alternativ können Sie Richtwerte basierend auf der Wohnfläche nutzen.</li>
        <li><strong>Aktueller Anbieter &amp; Tarifname:</strong> Hilft beim direkten Vergleich Ihres bestehenden Arbeitspreises (Cent/kWh) und Grundpreises (Euro/Monat).</li>
        <li><strong>Vertragslaufzeit &amp; Kündigungsfrist:</strong> Damit Sie wissen, zu welchem Wunschtermin der Wechsel vollzogen werden kann.</li>
      </ul>

      <h2>Gasanbieter wechseln – so funktioniert es</h2>
      <p>
        Sobald Sie sich für einen neuen Tarif entschieden haben, ist der Wechselprozess völlig unkompliziert. In der Regel übernimmt Ihr neuer Anbieter die Kündigung bei Ihrem alten Versorger. Sie müssen sich um fast nichts kümmern und Ihre Gasversorgung ist gesetzlich lückenlos garantiert. Für eine detaillierte Anleitung lesen Sie unseren Beitrag: <Link to="/ratgeber/gasanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Gasanbieter wechseln</Link>.
      </p>
      <p>
        Wenn Sie sich bei der Tarifauswahl unsicher sind oder den Wechsel nicht selbst online durchführen möchten, bieten wir Ihnen gerne unsere <Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">persönliche Tarifberatung</Link> an. Wir vergleichen unabhängig alle Konditionen und finden den besten Gastarif für Ihre individuelle Situation.
      </p>

      <h2>Häufige Fragen zu Gastarifen</h2>
      <div className="space-y-6 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-lg font-bold mt-0 mb-2">{faq.question}</h3>
            <p className="mb-0 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Starten Sie jetzt Ihren Gasvergleich</h3>
        <p className="mb-6">Nutzen Sie unseren kostenlosen Service und sichern Sie sich günstige Gaspreise.</p>
        <Link to="/gas">
          <Button variant="primary">Gaspreise vergleichen</Button>
        </Link>
      </div>
    </ArticleLayout>
  );
}
