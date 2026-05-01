import { Reveal } from "./Reveal";

const brands = [
  "Yessssiirrr","Yessssiirrr","Yessssiirrr","Yessssiirrr",
  "Yessssiirrr","Yessssiirrr","Yessssiirrr","Yessssiirrr",
];

export function Brands() {
  return (
    <section id="brands" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm uppercase tracking-[0.3em] text-primary mb-3">Trusted By</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-center font-display text-3xl sm:text-4xl lg:text-5xl mb-12">
            Stages set with the <span className="text-gradient-gold">finest</span>.
          </h2>
        </Reveal>

        <div className="relative overflow-hidden mask-fade">
          <div className="flex gap-12 sm:gap-16 animate-marquee w-max">
            {[...brands, ...brands].map((b, i) => (
              <span
                key={i}
                className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}
