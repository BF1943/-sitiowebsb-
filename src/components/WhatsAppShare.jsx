import React from 'react';
import ShareButton from './ShareButton';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';

/**
 * WhatsAppShare Component
 * Updated to use the ShareButton component logic to display a share menu
 * instead of opening WhatsApp directly, and now includes GA tracking.
 */
export default function WhatsAppShare({ carDetails, carId, className, children }) {
  const { trackEvent } = useGoogleAnalytics();

  // Map carDetails to the expected 'car' prop format for ShareButton
  const carProp = carDetails ? {
    ...carDetails,
    id: carId
  } : null;

  const handleShareClick = () => {
    trackEvent('whatsapp_share_click', {
      action: 'click',
      category: 'engagement',
      label: carId ? `whatsapp_share_wrapper_${carId}` : 'whatsapp_share_wrapper'
    });
  };

  return (
    <ShareButton car={carProp} className={className} onClick={handleShareClick}>
      {children}
    </ShareButton>
  );
}