import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { nav, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-colors duration-300 ${
          scrolled ? "bg-canvas-dark/95 backdrop-blur border-b border-line-dark" : "bg-transparent"
        }`}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 xl:px-16">
          <div className="flex items-center justify-between h-20">
            <NavLink to="/" className="flex items-center gap-2.5 group" aria-label={`${site.name} — Startseite`}>
              <span className="h-8 w-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 14V8" stroke="#F7F4EC" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M8 8C8 4.5 5.5 3 3 3C3 6 4.5 8 8 8Z" fill="#F7F4EC" />
                  <path d="M8 8C8 4.5 10.5 3 13 3C13 6 11.5 8 8 8Z" fill="#F7F4EC" opacity="0.75" />
                </svg>
              </span>
              <span className="font-display font-semibold text-lg tracking-tight text-text-ondark">
                {site.name}
              </span>
            </NavLink>

            <nav className="hidden lg:flex items-center gap-8" aria-label="Hauptnavigation">
              {nav.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm transition-colors ${
                      isActive ? "text-text-ondark" : "text-text-ondark-soft hover:text-text-ondark"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button as="link" to="/kontakt" variant="primary" className="!py-2.5 !px-5 text-sm">
                Projekt anfragen
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden flex items-center justify-center h-11 w-11 -mr-2 text-text-ondark"
              aria-label="Menü öffnen"
              aria-haspopup="dialog"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
