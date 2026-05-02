
import React, { useState, useEffect, useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Star,
  Users,
  Car,
  Gauge,
  GitBranch,
  Loader2,
  Wrench,
  Palette,
  ShieldCheck,
  HeartHandshake as Handshake,
  Check,
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { SiteContext } from '@/context/SiteContext.jsx';
import { formatNumber } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';
import { getImageUrl, FALLBACK_IMAGE, resolveImageUrlSync } from '@/lib/getImageUrl.js';
import { generateCarSlug } from '@/lib/generateCarSlug';
import { PageSEO } from '@/hooks/useSEO';

const SITE_URL = 'https://seminuevosbaja.com.mx';
const HOME_OG_IMAGE = `${SITE_URL}/og-image.png`;
const HOME_LOGO_IMAGE = `${SITE_URL}/logo.png`;
const BUSINESS_PHONE = '+526469778808';
const WHATSAPP_NUMBER = '526461616696';

const buyingBenefits = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Garantía de 12 meses',
    description:
      'Compra con tranquilidad. Te respaldamos con una garantía de 12 meses que cubre 11 sistemas clave de tu vehículo.',
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    title: 'Financiamiento flexible',
    description:
      'Enganches bajos y planes para distintos perfiles. Te ayudamos a estrenar tu auto.',
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: 'Revisión mecánica completa',
    description:
      'Sin sorpresas ni gastos ocultos. Compra con la tranquilidad de saber que tu auto está en buenas condiciones.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: '+15 años de experiencia',
    description:
      'Llevamos años seleccionando autos bien elegidos y en los que sí puedes confiar.',
  },
];

const testimonials = [
  {
    name: 'María González',
    text: 'Excelente servicio, vendí mi auto en menos de una semana. Muy profesionales.',
    rating: 5,
  },
  {
    name: 'Carlos Ramírez',
    text: 'Encontré el auto perfecto para mi familia. Precios justos y buena atención.',
    rating: 5,
  },
  {
    name: 'Ana Martínez',
    text: 'El proceso de financiamiento fue muy sencillo. Altamente recomendado.',
    rating: 5,
  },
];

const faqData = [
  {
    question: '¿Venden autos chocolate o importados?',
    answer:
      'No. Solo comercializamos autos nacionales de agencia: vehículos que en su momento se vendieron como nuevos en una agencia o distribuidor autorizado en México. Nunca vendemos autos importados, "chocolate" ni regularizados por decreto. Esto te da certeza legal y facilita trámites como seguro, tenencia y verificación en Baja California.',
  },
  {
    question: '¿Los autos pasan revisión mecánica antes de venderse?',
    answer:
      'Sí. Todos los vehículos de nuestro inventario pasan revisión mecánica antes de ponerse a la venta. La mayoría son autos de un solo dueño con garantía vigente de agencia. Si la garantía de fábrica ya venció, entregamos una póliza de garantía mecánica propia de 12 meses que cubre 11 sistemas clave: motor, transmisión, frenos, suspensión, dirección, sistema eléctrico y aire acondicionado, entre otros.',
  },
  {
    question: '¿Puedo comprar un seminuevo sin historial de crédito o sin comprobante de ingresos?',
    answer:
      'Sí. Contamos con opciones de financiamiento para personas sin historial crediticio o sin comprobación de ingresos formal, para vehículos de hasta $350,000 MXN. Si trabajas por tu cuenta, recibes ingresos en efectivo o simplemente no tienes buró de crédito, contáctanos y evaluamos tu caso particular.',
  },
  {
    question: '¿Cuánto es el enganche mínimo y a cuántos meses puedo pagar?',
    answer:
      'El enganche mínimo es del 10% del valor del vehículo y ofrecemos plazos de hasta 60 meses (5 años). Puedes usar el simulador de crédito en línea en la sección de Financiamiento para calcular tu mensualidad antes de visitarnos.',
  },
  {
    question: '¿Cuánto tarda la aprobación del crédito?',
    answer:
      'Una vez que tienes tus documentos completos y la solicitud firmada, la aprobación generalmente toma alrededor de 24 horas. Trabajamos con BBVA, Banorte, Hey Banco y Crédito Go para ofrecerte las mejores condiciones del mercado.',
  },
  {
    question: '¿Cómo funciona el avalúo para vender mi auto?',
    answer:
      'Agenda una cita por WhatsApp o teléfono, lleva tu auto a nuestras instalaciones en Fracc. Costa Azul y nuestros expertos lo revisan. En menos de 20 minutos recibes una oferta real basada en el mercado actual de Baja California. Si aceptas, el pago se realiza el mismo día.',
  },
  {
    question: '¿Aceptan autos que todavía se están pagando (con adeudo activo)?',
    answer:
      'Sí. Aceptamos autos con financiamiento vigente. Al concretarse la venta, liquidamos directamente el saldo pendiente con el banco o financiera y te entregamos la diferencia.',
  },
  {
    question: '¿Qué es la consignación y cómo funciona?',
    answer:
      'Dejas tu auto en nuestras instalaciones y nosotros nos encargamos de todo: fotografía profesional, publicación en plataformas, atención a compradores y la transacción segura. Revisamos contigo el valor de mercado y definimos una estrategia realista para buscar una mejor oportunidad de venta. Solo pagas si se vende.',
  },
  {
    question: '¿Atienden a clientes de Tijuana, Rosarito u otras ciudades de Baja California?',
    answer:
      'Sí. Nuestra sucursal está en Ensenada, pero atendemos clientes de toda Baja California. Si no puedes venir de inmediato, puedes iniciar el proceso enviando tus documentos por WhatsApp al +52 646 161 6696 o por correo a info@seminuevosbaja.com.mx.',
  },
  {
    question: '¿Dónde están ubicados y tienen estacionamiento?',
    answer:
      'Estamos en Calle Delante #200, Fracc. Costa Azul, Ensenada, Baja California. Contamos con estacionamiento exclusivo. Atendemos de lunes a viernes de 9:00 a 17:00 y sábados de 10:00 a 15:00.',
  },
];

function getGlobalPrerenderData() {
  if (typeof globalThis !== 'undefined' && globalThis.__PRERENDER_DATA__) {
    return globalThis.__PRERENDER_DATA__;
  }

  return null;
}

function getFirstImageUrl(urlString) {
  return urlString?.split(',')[0]?.trim() || FALLBACK_IMAGE;
}

function isHostingerPreview() {
  if (typeof window === 'undefined') return false;

  const host = window.location.hostname || '';
  return host === 'app-preview.com' || host.endsWith('.app-preview.com');
}

function normalizeFeaturedCar(rawCar) {
  if (!rawCar) return null;

  const brand = rawCar.brand || rawCar.marca;
  const model = rawCar.model || rawCar.modelo;
  const year = rawCar.year || rawCar.año;

  return {
    id: rawCar.id,
    slug: rawCar.slug || generateCarSlug(brand, model, year) || rawCar.id,
    brand,
    model,
    year,
    price: rawCar.price || rawCar.precio,
    mileage: rawCar.mileage || rawCar.kilometraje,
    transmission: rawCar.transmission || rawCar['transmisión'] || rawCar.transmision,
    color: rawCar.color,
    motor: rawCar.motor || rawCar.cilindros,
    warranty: rawCar.warranty || rawCar['garantía'],
    foto_url: getFirstImageUrl(rawCar.foto_url || rawCar.image),
  };
}

function getInitialPrerenderFeaturedCars() {
  const prerenderData = getGlobalPrerenderData();
  const rawCars = prerenderData?.featuredCars || prerenderData?.homeFeaturedCars;

  if (!Array.isArray(rawCars)) return [];

  return rawCars.map(normalizeFeaturedCar).filter(Boolean);
}

function getFeaturedCarAlt(car) {
  const parts = [
    `${car.brand} ${car.model} ${car.year}`,
    car.color ? `color ${car.color}` : '',
    car.mileage ? `${formatNumber(car.mileage)} km` : '',
    'Seminuevos Baja',
  ].filter(Boolean);

  return parts.join(', ');
}

const BenefitCard = ({ icon, title, description, index }) => (
  <motion.div
    key={title}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex h-full flex-col rounded-lg bg-gray-50 p-6 text-center shadow-lg"
  >
    <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
    <p className="flex-grow font-bold text-gray-600">{description}</p>
  </motion.div>
);

const SellingOptionCard = ({ title, benefits, buttonLink, buttonText, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="flex h-full flex-col rounded-lg bg-gray-50 p-8 shadow-lg"
  >
    <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">{title}</h3>
    <ul className="mb-8 flex-grow space-y-4">
      {benefits.map((benefit, i) => (
        <li key={i} className="flex items-start">
          <Check className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
          <span className="font-bold text-gray-700">{benefit}</span>
        </li>
      ))}
    </ul>
    {buttonLink && buttonText ? (
      <div className="mt-auto text-center">
        <Button asChild size="lg">
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    ) : null}
  </motion.div>
);

export default function Home() {
  const { siteName } = useContext(SiteContext);
  const initialPrerenderFeaturedCars = useMemo(
    () => getInitialPrerenderFeaturedCars(),
    []
  );

  const [featuredCars, setFeaturedCars] = useState(initialPrerenderFeaturedCars);
  const [loading, setLoadingState] = useState(initialPrerenderFeaturedCars.length === 0);

  const navigate = useNavigate();
  const { toast } = useToast();
  const { trackLeadInterest, trackEvent, trackWhatsAppClick } =
    useGoogleAnalytics();

  const pageTitle =
    'Seminuevos Ensenada | Autos Nacionales con Garantía';
  const pageDescription =
    'Compra autos seminuevos nacionales en Ensenada con póliza de garantía mecánica de 12 meses, financiamiento y atención directa.';
  const canonicalUrl = SITE_URL;

  const getCarDetailUrl = (car) => `/auto/${car.slug || car.id}`;

  useEffect(() => {
    let isMounted = true;

    if (initialPrerenderFeaturedCars.length > 0) {
      setLoadingState(false);
      return () => {
        isMounted = false;
      };
    }

    if (isHostingerPreview()) {
      setFeaturedCars([]);
      setLoadingState(false);
      return () => {
        isMounted = false;
      };
    }

    const fetchFeaturedCars = async () => {
      const { supabase: supabaseClient } = await import('@/lib/supabase');

      if (!supabaseClient) {
        if (isMounted) {
          setLoadingState(false);
        }
        return;
      }

      try {
        setLoadingState(true);

        let { data: cars, error } = await supabaseClient
          .from('fotos_de_autos')
          .select('*')
          .eq('destacado', true)
          .order('created_at', { ascending: false })
          .limit(3);

        if (error) {
          throw error;
        }

        if (!cars || cars.length === 0) {
          const fallbackResult = await supabaseClient
            .from('fotos_de_autos')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(3);

          if (fallbackResult.error) {
            throw fallbackResult.error;
          }

          cars = fallbackResult.data || [];
        }

        if (!isMounted) return;

        const formattedCars = await Promise.all(
          (cars || []).map(async (rawCar) => {
            const normalizedCar = normalizeFeaturedCar(rawCar);
            const firstUrl = getFirstImageUrl(normalizedCar.foto_url);
            const resolvedUrl = await getImageUrl(firstUrl, supabaseClient);

            return {
              ...normalizedCar,
              foto_url: resolvedUrl || FALLBACK_IMAGE,
            };
          })
        );

        setFeaturedCars(formattedCars.filter(Boolean));
      } catch {
        if (isMounted) {
          setFeaturedCars([]);
          toast({
            variant: 'destructive',
            title: 'Aviso de conexión',
            description:
              'No se pudieron cargar los autos destacados en este momento.',
          });
        }
      } finally {
        if (isMounted) {
          setLoadingState(false);
        }
      }
    };

    fetchFeaturedCars();

    return () => {
      isMounted = false;
    };
  }, [toast, initialPrerenderFeaturedCars.length]);

  const homeSchema = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AutoDealer',
          name: siteName || 'Seminuevos Baja',
          alternateName: 'Seminuevos Ensenada',
          description:
            'Seminuevos Ensenada con autos nacionales, garantía mecánica y opciones de financiamiento. Compra con mayor seguridad en Seminuevos Baja.',
          url: canonicalUrl,
          telephone: BUSINESS_PHONE,
          image: HOME_OG_IMAGE,
          logo: HOME_LOGO_IMAGE,
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Calle Delante #200, Fracc. Costa Azul',
            addressLocality: 'Ensenada',
            addressRegion: 'Baja California',
            postalCode: '22890',
            addressCountry: 'MX',
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '17:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: 'Saturday',
              opens: '10:00',
              closes: '15:00',
            },
          ],
          areaServed: [
            'Ensenada',
            'Tijuana',
            'Rosarito',
            'San Quintín',
            'Valle de Guadalupe',
          ],
          sameAs: [
            'https://www.facebook.com/seminuevosbaja',
            'https://www.instagram.com/seminuevosbaja',
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Inventario de autos seminuevos en Ensenada',
            url: `${SITE_URL}/inventario`,
          },
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqData.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        },
      ],
    };
  }, [siteName]);

  const handleInterest = (e, car) => {
    e.stopPropagation();

    trackLeadInterest({
      autoId: car.id,
      autoModelo: `${car.brand} ${car.model} ${car.year}`,
      autoPrecio: car.price,
    });

    trackWhatsAppClick('WhatsApp', 'Home Page Featured Car');

    const mileageText = car.mileage ? formatNumber(car.mileage) : 'N/D';
    const message = `Hola, vi este auto en la página de ${
      siteName || 'Seminuevos Baja'
    } y me interesa agendar una cita para verlo: ${car.brand} ${car.model} ${
      car.year
    }, color ${car.color || 'N/D'}, con ${mileageText} km. ¿Me podrían dar más detalles, por favor?`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSimulateCredit = async (e, car) => {
    e.stopPropagation();

    try {
      await trackEvent('lead_credit_simulation', {
        simulation_type: 'credit',
        car_id: car.id,
        car_name: `${car.brand} ${car.model} ${car.year}`,
      });
    } catch {}

    const carName = `${car.brand} ${car.model}`;
    navigate(
      `/financiamiento?auto=${encodeURIComponent(
        carName
      )}&precio=${encodeURIComponent(car.price || '')}#credit-simulator`
    );
  };

  return (
    <>
      <PageSEO
        routeKey="home"
        customConfig={{
          title: pageTitle,
          description: pageDescription,
          canonical: '/',
          ogImage: HOME_OG_IMAGE,
          twitterImage: HOME_OG_IMAGE,
          ogImageAlt: 'Seminuevos Ensenada con autos nacionales y garantía',
          twitterImageAlt: 'Seminuevos Ensenada con autos nacionales y garantía',
          schema: homeSchema,
        }}
      />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <picture>
            <source
              media="(max-width: 640px)"
              type="image/webp"
              srcSet="/hero-seminuevos-mobile-750.webp 750w, /hero-seminuevos-mobile-900.webp 900w"
              sizes="100vw"
            />
            <source
              media="(max-width: 640px)"
              srcSet="/hero-seminuevos-mobile-900.jpg"
            />
            <source
              type="image/webp"
              srcSet="/hero-seminuevos-1280.webp 1280w, /hero-seminuevos-1920.webp 1920w"
              sizes="100vw"
            />
            <img
              className="h-full w-full object-cover object-center"
              alt="Seminuevos Ensenada | BMW 5 Series y Porsche Panamera en exhibición, autos seminuevos nacionales en Seminuevos Baja"
              src="/hero-seminuevos-1280.jpg"
              srcSet="/hero-seminuevos-1280.jpg 1280w, /hero-seminuevos-1920.jpg 1920w"
              sizes="100vw"
              width="1920"
              height="1080"
              // React 18.2 SSR warns on fetchPriority; lowercase emits the browser attribute cleanly.
              // eslint-disable-next-line react/no-unknown-property
              fetchpriority="high"
              loading="eager"
              decoding="async"
            />
          </picture>
          <div className="hero-gradient absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              Seminuevos Ensenada | Autos nacionales con garantía
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl font-bold text-gray-300 md:text-2xl">
              Encuentra autos seminuevos nacionales en Ensenada con garantía mecánica,
              financiamiento flexible e inventario listo para entrega.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="btn-glow w-full px-8 py-3 text-lg sm:w-auto"
              >
                <Link to="/inventario">Ver seminuevos Ensenada</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-white px-8 py-3 text-lg text-white hover:bg-white hover:text-gray-900 sm:w-auto"
              >
                <Link to="/financiamiento">Simula tu crédito</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-white px-8 py-3 text-lg text-white hover:bg-white hover:text-gray-900 sm:w-auto"
              >
                <Link to="/vender">Vender mi auto</Link>
              </Button>
            </div>

            <p className="mt-6 text-sm font-bold text-gray-300">
              ¿Prefieres vender o consignar?{' '}
              <Link to="/consigna" className="underline underline-offset-4 hover:text-white">
                Conoce cómo funciona la consignación
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              ¿Por qué elegir Seminuevos Baja?
            </h2>
            <p className="mx-auto max-w-3xl text-lg font-bold text-gray-600">
              Si buscas una agencia de autos en Ensenada, aquí encuentras autos
              nacionales con garantía mecánica, financiamiento y un proceso más claro de
              compra.
            </p>
          </div>

          <Tabs defaultValue="buy" className="w-full">
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-2 bg-gray-200">
              <TabsTrigger value="buy" className="py-2.5 font-bold">
                ¿Quieres comprar?
              </TabsTrigger>
              <TabsTrigger value="sell" className="py-2.5 font-bold">
                ¿Quieres vender?
              </TabsTrigger>
            </TabsList>

            <TabsContent value="buy" className="mt-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {buyingBenefits.map((benefit, index) => (
                  <BenefitCard {...benefit} index={index} key={benefit.title} />
                ))}
              </div>

              <div className="mt-10 text-center">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-amber-500 text-amber-600 hover:bg-amber-50 hover:text-amber-700"
                >
                  <Link to="/inventario">Ver autos seminuevos en Ensenada</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="sell" className="mt-12">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                <SellingOptionCard
                  index={0}
                  title="Opción 1: venta directa"
                  benefits={[
                    'Avalúo profesional: revisamos tu auto y te damos una oferta clara.',
                    'Pago inmediato: recibe tu dinero el mismo día, sin trámites eternos.',
                    'Seguridad total: evita riesgos y fraudes. Nosotros nos encargamos del proceso.',
                  ]}
                />

                <SellingOptionCard
                  index={1}
                  title="Opción 2: consignación"
                  benefits={[
                    'Mejor oportunidad de venta: revisamos el valor de mercado y definimos una estrategia realista contigo.',
                    'Nosotros hacemos el trabajo: promovemos tu auto, atendemos interesados y acompañamos el proceso de venta.',
                  ]}
                  buttonText="Ver el proceso completo"
                  buttonLink="/consigna"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="bg-brand-blue py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Autos seminuevos destacados en Ensenada
            </h2>
            <p className="mx-auto max-w-2xl text-lg font-bold text-gray-300">
              Autos nacionales con garantía y opciones de financiamiento. Elige tu
              próximo auto hoy.
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-10">
              <Loader2 className="h-12 w-12 animate-spin text-amber-500" />
            </div>
          ) : featuredCars.length > 0 ? (
            <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCars.map((car, index) => {
                const firstUrl =
                  typeof car.foto_url === 'string'
                    ? car.foto_url.split(',')[0].trim()
                    : car.foto_url;
                const imgSrc = resolveImageUrlSync(firstUrl, null, {
                  width: 600,
                  height: 600,
                  quality: 75,
                  fit: 'cover',
                });

                return (
                <motion.article
                  key={car.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="car-card flex flex-col overflow-hidden rounded-xl bg-gray-900/50 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-amber-500/20"
                >
                  <Link to={getCarDetailUrl(car)} className="block">
                    <div className="aspect-square w-full overflow-hidden">
                      <img
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                        alt={getFeaturedCarAlt(car)}
                        src={imgSrc || FALLBACK_IMAGE}
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="600"
                      />
                    </div>
                  </Link>

                  <div className="flex flex-grow flex-col p-6 text-white">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <Link to={getCarDetailUrl(car)} className="block">
                        <h3 className="text-2xl font-bold text-white">
                          {car.brand} {car.model}
                        </h3>
                      </Link>

                      <span className="rounded-full bg-amber-400 px-3 py-1 text-sm font-semibold text-gray-900">
                        {car.year}
                      </span>
                    </div>

                    <div className="mb-6 grid grid-cols-2 gap-x-4 gap-y-4 text-base font-bold text-gray-300">
                      <div className="flex items-center space-x-2">
                        <Gauge className="h-5 w-5 text-amber-500" />
                        <span>{car.mileage ? formatNumber(car.mileage) : 'N/A'} km</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <GitBranch className="h-5 w-5 text-amber-500" />
                        <span>{car.transmission || 'N/A'}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Palette className="h-5 w-5 text-amber-500" />
                        <span>{car.color || 'N/A'}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Wrench className="h-5 w-5 text-amber-500" />
                        <span>{car.motor || 'N/A'}</span>
                      </div>
                    </div>

                    <div className="mb-6 flex items-center space-x-2 text-base font-bold text-gray-300">
                      <ShieldCheck className="h-5 w-5 text-amber-500" />
                      <span>{car.warranty || 'N/A'}</span>
                    </div>

                    <div className="mt-auto flex flex-col items-center gap-4 border-t border-white/20 pt-6">
                      <Link
                        to={getCarDetailUrl(car)}
                        className="text-3xl font-bold text-white hover:opacity-90"
                        aria-label={`Ver detalle de ${car.brand} ${car.model} ${car.year}`}
                      >
                        {formatNumber(car.price, { style: 'currency' }) || 'N/A'}
                      </Link>

                      <Button
                        onClick={(e) => handleSimulateCredit(e, car)}
                        className="w-full rounded-xl py-3 text-lg font-bold transition-transform duration-200 hover:scale-105 sm:w-4/5"
                        size="lg"
                      >
                        Simula tu crédito
                      </Button>

                      <Button
                        onClick={(e) => handleInterest(e, car)}
                        className="w-full rounded-xl py-3 text-lg font-bold transition-transform duration-200 hover:scale-105 sm:w-4/5"
                        size="lg"
                      >
                        Me interesa
                      </Button>
                    </div>
                  </div>
                </motion.article>
                );
              })}
            </div>
          ) : (
            <div className="py-10 text-center text-white">
              <Car className="mx-auto mb-4 h-12 w-12 text-gray-500" />
              <p className="text-lg font-bold text-gray-400">
                No hay autos destacados en este momento.
              </p>
              <p className="font-bold text-gray-500">
                Vuelve pronto para ver nuestro inventario de autos seminuevos en
                Ensenada.
              </p>
            </div>
          )}

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-gray-900"
            >
              <Link to="/inventario">Ver autos seminuevos en Ensenada</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Opiniones de clientes de Seminuevos Baja
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg bg-gray-50 p-6 shadow-lg"
              >
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-amber-400" />
                  ))}
                </div>

                <p className="mb-4 italic font-bold text-gray-600">
                  "{testimonial.text}"
                </p>

                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20" aria-labelledby="faq-home-title">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2
              id="faq-home-title"
              className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
            >
              Preguntas frecuentes sobre autos seminuevos en Ensenada
            </h2>
            <p className="text-lg font-bold text-gray-600">
              Resolvemos las dudas más comunes sobre compra, venta, consignación y
              financiamiento de autos en Baja California.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="rounded-lg border bg-white px-4 shadow-sm"
              >
                <AccordionTrigger className="py-5 text-left font-bold text-gray-800 hover:text-amber-500">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 text-center">
            <p className="mb-4 font-bold text-gray-600">
              ¿Tienes otra duda? Escríbenos directamente.
            </p>
            <Button
              onClick={() => {
                const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  'Hola, tengo una pregunta sobre sus autos seminuevos.'
                )}`;
                window.open(url, '_blank', 'noopener,noreferrer');
              }}
              size="lg"
              className="bg-green-600 font-bold text-white hover:bg-green-700"
            >
              Preguntar por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-brand-blue py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              ¿Listo para encontrar tu próximo auto en Ensenada?
            </h2>

            <p className="mb-8 text-lg font-bold text-gray-300">
              Revisa inventario, simula tu crédito y agenda tu visita con una agencia
              de autos seminuevos en Ensenada con garantía y financiamiento.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/inventario">Ver autos seminuevos en Ensenada</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                <Link to="/financiamiento">Simular crédito</Link>
              </Button>
            </div>

            <p className="mt-6 text-sm font-bold text-gray-300">
              ¿Quieres vender tu auto?{' '}
              <Link to="/vender" className="underline underline-offset-4 hover:text-white">
                Cotización de mi auto
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
