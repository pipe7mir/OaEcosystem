'use client';

import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  placeholderEmail?: string;
  buttonText?: string;
  onSubmit?: (email: string) => Promise<void>;
  successMessage?: string;
}

export default function NewsletterSignup({
  title = 'Mantente Conectado',
  description = 'Recibe noticias, prédicas y eventos semanales en tu correo',
  placeholderEmail = 'tu@correo.com',
  buttonText = 'Suscribirse',
  onSubmit,
  successMessage = '¡Gracias! Revisa tu correo para confirmar.',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Por favor ingresa un correo válido');
      return;
    }

    setLoading(true);

    try {
      if (onSubmit) {
        await onSubmit(email);
      }
      setSuccess(true);
      setEmail('');
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      setError('Error al suscribirse. Intenta más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
      <div className="rounded-3xl border border-[#14213D]/20 bg-gradient-to-br from-[#14213D]/5 to-[#FCA311]/5 p-8 shadow-[0_12px_22px_rgba(0,0,0,0.08)] md:p-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="rounded-full bg-[#FCA311]/10 p-3 text-[#FCA311]">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-[#14213D] md:text-3xl">
              {title}
            </h2>
            <p className="mt-1 text-sm text-[#14213D]/70">
              {description}
            </p>
          </div>
        </div>

        {/* Form */}
        {!success ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholderEmail}
              className="flex-1 rounded-full border border-[#14213D]/20 bg-white px-6 py-3 text-[#14213D] placeholder:text-[#14213D]/40 focus:border-[#FCA311] focus:outline-none focus:ring-2 focus:ring-[#FCA311]/20 transition"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-[#FCA311] px-8 py-3 font-semibold text-[#14213D] shadow-lg transition hover:shadow-[0_20px_32px_rgba(252,163,17,0.4)] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Procesando...' : buttonText}
            </button>
          </form>
        ) : (
          <div className="flex items-center gap-3 rounded-full bg-[#FCA311]/10 px-6 py-3">
            <CheckCircle className="h-5 w-5 text-[#FCA311]" />
            <p className="font-semibold text-[#14213D]">
              {successMessage}
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <p className="mt-3 text-sm font-medium text-red-600">
            {error}
          </p>
        )}
      </div>
    </section>
  );
}
