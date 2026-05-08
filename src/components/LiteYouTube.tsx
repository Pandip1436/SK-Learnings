import { useState } from "react";

type Props = {
  videoId: string;
  title: string;
  className?: string;
};

export function LiteYouTube({ videoId, title, className = "" }: Props) {
  const [activated, setActivated] = useState(false);

  if (activated) {
    return (
      <div className={`relative ${className}`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          loading="eager"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      aria-label={`Play: ${title}`}
      className={`group relative block w-full cursor-pointer overflow-hidden ${className}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        srcSet={`
          https://i.ytimg.com/vi/${videoId}/mqdefault.jpg 320w,
          https://i.ytimg.com/vi/${videoId}/hqdefault.jpg 480w,
          https://i.ytimg.com/vi/${videoId}/sddefault.jpg 640w,
          https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg 1280w
        `}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-[#FF0000] text-white shadow-2xl shadow-black/60 transition group-hover:scale-110 sm:h-20 sm:w-20">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
            className="translate-x-[2px] sm:translate-x-[3px]"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
