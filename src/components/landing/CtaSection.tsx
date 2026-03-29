import Link from 'next/link';

interface CtaSectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  backgroundImage?: string;
}

export default function CtaSection({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  backgroundImage,
}: CtaSectionProps) {
  return (
    <section
      className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#14213D]/90 to-[#14213D]/70" />

      {/* Contenido */}
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-white/90">
          {description}
        </p>

        {/* Botones */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={primaryButtonHref}
            className="rounded-full bg-[#FCA311] px-8 py-3 font-semibold text-[#14213D] shadow-lg transition hover:shadow-[0_20px_32px_rgba(252,163,17,0.4)] hover:scale-105"
          >
            {primaryButtonText}
          </Link>
          {secondaryButtonText && secondaryButtonHref && (
            <Link
              href={secondaryButtonHref}
              className="rounded-full border-2 border-white/30 px-8 py-3 font-semibold text-white transition hover:border-[#FCA311] hover:bg-white/10"
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
