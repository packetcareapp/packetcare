import React from 'react';
import { LIVE_STATS } from '../data/config';
import { ShieldCheck, MessageSquareQuote, Clock, WifiOff } from 'lucide-react';

export default function LiveStatsBar() {
  const statIcons = [
    <ShieldCheck className="w-5 h-5 text-care-400" key="1" />,
    <MessageSquareQuote className="w-5 h-5 text-amber-400" key="2" />,
    <Clock className="w-5 h-5 text-indigo-400" key="3" />,
    <WifiOff className="w-5 h-5 text-emerald-400" key="4" />
  ];

  return (
    <section className="relative z-10 py-6 -mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-850 rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/50 p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-800">
            {LIVE_STATS.map((stat, index) => (
              <div 
                key={stat.label} 
                className={`flex flex-col justify-between ${index > 0 ? 'pt-6 sm:pt-0 lg:pl-8' : ''}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 border border-slate-800 flex items-center justify-center shrink-0">
                    {statIcons[index]}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${stat.pillColor}`}>
                    {stat.pill}
                  </span>
                </div>
                
                <div>
                  <div className="text-3xl font-black text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-slate-200 mt-0.5">
                    {stat.label}
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">
                    {stat.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
