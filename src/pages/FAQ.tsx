import { useState } from "react";
import { Link } from "react-router-dom";
import { faqs, type FAQ as FAQItem, type FAQSection } from "../data/faqs";

const SECTIONS: FAQSection[] = ["General", "Individual NEET Coaching"];

export function FAQ() {
  const [openKey, setOpenKey] = useState<string | null>(`0-${faqs[0].question}`);

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-10 lg:pt-28">
        <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-300">
          Frequently Asked
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-parchment sm:text-6xl lg:text-7xl">
          The questions parents and students ask before they trust us with their preparation.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-parchment/70">
          We've answered them honestly here. If something still feels unclear,
          we'd rather you ask us directly — that's what the consultation is for.
        </p>

        <nav aria-label="FAQ sections" className="mt-10 flex flex-wrap gap-3">
          {SECTIONS.map((s) => (
            <a
              key={s}
              href={`#${slug(s)}`}
              className="rounded-full border border-parchment/20 px-5 py-2 text-sm text-parchment/80 transition hover:border-gold-400/60 hover:text-parchment"
            >
              {s} ({faqs.filter((f) => f.section === s).length})
            </a>
          ))}
        </nav>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        {SECTIONS.map((section) => {
          const items = faqs
            .map((f, i) => ({ faq: f, originalIndex: i }))
            .filter((it) => it.faq.section === section);

          return (
            <div
              key={section}
              id={slug(section)}
              className="scroll-mt-32 mt-12 first:mt-0"
            >
              <h2 className="font-display text-2xl font-semibold text-parchment sm:text-3xl">
                {section}
              </h2>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-gold-300">
                {items.length} questions
              </p>

              <ul className="glow-border glow-border-gold relative mt-6 divide-y divide-navy-900/10 rounded-3xl border border-navy-900/10 bg-parchment-warm">
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
          );
        })}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-3xl bg-navy-900 p-10 text-parchment sm:p-14">
          <h2 className="max-w-3xl font-display text-3xl font-semibold sm:text-4xl">
            Still have a question we haven't answered?
          </h2>
          <p className="mt-4 max-w-2xl text-base text-parchment/75">
            We'd rather give you a real answer in a real conversation than try
            to guess what you wanted to know. Pick up the phone or send us a
            note.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-4 text-base font-medium text-navy-900 transition hover:bg-gold-300"
          >
            Get in touch
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
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
        className="flex w-full items-start justify-between gap-6 px-6 py-6 text-left sm:px-8"
      >
        <div className="flex items-start gap-5">
          <span className="font-display text-sm text-gold-600 tabular-nums">
            {String(number).padStart(2, "0")}
          </span>
          <p className="font-display text-lg font-semibold text-navy-900 sm:text-xl">
            {faq.question}
          </p>
        </div>
        <span
          aria-hidden
          className={`mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-navy-900/20 text-navy-900 transition ${
            open ? "rotate-45 bg-navy-900 text-parchment" : ""
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
        className={`grid overflow-hidden px-6 transition-[grid-template-rows] duration-300 ease-out sm:px-8 ${
          open ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 sm:pl-12">
          {faq.answer && (
            <p className="max-w-3xl text-base leading-relaxed text-ink-soft">
              {faq.answer}
            </p>
          )}

          {faq.points && (
            <dl className="mt-2 grid gap-4 sm:grid-cols-2">
              {faq.points.map((p) => (
                <div
                  key={p.heading}
                  className="rounded-2xl border border-navy-900/10 bg-parchment p-5"
                >
                  <dt className="font-display text-base font-semibold text-navy-900">
                    {p.heading}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {p.body}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {faq.summary && (
            <p className="mt-5 max-w-3xl border-l-2 border-gold-400 pl-4 text-base italic leading-relaxed text-navy-900">
              {faq.summary}
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/\s+/g, "-");
}
