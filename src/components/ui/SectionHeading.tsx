import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <span
      className={`font-mono text-xs tracking-[0.14em] uppercase ${
        tone === "dark" ? "text-accent-soft" : "text-accent-deep"
      }`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}
    >
      {eyebrow && (
        <div className="mb-4">
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl xl:text-[2.75rem] leading-[1.1] font-semibold ${
          tone === "dark" ? "text-text-ondark" : "text-text-onlight"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${tone === "dark" ? "text-text-ondark-soft" : "text-text-onlight-soft"}`}>
          {intro}
        </p>
      )}
    </motion.div>
  );
}
