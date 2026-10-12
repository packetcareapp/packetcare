import React from 'react';
import { WORKFLOW_STEPS } from '../data/config';
import { UserPlus, BellRing, Syringe, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';

const icons = {
  UserPlus: UserPlus,
  BellRing: BellRing,
  Syringe: Syringe,
  ShieldAlert: ShieldAlert
};

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-navy-900/60 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-care-950/80 text-care-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-care-800">
            Workflow Pipeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How PacketCare Operates
          </h2>
          <p className="mt-3 text-base text-slate-300">
            A 4-step mobile loop protecting every child from birth to age one.
          </p>
        </div>

        {/* Steps Visual Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORKFLOW_STEPS.map((step, idx) => {
            const IconComp = icons[step.iconName] || UserPlus;

            return (
              <div
                key={step.step}
                className="bg-navy-850 rounded-3xl p-6 border border-slate-800/90 shadow-xl shadow-black/40 hover:border-care-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-xl bg-navy-900 border border-slate-800 text-care-400 font-black text-xs flex items-center justify-center">
                      0{step.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-navy-900 border border-slate-800 flex items-center justify-center text-care-400 group-hover:bg-care-600 group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-[10px] font-bold uppercase tracking-wider text-care-400 mb-1">
                    {step.tagline}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Metric Chip */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-extrabold text-white block">
                      {step.metric}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {step.metricLabel}
                    </span>
                  </div>
                  <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Active
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
