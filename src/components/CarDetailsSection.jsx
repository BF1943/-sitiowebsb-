import React from 'react';
import { Gauge, GitBranch, Palette, Wrench, ShieldCheck, Users, MapPin, Calendar, CheckCircle2, Phone, Share2, FileText } from 'lucide-react';
import { formatNumber } from '@/lib/utils';
import ShareButton from './ShareButton';

function buildUniqueDescription(car) {
  const marca = car.marca || '';
  const modelo = car.modelo || '';
  const año = car.año || '';
  const transmision = car.transmisión || car.transmision || '';
  const km = car.kilometraje ? `${formatNumber(car.kilometraje)} km` : '';
  const color = car.color ? `, color ${String(car.color).toLowerCase()}` : '';

  const transmisionFrase = transmision
    ? ` con transmisión ${String(transmision).toLowerCase()}`
    : '';
  const kmFrase = km ? ` y ${km} de uso` : '';

  return `Este ${marca} ${modelo} ${año} es una unidad nacional disponible en Ensenada${transmisionFrase}${kmFrase}${color}. Auto seminuevo seleccionado por Seminuevos Baja con documentación en orden, revisión mecánica previa y respaldo comercial. La unidad incluye póliza de garantía mecánica de 12 meses, vigente al concluir la garantía original de agencia, para que tu compra esté respaldada después del periodo de fábrica.`;
}

export default function CarDetailsSection({ car }) {
  const specs = [
    { label: 'Kilometraje', value: car.kilometraje ? `${formatNumber(car.kilometraje)} km` : 'N/A', icon: Gauge },
    { label: 'Transmisión', value: car.transmisión || 'N/A', icon: GitBranch },
    { label: 'Color', value: car.color || 'N/A', icon: Palette },
    { label: 'Motor/Cilindros', value: car.cilindros || 'N/A', icon: Wrench },
    { label: 'Año', value: car.año || 'N/A', icon: Calendar },
    { label: 'Garantía', value: car.garantía || 'Incluida', icon: ShieldCheck },
    { label: 'Propietarios', value: car.propietarios || 'N/A', icon: Users, hidden: !car.propietarios },
    { label: 'Origen', value: car.origen || 'N/A', icon: MapPin, hidden: !car.origen },
  ].filter(spec => !spec.hidden);

  const uniqueDescription = buildUniqueDescription(car);

  return (
    <div className="space-y-6">
      <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-amber-500" />
          Especificaciones Técnicas
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div key={index} className="flex flex-col space-y-2 p-4 rounded-xl bg-gray-800/50 border border-white/5 hover:border-amber-500/30 transition-colors">
                <div className="flex items-center space-x-2 text-amber-500">
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium text-gray-400">{spec.label}</span>
                </div>
                <span className="text-lg font-semibold text-white pl-7">{spec.value}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-amber-500" />
          Sobre este {car.marca} {car.modelo} {car.año}
        </h3>
        <p className="text-base leading-relaxed text-gray-300">
          {uniqueDescription}
        </p>
      </div>

      <div className="bg-amber-500/10 rounded-2xl p-6 border border-amber-500/20 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Phone className="w-5 h-5 text-amber-500" />
          <h4 className="text-lg font-bold text-white">¿Tienes dudas sobre este auto?</h4>
        </div>
        <p className="text-gray-300 mb-4">Llámanos o escríbenos por WhatsApp para brindarte atención personalizada.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="tel:526469778808" 
            className="text-2xl font-black text-amber-500 hover:text-amber-400 transition-colors flex items-center"
          >
            646 977 8808
          </a>
          <ShareButton 
            car={car}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-bold transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            Compartir
          </ShareButton>
        </div>
      </div>
    </div>
  );
}