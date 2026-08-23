import { Link } from 'react-router';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';
import { trackEvent } from '../../../lib/analytics';

export default function GrundversorgungAachenStromGas() {
  const article = articles.find(a => a.slug === 'grundversorgung-aachen-strom-gas')!;

  const handleCtaClick = (destination: string) => {
    trackEvent('service_cta_click', {
      service_type: 'grundversorgung',
      cta_location: 'grundversorgung_aachen_article',
      destination: destination
    });
  };

  const faqs = [
    {
      question: "Komme ich automatisch in die Grundversorgung?",
      answer: "Ja. Wenn Sie in eine neue Wohnung oder ein Haus einziehen und Strom oder Gas verbrauchen (z. B. durch Einschalten des Lichts), ohne vorher einen eigenen Vertrag abgeschlossen zu haben, kommt der Grundversorgungsvertrag automatisch durch die Entnahme von Energie zustande. Das ist gesetzlich in § 36 Abs. 1 des Energiewirtschaftsgesetzes (EnWG) geregelt."
    },
    {
      question: "Wie lange ist die Kündigungsfrist in der Grundversorgung?",
      answer: "Ein Grundversorgungsvertrag hat keine feste Laufzeit und kann jederzeit mit einer gesetzlichen Frist von zwei Wochen gekündigt werden. Dies ist in § 20 Abs. 1 der Stromgrundversorgungsverordnung (StromGVV) und der Gasgrundversorgungsverordnung (GasGVV) verankert. Die Kündigung bedarf der Textform (z. B. E-Mail oder Brief)."
    },
    {
      question: "Was ist der Unterschied zwischen Grundversorgung und Ersatzversorgung?",
      answer: "Die Grundversorgung ist ein unbefristetes Versorgungsverhältnis für Haushaltskunden. Die Ersatzversorgung ist eine gesetzliche Notversorgung, die einspringt, wenn ein Energiebezug nicht eindeutig einem Liefervertrag zugeordnet werden kann (z. B. bei einer plötzlichen Insolvenz des vorherigen Anbieters). Die Ersatzversorgung ist auf maximal drei Monate begrenzt. In dieser Zeit kann sie ohne Einhaltung einer Frist jederzeit durch den Abschluss eines neuen Vertrags beendet werden."
    },
    {
      question: "Kann ich jederzeit zu einem anderen Anbieter wechseln?",
      answer: "Ja, wenn Sie sich in der Grundversorgung befinden, können Sie diese mit einer Frist von zwei Wochen kündigen und zu einem anderen Tarif oder Anbieter wechseln. Beim regulären Wechsel übernimmt in der Regel Ihr neuer Anbieter die Kündigung beim Grundversorger als Serviceleistung."
    },
    {
      question: "Welche Daten brauche ich für einen Anbieterwechsel?",
      answer: "Für einen reibungslosen Wechsel benötigen Sie Ihren vollständigen Namen, die Lieferanschrift, die Zählernummer (zu finden auf Ihrem Strom- oder Gaszähler bzw. im Übergabeprotokoll), den aktuellen Zählerstand sowie Ihren geschätzten Jahresverbrauch. Wenn Sie bereits bei einem alternativen Anbieter sind, ist auch die Angabe der bisherigen Kundennummer hilfreich."
    }
  ];

  return (
    <ArticleLayout article={article} faqs={faqs}>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Wer eine neue Wohnung bezieht oder vergisst, sich rechtzeitig um einen passenden Strom- oder Gastarif zu kümmern, steht nicht im Dunkeln. Das Energiewirtschaftsgesetz stellt sicher, dass jeder Haushalt zuverlässig mit Energie versorgt wird. Doch Vorsicht: Dieser Schutz ist oft mit hohen Kosten verbunden. Erfahren Sie hier alles Wichtige über die Grundversorgung, die gesetzlichen Kündigungsfristen und wie Sie einfach in einen günstigeren Tarif wechseln können.
      </p>

      <h2>Was bedeutet Grundversorgung?</h2>
      <p>
        Unter der Grundversorgung versteht man die gesetzliche Pflicht von Energieversorgungsunternehmen, Haushaltskunden im Rahmen der allgemeinen Bedingungen und Preise mit Strom und Gas zu beliefern. Die rechtliche Grundlage hierfür bildet <strong>§ 36 Abs. 1 des Energiewirtschaftsgesetzes (EnWG)</strong>. 
      </p>
      <p>
        Ein Haushaltskunde ist per Definition jeder Endverbraucher, der Energie überwiegend für den Eigenverbrauch im Haushalt oder für den einen Jahresverbrauch von 10.000 kWh nicht übersteigenden beruflichen, landwirtschaftlichen oder gewerblichen Zweck bezieht. 
      </p>
      <p>
        Der Vertrag über die Grundversorgung kommt automatisch zustande, sobald Sie in einer Wohnung Strom oder Gas verbrauchen (konkludentes Handeln), ohne dass Sie explizit einen Vertrag mit einem bestimmten Anbieter unterzeichnet haben.
      </p>

      <h3>Gegenüberstellung: Grundversorgung, Ersatzversorgung und Sondervertrag</h3>
      <p>
        Es wird rechtlich streng zwischen verschiedenen Vertragsarten unterschieden. Jede Form hat spezifische Vor- und Nachteile hinsichtlich Flexibilität und Preisgestaltung. Die folgende Tabelle bietet eine detaillierte Übersicht:
      </p>

      <div className="overflow-x-auto my-8 border border-slate-200 dark:border-white/10 rounded-xl">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-white/10 text-sm md:text-base">
          <thead className="bg-slate-50 dark:bg-slate-800/50 font-heading">
            <tr>
              <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white">Merkmal</th>
              <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white">Grundversorgung</th>
              <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white">Ersatzversorgung</th>
              <th className="px-4 py-3 text-left font-bold text-slate-900 dark:text-white">Sondervertrag</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-slate-700 dark:text-slate-300">
            <tr>
              <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">Zustandekommen</td>
              <td className="px-4 py-3">Automatisch durch Stromentnahme/Gasschnitt (konkludent) oder förmliche Anmeldung.</td>
              <td className="px-4 py-3">Automatisch bei fehlendem Liefervertrag (z.B. nach einer Anbieterinsolvenz).</td>
              <td className="px-4 py-3">Durch aktiven Abschluss eines Tarifs (z. B. Ökostrom) online oder schriftlich.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">Vertragslaufzeit</td>
              <td className="px-4 py-3">Unbefristet, keine feste Mindestlaufzeit.</td>
              <td className="px-4 py-3">Auf maximal 3 Monate begrenzt (gesetzlich geregelt).</td>
              <td className="px-4 py-3">Häufig 12 bis 24 Monate feste Laufzeit.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">Kündigungsfrist</td>
              <td className="px-4 py-3">Jederzeit 2 Wochen (§ 20 StromGVV / GasGVV).</td>
              <td className="px-4 py-3">Keine Frist. Jederzeit fristlos durch neuen Vertrag beendbar.</td>
              <td className="px-4 py-3">Meist 1 Monat zum Ende der vereinbarten Laufzeit.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">Preisentwicklung</td>
              <td className="px-4 py-3">Öffentlich bekanntgegeben, oft teurer als Sondertarife des gleichen Anbieters.</td>
              <td className="px-4 py-3">Gesondert kalkuliert, oft tagesaktuelle Preisschwankungen.</td>
              <td className="px-4 py-3">Oft günstiger, häufig mit fester Preisgarantie während der Laufzeit.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Wie kann man die Grundversorgung kündigen?</h2>
      <p>
        Die Kündigung der Grundversorgung ist verbraucherfreundlich und einfach gestaltet. Nach <strong>§ 20 Abs. 1 der Stromgrundversorgungsverordnung (StromGVV)</strong> und der <strong>Gasgrundversorgungsverordnung (GasGVV)</strong> beträgt die Kündigungsfrist einheitlich <strong>zwei Wochen</strong>. 
      </p>
      <p>
        Hierbei sind folgende Punkte wichtig:
      </p>
      <ul>
        <li><strong>Textform erforderlich:</strong> Die Kündigung muss nicht zwingend per handschriftlichem Brief erfolgen. Eine Kündigung in Textform (z. B. per E-Mail oder über ein Online-Kündigungsformular des Versorgers) ist ausreichend und rechtlich bindend.</li>
        <li><strong>Automatischer Wechselprozess:</strong> Wenn Sie zu einem anderen Strom- oder Gasanbieter wechseln, müssen Sie die Kündigung in der Regel nicht selbst durchführen. Ihr neuer Anbieter übernimmt diesen Schritt im Zuge des Wechselantrags als kostenfreien Service für Sie. Der Wechselprozess läuft vollautomatisch im Hintergrund ab.</li>
        <li><strong>Sonderkündigung bei Auszug:</strong> Wenn Sie aus Ihrer Wohnung ausziehen, können Sie die Grundversorgung mit einer Frist von zwei Wochen zum Auszugstermin kündigen, um eine Doppelzahlung zu vermeiden.</li>
      </ul>

      <h2>Welche Angaben werden für einen Wechsel benötigt?</h2>
      <p>
        Wenn Sie aus der teuren Grundversorgung in einen günstigeren Sondertarif wechseln möchten, ist der Aufwand minimal. Sie müssen keine Leitungen umbauen lassen, und die physische Versorgung ist während des Übergangs gesetzlich lückenlos garantiert. Folgende Angaben sollten Sie bereithalten:
      </p>
      <ol>
        <li><strong>Persönliche Daten:</strong> Vollständiger Name und Geburtsdatum des Vertragspartners.</li>
        <li><strong>Lieferanschrift:</strong> Ihre genaue Adresse in Aachen (ggf. mit Angabe des Stockwerks).</li>
        <li><strong>Zählernummer:</strong> Die Nummer Ihres Strom- oder Gaszählers. Diese finden Sie direkt auf dem Gehäuse des Zählers (oft im Keller oder Flur) sowie im Übergabeprotokoll Ihrer Wohnung.</li>
        <li><strong>Aktueller Zählerstand:</strong> Der Zählerstand am Tag des Wechsels oder der Schlüsselübergabe.</li>
        <li><strong>Geschätzter Jahresverbrauch:</strong> In Kilowattstunden (kWh). Einen Richtwert finden Sie auf alten Rechnungen. Falls Sie diese nicht zur Hand haben (z. B. bei Erstbezug), können Sie sich an Durchschnittswerten orientieren (z. B. ca. 1.500 kWh für einen Single-Haushalt oder 3.500 kWh für eine Familie).</li>
        <li><strong>Wunschtermin:</strong> Das Datum, an dem die Belieferung durch den neuen Anbieter starten soll.</li>
      </ol>

      <h2>Grundversorgung beim Umzug nach Aachen</h2>
      <p>
        Ein Umzug ist der ideale Zeitpunkt, um die Energiekosten auf den Prüfstand zu stellen. Wenn Sie in Aachen Strom oder Gas nutzen, ohne sich vorher anzumelden, rutschen Sie automatisch in den Grundversorgungstarif der STAWAG. 
      </p>
      <p>
        Um unnötige Ausgaben von Anfang an zu vermeiden, sollten Sie bereits vier bis sechs Wochen vor dem Umzugstermin Tarife vergleichen und die Anmeldung anstoßen. In unserem ausführlichen <Link to="/ratgeber/umzug-aachen-strom-gas-internet" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Umzugs-Ratgeber für Aachen</Link> haben wir eine praktische Checkliste und wichtige gesetzliche Regelungen (wie Ihr Sonderkündigungsrecht bei Umzug nach § 41b EnWG) für Sie zusammengefasst.
      </p>

      <h2>Strom- und Gastarife in Aachen vergleichen</h2>
      <p>
        Durch den Wechsel aus der Grundversorgung in einen optimierten Sondervertrag können Haushalte in Aachen jährlich mehrere hundert Euro sparen. Da die Preise der Grundversorgung im Vergleich zu alternativen Anbietern meist höher angesetzt sind, lohnt sich ein regelmäßiger Vergleich.
      </p>
      <p>
        Nutzen Sie unsere kostenfreien und neutralen Vergleichswerkzeuge:
      </p>
      <ul>
        <li>Führen Sie einen schnellen <Link to="/electricity" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Stromvergleich für Aachen</Link> durch (Einzelheiten zum Ablauf liefert unser <Link to="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Ratgeber zum Anbieterwechsel</Link>).</li>
        <li>Nutzen Sie den <Link to="/gas" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Gasvergleich für Aachen</Link>, um Heizkosten zu reduzieren (wertvolle Informationen bieten unser <Link to="/ratgeber/gasvergleich" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Gasvergleich-Ratgeber</Link> sowie unser <Link to="/ratgeber/gasanbieter-wechseln" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Ratgeber zum Anbieterwechsel</Link>).</li>
        <li>Informieren Sie sich über unsere lokale <Link to="/tarifberatung-aachen" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Tarifberatung vor Ort in Aachen</Link>.</li>
      </ul>
      <p>
        Haben Sie Fragen zum Wechselprozess oder benötigen Hilfe bei der Kündigung Ihres alten Vertrages? Nehmen Sie einfach direkt <Link to="/contact" className="text-[#0047AB] dark:text-[#f0a83f] underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 font-semibold">Kontakt mit uns auf</Link>. Wir unterstützen Sie gerne unverbindlich.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Jetzt aus der teuren Grundversorgung wechseln</h3>
        <p className="mb-6">
          Lassen Sie kein Geld liegen. Wir prüfen Ihre aktuellen Strom- und Gasverträge in Aachen, ermitteln Ihr Sparpotenzial und übernehmen den gesamten Wechselprozess für Sie – vollkommen kostenfrei und stressfrei.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" onClick={() => handleCtaClick('/contact')}>
            <Button variant="primary">Kostenfreie Beratung anfordern</Button>
          </Link>
          <Link to="/tarifberatung-aachen" onClick={() => handleCtaClick('/tarifberatung-aachen')}>
            <Button variant="outline">Tarifberatung Details</Button>
          </Link>
        </div>
      </div>

      <hr className="my-8 border-slate-200 dark:border-white/10" />

      {/* Visibly Rendered FAQs for SEO/User readability */}
      <h2 className="mt-8 mb-4">Häufig gestellte Fragen (FAQ)</h2>
      <div className="space-y-6 mb-10">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-slate-100 dark:border-white/5 pb-4">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{faq.question}</h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">{faq.answer}</p>
          </div>
        ))}
      </div>

      <hr className="my-8 border-slate-200 dark:border-white/10" />

      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Verbraucher- und Regulierungsportale</h3>
      <ul className="text-sm text-slate-500 dark:text-slate-400 list-none pl-0 space-y-2">
        <li>
          - <strong>Bundesnetzagentur:</strong> Informationen zur Grund- und Ersatzversorgung unter <a href="https://www.bundesnetzagentur.de/DE/Vportal/Energie/Vertragsarten/Grundversorgung/start.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0047AB]">www.bundesnetzagentur.de</a>
        </li>
        <li>
          - <strong>Gesetze im Internet:</strong> Stromgrundversorgungsverordnung (StromGVV) § 20 unter <a href="https://www.gesetze-im-internet.de/stromgvv/__20.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0047AB]">www.gesetze-im-internet.de</a>
        </li>
        <li>
          - <strong>Verbraucherzentrale:</strong> Ratgeber zu Tarifen, Grundversorgung und Sonderverträgen unter <a href="https://www.verbraucherzentrale.de/wissen/energie/preise-tarife-anbieterwechsel/grundversorgung-oder-sondervertrag-vertraege-bei-strom-und-gas-10912" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0047AB]">www.verbraucherzentrale.de</a>
        </li>
        <li>
          - <strong>STAWAG:</strong> Details zu Preisen der Grund- und Ersatzversorgung unter <a href="https://www.stawag.de/produkte/grund-und-ersatzversorgung" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0047AB]">www.stawag.de</a>
        </li>
      </ul>

      <p className="text-xs text-slate-400 mt-8 italic">
        Wichtiger Hinweis: Dieser Ratgeber dient ausschließlich der allgemeinen Information und Orientierung. Er stellt keine Rechtsberatung dar. Die gesetzlichen und tariflichen Bedingungen können sich ändern. Bitte prüfen Sie die aktuellen Vertragsdetails direkt bei Ihrem jeweiligen Grundversorger. Zuletzt geprüft: August 2026.
      </p>
    </ArticleLayout>
  );
}
