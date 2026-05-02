import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ShieldAlert, FileWarning, BadgeDollarSign, Car, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { PageSEO } from '@/hooks/useSEO';

const AutosPorDecretoSeguro = () => {
  return (
    <>
      <PageSEO
        customConfig={{
          title: 'Autos Decreto y Seguros: El Riesgo Oculto para tu Patrimonio | Seminuevos Baja',
          description:
            "Â¿Tienes un auto regularizado por decreto? Cuidado: las aseguradoras tienen 'letras chiquitas' que podrÃ­an dejarte sin pago en caso de pÃ©rdida total. Conoce la verdad aquÃ­.",
          keywords:
            'autos decreto seguro, regularizaciÃ³n autos chocolate, seguro auto decreto cobertura, riesgos autos legalizados, seminuevos ensenada, libro azul autos decreto',
          canonical: '/blog/autos-por-decreto-seguro-punto-ciego',
          ogType: 'article',
          ogImage: '/og-image.png',
        }}
      />

      <div className="bg-white min-h-screen pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <Link to="/blog" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-bold mb-6 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver al Blog
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-bold flex items-center gap-2">
                <ShieldAlert className="h-4 w-4" /> Seguridad Financiera
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>08 de Enero, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Equipo Seminuevos Baja</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
              Autos por Decreto: El "Punto Ciego" del Seguro que Puede Costarte tu Patrimonio
            </h1>

            {/* No images in header as per previous request */}
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="lead text-xl md:text-2xl font-medium text-gray-800 mb-8 border-l-4 border-amber-500 pl-6 italic">
              Regularizar tu auto "chocolate" te dio placas para circular, pero ¿realmente te dio tranquilidad? Existe un vacío legal en las pólizas de seguro que la mayoría de los propietarios desconocen hasta que es demasiado tarde.
            </p>

            <p className="mb-8">
              En los últimos años, miles de familias en Baja California han aprovechado el decreto de regularización para legalizar vehículos de procedencia extranjera. A simple vista, parece la solución perfecta: obtienes placas, tarjeta de circulación y "legalidad". Sin embargo, expertos en el sector automotriz y de seguros han detectado un problema crítico: <strong>la protección financiera real de estos vehículos es, en muchos casos, una ilusión.</strong>
            </p>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FileWarning className="h-8 w-8 text-amber-600" />
                1. La Trampa de la Cobertura Limitada
              </h2>
              <p className="mb-4">
                Muchas aseguradoras aceptan asegurar autos regularizados por decreto, pero bajo condiciones muy específicas que a menudo no se explican claramente al contratar:
              </p>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span><strong>Solo Responsabilidad Civil (RC):</strong> La gran mayoría de las pólizas económicas para estos autos solo cubren daños a terceros. Si te roban el auto o sufres pérdida total por un choque, <strong>no recibirás ni un peso</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span><strong>Exclusiones de Cobertura Amplia:</strong> Incluso si pagas por "cobertura amplia", las letras chiquitas pueden excluir daños preexistentes o problemas mecánicos derivados de modificaciones no certificadas (comunes en autos de subasta americana).</span>
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Car className="h-8 w-8 text-brand-blue" />
                2. El Problema de las Refacciones y la "Pérdida Total Express"
              </h2>
              <p className="mb-4">
                Aquí es donde la realidad golpea más fuerte. Los autos fabricados para el mercado estadounidense (US-Spec) a menudo tienen piezas diferentes a las versiones mexicanas (MX-Spec), desde sensores de bolsas de aire hasta fascias y faros.
              </p>
              <p className="mb-4">
                Cuando tienes un accidente reparable:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mb-6 font-medium">
                <li>La aseguradora intenta conseguir las piezas en agencias nacionales.</li>
                <li>La agencia nacional responde que <strong>no tiene catálogo ni stock</strong> para ese número de serie (VIN) americano.</li>
                <li>Al no poder garantizar la reparación con piezas nuevas y originales (como estipula el contrato), la aseguradora declara <strong>Pérdida Total</strong> por falta de refacciones, incluso por golpes menores.</li>
              </ol>
              {/* Removed the image related to mechanical workshop */}
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl mb-12 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <BadgeDollarSign className="h-8 w-8 text-green-600" />
                3. Valor de Reventa vs. Libro Azul
              </h2>
              <p className="mb-4">
                Supongamos que la aseguradora declara pérdida total y acepta pagarte. ¿Cuánto te van a dar?
              </p>
              <p className="mb-4">
                Los autos nacionales se valúan según la <strong>Guía EBC (Libro Azul)</strong>, que establece precios de mercado claros. Los autos por decreto <strong>NO existen en la Guía EBC tradicional</strong> de la misma manera.
              </p>
              <p className="font-bold text-red-700">El resultado:</p>
              <p className="mb-0">
                Las aseguradoras suelen indemnizar basándose en un "valor comercial estimado" o facturas de subasta, que suelen ser <strong>30% a 40% inferiores</strong> al valor de un auto nacional equivalente. Podrías recibir mucho menos de lo que te costó legalizarlo y arreglarlo.
              </p>
            </div>

            <div className="border-t-2 border-gray-100 pt-12 mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ¿Por qué arriesgar tu tranquilidad?
              </h2>
              
              <div className="bg-brand-blue rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-amber-500 opacity-10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-amber-400 mb-6">La Diferencia Seminuevos Baja</h3>
                  <p className="text-lg text-gray-200 mb-8">
                    En Seminuevos Baja, entendemos que tu auto es una inversión, no una apuesta. Por eso, <strong>nuestro inventario es exclusivamente de autos seminuevos nacionales de agencia</strong> con historial verificable. No manejamos autos importados ni legalizados.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-500/20 p-2 rounded-lg">
                        <CheckCircle2 className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Cobertura Total Garantizada</h4>
                        <p className="text-sm text-gray-300">Nuestros autos nacionales son 100% asegurables con cobertura amplia real y valor Libro Azul.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-500/20 p-2 rounded-lg">
                        <CheckCircle2 className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Refacciones Disponibles</h4>
                        <p className="text-sm text-gray-300">Al ser nacionales, tu auto puede ser reparado en cualquier agencia o taller certificado sin problemas de piezas.</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Link to="/inventario">
                      <Button size="lg" className="bg-amber-500 text-brand-blue hover:bg-amber-400 font-bold px-8 py-6 text-lg rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:scale-105">
                        Ver Inventario Nacional de Agencia
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                ¿Tienes dudas sobre el valor real de tu auto o quieres cambiar tu vehículo decreto por uno nacional con financiamiento?
              </p>
              {/* WhatsApp contact link removed */}
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default AutosPorDecretoSeguro;
