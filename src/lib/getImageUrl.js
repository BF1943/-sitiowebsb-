export const FALLBACK_IMAGE = '/fallback-car.jpg';

export const resolveImageUrlSync = (path, supabase) => {
  if (!path) return FALLBACK_IMAGE;

  if (typeof path === 'string' && (path.startsWith('http://') || path.startsWith('https://'))) {
    return path;
  }

  try {
    if (!supabase?.storage) {
      return FALLBACK_IMAGE;
    }

    if (typeof path !== 'string') {
      return FALLBACK_IMAGE;
    }

    const { data } = supabase.storage.from('autos-inventario').getPublicUrl(path);
    return data?.publicUrl || FALLBACK_IMAGE;
  } catch (error) {
    console.error('Error generating public URL for image:', error);
    return FALLBACK_IMAGE;
  }
};

export const getImageUrl = async (path, supabase) => {
  return resolveImageUrlSync(path, supabase);
};