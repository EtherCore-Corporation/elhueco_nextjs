import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <Link href="/">
            <Image
              src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/logos/ELHUECO_LOGO_Emayuscula_EL-lateral_BLANCO.png"
              alt="El Hueco Logo"
              width={120}
              height={40}
              className="w-auto h-8 md:h-10"
              priority
              quality={100}
              unoptimized
            />
          </Link>
        </div>

        {/* Menú hamburguesa para móvil */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menú móvil */}
        <div
          className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-40 ${isMenuOpen ? 'flex' : 'hidden'} items-center justify-center transition-all duration-300`}
        >
          <nav className="flex flex-col items-center gap-6 font-heading">
            {[
              { name: 'inicio', path: '/' },
              { name: 'espacios', path: '/espacios' },
              { name: 'servicios', path: '/servicios' },
              { name: 'equipo', path: '/#equipo' },
              { name: 'dossier', path: '/dossier' },
              { name: 'contacto', path: '/contacto' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-white hover:text-accent-400 transition-colors capitalize text-xl tracking-wide py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/reservas"
              className="bg-white text-black px-8 py-3 mt-4 hover:bg-gray-200 transition-colors capitalize text-lg tracking-wide w-full max-w-xs text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Reservar
            </a>
          </nav>
        </div>

        {/* Menú desktop */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-8 font-heading">
            {[
              { name: 'inicio', path: '/' },
              { name: 'espacios', path: '/espacios' },
              { name: 'servicios', path: '/servicios' },
              { name: 'equipo', path: '/#equipo' },
              { name: 'dossier', path: '/dossier' },
              { name: 'contacto', path: '/contacto' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-white hover:text-accent-400 transition-colors capitalize text-sm tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <a
            href="/reservas"
            className="bg-white text-black px-4 py-2 hover:bg-gray-200 transition-colors capitalize text-sm tracking-wide"
          >
            Reservar
          </a>
        </div>
      </div>
    </header>
  )
} 