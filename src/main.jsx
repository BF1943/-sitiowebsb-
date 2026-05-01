import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { SiteProvider } from './context/SiteContext.jsx';
import { HelmetProvider } from 'react-helmet-async';

hydrateRoot(
  document.getElementById('root'),
  <>
    <SiteProvider>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </SiteProvider>
  </>
);
