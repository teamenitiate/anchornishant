import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Portfolio } from "@/components/site/Portfolio";
import { Reels } from "@/components/site/Reels";
import { Testimonials } from "@/components/site/Testimonials";
import { Brands } from "@/components/site/Brands";
import { Booking } from "@/components/site/Booking";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nishant Chandnani" },
      {
        name: "description",
        content:
          "Nishant Chandnani — high-energy event anchor for corporate galas, weddings, college fests and private shows. Book a host who turns events into experiences.",
      },
      { property: "og:title", content: "Nishant Chandnani — The Voice Behind Unforgettable Events" },
      { property: "og:description", content: "High-energy hosting that transforms events into experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Reels />
        <Testimonials />
        <Brands />
        <Booking />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
