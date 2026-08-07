import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTASection({
  title,
  text,
  primaryLabel = "Projekt anfragen",
  primaryTo = "/kontakt",
  secondaryLabel,
  secondaryTo,
}: {
  title: string;
  text?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <section className="bg-canvas-deep py-24 md:py-32">
      <Container>
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-display font-semibold leading-[1.1] text-text-ondark">
            {title}
          </h2>
          {text && <p className="mt-6 text-lg text-text-ondark-soft leading-relaxed">{text}</p>}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Button as="link" to={primaryTo} variant="primary">
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryTo && (
              <Button as="link" to={secondaryTo} variant="ghost">
                {secondaryLabel} →
              </Button>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
