import React, { useState } from 'react';
import { X, Copy, Check, Download, ExternalLink, Code2, Terminal } from 'lucide-react';
import { Language } from '../types';

interface GitHubExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const GitHubExportModal: React.FC<GitHubExportModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const standaloneHtmlTemplate = `<!DOCTYPE html>
<html lang="mk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Боева Система Шуманов | Combat Systema Shumanov</title>
  <meta name="description" content="Официјален веб сајт за Боева Система Шуманов - интегративен систем на боречка обука, природно движење и психофизички развој.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    /* Clean, semantic pure CSS with Responsive Grid */
    :root {
      --bg: #050505;
      --card-bg: #0d0d0e;
      --border: #222225;
      --red: #e50914;
      --red-glow: rgba(229, 9, 20, 0.4);
      --text: #f3f4f6;
      --text-muted: #9ca3af;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: 'Plus Jakarta Sans', sans-serif;
      line-height: 1.6;
    }
    header, nav, main, section, article, footer { display: block; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
    
    /* Navigation */
    header {
      position: sticky; top: 0; z-index: 100;
      background: rgba(5, 5, 5, 0.95);
      border-bottom: 1px solid var(--border);
      backdrop-filter: blur(10px);
      padding: 1rem 0;
    }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; }
    .brand { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; color: #fff; font-family: 'Cinzel', serif; font-size: 1.25rem; font-weight: 800; }
    .brand span { color: var(--red); }
    nav ul { display: flex; list-style: none; gap: 1.5rem; }
    nav a { color: var(--text-muted); text-decoration: none; font-size: 0.875rem; transition: color 0.2s; }
    nav a:hover { color: #fff; border-bottom: 2px solid var(--red); }
    
    /* Responsive Grid Layouts */
    .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; }
    .grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; }
    
    /* Hero */
    .hero { padding: 5rem 0 4rem; text-align: center; }
    .hero h1 { font-family: 'Cinzel', serif; font-size: 2.5rem; margin-bottom: 1rem; text-transform: uppercase; }
    .hero p.motto { color: var(--red); font-size: 1.25rem; font-weight: 600; margin-bottom: 1.5rem; }
    .btn { display: inline-block; background: var(--red); color: #fff; text-decoration: none; padding: 0.75rem 1.5rem; font-weight: 700; text-transform: uppercase; border-radius: 2px; margin: 0.25rem; box-shadow: 0 0 15px var(--red-glow); }
    .btn-outline { background: transparent; border: 1px solid var(--border); }
    
    /* Sections & Cards */
    section { padding: 4.5rem 0; border-top: 1px solid var(--border); }
    .section-title { font-family: 'Cinzel', serif; font-size: 2rem; text-align: center; margin-bottom: 2.5rem; text-transform: uppercase; }
    .card { background: var(--card-bg); border: 1px solid var(--border); padding: 1.75rem; border-radius: 2px; transition: border-color 0.2s; }
    .card:hover { border-color: var(--red); }
    .card h3 { font-family: 'Cinzel', serif; font-size: 1.25rem; margin-bottom: 0.5rem; color: #fff; }
    .highlight { color: var(--red); font-weight: bold; }
    
    /* Footer */
    footer { padding: 3rem 0; background: #000; border-top: 1px solid var(--border); text-align: center; font-size: 0.875rem; color: var(--text-muted); }
  </style>
</head>
<body>
  <header>
    <div class="container nav-inner">
      <a href="#" class="brand">БОЕВА СИСТЕМА <span>ШУМАНОВ</span></a>
      <nav>
        <ul>
          <li><a href="#philosophy">Филозофија</a></li>
          <li><a href="#methods">Методи</a></li>
          <li><a href="#contact">Контакт</a></li>
        </ul>
      </nav>
      <a href="tel:070342580" class="btn" style="padding: 0.5rem 1rem; font-size: 0.75rem;">070 342 580</a>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container">
        <div style="color: var(--red); font-size: 0.875rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; margin-bottom: 0.5rem;">COMBAT SYSTEM</div>
        <h1>ШУМАНОВ</h1>
        <div style="width: 240px; height: 3px; background: var(--red); margin: 0 auto 1.5rem;"></div>
        <p class="motto">Тренирај го телото. Разбери го умот. Запознај се себеси.</p>
        <p style="max-width: 650px; margin: 0 auto 2rem; color: var(--text-muted);">
          Combat Systema Shumanov е интегративен систем на боречка обука и физички развој: природно движење, функционална сила, мобилност, жив контакт, дишење и присебност.
        </p>
        <a href="#philosophy" class="btn">Запознај се со Системата</a>
        <a href="#contact" class="btn btn-outline">Закажи Тренинг</a>
      </div>
    </section>

    <section id="showcase">
      <div class="container" style="text-align: center;">
        <h2 class="section-title">Автентични Тренинзи во Живо</h2>
        <div style="max-width: 800px; margin: 0 auto 2rem; border: 1px solid var(--border); border-radius: 4px; overflow: hidden; box-shadow: 0 0 25px var(--red-glow); background: #000;">
          <video controls autoplay loop muted playsinline poster="logo.jpg" style="width: 100%; display: block;">
            <source src="videos/video1_lastici.mp4" type="video/mp4">
            <source src="videos/video1_lastici.webm" type="video/webm">
            Вашиот прелистувач не поддржува видео таг.
          </video>
        </div>
        <p style="color: var(--text-muted); font-size: 0.875rem;">
          Специјално борбено кондиционирање со еластични ленти, спаринг на мост и вежби на песок.
        </p>
      </div>
    </section>

    <section id="philosophy">
      <div class="container">
        <h2 class="section-title">Филозофија & Принципи</h2>
        <div class="grid-2">
          <article class="card">
            <h3>01. Човекот како Целина</h3>
            <p>Физичкото, менталното и емоционалното се поврзани. Тренингот открива навики, реакции и ограничувања.</p>
          </article>
          <article class="card">
            <h3>02. Контрола под Притисок</h3>
            <p>Кога ситуацијата е непредвидлива, учиме да ја вежбаме присебноста и способноста за адаптација.</p>
          </article>
          <article class="card">
            <h3>03. Дишење и Смиреност</h3>
            <p>Смиреноста не е пасивност. Дишењето помага да ја зачуваме способноста за одлучување под замор.</p>
          </article>
          <article class="card">
            <h3>04. Животот е за Живеење</h3>
            <p>Подготвени за борбата кога е неопходно, но и доволно слободни за да уживаме во животот.</p>
          </article>
        </div>
      </div>
    </section>


    <section id="contact">
      <div class="container" style="text-align: center;">
        <h2 class="section-title">Контакт & Инструктор</h2>
        <p style="font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;">Александар Шуманов</p>
        <p style="margin-bottom: 1.5rem;"><a href="tel:070342580" style="color: var(--red); font-weight: bold; text-decoration: none; font-size: 1.5rem;">070 342 580</a></p>
        <p style="color: var(--text-muted);">Е-маил: <a href="mailto:aleksandar.sumanov2@gmail.com" style="color: #fff;">aleksandar.sumanov2@gmail.com</a></p>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <p>&copy; 2026 Боева Система Шуманов (Combat Systema Shumanov). Сите права се задржани.</p>
      <p style="margin-top: 0.5rem; font-size: 0.75rem;">Компатибилно со GitHub Pages (github.io).</p>
    </div>
  </footer>
</body>
</html>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(standaloneHtmlTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneHtmlTemplate], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-neutral-950 border border-neutral-850 w-full max-w-3xl rounded-xs overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/60">
          <div className="flex items-center gap-2.5">
            <Code2 className="w-5 h-5 text-red-500" />
            <div>
              <h3 className="font-cinzel text-lg font-bold text-white uppercase">
                {language === 'mk' ? 'GitHub Pages (github.io) Експорт' : 'GitHub Pages (github.io) Export'}
              </h3>
              <p className="text-xs text-neutral-400">
                {language === 'mk'
                  ? 'Чист HTML5, CSS3 Responsive Grid и семантички тагови подготвени за вашиот репозиториум.'
                  : 'Pure HTML5, CSS3 Responsive Grid and semantic tags ready for your repository.'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-xs focus:outline-none"
            aria-label="Затвори"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Instructions */}
        <div className="p-5 border-b border-neutral-800/80 bg-neutral-950 text-xs text-neutral-300 space-y-2">
          <div className="flex items-center gap-2 text-red-400 font-mono font-bold uppercase">
            <Terminal className="w-4 h-4" />
            <span>{language === 'mk' ? 'Како да го поставите на github.io во 2 минути:' : 'How to deploy to github.io in 2 minutes:'}</span>
          </div>
          <ol className="list-decimal list-inside space-y-1 text-neutral-400 pl-1">
            <li>Креирајте ново репозиториум на GitHub наречено <code className="text-red-400 font-mono">вашеиме.github.io</code></li>
            <li>Преземете го или копирајте го кодот подолу и зачувајте го како <code className="text-white font-mono">index.html</code></li>
            <li>Направете Commit & Push во GitHub — страницата е веднаш жива на интернет!</li>
          </ol>
        </div>

        {/* Code Preview Box */}
        <div className="p-4 overflow-auto flex-1 bg-black font-mono text-xs text-neutral-300">
          <pre className="whitespace-pre-wrap">{standaloneHtmlTemplate}</pre>
        </div>

        {/* Modal Actions */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-900/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-mono text-neutral-400">
            {language === 'mk' ? 'Големина: ~8 KB (Самостоен датотека)' : 'Size: ~8 KB (Self-contained)'}
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleCopy}
              className="flex-1 sm:flex-none px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-1.5 border border-neutral-700 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (language === 'mk' ? 'Копирано!' : 'Copied!') : (language === 'mk' ? 'Копирај Код' : 'Copy Code')}</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-none px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(229,9,20,0.4)] cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === 'mk' ? 'Преземи index.html' : 'Download index.html'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
