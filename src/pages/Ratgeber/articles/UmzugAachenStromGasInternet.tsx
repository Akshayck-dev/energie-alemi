import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';
import { trackEvent } from '../../../lib/analytics';

export default function UmzugAachenStromGasInternet() {
  const { i18n } = useTranslation();
  const article = articles.find(a => a.slug === 'umzug-aachen-strom-gas-internet')!;

  const handleCtaClick = (destination: string) => {
    trackEvent('service_cta_click', {
      service_type: 'umzug_tarifberatung',
      cta_location: 'ratgeber_umzug_aachen',
      destination: destination,
      page_path: window.location.pathname
    });
  };

  return (
    <ArticleLayout article={article}>
      {i18n.language === 'en' ? (
        <>

      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Moving to a new city like Aachen brings many changes. Besides packing boxes and changing your address, you should not neglect registering electricity, gas, and the internet. Timely planning protects you from unnecessary costs and ensures that the lights are on, the heating works, and the WiFi functions on move-in day.
      </p>

      <h2>1. Practical checklist for moving</h2>
      <p>
        To ensure a smooth transition, a structured process is recommended. Use this short overview for your scheduling:
      </p>
      <ul>
        <li><strong>4 to 6 weeks before moving:</strong> Check the cancellation and portability options of your existing contracts for electricity, gas, and internet.</li>
        <li><strong>2 weeks before moving:</strong> Register your internet connection for the new address, as connections often require several weeks of lead time.</li>
        <li><strong>On the day of the key handover:</strong> Note all meter readings for electricity and gas in the handover protocol and photograph the meters as proof.</li>
        <li><strong>Within the first few days after moving in:</strong> Register electricity and, if applicable, gas with the chosen provider to avoid remaining in the expensive basic supply.</li>
      </ul>

      <h2>2. Registering electricity in Aachen: What to look out for?</h2>
      <p>
        As soon as you turn on the first light bulb or use electricity, you draw energy. If you do not decide on a tariff in advance, you automatically fall into the so-called <Link to="/ratgeber/grundversorgung-aachen-strom-gas" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Basic Supply</Link>. In Aachen, the <i>STAWAG (Stadtwerke Aachen AG)</i> is the local basic supplier.
      </p>
      <p>
        The basic supply offers maximum flexibility (it can legally be canceled at any time with a notice period of two weeks), but is usually noticeably more expensive compared to special tariffs. Therefore, a timely <Link to="/electricity" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Electricity Comparison</Link> is worthwhile to find a suitable and cheaper tariff. You can read exactly how the <Link to="/ratgeber/strom-anmelden-umzug" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">electricity registration process when moving</Link> works in our guide.
      </p>
      <h3>Special right of termination when moving</h3>
      <p>
        According to § 41b Paragraph 4 of the Energy Industry Act (EnWG), you can cancel your current electricity contract when moving with a notice period of six weeks. However, this special right of termination only applies if your previous supplier cannot offer you a comparable contract under the same conditions at the new address. If they offer to supply you at the new residence, the contract continues unchanged.
      </p>

      <h2>3. Registering gas when using it in the new home</h2>
      <p>
        If your new apartment in Aachen has gas floor heating or a gas connection, the same principle applies here as for electricity. Without your own registration, STAWAG takes over the basic supply.
      </p>
      <p>
        Due to the often higher consumption when heating, the savings potential with gas is particularly high. Ideally, carry out a neutral <Link to="/gas" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Gas Comparison</Link> before moving in by <Link to="/ratgeber/gasvergleich" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">comparing gas tariffs</Link> to avoid high advance payments in the basic supply. Our <Link to="/ratgeber/gas-anmelden-umzug" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Gas Registration Guide</Link> provides helpful details on the process.
      </p>

      <h2>4. Registering internet: Availability and deadlines</h2>
      <p>
        Unlike the energy supply, there is no automatic "basic supply" for the internet – if you don't take care of it, you stay offline. 
      </p>
      <h3>Taking the existing contract with you (§ 60 TKG)</h3>
      <p>
        According to the Telecommunications Act (TKG), providers are obliged to continue the contractually agreed service at the new residence without additional costs and without extending the minimum contract term – provided that the transmission is technically possible there.
      </p>
      <p>
        If the provider cannot provide the service at the new residence or can only provide it with a lower bandwidth, you have a <strong>special right of termination with a notice period of one month</strong> according to § 60 Paragraph 2 TKG. The notice period begins on the day of the actual move at the earliest.
      </p>
      <p>
        We recommend that you check the availability at your new address in Aachen in good time and initiate the contract changeover at least four weeks in advance. Use our <Link to="/internet" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Internet Comparison</Link> to determine DSL, cable, or fiber optic options for Aachen.
      </p>

      <h2>5. What data should you prepare?</h2>
      <p>
        For the smooth registration of the contracts, you should have the following documents and details ready:
      </p>
      <ul>
        <li><strong>Your new address</strong> (including floor details or apartment number)</li>
        <li><strong>The official move-in date</strong> (usually the start of the rental agreement)</li>
        <li><strong>Meter number (Electricity &amp; Gas):</strong> You will find this directly on the meter in the basement or hallway, as well as frequently in the handover protocol.</li>
        <li><strong>Meter reading on the day of key handover:</strong> Note this down precisely.</li>
        <li><strong>Existing contract data:</strong> Customer number and name of the previous provider, if you wish to cancel or take contracts with you.</li>
      </ul>

      <h2>6. Common mistakes you should avoid</h2>
      <p>
        Many people who move make mistakes that lead to unnecessary costs. Pay attention to the following:
      </p>
      <ul>
        <li><strong>Premature cancellation of the internet contract:</strong> Do not cancel yourself if the provider can provide the service at the new address. Otherwise, you violate the contract term.</li>
        <li><strong>Missing meter photos:</strong> Without documented meter readings, you risk being billed for the previous tenant's consumption values.</li>
        <li><strong>Relying on verbal promises:</strong> Always get special agreements or cancellation confirmations in writing or by email.</li>
      </ul>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">We help you with a stress-free provider switch</h3>
        <p className="mb-6">
          Our service takes the paperwork off your hands. We compare tariffs for electricity, gas, and internet in Aachen and support you free of charge with registration and switching.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" onClick={() => handleCtaClick('/contact')}>
            <Button variant="primary">Request free advice</Button>
          </Link>
          <Link to="/contact" onClick={() => handleCtaClick('/contact')}>
            <Button variant="outline">Tariff Advice Details</Button>
          </Link>
        </div>
      </div>

      <hr className="my-8 border-slate-200 dark:border-white/10" />

      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Consumer and Regulatory Portals</h3>
      <ul className="text-sm text-slate-500 dark:text-slate-400 list-none pl-0">
        <li>
          - <strong>Federal Network Agency:</strong> Information on consumer rights when moving at <a href="https://www.bundesnetzagentur.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0047AB]">www.bundesnetzagentur.de</a>
        </li>
        <li>
          - <strong>Consumer Center NRW:</strong> Helpful guides to switching electricity and gas providers at <a href="https://www.verbraucherzentrale.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0047AB]">www.verbraucherzentrale.de</a>
        </li>
      </ul>

      <p className="text-xs text-slate-400 mt-8 italic">
        Important Note: This guide is intended solely for general information and orientation. It does not constitute legal advice. The legal regulations were last carefully checked on August 11, 2026.
      </p>

        </>
      ) : (
        <>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Ein Umzug in eine neue Stadt wie Aachen bringt viele Veränderungen mit sich. Neben dem Kistenpacken und der Adressänderung sollten Sie die Anmeldung von Strom, Gas und Internet nicht vernachlässigen. Eine rechtzeitige Planung schützt Sie vor unnötigen Kosten und sorgt dafür, dass am Einzugstag Licht brennt, die Heizung läuft und das WLAN funktioniert.
      </p>

      <h2>1. Praktische Checkliste für den Umzug</h2>
      <p>
        Damit der Übergang reibungslos verläuft, empfiehlt sich ein strukturierter Ablauf. Nutzen Sie diese kurze Übersicht für Ihre Zeitplanung:
      </p>
      <ul>
        <li><strong>4 bis 6 Wochen vor dem Umzug:</strong> Prüfen Sie die Kündigungs- und Mitnahmeoptionen Ihrer bestehenden Verträge für Strom, Gas und Internet.</li>
        <li><strong>2 Wochen vor dem Umzug:</strong> Melden Sie Ihren Internetanschluss für die neue Adresse an, da Schaltungen oft mehrere Wochen Vorlaufzeit benötigen.</li>
        <li><strong>Am Tag der Schlüsselübergabe:</strong> Notieren Sie alle Zählerstände für Strom und Gas im Übergabeprotokoll und fotografieren Sie die Zähler als Beleg.</li>
        <li><strong>Innerhalb der ersten Tage nach dem Einzug:</strong> Melden Sie Strom und ggf. Gas beim gewählten Anbieter an, um nicht in der teuren Grundversorgung zu verbleiben.</li>
      </ul>

      <h2>2. Strom anmelden in Aachen: Was ist zu beachten?</h2>
      <p>
        Sobald Sie die erste Glühbirne einschalten oder Strom nutzen, beziehen Sie Energie. Wenn Sie sich nicht vorab für einen Tarif entscheiden, fallen Sie automatisch in die sogenannte <Link to="/ratgeber/grundversorgung-aachen-strom-gas" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Grundversorgung</Link>. In Aachen ist die <i>STAWAG (Stadtwerke Aachen AG)</i> der lokale Grundversorger.
      </p>
      <p>
        Die Grundversorgung bietet maximale Flexibilität (sie ist gesetzlich jederzeit mit einer Frist von zwei Wochen kündbar), ist jedoch im Vergleich zu Sondertarifen meist spürbar teurer. Daher lohnt sich ein rechtzeitiger <Link to="/electricity" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Stromvergleich</Link>, um einen passenden und günstigeren Tarif zu finden. Wie genau der <Link to="/ratgeber/strom-anmelden-umzug" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Ablauf der Stromanmeldung beim Umzug</Link> vonstattengeht, lesen Sie in unserem Ratgeber.
      </p>
      <h3>Sonderkündigungsrecht bei Umzug</h3>
      <p>
        Nach § 41b Abs. 4 des Energiewirtschaftsgesetzes (EnWG) können Sie Ihren laufenden Stromvertrag bei einem Umzug mit einer Frist von sechs Wochen kündigen. Dieses Sonderkündigungsrecht gilt jedoch nur, wenn Ihr bisheriger Lieferant Ihnen an der neuen Adresse keinen vergleichbaren Vertrag zu denselben Konditionen anbieten kann. Bietet er Ihnen die Belieferung am neuen Wohnort an, läuft der Vertrag unverändert weiter.
      </p>

      <h2>3. Gas anmelden bei Nutzung im neuen Heim</h2>
      <p>
        Falls Ihre neue Wohnung in Aachen über eine Gasetagenheizung oder einen Gasanschluss verfügt, gilt hier das gleiche Prinzip wie beim Strom. Ohne eigene Anmeldung übernimmt die STAWAG die Grundversorgung.
      </p>
      <p>
        Aufgrund des oft höheren Verbrauchs beim Heizen ist das Sparpotenzial beim Gas besonders groß. Führen Sie idealerweise vor dem Einzug einen neutralen <Link to="/gas" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Gasvergleich</Link> durch, indem Sie die <Link to="/ratgeber/gasvergleich" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Gastarife vergleichen</Link>, um hohe Vorauszahlungen in der Grundversorgung zu vermeiden. Hilfreiche Details zum Ablauf liefert unser <Link to="/ratgeber/gas-anmelden-umzug" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Ratgeber zur Gasanmeldung beim Umzug</Link>.
      </p>

      <h2>4. Internet anmelden: Verfügbarkeit und Fristen</h2>
      <p>
        Im Gegensatz zur Energieversorgung gibt es beim Internet keine automatische „Grundversorgung“ – wer sich nicht kümmert, bleibt offline. 
      </p>
      <h3>Mitnahme des bestehenden Vertrags (§ 60 TKG)</h3>
      <p>
        Nach dem Telekommunikationsgesetz (TKG) sind Anbieter verpflichtet, die vertraglich vereinbarte Leistung auch am neuen Wohnsitz ohne zusätzliche Kosten und ohne Verlängerung der Mindestvertragslaufzeit weiterzuführen – vorausgesetzt, die Übertragung ist dort technisch möglich.
      </p>
      <p>
        Kann der Anbieter die Leistung am neuen Wohnort nicht oder nur mit einer geringeren Bandbreite zur Verfügung stellen, haben Sie nach § 60 Abs. 2 TKG ein <strong>Sonderkündigungsrecht mit einer Frist von einem Monat</strong>. Die Frist beginnt frühestens mit dem Tag des tatsächlichen Umzugs.
      </p>
      <p>
        Wir empfehlen Ihnen, rechtzeitig die Verfügbarkeit an Ihrer neuen Adresse in Aachen zu prüfen und die Vertragsumstellung mindestens vier Wochen im Voraus anzustoßen. Nutzen Sie hierzu unseren <Link to="/internet" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Internetvergleich</Link>, um DSL-, Kabel- oder Glasfaseroptionen für Aachen zu ermitteln.
      </p>

      <h2>5. Welche Daten sollten Sie vorbereiten?</h2>
      <p>
        Für die reibungslose Anmeldung der Verträge sollten Sie folgende Dokumente und Details bereithalten:
      </p>
      <ul>
        <li><strong>Ihre neue Anschrift</strong> (inklusive Etagenangabe oder Wohnungsnummer)</li>
        <li><strong>Das offizielle Einzugsdatum</strong> (in der Regel der Mietvertragsbeginn)</li>
        <li><strong>Zählernummer (Strom &amp; Gas):</strong> Diese finden Sie direkt auf dem Zähler im Keller oder Flur sowie häufig im Übergabeprotokoll.</li>
        <li><strong>Zählerstand am Tag der Schlüsselübergabe:</strong> Notieren Sie diesen präzise.</li>
        <li><strong>Bestehende Vertragsdaten:</strong> Kundennummer und Name des bisherigen Anbieters, falls Sie Verträge kündigen oder mitnehmen möchten.</li>
      </ul>

      <h2>6. Häufige Fehler, die Sie vermeiden sollten</h2>
      <p>
        Viele Umziehende machen Fehler, die zu unnötigen Kosten führen. Achten Sie auf Folgendes:
      </p>
      <ul>
        <li><strong>Voreilige Kündigung des Internetvertrags:</strong> Kündigen Sie nicht selbst, wenn der Anbieter die Leistung an der neuen Adresse erbringen kann. Andernfalls verletzen Sie die Vertragslaufzeit.</li>
        <li><strong>Fehlende Zählerfotos:</strong> Ohne dokumentierte Zählerstände riskieren Sie, dass Ihnen Verbrauchswerte des Vormieters in Rechnung gestellt werden.</li>
        <li><strong>Vertrauen auf mündliche Zusagen:</strong> Lassen Sie sich Sondervereinbarungen oder Kündigungsbestätigungen stets schriftlich oder per E-Mail geben.</li>
      </ul>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Wir helfen Ihnen beim stressfreien Anbieterwechsel</h3>
        <p className="mb-6">
          Unser Service nimmt Ihnen den Papierkram ab. Wir vergleichen Tarife für Strom, Gas und Internet in Aachen und unterstützen Sie kostenfrei bei der Anmeldung und dem Wechsel.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" onClick={() => handleCtaClick('/contact')}>
            <Button variant="primary">Kostenfreie Beratung anfordern</Button>
          </Link>
          <Link to="/contact" onClick={() => handleCtaClick('/contact')}>
            <Button variant="outline">Tarifberatung Details</Button>
          </Link>
        </div>
      </div>

      <hr className="my-8 border-slate-200 dark:border-white/10" />

      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Verbraucher- und Regulierungsportale</h3>
      <ul className="text-sm text-slate-500 dark:text-slate-400 list-none pl-0">
        <li>
          - <strong>Bundesnetzagentur:</strong> Informationen zu Verbraucherrechten bei Umzug unter <a href="https://www.bundesnetzagentur.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0047AB]">www.bundesnetzagentur.de</a>
        </li>
        <li>
          - <strong>Verbraucherzentrale NRW:</strong> Hilfreiche Leitfäden zum Strom- und Gasanbieterwechsel unter <a href="https://www.verbraucherzentrale.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0047AB]">www.verbraucherzentrale.de</a>
        </li>
      </ul>

      <p className="text-xs text-slate-400 mt-8 italic">
        Wichtiger Hinweis: Dieser Ratgeber dient ausschließlich der allgemeinen Information und Orientierung. Er stellt keine Rechtsberatung dar. Die gesetzlichen Regelungen wurden zuletzt am 11. August 2026 sorgfältig überprüft.
      </p>
    </>
      )}
    </ArticleLayout>
  );
}
