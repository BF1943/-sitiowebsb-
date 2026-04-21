# Keyword Cannibalization Audit: "Seminuevos Ensenada"

## 1. Executive Summary
This report analyzes the distribution, density, and strategic placement of the target keyword **"seminuevos ensenada"** (and its direct variations like "seminuevos en Ensenada") across the Seminuevos Baja website. 

Currently, the website exhibits a **high risk of keyword cannibalization**. Multiple high-authority pages (Home, Inventory, and several Blog articles) are competing for the exact same primary search intent. If search engines cannot distinguish which page is the definitive resource for "Seminuevos Ensenada", they may split the ranking authority, causing all pages to rank lower than their true potential.

## 2. Keyword Distribution Analysis

*Note: Keyword counts include exact matches and close variations (e.g., "seminuevos en Ensenada"). Densities are estimated based on textual content volume.*

| Page Name | Keyword Count | Est. Density | Page Location | Primary Intent | Current Ranking Focus |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **Home.jsx** | 3 | 0.8% | Meta, H1, Body | Navigational / Transactional | General Dealership / Seminuevos Ensenada |
| **Inventory.jsx** | 3 | 1.0% | Title, Meta, H1, Body | Transactional | Venta de Carros y Autos Seminuevos Ensenada |
| **AboutUs.jsx** | 2 | 0.5% | Body (H2 context) | Informational / Brand | Agencia de Autos Ensenada |
| **Contact.jsx** | 1 | 0.2% | FAQ (H3 context) | Navigational | Contacto Agencia |
| **Blog.jsx** | 1 | 0.2% | Post Title | Navigational / Info | Blog Archive |
| **GuiaSeminuevosEnsenada.jsx** | 5 | 1.5% | Title, Meta, H1, Body | Informational | Guía Seminuevos Ensenada |
| **AutosPorDecretoSeguro.jsx** | 1 | 0.1% | Meta Keywords | Informational | Autos Decreto Seguros |
| **VentaCarrosEnsenadaBlog.jsx**| 0* | 0.0% | N/A (Focuses on "carros usados")| Informational / Local | Venta de Carros en Ensenada |
| **MejoresSeminuevos2025.jsx** | 1 | 0.2% | Meta Title | Informational | Mejores Seminuevos Tijuana y Ensenada |
| **SellCar.jsx** | 0 | 0.0% | N/A | Transactional | Vender auto Ensenada |
| **ConsignCar.jsx** | 0 | 0.0% | N/A | Transactional | Consignar auto Ensenada |

*(Other pages have 0 exact matches of the target keyword, focusing on distinct long-tail keywords).*

---

## 3. Cannibalization Risk Assessment

### **High Cannibalization Risk Detected**
The most severe conflict exists between **Home.jsx**, **Inventory.jsx**, and **GuiaSeminuevosEnsenada.jsx**.
1. **Home.jsx** has `<h1>Venta de Autos Seminuevos en Ensenada</h1>`.
2. **Inventory.jsx** has `<h1>Venta de Carros y Autos Seminuevos en Ensenada</h1>`.
3. **GuiaSeminuevosEnsenada.jsx** has `<title>Guía de Seminuevos en Ensenada...</title>` and targets the exact same semantic concept.

**The Problem:** Google's algorithm will struggle to determine which URL to serve when a user searches "seminuevos ensenada". Does the user want the homepage, the inventory listing, or the guide? Often, Google will swap them out in the SERPs, leading to unstable rankings.

### **Target Page Designation**
- **PRIMARY TARGET for "Seminuevos Ensenada":** `Home.jsx`
  - *Reasoning:* The homepage naturally accrues the most backlinks and authority. It should serve as the absolute hub for the broadest local dealership keyword.
- **SECONDARY TARGET 1:** `Inventory.jsx` 
  - *New Focus:* Should pivot to **"Autos Usados en Ensenada"** or **"Inventario de Carros Seminuevos"** to capture transactional, specific vehicle searches without competing with the Home page.
- **SECONDARY TARGET 2:** `GuiaSeminuevosEnsenada.jsx`
  - *New Focus:* Should pivot to long-tail informational queries like **"Cómo comprar seminuevos seguros en Ensenada"** or **"Agencias vs Tianguis en Ensenada"**.

---

## 4. Strategic Recommendations

### A. Home.jsx Keyword Strategy (Primary)
Yes, `Home.jsx` **should** target "seminuevos ensenada" as its primary keyword. 
- **Action:** Solidify this by keeping the H1 focused, but clearly indicating it is the *Dealership* (Agencia). 
- **To avoid cannibalizing blog pages:** Ensure Home.jsx is highly transactional and navigational. Do not include heavy block-text guides on the homepage; use internal links pointing to the blog for educational content.

### B. Suggested Variations for Other Pages
To safely rank multiple pages without them fighting each other, apply a siloed keyword mapping:
- **Home.jsx:** "Seminuevos Ensenada", "Agencia de Autos Seminuevos Baja California".
- **Inventory.jsx:** "Autos Usados en Ensenada", "Venta de Carros de Segunda Mano", "Catálogo de Autos".
- **GuiaSeminuevosEnsenada.jsx:** "Guía de compra de autos", "Dónde comprar carros seguros en Ensenada".
- **VentaCarrosEnsenadaBlog.jsx:** "Carros baratos en Ensenada", "Mercado de autos usados locales".
- **MejoresSeminuevos2025.jsx:** "Mejores modelos de autos seminuevos", "Top carros usados 2025".

### C. Internal Linking Strategy
- **From Blog to Home:** Every blog post should use the exact anchor text *"agencia de seminuevos en Ensenada"* or *"seminuevos Ensenada"* pointing directly to the `/` (Home) route.
- **From Home to Inventory:** Use anchor text like *"ver autos usados"*, *"catálogo de carros"*, or *"inventario disponible"* pointing to `/inventario`.
- **From Home to Blog:** Use "Guía de compra" or "Aprende a evitar estafas" pointing to the respective blog articles.

---

## 5. Suggested Home.jsx Content Structure (Implementation Blueprint)

If updating `Home.jsx` to perfectly align with this strategy, structure the HTML/React as follows (do not implement yet):