import React from 'react';
import { Button } from '../ui/button';
import { CheckCircle, Clock, MessageCircle } from 'lucide-react';

const Benefits = ({ onWhatsAppClick }) => {
  const benefitsList = [
    "Recibe un avalúo gratis hoy mismo",
    "Pago inmediato el mismo día",
    "Nos encargamos de los trámites",
    "Oferta basada en valor real de mercado",
    "Atención directa en Ensenada",
    "Proceso claro y sin vueltas"
  ];

  return (
    <>
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">
          ¿Por qué vender tu auto en Ensenada con Seminuevos Baja?
        </h3>
        <div className="space-y-4">
          {benefitsList.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />
              <span className="text-gray-300 font-bold">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/10 p-6 rounded-lg">
        <div className="flex items-center space-x-3 mb-4">
          <Clock className="h-6 w-6 text-amber-500" />
          <h4 className="text-lg font-semibold text-white">
            Respuesta rápida
          </h4>
        </div>
        <p className="text-gray-300 font-bold">
          Te contactamos en menos de 24 horas con una oferta basada en mercado para que puedas vender tu auto sin procesos largos ni complicaciones.
        </p>
      </div>

      <div className="text-center">
        <Button 
          onClick={onWhatsAppClick}
          size="lg"
          variant="whatsapp"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          Solicitar avalúo por WhatsApp
        </Button>
      </div>
    </>
  );
};

export default Benefits;