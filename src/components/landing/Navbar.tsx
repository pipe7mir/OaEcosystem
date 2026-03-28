import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#14213D]/20 bg-white/95 shadow-[0_10px_20px_rgba(0,0,0,0.1)] backdrop-blur-xl">
      <nav className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between px-6 py-2 sm:px-10 lg:px-16">
        <Link href="/" className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#14213D]">
          Ecosistema <span className="text-[#FCA311]">Oasis</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-semibold text-[#14213D]/80 transition hover:text-[#FCA311]">
            Inicio
          </Link>

          <div className="group relative">
            <Link href="/iglesia" className="text-sm font-semibold text-[#14213D]/80 transition hover:text-[#FCA311]">
              Iglesia
            </Link>
            <div className="invisible absolute left-1/2 top-8 z-50 w-56 -translate-x-1/2 rounded-xl border border-[#14213D]/20 bg-white p-2 opacity-0 shadow-[0_14px_28px_rgba(0,0,0,0.2)] transition duration-200 group-hover:visible group-hover:opacity-100">
              <Link href="/iglesia#nosotros" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 transition hover:bg-[#E5E5E5] hover:text-[#14213D]">
                Quienes Somos
              </Link>
              <Link href="/iglesia#vision" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 transition hover:bg-[#E5E5E5] hover:text-[#14213D]">
                Vision y Valores
              </Link>
              <Link href="/iglesia#equipo" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 transition hover:bg-[#E5E5E5] hover:text-[#14213D]">
                Equipo Pastoral
              </Link>
            </div>
          </div>

          <div className="group relative">
            <Link href="/conecta" className="text-sm font-semibold text-[#14213D]/80 transition hover:text-[#FCA311]">
              Conecta
            </Link>
            <div className="invisible absolute left-1/2 top-8 z-50 w-56 -translate-x-1/2 rounded-xl border border-[#14213D]/20 bg-white p-2 opacity-0 shadow-[0_14px_28px_rgba(0,0,0,0.2)] transition duration-200 group-hover:visible group-hover:opacity-100">
              <Link href="/conecta#ministerios" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 transition hover:bg-[#E5E5E5] hover:text-[#14213D]">
                Ministerios
              </Link>
              <Link href="/conecta#novedades" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 transition hover:bg-[#E5E5E5] hover:text-[#14213D]">
                Novedades
              </Link>
              <Link href="/peticiones" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 transition hover:bg-[#E5E5E5] hover:text-[#14213D]">
                Peticiones
              </Link>
            </div>
          </div>

          <div className="group relative">
            <Link href="/recursos" className="text-sm font-semibold text-[#14213D]/80 transition hover:text-[#FCA311]">
              Recursos
            </Link>
            <div className="invisible absolute left-1/2 top-8 z-50 w-56 -translate-x-1/2 rounded-xl border border-[#14213D]/20 bg-white p-2 opacity-0 shadow-[0_14px_28px_rgba(0,0,0,0.2)] transition duration-200 group-hover:visible group-hover:opacity-100">
              <Link href="/recursos#recursos" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 transition hover:bg-[#E5E5E5] hover:text-[#14213D]">
                Predicas y Estudios
              </Link>
              <Link href="/recursos#agenda" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 transition hover:bg-[#E5E5E5] hover:text-[#14213D]">
                Agenda Semanal
              </Link>
              <Link href="/recursos#contacto" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 transition hover:bg-[#E5E5E5] hover:text-[#14213D]">
                Contacto
              </Link>
            </div>
          </div>
        </div>

        <Link
          href="/peticiones"
          className="rounded-lg border border-[#FCA311] bg-[#FCA311] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#14213D] shadow-[0_8px_18px_rgba(0,0,0,0.25)] transition hover:brightness-95"
        >
          Escribenos
        </Link>

        <details className="relative md:hidden">
          <summary className="list-none cursor-pointer rounded-lg border border-[#14213D]/25 px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#14213D]">
            Menu
          </summary>
          <div className="absolute right-0 top-11 w-72 rounded-xl border border-[#14213D]/20 bg-white p-2 shadow-[0_14px_28px_rgba(0,0,0,0.2)]">
            <Link href="/" className="block rounded-lg px-3 py-2 text-sm text-[#14213D] hover:bg-[#E5E5E5]">
              Inicio
            </Link>
            <p className="px-3 pt-2 text-[11px] font-bold uppercase tracking-wider text-[#FCA311]">Iglesia</p>
            <Link href="/iglesia" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 hover:bg-[#E5E5E5] hover:text-[#14213D]">
              Iglesia
            </Link>
            <Link href="/iglesia#nosotros" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 hover:bg-[#E5E5E5] hover:text-[#14213D]">
              Quienes Somos
            </Link>
            <Link href="/iglesia#vision" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 hover:bg-[#E5E5E5] hover:text-[#14213D]">
              Vision y Valores
            </Link>
            <Link href="/iglesia#equipo" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 hover:bg-[#E5E5E5] hover:text-[#14213D]">
              Equipo Pastoral
            </Link>
            <p className="px-3 pt-2 text-[11px] font-bold uppercase tracking-wider text-[#FCA311]">Conecta</p>
            <Link href="/conecta" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 hover:bg-[#E5E5E5] hover:text-[#14213D]">
              Conecta
            </Link>
            <Link href="/conecta#ministerios" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 hover:bg-[#E5E5E5] hover:text-[#14213D]">
              Ministerios
            </Link>
            <Link href="/conecta#novedades" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 hover:bg-[#E5E5E5] hover:text-[#14213D]">
              Novedades
            </Link>
            <Link href="/peticiones" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 hover:bg-[#E5E5E5] hover:text-[#14213D]">
              Peticiones
            </Link>
            <p className="px-3 pt-2 text-[11px] font-bold uppercase tracking-wider text-[#FCA311]">Recursos</p>
            <Link href="/recursos" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 hover:bg-[#E5E5E5] hover:text-[#14213D]">
              Recursos
            </Link>
            <Link href="/recursos#recursos" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 hover:bg-[#E5E5E5] hover:text-[#14213D]">
              Predicas y Estudios
            </Link>
            <Link href="/recursos#agenda" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 hover:bg-[#E5E5E5] hover:text-[#14213D]">
              Agenda Semanal
            </Link>
            <Link href="/recursos#contacto" className="block rounded-lg px-3 py-2 text-sm text-[#14213D]/85 hover:bg-[#E5E5E5] hover:text-[#14213D]">
              Contacto
            </Link>
          </div>
        </details>
      </nav>
    </header>
  );
}