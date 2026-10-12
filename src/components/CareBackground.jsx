import React from 'react';

export default function CareBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Deep Luminous Ambient Radial Gradients for Dark Theme */}
      <div className="absolute -top-40 -left-40 w-[650px] h-[650px] bg-care-600/15 rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-10 left-1/3 w-[750px] h-[750px] bg-indigo-600/10 rounded-full blur-[160px]" />

      {/* Subtle Dark Medical Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-80" />
    </div>
  );
}
