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
    <div className="relative overflow-hidden selection:bg-cyan-500/30">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 -z-50 bg-linear-to-b from-[#020617] via-[#070321] to-[#0a0820]" />
      <div className="pointer-events-none absolute inset-0 -z-40 bg-grid-cyan opacity-[0.15] mask-fade-radial" />

      {/* Glow Orbs */}
      <div aria-hidden className="pointer-events-none absolute left-0 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/20 blur-[120px]" />

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-12 lg:px-10 lg:pt-48">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/30 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.32em] text-cyan-200 backdrop-blur">
            Success Stories
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            The students who walked in nervous and walked out into <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-300 to-violet-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">medical school.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8 max-w-3xl text-lg leading-relaxed text-parchment/70 space-y-4">
            <p>
              Every student’s journey is unique, and that’s where individual coaching comes into play. At SK Learnings NEET Individual Coaching center, we believe in providing a personalized coaching experience that caters to the distinct needs of each learner.
            </p>
            <p>
              We understand that the one-size-fits-all approach doesn’t work when it comes to education. That’s why we’ve developed solutions for every struggling student.
            </p>
            <p>
              Our dedicated coaches take the time to understand your strengths, weaknesses, and personal learning style. This tailored approach ensures that you’re not just another face in the crowd, but a valued individual with unique talents and challenges. Whether you’re grappling with complex concepts or seeking to excel further, our individual coaching sessions are designed to give you the tools and confidence you need to succeed.
            </p>
          </div>
        </Reveal>
      </section>

      <PerformanceBanners />

      <section className="border-y border-white/10 bg-white/[0.02] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-6 lg:px-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-6 py-2.5 text-sm font-medium transition-all ${filter === f
                  ? "border-cyan-400 bg-cyan-500/20 text-cyan-200 shadow-[0_0_20px_-5px_rgba(34,211,238,0.4)]"
                  : "border-white/10 bg-white/5 text-parchment/70 hover:border-white/30 hover:bg-white/10 hover:text-white"
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

      <ClosingCTA />
    </div>
  );
}

function StoryCard({ story }: { story: Story }) {
  return (
    <article className="lift glow-border group relative flex h-full flex-col rounded-3xl border border-white/10 bg-[#0c1226]/80 p-8 backdrop-blur-xl">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-[50px] transition-opacity group-hover:bg-cyan-400/20" />

      <header className="flex items-center gap-4">
        <div className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#07050f] font-display text-xl font-semibold text-cyan-300 ring-1 ring-cyan-500/30">
          <div className="absolute inset-0 rounded-full bg-cyan-400/10 animate-[spin_4s_linear_infinite]" style={{ borderTop: '2px solid rgba(34,211,238,0.5)' }} />
          <span className="relative">{story.initials}</span>
        </div>
        <div>
          <p className="font-display text-lg font-semibold text-white">
            {story.name}
          </p>
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-parchment/60 mt-1">
            <span className="text-cyan-300">{story.exam}</span>
            <span>·</span>
            <span>{story.year}</span>
          </div>
        </div>
      </header>

      <blockquote className="mt-6 text-[15px] leading-relaxed text-parchment/80">
        &ldquo;{story.quote}&rdquo;
      </blockquote>

      <footer className="mt-auto pt-8">
        <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-wider text-violet-300">
            Outcome
          </p>
          <p className="mt-1 font-display text-lg font-semibold text-white">
            {story.outcome}
          </p>
          {story.rank && (
            <p className="mt-2 inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300 ring-1 ring-inset ring-emerald-500/20">
              {story.rank}
            </p>
          )}
        </div>
      </footer>
    </article>
  );
}

function ClosingCTA() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24 lg:px-10">
      <Reveal>
        <div className="glow-border relative overflow-hidden rounded-[2.5rem] border border-violet-500/20 bg-linear-to-b from-[#0a1230] to-[#07050f] p-10 text-center backdrop-blur-xl sm:p-16">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-screen" />
          <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[100px]" />

          <h2 className="relative font-display text-4xl font-semibold text-white sm:text-5xl">
            Want to be the next name <br className="hidden sm:block" /> on this page?
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-lg text-parchment/70">
            We sit down with a small number of new students each cycle. The
            conversation costs nothing — and tells you more than any brochure can.
          </p>
          <div className="relative mt-10 flex justify-center">
            <Link
              to="/contact#send-message"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-500 via-sky-400 to-cyan-400 px-8 py-4 text-base font-semibold text-white shadow-[0_0_30px_-5px_rgba(167,139,250,0.5)] transition hover:scale-105 hover:shadow-[0_0_40px_-5px_rgba(167,139,250,0.7)]"
            >
              Book a Free Consultation
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function PerformanceBanners() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 z-10 relative">
      <Reveal>
        <div className="glow-border relative overflow-hidden rounded-[2.5rem] border border-cyan-500/20 bg-[#0c1226]/80 p-2 sm:p-4 backdrop-blur-xl mb-12 shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-transform hover:scale-[1.01]">
          <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]" />
          <img
            src="/performance-banner.jpg"
            alt="Our Individual Coaching Performance in NEET"
            className="w-full h-auto rounded-2xl relative z-10"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              const fallback = document.getElementById('perf-fallback-1');
              if (fallback) fallback.style.display = 'block';
            }}
          />
          <div id="perf-fallback-1" className="hidden p-8 text-center text-cyan-300 font-display border border-dashed border-cyan-500/30 rounded-2xl">
            Save your first attached image as 'performance-banner.jpg' in the public folder.
          </div>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="glow-border relative overflow-hidden rounded-[2.5rem] border border-cyan-500/20 bg-[#0c1226]/80 p-2 sm:p-4 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-transform hover:scale-[1.01]">
          <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-violet-500/10 blur-[80px]" />
          <img
            src="/neet-achievers.jpg"
            alt="NEET Achievers"
            className="w-full h-auto rounded-2xl relative z-10"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              const fallback = document.getElementById('perf-fallback-2');
              if (fallback) fallback.style.display = 'block';
            }}
          />
          <div id="perf-fallback-2" className="hidden p-8 text-center text-violet-300 font-display border border-dashed border-violet-500/30 rounded-2xl">
            Save your second attached image as 'neet-achievers.jpg' in the public folder.
          </div>
        </div>
      </Reveal>
    </section>
  );
}
