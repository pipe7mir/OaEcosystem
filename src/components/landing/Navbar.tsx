import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    // Contenedor fijo que centra la "isla" en la parte superior
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 sm:px-6 sm:pt-4">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between 
                      rounded-2xl border border-[#14213D]/10 bg-white/80 px-6 
                      shadow-[0_20px_40px_rgba(0,0,0,0.1)] backdrop-blur-xl 
                      transition-all duration-300 hover:bg-white/90">
        
        {/* LOGO E ICONO */}
        <Link href="/" className="flex items-center gap-3 transition hover:scale-105">
          <div className="relative h-9 w-9 overflow-hidden rounded-lg shadow-sm">
            <Image 
              src="/assets/logos/log1.png" 
              alt="Logo Oasis" 
              fill
              className="object-contain"
            />
          </div>
          <span className="hidden lg:block">
            <span className="font-oasis text-2xl leading-none text-[#14213D]">Oasis</span>
          </span>
        </Link>

        {/* MENÚS PRINCIPALES (Desktop) */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-xs font-bold uppercase tracking-widest text-[#14213D]/70 transition hover:text-[#FCA311]">
            Inicio
          </Link>

          {/* Menú Dinámico: Iglesia */}
          <div className="group relative">
            <Link href="/iglesia" className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#14213D]/70 transition hover:text-[#FCA311]">
              Iglesia
            </Link>
            <div className="invisible absolute left-1/2 top-10 w-52 -translate-x-1/2 scale-95 rounded-2xl border border-[#14213D]/5 bg-white p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
              <Link href="/iglesia#nosotros" className="block rounded-xl px-4 py-2 text-sm text-[#14213D]/80 transition hover:bg-[#FCA311]/10 hover:text-[#14213D]">Quienes Somos</Link>
              <Link href="/iglesia#vision" className="block rounded-xl px-4 py-2 text-sm text-[#14213D]/80 transition hover:bg-[#FCA311]/10 hover:text-[#14213D]">Visión y Valores</Link>
              <Link href="/iglesia#equipo" className="block rounded-xl px-4 py-2 text-sm text-[#14213D]/80 transition hover:bg-[#FCA311]/10 hover:text-[#14213D]">Equipo Pastoral</Link>
            </div>
          </div>

          {/* Menú Dinámico: Conecta */}
          <div className="group relative">
            <Link href="/conecta" className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#14213D]/70 transition hover:text-[#FCA311]">
              Conecta
            </Link>
            <div className="invisible absolute left-1/2 top-10 w-52 -translate-x-1/2 scale-95 rounded-2xl border border-[#14213D]/5 bg-white p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
              <Link href="/conecta#ministerios" className="block rounded-xl px-4 py-2 text-sm text-[#14213D]/80 transition hover:bg-[#FCA311]/10 hover:text-[#14213D]">Ministerios</Link>
              <Link href="/conecta#novedades" className="block rounded-xl px-4 py-2 text-sm text-[#14213D]/80 transition hover:bg-[#FCA311]/10 hover:text-[#14213D]">Novedades</Link>
              <Link href="/peticiones" className="block rounded-xl px-4 py-2 text-sm text-[#14213D]/80 transition hover:bg-[#FCA311]/10 hover:text-[#14213D]">Peticiones</Link>
            </div>
          </div>

          {/* Menú Dinámico: Recursos */}
          <div className="group relative">
            <Link href="/recursos" className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#14213D]/70 transition hover:text-[#FCA311]">
              Recursos
            </Link>
            <div className="invisible absolute left-1/2 top-10 w-52 -translate-x-1/2 scale-95 rounded-2xl border border-[#14213D]/5 bg-white p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
              <Link href="/recursos#recursos" className="block rounded-xl px-4 py-2 text-sm text-[#14213D]/80 transition hover:bg-[#FCA311]/10 hover:text-[#14213D]">Prédicas y Estudios</Link>
              <Link href="/recursos#agenda" className="block rounded-xl px-4 py-2 text-sm text-[#14213D]/80 transition hover:bg-[#FCA311]/10 hover:text-[#14213D]">Agenda Semanal</Link>
              <Link href="/recursos#contacto" className="block rounded-xl px-4 py-2 text-sm text-[#14213D]/80 transition hover:bg-[#FCA311]/10 hover:text-[#14213D]">Contacto</Link>
            </div>
          </div>
        </div>

        {/* ACCIÓN Y MÓVIL */}
        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="hidden rounded-full bg-[#14213D] px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg transition hover:bg-[#FCA311] hover:text-[#14213D] sm:block"
          >
            Login
          </Link>

          {/* Menú Móvil */}
          <details className="group relative md:hidden">
            <summary className="list-none cursor-pointer rounded-full bg-[#14213D]/5 p-2 text-[#14213D] transition hover:bg-[#FCA311]/20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </summary>
            <div className="absolute right-0 top-12 w-64 origin-top-right rounded-2xl border border-[#14213D]/10 bg-white p-3 shadow-2xl ring-1 ring-[#14213D]/5">
              <Link href="/" className="block rounded-lg px-4 py-2 text-sm font-bold text-[#14213D] hover:bg-gray-100">Inicio</Link>
              <div className="my-2 border-t border-gray-100"></div>
              <p className="px-4 py-1 text-[10px] font-black uppercase text-[#FCA311]">Explorar</p>
              <Link href="/iglesia" className="block rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">Iglesia</Link>
              <Link href="/conecta" className="block rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">Conecta</Link>
              <Link href="/recursos" className="block rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">Recursos</Link>
              <div className="my-2 border-t border-gray-100"></div>
              <Link href="/admin" className="block rounded-lg px-4 py-2 text-sm font-bold text-[#14213D] hover:bg-[#FCA311]/10">Login</Link>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}