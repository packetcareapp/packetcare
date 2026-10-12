import React, { useState } from 'react';
import { FAQS } from '../data/config';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-care-950/80 text-care-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-care-800">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Everything you need to know about PacketCare, offline recording, SMS reminders, and deployment.
          </p>
        </div>

        {/* FAQ Accordion List in Dark Theme */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-navy-800 border-care-500/50 shadow-xl shadow-black/40'
                    : 'bg-navy-850 hover:bg-navy-800/80 border-slate-800 shadow-md'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-care-500 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? 'bg-care-600 text-white rotate-180'
                        : 'bg-navy-900 border border-slate-800 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
