import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { seoConfig } from '../lib/seoConfig';

const BASE_URL = 'https://seminuevosbaja.com.mx';
const DEFAULT_SITE_NAME = 'Seminuevos Baja';
const DEFAULT_LOCALE = 'es_MX';
const DEFAULT_OG_TYPE = 'website';
const DEFAULT_TWITTER_CARD = 'summary_large_image';
const DEFAULT_ROBOTS =
  'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';

function normalizePath(value = '/') {
  let raw = String(value || '/').trim();

  if (!raw) raw = '/';

  raw = raw.split('#')[0].split('?')[0];
  raw = raw.replace(/\/{2,}/g, '/');

  if (!raw.startsWith('/')) {
    raw = `/${raw}`;
  }

  if (raw.length > 1) {
    raw = raw.replace(/\/+$/g, '');
  }

  return raw || '/';
}

function toAbsoluteUrl(url) {
  if (!url) return BASE_URL;

  if (/^https?:\/\//i.test(url)) {
    try {
      const parsed = new URL(url);
      const normalized = normalizePath(parsed.pathname || '/');
      return `${parsed.origin}${normalized === '/' ? '' : normalized}`;
    } catch {
      return url;
    }
  }

  const normalizedPath = normalizePath(url);
  return `${BASE_URL}${normalizedPath === '/' ? '' : normalizedPath}`;
}

function normalizeCanonical(canonical, pathname) {
  const rawValue = canonical || pathname || '/';

  if (/^https?:\/\//i.test(rawValue)) {
    return toAbsoluteUrl(rawValue);
  }

  return toAbsoluteUrl(normalizePath(rawValue));
}

function buildRobotsValue({ noindex, nofollow, robots }) {
  if (robots && String(robots).trim()) return robots.trim();

  const indexValue = noindex ? 'noindex' : 'index';
  const followValue = nofollow ? 'nofollow' : 'follow';

  return `${indexValue},${followValue},max-image-preview:large,max-snippet:-1,max-video-preview:-1`;
}

function safeJsonLd(data) {
  if (!data) return '';

  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

export function PageSEO({ routeKey, customConfig = {} }) {
  const location = useLocation();
  const pathname = normalizePath(location.pathname || '/');

  const baseConfig = seoConfig?.[routeKey] || {};
  const config = { ...baseConfig, ...customConfig };

  const title = typeof config.title === 'string' ? config.title.trim() : '';
  const description =
    typeof config.description === 'string' ? config.description.trim() : '';

  const canonicalUrl = normalizeCanonical(config.canonical, pathname);
  const ogType = config.ogType || DEFAULT_OG_TYPE;
  const locale = config.locale || DEFAULT_LOCALE;
  const siteName = config.siteName || DEFAULT_SITE_NAME;
  const twitterCard = config.twitterCard || DEFAULT_TWITTER_CARD;
  const robots = buildRobotsValue(config);

  const ogImage = config.ogImage ? toAbsoluteUrl(config.ogImage) : '';
  const twitterImage = config.twitterImage
    ? toAbsoluteUrl(config.twitterImage)
    : ogImage;

  const ogImageAlt = config.ogImageAlt || '';
  const twitterImageAlt = config.twitterImageAlt || ogImageAlt;

  const schema = safeJsonLd(config.schema);

  return (
    <Helmet prioritizeSeoTags>
      {title ? <title>{title}</title> : null}

      {description ? (
        <meta name="description" content={description} />
      ) : null}

      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content={twitterCard} />

      {title ? (
        <>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      ) : null}

      {description ? (
        <>
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      ) : null}

      {ogImage ? (
        <>
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:secure_url" content={ogImage} />
        </>
      ) : null}

      {twitterImage ? (
        <meta name="twitter:image" content={twitterImage} />
      ) : null}

      {ogImageAlt ? (
        <meta property="og:image:alt" content={ogImageAlt} />
      ) : null}

      {twitterImageAlt ? (
        <meta name="twitter:image:alt" content={twitterImageAlt} />
      ) : null}

      {schema ? (
        <script type="application/ld+json">{schema}</script>
      ) : null}
    </Helmet>
  );
}

export { PageSEO as useSEO };
export default PageSEO;