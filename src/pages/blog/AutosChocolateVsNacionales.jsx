import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, AlertTriangle, FileWarning, Search, Wrench, HeartHandshake as Handshake, TrendingUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function AutosChocolateVsNacionales() {
  const location = useLocation();
  const sections = [
    {
      title: 'Introducción: La Decisión que Define tu Tranquilidad al Volante',
      content: 'En las calles de Baja California, la tentación de un "auto chocolate" con un precio increíblemente bajo es fuerte. Pero, ¿realmente es un ahorro? En Seminuevos Baja, hemos visto las dos caras de la moneda: la tranquilidad de quien elige un auto nacional y las pesadillas de quienes se arriesgan con un vehículo de procedencia incierta. Esta no es una guía más. Es la verdad cruda sobre lo que nadie te dice de los autos "chocolate", basada en casos reales que atendemos todos los días en Tijuana y Ensenada.',
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
    },
    {
      title: '¿Qué es Exactamente un "Auto Chocolate"?',
      content: 'Un "auto chocolate" es un vehículo de origen extranjero (usualmente de EE. UU.) que ingresó a México sin pasar por los procesos de importación legal y aduanera. No tienen pedimento de importación, no están inscritos en el Registro Público Vehicular (REPUVE) de forma regular y su estatus legal es, en el mejor de los casos, precario.',
      icon: <FileWarning className="h-8 w-8 text-yellow-500" />,
    },
    {
      title: 'El Mito de la "Regularización Fácil" por Decreto',
      content: 'Los decretos presidenciales ofrecen una ventana para regularizar estos autos, pero no es una solución mágica. Muchos vehículos no califican por su año, marca, o por tener reporte de robo en EE. UU. Además, la regularización solo ampara la estancia en el país, pero no borra problemas mecánicos ocultos ni garantiza que puedas asegurarlo a valor comercial completo. Es una curita en una herida que puede ser mucho más profunda.',
      icon: <Search className="h-8 w-8 text-blue-500" />,
    },
    {
      title: 'Auto Nacional: ¿Qué Significa "Certeza Legal Total"?',
      content: 'Un auto nacional, ya sea fabricado en México o importado legalmente desde nuevo, ofrece algo que el dinero no siempre puede comprar: certeza. Tienen factura original (o refactura de empresa), pedimento de importación en regla, historial de tenencias y están inscritos correctamente en el REPUVE. Esto significa que su procedencia es 100% verificable y no tendrás sorpresas legales en el futuro.',
      icon: <ShieldCheck className="h-8 w-8 text-green-500" />,
    }
  ];

  const risks = [
    {
      title: '1. Riesgo de Fraude y Reporte de Robo',
      content: 'Muchos "chocolates" son vehículos "salvage" (chocados y reconstruidos) o, peor aún, tienen reporte de robo en Estados Unidos. Aunque lo "regularices", si el auto fue robado, puedes perderlo en un retén y enfrentar problemas legales. Un auto nacional con papeles en regla te protege de esto.',
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
    },
    {
      title: '2. Costos de Mantenimiento Imprevistos',
      content: 'El bajo precio inicial es un espejismo. Estos autos a menudo vienen con fallas mecánicas graves ocultas, desde transmisiones a punto de fallar hasta problemas eléctricos complejos. Las reparaciones pueden costar más que el "ahorro" inicial. Un seminuevo nacional de agencia, como los nuestros, pasa por una inspección rigurosa de más de 150 puntos.',
      icon: <Wrench className="h-6 w-6 text-yellow-600" />,
    },
    {
      title: '3. Dificultad para Asegurarlo y Venderlo',
      content: 'Las aseguradoras importantes a menudo se niegan a dar cobertura amplia a autos regularizados, ofreciendo solo daños a terceros. Esto te deja desprotegido en caso de robo o accidente grave. A la hora de venderlo, su valor de reventa es drásticamente menor y el mercado es muy limitado. Un auto nacional es un activo que conserva mejor su valor.',
      icon: <TrendingUp className="h-6 w-6 text-blue-500 transform scale-x-[-1]" />,
    },
    {
      title: '4. Limitaciones para Viajar',
      content: 'Aunque esté regularizado, podrías tener problemas para circular o intentar venderlo en otros estados de México que tienen normativas más estrictas. Un auto nacional te da la libertad de moverte por todo el país sin preocupaciones.',
      icon: <Handshake className="h-6 w-6 text-purple-500" />,
    }
  ];

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Autos Chocolate vs Nacionales en Baja California | Riesgos y Costos</title>
        <meta name="description" content="Descubre la verdad sobre los autos 'chocolate' en Tijuana y Ensenada. Compara los riesgos, costos ocultos y problemas legales vs. la certeza de un auto nacional." />
        <meta property="og:title" content="Autos Chocolate vs Nacionales en Baja California | Riesgos y Costos" />
        <meta property="og:description" content="No te dejes engañar por el precio bajo. Analizamos los 4 riesgos ocultos de comprar un auto 'chocolate' en BC y por qué un nacional es tu mejor inversión." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://seminuevosbaja.com.mx${location.pathname}`} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1698466415140-7b6fa1d93299" />
        <meta name="keywords" content="autos chocolate, autos nacionales, regularizacion autos, riesgos autos chocolate, comprar auto tijuana, comprar auto ensenada, seminuevos baja california, decreto autos chocolate, REPUVE, pedimento importacion" />
        <link rel="canonical" href={`https://seminuevosbaja.com.mx${location.pathname}`} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta property="og:image" content="https://seminuevosbaja.com.mx/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="Seminuevos Baja" />
      </Helmet>

      <div className="bg-brand-blue text-white">
        <div className="relative h-64 md:h-80">
          <img
            className="w-full h-full object-cover"
            alt="Contraste entre un auto 'chocolate' oxidado y descuidado y un auto nacional seminuevo, limpio y brillante, con un sello de 'Verificado' superpuesto en el lado del auto nacional."
           src="https://images.unsplash.com/photo-1698466415140-7b6fa1d93299" />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center px-4"
            >
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Autos "Chocolate" vs. Nacionales en Baja California: La Verdad
              </h1>
              <p className="mt-4 text-lg md:text-xl text-amber-400 font-semibold">
                Riesgos y Costos Ocultos que Nadie te Dice
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 flex items-start gap-6"
            >
              <div className="hidden sm:block flex-shrink-0 mt-1">{section.icon}</div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">{section.title}</h2>
                <p className="text-lg text-gray-300 leading-relaxed font-bold">{section.content}</p>
              </div>
            </motion.section>
          ))}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-400 mb-10">
              Los 4 Riesgos Ocultos de un "Auto Chocolate" que Vemos Diariamente
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {risks.map((risk, index) => (
                <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-red-500/30">
                  <div className="flex items-center gap-4 mb-3">
                    {risk.icon}
                    <h3 className="text-xl font-bold text-white">{risk.title}</h3>
                  </div>
                  <p className="text-gray-300 font-bold">{risk.content}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center bg-gray-900/50 p-8 rounded-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">Conclusión: Tu Inversión Merece Seguridad</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto font-bold">
              El precio de un auto no es solo lo que pagas al inicio, sino el costo total de propiedad. Un auto nacional seminuevo y certificado puede tener un precio inicial más alto, pero te ahorra miles de pesos y dolores de cabeza en reparaciones, problemas legales y depreciación. Es una inversión inteligente en tu patrimonio y tu tranquilidad.
            </p>
            <p className="text-xl text-white font-bold mb-8">
              No arriesgues tu dinero y tu seguridad. Elige certeza. Elige legal.
            </p>
            <Button asChild size="lg" className="bg-amber-500 text-brand-blue hover:bg-amber-400 font-bold text-lg">
              <Link to="/inventario">Ver Inventario de Autos Nacionales Verificados</Link>
            </Button>
          </motion.section>
        </div>
      </div>
    </>
  );
}