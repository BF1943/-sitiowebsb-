import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, RefreshCw, AlertCircle } from 'lucide-react';
import PhotoDeleteButton from './PhotoDeleteButton';
import { getImageUrl, FALLBACK_IMAGE } from '@/lib/getImageUrl';

// Inner component to handle individual image validation and rendering
function GalleryImage({ url, car, supabase, onUpdate, onRefresh, idx }) {
  const [imgSrc, setImgSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const validateAndLoad = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const validUrl = await getImageUrl(url, supabase);
      setImgSrc(validUrl);
      if (validUrl === FALLBACK_IMAGE) {
        setHasError(true);
      }
    } catch (err) {
      console.error('Failed to validate image URL:', err);
      setImgSrc(FALLBACK_IMAGE);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    validateAndLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <div className="group relative aspect-square rounded-lg overflow-hidden shadow-md border border-gray-200 bg-gray-100 flex flex-col items-center justify-center">
      {isLoading ? (
        <div className="animate-pulse bg-gray-200 w-full h-full flex items-center justify-center">
          <RefreshCw className="w-6 h-6 text-gray-400 animate-spin" />
        </div>
      ) : (
        <>
          <img 
            src={imgSrc} 
            alt={`${car.marca} ${car.modelo} - Foto ${idx + 1}`} 
            className={`w-full h-full object-cover transition-transform duration-300 ${hasError ? 'opacity-50 grayscale' : 'group-hover:scale-105'}`}
            loading="lazy"
          />
          {hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-10">
              <AlertCircle className="w-8 h-8 text-red-500 mb-2" />
              <button 
                onClick={validateAndLoad}
                className="bg-white/90 text-gray-900 text-xs px-3 py-1 rounded-full font-medium hover:bg-white flex items-center gap-1 transition-colors"
              >
                <RefreshCw className="w-3 h-3" /> Reintentar
              </button>
            </div>
          )}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-start justify-end z-20 pointer-events-none">
            <div className="pointer-events-auto">
              <PhotoDeleteButton 
                url={url} 
                car={car} 
                supabase={supabase} 
                onUpdate={onUpdate}
                onRefresh={onRefresh}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function PhotoGallery({ car, supabase, onUpdate, onRefresh }) {
  if (!car) return null;

  // Parse current photos
  const currentUrls = car.foto_url 
    ? car.foto_url.split(',').map(u => u.trim()).filter(Boolean) 
    : [];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mt-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Fotos Actuales ({currentUrls.length})</h3>
      
      {currentUrls.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-gray-400 bg-gray-50 rounded-lg border border-dashed border-gray-200">
          <ImageIcon className="w-12 h-12 mb-3 opacity-50" />
          <p className="font-medium">No hay fotos todavía.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentUrls.map((url, idx) => (
            <GalleryImage 
              key={`${url}-${idx}`}
              url={url}
              car={car}
              supabase={supabase}
              onUpdate={onUpdate}
              onRefresh={onRefresh}
              idx={idx}
            />
          ))}
        </div>
      )}
    </div>
  );
}