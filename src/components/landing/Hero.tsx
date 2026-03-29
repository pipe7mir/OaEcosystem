"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

// --- CONFIGURACIÓN DE SLIDES ---
const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1400&w=2200',
    tag: 'Naturaleza y Paz',
    title: 'Respira Esperanza En La Creación',
    desc: 'Montañas, cielo y silencio para reenfocar el corazón en Dios cada nuevo día.',
    btn: 'Saber Más',
    link: '/iglesia'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/2087001/pexels-photo-2087001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1400&w=2200',
    tag: 'Adoración Sabática',
    title: 'Iglesia Adventista Del Septimo Dia',
    desc: 'Un lugar para adorar, aprender la Palabra y crecer juntos en comunidad.',
    btn: 'Ver Horarios',
    link: '/recursos#agenda'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/236339/pexels-photo-236339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1400&w=2200',
    tag: 'Comunidad En Adoracion',
    title: 'Tu Lugar De Proposito',
    desc: 'Conecta con ministerios, servicio y una familia de fe que camina contigo.',
    btn: 'Unirme Ahora',
    link: '/conecta'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Intervalo de cambio automático
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#14213D]"
    >
      
      {/* CAPA DE IMÁGENES (FULLSCREEN) */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* GRADIENTES CINEMATOGRÁFICOS */}
            <div className="absolute inset-0 bg-[#14213D]/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#14213D]/88 via-[#14213D]/58 to-[#14213D]/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/92 via-[#14213D]/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#FCA311]/18 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* CONTENIDO TEXTUAL */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 pt-20 sm:px-10 lg:px-16">
        
        {/* TAG SUPERIOR */}
        <div className="mb-6 inline-flex animate-in fade-in zoom-in duration-500 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-[#FCA311] backdrop-blur-md">
          {slides[current].tag}
        </div>

        {/* TÍTULO IMPACTANTE */}
        <h1 
          key={`t-${current}`} 
          className="max-w-4xl animate-in fade-in slide-in-from-left-8 duration-700 text-6xl font-black tracking-tighter text-white md:text-8xl leading-[0.9]"
        >
          {slides[current].title.split(' ').map((word, i) => (
            <span key={i}>
              {word === 'Oasis' ? (
                <span className="text-[#FCA311]">Oasis</span>
              ) : (
                word
              )}
              {' '}
            </span>
          ))}
        </h1>

        {/* DESCRIPCIÓN */}
        <p 
          key={`d-${current}`} 
          className="mt-8 max-w-xl animate-in fade-in slide-in-from-left-12 duration-1000 text-lg leading-relaxed text-white/90 md:text-xl font-medium"
        >
          {slides[current].desc}
        </p>

        {/* BOTONES DE ACCIÓN */}
        <div className="mt-12 flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <Link
            href={slides[current].link}
            className="rounded-xl bg-[#FCA311] px-10 py-5 text-sm font-black uppercase tracking-widest text-[#14213D] shadow-[0_20px_50px_rgba(252,163,17,0.3)] transition-all hover:scale-105 active:scale-95 hover:brightness-110"
          >
            {slides[current].btn}
          </Link>
          
          <Link
            href="/peticiones"
            className="rounded-xl border-2 border-white/20 bg-white/5 px-10 py-5 text-sm font-black uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40"
          >
            Peticiones
          </Link>
        </div>

        {/* INDICADORES (DOTS) */}
        <div className="absolute bottom-12 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-500 rounded-full ${
                i === current 
                  ? 'w-16 h-2 bg-[#FCA311] shadow-[0_0_15px_rgba(252,163,17,0.5)]' 
                  : 'w-3 h-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}