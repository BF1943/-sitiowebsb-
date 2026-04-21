/**
 * Generates a URL-safe slug from car details.
 * @param {string} marca - Car brand
 * @param {string} modelo - Car model
 * @param {number|string} año - Car year
 * @returns {string} The generated slug
 */
export function generateCarSlug(marca, modelo, año) {
  if (!marca || !modelo || !año) return '';
  
  const combined = `${marca}-${modelo}-${año}`;
  
  return combined
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphens
    .replace(/^-+|-+$/g, ''); // Trim hyphens from start and end
}