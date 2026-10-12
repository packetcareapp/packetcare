import React, { useState } from 'react';
import { 
  Download, 
  ShieldCheck, 
  CheckCircle2, 
  BellRing, 
  Database,
  ArrowRight,
  Sparkles,
  Smartphone,
  Calendar,
  Check
} from 'lucide-react';
import { PACKETCARE_CONFIG } from '../data/config';

export default function Hero({ onDownloadClick, onOpenInstallModal }) {
  const [smsToggled, setSmsToggled] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Punchy Headline & Visual Highlights */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-care-950/80 border border-care-800 text-care-300 text-xs sm:text-sm font-semibold mb-6 shadow-md shadow-care-950/50">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>DOH EPI Standard</span>
              <span className="text-care-500">•</span>
              <span>Parent & RHU Mobile Views</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-5">
              Never Miss a Dose. <br />
              <span className="bg-gradient-to-r from-care-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Safeguard Every Child's
              </span>{' '}
              Health.
            </h1>

            {/* Concise Tagline */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl font-normal leading-relaxed">
              Automated SMS reminders and digital Bakuna cards for Parents and Rural Health Unit (RHU) workers. Always on time, even offline.
            </p>

            {/* Visual Highlights Badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-navy-850 border border-slate-800 text-xs font-semibold text-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Digital Bakuna Card</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-navy-850 border border-slate-800 text-xs font-semibold text-slate-200">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Direct Cellular SMS</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-navy-850 border border-slate-800 text-xs font-semibold text-slate-200">
                <span className="w-2 h-2 rounded-full bg-care-400" />
                <span>Offline Field Mode</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
              <a
                href={PACKETCARE_CONFIG.downloadUrl}
                download={PACKETCARE_CONFIG.fileName}
                onClick={onDownloadClick}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-care-600 hover:bg-care-500 active:scale-[0.98] text-white font-bold text-base shadow-lg shadow-care-600/35 hover:shadow-care-600/50 transition-all duration-200 group"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                <div className="flex flex-col items-start leading-tight">
                  <span>Download Android APK</span>
                  <span className="text-[11px] font-normal text-care-200">
                    {PACKETCARE_CONFIG.version} • {PACKETCARE_CONFIG.fileSize}
                  </span>
                </div>
              </a>

              <a
                href="#showcase"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-navy-850 hover:bg-navy-800 border border-slate-700 text-white font-semibold text-base shadow-sm hover:shadow transition-all duration-200"
              >
                <span>Interactive Preview</span>
                <ArrowRight className="w-4 h-4 text-care-400" />
              </a>
            </div>

            <button
              type="button"
              onClick={onOpenInstallModal}
              className="text-xs text-slate-400 hover:text-care-300 underline font-medium py-1 text-left"
            >
              How to install APK on Android?
            </button>

          </div>

          {/* Right Column: Visual Smartphone Mockup with Interactive Callouts */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Ambient Background Glow behind phone */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-care-500/20 rounded-full blur-3xl -z-10 animate-pulse-subtle" />

            {/* Phone Frame in Dark Theme */}
            <div className="w-[310px] sm:w-[335px] rounded-[42px] p-3.5 bg-slate-950 shadow-2xl ring-1 ring-slate-800 shadow-care-950/50 transform hover:-translate-y-1 transition-transform duration-300">
              
              {/* Inner Screen */}
              <div className="w-full bg-navy-900 rounded-[32px] overflow-hidden border border-slate-800 flex flex-col text-slate-200 font-sans shadow-inner">
                
                {/* Phone Status Bar */}
                <div className="bg-slate-950 text-white px-6 pt-3 pb-2 flex items-center justify-between text-[11px] font-medium tracking-wide border-b border-slate-900">
                  <span>9:41 AM</span>
                  <div className="w-20 h-4 bg-slate-900 rounded-full" />
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="text-[10px]">4G</span>
                    <div className="w-4 h-2 border border-slate-400 rounded-sm p-0.5 flex items-center">
                      <div className="h-full w-3 bg-emerald-400 rounded-2xs" />
                    </div>
                  </div>
                </div>

                {/* Mobile App Header */}
                <div className="bg-gradient-to-r from-care-700 to-indigo-700 text-white p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center font-bold text-xs">
                        PC
                      </div>
                      <span className="font-bold text-sm tracking-tight">PacketCare</span>
                    </div>
                    <span className="text-[10px] bg-emerald-500/25 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Parent View
                    </span>
                  </div>

                  {/* Active Child Card */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center font-black text-sm shadow">
                        👶
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-sm leading-snug">Lucas Santos</h4>
                          <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded text-white">
                            3 Months
                          </span>
                        </div>
                        <p className="text-[11px] text-care-100">Barangay Poblacion</p>
                      </div>
                    </div>

                    {/* Visual Progress Bar */}
                    <div className="mt-3">
                      <div className="flex justify-between text-[11px] font-medium mb-1 text-care-100">
                        <span>Coverage</span>
                        <span>6 of 13 Doses (46%)</span>
                      </div>
                      <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 rounded-full w-[46%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile App Content Body */}
                <div className="p-3.5 space-y-2.5 bg-navy-900 flex-1 max-h-[350px] overflow-y-auto">
                  
                  {/* Tap-to-test Incoming SMS Notification Banner */}
                  <div 
                    onClick={() => setSmsToggled(!smsToggled)}
                    className="p-3 bg-amber-950/40 border border-amber-800/70 rounded-xl shadow-xs cursor-pointer hover:border-amber-600 transition-colors"
                    title="Tap to preview alert"
                  >
                    <div className="flex items-start gap-2">
                      <BellRing className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-amber-300">
                            Semaphore SMS Alert
                          </span>
                          <span className="text-[9px] text-amber-400">Tap to toggle</span>
                        </div>
                        <p className="text-[11px] text-amber-200 leading-tight mt-0.5">
                          "Reminder: Pentavalent 3 & OPV 3 due on <strong>Oct 19</strong> at Health Center."
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dose Schedule Timeline Cards */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <span>Immunization Timeline</span>
                      <span className="text-care-400">DOH Schedule</span>
                    </div>

                    {/* Card 1: Completed */}
                    <div className="p-2.5 bg-navy-850 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center font-bold text-xs">
                          ✓
                        </div>
                        <div>
                          <div className="font-bold text-white text-xs">BCG Vaccine</div>
                          <div className="text-[10px] text-slate-400">Given June 15</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded-full">
                        Done
                      </span>
                    </div>

                    {/* Card 2: Due Soon */}
                    <div className="p-2.5 bg-amber-950/40 rounded-xl border border-amber-600/70 flex items-center justify-between text-xs ring-1 ring-amber-500/30">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs animate-pulse">
                          !
                        </div>
                        <div>
                          <div className="font-bold text-amber-200 text-xs">Pentavalent Dose 3</div>
                          <div className="text-[10px] text-amber-300">Oct 19, 2026</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold bg-amber-500 text-slate-950 px-2 py-0.5 rounded-full">
                        Due in 7d
                      </span>
                    </div>

                    {/* Card 3: Upcoming */}
                    <div className="p-2.5 bg-navy-850/60 rounded-xl border border-slate-800/60 flex items-center justify-between text-xs opacity-75">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-xs">
                          ⏳
                        </div>
                        <div>
                          <div className="font-semibold text-slate-300 text-xs">MMR Dose 1</div>
                          <div className="text-[10px] text-slate-500">9 Months</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-medium bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">
                        Upcoming
                      </span>
                    </div>
                  </div>

                </div>

                {/* Mobile Bottom Navigation Bar */}
                <div className="bg-slate-950 border-t border-slate-800 px-6 py-2.5 flex items-center justify-between text-xs text-slate-500">
                  <span className="text-care-400 font-bold text-[10px]">🏠 Home</span>
                  <span className="text-slate-400 text-[10px]">👶 Child</span>
                  <span className="text-slate-400 text-[10px]">🗓️ Schedule</span>
                  <span className="text-slate-400 text-[10px]">🔔 Alerts</span>
                </div>

              </div>
            </div>

            {/* Floating Visual Pill Left */}
            <div className="hidden sm:flex absolute -bottom-5 -left-8 bg-navy-850/95 backdrop-blur-md border border-slate-700/80 rounded-2xl p-3 shadow-2xl items-center gap-2.5 animate-float-slow">
              <div className="w-9 h-9 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">0 Missed Doses</div>
                <div className="text-[10px] text-emerald-400">On-Track DOH EPI</div>
              </div>
            </div>

            {/* Floating Visual Pill Right */}
            <div className="hidden sm:flex absolute -top-4 -right-6 bg-navy-850/95 backdrop-blur-md border border-slate-700/80 rounded-2xl p-3 shadow-2xl items-center gap-2.5 animate-float-medium">
              <div className="w-9 h-9 rounded-xl bg-care-950/80 border border-care-800 text-care-400 flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Offline Mode</div>
                <div className="text-[10px] text-care-400">Works with No Signal</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
