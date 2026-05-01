import { Reveal } from "./Reveal";
import { Quote, Star } from "lucide-react";

const items = [
  {
    quote:
      "Nishant made the barat the most talked-about part of our wedding. It was a rollercoaster of emotions and fun.",
    name: "Priya Sharma",
    role: "Event Manager",
    event: "Barat on wheels",
  },
  {
    quote: "Our wedding felt like a movie. Every entry, every game, every emotional moment - he timed it like magic.",
    name: "Aarav & Diya Mehra",
    role: "Newlyweds",
    event: "Wedding Reception",
  },
  {
    quote: "Three days, zero dull moments. Best host we've ever booked, hands down.",
    name: "Rohit & Sneha",
    role: "25th wedding anniversary celebration",
    event: "25th wedding anniversary celebrationl",
  },
  {
    quote: "Refined, witty and razor-sharp. He understood our brand voice in one call and delivered way beyond brief.",
    name: "Naina & Arjun",
    role: "Newlyweds",
    event: "Haldi, Sangeet & Wedding",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Praise</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
              What clients <span className="text-gradient-gold">say</span> after the lights go down.
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <article className="relative glass rounded-3xl p-7 sm:p-8 h-full hover:border-primary/40 transition-colors group">
                <Quote className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors" size={48} />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-display text-lg sm:text-xl leading-relaxed text-foreground/90">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-primary glass rounded-full px-3 py-1">
                    {t.event}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
