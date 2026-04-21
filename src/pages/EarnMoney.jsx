import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SiteContext } from '../context/SiteContext';
import { Zap, BarChart2, Banknote, Rocket, GraduationCap, ClipboardList, LayoutDashboard, LifeBuoy, BrainCircuit } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const EarnMoney = () => {
  const location = useLocation();
  const { siteName } = useContext(SiteContext);
  const ctaLink = "https://conectaseminuevos.com";
  const videoId = "Dm5ENrpycxQ"; 

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const benefits = [
    { icon: <Zap className="h-10 w-10 text-amber-500" />, text: "Registro inteligente en 1 minuto" },
    { icon: <BarChart2 className="h-10 w-10 text-amber-500" />, text: "Seguimiento en tiempo real" },
    { icon: <Banknote className="h-10 w-10 text-amber-500" />, text: "Recibe tu pago en 48 horas" },
  ];

  const testimonials = [
    { text: "Nunca imaginé que ganar dinero por internet fuera tan real hasta que usé esta plataforma. Sin invertir un peso, solo conectando gente.", author: "Ana Rodríguez, Conectora" },
    { text: "La plataforma es súper intuitiva. La inteligencia artificial te sugiere qué decir y cómo prospectar mejor.", author: "Iván Palacios, Emprendedor Digital" },
    { text: "En 48 horas recibí mis primeros $10,000. Es la forma más segura de generar ingresos extra online.", author: "Mariana López, Nueva Conectora" },
  ];

  const toolkit = [
    { icon: <GraduationCap className="h-10 w-10 text-amber-500" />, title: "Academia del Conector", text: "Aprende estrategias digitales probadas para encontrar referidos sin salir de casa." },
    { icon: <BrainCircuit className="h-10 w-10 text-amber-500" />, title: "Asistente con IA", text: "Nuestra tecnología de inteligencia artificial te ayuda a redactar los mensajes perfectos para WhatsApp." },
    { icon: <LayoutDashboard className="h-10 w-10 text-amber-500" />, title: "Panel de Control", text: "Monitorea tus ganancias online en tiempo real con total transparencia." },
    { icon: <LifeBuoy className="h-10 w-10 text-amber-500" />, title: "Soporte Humano 24/7", text: "Aunque usamos mucha tecnología, siempre hay un experto listo para ayudarte." },
  ];

  // Schema.org for a LocalBusiness with a Service offer tailored for "Make Money Online" intent
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Programa de Afiliados Conecta Seminuevos",
    "provider": {
      "@type": "LocalBusiness",
      "name": siteName,
      "image": "https://horizons-cdn.hostinger.com/6224f76d-ecf5-45af-9c0f-743e5ebf8984/b4d3b845b40978d0e126afc9d55daac7.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ensenada",
        "addressRegion": "Baja California",
        "addressCountry": "MX"
      }
    },
    "description": "Plataforma para ganar dinero por internet recomendando compra y venta de autos. Gana comisiones de $10,000 MXN por referido exitoso.",
    "areaServed": "Baja California",
    "serviceType": "Affiliate Marketing Program",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "MXN",
      "description": "Registro gratuito al programa de socios"
    },
    "potentialAction": {
      "@type": "JoinAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": ctaLink
      }
    }
  };

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Cómo Ganar Dinero por Internet en México | {siteName}</title>
        <meta name="description" content="Descubre cómo ganar dinero por internet de forma segura con Conecta Seminuevos. Gana $10,000 MXN por referido usando nuestra plataforma con inteligencia artificial. ¡Regístrate gratis!" />
        <meta name="keywords" content="ganar dinero por internet, ingresos extra online, programa de afiliados autos, ganar dinero desde casa, inteligencia artificial ventas" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <link rel="canonical" href={`https://seminuevosbaja.com.mx${location.pathname}`} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Seminuevos Baja" />
        <meta property="og:url" content={`https://seminuevosbaja.com.mx${location.pathname}`} />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/6224f76d-ecf5-45af-9c0f-743e5ebf8984/f929719291db3722f5d8881d2469bbe0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/6224f76d-ecf5-45af-9c0f-743e5ebf8984/f929719291db3722f5d8881d2469bbe0.png" />
      </Helmet>

      <div className="bg-brand-blue text-white">
        {/* Hero Section */}
        <motion.section 
          className="min-h-[70vh] flex items-center justify-center text-center bg-white py-20 px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-brand-gray-title leading-tight"
              variants={itemVariants}
            >
              La mejor forma de <span className="text-amber-500 block sm:inline">ganar dinero por internet</span> en México
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 font-medium mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Transforma tus contactos en ingresos reales. Utiliza nuestra plataforma potenciada por <span className="font-bold text-amber-600">inteligencia artificial</span> para conectar compradores y vendedores de autos, y gana comisiones desde tu celular.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold text-lg py-6 px-8 rounded-lg shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-1"
              >
                <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                  Empezar a ganar ahora
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section 
          className="py-16 md:py-24 bg-gray-50 text-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegir este método online?</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Olvídate de encuestas mal pagadas o estafas piramidales. Este es un negocio real respaldado por una agencia automotriz líder.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow" 
                  variants={itemVariants}
                >
                  <div className="bg-brand-blue/5 p-4 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold">{benefit.text}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Video Section */}
        <motion.section 
          className="py-16 md:py-24 text-center bg-white text-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Cómo funciona el sistema</h2>
            <p className="text-gray-600 mb-8">Mira en 60 segundos cómo puedes empezar a generar ingresos hoy mismo.</p>
            
            <div className="max-w-xs mx-auto aspect-[9/16] shadow-2xl rounded-2xl overflow-hidden border-8 border-gray-900 bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Cómo ganar dinero por internet con Conecta Seminuevos"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.section>

        {/* Toolkit Section */}
        <motion.section 
          className="py-16 md:py-24 bg-brand-blue text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Herramientas digitales para tu éxito</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                No necesitas experiencia previa. Te damos acceso gratuito a herramientas avanzadas, incluyendo asistentes de <span className="text-amber-400 font-bold">IA (Inteligencia Artificial)</span> para maximizar tus resultados.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {toolkit.map((tool, index) => (
                <motion.div 
                  key={index} 
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors" 
                  variants={itemVariants}
                >
                  <div className="bg-brand-blue-darker p-3 rounded-lg inline-block mb-4 shadow-lg">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{tool.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{tool.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          className="py-16 md:py-24 bg-gray-50 text-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-center text-3xl font-bold mb-12">Casos de éxito reales</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100 flex flex-col relative" 
                  variants={itemVariants}
                >
                  <div className="absolute top-4 left-6 text-6xl text-amber-100 font-serif leading-none">"</div>
                  <p className="text-gray-700 font-medium italic relative z-10 mb-6 pt-4">{testimonial.text}</p>
                  <div className="mt-auto flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-sm mr-3">
                      {testimonial.author.charAt(0)}
                    </div>
                    <span className="text-sm font-bold text-gray-900">{testimonial.author}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section 
          className="py-20 bg-gray-900 text-white text-center px-4 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 flex flex-col items-center gap-2">
              <span className="text-amber-500 uppercase tracking-wider text-sm font-bold">Oportunidad Limitada</span>
              Empieza a ganar dinero por internet hoy
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Únete a los más de 100 conectores que ya están generando ingresos extra cada semana desde su celular.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold text-xl py-8 px-12 rounded-full shadow-lg hover:shadow-amber-500/50 transition-all transform hover:scale-105"
            >
              <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                <Rocket className="mr-2 h-6 w-6" />
                Registrarme Gratis
              </a>
            </Button>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default EarnMoney;