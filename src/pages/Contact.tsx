import { useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import { PremiumIcon } from "../components/PremiumIcon";

type Status = "idle" | "sending" | "sent";

export function Contact() {
  return (
    <>
      <Header />
      <Map />
      <DetailsAndForm />
      <CategoryCards />
      <ClosingCallout />
    </>
  );
}

function Header() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 text-center lg:px-10 lg:pt-28">
      <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-300">
        Get in touch
      </p>
      <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] text-parchment sm:text-6xl lg:text-7xl">
        Reach us here.
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-parchment/70">
        Thank you for your interest in SK Learnings. We are eager to assist
        you on your educational journey and welcome any inquiries or
        feedback. Reach out through any of the channels below.
      </p>
    </section>
  );
}

function Map() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
      <div className="overflow-hidden rounded-3xl border border-navy-900/10 shadow-xl shadow-navy-900/5">
        <iframe
          title="SK Learnings — location"
          src={site.contact.mapEmbed}
          width="100%"
          height="460"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

function DetailsAndForm() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <DetailBlock title="Institute Address">
            <ul className="space-y-5 text-base leading-relaxed text-parchment/80">
              {site.contact.addresses.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </DetailBlock>

          <DetailBlock title="Digital Address">
            <a
              href={`mailto:${site.contact.email}`}
              className="text-base text-parchment hover:text-gold-300"
            >
              {site.contact.email}
            </a>
          </DetailBlock>

          <DetailBlock title="Phone">
            <ul className="space-y-2 text-base">
              {site.contact.phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="text-parchment hover:text-gold-300"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </DetailBlock>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-9">
      <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-300">
        {title}
      </p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [captcha, setCaptcha] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (captcha.trim() !== "13") {
      setError("That doesn't look right — 15 − 2 should equal 13.");
      return;
    }
    setError(null);
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 700);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glow-border glow-border-gold relative rounded-3xl border border-navy-900/10 bg-parchment-warm p-8 sm:p-10"
    >
      <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-600">
        Send us a message
      </p>
      <h2 className="mt-2 font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
        Tell us a little about the student.
      </h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email Address" name="email" type="email" required />
        <Textarea
          label="Message"
          name="message"
          placeholder="Current grade, exam goal, anything we should know…"
          wide
        />
      </div>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <label className="flex items-center gap-3">
          <span className="font-display text-sm text-navy-900">15 − 2 =</span>
          <input
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            inputMode="numeric"
            required
            aria-label="Captcha — fifteen minus two"
            className="w-20 rounded-xl border border-navy-900/15 bg-parchment px-3 py-2 text-center text-navy-900 outline-none transition focus:border-navy-900 focus:ring-2 focus:ring-gold-300/60"
          />
        </label>

        <button
          type="submit"
          disabled={status !== "idle"}
          className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-base font-medium text-parchment transition hover:bg-navy-700 disabled:opacity-60"
        >
          {status === "idle" && (
            <>
              Submit
              <span aria-hidden>→</span>
            </>
          )}
          {status === "sending" && "Sending…"}
          {status === "sent" && "Thanks — we'll be in touch ✓"}
        </button>
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-700">{error}</p>
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
    <label className={`flex flex-col gap-2 ${wide ? "sm:col-span-2" : ""}`}>
      <span className="font-display text-xs uppercase tracking-[0.18em] text-ink-soft">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-navy-900/15 bg-parchment px-4 py-3 text-navy-900 outline-none transition focus:border-navy-900 focus:ring-2 focus:ring-gold-300/60"
      />
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
    <label className={`flex flex-col gap-2 ${wide ? "sm:col-span-2" : ""}`}>
      <span className="font-display text-xs uppercase tracking-[0.18em] text-ink-soft">
        {label}
      </span>
      <textarea
        name={name}
        rows={5}
        placeholder={placeholder}
        className="rounded-xl border border-navy-900/15 bg-parchment px-4 py-3 text-navy-900 outline-none transition focus:border-navy-900 focus:ring-2 focus:ring-gold-300/60"
      />
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
    href: "#",
    cta: "Follow @sklearnings",
  },
];

function CategoryCards() {
  return (
    <section className="bg-navy-900 text-parchment">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-300">
          More ways to reach us
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold sm:text-4xl">
          Pick the channel that fits — every one lands on a real person.
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map((c, i) => {
            const Icon = c.icon;
            const accents = ["cyan", "violet", "sky", "emerald"] as const;
            return (
              <a
                key={c.title}
                href={c.href}
                className="lift glow-border group relative flex h-full flex-col rounded-3xl border border-parchment/10 bg-navy-800/70 p-7 backdrop-blur"
              >
                <PremiumIcon accent={accents[i]} size="md">
                  <Icon />
                </PremiumIcon>
                <h3 className="mt-6 font-display text-xl font-semibold">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-parchment/75">
                  {c.body}
                </p>
                <p className="mt-auto pt-6 text-sm font-medium text-gold-300">
                  {c.cta} →
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ClosingCallout() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10">
      <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-300">
        We are here for you
      </p>
      <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-parchment sm:text-5xl">
        Reach out and start your educational odyssey with SK Learnings today.
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-base text-parchment/70">
        Our commitment extends beyond the classroom. We are here to assist
        you at every step of your educational journey — for any guidance,
        information, or simply a conversation.
      </p>
      <Link
        to="/contact"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-4 text-base font-medium text-navy-950 transition hover:bg-gold-300"
      >
        Book a free consultation
        <span aria-hidden>→</span>
      </Link>
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
