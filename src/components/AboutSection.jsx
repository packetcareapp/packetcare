import React from 'react';
import { 
  FileText, 
  Smartphone, 
  X, 
  Check, 
  ShieldCheck, 
  AlertTriangle,
  Sparkles
} from 'lucide-react';

export default function AboutSection({ onDownloadClick }) {
  const paperPainPoints = [
    { title: "Tears or Gets Water-Damaged", desc: "No backup if lost in floods or relocation." },
    { title: "Zero Proactive Reminders", desc: "Parents forget return dates for series doses." },
    { title: "Manual Registry Search", desc: "Health workers sift through bulky paper books." },
    { title: "Defaulters Go Unnoticed", desc: "Missed doses become permanent dropouts." }
  ];

  const digitalSolutions = [
    { title: "Permanent Mobile Record", desc: "Tamper-proof digital Bakuna card on your phone." },
    { title: "Automated Cellular SMS", desc: "Sent 7d and 1d prior to clinic day—no data needed." },
    { title: "Instant Defaulter Alerts", desc: "Flags overdue infants automatically for fast follow-up." },
    { title: "Offline Field Recording", desc: "Records saved on mobile even in remote off-grid sitios." }
  ];

  return (
    <section id="about" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-care-950/80 text-care-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-care-800">
            The Difference
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Paper Bakuna Cards vs. PacketCare
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Replacing fragile paper booklets with an automated digital system for families and health workers.
          </p>
        </div>

        {/* Visual Comparison Infographic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Card 1: Old Paper Booklet */}
          <div className="bg-rose-950/20 border border-rose-900/60 rounded-3xl p-7 flex flex-col justify-between shadow-lg shadow-black/40">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-rose-950 text-rose-400 border border-rose-900 flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">Conventional</span>
                    <h3 className="text-lg font-bold text-rose-100">Paper "Bakuna" Cards</h3>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-rose-950 text-rose-300 border border-rose-800">
                  Fragile
                </span>
              </div>

              <div className="space-y-3">
                {paperPainPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-rose-950/30 border border-rose-900/40">
                    <div className="w-5 h-5 rounded-full bg-rose-900/80 text-rose-300 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-rose-100 leading-tight">{item.title}</h4>
                      <p className="text-[11px] text-rose-300/80 mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-rose-900/40 flex items-center gap-2 text-xs text-rose-300">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Leaves rural infants at risk of missing vital childhood vaccines.</span>
            </div>
          </div>

          {/* Card 2: PacketCare Digital System */}
          <div className="bg-gradient-to-br from-navy-850 to-care-950/40 border border-care-800/80 rounded-3xl p-7 flex flex-col justify-between shadow-2xl shadow-care-950/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-care-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-care-600 text-white flex items-center justify-center font-bold shadow-lg shadow-care-600/30">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-care-400 uppercase tracking-wider">PacketCare</span>
                    <h3 className="text-lg font-bold text-white">Digital Mobile System</h3>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                  Automated
                </span>
              </div>

              <div className="space-y-3">
                {digitalSolutions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-navy-900/80 border border-care-900/50">
                    <div className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight">{item.title}</h4>
                      <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-semibold text-care-300 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                DOH EPI Compliant
              </span>
              <a
                href="#epi-schedule"
                className="text-xs font-bold text-care-400 hover:text-care-300 underline"
              >
                View Vaccine Roadmap →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
