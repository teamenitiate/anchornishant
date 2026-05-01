import corp from "@/assets/video/R2.mp4";
import wed from "@/assets/video/R3.mp4";
import coll from "@/assets/video/R1.mp4";
import { Reveal } from "./Reveal";
import { useRef, useState } from "react";
import { Play } from "lucide-react";

const reels = [
  { img: coll, title: "", duration: "0:09" },
  { img: corp, title: "", duration: "0:12" },
  { img: wed, title: "", duration: "0:21" },
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
          {reels.map((r, i) => {
            const isVideo = String(r.img).toLowerCase().endsWith(".mp4");
            return (
              <Reveal key={r.title} delay={i * 120}>
                <VideoCard src={r.img} title={r.title} duration={r.duration} isVideo={isVideo} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ src, title, duration, isVideo }: { src: string; title: string; duration: string; isVideo: boolean }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlayButton = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    try {
      if (v.paused) {
        // ensure controls become available after user play
        v.controls = true;
        await v.play();
        setPlaying(true);
      } else {
        v.pause();
        setPlaying(false);
      }
    } catch (err) {
      console.error("Video play failed:", err);
    }
  };

  return (
    <div className="group relative aspect-[9/14] rounded-3xl overflow-hidden gold-ring">
      {isVideo ? (
        <>
          <video
            ref={videoRef}
            src={src}
            playsInline
            preload="metadata"
            // don't show native controls until user actually plays
            controls={playing}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Centered play button (actual button so clicks are a real user gesture) */}
          <div className="absolute inset-0 grid place-items-center pointer-events-none">
            <button
              type="button"
              onClick={handlePlayButton}
              className={
                "pointer-events-auto grid place-items-center h-20 w-20 rounded-full bg-gradient-gold text-primary-foreground transition-transform " +
                (playing ? "opacity-0" : "animate-pulse-gold")
              }
              aria-label={playing ? "Pause video" : "Play video"}
            >
              <Play size={28} fill="currentColor" className="ml-1" />
            </button>
          </div>
        </>
      ) : (
        <>
          <img src={src} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="grid place-items-center h-20 w-20 rounded-full bg-gradient-gold text-primary-foreground animate-pulse-gold transition-transform group-hover:scale-110">
              <Play size={28} fill="currentColor" className="ml-1" />
            </span>
          </div>
        </>
      )}

      <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between pointer-events-none">
        <h3 className="font-display text-xl">{title}</h3>
        <span className="text-xs glass rounded-full px-2.5 py-1">{duration}</span>
      </div>
    </div>
  );
}
