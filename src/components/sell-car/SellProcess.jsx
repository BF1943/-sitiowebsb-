import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, DollarSign, CheckCircle } from 'lucide-react';

const SellProcess = () => {
  const steps = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "1. Contacto Inicial",
      description: "Chatea con Max, nuestro asistente virtual. Proporciona los datos básicos para iniciar el proceso de vender tu auto en Ensenada."
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "2. Valuación de Autos",
      description: "Realizamos una inspección profesional gratuita. Determinamos el valor real de mercado para hacerte una oferta justa al instante."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "3. Pago Inmediato",
      description: "Si aceptas nuestra oferta de compra, nos encargamos del cambio de propietario y te depositamos el dinero el mismo día."
    }
  ];

  return (
    <section className="py-20 bg-brand-blue text-white" aria-labelledby="process-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="process-title" className="text-3xl md:text-4xl font-bold mb-4">
            ¿Cómo vender tu auto en Ensenada? Paso a paso
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-bold">
            Descubre lo fácil que es vender tu auto usado en Ensenada con Seminuevos Baja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6 bg-gray-900/50 rounded-lg shadow-lg border border-amber-500/30 hover:border-amber-500 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 text-gray-900 rounded-full mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-300 font-medium">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellProcess;