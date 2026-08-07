import { Link, Navigate, useParams } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GardenIllustration, type IllustrationVariant } from "@/components/ui/GardenIllustration";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export function ProjektDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projekte" replace />;

  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <title>{`${project.name} — ${site.name}`}</title>
      <meta name="description" content={project.teaser} />

      <section className="bg-canvas-dark pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <nav aria-label="Breadcrumb" className="text-sm text-text-ondark-soft">
            <Link to="/projekte" className="hover:text-text-ondark transition-colors">
              Projekte
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text-ondark">{project.name}</span>
          </nav>
          <h1 className="mt-6 text-4xl md:text-5xl font-display font-semibold text-text-ondark max-w-2xl">
            {project.name}
          </h1>
          <p className="mt-4 font-mono text-sm uppercase tracking-[0.1em] text-accent-soft">
            {project.category} · {project.location} · {project.year}
          </p>
        </Container>
      </section>

      <div className="aspect-[16/8]">
        <GardenIllustration variant={project.illustration as IllustrationVariant} className="h-full w-full" />
      </div>

      <section className="bg-surface-light py-20 md:py-28">
        <Container className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
          <div className="space-y-12 max-w-2xl">
            <div>
              <h2 className="font-display text-2xl font-semibold text-text-onlight">Die Aufgabe</h2>
              <p className="mt-4 text-base leading-relaxed text-text-onlight-soft">{project.challenge}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-text-onlight">Der Ansatz</h2>
              <p className="mt-4 text-base leading-relaxed text-text-onlight-soft">{project.approach}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-text-onlight">Ergebnis</h2>
              <p className="mt-4 text-base leading-relaxed text-text-onlight-soft">{project.result}</p>
            </div>
          </div>

          <aside className="space-y-6 h-fit lg:sticky lg:top-28">
            <div className="rounded-2xl border border-line-light p-6">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-text-onlight-soft">Leistung</p>
              <p className="mt-2 text-text-onlight">{project.service}</p>
            </div>
            <Button as="link" to="/kontakt" variant="primary-on-light" className="w-full">
              Ähnliches Projekt anfragen
            </Button>
          </aside>
        </Container>
      </section>

      {more.length > 0 && (
        <section className="bg-surface-light pb-24 md:pb-32">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-text-onlight mb-8">Weitere Projekte</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {more.map((p) => (
                <Link key={p.slug} to={`/projekte/${p.slug}`} className="group block">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-canvas-dark">
                    <GardenIllustration
                      variant={p.illustration as IllustrationVariant}
                      className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-text-onlight group-hover:text-accent-deep transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-text-onlight-soft">{p.location}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection title="Ein eigenes Projekt im Kopf?" primaryLabel="Projekt anfragen" primaryTo="/kontakt" />
    </>
  );
}
