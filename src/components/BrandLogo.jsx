import React from 'react';

export default function BrandLogo({ size = 'md', showTagline = false }) {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  const iconSizeClass = isLarge ? 'w-11 h-11' : isSmall ? 'w-8 h-8' : 'w-9 h-9';
  const textClass = isLarge ? 'text-2xl font-black' : isSmall ? 'text-lg font-bold' : 'text-xl font-extrabold';

  return (
    <div className="flex items-center gap-3 group select-none">
      <div
        className={`${iconSizeClass} relative rounded-xl bg-gradient-to-br from-care-500 to-care-700 flex items-center justify-center text-white shadow-lg shadow-care-500/30 group-hover:shadow-care-500/50 group-hover:scale-105 transition-all duration-300 ring-1 ring-white/30`}
      >
        {/* Stylized Cross with central heart dot */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-white"
        >
          <path d="M12 4v16m-8-8h16" />
        </svg>
        <span className="absolute w-2 h-2 rounded-full bg-emerald-400 ring-1 ring-white top-1 right-1 animate-pulse" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`${textClass} tracking-tight text-white`}>
            Packet<span className="text-care-400">Care</span>
          </span>
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-care-950/80 text-care-300 border border-care-800">
            DOH EPI
          </span>
        </div>
        {showTagline && (
          <span className="text-xs text-slate-400 font-medium -mt-0.5">
            Child Immunization Tracker
          </span>
        )}
      </div>
    </div>
  );
}
