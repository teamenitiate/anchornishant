import corp from "@/assets/event-corporate.jpg";
import wed from "@/assets/event-wedding.jpg";
import coll from "@/assets/event-college.jpg";
import { Reveal } from "./Reveal";
import { Play } from "lucide-react";

const reels = [
  { img: coll, title: "Festival Hype Reel", duration: "0:45" },
  { img: corp, title: "Corporate Showcase", duration: "1:12" },
  { img: wed, title: "Wedding Highlights", duration: "0:58" },
];

export function Reels() {
  return (
    <section id="videos" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Live Reels</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
              See the <span className="text-gradient-gold">energy</span> in motion.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-muted-foreground">A taste of stages, sound checks and standing ovations.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reels.map((r, i) => (
            <Reveal key={r.title} delay={i * 120}>
              <div className="group relative aspect-[9/14] rounded-3xl overflow-hidden gold-ring cursor-pointer">
                <img src={r.img} alt={r.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid place-items-center h-20 w-20 rounded-full bg-gradient-gold text-primary-foreground animate-pulse-gold transition-transform group-hover:scale-110">
                    <Play size={28} fill="currentColor" className="ml-1" />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                  <h3 className="font-display text-xl">{r.title}</h3>
                  <span className="text-xs glass rounded-full px-2.5 py-1">{r.duration}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
