import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Counter } from "../components/Counter";
import { PremiumIcon } from "../components/PremiumIcon";

export function About() {
  return (
    <div className="relative overflow-hidden selection:bg-cyan-500/30">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 -z-50 bg-linear-to-b from-[#020617] via-[#070321] to-[#0a0820]" />
      <div className="pointer-events-none absolute inset-0 -z-40 bg-grid-cyan opacity-[0.15] mask-fade-radial" />

      <AboutHero />
      <IntelligenceBento />
      <MissionVision />
      <ClosingCTA />
    </div>
  );
}

function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32">
      {/* Glow Orbs */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-600/20 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div aria-hidden className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-[100px] animate-drift-a" />

      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/30 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.32em] text-cyan-200 backdrop-blur">
            <span className="grid h-4 w-4 place-items-center rounded-full bg-cyan-400/20">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
            </span>
            The Next Evolution in Learning
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-8 font-display text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl">
            Extra <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-300 via-sky-300 to-violet-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">Intelligence.</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-parchment/70 sm:text-2xl">
            We don't just teach; we decode learning patterns. By merging <strong className="text-white font-medium">expert pedagogy</strong> with <strong className="text-cyan-200 font-medium">smart analytics</strong>, we engineer a pathway to inevitable success for every medical and engineering aspirant.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function IntelligenceBento() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <Reveal>
        <div className="mb-12">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-5xl">
            Powered by Insight. <br className="hidden sm:block" /> Driven by Results.
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2">
        {/* Large Card: AI Analytics */}
        <Reveal as="div" delay={100} className="md:col-span-2 md:row-span-2">
          <div className="glow-border relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0c1226]/80 p-8 backdrop-blur-xl sm:p-12 lift">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-[80px]" />

            <PremiumIcon accent="cyan">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
            </PremiumIcon>

            <h3 className="mt-8 font-display text-3xl font-semibold text-white sm:text-4xl">Smart Analytics Matrix</h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-parchment/70">
              Our proprietary assessment system breaks down student performance into hyper-specific micro-topics. We don't just tell you that you're weak in Physics; we pinpoint exactly which step of an Optics equation is slowing you down.
            </p>

            {/* Mock UI Element */}
            <div className="mt-10 rounded-2xl border border-white/5 bg-white/5 p-6">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-cyan-200">
                <span>Reaction Mechanisms Mastery</span>
                <span>88%</span>
              </div>
              <div className="mt-3 flex h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-linear-to-r from-cyan-400 to-violet-500" style={{ width: '88%' }} />
              </div>
              <div className="mt-6 flex gap-2">
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300 ring-1 ring-inset ring-emerald-500/20">Target Met</span>
                <span className="inline-flex items-center rounded-full bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-300 ring-1 ring-inset ring-violet-500/20">+14% MoM</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Medium Card 1: Precision Targeting */}
        <Reveal as="div" delay={200} className="md:col-span-1 md:row-span-1">
          <div className="glow-border relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0c1226]/80 p-8 backdrop-blur-xl lift">
            <PremiumIcon accent="violet">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
            </PremiumIcon>
            <h3 className="mt-6 font-display text-2xl font-semibold text-white">Precision Targeting</h3>
            <p className="mt-3 text-sm leading-relaxed text-parchment/70">
              Our curriculum dynamically adapts to individual learning speeds, ensuring foundational gaps are filled before advancing to complex NEET/JEE concepts.
            </p>
          </div>
        </Reveal>

        {/* Medium Card 2: 10 Years Legacy */}
        <Reveal as="div" delay={300} className="md:col-span-1 md:row-span-1">
          <div className="glow-border relative h-full overflow-hidden rounded-3xl border border-cyan-500/30 bg-linear-to-br from-cyan-900/40 to-[#0c1226]/80 p-8 backdrop-blur-xl lift">
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-[50px]" />
            <div className="font-display text-5xl font-semibold text-cyan-300">
              <Counter to={10} suffix="+" />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-white">Years of Excellence</h3>
            <p className="mt-2 text-sm leading-relaxed text-parchment/80">
              A decade of refining our teaching methodologies to create an unbeatable ecosystem for medical and engineering aspirants.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="relative border-y border-white/10 bg-white/[0.02] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-square max-w-md overflow-hidden rounded-full border border-white/10 bg-[#07050f] p-8 shadow-[0_0_60px_-15px_rgba(139,92,246,0.3)]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/40 via-transparent to-transparent" />
              <div className="relative flex h-full w-full items-center justify-center rounded-full border border-dashed border-violet-500/30">
                <div className="flex h-[80%] w-[80%] items-center justify-center rounded-full border border-violet-400/20 bg-violet-950/50 backdrop-blur-md">
                  <span className="font-display text-4xl font-semibold tracking-widest text-violet-200">SK.</span>
                </div>
              </div>

              {/* Orbital elements */}
              <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 animate-[spin_20s_linear_infinite] rounded-full border border-white/5">
                <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
              </div>
              <div className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 animate-[spin_30s_linear_infinite_reverse] rounded-full border border-white/5">
                <div className="absolute bottom-1/4 right-0 h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.8)]" />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={100}>
              <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                The Formula for <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-300 to-sky-400">Inevitable Success.</span>
              </p>
              <p className="mt-6 text-lg leading-relaxed text-parchment/70">
                Our vision extends beyond textbooks. SK Learnings is a catalyst for transformation, combining personalized coaching, advanced analytics, and genuine mentorship to unlock every student's latent potential.
              </p>
              <p className="mt-6 border-l-2 border-violet-500/50 pl-6 text-xl italic text-violet-200/80">
                "Individual Analytics + Training + Care = Inevitable Success."
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <Reveal delay={200}>
                <div className="rounded-2xl bg-white/5 p-6 backdrop-blur">
                  <h4 className="font-display text-xl font-semibold text-cyan-200">Our Mission</h4>
                  <p className="mt-3 text-sm text-parchment/60">To foster curiosity, critical thinking, and a lifelong love for learning through an environment that adapts to the student, not the other way around.</p>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="rounded-2xl bg-white/5 p-6 backdrop-blur">
                  <h4 className="font-display text-xl font-semibold text-violet-300">Holistic Care</h4>
                  <p className="mt-3 text-sm text-parchment/60">Our seasoned professionals act as mentors, guiding students through rigorous academic challenges while supporting personal and emotional growth.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-32 lg:px-10">
      <Reveal>
        <div className="glow-border relative overflow-hidden rounded-[2.5rem] border border-cyan-500/20 bg-linear-to-b from-[#0a1230] to-[#07050f] p-10 text-center backdrop-blur-xl sm:p-16">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-screen" />
          <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[100px]" />

          <h2 className="relative font-display text-4xl font-semibold text-white sm:text-5xl">
            Ready to experience the <br className="hidden sm:block" /> SK Learnings difference?
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-lg text-parchment/70">
            Join the community of top achievers. Let our extra intelligence become your academic advantage.
          </p>
          <div className="relative mt-10 flex justify-center">
            <Link
              to="/contact#send-message"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-400 via-sky-400 to-violet-500 px-8 py-4 text-base font-semibold text-white shadow-[0_0_30px_-5px_rgba(34,211,238,0.5)] transition hover:scale-105 hover:shadow-[0_0_40px_-5px_rgba(34,211,238,0.7)]"
            >
              Book a Free Analytics Session
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
