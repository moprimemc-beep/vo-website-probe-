import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { PricingCard } from "@/components/ui/PricingCard";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/content/site";
import { pricingTiers, pricingFactors, priceDisclaimer } from "@/content/pricing";

export function Preise() {
  return (
    <>
      <title>{`Preise — ${site.name}`}</title>
      <meta name="description" content="Preisorientierung für Gartenprojekte, Einzelleistungen und das Pflege-Abo von Wurzelwerk." />

      <section className="bg-canvas-dark pt-40 pb-20 md:pt-48 md:pb-24">
        <Container>
          <Eyebrow>Preise</Eyebrow>
          <h1 className="mt-5 text-4xl md:text-6xl font-display font-semibold leading-[1.05] text-text-ondark max-w-2xl">
            Klar statt versteckt.
          </h1>
          <p className="mt-6 text-lg text-text-ondark-soft max-w-xl leading-relaxed">
            Drei Preisbereiche, verständlich erklärt. Der genaue Umfang wird vor Projektstart gemeinsam
            festgelegt.
          </p>
        </Container>
      </section>

      <section className="bg-canvas-dark pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <PricingCard key={tier.key} tier={tier} featured={i === 0} />
            ))}
          </div>
          <p className="mt-8 text-sm text-text-ondark-soft max-w-2xl">{priceDisclaimer}</p>
        </Container>
      </section>

      <section className="bg-surface-light py-24 md:py-32">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <span className="font-mono text-sm text-accent-deep">04</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold text-text-onlight">
              Was beeinflusst den Umfang?
            </h2>
            <p className="mt-5 text-base text-text-onlight-soft leading-relaxed max-w-md">
              Jedes Grundstück ist anders. Diese Faktoren wirken sich am stärksten auf Aufwand und Preis
              aus.
            </p>
          </div>
          <ul className="space-y-4">
            {pricingFactors.map((factor, i) => (
              <li key={factor} className="flex items-start gap-4 pb-4 border-b border-line-light">
                <span className="font-mono text-sm text-text-onlight-soft">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-text-onlight">{factor}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTASection
        title="Bereit für eine erste Einschätzung?"
        text="Im Erstgespräch ordnen wir dein Vorhaben in einen realistischen Preisrahmen ein."
        primaryLabel="Projekt anfragen"
        primaryTo="/kontakt"
      />
    </>
  );
}
