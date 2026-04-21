import React, { useContext, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SiteContext } from '../context/SiteContext';
import { motion } from 'framer-motion';
import FinancingBenefits from '../components/financing/FinancingBenefits';
import CreditCalculator from '../components/financing/CreditCalculator';
import FinancingRequirements from '../components/financing/FinancingRequirements';
import FinancingCTA from '../components/financing/FinancingCTA';
import { PageSEO } from '@/hooks/useSEO';

const PAGE_URL = 'https://seminuevosbaja.com.mx/financiamiento';
const PAGE_IMAGE =
  'https://horizons-cdn.hostinger.com/6224f76d-ecf5-45af-9c0f-743e5ebf8984/f929719291db3722f5d8881d2469bbe0.png';

export default function Financing() {
  const { siteName } = useContext(SiteContext);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const autoParam = searchParams.get('auto');
  const precioParam = searchParams.get('precio');

  const isPriceLocked = !!precioParam && !isNaN(Number(precioParam));

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const pageTitle =
    'Financiamiento de Autos en Ensenada | Simula tu Crédito | Seminuevos Baja';
  const pageDescription =
    'Simula tu crédito para autos seminuevos en Ensenada. Revisa enganche, plazo y mensualidad con opciones de financiamiento en Seminuevos Baja.';

  const financingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Financiamiento automotriz en Ensenada',
    description: `Simula tu crédito automotriz con ${siteName}. Revisa enganche, plazo y mensualidad para comprar un auto seminuevo en Ensenada.`,
    url: PAGE_URL,
    serviceType: 'Vehicle Financing',
    image: PAGE_IMAGE,
    provider: {
      '@type': 'AutoDealer',
      name: siteName,
      alternateName: 'Seminuevos Ensenada',
      url: 'https://seminuevosbaja.com.mx',
      image: PAGE_IMAGE,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calle Delante #200, Fracc. Costa Azul',
        addressLocality: 'Ensenada',
        addressRegion: 'Baja California',
        postalCode: '22890',
        addressCountry: 'MX'
      },
      telephone: '+526469778808'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Ensenada'
      },
      {
        '@type': 'State',
        name: 'Baja California'
      }
    ],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'MXN',
      description: 'Simulación de crédito gratuita y sin compromiso',
      availability: 'https://schema.org/InStock'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Opciones de crédito automotriz',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'FinancialProduct',
            name: 'Crédito bancario tradicional',
            description:
              'Opción para perfiles con historial crediticio sólido y comprobantes de ingresos.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'FinancialProduct',
            name: 'Crédito por financiera',
            description:
              'Opción con requisitos más flexibles para distintos perfiles de comprador.'
          }
        }
      ]
    },
    serviceOutput: {
      '@type': 'Thing',
      name: 'Simulación de crédito automotriz'
    }
  };

  return (
    <>
      <PageSEO
        routeKey="financing"
        customConfig={{
          title: pageTitle,
          description: pageDescription,
          canonical: '/financiamiento',
          ogImage: PAGE_IMAGE,
          twitterImage: PAGE_IMAGE,
          ogImageAlt: 'Financiamiento de autos seminuevos en Ensenada',
          twitterImageAlt: 'Financiamiento de autos seminuevos en Ensenada',
          schema: financingSchema
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <section className="relative overflow-hidden bg-brand-blue py-16 text-white md:py-24">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-blue/90"></div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-4xl font-bold md:text-6xl"
            >
              Financiamiento de <span className="text-amber-500">autos en Ensenada</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mx-auto max-w-3xl text-xl font-medium text-gray-200"
            >
              Simula tu crédito para comprar un auto seminuevo en Ensenada. Revisa
              enganche, plazo y mensualidad con opciones de financiamiento en
              Seminuevos Baja.
            </motion.p>
          </div>
        </section>

        <FinancingBenefits />

        <div id="credit-simulator" className="border-y border-gray-200 bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Calcula tu mensualidad
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Usa nuestro simulador para estimar tus pagos. Ajusta el enganche y el
                plazo para encontrar una mensualidad más cercana a tu presupuesto.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
              <CreditCalculator
                initialPrice={precioParam}
                carName={autoParam}
                isPriceLocked={isPriceLocked}
              />
            </div>

            <div className="mt-6 text-center">
              <p className="mx-auto max-w-3xl text-sm italic leading-relaxed text-gray-500">
                Simulación con fines informativos. No representa una oferta ni una
                aprobación de crédito. Los resultados pueden variar según las
                condiciones elegidas y el perfil crediticio del solicitante.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FinancingRequirements />
          </div>
        </div>

        <FinancingCTA />
      </div>
    </>
  );
}