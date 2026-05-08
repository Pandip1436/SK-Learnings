import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { stories, type Story } from "../data/stories";
import { Reveal } from "../components/Reveal";

const FILTERS = ["All", "NEET", "JEE", "Boards", "Olympiad"] as const;
type Filter = (typeof FILTERS)[number];

export function SuccessStories() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () => (filter === "All" ? stories : stories.filter((s) => s.exam === filter)),
    [filter],
  );

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-10 lg:pt-28">
        <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-300">
          Success Stories
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-parchment sm:text-6xl lg:text-7xl">
          The students who walked in nervous and walked out into medical school.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-parchment/70">
          Every name below is a student we mentored personally. The exams are
          theirs. The work is theirs. We just gave them the plan and the room
          to execute it.
        </p>
      </section>

      <section className="border-y border-parchment/10">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-6 lg:px-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-5 py-2 text-sm transition ${
                filter === f
                  ? "border-gold-400 bg-gold-400 text-navy-950"
                  : "border-parchment/20 text-parchment/80 hover:border-parchment/60"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((s, i) => (
            <Reveal key={`${s.name}-${s.year}`} delay={(i % 3) * 100}>
              <StoryCard story={s} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-3xl border border-navy-900/10 bg-parchment-warm p-10 sm:p-16">
          <h2 className="max-w-3xl font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Want to be the next name on this page?
          </h2>
          <p className="mt-4 max-w-2xl text-base text-ink-soft">
            We sit down with a small number of new students each cycle. The
            conversation costs nothing — and tells you more than any brochure can.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-4 text-base font-medium text-parchment transition hover:bg-navy-700"
          >
            Book a free consultation
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

function StoryCard({ story }: { story: Story }) {
  return (
    <article className="lift glow-border glow-border-gold group relative flex h-full flex-col rounded-3xl border border-navy-900/10 bg-parchment-warm p-7 hover:shadow-xl hover:shadow-navy-900/5">
      <header className="flex items-center gap-4">
        <div className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-linear-to-br from-navy-900 to-navy-700 font-display text-xl font-semibold text-gold-300 ring-2 ring-gold-400/30 shadow-lg shadow-navy-900/20">
          <span className="absolute inset-0 rounded-full bg-linear-to-br from-gold-400/0 to-gold-400/20" />
          <span className="relative">{story.initials}</span>
        </div>
        <div>
          <p className="font-display text-lg font-semibold text-navy-900">
            {story.name}
          </p>
          <p className="text-xs uppercase tracking-wider text-ink-soft">
            {story.exam} · {story.year}
          </p>
        </div>
      </header>

      <blockquote className="mt-6 text-[15px] leading-relaxed text-ink-soft">
        &ldquo;{story.quote}&rdquo;
      </blockquote>

      <footer className="mt-auto pt-6">
        <div className="rounded-2xl border border-navy-900/10 bg-parchment p-4">
          <p className="text-xs uppercase tracking-wider text-gold-700">
            Outcome
          </p>
          <p className="mt-1 font-display text-base font-semibold text-navy-900">
            {story.outcome}
          </p>
          {story.rank && (
            <p className="mt-1 text-xs text-ink-soft">{story.rank}</p>
          )}
        </div>
      </footer>
    </article>
  );
}
