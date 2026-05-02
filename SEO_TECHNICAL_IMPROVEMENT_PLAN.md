# Plan de mejoras tecnicas SEO y rendimiento

Fecha: 2026-05-01

Este plan resume los hallazgos principales de la auditoria tecnica. La regla de trabajo es aplicar primero cambios seguros, puntuales y con impacto real en SEO, rendimiento, rastreo, indexacion, accesibilidad o conversion, sin cambiar identidad visual ni textos comerciales importantes sin autorizacion.

## Prioridad alta

1. Cambiar el arranque de React de `createRoot` a `hydrateRoot`.
   - Archivo: `src/main.jsx`
   - Objetivo: aprovechar el HTML prerenderizado y evitar que React reconstruya innecesariamente la pagina en el navegador.
   - Riesgo: medio-bajo. Puede revelar diferencias entre HTML prerenderizado y React cliente, por eso requiere build y revision.
   - Estado: completado.

2. Unificar el SEO tecnico de `/gana-dinero`.
   - Archivos probables: `src/pages/EarnMoney.jsx`, `src/lib/seoConfig.js`, `prerender-config.js`
   - Objetivo: evitar titles, descriptions, Open Graph y Twitter tags inconsistentes que puedan confundir a Google o redes sociales.
   - Nota de negocio: los datos de comisiones y programa de referidos son reales, por lo que no se eliminan por defecto.
   - Riesgo: bajo si solo se unifica metadata.
   - Estado: completado.

3. Evitar contenido invisible por animaciones above-the-fold.
   - Archivos probables: `src/pages/EarnMoney.jsx` y otras rutas con `framer-motion`
   - Objetivo: que el contenido principal sea visible aunque el JS tarde en cargar.
   - Riesgo: bajo si se mantiene el mismo aspecto visual.
   - Estado: completado.

4. Revisar peso del bundle principal.
   - Archivos probables: `src/App.jsx`, providers globales, imports de librerias compartidas.
   - Objetivo: reducir JavaScript inicial para mejorar carga movil, TBT e interactividad.
   - Riesgo: medio. Requiere cambios graduales y pruebas.
   - Estado: completado.

## Prioridad media

5. Normalizar URLs con trailing slash.
   - Archivos probables: `netlify.toml`, `public/_redirects`
   - Objetivo: evitar duplicados como `/inventario` y `/inventario/`.
   - Riesgo: medio si una regla de redirect queda demasiado amplia.
   - Estado: completado.

6. Mejorar schema de autos cuando falte precio o disponibilidad real.
   - Archivo: `src/pages/CarDetailPage.jsx`
   - Objetivo: no publicar `price: 0` o `InStock` si el dato no aplica.
   - Riesgo: depende de los campos disponibles en Supabase.
   - Estado: completado.

7. Mejorar accesibilidad de formularios.
   - Archivos probables: `src/components/sell-car/ValuationForm.jsx`, `src/pages/Contact.jsx`
   - Objetivo: labels conectados a inputs, autocompletado movil y validacion mas clara.
   - Riesgo: bajo.
   - Estado: completado.

8. Unificar paginas restantes en `PageSEO`.
   - Archivos probables: `src/pages/AboutUs.jsx`, `src/pages/Terms.jsx`, `src/pages/blog/*.jsx`
   - Objetivo: reducir duplicacion de SEO tecnico y evitar diferencias entre rutas.
   - Riesgo: bajo-medio.
   - Estado: completado.

## Prioridad baja

9. Revisar imagenes remotas de articulos.
   - Archivos probables: `src/pages/blog/*.jsx`
   - Objetivo: mejorar CLS/LCP usando imagenes optimizadas, dimensiones y lazy loading.
   - Riesgo: bajo.
   - Estado: pendiente.

10. Ajustar lint/resolver para que `npm run lint` funcione de forma estable.
    - Archivo probable: `eslint.config.mjs`
    - Objetivo: poder detectar errores de codigo antes de deploy.
    - Riesgo: bajo.
    - Estado: pendiente.
