import { Link } from "react-router-dom";
import { nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-canvas-deep border-t border-line-dark">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 xl:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12">
          <div>
            <span className="font-display font-semibold text-lg text-text-ondark">{site.name}</span>
            <p className="mt-4 text-sm text-text-ondark-soft leading-relaxed max-w-xs">
              Gartenbau &amp; Landschaftsgestaltung im {site.location}.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-ondark-soft mb-4">Navigation</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-text-ondark hover:text-accent-soft transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-ondark-soft mb-4">Kontakt</p>
            <ul className="space-y-3 text-sm text-text-ondark">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-accent-soft transition-colors">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:text-accent-soft transition-colors">
                  {site.phone}
                </a>
              </li>
              <li className="text-text-ondark-soft">{site.region}</li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-ondark-soft mb-4">Rechtliches</p>
            <ul className="space-y-3 text-sm text-text-ondark-soft">
              <li>[Impressum vor Livegang ergänzen]</li>
              <li>[Datenschutzerklärung vor Livegang ergänzen]</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line-dark flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="text-xs text-text-ondark-soft">
            © {new Date().getFullYear()} {site.name}. Demo-Website mit frei erfundenen Inhalten.
          </p>
          <p className="text-xs text-text-ondark-soft max-w-xl">{site.legalNote}</p>
        </div>
      </div>
    </footer>
  );
}
