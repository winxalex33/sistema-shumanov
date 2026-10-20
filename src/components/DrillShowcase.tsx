import React, { useState, useRef } from 'react';
import { ASSET_PATHS, VIDEO_DRILLS, CONTENT_MK, CONTENT_LATIN } from '../data/content';
import { Language, VideoDrill } from '../types';
import { Play, Pause, Volume2, VolumeX, Maximize2, Upload, Video, RotateCcw, Check, Sparkles } from 'lucide-react';

interface DrillShowcaseProps {
  language: Language;
}

export const DrillShowcase: React.FC<DrillShowcaseProps> = ({ language }) => {
  const t = language === 'mk' ? CONTENT_MK : CONTENT_LATIN;
  const [activeDrill, setActiveDrill] = useState<VideoDrill>(VIDEO_DRILLS[0]);
  const [customVideoUrl, setCustomVideoUrl] = useState<string | null>(null);
  const [customFileName, setCustomFileName] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentVideoSrc = customVideoUrl || activeDrill.videoSrc || ASSET_PATHS.heroVideo;

  const handlePlayPause = () => {
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

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomVideoUrl(url);
      setCustomFileName(file.name);
      setIsPlaying(true);
    }
  };

  const handleSelectDrill = (drill: VideoDrill) => {
    setActiveDrill(drill);
    setCustomVideoUrl(null); // Return to default clip
    setCustomFileName(null);
    setIsPlaying(true);
  };

  return (
    <section
      id="showcase"
      aria-label="Реални Тренинзи во Движење"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 relative border-t border-b border-neutral-900"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-red-500 uppercase font-bold">
            <span className="w-8 h-px bg-red-600"></span>
            <span>{language === 'mk' ? 'ВИДЕА ОД ТРЕНИНЗИ ВО ЖИВО' : 'LIVE DRILL FOOTAGE'}</span>
            <span className="w-8 h-px bg-red-600"></span>
          </div>

          <h2 className="mt-3 font-cinzel text-2xl sm:text-4xl font-extrabold text-white tracking-wide uppercase">
            {t.showcaseHeading}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed font-sans">
            {t.showcaseSubheading}
          </p>
        </header>

        {/* Interactive Showcase Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Active Video Player (7 cols) */}
          <div className="lg:col-span-7 bg-black border border-neutral-800 rounded-xs overflow-hidden relative shadow-2xl group">
            
            {/* Real HTML5 Video Container */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
              <video
                ref={videoRef}
                key={currentVideoSrc}
                src={currentVideoSrc}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                {language === 'mk' ? 'Вашиот прелистувач не поддржува видео таг.' : 'Your browser does not support the video tag.'}
              </video>

              {/* Top video title overlay */}
              <div className="absolute top-0 left-0 right-0 p-3.5 bg-gradient-to-b from-black/90 via-black/50 to-transparent flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(229,9,20,0.9)]"></span>
                  <span className="text-xs font-mono text-white font-bold tracking-wider uppercase">
                    {customFileName ? `Прикажано видео: ${customFileName}` : activeDrill.title}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-red-950/80 border border-red-600/80 text-red-400 font-bold uppercase">
                  {activeDrill.category}
                </span>
              </div>

              {/* Video Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between z-20">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePlayPause}
                    className="p-2 rounded-xs bg-red-600 hover:bg-red-700 text-white transition-colors cursor-pointer shadow-[0_0_10px_rgba(229,9,20,0.5)]"
                    aria-label={isPlaying ? 'Пауза' : 'Пушти видео'}
                    title={isPlaying ? 'Пауза' : 'Пушти видео'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                  </button>

                  <button
                    onClick={handleToggleMute}
                    className="p-2 rounded-xs bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-750 text-neutral-200 transition-colors cursor-pointer"
                    aria-label={isMuted ? 'Вклучи звук' : 'Исклучи звук'}
                    title={isMuted ? 'Вклучи звук' : 'Исклучи звук'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-green-400" />}
                  </button>

                  <span className="text-[11px] font-mono text-neutral-300 hidden sm:inline">
                    {isMuted ? 'Звук: Исклучен (кликни за вклучување)' : 'Звук: Активен'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.currentTime = 0;
                        videoRef.current.play();
                      }
                    }}
                    className="p-2 rounded-xs bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 transition-colors"
                    title="Од почеток"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleFullscreen}
                    className="p-2 rounded-xs bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 transition-colors"
                    title="Цел екран"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Drill Details and Upload Video Trigger */}
            <div className="p-5 sm:p-6 bg-neutral-950 border-t border-neutral-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-850">
                <div>
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
                    {activeDrill.title}
                  </h3>
                  <span className="text-xs font-mono text-red-400 font-semibold">
                    Ниво: {activeDrill.difficulty} · Времетраење: ~{activeDrill.duration} мин
                  </span>
                </div>

                {/* Direct File Picker to load user's actual phone/PC videos directly */}
                <div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="video/*"
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-2 bg-neutral-900 hover:bg-neutral-800 border border-red-700/70 hover:border-red-500 text-white text-xs font-bold font-mono uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Upload className="w-3.5 h-3.5 text-red-500" />
                    <span>{language === 'mk' ? 'Вчитај твое видео (.mp4)' : 'Upload your video (.mp4)'}</span>
                  </button>
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {activeDrill.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {activeDrill.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-xs bg-neutral-900 border border-neutral-800 text-neutral-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Drill Selector Sidebar (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="pb-1">
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                {language === 'mk' ? 'ИЗБЕРИ ТРЕНИНГ ВИДЕО:' : 'SELECT DRILL VIDEO:'}
              </span>
            </div>

            {VIDEO_DRILLS.map((drill, idx) => {
              const isSelected = activeDrill.id === drill.id && !customVideoUrl;

              return (
                <div
                  key={drill.id}
                  onClick={() => handleSelectDrill(drill)}
                  className={`p-4 rounded-xs border transition-all duration-200 cursor-pointer text-left relative ${
                    isSelected
                      ? 'bg-neutral-900 border-red-600 shadow-[0_0_15px_rgba(229,9,20,0.25)]'
                      : 'bg-neutral-950/70 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-red-500 font-bold uppercase tracking-wider">
                      ВИДЕО 0{idx + 1} · {drill.category}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">
                      {drill.difficulty}
                    </span>
                  </div>

                  <h4 className="mt-1 text-sm sm:text-base font-bold text-white font-cinzel">
                    {drill.title}
                  </h4>

                  <p className="mt-1 text-xs text-neutral-400 line-clamp-2">
                    {drill.description}
                  </p>

                  <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-2 border-t border-neutral-800/60">
                    <span className="flex items-center gap-1.5 text-neutral-300">
                      <Video className="w-3.5 h-3.5 text-red-500" />
                      <span>{language === 'mk' ? 'Автентично видео' : 'Authentic footage'}</span>
                    </span>
                    <span className={isSelected ? 'text-red-400 font-bold' : 'text-neutral-400'}>
                      {isSelected ? '● Сега се пушта' : 'Пушти →'}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="absolute top-0 right-0 w-2 h-full bg-red-600 rounded-r-xs"></div>
                  )}
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};
