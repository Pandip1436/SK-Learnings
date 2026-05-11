import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "../data/site";
import { PremiumIcon } from "../components/PremiumIcon";
import { Reveal } from "../components/Reveal";

type Status = "idle" | "sending" | "sent";

export function Contact() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Small delay to let the page render before scrolling
      const timer = setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <div className="relative overflow-hidden selection:bg-cyan-500/30">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 -z-50 bg-linear-to-b from-[#020617] via-[#070321] to-[#0a0820]" />
      <div className="pointer-events-none absolute inset-0 -z-40 bg-grid-cyan opacity-[0.15] mask-fade-radial" />

      {/* Glow Orbs */}
      <div aria-hidden className="pointer-events-none absolute left-0 top-1/4 -z-10 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-cyan-600/20 blur-[120px]" />

      <Header />
      <Map />
      <DetailsAndForm />
      <CategoryCards />
      <ClosingCallout />
    </div>
  );
}

function Header() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-32 pb-12 text-center lg:px-10 lg:pt-48">
      <Reveal>
        <p className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/30 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.32em] text-cyan-200 backdrop-blur">
          Get in touch
        </p>
      </Reveal>
      <Reveal delay={100}>
        <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          Reach us <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-300 via-sky-300 to-violet-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">here.</span>
        </h1>
      </Reveal>
      <Reveal delay={200}>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-parchment/70">
          Thank you for your interest in SK Learnings. We are eager to assist
          you on your educational journey. Reach out through any of the channels below.
        </p>
      </Reveal>
    </section>
  );
}

function Map() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
      <Reveal>
        <div className="glow-border relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c1226]/80 p-2 backdrop-blur-xl">
          <div className="overflow-hidden rounded-[1.25rem]">
            <iframe
              title="SK Learnings — location"
              src={site.contact.mapEmbed}
              width="100%"
              height="460"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }} // CSS trick to make the map dark theme matching
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function DetailsAndForm() {
  return (
    <section id="send-message" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <Reveal>
            <DetailBlock
              title="Institute Address"
              icon={<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
            >
              <ul className="space-y-3 text-[15px] leading-relaxed text-parchment/80">
                {site.contact.addresses.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </DetailBlock>
          </Reveal>

          <Reveal delay={100}>
            <DetailBlock
              title="Digital Address"
              icon={<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            >
              <a
                href={`mailto:${site.contact.email}`}
                className="text-[15px] font-medium text-cyan-300 transition hover:text-cyan-100 hover:underline"
              >
                {site.contact.email}
              </a>
            </DetailBlock>
          </Reveal>

          <Reveal delay={200}>
            <DetailBlock
              title="Phone"
              icon={<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
            >
              <ul className="space-y-3 text-[15px] font-medium">
                {site.contact.phones.map((p) => (
                  <li key={p}>
                    <a
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="text-white transition hover:text-cyan-200"
                    >
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </DetailBlock>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={300}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DetailBlock({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative mb-8 overflow-hidden rounded-3xl border border-white/5 bg-[#0c1226]/40 p-6 backdrop-blur-md transition-colors hover:bg-[#0c1226]/80 hover:border-cyan-500/30">
      <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/0 blur-[40px] transition-colors group-hover:bg-cyan-500/10" />
      <div className="relative z-10 flex items-start gap-4">
        {icon && (
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#07050f] text-cyan-400 ring-1 ring-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.1)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-shadow">
            {icon}
          </div>
        )}
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
            {title}
          </p>
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    // Using Web3Forms for a zero-config backend. 
    // Get your free access key from https://web3forms.com/
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";
    formData.append("access_key", accessKey);
    formData.append("subject", `New Inquiry from ${formData.get("name")}`);
    formData.append("from_name", "SK Learnings Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
      } else {
        setError(data.message || "Something went wrong. Please try again.");
        setStatus("idle");
      }
    } catch (err) {
      setError("Unable to connect to the server. Please check your internet.");
      setStatus("idle");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glow-border relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c1226]/80 p-8 backdrop-blur-xl sm:p-10 lift"
    >
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]" />

      <p className="font-display text-xs uppercase tracking-[0.22em] text-violet-300 relative">
        Send us a message
      </p>
      <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl relative">
        Tell us a little about the student.
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 relative">
        <Field label="Name" name="name" required />
        <Field label="Phone Number" name="phone" type="tel" required />
        <Field label="Email Address" name="email" type="email" required wide />
        <Textarea
          label="Message"
          name="message"
          placeholder="Current grade, exam goal, anything we should know…"
          wide
        />
      </div>

      <div className="mt-8 flex flex-wrap items-end justify-end gap-6 relative">
        <button
          type="submit"
          disabled={status !== "idle"}
          className={`group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all active:scale-95 disabled:opacity-70 ${status === "sent"
            ? "bg-emerald-500 shadow-emerald-500/20"
            : "bg-linear-to-r from-cyan-400 via-sky-400 to-violet-500 shadow-cyan-500/20 hover:scale-105 hover:shadow-cyan-500/40"
            }`}
        >
          {status === "idle" && (
            <>
              Submit Message
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </>
          )}
          {status === "sending" && (
            <>
              <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending…
            </>
          )}
          {status === "sent" && (
            <>
              Message Sent ✓
            </>
          )}
        </button>
      </div>

      {status === "sent" && (
        <div className="mt-8 rounded-2xl bg-emerald-500/10 p-4 border border-emerald-500/20 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="text-emerald-400 font-medium">
            Thank you! Your message has been received. We'll get back to you shortly.
          </p>
        </div>
      )}

      {error && (
        <p className="mt-6 rounded-lg bg-red-500/10 p-3 text-sm font-medium text-red-400 border border-red-500/20 relative">
          {error}
        </p>
      )}
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  wide?: boolean;
  placeholder?: string;
};

function Field({ label, name, type = "text", required, wide, placeholder }: FieldProps) {
  return (
    <label className={`group relative flex flex-col gap-2 ${wide ? "sm:col-span-2" : ""}`}>
      <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-cyan-200/50 transition-colors group-focus-within:text-cyan-300">
        {label}
      </span>
      <div className="relative">
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="peer w-full rounded-2xl border border-white/5 bg-[#07050f]/60 px-5 py-4 text-white outline-none transition-all placeholder:text-transparent focus:border-cyan-500/50 focus:bg-[#07050f]/90 focus:ring-4 focus:ring-cyan-500/10"
        />
        {placeholder && (
          <span className="pointer-events-none absolute left-5 top-4 text-white/30 transition-all peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:opacity-0 peer-valid:-translate-y-2 peer-valid:text-xs peer-valid:opacity-0">
            {placeholder}
          </span>
        )}
      </div>
    </label>
  );
}

function Textarea({
  label,
  name,
  placeholder,
  wide,
}: {
  label: string;
  name: string;
  placeholder?: string;
  wide?: boolean;
}) {
  return (
    <label className={`group relative flex flex-col gap-2 ${wide ? "sm:col-span-2" : ""}`}>
      <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-cyan-200/50 transition-colors group-focus-within:text-cyan-300">
        {label}
      </span>
      <div className="relative">
        <textarea
          name={name}
          rows={4}
          required
          placeholder={placeholder}
          className="peer w-full resize-none rounded-2xl border border-white/5 bg-[#07050f]/60 px-5 py-4 text-white outline-none transition-all placeholder:text-transparent focus:border-cyan-500/50 focus:bg-[#07050f]/90 focus:ring-4 focus:ring-cyan-500/10"
        />
        {placeholder && (
          <span className="pointer-events-none absolute left-5 top-4 text-white/30 transition-all peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:opacity-0 peer-valid:-translate-y-2 peer-valid:text-xs peer-valid:opacity-0">
            {placeholder}
          </span>
        )}
      </div>
    </label>
  );
}

const categoryCards = [
  {
    title: "General Queries",
    body: "For general information, course details, or any other inquiries, please contact us.",
    icon: ChatIcon,
    href: `mailto:${site.contact.email}`,
    cta: site.contact.email,
  },
  {
    title: "Admission Assistance",
    body: "Questions about admissions, application procedures, or enrolment? Our admissions team is here to help.",
    icon: DocIcon,
    href: `tel:${site.contact.phones[0].replace(/\s/g, "")}`,
    cta: site.contact.phones[0],
  },
  {
    title: "Feedback & Suggestions",
    body: "We value your feedback. Tell us how we can serve you better — we read every note.",
    icon: SparkIcon,
    href: `mailto:${site.contact.email}`,
    cta: "Write to our feedback team",
  },
  {
    title: "Connect with us Online",
    body: "Stay connected on Facebook, Instagram, and YouTube for updates, events, and educational insights.",
    icon: GlobeIcon,
    href: site.socials.instagram,
    cta: "Follow @the_sk_learnings",
  },
];

function CategoryCards() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.22em] text-cyan-300">
            More ways to reach us
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold text-white sm:text-4xl">
            Pick the channel that fits — every one lands on a real person.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map((c, i) => {
            const Icon = c.icon;
            const accents = ["cyan", "violet", "sky", "emerald"] as const;
            return (
              <Reveal key={c.title} delay={i * 100}>
                <a
                  href={c.href}
                  className="lift glow-border group relative flex h-full flex-col rounded-3xl border border-white/10 bg-[#0c1226]/80 p-8 backdrop-blur-xl"
                >
                  <PremiumIcon accent={accents[i]} size="md">
                    <Icon />
                  </PremiumIcon>
                  <h3 className="mt-8 font-display text-xl font-semibold text-white">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-parchment/70">
                    {c.body}
                  </p>
                  <p className={`mt-auto pt-8 text-sm font-medium ${accents[i] === 'cyan' ? 'text-cyan-300' : accents[i] === 'violet' ? 'text-violet-300' : accents[i] === 'sky' ? 'text-sky-300' : 'text-emerald-300'}`}>
                    {c.cta} →
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ClosingCallout() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-32 text-center lg:px-10">
      <Reveal>
        <div className="glow-border relative overflow-hidden rounded-[2.5rem] border border-cyan-500/20 bg-linear-to-b from-[#0a1230] to-[#07050f] p-10 text-center backdrop-blur-xl sm:p-16">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-screen" />
          <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[100px]" />

          <h2 className="relative font-display text-4xl font-semibold text-white sm:text-5xl">
            Reach out and start your <br className="hidden sm:block" /> educational odyssey today.
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-lg text-parchment/70">
            Our commitment extends beyond the classroom. We are here to assist
            you at every step of your educational journey.
          </p>
          <div className="relative mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => document.getElementById('send-message')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-400 via-sky-400 to-violet-500 px-8 py-4 text-base font-semibold text-white shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)] transition hover:scale-105 hover:shadow-[0_0_40px_-5px_rgba(34,211,238,0.7)]"
            >
              Book a Free Consultation
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
