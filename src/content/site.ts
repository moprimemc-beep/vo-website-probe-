// Alle Inhalte sind frei erfunden (Demo-/Showcase-Website).
export const site = {
  name: "Wurzelwerk",
  claim: "Gärten, die zu ihrem Ort gehören.",
  legalNote:
    "Alle Inhalte, Projekte, Preise und Personen dieser Website sind frei erfunden und dienen als Gestaltungs-Showcase.",
  location: "Fünfseenland, südwestlich von München",
  region: "Starnberg · Gauting · Herrsching · Tutzing",
  email: "hallo@wurzelwerk-beispiel.de",
  phone: "+49 (0) 8151 — 55 900",
  instagram: "@wurzelwerk.garten",
  founded: "2016",
  gardenPriceRange: "3.500 € – 18.000 €",
  servicePriceRange: "900 € – 6.000 €",
  maintenancePrice: "59 € / Monat",
} as const;

export const nav = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Projekte", href: "/projekte" },
  { label: "Preise", href: "/preise" },
  { label: "Ablauf", href: "/ablauf" },
  { label: "Studio", href: "/studio" },
  { label: "Kontakt", href: "/kontakt" },
] as const;
