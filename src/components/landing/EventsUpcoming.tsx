import Link from 'next/link';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  href?: string;
}

interface EventsUpcomingProps {
  events: Event[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3;
  showAll?: boolean;
}

export default function EventsUpcoming({
  events,
  title = 'Próximos Eventos',
  subtitle = 'Agenda de actividades y encuentros',
  columns = 3,
  showAll = true,
}: EventsUpcomingProps) {
  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
  };

  const displayedEvents = showAll ? events : events.slice(0, 3);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      {/* Header */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FCA311]">
          Calendario
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

      {/* Events Grid */}
      <div className={`mt-12 grid grid-cols-1 gap-6 ${gridClass[columns]}`}>
        {displayedEvents.map((event) => (
          <div
            key={event.id}
            className="rounded-2xl border border-[#14213D]/20 bg-white/50 p-6 shadow-[0_12px_22px_rgba(0,0,0,0.08)] transition hover:shadow-[0_20px_32px_rgba(252,163,17,0.15)] flex flex-col"
          >
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block rounded-full bg-[#FCA311]/10 px-3 py-1 text-xs font-semibold text-[#FCA311]">
                {event.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#14213D] mb-4">
              {event.title}
            </h3>

            {/* Description */}
            <p className="text-base text-[#14213D]/80 mb-6 flex-1">
              {event.description}
            </p>

            {/* Meta Information */}
            <div className="space-y-3 border-t border-[#14213D]/10 pt-6">
              {/* Date */}
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-[#FCA311] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[#14213D]">{event.date}</p>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#FCA311] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[#14213D]">{event.time}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#FCA311] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-[#14213D]">{event.location}</p>
                </div>
              </div>
            </div>

            {/* CTA Link */}
            {event.href && (
              <Link
                href={event.href}
                className="mt-6 inline-block rounded-full bg-[#FCA311] px-6 py-2 font-semibold text-[#14213D] text-center transition hover:shadow-[0_20px_32px_rgba(252,163,17,0.4)] hover:scale-105"
              >
                Más información
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
