import React, { useState } from 'react';
import { FAQS, CONTENT_MK, CONTENT_LATIN } from '../data/content';
import { Language } from '../types';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQProps {
  language: Language;
}

export const FAQ: React.FC<FAQProps> = ({ language }) => {
  const t = language === 'mk' ? CONTENT_MK : CONTENT_LATIN;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      aria-label="Често Поставувани Прашања"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-red-500 uppercase font-bold">
            <span className="w-8 h-px bg-red-600"></span>
            <span>{language === 'mk' ? 'ИНФОРМАЦИИ' : 'INFORMATION'}</span>
            <span className="w-8 h-px bg-red-600"></span>
          </div>

          <h2 className="mt-3 font-cinzel text-2xl sm:text-4xl font-extrabold text-white tracking-wide uppercase">
            {t.faqHeading}
          </h2>

          <p className="mt-3 text-sm text-neutral-400">
            {language === 'mk'
              ? 'Одговори на најчестите прашања за почетници и нови членови.'
              : 'Answers to the most common inquiries for newcomers and beginners.'}
          </p>
        </header>

        {/* Accordion List */}
        <div className="mt-12 space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`border rounded-xs transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-neutral-900/90 border-red-700/70 shadow-[0_0_15px_rgba(229,9,20,0.15)]'
                    : 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-red-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold font-cinzel text-white flex items-center gap-3">
                    <span className="text-red-500 font-mono text-sm">0{idx + 1}.</span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-red-500' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/80">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
