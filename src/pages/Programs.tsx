import { Link } from "react-router-dom";
import { programs } from "../data/programs";
import { Reveal } from "../components/Reveal";

export function Programs() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-10 lg:pt-28">
        <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-300">
          Programs
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-parchment sm:text-6xl lg:text-7xl">
          Built for the exam. Shaped by the student.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-parchment/70">
          Every program we run is taught by senior faculty, mentored
          one-on-one, and continually rebalanced against the student's actual
          performance — not a fixed syllabus.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="space-y-6">
          {programs.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
            <article
              className="glow-border glow-border-gold relative grid gap-8 rounded-3xl border border-navy-900/10 bg-parchment-warm p-8 sm:p-12 lg:grid-cols-12"
            >
              <div className="lg:col-span-4">
                <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-600">
                  Program 0{i + 1}
                </p>
                <h2 className="mt-3 font-display text-4xl font-semibold text-navy-900 sm:text-5xl">
                  {p.name}
                </h2>
                <p className="mt-2 font-display text-lg text-gold-700">
                  {p.tagline}
                </p>

                <dl className="mt-8 space-y-4 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-ink-soft">
                      Audience
                    </dt>
                    <dd className="mt-1 font-medium text-navy-900">
                      {p.grades}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-ink-soft">
                      Duration
                    </dt>
                    <dd className="mt-1 font-medium text-navy-900">
                      {p.duration}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="lg:col-span-8">
                <p className="text-lg leading-relaxed text-ink-soft">
                  {p.description}
                </p>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 rounded-2xl border border-navy-900/10 bg-parchment p-4 text-sm text-navy-900"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0 text-gold-600"
                        aria-hidden
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-medium text-parchment transition hover:bg-navy-700"
                  >
                    Talk to a mentor
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
