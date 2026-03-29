# 📋 Prompt Maestro - Ecosistema Oasis

Usa este prompt cuando necesites crear nuevos componentes UI para el proyecto.

---

## 🎯 Tema del Componente

**Actúa como un Desarrollador Senior de React/Next.js.**

**Tarea**: Crea un módulo de UI para el proyecto "Ecosistema Oasis" llamado **[NOMBRE DEL MÓDULO]**.

---

## 🎨 Reglas de Estilo

### Paleta de Colores (OBLIGATORIO)
Usa **estrictamente** estos colores en todo el componente:
- **#14213D** — Azul Oscuro (textos, acentos primarios)
- **#FCA311** — Amarillo Oasis (botones, highlights, hover states)
- **#E5E5E5** — Gris Platino (fondos sutiles, bordes)
- **#FFFFFF** — Blanco (fondo principal, tarjetas)

### Estética Visual
- **Diseño "Isla"**: Componentes con bordes muy redondeados (`rounded-3xl`, `rounded-2xl`)
- **Sombras suaves**: `shadow-[0_12px_22px_rgba(0,0,0,0.08)]` para subtle, `shadow-xl` para enfoque
- **Efectos de cristal**: `backdrop-blur` con `bg-white/50` para transparencias
- **Transiciones**: Todas las interacciones deben tener `transition` y `duration-300`
- **Hover states**: Cambios visuales claros (escala, color, sombra) al pasar el mouse

### Framework & Responsive
- **Tailwind CSS** como único framework de estilos
- **Mobile-first**: Primero estilos móviles, luego `md:`, `lg:`, `xl:` breakpoints
- **Container queries** no (usar grid/flex responsivo estándar)

---

## 💻 Reglas de Código

### Tipado TypeScript (OBLIGATORIO)
- Define todas las props con `interface`
- **NO uses `any` en ningún caso**
- Usa tipos específicos: `string`, `number`, `boolean`, `ReactNode`, arrays tipados
- Implementa tipos para objetos complejos (ej: `interface MenuItem { ... }`)

### Props Dinámicas
- **TODO el contenido** debe pasarse por props: títulos, textos, imágenes, rutas, colores opcionales
- El componente NO debe tener contenido hardcodeado (excepto labels y placeholders)
- Usa valores por defecto con `?:` para props opcionales

### Estructura de Código
```tsx
'use client';  // Agrega si necesita estado o interactividad

import { ReactNode } from 'react';
import Image from 'next/image'; // Si usas imágenes

interface ComponentProps {
  // Define todas las props aquí
  title: string;
  items: Item[];
  onAction?: () => void;
}

export default function ComponentName({ ...props }: ComponentProps) {
  // Lógica aquí (hooks, eventos, estado)
  // Diseño aquí (JSX)
}
```

### Lógica vs Diseño
- Separa estado/lógica del JSX
- Si necesitas `useState`, `useEffect`, `useCallback` → agregar `'use client'` al inicio
- Componentes puramente visuales sin estado → NO necesitan `'use client'`

### Iconos
- **Lucide React** para iconos (ej: `<Heart />`, `<Star />`, `<ArrowRight />`)
- O **SVG inline** si necesitas control total
- NO uses imágenes PNG/JPG para iconos

### Estructura del Contenido
El componente debe:
- Tener **máximo una responsabilidad**
- Ser **completamente personalizable** vía props
- Ocupar **ancho completo** dentro de un contenedor (parent maneja padding/margin)
- Ser **mobile-friendly** por defecto

---

## 📐 Estructura de Proyecto

```
src/
├── components/
│   └── landing/
│       ├── Hero.tsx
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── SectionGrid.tsx        ✅ Grillas de cards
│       ├── StatsSection.tsx       ✅ Estadísticas
│       ├── TestimonialsSection.tsx ✅ Testimonios
│       ├── CtaSection.tsx         ✅ Call-to-action
│       ├── FaqSection.tsx         (nuevo)
│       ├── NewsletterSignup.tsx   (nuevo)
│       ├── BlogSection.tsx        (nuevo)
│       ├── CommunityGallery.tsx   (nuevo)
│       └── EventsUpcoming.tsx     (nuevo)
│
└── app/
    ├── (public)/
    │   ├── page.tsx               (home con todos los módulos)
    │   ├── layout.tsx
    │   ├── iglesia/
    │   ├── conecta/
    │   ├── recursos/
    │   └── peticiones/
    └── globals.css
```

---

## 🔄 Workflow para Crear Componentes

1. **Define la interfaz de props** — ¿Qué datos necesita el componente?
2. **Sketch el layout** — Dibuja mentalmente: filas, columnas, espacios
3. **Escribe el JSX** — Estructura HTML con Tailwind
4. **Colorea con variables** — Usa la paleta exacta
5. **Agrega interactividad** — Hover, active, transitions
6. **Proporciona valores por defecto** — Props opcionales con `?:`
7. **Prueba responsivo** — Mobile, tablet, desktop

---

## ✅ Checklist Antes de Entregar

- [ ] TypeScript: Sin `any`, props bien tipadas
- [ ] Colores: Solo #14213D, #FCA311, #E5E5E5, white
- [ ] Responsive: Mobile-first, breakpoints en `md:` y `lg:`
- [ ] Props: Todo contenido dinámico, nada hardcodeado
- [ ] Accesibilidad: `alt` en imágenes, labels en inputs
- [ ] Performance: Next.js `<Image />` para fotos, SVG para iconos
- [ ] Estilo Isla: rounded-3xl, shadow suave, hover effects
- [ ] Sin errores: `npm run build` exitoso

---

## 📝 Ejemplo de Uso

**Cuando necesites un componente nuevo:**

1. Copia este prompt
2. Reemplaza `[NOMBRE DEL MÓDULO]` con el componente que necesitas
3. Pega en el chat con tu asistente IA
4. El componente se creará siguiendo todas estas reglas

**Ejemplo:**
```
Actúa como un Desarrollador Senior de React/Next.js.
Tarea: Crea un módulo de UI para el proyecto "Ecosistema Oasis" llamado "FaqSection".

Estructura del Contenido:
Una sección de preguntas frecuentes con:
- Pregunta clickeable que expande/colapsa respuesta
- 6-8 items de FAQ
- Diseño de acordeón
- Ícono de + y - para expandir
- Todas las respuestas dinámicas vía props
```

---

## 🎓 Principios Clave

- **DRY (Don't Repeat Yourself)** — Reutiliza componentes
- **Props over Config** — Personalización vía props, no archivos
- **Tailwind First** — Solo Tailwind, nada de CSS custom
- **Type Safety** — TypeScript obligatorio, sin `any`
- **Mobile First** — Empieza por móvil, escala a desktop
- **Consistencia Visual** — Misma paleta, iconos, espacios en todo
- **Mantenibilidad** — Código claro, bien comentado, fácil de entender

---

## 🚀 Componentes Listos para Usar

### ✅ Actualmente Disponibles

1. **SectionGrid** — Grilla flexible de cards con links
   ```tsx
   <SectionGrid label="Explora" title="Menús" items={items} columns={4} />
   ```

2. **StatsSection** — Números y estadísticas destacadas
   ```tsx
   <StatsSection stats={stats} title="Nuestro Impacto" />
   ```

3. **TestimonialsSection** — Tarjetas de testimonios con ratings
   ```tsx
   <TestimonialsSection testimonials={testimonials} />
   ```

4. **CtaSection** — Llamada a acción con botones
   ```tsx
   <CtaSection title="Únete" description="..." primaryButtonText="Ir" />
   ```

5. **FaqSection** — Acordeón interactivo de preguntas frecuentes
   ```tsx
   <FaqSection items={faqItems} title="Preguntas Frecuentes" />
   ```

6. **NewsletterSignup** — Formulario de suscripción a boletín
   ```tsx
   <NewsletterSignup 
     title="Mantente Conectado"
     onSubmit={handleSubscribe}
   />
   ```

7. **BlogSection** — Grid de artículos/posts con imágenes
   ```tsx
   <BlogSection posts={posts} title="Blog & Recursos" columns={3} />
   ```

8. **EventsUpcoming** — Calendario de próximos eventos
   ```tsx
   <EventsUpcoming events={events} title="Próximos Eventos" />
   ```

9. **QuickLinksBar** — Barra rápida de acceso (2 variantes)
   ```tsx
   <QuickLinksBar links={quickLinks} variant="default" />
   ```

### 🔜 Para Crear Próximamente

- CommunityGallery — Galería de fotos de eventos
- FormSection — Formularios genéricos personalizables
- TestimonyForm — Formulario para enviar testimonios
- PodcastSection — Sección de podcasts

---

## 📞 Soporte

Si tienes dudas sobre paleta, breakpoints, o estructura:
1. Revisa componentes existentes como referencia
2. Consulta este archivo
3. Sigue el checklist antes de usar el componente

¡Feliz desarrollo! 🎨
