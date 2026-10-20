import React, { useState } from 'react';
import { ASSET_PATHS, METHOD_CARDS, CONTENT_MK, CONTENT_LATIN, CONTACT_INFO } from '../data/content';
import { Language } from '../types';
import { Dumbbell, Users, Swords, Activity, ShieldCheck, CheckCircle } from 'lucide-react';

interface TrainingMethodsProps {
  language: Language;
}

export const TrainingMethods: React.FC<TrainingMethodsProps> = ({ language }) => {
  const t = language === 'mk' ? CONTENT_MK : CONTENT_LATIN;
  const [activeCardId, setActiveCardId] = useState<string>(METHOD_CARDS[0].id);

  const getMethodIcon = (id: string) => {
    switch (id) {
      case 'combat-conditioning':
        return <Dumbbell className="w-5 h-5 text-red-500" />;
      case 'partner-drills':
        return <Users className="w-5 h-5 text-red-500" />;
      case 'striking-evasion':
        return <Swords className="w-5 h-5 text-red-500" />;
      case 'breath-mobility':
      default:
        return <Activity className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <section
      id="methods"
      aria-label="Методи на Тренинг"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <header className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-red-500 uppercase font-semibold">
            <span className="w-8 h-px bg-red-600"></span>
            <span>{language === 'mk' ? 'МЕТОДОЛОГИЈА' : 'METHODOLOGY'}</span>
            <span className="w-8 h-px bg-red-600"></span>
          </div>

          <h2 className="mt-3 font-cinzel text-2xl sm:text-4xl font-extrabold text-white tracking-wide uppercase">
            {t.methodsHeading}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-sans">
            {t.methodsSubheading}
          </p>
        </header>

        {/* Core Methodology Pillars - Responsive Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {METHOD_CARDS.map((card) => {
            const isSelected = activeCardId === card.id;
            const videoSrc = card.id === 'partner-drills'
              ? ASSET_PATHS.conditioningVideo
              : card.id === 'striking-evasion'
                ? ASSET_PATHS.sparringVideo
                : null;

            return (
              <article
                key={card.id}
                onClick={() => setActiveCardId(card.id)}
                className={`cursor-pointer rounded-xs p-6 sm:p-7 border transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-neutral-900/90 border-red-600 shadow-[0_0_25px_rgba(229,9,20,0.25)]'
                    : 'bg-neutral-950/70 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/40'
                }`}
              >
                <div>
                  {/* Category and Icon */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                    <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-wider">
                      {card.category}
                    </span>
                    <div className="w-8 h-8 rounded-xs bg-red-950/40 border border-red-900/50 flex items-center justify-center">
                      {getMethodIcon(card.id)}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="mt-4 text-lg sm:text-xl font-cinzel font-bold text-white group-hover:text-red-400 transition-colors">
                    {card.title}
                  </h3>

                  {videoSrc && (
                    <video
                      src={videoSrc}
                      controls
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      aria-label={card.title}
                      onClick={(event) => event.stopPropagation()}
                      className="mt-4 w-full aspect-video object-cover bg-black border border-neutral-800"
                    />
                  )}

                  <p className="mt-1 text-xs font-semibold text-neutral-400 italic">
                    „{card.tagline}“
                  </p>

                  {/* Main Description */}
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Focus Areas Bullets */}
                  <div className="mt-5 pt-4 border-t border-neutral-800/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold block mb-2">
                      {language === 'mk' ? 'Клучни фокусни точки:' : 'Key focus areas:'}
                    </span>
                    <ul className="space-y-2">
                      {card.focusAreas.map((area, aIdx) => (
                        <li key={aIdx} className="flex items-center gap-2 text-xs text-neutral-200">
                          <CheckCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-6 pt-4 border-t border-neutral-800/50 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-400">
                    {isSelected 
                      ? (language === 'mk' ? 'Селектиран метод' : 'Selected method')
                      : (language === 'mk' ? 'Кликни за детал' : 'Click for details')}
                  </span>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-bold text-red-500 hover:text-red-400"
                  >
                    {language === 'mk' ? 'Прашај за методот' : 'Ask about this method'}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Human Goal Summary Card */}
        <div className="mt-12 bg-neutral-950 border border-neutral-800 p-6 sm:p-8 rounded-xs relative">
          <div className="max-w-3xl">
            <h4 className="text-sm font-mono font-bold tracking-wider text-red-500 uppercase">
              {language === 'mk' ? 'КРАЈНАТА ЦЕЛ' : 'THE ULTIMATE GOAL'}
            </h4>
            <p className="mt-2 text-base sm:text-xl font-bold text-white font-cinzel leading-snug">
              {language === 'mk' ? (
                <>
                  „Нашата цел е да развиеме човек кој е <span className="text-red-500">мобилен</span>,{' '}
                  <span className="text-red-500">силен</span>, <span className="text-red-500">флуиден</span>,{' '}
                  <span className="text-red-500">издржлив</span>, присебен и подготвен да се приспособува.“
                </>
              ) : (
                <>
                  "Our goal is to forge an individual who is <span className="text-red-500">mobile</span>,{' '}
                  <span className="text-red-500">strong</span>, <span className="text-red-500">fluid</span>,{' '}
                  <span className="text-red-500">resilient</span>, composed, and ready to adapt."
                </>
              )}
            </p>
            <p className="mt-3 text-xs sm:text-sm text-neutral-400">
              {language === 'mk'
                ? 'Преку движење, контакт, отпор, игра и спаринг во реални услови, ги спојуваме сите аспекти на човечката природа.'
                : 'Through movement, contact, resistance, play, and realistic sparring conditions, we unify all dimensions of human nature.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
