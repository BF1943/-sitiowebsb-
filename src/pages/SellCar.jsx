import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SiteContext } from '@/context/SiteContext.jsx';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';
import { PageSEO } from '@/hooks/useSEO';

import SellCarHero from '@/components/sell-car/SellCarHero';
import ValuationSection from '@/components/sell-car/ValuationSection';
import SellProcess from '@/components/sell-car/SellProcess';
import SEOContent from '@/components/sell-car/SEOContent';
import Testimonials from '@/components/sell-car/Testimonials';
import SellCarFAQ, { sellCarFaqData } from '@/components/sell-car/SellCarFAQ';

const BUSINESS_PHONE = '+526469778808';
const WHATSAPP_NUMBER = '526461616696';
const PAGE_URL = 'https://seminuevosbaja.com.mx/vender';
const PAGE_IMAGE =
  'https://seminuevosbaja.com.mx/og-image.png';

const SellCar = () => {
  const { siteName } = useContext(SiteContext);
  const { trackLeadInterest, trackWhatsAppClick } = useGoogleAnalytics();

  const pageTitle =
    'Cotización de Mi Auto | Vende tu Auto en Ensenada';
  const pageDescription =
    'Vende tu auto usado en Ensenada con cotización profesional, oferta clara y opción de pago inmediato en Seminuevos Baja.';
  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AutoDealer',
        name: siteName || 'Seminuevos Baja',
        alternateName: 'Seminuevos Ensenada',
        url: PAGE_URL,
        image: PAGE_IMAGE,
        logo: PAGE_IMAGE,
        description:
          'Vende tu auto en Ensenada con cotización profesional, oferta clara y opción de pago inmediato en Seminuevos Baja.',
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
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '31.8667',
          longitude: '-116.5964'
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
        areaServed: [
          'Ensenada',
          'Tijuana',
          'Rosarito',
          'San Quintín',
          'Valle de Guadalupe'
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: sellCarFaqData.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      }
    ]
  };

  const handleWhatsAppClick = () => {
    trackLeadInterest({
      autoId: 'sell-car-page',
      autoModelo: 'Venta de Auto (Usuario)',
      autoPrecio: 0
    });

    trackWhatsAppClick('WhatsApp', 'Sell Car Page');

    const message =
      'Hola, me interesa vender mi auto. Quisiera una cotización.';
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <PageSEO
        routeKey="sellCar"
        customConfig={{
          title: pageTitle,
          description: pageDescription,
          canonical: '/vender',
          ogImage: PAGE_IMAGE,
          twitterImage: PAGE_IMAGE,
          ogImageAlt: 'Vender auto en Ensenada con avalúo gratis y pago inmediato',
          twitterImageAlt:
            'Vender auto en Ensenada con avalúo gratis y pago inmediato',
          schema: pageSchema
        }}
      />

      <div className="bg-white">
        <SellCarHero onWhatsAppClick={handleWhatsAppClick} />

        <ValuationSection onWhatsAppClick={handleWhatsAppClick} />

        <SellProcess />

        <SEOContent onWhatsAppClick={handleWhatsAppClick} />

        <SellCarFAQ />

        <Testimonials />

        <section className="bg-brand-blue py-16 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
          >
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              ¿Listo para vender tu auto en Ensenada?
            </h2>
            <p className="mb-8 text-lg font-medium text-gray-300">
              Si buscas una opción clara y segura para vender tu auto, en
              Seminuevos Baja te orientamos con avalúo profesional, proceso directo
              y acompañamiento durante toda la operación.
            </p>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="btn-glow w-full transform rounded-xl bg-amber-500 px-12 py-6 text-lg font-bold text-brand-blue shadow-lg shadow-amber-500/20 transition-transform duration-300 hover:scale-105 hover:bg-amber-400 sm:w-auto"
            >
              Agendar cita de avalúo
            </Button>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default SellCar;