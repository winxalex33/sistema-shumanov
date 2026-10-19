import React, { useState, useRef, useEffect } from 'react';
import { CONTENT_MK, CONTENT_LATIN, CONTACT_INFO } from '../data/content';
import { Language } from '../types';
import { ArrowRight, Volume2, VolumeX, Pause, Play, Upload, Sparkles, ChevronDown } from 'lucide-react';

interface HeroProps {
  language: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenBooking }) => {
  const t = language === 'mk' ? CONTENT_MK : CONTENT_LATIN;

  const [videoSrc, setVideoSrc] = useState<string>('/videos/hero_loop.mp4');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
        setIsPlaying(false);
      });
    }
  }, [videoSrc]);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleVideoFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Instant client-side playback
    const localUrl = URL.createObjectURL(file);
    setVideoSrc(localUrl);
    setIsPlaying(true);
    setUploadStatus(language === 'mk' ? 'Видеото е вчитано во лооп!' : 'Video loaded in loop!');

    // Persist to server in background
    try {
      const response = await fetch('/api/upload-video', {
        method: 'POST',
        headers: { 'Content-Type': file.type || 'video/mp4' },
        body: file
      });
      if (response.ok) {
        setUploadStatus(language === 'mk' ? 'Видеото е трајно зачувано на сајтот!' : 'Video saved permanently!');
      }
    } catch {
      // Offline fallback still works via localUrl
    }

    setTimeout(() => setUploadStatus(null), 4000);
  };

  const brandMain = language === 'mk' ? 'ШУМАНОВ' : 'SHUMANOV';
  const brandSub = language === 'mk' ? 'БОЕВА СИСТЕМА' : 'COMBAT SYSTEM';

  return (
    <section
      id="hero"
      aria-label="Боева Система Шуманов Вовед"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Cinematic Ambient Background Video Loop */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          ref={videoRef}
          key={videoSrc}
          src={videoSrc}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-45 scale-105 filter brightness-75 contrast-125 transition-opacity duration-700"
        />

        {/* Multi-layered Dark Vignette & Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/90 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.85)_80%)] pointer-events-none"></div>
        
        {/* Subtle red accent glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/10 blur-[140px] pointer-events-none rounded-full"></div>
      </div>

      {/* Floating Video Controls in Top-Right Corner */}
      <div className="absolute top-24 right-4 sm:right-8 z-30 flex items-center gap-2">
        {uploadStatus && (
          <span className="text-[11px] font-mono text-green-400 bg-black/90 px-2.5 py-1 rounded-xs border border-green-800 animate-in fade-in">
            ✓ {uploadStatus}
          </span>
        )}

        <button
          onClick={handleTogglePlay}
          className="p-2 bg-black/80 hover:bg-neutral-900 border border-neutral-800 text-white rounded-xs transition-colors cursor-pointer"
          title={isPlaying ? 'Пауза' : 'Пушти'}
          aria-label={isPlaying ? 'Пауза' : 'Пушти'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
        </button>

        <button
          onClick={handleToggleMute}
          className="p-2 bg-black/80 hover:bg-neutral-900 border border-neutral-800 text-white rounded-xs transition-colors cursor-pointer"
          title={isMuted ? 'Вклучи звук' : 'Исклучи звук'}
          aria-label={isMuted ? 'Вклучи звук' : 'Исклучи звук'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-green-400" />}
        </button>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleVideoFileChange}
          accept="video/*"
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-2.5 py-1.5 bg-black/80 hover:bg-neutral-900 border border-red-800/80 hover:border-red-600 text-neutral-300 hover:text-white text-[11px] font-mono rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          title="Смени го видеото во позадина"
        >
          <Upload className="w-3 h-3 text-red-500" />
          <span className="hidden sm:inline">{language === 'mk' ? 'Смени видео' : 'Change Video'}</span>
        </button>
      </div>

      {/* Main Hero Foreground Content */}
      <div className="max-w-5xl mx-auto w-full relative z-10 text-center flex flex-col items-center">
        
        {/* Pure Typographic Grand Title (No AI SVGs) */}
        <div className="inline-flex flex-col items-center max-w-2xl w-full">
          {/* Subtitle with precision crimson rules */}
          <div className="flex items-center justify-center w-full gap-3 text-xs tracking-[0.35em] font-semibold text-neutral-300 uppercase">
            <span className="h-[2px] w-8 sm:w-16 bg-red-600 shadow-[0_0_8px_rgba(229,9,20,0.8)]"></span>
            <span className="text-red-500 text-xs sm:text-sm font-mono tracking-[0.3em]">
              {brandSub}
            </span>
            <span className="h-[2px] w-8 sm:w-16 bg-red-600 shadow-[0_0_8px_rgba(229,9,20,0.8)]"></span>
          </div>

          {/* Main Name: SHUMANOV in Roman Serif */}
          <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.12em] text-white mt-2 uppercase text-glow-red">
            {brandMain}
          </h1>

          {/* Solid Red Bar Underneath */}
          <div className="h-[3.5px] w-full max-w-[500px] bg-red-600 mt-2 shadow-[0_0_15px_rgba(229,9,20,0.9)] rounded-xs"></div>
        </div>

        {/* Core Philosophy Motto: Train body. Understand mind. Know yourself. */}
        <div className="max-w-3xl mt-8">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight text-white uppercase leading-snug font-cinzel">
            <span>Тренирај го телото.</span>{' '}
            <span className="text-neutral-300">Разбери го умот.</span>{' '}
            <span className="text-red-500 text-glow-red">Запознај се себеси.</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-300 font-medium tracking-wide">
            {t.subMotto}
          </p>
        </div>

        {/* Lead Narrative Quote from Aleksandar Shumanov */}
        <div className="max-w-2xl mt-6 p-5 rounded-xs bg-black/75 border border-neutral-800/90 backdrop-blur-md relative">
          <div className="absolute -top-px left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          
          <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-sans">
            <strong className="text-white font-semibold">Combat Systema Shumanov</strong> е интегративен систем на боречка обука и физички развој што ги поврзува{' '}
            <span className="text-red-400 font-medium">природното движење</span>,{' '}
            <span className="text-white">функционалната сила</span>, мобилноста,{' '}
            <span className="text-red-400 font-medium">живиот контакт</span>,{' '}
            дишењето и <span className="text-red-400 font-medium">менталната присебност</span>.
          </p>

          <div className="mt-3 text-xs tracking-wider font-mono text-red-500 font-bold uppercase">
            ★ {t.heroTagline}
          </div>
        </div>

        {/* Action Buttons: [ЗАПОЗНАЈ СЕ СО СИСТЕМАТА] & [ИСТРАЖИ ГИ МЕТОДИТЕ НА ТРЕНИНГ] */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <a
            href="#philosophy"
            className="w-full sm:w-auto px-7 py-3.5 bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-xs transition-all duration-200 shadow-[0_0_25px_rgba(229,9,20,0.5)] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>{t.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#methods"
            className="w-full sm:w-auto px-7 py-3.5 bg-neutral-950/90 hover:bg-neutral-900 text-neutral-200 hover:text-white border border-neutral-700 hover:border-red-600 text-xs sm:text-sm font-bold tracking-widest uppercase rounded-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{t.ctaSecondary}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-3.5 bg-black text-red-400 hover:text-white border border-red-800 hover:bg-red-950/40 text-xs sm:text-sm font-bold tracking-widest uppercase rounded-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{t.ctaBook}</span>
          </button>
        </div>

        {/* Key Tenets Quick Grid (Anti-slop, clean unboxed metadata) */}
        <div className="mt-12 w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
          {t.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-black/80 border border-neutral-850 hover:border-red-600/60 p-4 rounded-xs transition-all duration-300 relative group backdrop-blur-sm"
            >
              <div className="text-xl sm:text-2xl font-cinzel font-black text-white group-hover:text-red-500 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-neutral-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-neutral-400 mt-1 leading-snug">
                {stat.desc}
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Scroll Down */}
        <div className="mt-10 flex flex-col items-center gap-1 text-neutral-400">
          <span className="text-[10px] tracking-widest uppercase font-mono">
            {language === 'mk' ? 'Истражи Повеќе' : 'Explore System'}
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-red-500" />
        </div>

      </div>
    </section>
  );
};
