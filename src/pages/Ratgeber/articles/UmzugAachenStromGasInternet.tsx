import { Link } from 'react-router';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';
import { trackEvent } from '../../../lib/analytics';

export default function UmzugAachenStromGasInternet() {
  const article = articles.find(a => a.slug === 'umzug-aachen-strom-gas-internet')!;

  const handleCtaClick = (destination: string) => {
    trackEvent('service_cta_click', {
      service_type: 'umzug_tarifberatung',
      cta_location: 'ratgeber_umzug_aachen',
      destination: destination
    });
  };

  return (
    <ArticleLayout article={article}>
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
        Die Grundversorgung bietet maximale Flexibilität (sie ist gesetzlich jederzeit mit einer Frist von zwei Wochen kündbar), ist jedoch im Vergleich zu Sondertarifen meist spürbar teurer. Daher lohnt sich ein rechtzeitiger <Link to="/electricity" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Stromvergleich</Link>, um einen passenden und günstigeren Tarif zu finden.
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
        Aufgrund des oft höheren Verbrauchs beim Heizen ist das Sparpotenzial beim Gas besonders groß. Führen Sie idealerweise vor dem Einzug einen neutralen <Link to="/gas" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Gasvergleich</Link>, um hohe Vorauszahlungen in der Grundversorgung zu vermeiden.
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
          <Link to="/tarifberatung-aachen" onClick={() => handleCtaClick('/tarifberatung-aachen')}>
            <Button variant="outline">Tarifberatung Aachen Details</Button>
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
    </ArticleLayout>
  );
}
