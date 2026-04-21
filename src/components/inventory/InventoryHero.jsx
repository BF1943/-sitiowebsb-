import React from 'react';
import { motion } from 'framer-motion';

export default function InventoryHero() {
  return (
    <section className="relative py-16 bg-brand-blue text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold mb-4 border border-amber-500/30">
            INVENTARIO ACTUALIZADO 2026
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Autos Seminuevos en <span className="text-amber-500">Ensenada</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 font-medium">
            La mejor selección de <strong className="text-white">autos seminuevos en Ensenada</strong> y Baja California. Vehículos nacionales verificados con garantía mecánica, planes de financiamiento flexibles y la seguridad que tu familia merece.
          </p>
          <p className="text-base text-gray-400 max-w-2xl mx-auto mb-8">
            En <strong className="text-gray-300">Seminuevos Baja</strong> encuentras <strong className="text-gray-300">carros usados en Ensenada</strong> con documentación en orden, revisión mecánica completa y atención personalizada. SUVs, sedanes y pickups disponibles para compra de contado o a crédito en Ensenada, Rosarito, Tijuana y toda Baja California.
          </p>
        </motion.div>
      </div>
    </section>
  );
}