const pilares = [
  {
    title: 'Fe Cristocentrica',
    text: 'Caminamos con Jesus como centro de nuestra vida, decisiones y comunidad.',
  },
  {
    title: 'Comunidad Autentica',
    text: 'Construimos relaciones reales donde cada persona es valorada y acompanada.',
  },
  {
    title: 'Servicio Con Proposito',
    text: 'Servimos a la ciudad con amor practico, esperanza y excelencia.',
  },
];

const equipo = [
  'Pastor Principal',
  'Pastora de Cuidado',
  'Lider de Jovenes',
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FCA311]">Iglesia</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#14213D] md:text-5xl">
            Una Casa Espiritual Para Toda La Familia
          </h2>
          <p className="mt-5 max-w-2xl text-[#14213D]/85">
            En Ecosistema Oasis creemos en una iglesia cercana, biblica y contemporanea,
            donde puedes crecer en tu relacion con Dios y encontrar comunidad.
          </p>

          <div id="vision" className="mt-8 rounded-2xl border border-[#14213D]/20 bg-[#E5E5E5]/35 p-5 shadow-[0_12px_22px_rgba(0,0,0,0.12)]">
            <h3 className="text-lg font-bold text-[#14213D]">Vision y Valores</h3>
            <p className="mt-2 text-sm text-[#14213D]/80">
              Formar discipulos de Jesus que transformen su entorno por medio de fe,
              integridad, compasion y servicio.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {pilares.map((pilar) => (
            <article key={pilar.title} className="rounded-2xl border border-[#14213D]/20 bg-[#E5E5E5]/35 p-5 shadow-[0_12px_22px_rgba(0,0,0,0.12)]">
              <h3 className="text-lg font-bold text-[#14213D]">{pilar.title}</h3>
              <p className="mt-2 text-sm text-[#14213D]/80">{pilar.text}</p>
            </article>
          ))}

          <article id="equipo" className="rounded-2xl border border-[#FCA311] bg-[#FCA311]/18 p-5 shadow-[0_12px_22px_rgba(0,0,0,0.14)]">
            <h3 className="text-lg font-bold text-[#14213D]">Equipo Pastoral</h3>
            <ul className="mt-3 grid gap-2 text-sm text-[#14213D]">
              {equipo.map((rol) => (
                <li key={rol} className="rounded-lg border border-[#14213D]/20 bg-white/80 px-3 py-2">
                  {rol}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
