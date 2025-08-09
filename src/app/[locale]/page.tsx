import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import Footer from '@/components/layout/Footer';
import Carousel from '@/components/ui/Carousel';

export default function HomePage() {
  const t = useTranslations('home');

  // Imágenes para el carousel
  const carouselImages = [
    { 
      src: '/images/example1.png', 
      alt: 'ISBASAC - Transporte de Asfalto',
      title: 'Transporte Especializado de Asfalto',
      subtitle: 'Garantizamos la temperatura y calidad perfecta para sus proyectos viales',
      buttonText: 'Solicitar Cotización',
      buttonLink: '/contact'
    },
    { 
      src: '/images/example2.jpg', 
      alt: 'ISBASAC - Transporte de Maquinaria',
      title: 'Transporte de Maquinaria Pesada',
      subtitle: 'Equipos especializados y personal capacitado para cargas excepcionales',
      buttonText: 'Ver Servicios',
      buttonLink: '/services'
    },
    { 
      src: '/images/example3.jpg', 
      alt: 'ISBASAC - Alquiler de Equipos',
      title: 'Alquiler de Equipos de Construcción',
      subtitle: 'Maquinaria moderna con mantenimiento incluido y flexibilidad total',
      buttonText: 'Conocer Equipos',
      buttonLink: '/gallery'
    },
  ];

  const services = [
    {
      id: 1,
      title: "Consultoría Empresarial",
      description: "Estrategias personalizadas para optimizar procesos y aumentar la eficiencia de tu empresa",
      image: "/images/example1.jpg",
      features: ["Análisis especializado", "Planes estratégicos", "Seguimiento continuo"]
    },
    {
      id: 2,
      title: "Transformación Digital",
      description: "Moderniza tu negocio con tecnología de vanguardia y procesos digitales eficientes",
      image: "/images/example2.jpg",
      features: ["Automatización", "Cloud Computing", "Integración de sistemas"]
    },
    {
      id: 3,
      title: "Gestión de Proyectos",
      description: "Administración profesional de proyectos con metodologías ágiles y resultados garantizados",
      image: "/images/example3.jpg",
      features: ["Metodologías ágiles", "Control de calidad", "Entrega a tiempo"]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ana Martínez",
      location: "CEO, TechCorp",
      text: "ISBASAC transformó completamente nuestros procesos. Su consultoría fue clave para nuestro crecimiento del 40% este año.",
      rating: 5,
      image: "/images/example1.jpg"
    },
    {
      id: 2,
      name: "Roberto Silva",
      location: "Director, InnovateLab",
      text: "El equipo de ISBASAC superó nuestras expectativas. La transformación digital fue impecable y sin interrupciones.",
      rating: 5,
      image: "/images/example2.jpg"
    },
    {
      id: 3,
      name: "Carmen Torres",
      location: "Gerente, StartupPro",
      text: "Profesionales excepcionales. Su gestión de proyectos nos permitió lanzar al mercado 3 meses antes de lo previsto.",
      rating: 5,
      image: "/images/example3.jpg"
    },
    {
      id: 4,
      name: "Miguel Vargas",
      location: "Fundador, EcoSolutions",
      text: "ISBASAC no solo entregó resultados, sino que nos educó en el proceso. Ahora somos una empresa completamente digital.",
      rating: 5,
      image: "/images/example1.jpg"
    }
  ];

  const features = [
    {
      icon: "💼",
      title: "Experiencia Comprobada",
      description: "Más de 10 años ayudando a empresas a alcanzar sus objetivos con soluciones innovadoras"
    },
    {
      icon: "🚀",
      title: "Tecnología de Vanguardia",
      description: "Implementamos las últimas tecnologías y metodologías para mantener tu empresa competitiva"
    },
    {
      icon: "🎯",
      title: "Resultados Medibles",
      description: "Nos enfocamos en KPIs claros y resultados tangibles que impacten positivamente tu negocio"
    },
    {
      icon: "🤝",
      title: "Compromiso Total",
      description: "Trabajamos como una extensión de tu equipo, comprometidos con el éxito de tu empresa"
    },
    {
      icon: "📊",
      title: "Análisis Profundo",
      description: "Diagnósticos detallados y estrategias basadas en datos para optimizar cada proceso"
    },
    {
      icon: "⚡",
      title: "Implementación Ágil",
      description: "Metodologías ágiles que garantizan entregas rápidas y adaptación a los cambios del mercado"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Carousel Section */}
      <div className="relative w-full">
        <Carousel images={carouselImages} interval={4000} />
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales diseñadas para impulsar el crecimiento y la eficiencia de tu empresa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold transition shadow-lg"
            >
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">¿Por Qué Elegir ISBASAC?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Combinamos experiencia, tecnología e innovación para entregar resultados excepcionales que transforman empresas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimonios reales de empresas que han transformado su negocio con ISBASAC
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">100+</div>
              <div className="text-lg">Proyectos Exitosos</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-lg">Satisfacción del Cliente</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-teal-400 mb-2">50+</div>
              <div className="text-lg">Empresas Transformadas</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-lg">Soporte Disponible</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Empresa?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Únete a las empresas que ya han revolucionado su negocio con ISBASAC. 
            Tu transformación empresarial comienza con una simple consulta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 font-semibold transition shadow-lg text-lg"
            >
              Consulta Gratuita
            </Link>
            <Link 
              href="/about" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-8 py-4 text-white font-semibold transition text-lg"
            >
              Conocer Más
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
