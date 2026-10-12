import React, { useState } from 'react';
import { DOH_EPI_MILESTONES } from '../data/config';
import { HeartPulse, Syringe, ShieldCheck, Check, Sparkles, Clock, Calendar } from 'lucide-react';

export default function EpiScheduleSection() {
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  const currentStage = DOH_EPI_MILESTONES[selectedMilestone];

  return (
    <section id="epi-schedule" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-800">
            DOH EPI Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Child Immunization Roadmap
          </h2>
          <p className="mt-3 text-base text-slate-300">
            13 Routine vaccine doses organized across 5 clinical age milestones from birth to 9 months.
          </p>

          {/* Milestone Age Stepper Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {DOH_EPI_MILESTONES.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => setSelectedMilestone(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                  selectedMilestone === idx
                    ? 'bg-care-600 text-white shadow-lg shadow-care-600/40 border border-care-400 scale-[1.03]'
                    : 'bg-navy-850 text-slate-300 hover:text-white hover:bg-navy-800 border border-slate-800'
                }`}
              >
                <Calendar className="w-3.5 h-3.5 text-care-300" />
                <span>{m.age}</span>
                <span className="text-[10px] font-normal px-1.5 py-0.5 rounded bg-black/25">
                  {m.ageLabel}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Milestone Visual Card Display */}
        <div className="bg-navy-850 rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/50 p-6 sm:p-8 mb-8">
          
          {/* Milestone Header Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-care-400 uppercase tracking-wider">
                  Milestone #{selectedMilestone + 1} of 5
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                  {currentStage.vaccines.length} Vaccines Required
                </span>
              </div>
              <h3 className="text-2xl font-black text-white mt-1">
                {currentStage.age} ({currentStage.ageLabel})
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                {currentStage.description}
              </p>
            </div>

            {/* 28-day safety indicator */}
            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-navy-900 border border-slate-800 text-xs">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-slate-300">
                <strong className="text-white block font-semibold">28-Day Spacing</strong>
                Enforced by PacketCare
              </span>
            </div>
          </div>

          {/* Visual Vaccine Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentStage.vaccines.map((v, i) => (
              <div
                key={i}
                className="bg-navy-900 rounded-2xl p-5 border border-slate-800/80 shadow-md flex flex-col justify-between hover:border-care-500/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-care-950 text-care-300 border border-care-800">
                      {v.dose}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {v.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold text-white mb-1">
                    {v.name}
                  </h4>
                  
                  <div className="text-xs text-care-300 font-medium mb-3">
                    Target: {v.disease}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-slate-300">
                    <Syringe className="w-3.5 h-3.5 text-care-400" />
                    {v.route}
                  </span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <Check className="w-3 h-3" /> Ready
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Visual Progress Stepper Indicator */}
        <div className="grid grid-cols-5 gap-2 max-w-2xl mx-auto">
          {DOH_EPI_MILESTONES.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => setSelectedMilestone(idx)}
              className="flex flex-col items-center gap-1.5 group focus:outline-none"
            >
              <div
                className={`w-full h-1.5 rounded-full transition-all duration-300 ${
                  selectedMilestone === idx
                    ? 'bg-care-500 shadow-sm shadow-care-500/50'
                    : selectedMilestone > idx
                    ? 'bg-emerald-500'
                    : 'bg-slate-800'
                }`}
              />
              <span className={`text-[10px] font-bold transition-colors ${
                selectedMilestone === idx ? 'text-care-400' : 'text-slate-500 group-hover:text-slate-300'
              }`}>
                {m.age}
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
