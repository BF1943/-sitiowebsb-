# SEO Keyword Placement Analysis: "Agencia de Autos Ensenada"

**Date:** 2026-02-11
**Target Keyword:** "agencia de autos ensenada"
**Intent:** Local / Entity (Users looking for a physical business location rather than just listings)

## 1. Executive Summary

While the application is currently well-optimized for transactional keywords like *"venta de autos"* and *"seminuevos"*, it lacks density for the entity-based keyword **"agencia de autos"**. 

Strengthening this keyword association is critical for **Local SEO (Google Maps/Business Profile)** rankings. Search engines need to clearly identify the website not just as a list of cars, but as a physical **"Agencia"** located in **"Ensenada"**.

This report identifies the top 3 high-impact opportunities to insert this keyword naturally without disrupting the user experience.

## 2. Keyword Gap Analysis

| Page | Current Focus | "Agencia" Mentions | "Ensenada" Mentions | Status |
| :--- | :--- | :---: | :---: | :--- |
| `Home.jsx` | Transactional ("Venta", "Compra") | Low | High | ⚠️ Missed Opportunity |
| `AboutUs.jsx` | Trust/Identity | Medium | High | ⚠️ Partial Match |
| `Contact.jsx` | Location/Action | Low | High | ⚠️ Missed Opportunity |
| `Inventory.jsx` | Product Catalog | None | High | Neutral |
| `SellCar.jsx` | Service (Acquisition) | None | High | Neutral |

## 3. Top 3 Ranking Recommendations

### Priority #1: About Us Page (`src/pages/AboutUs.jsx`)
**Rationale:** The "About Us" page is the primary semantic location where a business defines *what* it is. This is the safest and most effective place to explicitly define the business entity.

*   **Location:** Intro Paragraph (Hero Section)
*   **Current Text:** *"Seminuevos Baja se especializa en la venta de carros y autos seminuevos en Ensenada."*
*   **Recommendation:** Rewrite the opening sentence to define the entity type immediately.
*   **Proposed Text:**
    > "**Seminuevos Baja** es tu **agencia de autos en Ensenada** de confianza. Nos especializamos en seminuevos nacionales..."
*   **SEO Impact:** 🔴 **HIGH**. Directly links the Brand Name to the Business Category + City.
*   **UX Impact:** Positive. Clarifies the business nature immediately.

### Priority #2: Contact Page (`src/pages/Contact.jsx`)
**Rationale:** This page strongly signals local relevance to Google. Associating "visítanos" (visit us) with "agencia" reinforces physical presence.

*   **Location:** Subheading / Intro Text
*   **Current Text:** *"Estamos aquí para ayudarte. Visítanos, llámanos o escríbenos..."*
*   **Recommendation:** Be specific about *where* the user is visiting.
*   **Proposed Text:**
    > "Estamos aquí para ayudarte. Visita nuestra **agencia de autos en Ensenada**, llámanos o escríbenos para resolver todas tus dudas."
*   **SEO Impact:** 🟠 **MEDIUM/HIGH**. Strong signal for Local Map Pack ranking.
*   **UX Impact:** Neutral. Natural flow.

### Priority #3: Home Page (`src/pages/Home.jsx`)
**Rationale:** The homepage has the highest page authority. Inserting the keyword here passes the most "link juice" to the term.

*   **Location:** "Why Choose Us" Section Intro
*   **Current Text:** *"¿Por qué elegir {siteName}? Te damos los mejores beneficios..."*
*   **Recommendation:** Contextualize the choice.
*   **Proposed Text:**
    > "¿Por qué elegirnos como tu **agencia de autos en Ensenada**? Te damos los mejores beneficios, ya sea que quieras comprar o vender."
*   **SEO Impact:** 🟠 **MEDIUM**. Adds relevance to the main landing page.
*   **UX Impact:** Positive. Reinforces authority.

## 4. Secondary Recommendations (Quick Wins)

*   **Inventory.jsx**:
    *   *Action:* Update the `<meta name="description">` tag.
    *   *Draft:* "Explora el inventario de **la mejor agencia de autos en Ensenada**. Seminuevos garantizados..."

*   **Footer (Global)**:
    *   *Action:* Ensure the copyright or tagline includes the phrase.
    *   *Draft:* "© 2026 Seminuevos Baja - Tu Agencia de Autos en Ensenada."

## 5. Technical Implementation Code Snippets

### For `src/pages/AboutUs.jsx`