export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden border-b border-[#14213D]/20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(55% 50% at 50% 5%, rgba(252, 163, 17, 0.22) 0%, rgba(20, 33, 61, 0.16) 45%, rgba(255, 255, 255, 1) 100%)',
        }}
      />

      <div className="relative mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col items-start justify-center px-6 py-24 sm:px-10 lg:px-16">
        <p className="mb-6 inline-flex items-center rounded-full border border-[#14213D]/25 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D] shadow-[0_8px_16px_rgba(0,0,0,0.1)]">
          Ecosistema Oasis
        </p>

        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tighter text-[#14213D] md:text-7xl">
          Encuentra Tu Lugar En El{' '}
          <span className="bg-gradient-to-r from-[#FCA311] to-[#14213D] bg-clip-text text-transparent">
            Oasis
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#14213D]/85 md:text-lg">
          Una comunidad para crecer en fe, amistad y propósito. Conéctate con personas,
          participa en eventos y da tu próximo paso con claridad.
        </p>

        <div className="mt-10">
          <a
            href="/conecta"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-7 py-3.5 text-sm font-bold tracking-wide text-[#14213D] transition-all duration-300 hover:shadow-[0_14px_28px_rgba(0,0,0,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14213D]/30"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#FCA311] via-[#FCA311] to-[#E5E5E5] bg-[length:200%_200%] motion-safe:animate-[pulse_4s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-105" />
            <span className="absolute inset-[1px] rounded-[11px] bg-white/60 backdrop-blur-sm" />
            <span className="relative">Empezar Aqui</span>
          </a>
        </div>
      </div>
    </section>
  );
}