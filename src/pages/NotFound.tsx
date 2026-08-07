import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function NotFound() {
  return (
    <>
      <title>{`Seite nicht gefunden — ${site.name}`}</title>
      <section className="bg-canvas-dark min-h-[70vh] flex items-center">
        <Container className="py-32 text-center">
          <p className="font-mono text-sm text-accent-soft">404</p>
          <h1 className="mt-4 text-3xl md:text-5xl font-display font-semibold text-text-ondark">
            Diese Seite gibt es nicht.
          </h1>
          <p className="mt-5 text-text-ondark-soft">Vielleicht wurde sie verschoben oder existiert nicht mehr.</p>
          <div className="mt-10">
            <Button as="link" to="/" variant="primary">
              Zur Startseite
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
