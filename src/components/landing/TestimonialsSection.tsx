'use client';

import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  image?: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export default function TestimonialsSection({
  testimonials,
  title = 'Lo Que Dicen Nuestros Hermanos',
  subtitle = 'Testimonios de fe y transformación',
}: TestimonialsSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FCA311]">
          Testimonios
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

      {/* Testimonials Grid */}
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="rounded-3xl border border-[#14213D]/20 bg-white/50 p-8 shadow-[0_12px_22px_rgba(0,0,0,0.08)] transition hover:shadow-[0_20px_32px_rgba(252,163,17,0.15)]"
          >
            {/* Rating */}
            {testimonial.rating && (
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-lg text-[#FCA311]">
                    ★
                  </span>
                ))}
              </div>
            )}

            {/* Texto */}
            <p className="text-base italic text-[#14213D]/80">
              &quot;{testimonial.text}&quot;
            </p>

            {/* Autor */}
            <div className="mt-6 flex items-center gap-4 border-t border-[#14213D]/10 pt-6">
              {testimonial.image && (
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
              )}
              <div>
                <p className="font-semibold text-[#14213D]">
                  {testimonial.name}
                </p>
                <p className="text-sm text-[#14213D]/70">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
