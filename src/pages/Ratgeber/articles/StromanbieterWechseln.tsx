import { Link } from 'react-router';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function StromanbieterWechseln() {
  const article = articles.find(a => a.slug === 'stromanbieter-wechseln')!;

  const faqs = [
    {
      question: "Wie kann ich meinen Stromanbieter wechseln?",
      answer: "Der Wechsel ist unkompliziert: Sie vergleichen Stromtarife online, wählen einen neuen Anbieter und füllen das Formular aus. Die Kündigung beim bisherigen Versorger übernimmt meist der neue Anbieter."
    },
    {
      question: "Wie lange dauert ein Stromanbieterwechsel?",
      answer: "Nach den gesetzlichen Vorgaben (§ 20a EnWG) muss der technische Wechsel des Stromanbieters innerhalb von drei Wochen abgeschlossen sein. Ab dem 1. Januar 2026 gilt zudem die Vorgabe, dass der rein technische Anbieterwechsel an Werktagen innerhalb von 24 Stunden durchführbar sein muss. Bitte beachten Sie jedoch, dass sich der tatsächliche Lieferbeginn nach Ihren Kündigungsfristen und Vertragslaufzeiten beim bisherigen Versorger richtet."
    },
    {
      question: "Muss ich meinen alten Stromvertrag selbst kündigen?",
      answer: "Nein, in der Regel nicht. Wenn Sie regulär den Anbieter wechseln, kündigt Ihr neuer Anbieter für Sie. Kündigen Sie nur selbst, wenn Sie ein Sonderkündigungsrecht wegen einer Preiserhöhung nutzen oder sehr kurzfristig umziehen."
    },
    {
      question: "Kann ich den Stromanbieter trotz laufendem Vertrag wechseln?",
      answer: "Ja, Sie können den neuen Tarif jederzeit abschließen. Der eigentliche Anbieterwechsel findet jedoch erst nach Ablauf Ihrer aktuellen Vertragslaufzeit und Kündigungsfrist statt."
    },
    {
      question: "Was kostet der Stromanbieterwechsel?",
      answer: "Ein Stromanbieterwechsel ist immer kostenlos. Weder der bisherige noch der zukünftige Stromanbieter dürfen Wechselgebühren erheben."
    },
    {
      question: "Gibt es eine Unterbrechung der Stromversorgung?",
      answer: "Nein, eine Unterbrechung ist gesetzlich ausgeschlossen. Der Gesetzgeber garantiert die kontinuierliche Stromversorgung über die sogenannte Ersatz- oder Grundversorgung gemäß § 36 und § 38 des Energiewirtschaftsgesetzes (EnWG), sodass Sie zu keinem Zeitpunkt ohne Strom dastehen."
    }
  ];

  return (
    <ArticleLayout 
      article={article} 
      customH1="Stromanbieter wechseln: So funktioniert der Wechsel"
      faqs={faqs}
    >
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Die Energiepreise schwanken, und viele Haushalte zahlen zu viel für ihren Strom. Wer seinen <strong>Stromanbieter wechseln</strong> möchte, kann jährlich mehrere hundert Euro sparen. In diesem Ratgeber erklären wir Ihnen den genauen Ablauf, welche Kündigungsfristen wichtig sind und wie Sie sicher einen günstigen Stromtarif finden.
      </p>

      <h2>Wann lohnt sich ein Wechsel?</h2>
      <p>
        Ein <strong>Stromanbieterwechsel</strong> lohnt sich für fast jeden, insbesondere aber für Haushalte, die sich noch in der teuren Grundversorgung befinden. Grundversorgungstarife sind zwar flexibel, aber oft die teuerste Option am Markt. Auch wenn Ihre Preisgarantie bei einem alternativen Anbieter ausläuft oder Sie eine Preiserhöhung erhalten haben, ist es der perfekte Zeitpunkt, um den Stromanbieter zu wechseln. Neukunden profitieren zudem häufig von attraktiven Wechselprämien.
      </p>

      <h2>Wie funktioniert der Stromanbieterwechsel?</h2>
      <p>
        Der Prozess, um den <strong>Stromtarif wechseln</strong> zu können, ist in Deutschland gesetzlich standardisiert und für Sie als Verbraucher extrem einfach:
      </p>

      <h3>Stromtarif vergleichen</h3>
      <p>
        Nutzen Sie unseren kostenlosen Rechner, um <strong>Stromtarife vergleichen</strong> zu können. Sie benötigen lediglich Ihre Postleitzahl und Ihren ungefähren Jahresverbrauch in kWh, den Sie auf Ihrer letzten Jahresabrechnung finden.
      </p>

      <h3>Neuen Stromanbieter auswählen</h3>
      <p>
        Entscheiden Sie sich für einen Tarif, der gute Preise mit fairen Vertragsbedingungen (wie einer Preisgarantie und kurzer Laufzeit) kombiniert.
      </p>

      <h3>Vertrag abschließen und Wechsel starten</h3>
      <p>
        Geben Sie online Ihre Daten, Ihre Zählernummer und den Namen Ihres bisherigen Anbieters ein. Mit dem Abschluss beauftragen Sie den neuen Anbieter, den Wechselprozess für Sie durchzuführen.
      </p>

      <h2>Was Sie für einen Stromanbieterwechsel bereithalten sollten</h2>
      <p>
        Um den Wechsel schnell und reibungslos online durchzuführen, sollten Sie folgende Informationen und Unterlagen bereithalten:
      </p>
      <ul>
        <li><strong>Postleitzahl und Ort:</strong> Ermöglicht die Ermittlung der Netznutzungsentgelte an Ihrer Adresse.</li>
        <li><strong>Jahresstromverbrauch in kWh:</strong> Zu finden auf Ihrer letzten Jahresabrechnung.</li>
        <li><strong>Aktueller Anbieter &amp; Vertragsdaten:</strong> Wichtig für die fristgerechte Kündigung.</li>
        <li><strong>Zählernummer:</strong> Diese befindet sich direkt auf Ihrem Stromzähler.</li>
        <li><strong>Marktlokations-ID (MaLo-ID):</strong> Eine 11-stellige Nummer, die Ihren konkreten Netzanschluss kennzeichnet und auf Ihrer Stromrechnung zu finden ist (nicht zu verwechseln mit der Zählernummer).</li>
        <li><strong>Persönliche Kundendaten:</strong> Einschließlich Ihrer Kundennummer beim aktuellen Stromanbieter.</li>
      </ul>

      <h2>Welche Fristen gelten beim Stromanbieterwechsel?</h2>
      <p>
        Bevor Sie den Anbieter wechseln, sollten Sie die Fristen Ihres aktuellen Vertrags kennen.
      </p>

      <h3>Kündigungsfrist und Vertragslaufzeit</h3>
      <p>
        Jeder Stromvertrag hat eine spezifische Kündigungsfrist. In der Grundversorgung beträgt diese gesetzlich zwei Wochen (§ 36 EnWG). Für Sonderverträge gilt seit dem Gesetz für faire Verbraucherverträge bei vielen nach dem 1. März 2022 abgeschlossenen Stromverträgen: Nach dem Ablauf der vertraglichen Erstlaufzeit verlängern sich diese nur noch auf unbestimmte Zeit und können mit einer Frist von maximal einem Monat gekündigt werden. Ältere Verträge oder abweichende Tarifkonstruktionen können andere Fristen aufweisen. Prüfen Sie daher Ihre individuellen Vertragsdaten.
      </p>

      <h3>Stromanbieter wechseln trotz laufendem Vertrag</h3>
      <p>
        Viele Verbraucher fragen sich: Kann ich den <strong>Stromanbieter wechseln trotz Vertrag</strong>? Ja, Sie können sich heute schon einen günstigen Tarif für die Zukunft sichern. Der tatsächliche Lieferbeginn erfolgt dann nahtlos nach Ablauf Ihres aktuellen Vertrags. Eine Ausnahme besteht bei Preiserhöhungen: Hier greift ein gesetzliches Sonderkündigungsrecht nach § 41 Abs. 5 EnWG, durch das Sie den Vertrag sofort ohne Einhaltung der regulären Frist beenden können.
      </p>

      <h2>Was passiert mit dem alten Stromvertrag?</h2>
      <p>
        Das Wichtigste beim regulären Anbieterwechsel: Kündigen Sie Ihren alten Vertrag niemals selbst. Ihr neuer Versorger übernimmt die Kündigung für Sie, um eine reibungslose Übergabe der Stromversorgung sicherzustellen. Nur wenn die Frist für ein Sonderkündigungsrecht sehr knapp ist, sollten Sie selbst schriftlich kündigen und dies dem neuen Anbieter bei Vertragsschluss mitteilen.
      </p>

      <h2>Was kostet ein Stromanbieterwechsel?</h2>
      <p>
        Ein <strong>Stromanbieterwechsel</strong> ist grundsätzlich und gesetzlich vorgeschrieben kostenlos. Es fallen keinerlei Wechsel- oder Bearbeitungsgebühren durch die Energieversorger an. 
      </p>

      <h2>Worauf sollte man beim neuen Stromtarif achten?</h2>
      <p>
        Um wirklich zu sparen, reicht ein Blick auf die monatlichen Abschläge nicht aus. Achten Sie auf folgende Details, bevor Sie den <strong>Stromvertrag wechseln</strong>. Für eine ausführliche Erklärung aller Tarifdetails lesen Sie auch unseren Beitrag: <Link to="/ratgeber/stromvergleich" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Stromvertrag richtig vergleichen</Link>.
      </p>

      <h3>Arbeitspreis und Grundpreis</h3>
      <p>
        Der Arbeitspreis (Cent pro kWh) ist entscheidend, wenn Sie viel Strom verbrauchen. Der Grundpreis (Euro pro Monat) ist eine Fixgebühr, die besonders bei einem sehr geringen Stromverbrauch ins Gewicht fällt.
      </p>

      <h3>Vertragslaufzeit</h3>
      <p>
        Wählen Sie Laufzeiten von maximal 12 Monaten. So bleiben Sie flexibel und können im nächsten Jahr erneut von Marktschwankungen und Boni profitieren.
      </p>

      <h3>Preisgarantie</h3>
      <p>
        Eine Preisgarantie, die sich über die gesamte erste Vertragslaufzeit erstreckt, schützt Sie zuverlässig vor überraschenden Kostensteigerungen am Energiemarkt.
      </p>

      <h3>Bonus und Neukundenangebote</h3>
      <p>
        Viele Anbieter locken mit hohen Boni. Diese werden meist nach dem ersten Jahr ausgezahlt und machen den Tarif im ersten Jahr sehr günstig. Achten Sie darauf, wie sich der Preis im zweiten Jahr entwickelt, falls Sie vergessen, erneut zu wechseln.
      </p>

      <h2>Was passiert während des Anbieterwechsels?</h2>
      <p>
        Während des Wechsels merken Sie in Ihrem Haushalt absolut nichts. Der Stromzähler und die Leitungen bleiben unangetastet. Es gibt keine Technikerbesuche und vor allem keinen Stromausfall. Im Hintergrund meldet Ihr neuer Anbieter Ihren Zähler beim Netzbetreiber um. Die lückenlose Stromversorgung ist dabei in Deutschland gesetzlich geregelt. Sollte sich der Wechsel verzögern, greift die gesetzliche Grund- und Ersatzversorgung nach dem Energiewirtschaftsgesetz (EnWG), wie auch die <a href="https://www.bundesnetzagentur.de" target="_blank" rel="noopener noreferrer" className="text-[#0047AB] dark:text-[#60a5fa] underline hover:text-[#003380]">Bundesnetzagentur</a> bestätigt.
      </p>

      <h2>Häufige Fehler beim Stromanbieterwechsel vermeiden</h2>
      <p>
        Der häufigste Fehler ist die eigenständige Kündigung bei einem regulären Wechsel, was zu Verzögerungen führen kann. Ein weiterer Fehler ist das Ignorieren von Preiserhöhungen. Wenn Sie ein Schreiben Ihres Anbieters erhalten, prüfen Sie sofort Ihr Sonderkündigungsrecht. Sollten Sie Unterstützung beim Vergleich oder dem Wechselprozess benötigen, helfen wir Ihnen gerne in unserer <Link to="/tarifberatung-aachen" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">persönlichen Tarifberatung</Link>.
      </p>

      <h2>Häufige Fragen zum Stromanbieterwechsel</h2>
      <div className="space-y-6 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-lg font-bold mt-0 mb-2">{faq.question}</h3>
            <p className="mb-0 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Bereit für günstigere Strompreise?</h3>
        <p className="mb-6">Vergleichen Sie jetzt die aktuellen Tarife und senken Sie Ihre Stromkosten dauerhaft.</p>
        <Link to="/electricity">
          <Button variant="primary">Jetzt Stromtarife vergleichen</Button>
        </Link>
      </div>
    </ArticleLayout>
  );
}
