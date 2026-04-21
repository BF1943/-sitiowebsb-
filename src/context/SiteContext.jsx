import React, { createContext } from 'react';
import { supabase } from '../lib/supabase.js';

const siteSettings = Object.freeze({
  logoUrl: '/logo-seminuevos-baja.png',
  siteName: 'Seminuevos Baja',
  supabase,
});

const SiteContext = createContext(siteSettings);
SiteContext.displayName = 'SiteContext';

function SiteProvider({ children }) {
  return (
    <SiteContext.Provider value={siteSettings}>
      {children}
    </SiteContext.Provider>
  );
}

export { SiteContext, SiteProvider };
export default SiteContext;