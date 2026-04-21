import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { ChevronRight, DollarSign, Shield, Clock, CheckCircle, TrendingUp, Banknote, HelpCircle, Phone } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import { useGoogleAnalytics } from '../../hooks/useGoogleAnalytics';

export default function VenderAutoFinanciado() {
  const location = useLocation();
  const { trackWhatsAppClick } = useGoogleAnalytics();

  const officePhoneNumber = '6469778808';
  const whatsappNumber = '6461616696';

  const handleWhatsAppHero = () => {
    trackWhatsAppClick('WhatsApp', 'Blog Vender Auto Financiado Hero');
    const message = 'Hola, leí su artículo sobre vender mi auto financiado y me gustaría recibir más información.';
    window.open(`https://wa.me/52${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Vender mi Auto Financiado en Ensenada | Seminuevos Baja",
    "description": "¿Tienes un auto financiado? Seminuevos Baja compra autos con deuda. Pagamos directamente al banco. Recibe la diferencia. ¡Vende tu auto hoy!",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    "author": {
      "@type": "Organization",
      "name": "Seminuevos Baja"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Seminuevos Baja",
      "logo": {
        "@type": "ImageObject",
        "url": "https://horizons-cdn.hostinger.com/6224f76d-ecf5-45af-9c0f-743e5ebf8984/b4d3b845b40978d0e126afc9d55daac7.png"
      }
    },
    "datePublished": "2026-03-04",
    "dateModified": "2026-04-06",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://seminuevosbaja.com.mx${location.pathname}`
    }
  };

  const benefits = [
    { icon: <Clock className="h-8 w-8" />, title: "Proceso Rápido y Seguro", desc: "Sin esperas innecesarias. Evaluamos y resolvemos en tiempo récord." },
    { icon: <Banknote className="h-8 w-8" />, title: "Pagamos Directo al Banco", desc: "Nosotros nos encargamos de liquidar tu deuda con la financiera." },
    { icon: <DollarSign className="h-8 w-8" />, title: "Recibe la Diferencia", desc: "Si el valor de tu auto supera la deuda, te pagamos el resto de inmediato." },
    { icon: <Shield className="h-8 w-8" />, title: "Sin Trámites Complicados", desc: "Gestionamos todo el papeleo legal para que no te preocupes por nada." },
    { icon: <CheckCircle className="h-8 w-8" />, title: "Autos Nacionales de Agencia", desc: "Compramos vehículos nacionales con historial claro y facturas originales." },
    { icon: <TrendingUp className="h-8 w-8" />, title: "Evaluación Justa", desc: "Ofrecemos precios competitivos basados en el mercado real de Ensenada." }
  ];

  const steps = [
    { num: "01", title: "Contacta a Seminuevos Baja", desc: "Envíanos un mensaje con los datos básicos de tu vehículo y la deuda pendiente." },
    { num: "02", title: "Evaluamos tu Vehículo", desc: "Realizamos una revisión física y documental para determinar el valor justo de mercado." },
    { num: "03", title: "Ofrecemos un Precio Justo", desc: "Te presentamos una oferta transparente basada en el estado de tu auto." },
    { num: "04", title: "Pagamos Directamente al Banco", desc: "Liquidamos el saldo adeudado con tu institución financiera sin intermediarios." },
    { num: "05", title: "Recibe la Diferencia", desc: "Te transferimos el dinero restante a tu cuenta bancaria de forma segura." }
  ];

  const faqs = [
    {
      q: "¿Puedo vender mi auto si aún debo más de lo que vale?",
      a: "Sí es posible, pero en ese caso, llamado 'capital negativo', el propietario tendría que cubrir la diferencia restante para poder liberar la factura. Nuestros asesores pueden analizar tu caso específico."
    },
    {
      q: "¿Cuánto tiempo toma el trámite?",
      a: "Una vez acordado el precio, el proceso suele tomar entre 3 y 5 días hábiles, dependiendo de los tiempos de respuesta de tu institución financiera para liberar la factura."
    },
    {
      q: "¿Qué documentos necesito?",
      a: "Necesitarás tu identificación oficial, comprobante de domicilio, tarjeta de circulación, y el último estado de cuenta de tu crédito automotriz."
    },
    {
      q: "¿Compran autos fronterizos financiados?",
      a: "Actualmente, nuestra política se centra en la compra de vehículos nacionales de agencia para garantizar la máxima seguridad legal a nuestros futuros compradores."
    }
  ];

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Vender mi Auto Financiado en Ensenada | Seminuevos Baja</title>
        <meta name="description" content="¿Tienes un auto financiado? Seminuevos Baja compra autos con deuda. Pagamos directamente al banco. Recibe la diferencia. ¡Vende tu auto hoy en Ensenada!" />
        <meta name="keywords" content="vender auto financiado, auto con deuda, seminuevos baja, Ensenada, liquidar credito automotriz" />
        <link rel="canonical" href={`https://seminuevosbaja.com.mx${location.pathname}`} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />

        <meta property="og:locale" content="es_MX" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Seminuevos Baja" />
        <meta property="og:title" content="Vender mi Auto Financiado en Ensenada | Seminuevos Baja" />
        <meta property="og:description" content="¿Tienes un auto financiado? Seminuevos Baja compra autos con deuda. Pagamos directamente al banco y tú recibes la diferencia. Rápido y seguro en Ensenada." />
        <meta property="og:url" content={`https://seminuevosbaja.com.mx${location.pathname}`} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vender mi Auto Financiado en Ensenada | Seminuevos Baja" />
        <meta name="twitter:description" content="¿Tienes un auto financiado? Seminuevos Baja compra autos con deuda. Pagamos directamente al banco y tú recibes la diferencia. Rápido y seguro en Ensenada." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop" />

        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-gray-50 pb-20">

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
              alt="Documentos financieros y llaves de auto sobre una mesa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-brand-blue/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
            <nav aria-label="breadcrumb" className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-300">
                <li><Link to="/" className="hover:text-amber-500 transition-colors">Inicio</Link></li>
                <li><ChevronRight className="h-4 w-4" /></li>
                <li><Link to="/blog" className="hover:text-amber-500 transition-colors">Blog</Link></li>
                <li><ChevronRight className="h-4 w-4" /></li>
                <li className="text-white font-medium line-clamp-1" aria-current="page">Vender Auto Financiado</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-400 text-sm font-bold mb-6 tracking-wide uppercase">
                Guía de Venta
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Vender mi Auto Financiado en Ensenada
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium leading-relaxed">
                ¿Aún debes tu auto? Nosotros lo compramos. Pagamos directamente a tu banco y tú recibes la diferencia en efectivo. Rápido, seguro y sin complicaciones.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={handleWhatsAppHero} size="lg" className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Cotizar mi Auto Hoy
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-6 rounded-xl transition-all">
                  <Link to="/vender">Conoce el Proceso General</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

          <motion.section {...fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <HelpCircle className="w-8 h-8 mr-3 text-brand-blue" />
              ¿Qué es un Auto Financiado?
            </h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>
                Un auto financiado es aquel que fue adquirido mediante un crédito automotriz (con un banco o financiera) y cuya deuda aún no ha sido liquidada en su totalidad. En estos casos, la institución financiera mantiene la factura original en su poder como garantía de pago.
              </p>
              <p>
                Muchos propietarios creen que no pueden vender su auto hasta terminar de pagarlo, lo cual es un <strong>mito</strong>. Es completamente legal y posible vender un vehículo con deuda pendiente, pero hacerlo por cuenta propia puede ser un proceso complejo, lleno de desconfianza por parte de los compradores particulares y trámites burocráticos.
              </p>
              <p>
                Si prefieres una alternativa más sencilla, también puedes conocer nuestra{' '}
                <Link to="/vender" className="text-amber-600 font-semibold hover:underline">
                  opción de venta directa de autos en Ensenada
                </Link>
                {' '}para autos sin deuda pendiente.
              </p>
            </div>
          </motion.section>

          <motion.section {...fadeInUp} className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              ¿Por Qué Vender tu Auto Financiado con Seminuevos Baja?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-amber-500 mb-4 bg-amber-50 inline-block p-3 rounded-xl">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeInUp} className="mb-16 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Documentos necesarios para vender tu auto</h2>
            <p className="text-lg text-gray-600 mb-6">
              Para garantizar que recibas el mejor trato, en <strong>Seminuevos Baja</strong> realizamos una evaluación transparente y justa. Para iniciar, requerimos la siguiente documentación básica:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-gray-900 block text-lg">Factura de Origen:</strong>
                  <span className="text-gray-600">Copia de la factura de origen (o factura original). Entendemos que en autos financiados la original la tiene la financiera.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-gray-900 block text-lg">Estado de Cuenta Actual:</strong>
                  <span className="text-gray-600">Documento que muestre el saldo liquidatorio exacto de tu crédito a la fecha.</span>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-brand-blue mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-gray-900 block text-lg">Documentación Oficial:</strong>
                  <span className="text-gray-600">Identificación oficial vigente, tarjeta de circulación y comprobante de domicilio.</span>
                </div>
              </li>
            </ul>
          </motion.section>

          <motion.section {...fadeInUp} className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">¿Cómo Funciona la Venta?</h2>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-blue text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">
                    {step.num}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeInUp} className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Vender tu Auto Financiado vs. Hacerlo Solo</h2>
            <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200 bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-blue text-white">
                    <th className="p-4 font-bold border-b border-white/20">Característica</th>
                    <th className="p-4 font-bold border-b border-white/20 border-l border-white/10">Con Seminuevos Baja</th>
                    <th className="p-4 font-bold border-b border-white/20 border-l border-white/10 bg-gray-800 text-gray-300">Venta a Particular</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">Seguridad Financiera</td>
                    <td className="p-4 text-green-600 font-medium flex items-center"><CheckCircle className="w-5 h-5 mr-2" /> Trato 100% seguro</td>
                    <td className="p-4 border-l border-gray-100 text-red-500">Riesgo de fraude alto</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">Liquidación al Banco</td>
                    <td className="p-4 text-green-600 font-medium flex items-center"><CheckCircle className="w-5 h-5 mr-2" /> Directa y garantizada</td>
                    <td className="p-4 border-l border-gray-100">El comprador particular desconfía</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">Trámites Legales</td>
                    <td className="p-4 text-green-600 font-medium flex items-center"><CheckCircle className="w-5 h-5 mr-2" /> Nosotros nos encargamos</td>
                    <td className="p-4 border-l border-gray-100">Por tu cuenta</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">Tiempo de Venta</td>
                    <td className="p-4 text-green-600 font-medium flex items-center"><CheckCircle className="w-5 h-5 mr-2" /> Inmediato</td>
                    <td className="p-4 border-l border-gray-100">Semanas o meses</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>

          <motion.section {...fadeInUp} className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-md p-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-b-0">
                  <AccordionTrigger className="text-left font-bold text-lg text-gray-800 hover:text-brand-blue px-6 py-4 rounded-lg hover:bg-gray-50 transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed px-6 pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.section>

        </div>

        {/* CTA Section */}
        <motion.section
          {...fadeInUp}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
        >
          <div className="bg-gradient-to-r from-brand-blue to-blue-900 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-amber-500 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para Vender tu Auto Financiado?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                No dejes que una deuda te impida estrenar o recuperar tu dinero. Contáctanos hoy mismo y recibe una cotización sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={`tel:${officePhoneNumber}`}
                  className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-8 py-6 rounded-xl shadow-xl text-lg w-full sm:w-auto transition-all"
                >
                  <Phone className="mr-2 h-5 w-5" /> Llamar Ahora
                </a>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-brand-blue hover:text-brand-blue hover:bg-white bg-white font-bold px-8 py-6 rounded-xl text-lg w-full sm:w-auto"
                >
                  <Link to="/contacto">Ir a Contacto</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}