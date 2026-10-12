import React, { useEffect } from 'react';
import { PACKETCARE_CONFIG } from '../data/config';
import { 
  X, 
  Download, 
  Smartphone, 
  ShieldAlert, 
  KeyRound, 
  Copy
} from 'lucide-react';

export default function InstallModal({ isOpen, onClose, onDownloadClick, onShowToast }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyCreds = (email, pwd) => {
    navigator.clipboard.writeText(`${email} | ${pwd}`);
    if (onShowToast) {
      onShowToast(`Copied: ${email}`, "Ready to Paste");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog in Dark Theme */}
      <div className="relative bg-navy-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl shadow-black/80 border border-slate-800 z-10 max-h-[90vh] overflow-y-auto text-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-care-950 text-care-400 border border-care-800 flex items-center justify-center">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white leading-snug">
                Android APK Installation Guide
              </h3>
              <p className="text-xs text-slate-400">
                Step-by-step instructions for installing PacketCare
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps */}
        <div className="py-6 space-y-6">
          
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-care-950 text-care-300 border border-care-800 font-bold text-sm flex items-center justify-center shrink-0">
              1
            </div>
            <div>
              <h4 className="font-bold text-sm text-white mb-1">
                Download the PacketCare APK
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                Click the download button below or in the hero section to save <strong className="text-white font-mono">packetcare.apk</strong> ({PACKETCARE_CONFIG.fileSize}) onto your Android phone.
              </p>
              <a
                href={PACKETCARE_CONFIG.downloadUrl}
                download={PACKETCARE_CONFIG.fileName}
                onClick={() => {
                  onDownloadClick();
                }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-care-600 hover:bg-care-500 text-white text-xs font-bold transition-all shadow-md shadow-care-600/30"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download APK Now</span>
              </a>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-care-950 text-care-300 border border-care-800 font-bold text-sm flex items-center justify-center shrink-0">
              2
            </div>
            <div>
              <h4 className="font-bold text-sm text-white mb-1">
                Allow "Install Unknown Apps" in Android
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                When opening the downloaded file for the first time, Android will ask for permission. Tap <strong className="text-white">Settings</strong> on the prompt, then toggle <strong className="text-white">"Allow from this source"</strong> on for Chrome or your File Manager.
              </p>
              <div className="mt-2 p-2.5 bg-amber-950/40 rounded-xl border border-amber-800/80 text-[11px] text-amber-200 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                <span>PacketCare is a verified educational build for Android 8.0+.</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-care-950 text-care-300 border border-care-800 font-bold text-sm flex items-center justify-center shrink-0">
              3
            </div>
            <div>
              <h4 className="font-bold text-sm text-white mb-1">
                Complete Installation and Launch
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Return to the prompt and tap <strong className="text-white">Install</strong>. Once complete, tap <strong className="text-white">Open</strong> to begin exploring.
              </p>
            </div>
          </div>

          {/* Step 4: Demo Credentials */}
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold text-sm flex items-center justify-center shrink-0">
              4
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm text-white mb-1">
                Log In with Demo Accounts
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                The mobile app comes with ready demo data out of the box. Use either of the accounts below to explore:
              </p>

              <div className="space-y-2">
                {PACKETCARE_CONFIG.demoAccounts.map(demo => (
                  <div key={demo.role} className="p-2.5 rounded-xl bg-navy-850 border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-white">{demo.role}</div>
                      <div className="text-[11px] font-mono text-slate-300">
                        {demo.email} • {demo.password}
                      </div>
                    </div>
                    <button
                      onClick={() => copyCreds(demo.email, demo.password)}
                      className="px-2.5 py-1 rounded-lg bg-navy-800 hover:bg-navy-750 border border-slate-700 text-slate-300 hover:text-white font-medium text-[11px] flex items-center gap-1 shadow-2xs transition-colors"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-750 font-bold text-xs text-slate-200 transition-colors border border-slate-700"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
}
