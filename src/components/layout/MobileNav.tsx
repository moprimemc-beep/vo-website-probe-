import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { nav, site } from "@/content/site";
import { Button } from "@/components/ui/Button";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Hauptnavigation"
          className="fixed inset-0 z-50 bg-canvas-dark flex flex-col"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between h-20 px-6">
            <span className="font-display font-semibold text-lg text-text-ondark">{site.name}</span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="flex items-center justify-center h-11 w-11 -mr-2 text-text-ondark"
              aria-label="Menü schließen"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-6 mt-4 overflow-y-auto" aria-label="Seiten">
            {nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={onClose}
                className={({ isActive }) =>
                  `py-4 text-2xl font-display border-b border-line-dark ${
                    isActive ? "text-accent-soft" : "text-text-ondark"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto p-6 flex flex-col gap-4">
            <Button as="link" to="/kontakt" onClick={onClose} variant="primary" className="w-full">
              Projekt anfragen
            </Button>
            <a href={`mailto:${site.email}`} className="text-center text-sm text-text-ondark-soft">
              {site.email}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
