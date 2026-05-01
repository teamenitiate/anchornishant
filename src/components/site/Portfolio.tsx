import { useState } from "react";
import corp from "@/assets/img2.jpeg";
import wed from "@/assets/img1.jpeg";
import priv from "@/assets/s2.jpeg";
import ni from "@/assets/s3.jpeg";
import nis from "@/assets/s4.jpeg";
import nish from "@/assets/s5.jpeg";
import nisha from "@/assets/img3.jpeg";
import nishan from "@/assets/clg.jpg";
import { Reveal } from "./Reveal";
import { X, MapPin, Calendar, Users } from "lucide-react";

type Event = {
  id: string;
  title: string;
  category: string;
  image: string;
  desc: string;
  highlights: string[];
  meta: {year: string;};
  noModal?: boolean;
};

const events: Event[] = [
  {
    id: "corp",
    title: "Not just a haldi… it was a vibe",
    category: "Haldi",
    image: corp,
    desc: "Kept the energy high with fun games, crowd interaction, and nonstop entertainment.Made sure every moment was filled with laughter, music, and pure celebration.",
    highlights: ["Interactive games & quizzes | Dance-offs & flash mobs | Heartfelt speeches & toasts"],
    meta: {year: "2025"},
  },
  {
    id: "wed",
    title: "A carnival full of colors, chaos & crazy energy 🎡✨",
    category: "Carnival",
    image: wed,
    desc: "Made sure the carnival stayed alive, energetic, and unforgettable till the very end.",
    highlights: ["Bride & groom cinematic entry | Family games | Surprise tributes"],
    meta: {year: "2025"},
  },
  {
    id: "priv",
    title: "Where moments turned into memories",
    category: "Carnival",
    image: priv,
    desc: "Kept the energy high and the crowd hooked from start to finish. With a mix of humor, heartfelt moments, and interactive segments, I made sure every guest felt involved and entertained.",
    highlights: [""],
    meta: { year: "2026",},
  },
  {
    id: "priv",
    title: "Left the stage louder than ever 🎤🔥",
    category: "Carnival",
    image: ni,
    desc: "Built a rhythm the crowd couldn’t resist - every moment flowed with energy and excitement. From fun interactions to full-blown hype, the carnival stayed alive till the very end.",
    highlights: ["On-Stage Games | Interactive Acts | Fun Segments"],
    meta: { year: "2025",},
  },
  {
    id: "priv",
    title: "From First Dance to Last Cheer - Every Moment Elevated",
    category: "Sangeet Night",
    image: nis,
    desc: "From emotional first dances to high-energy performances, every moment was crafted to keep the vibe alive. Seamless hosting, crowd engagement, and nonstop energy made the night truly unforgettable.",
    highlights: ["Live Interaction | Energy Flow"],
    meta: { year: "2024",},
  },
  {
    id: "priv",
    title: "From Streets to Beats - The Baraat Took Over the City",
    category: "Barat On Wheels",
    image: nish,
    desc: "The baraat was not just a procession, it was a moving party that took over the streets. With high-energy hosting, interactive segments, and nonstop entertainment, I made sure the baraat was the highlight of the wedding celebrations.",
    highlights: ["Dhol Beats | Road Dance | Crowd Hype"],
    meta: { year: "2026",},
  },
  {
    id: "priv",
    title: "An Evening Draped in Elegance, Where Every Moment Felt Royal",
    category: "Sangeet Night",
    image: nisha,
    desc: "Set against a night of grandeur, every performance unfolded like a story of love, rhythm, and celebration. With seamless flow and elevated energy, the sangeet transformed into a regal experience to remember.",
    highlights: ["Royal Performances", "Elegant Flow", "Grand Celebrations"],
    meta: { year: "2025",},
  },
  {
    id: "priv",
    title: "& Many more unforgettable moments..",
    category: "",
    image: nishan,
    desc: "",
    highlights: [""],
    meta: { year: "",},
    noModal: true,
  },
  
];
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
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {filtered.map((e, i) => {
            const isDisabled = !!e.noModal;
            return (
              <Reveal key={e.id + i} delay={i * 100} className={i === 0 ? "md:col-span-2 lg:row-span-2 lg:col-span-2" : ""}>
                {isDisabled ? (
                  <div
                    aria-disabled="true"
                    tabIndex={-1}
                    className="group relative w-full h-full rounded-3xl overflow-hidden text-left gold-ring focus:outline-none cursor-default pointer-events-none"
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
                      <p className="mt-1 text-sm text-muted-foreground"></p>
                    </div>
                    <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-xs opacity-0 transition-opacity">
                      View →
                    </div>
                  </div>
                ) : (
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
                      <p className="mt-1 text-sm text-muted-foreground"></p>
                    </div>
                    <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      View →
                    </div>
                  </button>
                )}
              </Reveal>
            );
          })}
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
                <span className="inline-flex items-center gap-1.5"><Calendar size={14} className="text-primary" />{active.meta.year}</span>
              
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
