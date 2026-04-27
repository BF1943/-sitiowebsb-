import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gauge, GitBranch, Palette, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatNumber } from '@/lib/utils';
import ShareButton from '@/components/ShareButton';
import { resolveImageUrlSync, FALLBACK_IMAGE } from '@/lib/getImageUrl';

const MotionArticle = motion.article;

function getInitialImage(fotoUrl, supabase) {
  if (!fotoUrl) return FALLBACK_IMAGE;
  const firstUrl =
    typeof fotoUrl === 'string' ? fotoUrl.split(',')[0].trim() : fotoUrl;
  return resolveImageUrlSync(firstUrl, supabase, { width: 600, height: 600, quality: 75, fit: 'cover' });
}

function buildCarName(car) {
  return [car.brand, car.model, car.year].filter(Boolean).join(' ');
}

function buildImageAlt(car) {
  const base = buildCarName(car) || 'Auto seminuevo destacado';
  const parts = [
    car.color ? `color ${car.color}` : '',
    car.mileage ? `${formatNumber(car.mileage)} km` : '',
    'en Seminuevos Baja',
  ].filter(Boolean);

  return `${base}${parts.length ? `, ${parts.join(', ')}` : ''}`;
}

export default function FeaturedCarCard({
  car,
  index,
  supabase,
  onInterest,
  onSimulate,
}) {
  const imgSrc = useMemo(
    () => getInitialImage(car.foto_url, supabase),
    [car.foto_url, supabase]
  );

  const originalPrice = car.precio_original || car.price * 1.1;
  const discount =
    originalPrice > car.price
      ? Math.round((1 - car.price / originalPrice) * 100)
      : 0;

  const destinationSlug = car.slug || car.id;
  const detailUrl = `/auto/${destinationSlug}`;
  const carName = buildCarName(car);
  const imageAlt = buildImageAlt(car);

  return (
    <MotionArticle
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="car-card featured-glow relative z-10 flex h-full flex-col overflow-hidden rounded-xl border-2 border-amber-500 bg-gray-900/50 shadow-lg transition-transform hover:-translate-y-1"
    >
      <div className="pointer-events-none absolute right-4 top-4 z-30">
        <div className="flex items-center gap-1 rounded-full bg-red-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-red-500/50 animate-featured-pulse">
          <span>🔥 EN OFERTA</span>
          {discount > 0 && (
            <span className="ml-1 rounded bg-white/20 px-1.5 text-[10px]">
              -{discount}%
            </span>
          )}
        </div>
      </div>

      <Link
        to={detailUrl}
        className="group block focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label={`Ver detalle de ${carName}`}
      >
        <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-gray-800">
          <img
            src={imgSrc || FALLBACK_IMAGE}
            alt={imageAlt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = FALLBACK_IMAGE;
            }}
          />
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </Link>

      <div className="relative z-20 flex flex-grow flex-col bg-gray-900/80 p-6 text-white backdrop-blur-sm">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h2 className="leading-tight text-white transition-colors group-hover:text-amber-500">
              <Link
                to={detailUrl}
                className="text-2xl font-bold hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label={`Abrir ficha de ${carName}`}
              >
                {car.brand}{' '}
                <span className="text-amber-500 transition-colors hover:text-white">
                  {car.model}
                </span>
              </Link>
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Auto seminuevo destacado en Ensenada
            </p>
          </div>

          <span className="ml-2 flex-shrink-0 rounded-full bg-amber-400 px-3 py-1 text-sm font-bold text-gray-900 shadow-lg shadow-amber-500/20">
            {car.year}
          </span>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-x-2 gap-y-4 text-sm font-medium text-gray-300">
          <div className="flex items-center space-x-2">
            <Gauge className="h-4 w-4 flex-shrink-0 text-amber-500" />
            <span className="truncate">
              {car.mileage ? `${formatNumber(car.mileage)} km` : 'N/A'}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <GitBranch className="h-4 w-4 flex-shrink-0 text-amber-500" />
            <span className="truncate">{car.transmission || 'N/A'}</span>
          </div>

          <div className="flex items-center space-x-2">
            <Palette className="h-4 w-4 flex-shrink-0 text-amber-500" />
            <span className="truncate">{car.color || 'N/A'}</span>
          </div>

          <div className="flex items-center space-x-2">
            <Wrench className="h-4 w-4 flex-shrink-0 text-amber-500" />
            <span className="truncate">{car.motor || 'N/A'}</span>
          </div>
        </div>

        <div className="mt-auto border-t border-amber-500/30 pt-4">
          <div className="mb-4 flex flex-col items-center">
            {originalPrice > car.price && (
              <span className="mb-1 text-sm text-gray-400 line-through">
                {formatNumber(originalPrice, { style: 'currency' })}
              </span>
            )}

            <span className="text-3xl font-bold tracking-tight text-red-500">
              {formatNumber(car.price, { style: 'currency' }) || 'Consultar'}
            </span>

            <Link
              to={detailUrl}
              className="mt-3 text-sm font-semibold text-amber-400 underline-offset-4 hover:text-amber-300 hover:underline"
              aria-label={`Ver detalle completo de ${carName}`}
            >
              Ver detalle
            </Link>
          </div>

          <div className="relative z-30 flex w-full flex-col gap-3">
            <Button
              onClick={(e) => onSimulate(e, car)}
              className="w-full rounded-xl bg-white py-6 text-lg font-bold text-gray-900 shadow-lg transition-transform duration-200 hover:scale-[1.02] hover:bg-gray-100"
              size="lg"
              aria-label={`Simular crédito para ${carName}`}
            >
              Simula tu crédito
            </Button>

            <div className="flex w-full gap-2">
              <Button
                onClick={(e) => onInterest(e, car)}
                className="flex-1 rounded-xl bg-amber-500 py-6 text-lg font-bold text-gray-900 shadow-lg transition-transform duration-200 hover:scale-[1.02] hover:bg-amber-600"
                size="lg"
                aria-label={`Me interesa ${carName}`}
              >
                Me interesa
              </Button>

              <ShareButton
                car={{
                  marca: car.brand,
                  modelo: car.model,
                  año: car.year,
                  precio: car.price,
                  id: car.id,
                  slug: destinationSlug,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </MotionArticle>
  );
}