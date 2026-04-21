
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Loader2, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FALLBACK_IMAGE } from '@/lib/getImageUrl';

const IMAGE_LOAD_TIMEOUT = 8000; // 8 seconds max per image

function parseImages(raw) {
  if (!raw) return [];

  let urls = [];

  try {
    const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
    if (Array.isArray(parsed)) {
      urls = parsed;
    }
  } catch {
    // Sigue con el siguiente formato
  }

  if (urls.length === 0 && typeof raw === 'string') {
    urls = raw.split(',');
  }

  const cleaned = urls
    .map((url) => String(url || '').trim())
    .filter(Boolean);

  return [...new Set(cleaned)];
}

export default function CarImageGallery({ imageUrl, altText }) {
  const parsedImages = useMemo(() => {
    const urls = parseImages(imageUrl);
    return urls.length > 0 ? urls : [FALLBACK_IMAGE];
  }, [imageUrl]);

  const [images, setImages] = useState(parsedImages);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loadStates, setLoadStates] = useState({});
  const [errorStates, setErrorStates] = useState({});
  const loadTimeoutsRef = useRef({});

  useEffect(() => {
    setImages(parsedImages);
    setSelectedIndex(0);
    setLoadStates({});
    setErrorStates({});
    
    // Clear any existing timeouts
    Object.values(loadTimeoutsRef.current).forEach(clearTimeout);
    loadTimeoutsRef.current = {};
  }, [parsedImages]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      Object.values(loadTimeoutsRef.current).forEach(clearTimeout);
    };
  }, []);

  const handleLoad = (url) => {
    if (loadTimeoutsRef.current[url]) {
      clearTimeout(loadTimeoutsRef.current[url]);
      delete loadTimeoutsRef.current[url];
    }
    setLoadStates((prev) => ({ ...prev, [url]: true }));
  };

  const handleError = (url) => {
    if (loadTimeoutsRef.current[url]) {
      clearTimeout(loadTimeoutsRef.current[url]);
      delete loadTimeoutsRef.current[url];
    }
    setErrorStates((prev) => ({ ...prev, [url]: true }));
  };

  const startLoadTimeout = (url) => {
    // Clear existing timeout if any
    if (loadTimeoutsRef.current[url]) {
      clearTimeout(loadTimeoutsRef.current[url]);
    }

    // Set new timeout - mark as error if not loaded within timeout period
    loadTimeoutsRef.current[url] = setTimeout(() => {
      console.warn(`Image load timeout for: ${url}`);
      if (!loadStates[url] && !errorStates[url]) {
        setErrorStates((prev) => ({ ...prev, [url]: true }));
      }
      delete loadTimeoutsRef.current[url];
    }, IMAGE_LOAD_TIMEOUT);
  };

  const safeIndex =
    selectedIndex >= 0 && selectedIndex < images.length ? selectedIndex : 0;

  const currentUrl = images[safeIndex] || FALLBACK_IMAGE;
  const isCurrentLoading = !loadStates[currentUrl] && !errorStates[currentUrl];
  const isCurrentError = Boolean(errorStates[currentUrl]);

  // Start timeout for current image if it's loading
  useEffect(() => {
    if (isCurrentLoading && !isCurrentError) {
      startLoadTimeout(currentUrl);
    }
  }, [currentUrl, isCurrentLoading, isCurrentError]);

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-2xl">
        <AnimatePresence mode="wait">
          {isCurrentError ? (
            <motion.div
              key={`error-${currentUrl}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 text-gray-400"
            >
              <ImageIcon className="mb-2 h-16 w-16 opacity-50" />
              <span className="text-sm font-medium">Imagen no disponible</span>
            </motion.div>
          ) : (
            <motion.img
              key={currentUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: isCurrentLoading ? 0 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={currentUrl}
              alt={`${altText} - Imagen ${safeIndex + 1}`}
              className="h-full w-full object-cover"
              loading={safeIndex === 0 ? 'eager' : 'lazy'}
              decoding="async"
              onLoad={(e) => handleLoad(e.currentTarget.currentSrc || currentUrl)}
              onError={(e) => {
                handleError(currentUrl);
                e.currentTarget.onerror = null;
                // Try to load fallback
                if (currentUrl !== FALLBACK_IMAGE) {
                  e.currentTarget.src = FALLBACK_IMAGE;
                }
              }}
            />
          )}
        </AnimatePresence>

        {isCurrentLoading && !isCurrentError && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-800">
            <Loader2 className="h-10 w-10 animate-spin text-amber-500" />
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-6">
          {images.map((url, idx) => {
            const isThumbLoading = !loadStates[url] && !errorStates[url];
            const isThumbError = Boolean(errorStates[url]);
            const isSelected = idx === safeIndex;

            return (
              <button
                key={`${url}-${idx}`}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                  isSelected
                    ? 'scale-95 border-amber-500 shadow-lg'
                    : 'border-transparent hover:border-white/30 hover:opacity-80'
                }`}
                aria-label={`Ver imagen ${idx + 1} de ${images.length}`}
                aria-pressed={isSelected}
              >
                {isThumbError ? (
                  <div className="flex h-full w-full items-center justify-center bg-gray-800 text-gray-500">
                    <ImageIcon className="h-6 w-6" />
                  </div>
                ) : (
                  <>
                    <img
                      src={url}
                      alt={`${altText} miniatura ${idx + 1}`}
                      className={`h-full w-full object-cover transition-opacity ${
                        isThumbLoading ? 'opacity-0' : 'opacity-100'
                      }`}
                      loading="lazy"
                      decoding="async"
                      onLoad={() => handleLoad(url)}
                      onError={() => handleError(url)}
                    />
                    {isThumbLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                        <Loader2 className="h-4 w-4 animate-spin text-amber-500" />
                      </div>
                    )}
                  </>
                )}

                {isSelected && (
                  <div className="pointer-events-none absolute inset-0 bg-black/10 transition-colors" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
