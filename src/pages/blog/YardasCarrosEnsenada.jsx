import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  ShieldAlert,
  FileWarning,
  Calendar,
  User,
  FileText,
  ShieldCheck,
  CreditCard,
  Search,
  XCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function YardasCarrosEnsenada() {
  const location = useLocation();
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>¿Buscas Yardas de Carros en Ensenada? Por Qué es Mejor Comprar en una Agencia Establecida</title>
        <meta name="description" content="Descubre por qué comprar en una agencia profesional es mejor que en yardas informales. Garantía, seguridad y transparencia en cada compra." />
        <meta property="og:title" content="¿Buscas Yardas de Carros en Ensenada? Por Qué es Mejor Comprar en una Agencia Establecida" />
        <meta property="og:description" content="Descubre por qué comprar en una agencia profesional es mejor que en yardas informales. Garantía, seguridad y transparencia en cada compra." />
        <meta property="og:type" content="article" />
        <meta name="author" content="Equipo de Edzwi" />
        <link rel="canonical" href={`https://seminuevosbaja.com.mx${location.pathname}`} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta property="og:url" content={`https://seminuevosbaja.com.mx${location.pathname}`} />
        <meta property="og:image" content="https://seminuevosbaja.com.mx/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="Seminuevos Baja" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb & Navigation */}
          <nav className="mb-8 flex items-center text-sm text-gray-500">
            <Link to="/blog" className="hover:text-brand-blue flex items-center transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Volver al Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Guía de Compra</span>
          </nav>

          {/* Header Section */}
          <header className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Guía de Compra
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                ¿Buscas Yardas de Carros en Ensenada? Descubre Por Qué una Agencia es tu Mejor Opción
              </h1>

              <div className="flex items-center justify-center space-x-6 text-gray-500 text-sm mb-8">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  11 de Febrero, 2026
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Por Equipo de Edzwi
                </div>
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  8 min de lectura
                </div>
              </div>

              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                <img
                  src="https://images.unsplash.com/photo-1549666012-706f9d45e412?q=80&w=2070&auto=format&fit=crop"
                  alt="Vista comparativa conceptual entre yarda informal y agencia de autos establecida"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>
          </header>

          {/* Content Body */}
          <div className="prose prose-lg prose-blue max-w-none text-gray-700">

            {/* Intro */}
            <motion.div {...fadeInUp} className="mb-12">
              <p className="lead text-xl md:text-2xl font-medium text-gray-800 leading-relaxed">
                Es muy común que, al buscar un vehículo económico, lo primero que venga a la mente sea buscar "yardas de carros en Ensenada". La promesa de precios bajos y tratos rápidos es atractiva. Sin embargo, existe una alternativa mucho más segura que a menudo se pasa por alto: las agencias de seminuevos establecidas.
              </p>
              <p className="mt-4">
                En este artículo, exploraremos las diferencias críticas entre comprar en una yarda informal y hacerlo en una agencia profesional. Verás por qué invertir en seguridad y respaldo no solo te da tranquilidad, sino que a la larga protege tu bolsillo de gastos imprevistos y problemas legales.
              </p>
            </motion.div>

            {/* Section 1: Qué son las yardas */}
            <motion.section {...fadeInUp} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-amber-500 w-2 h-8 mr-3 rounded-full"></span>
                ¿Qué son las Yardas de Carros en Ensenada?
              </h2>
              <p>
                Las "yardas" son lotes de autos, a menudo informales, que suelen operar con vehículos importados directamente de subastas de Estados Unidos. Generalmente, estos lugares se caracterizan por tener una gran cantidad de vehículos estacionados en terrenos de terracería o espacios abiertos sin infraestructura formal.
              </p>
              <p>
                La principal razón por la que la gente busca <strong>yardas ensenada</strong> es el precio. Suelen ofrecer vehículos a costos que parecen gangas. Sin embargo, estos autos frecuentemente se venden "como están" (as-is), sin reparaciones previas, sin detallado y, lo más preocupante, sin un historial claro de por qué terminaron en una subasta en primer lugar.
              </p>
            </motion.section>

            {/* Section 2: Riesgos */}
            <motion.section {...fadeInUp} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-amber-500 w-2 h-8 mr-3 rounded-full"></span>
                Los Riesgos de Comprar en Yardas Informales
              </h2>
              <p className="mb-6">
                Aunque el precio inicial puede ser bajo, los costos ocultos y los riesgos legales pueden convertir esa "oportunidad" en una pesadilla. Aquí te detallamos los peligros más comunes:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-xl border border-red-100 shadow-sm">
                  <div className="flex items-center mb-3">
                    <ShieldAlert className="h-6 w-6 text-red-600 mr-2" />
                    <h3 className="font-bold text-lg text-red-900">Sin Garantía</h3>
                  </div>
                  <p className="text-sm text-red-800">
                    Una vez que sacas el auto de la yarda, estás por tu cuenta. Si el motor falla a los dos días, no hay a quién reclamar. La venta suele ser final y sin responsabilidad para el vendedor.
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border border-red-100 shadow-sm">
                  <div className="flex items-center mb-3">
                    <FileWarning className="h-6 w-6 text-red-600 mr-2" />
                    <h3 className="font-bold text-lg text-red-900">Documentación Dudosa</h3>
                  </div>
                  <p className="text-sm text-red-800">
                    Muchos autos en yardas informales tienen títulos "Salvage" (pérdida total) no declarados o problemas con la importación definitiva, lo que te puede causar problemas legales graves.
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border border-red-100 shadow-sm">
                  <div className="flex items-center mb-3">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                    <h3 className="font-bold text-lg text-red-900">Fallas Ocultas</h3>
                  </div>
                  <p className="text-sm text-red-800">
                    Sin una inspección profesional, es imposible saber si el auto sufrió daños por inundación, choques estructurales mal reparados o si el odómetro fue alterado.
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border border-red-100 shadow-sm">
                  <div className="flex items-center mb-3">
                    <XCircle className="h-6 w-6 text-red-600 mr-2" />
                    <h3 className="font-bold text-lg text-red-900">Sin Servicio Post-venta</h3>
                  </div>
                  <p className="text-sm text-red-800">
                    Las yardas no suelen contar con talleres propios ni personal de atención al cliente para ayudarte con trámites, placas o dudas mecánicas después de la compra.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Section 3: Ventajas Agencia */}
            <motion.section {...fadeInUp} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-amber-500 w-2 h-8 mr-3 rounded-full"></span>
                Ventajas de Comprar en una Agencia Profesional
              </h2>
              <p className="mb-6">
                A diferencia de la informalidad de una yarda, una agencia establecida opera bajo estándares de calidad y legalidad estrictos. Al elegir una agencia, obtienes:
              </p>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 block text-lg">Garantía por Escrito</strong>
                      <span className="text-gray-600">Todos nuestros vehículos cuentan con garantía mecánica. No compramos problemas, y por lo tanto, no te vendemos problemas.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 block text-lg">Transparencia Total</strong>
                      <span className="text-gray-600">Te mostramos el historial real del vehículo, el reporte de REPUVE y el estado mecánico actual sin esconder detalles.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 block text-lg">Documentación Verificada</strong>
                      <span className="text-gray-600">Cada papel es revisado por expertos para asegurar que la importación es legal y que no tendrás problemas para emplacar a tu nombre.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 block text-lg">Atención Profesional</strong>
                      <span className="text-gray-600">Desde la primera visita hasta la entrega de llaves, recibirás un trato digno, asesoría experta y acompañamiento en todo el proceso.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Section 4: Seguridad y Legalidad */}
            <motion.section {...fadeInUp} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-amber-500 w-2 h-8 mr-3 rounded-full"></span>
                Seguridad y Legalidad: Lo Que No Obtienes en Yardas
              </h2>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <p className="mb-4">
                    La seguridad no es solo que el auto tenga bolsas de aire. Se trata de la <strong>seguridad jurídica</strong> de tu patrimonio. En una agencia establecida, estás protegido por contratos legales, facturas formales y la Ley Federal de Protección al Consumidor.
                  </p>
                  <p>
                    En una yarda informal, muchas transacciones se hacen de palabra o con contratos simples que no ofrecen protección real en caso de fraude. Comprar en agencia elimina el riesgo de adquirir un auto con reporte de robo o con embargos pendientes.
                  </p>
                </div>
                <div className="flex-shrink-0 bg-brand-blue/5 p-6 rounded-full">
                  <ShieldCheck className="h-24 w-24 text-brand-blue" />
                </div>
              </div>
            </motion.section>

            {/* Section 5: Financiamiento */}
            <motion.section {...fadeInUp} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-amber-500 w-2 h-8 mr-3 rounded-full"></span>
                Financiamiento: Otra Ventaja de las Agencias
              </h2>
              <p className="mb-6">
                Las yardas suelen operar estrictamente en efectivo: "traes el dinero, te llevas el auto". Esto te obliga a descapitalizarte completamente. Las agencias profesionales, en cambio, te ofrecen herramientas financieras.
              </p>

              <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center mb-4">
                  <CreditCard className="h-8 w-8 text-amber-500 mr-3" />
                  <h3 className="text-2xl font-bold text-amber-500">¿Por qué pagar todo de contado?</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Con nosotros, puedes dar un enganche accesible y pagar el resto en mensualidades cómodas. Esto te permite acceder a un auto mejor, más nuevo y más seguro que el que podrías comprar solo con tus ahorros en efectivo en una yarda.
                </p>
                <Button asChild className="bg-amber-500 hover:bg-amber-600 text-brand-blue font-bold w-full md:w-auto">
                  <Link to="/financiamiento">
                    Visita nuestra página de Financiamiento
                  </Link>
                </Button>
              </div>
            </motion.section>

            {/* Section 6: Comparativa Table */}
            <motion.section {...fadeInUp} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Comparativa Rápida: Yardas vs. Agencia Profesional
              </h2>
              <div className="overflow-x-auto rounded-xl shadow-lg">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-blue text-white">
                      <th className="p-4 font-bold text-lg">Característica</th>
                      <th className="p-4 font-bold text-lg bg-red-900/50">Yarda Informal</th>
                      <th className="p-4 font-bold text-lg bg-green-900/50">Agencia Profesional</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-gray-900">Garantía Mecánica</td>
                      <td className="p-4 text-red-600 font-bold flex items-center"><XCircle className="w-4 h-4 mr-2" /> No / Limitada</td>
                      <td className="p-4 text-green-600 font-bold flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Sí, por escrito</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-gray-900">Documentación</td>
                      <td className="p-4 text-red-600 font-bold flex items-center"><AlertTriangle className="w-4 h-4 mr-2" /> Incompleta / Dudosa</td>
                      <td className="p-4 text-green-600 font-bold flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Completa y Verificada</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-gray-900">Financiamiento</td>
                      <td className="p-4 text-red-600 font-bold flex items-center"><XCircle className="w-4 h-4 mr-2" /> Solo efectivo</td>
                      <td className="p-4 text-green-600 font-bold flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Crédito Disponible</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-gray-900">Protección Legal</td>
                      <td className="p-4 text-red-600 font-bold flex items-center"><XCircle className="w-4 h-4 mr-2" /> Nula</td>
                      <td className="p-4 text-green-600 font-bold flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Contrato Adhesión PROFECO</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-gray-900">Revisión Mecánica</td>
                      <td className="p-4 text-red-600 font-bold flex items-center"><AlertTriangle className="w-4 h-4 mr-2" /> 'Como esté'</td>
                      <td className="p-4 text-green-600 font-bold flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> Inspección Previa</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.section>

            {/* Final CTA */}
            <motion.div
              {...fadeInUp}
              className="bg-gradient-to-r from-brand-blue to-blue-900 text-white p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Tu Tranquilidad Vale Más</h2>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                  Si buscabas "yardas de carros en ensenada", ahora sabes que hay una opción mejor. Nuestra agencia te ofrece la seguridad, garantía y transparencia que las yardas informales no pueden proporcionar. No arriesgues tu patrimonio.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-brand-blue font-extrabold text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                    <Link to="/inventario">
                      Explora Nuestro Inventario de Autos Confiables
                      <Search className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue font-bold text-lg px-8 py-6 h-auto">
                    <Link to="/quienes-somos">
                      Conoce Nuestra Agencia
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>

          </div>
        </article>
      </div>
    </>
  );
}