export default function Peticiones() {
  return (
    <section id="peticiones" className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
      <div className="rounded-3xl border border-[#14213D]/20 bg-[#E5E5E5]/35 p-6 shadow-[0_14px_28px_rgba(0,0,0,0.14)] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FCA311]">
          Recepcion de Peticiones
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#14213D] md:text-4xl">
          Comparte Tu Peticion o Solicitud
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-[#14213D]/80">
          Puedes enviarnos peticiones de oracion, solicitudes de acompanamiento pastoral
          o consultas generales. Nuestro equipo te respondera a la mayor brevedad.
        </p>

        <form
          className="mt-8 grid gap-4 md:grid-cols-2"
          action="https://formsubmit.co/hola@ecosistemaoasis.co"
          method="POST"
        >
          <input type="hidden" name="_subject" value="Nueva peticion - Ecosistema Oasis" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://ecosistemaoasis.co/gracias.html" />

          <label className="grid gap-2 text-sm text-[#14213D]">
            Nombre completo
            <input
              type="text"
              name="nombre"
              required
              className="rounded-xl border border-[#14213D]/30 bg-white px-4 py-3 text-[#14213D] outline-none ring-[#14213D]/40 placeholder:text-[#14213D]/45 focus:ring"
              placeholder="Tu nombre"
            />
          </label>

          <label className="grid gap-2 text-sm text-[#14213D]">
            Correo electronico
            <input
              type="email"
              name="email"
              required
              className="rounded-xl border border-[#14213D]/30 bg-white px-4 py-3 text-[#14213D] outline-none ring-[#14213D]/40 placeholder:text-[#14213D]/45 focus:ring"
              placeholder="tu@email.com"
            />
          </label>

          <label className="grid gap-2 text-sm text-[#14213D] md:col-span-2">
            Tipo de solicitud
            <select
              name="tipo"
              required
              className="rounded-xl border border-[#14213D]/30 bg-white px-4 py-3 text-[#14213D] outline-none ring-[#14213D]/40 focus:ring"
              defaultValue=""
            >
              <option value="" disabled>
                Selecciona una opcion
              </option>
              <option value="oracion">Peticion de oracion</option>
              <option value="acompanamiento">Acompanamiento pastoral</option>
              <option value="informacion">Informacion general</option>
            </select>
          </label>

          <label className="grid gap-2 text-sm text-[#14213D] md:col-span-2">
            Mensaje
            <textarea
              name="mensaje"
              required
              rows={5}
              className="rounded-xl border border-[#14213D]/30 bg-white px-4 py-3 text-[#14213D] outline-none ring-[#14213D]/40 placeholder:text-[#14213D]/45 focus:ring"
              placeholder="Escribe aqui tu peticion..."
            />
          </label>

          <label className="md:col-span-2 flex items-start gap-3 rounded-xl border border-[#14213D]/20 bg-white p-4 text-xs leading-relaxed text-[#14213D]/80 shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
            <input
              type="checkbox"
              name="autorizacion_datos"
              value="si"
              required
              className="mt-0.5 h-4 w-4 accent-[#FCA311]"
            />
            <span>
              Autorizo de manera previa, expresa e informada a Ecosistema Oasis para el
              tratamiento de mis datos personales conforme a la Ley 1581 de 2012,
              el Decreto 1377 de 2013 y la Politica de Tratamiento de Datos Personales de la
              iglesia, con la finalidad de gestionar esta solicitud y realizar contacto asociado.
              {' '}
              <a href="#" className="font-semibold text-[#FCA311] hover:text-[#14213D]">
                Ver politica de privacidad
              </a>
            </span>
          </label>

          <div className="md:col-span-2 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="rounded-xl border border-[#FCA311] bg-[#FCA311] px-6 py-3 text-sm font-extrabold uppercase tracking-wider text-[#14213D] shadow-[0_10px_20px_rgba(0,0,0,0.25)] transition hover:brightness-95"
            >
              Enviar Peticion
            </button>

            <a
              href="https://wa.me/573000000000"
              className="rounded-xl border border-[#14213D]/25 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#14213D] shadow-[0_8px_18px_rgba(0,0,0,0.12)] transition hover:border-[#FCA311] hover:text-[#FCA311]"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
