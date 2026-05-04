#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const SITE_ORIGIN = 'https://seminuevosbaja.com.mx';

function toCanonicalPath(value = '/') {
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

  if (raw === '/') return '/';
  if (/\.[a-z0-9]{2,8}$/i.test(raw)) return raw;

  return `${raw}/`;
}

async function main() {
  const cwd = process.cwd();
  const configPath = path.join(cwd, 'prerender-config.js');
  const outputPath = path.join(cwd, 'public', 'llms.txt');

  if (!fs.existsSync(configPath)) {
    console.error(`generate-llms: no se encontró ${configPath}`);
    process.exit(1);
  }

  const { routes } = await import(pathToFileURL(configPath).href);

  if (!Array.isArray(routes) || routes.length === 0) {
    console.error('generate-llms: prerender-config.js no exportó rutas');
    process.exit(1);
  }

  const lines = routes.map(({ path: routePath, title, description }) => {
    const canonicalPath = toCanonicalPath(routePath);
    const url = `${SITE_ORIGIN}${canonicalPath === '/' ? '/' : canonicalPath}`;
    const safeTitle = (title || '').trim() || routePath;
    const safeDesc = (description || '').trim();
    return safeDesc
      ? `- [${safeTitle}](${url}): ${safeDesc}`
      : `- [${safeTitle}](${url})`;
  });

  const content = `# Seminuevos Baja\n\n## Pages\n${lines.join('\n')}\n`;

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, content, 'utf8');

  console.log(`generate-llms: ${routes.length} rutas escritas en ${outputPath}`);
}

const isMainModule = import.meta.url === pathToFileURL(process.argv[1]).href;

if (isMainModule) {
  main().catch((err) => {
    console.error('generate-llms: fallo inesperado', err);
    process.exit(1);
  });
}
