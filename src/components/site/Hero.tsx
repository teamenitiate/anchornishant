import heroImg from "@/assets/hero-anchor.jpg";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { CountUp, Reveal } from "./Reveal";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Nishant Chandnani hosting on a grand stage"
          className="h-full w-full object-cover object-center scale-105"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -left-32 h-80 w-80 rounded-full bg-accent/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary mb-8">
              <Sparkles size={14} />
              <span>Premium Event Anchor</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
              Nishant <span className="text-gradient-gold text-shadow-glow">Chandnani</span>
              <span className="block mt-3 text-3xl sm:text-4xl lg:text-5xl text-foreground/90 font-display italic">
                The voice behind <br className="hidden sm:block" />unforgettable events.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed">
              High-energy hosting that transforms ordinary gatherings into experiences your guests will talk about for years.
            </p>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("book")}
                className="group inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-semibold px-7 py-4 rounded-full shadow-[0_10px_40px_-10px_oklch(0.82_0.14_82/0.6)] hover:scale-[1.04] transition-all"
              >
                Book Now
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo("portfolio")}
                className="group inline-flex items-center gap-2 glass px-6 py-4 rounded-full font-medium hover:bg-secondary/60 transition-colors"
              >
                <span className="grid place-items-center h-7 w-7 rounded-full bg-gradient-gold text-primary-foreground">
                  <Play size={12} className="ml-0.5" fill="currentColor" />
                </span>
                View My Work
              </button>
            </div>
          </Reveal>

          <Reveal delay={520}>
            <dl className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
              {[
                { n: 500, l: "Events Hosted" },
                { n: 250, l: "Happy Clients" },
                { n: 8, l: "Years Experience", s: "+" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-2xl p-4 sm:p-5">
                  <dt className="text-2xl sm:text-4xl font-display text-gradient-gold">
                    <CountUp to={s.n} suffix={s.s ?? "+"} />
                  </dt>
                  <dd className="mt-1 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">{s.l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground/70 animate-float">
        scroll
      </div>
    </section>
  );
}
