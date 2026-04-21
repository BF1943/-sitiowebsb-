import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Image as ImageIcon, AlertCircle } from 'lucide-react';

export default function ImageCarousel({ images = [], carName = "Auto" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Debug log to verify received props
  useEffect(() => {
    console.log(`[ImageCarousel] Initializing for ${carName} with images:`, images);
  }, [images, carName]);

  // Normalize images to extract URLs whether they are strings or objects {url, alt}
  const validImages = Array.isArray(images) 
    ? images.map(img => typeof img === 'string' ? img : img?.url).filter(Boolean)
    : [];

  const nextImage = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev === validImages.length - 1 ? 0 : prev + 1));
  }, [validImages.length]);

  const prevImage = useCallback((e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev === 0 ? validImages.length - 1 : prev - 1));
  }, [validImages.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (validImages.length <= 1) return;
      if (e.key === 'ArrowRight') nextImage();
      else if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextImage, prevImage, validImages.length]);

  // Reset loading and error states when index changes
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [currentIndex]);

  if (validImages.length === 0) {
    return (
      <div className="w-full h-full bg-gray-800 flex flex-col items-center justify-center text-gray-400 absolute inset-0">
        <ImageIcon className="w-12 h-12 mb-2 opacity-30" />
        <span className="text-sm font-medium">Sin imagen</span>
      </div>
    );
  }

  const currentImage = validImages[currentIndex];

  return (
    <div className="relative w-full h-full overflow-hidden group/carousel bg-gray-900 absolute inset-0">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          {isLoading && !hasError && (
            <div className="absolute inset-0 w-full h-full bg-gray-800 animate-pulse flex items-center justify-center">
              <ImageIcon className="w-10 h-10 text-gray-600 opacity-50" />
            </div>
          )}
          
          {hasError ? (
            <div className="absolute inset-0 w-full h-full bg-gray-800 flex flex-col items-center justify-center text-gray-500">
              <AlertCircle className="w-10 h-10 mb-2 opacity-50" />
              <span className="text-xs">Error al cargar</span>
            </div>
          ) : (
            <img
              src={currentImage}
              alt={`${carName} - Imagen ${currentIndex + 1}`}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
              className={`w-full h-full object-cover transition-transform duration-700 ${validImages.length === 1 ? 'group-hover/carousel:scale-110' : ''} ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              loading="lazy"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {validImages.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
          <button
            onClick={prevImage}
            className="pointer-events-auto bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="pointer-events-auto bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Indicator Dots */}
      {validImages.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
          {validImages.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex 
                  ? 'bg-amber-500 w-4 h-1.5' 
                  : 'bg-white/60 hover:bg-white w-1.5 h-1.5'
              }`}
              aria-label={`Ir a imagen ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}