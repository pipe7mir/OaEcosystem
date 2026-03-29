'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  ShieldCheck,
  LayoutTemplate,
  CalendarClock,
  Newspaper,
  BarChart3,
  MessageSquareQuote,
  CircleHelp,
  Mail,
  MapPinned,
  Navigation,
  Footprints,
  LogOut,
  Settings,
  Palette,
} from 'lucide-react';


interface AdminModule {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  group: 'Landing' | 'Navegacion' | 'Comunicacion' | 'Herramientas';
}

const modules: AdminModule[] = [
  {
    id: 'hero',
    title: 'Hero Principal',
    description: 'Slides, textos, botones y fondos del hero.',
    href: '/admin/landing/hero',
    icon: LayoutTemplate,
    group: 'Landing',
  },
  {
    id: 'events',
    title: 'Proximos Eventos',
    description: 'Agenda, horarios, ubicaciones y categorias.',
    href: '/admin/landing/events',
    icon: CalendarClock,
    group: 'Landing',
  },
  {
    id: 'blog',
    title: 'Blog y Recursos',
    description: 'Articulos, autores, imagenes y fechas.',
    href: '/admin/landing/blog',
    icon: Newspaper,
    group: 'Landing',
  },
  {
    id: 'stats',
    title: 'Estadisticas',
    description: 'Cifras destacadas y descripciones de impacto.',
    href: '/admin/landing/stats',
    icon: BarChart3,
    group: 'Landing',
  },
  {
    id: 'testimonials',
    title: 'Testimonios',
    description: 'Resenas, nombres, roles y valoraciones.',
    href: '/admin/landing/testimonials',
    icon: MessageSquareQuote,
    group: 'Landing',
  },
  {
    id: 'faq',
    title: 'Preguntas Frecuentes',
    description: 'Preguntas y respuestas del acordeon FAQ.',
    href: '/admin/landing/faq',
    icon: CircleHelp,
    group: 'Landing',
  },
  {
    id: 'newsletter',
    title: 'Newsletter',
    description: 'Titulos, mensaje y textos de suscripcion.',
    href: '/admin/landing/newsletter',
    icon: Mail,
    group: 'Comunicacion',
  },
  {
    id: 'map-calendar',
    title: 'Mapa y Calendario',
    description: 'Direccion, URL de mapa y eventos inferiores.',
    href: '/admin/landing/map-calendar',
    icon: MapPinned,
    group: 'Landing',
  },
  {
    id: 'navbar',
    title: 'Navbar',
    description: 'Logo, labels, rutas y CTA de cabecera.',
    href: '/admin/landing/navbar',
    icon: Navigation,
    group: 'Navegacion',
  },
  {
    id: 'footer',
    title: 'Footer',
    description: 'Columnas, contactos, redes y enlaces legales.',
    href: '/admin/landing/footer',
    icon: Footprints,
    group: 'Navegacion',
  },
  {
    id: 'designer',
    title: 'OasisDesigner',
    description: 'Editor de lienzos para crear posts, historias y banners.',
    href: '/admin/designer',
    icon: Palette,
    group: 'Herramientas',
  },
];

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const groupedModules = useMemo(() => {
    return {
      Landing: modules.filter((module) => module.group === 'Landing'),
      Navegacion: modules.filter((module) => module.group === 'Navegacion'),
      Comunicacion: modules.filter((module) => module.group === 'Comunicacion'),
      Herramientas: modules.filter((module) => module.group === 'Herramientas'),
    };
  }, []);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');

    if (email.trim().toLowerCase() === 'admin@oasis.local' && password === 'oasis123') {
      setIsAuthenticated(true);
      setPassword('');
      return;
    }

    setErrorMessage('Credenciales invalidas. Usa admin@oasis.local / oasis123');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setEmail('');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-white px-6 py-28 text-[#14213D] sm:px-10 lg:px-16">
        <section className="mx-auto max-w-md rounded-3xl border border-[#14213D]/15 bg-white/80 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.1)] backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-full bg-[#FCA311]/15 p-3 text-[#14213D]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FCA311]">Administrador</p>
              <h1 className="font-heading text-2xl text-[#14213D]">Login</h1>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="admin-email" className="mb-1 block text-sm font-semibold text-[#14213D]">
                Correo
              </label>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="admin@oasis.local"
                className="w-full rounded-xl border border-[#14213D]/20 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#FCA311]"
                required
              />
            </div>

            <div>
              <label htmlFor="admin-password" className="mb-1 block text-sm font-semibold text-[#14213D]">
                Contrasena
              </label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="oasis123"
                className="w-full rounded-xl border border-[#14213D]/20 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#FCA311]"
                required
              />
            </div>

            {errorMessage && <p className="text-sm font-semibold text-red-600">{errorMessage}</p>}

            <button
              type="submit"
              className="w-full rounded-full bg-[#14213D] px-5 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#FCA311] hover:text-[#14213D]"
            >
              Ingresar al panel
            </button>
          </form>

          <p className="mt-4 text-xs text-[#14213D]/65">
            Acceso demo: admin@oasis.local / oasis123
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 py-28 text-[#14213D] sm:px-10 lg:px-16">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[#14213D]/15 bg-white/80 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FCA311]">Ecosistema Oasis</p>
            <h1 className="font-heading text-3xl text-[#14213D]">Menu de Administracion</h1>
            <p className="mt-2 text-sm text-[#14213D]/75">
              Gestiona todas las funcionalidades visibles en la landing page desde un solo lugar.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-full border border-[#14213D]/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#14213D] transition hover:border-[#FCA311] hover:text-[#FCA311]"
          >
            <LogOut className="h-4 w-4" />
            Salir
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <article className="rounded-3xl border border-[#14213D]/15 bg-[#E5E5E5]/20 p-6 lg:col-span-2">
            <h2 className="font-heading text-2xl text-[#14213D]">Modulos de la Landing</h2>
            <p className="mt-2 text-sm text-[#14213D]/75">
              Cada modulo tiene su menu de configuracion para editar textos, estructura y contenido.
            </p>

            <div className="mt-6 space-y-8">
              {(['Landing', 'Navegacion', 'Comunicacion', 'Herramientas'] as const).map((groupName) => (
                <div key={groupName}>
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#FCA311]">{groupName}</h3>
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {groupedModules[groupName].map((module) => {
                      const Icon = module.icon;
                      return (
                        <Link
                          key={module.id}
                          href={module.href}
                          className="group rounded-2xl border border-[#14213D]/15 bg-white p-4 transition hover:border-[#FCA311] hover:shadow-[0_12px_22px_rgba(252,163,17,0.2)]"
                        >
                          <div className="mb-2 inline-flex rounded-full bg-[#FCA311]/15 p-2 text-[#14213D] transition group-hover:bg-[#FCA311]/25">
                            <Icon className="h-4 w-4" />
                          </div>
                          <h4 className="text-base font-bold text-[#14213D]">{module.title}</h4>
                          <p className="mt-1 text-sm text-[#14213D]/70">{module.description}</p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-3xl border border-[#14213D]/15 bg-white p-6 shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
            <div className="mb-4 inline-flex rounded-full bg-[#14213D]/10 p-2 text-[#14213D]">
              <Settings className="h-5 w-5" />
            </div>
            <h2 className="font-heading text-xl text-[#14213D]">Accesos rapidos</h2>
            <ul className="mt-4 space-y-3 text-sm text-[#14213D]/80">
              <li>Hero y CTA principal</li>
              <li>Calendario y mapa inferior</li>
              <li>Menus de Navbar y Footer</li>
              <li>FAQ y Newsletter</li>
              <li>Estadisticas y Testimonios</li>
            </ul>
            <Link
              href="/"
              className="mt-6 inline-block rounded-full bg-[#14213D] px-5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#FCA311] hover:text-[#14213D]"
            >
              Volver al sitio
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
