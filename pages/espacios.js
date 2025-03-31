import Head from 'next/head'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '../lib/supabaseClient'

// Función para determinar la clase de aspecto según el índice
// Esta función alterna entre diferentes proporciones para crear una cuadrícula más interesante
const getAspectClass = (index) => {
  const classes = [
    'aspect-square', // 1:1
    'aspect-[4/3]',  // 4:3
    'aspect-[3/4]',  // 3:4
    'aspect-[16/9]', // 16:9
    'aspect-[4/5]',  // 4:5
  ];
  
  return classes[index % classes.length];
};

// Función auxiliar para garantizar que special_features es un array
const ensureArray = (possibleArray) => {
  if (!possibleArray) return [];
  if (Array.isArray(possibleArray)) return possibleArray;
  // Si es un string, intenta parsearlo como JSON
  if (typeof possibleArray === 'string') {
    try {
      const parsed = JSON.parse(possibleArray);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [possibleArray]; // Si no es parseable, devolvemos un array con el string
    }
  }
  return []; // Por defecto, devolvemos array vacío
};

// Get spaces data at build time
export async function getStaticProps() {
  const { data: spaces, error } = await supabase
    .from('spaces')
    .select('*')
    .order('id')

  if (error) {
    console.error('Error fetching spaces:', error)
    return {
      props: {
        spaces: []
      }
    }
  }

  // Asegurarse de que special_features es un array para cada espacio
  const processedSpaces = spaces.map(space => ({
    ...space,
    special_features: ensureArray(space.special_features)
  }));

  return {
    props: {
      spaces: processedSpaces
    },
    revalidate: 60 // Revalidate every minute
  }
}

export default function Espacios({ spaces }) {
  // Proporcionar datos de respaldo si no hay espacios
  const spacesWithFallback = spaces?.length > 0 ? spaces : [
    {
      id: 1,
      name: 'Estudio Principal',
      description: 'Espacio amplio y versátil con iluminación natural y artificial.',
      image_url: 'https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/ciclorama1.jpeg',
      special_features: ['Ciclorama blanco', 'Iluminación profesional', 'Camerinos']
    },
    {
      id: 2,
      name: 'Pasarela Técnica',
      description: 'Área con pasarela elevada ideal para fotografía de moda y eventos.',
      image_url: 'https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/pasarela1.jpg',
      special_features: ['Pasarela de 10m', 'Sistema de sonido', 'Iluminación LED RGB']
    },
    {
      id: 3,
      name: 'Área de Camerinos',
      description: 'Espacio dedicado para preparación de modelos y artistas.',
      image_url: 'https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/space_images/camerinos1.jpg',
      special_features: ['5 estaciones', 'Espejos con iluminación', 'Zona de vestuario']
    }
  ];

  return (
    <>
      <Head>
        <title>Espacios | El Hueco</title>
        <meta name="description" content="Descubre nuestros espacios versátiles para fotografía, video y eventos en El Hueco." />
      </Head>

      <Header />

      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-8">Nuestros Espacios</h1>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Descubre los espacios únicos que El Hueco tiene para ofrecer. Cada uno diseñado para potenciar tu creatividad.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mb-16">
            {spacesWithFallback.map((space, index) => {
              // Asegurarse de que special_features es un array también en el cliente
              const features = ensureArray(space.special_features);
              
              return (
                <div 
                  key={space.id}
                  className={`relative group overflow-hidden ${getAspectClass(index)}`}
                >
                  <Image
                    src={space.image_url}
                    alt={space.name}
                    width={800}
                    height={800}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-serif text-white mb-2">{space.name}</h2>
                        <p className="text-white/80 line-clamp-2 mb-4">{space.description}</p>
                        {features.length > 0 && (
                          <ul className="text-white/70 space-y-1">
                            {features.slice(0, 2).map((feature, i) => (
                              <li key={i} className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-white/70 rounded-full mr-2"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <Link 
                        href="/reservas" 
                        className="inline-block bg-white text-black py-2 px-4 text-sm hover:bg-gray-100 transition-colors"
                      >
                        Reservar espacio
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  )
} 