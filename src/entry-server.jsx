import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { SiteProvider } from './context/SiteContext.jsx';
import App from './AppServer.jsx';

function escapeJsonForHtml(value) {
  return JSON.stringify(value ?? null)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

function normalizeUrl(url) {
  if (typeof url !== 'string' || !url.trim()) return '/';
  return url.startsWith('/') ? url : `/${url}`;
}

function restorePreviousPrerenderData(previousPrerenderData) {
  if (typeof previousPrerenderData === 'undefined') {
    delete globalThis.__PRERENDER_DATA__;
    return;
  }

  globalThis.__PRERENDER_DATA__ = previousPrerenderData;
}

export function render(url, renderData = null) {
  const helmetContext = {};
  const safeUrl = normalizeUrl(url);
  const previousPrerenderData = globalThis.__PRERENDER_DATA__;

  globalThis.__PRERENDER_DATA__ = renderData;

  try {
    const html = renderToString(
      <SiteProvider>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={safeUrl}>
            <App />
          </StaticRouter>
        </HelmetProvider>
      </SiteProvider>
    );

    const helmet = helmetContext.helmet ?? {};

    return {
      html,
      helmet,
      head: [
        helmet.title?.toString?.() ?? '',
        helmet.priority?.toString?.() ?? '',
        helmet.meta?.toString?.() ?? '',
        helmet.link?.toString?.() ?? '',
        helmet.script?.toString?.() ?? '',
        helmet.noscript?.toString?.() ?? '',
        helmet.style?.toString?.() ?? '',
      ].join(''),
      htmlAttributes: helmet.htmlAttributes?.toString?.() ?? '',
      bodyAttributes: helmet.bodyAttributes?.toString?.() ?? '',
      initialDataScript: renderData
        ? `<script>window.__PRERENDER_DATA__=${escapeJsonForHtml(renderData)};</script>`
        : '',
    };
  } finally {
    restorePreviousPrerenderData(previousPrerenderData);
  }
}