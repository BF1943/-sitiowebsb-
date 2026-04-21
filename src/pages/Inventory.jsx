import React, { useState, useEffect, useContext, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiteContext } from '@/context/SiteContext';
import { Loader2, Search, FilterX, AlertTriangle, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formatNumber } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';
import { PageSEO } from '@/hooks/useSEO';
import CarCard from '@/components/inventory/CarCard';
import { generateCarSlug } from '@/lib/generateCarSlug';

const SITE_URL = 'https://seminuevosbaja.com.mx';
const WHATSAPP_PHONE = '526461616696';

function getPrimaryImage(fotoUrl) {
  if (!fotoUrl) return '';
  return (
    fotoUrl
      .split(',')
      .map((url) => url.trim())
      .find(Boolean) || ''
  );
}

function getGlobalPrerenderData() {
  if (typeof globalThis !== 'undefined' && globalThis.__PRERENDER_DATA__) {
    return globalThis.__PRERENDER_DATA__;
  }

  return null;
}

function normalizeSearchValue(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function isHostingerPreview() {
  if (typeof window === 'undefined') return false;

  const host = window.location.hostname || '';
  return host === 'app-preview.com' || host.endsWith('.app-preview.com');
}

function formatInventoryCar(car) {
  if (!car) return null;

  if (car.brand && car.model) {
    return {
      ...car,
      slug: car.slug || generateCarSlug(car.brand, car.model, car.year) || car.id,
      featured: Boolean(car.featured),
    };
  }

  return {
    id: car.id,
    slug: car.slug || generateCarSlug(car.marca, car.modelo, car.año) || car.id,
    brand: car.marca,
    model: car.modelo,
    year: car.año,
    price: car.precio,
    mileage: car.kilometraje,
    transmission: car['transmisión'] || car.transmision || 'No especificada',
    color: car.color,
    motor: car.cilindros,
    warranty: car['garantía'],
    foto_url: car.foto_url,
    propietarios: car.propietarios,
    origen: car.origen,
    featured: Boolean(car.destacado),
  };
}

function getInitialPrerenderCars() {
  const prerenderData = getGlobalPrerenderData();
  const rawCars = prerenderData?.inventoryCars;

  if (!Array.isArray(rawCars)) return [];

  return rawCars.map(formatInventoryCar).filter(Boolean);
}

export default function Inventory() {
  const { siteName, supabase } = useContext(SiteContext);
  const initialPrerenderCars = useMemo(() => getInitialPrerenderCars(), []);
  const [cars, setCars] = useState(initialPrerenderCars);
  const [loading, setLoading] = useState(initialPrerenderCars.length === 0);
  const [fetchError, setFetchError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();
  const { toast } = useToast();
  const { trackLeadInterest, trackEvent, trackWhatsAppClick } = useGoogleAnalytics();

  const fetchCars = useCallback(
    async ({ background = false } = {}) => {
      if (!supabase) {
        if (!background) {
          setLoading(false);
        }
        return;
      }

      try {
        if (!background) {
          setLoading(true);
        }

        setFetchError(false);

        const { data, error } = await supabase
          .from('fotos_de_autos')
          .select('*')
          .order('destacado', { ascending: false, nullsFirst: false })
          .order('created_at', { ascending: false });

        if (error) throw error;

        const formattedCars = (data || []).map(formatInventoryCar).filter(Boolean);
        setCars(formattedCars);
      } catch {
        setFetchError(true);

        if (!background || initialPrerenderCars.length === 0) {
          toast({
            variant: 'destructive',
            title: 'Error de conexión',
            description: 'No se pudo cargar el inventario. Intenta de nuevo más tarde.',
          });
        }
      } finally {
        if (!background) {
          setLoading(false);
        }
      }
    },
    [supabase, toast, initialPrerenderCars.length]
  );

  useEffect(() => {
    if (initialPrerenderCars.length > 0) {
      setLoading(false);

      if (!isHostingerPreview()) {
        fetchCars({ background: true });
      }

      return;
    }

    if (isHostingerPreview()) {
      setCars([]);
      setFetchError(false);
      setLoading(false);
      return;
    }

    fetchCars({ background: false });
  }, [fetchCars, initialPrerenderCars.length]);

  const normalizedSearchTerm = useMemo(
    () => normalizeSearchValue(searchTerm),
    [searchTerm]
  );

  const filteredCars = useMemo(() => {
    if (!normalizedSearchTerm) return cars;

    return cars.filter((car) => {
      const searchableText = normalizeSearchValue(
        [
          car.brand,
          car.model,
          car.year,
          car.transmission,
          car.color,
          car.origen,
        ]
          .filter(Boolean)
          .join(' ')
      );

      return searchableText.includes(normalizedSearchTerm);
    });
  }, [cars, normalizedSearchTerm]);

  const featuredCars = useMemo(
    () => filteredCars.filter((car) => car.featured),
    [filteredCars]
  );

  const regularCars = useMemo(
    () => filteredCars.filter((car) => !car.featured),
    [filteredCars]
  );

  const inventorySchema = useMemo(() => {
    const schemaCars = cars.slice(0, 24);
    const inventoryUrl = `${SITE_URL}/inventario`;

    const itemList = {
      '@type': 'ItemList',
      name: `Autos seminuevos en Ensenada - ${siteName || 'Seminuevos Baja'}`,
      description:
        'Inventario de autos seminuevos nacionales con garantía mecánica y opciones de financiamiento en Ensenada, Baja California.',
      numberOfItems: cars.length,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: schemaCars.map((car, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/auto/${car.slug || car.id}`,
        item: {
          '@type': 'Car',
          name: `${car.brand} ${car.model} ${car.year}`,
          image: getPrimaryImage(car.foto_url) || undefined,
          brand: car.brand
            ? {
                '@type': 'Brand',
                name: car.brand,
              }
            : undefined,
          model: car.model,
          vehicleModelDate: car.year ? String(car.year) : undefined,
          color: car.color || undefined,
          mileageFromOdometer: car.mileage
            ? {
                '@type': 'QuantitativeValue',
                value: car.mileage,
                unitCode: 'KMT',
              }
            : undefined,
          vehicleTransmission: car.transmission || 'No especificada',
          offers: {
            '@type': 'Offer',
            price: car.price || 0,
            priceCurrency: 'MXN',
            availability: 'https://schema.org/InStock',
            itemCondition: 'https://schema.org/UsedCondition',
            url: `${SITE_URL}/auto/${car.slug || car.id}`,
            seller: {
              '@type': 'AutoDealer',
              name: siteName || 'Seminuevos Baja',
            },
          },
        },
      })),
    };

    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          name: 'Autos Seminuevos en Ensenada | Inventario | Seminuevos Baja',
          description:
            'Explora nuestro inventario de autos seminuevos en Ensenada con garantía mecánica, financiamiento y documentación en orden.',
          url: inventoryUrl,
          isPartOf: {
            '@type': 'WebSite',
            name: siteName || 'Seminuevos Baja',
            url: SITE_URL,
          },
          mainEntity: {
            '@id': `${inventoryUrl}#itemlist`,
          },
        },
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
              item: inventoryUrl,
            },
          ],
        },
        {
          '@id': `${inventoryUrl}#itemlist`,
          ...itemList,
        },
      ],
    };
  }, [cars, siteName]);

  const handleInterest = useCallback(
    (e, car) => {
      e.stopPropagation();

      try {
        trackLeadInterest({
          autoId: car.id,
          autoModelo: `${car.brand} ${car.model} ${car.year}`,
          autoPrecio: car.price,
        });

        trackWhatsAppClick('WhatsApp', 'Inventory Page Car Interest');
      } catch {}

      const mileageText = car.mileage ? formatNumber(car.mileage) : 'N/D';
      const message = `Hola, vi este auto en el inventario de ${
        siteName || 'Seminuevos Baja'
      } y me interesa: ${car.brand} ${car.model} ${car.year}, color ${
        car.color || 'N/D'
      }, con ${mileageText} km.`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    },
    [siteName, trackLeadInterest, trackWhatsAppClick]
  );

  const handleSimulateCredit = useCallback(
    async (e, car) => {
      e.stopPropagation();

      try {
        await trackEvent('simulate_credit', {
          button_location: 'inventory_card',
          car_id: car.id,
          car_name: `${car.brand} ${car.model} ${car.year}`,
        });
      } catch {}

      const carName = `${car.brand} ${car.model}`;
      navigate(
        `/financiamiento?auto=${encodeURIComponent(carName)}&precio=${encodeURIComponent(
          car.price || ''
        )}#credit-simulator`
      );
    },
    [navigate, trackEvent]
  );

  return (
    <>
      <PageSEO routeKey="inventory" customConfig={{ schema: inventorySchema }} />

      <div className="min-h-screen bg-brand-blue">
        <section className="relative z-10 border-b border-white/10 bg-brand-blue py-12 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Autos seminuevos en Ensenada con garantía
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-300">
              Explora nuestro inventario de autos seminuevos en Ensenada: SUVs,
              sedanes y pickups nacionales con garantía mecánica, opciones de
              financiamiento y documentación en orden.
            </p>

            <div className="relative mx-auto max-w-xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar por marca, modelo, año o transmisión..."
                className="w-full border-white/20 bg-white/10 pl-12 text-white placeholder:text-gray-400 focus:bg-white/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                disabled={fetchError || loading}
              />
            </div>
          </div>
        </section>

        <section className="relative z-10 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="mb-4 h-12 w-12 animate-spin text-amber-500" />
                <p className="font-semibold text-white">Cargando inventario...</p>
              </div>
            ) : fetchError && cars.length === 0 ? (
              <div className="rounded-lg border border-red-500/30 bg-red-900/20 py-20 text-center">
                <AlertTriangle className="mx-auto mb-4 h-16 w-16 text-red-500" />
                <h2 className="mb-3 text-2xl font-bold text-white">
                  No se pudo cargar el inventario
                </h2>
                <p className="mx-auto mb-6 max-w-lg text-gray-300">
                  Tuvimos un problema al conectar con la base de datos. Intenta recargar
                  la página.
                </p>
                <Button
                  onClick={() => fetchCars()}
                  className="bg-red-600 font-bold text-white hover:bg-red-700"
                >
                  Reintentar
                </Button>
              </div>
            ) : filteredCars.length > 0 ? (
              <div className="flex flex-col gap-16">
                {featuredCars.length > 0 && (
                  <div>
                    <div className="mb-8 flex items-center gap-3">
                      <Flame className="h-8 w-8 animate-pulse text-red-500" />
                      <h2 className="text-3xl font-bold text-white">
                        Autos seminuevos destacados en Ensenada
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {featuredCars.map((car, index) => (
                        <CarCard
                          key={car.id}
                          car={car}
                          index={index}
                          supabase={supabase}
                          onInterest={handleInterest}
                          onSimulate={handleSimulateCredit}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {regularCars.length > 0 && (
                  <div>
                    <h2 className="mb-8 border-b border-white/10 pb-4 text-2xl font-bold text-white">
                      {featuredCars.length > 0
                        ? 'Inventario completo en Ensenada'
                        : 'Autos disponibles en Ensenada'}
                    </h2>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {regularCars.map((car, index) => (
                        <CarCard
                          key={car.id}
                          car={car}
                          index={index + featuredCars.length}
                          supabase={supabase}
                          onInterest={handleInterest}
                          onSimulate={handleSimulateCredit}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
                  <h2 className="mb-4 text-2xl font-bold text-white">
                    ¿Por qué elegir autos seminuevos en Ensenada con Seminuevos Baja?
                  </h2>
                  <p className="mb-4 leading-relaxed text-gray-300">
                    Nuestro inventario está enfocado en autos nacionales con mejor
                    contexto comercial, documentación en orden y opciones de
                    financiamiento. Esto ayuda a que encuentres un vehículo con mejor
                    respaldo y con un proceso de compra más claro.
                  </p>
                  <p className="leading-relaxed text-gray-300">
                    Si estás comparando autos seminuevos en Ensenada, aquí puedes revisar
                    modelos disponibles, explorar opciones por marca o año y contactar al
                    equipo para recibir atención directa por WhatsApp o simular tu crédito.
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-lg border border-white/10 bg-gray-900/30 py-20 text-center">
                <FilterX className="mx-auto mb-4 h-16 w-16 text-gray-400" />
                <h2 className="mb-2 text-xl font-bold text-white">
                  No se encontraron resultados
                </h2>
                <p className="mb-6 text-gray-400">
                  Intenta con otros términos de búsqueda.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSearchTerm('')}
                  className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-gray-900"
                >
                  Ver todos los autos
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}