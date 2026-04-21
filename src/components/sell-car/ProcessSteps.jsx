import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Upload, DollarSign } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "1. Completa el formulario",
      description: "Proporciona los datos básicos de tu vehículo y tus datos de contacto"
    },
    {
      icon: <Upload className="h-8 w-8" />,
      title: "2. Sube fotos de tu auto",
      description: "Incluye fotos del exterior, interior y documentos para una evaluación precisa"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "3. Recibe tu avalúo",
      description: "Te contactamos en menos de 24 horas con una oferta justa y competitiva"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-title mb-4">
            Proceso súper sencillo en 3 pasos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-bold">
            Vender tu auto nunca había sido tan fácil y rápido
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6 bg-gray-50 rounded-lg shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-gray-title mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 font-bold">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;