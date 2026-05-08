import { Link } from "react-router-dom";
import { posts, formatDate } from "../data/posts";
import { Reveal } from "../components/Reveal";

export function Blog() {
  const [feature, ...rest] = posts;

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-10 lg:pt-28">
        <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-300">
          Journal
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-parchment sm:text-6xl lg:text-7xl">
          Notes from the centre.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-parchment/70">
          Long-form thinking from our faculty on how serious students prepare,
          how good plans are built, and how to read the exam without flinching.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
        <FeaturePost />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 100}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );

  function FeaturePost() {
    return (
      <Link
        to="#"
        className="lift glow-border group relative grid overflow-hidden rounded-3xl border border-parchment/10 bg-navy-900 text-parchment lg:grid-cols-12"
      >
        <div className="relative hidden aspect-4/3 lg:col-span-5 lg:block">
          <div className="absolute inset-0 bg-linear-to-br from-gold-400/30 via-navy-700/40 to-navy-900" />
          <div className="absolute inset-0 grid place-items-center">
            <p className="font-display text-7xl font-semibold tracking-tight text-gold-200/80">
              SK
            </p>
          </div>
        </div>
        <div className="p-10 sm:p-14 lg:col-span-7">
          <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-300">
            Featured · {feature.category}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            {feature.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-parchment/80">
            {feature.excerpt}
          </p>
          <p className="mt-8 flex items-center gap-3 text-xs text-parchment/60">
            <span>{formatDate(feature.date)}</span>
            <span aria-hidden>·</span>
            <span>{feature.readMinutes} min read</span>
            <span aria-hidden>·</span>
            <span>{feature.author}</span>
          </p>
          <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold-300">
            Read the essay
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </p>
        </div>
      </Link>
    );
  }
}

function PostCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <Link
      to="#"
      className="lift glow-border glow-border-gold group relative flex h-full flex-col rounded-3xl border border-navy-900/10 bg-parchment-warm p-7 hover:shadow-xl hover:shadow-navy-900/5"
    >
      <p className="font-display text-xs uppercase tracking-[0.22em] text-gold-700">
        {post.category}
      </p>
      <h3 className="mt-4 font-display text-2xl font-semibold leading-snug text-navy-900">
        {post.title}
      </h3>
      <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
        {post.excerpt}
      </p>
      <div className="mt-auto pt-8 flex items-center justify-between text-xs text-ink-soft">
        <span>{formatDate(post.date)}</span>
        <span>{post.readMinutes} min read</span>
      </div>
    </Link>
  );
}
