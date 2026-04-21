# Reporte de Auditoría: Estado de Logos y Favicons
**Fecha de análisis:** 13 de febrero de 2026
**Proyecto:** Seminuevos Baja

## 1. Análisis del Favicon (index.html)
Se identificaron las siguientes etiquetas en `index.html`:
- `<link rel="icon" href="/favicon.ico" sizes="any">`
- `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">`
- `<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">`
- `<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">`
- `<link rel="manifest" href="/site.webmanifest">` (Contiene referencias a `android-chrome-192x192.png` y `512x512.png`)

**Archivos disponibles en `public/`:**
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon-180x180.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

**Configuración actual:** El sitio utiliza un set completo de favicons estándar cargados desde la raíz del directorio `public/`.

---

## 2. Análisis del Logo en Header (src/components/Header.jsx)
El Header utiliza una imagen externa alojada en el CDN de Hostinger.
- **Ruta/URL:** `https://horizons-cdn.hostinger.com/6224f76d-ecf5-45af-9c0f-743e5ebf8984/b4d3b845b40978d0e126afc9d55daac7.png`
- **Implementación:** Se usa mediante un tag `<img>` con la variable `logoUrl`.
- **Texto:** Acompañado por el componente `<span className="text-white font-bold text-xl">{siteName}</span>`.

---

## 3. Análisis del Logo en Footer (src/components/Footer.jsx)
El Footer mantiene consistencia con el Header.
- **Ruta/URL:** `https://horizons-cdn.hostinger.com/6224f76d-ecf5-45af-9c0f-743e5ebf8984/b4d3b845b40978d0e126afc9d55daac7.png`
- **Implementación:** Tag `<img>` dentro de un `<Link to="/">`.

---

## 4. Comparativa y Consistencia
| Elemento | Origen del Archivo | Consistente |
| :--- | :--- | :--- |
| **Favicon** | Archivos locales en `/public` | Sí (entre sus variantes) |
| **Logo Header** | URL Externa (CDN Hostinger) | Sí |
| **Logo Footer** | URL Externa (CDN Hostinger) | Sí |

**¿Son consistentes el Favicon y el Logo?**
- **Visualmente:** Requiere inspección visual de los activos, pero técnicamente los favicons en `public/` son archivos estáticos independientes del archivo `.png` usado en el Header/Footer.
- **Técnicamente:** El logo principal reside en un CDN, mientras que el favicon reside localmente.

---

## 5. Resumen Consolidado y Recomendación

### Estado Actual:
*   **Favicon:** Gestionado localmente en `/public/` (varios tamaños).
*   **Logo Header:** `https://horizons-cdn.hostinger.com/.../b4d3b845b40978d0e126afc9d55daac7.png`
*   **Logo Footer:** Mismo que el Header.
*   **Consistencia:** **ALTA**. El logo de marca es idéntico en Header y Footer.

### Recomendaciones:
1.  **Oficialización del Branding:** El logo alojado en el CDN de Hostinger (`b4d3b845...png`) debe considerarse el logo "oficial" de la aplicación para el modo oscuro/azul oscuro.
2.  **Sincronización del Favicon:** Se recomienda verificar que los archivos en `/public` sean versiones simplificadas o recortadas del logo oficial del CDN para asegurar que la identidad visual sea 100% coherente desde la pestaña del navegador hasta el pie de página.
3.  **Localización de Activos:** Si se desea eliminar la dependencia de red externa, se podría descargar el logo del CDN y colocarlo en `public/logo-principal.png`.