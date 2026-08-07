import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

const categories = ["Alle", ...Array.from(new Set(projects.map((p) => p.category)))];

export function Projekte() {
  const [active, setActive] = useState("Alle");
  const filtered = useMemo(
    () => (active === "Alle" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      <title>{`Projekte — ${site.name}`}</title>
      <meta name="description" content="Ausgewählte, fiktive Beispielprojekte von Wurzelwerk aus dem Fünfseenland." />

      <section className="bg-canvas-dark pt-40 pb-20 md:pt-48 md:pb-24">
        <Container>
          <Eyebrow>Projekte</Eyebrow>
          <h1 className="mt-5 text-4xl md:text-6xl font-display font-semibold leading-[1.05] text-text-ondark max-w-2xl">
            Arbeiten aus dem Fünfseenland.
          </h1>
          <p className="mt-6 text-lg text-text-ondark-soft max-w-xl leading-relaxed">
            [Referenzprojekte — fiktive Beispiele für diese Demo-Website.]
          </p>
        </Container>
      </section>

      <section className="bg-canvas-dark pb-24 md:pb-32">
        <Container>
          <div className="flex flex-wrap gap-3 mb-12" role="group" aria-label="Projekte filtern">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                  active === cat
                    ? "bg-accent border-accent text-text-ondark"
                    : "border-line-dark text-text-ondark-soft hover:text-text-ondark hover:border-text-ondark-soft"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-text-ondark-soft">Für diesen Filter liegt aktuell kein Beispielprojekt vor.</p>
          )}
        </Container>
      </section>
    </>
  );
}
