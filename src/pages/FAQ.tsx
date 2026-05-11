import { useState } from "react";
import { Link } from "react-router-dom";
import { faqs, type FAQ as FAQItem, type FAQSection } from "../data/faqs";
import { Reveal } from "../components/Reveal";

const SECTIONS: FAQSection[] = ["General", "Individual NEET Coaching"];

export function FAQ() {
  const [openKey, setOpenKey] = useState<string | null>(`0-${faqs[0].question}`);

  return (
    <div className="relative overflow-hidden selection:bg-cyan-500/30">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 -z-50 bg-linear-to-b from-[#020617] via-[#070321] to-[#0a0820]" />
      <div className="pointer-events-none absolute inset-0 -z-40 bg-grid-cyan opacity-[0.15] mask-fade-radial" />

      {/* Glow Orbs */}
      <div aria-hidden className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-12 lg:px-10 lg:pt-48">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-violet-400/30 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.32em] text-violet-300 backdrop-blur">
            Frequently Asked
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            The questions parents and students ask before they <span className="bg-clip-text text-transparent bg-linear-to-r from-violet-300 to-cyan-400 drop-shadow-[0_0_30px_rgba(167,139,250,0.3)]">trust us.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-parchment/70">
            We've answered them honestly here. If something still feels unclear,
            we'd rather you ask us directly — that's what the free consultation is for.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <nav aria-label="FAQ sections" className="mt-12 flex flex-wrap gap-3">
            {SECTIONS.map((s) => (
              <a
                key={s}
                href={`#${slug(s)}`}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-parchment/70 transition hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white"
              >
                {s} ({faqs.filter((f) => f.section === s).length})
              </a>
            ))}
          </nav>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 relative z-10">
        {SECTIONS.map((section, idx) => {
          const items = faqs
            .map((f, i) => ({ faq: f, originalIndex: i }))
            .filter((it) => it.faq.section === section);

          return (
            <Reveal key={section} delay={idx * 100}>
              <div
                id={slug(section)}
                className="scroll-mt-32 mt-16 first:mt-0"
              >
                <div className="flex items-center gap-4">
                  <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    {section}
                  </h2>
                  <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium text-cyan-300 ring-1 ring-inset ring-cyan-500/20">
                    {items.length} questions
                  </span>
                </div>

                <ul className="glow-border relative mt-8 divide-y divide-white/10 rounded-3xl border border-white/10 bg-[#0c1226]/60 backdrop-blur-xl">
                  {items.map(({ faq, originalIndex }) => {
                    const key = `${originalIndex}-${faq.question}`;
                    return (
                      <FAQRow
                        key={key}
                        faq={faq}
                        number={originalIndex + 1}
                        open={openKey === key}
                        onToggle={() =>
                          setOpenKey(openKey === key ? null : key)
                        }
                      />
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </section>

      <ClosingCTA />
    </div>
  );
}

function FAQRow({
  faq,
  number,
  open,
  onToggle,
}: {
  faq: FAQItem;
  number: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-start justify-between gap-6 px-6 py-6 text-left sm:px-8 transition-colors hover:bg-white/[0.02]"
      >
        <div className="flex items-start gap-5">
          <span className="font-display text-sm font-medium text-cyan-400 tabular-nums">
            {String(number).padStart(2, "0")}
          </span>
          <p className={`font-display text-lg font-semibold transition-colors sm:text-xl ${open ? "text-cyan-200" : "text-white group-hover:text-cyan-100"}`}>
            {faq.question}
          </p>
        </div>
        <span
          aria-hidden
          className={`mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all ${open ? "rotate-45 border-cyan-400 bg-cyan-400 text-[#07050f] shadow-[0_0_15px_-3px_rgba(34,211,238,0.5)]" : "border-white/20 text-white group-hover:border-white/40"
            }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <div
        className={`grid overflow-hidden px-6 transition-[grid-template-rows] duration-300 ease-out sm:px-8 ${open ? "grid-rows-[1fr] pb-8 opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="min-h-0 sm:pl-12">
          {faq.answer && (
            <p className="max-w-3xl text-base leading-relaxed text-parchment/70">
              {faq.answer}
            </p>
          )}

          {faq.points && (
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              {faq.points.map((p) => (
                <div
                  key={p.heading}
                  className="rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm transition hover:bg-white/10"
                >
                  <dt className="font-display text-base font-semibold text-cyan-100">
                    {p.heading}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-parchment/60">
                    {p.body}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {faq.summary && (
            <p className="mt-6 max-w-3xl border-l-2 border-cyan-500/50 pl-4 text-base italic leading-relaxed text-cyan-100/80">
              {faq.summary}
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

function ClosingCTA() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24 lg:px-10">
      <Reveal>
        <div className="glow-border relative overflow-hidden rounded-[2.5rem] border border-cyan-500/20 bg-linear-to-b from-[#0a1230] to-[#07050f] p-10 text-center backdrop-blur-xl sm:p-16">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-screen" />
          <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[100px]" />

          <h2 className="relative font-display text-4xl font-semibold text-white sm:text-5xl">
            Still have a question we <br className="hidden sm:block" /> haven't answered?
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-lg text-parchment/70">
            We'd rather give you a real answer in a real conversation than try
            to guess what you wanted to know. Pick up the phone or send us a note.
          </p>
          <div className="relative mt-10 flex justify-center">
            <Link
              to="/contact#send-message"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-400 via-sky-400 to-violet-500 px-8 py-4 text-base font-semibold text-white shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)] transition hover:scale-105 hover:shadow-[0_0_40px_-5px_rgba(34,211,238,0.7)]"
            >
              Get in Touch
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/\s+/g, "-");
}
