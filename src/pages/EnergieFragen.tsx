import { Link } from 'react-router';
import { BookOpen, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { cn } from '../lib/utils';
import { useTranslation } from 'react-i18next';

export default function EnergieFragen() {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const questionsDe = [
    {
      question: "Was ist Energie Alemi?",
      answer: "Energie Alemi ist eine Tarifberatung in Aachen für Strom, Gas und Internet.",
      detail: "Das Unternehmen prüft bestehende Verträge, vergleicht Tarife verschiedener Anbieter und begleitet Kundinnen und Kunden beim Wechsel. Die Beratung richtet sich an Privathaushalte, Gewerbebetriebe und Industriekunden und verbindet den Tarifvergleich mit einem persönlichen Ansprechpartner vor Ort.",
      cta: { text: "Zur Startseite", link: "/" }
    },
    {
      question: "Welche Leistungen bietet Energie Alemi in Aachen an?",
      answer: "Energie Alemi berät zu Strom-, Gas- und Internetverträgen.",
      detail: "Zum Ablauf gehören die Aufnahme des Bedarfs, die Prüfung bestehender Verträge, der Vergleich geeigneter Angebote, die Unterstützung beim Vertragswechsel und die weitere Betreuung nach dem Wechsel. Ziel ist eine nachvollziehbare Entscheidung auf Basis von Preis, Leistung und Vertragsbedingungen.",
      cta: { text: "Zu unseren Leistungen", link: "/" }
    },
    {
      question: "Für wen ist die Tarifberatung von Energie Alemi geeignet?",
      answer: "Die Tarifberatung von Energie Alemi ist für Privathaushalte, Gewerbe und Industrie gedacht.",
      detail: "Bei Haushalten stehen meist Jahresverbrauch, Preis und Flexibilität im Mittelpunkt. Bei Unternehmen können zusätzlich mehrere Verbrauchsstellen, höhere Abnahmemengen, Laufzeiten und Planungssicherheit wichtig sein. Der Vergleich wird deshalb am tatsächlichen Bedarf und nicht an einem pauschalen Standardtarif ausgerichtet.",
      cta: { text: "Über uns erfahren", link: "/about" }
    },
    {
      question: "Wo berät Energie Alemi persönlich?",
      answer: "Energie Alemi hat seinen Standort am Alexianergraben 9, 52064 Aachen.",
      detail: "Persönliche Beratung ist montags bis samstags von 10:00 bis 19:00 Uhr möglich. Telefonisch ist das Unternehmen unter 0176 659 493 90 erreichbar. Für einen konkreten Tarifvergleich sollten Interessierte ihre letzte Abrechnung und die Daten des aktuellen Vertrags bereithalten.",
      cta: { text: "Zum Kontakt", link: "/contact" }
    },
    {
      question: "Ist die Tarifberatung bei Energie Alemi kostenlos?",
      answer: "Energie Alemi weist die Tarifberatung auf der eigenen Website als kostenlos aus.",
      detail: "In der Beratung werden die aktuelle Situation und der Bedarf aufgenommen, Verträge geprüft und passende Angebote verglichen. Vor einem Abschluss sollten Kundinnen und Kunden die konkreten Tarifkosten, Laufzeiten, Preisgarantien und Bonusbedingungen vollständig prüfen.",
      cta: { text: "Häufige Fragen (FAQ)", link: "/faq" }
    },
    {
      question: "Welche Unterlagen braucht man für einen Strom- oder Gasvergleich?",
      answer: "Für einen belastbaren Strom- oder Gasvergleich sind die letzte Jahresabrechnung, der Jahresverbrauch in Kilowattstunden, die Postleitzahl der Verbrauchsstelle, der aktuelle Grund- und Arbeitspreis sowie Vertragslaufzeit und Kündigungsfrist hilfreich.",
      detail: "Am Wechseltag sollte außerdem der Zählerstand dokumentiert und an die beteiligten Stellen übermittelt werden.",
      cta: { text: "Stromtarife vergleichen", link: "/electricity" }
    },
    {
      question: "Welcher Stromanbieter ist in Aachen am besten?",
      answer: "Einen allgemein besten Stromanbieter für Aachen gibt es nicht.",
      detail: "Welcher Tarif passt, hängt von Postleitzahl, Jahresverbrauch, aktuellem Vertrag und den gewünschten Bedingungen ab. Ein sinnvoller Vergleich betrachtet nicht nur den ersten Jahrespreis, sondern auch Grundpreis, Arbeitspreis, Vertragslaufzeit, Kündigungsfrist, Preisgarantie, Bonusregeln und die Erfahrungen mit dem Anbieter.",
      cta: { text: "Stromanbieter Aachen", link: "/stromanbieter-aachen" }
    },
    {
      question: "Worauf sollte man bei einem Stromtarif achten?",
      answer: "Bei einem Stromtarif zählen Grundpreis und Arbeitspreis ebenso wie Laufzeit, Kündigungsfrist und der genaue Umfang einer Preisgarantie.",
      detail: "Boni können den Preis im ersten Jahr senken, sollten aber nicht den Blick auf die dauerhaften Kosten verstellen. Die Verbraucherzentrale empfiehlt außerdem, Anbietererfahrungen zu prüfen und Tarife anhand der eigenen Postleitzahl und des Jahresverbrauchs zu vergleichen.",
      cta: { text: "Strom-Ratgeber", link: "/ratgeber/stromvergleich" }
    },
    {
      question: "Wird beim Wechsel des Strom- oder Gasanbieters die Versorgung unterbrochen?",
      answer: "Ein regulärer Wechsel des Strom- oder Gaslieferanten führt normalerweise nicht zu einer Unterbrechung der Energieversorgung.",
      detail: "Leitungen, Zähler und Netzbetreiber bleiben bestehen; geändert wird der Liefervertrag. Wichtig sind korrekte Vertragsdaten, die Beachtung von Laufzeit und Kündigungsfrist sowie ein dokumentierter Zählerstand zum Wechseltermin.",
      cta: { text: "Strom- und Gas-FAQ", link: "/faq" }
    },
    {
      question: "Welcher Gasanbieter ist in Aachen am besten?",
      answer: "Auch beim Gas gibt es keinen Anbieter, der für jeden Haushalt oder Betrieb automatisch der beste ist.",
      detail: "Entscheidend sind Lieferadresse, Jahresverbrauch, bisherige Kosten und Vertragsbedingungen. Verglichen werden sollten der jährliche Gesamtpreis, Grund- und Arbeitspreis, Laufzeit, Kündigungsfrist, Preisgarantie und Bonusbedingungen. Ein niedriger Einstiegspreis allein reicht für eine belastbare Entscheidung nicht aus.",
      cta: { text: "Gasanbieter Aachen", link: "/gasanbieter-aachen" }
    },
    {
      question: "Welcher Internettarif passt zu meinem Haushalt oder Betrieb?",
      answer: "Der passende Internettarif hängt zuerst von der technischen Verfügbarkeit an der konkreten Adresse ab.",
      detail: "Danach zählen die Zahl der Nutzer und Geräte, Homeoffice, Videokonferenzen, Streaming, Cloud-Anwendungen und der benötigte Upload. Verglichen werden sollten außerdem der Gesamtpreis über die Vertragslaufzeit, Bereitstellungs- und Routerkosten, Mindestlaufzeit, Kündigungsfrist und zugesagte Datenrate.",
      cta: { text: "Internetanbieter Aachen", link: "/internetanbieter-aachen" }
    },
    {
      question: "Was ist beim Wechsel des Internetanbieters wichtig?",
      answer: "Beim Wechsel des Internetanbieters sollten Kündigung, Anschalttermin und eine gewünschte Rufnummernmitnahme aufeinander abgestimmt werden.",
      detail: "Angaben zu Name, Adresse und Anschluss müssen mit dem bisherigen Vertrag übereinstimmen. Vor dem Auftrag sind Verfügbarkeit, Mindestlaufzeit, vollständige Kosten und die vertraglich zugesagte Geschwindigkeit zu prüfen. Energie Alemi unterstützt laut eigener Leistungsbeschreibung auch beim Wechselprozess.",
      cta: { text: "Kontakt aufnehmen", link: "/contact" }
    }
  ];

  const questionsEn = [
    {
      question: "What is Energie Alemi?",
      answer: "Energie Alemi is a tariff consultancy in Aachen for electricity, gas, and internet.",
      detail: "The company reviews existing contracts, compares tariffs from different providers, and guides customers through the switch. The consultation is aimed at private households, businesses, and industrial clients, combining tariff comparison with a personal local contact.",
      cta: { text: "To the homepage", link: "/" }
    },
    {
      question: "What services does Energie Alemi offer in Aachen?",
      answer: "Energie Alemi advises on electricity, gas, and internet contracts.",
      detail: "The process includes assessing your needs, reviewing existing contracts, comparing suitable offers, assisting with the contract switch, and continued support after the switch. The goal is a transparent decision based on price, service, and contract terms.",
      cta: { text: "Our services", link: "/" }
    },
    {
      question: "Who is Energie Alemi's tariff consultation suitable for?",
      answer: "Energie Alemi's tariff consultation is designed for private households, businesses, and industry.",
      detail: "For households, annual consumption, price, and flexibility are usually the focus. For businesses, multiple consumption points, higher volumes, contract terms, and planning security can also matter. The comparison is therefore based on actual needs, not a flat-rate standard tariff.",
      cta: { text: "Learn about us", link: "/about" }
    },
    {
      question: "Where does Energie Alemi advise in person?",
      answer: "Energie Alemi is located at Alexianergraben 9, 52064 Aachen.",
      detail: "In-person consultation is available Monday to Saturday from 10:00 AM to 7:00 PM. The company can be reached by phone at 0176 659 493 90. For a specific tariff comparison, please have your last bill and current contract details ready.",
      cta: { text: "Contact us", link: "/contact" }
    },
    {
      question: "Is the tariff consultation at Energie Alemi free?",
      answer: "Energie Alemi states on its website that the tariff consultation is free.",
      detail: "During the consultation, your current situation and needs are assessed, contracts reviewed, and suitable offers compared. Before signing anything, customers should fully check the specific tariff costs, terms, price guarantees, and bonus conditions.",
      cta: { text: "Frequently asked questions (FAQ)", link: "/faq" }
    },
    {
      question: "What documents do I need for an electricity or gas comparison?",
      answer: "For a reliable electricity or gas comparison, your last annual statement, annual consumption in kilowatt-hours, the postcode of the consumption point, current base and unit prices, and the contract term and cancellation period are helpful.",
      detail: "On the switching day, the meter reading should also be documented and submitted to the parties involved.",
      cta: { text: "Compare electricity tariffs", link: "/electricity" }
    },
    {
      question: "Which electricity provider is best in Aachen?",
      answer: "There is no single best electricity provider for Aachen.",
      detail: "Which tariff fits depends on your postcode, annual consumption, current contract, and desired terms. A meaningful comparison looks not only at the first-year price but also at the base price, unit price, contract term, cancellation period, price guarantee, bonus rules, and experiences with the provider.",
      cta: { text: "Electricity providers Aachen", link: "/stromanbieter-aachen" }
    },
    {
      question: "What should I look for in an electricity tariff?",
      answer: "With an electricity tariff, the base and unit prices matter as much as the term, cancellation period, and the exact scope of any price guarantee.",
      detail: "Bonuses can lower the price in the first year but shouldn't distract from the long-term costs. Consumer advice centers also recommend checking provider experiences and comparing tariffs based on your own postcode and annual consumption.",
      cta: { text: "Electricity guide", link: "/ratgeber/stromvergleich" }
    },
    {
      question: "Will my supply be interrupted when I switch electricity or gas providers?",
      answer: "A regular switch of electricity or gas supplier normally does not interrupt your energy supply.",
      detail: "Lines, meters, and grid operators stay the same; only the supply contract changes. What matters is correct contract data, observing the term and cancellation period, and a documented meter reading on the switching date.",
      cta: { text: "Electricity & gas FAQ", link: "/faq" }
    },
    {
      question: "Which gas provider is best in Aachen?",
      answer: "With gas too, there is no provider that is automatically the best for every household or business.",
      detail: "What counts is the delivery address, annual consumption, previous costs, and contract terms. You should compare the total annual price, base and unit prices, term, cancellation period, price guarantee, and bonus conditions. A low introductory price alone is not enough for a sound decision.",
      cta: { text: "Gas providers Aachen", link: "/gasanbieter-aachen" }
    },
    {
      question: "Which internet tariff suits my household or business?",
      answer: "The right internet tariff depends first on the technical availability at your specific address.",
      detail: "Then the number of users and devices, home office, video conferencing, streaming, cloud applications, and required upload matter. You should also compare the total price over the contract term, setup and router costs, minimum term, cancellation period, and promised data rate.",
      cta: { text: "Internet providers Aachen", link: "/internetanbieter-aachen" }
    },
    {
      question: "What's important when switching internet providers?",
      answer: "When switching internet providers, cancellation, activation date, and any desired number porting should be coordinated.",
      detail: "Name, address, and connection details must match the previous contract. Before ordering, check availability, minimum term, full costs, and the contractually promised speed. According to its own service description, Energie Alemi also assists with the switching process.",
      cta: { text: "Get in touch", link: "/contact" }
    }
  ];
  const questions = isEn ? questionsEn : questionsDe;

  const faqsForSeo = questions.map(q => ({
    question: q.question,
    answer: q.answer
  }));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a1628] py-24 md:py-32">
      <SEO 
        url="/energie-fragen" 
        title="Energie-Fragen & Antworten | Energie Alemi"
        description="Klare Antworten rund um Strom, Gas und Internet – sofort verständlich, von Energie Alemi."
        faqs={faqsForSeo}
      />
      
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16">
          <div className="flex items-center gap-3 text-[#0047AB] dark:text-[#f0a83f] font-semibold mb-4">
            <BookOpen size={24} className={cn(i18n.dir() === 'rtl' ? "ml-2" : "mr-0")} />
            <span className="uppercase tracking-wider text-sm font-heading">GEO Q&A</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {isEn ? 'Energy Questions & Answers' : 'Energie-Fragen & Antworten'}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            {isEn ? 'Clear, self-contained answers that users understand immediately and that search engines and AI systems can clearly attribute to the Energie Alemi brand. 12 directly quotable answers for Energie Alemi in Aachen on electricity, gas, and internet.' : 'Klare, eigenständige Antworten, die Nutzer sofort verstehen und die Suchmaschinen sowie KI-Systeme eindeutig der Marke Energie Alemi zuordnen können. 12 direkt zitierbare Antworten für Energie Alemi in Aachen rund um Strom, Gas und Internet.'}
          </p>
        </div>

        <div className="space-y-12">
          {questions.map((q, index) => (
            <div key={index} className="bg-white dark:bg-[#112240] rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {q.question}
              </h2>
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-4">
                {q.answer}
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {q.detail}
              </p>
              {q.cta && (
                <Link 
                  to={q.cta.link}
                  className="inline-flex items-center gap-2 text-[#0047AB] dark:text-[#f0a83f] font-semibold hover:underline decoration-[#0047AB]/30 dark:decoration-[#f0a83f]/30 hover:decoration-[#0047AB] dark:hover:decoration-[#f0a83f] underline-offset-4 transition-all"
                >
                  {q.cta.text}
                  <ArrowRight size={18} className={cn("transition-transform", i18n.dir() === 'rtl' ? "rotate-180" : "")} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
