import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  const t = useTranslations('about');

  const teamMembers = [
    {
      id: 1,
      name: "Capitán Carlos Mendoza",
      role: "Fundador y Capitán Principal",
      experience: "25 años de experiencia",
      image: "/images/example1.jpg",
      description: "Nacido y criado en Pucusana, Carlos conoce cada rincón de estas aguas como la palma de su mano. Ha dedicado su vida a la pesca deportiva y a compartir su pasión con visitantes de todo el mundo."
    },
    {
      id: 2,
      name: "Capitán Miguel Torres",
      role: "Capitán Senior",
      experience: "20 años de experiencia",
      image: "/images/example2.jpg",
      description: "Especialista en pesca de altura y navegación nocturna. Miguel ha guiado a cientos de pescadores en la captura de especies como atún, perico y marlin en las aguas profundas del Pacífico."
    },
    {
      id: 3,
      name: "Rosa Castillo",
      role: "Coordinadora de Servicios",
      experience: "10 años en turismo",
      image: "/images/example3.jpg",
      description: "Encargada de coordinar todas las actividades y garantizar que cada cliente tenga una experiencia memorable. Rosa se asegura de que cada detalle esté perfectamente organizado."
    },
    {
      id: 4,
      name: "Capitán Luis Vargas",
      role: "Capitán de Pesca Familiar",
      experience: "15 años de experiencia",
      image: "/images/example1.jpg",
      description: "Especialista en excursiones familiares y pesca para principiantes. Luis tiene un don especial para enseñar y hacer que tanto niños como adultos se diviertan al máximo."
    }
  ];

  const values = [
    {
      icon: "🌊",
      title: "Respeto por el Mar",
      description: "Practicamos pesca responsable y sostenible, respetando los ciclos naturales y preservando el ecosistema marino para futuras generaciones."
    },
    {
      icon: "👥",
      title: "Compromiso con el Cliente",
      description: "Cada cliente es único y nos esforzamos por brindar experiencias personalizadas que superen sus expectativas y creen recuerdos inolvidables."
    },
    {
      icon: "🛡️",
      title: "Seguridad Primero",
      description: "La seguridad de nuestros clientes es nuestra máxima prioridad. Mantenemos los más altos estándares de seguridad marítima en todas nuestras actividades."
    },
    {
      icon: "🏆",
      title: "Excelencia en el Servicio",
      description: "Nos esforzamos constantemente por mejorar nuestros servicios, equipos y técnicas para ofrecer la mejor experiencia de pesca deportiva del Perú."
    },
    {
      icon: "🤝",
      title: "Tradición Local",
      description: "Valoramos y preservamos las tradiciones pesqueras de Pucusana, combinando conocimiento ancestral con técnicas modernas de pesca deportiva."
    },
    {
      icon: "💚",
      title: "Responsabilidad Ambiental",
      description: "Estamos comprometidos con la conservación marina y educamos a nuestros clientes sobre la importancia de proteger nuestros océanos."
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Fundación del Club",
      description: "Nace Pucusana Fishing Club con la visión de ofrecer la mejor experiencia de pesca deportiva en el litoral peruano."
    },
    {
      year: "2024",
      title: "Primera Flota",
      description: "Adquisición de nuestras primeras embarcaciones equipadas con tecnología GPS y sonar para pesca profesional."
    },
    {
      year: "2024",
      title: "Certificaciones",
      description: "Obtención de todas las certificaciones de seguridad marítima y licencias operativas para turismo náutico."
    },
    {
      year: "2024",
      title: "Primeros Clientes",
      description: "Inicio de operaciones con nuestros primeros grupos de pescadores deportivos, estableciendo nuestro estándar de excelencia."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-900 to-cyan-700">
        <div className="absolute inset-0">
          <Image
            src="/images/example2.jpg"
            alt="Equipo Pucusana Fishing Club"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase">
              Sobre Nosotros
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Conoce la historia, misión y valores que hacen de Pucusana Fishing Club 
              tu mejor opción para la pesca deportiva en el Perú
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Pucusana Fishing Club nació en 2024 de la pasión compartida por el mar y la pesca deportiva. 
                  Fundado por el Capitán Carlos Mendoza, un pescador local con más de 25 años de experiencia, 
                  nuestro club representa la culminación de décadas de conocimiento del mar de Pucusana.
                </p>
                <p>
                  Ubicados en uno de los puertos pesqueros más tradicionales del Perú, hemos crecido desde 
                  una pequeña operación familiar hasta convertirnos en el referente de la pesca deportiva 
                  en el litoral sur de Lima. Nuestra filosofía se basa en combinar la experiencia tradicional 
                  de los pescadores locales con equipos modernos y estándares internacionales de seguridad.
                </p>
                <p>
                  Cada día trabajamos para honrar las tradiciones pesqueras de Pucusana mientras creamos 
                  experiencias únicas para pescadores de todos los niveles, desde principiantes hasta expertos 
                  que buscan el desafío de las especies más grandes del Pacífico peruano.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/example3.jpg"
                alt="Puerto de Pucusana"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Misión y Visión</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro compromiso con la excelencia y la sostenibilidad guía cada aspecto de nuestro servicio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-6 text-center">🎯</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Nuestra Misión</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Brindar experiencias excepcionales de pesca deportiva en las aguas de Pucusana, 
                combinando la expertise local con equipos modernos y altos estándares de seguridad, 
                mientras promovemos la pesca responsable y el respeto por el ecosistema marino.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-6 text-center">🌟</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Nuestra Visión</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                Ser reconocidos como el club de pesca deportiva líder en el Perú, 
                preservando las tradiciones pesqueras de Pucusana mientras establecemos 
                nuevos estándares de excelencia en turismo náutico sostenible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo diario y definen nuestra identidad como club
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 text-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{value.title}</h3>
                <p className="text-gray-700 text-center leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conoce a los profesionales que harán de tu experiencia de pesca una aventura inolvidable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-xs mb-3">{member.experience}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Hitos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El camino recorrido desde nuestros inicios hasta convertirnos en referentes de la pesca deportiva
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-6">
                  {milestone.year}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Nuestros Números</h2>
            <p className="text-xl text-gray-300">Cifras que reflejan nuestro compromiso y experiencia</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-lg">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">1000+</div>
              <div className="text-lg">Peces Capturados</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-teal-400 mb-2">15+</div>
              <div className="text-lg">Especies Diferentes</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-lg">Disponibilidad</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para Conocernos en Persona?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Ven y descubre por qué somos la mejor opción para tu aventura de pesca deportiva en Pucusana. 
            Nuestro equipo está esperando para darte la bienvenida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition shadow-lg text-lg"
            >
              Contáctanos
            </Link>
            <Link 
              href="/gallery" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-8 py-4 text-white rounded-lg font-semibold transition text-lg"
            >
              Ver Galería
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
