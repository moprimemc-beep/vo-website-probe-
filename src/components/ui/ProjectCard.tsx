import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { GardenIllustration, type IllustrationVariant } from "@/components/ui/GardenIllustration";
import type { Project } from "@/content/projects";

export function ProjectCard({ project, size = "medium" }: { project: Project; size?: "large" | "medium" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link to={`/projekte/${project.slug}`} className="group block">
        <div
          className={`relative overflow-hidden rounded-2xl bg-canvas-dark ${
            size === "large" ? "aspect-[16/10]" : "aspect-[4/3]"
          }`}
        >
          <GardenIllustration
            variant={project.illustration as IllustrationVariant}
            className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas-deep/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-text-ondark-soft">
              {project.location} · {project.year}
            </span>
          </div>
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-text-onlight group-hover:text-accent-deep transition-colors">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-text-onlight-soft">{project.service}</p>
          </div>
          <span className="shrink-0 mt-1 text-accent-deep opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
            →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
