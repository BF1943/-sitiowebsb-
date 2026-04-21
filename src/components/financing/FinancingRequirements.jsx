import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { CheckCircle } from 'lucide-react';

const requirements = [
  "INE vigente",
  "Comprobante de ingresos (últimos 3 meses) *Tenemos opción sin comprobación de ingresos",
  "Comprobante de domicilio",
  "Referencias personales",
  "Buen historial de crédito (o un aval)",
  "Antigüedad laboral mínima 1 año"
];

const banks = [
  { name: "BBVA", logo: "🏦" },
  { name: "Banorte", logo: "🏦" },
  { name: "Hey Banco", logo: "🏦" },
  { name: "Credito Go", logo: "🏦" } 
];

export default function FinancingRequirements() {
  const handleConsultCase = () => {
    const phoneNumber = '526461616696';
    const message = "Hola, quisiera consultar mi caso para financiamiento, no cumplo con todos los requisitos. ¿Me pueden ayudar?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Requisitos para financiar tu auto en Ensenada
          </h2>
          <div className="space-y-4">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span className="text-gray-700 font-bold">{requirement}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              ¿No cumples algún requisito?
            </h3>
            <p className="text-gray-700 mb-4 font-bold">
              No te preocupes, contáctanos y evaluaremos tu caso particular. Tenemos opciones flexibles para diferentes situaciones.
            </p>
            <Button 
              onClick={handleConsultCase}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-gray-900 font-semibold"
            >
              Consultar mi caso
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Bancos para crédito automotriz en Ensenada
          </h2>
          <p className="text-gray-700 mb-8 font-bold">
            Trabajamos con los principales bancos del país para ofrecerte las mejores condiciones en carros financiados en Ensenada y toda Baja California.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            {banks.map((bank, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center shadow-sm border border-gray-100">
                <div className="text-4xl mb-2 text-gray-900">{bank.logo}</div>
                <h3 className="text-lg font-semibold text-gray-900">{bank.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Proceso rápido y sencillo
            </h3>
            <p className="text-gray-700 font-bold">
              Nuestro equipo de asesores te acompañará en todo el proceso, desde la solicitud hasta la entrega de tu auto.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}