import Link from 'next/link';
import { notFound } from 'next/navigation';

interface LandingModuleConfig {
  title: string;
  description: string;
  fields: string[];
}

const landingModuleMap: Record<string, LandingModuleConfig> = {
  hero: {
    title: 'Hero Principal',
    description: 'Administra slides, titulos, subtitulos, botones y fondos del hero.',
    fields: ['Titulo principal', 'Subtitulo', 'Boton primario', 'Boton secundario', 'Imagenes de slide'],
  },
  events: {
    title: 'Proximos Eventos',
    description: 'Gestiona agenda de eventos, fechas, horarios, categorias y ubicaciones.',
    fields: ['Titulo del evento', 'Fecha', 'Hora', 'Ubicacion', 'Descripcion'],
  },
  blog: {
    title: 'Blog y Recursos',
    description: 'Edita posts destacados con imagenes, autores y categorias.',
    fields: ['Titulo del articulo', 'Extracto', 'Autor', 'Categoria', 'Imagen'],
  },
  stats: {
    title: 'Estadisticas',
    description: 'Configura cifras y textos de impacto en la comunidad.',
    fields: ['Numero', 'Etiqueta', 'Descripcion'],
  },
  testimonials: {
    title: 'Testimonios',
    description: 'Administra testimonios, autores y valoraciones.',
    fields: ['Nombre', 'Rol', 'Testimonio', 'Calificacion', 'Foto opcional'],
  },
  faq: {
    title: 'Preguntas Frecuentes',
    description: 'Agrega o edita preguntas y respuestas del acordeon FAQ.',
    fields: ['Pregunta', 'Respuesta'],
  },
  newsletter: {
    title: 'Newsletter',
    description: 'Configura textos de suscripcion y mensajes de confirmacion.',
    fields: ['Titulo', 'Descripcion', 'Placeholder', 'Texto del boton', 'Mensaje de exito'],
  },
  'map-calendar': {
    title: 'Mapa y Calendario',
    description: 'Edita direccion, mapa embebido y agenda inferior antes del footer.',
    fields: ['Titulo seccion', 'Direccion', 'URL embed del mapa', 'Eventos listados'],
  },
  navbar: {
    title: 'Navbar',
    description: 'Configura logo, rutas principales y boton de acceso.',
    fields: ['Ruta del logo', 'Texto marca', 'Menus', 'CTA login'],
  },
  footer: {
    title: 'Footer',
    description: 'Gestiona enlaces, redes, contactos y textos legales.',
    fields: ['Brand', 'Columnas de links', 'Redes', 'Contactos', 'Legal'],
  },
};

export function generateStaticParams() {
  return Object.keys(landingModuleMap).map((slug) => ({ slug }));
}

type LandingModulePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function LandingModulePage({ params }: LandingModulePageProps) {
  const { slug } = await params;
  const moduleConfig = landingModuleMap[slug];

  if (!moduleConfig) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-28 text-[#14213D] sm:px-10 lg:px-16">
      <section className="mx-auto max-w-4xl rounded-3xl border border-[#14213D]/15 bg-white/80 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FCA311]">Administrador</p>
        <h1 className="mt-2 font-heading text-3xl text-[#14213D]">{moduleConfig.title}</h1>
        <p className="mt-2 text-sm text-[#14213D]/75">{moduleConfig.description}</p>

        <div className="mt-8 rounded-2xl border border-[#14213D]/10 bg-[#E5E5E5]/20 p-5">
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-[#14213D]">Campos a administrar</h2>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-[#14213D]/80 sm:grid-cols-2">
            {moduleConfig.fields.map((field) => (
              <li key={field} className="rounded-xl border border-[#14213D]/10 bg-white px-3 py-2">
                {field}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-full bg-[#14213D] px-5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#FCA311] hover:text-[#14213D]"
          >
            Guardar cambios
          </button>
          <Link
            href="/admin"
            className="rounded-full border border-[#14213D]/20 px-5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#14213D] transition hover:border-[#FCA311] hover:text-[#FCA311]"
          >
            Volver al menu
          </Link>
          <Link
            href="/"
            className="rounded-full border border-[#14213D]/20 px-5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#14213D] transition hover:border-[#FCA311] hover:text-[#FCA311]"
          >
            Ver landing
          </Link>
        </div>
      </section>
    </main>
  );
}
