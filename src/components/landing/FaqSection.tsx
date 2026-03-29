'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
}

export default function FaqSection({
  items,
  title = 'Preguntas Frecuentes',
  subtitle = 'Encuentra respuestas a tus dudas',
}: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FCA311]">
          Dudas
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#14213D] md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-base text-[#14213D]/70">
            {subtitle}
          </p>
        )}
      </div>

      {/* FAQ Accordion */}
      <div className="mt-12 space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-[#14213D]/20 bg-white/50 shadow-[0_12px_22px_rgba(0,0,0,0.08)] transition hover:shadow-[0_20px_32px_rgba(252,163,17,0.15)]"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between px-6 py-4 text-left transition hover:bg-[#E5E5E5]/20"
            >
              <h3 className="text-lg font-semibold text-[#14213D] pr-4">
                {item.question}
              </h3>
              <ChevronDown
                className={`h-6 w-6 flex-shrink-0 text-[#FCA311] transition-transform ${
                  openId === item.id ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Answer - Accordion Content */}
            {openId === item.id && (
              <div className="border-t border-[#14213D]/10 px-6 py-4">
                <p className="text-base text-[#14213D]/80 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
