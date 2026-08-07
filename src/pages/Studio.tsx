import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { GardenIllustration } from "@/components/ui/GardenIllustration";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/content/site";
import { team, studioIntro } from "@/content/team";
import { testimonials } from "@/content/testimonials";

export function Studio() {
  return (
    <>
      <title>{`Studio — ${site.name}`}</title>
      <meta name="description" content="Wurzelwerk ist ein kleines Team für Gartenbau und Landschaftsgestaltung im Fünfseenland." />

      <section className="bg-canvas-dark pt-40 pb-24 md:pt-48 md:pb-32">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <Eyebrow>Studio</Eyebrow>
            <h1 className="mt-5 text-4xl md:text-5xl font-display font-semibold leading-[1.1] text-text-ondark">
              {studioIntro.headline}
            </h1>
            <div className="mt-6 space-y-4">
              {studioIntro.text.map((p) => (
                <p key={p} className="text-base md:text-lg text-text-ondark-soft leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.12em] text-text-ondark-soft">
              Gegründet {site.founded} · {site.location}
            </p>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden">
            <GardenIllustration variant="planting" className="h-full w-full" />
          </div>
        </Container>
      </section>

      <section className="bg-surface-light py-24 md:py-32">
        <Container>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-text-onlight mb-14">Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {team.map((member) => (
              <div key={member.name}>
                <div className="aspect-square rounded-2xl overflow-hidden bg-canvas-dark mb-5">
                  <GardenIllustration variant="hedge" tone="dark" className="h-full w-full opacity-80" />
                </div>
                <h3 className="font-display text-lg font-semibold text-text-onlight">{member.name}</h3>
                <p className="text-sm text-accent-deep">{member.role}</p>
                <p className="mt-3 text-sm text-text-onlight-soft leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-canvas-dark py-24 md:py-32">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-ondark-soft mb-10">
            Beispielstimmen
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((t) => (
              <blockquote key={t.quote} className="border-l-2 border-accent pl-6">
                <p className="text-lg md:text-xl font-display text-text-ondark leading-snug">“{t.quote}”</p>
                <cite className="mt-4 block not-italic text-sm text-text-ondark-soft">{t.attribution}</cite>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <CTASection title="Lernen wir uns kennen." primaryLabel="Projekt anfragen" primaryTo="/kontakt" />
    </>
  );
}
