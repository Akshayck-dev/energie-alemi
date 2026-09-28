import { Link } from 'react-router';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function StromAnmeldenUmzug() {
  const article = articles.find(a => a.slug === 'strom-anmelden-umzug')!;

  const faqs = [
    {
      question: "Wie früh sollte ich Strom für die neue Wohnung anmelden?",
      answer: "Am besten organisieren Sie die Anmeldung etwa zwei Wochen vor der Schlüsselübergabe. So bleibt Zeit, fehlende Daten zu klären. Entscheidend ist, dass der gewünschte Lieferbeginn in der Zukunft liegt."
    },
    {
      question: "Wird der Strom beim Anbieterwechsel unterbrochen?",
      answer: "Nein. Die physische Versorgung läuft über das bestehende Netz weiter. Gewechselt wird der Vertragspartner für die Belieferung, nicht die Leitung."
    },
    {
      question: "Was passiert, wenn ich noch keinen Vertrag abgeschlossen habe?",
      answer: "Wenn Sie Strom entnehmen, kommt regelmäßig eine Belieferung durch den örtlichen Grundversorger zustande. Sie können anschließend unter Beachtung der geltenden Fristen in einen anderen Tarif wechseln."
    },
    {
      question: "Muss ich den alten Vertrag selbst kündigen?",
      answer: "Das hängt vom Fall ab. Bei einem regulären Lieferantenwechsel übernimmt der neue Anbieter häufig die Kündigung. Bei Umzug, Sonderkündigung oder sehr knapper Frist sollten Sie die Abmeldung und Kündigung selbst kontrollieren und sich schriftlich bestätigen lassen."
    },
  ];

  return (
    <ArticleLayout 
      article={article} 
      customH1="Strom anmelden beim Umzug: So klappt der Wechsel ohne Lücke"
      faqs={faqs}
    >
      <h2>Strom sollte vor dem Einzug angemeldet werden</h2>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Wer umzieht, sollte den Stromvertrag für die neue Wohnung vor dem Einzug organisieren und den bisherigen Anbieter rechtzeitig über den Auszug informieren. Seit dem 6. Juni 2025 können An- und Abmeldungen im Strommarkt nicht mehr rückwirkend vorgenommen werden. Der technische Lieferantenwechsel kann zwar werktags innerhalb von 24 Stunden verarbeitet werden, Vertragslaufzeiten und Kündigungsfristen gelten aber weiterhin.
      </p>
      <p>
        Ohne gewählten Tarif bleibt die neue Wohnung nicht dunkel: In der Regel entsteht durch die Stromentnahme ein Vertrag mit dem örtlichen Grundversorger. Das sichert die Versorgung, ist jedoch nicht automatisch die wirtschaftlichste Lösung. Ein rechtzeitiger Vergleich schafft Klarheit über Arbeitspreis, Grundpreis, Laufzeit und Preisgarantie.
      </p>
      <h2>Diese Angaben werden für die Anmeldung benötigt</h2>
      <h2>Für eine eindeutige Zuordnung sollten folgende Daten bereitliegen:</h2>
      <h2>vollständige Anschrift der neuen Lieferstelle;</h2>
      <h2>Einzugsdatum beziehungsweise Datum der Schlüsselübergabe;</h2>
      <h2>Zählernummer und Zählerstand am Übergabetag;</h2>
      <h2>Marktlokations-Identifikationsnummer (MaLo-ID), falls vorhanden;</h2>
      <h2>Name der bisherigen Vertragspartei und Kundennummer für den alten Vertrag;</h2>
      <h2>geschätzter Jahresverbrauch oder letzte Jahresabrechnung;</h2>
      <p>
        Bankverbindung für das Lastschriftverfahren, falls gewünscht.
      </p>
      <p>
        Die MaLo-ID ist eine elfstellige Kennung der Verbrauchsstelle. Sie steht häufig auf der Stromrechnung. Ist sie nicht zur Hand, helfen meist Adresse und Zählernummer bei der Zuordnung.
      </p>
      <h2>Die Umzugs-Checkliste in fünf Schritten</h2>
      <p>
        Vertrag prüfen: Kontrollieren Sie Laufzeit, Kündigungsfrist und Umzugsklausel des bestehenden Vertrags. Ein Umzug beendet einen Sondervertrag nicht in jedem Fall automatisch.
      </p>
      <p>
        Anbieter früh informieren: Melden Sie Auszug und neue Adresse so früh wie möglich. Eine Vorlaufzeit von etwa zwei Wochen gibt Spielraum für Rückfragen.
      </p>
      <p>
        Neuen Tarif vergleichen: Vergleichen Sie nicht nur den Arbeitspreis, sondern die erwarteten Jahreskosten einschließlich Grundpreis. Prüfen Sie außerdem Laufzeit, Verlängerung und Garantieumfang.
      </p>
      <p>
        Zählerstände dokumentieren: Fotografieren Sie am Tag der Übergabe die Zähler in der alten und neuen Wohnung. Notieren Sie Zählernummer, Datum und Stand im Übergabeprotokoll.
      </p>
      <p>
        Bestätigungen prüfen: Kontrollieren Sie Lieferbeginn, Vertragskonto und Abschlag. Stimmen Adresse oder Zählernummer nicht, sollte der Anbieter sofort informiert werden.
      </p>
      <h2>24-Stunden-Wechsel bedeutet nicht 24-Stunden-Kündigung</h2>
      <p>
        Die seit Juni 2025 geltende Regel beschleunigt den elektronischen Datenaustausch zwischen Lieferant, Netzbetreiber und Messstellenbetreiber. Sie hebt keine Mindestvertragslaufzeit und keine vertragliche Kündigungsfrist auf. Der mögliche Lieferbeginn hängt deshalb weiterhin vom bestehenden Vertrag und von vollständigen Angaben ab.
      </p>
      <p>
        Besonders wichtig: Eine verspätete Auszugsmeldung kann nicht nachträglich auf ein früheres Datum zurückgesetzt werden. Dadurch können Kosten an der alten Lieferstelle weiterlaufen. Zählerfoto und Übergabeprotokoll schützen bei späteren Rückfragen.
      </p>
      <h2>Persönliche Unterstützung in Aachen</h2>
      <p>
        Energie Alemi prüft bestehende Vertragsdaten, vergleicht passende Tarife und unterstützt bei der Vorbereitung des Anbieterwechsels. Die Beratung in Aachen ist kostenlos; die Tarifentscheidung bleibt transparent bei Ihnen.
      </p>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Beratung & Service</h3>
        <p className="mb-6">Umzug geplant? Lassen Sie Ihren Stromtarif vor dem Einzug kostenlos prüfen: Telefon 0176 659 493 90 oder über die Kontaktseite.</p>
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
          <li><Link to="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Stromanbieter Wechseln</Link></li>
          <li><Link to="/stromanbieter-aachen" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Stromanbieter Aachen</Link></li>
          <li><Link to="/contact" className="text-[#0047AB] dark:text-[#60a5fa] hover:underline">Kontakt</Link></li>
        </ul>
      </div>

    </ArticleLayout>
  );
}
