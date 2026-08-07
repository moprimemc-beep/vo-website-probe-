export interface Service {
  number: string;
  slug: string;
  title: string;
  teaser: string;
  description: string;
  includes: string[];
  illustration: string;
}

export const services: Service[] = [
  {
    number: "01",
    slug: "gartengestaltung",
    title: "Gartengestaltung",
    teaser:
      "Neuanlage und Umgestaltung von Privatgärten — individuell geplant, nicht von der Stange.",
    description:
      "Wir entwerfen Gärten, die zum Grundstück, zum Licht und zu den Menschen passen, die darin leben. Von der ersten Idee bis zur letzten Pflanze entsteht ein Konzept, das langfristig trägt.",
    includes: [
      "Bestandsaufnahme & Standortanalyse",
      "Entwurf & Gestaltungsplan",
      "Materialberatung",
      "Bauleitung",
    ],
    illustration: "terraces",
  },
  {
    number: "02",
    slug: "terrassen-wegebau",
    title: "Terrassen- & Wegebau",
    teaser: "Pflaster, Naturstein und Holzterrassen mit sauberer Linienführung.",
    description:
      "Wege und Terrassen sind das Rückgrat eines Gartens. Wir setzen sie so, dass sie den Garten gliedern statt ihn zu zerschneiden — solide gebaut und langfristig formstabil.",
    includes: [
      "Naturstein- & Betonpflaster",
      "Holz- und WPC-Terrassen",
      "Einfahrten & Stellflächen",
      "Entwässerungsplanung",
    ],
    illustration: "pathway",
  },
  {
    number: "03",
    slug: "bepflanzung",
    title: "Bepflanzung & Grünkonzepte",
    teaser: "Standortgerechte Pflanzpläne für Hecken, Stauden und Gehölze.",
    description:
      "Gute Bepflanzung sieht in jeder Jahreszeit anders aus und trotzdem immer richtig. Wir planen mit Arten, die zu Boden und Klima passen, statt mit Wunschbildern aus dem Katalog.",
    includes: [
      "Pflanzplan nach Standort",
      "Hecken & Sichtschutzgrün",
      "Stauden- & Gräserbeete",
      "Baumpflanzungen",
    ],
    illustration: "planting",
  },
  {
    number: "04",
    slug: "wasser-bewaesserung",
    title: "Wasser & Bewässerung",
    teaser: "Teiche, Bachläufe und automatische Bewässerungssysteme.",
    description:
      "Wasser bringt Ruhe und Bewegung zugleich in einen Garten. Wir planen Wasserstellen, die sich pflegeleicht in den Garten einfügen, und Bewässerung, die im Hintergrund einfach funktioniert.",
    includes: [
      "Teich- & Bachlaufbau",
      "Tropf- & Sprinklersysteme",
      "Steuerungstechnik",
      "Regenwassernutzung",
    ],
    illustration: "water",
  },
  {
    number: "05",
    slug: "sichtschutz-einfriedung",
    title: "Sichtschutz & Einfriedung",
    teaser: "Zäune, Hecken, Mauern und Pergolen als klare Grundstücksgrenze.",
    description:
      "Eine gute Grenze schützt, ohne den Garten einzusperren. Wir kombinieren Materialien und Grün so, dass Sichtschutz nicht wie eine Wand wirkt, sondern wie ein Teil der Gestaltung.",
    includes: [
      "Zaun- & Mauerbau",
      "Heckenpflanzung",
      "Pergolen & Rankgerüste",
      "Toranlagen",
    ],
    illustration: "hedge",
  },
  {
    number: "06",
    slug: "pflege-abo",
    title: "Pflege-Abo",
    teaser: "Laufende Gartenpflege für 59 € im Monat.",
    description:
      "Ein fertiger Garten bleibt nur schön, wenn er regelmäßig gepflegt wird. Im Pflege-Abo übernehmen wir die wiederkehrenden Arbeiten, damit der Garten Saison für Saison so aussieht wie am ersten Tag.",
    includes: [
      "Rasenpflege",
      "Rückschnitt & Formschnitt",
      "Saisonale Beetpflege",
      "Kurzfristige Rückfragen",
    ],
    illustration: "maintenance",
  },
];
