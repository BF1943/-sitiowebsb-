import { useCallback } from 'react';
import { useDeviceType } from './useDeviceType';

/**
 * Hook to interact with Google Analytics 4 (GA4)
 * Assumes window.gtag is initialized in index.html
 */
export const useGoogleAnalytics = () => {
  // Automatically retrieve the current device type
  const deviceType = useDeviceType();

  const trackLeadInterest = useCallback(({ autoId, autoModelo, autoPrecio }) => {
    return new Promise((resolve) => {
      try {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'lead_interest', {
            auto_id: autoId,
            auto_modelo: autoModelo,
            auto_precio: autoPrecio,
            device_type: deviceType, // Automatically injected
            timestamp: new Date().toISOString()
          });
        }
      } catch (error) {
        console.error('Error tracking GA4 event:', error);
      }
      resolve();
    });
  }, [deviceType]);

  const trackEvent = useCallback((eventName, eventParams = {}) => {
    return new Promise((resolve) => {
      try {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', eventName, {
            ...eventParams,
            device_type: deviceType, // Automatically injected
            timestamp: new Date().toISOString()
          });
        }
      } catch (error) {
        console.error('Error tracking GA4 event:', error);
      }
      resolve();
    });
  }, [deviceType]);

  const trackWhatsAppClick = useCallback((contactType, pageSource) => {
    return new Promise((resolve) => {
      try {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'lead_whatsapp', {
            contact_type: contactType,
            page_source: pageSource,
            device_type: deviceType, // Automatically injected
            timestamp: new Date().toISOString()
          });
        }
      } catch (error) {
        console.error('Error tracking GA4 WhatsApp click:', error);
      }
      resolve();
    });
  }, [deviceType]);

  return { trackLeadInterest, trackEvent, trackWhatsAppClick };
};