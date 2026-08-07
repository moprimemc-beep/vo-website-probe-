export interface Project {
  slug: string;
  name: string;
  category: string;
  service: string;
  location: string;
  year: string;
  size: "large" | "medium" | "small";
  teaser: string;
  challenge: string;
  approach: string;
  result: string;
  illustration: string;
}

export const projects: Project[] = [
  {
    slug: "ruhepol-am-hang",
    name: "Ruhepol am Hang",
    category: "Gartengestaltung",
    service: "Gartengestaltung, Terrassenbau",
    location: "Starnberg",
    year: "2024",
    size: "large",
    teaser:
      "Ein Hanggrundstück mit Seeblick wird zu einer Abfolge ruhiger Terrassenebenen.",
    challenge:
      "[REFERENZPROJEKT — FIKTIVES BEISPIEL] Das Grundstück fiel auf zwölf Metern Länge deutlich ab. Der bestehende Garten bestand aus einer steilen Rasenfläche, die kaum nutzbar war.",
    approach:
      "Wir haben den Hang in drei Terrassenebenen aus Naturstein gegliedert, verbunden durch eine ruhige Treppenachse. Bepflanzt wurde mit Gräsern und Gehölzen, die den Hang zusätzlich befestigen.",
    result:
      "Drei nutzbare Ebenen mit jeweils eigenem Charakter — vom Sitzplatz direkt am Haus bis zum offenen Blickpunkt am unteren Gartenrand.",
    illustration: "terraces",
  },
  {
    slug: "kiesgarten-sued",
    name: "Kiesgarten Süd",
    category: "Bepflanzung",
    service: "Bepflanzung, Wegebau",
    location: "Gauting",
    year: "2024",
    size: "medium",
    teaser: "Ein trockenheitsverträglicher Vorgarten ersetzt eine reine Rasenfläche.",
    challenge:
      "[REFERENZPROJEKT — FIKTIVES BEISPIEL] Der bestehende Vorgarten bestand ausschließlich aus Rasen und benötigte in trockenen Sommern viel Bewässerung.",
    approach:
      "Ein Kiesbeet mit Gräsern, Stauden und einem geschwungenen Trittplattenweg ersetzt die Rasenfläche. Die Pflanzenauswahl kommt weitgehend ohne zusätzliche Bewässerung aus.",
    result:
      "Ein pflegearmer, ganzjährig strukturierter Vorgarten mit deutlich reduziertem Wasserbedarf.",
    illustration: "planting",
  },
  {
    slug: "wasser-im-schatten",
    name: "Wasser im Schatten",
    category: "Wasser & Bewässerung",
    service: "Teichanlage",
    location: "Herrsching",
    year: "2023",
    size: "medium",
    teaser: "Ein kleiner Teich bringt Bewegung in einen schattigen Gartenteil.",
    challenge:
      "[REFERENZPROJEKT — FIKTIVES BEISPIEL] Ein schattiger, wenig genutzter Gartenbereich unter alten Bäumen sollte aufgewertet werden, ohne die Bäume zu gefährden.",
    approach:
      "Ein flacher Naturteich mit Bachlauf wurde wurzelschonend eingebracht, ergänzt durch schattenverträgliche Uferbepflanzung und einen kleinen Steg aus Holz.",
    result:
      "Aus einer ungenutzten Ecke wurde der ruhigste Platz im Garten.",
    illustration: "water",
  },
  {
    slug: "gruene-grenze",
    name: "Grüne Grenze",
    category: "Sichtschutz",
    service: "Sichtschutzhecke, Pergola",
    location: "Tutzing",
    year: "2023",
    size: "small",
    teaser: "Eine offene Grundstücksgrenze wird zu einem grünen, blickdichten Übergang.",
    challenge:
      "[REFERENZPROJEKT — FIKTIVES BEISPIEL] Die Terrasse lag direkt einsehbar zur Nachbarbebauung, ein klassischer Zaun kam für die Eigentümer nicht infrage.",
    approach:
      "Eine gemischte Heckenpflanzung aus Laub- und Bambusarten wurde mit einer freistehenden Holzpergola kombiniert, die zusätzlich Sichtschutz auf Sitzhöhe bietet.",
    result:
      "Blickschutz ohne Mauer-Wirkung — die Terrasse fühlt sich seither deutlich privater an.",
    illustration: "hedge",
  },
];
