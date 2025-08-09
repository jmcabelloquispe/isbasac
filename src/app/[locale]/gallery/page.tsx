import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import Footer from '@/components/layout/Footer';

export default function GalleryPage() {
  const t = useTranslations('gallery');

  // Datos de ejemplo para la galería
  const galleryImages = [
    {
      id: 1,
      src: '/images/example1.jpg',
      alt: 'Pesca deportiva en Pucusana',
      title: 'Pesca Deportiva',
      category: 'fishing'
    },
    {
      id: 2,
      src: '/images/example2.jpg',
      alt: 'Capitán experto en el mar',
      title: 'Capitanes Expertos',
      category: 'crew'
    },
    {
      id: 3,
      src: '/images/example3.jpg',
      alt: 'Embarcación en el océano',
      title: 'Nuestras Embarcaciones',
      category: 'boats'
    },
    {
      id: 4,
      src: '/images/example1.jpg',
      alt: 'Gran captura del día',
      title: 'Capturas Increíbles',
      category: 'fishing'
    },
    {
      id: 5,
      src: '/images/example2.jpg',
      alt: 'Amanecer en Pucusana',
      title: 'Amaneceres Únicos',
      category: 'landscape'
    },
    {
      id: 6,
      src: '/images/example3.jpg',
      alt: 'Equipo de pesca profesional',
      title: 'Equipo Profesional',
      category: 'equipment'
    },
    {
      id: 7,
      src: '/images/example1.jpg',
      alt: 'Clientes felices con su pesca',
      title: 'Clientes Satisfechos',
      category: 'clients'
    },
    {
      id: 8,
      src: '/images/example2.jpg',
      alt: 'Vista panorámica del puerto',
      title: 'Puerto de Pucusana',
      category: 'landscape'
    },
    {
      id: 9,
      src: '/images/example3.jpg',
      alt: 'Peces recién capturados',
      title: 'Pesca Fresca',
      category: 'fishing'
    }
  ];

  const categories = [
    { id: 'all', name: 'Todas', count: galleryImages.length },
    { id: 'fishing', name: 'Pesca', count: galleryImages.filter(img => img.category === 'fishing').length },
    { id: 'boats', name: 'Embarcaciones', count: galleryImages.filter(img => img.category === 'boats').length },
    { id: 'crew', name: 'Tripulación', count: galleryImages.filter(img => img.category === 'crew').length },
    { id: 'landscape', name: 'Paisajes', count: galleryImages.filter(img => img.category === 'landscape').length },
    { id: 'clients', name: 'Clientes', count: galleryImages.filter(img => img.category === 'clients').length },
    { id: 'equipment', name: 'Equipos', count: galleryImages.filter(img => img.category === 'equipment').length }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-cyan-700 text-white py-20">
        <div className="max-w-[1920px] mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 uppercase">
            Galería de Fotos
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Descubre la belleza de Pucusana y revive las mejores experiencias de pesca deportiva 
            a través de nuestra colección de fotografías únicas.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/contact" 
              className="bg-orange-600 hover:bg-orange-700 px-8 py-4 text-white font-semibold rounded-lg transition shadow-lg"
            >
              Reserva tu Experiencia
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-[1920px] mx-auto px-8">
          {/* Category Filters */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Explora Nuestras Aventuras
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id} 
                  className="bg-white hover:bg-blue-600 hover:text-white border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full transition font-medium shadow-sm"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                      <p className="text-sm">Ver más</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-600 capitalize">{image.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg">
              Cargar Más Fotos
            </button>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-[1920px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Aventuras Realizadas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">1000+</div>
              <div className="text-gray-300">Peces Capturados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-400 mb-2">200+</div>
              <div className="text-gray-300">Clientes Felices</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Disponibilidad</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-[1920px] mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para tu Próxima Aventura?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a nosotros y vive experiencias únicas en las aguas de Pucusana. 
            ¡Tu próxima gran captura te está esperando!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition shadow-lg"
            >
              Contactar Ahora
            </Link>
            <Link 
              href="/services" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-semibold transition"
            >
              Ver Servicios
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
