import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, FileText, Users, Shield } from 'lucide-react';

const benefits = [
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Enganche desde el 10%",
    description: "Financiamos hasta el 90% del valor del vehículo"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Trámite fácil y rápido",
    description: "Proceso simplificado con respuesta en 24 horas"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Asesoría personalizada",
    description: "Te acompañamos en todo el proceso de financiamiento"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Tasas competitivas",
    description: "Las mejores tasas del mercado con nuestros bancos aliados"
  }
];

export default function FinancingBenefits() {
  return (
    <section className="bg-white py-16 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ventajas de comprar autos a crédito en Ensenada con Seminuevos Baja
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500 text-white rounded-lg mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-700 font-bold">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}