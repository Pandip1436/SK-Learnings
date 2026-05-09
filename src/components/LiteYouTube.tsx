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
      className={`group relative block w-full cursor-pointer overflow-hidden bg-black ${className}`}
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
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500"
      />
      
      {/* Title Bar Gradient (Top) */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
      
      {/* Bottom Bar Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Title */}
      <div className="absolute top-0 left-0 right-0 p-4 flex items-center gap-3">
        <div className="h-10 w-10 shrink-0 rounded-full bg-[#0f0f0f] border border-white/10 overflow-hidden flex items-center justify-center">
          <span className="text-white text-xs font-bold">SK</span>
        </div>
        <p className="text-white text-base font-medium truncate text-left drop-shadow-md">
          {title}
        </p>
      </div>

      {/* Play Button Center */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="w-[68px] h-[48px] rounded-[14px] bg-[#FF0000] text-white flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Watch on YouTube Bar */}
      <div className="absolute bottom-0 left-0 p-3 z-10 w-full flex items-center">
        <a 
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 bg-[#121212]/90 hover:bg-[#282828] transition-colors border border-white/10 rounded-md px-2 py-1 sm:px-3 sm:py-1.5 shadow-lg"
        >
          <span className="hidden min-[400px]:inline text-white text-[10px] font-semibold tracking-wide opacity-90 uppercase">Watch on</span>
          <div className="flex items-center gap-1">
            <svg width="16" height="12" viewBox="0 0 24 24" fill="#FF0000" className="sm:w-[18px] sm:h-[13px]">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="text-white text-[13px] sm:text-[14px] font-bold tracking-tighter">YouTube</span>
          </div>
        </a>
      </div>
    </button>
  );
}
