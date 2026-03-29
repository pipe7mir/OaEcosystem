import { CalendarDays, MapPin, Clock } from 'lucide-react';

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
}

interface MapCalendarSectionProps {
  title?: string;
  subtitle?: string;
  mapTitle?: string;
  mapEmbedUrl: string;
  mapAddress: string;
  events: CalendarEvent[];
}

export default function MapCalendarSection({
  title = 'Encuentranos y Agenda',
  subtitle = 'Revisa nuestro calendario semanal y ubica la iglesia facilmente',
  mapTitle = 'Ubicacion de Ecosistema Oasis',
  mapEmbedUrl,
  mapAddress,
  events,
}: MapCalendarSectionProps) {
  return (
    <section id="calendar-map" className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FCA311]">Calendario y Mapa</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#14213D] md:text-4xl">{title}</h2>
        <p className="mt-3 text-base text-[#14213D]/70">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-[#14213D]/20 bg-white/50 p-6 shadow-[0_12px_22px_rgba(0,0,0,0.08)] backdrop-blur-sm">
          <div className="mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-[#FCA311]" />
            <h3 className="text-xl font-bold text-[#14213D]">{mapTitle}</h3>
          </div>
          <p className="mb-4 text-sm text-[#14213D]/75">{mapAddress}</p>
          <div className="overflow-hidden rounded-2xl border border-[#14213D]/15 bg-[#E5E5E5]/30">
            <iframe
              title={mapTitle}
              src={mapEmbedUrl}
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </article>

        <article className="rounded-3xl border border-[#14213D]/20 bg-white/50 p-6 shadow-[0_12px_22px_rgba(0,0,0,0.08)] backdrop-blur-sm">
          <div className="mb-5 flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-[#FCA311]" />
            <h3 className="text-xl font-bold text-[#14213D]">Calendario Proximo</h3>
          </div>

          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="rounded-2xl border border-[#14213D]/15 bg-[#E5E5E5]/20 p-4 transition hover:border-[#FCA311]"
              >
                <p className="text-base font-semibold text-[#14213D]">{event.title}</p>
                <div className="mt-2 space-y-1 text-sm text-[#14213D]/80">
                  <p className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-[#FCA311]" />
                    <span>{event.date}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#FCA311]" />
                    <span>{event.time}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#FCA311]" />
                    <span>{event.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
