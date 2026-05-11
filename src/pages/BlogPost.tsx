import { useParams, Link, Navigate } from "react-router-dom";
import { posts, formatDate } from "../data/posts";
import { Reveal } from "../components/Reveal";

export function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30 overflow-hidden">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 -z-50 bg-linear-to-b from-[#020617] via-[#070321] to-[#0a0820]" />
      <div className="pointer-events-none absolute inset-0 -z-40 bg-grid-cyan opacity-[0.1] mask-fade-radial" />
      
      {/* Glow Orbs */}
      <div aria-hidden className="pointer-events-none absolute left-0 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/10 blur-[100px]" />
      <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 -z-10 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-sky-600/10 blur-[120px]" />

      <article className="mx-auto max-w-4xl px-6 pt-32 pb-32 lg:px-10">
        <Reveal>
          <Link
            to="/blog"
            className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-x-1"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Journal
          </Link>
        </Reveal>

        <header className="mb-16">
          <Reveal delay={100}>
            <div className="mb-6 flex items-center gap-4">
              <span className="rounded-full border border-sky-400/30 bg-sky-400/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300 backdrop-blur-sm">
                {post.category}
              </span>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-parchment/50">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-400/60"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-400/60"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-400/60"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{post.readMinutes} min read</span>
              </div>
            </div>
          </Reveal>
        </header>

        <Reveal delay={400}>
          <div className="glow-border relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c1226]/50 p-8 sm:p-12 backdrop-blur-xl">
            <div className="prose prose-invert prose-sky max-w-none prose-p:text-parchment/80 prose-p:leading-relaxed prose-p:text-lg prose-headings:font-display prose-headings:font-semibold prose-headings:text-white prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-strong:text-cyan-200">
              {post.content.split('\n').map((paragraph, idx) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;
                
                if (trimmed.startsWith('###')) {
                  return <h3 key={idx} className="text-white font-display text-2xl mt-12 mb-6">{trimmed.replace('### ', '')}</h3>;
                }
                
                return (
                  <p key={idx} className="mb-6 text-parchment/80 leading-relaxed text-lg">
                    {trimmed.split('**').map((part, i) => 
                      i % 2 === 1 ? <strong key={i} className="text-cyan-200 font-semibold">{part}</strong> : part
                    )}
                  </p>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-20 flex flex-col items-center justify-center rounded-3xl border border-white/5 bg-white/5 p-12 text-center backdrop-blur-sm">
            <h2 className="font-display text-2xl font-semibold text-white">
              Ready to build your own path?
            </h2>
            <p className="mt-4 max-w-md text-parchment/60">
              Join 500+ serious aspirants who are redefining how they prepare for NEET and JEE.
            </p>
            <Link
              to="/contact#send-message"
              className="mt-8 rounded-full bg-cyan-500 px-8 py-3 font-semibold text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-95"
            >
              Book a Free Demo
            </Link>
          </div>
        </Reveal>
      </article>
    </div>
  );
}
