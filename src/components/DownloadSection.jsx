import React from 'react';
import { PACKETCARE_CONFIG } from '../data/config';
import { 
  Download, 
  Smartphone, 
  ShieldCheck, 
  HardDrive, 
  Cpu, 
  Calendar, 
  FileCode, 
  QrCode,
  Sparkles,
  HelpCircle,
  Copy
} from 'lucide-react';

export default function DownloadSection({ onDownloadClick, onOpenInstallModal, onShowToast }) {
  const copyDemo = (email, pwd) => {
    navigator.clipboard.writeText(`${email} | ${pwd}`);
    if (onShowToast) {
      onShowToast(`Copied demo: ${email}`, "Ready to Sign In");
    }
  };

  return (
    <section id="download" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card with Gradient Border */}
        <div className="relative rounded-[36px] bg-gradient-to-br from-navy-900 via-navy-850 to-navy-950 border border-slate-800 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-black/60">
          
          {/* Subtle Ambient Backdrops */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-care-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-care-300 text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Latest Stable Release
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
                Get PacketCare on Android
              </h2>

              <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
                Download the official APK to start tracking immunization schedules, preventing dropouts with Semaphore SMS, and logging visits completely offline.
              </p>

              {/* Main Download CTA Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
                <a
                  href={PACKETCARE_CONFIG.downloadUrl}
                  download={PACKETCARE_CONFIG.fileName}
                  onClick={onDownloadClick}
                  className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-care-600 hover:bg-care-500 active:scale-[0.98] text-white font-extrabold text-base shadow-lg shadow-care-600/40 hover:shadow-care-600/60 transition-all duration-200 group"
                >
                  <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-base font-bold">Download APK Installer</span>
                    <span className="text-[11px] font-normal text-care-200 mt-1">
                      {PACKETCARE_CONFIG.fileName} ({PACKETCARE_CONFIG.fileSize})
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={onOpenInstallModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm transition-all"
                >
                  <HelpCircle className="w-4 h-4 text-care-300" />
                  <span>Installation Guide</span>
                </button>
              </div>

              {/* Demo Accounts Quick Pill */}
              <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="text-xs font-bold text-care-300 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Fast Demo Logins (Password: password123)</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {PACKETCARE_CONFIG.demoAccounts.map(demo => (
                    <button
                      key={demo.role}
                      onClick={() => copyDemo(demo.email, demo.password)}
                      className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-slate-200 flex items-center gap-1.5 transition-colors font-mono text-[11px]"
                      title="Click to copy credentials"
                    >
                      <span className="text-care-300 font-sans font-semibold">{demo.role}:</span>
                      <span>{demo.email}</span>
                      <Copy className="w-3 h-3 ml-1 text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Release Specifications Column */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-care-500/20 text-care-400 flex items-center justify-center">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Package Details</h4>
                    <span className="text-xs text-slate-400 font-mono">{PACKETCARE_CONFIG.packageId}</span>
                  </div>
                </div>
                <span className="text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  Verified APK
                </span>
              </div>

              {/* Specifications List */}
              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-care-400" />
                    Version
                  </span>
                  <span className="font-semibold font-mono text-white">{PACKETCARE_CONFIG.version} (Build #{PACKETCARE_CONFIG.buildNumber})</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-care-400" />
                    File Size
                  </span>
                  <span className="font-semibold text-white">{PACKETCARE_CONFIG.fileSize}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-care-400" />
                    Minimum System
                  </span>
                  <span className="font-semibold text-white">{PACKETCARE_CONFIG.minAndroid}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-care-400" />
                    Architecture
                  </span>
                  <span className="font-semibold text-white">{PACKETCARE_CONFIG.targetPlatform}</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-care-400" />
                    Release Date
                  </span>
                  <span className="font-semibold text-white">{PACKETCARE_CONFIG.releaseDate}</span>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Integrity
                  </span>
                  <span className="font-semibold text-emerald-400">{PACKETCARE_CONFIG.checksum}</span>
                </div>
              </div>

              {/* QR Code Scan Tip */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-4 bg-white/5 p-3 rounded-2xl">
                <div className="w-12 h-12 bg-white rounded-xl p-1 shrink-0 flex items-center justify-center">
                  <QrCode className="w-10 h-10 text-navy-900" />
                </div>
                <div className="text-xs text-slate-300">
                  <strong className="text-white block font-semibold">Mobile Direct Download:</strong>
                  Scan or visit this landing page directly from your Android browser to download.
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

