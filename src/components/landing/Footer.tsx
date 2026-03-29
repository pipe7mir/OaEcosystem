import Link from 'next/link';
import {
  Globe,
  MessageCircle,
  Send,
  MapPin,
  Phone,
  Mail,
  LucideIcon,
} from 'lucide-react';

interface FooterLinkItem {
  id: string;
  label: string;
  href: string;
}

interface FooterLinkGroup {
  id: string;
  title: string;
  links: FooterLinkItem[];
}

interface FooterSocialItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

interface FooterContactItem {
  id: string;
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
}

interface FooterTypography {
  brandClassName?: string;
  headingClassName?: string;
  bodyClassName?: string;
  metaClassName?: string;
}

interface FooterProps {
  brandName?: string;
  tagline?: string;
  serviceLabel?: string;
  groups?: FooterLinkGroup[];
  socials?: FooterSocialItem[];
  contactItems?: FooterContactItem[];
  legalText?: string;
  supportLinkLabel?: string;
  supportLinkHref?: string;
  privacyLinkLabel?: string;
  privacyLinkHref?: string;
  typography?: FooterTypography;
  className?: string;
}

const defaultGroups: FooterLinkGroup[] = [
  {
    id: 'iglesia',
    title: 'Iglesia',
    links: [
      { id: 'quienes', label: 'Quienes Somos', href: '/iglesia#nosotros' },
      { id: 'vision', label: 'Vision y Valores', href: '/iglesia#vision' },
      { id: 'equipo', label: 'Equipo Pastoral', href: '/iglesia#equipo' },
    ],
  },
  {
    id: 'conecta',
    title: 'Conecta',
    links: [
      { id: 'ministerios', label: 'Ministerios', href: '/conecta#ministerios' },
      { id: 'novedades', label: 'Novedades', href: '/conecta#novedades' },
      { id: 'peticiones', label: 'Peticiones', href: '/peticiones' },
    ],
  },
  {
    id: 'recursos',
    title: 'Recursos',
    links: [
      { id: 'predicas', label: 'Predicas y Estudios', href: '/recursos#recursos' },
      { id: 'agenda', label: 'Agenda Semanal', href: '/recursos#agenda' },
      { id: 'contacto', label: 'Contacto', href: '/recursos#contacto' },
    ],
  },
];

const defaultSocials: FooterSocialItem[] = [
  { id: 'sitio', label: 'Sitio Web', href: '#', icon: Globe },
  { id: 'whatsapp', label: 'WhatsApp', href: '#', icon: MessageCircle },
  { id: 'canal', label: 'Canal', href: '#', icon: Send },
];

const defaultContactItems: FooterContactItem[] = [
  {
    id: 'address',
    label: 'Direccion',
    value: 'Calle 5 #123, Bogota',
    icon: MapPin,
  },
  {
    id: 'phone',
    label: 'Telefono',
    value: '+57 300 000 0000',
    href: 'tel:+573000000000',
    icon: Phone,
  },
  {
    id: 'mail',
    label: 'Correo',
    value: 'contacto@ecosistemaoasis.org',
    href: 'mailto:contacto@ecosistemaoasis.org',
    icon: Mail,
  },
];

export default function Footer({
  brandName = 'Ecosistema Oasis',
  tagline = 'Una iglesia para conectar, crecer y servir.',
  serviceLabel = 'Domingos 10:00 AM',
  groups = defaultGroups,
  socials = defaultSocials,
  contactItems = defaultContactItems,
  legalText = '© 2026 Ecosistema Oasis. Todos los derechos reservados.',
  supportLinkLabel = 'Soporte',
  supportLinkHref = '/recursos#contacto',
  privacyLinkLabel = 'Privacidad',
  privacyLinkHref = '/peticiones',
  typography,
  className = '',
}: FooterProps) {
  return (
    <footer className={`relative px-4 pb-5 pt-14 sm:px-6 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">
        <div className="group relative overflow-hidden rounded-[2rem] border border-[#14213D]/10 bg-white/80 shadow-[0_20px_40px_rgba(0,0,0,0.1)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:bg-white/90">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#FCA311]/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-[#14213D]/10 blur-2xl" />

          <div className="relative px-6 py-8 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr_1fr]">
              <section>
                <p className={`text-xs font-extrabold uppercase tracking-[0.22em] text-[#FCA311] ${typography?.metaClassName ?? ''}`}>
                  Comunidad de Fe
                </p>
                <h3 className={`mt-3 text-2xl font-extrabold text-[#14213D] sm:text-3xl ${typography?.brandClassName ?? ''}`}>
                  {brandName}
                </h3>
                <p className={`mt-3 max-w-md text-sm text-[#14213D]/80 ${typography?.bodyClassName ?? ''}`}>
                  {tagline}
                </p>
                <p className={`mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#FCA311] ${typography?.metaClassName ?? ''}`}>
                  {serviceLabel}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={social.id}
                        href={social.href}
                        aria-label={social.label}
                        className="inline-flex items-center gap-2 rounded-full border border-[#14213D]/15 bg-white px-3 py-2 text-xs font-semibold text-[#14213D] transition hover:border-[#FCA311] hover:text-[#FCA311]"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{social.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </section>

              <section className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-2">
                {groups.map((group) => (
                  <div key={group.id}>
                    <h4 className={`text-sm font-bold uppercase tracking-[0.16em] text-[#14213D] ${typography?.headingClassName ?? ''}`}>
                      {group.title}
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {group.links.map((item) => (
                        <li key={item.id}>
                          <Link
                            href={item.href}
                            className={`text-sm text-[#14213D]/75 transition hover:text-[#FCA311] ${typography?.bodyClassName ?? ''}`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            </div>

            <div className="my-7 h-px w-full bg-gradient-to-r from-transparent via-[#14213D]/15 to-transparent" />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_auto] md:items-center">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <Icon className="h-4 w-4 text-[#FCA311]" />
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#14213D]/60">
                          {item.label}
                        </p>
                        <p className={`text-sm font-semibold text-[#14213D] ${typography?.bodyClassName ?? ''}`}>
                          {item.value}
                        </p>
                      </div>
                    </>
                  );

                  return item.href ? (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="inline-flex items-center gap-2 rounded-2xl border border-[#14213D]/10 bg-[#E5E5E5]/20 px-3 py-2 transition hover:border-[#FCA311]"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div
                      key={item.id}
                      className="inline-flex items-center gap-2 rounded-2xl border border-[#14213D]/10 bg-[#E5E5E5]/20 px-3 py-2"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#14213D]/60 md:justify-end">
                <span className={typography?.metaClassName ?? ''}>{legalText}</span>
                <Link href={supportLinkHref} className="transition hover:text-[#FCA311]">
                  {supportLinkLabel}
                </Link>
                <Link href={privacyLinkHref} className="transition hover:text-[#FCA311]">
                  {privacyLinkLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}