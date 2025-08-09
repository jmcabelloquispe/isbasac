'use client';

import React from 'react';
import { useState } from 'react';

interface CarouselProps {
  images: { 
    src: string; 
    alt?: string;
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
  }[];
  interval?: number; // en ms, opcional
}

export default function Carousel({ images, interval = 4000 }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  // Cambio automático de imagen
  React.useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-175 overflow-hidden">
      {images.map((img, idx) => (
        <div key={img.src} className="absolute w-full h-full">
          <img
            src={img.src}
            alt={img.alt || `Imagen ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
          />
          {/* Overlay de texto */}
          {img.title && (
            <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-700 ${idx === current ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-center text-white px-8 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wide">
                  {img.title}
                </h2>
                {img.subtitle && (
                  <p className="text-lg md:text-xl text-gray-200 mb-6">
                    {img.subtitle}
                  </p>
                )}
                {img.buttonText && img.buttonLink && (
                  <a 
                    href={img.buttonLink}
                    className="inline-block bg-secondary hover:bg-orange-700 text-white font-semibold px-8 py-3 transition-colors shadow-lg hover:shadow-xl"
                  >
                    {img.buttonText}
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
      {/* Botones de navegación */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white  p-2 w-10 h-10 flex items-center justify-center hover:bg-black/60 transition-colors"
        onClick={() => setCurrent((current - 1 + images.length) % images.length)}
        aria-label="Anterior"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white  p-2 w-10 h-10 flex items-center justify-center hover:bg-black/60 transition-colors"
        onClick={() => setCurrent((current + 1) % images.length)}
        aria-label="Siguiente"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {/* Indicadores */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === current ? 'bg-white' : 'bg-white/50'}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Ir a la imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}