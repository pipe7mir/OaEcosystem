export default function Recursos() {
  return (
    <section id="recursos" className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-[#14213D]/20 bg-[#E5E5E5]/35 p-6 shadow-[0_12px_22px_rgba(0,0,0,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FCA311]">Recursos</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#14213D]">
            Predicas y Estudios
          </h2>
          <p className="mt-3 text-sm text-[#14213D]/80">
            Accede a contenido para crecer en tu fe durante la semana: mensajes,
            devocionales y material para grupos.
          </p>
          <a
            href="#"
            className="mt-5 inline-flex rounded-lg border border-[#FCA311] bg-[#FCA311] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#14213D] shadow-[0_8px_18px_rgba(0,0,0,0.2)] transition hover:brightness-95"
          >
            Ver Biblioteca
          </a>
        </article>

        <article id="agenda" className="rounded-2xl border border-[#14213D]/20 bg-[#E5E5E5]/35 p-6 shadow-[0_12px_22px_rgba(0,0,0,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FCA311]">Agenda</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#14213D]">Semana Oasis</h2>
          <ul className="mt-4 grid gap-2 text-sm text-[#14213D]">
            <li className="rounded-lg border border-[#14213D]/20 bg-white px-3 py-2 shadow-[0_6px_12px_rgba(0,0,0,0.08)]">Domingo | Celebracion 10:00 AM</li>
            <li className="rounded-lg border border-[#14213D]/20 bg-white px-3 py-2 shadow-[0_6px_12px_rgba(0,0,0,0.08)]">Martes | Grupos de Conexion 7:00 PM</li>
            <li className="rounded-lg border border-[#14213D]/20 bg-white px-3 py-2 shadow-[0_6px_12px_rgba(0,0,0,0.08)]">Jueves | Noche de Oracion 7:30 PM</li>
          </ul>
        </article>
      </div>

      <article id="contacto" className="mt-6 rounded-2xl border border-[#14213D]/20 bg-[#E5E5E5]/35 p-6 shadow-[0_12px_22px_rgba(0,0,0,0.12)]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FCA311]">Contacto</p>
        <h3 className="mt-2 text-2xl font-bold text-[#14213D]">Estamos Para Servirte</h3>
        <p className="mt-2 text-sm text-[#14213D]/80">
          Email: hola@ecosistemaoasis.co | WhatsApp: +57 300 000 0000 | Ciudad: Colombia
        </p>
      </article>
    </section>
  );
}
