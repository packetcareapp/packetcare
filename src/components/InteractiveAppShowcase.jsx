import React, { useState } from 'react';
import { APP_SCREENS } from '../data/config';
import { 
  Baby, 
  ShieldAlert, 
  Send, 
  CheckCircle2, 
  Clock, 
  WifiOff,
  Signal,
  Battery,
  Smartphone,
  ChevronRight,
  Sparkles,
  Users,
  Check,
  CalendarCheck
} from 'lucide-react';

export default function InteractiveAppShowcase({ onDownloadClick }) {
  const [activeTab, setActiveTab] = useState(0);
  const [smsSent, setSmsSent] = useState(false);
  const [selectedChild, setSelectedChild] = useState('lucas'); // for parent view: lucas or chloe

  const activeScreen = APP_SCREENS[activeTab];

  const handleSendSimulatedSms = () => {
    setSmsSent(true);
    setTimeout(() => {
      setSmsSent(false);
    }, 5500);
  };

  return (
    <section id="showcase" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-care-950/80 text-care-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-care-800">
            <Sparkles className="w-3.5 h-3.5 text-care-400" />
            Interactive Simulation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore the Mobile App Views
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Tap between Parent View and RHU Healthcare View to see real frontline workflows on an interactive Android screen.
          </p>

          {/* 2-Tab Switcher: Parent vs RHU */}
          <div className="inline-flex p-1.5 rounded-2xl bg-navy-950 border border-slate-800 mt-6 gap-2 shadow-xl shadow-black/50">
            <button
              onClick={() => {
                setActiveTab(0);
                setSmsSent(false);
              }}
              className={`px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2.5 ${
                activeTab === 0
                  ? 'bg-care-600 text-white shadow-md shadow-care-600/40 scale-[1.02]'
                  : 'text-slate-400 hover:text-white hover:bg-navy-900'
              }`}
            >
              <Baby className="w-4 h-4 text-white" />
              <span>Parent View</span>
            </button>
            <button
              onClick={() => {
                setActiveTab(1);
                setSmsSent(false);
              }}
              className={`px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2.5 ${
                activeTab === 1
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/40 scale-[1.02]'
                  : 'text-slate-400 hover:text-white hover:bg-navy-900'
              }`}
            >
              <ShieldAlert className="w-4 h-4 text-white" />
              <span>RHU Healthcare View</span>
            </button>
          </div>
        </div>

        {/* Interactive App Screen Container in Dark Theme */}
        <div className="bg-navy-850 rounded-3xl border border-slate-800 shadow-2xl shadow-black/60 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Column: Visual feature pills & concise highlights */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-navy-900/80 border-b lg:border-b-0 lg:border-r border-slate-800 h-full">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold border ${
                  activeTab === 0 
                    ? 'bg-care-950 text-care-300 border-care-800' 
                    : 'bg-emerald-950 text-emerald-300 border-emerald-800'
                }`}>
                  {activeScreen.roleBadge}
                </span>
                <span className="text-xs text-slate-400 font-mono">Simulated View</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                {activeTab === 0 ? "Digital Bakuna Card & SMS" : "Child Registry & 1-Click SMS"}
              </h3>

              {/* Visual Attribute Chips */}
              <div className="grid grid-cols-2 gap-2 my-5">
                {activeTab === 0 ? (
                  <>
                    <div className="p-2.5 rounded-xl bg-navy-950 border border-slate-800">
                      <div className="text-[11px] font-bold text-care-400">13 Routine Doses</div>
                      <div className="text-[10px] text-slate-400">Complete DOH EPI scope</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-navy-950 border border-slate-800">
                      <div className="text-[11px] font-bold text-amber-400">Direct SMS Alerts</div>
                      <div className="text-[10px] text-slate-400">Zero data required</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-navy-950 border border-slate-800">
                      <div className="text-[11px] font-bold text-emerald-400">28-Day Intervals</div>
                      <div className="text-[10px] text-slate-400">Guaranteed spacing</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-navy-950 border border-slate-800">
                      <div className="text-[11px] font-bold text-indigo-400">Multi-Child</div>
                      <div className="text-[10px] text-slate-400">1-tap profile switch</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-2.5 rounded-xl bg-navy-950 border border-slate-800">
                      <div className="text-[11px] font-bold text-emerald-400">Offline SQLite</div>
                      <div className="text-[10px] text-slate-400">Works with zero signal</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-navy-950 border border-slate-800">
                      <div className="text-[11px] font-bold text-rose-400">Defaulter Queue</div>
                      <div className="text-[10px] text-slate-400">Missed dose detector</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-navy-950 border border-slate-800">
                      <div className="text-[11px] font-bold text-care-400">1-Click Dispatch</div>
                      <div className="text-[10px] text-slate-400">Direct cellular reminder</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-navy-950 border border-slate-800">
                      <div className="text-[11px] font-bold text-amber-400">Purok Filter</div>
                      <div className="text-[10px] text-slate-400">Barangay masterlist</div>
                    </div>
                  </>
                )}
              </div>

              {/* Highlights List */}
              <div className="space-y-2.5 mb-6">
                {activeScreen.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-care-400" />
                <span>Android v1.0.0 APK</span>
              </div>
              <a
                href="#download"
                onClick={onDownloadClick}
                className="inline-flex items-center gap-1 text-xs font-bold text-care-400 hover:text-care-300 underline"
              >
                Download APK to test on device →
              </a>
            </div>
          </div>

          {/* Right Column: Realistic Android Mobile Frame */}
          <div className="lg:col-span-7 p-4 sm:p-8 md:p-10 bg-navy-950/80 flex items-center justify-center">
            
            {/* Phone Bezel Frame */}
            <div className="w-full max-w-sm sm:max-w-md bg-navy-900 rounded-[2.5rem] border-[6px] sm:border-[8px] border-slate-800 shadow-2xl shadow-care-950/60 overflow-hidden flex flex-col font-sans relative ring-1 ring-slate-700/50">
              
              {/* Android Hardware Speaker & Camera Punch Hole */}
              <div className="bg-navy-900 pt-3 pb-1 px-6 flex items-center justify-between text-slate-400 text-[11px]">
                <span className="font-semibold text-slate-300">9:41</span>
                
                {/* Camera punch-hole */}
                <div className="w-3.5 h-3.5 rounded-full bg-black border border-slate-800 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                </div>

                <div className="flex items-center gap-1.5">
                  <Signal className="w-3 h-3 text-slate-300" />
                  <span className="text-[10px] font-bold">5G</span>
                  <Battery className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>

              {/* In-App Header Bar */}
              <div className={`px-4 py-3 flex items-center justify-between shadow-xs transition-colors ${
                activeTab === 0
                  ? 'bg-gradient-to-r from-care-700 to-indigo-700 text-white'
                  : 'bg-gradient-to-r from-emerald-800 to-teal-800 text-white'
              }`}>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center font-black text-xs shadow-inner">
                    PC
                  </div>
                  <div>
                    <div className="text-xs font-extrabold tracking-tight leading-tight">PacketCare</div>
                    <div className="text-[10px] text-white/80 font-medium">
                      {activeTab === 0 ? "Parent Portal" : "RHU Healthcare Station"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] bg-white/20 text-white font-bold px-2 py-0.5 rounded-full border border-white/20">
                    {activeTab === 0 ? "Synced" : "Offline Ready"}
                  </span>
                </div>
              </div>

              {/* View 1: Parent View Mockup */}
              {activeTab === 0 && (
                <div className="p-4 sm:p-5 space-y-3.5 bg-navy-900 min-h-[460px]">
                  
                  {/* Child Selector Pills */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedChild('lucas')}
                      className={`flex-1 py-1.5 px-2.5 rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 ${
                        selectedChild === 'lucas'
                          ? 'bg-care-600 text-white border border-care-500 shadow-xs'
                          : 'bg-navy-850 text-slate-400 border border-slate-800 hover:text-white'
                      }`}
                    >
                      <span>👶 Lucas (3m)</span>
                      {selectedChild === 'lucas' && <Check className="w-3 h-3" />}
                    </button>
                    <button
                      onClick={() => setSelectedChild('chloe')}
                      className={`flex-1 py-1.5 px-2.5 rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 ${
                        selectedChild === 'chloe'
                          ? 'bg-care-600 text-white border border-care-500 shadow-xs'
                          : 'bg-navy-850 text-slate-400 border border-slate-800 hover:text-white'
                      }`}
                    >
                      <span>👧 Chloe (9m)</span>
                      {selectedChild === 'chloe' && <Check className="w-3 h-3" />}
                    </button>
                  </div>

                  {/* Child Profile Card */}
                  <div className="p-3.5 rounded-2xl bg-navy-850 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-navy-900 border border-slate-700/60 flex items-center justify-center text-xl shadow-xs">
                        {selectedChild === 'lucas' ? '👶' : '👧'}
                      </div>
                      <div>
                        <div className="font-extrabold text-xs sm:text-sm text-white">
                          {selectedChild === 'lucas' ? 'Lucas Santos' : 'Chloe Santos'}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {selectedChild === 'lucas' ? 'Born June 14, 2026 • 3 Mos old' : 'Born Dec 10, 2025 • 9 Mos old'}
                        </div>
                        <div className="text-[10px] text-care-400 font-semibold">
                          Barangay Poblacion, Purok 3
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold bg-care-950 text-care-300 border border-care-800 px-2 py-1 rounded-lg">
                      DOH EPI
                    </span>
                  </div>

                  {/* Vaccination Progress Meter */}
                  <div className="p-3 rounded-2xl bg-navy-850 border border-slate-800">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-bold text-slate-300">Immunization Progress</span>
                      <span className="font-extrabold text-care-400">
                        {selectedChild === 'lucas' ? '6 / 13 Doses (46%)' : '11 / 13 Doses (85%)'}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-navy-950 rounded-full overflow-hidden border border-slate-800">
                      <div 
                        className="h-full bg-gradient-to-r from-care-500 to-emerald-400 rounded-full transition-all duration-500"
                        style={{ width: selectedChild === 'lucas' ? '46%' : '85%' }}
                      />
                    </div>
                  </div>

                  {/* Next Appointment Alert Card */}
                  <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/80 flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-amber-200 block text-[11px] sm:text-xs">
                        {selectedChild === 'lucas' ? 'Next Dose: Oct 19, 2026 (Due in 7 Days)' : 'Next Dose: Nov 12, 2026'}
                      </strong>
                      <span className="text-amber-300/90 text-[10px] sm:text-[11px]">
                        {selectedChild === 'lucas' 
                          ? 'Pentavalent 3 & OPV 3 • Poblacion Health Center'
                          : 'Measles-Rubella (MMR 2) • Poblacion Health Center'}
                      </span>
                    </div>
                  </div>

                  {/* Dose Timeline Mini View */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Vaccine Record
                    </div>

                    <div className="p-2.5 rounded-xl bg-navy-850 border border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-white text-[11px]">BCG Vaccine</div>
                        <div className="text-[9px] text-slate-400">At Birth • Right Deltoid</div>
                      </div>
                      <span className="text-[9px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Check className="w-2.5 h-2.5" />
                        Administered
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-navy-850 border border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-white text-[11px]">Pentavalent Dose 2</div>
                        <div className="text-[9px] text-slate-400">10 Weeks • 28-day gap satisfied</div>
                      </div>
                      <span className="text-[9px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Check className="w-2.5 h-2.5" />
                        Administered
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-navy-850 border border-amber-800/60 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-amber-200 text-[11px]">Pentavalent Dose 3</div>
                        <div className="text-[9px] text-amber-400/80">14 Weeks • SMS Alert Dispatched</div>
                      </div>
                      <span className="text-[9px] font-bold bg-amber-950 text-amber-300 border border-amber-800 px-2 py-0.5 rounded-full animate-pulse">
                        Due in 7 Days
                      </span>
                    </div>
                  </div>

                </div>
              )}

              {/* View 2: RHU View Mockup */}
              {activeTab === 1 && (
                <div className="p-4 sm:p-5 space-y-3.5 bg-navy-900 min-h-[460px]">
                  
                  {/* RHU Station Masterlist Banner */}
                  <div className="p-3.5 rounded-2xl bg-navy-850 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Barangay Child Masterlist</div>
                      <div className="text-[10px] text-slate-400">Station: San Isidro • Puroks 1 to 4</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <span className="text-sm font-black text-rose-400 block leading-tight">7</span>
                        <span className="text-[9px] font-bold text-rose-300 uppercase">Defaulters</span>
                      </div>
                      <div className="text-right pl-2 border-l border-slate-700">
                        <span className="text-sm font-black text-emerald-400 block leading-tight">141</span>
                        <span className="text-[9px] font-bold text-emerald-300 uppercase">On-Track</span>
                      </div>
                    </div>
                  </div>

                  {/* Defaulter Action Box */}
                  <div className="p-3.5 rounded-2xl bg-navy-850 border border-rose-900/60 shadow-sm space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        Defaulter Detected
                      </span>
                      <span className="text-[9px] font-bold bg-rose-950 text-rose-300 border border-rose-800 px-2 py-0.5 rounded-full">
                        9 Days Overdue
                      </span>
                    </div>

                    <div>
                      <div className="font-bold text-xs sm:text-sm text-white">Baby Sofia Ramos (5 Mos)</div>
                      <div className="text-[10px] text-slate-400">Guardian: Maricel Ramos • +63 917 842 1993</div>
                      <div className="text-[10px] text-rose-300 font-semibold mt-0.5">Missed: PCV (Pneumococcal) Dose 2</div>
                    </div>

                    {/* Interactive 1-Click SMS Dispatch Button */}
                    <button
                      onClick={handleSendSimulatedSms}
                      className="w-full py-2.5 px-3 rounded-xl bg-care-600 hover:bg-care-500 active:scale-[0.98] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-care-600/30"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{smsSent ? "Dispatched!" : "Dispatch 1-Click SMS Reminder"}</span>
                    </button>

                    {/* Live Dispatched SMS Notification Simulation */}
                    {smsSent && (
                      <div className="p-3 bg-emerald-950/90 border border-emerald-800 rounded-xl text-[11px] text-emerald-200 space-y-1 animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex items-center gap-1.5 font-bold text-emerald-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>SMS Dispatched via Semaphore</span>
                        </div>
                        <p className="text-[10px] text-slate-300 italic font-mono bg-navy-950/60 p-2 rounded-lg border border-emerald-900">
                          "Ma'am Maricel, paalala mula sa RHU: overdue po si Sofia sa PCV 2. Bukas po ang immunization sa clinic."
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Second Child in Registry */}
                  <div className="p-3 rounded-xl bg-navy-850 border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-white text-[11px]">Ethan Navarro (10 Wks)</div>
                      <div className="text-[9px] text-emerald-400">Purok 2 • Pentavalent 2 Due Tomorrow</div>
                    </div>
                    <span className="text-[9px] font-bold bg-care-950 text-care-300 border border-care-800 px-2 py-0.5 rounded-full">
                      SMS Queued
                    </span>
                  </div>

                  {/* Field Offline Capability */}
                  <div className="p-2.5 bg-navy-950 rounded-xl border border-slate-800 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <WifiOff className="w-3 h-3 text-emerald-400" />
                      <span>Field Recording:</span>
                    </div>
                    <span className="font-bold text-emerald-400 text-[10px]">
                      Offline SQLite Active
                    </span>
                  </div>
                </div>
              )}

              {/* Bottom Mobile Navigation Bar */}
              <div className="bg-navy-950 border-t border-slate-800 px-6 py-2.5 flex items-center justify-around text-slate-400">
                <div className="flex flex-col items-center gap-0.5 text-care-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-care-400" />
                  <span className="text-[9px] font-bold">Home</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 hover:text-slate-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
                  <span className="text-[9px] font-medium">{activeTab === 0 ? "Bakuna Card" : "Registry"}</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 hover:text-slate-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
                  <span className="text-[9px] font-medium">{activeTab === 0 ? "SMS Log" : "Defaulters"}</span>
                </div>
              </div>

              {/* Bottom Android Home Indicator Pill */}
              <div className="bg-navy-950 pb-2 pt-1 flex justify-center">
                <div className="w-24 h-1 bg-slate-700 rounded-full" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
