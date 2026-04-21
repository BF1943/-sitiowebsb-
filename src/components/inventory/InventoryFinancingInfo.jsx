import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, BadgePercent, CalendarDays, FileCheck } from 'lucide-react';

export default function InventoryFinancingInfo() {
  return (
    <section className="py-16 bg-gray-900 text-white border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-500 font-bold tracking-wider text-sm uppercase">Facilidades de Pago</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-2">Financiamiento y Opciones de Compra</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Sabemos que comprar un auto es una inversión importante. Por eso, en Seminuevos Baja ofrecemos planes de financiamiento flexibles para que estrenes hoy mismo.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <BadgePercent className="h-6 w-6 text-amber-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Enganche desde el 10%</h3>
                  <p className="text-gray-400">Accesible para que no te descapitalices al adquirir tu vehículo.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CalendarDays className="h-6 w-6 text-amber-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Plazos hasta 60 meses</h3>
                  <p className="text-gray-400">Elige mensualidades cómodas que se ajusten a tu presupuesto mensual.</p>
                </div>
              </div>
              <div className="flex items-start">
                <FileCheck className="h-6 w-6 text-amber-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Mínimos Requisitos</h3>
                  <p className="text-gray-400">Trámite ágil con identificación, comprobante de ingresos y domicilio.</p>
                </div>
              </div>
            </div>

            <Link to="/financiamiento">
              <Button size="lg" className="bg-amber-500 text-brand-blue hover:bg-amber-400 font-bold text-lg px-8">
                Ver Requisitos Completos <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          {/* Removed the image section as requested */}
          <div className="flex justify-center items-center">
            <img-replace alt="Icono de Financiación" class="w-48 h-48 sm:w-64 sm:h-64 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}