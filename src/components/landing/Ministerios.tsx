const ministerios = [
  {
    name: 'Ninos y Familia',
    desc: 'Programas por edades para formar a la nueva generacion con alegria y verdad.',
  },
  {
    name: 'Juventud Oasis',
    desc: 'Reuniones dinamicas para adolescentes y jovenes con fe, amistad y proposito.',
  },
  {
    name: 'Grupos de Conexion',
    desc: 'Encuentros en casas para aprender la Palabra y fortalecer la comunion.',
  },
  {
    name: 'Mujeres y Hombres',
    desc: 'Espacios de crecimiento integral, mentoria y acompanamiento espiritual.',
  },
];

export default function Ministerios() {
  return (
    <section id="ministerios" className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FCA311]">Conecta</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#14213D] md:text-4xl">
          Ministerios Para Cada Etapa De Vida
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {ministerios.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-[#14213D]/20 bg-[#E5E5E5]/35 p-5 shadow-[0_12px_22px_rgba(0,0,0,0.12)] transition hover:border-[#FCA311]"
          >
            <h3 className="text-xl font-bold text-[#14213D]">{item.name}</h3>
            <p className="mt-2 text-sm text-[#14213D]/80">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
