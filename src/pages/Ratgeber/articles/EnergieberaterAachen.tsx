import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ArticleLayout from '../ArticleLayout';
import { articles } from '../../../data/ratgeberArticles';
import Button from '../../../components/ui/Button';

export default function EnergieberaterAachen() {
  const { i18n } = useTranslation();
  const article = articles.find(a => a.slug === 'energieberater-aachen')!;

  const faqsDe = [
    {
      question: "Was kostet ein Energieberater für den Stromanbieterwechsel?",
      answer: "Bei Energie Alemi ist die Tarifberatung zu 100 % kostenlos und unverbindlich. Wir finanzieren uns über Anbieterprovisionen – Sie zahlen keinen Cent extra, der Tarif kostet Sie dasselbe wie bei direktem Abschluss."
    },
    {
      question: "Brauche ich wirklich einen Berater, oder reicht ein Online-Vergleichsportal?",
      answer: "Portale zeigen Preise – aber keine Vertragsfallen. Boni, die nur im ersten Jahr gelten, automatische Verlängerungen zu teuren Konditionen und kurze Preisgarantien werden leicht übersehen. Ein Berater prüft genau das."
    },
    {
      question: "Wie schnell kann ich in Aachen den Stromanbieter wechseln?",
      answer: "In der Regel 2–4 Wochen. Die Stromversorgung ist dabei zu keinem Zeitpunkt unterbrochen – das ist gesetzlich garantiert."
    },
    {
      question: "Beraten Sie auch Unternehmen?",
      answer: "Ja. Gerade für Gewerbe mit höherem Verbrauch lohnt sich der Tarifvergleich besonders – wir beraten Privatkunden und Unternehmen in Aachen und der Region."
    },
    {
      question: "Was muss ich zum Beratungstermin mitbringen?",
      answer: "Ihre letzte Stromrechnung (oder die Zählernummer) genügt. Daraus lesen wir Verbrauch, aktuellen Tarif und Kündigungsfrist ab – den Rest übernehmen wir."
    }
  ];
  const faqsEn = [
    {
      question: "How much does an energy consultant cost for switching electricity providers?",
      answer: "At Energie Alemi, tariff advice is 100% free and without obligation. We finance ourselves via provider commissions – you don't pay a cent extra, the tariff costs you the same as if you signed up directly."
    },
    {
      question: "Do I really need a consultant, or is an online comparison portal enough?",
      answer: "Portals show prices – but no contract traps. Bonuses that only apply in the first year, automatic renewals at expensive conditions, and short price guarantees are easily overlooked. A consultant checks exactly that."
    },
    {
      question: "How fast can I switch electricity providers in Aachen?",
      answer: "Usually 2-4 weeks. The electricity supply is never interrupted at any time – this is legally guaranteed."
    },
    {
      question: "Do you also advise companies?",
      answer: "Yes. Especially for businesses with higher consumption, comparing tariffs is particularly worthwhile – we advise private customers and companies in Aachen and the region."
    },
    {
      question: "What do I need to bring to the consultation appointment?",
      answer: "Your last electricity bill (or the meter number) is sufficient. From this, we read consumption, current tariff, and notice period – we take care of the rest."
    }
  ];
  const faqs = i18n.language === 'en' ? faqsEn : faqsDe;

  return (
    <ArticleLayout 
      article={article} 
      customH1={i18n.language === 'en' ? "Energy Consultant in Aachen: Who Helps Switch Electricity Providers?" : "Energieberater in Aachen: Wer hilft beim Stromanbieterwechsel?"}
      faqs={faqs}
    >
      {i18n.language === 'en' ? (
        <>

      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Anyone in Aachen who wants to <Link to="/stromanbieter-aachen" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">switch electricity providers</Link> is quickly faced with a confusing selection: Dozens of tariffs, bonuses, price guarantees, and contract clauses. An energy consultant can help – but not every consultant is the right one for every task. This guide shows what kind of help is available in Aachen and how you can recognize a good consultant for <Link to="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">switching electricity providers</Link>.
      </p>

      <h2>What kind of energy advice do you need?</h2>
      <p>The term "energy consultant" covers very different services:</p>
      <ul>
        <li><strong>Tariff and provider switch advice:</strong> Comparison of electricity, gas, and internet tariffs, review of contract terms, complete handling of the switch. This is exactly where the biggest savings lever for households lies – often several hundred euros per year.</li>
        <li><strong>Building energy advice:</strong> Renovation, insulation, heating replacement – mostly for owners and in connection with subsidy programs (BAFA, KfW).</li>
        <li><strong>Solar and photovoltaic advice:</strong> Planning of PV systems on your own roof.</li>
      </ul>
      <p>
        <strong>Important:</strong> Many classic energy consultants have their focus on buildings and renovations. Anyone who only wants to switch their electricity tariff needs a specialist for tariffs and contracts – otherwise, you pay for advice that misses your actual concern.
      </p>

      <h2>Tariff Advice: The specialist for switching providers</h2>
      <p>Tariff advice focuses on exactly one question: <em>How do you pay less for electricity, gas, and internet – without giving up anything?</em></p>
      <p>A good tariff consultant in Aachen should provide the following:</p>
      <ol>
        <li><strong>Independent comparison:</strong> Not just one or two providers, but a broad market overview – including new customer bonuses, price guarantees, and hidden costs.</li>
        <li><strong>Contract review:</strong> Term, notice period, price guarantee, and automatic contract extension are explained understandably.</li>
        <li><strong>Complete handling:</strong> Cancellation with the old provider, registration with the new one, deadline control – you don't have to worry about anything.</li>
        <li><strong>Free for you:</strong> Reputable tariff consultants finance themselves through provider commissions, not through customer fees.</li>
      </ol>
      <p>
        Energie Alemi in Aachen (Alexianergraben 9) specializes exactly in this tariff advice: We compare electricity, gas, and internet tariffs, advise personally on site or by phone – and the switching service is free and without obligation for you.
      </p>

      <h2>Consumer Center NRW: The independent alternative</h2>
      <p>
        Anyone who wants to get a completely provider-independent opinion will find a contact point in the <strong>Consumer Center NRW – Advisory Center Aachen</strong>. The consumer center helps with electricity and gas bills, price increases, provider switches, and contract problems – consumer-oriented and without sales interests.
      </p>
      <p>
        The difference to tariff advice: The consumer center advises and informs, but usually does not take over the complete switching process for you. Both offers complement each other well – many customers first use the independent information and then have the switch handled professionally.
      </p>

      <h2>How do you recognize a good consultant for switching electricity providers?</h2>
      <ul>
        <li><strong>Transparency:</strong> Costs, commissions, and process are explained openly – no hidden fees.</li>
        <li><strong>No sales pressure:</strong> A good consultant does not push for an immediate conclusion but gives you time to think.</li>
        <li><strong>Local availability:</strong> A local consultant in Aachen knows the regional providers (e.g., <Link to="/ratgeber/grundversorgung-aachen-strom-gas" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">STAWAG as the basic supplier</Link>) and is available for questions.</li>
        <li><strong>References and reviews:</strong> Real customer voices – such as Google reviews – say more than any advertisement.</li>
        <li><strong>Specialization:</strong> Ask directly: "Is switching electricity providers part of your core business?" If the answer is evasive, keep looking.</li>
      </ul>

      <h2>This is how the consultation at Energie Alemi works</h2>
      <ol>
        <li><strong>Free initial consultation:</strong> We record your current tariff, your consumption, and your wishes (eco-electricity? price guarantee?).</li>
        <li><strong>Individual comparison:</strong> We compare suitable tariffs – honestly, including the second-year price without sugarcoating bonuses.</li>
        <li><strong>Your decision:</strong> You choose in peace. No pressure, no obligation.</li>
        <li><strong>We handle the rest:</strong> Cancellation, registration, deadlines – the switch usually takes 2-4 weeks without your supply being interrupted.</li>
      </ol>

      <h2>Frequently asked questions about the energy consultant in Aachen</h2>
      <div className="space-y-6 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-lg font-bold mt-0 mb-2">{faq.question}</h3>
            <p className="mb-0 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Would you like to lower your electricity costs?</h3>
        <p className="mb-6">Arrange your free consultation now – personally in Aachen or by phone, throughout Germany.</p>
        <Link to="/contact">
          <Button variant="primary">Free Consultation</Button>
        </Link>
      </div>

        </>
      ) : (
        <>
      <p className="lead text-xl text-slate-600 dark:text-slate-300 font-medium mb-8">
        Wer in Aachen seinen <Link to="/stromanbieter-aachen" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Stromanbieter wechseln</Link> möchte, steht schnell vor einer unübersichtlichen Auswahl: Dutzende Tarife, Boni, Preisgarantien und Vertragsklauseln. Ein Energieberater kann helfen – aber nicht jeder Berater ist für jede Aufgabe der richtige. Dieser Ratgeber zeigt, welche Art von Hilfe es in Aachen gibt und woran Sie einen guten Berater für den <Link to="/ratgeber/stromanbieter-wechseln" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">Stromanbieterwechsel</Link> erkennen.
      </p>

      <h2>Welche Art von Energieberatung brauchen Sie?</h2>
      <p>Der Begriff „Energieberater" deckt sehr unterschiedliche Leistungen ab:</p>
      <ul>
        <li><strong>Tarif- und Anbieterwechselberatung:</strong> Vergleich von Strom-, Gas- und Internettarifen, Prüfung von Vertragskonditionen, komplette Abwicklung des Wechsels. Genau hier liegt der größte Sparhebel für Haushalte – oft mehrere hundert Euro pro Jahr.</li>
        <li><strong>Gebäudeenergieberatung:</strong> Sanierung, Dämmung, Heizungstausch – meist für Eigentümer und im Zusammenhang mit Förderprogrammen (BAFA, KfW).</li>
        <li><strong>Solar- und Photovoltaikberatung:</strong> Planung von PV-Anlagen auf dem eigenen Dach.</li>
      </ul>
      <p>
        <strong>Wichtig:</strong> Viele klassische Energieberater haben ihren Schwerpunkt bei Gebäude und Sanierung. Wer nur seinen Stromtarif wechseln möchte, braucht einen Spezialisten für Tarife und Verträge – sonst zahlen Sie für eine Beratung, die an Ihrem eigentlichen Anliegen vorbeigeht.
      </p>

      <h2>Tarifberatung: Der Spezialist für den Anbieterwechsel</h2>
      <p>Eine Tarifberatung konzentriert sich auf genau eine Frage: <em>Wie zahlen Sie weniger für Strom, Gas und Internet – ohne auf etwas zu verzichten?</em></p>
      <p>Ein guter Tarifberater in Aachen sollte Folgendes leisten:</p>
      <ol>
        <li><strong>Unabhängiger Vergleich:</strong> Nicht nur ein oder zwei Anbieter, sondern ein breiter Marktüberblick – inklusive Neukundenboni, Preisgarantien und versteckter Kosten.</li>
        <li><strong>Vertragsprüfung:</strong> Laufzeit, Kündigungsfrist, Preisgarantie und automatische Vertragsverlängerung werden verständlich erklärt.</li>
        <li><strong>Komplette Abwicklung:</strong> Kündigung beim alten Anbieter, Anmeldung beim neuen, Fristenkontrolle – Sie müssen sich um nichts kümmern.</li>
        <li><strong>Kostenlos für Sie:</strong> Seriöse Tarifberater finanzieren sich über Provisionen der Anbieter, nicht über Honorare von Kunden.</li>
      </ol>
      <p>
        Energie Alemi in Aachen (Alexianergraben 9) ist genau auf diese Tarifberatung spezialisiert: Wir vergleichen Strom-, Gas- und Internet-Tarife, beraten persönlich vor Ort oder telefonisch – und der Wechselservice ist für Sie kostenlos und unverbindlich.
      </p>

      <h2>Verbraucherzentrale NRW: Die unabhängige Alternative</h2>
      <p>
        Wer eine vollständig anbieterunabhängige Meinung einholen möchte, findet in der <strong>Verbraucherzentrale NRW – Beratungsstelle Aachen</strong> einen Anlaufpunkt. Die Verbraucherzentrale hilft bei Strom- und Gasrechnungen, Preiserhöhungen, Anbieterwechsel und Vertragsproblemen – verbraucherorientiert und ohne Verkaufsinteresse.
      </p>
      <p>
        Der Unterschied zur Tarifberatung: Die Verbraucherzentrale berät und informiert, übernimmt aber in der Regel nicht die komplette Wechselabwicklung für Sie. Beide Angebote ergänzen sich gut – viele Kunden nutzen erst die unabhängige Information und lassen dann den Wechsel professionell abwickeln.
      </p>

      <h2>Woran erkennen Sie einen guten Berater für den Stromanbieterwechsel?</h2>
      <ul>
        <li><strong>Transparenz:</strong> Kosten, Provisionen und Ablauf werden offen erklärt – keine versteckten Gebühren.</li>
        <li><strong>Keine Verkaufsdruck:</strong> Ein guter Berater drängt nicht zum sofortigen Abschluss, sondern lässt Ihnen Bedenkzeit.</li>
        <li><strong>Lokale Erreichbarkeit:</strong> Ein Berater vor Ort in Aachen kennt die regionalen Anbieter (z. B. <Link to="/ratgeber/grundversorgung-aachen-strom-gas" className="text-[#0047AB] dark:text-[#60a5fa] underline decoration-[#0047AB]/30 dark:decoration-[#60a5fa]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#60a5fa] underline-offset-4 font-semibold">STAWAG als Grundversorger</Link>) und ist bei Fragen greifbar.</li>
        <li><strong>Referenzen und Bewertungen:</strong> Echte Kundenstimmen – etwa Google-Bewertungen – sagen mehr als jede Werbung.</li>
        <li><strong>Spezialisierung:</strong> Fragen Sie direkt: „Gehört der Stromanbieterwechsel zu Ihrem Kerngeschäft?" Wenn die Antwort ausweichend ausfällt, suchen Sie weiter.</li>
      </ul>

      <h2>So läuft die Beratung bei Energie Alemi ab</h2>
      <ol>
        <li><strong>Kostenloses Erstgespräch:</strong> Wir erfassen Ihren aktuellen Tarif, Ihren Verbrauch und Ihre Wünsche (Ökostrom? Preisgarantie?).</li>
        <li><strong>Individueller Vergleich:</strong> Wir vergleichen passende Tarife – ehrlich, inklusive Zweitjahrespreis ohne Bonus-Schönrechnerei.</li>
        <li><strong>Ihre Entscheidung:</strong> Sie wählen in Ruhe. Kein Druck, keine Verpflichtung.</li>
        <li><strong>Wir übernehmen den Rest:</strong> Kündigung, Anmeldung, Fristen – der Wechsel dauert in der Regel 2–4 Wochen, ohne dass Ihre Versorgung unterbrochen wird.</li>
      </ol>

      <h2>Häufige Fragen zum Energieberater in Aachen</h2>
      <div className="space-y-6 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-lg font-bold mt-0 mb-2">{faq.question}</h3>
            <p className="mb-0 text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#f0f4ff] dark:bg-[#112240] p-8 rounded-2xl my-10 border border-[#e0e7ff] dark:border-white/10">
        <h3 className="text-2xl font-bold mb-4 mt-0">Sie möchten Ihre Stromkosten senken?</h3>
        <p className="mb-6">Vereinbaren Sie jetzt Ihr kostenloses Beratungsgespräch – persönlich in Aachen oder telefonisch, deutschlandweit.</p>
        <Link to="/contact">
          <Button variant="primary">Kostenloses Beratungsgespräch</Button>
        </Link>
      </div>
    </>
      )}
    </ArticleLayout>
  );
}
