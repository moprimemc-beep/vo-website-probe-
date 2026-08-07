export const pricingTiers = [
  {
    key: "gartenprojekte",
    title: "Gartenprojekte",
    range: "3.500 € – 18.000 €",
    description:
      "Für die Neuanlage oder Umgestaltung eines Gartens — von der Planung bis zur letzten Pflanzung.",
    includes: [
      "Standortanalyse & Entwurf",
      "Terrassen- oder Wegebau",
      "Bepflanzung nach Konzept",
      "Bauleitung & Übergabe",
    ],
  },
  {
    key: "einzelleistungen",
    title: "Einzelleistungen",
    range: "900 € – 6.000 €",
    description:
      "Für einzelne Bausteine wie Pflasterflächen, Bepflanzung, Sichtschutz oder eine Teichanlage.",
    includes: [
      "Pflaster- oder Plattenflächen",
      "Heckenpflanzung",
      "Bewässerungsteilstrecken",
      "Kleinere Sichtschutzlösungen",
    ],
  },
  {
    key: "pflege-abo",
    title: "Pflege-Abo",
    range: "59 € / Monat",
    description: "Für eine laufend gepflegte Gartenanlage nach Fertigstellung.",
    includes: [
      "Regelmäßiger Rasenschnitt",
      "Formschnitt & Rückschnitt",
      "Saisonale Beetpflege",
      "Kurze Rückfragen zwischendurch",
    ],
  },
] as const;

export const pricingFactors = [
  "Grundstücksgröße und Geländeform",
  "gewünschte Materialien",
  "Umfang der Bepflanzung",
  "vorhandene Bausubstanz und Zugänglichkeit",
  "technische Ausstattung wie Bewässerung oder Beleuchtung",
] as const;

export const priceDisclaimer =
  "Alle Preisangaben dienen der Orientierung. Der genaue Umfang und Preis werden vor Projektbeginn gemeinsam festgelegt. [Preisangaben, Leistungsumfang und vertragliche Details vor Veröffentlichung prüfen.]";
