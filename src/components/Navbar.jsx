import React, { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';
import { Download, Menu, X } from 'lucide-react';
import { PACKETCARE_CONFIG } from '../data/config';

export default function Navbar({ onDownloadClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'EPI Schedule', href: '#epi-schedule' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'App Preview', href: '#showcase' },
    { name: 'Parent & RHU Views', href: '#roles' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-lg shadow-black/40 py-3'
          : 'bg-navy-900/80 backdrop-blur-md border-b border-slate-800/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="focus:outline-none focus:ring-2 focus:ring-care-500 rounded-lg">
            <BrandLogo />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-care-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#download"
              onClick={onDownloadClick}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-care-600 hover:bg-care-500 text-white shadow-lg shadow-care-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              <span>Download APK</span>
              <span className="text-[11px] font-medium bg-care-500/80 px-1.5 py-0.5 rounded text-white">
                {PACKETCARE_CONFIG.version}
              </span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onDownloadClick}
              className="p-2 rounded-lg bg-care-950 text-care-300 font-medium text-xs flex items-center gap-1 border border-care-800"
              title="Download APK"
            >
              <Download className="w-3.5 h-3.5" />
              <span>APK</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-care-500"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card-dark border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-navy-800 hover:text-care-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800">
              <a
                href="#download"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDownloadClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold bg-care-600 text-white shadow-lg shadow-care-600/30"
              >
                <Download className="w-4 h-4" />
                <span>Download Android APK ({PACKETCARE_CONFIG.version})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
