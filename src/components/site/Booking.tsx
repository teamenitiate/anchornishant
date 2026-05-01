import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { Mail, Instagram, Linkedin, MessageCircle, Send, Phone } from "lucide-react";

const WHATSAPP = "919999999999"; // placeholder
const EMAIL = "hello@nishantchandnani.com";

export function Booking() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", type: "Corporate", date: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Nishant! I'd like to book you.%0A%0AName: ${form.name}%0AEmail: ${form.email}%0AEvent: ${form.type}%0ADate: ${form.date}%0A%0A${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
    setSent(true);
  };

  const setF = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <section id="book" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <Reveal>
              <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Book Nishant</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Let's make your event <span className="text-gradient-gold">unforgettable</span>.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                From corporate stages to grand celebrations — drop the details and I'll get back within 24 hours.
                For instant replies, hit WhatsApp.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 space-y-3">
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer"
                   className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-primary/50 transition-colors group">
                  <span className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-gold text-primary-foreground group-hover:scale-110 transition-transform">
                    <MessageCircle size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-primary">Instant Booking</p>
                    <p className="font-medium">WhatsApp +91 99999 99999</p>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`}
                   className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-primary/50 transition-colors group">
                  <span className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-gold text-primary-foreground group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-primary">Email</p>
                    <p className="font-medium">{EMAIL}</p>
                  </div>
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-8 flex gap-3">
                {[
                  { Icon: Instagram, href: "#" },
                  { Icon: Linkedin, href: "#" },
                  { Icon: Phone, href: `tel:+${WHATSAPP}` },
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} className="grid place-items-center h-11 w-11 rounded-full glass hover:bg-gradient-gold hover:text-primary-foreground transition-colors">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name">
                  <input required value={form.name} onChange={setF("name")} className={inputCls} placeholder="Your full name" />
                </Field>
                <Field label="Email">
                  <input required type="email" value={form.email} onChange={setF("email")} className={inputCls} placeholder="you@email.com" />
                </Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Event Type">
                  <select value={form.type} onChange={setF("type")} className={inputCls}>
                    <option>Corporate</option>
                    <option>Wedding</option>
                    <option>College Fest</option>
                    <option>Private Show</option>
                    <option>Other</option>
                  </select>
                </Field>
                <Field label="Event Date">
                  <input type="date" value={form.date} onChange={setF("date")} className={inputCls} />
                </Field>
              </div>
              <Field label="Message">
                <textarea rows={4} value={form.message} onChange={setF("message")} className={inputCls} placeholder="Tell me about your event..." />
              </Field>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-semibold px-6 py-4 rounded-full hover:scale-[1.02] transition-transform"
              >
                {sent ? "Opening WhatsApp..." : "Send Booking Request"}
                <Send size={16} />
              </button>
              <p className="text-xs text-center text-muted-foreground">Submitting opens WhatsApp with your details prefilled.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">{label}</span>
      {children}
    </label>
  );
}
