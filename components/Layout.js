import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

const Layout = ({ children }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }))

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
  const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

  return (
    <div className="min-h-screen bg-black text-white">
      <animated.div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: props.xy.to(trans1) }}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5" />
      </animated.div>

      <main className="min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          {children}
        </motion.div>
      </main>

      <footer className="bg-black border-t border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-orbitron mb-4 tracking-wide">El Hueco</h3>
              <p className="text-gray-400 text-sm mb-4 font-body">
                Un espacio creativo en Madrid, donde tus producciones cobran vida.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-orbitron mb-4 tracking-wide">Navegación</h3>
              <ul className="space-y-2 font-division">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Inicio</Link></li>
                <li><Link href="/espacios" className="text-gray-400 hover:text-white transition-colors">Espacios</Link></li>
                <li><Link href="/servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</Link></li>
                <li><Link href="/equipo" className="text-gray-400 hover:text-white transition-colors">Equipo</Link></li>
                <li><Link href="/dossier" className="text-gray-400 hover:text-white transition-colors">Dossier</Link></li>
                <li><Link href="/reservas" className="text-gray-400 hover:text-white transition-colors">Reservas</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-orbitron mb-4 tracking-wide">Servicios</h3>
              <ul className="space-y-2 font-division">
                <li><Link href="/servicios#fotografia" className="text-gray-400 hover:text-white transition-colors">Fotografía</Link></li>
                <li><Link href="/servicios#video" className="text-gray-400 hover:text-white transition-colors">Video</Link></li>
                <li><Link href="/servicios#streaming" className="text-gray-400 hover:text-white transition-colors">Streaming</Link></li>
                <li><Link href="/servicios#eventos" className="text-gray-400 hover:text-white transition-colors">Eventos</Link></li>
              </ul>
            </div>
            <div>
              <div className="space-y-4">
                <h3 className="text-lg font-orbitron mb-4 tracking-wide">Contacto</h3>
                <div className="space-y-2 font-body">
                  <a href="mailto:admin@el-hueco.es" className="block hover:text-accent-400">
                    admin@el-hueco.es
                  </a>
                  <a href="tel:+34622018042" className="block hover:text-accent-400">
                    +34 622 018 042
                  </a>
                  <p>Av. de Daroca, 34</p>
                  <p>28017 Madrid</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-500 font-body">
              © {new Date().getFullYear()} El Hueco Studio. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout 