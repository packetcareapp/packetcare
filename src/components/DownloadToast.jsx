import React from 'react';
import { Download, CheckCircle2, X } from 'lucide-react';

export default function DownloadToast({ toast, onClose }) {
  if (!toast.visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-navy-900 text-white rounded-2xl shadow-2xl border border-slate-700 p-4 animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <Download className="w-5 h-5 animate-bounce" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-sm text-white">{toast.title}</h4>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            {toast.message}
          </p>
          <div className="mt-2.5 w-full bg-slate-800 h-1 rounded-full overflow-hidden">
            <div className="bg-emerald-400 h-full rounded-full w-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

