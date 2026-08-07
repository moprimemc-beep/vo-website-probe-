import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { GardenIllustration } from "@/components/ui/GardenIllustration";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PricingCard } from "@/components/ui/PricingCard";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight } from "@/components/ui/icons";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { pricingTiers, priceDisclaimer } from "@/content/pricing";
import { process } from "@/content/process";
import { industries } from "@/content/industries";

export function Home() {
  const reduce = useReducedMotion();
  const featured = projects[0];
  const rest = projects.slice(1, 3);

  return (
    <>
      <title>{`${site.name} — Gartenbau & Landschaftsgestaltung`}</title>
      <meta
        name="description"
        content="Wurzelwerk plant und baut Gärten im Fünfseenland — von der Gestaltung über Terrassen und Bepflanzung bis zur laufenden Pflege."
      />

      {/* HERO */}
      <section className="relative bg-canvas-dark overflow-hidden">
        <div className="absolute inset-0 opacity-90">
          <GardenIllustration variant="hero" className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-canvas-dark/40 via-canvas-dark/70 to-canvas-dark" />
        <Container className="relative pt-40 pb-28 md:pt-52 md:pb-36">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <Eyebrow>{site.name} · {site.location}</Eyebrow>
            <h1 className="mt-5 text-4xl md:text-6xl xl:text-[4.25rem] leading-[1.05] font-display font-semibold text-text-ondark">
              Gärten, die zu ihrem Ort gehören.
            </h1>
            <p className="mt-7 text-lg md:text-xl text-text-ondark-soft leading-relaxed max-w-xl">
              Wir planen und bauen Außenanlagen mit klarer Handschrift — von der ersten Standortanalyse
              bis zur laufenden Pflege. Individuell entworfen, solide gebaut.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button as="link" to="/kontakt" variant="primary">
                Projekt anfragen
              </Button>
              <Button as="link" to="/projekte" variant="ghost">
                Arbeiten ansehen →
              </Button>
            </div>
            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs uppercase tracking-[0.12em] text-text-ondark-soft">
              <span>Gartengestaltung</span>
              <span>Terrassen &amp; Wege</span>
              <span>Bepflanzung</span>
              <span>Pflege-Abo</span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* LEISTUNGS-INTRO */}
      <section className="bg-surface-light py-24 md:py-32">
        <Container>
          <SectionHeading
            tone="light"
            eyebrow="Leistungen"
            title="Von der ersten Idee bis zur Pflege danach."
            intro="Sechs Leistungsbereiche, die zusammen einen Garten ergeben — einzeln buchbar oder als Gesamtprojekt."
          />
          <div className="mt-14 divide-y divide-line-light border-t border-b border-line-light">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.04 }}
              >
                <Link
                  to={`/leistungen#${service.slug}`}
                  className="group grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr_auto] items-center gap-4 py-7 md:py-8"
                >
                  <span className="font-mono text-sm text-text-onlight-soft">{service.number}</span>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-text-onlight group-hover:text-accent-deep transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm md:text-base text-text-onlight-soft max-w-xl">{service.teaser}</p>
                  </div>
                  <ArrowRight className="hidden md:block h-5 w-5 text-text-onlight-soft group-hover:text-accent-deep group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* AUSGEWÄHLTE ARBEITEN */}
      <section className="bg-canvas-dark py-24 md:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Projekte" title="Ausgewählte Arbeiten" />
            <Button as="link" to="/projekte" variant="secondary" className="!py-2.5 !px-5 text-sm">
              Alle Projekte
            </Button>
          </div>
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            <div className="lg:row-span-2">
              <ProjectCard project={featured} size="large" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
              {rest.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* WARUM GESTALTUNG + PFLEGE */}
      <section className="bg-surface-light py-24 md:py-32">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <SectionHeading
            tone="light"
            eyebrow="Warum Gestaltung und Pflege zusammengehören"
            title="Ein Garten ist nie fertig. Er entwickelt sich weiter."
            intro="Eine gute Anlage ist die halbe Arbeit. Die andere Hälfte entscheidet sich in den Jahren danach — im Schnitt, in der Pflege, in kleinen Anpassungen."
          />
          <div className="grid grid-cols-2 gap-8">
            {[
              ["Klarer erster Eindruck", "Ein durchdachter Eingangsbereich prägt, wie ein Grundstück wirkt."],
              ["Langfristige Struktur", "Pflanzpläne, die auch nach fünf Jahren noch zusammenpassen."],
              ["Weniger Aufwand", "Standortgerechte Bepflanzung reduziert Gießen und Nacharbeit."],
              ["Verlässliche Pflege", "Ein Ansprechpartner für Rückschnitt, Rasen und kleine Fragen."],
            ].map(([title, text]) => (
              <div key={title}>
                <h3 className="font-display text-lg font-semibold text-text-onlight">{title}</h3>
                <p className="mt-2 text-sm text-text-onlight-soft leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PREISE */}
      <section className="bg-canvas-dark py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Preise" title="Klar statt versteckt." />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <PricingCard key={tier.key} tier={tier} featured={i === 0} />
            ))}
          </div>
          <p className="mt-8 text-sm text-text-ondark-soft max-w-2xl">{priceDisclaimer}</p>
          <div className="mt-8">
            <Button as="link" to="/preise" variant="secondary" className="!py-2.5 !px-5 text-sm">
              Preise im Detail
            </Button>
          </div>
        </Container>
      </section>

      {/* ABLAUF TEASER */}
      <section className="bg-surface-light py-24 md:py-32">
        <Container>
          <SectionHeading tone="light" eyebrow="Ablauf" title="Fünf Schritte bis zum fertigen Garten." />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
            {process.map((step) => (
              <div key={step.number}>
                <p className="font-mono text-sm text-accent-deep">{step.number}</p>
                <h3 className="mt-3 font-display text-lg font-semibold text-text-onlight">{step.title}</h3>
                <p className="mt-2 text-sm text-text-onlight-soft leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* BRANCHEN */}
      <section className="bg-canvas-dark py-20">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-ondark-soft mb-8">
            Geeignet für
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {industries.map((item) => (
              <span key={item} className="font-display text-xl md:text-2xl text-text-ondark-soft">
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Wenn ihr Garten besser werden soll, beginnt es mit einem Gespräch vor Ort."
        text="Erzähl uns kurz, was du vorhast — wir melden uns mit einem Terminvorschlag."
        primaryLabel="Projekt anfragen"
        primaryTo="/kontakt"
        secondaryLabel="Preise ansehen"
        secondaryTo="/preise"
      />
    </>
  );
}
