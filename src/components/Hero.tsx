import React from 'react';
import { ASSET_PATHS, CONTENT_MK, CONTENT_LATIN, CONTACT_INFO } from '../data/content';
import { Language } from '../types';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = language === 'mk' ? CONTENT_MK : CONTENT_LATIN;

  return (
    <section
      id="hero"
      aria-label="Боева Система Шуманов Вовед"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-28 bg-black text-center"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <img
          src={ASSET_PATHS.emblem}
          alt="Емблема на волк — Combat System Shumanov"
          className="w-[min(78vw,420px)] sm:w-[min(60vw,480px)] object-contain"
        />

        <p className="mt-7 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase leading-snug font-cinzel">
          <span>Тренирај го телото.</span>{' '}
          <span className="text-neutral-300">Разбери го умот.</span>{' '}
          <span className="text-red-500">Запознај се себеси.</span>
        </p>

        <p className="mt-3 text-sm sm:text-base text-neutral-300 font-medium tracking-wide">
          {t.subMotto}
        </p>

        <p className="mt-6 max-w-3xl text-sm sm:text-base text-neutral-300 leading-relaxed">
          <strong className="text-white font-semibold">Combat Systema Shumanov</strong> е интегративен систем на боречка обука и физички развој што ги поврзува{' '}
          <span className="text-red-400">природното движење</span>, функционалната сила, мобилноста, живиот контакт, дишењето и менталната присебност.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <a
            href="#philosophy"
            className="w-full sm:w-auto px-7 py-3.5 bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-xs transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>{t.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto px-7 py-3.5 bg-black text-red-400 hover:text-white border border-red-800 hover:bg-red-950/40 text-xs sm:text-sm font-bold tracking-widest uppercase rounded-xs transition-all duration-200"
          >
            {language === 'mk' ? 'Контактирај' : 'Contact'}
          </a>
        </div>

        <div className="mt-7 w-full max-w-3xl overflow-hidden border border-neutral-800 bg-black shadow-[0_0_28px_rgba(229,9,20,0.12)]">
          <video
            src={ASSET_PATHS.heroVideo}
            controls
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={language === 'mk' ? 'Видео за Боевата Система Шуманов' : 'Combat System Shumanov video'}
            className="block w-full aspect-video object-contain bg-black"
          />
        </div>

        <div className="mt-10 w-full max-w-4xl grid grid-cols-2 lg:grid-cols-4 gap-3 text-left">
          {t.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-black border border-neutral-800 hover:border-red-600/60 p-4 transition-colors"
            >
              <div className="text-lg sm:text-xl font-cinzel font-black text-white">{stat.value}</div>
              <div className="text-xs sm:text-sm font-bold text-neutral-200 mt-1">{stat.label}</div>
              <div className="text-[11px] text-neutral-400 mt-1 leading-snug">{stat.desc}</div>
            </div>
          ))}
        </div>

        <a href="#philosophy" className="mt-8 flex items-center gap-2 text-neutral-400 hover:text-white">
          <span className="text-[10px] tracking-widest uppercase font-mono">
            {language === 'mk' ? 'Истражи Повеќе' : 'Explore System'}
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-red-500" />
        </a>
      </div>
    </section>
  );
};
