import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  ShieldCheck,
  TrendingDown,
  Phone,
  FileText,
  AlertTriangle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/hooks/useSEO';

const PAGE_URL = 'https://seminuevosbaja.com.mx/blog/vender-auto-tijuana-mejor-precio';
const PAGE_IMAGE =
  'https://horizons-cdn.hostinger.com/6224f76d-ecf5-45af-9c0f-743e5ebf8984/f929719291db3722f5d8881d2469bbe0.png';
const WHATSAPP_NUMBER = '526461616696';

function safeJsonLd(data) {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

export default function VenderAutoTijuana() {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      'Hola Max, vengo del artículo sobre vender un auto en Tijuana y quiero revisar si mi auto tendría mejor oportunidad en Ensenada.'
    )}`;
    window.open(url, '_blank');
  };

  const pageTitle =
    '¿Por qué en Tijuana te ofrecen poco por tu auto? | Guía 2026 | Seminuevos Baja';
  const pageDescription =
    'Análisis del mercado de Tijuana: importados, menor demanda premium y cuándo puede tener sentido considerar una mejor oportunidad de venta en Ensenada.';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: '¿Por qué en Tijuana te ofrecen poco por tu auto?',
    description: pageDescription,
    mainEntityOfPage: PAGE_URL,
    url: PAGE_URL,
    image: PAGE_IMAGE,
    inLanguage: 'es-MX',
    datePublished: '2026-04-08',
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
        name: '¿Por qué en Tijuana me ofrecen menos por mi auto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Porque el mercado fronterizo está distorsionado por la presencia de autos importados, una oferta más amplia y un comprador que muchas veces compara solo por precio, no por calidad legal o mecánica.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Eso significa que mi auto vale menos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No necesariamente. Muchas veces el problema no es el valor intrínseco del auto, sino el contexto del mercado donde lo estás ofreciendo.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuándo tiene sentido considerar Ensenada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cuando tienes un auto nacional de agencia, en buen estado, no necesitas venderlo de inmediato y quieres explorar una mejor oportunidad comercial en un mercado menos distorsionado.'
        }
      }
    ]
  };

  const reasons = [
    'En Tijuana hay mayor presencia de autos importados que compiten por precio, aunque no ofrezcan la misma certeza legal o comercial.',
    'Muchos compradores fronterizos priorizan “que se vea barato” antes que procedencia, respaldo o historial del vehículo.',
    'Un auto premium nacional compite contra referencias de precio artificialmente bajas.',
    'La urgencia del vendedor suele empeorar el castigo: si necesitas vender rápido, el mercado lo detecta y aprieta más.'
  ];

  const whenItMakesSense = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-amber-500" />,
      text: 'Tu auto es nacional de agencia, tiene documentos completos y está en buen estado.'
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-500" />,
      text: 'No necesitas el dinero el mismo día y puedes esperar algunas semanas por una mejor oportunidad.'
    },
    {
      icon: <MapPin className="h-6 w-6 text-amber-500" />,
      text: 'Puedes trasladarte una vez a Ensenada y dejar que un tercero serio se encargue del proceso.'
    },
    {
      icon: <TrendingDown className="h-6 w-6 text-amber-500" />,
      text: 'Las ofertas actuales en Tijuana están claramente por debajo del valor razonable de tu auto.'
    }
  ];

  const whenItDoesNotMakeSense = [
    'Si necesitas liquidez inmediata.',
    'Si tu auto tiene adeudos, documentación incompleta o problemas mecánicos serios.',
    'Si esperas un precio fantasioso y no uno alineado al mercado.',
    'Si no estás dispuesto a dejar que el proceso tome tiempo.'
  ];

  const nextSteps = [
    {
      icon: <Phone className="h-7 w-7 text-white" />,
      title: '1. Comparte los datos de tu auto',
      desc: 'Marca, modelo, año, kilometraje, versión y estado general.'
    },
    {
      icon: <TrendingDown className="h-7 w-7 text-white" />,
      title: '2. Revisa el contexto de mercado',
      desc: 'Comparamos si el problema es el auto o el mercado donde lo estás ofreciendo.'
    },
    {
      icon: <MapPin className="h-7 w-7 text-white" />,
      title: '3. Evalúa si tiene sentido moverlo a Ensenada',
      desc: 'No todos los casos convienen. Aquí lo importante es la viabilidad real.'
    },
    {
      icon: <FileText className="h-7 w-7 text-white" />,
      title: '4. Elige entre venta directa o consignación',
      desc: 'Dependiendo de tu urgencia, perfil del auto y objetivo económico.'
    }
  ];

  return (
    <>
      <PageSEO
        routeKey="blog"
        customConfig={{
          title: pageTitle,
          description: pageDescription,
          canonical: '/blog/vender-auto-tijuana-mejor-precio',
          ogType: 'article',
          ogImage: PAGE_IMAGE,
          twitterImage: PAGE_IMAGE,
          ogImageAlt: 'Análisis sobre vender un auto en Tijuana y opciones en Ensenada',
          twitterImageAlt:
            'Análisis sobre vender un auto en Tijuana y opciones en Ensenada',
          schema: articleSchema
        }}
      />

      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
        />
      </Helmet>

      <article className="min-h-screen bg-brand-blue pb-16 pt-24 text-white">
        <section className="relative mx-auto mb-16 max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-sm font-bold text-amber-500">
              <MapPin className="h-4 w-4" />
              <span>Análisis de mercado 2026</span>
            </div>

            <h1 className="mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl lg:text-6xl">
              ¿Por qué en Tijuana te ofrecen poco por tu auto?
            </h1>

            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300">
              A veces el problema no es tu auto. El problema es <strong>dónde</strong> lo estás intentando vender. En Tijuana, el mercado puede castigar más a ciertos seminuevos, especialmente si son nacionales y compiten contra referencias de precio distorsionadas.
            </p>
          </motion.div>
        </section>

        <section className="mx-auto mb-20 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-white">
                Qué está pasando realmente en Tijuana
              </h2>

              <p className="mb-8 text-lg leading-relaxed text-gray-300">
                En la frontera, el comprador promedio suele comparar primero por precio. Eso suena lógico, pero termina mezclando vehículos con realidades muy distintas: importados, regularizados, nacionales, premium y económicos, todo en el mismo escaparate mental.
              </p>

              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 shadow-lg transition-colors hover:bg-white/10"
                  >
                    <div className="rounded-lg bg-brand-blue p-2 shadow-inner">
                      <CheckCircle className="h-5 w-5 text-amber-500" />
                    </div>
                    <p className="text-sm font-bold text-gray-300">{reason}</p>
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
              <div className="absolute inset-0 rounded-full bg-amber-500 opacity-10 blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=75&auto=format"
                alt="Auto premium en análisis de mercado para venta entre Tijuana y Ensenada"
                className="relative aspect-[4/3] w-full rounded-2xl border border-white/10 object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </motion.div>
          </div>
        </section>

        <section className="mb-20 bg-gray-900 py-16">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Cuándo sí tiene sentido explorar Ensenada
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-300">
              No en todos los casos conviene. Pero cuando tu auto está bien posicionado y el castigo viene del mercado fronterizo, puede haber una mejor oportunidad comercial fuera de Tijuana.
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {whenItMakesSense.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start rounded-xl border border-gray-700 bg-gray-800 p-5 text-left"
                >
                  <div className="mr-3 mt-0.5 flex-shrink-0">{item.icon}</div>
                  <p className="font-bold text-gray-300">{item.text}</p>
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
                Cuándo no conviene complicarte
              </h2>
            </div>

            <ul className="space-y-3">
              {whenItDoesNotMakeSense.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                  <span className="font-bold">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm font-bold text-gray-400">
              Si necesitas vender hoy, probablemente te conviene más una ruta de venta directa que una estrategia de paciencia.
            </p>
          </div>
        </section>

        <section className="mb-20 bg-gradient-to-r from-amber-600 to-amber-500 py-16 shadow-[0_0_50px_rgba(245,158,11,0.2)]">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Entonces, ¿qué harías en mi lugar?
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-xl text-white/90">
              Primero compararía si el problema es el precio que pido o el mercado donde lo estoy ofreciendo. Si el mercado es el que está castigando, entonces sí tiene sentido revisar otra plaza.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {nextSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                    {step.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-sm font-bold text-white/90">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mb-20 max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Preguntas frecuentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: '¿Esto aplica para cualquier auto?',
                a: 'No. Tiene más sentido en autos nacionales de agencia, bien conservados y con un perfil que sí pueda encontrar mejor respuesta en Ensenada.'
              },
              {
                q: '¿Es garantía que me van a pagar más?',
                a: 'No. Lo correcto es hablar de mejor oportunidad comercial, no de prometer milagros. Si alguien te promete precio alto sin revisar contexto, te está vendiendo humo.'
              },
              {
                q: '¿Y si necesito vender de inmediato?',
                a: 'Entonces conviene evaluar primero una venta directa. La consignación o una estrategia de cambio de mercado requiere más paciencia.'
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

        <section className="border-t border-gray-800 bg-brand-blue py-16">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              ¿Quieres revisar tu caso real?
            </h2>
            <p className="mb-8 font-bold text-gray-300">
              Si las ofertas en Tijuana no te cuadran, revisamos contigo si tiene sentido explorar Ensenada, ya sea por venta directa o consignación.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="rounded-xl bg-green-600 px-10 py-6 text-lg font-bold text-white shadow-lg hover:bg-green-700"
              >
                Consultar por WhatsApp
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-white px-10 py-6 text-lg font-bold text-white hover:bg-white hover:text-brand-blue"
              >
                <Link to="/consigna-desde-tijuana">
                  Ver opción en Ensenada
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}