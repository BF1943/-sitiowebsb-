export const FALLBACK_IMAGE = '/fallback-car.jpg';

// Netlify Image CDN: transforma imagenes remotas via /.netlify/images?url=...
// Solo se aplica cuando se pide un tamano explicito (las pantallas del admin
// piden la imagen sin opciones para verla en su resolucion original) y solo
// en produccion (en localhost el endpoint /.netlify/images no existe, asi
// que devolvemos la URL original para que el preview local funcione).
//
// Las fotos de los autos en este negocio se suben con relacion 1:1, asi que
// pasar width=height=N con fit=cover garantiza un cuadrado limpio en cualquier
// foto que llegue, aunque la subida ocasional no respete el aspecto.
function isLocalHost() {
  if (typeof window === 'undefined') return false;
  const h = window.location.hostname;
  return h === 'localhost' || h === '127.0.0.1' || h.startsWith('192.168.');
}

function safeDecodeUrl(url) {
  try {
    return decodeURIComponent(url);
  } catch {
    return url;
  }
}

function wrapWithNetlifyImageCDN(url, options) {
  if (!options || !options.width) return url;
  if (typeof url !== 'string' || !url.startsWith('http')) return url;
  if (isLocalHost()) return url;

  // Las URLs publicas de Supabase llegan con espacios y caracteres
  // especiales ya escapados (%20, %23, etc). URLSearchParams vuelve a
  // escapar el % a %25, generando doble encoding (%2520) que Netlify
  // pasa literal al storage y resulta en 400. Decodificamos primero
  // para que params.set haga un encode unico y limpio.
  const cleanUrl = safeDecodeUrl(url);

  const params = new URLSearchParams();
  params.set('url', cleanUrl);
  params.set('w', String(options.width));
  if (options.height) params.set('h', String(options.height));
  params.set('q', String(options.quality ?? 75));
  if (options.fit) params.set('fit', options.fit);

  return `/.netlify/images?${params.toString()}`;
}

export const resolveImageUrlSync = (path, supabase, options) => {
  if (!path) return FALLBACK_IMAGE;

  if (typeof path === 'string' && (path.startsWith('http://') || path.startsWith('https://'))) {
    return wrapWithNetlifyImageCDN(path, options);
  }

  try {
    if (!supabase?.storage) {
      return FALLBACK_IMAGE;
    }

    if (typeof path !== 'string') {
      return FALLBACK_IMAGE;
    }

    const { data } = supabase.storage.from('autos-inventario').getPublicUrl(path);
    const publicUrl = data?.publicUrl || FALLBACK_IMAGE;
    return wrapWithNetlifyImageCDN(publicUrl, options);
  } catch (error) {
    console.error('Error generating public URL for image:', error);
    return FALLBACK_IMAGE;
  }
};

export const getImageUrl = async (path, supabase, options) => {
  return resolveImageUrlSync(path, supabase, options);
};
