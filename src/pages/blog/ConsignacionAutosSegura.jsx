import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, CheckCircle, AlertTriangle, HelpCircle, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/hooks/useSEO';

export default function ConsignacionAutosSegura() {
  return (
    <>
      <PageSEO
        customConfig={{
          title: 'Consignar mi Auto en Ensenada | GuÃ­a Segura | Seminuevos Baja',
          description:
            'Descubre cÃ³mo funciona la consignaciÃ³n de autos en Tijuana y Ensenada. Aprende por quÃ© es la forma mÃ¡s segura y rentable de vender tu vehÃ­culo seminuevo sin riesgos.',
          ogDescription:
            'Descubre cÃ³mo funciona la consignaciÃ³n de autos en Ensenada. La forma mÃ¡s segura y rentable de vender tu vehÃ­culo seminuevo sin riesgos.',
          keywords:
            'consignaciÃ³n de autos, vender auto seguro, consignar auto tijuana, consignar auto ensenada, venta autos seminuevos baja california',
          canonical: '/blog/consignacion-autos-segura',
          ogType: 'article',
          ogImage: '/og-image.png',
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb & Back Button */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              to="/blog"
              className="inline-flex items-center text-gray-600 hover:text-brand-blue transition-colors font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Blog
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <header className="relative bg-brand-blue text-white py-16 md:py-24">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3dab?q=80&w=1974&auto=format&fit=crop"
              alt="Handshake over a deal"
              className="w-full h-full object-cover opacity-20"
              width="1974"
              height="1316"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent"></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-amber-500 text-brand-blue text-xs font-bold tracking-wider uppercase">
              Guía Definitiva
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              ¿Qué es la consignación de autos y por qué es la forma más segura de vender en Baja California?
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base text-gray-300 font-medium">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4 text-amber-500" />
                Seminuevos Baja
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-amber-500" />
                28 de Enero, 2026
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-amber-500" />
                6 min de lectura
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-gray-800 leading-relaxed">

          <div className="prose prose-lg prose-blue mx-auto">
            <p className="text-xl text-gray-600 font-medium mb-8">
              Vender un auto usado puede ser una experiencia estresante: llamadas a deshoras, regateos interminables y el riesgo constante de fraudes. La consignación surge como la solución profesional a estos problemas.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              ¿Qué significa consignar un auto?
            </h2>
            <p className="mb-6">
              La consignación de autos es un acuerdo comercial donde tú (el propietario) cedes temporalmente la gestión de venta de tu vehículo a un experto (agencia o concesionario), sin transferir la propiedad legal hasta que se concrete la venta final.
            </p>
            <p className="mb-6">
              Básicamente, ellos se encargan de todo el "trabajo sucio" —publicidad, mostrar el auto, negociar, gestionar créditos— a cambio de una comisión o una tarifa fija, mientras tú mantienes la titularidad de tu patrimonio hasta recibir el pago.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 my-8">
              <h3 className="text-lg font-bold text-blue-900 mb-2 flex items-center">
                <ShieldCheck className="mr-2 h-5 w-5" />
                Dato Clave
              </h3>
              <p className="text-blue-800 m-0">
                Al consignar, <strong>nunca entregas los documentos originales</strong> (factura) hasta que el dinero de la venta esté seguro en tu cuenta o en la de la agencia. Es el método más seguro contra extorsiones y robos.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              ¿Qué hace realmente una empresa de consignación?
            </h2>
            <p className="mb-4">
              Muchos piensan que solo "estacionan" el auto en un lote, pero el servicio profesional va mucho más allá:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span><strong>Preparación Profesional:</strong> Lavado, detallado y fotografías de alta calidad para que tu auto luzca impecable.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span><strong>Marketing Masivo:</strong> Inversión en publicidad pagada en redes sociales (Meta Ads, Google Ads) y portales premium como MercadoLibre.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span><strong>Filtro de Seguridad:</strong> El equipo de ventas atiende a los curiosos y solo agenda citas con compradores reales y verificados. Tú no tienes que recibir extraños en tu casa.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span><strong>Opciones de Financiamiento:</strong> Las agencias pueden ofrecer crédito bancario para tu auto, lo que triplica las posibilidades de venta, ya que el 80% de los mexicanos compra a crédito.</span>
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              ¿Por qué no venderlo por tu cuenta?
            </h2>
            <p className="mb-6">
              Intentar vender por cuenta propia en Facebook Marketplace o poniendo un signo de pesos en el vidrio conlleva riesgos significativos en Baja California:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                <h4 className="font-bold text-red-700 flex items-center mb-2">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Riesgo de Seguridad
                </h4>
                <p className="text-sm text-red-600">
                  Citarse con desconocidos para mostrar el auto o realizar pruebas de manejo te expone a robos o situaciones peligrosas.
                </p>
              </div>
              <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                <h4 className="font-bold text-red-700 flex items-center mb-2">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Fraudes Financieros
                </h4>
                <p className="text-sm text-red-600">
                  Cheques sin fondos, transferencias "fantasma" o billetes falsos son tácticas comunes contra vendedores particulares.
                </p>
              </div>
            </div>

            {/* CTA INTERMEDIO — justo después de la sección de riesgos */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center my-10">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ¿No quieres correr ese riesgo?
              </h3>
              <p className="text-gray-600 mb-6">
                En Seminuevos Baja filtramos a los compradores, garantizamos el pago y nos encargamos de todo el proceso. Sin riesgos, sin estrés.
              </p>
              <Button asChild size="lg" className="bg-amber-500 text-brand-blue hover:bg-amber-400 font-bold text-lg px-8">
                <Link to="/consigna">
                  Consignar mi auto ahora →
                </Link>
              </Button>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              ¿Cuánto cuesta consignar un auto?
            </h2>
            <p className="mb-6">
              Las tarifas varían, pero generalmente funcionan bajo dos esquemas:
            </p>
            <ol className="list-decimal pl-5 space-y-3 mb-6 text-gray-700 font-medium">
              <li><strong>Comisión porcentual:</strong> Usualmente entre el 5% y el 10% del valor final de venta.</li>
              <li><strong>Sobreprecio:</strong> Tú estableces cuánto quieres recibir (precio neto) y la agencia vende el auto por un monto superior; la diferencia es su ganancia.</li>
            </ol>
            <p className="mb-6">
              Considera que, aunque pagues una comisión, las agencias suelen vender los autos a un <strong>precio de mercado más alto</strong> (entre 10% y 15% más) que un particular, gracias a la confianza que generan, las garantías y las facilidades de crédito. Al final, a menudo recibes lo mismo o más que vendiendo por tu cuenta, pero sin el riesgo ni el trabajo.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Preguntas frecuentes sobre consignación en Baja California
            </h2>
            <div className="space-y-6">
              <div>
                <h4 className="flex items-center text-lg font-bold text-gray-900 mb-2">
                  <HelpCircle className="h-5 w-5 text-amber-500 mr-2" />
                  ¿Puedo seguir usando mi auto mientras está consignado?
                </h4>
                <p className="text-gray-600 ml-7">
                  Depende de la agencia. En Seminuevos Baja, preferimos tener el auto en nuestro piso de ventas para mostrarlo inmediatamente a clientes interesados, lo que acelera la venta. Sin embargo, existen modalidades de "consignación virtual" donde conservas el auto y solo lo traes para citas confirmadas.
                </p>
              </div>
              <div>
                <h4 className="flex items-center text-lg font-bold text-gray-900 mb-2">
                  <HelpCircle className="h-5 w-5 text-amber-500 mr-2" />
                  ¿Qué pasa si mi auto es "chocolate" o decreto?
                </h4>
                <p className="text-gray-600 ml-7">
                  La mayoría de las agencias establecidas solo aceptan autos nacionales o importados legalmente con pedimento definitivo. Los autos regularizados por decreto tienen restricciones para financiamiento bancario, lo que complica su consignación formal.
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
              Conclusión
            </h2>
            <p className="mb-6">
              Consignar tu auto no es un gasto, es una inversión en tu seguridad y tranquilidad. En un mercado tan dinámico como el de Tijuana y Ensenada, contar con el respaldo de profesionales que filtren a los compradores y garanticen el pago es invaluable. Si valoras tu tiempo y tu seguridad, la consignación es, sin duda, la mejor ruta.
            </p>
            <p className="mb-8">
              Si prefieres una venta inmediata con pago el mismo día, también puedes conocer nuestra opción de{' '}
              <Link to="/vender" className="text-amber-600 font-semibold hover:underline">
                compra directa de autos en Ensenada
              </Link>
              {' '}— sin esperas ni comisiones.
            </p>

            <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">¿Listo para vender sin riesgos?</h3>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                En Seminuevos Baja nos encargamos de todo. Deja tu auto en manos de expertos y recibe tu dinero seguro.
              </p>
              <Button asChild size="lg" className="bg-amber-500 text-brand-blue hover:bg-amber-400 font-bold text-lg px-8">
                <Link to="/consigna">
                  Consignar mi auto ahora
                </Link>
              </Button>
            </div>

          </div>
        </article>

        {/* Related Articles */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Artículos relacionados</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link to="/blog/comprar-auto-seminuevo-sin-ser-estafado" className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1595872018818-97555653a011?q=80&w=2070&auto=format&fit=crop"
                    alt="Inspection"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    Comprar un Auto Seminuevo sin Ser Estafado
                  </h3>
                  <p className="text-sm text-gray-500">Guía de Seguridad • 7 min lectura</p>
                </div>
              </Link>

              <Link to="/blog/autos-chocolate-vs-nacionales" className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1553440569-b2dcba423693?q=80&w=2070&auto=format&fit=crop"
                    alt="Cars comparison"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    Autos "Chocolate" vs. Nacionales: La Verdad
                  </h3>
                  <p className="text-sm text-gray-500">Legal • 9 min lectura</p>
                </div>
              </Link>

              <Link to="/blog/guia-seminuevos-ensenada" className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
                    alt="Driving"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    Guía Definitiva de Seminuevos en Ensenada
                  </h3>
                  <p className="text-sm text-gray-500">Guía de Compra • 8 min lectura</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
