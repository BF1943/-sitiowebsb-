import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

export default function FinancingCTA({ onApply }) {
  return (
    <section className="bg-gray-900 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          ¿Listo para estrenar tu auto a crédito en Ensenada?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-bold">
          Solicita tu crédito hoy mismo y maneja tu carro financiado en Ensenada mañana
        </p>
        <Button
          onClick={onApply}
          size="lg"
          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-gray-900 font-semibold text-lg px-8 py-3 btn-glow"
        >
          Iniciar mi Solicitud
        </Button>
      </motion.div>
    </section>
  );
}