'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import Carousel from '@/components/ui/Carousel';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  const images = [
    { src: '/images/example.jpg', alt: 'Foto 1' },
    { src: '/images/example2.jpg', alt: 'Foto 2' },
    { src: '/images/example3.jpg', alt: 'Foto 3' },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center py-0 px-0">
      <div className="w-full max-w-4xl">
        <Carousel images={images} interval={4000} />
      </div>
      {/* Puedes agregar aquí tu contenido adicional */}
      {/* <div className="max-w-4xl mx-auto text-center backdrop-blur-sm bg-black/40 rounded-xl p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('title')}</h1>
        <p className="text-lg md:text-xl mb-8">{t('subtitle')}</p>
        <Link
          href={`/${locale}/contact`}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-semibold rounded transition"
        >
          {t('button')}
        </Link>
      </div> */}
    </section>
  );
}
