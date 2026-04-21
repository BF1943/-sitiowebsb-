import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, CheckCircle } from 'lucide-react';

const ValuationSection = ({ onWhatsAppClick }) => {
  const benefitsList = [
    "Te decimos cuánto vale tu auto con base en el mercado real.",
    "Pago seguro vía transferencia electrónica el mismo día.",
    "Acompañamiento completo en el proceso y documentación.",
    "Aceptamos autos con financiamiento pendiente.",
    "Sin citas con extraños ni riesgos de fraude."
  ];

  return (
    <section id="valoracion" className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Columna de Beneficios */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-bold text-brand-gray-title mb-6">
              ¿Por qué vender con Seminuevos Baja?
            </h2>
            <p className="text-gray-600 mb-6">
              Olvídate de publicar en redes sociales, lidiar con curiosos o arriesgar tu seguridad. Somos la agencia líder en <strong>compra de autos usados en Ensenada</strong>.
            </p>
            <div className="space-y-4">
              {benefitsList.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-500 flex-shrink-0" />
                  <span className="text-gray-700 font-semibold text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Columna de Max */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 rounded-2xl shadow-2xl text-center border border-amber-500/30"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-amber-500/10 rounded-full">
                <MessageCircle className="h-12 w-12 text-amber-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Agenda tu Avalúo Gratis</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 font-medium">
              Habla con Max y agenda tu avalúo gratis.
            </p>
            <Button 
              onClick={onWhatsAppClick} 
              size="lg" 
              className="text-lg px-10 py-6 rounded-xl shadow-lg shadow-amber-500/20 transform hover:scale-105 transition-transform duration-300 btn-glow w-full"
            >
              Agenda por WhatsApp
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ValuationSection;