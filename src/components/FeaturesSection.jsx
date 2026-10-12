import React, { useState } from 'react';
import { KEY_FEATURES } from '../data/config';
import { 
  FileCheck2, 
  MessageSquare, 
  Baby, 
  Users, 
  ClipboardList, 
  AlertTriangle, 
  Send, 
  WifiOff,
  Check,
  Smartphone
} from 'lucide-react';

const iconMap = {
  FileCheck2: FileCheck2,
  MessageSquare: MessageSquare,
  Baby: Baby,
  Users: Users,
  ClipboardList: ClipboardList,
  AlertTriangle: AlertTriangle,
  Send: Send,
  WifiOff: WifiOff,
};

export default function FeaturesSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [smsDispatched, setSmsDispatched] = useState(false);
  const [selectedChild, setSelectedChild] = useState('Lucas (3m)');

  const categories = ['All', 'Parent View', 'RHU View'];

  const filteredFeatures = activeFilter === 'All'
    ? KEY_FEATURES
    : KEY_FEATURES.filter(f => f.category === activeFilter);

  const renderVisualWidget = (feature) => {
    switch (feature.visualType) {
      case 'card_badge':
        return (
          <div className="p-2.5 rounded-xl bg-navy-900 border border-slate-800 flex items-center justify-between text-[11px] mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-bold text-white">Bakuna Card</span>
            </div>
            <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
              6/13 Doses Done
            </span>
          </div>
        );

      case 'sms_bubble':
        return (
          <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-800/60 text-[11px] mb-3 space-y-1">
            <div className="flex justify-between text-[10px] text-amber-300 font-bold">
              <span>SMS Preview</span>
              <span>9:00 AM</span>
            </div>
            <p className="text-[10px] text-amber-100 font-mono leading-tight">
              "Due on Oct 19 at Health Center."
            </p>
          </div>
        );

      case 'timeline_bars':
        return (
          <div className="grid grid-cols-3 gap-1.5 mb-3 text-center text-[10px]">
            <div className="p-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300 font-bold">
              6 Done
            </div>
            <div className="p-1.5 rounded-lg bg-amber-950/60 border border-amber-800 text-amber-300 font-bold">
              1 Due
            </div>
            <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 font-medium">
              6 Next
            </div>
          </div>
        );

      case 'child_pills':
        return (
          <div className="flex gap-2 mb-3">
            {['Lucas (3m)', 'Chloe (9m)'].map(child => (
              <button
                key={child}
                onClick={() => setSelectedChild(child)}
                className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-all ${
                  selectedChild === child
                    ? 'bg-care-600 text-white border-care-500 shadow-sm'
                    : 'bg-navy-900 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                👶 {child}
              </button>
            ))}
          </div>
        );

      case 'registry_table':
        return (
          <div className="p-2.5 rounded-xl bg-navy-900 border border-slate-800 text-[10px] mb-3 flex items-center justify-between">
            <span className="text-slate-300 font-bold">Purok 3 Registry</span>
            <span className="text-care-300 font-mono bg-care-950 px-1.5 py-0.5 rounded border border-care-800">
              148 Children
            </span>
          </div>
        );

      case 'overdue_pill':
        return (
          <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-900/60 mb-3 flex items-center justify-between text-[11px]">
            <span className="text-rose-200 font-bold text-[10px]">Baby Sofia Ramos</span>
            <span className="text-[9px] font-bold bg-rose-900/80 text-rose-200 px-2 py-0.5 rounded-full border border-rose-700 animate-pulse">
              9d Overdue
            </span>
          </div>
        );

      case 'dispatch_btn':
        return (
          <div className="mb-3">
            <button
              onClick={() => {
                setSmsDispatched(true);
                setTimeout(() => setSmsDispatched(false), 2500);
              }}
              className="w-full py-1.5 px-2 rounded-lg bg-care-600 hover:bg-care-500 active:scale-[0.98] text-white text-[10px] font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
            >
              <Send className="w-3 h-3" />
              <span>{smsDispatched ? 'SMS Sent to +639...!' : 'Send 1-Click Reminder'}</span>
            </button>
          </div>
        );

      case 'offline_badge':
        return (
          <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 mb-3 flex items-center justify-between text-[10px]">
            <span className="text-emerald-300 font-bold">Field Mode</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Saved Locally
            </span>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="features" className="py-20 md:py-24 bg-navy-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-care-950/80 text-care-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-care-800">
            Core Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Features for Parents and RHU Staff
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Interactive mobile tools designed for immunization tracking and field healthcare.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-care-600 text-white shadow-md shadow-care-600/30'
                    : 'bg-navy-850 text-slate-300 hover:bg-navy-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid with Visual UI Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFeatures.map((feature) => {
            const IconComponent = iconMap[feature.iconName] || FileCheck2;

            return (
              <div
                key={feature.id}
                className="bg-navy-850 rounded-3xl p-5 sm:p-6 border border-slate-800/90 shadow-xl shadow-black/40 hover:shadow-2xl hover:border-care-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top: Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-navy-900 border border-slate-800 text-care-400 group-hover:bg-care-600 group-hover:text-white transition-colors duration-200 flex items-center justify-center font-bold">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-navy-900 text-slate-300 border border-slate-800">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-base font-bold text-white mb-1.5 leading-snug">
                    {feature.title}
                  </h3>
                  
                  {/* Micro Description */}
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    {feature.shortDesc}
                  </p>
                </div>

                {/* Embedded Mini UI Widget */}
                <div>
                  {renderVisualWidget(feature)}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
