import { Link } from "react-router-dom";
import { testimonials } from "../data/testimonials";
import { videos } from "../data/site";
import { keyFeatures, examsList } from "../data/features";
import { Reveal } from "../components/Reveal";
import { Counter } from "../components/Counter";
import { Marquee } from "../components/Marquee";
import { LiteYouTube } from "../components/LiteYouTube";
import { PremiumIcon } from "../components/PremiumIcon";
import { ThreeDBackground } from "../components/ThreeDBackground";
import { DailyChallenge } from "../components/DailyChallenge";
import { AnatomyExplorer } from "../components/AnatomyExplorer";
import { TopperJourney } from "../components/TopperJourney";


export function Home() {
  return (
    <div className="relative overflow-hidden bg-[#07050f] text-parchment selection:bg-cyan-500/30">
      {/* Global Background Elements */}
      <div className="pointer-events-none absolute inset-0 -z-50 bg-linear-to-b from-[#020617] via-[#070321] to-[#0a0820]" />
      <div className="pointer-events-none absolute inset-0 -z-40 bg-grid-cyan opacity-[0.05] mask-fade-radial fixed" />

      <Hero />
      <ExamMarquee />
      <AboutCompany />
      <AnatomyExplorer />
      <DualCards />
      <KeyFeatures />
      <ExamsGrid />
      <TopperJourney />
      <DailyChallenge />

      <CrackNEET />

      <StatsBar />
      <Testimonials />
      <ClosingCTA />
    </div>
  );
}

function ExamMarquee() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-5 backdrop-blur-sm relative z-10">
      <Marquee
        speed={45}
        items={examsList.map((e) => (
          <span
            key={e}
            className="font-display text-sm font-medium uppercase tracking-[0.32em] text-cyan-200/50 hover:text-cyan-200 transition-colors cursor-default"
          >
            {e}
          </span>
        ))}
      />
    </section>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-parchment pt-28 pb-44 lg:pt-36 lg:pb-56">
      <AmbientOrbs />
      <ThreeDBackground />
      <DNAStrand />
      <MoleculeMotif />
      <HeartbeatLine />
      <WaveFloor />
      <DashboardCards />

      <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-10 z-10">
        <p className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-cyan-400/30 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.32em] text-cyan-200 backdrop-blur shadow-[0_0_15px_-3px_rgba(34,211,238,0.3)]">
          <span className="grid h-4 w-4 place-items-center rounded-full bg-cyan-400/20">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
          </span>
          AI-Powered NEET Coaching · Madurai
        </p>

        <h1
          className="animate-rise mx-auto mt-8 max-w-5xl text-5xl font-semibold tracking-tight sm:text-7xl lg:text-[5.8rem] lg:leading-[0.95]"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-200 via-sky-200 to-violet-300 drop-shadow-[0_0_40px_rgba(34,211,238,0.25)]">
            The SK Learnings
          </span>
        </h1>

        <p
          className="animate-rise mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-parchment/75 sm:text-xl lg:text-2xl"
          style={{ animationDelay: "0.2s" }}
        >
          Crack <span className="font-semibold text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">NEET</span> with{" "}
          <span className="font-semibold text-sky-300">Smart Learning</span> &{" "}
          <span className="font-semibold text-violet-300">AI-Powered Preparation</span>.
        </p>

        <div
          className="animate-rise mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-400 via-sky-400 to-violet-500 px-8 py-4 text-base font-semibold text-white shadow-[0_10px_40px_-10px_rgba(56,189,248,0.6)] transition hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.8)]"
          >
            Start learning
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/10 px-8 py-4 text-base font-medium text-cyan-100 backdrop-blur transition hover:border-cyan-300/80 hover:bg-cyan-400/20"
          >
            Join NEET batch
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-medium text-parchment backdrop-blur transition hover:border-violet-300/60 hover:bg-white/10"
          >
            <PlayBadge />
            Free demo class
          </Link>
        </div>

        <Reveal delay={500} className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/50">
          <span>500+ NEET aspirants mentored</span>
          <span className="hidden sm:inline text-white/20">·</span>
          <span>10 years of medical-entrance focus</span>
          <span className="hidden sm:inline text-white/20">·</span>
          <span>84% success ratio</span>
        </Reveal>
      </div>
    </section>
  );
}

function AmbientOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-30 overflow-hidden">
      <div className="absolute -left-[10%] top-[15%] h-[420px] w-[420px] rounded-full bg-cyan-500/25 blur-[120px] animate-drift-a" />
      <div className="absolute -right-[8%] top-[25%] h-[420px] w-[420px] rounded-full bg-violet-500/30 blur-[120px] animate-drift-b" />
      <div className="absolute left-1/2 bottom-[5%] h-[360px] w-[520px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[140px] animate-drift-c" />
    </div>
  );
}

function DNAStrand() {
  const points = Array.from({ length: 24 }, (_, i) => {
    const t = i / 23;
    const y = t * 800 + 80;
    const phase = t * Math.PI * 4;
    return {
      x1: 60 + Math.sin(phase) * 18,
      x2: 60 + Math.sin(phase + Math.PI) * 18,
      y,
    };
  });
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute left-2 top-0 -z-20 hidden h-full w-32 lg:block opacity-40"
      viewBox="0 0 120 1000"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="dna-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0" />
          <stop offset="20%" stopColor="#67e8f9" stopOpacity="0.7" />
          <stop offset="80%" stopColor="#a78bfa" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d={
          "M " +
          points
            .map((p) => `${p.x1.toFixed(1)} ${p.y.toFixed(1)}`)
            .join(" L ")
        }
        stroke="url(#dna-grad)"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d={
          "M " +
          points
            .map((p) => `${p.x2.toFixed(1)} ${p.y.toFixed(1)}`)
            .join(" L ")
        }
        stroke="url(#dna-grad)"
        strokeWidth="1.4"
        fill="none"
      />
      {points.map((p, i) =>
        i % 2 === 0 ? (
          <line
            key={i}
            x1={p.x1}
            y1={p.y}
            x2={p.x2}
            y2={p.y}
            stroke="#67e8f9"
            strokeWidth="0.8"
            opacity={0.25 + (i % 4) * 0.1}
          />
        ) : null
      )}
    </svg>
  );
}

function MoleculeMotif() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute right-4 top-[55%] -z-20 hidden h-44 w-44 lg:block animate-spin-slow opacity-40"
      viewBox="-100 -100 200 200"
      style={{ transformOrigin: "center" }}
    >
      <g stroke="#a78bfa" strokeWidth="1.1" fill="none" opacity="0.55">
        <circle cx="0" cy="-60" r="6" fill="#67e8f9" opacity="0.4" />
        <circle cx="52" cy="-30" r="6" fill="#a78bfa" opacity="0.4" />
        <circle cx="52" cy="30" r="6" fill="#67e8f9" opacity="0.4" />
        <circle cx="0" cy="60" r="6" fill="#a78bfa" opacity="0.4" />
        <circle cx="-52" cy="30" r="6" fill="#67e8f9" opacity="0.4" />
        <circle cx="-52" cy="-30" r="6" fill="#a78bfa" opacity="0.4" />
        <circle cx="0" cy="0" r="9" fill="#67e8f9" opacity="0.55" />
        <line x1="0" y1="-60" x2="0" y2="0" />
        <line x1="52" y1="-30" x2="0" y2="0" />
        <line x1="52" y1="30" x2="0" y2="0" />
        <line x1="0" y1="60" x2="0" y2="0" />
        <line x1="-52" y1="30" x2="0" y2="0" />
        <line x1="-52" y1="-30" x2="0" y2="0" />
        <line x1="0" y1="-60" x2="52" y2="-30" />
        <line x1="52" y1="-30" x2="52" y2="30" />
        <line x1="52" y1="30" x2="0" y2="60" />
        <line x1="0" y1="60" x2="-52" y2="30" />
        <line x1="-52" y1="30" x2="-52" y2="-30" />
        <line x1="-52" y1="-30" x2="0" y2="-60" />
      </g>
    </svg>
  );
}

function HeartbeatLine() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-1/2 -z-20 hidden h-24 -translate-y-1/2 lg:block opacity-40"
    >
      <svg
        viewBox="0 0 1600 80"
        preserveAspectRatio="none"
        className="h-full w-full opacity-30"
      >
        <defs>
          <linearGradient id="hb-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="0" />
            <stop offset="20%" stopColor="#67e8f9" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#a78bfa" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 L240,40 L260,40 L275,18 L290,62 L305,28 L320,40 L520,40 L540,40 L555,18 L570,62 L585,28 L600,40 L820,40 L840,40 L855,18 L870,62 L885,28 L900,40 L1120,40 L1140,40 L1155,18 L1170,62 L1185,28 L1200,40 L1600,40"
          stroke="url(#hb-grad)"
          strokeWidth="1.6"
          fill="none"
        />
      </svg>
    </div>
  );
}

function WaveFloor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 -z-25 h-[34%] overflow-hidden"
    >
      <svg
        viewBox="0 0 2400 220"
        preserveAspectRatio="none"
        className="h-full w-full opacity-50"
      >
        <defs>
          <linearGradient id="wave-grad-a" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-grad-b" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path fill="url(#wave-grad-b)" opacity="0.7">
          <animate
            attributeName="d"
            dur="14s"
            repeatCount="indefinite"
            values="M0,150 C200,90 400,200 600,150 C800,90 1000,200 1200,150 C1400,90 1600,200 1800,150 C2000,90 2200,200 2400,150 L2400,220 L0,220 Z;M0,170 C200,120 400,180 600,170 C800,110 1000,180 1200,170 C1400,120 1600,180 1800,170 C2000,110 2200,180 2400,170 L2400,220 L0,220 Z;M0,150 C200,90 400,200 600,150 C800,90 1000,200 1200,150 C1400,90 1600,200 1800,150 C2000,90 2200,200 2400,150 L2400,220 L0,220 Z"
          />
        </path>

        <path fill="url(#wave-grad-a)">
          <animate
            attributeName="d"
            dur="18s"
            repeatCount="indefinite"
            values="M0,110 C300,60 500,170 800,110 C1100,50 1300,170 1600,110 C1900,50 2100,170 2400,110 L2400,220 L0,220 Z;M0,130 C300,90 500,150 800,130 C1100,80 1300,150 1600,130 C1900,80 2100,150 2400,130 L2400,220 L0,220 Z;M0,110 C300,60 500,170 800,110 C1100,50 1300,170 1600,110 C1900,50 2100,170 2400,110 L2400,220 L0,220 Z"
          />
        </path>
      </svg>
    </div>
  );
}

function DashboardCards() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
      <FloatCard
        className="left-[1%] top-[5%] animate-card-float"
        accent="cyan"
      >
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-400/20 text-emerald-300">
            <BiologyIcon />
          </span>
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-200">
            Biology
          </p>
        </div>
        <p className="mt-3 text-sm font-medium text-white">
          Human Physiology · Chapter 17
        </p>
        <ProgressBar value={72} accent="emerald" />
        <p className="mt-2 text-[11px] text-white/55">
          72% mastery · weakness: Endocrine
        </p>
      </FloatCard>

      <FloatCard
        className="right-[1%] top-[7%] animate-card-float-alt"
        accent="violet"
      >
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-400/20 text-violet-300">
            <PhysicsIcon />
          </span>
          <p className="text-xs font-semibold uppercase tracking-wider text-violet-200">
            Physics
          </p>
        </div>
        <p className="mt-3 text-sm font-medium text-white">
          Optics · Mock test ready
        </p>
        <BarMini />
        <p className="mt-2 text-[11px] text-white/55">
          +14% improvement vs cohort
        </p>
      </FloatCard>

      <FloatCard
        className="left-[2%] bottom-[2%] animate-card-float-alt"
        accent="sky"
      >
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-400/20 text-sky-300">
            <ChemistryIcon />
          </span>
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-200">
            Chemistry
          </p>
        </div>
        <p className="mt-3 text-sm font-medium text-white">
          Organic — Reaction Mechanisms
        </p>
        <ProgressBar value={58} accent="sky" />
        <p className="mt-2 text-[11px] text-white/55">
          58% complete · 12 chapters left
        </p>
      </FloatCard>

      <FloatCard
        className="right-[2%] bottom-[3%] animate-card-float"
        accent="cyan"
      >
        <div className="flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-wider text-white/55">
            All-India rank
          </p>
          <p className="inline-flex items-center gap-1 text-xs text-emerald-300">
            <ArrowUp /> 1,842 ↑
          </p>
        </div>
        <p className="mt-2 font-display text-4xl font-semibold text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
          4,212
        </p>
        <p className="mt-1 text-[11px] text-white/55">
          Predicted from last 4 mock tests
        </p>
      </FloatCard>
    </div>
  );
}

function FloatCard({
  children,
  className = "",
  accent = "cyan",
}: {
  children: React.ReactNode;
  className?: string;
  accent?: "cyan" | "violet" | "sky";
}) {
  const ring =
    accent === "cyan"
      ? "ring-cyan-400/30 shadow-[0_10px_40px_-12px_rgba(34,211,238,0.45)]"
      : accent === "violet"
        ? "ring-violet-400/30 shadow-[0_10px_40px_-12px_rgba(167,139,250,0.45)]"
        : "ring-sky-400/30 shadow-[0_10px_40px_-12px_rgba(56,189,248,0.45)]";

  return (
    <div
      className={`absolute w-60 rounded-2xl border border-white/10 bg-[#0c1226]/60 p-4 backdrop-blur-xl ring-1 ${ring} ${className}`}
    >
      {children}
    </div>
  );
}

function BarMini() {
  const bars = [40, 62, 35, 78, 50, 90, 70];
  return (
    <div className="mt-3 flex h-12 items-end gap-1.5">
      {bars.map((h, i) => (
        <span
          key={i}
          className="flex-1 rounded-t bg-linear-to-t from-violet-500/40 via-violet-400/70 to-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function ProgressBar({
  value,
  accent = "cyan",
}: {
  value: number;
  accent?: "cyan" | "sky" | "emerald";
}) {
  const fill =
    accent === "cyan"
      ? "bg-linear-to-r from-cyan-400 to-violet-500 shadow-[0_0_10px_rgba(34,211,238,0.4)]"
      : accent === "sky"
        ? "bg-linear-to-r from-sky-400 to-cyan-300 shadow-[0_0_10px_rgba(56,189,248,0.4)]"
        : "bg-linear-to-r from-emerald-400 to-cyan-300 shadow-[0_0_10px_rgba(52,211,153,0.4)]";
  return (
    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10 border border-white/5">
      <div className={`h-full rounded-full ${fill}`} style={{ width: `${value}%` }} />
    </div>
  );
}

function BiologyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4c4 4 12 12 16 16M20 4C16 8 8 16 4 20" />
      <path d="M7 4h10M7 20h10" />
    </svg>
  );
}

function PhysicsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function ChemistryIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 3h6M10 3v6L4 19a2 2 0 0 0 1.7 3h12.6A2 2 0 0 0 20 19l-6-10V3" />
      <line x1="7" y1="14" x2="17" y2="14" />
    </svg>
  );
}

function ArrowUp() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

function PlayBadge() {
  return (
    <span className="grid h-6 w-6 place-items-center rounded-full bg-violet-300/20 text-violet-200">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

function StatsBar() {
  type Item = {
    label: string;
    to?: number;
    suffix?: string;
    prefix?: string;
    text?: string;
  };
  const items: Item[] = [
    { to: 100, suffix: "%", label: "Student satisfaction" },
    { to: 10, label: "Years of experience" },
    { to: 84, suffix: "%", label: "Success ratio per batch" },
  ];
  return (
    <section className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm relative z-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 sm:grid-cols-3 lg:px-10">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 100}>
            <div className="text-center sm:text-left">
              <p className="font-display text-5xl font-semibold tabular-nums text-cyan-300 sm:text-6xl drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                {it.text ? (
                  it.text
                ) : (
                  <Counter
                    to={it.to ?? 0}
                    prefix={it.prefix}
                    suffix={it.suffix}
                  />
                )}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-parchment/60">
                {it.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AboutCompany() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:py-32 lg:px-10 relative z-10">
      <div className="grid gap-10 lg:gap-16 lg:grid-cols-12">
        <Reveal as="div" className="lg:col-span-6">
          <div className="glow-border relative overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-[#0c1226]/80 p-2 backdrop-blur-xl">
            <div className="aspect-video overflow-hidden rounded-3xl">
              <LiteYouTube videoId={videos.intro} title="How to crack NEET" className="h-full w-full" />
            </div>
            <div className="p-5 sm:p-6">
              <p className="font-display text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Watch our intro
              </p>
              <p className="mt-2 font-display text-base sm:text-lg font-semibold text-white">
                How to crack NEET with our Smart Analytics Program
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal as="div" className="lg:col-span-6 self-center" delay={120}>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
            About SK Learnings
          </p>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-parchment/80">
            At The SK Learnings, we are committed to empowering students with
            knowledge and skills that go beyond conventional education. With a
            distinguished legacy spanning a decade, we specialize in coaching
            students from <span className="text-cyan-300 font-semibold drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">3rd to 12th grade</span>,
            focusing on deep analytics and AI-powered preparation.
          </p>
          <p className="mt-6 border-l-2 border-violet-500/50 pl-5 font-display text-lg sm:text-xl italic leading-snug text-violet-200">
            "Success is not just a goal — it's an engineered pathway."
          </p>
        </Reveal>
      </div>

      <Reveal as="div" delay={200} className="mt-20">
        <div className="glow-border relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-linear-to-br from-[#0c1226]/80 to-[#07050f]/80 p-10 backdrop-blur-xl sm:p-16 text-center">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-[80px]" />
          <p className="relative mx-auto max-w-4xl text-base leading-relaxed text-parchment/70">
            Our commitment extends beyond the classroom. With a focus on <span className="font-semibold text-cyan-300">'Individual Intelligence Coaching,'</span>{" "}
            our approach combines personalized analytics, targeted training, and
            genuine care to create a pathway to inevitable success.
          </p>
          <div className="relative mt-10 flex justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-500/10 px-8 py-3.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20 hover:text-white"
            >
              Start Admission Process
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function DualCards() {
  const cards = [
    {
      eyebrow: "Hyper-Personalized",
      body: "intensity of teaching based on our analytics platform, rather than a generic classroom approach.",
      border: "border-cyan-500/30",
      bg: "bg-linear-to-br from-cyan-900/20 to-[#0c1226]/80",
      accent: "text-cyan-300",
      glow: "bg-cyan-500/10",
    },
    {
      eyebrow: "Individual Care",
      body: "from educators — to solve difficulties dynamically, adapting to the student's unique learning curve.",
      border: "border-violet-500/30",
      bg: "bg-linear-to-br from-violet-900/20 to-[#0c1226]/80",
      accent: "text-violet-300",
      glow: "bg-violet-500/10",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10 relative z-10">
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal key={c.eyebrow} delay={i * 120}>
            <article
              className={`lift relative overflow-hidden rounded-[2rem] border ${c.border} ${c.bg} p-10 sm:p-14 backdrop-blur-xl`}
            >
              <div className={`absolute -bottom-20 -right-20 h-64 w-64 rounded-full ${c.glow} blur-[80px]`} />
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-parchment/50">
                Why it matters
              </p>
              <h3 className="mt-6 font-display text-2xl font-semibold leading-snug sm:text-3xl text-white">
                <span className={`${c.accent}`}>{c.eyebrow}</span>{" "}
                {c.body}
              </h3>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function KeyFeatures() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10 relative z-10">
      <Reveal>
        <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Intelligence Features
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Discover what makes SK Learnings structurally different.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {keyFeatures.map((f, i) => {
          const accents = ["cyan", "violet", "sky", "emerald", "cyan"] as const;
          return (
            <Reveal key={f.title} delay={(i % 5) * 90}>
              <article className="lift glow-border group relative flex h-full flex-col rounded-3xl border border-white/10 bg-[#0c1226]/60 p-8 backdrop-blur-xl transition hover:bg-[#0c1226]/80">
                <PremiumIcon accent={accents[i % 5]}>
                  <FeatureIcon name={f.icon} />
                </PremiumIcon>
                <h3 className="mt-6 font-display text-lg font-semibold text-white group-hover:text-cyan-200 transition-colors">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-parchment/60">
                  {f.body}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={500} className="mt-16 text-center">
        <Link
          to="/programs"
          className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:border-cyan-500/50 hover:bg-cyan-500/10"
        >
          Explore All Features
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </Reveal>
    </section>
  );
}

function ExamsGrid() {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/5 bg-white/[0.02] backdrop-blur-sm z-10">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 relative">
        <Reveal className="text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
            We coach for
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Every exam that defines <br className="hidden sm:block" /> the future.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {examsList.map((e, i) => (
            <Reveal key={e} delay={(i % 5) * 60}>
              <div className="text-center group">
                <p className="font-display text-3xl font-semibold uppercase tracking-wider text-white/20 transition-all duration-300 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] sm:text-4xl cursor-default scale-95 group-hover:scale-100">
                  {e}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CrackNEET() {
  return (
    <section className="relative isolate overflow-hidden z-10">
      <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="glow-border relative overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-[#0c1226]/80 p-2 backdrop-blur-xl">
                <div className="aspect-video overflow-hidden rounded-3xl">
                  <LiteYouTube videoId={videos.crack} title="Crack NEET" className="h-full w-full" />
                </div>
              </div>
            </Reveal>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <Reveal delay={120} className="col-span-2 sm:col-span-1">
                <div className="lift relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#07050f]">
                  <LiteYouTube videoId={videos.related} title="More videos" className="h-full w-full" />
                </div>
              </Reveal>

              <Reveal delay={200}>
                <ResultCard year={2021} name="Kajin Prabhu" score={632} />
              </Reveal>

              <Reveal delay={280}>
                <ResultCard year={2021} name="Akash" score={561} />
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-10">
            <Reveal>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                The Outcome
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Crack NEET with <br /> our <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-300 to-violet-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">Smart Program.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-parchment/70">
                Our results speak for themselves. Through precise analytics, targeted mock tests, and uncompromising individual care, we consistently engineer top-tier rankings for our students.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <ul className="mt-8 space-y-4 text-parchment/80">
                {["100+ tests per year", "Micro-topic analytics dashboard", "1-on-1 doubt clearing"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  to="/success-stories"
                  className="group inline-flex items-center gap-2 rounded-full bg-white/5 px-8 py-4 text-sm font-semibold text-white border border-white/10 transition hover:bg-white/10 hover:border-white/20"
                >
                  View Success Stories
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultCard({ year, name, score }: { year: number; name: string; score: number }) {
  return (
    <div className="lift relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0c1226]/80 p-5 backdrop-blur-md text-center">
      <div className="absolute -bottom-10 -right-10 h-20 w-20 rounded-full bg-emerald-500/10 blur-[30px]" />
      <p className="font-display text-[10px] font-semibold uppercase tracking-wider text-parchment/50">
        NEET {year}
      </p>
      <p className="mt-1 font-display text-[15px] font-semibold text-white truncate">
        {name}
      </p>
      <div className="mt-3 mx-auto">
        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 font-display text-sm font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-500/20">
          {score} / 720
        </span>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10 relative z-10">
      <div className="mb-16 text-center">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
            Student Voices
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
            Don't just take our word for it.
          </h2>
        </Reveal>
      </div>

      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 space-y-6">
        {testimonials.slice(0, 6).map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 100}>
            <div className="break-inside-avoid glow-border relative rounded-3xl border border-white/10 bg-[#0c1226]/80 p-8 backdrop-blur-xl hover:bg-[#0c1226] transition-colors">
              <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-[50px]" />
              <div className="flex gap-1 text-cyan-400 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-parchment/80 relative">"{t.quote}"</p>
              <div className="mt-8 flex items-center gap-4 relative">
                <div className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#07050f] font-display text-sm font-semibold text-cyan-300 ring-1 ring-cyan-500/30">
                  <div className="absolute inset-0 rounded-full bg-cyan-400/10 animate-[spin_4s_linear_infinite]" style={{ borderTop: '2px solid rgba(34,211,238,0.5)' }} />
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-[11px] uppercase tracking-wider text-parchment/50">{t.outcome}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24 lg:px-10 z-10">
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
              to="/contact"
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

export function FeatureIcon({ name }: { name: string }) {
  switch (name) {
    case "list":
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>;
    case "id":
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><circle cx="9" cy="11" r="3"></circle><path d="M15 15h2"></path><path d="M15 11h2"></path><path d="M5 19h8"></path></svg>;
    case "chart":
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>;
    case "bulb":
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-7 7c0 2.2 1 4.1 2.5 5.5C8.9 15.9 9.5 17 9.5 18v2h5v-2c0-1 .6-2.1 1.5-3.5A7 7 0 0 0 12 2z"></path></svg>;
    case "building":
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>;
    default:
      return null;
  }
}
