import React, { useState } from 'react';
import { CONTACT_INFO, CONTENT_MK, CONTENT_LATIN } from '../data/content';
import { Language } from '../types';
import { Phone, Mail, MapPin, Send, CheckCircle2, Shield, MessageSquare } from 'lucide-react';

interface InteractiveBookingProps {
  language: Language;
}

export const InteractiveBooking: React.FC<InteractiveBookingProps> = ({ language }) => {
  const t = language === 'mk' ? CONTENT_MK : CONTENT_LATIN;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    trainingType: 'Боева обука и кондиционирање',
    experienceLevel: 'beginner',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      trainingType: 'Боева обука и кондиционирање',
      experienceLevel: 'beginner',
      message: ''
    });
  };

  return (
    <section
      id="contact"
      aria-label="Контакт и Пријавување"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative border-t border-neutral-900"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-red-500 uppercase font-bold">
            <span className="w-8 h-px bg-red-600"></span>
            <span>{language === 'mk' ? 'ПРИЈАВУВАЊЕ & КОНТАКТ' : 'ENROLLMENT & CONTACT'}</span>
            <span className="w-8 h-px bg-red-600"></span>
          </div>

          <h2 className="mt-3 font-cinzel text-2xl sm:text-4xl font-extrabold text-white tracking-wide uppercase">
            {t.contactHeading}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            {t.contactSubheading}
          </p>
        </header>

        {/* 2-Column Responsive Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 bg-neutral-950 border border-neutral-850 p-6 sm:p-8 rounded-xs relative">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-red-600"></div>

            <h3 className="font-cinzel text-xl font-bold text-white uppercase">
              {language === 'mk' ? 'Директен Контакт' : 'Direct Contact'}
            </h3>

            <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
              {language === 'mk'
                ? 'Започнете со обука. За какви било прашања околу методологијата, индивидуални или групни тренинзи, обратете се директно кај инструкторот.'
                : 'Begin your training. For any inquiries regarding methodology or private coaching, reach out directly to the instructor.'}
            </p>

            <div className="mt-6 space-y-4">
              
              {/* Phone */}
              <div className="p-4 bg-neutral-900/70 border border-neutral-800 rounded-xs group hover:border-red-600 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xs bg-red-950/80 border border-red-600 flex items-center justify-center text-red-500 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-red-500 font-bold block">
                      {language === 'mk' ? 'Телефон / Viber' : 'Phone / Viber'}
                    </span>
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-lg font-bold font-mono text-white hover:text-red-400 transition-colors block"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 bg-neutral-900/70 border border-neutral-800 rounded-xs group hover:border-red-600 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xs bg-red-950/80 border border-red-600 flex items-center justify-center text-red-500 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-red-500 font-bold block">
                      {language === 'mk' ? 'Електронска пошта' : 'Email Address'}
                    </span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-sm font-semibold font-mono text-white hover:text-red-400 break-all transition-colors block"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 bg-neutral-900/70 border border-neutral-800 rounded-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xs bg-red-950/80 border border-red-600 flex items-center justify-center text-red-500 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-red-500 font-bold block">
                      {language === 'mk' ? 'Град & База' : 'Base Location'}
                    </span>
                    <div className="text-sm font-semibold text-white">
                      {CONTACT_INFO.city}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Coach badge */}
            <div className="mt-6 p-4 bg-black border border-neutral-800 rounded-xs flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(229,9,20,0.9)]"></div>
              <div className="text-xs text-neutral-300">
                Инструктор: <strong className="text-white font-bold">{CONTACT_INFO.coachName}</strong>
              </div>
            </div>

          </div>

          {/* Right Column: Enrollment Form */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-850 p-6 sm:p-8 rounded-xs relative">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-red-600"></div>

            {isSubmitted ? (
              <div className="py-8 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-red-950/70 border-2 border-red-600 flex items-center justify-center mx-auto text-red-500 mb-4 shadow-[0_0_20px_rgba(229,9,20,0.5)]">
                  <CheckCircle2 className="w-8 h-8 text-red-400" />
                </div>

                <h3 className="font-cinzel text-2xl font-bold text-white uppercase">
                  {language === 'mk' ? 'Успешно Испратено Барање!' : 'Request Sent Successfully!'}
                </h3>

                <p className="mt-2 text-sm text-neutral-300 max-w-md mx-auto">
                  {language === 'mk'
                    ? `Благодариме, ${formData.name}. Вашата порака е примена. Александар Шуманов ќе ве контактира на ${formData.phone}.`
                    : `Thank you, ${formData.name}. Coach Aleksandar will contact you shortly at ${formData.phone}.`}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                    className="w-full sm:w-auto px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{language === 'mk' ? 'Јави се директно' : 'Call Directly'}</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-wider rounded-xs border border-neutral-700"
                  >
                    {language === 'mk' ? 'Испрати ново барање' : 'Submit Another'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <h3 className="font-cinzel text-xl font-bold text-white uppercase">
                    {language === 'mk' ? 'Формулар за Контакт' : 'Enrollment Form'}
                  </h3>
                  <span className="text-[11px] font-mono text-red-500 font-bold uppercase">
                    ★ {language === 'mk' ? 'Бесплатен Прв Тренинг' : 'Free Trial'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1 uppercase font-semibold">
                      {language === 'mk' ? 'Име и Презиме *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === 'mk' ? 'пр. Марко Петровски' : 'e.g. John Doe'}
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-red-600 rounded-xs px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1 uppercase font-semibold">
                      {language === 'mk' ? 'Телефонски број *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="07X XXX XXX"
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-red-600 rounded-xs px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1 uppercase font-semibold">
                      {language === 'mk' ? 'Е-маил адреса' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-red-600 rounded-xs px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1 uppercase font-semibold">
                      {language === 'mk' ? 'Интерес за Тренинг' : 'Training Focus'}
                    </label>
                    <select
                      value={formData.trainingType}
                      onChange={(e) => setFormData({ ...formData, trainingType: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-red-600 rounded-xs px-3.5 py-2.5 text-sm text-white outline-none cursor-pointer"
                    >
                      <option value="Боева обука и кондиционирање">
                        {language === 'mk' ? 'Боева обука & кондиционирање' : 'Combat Training & Conditioning'}
                      </option>
                      <option value="Природно движење и биомеханика">
                        {language === 'mk' ? 'Природно движење & биомеханика' : 'Natural Movement & Biomechanics'}
                      </option>
                      <option value="Индивидуален тренинг 1-на-1">
                        {language === 'mk' ? 'Индивидуален 1-на-1 тренинг' : 'Private 1-on-1 Sessions'}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1 uppercase font-semibold">
                    {language === 'mk' ? 'Претходно искуство во боречки вештини / спорт' : 'Prior martial arts / athletic experience'}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'beginner', label: language === 'mk' ? 'Почетник' : 'Beginner' },
                      { id: 'intermediate', label: language === 'mk' ? 'Рекреативец' : 'Intermediate' },
                      { id: 'advanced', label: language === 'mk' ? 'Искусен' : 'Experienced' }
                    ].map((lvl) => (
                      <button
                        type="button"
                        key={lvl.id}
                        onClick={() => setFormData({ ...formData, experienceLevel: lvl.id })}
                        className={`py-2 px-3 text-xs font-semibold rounded-xs border transition-colors cursor-pointer ${
                          formData.experienceLevel === lvl.id
                            ? 'bg-neutral-800 border-red-600 text-white shadow-sm'
                            : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                      >
                        {lvl.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1 uppercase font-semibold">
                    {language === 'mk' ? 'Порака или прашање (опционално)' : 'Message (optional)'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={language === 'mk' ? 'Напишете прашање или посакувано време за тренинг...' : 'Leave a question or preferred training timing...'}
                    className="w-full bg-neutral-900 border border-neutral-800 focus:border-red-600 rounded-xs px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xs transition-all shadow-[0_0_20px_rgba(229,9,20,0.5)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {submitting 
                      ? (language === 'mk' ? 'Се испраќа...' : 'Sending...') 
                      : (language === 'mk' ? 'Испрати Пријава' : 'Submit Consultation Request')}
                  </span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
