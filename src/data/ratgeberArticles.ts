
export interface RatgeberArticle {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  category: 'Strom' | 'Gas' | 'Internet';
  publishedDate: string;
  updatedDate?: string;
  componentName: string;
}

export const articles: RatgeberArticle[] = [
  {
    id: '1',
    slug: 'stromanbieter-wechseln',
    title: 'Stromanbieter wechseln 2026: So einfach geht der Wechsel | Energie Alemi',
    titleEn: 'Switching Electricity Providers 2026: It\'s That Easy | Energie Alemi',
    description: 'Stromanbieter wechseln leicht gemacht: Erfahren Sie, wie der Wechsel abläuft, welche Fristen gelten, was Sie beachten sollten und wie Sie einen passenden Stromtarif finden.',
    descriptionEn: 'Switching electricity providers made easy: Find out how the switch works, which deadlines apply, what you should consider and how to find a suitable electricity tariff.',
    category: 'Strom',
    publishedDate: '2026-08-09',
    updatedDate: '2026-08-16',
    componentName: 'StromanbieterWechseln'
  },
  {
    id: '2',
    slug: 'stromvergleich',
    title: 'Stromvergleich 2026: Tarife vergleichen',
    titleEn: 'Electricity Comparison 2026: Compare Tariffs',
    description: 'Die wichtigsten Kriterien beim Stromvergleich: Arbeitspreis, Grundpreis, Preisgarantie und Vertragslaufzeit einfach erklärt.',
    descriptionEn: 'The most important criteria when comparing electricity: Energy price, basic price, price guarantee and contract term explained simply.',
    category: 'Strom',
    publishedDate: '2026-08-09',
    componentName: 'StromvergleichWoraufAchten'
  },
  {
    id: '3',
    slug: 'gasvergleich',
    title: 'Gastarife vergleichen 2026: Günstigen Gastarif finden | Energie Alemi',
    titleEn: 'Compare Gas Tariffs 2026: Find a Cheap Gas Tariff | Energie Alemi',
    description: 'Gastarife vergleichen und den passenden Gastarif finden. Erfahren Sie, worauf Sie bei Gaspreisen, Verbrauch, Vertragslaufzeit und Anbieterwechsel achten sollten.',
    descriptionEn: 'Compare gas tariffs and find the right gas tariff. Find out what you should look out for regarding gas prices, consumption, contract terms and switching providers.',
    category: 'Gas',
    publishedDate: '2026-08-09',
    updatedDate: '2026-08-16',
    componentName: 'GasvergleichPassenderTarif'
  },
  {
    id: '4',
    slug: 'gasanbieter-wechseln',
    title: 'Gasanbieter wechseln: Schritt für Schritt erklärt',
    titleEn: 'Switching Gas Providers: Explained Step by Step',
    description: 'Den Gasanbieter zu wechseln ist einfach und sicher. Erfahren Sie Schritt für Schritt, welche Informationen Sie benötigen.',
    descriptionEn: 'Switching gas providers is easy and safe. Find out step by step what information you need.',
    category: 'Gas',
    publishedDate: '2026-08-09',
    componentName: 'GasanbieterWechselnSchritt'
  },
  {
    id: '5',
    slug: 'internetanbieter-vergleichen',
    title: 'Internetanbieter vergleichen 2026',
    titleEn: 'Compare Internet Providers 2026',
    description: 'DSL, Kabel oder Glasfaser? Was beim Internetvergleich wirklich zählt, um passende und günstige Tarife zu finden.',
    descriptionEn: 'DSL, cable or fiber optic? What really matters when comparing internet to find suitable and cheap tariffs.',
    category: 'Internet',
    publishedDate: '2026-08-09',
    componentName: 'InternetanbieterVergleichen'
  },
  {
    id: '6',
    slug: 'umzug-aachen-strom-gas-internet',
    title: 'Umzug Aachen: Strom, Gas, Internet anmelden | Energie Alemi',
    titleEn: 'Moving to Aachen: Registering Electricity, Gas and Internet Correctly',
    description: 'Praktischer Ratgeber für Ihren Umzug nach Aachen. Erfahren Sie alles zu Anmeldefristen, Sonderkündigungsrechten (EnWG & TKG) und wie Sie typische Fehler vermeiden.',
    descriptionEn: 'Practical guide for your move to Aachen. Learn everything about registration deadlines, special termination rights (EnWG & TKG) and how to avoid typical mistakes.',
    category: 'Strom',
    publishedDate: '2026-08-11',
    componentName: 'UmzugAachenStromGasInternet'
  },
  {
    id: '7',
    slug: 'grundversorgung-aachen-strom-gas',
    title: 'Grundversorgung Aachen: Strom & Gas',
    titleEn: 'Basic Supply Aachen: Electricity & Gas',
    description: 'Grundversorgung in Aachen verständlich erklärt: Anbieter, Kündigungsfrist, Umzug und Wechselmöglichkeiten für Strom und Gas.',
    descriptionEn: 'Basic supply in Aachen explained understandably: Providers, notice periods, moving and switching options for electricity and gas.',
    category: 'Strom',
    publishedDate: '2026-08-12',
    componentName: 'GrundversorgungAachenStromGas'
  }
,
  {
    id: '6',
    slug: 'dsl-vs-glasfaser-aachen',
    title: 'DSL vs. Glasfaser in Aachen: Lohnt sich der Wechsel?',
    titleEn: 'DSL vs. Fiber Optics in Aachen: Is It Worth Switching?',
    description: 'Aachen baut sein Glasfasernetz aus. Wir klären die Unterschiede zu DSL und zeigen, für wen sich der schnelle Anschluss wirklich lohnt.',
    descriptionEn: 'Aachen is expanding its fiber optic network. We clarify the differences to DSL and show who the fast connection is really worth for.',
    category: 'Internet',
    publishedDate: '2026-08-16',
    componentName: 'DslVsGlasfaserAachen'
  }
,
  {
    id: '9',
    slug: 'strom-anmelden-umzug',
    title: 'Strom anmelden beim Umzug: Checkliste 2026 | Energie Alemi',
    titleEn: 'Registering Electricity When Moving: Checklist 2026 | Energie Alemi',
    description: 'Strom beim Umzug richtig an- und abmelden: Fristen, Zählerstand, MaLo-ID und Anbieterwahl verständlich erklärt. Persönliche Hilfe in Aachen.',
    descriptionEn: 'Registering and deregistering electricity correctly when moving: Deadlines, meter readings, MaLo ID and choice of provider explained understandably. Personal help in Aachen.',
    category: 'Strom',
    publishedDate: '2026-09-27',
    componentName: 'StromAnmeldenUmzug'
  },
  {
    id: '10',
    slug: 'stromverbrauch-1-person',
    title: 'Stromverbrauch 1 Person: Richtwerte & Spartipps | Energie Alemi',
    titleEn: 'Electricity Consumption 1 Person: Benchmarks & Saving Tips | Energie Alemi',
    description: 'Wie viel Strom verbraucht eine Person? Richtwerte für Wohnung und Haus, mit oder ohne elektrisches Warmwasser, plus einfache Spartipps.',
    descriptionEn: 'How much electricity does one person consume? Benchmarks for apartments and houses, with or without electric water heating, plus simple saving tips.',
    category: 'Strom',
    publishedDate: '2026-09-27',
    componentName: 'Stromverbrauch1Person'
  },
  {
    id: '11',
    slug: 'stromverbrauch-2-personen',
    title: 'Stromverbrauch 2 Personen: kWh, Kosten & Tipps | Energie Alemi',
    titleEn: 'Electricity Consumption 2 Persons: kWh, Costs & Tips | Energie Alemi',
    description: 'Stromverbrauch für 2 Personen einordnen: Richtwerte für Wohnung und Haus, Einfluss von Warmwasser und praktische Spartipps.',
    descriptionEn: 'Classifying electricity consumption for 2 people: Benchmarks for apartments and houses, influence of water heating and practical saving tips.',
    category: 'Strom',
    publishedDate: '2026-09-27',
    componentName: 'Stromverbrauch2Personen'
  },
  {
    id: '12',
    slug: 'stromverbrauch-4-personen',
    title: 'Stromverbrauch 4 Personen: Richtwerte & Kosten | Energie Alemi',
    titleEn: 'Electricity Consumption 4 Persons: Benchmarks & Costs | Energie Alemi',
    description: 'Wie viel Strom braucht eine vierköpfige Familie? Richtwerte nach Wohnform und Warmwasserart sowie Tipps für niedrigere Stromkosten.',
    descriptionEn: 'How much electricity does a family of four need? Benchmarks by housing type and water heating type as well as tips for lower electricity costs.',
    category: 'Strom',
    publishedDate: '2026-09-27',
    componentName: 'Stromverbrauch4Personen'
  },
  {
    id: '13',
    slug: 'stromkosten-berechnen',
    title: 'Stromkosten berechnen: Rechner, Formel & Beispiele | Energie Alemi',
    titleEn: 'Calculate Electricity Costs: Formula & Examples 2026 | Energie Alemi',
    description: 'Stromkosten in 30 Sekunden berechnen: kostenloser Rechner, einfache Formel und Beispiele für 1- bis 4-Personen-Haushalte – inkl. Vergleich zur STAWAG-Grundversorgung in Aachen.',
    descriptionEn: 'Calculate electricity costs easily: correctly apply annual consumption, energy price and basic price and realistically compare tariffs.',
    category: 'Strom',
    publishedDate: '2026-09-27',
    componentName: 'StromkostenBerechnen'
  },
  {
    id: '14',
    slug: 'gas-anmelden-umzug',
    title: 'Gas anmelden beim Umzug: Schritt-für-Schritt | Energie Alemi',
    titleEn: 'Registering Gas When Moving: Step-by-Step | Energie Alemi',
    description: 'Gas beim Umzug richtig anmelden: Vertrag prüfen, Zählerstand sichern, neuen Tarif wählen und doppelte Kosten vermeiden.',
    descriptionEn: 'Registering gas correctly when moving: check contract, secure meter reading, choose new tariff and avoid double costs.',
    category: 'Gas',
    publishedDate: '2026-09-27',
    componentName: 'GasAnmeldenUmzug'
  },
  {
    id: '15',
    slug: 'gasverbrauch-berechnen',
    title: 'Gasverbrauch berechnen: m³ in kWh umrechnen | Energie Alemi',
    titleEn: 'Calculate Gas Consumption: Convert m³ to kWh | Energie Alemi',
    description: 'Gasverbrauch korrekt berechnen: Zählerstand in m³ ablesen, mit Brennwert und Zustandszahl in kWh umrechnen und Kosten abschätzen.',
    descriptionEn: 'Calculate gas consumption correctly: read meter reading in m³, convert to kWh with calorific value and condition number and estimate costs.',
    category: 'Gas',
    publishedDate: '2026-09-27',
    componentName: 'GasverbrauchBerechnen'
  },
  {
    id: '16',
    slug: 'gaspreise-verstehen',
    title: 'Gaspreise verstehen: Arbeitspreis & Grundpreis | Energie Alemi',
    titleEn: 'Understand Gas Prices: Energy Price & Basic Price | Energie Alemi',
    description: 'Gaspreise verständlich erklärt: Arbeitspreis, Grundpreis, Preisgarantie, Bonus und Jahreskosten richtig vergleichen.',
    descriptionEn: 'Gas prices explained understandably: correctly compare energy price, basic price, price guarantee, bonus and annual costs.',
    category: 'Gas',
    publishedDate: '2026-09-27',
    componentName: 'GaspreiseVerstehen'
  }
  ,{
    id: '17',
    slug: 'energieberater-aachen',
    title: 'Energieberater Aachen: Hilfe beim Wechsel | Energie Alemi',
    titleEn: 'Energy Consultant Aachen: Help with Switching Electricity Providers',
    description: 'Energieberater in Aachen gesucht? Wir zeigen, wer beim Stromanbieterwechsel wirklich hilft – Tarifberatung, Verbraucherzentrale & worauf Sie achten sollten.',
    descriptionEn: 'Looking for an energy consultant in Aachen? We show who really helps with switching electricity providers – tariff advice, consumer advice center & what you should look out for.',
    category: 'Strom',
    publishedDate: '2026-09-28',
    componentName: 'EnergieberaterAachen'
  },
  {
    id: 'arbeitspreis-strom',
    slug: 'arbeitspreis-strom',
    title: 'Arbeitspreis Strom erklärt: Definition & aktuelle Werte | Energie Alemi',
    description: 'Arbeitspreis und Grundpreis einfach erklärt: Bedeutung, Berechnung mit Beispiel, aktuelle Werte 2026 und warum der Arbeitspreis bei hohem Verbrauch entscheidet.',
    category: 'Strom',
    publishedDate: '2026-10-07',
    componentName: 'ArbeitspreisStrom'
  },
];
