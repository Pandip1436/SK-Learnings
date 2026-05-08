import { Link } from "react-router-dom";
import { posts, formatDate } from "../data/posts";
import { Reveal } from "../components/Reveal";

export function Blog() {
  const [feature, ...rest] = posts;

  return (
    <div className="relative overflow-hidden selection:bg-cyan-500/30">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 -z-50 bg-linear-to-b from-[#020617] via-[#070321] to-[#0a0820]" />
      <div className="pointer-events-none absolute inset-0 -z-40 bg-grid-cyan opacity-[0.15] mask-fade-radial" />
      
      {/* Glow Orbs */}
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 -z-10 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-600/20 blur-[120px]" />
      
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-12 lg:px-10 lg:pt-48">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-sky-400/30 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.32em] text-sky-300 backdrop-blur">
            Journal
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-8 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Notes from the <span className="bg-clip-text text-transparent bg-linear-to-r from-sky-300 to-cyan-400 drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]">centre.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-parchment/70">
            Long-form thinking from our faculty on how serious students prepare,
            how good plans are built, and how to read the exam without flinching.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-10 relative z-10">
        <Reveal>
          <FeaturePost post={feature} />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10 relative z-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 100}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

function FeaturePost({ post }: { post: (typeof posts)[0] }) {
  return (
    <Link
      to="#"
      className="lift glow-border group relative grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1226]/80 text-white lg:grid-cols-12 backdrop-blur-xl"
    >
      <div className="relative hidden aspect-4/3 lg:col-span-5 lg:block overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 via-sky-900/40 to-[#0c1226] z-10" />
        {/* Mock featured image background */}
        <div className="absolute inset-0 bg-[#07050f] opacity-80" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30" />
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/30 blur-[80px]" />
        
        <div className="absolute inset-0 z-20 grid place-items-center">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-dashed border-cyan-500/30">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-950/50 backdrop-blur-md">
              <p className="font-display text-4xl font-semibold tracking-widest text-cyan-200">
                SK
              </p>
            </div>
            <div className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 animate-[spin_20s_linear_infinite] rounded-full border border-white/5">
              <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 sm:p-14 lg:col-span-7 flex flex-col justify-center">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
          Featured · {post.category}
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl text-white group-hover:text-cyan-200 transition-colors">
          {post.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-parchment/70">
          {post.excerpt}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-parchment/50">
          <span className="text-cyan-100">{formatDate(post.date)}</span>
          <span aria-hidden>·</span>
          <span>{post.readMinutes} min read</span>
          <span aria-hidden>·</span>
          <span>{post.author}</span>
        </div>
        <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
          Read the essay
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </p>
      </div>
    </Link>
  );
}

function PostCard({ post }: { post: (typeof posts)[0] }) {
  return (
    <Link
      to="#"
      className="lift glow-border group relative flex h-full flex-col rounded-3xl border border-white/10 bg-[#0c1226]/80 p-8 hover:bg-[#0c1226] backdrop-blur-xl"
    >
      <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-sky-500/10 blur-[50px] transition-opacity group-hover:bg-sky-400/20" />
      
      <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-sky-300 relative">
        {post.category}
      </p>
      <h3 className="mt-4 font-display text-2xl font-semibold leading-snug text-white group-hover:text-cyan-200 transition-colors relative">
        {post.title}
      </h3>
      <p className="mt-4 text-[15px] leading-relaxed text-parchment/70 relative">
        {post.excerpt}
      </p>
      <div className="mt-auto pt-8 flex items-center justify-between text-xs uppercase tracking-wider text-parchment/50 relative">
        <span className="text-cyan-100/70">{formatDate(post.date)}</span>
        <span>{post.readMinutes} min read</span>
      </div>
    </Link>
  );
}
