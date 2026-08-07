import { Route, Routes } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/lib/ScrollToTop";
import { Home } from "@/pages/Home";
import { Leistungen } from "@/pages/Leistungen";
import { Projekte } from "@/pages/Projekte";
import { ProjektDetail } from "@/pages/ProjektDetail";
import { Preise } from "@/pages/Preise";
import { Ablauf } from "@/pages/Ablauf";
import { Studio } from "@/pages/Studio";
import { Kontakt } from "@/pages/Kontakt";
import { NotFound } from "@/pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-light">
      <a
        href="#main"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("main");
          el?.focus();
          el?.scrollIntoView();
        }}
      >
        Zum Inhalt springen
      </a>
      <ScrollToTop />
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/projekte" element={<Projekte />} />
          <Route path="/projekte/:slug" element={<ProjektDetail />} />
          <Route path="/preise" element={<Preise />} />
          <Route path="/ablauf" element={<Ablauf />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
