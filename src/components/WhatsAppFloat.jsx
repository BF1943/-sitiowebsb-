import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';

/**
 * WhatsAppFloat Component
 * Floating action button for direct WhatsApp contact.
 * Features a status indicator and a pulsing WhatsApp button.
 */
export default function WhatsAppFloat() {
  const phoneNumber = '526461616696';
  const message = 'Hola, me gustaría obtener más información.';
  const [showTooltip, setShowTooltip] = useState(false);
  const { trackEvent } = useGoogleAnalytics();

  useEffect(() => {
    const tooltipClosed = sessionStorage.getItem('whatsappTooltipClosed');
    if (!tooltipClosed) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 4000); 

      return () => clearTimeout(timer);
    }
  }, []);

  const handleWhatsAppClick = () => {
    // Analytics tracking event updated to 'whatsapp_click' as per audit requirements
    trackEvent('whatsapp_click', {
      action: 'click',
      category: 'engagement',
      label: 'whatsapp_float'
    });
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const closeTooltip = (e) => {
    e.stopPropagation(); // Prevents click from bubbling up to the banner's onClick handler
    setShowTooltip(false);
    sessionStorage.setItem('whatsappTooltipClosed', 'true');
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex flex-col items-end gap-3">
      {/* Tooltip / Banner */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="whatsapp-tooltip relative cursor-pointer bg-white px-4 py-2.5 rounded-full shadow-2xl border border-gray-100"
            onClick={handleWhatsAppClick}
          >
            <button
              onClick={closeTooltip}
              className="absolute -top-1.5 -right-1.5 bg-white rounded-full shadow-md text-gray-400 hover:text-gray-600 transition-colors border border-gray-100 p-1 z-10"
              aria-label="Cerrar"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <div className="flex items-center gap-2.5 pr-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold text-gray-700">Chatea con Max ahora</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        {/* Floating WhatsApp Button */}
        <motion.button
          onClick={handleWhatsAppClick}
          className="whatsapp-float flex items-center justify-center bg-green-500 text-white rounded-full p-4 shadow-[0_10px_25px_-5px_rgba(34,197,94,0.6)] hover:bg-green-600 transition-all duration-300 hover:scale-110 active:scale-95 group relative"
          aria-label="Contactar por WhatsApp"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut'
          }}
        >
          <MessageCircle className="h-7 w-7 md:h-8 md:w-8 transition-transform group-hover:rotate-12" />
          
          {/* Mobile Status Dot (Simple indicator) */}
          <span className="md:hidden absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border border-white"></span>
          </span>
        </motion.button>
      </div>
    </div>
  );
}