import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function GasvergleichPassenderTarif() {
  const { i18n } = useTranslation();
  const article = articles.find(a => a.slug === 'gasvergleich')!;

  const faqsDe = [
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
  const faqsEn = [
    {
      question: "When is the best time for a gas tariff comparison?",
      answer: "The best time is about 4 to 6 weeks before the notice period of your current contract expires, or immediately after an announced price increase. When moving, you should also compare in good time."
    },
    {
      question: "What do I need to be able to compare natural gas tariffs?",
      answer: "You only need your zip code and your approximate annual gas consumption in kilowatt-hours (kWh), which you can find on your last annual statement."
    },
    {
      question: "How are the costs calculated for 30,000 kWh of gas consumption?",
      answer: "The costs for 30,000 kWh are calculated from the base price (fixed monthly fee) and the unit price (price per kWh consumed). The exact costs vary depending on the chosen gas tariff."
    }
  ];
  const faqs = i18n.language === 'en' ? faqsEn : faqsDe;

  return (
    <ArticleLayout 
      article={article} 
      customH1={i18n.language === 'en' ? "Compare Gas Tariffs and Find a Cheap Gas Tariff" : "Gastarife vergleichen und günstigen Gastarif finden"}
      faqs={faqs}
    >
      {i18n.language === 'en' ? (
        <>

      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Heating costs often make up the largest part of a household's energy costs. Those who regularly <Link to="/gas" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">compare gas tariffs</Link> can save several hundred euros a year. Find out how to choose the optimal gas tariff and permanently reduce your costs.
      </p>

      <h2>Why is a gas tariff comparison worthwhile?</h2>
      <p>
        The energy market is constantly moving. Many households remain in the local basic supplier's tariff for years out of convenience. This loyalty can be expensive, as new customer tariffs from alternative providers often offer significantly cheaper conditions and attractive switching bonuses. A regular <strong>gas tariff comparison</strong> helps you keep an eye on price developments and ensure that you don't pay more for your natural gas than necessary.
      </p>

      <h2>How do I find the right gas tariff?</h2>
      <p>
        To find the right tariff, you only need two pieces of information: Your zip code and your annual gas consumption in kilowatt-hours (kWh). You can easily take the latter from your last annual statement. If you do not have a previous year's bill, you can use the following benchmarks for the <strong>gas consumption comparison</strong>:
      </p>
      <ul>
        <li>30 m² apartment: approx. 4,000 kWh</li>
        <li>50 m² apartment: approx. 7,000 kWh</li>
        <li>100 m² apartment: approx. 14,000 kWh</li>
        <li>Terraced / detached house: approx. 20,000 to 30,000 kWh</li>
      </ul>

      <h2>Which factors influence the gas price?</h2>
      <p>
        When comparing different <strong>gas tariffs</strong>, you will always encounter two central price components. It is important to know the difference to estimate the actual costs.
      </p>

      <h3>Unit price</h3>
      <p>
        The unit price (consumption price) is stated in cents per kilowatt-hour (ct/kWh). It indicates how much you pay for the actual amount of gas consumed. If you have high gas consumption, a tariff with a particularly low unit price is crucial for your savings.
      </p>

      <h3>Base price</h3>
      <p>
        The base price is a consumption-independent, fixed fee, which is mostly calculated monthly (e.g., 10 to 15 euros per month). It covers the costs for provision, the gas meter, and network usage. With low consumption (e.g., in a small apartment), a low base price is often more important than a minimally cheaper unit price.
      </p>

      <h3>Gas consumption</h3>
      <p>
        Depending on whether you only generate hot water, also heat, or even supply a whole house, your consumption changes drastically. Your individual consumption behavior determines whether a tariff with a high base price and low unit price is more worthwhile or vice versa.
      </p>

      <h3>State levies and network charges</h3>
      <p>
        In addition to the provider's procurement costs, the gas price is also influenced by state-determined price components and regulated network charges. The CO₂ pricing of fossil fuels is a cost factor that can affect gas prices for consumers. Information on regulatory frameworks and network charges is provided by the <a href="https://www.bundesnetzagentur.de" target="_blank" rel="noopener noreferrer" className="text-[#0047AB] dark:text-[#60a5fa] underline hover:text-[#003380]">Federal Network Agency</a>, among others.
      </p>

      <h2>How much does gas cost at 30,000 kWh?</h2>
      <p>
        Many homeowners wonder: "What are my <strong>30000 kWh gas costs</strong>?" The exact costs cannot be quantified across the board, as they depend on your current tariff. To calculate, simply multiply the annual consumption (30,000 kWh) by the unit price of your tariff and then add the annual base price (12 months × monthly base price).
      </p>
      <p>
        Example with a unit price of 10 cents/kWh and a base price of 15 euros per month:
        <br/><em>(30,000 kWh × € 0.10) + (12 × € 15) = € 3,000 + € 180 = € 3,180 per year.</em>
      </p>
      <p>
        Even a difference of a few cents in the unit price amounts to hundreds of euros a year with this volume, making a switch particularly lucrative.
      </p>

      <h2>Compare natural gas tariffs</h2>
      <p>
        When you compare <strong>natural gas tariffs</strong>, you should not only look at the pure price. Pay attention to the origin of the gas. In addition to classic natural gas, many suppliers now offer "eco-gas". With pure climate tariffs, conventional natural gas is usually supplied, but the CO2 emissions are compensated by climate protection projects. If you want to make a real contribution to the energy transition, you should look for tariffs with a real biogas share.
      </p>

      <h2>What should one look out for with a gas provider?</h2>
      <p>
        The cheapest price is worthless if the contract conditions are bad. Pay attention to the following criteria when selecting your new provider:
      </p>
      <ul>
        <li><strong>Price guarantee:</strong> Look for tariffs with a limited or full price guarantee of at least 12 months. It protects you from surprising price increases.</li>
        <li><strong>Contract term:</strong> Do not commit to a supplier for longer than 12 months to be able to react flexibly to the market.</li>
        <li><strong>Notice period:</strong> The period should be a maximum of four weeks to the end of the contract.</li>
        <li><strong>Bonuses and premiums:</strong> New customer bonuses often make the first year very cheap but are omitted in the second year. Check whether the tariff makes economic sense even without a bonus.</li>
      </ul>

      <h2>What you should have ready for a gas tariff comparison</h2>
      <p>
        To be able to compare tariffs quickly and accurately, you should have the following documents or information at hand:
      </p>
      <ul>
        <li><strong>Zip code:</strong> Since network usage charges vary regionally, your place of residence determines the available tariffs.</li>
        <li><strong>Annual consumption in kWh:</strong> You will find this on your last annual statement. Alternatively, you can use benchmarks based on living space.</li>
        <li><strong>Current provider &amp; tariff name:</strong> Helps with the direct comparison of your existing unit price (cents/kWh) and base price (euros/month).</li>
        <li><strong>Contract term &amp; notice period:</strong> So that you know by which desired date the switch can be carried out.</li>
      </ul>

      <h2>Switching gas providers – how it works</h2>
      <p>
        Once you have decided on a new tariff, the switching process is completely straightforward. As a rule, your new provider takes over the cancellation with your old supplier. You hardly have to worry about anything and your gas supply is legally guaranteed without interruption. For detailed instructions, read our article: <Link to="/ratgeber/gasanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Switching gas providers</Link>.
      </p>
      <p>
        If you are unsure about the tariff selection or do not want to carry out the switch yourself online, we are happy to offer you our <Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">personal tariff advice</Link>. We independently compare all conditions and find the best gas tariff for your individual situation.
      </p>

      <h2>Frequently asked questions about gas tariffs</h2>
      <div className="space-y-6 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-lg font-bold mt-0 mb-2">{faq.question}</h3>
            <p className="mb-0 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Start your gas comparison now</h3>
        <p className="mb-6">Use our free service and secure cheap gas prices.</p>
        <Link to="/gas">
          <Button variant="primary">Compare gas prices</Button>
        </Link>
      </div>

        </>
      ) : (
        <>
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
    </>
      )}
    </ArticleLayout>
  );
}
