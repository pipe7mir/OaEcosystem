import Hero from '@/components/landing/Hero';
import BlogSection from '@/components/landing/BlogSection';
import EventsUpcoming from '@/components/landing/EventsUpcoming';
import StatsSection from '@/components/landing/StatsSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import FaqSection from '@/components/landing/FaqSection';
import NewsletterSignup from '@/components/landing/NewsletterSignup';
import CtaSection from '@/components/landing/CtaSection';
import MapCalendarSection from '@/components/landing/MapCalendarSection';

export default function PublicHomePage() {
  // Blog posts
  const blogPosts = [
    {
      id: 'post-1',
      title: 'Caminando en Fe: Reflexiones de un Viaje Espiritual',
      excerpt: 'Descubre cómo la fe nos transforma y nos guía a través de los desafíos de la vida.',
      date: '15 Mar 2026',
      category: 'Reflexión',
      author: 'Pastor Miguel',
      image: 'https://images.pexels.com/photos/207574/pexels-photo-207574.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: '#post-1',
    },
    {
      id: 'post-2',
      title: 'La Importancia de la Comunidad en Nuestra Fe',
      excerpt: 'Explorar por qué estar juntos fortalece nuestra relación con Dios y entre hermanos.',
      date: '10 Mar 2026',
      category: 'Comunidad',
      author: 'Pastora Rosa',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: '#post-2',
    },
    {
      id: 'post-3',
      title: 'Encontrando Paz en Tiempos de Incertidumbre',
      excerpt: 'Jesucristo nos ofrece una paz que trasciende toda comprensión. Aprende cómo accederla.',
      date: '05 Mar 2026',
      category: 'Paz',
      author: 'Pastor David',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: '#post-3',
    },
  ];

  // Próximos eventos
  const upcomingEvents = [
    {
      id: 'event-1',
      title: 'Servicio Dominical',
      date: '31 Mar 2026',
      time: '09:00 AM - 11:00 AM',
      location: 'Templo Principal, Calle 5 #123',
      description: 'Únete a nuestro servicio de adoración y prédica.',
      category: 'Servicio',
      href: '#event-1',
    },
    {
      id: 'event-2',
      title: 'Reunión de Jóvenes',
      date: '02 Abr 2026',
      time: '06:00 PM - 08:00 PM',
      location: 'Salón de Jóvenes, Centro Comunitario',
      description: 'Estudio bíblico temático y confraternidad para jóvenes de 18-30 años.',
      category: 'Jóvenes',
      href: '#event-2',
    },
    {
      id: 'event-3',
      title: 'Escuela Sabática',
      date: '05 Abr 2026',
      time: '08:30 AM - 09:30 AM',
      location: 'Templo Principal',
      description: 'Estudio de la lección de la semana con énfasis en la Palabra de Dios.',
      category: 'Educación',
      href: '#event-3',
    },
  ];

  // Preguntas frecuentes
  const faqItems = [
    {
      id: 'faq-1',
      question: '¿A qué hora son los servicios?',
      answer: 'Nuestros servicios principales se realizan cada domingo de 9:00 AM a 11:00 AM. También contamos con servicios de oración entre semana. Consulta nuestra sección de eventos para horarios específicos.',
    },
    {
      id: 'faq-2',
      question: '¿Cómo puedo conocer más sobre los ministerios?',
      answer: 'Puedes explorar nuestros ministerios en la sección "Conecta" de la página. Allí encontrarás información sobre cada área de servicio y cómo unirte según tus intereses y dones.',
    },
    {
      id: 'faq-3',
      question: '¿Dónde están ubicados?',
      answer: 'Nos encontramos en el Centro Comunitario, Calle 5 #123. Contamos con estacionamiento disponible y estamos accesibles para personas con movilidad reducida.',
    },
    {
      id: 'faq-4',
      question: '¿Puedo enviar una petición de oración de forma anónima?',
      answer: 'Sí, nuestro formulario de peticiones permite que te mantengas anónimo si lo deseas. Todas las peticiones son tratadas con confidencialidad y nuestro equipo de oración intercede por cada necesidad.',
    },
  ];

  // Datos configurables para StatsSection
  const stats = [
    {
      id: 'years',
      number: '15+',
      label: 'Años de Ministerio',
      description: 'Sirviendo a la comunidad',
    },
    {
      id: 'members',
      number: '1.2K',
      label: 'Miembros Activos',
      description: 'Familia en crecimiento',
    },
    {
      id: 'events',
      number: '52+',
      label: 'Eventos Anuales',
      description: 'Celebraciones y encuentros',
    },
    {
      id: 'missions',
      number: '8',
      label: 'Ministerios',
      description: 'Diferentes áreas de servicio',
    },
  ];

  // Datos configurables para TestimonialsSection
  const testimonials = [
    {
      id: 'test-1',
      name: 'María González',
      role: 'Miembro desde 2019',
      text: 'Ecosistema Oasis cambió mi vida. Encontré una comunidad donde siento que pertenezco y donde puedo crecer en fe cada día.',
      rating: 5,
    },
    {
      id: 'test-2',
      name: 'Juan Rodríguez',
      role: 'Voluntario de Ministerios',
      text: 'El espíritu de servicio aquí es increíble. Me siento motivado a contribuir y ser parte del cambio en nuestra comunidad.',
      rating: 5,
    },
    {
      id: 'test-3',
      name: 'Laura Mendez',
      role: 'Integrante del Coro',
      text: 'La adoración aquí toca mi corazón profundamente. Es un lugar donde Dios se manifiesta realmente presente en cada acto.',
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#14213D]">
      {/* Hero */}
      <Hero />

      {/* Events Section: debajo del Hero */}
      <EventsUpcoming
        events={upcomingEvents}
        title="Próximos Eventos"
        subtitle="Únete a nuestras actividades y celebraciones"
        columns={3}
      />

      {/* Blog Section */}
      <BlogSection
        posts={blogPosts}
        title="Blog & Recursos"
        subtitle="Artículos, reflexiones y enseñanzas para tu crecimiento espiritual"
        columns={3}
      />

      {/* Sección de Estadísticas */}
      <StatsSection
        stats={stats}
        title="Números que Hablan"
        subtitle="Nuestro impacto en la comunidad"
      />

      {/* Sección de Testimonios */}
      <TestimonialsSection
        testimonials={testimonials}
        title="Lo Que Dicen Nuestros Hermanos"
        subtitle="Historias de fe y transformación en Ecosistema Oasis"
      />

      {/* FAQ Section */}
      <FaqSection
        items={faqItems}
        title="Preguntas Frecuentes"
        subtitle="Resuelve tus dudas sobre nuestros servicios"
      />

      {/* Newsletter Signup */}
      <NewsletterSignup
        title="Mantente Conectado"
        description="Recibe noticias, prédicas y eventos semanales en tu correo"
        placeholderEmail="tu@correo.com"
        buttonText="Suscribirse"
      />

      {/* CTA Section */}
      <CtaSection
        title="Únete a Nuestra Comunidad"
        description="Eres bienvenido tal como eres. Sírvete de nuestros recursos, conecta con hermanos en fe, y crece espiritualmente."
        primaryButtonText="Enviar una Petición"
        primaryButtonHref="/peticiones"
        secondaryButtonText="Conocer Más"
        secondaryButtonHref="/iglesia"
      />

      {/* Mapa y Calendario antes del footer */}
      <MapCalendarSection
        title="Estamos Cerca de Ti"
        subtitle="Planea tu visita con nuestro mapa y revisa los encuentros de la semana"
        mapTitle="Ecosistema Oasis - Ubicación"
        mapAddress="Calle 5 #123, Bogotá, Colombia"
        mapEmbedUrl="https://www.google.com/maps?q=Iglesia+Adventista+del+Septimo+Dia+Bogota&output=embed"
        events={upcomingEvents.map((event) => ({
          id: event.id,
          title: event.title,
          date: event.date,
          time: event.time,
          location: event.location,
        }))}
      />
    </main>
  );
}