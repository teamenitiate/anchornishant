import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "videos", label: "Reels" },
  { id: "testimonials", label: "Praise" },
  { id: "brands", label: "Brands" },
  { id: "book", label: "Book" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let current = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${scrolled ? "glass-strong" : ""}`}>
          <button onClick={() => go("home")} className="flex items-center gap-2 group">
            <span className="grid place-items-center h-9 w-9 rounded-full bg-gradient-gold text-primary-foreground font-display font-bold">N</span>
            <span className="font-display text-lg tracking-wide">
              Nishant <span className="text-gradient-gold">Chandnani</span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  active === l.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-gold transition-transform origin-left ${
                    active === l.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button
              onClick={() => go("book")}
              className="bg-gradient-gold text-primary-foreground font-semibold px-5 py-2.5 rounded-full text-sm hover:scale-105 transition-transform"
            >
              Book Now
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-up">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`text-left px-3 py-3 rounded-lg text-sm ${
                    active === l.id ? "text-primary bg-secondary/60" : "text-foreground/80"
                  }`}
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => go("book")}
                className="mt-2 bg-gradient-gold text-primary-foreground font-semibold px-5 py-3 rounded-full text-sm"
              >
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
