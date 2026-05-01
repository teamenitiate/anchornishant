import portrait from "@/assets/about-portrait.jpg";
import { Reveal } from "./Reveal";
import { Mic2, Flame, Users, Sparkles } from "lucide-react";

const traits = [
  { icon: Flame, title: "High Energy", text: "I bring the spark that lifts a room from curious to electric." },
  { icon: Users, title: "Crowd Control", text: "Reading the audience, steering the moment — effortlessly." },
  { icon: Mic2, title: "Versatile Voice", text: "Corporate gravitas, wedding warmth, festival fire." },
  { icon: Sparkles, title: "Quick Wit", text: "Humor that lands — never forced, always tasteful." },
];

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-gold opacity-30 blur-3xl rounded-full" />
              <div className="relative rounded-3xl overflow-hidden gold-ring">
                <img src={portrait} alt="Nishant Chandnani portrait" loading="lazy" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-6 glass-strong rounded-2xl px-5 py-4 max-w-[220px]">
                <p className="text-xs uppercase tracking-wider text-primary">Signature</p>
                <p className="font-display italic text-sm mt-1">"I don't just host events — I create unforgettable moments."</p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">About Nishant</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
                A storyteller with a <span className="text-gradient-gold">microphone</span>.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  From college fest stages to billion-rupee corporate galas, Nishant has spent the last decade
                  turning rooms into rooms-on-fire. What started as a dare to grab the mic at a campus event has
                  grown into a craft — and a calling.
                </p>
                <p>
                  His style? Confident without ego. Humorous without filler. Polished without losing the heart.
                  He reads a crowd like a conductor reads an orchestra — and brings every guest into the rhythm.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {traits.map((t, i) => (
                <Reveal key={t.title} delay={300 + i * 100}>
                  <div className="glass rounded-2xl p-5 h-full hover:border-primary/40 transition-colors group">
                    <div className="flex items-center gap-3">
                      <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-gold text-primary-foreground group-hover:scale-110 transition-transform">
                        <t.icon size={18} />
                      </span>
                      <h3 className="font-display text-lg">{t.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
