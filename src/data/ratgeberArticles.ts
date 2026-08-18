
export interface RatgeberArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'Strom' | 'Gas' | 'Internet';
  publishedDate: string;
  updatedDate?: string;
  componentName: string;
}

export const articles: RatgeberArticle[] = [
  {
    id: '1',
    slug: 'stromanbieter-wechseln',
    title: 'Stromanbieter wechseln 2026: So einfach geht der Wechsel | ALEMI',
    description: 'Stromanbieter wechseln leicht gemacht: Erfahren Sie, wie der Wechsel abläuft, welche Fristen gelten, was Sie beachten sollten und wie Sie einen passenden Stromtarif finden.',
    category: 'Strom',
    publishedDate: '2026-08-09',
    updatedDate: '2026-08-16',
    componentName: 'StromanbieterWechseln'
  },
  {
    id: '2',
    slug: 'stromvergleich',
    title: 'Stromvergleich: Worauf sollte man bei einem Stromtarif achten?',
    description: 'Die wichtigsten Kriterien beim Stromvergleich: Arbeitspreis, Grundpreis, Preisgarantie und Vertragslaufzeit einfach erklärt.',
    category: 'Strom',
    publishedDate: '2026-08-09',
    componentName: 'StromvergleichWoraufAchten'
  },
  {
    id: '3',
    slug: 'gasvergleich',
    title: 'Gastarife vergleichen 2026: Günstigen Gastarif finden | ALEMI',
    description: 'Gastarife vergleichen und den passenden Gastarif finden. Erfahren Sie, worauf Sie bei Gaspreisen, Verbrauch, Vertragslaufzeit und Anbieterwechsel achten sollten.',
    category: 'Gas',
    publishedDate: '2026-08-09',
    updatedDate: '2026-08-16',
    componentName: 'GasvergleichPassenderTarif'
  },
  {
    id: '4',
    slug: 'gasanbieter-wechseln',
    title: 'Gasanbieter wechseln: Schritt für Schritt erklärt',
    description: 'Den Gasanbieter zu wechseln ist einfach und sicher. Erfahren Sie Schritt für Schritt, welche Informationen Sie benötigen.',
    category: 'Gas',
    publishedDate: '2026-08-09',
    componentName: 'GasanbieterWechselnSchritt'
  },
  {
    id: '5',
    slug: 'internetanbieter-vergleichen',
    title: 'Internetanbieter vergleichen: Darauf sollten Sie achten',
    description: 'DSL, Kabel oder Glasfaser? Was beim Internetvergleich wirklich zählt, um passende und günstige Tarife zu finden.',
    category: 'Internet',
    publishedDate: '2026-08-09',
    componentName: 'InternetanbieterVergleichen'
  },
  {
    id: '6',
    slug: 'umzug-aachen-strom-gas-internet',
    title: 'Umzug nach Aachen: Strom, Gas und Internet richtig anmelden',
    description: 'Praktischer Ratgeber für Ihren Umzug nach Aachen. Erfahren Sie alles zu Anmeldefristen, Sonderkündigungsrechten (EnWG & TKG) und wie Sie typische Fehler vermeiden.',
    category: 'Strom',
    publishedDate: '2026-08-11',
    componentName: 'UmzugAachenStromGasInternet'
  },
  {
    id: '7',
    slug: 'grundversorgung-aachen-strom-gas',
    title: 'Grundversorgung Aachen: Strom und Gas – Kündigung und Tarifwechsel',
    description: 'Grundversorgung in Aachen verständlich erklärt: Anbieter, Kündigungsfrist, Umzug und Wechselmöglichkeiten für Strom und Gas.',
    category: 'Strom',
    publishedDate: '2026-08-12',
    componentName: 'GrundversorgungAachenStromGas'
  }
,
  {
    id: '6',
    slug: 'dsl-vs-glasfaser-aachen',
    title: 'DSL vs. Glasfaser in Aachen: Lohnt sich der Wechsel?',
    description: 'Aachen baut sein Glasfasernetz aus. Wir klären die Unterschiede zu DSL und zeigen, für wen sich der schnelle Anschluss wirklich lohnt.',
    category: 'Internet',
    publishedDate: '2026-08-16',
    componentName: 'DslVsGlasfaserAachen'
  }
];
