import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { GardenIllustration, type IllustrationVariant } from "@/components/ui/GardenIllustration";
import { Check } from "@/components/ui/icons";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/content/site";
import { services } from "@/content/services";

export function Leistungen() {
  const reduce = useReducedMotion();
  return (
    <>
      <title>{`Leistungen — ${site.name}`}</title>
      <meta name="description" content="Gartengestaltung, Terrassen- und Wegebau, Bepflanzung, Wasser, Sichtschutz und Pflege-Abo von Wurzelwerk." />

      <section className="bg-canvas-dark pt-40 pb-24 md:pt-48 md:pb-32">
        <Container>
          <Eyebrow>Leistungen</Eyebrow>
          <h1 className="mt-5 text-4xl md:text-6xl font-display font-semibold leading-[1.05] text-text-ondark max-w-2xl">
            Sechs Bausteine, ein Garten.
          </h1>
          <p className="mt-6 text-lg text-text-ondark-soft max-w-xl leading-relaxed">
            Jede Leistung funktioniert einzeln — richtig gut wirken sie im Zusammenspiel.
          </p>
        </Container>
      </section>

      <section className="bg-surface-light">
        {services.map((service, i) => (
          <div key={service.slug} id={service.slug} className="border-b border-line-light scroll-mt-20">
            <Container className="py-20 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={i % 2 === 1 ? "lg:order-2" : ""}
              >
                <span className="font-mono text-sm text-accent-deep">{service.number}</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold text-text-onlight">
                  {service.title}
                </h2>
                <p className="mt-5 text-base md:text-lg text-text-onlight-soft leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-text-onlight">
                      <Check className="h-4 w-4 mt-0.5 shrink-0 text-accent-deep" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={reduce ? undefined : { opacity: 0, scale: 0.97 }}
                whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`aspect-[4/3] rounded-2xl overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <GardenIllustration variant={service.illustration as IllustrationVariant} className="h-full w-full" />
              </motion.div>
            </Container>
          </div>
        ))}
      </section>

      <CTASection
        title="Welche Leistung passt zu deinem Grundstück?"
        text="Im ersten Gespräch ordnen wir gemeinsam ein, was sinnvoll ist."
        primaryLabel="Projekt anfragen"
        primaryTo="/kontakt"
        secondaryLabel="Preise ansehen"
        secondaryTo="/preise"
      />
    </>
  );
}
