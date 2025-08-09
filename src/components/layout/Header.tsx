'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import logo from '@/assets/images/logo.png';
import Image from 'next/image';

const locales = ['es', 'en'];

export default function Header() {
  const t = useTranslations('nav'); // "nav" debe existir en tus mensajes
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    startTransition(() => {
      router.replace(segments.join('/'));
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full">
      {/* Top Bar - Info de contacto y idiomas */}
      <div className="bg-primary">
        <div className="max-w-[1920px] mx-auto flex flex-col sm:flex-row justify-between items-center py-2 px-4 sm:px-8 gap-2">
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-6 items-center text-white text-xs'>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span className="font-medium">+51 1 696-2709</span>
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span className="font-medium">info@isbasac.com</span>
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <span className="font-medium">Fundo Granja Uno Lt.12, Lurín - Lima</span>
            </span>
          </div>
          <div className="flex gap-2 items-center">
            {locales.map((lng) => (
              <button
                key={lng}
                onClick={() => changeLocale(lng)}
                className={`text-xs px-3 py-1 transition-colors font-medium ${
                  lng === locale ? 'bg-secondary text-white' : 'bg-primary text-gray-300 hover:bg-secondary hover:text-white'
                }`}
                disabled={isPending}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header - Logo y Navegación */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between py-4 px-4 sm:px-8">
          {/* Logo */}
          <div className='flex items-center'>
            <Link href={`/${locale}/`} onClick={closeMenu} className="flex items-center space-x-3">
              {/* <img 
                src="/images/logo.png" 
                alt="ISBASAC Logo" 
                className="h-12 sm:h-16 w-auto"
              /> */}
              <div className="hidden sm:block">
                <h1 className="text-xl sm:text-2xl font-bold text-secondary">ISBASAC</h1>
                <p className="text-xs sm:text-sm text-gray-600">Transporte y Equipos</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center text-sm font-medium gap-8 uppercase">
            <Link href={`/${locale}/`} className="text-primary hover:text-secondary transition-colors border-b-2 border-transparent hover:border-secondary">
              {t('home')}
            </Link>
            <Link href={`/${locale}/about`} className="text-primary hover:text-secondary transition-colors border-b-2 border-transparent hover:border-secondary">
              {t('about')}
            </Link>
            <div className="relative group">
              <button className="text-primary hover:text-secondary transition-colors border-b-2 border-transparent hover:border-secondary flex items-center uppercase">
                {t('services')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border border-gray-200 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href={`/${locale}/services/transport`} className="block px-4 py-2 text-sm text-primary hover:bg-blue-50 hover:text-blue-600">
                    Transporte de Asfalto
                  </Link>
                  <Link href={`/${locale}/services/machinery`} className="block px-4 py-2 text-sm text-primary hover:bg-blue-50 hover:text-blue-600">
                    Transporte de Maquinaria
                  </Link>
                  <Link href={`/${locale}/services/equipment`} className="block px-4 py-2 text-sm text-primary hover:bg-blue-50 hover:text-blue-600">
                    Alquiler de Equipos
                  </Link>
                  <Link href={`/${locale}/services/implements`} className="block px-4 py-2 text-sm text-primary hover:bg-blue-50 hover:text-blue-600">
                    Transporte de Implementos
                  </Link>
                </div>
              </div>
            </div>
            <Link href={`/${locale}/gallery`} className="text-primary hover:text-secondary transition-colors border-b-2 border-transparent hover:border-secondary">
              {t('gallery')}
            </Link>
            <Link href={`/${locale}/contact`} className="text-primary hover:text-secondary transition-colors border-b-2 border-transparent hover:border-secondary">
              {t('contact')}
            </Link>
            <Link 
              href={`/${locale}/contact`} 
              className="bg-primary text-white px-6 py-2  hover:bg-secondary transition-colors font-semibold text-xs"
            >
              COTIZAR AHORA
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white border-t border-gray-200 shadow-lg`}>
          <nav className="flex flex-col py-4 px-4 sm:px-8 space-y-3">
            <Link 
              href={`/${locale}/`} 
              className="py-3 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors uppercase text-sm font-medium border-l-4 border-transparent hover:border-blue-600"
              onClick={closeMenu}
            >
              {t('home')}
            </Link>
            <Link 
              href={`/${locale}/about`} 
              className="py-3 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors uppercase text-sm font-medium border-l-4 border-transparent hover:border-blue-600"
              onClick={closeMenu}
            >
              {t('about')}
            </Link>
            <div className="border-l-4 border-gray-300 pl-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{t('services')}</p>
              <div className="space-y-2 ml-2">
                <Link 
                  href={`/${locale}/services/transport`} 
                  className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                  onClick={closeMenu}
                >
                  Transporte de Asfalto
                </Link>
                <Link 
                  href={`/${locale}/services/machinery`} 
                  className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                  onClick={closeMenu}
                >
                  Transporte de Maquinaria
                </Link>
                <Link 
                  href={`/${locale}/services/equipment`} 
                  className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                  onClick={closeMenu}
                >
                  Alquiler de Equipos
                </Link>
                <Link 
                  href={`/${locale}/services/implements`} 
                  className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                  onClick={closeMenu}
                >
                  Transporte de Implementos
                </Link>
              </div>
            </div>
            <Link 
              href={`/${locale}/gallery`} 
              className="py-3 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors uppercase text-sm font-medium border-l-4 border-transparent hover:border-blue-600"
              onClick={closeMenu}
            >
              {t('gallery')}
            </Link>
            <Link 
              href={`/${locale}/contact`} 
              className="py-3 px-4 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors uppercase text-sm font-medium border-l-4 border-transparent hover:border-blue-600"
              onClick={closeMenu}
            >
              {t('contact')}
            </Link>
            <Link 
              href={`/${locale}/contact`} 
              className="mt-4 py-3 px-6 bg-blue-600 text-white text-center rounded-full hover:bg-blue-700 transition-colors font-semibold text-sm"
              onClick={closeMenu}
            >
              COTIZAR AHORA
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
