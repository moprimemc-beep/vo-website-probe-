// Fiktive Stimmen — Beispieltexte für diese Demo-Website, keine echten Kund:innen.
export interface Testimonial {
  quote: string;
  attribution: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Der Entwurf hat von Anfang an gepasst — und der Garten sieht auch im zweiten Jahr noch genauso durchdacht aus wie am Übergabetag.",
    attribution: "Beispielstimme, Starnberg",
  },
  {
    quote:
      "Wir wussten vorher genau, was gebaut wird und was es kostet. Keine Überraschungen während der Bauzeit.",
    attribution: "Beispielstimme, Gauting",
  },
];
