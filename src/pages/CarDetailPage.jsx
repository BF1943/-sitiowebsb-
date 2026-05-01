
import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SiteContext } from '@/context/SiteContext';
import { Loader2, ArrowLeft, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatNumber } from '@/lib/utils';
import { generateCarSlug } from '@/lib/generateCarSlug.js';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';
import CarImageGallery from '@/components/CarImageGallery';
import CarDetailsSection from '@/components/CarDetailsSection';
import WhatsAppShare from '@/components/WhatsAppShare';

const SITE_URL = 'https://seminuevosbaja.com.mx';
const WHATSAPP_PHONE = '526461616696';
const BUSINESS_PHONE = '526469778808';
const DISPLAY_PHONE = '646 977 8808';
const DEFAULT_ROBOTS =
  'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';

const isUUID = (str) =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str || '');

function toAbsoluteUrl(url) {
  if (!url) return '';
  if (/^https?:\/\//i.test(url)) return url;
  return `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`;
}

function safeJsonLd(data) {
  if (!data) return '';
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

function getGlobalPrerenderData() {
  if (typeof window !== 'undefined' && window.__PRERENDER_DATA__) {
    return window.__PRERENDER_DATA__;
  }

  if (typeof globalThis !== 'undefined' && globalThis.__PRERENDER_DATA__) {
    return globalThis.__PRERENDER_DATA__;
  }

  return null;
}

function normalizeCarData(rawCar) {
  if (!rawCar) return null;

  return {
    ...rawCar,
    slug:
      rawCar.slug ||
      generateCarSlug(rawCar.marca, rawCar.modelo, rawCar.año) ||
      rawCar.id,
  };
}

function getInitialPrerenderCar(currentSlug) {
  const prerenderData = getGlobalPrerenderData();
  const rawCar = prerenderData?.car;

  if (!rawCar) return null;

  const normalizedCar = normalizeCarData(rawCar);
  if (!normalizedCar) return null;

  if (normalizedCar.slug === currentSlug || normalizedCar.id === currentSlug) {
    return normalizedCar;
  }

  return null;
}

export default function CarDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { siteName, supabase } = useContext(SiteContext);
  const { trackLeadInterest, trackEvent } = useGoogleAnalytics();

  // Use ref to store initial prerender car (only read once)
  const initialPrerenderCarRef = useRef(null);
  
  // Initialize only once on mount
  if (initialPrerenderCarRef.current === null) {
    initialPrerenderCarRef.current = getInitialPrerenderCar(slug);
  }

  const trackedCarIdRef = useRef(null);
  const hasNavigatedRef = useRef(false);
  const fetchAbortControllerRef = useRef(null);

  const [car, setCar] = useState(initialPrerenderCarRef.current);
  const [loading, setLoading] = useState(!initialPrerenderCarRef.current);
  const [error, setError] = useState(false);

  // Clean up prerender data only once on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.__PRERENDER_DATA__) {
      delete window.__PRERENDER_DATA__;
    }
  }, []);

  // Handle slug navigation - separate effect to avoid interference
  useEffect(() => {
    if (!car?.slug) return;
    if (slug === car.slug) return;
    if (hasNavigatedRef.current) return;

    hasNavigatedRef.current = true;
    navigate(`/auto/${car.slug}`, { replace: true });
  }, [car?.slug, slug, navigate]);

  // Track analytics - separate effect with proper guards
  useEffect(() => {
    if (!car?.id) return;
    if (trackedCarIdRef.current === car.id) return;

    trackedCarIdRef.current = car.id;

    const trackView = async () => {
      try {
        await trackEvent('view_item', {
          item_id: car.id,
          item_name: `${car.marca} ${car.modelo} ${car.año}`,
          price: car.precio,
        });
      } catch (analyticsError) {
        console.error('Error tracking view_item:', analyticsError);
      }
    };

    trackView();
  }, [car?.id, car?.marca, car?.modelo, car?.año, car?.precio, trackEvent]);

  // Main data fetch effect - SIMPLIFIED to prevent infinite loops
  useEffect(() => {
    // Abort any pending fetch
    if (fetchAbortControllerRef.current) {
      fetchAbortControllerRef.current.abort();
    }

    // Create new abort controller for this fetch
    const abortController = new AbortController();
    fetchAbortControllerRef.current = abortController;

    // Reset navigation flag when slug changes
    hasNavigatedRef.current = false;

    const fetchCarDetails = async () => {
      // Guard clause - no supabase or slug
      if (!supabase || !slug) {
        setCar(null);
        setError(true);
        setLoading(false);
        return;
      }

      // Check if we have prerender data that matches
      const initialCar = initialPrerenderCarRef.current;
      if (initialCar && (initialCar.slug === slug || initialCar.id === slug)) {
        // Use prerender data immediately
        setCar(initialCar);
        setError(false);
        setLoading(false);
        // Clear the ref so we don't reuse it
        initialPrerenderCarRef.current = null;
        return;
      }

      try {
        setLoading(true);
        setError(false);

        let query = supabase.from('fotos_de_autos').select('*').limit(1);

        if (isUUID(slug)) {
          query = query.or(`slug.eq.${slug},id.eq.${slug}`);
        } else {
          query = query.eq('slug', slug);
        }

        const { data, error: fetchError } = await query
          .abortSignal(abortController.signal)
          .maybeSingle();

        // Check if aborted
        if (abortController.signal.aborted) {
          return;
        }

        if (fetchError) {
          console.error('Supabase fetch error:', fetchError);
          setCar(null);
          setError(true);
          setLoading(false);
          return;
        }

        if (!data) {
          console.warn('No car data found for slug:', slug);
          setCar(null);
          setError(true);
          setLoading(false);
          return;
        }

        const normalizedCar = normalizeCarData(data);

        if (!normalizedCar) {
          setCar(null);
          setError(true);
          setLoading(false);
          return;
        }

        setCar(normalizedCar);
        setError(false);
        setLoading(false);
      } catch (err) {
        // Ignore abort errors
        if (err.name === 'AbortError') {
          return;
        }

        console.error('Error fetching car details:', err);
        setCar(null);
        setError(true);
        setLoading(false);
      }
    };

    fetchCarDetails();

    // Cleanup function
    return () => {
      if (fetchAbortControllerRef.current) {
        fetchAbortControllerRef.current.abort();
      }
    };
  }, [slug, supabase]);

  const canonicalPath = useMemo(() => {
    if (car?.slug) return `/auto/${car.slug}`;
    return slug ? `/auto/${slug}` : '/inventario';
  }, [car?.slug, slug]);

  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  const primaryImage = useMemo(() => {
    if (!car?.foto_url) return '';

    const firstImage =
      car.foto_url
        .split(',')
        .map((url) => url.trim())
        .find(Boolean) || '';

    return toAbsoluteUrl(firstImage);
  }, [car?.foto_url]);

  const carName = useMemo(() => {
    if (!car) return '';
    return `${car.marca} ${car.modelo} ${car.año}`.trim();
  }, [car]);

  const title = useMemo(() => {
    if (!car) return `Vehículo en Ensenada | ${siteName || 'Seminuevos Baja'}`;
    return `${carName} en Ensenada | ${siteName || 'Seminuevos Baja'}`;
  }, [car, carName, siteName]);

  const carDescription = useMemo(() => {
    if (!car) {
      return 'Consulta el inventario de autos seminuevos disponibles en Ensenada con Seminuevos Baja.';
    }

    const mileageText = car.kilometraje
      ? `${formatNumber(car.kilometraje)} km`
      : 'kilometraje no especificado';

    const colorText = car.color ? `, color ${car.color}` : '';
    const transmissionText =
      car['transmisión'] || car.transmision
        ? `, transmisión ${car['transmisión'] || car.transmision}`
        : '';

    return `${carName} en venta en Ensenada con ${mileageText}${colorText}${transmissionText}. Garantía mecánica y financiamiento disponible en ${siteName || 'Seminuevos Baja'}.`;
  }, [car, carName, siteName]);

  const imageAlt = useMemo(() => {
    if (!carName) return 'Auto seminuevo en Ensenada';
    return `${carName}${car?.color ? `, color ${car.color}` : ''}, en Seminuevos Baja`;
  }, [carName, car?.color]);

  const carSchema = useMemo(() => {
    if (!car) return null;

    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Inicio',
              item: SITE_URL,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Inventario',
              item: `${SITE_URL}/inventario`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: carName,
              item: canonicalUrl,
            },
          ],
        },
        {
          '@type': 'Car',
          name: carName,
          brand: car.marca
            ? {
                '@type': 'Brand',
                name: car.marca,
              }
            : undefined,
          model: car.modelo,
          vehicleModelDate: String(car.año || ''),
          color: car.color || undefined,
          mileageFromOdometer: car.kilometraje
            ? {
                '@type': 'QuantitativeValue',
                value: car.kilometraje,
                unitCode: 'KMT',
              }
            : undefined,
          vehicleTransmission:
            car['transmisión'] || car.transmision || 'No especificada',
          itemCondition: 'https://schema.org/UsedCondition',
          image: primaryImage || undefined,
          url: canonicalUrl,
          offers: {
            '@type': 'Offer',
            price: car.precio || 0,
            priceCurrency: 'MXN',
            availability: 'https://schema.org/InStock',
            itemCondition: 'https://schema.org/UsedCondition',
            url: canonicalUrl,
            warranty: {
              '@type': 'WarrantyPromise',
              durationOfWarranty: {
                '@type': 'QuantitativeValue',
                value: 12,
                unitCode: 'MON',
              },
              warrantyScope: 'https://schema.org/PartsAndLaborWarranty',
            },
            seller: {
              '@type': 'AutoDealer',
              name: siteName || 'Seminuevos Baja',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Calle Delante #200, Fracc. Costa Azul',
                addressLocality: 'Ensenada',
                addressRegion: 'Baja California',
                postalCode: '22890',
                addressCountry: 'MX',
              },
              telephone: `+${BUSINESS_PHONE}`,
            },
          },
        },
      ],
    };
  }, [car, carName, canonicalUrl, primaryImage, siteName]);

  const handleInterest = useCallback(() => {
    if (!car) return;

    try {
      trackLeadInterest({
        autoId: car.id,
        autoModelo: carName,
        autoPrecio: car.precio,
      });
    } catch (analyticsError) {
      console.error('Error tracking lead interest:', analyticsError);
    }

    const mileageText = car.kilometraje ? formatNumber(car.kilometraje) : 'N/D';

    const message = `Hola, me interesa este auto que vi en ${
      siteName || 'Seminuevos Baja'
    }: ${carName}, color ${car.color || 'N/D'}, con ${mileageText} km. Precio: ${
      formatNumber(car.precio, { style: 'currency' }) || 'Consultar'
    }`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }, [car, carName, siteName, trackLeadInterest]);

  const handleSimulateCredit = useCallback(async () => {
    if (!car) return;

    try {
      await trackEvent('lead_credit_simulation', {
        simulation_type: 'detail_page',
        car_id: car.id,
        car_name: carName,
      });
    } catch (analyticsError) {
      console.error('Error tracking credit simulation:', analyticsError);
    }

    const carShortName = `${car.marca} ${car.modelo}`.trim();
    navigate(
      `/financiamiento?auto=${encodeURIComponent(
        carShortName
      )}&precio=${encodeURIComponent(car.precio || '')}#credit-simulator`
    );
  }, [car, carName, navigate, trackEvent]);

  const handleRetry = useCallback(() => {
    // Force refetch by updating slug in URL (trigger useEffect)
    window.location.reload();
  }, []);

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Cargando vehículo... | {siteName || 'Seminuevos Baja'}</title>
          <meta name="robots" content="noindex,nofollow" />
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:url" content={canonicalUrl} />
        </Helmet>

        <div className="flex min-h-screen flex-col items-center justify-center bg-brand-blue pb-12 pt-24">
          <Loader2 className="mb-4 h-12 w-12 animate-spin text-amber-500" />
          <p className="text-lg font-semibold text-white">
            Cargando detalles del vehículo...
          </p>
        </div>
      </>
    );
  }

  if (error || !car) {
    return (
      <>
        <Helmet>
          <title>Vehículo no encontrado | {siteName || 'Seminuevos Baja'}</title>
          <meta
            name="description"
            content="Este vehículo ya no está disponible o no pudimos cargar su información. Explora el inventario actualizado de Seminuevos Baja."
          />
          <meta name="robots" content="noindex,follow" />
          <meta name="googlebot" content="noindex,follow" />
          <link rel="canonical" href={`${SITE_URL}/inventario`} />
          <meta
            property="og:title"
            content={`Vehículo no encontrado | ${siteName || 'Seminuevos Baja'}`}
          />
          <meta
            property="og:description"
            content="Este vehículo ya no está disponible o no pudimos cargar su información."
          />
          <meta property="og:url" content={`${SITE_URL}/inventario`} />
          <meta property="og:type" content="website" />
        </Helmet>

        <div className="flex min-h-screen flex-col items-center justify-center bg-brand-blue px-4 pb-12 pt-24">
          <div className="max-w-lg rounded-2xl border border-red-500/30 bg-red-900/20 p-8 text-center">
            <AlertTriangle className="mx-auto mb-4 h-16 w-16 text-red-500" />
            <h1 className="mb-4 text-2xl font-bold text-white">
              Vehículo no encontrado
            </h1>
            <p className="mb-8 text-gray-300">
              No pudimos cargar la información de este vehículo. Es posible que ya no esté disponible o haya un problema de conexión.
            </p>

            <div className="flex justify-center gap-4">
              <Link to="/inventario">
                <Button
                  variant="outline"
                  className="border-gray-500 text-gray-300 hover:text-white"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al inventario
                </Button>
              </Link>

              <Button
                onClick={handleRetry}
                className="bg-amber-500 font-bold text-gray-900 hover:bg-amber-600"
              >
                Reintentar
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={carDescription} />
        <meta name="robots" content={DEFAULT_ROBOTS} />
        <meta name="googlebot" content={DEFAULT_ROBOTS} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={carDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="product" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content={siteName || 'Seminuevos Baja'} />
        {primaryImage && <meta property="og:image" content={primaryImage} />}
        {primaryImage && <meta property="og:image:secure_url" content={primaryImage} />}
        {primaryImage && <meta property="og:image:alt" content={imageAlt} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={carDescription} />
        {primaryImage && <meta name="twitter:image" content={primaryImage} />}
        {primaryImage && <meta name="twitter:image:alt" content={imageAlt} />}

        {carSchema && (
          <script type="application/ld+json">{safeJsonLd(carSchema)}</script>
        )}
      </Helmet>

      <div className="min-h-screen bg-brand-blue pb-12 pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/inventario"
            className="group mb-6 flex items-center text-gray-400 transition-colors hover:text-amber-500"
          >
            <ArrowLeft className="mr-2 h-5 w-5 transform transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Volver al inventario</span>
          </Link>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="space-y-8 lg:col-span-2">
              <CarImageGallery
                imageUrl={car.foto_url}
                altText={`${carName} en Ensenada`}
              />
              <CarDetailsSection car={car} />
            </div>

            <div className="space-y-6">
              <div className="sticky top-28 rounded-2xl border border-amber-500/20 bg-gray-900/50 p-6 shadow-xl backdrop-blur-sm md:p-8">
                <div className="mb-6">
                  <h1 className="mb-2 text-3xl font-bold leading-tight text-white md:text-4xl">
                    {car.marca} <span className="text-amber-500">{car.modelo}</span>
                  </h1>

                  <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-semibold text-white">
                    Año {car.año}
                  </span>
                </div>

                <div className="mb-8 border-y border-white/10 py-6">
                  <p className="mb-1 text-sm font-medium uppercase tracking-wider text-gray-400">
                    Precio de venta
                  </p>
                  <p className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                    {formatNumber(car.precio, { style: 'currency' }) || 'Consultar'}
                  </p>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={handleSimulateCredit}
                    className="w-full rounded-xl bg-white py-6 text-lg font-bold text-gray-900 shadow-lg transition-transform duration-200 hover:scale-[1.02] hover:bg-gray-100"
                    size="lg"
                    aria-label={`Simular crédito para ${carName}`}
                  >
                    Simula tu crédito
                  </Button>

                  <div className="flex gap-3">
                    <Button
                      onClick={handleInterest}
                      className="flex-1 rounded-xl bg-amber-500 py-6 text-lg font-bold text-gray-900 shadow-lg transition-transform duration-200 hover:scale-[1.02] hover:bg-amber-600"
                      size="lg"
                      aria-label={`Me interesa ${carName}`}
                    >
                      Me interesa
                    </Button>

                    <WhatsAppShare
                      carDetails={{
                        marca: car.marca,
                        modelo: car.modelo,
                        año: car.año,
                        precio: car.precio,
                      }}
                      carId={car.id}
                    />
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6 text-center">
                  <p className="text-sm text-gray-400">
                    ¿Tienes dudas? Llámanos al{' '}
                    <a
                      href={`tel:+${BUSINESS_PHONE}`}
                      className="font-bold text-amber-500 hover:underline"
                    >
                      {DISPLAY_PHONE}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
