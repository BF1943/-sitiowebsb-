import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const cities = ['Tijuana', 'Mexicali', 'Rosarito', 'Tecate', 'San Quintín'];

const RegionalConsign = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            ¿Puedo consignar mi auto si estoy fuera de Ensenada?
          </h2>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Sí. Podemos evaluar autos de distintas ciudades de Baja California, incluyendo Tijuana, Mexicali, Rosarito, Tecate y San Quintín.
          </p>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Primero revisamos la información del vehículo por WhatsApp: marca, modelo, año, versión, kilometraje, fotos, factura, adeudos y condiciones generales. Con esa información te damos una orientación inicial sobre si el auto tiene potencial comercial para venderse mediante consignación.
          </p>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Si la unidad cumple con el perfil adecuado, definimos contigo un monto neto razonable, revisamos la logística para que el auto pueda presentarse en Ensenada y acordamos las condiciones por contrato.
          </p>

          <p className="mb-8 text-lg leading-relaxed text-gray-700">
            No todos los autos son candidatos para consignación. Si el precio esperado está fuera de mercado o la unidad no tiene condiciones comerciales adecuadas, te lo diremos con claridad desde el inicio.
          </p>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center">
              <MapPin className="mr-3 h-6 w-6 text-amber-500" />
              <h3 className="text-lg font-bold text-gray-900">
                Evaluamos autos desde:
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-brand-blue px-4 py-2 text-sm font-bold text-white">
                Ensenada
              </span>
              {cities.map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {city}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Sede física única en Ensenada. La logística para presentar el auto se revisa caso por caso.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegionalConsign;
