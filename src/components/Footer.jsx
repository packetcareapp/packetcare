import React from 'react';
import { PACKETCARE_CONFIG } from '../data/config';
import { Download, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onDownloadClick, onOpenInstallModal }) {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-slate-800/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-care-600 text-white flex items-center justify-center font-bold text-sm">
                PC
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Packet<span className="text-care-400">Care</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Mobile-Based Child Immunization Notification and Tracking System for Android. Aligned with the Philippine DOH Expanded Program on Immunization (EPI).
            </p>

            <div className="pt-2 text-xs text-slate-500">
              Capstone Project • Bachelor of Science in Information Technology
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-care-400 transition-colors">
                  Why PacketCare
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-care-400 transition-colors">
                  Key Features
                </a>
              </li>
              <li>
                <a href="#epi-schedule" className="hover:text-care-400 transition-colors">
                  DOH EPI Routine Schedule
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-care-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-care-400 transition-colors">
                  Interactive App Preview
                </a>
              </li>
              <li>
                <a href="#roles" className="hover:text-care-400 transition-colors">
                  Mobile Portals (Parent & RHU Views)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-care-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Technology Badges */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Mobile Technology & Standards
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                Android 8.0+ Native App
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                Philippine DOH EPI Standard
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                Semaphore Cellular SMS Alerts
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                Field Offline Record Keeping
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                28-Day Dose Safety Rule
              </span>
            </div>

            <div className="pt-2">
              <a
                href={PACKETCARE_CONFIG.downloadUrl}
                download={PACKETCARE_CONFIG.fileName}
                onClick={onDownloadClick}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-care-600 hover:bg-care-500 text-white text-xs font-bold transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download APK ({PACKETCARE_CONFIG.version})</span>
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} PacketCare. All rights reserved. Developed for public health research and capstone evaluation.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenInstallModal}
              className="hover:text-slate-300 underline"
            >
              APK Installation Guide
            </button>
            <span>•</span>
            <span className="text-emerald-400 flex items-center gap-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              DOH EPI Aligned
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
