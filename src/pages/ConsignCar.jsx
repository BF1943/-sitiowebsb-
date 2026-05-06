import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';
import { PageSEO } from '@/hooks/useSEO';

import ConsignHero from '@/components/consign-car/ConsignHero';
import RegionalConsign from '@/components/consign-car/RegionalConsign';
import WhatIsConsignment from '@/components/consign-car/WhatIsConsignment';
import ConsignProcess from '@/components/consign-car/ConsignProcess';
import ConsignFees from '@/components/consign-car/ConsignFees';
import ConsignTestimonials from '@/components/consign-car/ConsignTestimonials';
import ConsignFAQ from '@/components/consign-car/ConsignFAQ';
import ConsignAdvantages from '@/components/consign-car/ConsignAdvantages';
import { consignFaqData } from '@/components/consign-car/consignFaqData';

const PAGE_URL = 'https://seminuevosbaja.com.mx/consigna/';
const PAGE_IMAGE =
  'https://seminuevosbaja.com.mx/og-image.png';
const BUSINESS_PHONE = '+526469778808';
const WHATSAPP_NUMBER = '526461616696';

const ConsignCar = () => {
  const { trackLeadInterest, trackWhatsAppClick } = useGoogleAnalytics();

  const pageTitle =
    'Consigna tu Auto en Baja California | Véndelo en Ensenada';
  const pageDescription =
    'Consigna tu auto desde Ensenada, Tijuana, Mexicali, Rosarito o Tecate. Evaluamos tu unidad, acordamos un monto neto y la promovemos desde Seminuevos Baja.';

  const handleChatbotClick = () => {
    trackLeadInterest({
      autoId: 'consign-request',
      autoModelo: 'Consignación de Auto (Usuario)',
      autoPrecio: 0
    });

    trackWhatsAppClick('WhatsApp', 'Consign Car Page');

    const message =
      'Hola Max, vengo de la página de consignación. Quiero saber si mi auto aplica para consignación. Te comparto marca, modelo, año, versión, kilometraje, ciudad donde se encuentra y fotos.';
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: consignFaqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  const dealerSchema = {
    '@type': 'AutoDealer',
    name: 'Seminuevos Baja',
    alternateName: 'Seminuevos Ensenada',
    url: PAGE_URL,
    image: PAGE_IMAGE,
    logo: PAGE_IMAGE,
    description:
      'Evaluamos autos de Baja California y los vendemos mediante consignación profesional desde Ensenada. Acordamos un monto neto con el propietario y promovemos la unidad con compradores reales.',
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
    areaServed: ['Ensenada', 'Tijuana', 'Mexicali', 'Rosarito', 'Tecate', 'San Quintín', 'Valle de Guadalupe']
  };

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [dealerSchema, faqSchema]
  };

  return (
    <>
      <PageSEO
        routeKey="consignCar"
        customConfig={{
          title: pageTitle,
          description: pageDescription,
          canonical: '/consigna/',
          ogImage: PAGE_IMAGE,
          twitterImage: PAGE_IMAGE,
          ogImageAlt: 'Consignación de autos en Baja California con Seminuevos Baja',
          twitterImageAlt: 'Consignación de autos en Baja California con Seminuevos Baja',
          schema: combinedSchema
        }}
      />

      <div className="bg-white">
        <ConsignHero onActionClick={handleChatbotClick} />

        <RegionalConsign />

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
              ¿Quieres saber si tu auto aplica para consignación?
            </h2>

            <p className="mb-4 text-lg font-medium text-gray-300">
              Envíanos los datos de tu auto por WhatsApp. Revisamos marca, modelo, año, kilometraje, condiciones, documentación y precio esperado.
            </p>

            <p className="mb-4 text-base font-medium text-gray-400">
              Si tu auto tiene condiciones comerciales para consignación, te explicamos el monto neto sugerido, la estrategia de venta y los siguientes pasos.
            </p>

            <p className="mb-8 text-base font-medium text-gray-400">
              Si tu auto no cumple con las condiciones comerciales para consignación, te lo diremos con claridad y te explicaremos por qué.
            </p>

            <Button
              onClick={handleChatbotClick}
              size="lg"
              className="btn-glow transform rounded-xl bg-amber-500 px-12 py-6 text-lg font-bold text-brand-blue shadow-lg shadow-amber-500/20 transition-transform duration-300 hover:scale-105 hover:bg-amber-400"
            >
              Hablar con Max por WhatsApp
            </Button>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default ConsignCar;
