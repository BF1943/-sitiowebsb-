import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';
import { PageSEO } from '@/hooks/useSEO';

import ConsignHero from '@/components/consign-car/ConsignHero';
import WhatIsConsignment from '@/components/consign-car/WhatIsConsignment';
import ConsignProcess from '@/components/consign-car/ConsignProcess';
import ConsignFees from '@/components/consign-car/ConsignFees';
import ConsignTestimonials from '@/components/consign-car/ConsignTestimonials';
import ConsignFAQ from '@/components/consign-car/ConsignFAQ';
import ConsignAdvantages from '@/components/consign-car/ConsignAdvantages';

const PAGE_URL = 'https://seminuevosbaja.com.mx/consigna';
const PAGE_IMAGE =
  'https://horizons-cdn.hostinger.com/6224f76d-ecf5-45af-9c0f-743e5ebf8984/f929719291db3722f5d8881d2469bbe0.png';
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

const ConsignCar = () => {
  const { trackLeadInterest, trackWhatsAppClick } = useGoogleAnalytics();

  const pageTitle =
    'Consigna tu Auto en Ensenada | Mayor Exposición y Venta Segura | Seminuevos Baja';
  const pageDescription =
    'Consigna tu auto en Ensenada con mayor exposición, filtro de interesados y acompañamiento profesional. En Seminuevos Baja te ayudamos a vender con más orden y menos riesgo.';

  const handleChatbotClick = () => {
    trackLeadInterest({
      autoId: 'consign-request',
      autoModelo: 'Consignación de Auto (Usuario)',
      autoPrecio: 0
    });

    trackWhatsAppClick('WhatsApp', 'Consign Car Page');

    const message =
      'Hola Max, vengo de la página de consignación. ¿Me ayudas a revisar si mi auto aplica para consignación?';
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué documentos necesito para consignar mi auto en Ensenada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Para iniciar el trámite de consignación en Seminuevos Baja necesitas factura original, tarjeta de circulación vigente, identificación oficial y comprobante de domicilio.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuánto tarda en venderse un auto en consignación?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El tiempo de venta puede variar según marca, modelo, precio y demanda. En muchos casos, con buena presentación, publicidad y opciones de financiamiento, la venta puede lograrse en pocas semanas.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Es seguro dejar mi auto a consignación?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Tu auto se resguarda en nuestras instalaciones y nosotros atendemos la promoción, citas y seguimiento para reducir riesgos como fraudes, transferencias falsas o trato con desconocidos.'
        }
      }
    ]
  };

  const dealerSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    name: 'Seminuevos Baja',
    alternateName: 'Seminuevos Ensenada',
    url: PAGE_URL,
    image: PAGE_IMAGE,
    logo: PAGE_IMAGE,
    description:
      'Consigna tu auto en Ensenada con Seminuevos Baja. Te ayudamos con mayor exposición, proceso claro y acompañamiento profesional durante la venta.',
    telephone: BUSINESS_PHONE,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Delante #200, Fracc. Costa Azul',
      addressLocality: 'Ensenada',
      addressRegion: 'Baja California',
      postalCode: '22890',
      addressCountry: 'MX'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '15:00'
      }
    ],
    areaServed: ['Ensenada', 'Tijuana', 'Rosarito', 'San Quintín', 'Valle de Guadalupe']
  };

  return (
    <>
      <PageSEO
        routeKey="consignCar"
        customConfig={{
          title: pageTitle,
          description: pageDescription,
          canonical: '/consigna',
          ogImage: PAGE_IMAGE,
          twitterImage: PAGE_IMAGE,
          ogImageAlt: 'Consignación de autos en Ensenada con Seminuevos Baja',
          twitterImageAlt: 'Consignación de autos en Ensenada con Seminuevos Baja',
          schema: dealerSchema
        }}
      />

      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
        />
      </Helmet>

      <div className="bg-white">
        <ConsignHero onActionClick={handleChatbotClick} />

        <WhatIsConsignment />

        <ConsignProcess />

        <ConsignFees />

        <ConsignAdvantages onActionClick={handleChatbotClick} />

        <ConsignTestimonials />

        <ConsignFAQ />

        <section className="border-t border-gray-800 bg-gray-900 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto max-w-3xl px-4"
          >
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-amber-500/10 p-4">
                <MessageCircle className="h-12 w-12 text-amber-500" />
              </div>
            </div>

            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              ¿Listo para vender sin preocuparte por todo el proceso?
            </h2>

            <p className="mb-8 text-lg font-medium text-gray-400">
              Habla con Max y revisamos si tu auto es buena opción para consignación, con información clara desde el inicio y sin presión innecesaria.
            </p>

            <Button
              onClick={handleChatbotClick}
              size="lg"
              className="btn-glow transform rounded-xl bg-amber-500 px-12 py-6 text-lg font-bold text-brand-blue shadow-lg shadow-amber-500/20 transition-transform duration-300 hover:scale-105 hover:bg-amber-400"
            >
              Hablar con Max
            </Button>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default ConsignCar;