import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Target, Users, Smartphone, Globe, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MarketingDetailsModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
           {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />
          
          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[85vh] z-10"
          >
            {/* Header - Fixed at top */}
            <div className="bg-gradient-to-r from-purple-900 to-indigo-800 p-6 relative flex-shrink-0">
              <div className="absolute top-4 right-4 z-20">
                <button 
                  onClick={onClose}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="relative z-10 pr-8">
                <span className="inline-block px-3 py-1 rounded-full bg-indigo-400/20 text-indigo-200 text-xs font-bold tracking-wider mb-3 border border-indigo-400/30">
                  ESTRATEGIA DIGITAL
                </span>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                  Marketing Digital<br />de Alto Impacto
                </h2>
                <p className="text-indigo-100 text-sm md:text-base max-w-lg mt-2">
                  No esperamos a que el cliente llegue, vamos por él.
                </p>
              </div>
              
              {/* Abstract decorative circles */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-grow bg-white">
              <div className="space-y-6">
                
                <p className="text-gray-700 text-lg font-medium leading-relaxed border-b border-gray-100 pb-6">
                  Invertimos en campañas pagadas de <span className="font-bold text-blue-600">Meta Ads</span> y <span className="font-bold text-red-500">Google Ads</span> para mostrar tu auto a compradores activos en Ensenada. Además, lo ofrecemos directamente a nuestra cartera exclusiva de clientes que ya buscan un auto como el tuyo.
                </p>

                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                      <Target className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Segmentación Precisa</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Nuestros anuncios llegan a personas que están buscando comprar un auto en tu zona, filtrando por intereses, ubicación y capacidad de compra.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shadow-sm">
                      <Users className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Cartera Exclusiva</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Tenemos una lista de espera de clientes verificados. Es probable que ya tengamos al comprador ideal antes de publicar tu anuncio.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shadow-sm">
                      <Megaphone className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Multicanal</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Tu auto aparecerá en Facebook, Instagram, Google, nuestro sitio web y portales especializados, maximizando la visibilidad.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer - Fixed at bottom */}
            <div className="p-4 md:p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3 flex-shrink-0">
              <Button 
                onClick={onClose}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cerrar
              </Button>
              <Button 
                onClick={onClose}
                className="bg-indigo-900 text-white hover:bg-indigo-800 shadow-lg shadow-indigo-900/20"
              >
                Entendido
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MarketingDetailsModal;