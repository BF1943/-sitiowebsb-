import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function ConsignHero({ onActionClick }) {
  return (
    <section className="relative bg-brand-blue py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold mb-4 border border-amber-500/30">
            VENTA EN CONSIGNACIÓN EN ENSENADA
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            <span className="text-amber-500">Consignación de Autos en Ensenada</span> — Vende Seguro y al Mejor Precio
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 font-medium">
            Consignar tu auto en Ensenada con Seminuevos Baja es la mejor decisión. Maximiza tu ganancia sin correr riesgos — gestionamos marketing, financiamiento para compradores y todos los trámites legales en Baja California.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={onActionClick}
              size="lg"
              className="text-lg px-8 py-6 rounded-xl shadow-lg shadow-amber-500/20 bg-amber-500 text-brand-blue hover:bg-amber-400 font-bold"
            >
              Consigna tu auto ahora
            </Button>
          </div>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent opacity-60 z-10"></div>
            <img alt="Cliente cerrando trato de consignación de auto en oficina segura" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1597724939962-4bd5088797d8" />
          </div>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-500 opacity-5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500 opacity-5 rounded-full filter blur-3xl"></div>
    </section>
  );
}