import Link from 'next/link';
import { ReactNode } from 'react';

interface QuickLink {
  id: string;
  label: string;
  href: string;
  icon?: ReactNode;
  badge?: string;
}

interface QuickLinksBarProps {
  links: QuickLink[];
  title?: string;
  variant?: 'default' | 'minimal';
}

export default function QuickLinksBar({
  links,
  title = 'Acceso Rápido',
  variant = 'default',
}: QuickLinksBarProps) {
  if (variant === 'minimal') {
    return (
      <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:px-10 lg:px-16">
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="group inline-flex items-center gap-2 rounded-full border border-[#14213D]/20 bg-white/50 px-4 py-2 text-sm font-medium text-[#14213D] transition hover:bg-[#FCA311]/10 hover:border-[#FCA311]"
            >
              {link.icon && <span className="text-[#FCA311]">{link.icon}</span>}
              {link.label}
              {link.badge && (
                <span className="ml-1 rounded-full bg-[#FCA311] px-2 py-0.5 text-xs font-bold text-[#14213D]">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
      <div className="rounded-3xl border border-[#14213D]/20 bg-gradient-to-r from-[#14213D]/5 to-[#FCA311]/5 p-8 shadow-[0_12px_22px_rgba(0,0,0,0.08)]">
        {/* Title */}
        {title && (
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#FCA311]">
            {title}
          </p>
        )}

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="group relative rounded-2xl border border-[#14213D]/20 bg-white/50 p-5 transition hover:border-[#FCA311] hover:shadow-[0_12px_22px_rgba(252,163,17,0.2)]"
            >
              {/* Icon */}
              {link.icon && (
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#FCA311]/10 text-[#FCA311] group-hover:bg-[#FCA311]/20 transition">
                  {link.icon}
                </div>
              )}

              {/* Label */}
              <h3 className="text-sm font-semibold text-[#14213D] group-hover:text-[#FCA311] transition line-clamp-2">
                {link.label}
              </h3>

              {/* Badge */}
              {link.badge && (
                <span className="absolute top-2 right-2 rounded-full bg-[#FCA311] px-2 py-0.5 text-xs font-bold text-[#14213D]">
                  {link.badge}
                </span>
              )}

              {/* Arrow */}
              <div className="mt-3 inline-block text-[#FCA311] opacity-0 group-hover:opacity-100 transition">
                <svg
                  className="h-4 w-4 transform transition group-hover:translate-x-1"
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
      </div>
    </section>
  );
}
