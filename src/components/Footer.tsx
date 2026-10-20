import React from 'react';
import { CONTACT_INFO } from '../data/content';
import { Language } from '../types';
import { Phone, Mail, MapPin, Download, Code2 } from 'lucide-react';

interface FooterProps {
  language: Language;
  onOpenExportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onOpenExportModal }) => {
  const currentYear = new Date().getFullYear();

  const brandMain = language === 'mk' ? 'ШУМАНОВ' : 'SHUMANOV';
  const brandSub = language === 'mk' ? 'БОЕВА СИСТЕМА' : 'COMBAT SYSTEM';

  return (
    <footer id="contact" className="bg-black border-t-2 border-neutral-900 text-neutral-400 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-neutral-850">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-red-600 rounded-xs shadow-[0_0_8px_rgba(229,9,20,0.8)]"></div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-red-500 font-bold uppercase block">
                  {brandSub}
                </span>
                <span className="font-cinzel text-lg font-bold text-white uppercase tracking-wider">
                  {brandMain}
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              {language === 'mk'
                ? 'Интегративен систем на боречка обука, природно движење, дишење, самоспознавање и психофизичка подготвеност во Скопје.'
                : 'Integrative system of combat education, natural movement, breath regulation, self-knowledge, and composure in Skopje.'}
            </p>

            <div className="text-xs font-mono text-red-400 font-semibold">
              „Подготвен за предизвиците — слободен за животот.“
            </div>
          </div>

          {/* Quick Nav Links (Removed Schedule & Locations) */}
          <div>
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-600 pl-2">
              {language === 'mk' ? 'Брза Навигација' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-red-400 transition-colors">
                  {language === 'mk' ? 'Почетна' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-red-400 transition-colors">
                  {language === 'mk' ? 'Филозофија & Принципи' : 'Philosophy & Tenets'}
                </a>
              </li>
              <li>
                <a href="#methods" className="hover:text-red-400 transition-colors">
                  {language === 'mk' ? 'Методологија на Тренинг' : 'Training Methods'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-red-400 transition-colors">
                  {language === 'mk' ? 'Често Поставувани Прашања' : 'FAQ'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-400 transition-colors text-red-400 font-semibold">
                  {language === 'mk' ? 'Контакт' : 'Contact'}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div>
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-600 pl-2">
              {language === 'mk' ? 'Контакт со Инструкторот' : 'Direct Contacts'}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-white hover:text-red-400 font-mono font-bold transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-neutral-300 hover:text-red-400 font-mono break-all transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-neutral-300">
                  {CONTACT_INFO.city}
                </span>
              </li>
              <li className="pt-2 text-[11px] font-mono text-neutral-400">
                Главен Инструктор: <strong className="text-white">{CONTACT_INFO.coachName}</strong>
              </li>
            </ul>
          </div>

          {/* GitHub.io Clean Export */}
          <div className="bg-neutral-950 p-4 rounded-xs border border-neutral-850">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-500 uppercase mb-2">
              <Code2 className="w-4 h-4" />
              <span>GitHub Pages (github.io)</span>
            </div>
            <p className="text-[11px] text-neutral-400 leading-relaxed mb-3">
              {language === 'mk'
                ? 'Дизајнот е компатибилен за хостирање на GitHub Pages со чист HTML5, CSS Responsive Grid и Vanilla JS.'
                : 'Built with clean semantic HTML5, Responsive CSS Grid, and zero external dependencies for GitHub Pages.'}
            </p>
            <button
              onClick={onOpenExportModal}
              className="w-full py-2 px-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-red-600 text-white text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3 h-3 text-red-500" />
              <span>{language === 'mk' ? 'Преземи за github.io' : 'Export for github.io'}</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            &copy; {currentYear} Боева Система Шуманов (Combat Systema Shumanov).
          </div>

          <div className="flex items-center gap-4">
            <span className="text-neutral-400">
              {language === 'mk' ? 'Скопје, Македонија' : 'Skopje, Macedonia'}
            </span>
            <span className="text-red-600 font-bold">●</span>
            <span className="text-neutral-400">
              Clean Semantic HTML & CSS Grid
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
