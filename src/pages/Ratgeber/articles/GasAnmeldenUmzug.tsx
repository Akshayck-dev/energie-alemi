import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function GasAnmeldenUmzug() {
  const { i18n } = useTranslation();
  const article = articles.find(a => a.slug === 'gas-anmelden-umzug')!;

  const faqsDe = [
    {
      question: "Muss ich Gas anmelden, wenn die Wohnung eine Zentralheizung hat?",
      answer: "Meist nicht. Läuft die Anlage über Vermieter oder Hausverwaltung, werden die Heizkosten über die Nebenkosten abgerechnet. Fragen Sie vor dem Einzug nach."
    },
    {
      question: "Kann ich meinen bisherigen Gasvertrag mitnehmen?",
      answer: "Häufig ja, wenn der Anbieter die neue Adresse beliefert und der Vertrag die Fortführung vorsieht. Maßgeblich sind die individuellen Vertragsbedingungen."
    },
    {
      question: "Welche Zählerstände brauche ich?",
      answer: "Notieren Sie den Endstand der alten und den Anfangsstand der neuen Lieferstelle. Zählernummer und Foto helfen, beide Werte eindeutig zuzuordnen."
    },
    {
      question: "Wer kündigt den alten Gasvertrag?",
      answer: "Bei einem regulären Anbieterwechsel übernimmt häufig der neue Lieferant die Kündigung. Bei einem Umzug sollten Sie die Meldung selbst kontrollieren, weil zusätzlich Lieferstelle, Datum und neue Anschrift zugeordnet werden müssen."
    },
  ];
  const faqsEn = [
    {
      question: "Do I have to register gas if the apartment has central heating?",
      answer: "Usually not. If the system is run by the landlord or property management, heating costs are billed via additional costs. Ask before moving in."
    },
    {
      question: "Can I take my current gas contract with me?",
      answer: "Often yes, if the provider supplies the new address and the contract allows continuation. The individual contract terms are decisive."
    },
    {
      question: "Which meter readings do I need?",
      answer: "Note the final reading of the old and the initial reading of the new delivery point. Meter number and photo help assign both values clearly."
    },
    {
      question: "Who cancels the old gas contract?",
      answer: "With a regular provider switch, the new supplier often handles the cancellation. In the case of a move, you should control the notification yourself, because delivery point, date, and new address must additionally be assigned."
    },
  ];
  const faqs = i18n.language === 'en' ? faqsEn : faqsDe;

  return (
    <ArticleLayout 
      article={article} 
      customH1={i18n.language === 'en' ? "Register Gas when Moving: Contract, Meter and Deadlines" : "Gas anmelden beim Umzug: Vertrag, Zähler und Fristen"}
      faqs={faqs}
    >
      {i18n.language === 'en' ? (
        <>

      <h2>Before moving in, clarify who holds the gas contract</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        With their own gas boiler, tenants or owners usually sign a gas contract themselves. With central heating, however, the contract often runs via the landlord or property management; the costs then appear in the utility bill. Therefore, first clarify whether the new apartment even has its own gas delivery point.
      </p>
      <p>
        If a separate contract exists, you should inform the current provider about the move early on. Whether the contract is continued at the new address, terminated, or replaced by a new tariff depends on the contract, delivery options, and the moving clause.
      </p>
      <h2>You need this data</h2>
      <h2>Address of the old and new delivery point;</h2>
      <h2>Move-out and move-in date;</h2>
      <h2>Gas meter numbers and meter readings;</h2>
      <h2>Customer number and contract data;</h2>
      <h2>Desired delivery start date;</h2>
      <h2>Last annual statement or expected annual consumption;</h2>
      <p>
        New billing address.
      </p>
      <p>
        Photograph the meter when the keys are handed over and transfer the reading into the protocol. The photo should clearly document the number, reading, and ideally the date.
      </p>
      <h2>Take your gas contract with you or compare anew?</h2>
      <p>
        Many special contracts can be continued at the new residence, provided the provider can deliver there. Nevertheless, check the conditions: The tariff is not automatically the cheapest choice for the new living situation. With a larger area, different heating technology, or a better insulation standard, the expected consumption can also change.
      </p>
      <p>
        If the previous provider cannot supply the new delivery point, termination may be considered depending on the contract. Do not rely on assumptions; get the end of delivery and final invoice confirmed in writing.
      </p>
      <h2>What happens without a chosen gas tariff?</h2>
      <p>
        If gas is drawn at a separate gas delivery point, the legally secured supply by the local basic supplier regularly takes effect. This prevents a supply gap. Nevertheless, price and conditions should be compared promptly with available special tariffs.
      </p>
      <p>
        With central heating, residents usually do not have to register their own supply contract. Here the landlord or the community decides on the gas supplier.
      </p>
      <h2>Practical Moving Checklist</h2>
      <p>
        Clarify heating type and separate gas delivery point.
      </p>
      <p>
        Check existing contract including moving clause.
      </p>
      <p>
        Inform provider early about both addresses.
      </p>
      <p>
        Compare tariff for the new consumption.
      </p>
      <p>
        Photograph meter reading at move-out and move-in.
      </p>
      <p>
        Check delivery confirmation and later the final invoice.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Consulting & Service</h3>
        <p className="mb-6">Energie Alemi checks your gas contract and compares suitable tariffs for the new address in Aachen and the region.</p>
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
          <li><Link to="/ratgeber/umzug-aachen-strom-gas-internet" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Moving to Aachen Electricity Gas Internet</Link></li>
          <li><Link to="/ratgeber/strom-anmelden-umzug" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Register Electricity when Moving</Link></li>
          <li><Link to="/ratgeber/gasanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Switching Gas Providers</Link></li>
          <li><Link to="/gasanbieter-aachen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gas Providers Aachen</Link></li>
          <li><Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Contact</Link></li>
        </ul>
      </div>

        </>
      ) : (
        <>
      <h2>Vor dem Umzug muss geklärt werden, wer den Gasvertrag hält</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Bei einer eigenen Gastherme schließen Mieter oder Eigentümer meist selbst einen Gasvertrag ab. Bei einer Zentralheizung läuft der Vertrag dagegen häufig über Vermieter oder Hausverwaltung; die Kosten erscheinen dann in der Nebenkostenabrechnung. Klären Sie deshalb zuerst, ob die neue Wohnung überhaupt eine eigene Gaslieferstelle besitzt.
      </p>
      <p>
        Besteht ein eigener Vertrag, sollten Sie den bisherigen Anbieter frühzeitig über den Umzug informieren. Ob der Vertrag an der neuen Adresse fortgeführt, beendet oder durch einen neuen Tarif ersetzt wird, richtet sich nach Vertrag, Liefermöglichkeit und Umzugsklausel.
      </p>
      <h2>Diese Daten brauchen Sie</h2>
      <h2>Anschrift der alten und neuen Lieferstelle;</h2>
      <h2>Auszugs- und Einzugsdatum;</h2>
      <h2>Gaszählernummern und Zählerstände;</h2>
      <h2>Kundennummer und Vertragsdaten;</h2>
      <h2>gewünschter Lieferbeginn;</h2>
      <h2>letzte Jahresabrechnung oder erwarteter Jahresverbrauch;</h2>
      <p>
        neue Rechnungsanschrift.
      </p>
      <p>
        Fotografieren Sie den Zähler bei der Schlüsselübergabe und übernehmen Sie den Stand in das Protokoll. Das Foto sollte Nummer, Stand und möglichst das Datum nachvollziehbar dokumentieren.
      </p>
      <h2>Gasvertrag mitnehmen oder neu vergleichen?</h2>
      <p>
        Viele Sonderverträge können am neuen Wohnort fortgeführt werden, sofern der Anbieter dort liefern kann. Prüfen Sie dennoch die Konditionen: Der Tarif muss nicht automatisch die günstigste Wahl für die neue Wohnsituation sein. Bei größerer Fläche, anderer Heiztechnik oder besserem Dämmstandard kann sich auch der erwartete Verbrauch ändern.
      </p>
      <p>
        Kann der bisherige Anbieter die neue Lieferstelle nicht versorgen, kommt je nach Vertrag eine Beendigung infrage. Verlassen Sie sich nicht auf Annahmen, sondern lassen Sie sich Lieferende und Schlussrechnung schriftlich bestätigen.
      </p>
      <h2>Was passiert ohne gewählten Gastarif?</h2>
      <p>
        Wenn an einer eigenen Gaslieferstelle Gas entnommen wird, greift regelmäßig die gesetzlich abgesicherte Belieferung durch den örtlichen Grundversorger. Das verhindert eine Versorgungslücke. Trotzdem sollten Preis und Bedingungen zeitnah mit verfügbaren Sondertarifen verglichen werden.
      </p>
      <p>
        Bei Zentralheizung müssen Bewohner in der Regel keinen eigenen Liefervertrag anmelden. Hier entscheidet der Vermieter oder die Gemeinschaft über den Gaslieferanten.
      </p>
      <h2>Praktische Umzugs-Checkliste</h2>
      <p>
        Heizungsart und eigene Gaslieferstelle klären.
      </p>
      <p>
        Bestehenden Vertrag samt Umzugsklausel prüfen.
      </p>
      <p>
        Anbieter rechtzeitig über beide Adressen informieren.
      </p>
      <p>
        Tarif für den neuen Verbrauch vergleichen.
      </p>
      <p>
        Zählerstand bei Aus- und Einzug fotografieren.
      </p>
      <p>
        Lieferbestätigung und später die Schlussrechnung kontrollieren.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Beratung & Service</h3>
        <p className="mb-6">Energie Alemi prüft Ihren Gasvertrag und vergleicht passende Tarife für die neue Adresse in Aachen und der Region.</p>
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
          <li><Link to="/ratgeber/umzug-aachen-strom-gas-internet" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Umzug Aachen Strom Gas Internet</Link></li>
          <li><Link to="/ratgeber/strom-anmelden-umzug" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Strom anmelden beim Umzug</Link></li>
          <li><Link to="/ratgeber/gasanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gasanbieter Wechseln</Link></li>
          <li><Link to="/gasanbieter-aachen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Gasanbieter Aachen</Link></li>
          <li><Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Kontakt</Link></li>
        </ul>
      </div>

    </>
      )}
    </ArticleLayout>
  );
}
