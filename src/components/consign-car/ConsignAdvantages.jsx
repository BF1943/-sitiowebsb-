import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, Megaphone, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FinancingDetailsModal from './FinancingDetailsModal';
import MarketingDetailsModal from './MarketingDetailsModal';

const ConsignAdvantages = ({ onActionClick }) => {
  const [isFinancingModalOpen, setIsFinancingModalOpen] = useState(false);
  const [isMarketingModalOpen, setIsMarketingModalOpen] = useState(false);

  const advantages = [
    {
      icon: <CreditCard className="h-10 w-10 text-brand-blue" />,
      title: "Financiamiento Bancario",
      highlight: "Venta 3X Más Rápida",
      description: "En México, 8 de cada 10 autos vendidos son a crédito. Abre tu mercado al 80%.",
      hasButton: true,
      onButtonClick: () => setIsFinancingModalOpen(true),
      borderColor: "border-blue-200",
      gradient: "from-blue-50 to-white"
    },
    {
      icon: <Zap className="h-10 w-10 text-amber-500" />,
      title: "Atención IA 24/7 con Max",
      highlight: "Nunca perdemos una venta por no contestar.",
      description: "Integramos a Max, nuestro agente de Inteligencia Artificial de última generación. Atiende interesados por WhatsApp en segundos, día y noche, para agendar citas reales.",
      hasButton: false,
      borderColor: "border-amber-200",
      gradient: "from-amber-50 to-white"
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-gray-700" />,
      title: "Seguridad Total",
      highlight: "",
      description: "Transacciones seguras y compradores verificados. Olvídate de tratos riesgosos en la calle o fraudes con cheques sin fondos.",
      hasButton: false,
      borderColor: "border-gray-200",
      gradient: "from-gray-50 to-white"
    },
    {
      icon: <Megaphone className="h-10 w-10 text-indigo-600" />,
      title: "Marketing Digital de Alto Impacto",
      highlight: "No esperamos a que el cliente llegue, vamos por él.",
      description: "Invertimos en campañas pagadas de Meta Ads y Google Ads para mostrar tu auto a compradores activos...",
      hasButton: true,
      onButtonClick: () => setIsMarketingModalOpen(true),
      borderColor: "border-indigo-200",
      gradient: "from-indigo-50 to-white"
    }
  ];

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ventajas de vender tu auto usado en Ensenada con Seminuevos Baja
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
               Combinamos tecnología de punta con seguridad bancaria para que <strong className="text-gray-900">vender tu auto en Ensenada</strong> sea rápido, seguro y al mejor precio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {advantages.map((adv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`
                  relative flex flex-col p-8 rounded-xl h-full
                  bg-gradient-to-br ${adv.gradient}
                  border ${adv.borderColor} shadow-lg
                  hover:shadow-2xl hover:scale-[1.02] 
                  transition-all duration-300 ease-out
                `}
              >
                <div className="mb-6">
                   {adv.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  {adv.title}
                </h3>
                
                {adv.highlight && (
                   <h4 className="text-xl font-bold text-gray-900 mb-3">
                     {adv.highlight}
                   </h4>
                )}

                <p className="text-gray-600 text-base leading-relaxed font-medium flex-grow">
                  {adv.description}
                </p>

                {adv.hasButton && (
                  <div className="mt-8">
                    <Button 
                      onClick={adv.onButtonClick}
                      className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 rounded-full py-5 text-base font-semibold shadow-sm hover:shadow-md transition-all"
                    >
                      Más Detalles
                    </Button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center">
               <Button 
                  onClick={onActionClick}
                  size="lg" 
                  className="text-lg px-12 py-6 rounded-xl shadow-xl shadow-amber-500/20 bg-amber-500 text-brand-blue hover:bg-amber-400 font-bold transform hover:scale-105 transition-all"
              >
                  Consigna tu auto ahora
              </Button>
          </div>
        </div>
      </section>

      <FinancingDetailsModal 
        isOpen={isFinancingModalOpen} 
        onClose={() => setIsFinancingModalOpen(false)} 
      />

      <MarketingDetailsModal 
        isOpen={isMarketingModalOpen}
        onClose={() => setIsMarketingModalOpen(false)}
      />
    </>
  );
};

export default ConsignAdvantages;