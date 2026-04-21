import React from 'react';
import { ShieldCheck, TrendingUp, Clock } from 'lucide-react';

const WhatIsConsignment = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué es la consignación de autos en Ensenada?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>Consignar tu auto en Ensenada</strong> con Seminuevos Baja es la forma más segura y rentable de vender tu vehículo. Si buscas <strong>consignar un auto en Ensenada</strong> con garantías reales, llegaste al lugar correcto. Tú sigues siendo el dueño del auto, pero nosotros nos encargamos de toda la gestión: publicidad, atención a compradores, financiamiento y trámites. La <strong>consignación de autos en Ensenada</strong> te permite obtener el precio real de mercado sin los riesgos de vender por tu cuenta en Baja California.
          </p>
        </div>

        {/* SEO text block */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            Miles de personas en Ensenada, Tijuana y Rosarito han elegido <strong>consignar su auto en Seminuevos Baja</strong> porque el servicio de <strong>consignación de autos en Ensenada</strong> de Seminuevos Baja elimina los riesgos comunes: citas con desconocidos, transferencias falsas y regateos interminables. Al consignar tu auto en nuestra agencia en Ensenada, accedes a financiamiento bancario para compradores — lo que triplica tus posibilidades de venta — y a nuestra red de clientes activos en toda Baja California.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="h-6 w-6 text-brand-blue" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Seguridad Total en Ensenada</h3>
            <p className="text-gray-600">Evita tratos con desconocidos y riesgos de fraude. Todo se hace en nuestras instalaciones seguras en Ensenada, Baja California.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mayor Ganancia</h3>
            <p className="text-gray-600">Al vender tu auto a precio de mercado en Ensenada y no de remate, obtienes hasta un 20% más que vendiéndolo a un "coyote".</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <div className="mx-auto w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ahorro de Tiempo</h3>
            <p className="text-gray-600">Nosotros contestamos llamadas, mensajes y agendamos citas. Tu vida sigue normal mientras vendemos tu auto en Ensenada.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsConsignment;