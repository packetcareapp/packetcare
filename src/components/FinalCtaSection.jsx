import React from 'react';
import { PACKETCARE_CONFIG } from '../data/config';
import { Download, Smartphone, ShieldCheck, HeartPulse } from 'lucide-react';

export default function FinalCtaSection({ onDownloadClick, onOpenInstallModal }) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-[36px] bg-gradient-to-r from-care-700 via-care-600 to-indigo-700 text-white p-8 sm:p-14 lg:p-16 text-center relative overflow-hidden shadow-2xl shadow-black/80 border border-care-500/40">
          
          {/* Ambient Lighting Circles */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold mb-6 border border-white/20">
              <HeartPulse className="w-4 h-4 text-rose-300" />
              <span>For Every Filipino Child's Health</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">
              Protect Every Infant with On-Time DOH Immunization
            </h2>

            <p className="text-care-100 text-base sm:text-lg mb-10 leading-relaxed max-w-2xl">
              Get PacketCare now. Replace fragile paper cards, send life-saving SMS reminders, and ensure zero dropouts across your community.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href={PACKETCARE_CONFIG.downloadUrl}
                download={PACKETCARE_CONFIG.fileName}
                onClick={onDownloadClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white text-navy-900 hover:bg-slate-100 active:scale-[0.98] font-bold text-base shadow-xl transition-all"
              >
                <Download className="w-5 h-5 text-care-600" />
                <span>Download Android APK ({PACKETCARE_CONFIG.version})</span>
              </a>

              <button
                type="button"
                onClick={onOpenInstallModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all"
              >
                <span>View Install Guide</span>
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-care-200">
              <span>Android 8.0+</span>
              <span>•</span>
              <span>Offline Field Recording</span>
              <span>•</span>
              <span>Instant Demo Mode</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

