import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, ShieldCheck, Zap, DollarSign } from 'lucide-react';

const SellCarHero = ({ onWhatsAppClick }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-blue">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Vender auto en Ensenada — agencia de autos seminuevos en Ensenada Seminuevos Baja"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/90 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-amber-500 uppercase bg-amber-500/10 rounded-full border border-amber-500/20">
              Compra Inmediata de Autos
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 leading-tight drop-shadow-lg">
              Vende tu Auto en Ensenada con Pago Inmediato
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-6 drop-shadow-md">
              Avalúo gratis y oferta el mismo día
            </h2>

            <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl font-medium">
              Somos la agencia líder en autos seminuevos en Ensenada. Evaluamos tu vehículo al instante, te damos una oferta justa con precio real de mercado y te pagamos de contado el mismo día.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={onWhatsAppClick}
                size="lg"
                className="bg-amber-500 hover:bg-amber-400 text-brand-blue font-bold text-lg px-8 py-7 h-auto rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-300 group"
              >
                Valuar mi Auto Gratis
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center gap-4 px-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-blue overflow-hidden bg-gray-200">
                      <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Usuario satisfecho" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="text-white font-bold">+500 Clientes</p>
                  <p className="text-gray-300">Satisfechos en Ensenada</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 text-white/90">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Zap className="h-5 w-5 text-amber-500" />
                </div>
                <span className="font-medium text-white">Pago el mismo día</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="p-2 bg-white/10 rounded-lg">
                  <ShieldCheck className="h-5 w-5 text-amber-500" />
                </div>
                <span className="font-medium text-white">Trato 100% Seguro</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="p-2 bg-white/10 rounded-lg">
                  <DollarSign className="h-5 w-5 text-amber-500" />
                </div>
                <span className="font-medium text-white">Mejor Oferta del Mercado</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-t from-brand-blue/80 to-transparent pointer-events-none hidden lg:block" />
    </section>
  );
};

export default SellCarHero;