import React, { createContext } from 'react';

const siteSettings = Object.freeze({
  logoUrl: '/logo.png',
  siteName: 'Seminuevos Baja',
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
