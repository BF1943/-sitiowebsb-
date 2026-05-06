import React from 'react';
import { ShieldCheck, FileText, Filter } from 'lucide-react';

const WhatIsConsignment = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué es consignar tu auto con Seminuevos Baja?</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-5 text-gray-700 text-lg leading-relaxed mb-12">
          <p>
            Consignar tu auto con Seminuevos Baja significa que sigues siendo propietario de la unidad mientras nosotros nos encargamos de promoverla, atender interesados, filtrar compradores, gestionar opciones de financiamiento y acompañar el cierre de venta.
          </p>
          <p>
            Antes de publicar el auto, revisamos su valor real de mercado y acordamos contigo un <strong>monto neto</strong>. Ese monto representa lo que recibirías si el vehículo se vende bajo las condiciones pactadas.
          </p>
          <p>
            Nosotros publicamos el auto a un <strong>precio comercial final</strong>, considerando la promoción, atención, negociación y gestión de venta. La diferencia entre el monto neto pactado y el precio final corresponde a la utilidad de Seminuevos Baja.
          </p>
          <p>
            Este modelo permite que el propietario sepa desde el inicio cuánto recibiría, sin tener que atender curiosos, negociar en la calle o publicar el auto por su cuenta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="h-6 w-6 text-brand-blue" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Exposición profesional desde Ensenada</h3>
            <p className="text-gray-600">Tu auto se integra a un inventario activo con fotos profesionales, publicación digital y red de compradores en Baja California.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <div className="mx-auto w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Precio acordado desde el inicio</h3>
            <p className="text-gray-600">Sabes cuánto recibirías antes de firmar. Sin sorpresas, sin descuentos sorpresivos al cierre.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Filter className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Filtro de compradores reales</h3>
            <p className="text-gray-600">Atendemos interesados por ti y solo te involucramos cuando hay condiciones reales de venta.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsConsignment;
