import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { TrainingMethods } from './components/TrainingMethods';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { GitHubExportModal } from './components/GitHubExportModal';
import { Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('mk');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'mk' ? 'latin' : 'mk'));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f3f4f6] selection:bg-red-600 selection:text-white flex flex-col font-sans">
      {/* Top semantic header */}
      <Header
        language={language}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* Semantic Main Content */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section with Cinematic Background Video Loop */}
        <Hero language={language} />

        {/* Philosophy & Principles */}
        <Philosophy language={language} />

        {/* Training Methodology with inline method videos */}
        <TrainingMethods language={language} />

        {/* FAQ Accordion */}
        <FAQ language={language} />
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
