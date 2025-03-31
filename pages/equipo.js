import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';

export default function Equipo() {
  return (
    <>
      <Head>
        <title>Nuestro Equipo | El Hueco</title>
        <meta name="description" content="Conoce al equipo de El Hueco, un grupo de profesionales creativos en Madrid." />
      </Head>

      <Header />

      <section className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <div className="mb-5">
              <Image
                src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/logos//ELHUECO_LOGO_Emayuscula_EL-lateral.png"
                alt="El Hueco Logo"
                width={120}
                height={40}
                className="mb-10"
                quality={100}
              />
            </div>
            
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-4">
                <p className="text-sm text-black uppercase tracking-wide">
                  UNA GUÍA DE<br />
                  GENTE NORMAL<br />
                  CON IDEAS NO<br />
                  MUY NORMALES
                </p>
              </div>
              <div className="col-span-12 md:col-span-8">
                <h1 className="text-6xl md:text-8xl font-bold text-black tracking-tight mb-8 md:mb-16">
                  GET TO<br />
                  KNOW<br />
                  OUR TEAM
                </h1>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-12">
            {/* Irene Bona */}
            <div>
              <div className="aspect-[3/4] relative mb-4 bg-gray-100">
                <Image
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/team/irene.jpg"
                  alt="Irene Bona"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <h2 className="text-xl font-bold text-black">Irene Bona</h2>
              <p className="text-sm text-black mb-2">Directora de Marketing</p>
              <div className="flex gap-3">
                <a href="#" className="text-sm text-black hover:text-gray-600">IN</a>
                <a href="#" className="text-sm text-black hover:text-gray-600">IG</a>
              </div>
            </div>

            {/* Paolo Zapico */}
            <div>
              <div className="aspect-[3/4] relative mb-4 bg-gray-100">
                <Image
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/team/paolo.jpg"
                  alt="Paolo Zapico"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <h2 className="text-xl font-bold text-black">Paolo Zapico</h2>
              <p className="text-sm text-black mb-2">Director de Logística</p>
              <div className="flex gap-3">
                <a href="#" className="text-sm text-black hover:text-gray-600">IN</a>
                <a href="#" className="text-sm text-black hover:text-gray-600">IG</a>
              </div>
            </div>

            {/* Rodrigo Torrejón */}
            <div>
              <div className="aspect-[3/4] relative mb-4 bg-gray-100">
                <Image
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/team/rodrigo.jpg"
                  alt="Rodrigo Torrejón"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <h2 className="text-xl font-bold text-black">Rodrigo Torrejón</h2>
              <p className="text-sm text-black mb-2">Director de Producción</p>
              <div className="flex gap-3">
                <a href="#" className="text-sm text-black hover:text-gray-600">IN</a>
                <a href="#" className="text-sm text-black hover:text-gray-600">IG</a>
              </div>
            </div>

            {/* Eduardo Gutiérrez */}
            <div>
              <div className="aspect-[3/4] relative mb-4 bg-gray-100">
                <Image
                  src="https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/team/eduardo.jpg"
                  alt="Eduardo Gutiérrez"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <h2 className="text-xl font-bold text-black">Eduardo Gutiérrez</h2>
              <p className="text-sm text-black mb-2">Director Comercial</p>
              <div className="flex gap-3">
                <a href="#" className="text-sm text-black hover:text-gray-600">IN</a>
                <a href="#" className="text-sm text-black hover:text-gray-600">IG</a>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <Link 
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-black text-white py-3 px-8 rounded-full hover:bg-black/90 transition-colors"
            >
              <span className="text-sm">Agenda una reunión con nosotros</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 