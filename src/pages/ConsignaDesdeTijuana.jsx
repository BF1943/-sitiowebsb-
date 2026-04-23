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
  TrendingUp,
  Phone,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/hooks/useSEO';

const PAGE_URL = 'https://seminuevosbaja.com.mx/consigna-desde-tijuana';
const PAGE_IMAGE =
  'https://seminuevosbaja.com.mx/og-image.png';
const BUSINESS_PHONE = '+526469778808';
const WHATSAPP_NUMBER = '526461616696';

function safeJsonLd(data) {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

export default function ConsignaDesdeTijuana() {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      'Hola Max, vengo de Tijuana y me interesa consignar mi auto en Ensenada. ¿Me puedes dar más información?'
    )}`;
    window.open(url, '_blank');
  };

  const pageTitle =
    'Consigna tu Auto desde Tijuana en Ensenada | Seminuevos Baja';
  const pageDescription =
    'Si en Tijuana te ofrecen menos de lo esperado por tu auto, revisa una opción de consignación en Ensenada con un proceso claro, filtro de interesados y acompañamiento profesional.';

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Consignación de autos desde Tijuana en Ensenada',
    serviceType: 'Consignación de autos',
    description:
      'Servicio de consignación para personas de Tijuana que buscan una mejor oportunidad de venta en Ensenada con apoyo de Seminuevos Baja.',
    provider: {
      '@type': 'AutoDealer',
      name: 'Seminuevos Baja',
      alternateName: 'Seminuevos Ensenada',
      url: 'https://seminuevosbaja.com.mx',
      telephone: BUSINESS_PHONE,
      image: PAGE_IMAGE,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calle Delante #200, Fracc. Costa Azul',
        addressLocality: 'Ensenada',
        addressRegion: 'Baja California',
        postalCode: '22890',
        addressCountry: 'MX'
      }
    },
    areaServed: ['Tijuana', 'Rosarito', 'Ensenada', 'Baja California'],
    url: PAGE_URL
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Puedo consignar mi auto desde Tijuana sin ir a Ensenada primero?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Puedes enviar los datos de tu auto por WhatsApp y te damos una estimación preliminar sin compromiso. Para dejar el auto solo necesitas venir una vez a nuestras instalaciones en Ensenada.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Qué tipo de autos aceptan en consignación?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Aceptamos autos nacionales de agencia en buen estado mecánico y con documentos completos. Especialmente autos de alta gama como BMW, Mercedes-Benz, Audi y otros modelos premium.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuánto tarda en venderse un auto en consignación?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El tiempo promedio es de 2 a 4 semanas, dependiendo del modelo y del precio. Los autos con precio competitivo y buena presentación se venden más rápido.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Qué pasa si mi auto no se vende?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Al terminar el contrato, generalmente de 60 o 90 días, puedes retirar tu auto sin costo ni penalización.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Aceptan autos con financiamiento activo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Al concretarse la venta liquidamos directamente el saldo con el banco o financiera y te entregamos la diferencia.'
        }
      }
    ]
  };

  const steps = [
    {
      icon: <Phone className="h-7 w-7 text-white" />,
      title: '1. Contáctanos desde Tijuana',
      desc: 'Envíanos por WhatsApp la marca, modelo, año, kilometraje y condición general de tu auto. Sin compromiso.'
    },
    {
      icon: <TrendingUp className="h-7 w-7 text-white" />,
      title: '2. Estimación de precio',
      desc: 'Te compartimos el rango de precio real que tiene tu auto en el mercado de Ensenada hoy. Con información, no con promesas.'
    },
    {
      icon: <MapPin className="h-7 w-7 text-white" />,
      title: '3. Traes tu auto a Ensenada',
      desc: 'Una sola visita a nuestras instalaciones en Fracc. Costa Azul. Revisamos el auto juntos y firmamos el contrato de consignación.'
    },
    {
      icon: <FileText className="h-7 w-7 text-white" />,
      title: '4. Nosotros nos encargamos de todo',
      desc: 'Fotos profesionales, publicación, atención a compradores y transacción segura. Tú recibes el monto acordado cuando se vende.'
    }
  ];

  const reasons = [
    'En Tijuana, quien puede comprar un auto premium muchas veces prefiere estrenar; eso reduce los compradores reales para tu seminuevo.',
    'Los autos importados distorsionan el mercado fronterizo y compiten con el tuyo aunque sean legalmente inferiores.',
    'En Ensenada el auto de alta gama tiene valor aspiracional real: hay compradores que valoran lo nacional, lo legal y lo respaldado.',
    'Menor oferta de importados significa que tu auto no compite contra precios artificialmente bajos.'
  ];

  const faqs = [
    {
      q: '¿Puedo consignar mi auto desde Tijuana sin ir a Ensenada primero?',
      a: 'Sí. Puedes enviarnos los datos por WhatsApp y te damos una estimación preliminar sin costo ni compromiso. Para dejar el auto solo necesitas venir una vez a nuestras instalaciones.'
    },
    {
      q: '¿Qué tipo de autos aceptan?',
      a: 'Autos nacionales de agencia en buen estado mecánico y con documentos completos. Especialmente autos de alta gama como BMW, Mercedes-Benz, Audi y otros modelos premium.'
    },
    {
      q: '¿Cuánto tarda en venderse?',
      a: 'El tiempo promedio es de 2 a 4 semanas dependiendo del modelo y el precio. Los autos con precio competitivo se venden más rápido.'
    },
    {
      q: '¿Qué pasa si no se vende?',
      a: 'Al terminar el contrato, generalmente de 60 o 90 días, puedes retirar tu auto sin ningún costo ni penalización.'
    },
    {
      q: '¿Aceptan autos con financiamiento activo?',
      a: 'Sí. Al concretarse la venta liquidamos directamente el saldo con el banco o financiera y te entregamos la diferencia.'
    }
  ];

  return (
    <>
      <PageSEO
        routeKey="consignFromTijuana"
        customConfig={{
          title: pageTitle,
          description: pageDescription,
          canonical: '/consigna-desde-tijuana',
          ogImage: PAGE_IMAGE,
          twitterImage: PAGE_IMAGE,
          ogImageAlt: 'Consignación de autos desde Tijuana en Ensenada',
          twitterImageAlt: 'Consignación de autos desde Tijuana en Ensenada',
          schema: schemaData
        }}
      />

      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
        />
      </Helmet>

      <section className="relative overflow-hidden bg-brand-blue py-16 md:py-24">
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/20 px-3 py-1 text-sm font-bold text-amber-400">
              PARA VENDEDORES DE TIJUANA
            </span>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              ¿Te ofrecen poco por tu auto en Tijuana?{' '}
              <span className="text-amber-500">Revisa la consignación en Ensenada.</span>
            </h1>

            <p className="mb-4 text-lg font-medium text-gray-300 md:text-xl">
              Si tienes un BMW, Mercedes-Benz, Audi o cualquier auto de alta gama y las ofertas en Tijuana no te convencen, en Ensenada puede haber una mejor oportunidad comercial para tu auto.
            </p>

            <p className="mb-8 font-medium text-gray-400">
              Proceso claro desde el inicio, una sola visita y atención profesional.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="rounded-xl bg-green-600 px-8 py-6 text-lg font-bold text-white shadow-lg hover:bg-green-700"
              >
                Consultar por WhatsApp
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl border-white px-8 py-6 text-lg font-bold text-white hover:bg-white hover:text-brand-blue"
              >
                <a href="#por-que-tijuana">
                  ¿Por qué pasa esto? <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative overflow-hidden rounded-2xl border border-gray-700 shadow-2xl">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-blue via-transparent to-transparent opacity-60" />
              <img
                alt="Auto premium para consignación desde Tijuana en Ensenada"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=75&auto=format"
              />
            </div>
          </motion.div>
        </div>

        <div className="absolute right-0 top-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-amber-500 opacity-5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-80 w-80 rounded-full bg-blue-500 opacity-5 blur-3xl" />
      </section>

      <section id="por-que-tijuana" className="bg-gray-900 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Por qué el mercado de Tijuana castiga los autos premium
            </h2>
            <p className="font-medium text-gray-400">
              No es que tu auto valga menos; es el contexto del mercado donde lo estás vendiendo.
            </p>
          </div>

          <div className="space-y-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start rounded-lg border border-gray-700 bg-gray-800 p-4"
              >
                <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                <p className="font-bold text-gray-300">{reason}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/consigna"
              className="font-bold text-amber-400 underline hover:text-amber-300"
            >
              Ver proceso completo de consignación
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-blue py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              ¿Esta opción es para ti?
            </h2>
            <p className="font-medium text-gray-300">
              La consignación en Ensenada tiene sentido si cumples con esto:
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                icon: <ShieldCheck className="h-6 w-6 text-amber-500" />,
                text: 'Tu auto es nacional de agencia, con documentos limpios y en buen estado mecánico.'
              },
              {
                icon: <Clock className="h-6 w-6 text-amber-500" />,
                text: 'No necesitas el dinero de forma urgente; puedes esperar 2 a 4 semanas.'
              },
              {
                icon: <MapPin className="h-6 w-6 text-amber-500" />,
                text: 'Puedes trasladarte a Ensenada una vez y tienes otro medio de transporte mientras tanto.'
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-amber-500" />,
                text: 'Las ofertas que recibes en Tijuana están por debajo del valor real de tu auto.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start rounded-lg border border-gray-700 bg-gray-900/50 p-5"
              >
                <div className="mr-3 mt-0.5 flex-shrink-0">{item.icon}</div>
                <p className="font-bold text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-4 text-center">
            <p className="font-bold text-gray-300">
              Si necesitas vender hoy, la consignación no es tu opción.{' '}
              <Link to="/vender" className="text-amber-400 underline hover:text-amber-300">
                Consulta nuestra venta directa
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Cómo funciona el proceso desde Tijuana
            </h2>
            <p className="font-medium text-gray-400">
              Cuatro pasos. Una sola visita a Ensenada.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="flex h-full flex-col items-center rounded-2xl border border-gray-700 bg-gray-800 p-6 text-center transition-colors hover:border-amber-500">
                  <div className="mb-4 rounded-full bg-amber-500 p-4 shadow-lg shadow-amber-500/20">
                    {step.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-sm font-bold leading-relaxed text-gray-300">{step.desc}</p>
                </div>

                {i < steps.length - 1 && (
                  <div className="absolute top-1/2 z-0 hidden h-0.5 w-6 -translate-y-1/2 bg-gray-600 md:block -right-3" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-blue py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Envíanos los datos de tu auto
            </h2>
            <p className="mb-2 font-bold text-gray-300">
              Te decimos cuánto vale en el mercado de Ensenada hoy.
            </p>
            <p className="mb-8 font-medium text-gray-400">
              Sin compromiso. Sin presión. Con información real.
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
                <Link to="/consigna">Ver proceso completo de consignación</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Preguntas frecuentes
          </h2>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-lg border border-gray-700 bg-gray-800 p-5"
              >
                <h3 className="mb-2 text-lg font-bold text-white">{item.q}</h3>
                <p className="font-bold text-gray-300">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-brand-blue py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            ¿Listo para explorar una mejor opción?
          </h2>
          <p className="mb-8 font-bold text-gray-300">
            Escríbenos ahora. Max te atiende de inmediato y resuelve tus dudas antes de que hagas el viaje.
          </p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="rounded-xl bg-amber-500 px-12 py-6 text-lg font-bold text-brand-blue shadow-lg shadow-amber-500/20 hover:bg-amber-400"
          >
            Hablar con Max
          </Button>
        </div>
      </section>
    </>
  );
}