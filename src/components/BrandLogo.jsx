import React from 'react';

export default function BrandLogo({ size = 'md', showTagline = false }) {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  const iconSizeClass = isLarge ? 'w-11 h-11' : isSmall ? 'w-8 h-8' : 'w-10 h-10';
  const textClass = isLarge ? 'text-2xl font-black' : isSmall ? 'text-lg font-bold' : 'text-xl font-black';

  return (
    <div className="flex items-center gap-3 group select-none">
      {/* Official App Logo Emblem */}
      <div className={`${iconSizeClass} relative flex items-center justify-center shrink-0`}>
        <img
          src="/images/packetcare-logo.png"
          alt="PacketCare Official Logo"
          className="w-full h-full object-contain rounded-xl shadow-lg shadow-care-500/30 group-hover:shadow-care-500/50 group-hover:scale-105 transition-all duration-300"
          loading="eager"
        />
      </div>

      {/* Brand Name & Tag */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className={`${textClass} tracking-tight text-white`}>
            Packet<span className="text-care-400">Care</span>
          </span>
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-care-950/80 text-care-300 border border-care-800">
            DOH EPI
          </span>
        </div>
        {showTagline && (
          <span className="text-xs text-slate-400 font-medium -mt-0.5">
            Child Immunization Tracking System
          </span>
        )}
      </div>
    </div>
  );
}
