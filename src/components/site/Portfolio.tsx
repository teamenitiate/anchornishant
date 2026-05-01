import { useState } from "react";
import corp from "@/assets/event-corporate.jpg";
import wed from "@/assets/event-wedding.jpg";
import coll from "@/assets/event-college.jpg";
import priv from "@/assets/event-private.jpg";
import { Reveal } from "./Reveal";
import { X, MapPin, Calendar, Users } from "lucide-react";

type Event = {
  id: string;
  title: string;
  category: string;
  image: string;
  desc: string;
  highlights: string[];
  meta: { location: string; year: string; audience: string };
};

const events: Event[] = [
  {
    id: "corp",
    title: "Annual Vision Summit",
    category: "Corporate",
    image: corp,
    desc: "Hosted a 2,000-strong leadership summit with seamless segments — keynote intros, awards, panel moderation and a live Q&A with the CEO.",
    highlights: ["Bilingual MC across 6 hours", "Live Q&A with C-suite", "Award ceremony for 40+ winners"],
    meta: { location: "Mumbai", year: "2024", audience: "2,000 guests" },
  },
  {
    id: "wed",
    title: "The Mehra Reception",
    category: "Weddings",
    image: wed,
    desc: "A grand wedding reception blending family rituals with cinematic introductions, dance segments and heartfelt anecdotes.",
    highlights: ["Bride & groom cinematic entry", "Family games & sangeet", "Surprise tributes"],
    meta: { location: "Udaipur", year: "2024", audience: "850 guests" },
  },
  {
    id: "coll",
    title: "Resonance Fest",
    category: "College Fests",
    image: coll,
    desc: "Three-day college fest finale with 8,000 students, indie bands and a celebrity headliner — energy that did not drop for a second.",
    highlights: ["8K crowd hype-up", "Band intros & call-outs", "On-stage games"],
    meta: { location: "Pune", year: "2023", audience: "8,000 students" },
  },
  {
    id: "priv",
    title: "Glasshouse Soirée",
    category: "Private Shows",
    image: priv,
    desc: "Intimate luxury private celebration — refined storytelling, curated banter, and personalized guest moments.",
    highlights: ["Tailored guest spotlights", "Whisky-pairing segment", "Live auction hosting"],
    meta: { location: "Delhi", year: "2024", audience: "120 guests" },
  },
];

const categories = ["All", "Corporate", "Weddings", "College Fests", "Private Shows"];

export function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<Event | null>(null);

  const filtered = filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <section id="portfolio" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Portfolio</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-2xl">
                Stages I've owned, <span className="text-gradient-gold">moments I've made</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    filter === c
                      ? "bg-gradient-gold text-primary-foreground font-semibold"
                      : "glass text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {filtered.map((e, i) => (
            <Reveal key={e.id} delay={i * 100} className={i === 0 ? "md:col-span-2 lg:row-span-2 lg:col-span-2" : ""}>
              <button
                onClick={() => setActive(e)}
                className="group relative w-full h-full rounded-3xl overflow-hidden text-left gold-ring focus:outline-none"
              >
                <img
                  src={e.image}
                  alt={e.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-primary mb-2">
                    {e.category}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl">{e.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.meta.location} · {e.meta.year}</p>
                </div>
                <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  View →
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center p-4 bg-background/80 backdrop-blur-sm animate-fade-up"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-3xl w-full glass-strong rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 z-10 grid place-items-center h-10 w-10 rounded-full glass hover:bg-secondary"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <img src={active.image} alt={active.title} className="w-full h-72 sm:h-96 object-cover" />
            <div className="p-6 sm:p-8">
              <span className="text-xs uppercase tracking-[0.3em] text-primary">{active.category}</span>
              <h3 className="font-display text-3xl sm:text-4xl mt-2">{active.title}</h3>
              <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><MapPin size={14} className="text-primary" />{active.meta.location}</span>
                <span className="inline-flex items-center gap-1.5"><Calendar size={14} className="text-primary" />{active.meta.year}</span>
                <span className="inline-flex items-center gap-1.5"><Users size={14} className="text-primary" />{active.meta.audience}</span>
              </div>
              <p className="mt-5 text-muted-foreground leading-relaxed">{active.desc}</p>
              <ul className="mt-5 space-y-2">
                {active.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-gold flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
