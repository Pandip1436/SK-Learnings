import { Link } from "react-router-dom";
import { programs } from "../data/programs";
import { Reveal } from "../components/Reveal";
import { PremiumIcon } from "../components/PremiumIcon";

export function Programs() {
  return (
    <div className="relative overflow-hidden selection:bg-cyan-500/30">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 -z-50 bg-linear-to-b from-[#020617] via-[#070321] to-[#0a0820]" />
      <div className="pointer-events-none absolute inset-0 -z-40 bg-grid-cyan opacity-[0.15] mask-fade-radial" />

      {/* Ambient Orbs */}
      <div aria-hidden className="pointer-events-none absolute -left-1/4 top-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-cyan-600/20 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -right-1/4 top-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-violet-600/20 blur-[120px]" />

      <Header />
      <ProgramsList />
      <ClosingCTA />
    </div>
  );
}

function Header() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-32 pb-12 text-center lg:px-10 lg:pt-48">
      <Reveal>
        <p className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/30 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.32em] text-cyan-200 backdrop-blur">
          Educational Pathways
        </p>
      </Reveal>
      <Reveal delay={100}>
        <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.05] text-white sm:text-7xl lg:text-8xl">
          Built for the <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-300 via-sky-300 to-violet-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">Exam.</span> <br />
          Shaped by the <span className="italic font-light">Student.</span>
        </h1>
      </Reveal>
      <Reveal delay={200}>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-parchment/70 sm:text-xl">
          Every program we run is taught by senior faculty, mentored one-on-one, and continually rebalanced against the student's actual performance — not a fixed syllabus.
        </p>
      </Reveal>
    </section>
  );
}

function ProgramsList() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-2">
        {programs.map((p, i) => (
          <Reveal key={p.slug} delay={i * 100}>
            <article className="lift glow-border group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0c1226]/60 p-8 backdrop-blur-xl transition hover:bg-[#0c1226]/80 sm:p-12">
              {/* Corner Accent Glow */}
              <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-0 blur-[80px] transition-opacity group-hover:opacity-20 ${p.accent === 'cyan' ? 'bg-cyan-500' : p.accent === 'violet' ? 'bg-violet-500' : p.accent === 'sky' ? 'bg-sky-500' : 'bg-emerald-500'
                }`} />

              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <p className={`font-display text-xs font-semibold uppercase tracking-[0.22em] ${p.accent === 'cyan' ? 'text-cyan-300' : p.accent === 'violet' ? 'text-violet-300' : p.accent === 'sky' ? 'text-sky-300' : 'text-emerald-300'
                    }`}>
                    Program 0{i + 1}
                  </p>
                  <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
                    {p.name}
                  </h2>
                  <p className="mt-2 font-display text-lg text-parchment/50">
                    {p.tagline}
                  </p>
                </div>
                <PremiumIcon accent={p.accent} size="lg">
                  <ProgramIcon name={p.slug} />
                </PremiumIcon>
              </div>

              <div className="mt-10 grid gap-10 lg:grid-cols-2">
                <div>
                  <p className="text-base leading-relaxed text-parchment/70">
                    {p.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">Target Audience</p>
                      <p className="mt-1 font-medium text-white">{p.grades}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">Duration</p>
                      <p className="mt-1 font-medium text-white">{p.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/5 bg-white/5 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Key Highlights</p>
                  <ul className="mt-6 space-y-4">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-parchment/80">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`mt-0.5 shrink-0 ${p.accent === 'cyan' ? 'text-cyan-400' : p.accent === 'violet' ? 'text-violet-400' : p.accent === 'sky' ? 'text-sky-400' : 'text-emerald-400'
                          }`}><path d="M20 6 9 17l-5-5" /></svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 flex pt-8 border-t border-white/5">
                <Link
                  to="/contact#send-message"
                  className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 ${p.accent === 'cyan' ? 'bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20' :
                      p.accent === 'violet' ? 'bg-violet-500/10 border border-violet-500/20 hover:bg-violet-500/20' :
                        p.accent === 'sky' ? 'bg-sky-500/10 border border-sky-500/20 hover:bg-sky-500/20' :
                          'bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20'
                    }`}
                >
                  Talk to a mentor
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-32 text-center lg:px-10">
      <Reveal>
        <div className="glow-border relative overflow-hidden rounded-[2.5rem] border border-cyan-500/20 bg-linear-to-b from-[#0a1230] to-[#07050f] p-10 text-center backdrop-blur-xl sm:p-16">
          <h2 className="relative font-display text-4xl font-semibold text-white sm:text-5xl">
            Not sure which <br className="hidden sm:block" /> pathway is right for you?
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-lg text-parchment/70">
            Book a free 1-on-1 analytics session where we'll evaluate your current standing and recommend the perfect coaching intensity.
          </p>
          <div className="relative mt-10 flex justify-center">
            <Link
              to="/contact#send-message"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-400 via-sky-400 to-violet-500 px-8 py-4 text-base font-semibold text-white shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)] transition hover:scale-105"
            >
              Start Your Analytics Session
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ProgramIcon({ name }: { name: string }) {
  if (name === 'neet') return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M5 12h14" /><circle cx="12" cy="12" r="10" /></svg>;
  if (name === 'jee') return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>;
  if (name === 'home-tuition') return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
  if (name === 'foundation') return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22v-5M9 7l3 3 3-3M9 12l3 3 3-3M12 2v2" /></svg>;
  if (name === 'boards') return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>;
  if (name === 'olympiad') return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>;
  if (name === 'residential') return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 7h18M3 11h18M3 15h18M5 3h14a2 2 0 0 1 2 2v16H3V5a2 2 0 0 1 2-2z" /></svg>;
  return null;
}
