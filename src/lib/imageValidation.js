import { FALLBACK_IMAGE } from './getImageUrl';

/**
 * Validates and formats an image URL.
 * Ensures the URL is somewhat well-formed before attempting to load.
 * 
 * @param {string} url - The URL to validate.
 * @returns {string} - The valid URL or the fallback image URL.
 */
export const validateImageUrl = (url) => {
  if (!url || typeof url !== 'string') {
    return FALLBACK_IMAGE;
  }

  const trimmedUrl = url.trim();
  
  if (trimmedUrl === '') {
    return FALLBACK_IMAGE;
  }

  // Basic check for HTTP/HTTPS protocol if it looks like a full URL
  // Or if it's a relative Supabase storage path, let it pass (handled by getImageUrl usually)
  try {
    if (trimmedUrl.startsWith('http')) {
      new URL(trimmedUrl); // Will throw if invalid
    }
    return trimmedUrl;
  } catch (error) {
    console.warn(`Invalid image URL format detected: ${trimmedUrl}`);
    return FALLBACK_IMAGE;
  }
};

/**
 * Parses a string of comma-separated URLs or JSON array into an array of valid URLs.
 * 
 * @param {string|array} imageSource - The raw image data from the database.
 * @returns {array} - Array of valid image URLs.
 */
export const parseImageUrls = (imageSource) => {
  if (!imageSource) return [];
  
  let rawImages = [];
  
  if (Array.isArray(imageSource)) {
    rawImages = imageSource;
  } else if (typeof imageSource === 'string') {
    try {
      const jsonParsed = JSON.parse(imageSource);
      if (Array.isArray(jsonParsed)) {
        rawImages = jsonParsed;
      } else {
        rawImages = [imageSource];
      }
    } catch {
      // Not JSON, assume comma-separated
      rawImages = imageSource.split(',').map(s => s.trim());
    }
  }

  return rawImages
    .map(validateImageUrl)
    .filter(url => url !== FALLBACK_IMAGE || rawImages.length === 1); // Keep at least one fallback if all fail
};