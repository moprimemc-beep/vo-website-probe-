import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/content/site";
import { process } from "@/content/process";

export function Ablauf() {
  const reduce = useReducedMotion();
  return (
    <>
      <title>{`Ablauf — ${site.name}`}</title>
      <meta name="description" content="So läuft ein Projekt mit Wurzelwerk ab — vom Erstgespräch bis zur Übergabe." />

      <section className="bg-canvas-dark pt-40 pb-20 md:pt-48 md:pb-24">
        <Container>
          <Eyebrow>Ablauf</Eyebrow>
          <h1 className="mt-5 text-4xl md:text-6xl font-display font-semibold leading-[1.05] text-text-ondark max-w-2xl">
            Fünf Schritte, klar geführt.
          </h1>
          <p className="mt-6 text-lg text-text-ondark-soft max-w-xl leading-relaxed">
            Ein Gartenprojekt profitiert von Struktur — für dich und für uns.
          </p>
        </Container>
      </section>

      <section className="bg-surface-light py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            {process.map((step, i) => (
              <motion.div
                key={step.number}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
                className="flex gap-8 py-10 border-b border-line-light last:border-b-0"
              >
                <span className="font-mono text-2xl text-accent-deep shrink-0 w-12">{step.number}</span>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-text-onlight">{step.title}</h2>
                  <p className="mt-3 text-base text-text-onlight-soft leading-relaxed max-w-xl">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection title="Lust auf ein erstes Gespräch?" primaryLabel="Projekt anfragen" primaryTo="/kontakt" />
    </>
  );
}
