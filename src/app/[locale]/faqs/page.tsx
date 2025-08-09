'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Footer from '@/components/layout/Footer';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function FAQsPage() {
  const t = useTranslations('faqs');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "¿Qué tipo de peces puedo capturar en Pucusana?",
      answer: "En las aguas de Pucusana puedes capturar una gran variedad de especies como corvina, lenguado, pejerrey, caballa, bonito, atún, perico y ocasionalmente marlin. La temporada y las condiciones del mar influyen en la disponibilidad de cada especie.",
      category: "pesca"
    },
    {
      id: 2,
      question: "¿Necesito experiencia previa para pescar con ustedes?",
      answer: "No es necesario tener experiencia previa. Nuestros capitanes expertos te guiarán en todo momento, desde el manejo del equipo hasta las técnicas de pesca. Ofrecemos servicios tanto para principiantes como para pescadores experimentados.",
      category: "experiencia"
    },
    {
      id: 3,
      question: "¿Qué incluye el servicio de pesca deportiva?",
      answer: "Nuestro servicio incluye: embarcación equipada, capitán experto, equipo de pesca profesional (cañas, carretes, señuelos), combustible, seguro, refrigerio básico y limpieza del pescado capturado. También proporcionamos chalecos salvavidas y equipo de seguridad.",
      category: "servicios"
    },
    {
      id: 4,
      question: "¿Cuáles son los horarios de salida?",
      answer: "Tenemos salidas diarias desde las 6:00 AM hasta las 5:00 PM. La duración típica es de 4 a 8 horas dependiendo del paquete elegido. Recomendamos las salidas temprano en la mañana para mejores resultados de pesca.",
      category: "horarios"
    },
    {
      id: 5,
      question: "¿Qué debo llevar para la excursión?",
      answer: "Te recomendamos llevar: ropa cómoda, protector solar, gorra o sombrero, gafas de sol, cambio de ropa, toalla, agua adicional y cámara fotográfica. Nosotros proporcionamos todo el equipo de pesca necesario.",
      category: "preparacion"
    },
    {
      id: 6,
      question: "¿Cuánto cuesta el servicio de pesca deportiva?",
      answer: "Los precios varían según la duración, número de personas y tipo de embarcación. Las excursiones de medio día (4 horas) inician desde S/150 por persona, y las de día completo (8 horas) desde S/250. Contáctanos para cotizaciones personalizadas.",
      category: "precios"
    },
    {
      id: 7,
      question: "¿Qué pasa si el clima no es favorable?",
      answer: "La seguridad es nuestra prioridad. Si las condiciones climáticas no son seguras, reprogramamos la salida sin costo adicional. Nuestros capitanes evalúan las condiciones del mar cada día para garantizar una experiencia segura.",
      category: "clima"
    },
    {
      id: 8,
      question: "¿Pueden ir niños en las excursiones?",
      answer: "Sí, los niños son bienvenidos desde los 8 años en adelante, siempre acompañados por adultos responsables. Proporcionamos chalecos salvavidas especiales para niños y nuestros capitanes tienen experiencia trabajando con familias.",
      category: "familias"
    },
    {
      id: 9,
      question: "¿Cómo hago la reserva?",
      answer: "Puedes reservar llamándonos directamente, enviando un WhatsApp o completando el formulario en nuestra página de contacto. Requiere un adelanto del 50% para confirmar la reserva. Aceptamos efectivo y transferencias bancarias.",
      category: "reservas"
    },
    {
      id: 10,
      question: "¿Qué medidas de seguridad tienen?",
      answer: "Todas nuestras embarcaciones cuentan con: chalecos salvavidas certificados, radio de comunicación, GPS, botiquín de primeros auxilios, bengalas de emergencia y capitanes con licencia vigente. Además, seguimos todos los protocolos de seguridad marítima.",
      category: "seguridad"
    },
    {
      id: 11,
      question: "¿Puedo quedarme con el pescado que capture?",
      answer: "¡Por supuesto! Todo el pescado que captures es tuyo. Nuestro servicio incluye la limpieza básica del pescado. También podemos recomendarte restaurantes locales donde puedan preparar tu captura.",
      category: "pesca"
    },
    {
      id: 12,
      question: "¿Ofrecen servicios para grupos grandes?",
      answer: "Sí, manejamos grupos de hasta 20 personas con múltiples embarcaciones. Ofrecemos descuentos especiales para grupos, empresas y eventos. Contáctanos con anticipación para coordinar la logística.",
      category: "grupos"
    }
  ];

  const categories = [
    { id: 'all', name: 'Todas las Preguntas', count: faqs.length },
    { id: 'pesca', name: 'Pesca y Especies', count: faqs.filter(faq => faq.category === 'pesca').length },
    { id: 'servicios', name: 'Servicios Incluidos', count: faqs.filter(faq => faq.category === 'servicios').length },
    { id: 'precios', name: 'Precios y Reservas', count: faqs.filter(faq => faq.category === 'precios').length },
    { id: 'seguridad', name: 'Seguridad', count: faqs.filter(faq => faq.category === 'seguridad').length },
    { id: 'preparacion', name: 'Preparación', count: faqs.filter(faq => faq.category === 'preparacion').length },
    { id: 'otros', name: 'Otros', count: faqs.filter(faq => !['pesca', 'servicios', 'precios', 'seguridad', 'preparacion'].includes(faq.category)).length }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-cyan-700 text-white py-20">
        <div className="max-w-[1920px] mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 uppercase">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de pesca deportiva 
            en Pucusana. Si no encuentras lo que buscas, no dudes en contactarnos.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/contact" 
              className="bg-orange-600 hover:bg-orange-700 px-8 py-4 text-white font-semibold rounded-lg transition shadow-lg"
            >
              Contactar Directamente
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          {/* Category Filters */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Explora por Categorías
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition shadow-sm text-sm ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white hover:bg-blue-600 hover:text-white border-2 border-blue-600 text-blue-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div 
                key={faq.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-6 h-6 text-blue-600 transition-transform duration-200 ${
                          openFaq === faq.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                      <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full capitalize">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No se encontraron preguntas en esta categoría.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            ¿No Encontraste tu Respuesta?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está disponible para resolver cualquier duda específica que tengas 
            sobre nuestros servicios de pesca deportiva en Pucusana.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Llámanos</h3>
              <p className="text-gray-600">+51 987 654 321</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="text-green-600 mb-3">
                <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">WhatsApp</h3>
              <p className="text-gray-600">+51 987 654 321</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="text-orange-600 mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">info@pucusanafishing.com</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg"
            >
              Enviar Consulta
            </Link>
            <Link 
              href="/services" 
              className="bg-white border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 px-8 py-4 rounded-lg font-semibold transition"
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
