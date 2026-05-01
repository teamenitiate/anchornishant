import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/919131094624"
      target="_blank"
      rel="noreferrer"
      className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-semibold pl-4 pr-5 py-3 rounded-full shadow-[0_15px_40px_-10px_oklch(0.82_0.14_82/0.7)] transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      } hover:scale-105 animate-pulse-gold`}
    >
      <MessageCircle size={18} />
      Book Now
    </a>
  );
}
