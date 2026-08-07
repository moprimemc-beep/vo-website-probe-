import { motion, useReducedMotion } from "framer-motion";
import { Check } from "@/components/ui/icons";
import type { pricingTiers } from "@/content/pricing";

export function PricingCard({
  tier,
  featured = false,
}: {
  tier: (typeof pricingTiers)[number];
  featured?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`rounded-2xl p-8 flex flex-col h-full ${
        featured ? "bg-accent text-text-ondark" : "bg-surface-card border border-surface-card-line text-text-ondark"
      }`}
    >
      <p className={`font-mono text-xs uppercase tracking-[0.14em] ${featured ? "text-text-ondark/80" : "text-text-ondark-soft"}`}>
        {tier.title}
      </p>
      <p className="mt-4 font-display text-3xl md:text-4xl font-semibold">{tier.range}</p>
      <p className={`mt-4 text-sm leading-relaxed ${featured ? "text-text-ondark/90" : "text-text-ondark-soft"}`}>
        {tier.description}
      </p>
      <ul className="mt-6 space-y-3 flex-1">
        {tier.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm">
            <Check className={`h-4 w-4 mt-0.5 shrink-0 ${featured ? "text-text-ondark" : "text-accent-soft"}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
