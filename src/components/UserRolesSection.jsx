import React from 'react';
import { USER_ROLES, PACKETCARE_CONFIG } from '../data/config';
import { Baby, ShieldPlus, Check, KeyRound, Copy } from 'lucide-react';

const roleIcons = {
  parent: Baby,
  rhu: ShieldPlus,
};

export default function UserRolesSection({ onDownloadClick, onShowToast }) {
  const copyDemoAccount = (email, password) => {
    navigator.clipboard.writeText(`${email} | ${password}`);
    if (onShowToast) {
      onShowToast(`Credentials copied: ${email}`, "Demo Account Ready");
    }
  };

  return (
    <section id="roles" className="py-20 md:py-24 bg-navy-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-care-950/80 text-care-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-care-800">
            Dedicated Views
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Parent View vs. RHU View
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Two specialized interfaces inside the PacketCare Android app.
          </p>
        </div>

        {/* Roles 2-Column Visual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {USER_ROLES.map((role) => {
            const IconComponent = roleIcons[role.id] || Baby;
            const demo = PACKETCARE_CONFIG.demoAccounts.find(d => 
              d.role.toLowerCase().includes(role.id) || 
              (role.id === 'rhu' && d.role.toLowerCase().includes('rhu'))
            );

            return (
              <div
                key={role.id}
                className="bg-navy-850 rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/50 hover:border-care-500/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Top Role Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-care-500 to-care-700 text-white flex items-center justify-center shadow-lg shadow-care-600/30">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {role.roleName}
                        </h3>
                        <p className="text-xs text-care-400 font-medium">
                          {role.tagline}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-care-950 text-care-300 border border-care-800">
                      {role.badge}
                    </span>
                  </div>

                  {/* Visual Metric Chips */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {role.visualMetrics.map((vm, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-navy-900 border border-slate-800 text-center">
                        <div className={`text-xs font-black ${vm.color}`}>
                          {vm.val}
                        </div>
                        <div className="text-[9px] text-slate-400 mt-0.5">
                          {vm.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6">
                    {role.highlights.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Demo Credentials Box */}
                {demo && (
                  <div className="pt-5 border-t border-slate-800">
                    <div className="p-3.5 rounded-2xl bg-navy-900 border border-slate-800 text-xs">
                      <div className="flex items-center justify-between font-bold text-white mb-2">
                        <span className="flex items-center gap-1.5 text-care-400 text-xs">
                          <KeyRound className="w-3.5 h-3.5" />
                          Demo Credentials
                        </span>
                        <button
                          onClick={() => copyDemoAccount(demo.email, demo.password)}
                          className="text-[10px] text-slate-300 hover:text-white bg-navy-800 hover:bg-navy-750 px-2 py-0.5 rounded-md border border-slate-700 flex items-center gap-1 font-medium transition-colors"
                          title="Copy to clipboard"
                        >
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </button>
                      </div>
                      <div className="font-mono text-[11px] text-slate-300 flex justify-between">
                        <span>Email: <strong className="text-white">{demo.email}</strong></span>
                        <span>Pass: <strong className="text-white">{demo.password}</strong></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
