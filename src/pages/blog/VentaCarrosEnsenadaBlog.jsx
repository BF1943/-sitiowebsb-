import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SiteContext } from '../../context/SiteContext';
import {
  ShieldCheck,
  Banknote,
  Users,
  CheckCircle,
  ArrowRight,
  MapPin,
  FileCheck,
  Wrench,
  AlertTriangle
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { PageSEO } from '@/hooks/useSEO';

const PAGE_URL = 'https://seminuevosbaja.com.mx/blog/venta-carros-ensenada';
const PAGE_IMAGE =
  'https://seminuevosbaja.com.mx/og-image.png';

export default function VentaCarrosEnsenadaBlog() {
  const { siteName } = useContext(SiteContext);

  const pageTitle =
    'Venta de Carros en Ensenada: cómo elegir un seminuevo con respaldo | Seminuevos Baja';
  const pageDescription =
    'Guía para comprar un seminuevo en Ensenada con mejores criterios: respaldo mecánico, revisión legal, financiamiento y señales de alerta antes de cerrar trato.';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Venta de carros en Ensenada: cómo elegir un seminuevo con respaldo',
    description: pageDescription,
    mainEntityOfPage: PAGE_URL,
    url: PAGE_URL,
    image: PAGE_IMAGE,
    inLanguage: 'es-MX',
    datePublished: '2026-02-17',
    dateModified: '2026-04-20',
    author: {
      '@type': 'Organization',
      name: 'Seminuevos Baja'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Seminuevos Baja',
      url: 'https://seminuevosbaja.com.mx',
      logo: {
        '@type': 'ImageObject',
        url: PAGE_IMAGE
      }
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué debo revisar antes de comprar un seminuevo en Ensenada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lo más importante es revisar procedencia, documentación, estado mecánico, precio de mercado y si existe respaldo posterior a la compra.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Un precio más bajo siempre significa una mejor compra?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Un precio muy bajo puede esconder problemas mecánicos, adeudos, irregularidades documentales o simplemente un vehículo mal conservado.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Conviene comprar con financiamiento un auto seminuevo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Puede convenir si el auto está bien elegido y la mensualidad sí cabe en tu presupuesto. El crédito no arregla una mala compra; solo la hace más cara.'
        }
      }
    ]
  };

  const pillars = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-amber-500" />,
      title: 'Respaldo mecánico',
      description:
        'No basta con que el auto “se vea bien”. Lo que importa es que exista revisión seria y algún nivel de respaldo posterior a la compra.'
    },
    {
      icon: <FileCheck className="h-6 w-6 text-amber-500" />,
      title: 'Situación legal clara',
      description:
        'Factura, tarjeta de circulación, historial y documentos alineados. Si el papel está raro, el problema no desaparece por firmar rápido.'
    },
    {
      icon: <Banknote className="h-6 w-6 text-amber-500" />,
      title: 'Precio real de mercado',
      description:
        'El mejor auto no es el más barato; es el que tiene mejor relación entre condición, procedencia, equipamiento y precio.'
    },
    {
      icon: <Users className="h-6 w-6 text-amber-500" />,
      title: 'Acompañamiento claro',
      description:
        'Comprar con orientación reduce errores. Sobre todo si comparas varias opciones y todavía no tienes claro cuál te conviene más.'
    }
  ];

  const warningSigns = [
    'Precio demasiado bajo frente al mercado sin una explicación lógica.',
    'Respuestas evasivas sobre papeles, historial o detalles mecánicos.',
    'Presión para cerrar ese mismo día “porque hay muchos interesados”.',
    'Fotos bonitas pero información incompleta o contradictoria.',
    'Promesas vagas como “jala al cien” en lugar de datos verificables.'
  ];

  const buyingCriteria = [
    {
      icon: <CheckCircle className="h-6 w-6 text-amber-500" />,
      title: 'Define primero tu presupuesto real',
      description:
        'Incluye no solo el precio del auto, también placas, seguro, mantenimiento y margen para imprevistos.'
    },
    {
      icon: <Wrench className="h-6 w-6 text-amber-500" />,
      title: 'Evalúa el estado general, no solo la estética',
      description:
        'Motor, transmisión, suspensión, frenos y aire acondicionado pesan más que una pulida bonita o unos rines llamativos.'
    },
    {
      icon: <MapPin className="h-6 w-6 text-amber-500" />,
      title: 'Piensa en el uso real que le darás en Ensenada',
      description:
        'No es lo mismo un auto para ciudad, carretera, baches diarios o viajes frecuentes al Valle, Tijuana o Mexicali.'
    }
  ];

  return (
    <>
      <PageSEO
        routeKey="blog"
        customConfig={{
          title: pageTitle,
          description: pageDescription,
          canonical: '/blog/venta-carros-ensenada',
          ogType: 'article',
          ogImage: PAGE_IMAGE,
          twitterImage: PAGE_IMAGE,
          ogImageAlt: 'Guía para comprar un seminuevo con respaldo en Ensenada',
          twitterImageAlt: 'Guía para comprar un seminuevo con respaldo en Ensenada',
          schema: [articleSchema, faqSchema]
        }}
      />

      <article className="min-h-screen bg-brand-blue pb-16 pt-24 text-white">
        <section className="relative mx-auto mb-16 max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm font-bold text-amber-500">
              <MapPin className="h-4 w-4" />
              <span>Guía local de compra</span>
            </div>

            <h1 className="mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl lg:text-6xl">
              Venta de carros en Ensenada: cómo elegir un seminuevo con respaldo
            </h1>

            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300">
              Si estás comparando opciones de <strong>venta de carros en Ensenada</strong>,
              el error más común es fijarte solo en el precio. Lo correcto es revisar
              respaldo mecánico, situación legal, historial y el contexto real de compra.
            </p>
          </motion.div>
        </section>

        <section className="mx-auto mb-20 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-white">
                Qué revisar antes de comprar un auto en Ensenada
              </h2>

              <p className="mb-8 text-lg leading-relaxed text-gray-300">
                En el mercado local sí hay buenas oportunidades, pero también decisiones
                que salen caras si compras con prisa. Una compra seria debe darte claridad
                documental, revisión mecánica y contexto suficiente para saber si el precio
                realmente tiene sentido.
              </p>

              <div className="grid gap-6">
                {pillars.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 shadow-lg transition-colors hover:bg-white/10"
                  >
                    <div className="rounded-lg bg-brand-blue p-2 shadow-inner">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-sm font-bold text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-amber-500 opacity-20 blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop"
                alt="Autos seminuevos en Ensenada con respaldo y revisión"
                className="relative aspect-[4/3] w-full rounded-2xl border border-white/10 object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                width="1200"
                height="900"
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </div>
        </section>

        <section className="mb-20 bg-gray-900 py-16">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Tres criterios que te ahorran errores caros
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-300">
              Antes de emocionarte con un modelo, revisa si realmente encaja con tu uso,
              tu presupuesto y el costo total de tenerlo.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {buyingCriteria.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-gray-700 bg-gray-800 p-6 text-left"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                  <p className="font-bold text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mb-20 max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-8">
            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500" />
              <h2 className="text-2xl font-bold text-white">
                Señales de alerta antes de comprar
              </h2>
            </div>

            <ul className="space-y-3">
              {warningSigns.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                  <span className="font-bold">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm font-bold text-gray-400">
              Un buen seminuevo no necesita urgencias artificiales para venderse. Si te están apurando demasiado, sospecha.
            </p>
          </div>
        </section>

        <section className="mb-20 bg-gradient-to-r from-amber-600 to-amber-500 py-16 shadow-[0_0_50px_rgba(245,158,11,0.2)]">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              ¿Quieres pasar de la teoría a ver opciones reales?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
              Una cosa es saber qué revisar. Otra es comparar autos disponibles con información clara, respaldo y opciones de financiamiento.
            </p>

            <Button
              asChild
              size="lg"
              className="rounded-full bg-white px-8 py-6 text-lg font-bold text-amber-600 shadow-xl transition-all hover:-translate-y-1 hover:bg-gray-100 hover:shadow-2xl"
            >
              <Link to="/inventario/">
                Ver inventario en Ensenada <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="mx-auto mb-20 max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Preguntas frecuentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: '¿Conviene más comprar en agencia que a un particular?',
                a: 'Depende del caso, pero una agencia seria suele darte más estructura, más filtros y menos margen para errores básicos de documentación o proceso.'
              },
              {
                q: '¿Qué pesa más: kilometraje o estado general?',
                a: 'Ambos importan, pero un auto bien mantenido suele valer más que uno con kilometraje bajo y mala conservación. El contexto manda.'
              },
              {
                q: '¿El financiamiento siempre es buena idea?',
                a: 'No. Solo conviene si el auto está bien elegido y la mensualidad no te aprieta. Financiar una mala compra sigue siendo una mala compra.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-lg border border-gray-700 bg-gray-800 p-5"
              >
                <h3 className="mb-2 text-lg font-bold text-white">{item.q}</h3>
                <p className="font-bold text-gray-300">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-2xl font-bold text-white">
              Comprar mejor también es filtrar mejor
            </h2>

            <p className="mb-8 leading-relaxed text-gray-400">
              En {siteName}, la idea no es empujarte a comprar por impulso, sino ayudarte a comparar con mejores criterios. En seminuevos, el error caro casi siempre empieza con una decisión apresurada.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/inventario/"
                className="font-bold text-amber-500 underline decoration-2 underline-offset-4 hover:text-amber-400"
              >
                Ver inventario
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/financiamiento"
                className="font-bold text-amber-500 underline decoration-2 underline-offset-4 hover:text-amber-400"
              >
                Simular crédito
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                to="/contacto"
                className="font-bold text-amber-500 underline decoration-2 underline-offset-4 hover:text-amber-400"
              >
                Ir a contacto
              </Link>
            </div>
          </motion.div>
        </section>
      </article>
    </>
  );
}
