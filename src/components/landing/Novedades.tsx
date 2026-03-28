const novedades = [
  {
    title: 'Noche De Alabanza',
    description: 'Un encuentro especial de adoracion y unidad para toda la familia Oasis.',
    fecha: 'Viernes, 12 de Abril',
  },
  {
    title: 'Grupos De Conexion',
    description: 'Espacios pequenos para compartir, aprender y caminar juntos en comunidad.',
    fecha: 'Martes, 16 de Abril',
  },
  {
    title: 'Jornada De Servicio',
    description: 'Salgamos a impactar nuestra ciudad con acciones practicas de amor.',
    fecha: 'Sabado, 20 de Abril',
  },
];

export default function Novedades() {
  return (
    <section id="novedades" className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      <div className="mb-10 flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FCA311]">
          Comunidad Viva
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-[#14213D] md:text-4xl">
          Novedades Del Oasis
        </h2>
        <p className="max-w-2xl text-sm text-[#14213D]/80 md:text-base">
          Descubre lo que viene y aparta tu lugar en cada actividad.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {novedades.map((item) => (
          <article
            key={item.title}
            className="group rounded-2xl border border-[#14213D]/20 bg-[#E5E5E5]/35 p-5 shadow-[0_12px_22px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FCA311]"
          >
            <div className="mb-4 flex h-36 w-full items-center justify-center rounded-xl border border-dashed border-[#14213D]/35 bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]">
              <span className="text-sm font-medium text-[#14213D]/65">Imagen / Icono</span>
            </div>

            <h3 className="text-xl font-bold tracking-tight text-[#14213D]">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#14213D]/80">{item.description}</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#FCA311]">
              {item.fecha}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}