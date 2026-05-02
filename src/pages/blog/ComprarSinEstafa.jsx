import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, Search, Car, Wrench, FileText, ArrowRight, Shield } from 'lucide-react';
import { PageSEO } from '@/hooks/useSEO';

const ComprarSinEstafa = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const tableData = [
    { model: "Nissan Versa", type: "Sedán", advantage: "Económico y fácil de mantener" },
    { model: "Honda CR-V", type: "SUV", advantage: "Fiable y con excelente reventa" },
    { model: "Chevrolet Tracker", type: "SUV", advantage: "Moderna y con buena disponibilidad" }
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <PageSEO
        customConfig={{
          title: 'CÃ³mo Comprar un Seminuevo en Baja California Sin Ser Estafado - Seminuevos Baja',
          description:
            'GuÃ­a definitiva para evitar fraudes al comprar un auto seminuevo en Baja California. Aprende a revisar el REPUVE, inspeccionar mecÃ¡nicamente y elegir modelos seguros.',
          canonical: '/blog/comprar-auto-seminuevo-sin-ser-estafado',
          ogType: 'article',
          ogImage: '/og-image.png',
        }}
      />
      
      <div className="bg-brand-blue text-white min-h-screen">
        <div className="relative h-64 md:h-80">
          <img 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Persona inspeccionando un auto seminuevo con una lupa, simbolizando la compra segura" 
            src="https://images.unsplash.com/photo-1595872018818-97555653a011"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="text-center px-4">
              <motion.h1 
                className="text-3xl md:text-5xl font-bold text-amber-500 leading-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Comprar un Auto Seminuevo en Baja California sin Ser Estafado 🚘
              </motion.h1>
            </div>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <p className="text-xl md:text-2xl text-gray-300 font-bold mb-8 leading-relaxed text-center">
            Comprar un auto seminuevo puede ser una gran oportunidad… o una pesadilla. En Baja California, donde los autos importados y los “chocolate” dominan buena parte del mercado, informarte antes de comprar no es opcional: es tu seguro de vida.
          </p>

          <section className="bg-gray-900/50 rounded-lg p-6 md:p-8 mb-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-500 mb-6 flex items-center">
              <AlertTriangle className="h-8 w-8 mr-3" />
              Lo que Debes Saber Antes de Comprar
            </h2>
            <ul className="space-y-4 text-gray-300 font-bold text-lg">
              <li className="flex items-start"><span className="text-red-500 mr-2">⚠️</span> Hasta 1 de cada 5 autos usados tiene el odómetro alterado.</li>
              <li className="flex items-start"><span className="text-red-500 mr-2">⚠️</span> 15% fueron chocados y reparados sin declararlo.</li>
              <li className="flex items-start"><span className="text-red-500 mr-2">⚠️</span> Los “autos chocolate” pueden parecer una ganga, pero muchos fueron pérdidas totales en EE. UU. y esconden fallas estructurales.</li>
              <li className="flex items-start"><span className="text-red-500 mr-2">⚠️</span> Además, con la nueva administración federal (2025), el decreto de regularización cambia otra vez. En resumen: la incertidumbre está de regreso.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-500 mb-6 flex items-center">
              <CheckCircle className="h-8 w-8 mr-3" />
              Cómo Comprar con Seguridad
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-lg">
              <div className="bg-gray-900/50 p-6 rounded-lg font-bold"><span className="font-extrabold text-amber-500">Compra en un concesionario formal.</span> Autos verificados, con historial limpio y factura original.</div>
              <div className="bg-gray-900/50 p-6 rounded-lg font-bold"><span className="font-extrabold text-amber-500">Revisa el REPUVE.</span> Si no dice "Sin reporte de robo", ni lo pienses.</div>
              <div className="bg-gray-900/50 p-6 rounded-lg font-bold"><span className="font-extrabold text-amber-500">Pide una inspección mecánica.</span> Un auto brillante no siempre está sano.</div>
              <div className="bg-gray-900/50 p-6 rounded-lg font-bold"><span className="font-extrabold text-amber-500">Evita el trato entre particulares sin comprobantes.</span> Si algo sale mal, no tendrás respaldo legal.</div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-500 mb-6 flex items-center">
              <Search className="h-8 w-8 mr-3" />
              Los Modelos Más Seguros y Populares en BC
            </h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left bg-gray-900/50 rounded-lg shadow-lg">
                    <thead className="bg-amber-500 text-brand-blue">
                        <tr>
                            <th className="p-4 font-bold">Modelo</th>
                            <th className="p-4 font-bold">Tipo</th>
                            <th className="p-4 font-bold">Ventaja</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index} className="border-b border-gray-700 font-bold">
                                <td className="p-4">{row.model}</td>
                                <td className="p-4">{row.type}</td>
                                <td className="p-4">{row.advantage}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </section>

          <div className="bg-amber-500 text-brand-blue rounded-lg p-6 mb-12 text-center shadow-lg">
            <h3 className="text-xl font-bold mb-2">💬 Consejo Rápido</h3>
            <p className="text-lg font-bold">Un auto seminuevo de 2 a 5 años es el punto ideal: ya se depreció lo caro y sigue en excelentes condiciones.</p>
          </div>

          <section className="bg-gray-900/50 rounded-lg p-8 mb-12 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-500 mb-6 flex items-center">
              <Car className="h-8 w-8 mr-3" />
              En Resumen
            </h2>
            <p className="text-lg text-gray-300 font-bold mb-6">
              Comprar barato no siempre es ahorrar. Los “autos chocolate” son una apuesta incierta, mientras que los seminuevos certificados ofrecen garantía, respaldo y tranquilidad.
            </p>
            <p className="text-lg text-white font-extrabold mb-4">En Seminuevos Baja, todos nuestros vehículos pasan por:</p>
            <ul className="space-y-3 text-gray-200 font-bold text-lg">
              <li className="flex items-center"><FileText className="h-6 w-6 mr-3 text-amber-500" /> Revisión legal completa</li>
              <li className="flex items-center"><Wrench className="h-6 w-6 mr-3 text-amber-500" /> Inspección mecánica profesional</li>
              <li className="flex items-center"><Shield className="h-6 w-6 mr-3 text-amber-500" /> Garantía mecánica de 12 meses</li>
            </ul>
          </section>

          <div className="text-center">
            <Link to="/inventario" className="inline-flex items-center bg-amber-500 text-brand-blue px-8 py-3 rounded-lg hover:bg-amber-400 transition-colors font-bold text-lg shadow-lg">
              Ver Inventario Seguro
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>

        </article>
      </div>
    </motion.div>
  );
};

export default ComprarSinEstafa;
