import React from 'react';
import { TRAINING_PILLARS, CONTENT_MK, CONTENT_LATIN } from '../data/content';
import { Language } from '../types';
import { Brain, ShieldAlert, Wind, Zap, Compass, CheckCircle2, Quote } from 'lucide-react';

interface PhilosophyProps {
  language: Language;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ language }) => {
  const t = language === 'mk' ? CONTENT_MK : CONTENT_LATIN;

  const iconMap: Record<string, React.ReactNode> = {
    Brain: <Brain className="w-5 h-5 text-red-500" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-red-500" />,
    Wind: <Wind className="w-5 h-5 text-red-500" />,
    Zap: <Zap className="w-5 h-5 text-red-500" />
  };

  return (
    <section
      id="philosophy"
      aria-label="Филозофија и Принципи на Боева Система Шуманов"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 relative border-t border-b border-neutral-900"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-red-500 uppercase font-semibold">
            <span className="w-8 h-px bg-red-600"></span>
            <span>{language === 'mk' ? 'СУШТИНСКИ ПРИНЦИПИ' : 'CORE TENETS'}</span>
            <span className="w-8 h-px bg-red-600"></span>
          </div>

          <h2 className="mt-3 font-cinzel text-2xl sm:text-4xl font-extrabold text-white tracking-wide uppercase">
            {t.philosophyHeading}
          </h2>

          <p className="mt-3 text-base text-neutral-400 leading-relaxed font-sans">
            {t.philosophySubheading}
          </p>
        </header>

        {/* Central Quote Callout from Aleksandar Shumanov */}
        <div className="mt-12 bg-black border-l-4 border-red-600 p-6 sm:p-8 rounded-r-xs relative shadow-xl">
          <Quote className="absolute top-4 right-4 w-12 h-12 text-neutral-800/60 pointer-events-none" />
          <p className="text-lg sm:text-xl font-medium text-neutral-200 leading-relaxed italic">
            „Тренингот е процес на откривање на сопствените навики, реакции, ограничувања и можности. Кога се соочуваме со напор, ги препознаваме своите граници. Кога работиме со партнер, учиме да ги контролираме реакциите.“
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(229,9,20,0.8)]"></div>
            <span className="text-sm font-semibold tracking-wider text-red-500 uppercase font-mono">
              Александар Шуманов — Инструктор & Основач
            </span>
          </div>
        </div>

        {/* Responsive Grid of the 4 Core Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TRAINING_PILLARS.map((pillar) => (
            <article
              key={pillar.id}
              className="bg-neutral-900/60 border border-neutral-800 hover:border-red-600/70 p-6 sm:p-8 rounded-xs transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Header with Pillar Number and Icon */}
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xs bg-red-950/60 border border-red-900/60 flex items-center justify-center">
                      {iconMap[pillar.icon]}
                    </span>
                    <div>
                      <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-wider block">
                        СТОЛБ {pillar.number}
                      </span>
                      <h3 className="text-lg sm:text-xl font-cinzel font-bold text-white group-hover:text-red-400 transition-colors">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-2xl font-mono font-black text-neutral-800 group-hover:text-neutral-700 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                {/* Subtitle & Highlight */}
                <p className="mt-4 text-xs font-bold tracking-wide text-red-400 uppercase font-mono">
                  {pillar.subtitle}
                </p>

                {/* Main Body */}
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed font-sans">
                  {pillar.description}
                </p>

                {/* Key Benefits List with checkmarks */}
                <ul className="mt-5 space-y-2.5 pt-4 border-t border-neutral-800/60">
                  {pillar.keyBenefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Subtle Corner Glow Accent */}
              <div className="mt-6 pt-3 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>Combat Systema Tenet</span>
                <span className="text-red-500 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </article>
          ))}
        </div>

        {/* The Philosophical Culmination Banner: Life is to be lived! */}
        <div className="mt-14 p-8 sm:p-10 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-red-950 rounded-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              {language === 'mk' ? 'ВИСТИНИТИОТ СТАВ' : 'THE LIVING POSTURE'}
            </span>
            
            <h3 className="mt-2 text-xl sm:text-3xl font-cinzel font-black text-white uppercase tracking-wide">
              {t.manifestoQuote.highlight}
            </h3>

            <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              „{t.manifestoQuote.body}“
            </p>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-neutral-950 border border-red-700/50 rounded-xs text-xs font-mono text-red-400 font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              {language === 'mk' 
                ? 'Смиреност во движењето · Контрола под притисок'
                : 'Calmness in motion · Composure under pressure'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
