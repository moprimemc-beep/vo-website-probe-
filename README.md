# Wurzelwerk — Gartenbau & Landschaftsgestaltung

Demo-Website für eine **frei erfundene** Gartenbaufirma. Alle Inhalte, Preise,
Projekte, Team-Mitglieder und Testimonials sind fiktiv und dienen als
Gestaltungs-Showcase (React + Vite + TypeScript + Tailwind CSS + Framer Motion).

## Entwicklung

```bash
npm install
npm run dev      # Entwicklungsserver
npm run build    # Produktions-Build (tsc + vite build)
npm run preview  # Produktions-Build lokal ansehen
```

## Struktur

```
src/
  content/      zentrale, editierbare Inhalte (Firma, Leistungen, Projekte, Preise, Team, FAQ …)
  components/
    layout/      Header, Footer, Mobile-Navigation
    ui/          Button, Formularfelder, Illustrationen, Cards
    sections/    wiederverwendbare Seitenabschnitte (CTA …)
  pages/         eine Datei je Route
  lib/           Validierung (Zod), Hilfsfunktionen
```

Bilder gibt es nicht als echte Fotos — stattdessen ein konsistentes Set
abstrakter SVG-Illustrationen (`GardenIllustration.tsx`), da für dieses
Demo-Projekt keine echten Produktionsfotos vorliegen.

## Vor einem echten Livegang prüfen

Diese Website ist ein Showcase. Vor einer echten Veröffentlichung mit einer
realen Firma müssen unter anderem geprüft/ergänzt werden:

- Firmenname, Rechtsform, echte Kontaktdaten und Adresse
- Preisangaben, Leistungsumfang, Steuern und Vertragsbedingungen
- Echte Referenzprojekte, Bilder und Freigaben (aktuell: erfundene Beispiele)
- Team-Angaben
- Impressum und Datenschutzerklärung (aktuell nur Platzhalter im Footer/Formular)
- Anbindung des Kontaktformulars an ein echtes Backend/E-Mail-Postfach
  (aktuell simuliert das Formular den Versand ohne echten Endpunkt)
- SEO-Metadaten, Sitemap, robots.txt, strukturierte Daten
- Hosting, Domain, Analytics/Consent, falls gewünscht

## Bekannte bewusste Abweichungen vom Ursprungs-Briefing

Das Briefing beschrieb Next.js (App Router, Server Components). Umgesetzt
wurde stattdessen eine clientseitig gerenderte Single-Page-App mit Vite +
React Router. Das ist schneller aufzusetzen, bedeutet aber: ohne aktiviertes
JavaScript im Browser bleibt die Seite leer, und es gibt kein serverseitiges
Rendering für SEO. Für eine echte Veröffentlichung wäre ein Wechsel zu
Next.js oder einer anderen SSR/SSG-Lösung empfehlenswert.
