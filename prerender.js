import process from 'process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';
import { createClient } from '@supabase/supabase-js';
import { routes as staticRoutes } from './prerender-config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, 'dist');
const SITE_URL = 'https://seminuevosbaja.com.mx';
const DEFAULT_SITE_NAME = 'Seminuevos Baja';
const DEFAULT_LOCALE = 'es_MX';
const DEFAULT_OG_TYPE = 'website';
const DEFAULT_TWITTER_CARD = 'summary_large_image';
const DEFAULT_ROBOTS =
  'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';

const env = typeof process !== 'undefined' ? process.env : {};

const SUPABASE_URL =
  env.VITE_SUPABASE_URL ||
  'https://pxlmgbjzzwjfjpfywmq.supabase.co';

const SUPABASE_ANON_KEY =
  env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4bG1nYmp6emZ3ampmcGZ5d21nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODU4MDAsImV4cCI6MjA2NTc2MTgwMH0.j18ywvlqxiaCK7NAh-LfQIcqJdpLrFof6Rvx76ULpXY';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});

function injectAttributes(html, tagName, attributes) {
  if (!attributes || !attributes.trim()) return html;

  const regex = new RegExp(`<${tagName}([^>]*)>`, 'i');

  return html.replace(regex, (match, existingAttrs) => {
    const cleanExisting = (existingAttrs || '').trim();
    const spacer = cleanExisting ? ' ' : '';
    return `<${tagName}${cleanExisting ? ` ${cleanExisting}` : ''}${spacer}${attributes.trim()}>`;
  });
}

function escapeHtmlAttribute(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function toAbsoluteUrl(url) {
  if (!url) return '';
  if (/^https?:\/\//i.test(url)) return url;
  return `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`;
}

function normalizeCarData(rawCar) {
  if (!rawCar) return null;

  const fallbackSlug =
    [rawCar.marca, rawCar.modelo, rawCar.año]
      .filter(Boolean)
      .join('-')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || rawCar.id;

  return {
    ...rawCar,
    slug: rawCar.slug || fallbackSlug,
  };
}

function getPrimaryImage(fotoUrl) {
  if (!fotoUrl) return '';
  return (
    fotoUrl
      .split(',')
      .map((url) => url.trim())
      .find(Boolean) || ''
  );
}

function buildCarTitle(car) {
  return `${car.marca} ${car.modelo} ${car.año} en Ensenada | Seminuevos Baja`;
}

function buildCarDescription(car) {
  const priceText =
    typeof car.precio === 'number'
      ? `$${new Intl.NumberFormat('es-MX').format(car.precio)} MXN`
      : 'precio disponible';

  const mileageText = car.kilometraje
    ? `${new Intl.NumberFormat('es-MX').format(car.kilometraje)} km`
    : 'kilometraje no especificado';

  const colorText = car.color ? `, color ${car.color}` : '';

  return `${car.marca} ${car.modelo} ${car.año} en venta en Ensenada con ${mileageText}${colorText}. Precio ${priceText}. Garantía mecánica y financiamiento disponible en Seminuevos Baja.`;
}

function buildDescriptionMetaTag(description) {
  if (!description) return '';
  return `<meta name="description" content="${escapeHtmlAttribute(description)}">`;
}

function buildOutputDir(routePath) {
  return routePath === '/'
    ? DIST_DIR
    : path.join(DIST_DIR, routePath.replace(/^\/+/, ''));
}

function dedupeRoutes(routes) {
  const seen = new Set();

  return routes.filter((route) => {
    if (!route?.path || seen.has(route.path)) return false;
    seen.add(route.path);
    return true;
  });
}

function formatDateForSitemap(value) {
  const date = value ? new Date(value) : new Date();

  if (Number.isNaN(date.getTime())) {
    return new Date().toISOString().split('T')[0];
  }

  return date.toISOString().split('T')[0];
}

function writeTextFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf-8');
}

function stripManagedSeoTags(html) {
  const patterns = [
    /<title\b[^>]*>[\s\S]*?<\/title>/gi,

    /<meta\b[^>]*name=["']description["'][^>]*>/gi,
    /<meta\b[^>]*name=["']robots["'][^>]*>/gi,
    /<meta\b[^>]*name=["']twitter:card["'][^>]*>/gi,
    /<meta\b[^>]*name=["']twitter:title["'][^>]*>/gi,
    /<meta\b[^>]*name=["']twitter:description["'][^>]*>/gi,
    /<meta\b[^>]*name=["']twitter:image["'][^>]*>/gi,
    /<meta\b[^>]*name=["']twitter:image:alt["'][^>]*>/gi,

    /<meta\b[^>]*property=["']og:url["'][^>]*>/gi,
    /<meta\b[^>]*property=["']og:type["'][^>]*>/gi,
    /<meta\b[^>]*property=["']og:locale["'][^>]*>/gi,
    /<meta\b[^>]*property=["']og:site_name["'][^>]*>/gi,
    /<meta\b[^>]*property=["']og:title["'][^>]*>/gi,
    /<meta\b[^>]*property=["']og:description["'][^>]*>/gi,
    /<meta\b[^>]*property=["']og:image["'][^>]*>/gi,
    /<meta\b[^>]*property=["']og:image:alt["'][^>]*>/gi,

    /<link\b[^>]*rel=["']canonical["'][^>]*>/gi,
  ];

  let cleanedHtml = html;

  for (const pattern of patterns) {
    cleanedHtml = cleanedHtml.replace(pattern, '');
  }

  return cleanedHtml;
}

function ensureTitleTag(html, titleTag) {
  if (!titleTag) return html;

  if (/<title\b[^>]*>[\s\S]*?<\/title>/i.test(html)) {
    return html.replace(/<title\b[^>]*>[\s\S]*?<\/title>/i, titleTag);
  }

  return html.replace('</head>', `${titleTag}</head>`);
}

function appendToHead(html, headContent) {
  if (!headContent || !headContent.trim()) return html;
  return html.replace('</head>', `${headContent}</head>`);
}

function appendToBody(html, bodyContent) {
  if (!bodyContent || !bodyContent.trim()) return html;
  return html.replace('</body>', `${bodyContent}</body>`);
}

function hasTag(content, pattern) {
  return pattern.test(content || '');
}

function buildFallbackSeoTags(route) {
  const title = route.title || '';
  const description = route.description || '';
  const canonicalUrl = toAbsoluteUrl(route.path || '/');
  const ogImage =
    route.type === 'car' && route.renderData?.car?.foto_url
      ? toAbsoluteUrl(getPrimaryImage(route.renderData.car.foto_url))
      : '';

  const tags = [];

  tags.push(`<meta name="robots" content="${DEFAULT_ROBOTS}">`);
  tags.push(`<link rel="canonical" href="${escapeHtmlAttribute(canonicalUrl)}">`);
  tags.push(`<meta property="og:url" content="${escapeHtmlAttribute(canonicalUrl)}">`);
  tags.push(`<meta property="og:type" content="${DEFAULT_OG_TYPE}">`);
  tags.push(`<meta property="og:locale" content="${DEFAULT_LOCALE}">`);
  tags.push(`<meta property="og:site_name" content="${DEFAULT_SITE_NAME}">`);
  tags.push(`<meta name="twitter:card" content="${DEFAULT_TWITTER_CARD}">`);

  if (description) {
    tags.push(buildDescriptionMetaTag(description));
    tags.push(
      `<meta property="og:description" content="${escapeHtmlAttribute(description)}">`
    );
    tags.push(
      `<meta name="twitter:description" content="${escapeHtmlAttribute(description)}">`
    );
  }

  if (title) {
    tags.push(`<meta property="og:title" content="${escapeHtmlAttribute(title)}">`);
    tags.push(`<meta name="twitter:title" content="${escapeHtmlAttribute(title)}">`);
  }

  if (ogImage) {
    tags.push(`<meta property="og:image" content="${escapeHtmlAttribute(ogImage)}">`);
    tags.push(`<meta name="twitter:image" content="${escapeHtmlAttribute(ogImage)}">`);
  }

  return tags.join('');
}

function buildMissingFallbackSeoTags(route, helmet) {
  const helmetMeta = helmet?.meta?.toString?.() ?? '';
  const helmetLink = helmet?.link?.toString?.() ?? '';
  const helmetPriority = helmet?.priority?.toString?.() ?? '';
  const helmetTitle = helmet?.title?.toString?.() ?? '';
  const helmetAll = `${helmetPriority}${helmetMeta}${helmetLink}`;
  const routeTitle = route.title || '';
  const routeDescription = route.description || '';
  const canonicalUrl = toAbsoluteUrl(route.path || '/');
  const ogImage =
    route.type === 'car' && route.renderData?.car?.foto_url
      ? toAbsoluteUrl(getPrimaryImage(route.renderData.car.foto_url))
      : '';

  const tags = [];

  if (!hasTag(helmetAll, /name=["']robots["']/i)) {
    tags.push(`<meta name="robots" content="${DEFAULT_ROBOTS}">`);
  }

  if (!hasTag(helmetAll, /rel=["']canonical["']/i)) {
    tags.push(`<link rel="canonical" href="${escapeHtmlAttribute(canonicalUrl)}">`);
  }

  if (!hasTag(helmetAll, /property=["']og:url["']/i)) {
    tags.push(`<meta property="og:url" content="${escapeHtmlAttribute(canonicalUrl)}">`);
  }

  if (!hasTag(helmetAll, /property=["']og:type["']/i)) {
    tags.push(`<meta property="og:type" content="${DEFAULT_OG_TYPE}">`);
  }

  if (!hasTag(helmetAll, /property=["']og:locale["']/i)) {
    tags.push(`<meta property="og:locale" content="${DEFAULT_LOCALE}">`);
  }

  if (!hasTag(helmetAll, /property=["']og:site_name["']/i)) {
    tags.push(`<meta property="og:site_name" content="${DEFAULT_SITE_NAME}">`);
  }

  if (!hasTag(helmetAll, /name=["']twitter:card["']/i)) {
    tags.push(`<meta name="twitter:card" content="${DEFAULT_TWITTER_CARD}">`);
  }

  if (routeDescription && !hasTag(helmetAll, /name=["']description["']/i)) {
    tags.push(buildDescriptionMetaTag(routeDescription));
  }

  if (routeTitle && !hasTag(helmetAll, /property=["']og:title["']/i)) {
    tags.push(`<meta property="og:title" content="${escapeHtmlAttribute(routeTitle)}">`);
  }

  if (routeTitle && !hasTag(helmetAll, /name=["']twitter:title["']/i)) {
    tags.push(`<meta name="twitter:title" content="${escapeHtmlAttribute(routeTitle)}">`);
  }

  if (routeDescription && !hasTag(helmetAll, /property=["']og:description["']/i)) {
    tags.push(
      `<meta property="og:description" content="${escapeHtmlAttribute(routeDescription)}">`
    );
  }

  if (routeDescription && !hasTag(helmetAll, /name=["']twitter:description["']/i)) {
    tags.push(
      `<meta name="twitter:description" content="${escapeHtmlAttribute(routeDescription)}">`
    );
  }

  if (ogImage && !hasTag(helmetAll, /property=["']og:image["']/i)) {
    tags.push(`<meta property="og:image" content="${escapeHtmlAttribute(ogImage)}">`);
  }

  if (ogImage && !hasTag(helmetAll, /name=["']twitter:image["']/i)) {
    tags.push(`<meta name="twitter:image" content="${escapeHtmlAttribute(ogImage)}">`);
  }

  return {
    titleTag:
      helmetTitle ||
      (routeTitle ? `<title>${escapeHtmlAttribute(routeTitle)}</title>` : ''),
    extraTags: tags.join(''),
  };
}

async function fetchCarsForPrerender() {
  const { data, error } = await supabase
    .from('fotos_de_autos')
    .select('*')
    .order('destacado', { ascending: false, nullsFirst: false })
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return (data || []).map(normalizeCarData).filter((car) => car?.slug);
}

function buildDynamicCarRoutes(cars) {
  return cars.map((car) => ({
    path: `/auto/${car.slug}`,
    title: buildCarTitle(car),
    description: buildCarDescription(car),
    renderData: { car },
    type: 'car',
    lastmod: car.updated_at || car.created_at || new Date().toISOString(),
    changefreq: 'daily',
    priority: '0.8',
  }));
}

function buildStaticRouteMetadata(route) {
  const isHome = route.path === '/';
  const isBlogPost = route.path.startsWith('/blog/') && route.path !== '/blog';

  return {
    lastmod: new Date().toISOString(),
    changefreq: isHome ? 'daily' : isBlogPost ? 'monthly' : 'weekly',
    priority: isHome ? '1.0' : route.path === '/inventario' ? '0.9' : '0.8',
  };
}

function generateSitemapXml(routes) {
  const filteredRoutes = routes.filter((route) => {
    if (!route?.path) return false;
    if (route.path === '/admin') return false;
    return true;
  });

  const xmlUrls = filteredRoutes
    .map((route) => {
      const staticMetadata = buildStaticRouteMetadata(route);

      const metadata =
        route.type === 'car'
          ? {
              lastmod: formatDateForSitemap(route.lastmod),
              changefreq: route.changefreq || 'daily',
              priority: route.priority || '0.8',
            }
          : {
              lastmod: formatDateForSitemap(route.lastmod || staticMetadata.lastmod),
              changefreq: route.changefreq || staticMetadata.changefreq,
              priority: route.priority || staticMetadata.priority,
            };

      return `  <url>
    <loc>${escapeXml(route.path === '/' ? SITE_URL : `${SITE_URL}${route.path}`)}</loc>
    <lastmod>${metadata.lastmod}</lastmod>
    <changefreq>${metadata.changefreq}</changefreq>
    <priority>${metadata.priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>
`;
}

function generateRobotsTxt() {
  return `User-agent: *
Allow: /
Disallow: /admin

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

function getFeaturedCarsForHome(cars) {
  const featuredCars = (cars || []).filter((car) => Boolean(car.destacado));
  const source = featuredCars.length > 0 ? featuredCars : cars || [];
  return source.slice(0, 3);
}

function buildRouteRenderData(route, cars) {
  const baseData = route.renderData ? { ...route.renderData } : {};

  if (route.path === '/') {
    const featuredCars = getFeaturedCarsForHome(cars);
    baseData.featuredCars = featuredCars;
    baseData.homeFeaturedCars = featuredCars;
  }

  if (route.path === '/inventario') {
    baseData.inventoryCars = cars;
  }

  return Object.keys(baseData).length ? baseData : null;
}

async function prerender() {
  console.log('Starting static HTML pre-rendering process...');

  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base: '/',
  });

  try {
    const templatePath = path.resolve(DIST_DIR, 'index.html');

    if (!fs.existsSync(templatePath)) {
      console.error('❌ dist/index.html not found. Run the build first.');
      return;
    }

    const template = fs.readFileSync(templatePath, 'utf-8');

    if (!template.includes('<div id="root"></div>')) {
      console.error(
        '❌ dist/index.html está contaminado: no contiene el placeholder <div id="root"></div>.'
      );
      console.error(
        '   Esto suele ocurrir al re-ejecutar `node prerender.js` sin un `vite build` previo,'
      );
      console.error(
        '   porque la primera iteración del prerender sobrescribe el template original.'
      );
      console.error('   Ejecuta `npm run build` (o `rm -rf dist && npm run build`) y vuelve a intentarlo.');
      process.exitCode = 1;
      return;
    }

    const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');

    let cars = [];

    try {
      cars = await fetchCarsForPrerender();
      console.log(`Fetched ${cars.length} cars for dynamic prerendering.`);
    } catch (carsError) {
      console.error('❌ Error fetching cars from Supabase for prerender:', carsError);
    }

    const dynamicCarRoutes = buildDynamicCarRoutes(cars);
    const allRoutes = dedupeRoutes([...staticRoutes, ...dynamicCarRoutes]);

    for (const route of allRoutes) {
      console.log(`Pre-rendering route: ${route.path}`);

      try {
        const routeRenderData = buildRouteRenderData(route, cars);
        const routeWithData = {
          ...route,
          renderData: routeRenderData || route.renderData || null,
        };

        const {
          html,
          helmet,
          htmlAttributes,
          bodyAttributes,
          initialDataScript,
        } = render(route.path, routeWithData.renderData);

        let finalHtml = template.replace(
          '<div id="root"></div>',
          `<div id="root">${html}</div>`
        );

        finalHtml = injectAttributes(finalHtml, 'html', htmlAttributes);
        finalHtml = injectAttributes(finalHtml, 'body', bodyAttributes);

        finalHtml = stripManagedSeoTags(finalHtml);

        const helmetMeta = helmet?.meta?.toString?.() ?? '';
        const helmetLink = helmet?.link?.toString?.() ?? '';
        const helmetScript = helmet?.script?.toString?.() ?? '';
        const helmetNoscript = helmet?.noscript?.toString?.() ?? '';
        const helmetStyle = helmet?.style?.toString?.() ?? '';
        const helmetPriority = helmet?.priority?.toString?.() ?? '';

        const { titleTag, extraTags } = buildMissingFallbackSeoTags(
          routeWithData,
          helmet
        );

        finalHtml = ensureTitleTag(finalHtml, titleTag);

        const heroPreloadTags =
          route.path === '/'
            ? '<link rel="preload" as="image" fetchpriority="high" type="image/webp" media="(max-width: 640px)" imagesrcset="/hero-seminuevos-mobile-750.webp 750w, /hero-seminuevos-mobile-900.webp 900w" imagesizes="100vw">' +
              '<link rel="preload" as="image" fetchpriority="high" type="image/webp" media="(min-width: 641px)" imagesrcset="/hero-seminuevos-1280.webp 1280w, /hero-seminuevos-1920.webp 1920w" imagesizes="100vw">'
            : '';

        const headTags = [
          helmetPriority,
          heroPreloadTags,
          helmetMeta,
          extraTags,
          helmetLink,
          helmetScript,
          helmetNoscript,
          helmetStyle,
        ]
          .filter(Boolean)
          .join('');

        if (!headTags.trim()) {
          finalHtml = ensureTitleTag(
            finalHtml,
            routeWithData.title
              ? `<title>${escapeHtmlAttribute(routeWithData.title)}</title>`
              : ''
          );
          finalHtml = appendToHead(finalHtml, buildFallbackSeoTags(routeWithData));
        } else {
          finalHtml = appendToHead(finalHtml, headTags);
        }

        finalHtml = appendToBody(finalHtml, initialDataScript);

        const outputDir = buildOutputDir(route.path);
        writeTextFile(path.join(outputDir, 'index.html'), finalHtml);

        console.log(`✅ Successfully pre-rendered ${path.join(outputDir, 'index.html')}`);
      } catch (error) {
        console.error(`❌ Error rendering ${route.path}:`, error);
      }
    }

    const sitemapXml = generateSitemapXml(allRoutes);
    const robotsTxt = generateRobotsTxt();

    writeTextFile(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml);
    writeTextFile(path.join(DIST_DIR, 'robots.txt'), robotsTxt);

    console.log(`✅ Generated ${path.join(DIST_DIR, 'sitemap.xml')}`);
    console.log(`✅ Generated ${path.join(DIST_DIR, 'robots.txt')}`);
    console.log(`All routes successfully pre-rendered! Total routes: ${allRoutes.length}`);
  } catch (error) {
    console.error('Fatal error during pre-rendering:', error);
  } finally {
    await vite.close();
  }
}

prerender();