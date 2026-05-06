import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Megaphone, TrendingUp, Users, CreditCard, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FinancingDetailsModal from './FinancingDetailsModal';
import MarketingDetailsModal from './MarketingDetailsModal';

const ConsignAdvantages = ({ onActionClick }) => {
  const [isFinancingModalOpen, setIsFinancingModalOpen] = useState(false);
  const [isMarketingModalOpen, setIsMarketingModalOpen] = useState(false);

  const advantages = [
    {
      icon: <Megaphone className="h-10 w-10 text-indigo-600" />,
      title: "Exposición profesional desde Ensenada",
      description: "Tu auto se integra a un inventario comercial activo, con fotografías, publicación web, promoción digital y atención directa a compradores interesados.",
      hasButton: true,
      buttonLabel: 'Ver detalles de marketing',
      onButtonClick: () => setIsMarketingModalOpen(true),
      borderColor: "border-indigo-200",
      gradient: "from-indigo-50 to-white"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-amber-500" />,
      title: "Precio de mercado, no precio de remate",
      description: "La consignación puede ayudarte a buscar un mejor resultado que una compra inmediata castigada, siempre que el precio esté dentro de un rango competitivo de mercado.",
      hasButton: false,
      borderColor: "border-amber-200",
      gradient: "from-amber-50 to-white"
    },
    {
      icon: <Users className="h-10 w-10 text-brand-blue" />,
      title: "Atención a compradores",
      description: "Nosotros respondemos mensajes, filtramos interesados, resolvemos dudas, mostramos el auto y acompañamos el proceso de venta.",
      hasButton: false,
      borderColor: "border-blue-200",
      gradient: "from-blue-50 to-white"
    },
    {
      icon: <CreditCard className="h-10 w-10 text-green-600" />,
      title: "Opciones de financiamiento",
      description: "Muchos compradores buscan adquirir autos mediante crédito. Al ofrecer opciones de financiamiento, el vehículo puede llegar a más prospectos calificados.",
      hasButton: true,
      buttonLabel: 'Ver cómo funciona',
      onButtonClick: () => setIsFinancingModalOpen(true),
      borderColor: "border-green-200",
      gradient: "from-green-50 to-white"
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-gray-700" />,
      title: "Seguridad en el proceso",
      description: "El auto se muestra en nuestras instalaciones y el cierre se realiza con documentación y pago confirmado, evitando citas inseguras, transferencias no verificadas o negociaciones improvisadas.",
      hasButton: false,
      borderColor: "border-gray-200",
      gradient: "from-gray-50 to-white"
    }
  ];

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ventajas de consignar con Seminuevos Baja
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
              Promoción profesional, atención a compradores y un proceso de venta acompañado, con condiciones claras desde el contrato.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {advantages.map((adv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {adv.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed font-medium flex-grow">
                  {adv.description}
                </p>

                {adv.hasButton && (
                  <div className="mt-6">
                    <Button
                      onClick={adv.onButtonClick}
                      className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 rounded-full py-5 text-base font-semibold shadow-sm hover:shadow-md transition-all"
                    >
                      {adv.buttonLabel}
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
                  Revisar si mi auto aplica
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
