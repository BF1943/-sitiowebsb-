# Google Analytics 4 (GA4) Integration Audit Report

## 1. Current GA Configuration Status
**Status:** Initialized & Active
- **Initialization:** Google Analytics is properly initialized directly in `index.html` via the standard Google tag (`gtag.js`) snippet.
- **Measurement ID:** `G-ZB4L2JNZE9` is successfully configured.
- **Content Security Policy (CSP):** The CSP in `index.html` explicitly allows connections and scripts from `www.googletagmanager.com` and `www.google-analytics.com`, ensuring the tracking scripts are not blocked by the browser.

## 2. Event Tracking Hook (`useGoogleAnalytics.js`)
The custom hook `useGoogleAnalytics.js` wraps the global `window.gtag` function and currently exposes three main tracking methods:
1. `trackLeadInterest`: Tracks the `lead_interest` event.
2. `trackEvent`: A generic event tracker for custom events.
3. `trackWhatsAppClick`: Tracks the `lead_whatsapp` event.

All methods safely check for the existence of `window.gtag` and inject a `timestamp` automatically.

## 3. Component-Level Event Tracking

### `Inventory.jsx` (Inventory List / Cards)
- **Me Interesa Button (`handleInterest`):** Fires `lead_interest` and `lead_whatsapp` (with `autoId`, `autoModelo`, `autoPrecio`).
- **Simula tu crédito Button (`handleSimulateCredit`):** Fires `simulate_credit` (with `button_location`, `car_id`, `car_name`).
- **Car Card Click:** 🚨 **NOT TRACKED**. Clicking the main body of a car card to navigate to the details page does not currently trigger a specific click event in `Inventory.jsx`.

### `CarDetailPage.jsx` (Car Details)
- **Page Load/View (`fetchCarDetails`):** Fires `view_item` event (with `item_id`, `item_name`, `price`) once the car details are successfully fetched.
- **Me Interesa Button (`handleInterest`):** Fires `lead_interest` (with `autoId`, `autoModelo`, `autoPrecio`).
- **Simula tu crédito Button (`handleSimulateCredit`):** Fires `simulate_credit` (with `button_location`, `car_id`, `car_name`).

### Other Components
- **`WhatsAppFloat.jsx`:** Fires `whatsapp_click` with `action`, `category`, and `label`.
- **`ShareButton.jsx`:** Fires `whatsapp_button_click` when users share via WhatsApp.

## 4. Data Payload Analysis (Car Data)
When car-related events are fired, the following data is generally included:
- **Identifier:** `autoId` / `car_id` / `item_id`
- **Name/Model:** Usually formatted as `${marca} ${modelo} ${año}` (e.g., `Nissan Versa 2020`).
- **Price:** Sent as `autoPrecio` / `price`.
- *Missing Attributes:* Additional attributes like `mileage` (kilometraje), `color`, or `transmission` are currently *not* included in the GA payloads, which limits deep inventory analytics.

## 5. Identified Gaps & Missing Tracking
1. **Inventory Card Clicks:** There is no tracking when a user clicks on an inventory card to view a car's details. Only the page load of the subsequent detail page is tracked (`view_item`).
2. **Search & Filters:** The text input search (`searchTerm`) in `Inventory.jsx` is not tracked. We are missing valuable data on what users are actively searching for.
3. **Missing E-commerce Schema Parameters:** GA4 recommends standard parameters for `view_item` and `select_item` (like `item_category`, `item_brand`). Currently, the data is sent in a somewhat flat/custom format.

## 6. Recommendations for Improvement
1. **Track Card Clicks (`select_item`):** Add a `trackEvent('select_item', { item_id, item_name, price, item_list_name: 'Inventory' })` inside the `navigateToDetail` function in `Inventory.jsx`.
2. **Track Search Queries (`search`):** Implement a debounced tracking event for the search input in `Inventory.jsx` to log `search_term`.
3. **Standardize GA4 E-commerce Events:** Update `trackLeadInterest` and `view_item` payloads to strictly follow Google Analytics 4 e-commerce parameter naming conventions (e.g., separating `item_brand`, `item_category` instead of merging them into a single `auto_modelo` string).
4. **Include Richer Car Data:** Pass `kilometraje`, `transmisión`, and `año` as separate parameters for better audience segmentation in GA4.