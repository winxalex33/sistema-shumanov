import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { TrainingMethods } from './components/TrainingMethods';
import { DrillShowcase } from './components/DrillShowcase';
import { FAQ } from './components/FAQ';
import { InteractiveBooking } from './components/InteractiveBooking';
import { Footer } from './components/Footer';
import { GitHubExportModal } from './components/GitHubExportModal';
import { Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('mk');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'mk' ? 'latin' : 'mk'));
  };

  const scrollToBooking = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f3f4f6] selection:bg-red-600 selection:text-white flex flex-col font-sans">
      {/* Top semantic header */}
      <Header
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onOpenBooking={scrollToBooking}
      />

      {/* Semantic Main Content */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section with Cinematic Background Video Loop */}
        <Hero
          language={language}
          onOpenBooking={scrollToBooking}
        />

        {/* Philosophy & Principles */}
        <Philosophy language={language} />

        {/* Training Methodology */}
        <TrainingMethods
          language={language}
          onSelectMethodForBooking={scrollToBooking}
        />

        {/* Real Training Action & Drills Showcase */}
        <DrillShowcase language={language} />

        {/* FAQ Accordion */}
        <FAQ language={language} />

        {/* Interactive Booking & Contact Form */}
        <InteractiveBooking
          language={language}
        />
      </main>

      {/* Semantic Footer */}
      <Footer
        language={language}
        onOpenExportModal={() => setIsExportModalOpen(true)}
      />

      {/* GitHub Pages Clean Export Modal */}
      <GitHubExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        language={language}
      />
    </div>
  );
}
