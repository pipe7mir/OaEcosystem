import Link from 'next/link';
import { ReactNode } from 'react';

interface GridItem {
  id: string;
  href: string;
  title: string;
  description: string;
  icon?: ReactNode;
  badge?: string;
}

interface SectionGridProps {
  label: string;
  title: string;
  subtitle?: string;
  items: GridItem[];
  columns?: 2 | 3 | 4;
}

export default function SectionGrid({
  label,
  title,
  subtitle,
  items,
  columns = 3,
}: SectionGridProps) {
  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      {/* Label y Título */}
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FCA311]">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#14213D] md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base text-[#14213D]/70">
          {subtitle}
        </p>
      )}

      {/* Grid */}
      <div className={`mt-8 grid grid-cols-1 gap-5 ${gridClass[columns]}`}>
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group relative rounded-3xl border border-[#14213D]/20 bg-white/50 p-6 shadow-[0_12px_22px_rgba(0,0,0,0.08)] transition hover:border-[#FCA311] hover:shadow-[0_20px_32px_rgba(252,163,17,0.15)]"
          >
            {/* Badge opcional */}
            {item.badge && (
              <span className="absolute right-4 top-4 rounded-full bg-[#FCA311]/10 px-3 py-1 text-xs font-semibold text-[#FCA311]">
                {item.badge}
              </span>
            )}

            {/* Ícono opcional */}
            {item.icon && (
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FCA311]/10 text-[#FCA311]">
                {item.icon}
              </div>
            )}

            {/* Contenido */}
            <h3 className="text-xl font-bold text-[#14213D] transition group-hover:text-[#FCA311]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-[#14213D]/80">
              {item.description}
            </p>

            {/* Arrow hover */}
            <div className="mt-4 inline-block text-[#FCA311] opacity-0 transition group-hover:opacity-100">
              <svg
                className="h-5 w-5 transform transition group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
