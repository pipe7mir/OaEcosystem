'use client';

interface Stat {
  id: string;
  number: string;
  label: string;
  description?: string;
}

interface StatsSectionProps {
  stats: Stat[];
  title?: string;
  subtitle?: string;
}

export default function StatsSection({
  stats,
  title = 'Números que Hablan',
  subtitle = 'Impacto de Ecosistema Oasis en la comunidad',
}: StatsSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FCA311]">
          Estadísticas
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

      {/* Stats Grid */}
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="rounded-3xl border border-[#14213D]/20 bg-gradient-to-br from-white/60 to-[#E5E5E5]/20 p-8 text-center shadow-[0_12px_22px_rgba(0,0,0,0.08)] transition hover:shadow-[0_20px_32px_rgba(252,163,17,0.15)]"
          >
            {/* Número */}
            <div className="space-y-2">
              <p className="text-5xl font-extrabold text-[#FCA311]">
                {stat.number}
              </p>
              <p className="font-semibold text-[#14213D]">
                {stat.label}
              </p>
              {stat.description && (
                <p className="text-sm text-[#14213D]/70">
                  {stat.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
