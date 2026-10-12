import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CareBackground from './components/CareBackground';
import Hero from './components/Hero';
import LiveStatsBar from './components/LiveStatsBar';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import EpiScheduleSection from './components/EpiScheduleSection';
import HowItWorksSection from './components/HowItWorksSection';
import InteractiveAppShowcase from './components/InteractiveAppShowcase';
import UserRolesSection from './components/UserRolesSection';
import DownloadSection from './components/DownloadSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import InstallModal from './components/InstallModal';
import DownloadToast from './components/DownloadToast';
import { triggerCareConfetti } from './utils/confetti';
import { PACKETCARE_CONFIG } from './data/config';

export default function App() {
  const [installModalOpen, setInstallModalOpen] = useState(false);
  const [toast, setToast] = useState({
    visible: false,
    title: '',
    message: ''
  });

  const showToast = (message, title = "Download Initiated") => {
    setToast({
      visible: true,
      title,
      message
    });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 6000);
  };

  const handleDownloadClick = () => {
    triggerCareConfetti();
    showToast(
      `Downloading PacketCare APK (${PACKETCARE_CONFIG.version}, ${PACKETCARE_CONFIG.fileSize}). Check your notification bar or Downloads folder.`,
      "Download Started"
    );
  };

  return (
    <div className="min-h-screen bg-navy-900 text-slate-100 font-sans selection:bg-care-500 selection:text-white relative">
      {/* Ambient Care Glow Background */}
      <CareBackground />

      {/* Main Navigation */}
      <Navbar 
        onDownloadClick={handleDownloadClick} 
        onOpenDemoModal={() => setInstallModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        {/* 1. Hero Section */}
        <Hero 
          onDownloadClick={handleDownloadClick} 
          onOpenInstallModal={() => setInstallModalOpen(true)} 
        />

        {/* 2. Live Public Health Trust Stats */}
        <LiveStatsBar />

        {/* 3. The Need & The Solution (About) */}
        <AboutSection onDownloadClick={handleDownloadClick} />

        {/* 4. Core Features Grid */}
        <FeaturesSection />

        {/* 5. Official DOH EPI Routine Schedule Table */}
        <EpiScheduleSection />

        {/* 6. Step-by-Step Workflow */}
        <HowItWorksSection />

        {/* 7. Interactive App Showcase (Parent, RHU View) */}
        <InteractiveAppShowcase onDownloadClick={handleDownloadClick} />

        {/* 8. User Roles Deep-Dive */}
        <UserRolesSection 
          onDownloadClick={handleDownloadClick} 
          onShowToast={showToast}
        />

        {/* 9. Dedicated APK Download Section */}
        <DownloadSection 
          onDownloadClick={handleDownloadClick} 
          onOpenInstallModal={() => setInstallModalOpen(true)}
          onShowToast={showToast}
        />

        {/* 10. Frequently Asked Questions */}
        <FaqSection />

        {/* 11. Final High-Conversion CTA */}
        <FinalCtaSection 
          onDownloadClick={handleDownloadClick} 
          onOpenInstallModal={() => setInstallModalOpen(true)} 
        />
      </main>

      {/* Footer */}
      <Footer 
        onDownloadClick={handleDownloadClick} 
        onOpenInstallModal={() => setInstallModalOpen(true)} 
      />

      {/* Android Installation Modal */}
      <InstallModal 
        isOpen={installModalOpen}
        onClose={() => setInstallModalOpen(false)}
        onDownloadClick={handleDownloadClick}
        onShowToast={showToast}
      />

      {/* Floating Download Toast */}
      <DownloadToast 
        toast={toast} 
        onClose={() => setToast(prev => ({ ...prev, visible: false }))} 
      />
    </div>
  );
}

