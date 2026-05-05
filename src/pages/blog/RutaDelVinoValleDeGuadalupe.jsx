import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, CheckCircle, AlertTriangle, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/hooks/useSEO';

export default function RutaDelVinoValleDeGuadalupe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageSEO
        customConfig={{
          title: 'Ruta del Vino: Â¿QuÃ© auto necesitas para el Valle de Guadalupe? | Seminuevos Baja',
          description:
            'Â¿Planeas visitar el Valle de Guadalupe? Descubre quÃ© tipo de auto es ideal para los caminos de terracerÃ­a. Toyota RAV4, Honda CR-V, Nissan X-Trail y mÃ¡s.',
          ogTitle:
            'Ruta del Vino: Â¿QuÃ© auto necesitas realmente para visitar el Valle de Guadalupe?',
          keywords:
            'Valle de Guadalupe, Ruta del Vino, Toyota RAV4, Honda CR-V, Nissan X-Trail, VW Tiguan, Baja California, turismo en auto',
          canonical: '/blog/ruta-del-vino-valle-de-guadalupe-auto-ideal',
          ogType: 'article',
          ogImage: '/og-image.png',
        }}
      />

      <article className="min-h-screen bg-gray-50 pt-20 pb-16">
        {/* Hero Image */}
        <div className="w-full h-[400px] relative mb-8">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            className="w-full h-full object-cover" 
            alt="Carretera escénica hacia el Valle de Guadalupe con viñedos de fondo"
            src="https://images.unsplash.com/photo-1684598593545-12e206d579d1?w=1600&q=75&auto=format&fit=crop"
            width="1600"
            height="900"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <span className="inline-block bg-amber-500 text-brand-blue px-4 py-1 rounded-full text-sm font-bold mb-4">
                Turismo y Consejos
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight shadow-sm">
                Ruta del Vino: ¿Qué auto necesitas realmente para visitar el Valle de Guadalupe?
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-6 text-gray-200 font-medium">
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2 text-amber-400" />
                  <span>Equipo Seminuevos Baja</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-amber-400" />
                  <span>05 de Diciembre, 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-amber-400" />
                  <span>8 min de lectura</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog/" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-bold mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Blog
          </Link>

          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 border border-gray-100">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl md:text-2xl font-medium text-gray-800 mb-8">
                El Valle de Guadalupe se ha convertido en el destino enológico más importante de México y uno de los favoritos en Baja California. Sin embargo, entre copa y copa, surge una pregunta práctica que pocos se hacen hasta que ya están en camino: <strong>¿Mi auto aguantará el viaje?</strong>
              </p>
              
              <p className="mb-6">
                Llegar al Valle desde Tijuana o Ensenada es un placer visual por la Carretera Escénica, pero una vez que te adentras en las delegaciones de San Antonio de las Minas, El Porvenir o Francisco Zarco, la historia cambia. Muchos de los mejores viñedos y restaurantes campestres se encuentran al final de caminos de terracería que pueden ser desafiantes para un sedán urbano promedio.
              </p>

              {/* Section 1 */}
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <MapPin className="h-8 w-8 text-amber-500 mr-3" />
                El terreno del Valle: ¿Por qué importa tu auto?
              </h2>
              <p className="mb-6">
                La infraestructura del Valle de Guadalupe es una mezcla de carreteras pavimentadas en buen estado y caminos vecinales de tierra (terracería). En temporada seca, estos caminos son polvorientos y llenos de "lavaderos" (corrugaciones en la tierra que hacen vibrar todo el vehículo). En temporada de lluvias (invierno), pueden convertirse en lodazales resbalosos.
              </p>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
                <h3 className="text-lg font-bold text-amber-800 mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  El factor clave: Altura libre al suelo
                </h3>
                <p className="text-amber-900/80 m-0">
                  Más que tracción 4x4 (que ayuda, pero no siempre es obligatoria), lo que realmente necesitas es <strong>despeje del suelo</strong>. Un auto deportivo o un sedán muy bajo corre el riesgo de golpear la parte inferior (cárter, escape, fascia) con piedras sueltas o al cruzar vados profundos.
                </p>
              </div>

              {/* Section 2: Comparativa */}
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-8">
                Comparativa de vehículos para la Ruta del Vino
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    🚗 Sedanes Compactos
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 font-bold mr-2">✓</span>
                      <span>Excelentes para la carretera de cuota y autopista.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 font-bold mr-2">✓</span>
                      <span>Ahorro de combustible en el trayecto largo.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 font-bold mr-2">✗</span>
                      <span>Sufren mucho en entradas de terracería (ej. Finca Altozano, Deckman's).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 font-bold mr-2">✗</span>
                      <span>Suspensión rígida hace el viaje incómodo en tierra.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    🚙 SUVs y Crossovers (Recomendado)
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 font-bold mr-2">✓</span>
                      <span>Altura ideal para pasar baches y piedras sin preocupaciones.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 font-bold mr-2">✓</span>
                      <span>Suspensión diseñada para absorber mejor las irregularidades.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 font-bold mr-2">✓</span>
                      <span>Espacio para compras (cajas de vino) y amigos.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 font-bold mr-2">!</span>
                      <span>Consumo ligeramente mayor, pero vale la pena por el confort.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Top Recommendations */}
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Los mejores autos seminuevos para dominar el Valle
              </h2>
              <p className="mb-8">
                Si vives en Baja California y visitas el Valle frecuentemente, estos son los vehículos que nuestros clientes prefieren por su equilibrio entre confort en carretera y resistencia en terracería:
              </p>

              <div className="space-y-8">
                {/* 1. Toyota RAV4 */}
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 transition-transform hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    1. Toyota RAV4
                  </h3>
                  <p className="text-gray-600 mb-4">
                    La opción práctica por excelencia. Increíblemente confiable, con buena altura al suelo y suspensión resistente. Es ideal si buscas economía de combustible sin sacrificar la capacidad de entrar a cualquier vinícola, sin importar qué tan escondida esté.
                  </p>
                </div>

                {/* 2. Volkswagen Tiguan */}
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 transition-transform hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    2. Volkswagen Tiguan
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Espaciosa y con un manejo sólido estilo europeo. Su motor turbo ofrece excelente respuesta para los rebases en la carretera escénica, y su altura es perfecta para evitar golpes en los caminos irregulares. Además, su cajuela es muy amplia para las cajas de vino.
                  </p>
                </div>

                {/* 3. Nissan X-Trail */}
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 transition-transform hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    3. Nissan X-Trail
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Una favorita en México por su confort superior. Sus asientos "Zero Gravity" hacen que el viaje desde Tijuana o Mexicali sea muy relajado. Cuenta con excelente visibilidad y muchas versiones incluyen techo panorámico, ideal para disfrutar las vistas de los viñedos.
                  </p>
                </div>

                {/* 4. Honda CR-V */}
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 transition-transform hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    4. Honda CR-V
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Líder en su clase por espacio interior y confiabilidad a prueba de balas. Es suave en carretera pavimentada pero lo suficientemente robusta cuando el pavimento termina. Una apuesta segura para familias que buscan durabilidad y valor de reventa.
                  </p>
                </div>
              </div>

              {/* Section 4: Consejos */}
              <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                Consejos de Seguridad antes de salir
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p><strong>Revisa tus llantas:</strong> Las piedras afiladas son comunes. Asegúrate de tener buena profundidad de dibujo y lleva siempre tu refacción inflada.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p><strong>Frenos al 100%:</strong> La bajada de la Misión o las curvas de Salsipuedes exigen frenos en óptimas condiciones.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p><strong>Sistema de enfriamiento:</strong> En verano, el Valle puede superar los 35°C. Tu radiador y anticongelante deben estar perfectos.</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p><strong>Conductor designado:</strong> El consejo más importante. Si vas a degustar, asegúrate de que quien maneje se mantenga sobrio o contraten un chofer.</p>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-brand-blue/5 border-t-4 border-brand-blue p-8 rounded-lg mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusión</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Visitar el Valle de Guadalupe es una experiencia inolvidable que se disfruta mejor cuando viajas con seguridad y comodidad. Aunque puedes llegar en casi cualquier auto, un vehículo con mayor altura y robustez como una SUV te dará la tranquilidad de explorar cada rincón sin miedo a dañar tu coche.
                </p>
                <p className="text-lg text-gray-700 font-bold">
                  ¿Listo para tu próxima aventura en el Valle pero te falta el auto adecuado?
                </p>
                
                <div className="mt-8 text-center">
                  <Link to="/inventario/">
                    <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-brand-blue font-bold text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                      Ver SUVs disponibles (RAV4, CR-V, X-Trail, Tiguan)
                    </Button>
                  </Link>
                  <p className="text-sm text-gray-500 mt-4">
                    Contamos con financiamiento y garantía para que viajes seguro.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </article>
    </>
  );
}
