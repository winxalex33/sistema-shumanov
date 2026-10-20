import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../data/content';
import { Phone, Menu, X, Globe } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onToggleLanguage
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = language === 'mk' ? [
    { href: '#philosophy', label: 'Филозофија' },
    { href: '#methods', label: 'Методи на Тренинг' },
    { href: '#faq', label: 'ЧПП' },
    { href: '#contact', label: 'Контакт' }
  ] : [
    { href: '#philosophy', label: 'Philosophy' },
    { href: '#methods', label: 'Methods' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' }
  ];

  const brandMain = language === 'mk' ? 'ШУМАНОВ' : 'SHUMANOV';
  const brandSub = language === 'mk' ? 'БОЕВА СИСТЕМА' : 'COMBAT SYSTEM';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-neutral-900 shadow-2xl py-3'
          : 'bg-gradient-to-b from-black via-black/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Pure Typographic Brand Identity (No generated images/SVGs) */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-red-500 rounded-xs"
            aria-label="Боева Система Шуманов"
          >
            <div className="w-1.5 h-7 bg-red-600 rounded-xs shadow-[0_0_10px_rgba(229,9,20,0.8)]"></div>
            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.28em] text-neutral-400 font-medium uppercase group-hover:text-red-400 transition-colors">
                {brandSub}
              </span>
              <span className="font-cinzel text-xl sm:text-2xl font-black tracking-wider text-white group-hover:text-red-50 transition-colors flex items-center gap-1.5">
                {brandMain}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_6px_rgba(229,9,20,0.9)]"></span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Главна навигација">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus-visible:ring-1 focus-visible:ring-red-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Phone hotline */}
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white transition-colors group px-2 py-1.5 rounded-xs"
              title="Директен контакт со Александар Шуманов"
            >
              <span className="w-7 h-7 rounded-xs bg-red-950/60 border border-red-700/60 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all shadow-[0_0_8px_rgba(229,9,20,0.3)]">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <span className="text-red-500 group-hover:text-red-400 font-mono tracking-wide font-bold">
                {CONTACT_INFO.phone}
              </span>
            </a>

            {/* Language Switcher */}
            <button
              onClick={onToggleLanguage}
              className="px-2.5 py-1.5 text-xs font-mono font-medium text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700 rounded-xs transition-colors flex items-center gap-1.5 bg-neutral-900/60 cursor-pointer"
              title="Префрли Кирилица / Latin"
            >
              <Globe className="w-3.5 h-3.5 text-neutral-500" />
              <span className="font-semibold">{language === 'mk' ? 'КИР' : 'LAT'}</span>
            </button>

          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onToggleLanguage}
              className="px-2 py-1 text-xs font-mono font-medium text-neutral-300 border border-neutral-800 rounded-xs bg-neutral-900"
            >
              {language === 'mk' ? 'КИР' : 'LAT'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded-xs focus:outline-none"
              aria-label={mobileMenuOpen ? 'Затвори мени' : 'Отвори мени'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-black/98 border-b border-red-900/40 px-4 pt-4 pb-6 mt-2 space-y-3 backdrop-blur-xl">
          <nav className="flex flex-col space-y-3" aria-label="Мобилна навигација">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-300 hover:text-red-400 py-1.5 border-b border-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-3 flex flex-col gap-3">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-red-400 border border-red-900/40 rounded-xs bg-red-950/20"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>{CONTACT_INFO.phone} (Шуманов)</span>
            </a>

          </div>
        </div>
      )}
    </header>
  );
};
