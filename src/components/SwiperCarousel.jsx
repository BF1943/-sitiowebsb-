
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Loader2, FileImage as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { FALLBACK_IMAGE } from '@/lib/getImageUrl';
import { parseImageUrls } from '@/lib/imageValidation';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const IMAGE_LOAD_TIMEOUT = 8000; // 8 seconds max per image

const SlideImage = ({ src, altText }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const loadTimeoutRef = useRef(null);

  useEffect(() => {
    setCurrentSrc(src);
    setIsLoading(true);
    setHasError(false);

    // Clear any existing timeout
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current);
    }

    // Set timeout to force loading completion
    loadTimeoutRef.current = setTimeout(() => {
      if (isLoading) {
        console.warn(`Image load timeout for slide: ${src}`);
        setIsLoading(false);
        setHasError(true);
      }
    }, IMAGE_LOAD_TIMEOUT);

    return () => {
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
      }
    };
  }, [src]);

  const handleLoad = () => {
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current);
    }
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current);
    }
    
    console.error("Error loading image in SwiperCarousel:", currentSrc);
    
    if (currentSrc !== FALLBACK_IMAGE) {
      setCurrentSrc(FALLBACK_IMAGE);
      setIsLoading(true);
      setHasError(false);
    } else {
      setIsLoading(false);
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className="relative w-full h-full bg-gray-900 flex flex-col items-center justify-center">
        <ImageIcon className="w-16 h-16 text-gray-600 mb-2" />
        <span className="text-sm text-gray-500">Imagen no disponible</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-gray-900 flex items-center justify-center overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
          <Loader2 className="w-10 h-10 text-amber-500 animate-spin" />
        </div>
      )}
      
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        src={currentSrc}
        alt={altText}
        className="w-full h-full object-cover"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default function SwiperCarousel({ images = [], altText = 'Imagen del vehículo' }) {
  const [validImages, setValidImages] = useState([]);

  useEffect(() => {
    const parsedImages = parseImageUrls(images);
    const finalImages = parsedImages.slice(0, 10);
    setValidImages(finalImages.length > 0 ? finalImages : [FALLBACK_IMAGE]);
  }, [images]);

  if (!validImages || validImages.length === 0) {
    return (
      <div className="relative w-full aspect-square bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col items-center justify-center text-gray-500">
        <ImageIcon className="w-16 h-16 text-gray-600 mb-2" />
        <span className="text-sm text-gray-500">Sin imágenes disponibles</span>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true
        }}
        effect="fade"
        loop={validImages.length > 1}
        className="w-full h-full min-h-[300px]"
      >
        {validImages.map((imgSrc, index) => (
          <SwiperSlide key={`${imgSrc}-${index}`} className="w-full h-full">
            <SlideImage src={imgSrc} altText={`${altText} - Vista ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {validImages.length > 1 && (
        <>
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-amber-500 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed border border-white/20 hover:border-amber-400 hover:scale-110">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-amber-500 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed border border-white/20 hover:border-amber-400 hover:scale-110">
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination-bullet {
          background-color: white !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background-color: #f59e0b !important;
          opacity: 1;
        }
      `}} />
    </div>
  );
};
