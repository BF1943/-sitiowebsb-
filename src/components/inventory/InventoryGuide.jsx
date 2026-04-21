import React from 'react';
import { CheckCircle2, ShieldCheck, Search, Banknote } from 'lucide-react';

export default function InventoryGuide() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Cómo elegir tu auto perfecto</h2>
          <p className="text-gray-600 mt-2">Guía rápida para una compra inteligente en Seminuevos Baja</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-brand-blue">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">1. Define tu Necesidad</h3>
            <p className="text-gray-600 text-sm">¿Buscas economía de combustible, espacio familiar o potencia? Filtra por SUV, sedán o pickup en nuestro buscador.</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
              <Banknote className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">2. Revisa tu Presupuesto</h3>
            <p className="text-gray-600 text-sm">Considera no solo el precio, sino las mensualidades. Usa nuestro simulador de crédito en cada auto.</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-amber-600">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">3. Garantía Mecánica</h3>
            <p className="text-gray-600 text-sm">Todos nuestros autos incluyen garantía de 12 meses o de agencia. Compra sin riesgos de vicios ocultos.</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">4. Prueba de Manejo</h3>
            <p className="text-gray-600 text-sm">¡Siente el auto! Agenda una cita por WhatsApp para verificar que es el indicado para ti.</p>
          </div>
        </div>
      </div>
    </section>
  );
}