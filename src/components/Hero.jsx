import React from 'react';
import { 
  Download, 
  ShieldCheck, 
  Smartphone, 
  ArrowRight,
  Database
} from 'lucide-react';
import { PACKETCARE_CONFIG } from '../data/config';

export default function Hero({ onDownloadClick, onOpenInstallModal }) {
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
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-navy-850 hover:bg-navy-800 border border-slate-700 text-white font-semibold text-base shadow-sm hover:shadow transition-all duration-200"
              >
                <span>Explore Features</span>
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

          {/* Right Column: Real Mobile App Screenshot Framed in Smartphone Bezel */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Ambient Background Glow behind phone */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-care-500/20 rounded-full blur-3xl -z-10 animate-pulse-subtle" />

            {/* Phone Frame in Dark Theme */}
            <div className="w-[300px] sm:w-[330px] rounded-[44px] p-3 sm:p-3.5 bg-slate-950 shadow-2xl ring-1 ring-slate-800 shadow-care-950/60 transform hover:-translate-y-1 transition-transform duration-300 relative">
              
              {/* Android Hardware Speaker Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center shadow-inner">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800" />
              </div>

              {/* Real Mobile App Screenshot */}
              <div className="w-full bg-navy-950 rounded-[34px] overflow-hidden border border-slate-800/80 shadow-inner relative">
                <img
                  src="/images/packetcare-parent-app.png"
                  alt="PacketCare Mobile App - Parent Portal Interface"
                  className="w-full h-auto object-cover display-block select-none pointer-events-none"
                  loading="eager"
                />
              </div>

            </div>

            {/* Floating Visual Pill Left */}
            <div className="hidden sm:flex absolute -bottom-5 -left-8 bg-navy-850/95 backdrop-blur-md border border-slate-700/80 rounded-2xl p-3 shadow-2xl items-center gap-2.5 animate-float-slow z-20">
              <div className="w-9 h-9 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">0 Missed Doses</div>
                <div className="text-[10px] text-emerald-400">On-Track DOH EPI</div>
              </div>
            </div>

            {/* Floating Visual Pill Right */}
            <div className="hidden sm:flex absolute -top-4 -right-6 bg-navy-850/95 backdrop-blur-md border border-slate-700/80 rounded-2xl p-3 shadow-2xl items-center gap-2.5 animate-float-medium z-20">
              <div className="w-9 h-9 rounded-xl bg-care-950/80 border border-care-800 text-care-400 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Parent Portal</div>
                <div className="text-[10px] text-care-400">Live Android v1.0.0</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
