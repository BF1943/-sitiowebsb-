import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Building2, ShieldCheck, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinancingDetailsModal = ({ isOpen, onClose }) => {
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
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 relative flex-shrink-0">
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
                <span className="inline-block px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold tracking-wider mb-3 border border-amber-400/30">
                  VENTA SEGURA
                </span>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                  Tú cobras de contado,<br />el comprador paga al banco.
                </h2>
                <p className="text-blue-100 text-sm md:text-base max-w-lg mt-2">
                  El secreto para vender tu auto 3X más rápido sin correr riesgos financieros.
                </p>
              </div>
              
              {/* Abstract decorative circles */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-grow bg-white">
              <div className="space-y-6">
                
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Pago 100% Inmediato</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Aunque el comprador pague su auto a 48 o 60 meses, <span className="font-semibold text-gray-900">tú recibes el 100% del valor acordado</span> en una sola exhibición al momento de la firma.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 shadow-sm">
                      <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Cero Riesgos para Ti</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Si el comprador deja de pagar, es problema del banco, no tuyo. Tú ya tienes tu dinero seguro y sin devoluciones.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                      <Building2 className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Bancos Aliados</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Trabajamos directamente con <span className="font-semibold text-blue-700">BBVA, Banorte, Hey Banco y Crédito Go</span> para agilizar la autorización del crédito.
                    </p>
                  </div>
                </div>

                 {/* Feature 4 */}
                 <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shadow-sm">
                      <FileText className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Trámite 100% Gestionado</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Nosotros armamos todo el expediente del comprador. Tú solo te presentas para firmar y cobrar tu dinero.
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
                className="bg-blue-900 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20"
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

export default FinancingDetailsModal;