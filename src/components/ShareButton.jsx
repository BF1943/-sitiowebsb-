import React, { useState, useRef, useEffect } from 'react';
import { Share2, Facebook, MessageCircle, Copy, Check, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';

export default function ShareButton({ car, className, children, onClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const menuRef = useRef(null);
  const { trackEvent } = useGoogleAnalytics();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const url = car ? `${baseUrl}/auto/${car.slug || car.id}` : (typeof window !== 'undefined' ? window.location.href : '');
  const text = car ? `¡Mira este ${car.marca} ${car.modelo} ${car.año} en venta!` : '¡Mira este auto en venta!';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({
        title: "¡Enlace copiado!",
        description: "El enlace se ha copiado al portapapeles exitosamente.",
      });
      setTimeout(() => {
        setCopied(false);
        setIsOpen(false);
      }, 2000);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo copiar el enlace.",
      });
    }
  };

  const handleWhatsApp = () => {
    trackEvent('whatsapp_button_click', {
      action: 'share',
      category: 'engagement',
      label: car ? `whatsapp_share_${car.id}` : 'whatsapp_share_general'
    });

    const waUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
    window.open(waUrl, '_blank');
    setIsOpen(false);
  };

  const handleFacebook = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(fbUrl, '_blank');
    setIsOpen(false);
  };

  const handleShareClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (onClick) {
      onClick(e);
    }
    
    if (navigator.share && /mobile|android|iphone|ipad/i.test(navigator.userAgent)) {
      try {
        await navigator.share({
          title: car ? `${car.marca} ${car.modelo}` : 'Auto en venta',
          text: text,
          url: url,
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          setIsOpen(!isOpen);
        }
      }
    } else {
      setIsOpen(!isOpen);
    }
  };

  const defaultClassName = "bg-green-600 hover:bg-green-700 text-white p-3 md:p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-105";

  return (
    <div className="relative inline-flex" ref={menuRef}>
      <button
        onClick={handleShareClick}
        className={className || defaultClassName}
        title="Compartir"
        aria-label="Compartir"
      >
        {children || <Share2 className="w-5 h-5 md:w-6 md:h-6" />}
      </button>

      {isOpen && (
        <div className="absolute bottom-[calc(100%+0.5rem)] right-0 w-56 bg-white rounded-xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-2 duration-200 border border-gray-200">
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100 bg-gray-50/80">
            <span className="text-sm font-bold text-gray-800">Compartir auto</span>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-col">
            <button 
              onClick={handleWhatsApp} 
              className="flex items-center gap-3 px-4 py-3.5 hover:bg-green-50 transition-colors text-gray-700 hover:text-green-700 text-sm font-medium w-full text-left group"
            >
              <div className="bg-green-100 p-1.5 rounded-full group-hover:bg-green-200 transition-colors">
                <MessageCircle className="w-4 h-4 text-green-600" />
              </div>
              WhatsApp
            </button>
            <button 
              onClick={handleFacebook} 
              className="flex items-center gap-3 px-4 py-3.5 hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-700 text-sm font-medium w-full text-left border-t border-gray-100 group"
            >
              <div className="bg-blue-100 p-1.5 rounded-full group-hover:bg-blue-200 transition-colors">
                <Facebook className="w-4 h-4 text-blue-600" />
              </div>
              Facebook
            </button>
            <button 
              onClick={handleCopy} 
              className="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors text-gray-700 hover:text-gray-900 text-sm font-medium w-full text-left border-t border-gray-100 group"
            >
              <div className="bg-gray-100 p-1.5 rounded-full group-hover:bg-gray-200 transition-colors">
                {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-gray-600" />}
              </div>
              {copied ? '¡Copiado!' : 'Copiar enlace'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}