import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";

const pillars = [
  {
    title: "What Sets Us Apart",
    body: "Envisioning a future where every student realizes their full potential, our mission is to provide more than just education. We strive to create an environment that fosters curiosity, critical thinking, and a love for learning.",
  },
  {
    title: "Our Mission",
    body: "Our team of educators comprises seasoned professionals who bring a wealth of experience and expertise to the classroom. Beyond imparting knowledge, our faculty members serve as mentors, guiding students not only through academic challenges but also towards personal growth and success.",
  },
  {
    title: "Faculty Excellence",
    body: "Our team of educators comprises seasoned professionals who bring a wealth of experience and expertise to the classroom. Beyond imparting knowledge, our faculty members serve as mentors, guiding students not only through academic challenges but also towards personal growth and success.",
  },
  {
    title: "Holistic Development",
    body: "We believe that education extends beyond textbooks. SK Learnings is a place where students engage in a holistic learning experience, participating in extracurricular activities, leadership programs, and community initiatives. Our goal is to shape well-rounded individuals equipped for the challenges of the future.",
  },
];

export function About() {
  return (
    <>
      <Hero />
      <Intro />
      <Pillars />
      <ClosingCTAs />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/3 h-[440px] w-[440px] rounded-full bg-gold-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center lg:px-10 lg:pt-28 lg:pb-24">
        <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-300">
          About SK Learnings
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] text-parchment sm:text-6xl lg:text-7xl">
          About us.
        </h1>

        <p className="mx-auto mt-12 max-w-3xl border-l-2 border-gold-400 pl-6 text-left font-display text-2xl leading-snug text-parchment sm:pl-10 sm:text-4xl">
          We focus mainly on students who were struggling in the basics — and
          give them success.
        </p>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="border-y border-parchment/10">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <Mountain />
        </div>
        <div className="lg:col-span-7 self-center">
          <p className="text-xl leading-relaxed text-parchment/75 sm:text-2xl">
            At SK Learnings, our journey is defined by a passion for education
            and a commitment to nurturing academic excellence. For over a
            decade, we have been a beacon of learning — guiding students from
            <span className="text-gold-300 font-semibold"> 3rd to 12th grade </span>
            on a transformative educational odyssey.
          </p>
        </div>
      </div>
    </section>
  );
}

function Mountain() {
  return (
    <div className="relative aspect-4/5 w-full max-w-md">
      <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-navy-900 to-navy-700" />
      <svg
        viewBox="0 0 320 400"
        className="absolute inset-0 h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <g className="text-gold-300/80" strokeWidth="1.5">
          <path d="M30 340 L120 180 L160 240 L210 140 L290 340 Z" />
          <path d="M120 180 L150 220" strokeWidth="1" />
          <path d="M210 140 L240 200" strokeWidth="1" />
          <path d="M165 235 L195 200 L210 220" strokeWidth="1" />
        </g>
        <g className="text-gold-200" strokeWidth="2">
          <circle cx="210" cy="115" r="6" fill="currentColor" />
          <line x1="210" y1="121" x2="210" y2="160" />
          <line x1="210" y1="135" x2="190" y2="125" />
          <line x1="210" y1="135" x2="230" y2="125" />
          <line x1="210" y1="160" x2="195" y2="180" />
          <line x1="210" y1="160" x2="225" y2="180" />
        </g>
        <text
          x="160"
          y="375"
          textAnchor="middle"
          className="font-display fill-gold-300"
          style={{ fontSize: 16, letterSpacing: 4, fontWeight: 600 }}
        >
          BE A WINNER
        </text>
      </svg>
    </div>
  );
}

function Pillars() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid gap-6 md:grid-cols-2">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 120}>
          <article
            className="lift glow-border glow-border-gold relative h-full rounded-3xl border border-navy-900/10 bg-parchment-warm p-8 sm:p-10"
          >
            <p className="font-display text-sm tabular-nums text-gold-600">
              0{i + 1}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
              {p.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              {p.body}
            </p>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ClosingCTAs() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-navy-900 p-10 text-parchment sm:p-12">
          <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-300">
            Get in touch
          </p>
          <h3 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Contact us to learn more and start your educational odyssey with SK Learnings.
          </h3>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-4 text-base font-medium text-navy-900 transition hover:bg-gold-300"
          >
            Reach us here
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="rounded-3xl border border-navy-900/10 bg-parchment-warm p-10 sm:p-12">
          <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-600">
            Join The SK Learnings
          </p>
          <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">
            Where education meets inspiration.
          </h3>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            We invite you to be a part of a community dedicated to academic
            excellence, individual growth, and the pursuit of knowledge. Your
            success story begins here.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-navy-900/30 px-7 py-4 text-base font-medium text-navy-900 transition hover:border-navy-900/70"
          >
            Apply now
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
