# Google Analytics Device Tracking Audit Report
**Project:** Seminuevos Baja
**Date:** 2026-03-19
**Scope:** Device-specific event tracking across Mobile and Desktop.

## 1. Device Detection Analysis
- **`useGoogleAnalytics.js` Hook:** The hook **does not** contain any logic to detect device type (`mobile`, `tablet`, `desktop`). It strictly receives parameters passed from components and adds a `timestamp`.
- **`Header.jsx`:** Uses CSS media queries (`hidden md:flex`, `md:hidden`) and a local state `isMenuOpen` to toggle mobile navigation, but it **does not** pass device-specific flags to analytics when links are clicked.
- **`ShareButton.jsx`:** Contains manual device detection using a regex: `/mobile|android|iphone|ipad/i.test(navigator.userAgent)`. This is used to trigger the native `navigator.share` API vs. a custom dropdown, but the associated tracking event (`whatsapp_button_click`) **does not** include this detected device type in its parameters.
- **UI Hooks:** The codebase has access to `useIsMobile` (shadcn utility), but it is **not currently utilized** in any of the analytics tracking calls.

## 2. Event Parameter Review
- **Standard Parameters:** Most events include `timestamp`, `action`, `category`, and `label`.
- **Missing Parameters:** No events currently send `device_category`, `platform`, `screen_size`, or `is_mobile` as custom dimensions/parameters within the `trackEvent` or `trackWhatsAppClick` calls.
- **`trackWhatsAppClick`:** This function accepts `contactType` and `pageSource`. While `pageSource` sometimes indicates the component (e.g., `'whatsapp_float'`), it doesn't explicitly log if the user is on mobile or desktop.

## 3. Component-Specific Findings
- **`WhatsAppFloat.jsx`:** The "Chatea con Max" tooltip and button are highly mobile-optimized (using `fixed bottom-6`), but the event `whatsapp_click` sent is identical regardless of the device.
- **`CreditCalculator.jsx`:** Tracks `lead_credit_simulation` and `lead_credit_application_click`. These events capture rich data (loan amount, term, car name) but **lack device context**.
- **`Inventory.jsx` & `CarDetailPage.jsx`:** Both track `simulate_credit` and `trackLeadInterest`. They distinguish the *location* of the button (e.g., `'inventory_card'` vs `'car_detail_page'`), but not the *device* used.
- **`Header.jsx`:** Does not track clicks on the mobile "hamburger" menu vs. desktop navigation links.

## 4. Device-Specific Events
- **Mobile-Only Logic:** `ShareButton.jsx` has a code path for `navigator.share` (mobile-only), but the tracking event is effectively the same as the desktop fallback.
- **Desktop-Only Logic:** None identified. The same tracking implementation is used globally.

## 5. Identified Gaps & Inconsistencies
- **Inconsistency:** `ShareButton.jsx` detects the device to decide *functionality* (Web Share API vs. Dropdown) but remains silent about that detection in the *analytics* log.
- **Gap:** High-value conversion actions (WhatsApp clicks, Credit Applications) cannot be segmented by device type in GA4 reports without relying on Google's automatic (and sometimes delayed) device detection.
- **Gap:** Navigation tracking in `Header.jsx` is missing, making it impossible to compare mobile menu usage vs. desktop nav performance.

## 6. Recommendations
1. **Centralize Detection:** Update `useGoogleAnalytics.js` to automatically include a `device_type` parameter in all events by using the `useIsMobile` hook or `window.innerWidth`.
2. **Standardize Parameters:** Add `device_category` (mobile/tablet/desktop) to the global event parameters in the `trackEvent` wrapper.
3. **Enhance `ShareButton`:** Log whether the user used the `native_share` (mobile) or `custom_menu` (desktop) in the event label.
4. **Mobile Menu Tracking:** Add an event for `mobile_menu_open` and `mobile_menu_close` in `Header.jsx` to measure mobile UX engagement.
5. **GA4 Configuration:** Ensure the GA4 property has "Device Category" enabled as a custom dimension if it's not appearing automatically in event-level reports.

---
**Status:** Audit Complete. No code modifications performed.