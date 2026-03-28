import Hero from '@/components/landing/Hero';
import Link from 'next/link';

export default function PublicHomePage() {
  return (
    <main className="min-h-screen bg-white py-8 text-[#14213D]">
      <Hero />

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FCA311]">
          Explora
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#14213D] md:text-4xl">
          Cada Menu Principal Ahora Es Una Pagina
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          <Link
            href="/iglesia"
            className="rounded-2xl border border-[#14213D]/20 bg-[#E5E5E5]/35 p-5 shadow-[0_12px_22px_rgba(0,0,0,0.12)] transition hover:border-[#FCA311]"
          >
            <h3 className="text-xl font-bold text-[#14213D]">Iglesia</h3>
            <p className="mt-2 text-sm text-[#14213D]/80">Quienes somos, vision y equipo pastoral.</p>
          </Link>

          <Link
            href="/conecta"
            className="rounded-2xl border border-[#14213D]/20 bg-[#E5E5E5]/35 p-5 shadow-[0_12px_22px_rgba(0,0,0,0.12)] transition hover:border-[#FCA311]"
          >
            <h3 className="text-xl font-bold text-[#14213D]">Conecta</h3>
            <p className="mt-2 text-sm text-[#14213D]/80">Ministerios, novedades y vida en comunidad.</p>
          </Link>

          <Link
            href="/recursos"
            className="rounded-2xl border border-[#14213D]/20 bg-[#E5E5E5]/35 p-5 shadow-[0_12px_22px_rgba(0,0,0,0.12)] transition hover:border-[#FCA311]"
          >
            <h3 className="text-xl font-bold text-[#14213D]">Recursos</h3>
            <p className="mt-2 text-sm text-[#14213D]/80">Predicas, agenda semanal e informacion de contacto.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}