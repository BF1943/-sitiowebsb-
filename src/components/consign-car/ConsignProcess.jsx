import React from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, Award, DollarSign } from 'lucide-react';

const ConsignProcess = () => {
    const steps = [
        { 
            icon: <Search className="h-8 w-8 text-white"/>, 
            title: "1. Inspección y Avalúo", 
            description: "Trae tu auto a nuestras instalaciones en Ensenada. Realizamos una inspección física, mecánica y legal gratuita para definir el precio más competitivo en el mercado de Baja California." 
        },
        { 
            icon: <Sparkles className="h-8 w-8 text-white"/>, 
            title: "2. Preparación y Marketing", 
            description: "Tomamos fotos profesionales y publicamos tu auto en todos nuestros canales digitales premium, apoyados por Max (IA) para difusión masiva." 
        },
        { 
            icon: <Award className="h-8 w-8 text-white"/>, 
            title: "3. Gestión de Venta", 
            description: "Filtramos a los interesados, mostramos el auto y ofrecemos opciones de crédito a los compradores para facilitar la venta." 
        },
        { 
            icon: <DollarSign className="h-8 w-8 text-white"/>, 
            title: "4. Cierre y Pago", 
            description: "Una vez vendido, gestionamos el cambio de propietario y te transferimos tu dinero de forma segura. Sin sorpresas." 
        },
    ];

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Proceso de Consignación de Autos en Ensenada</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Nuestro sistema de consignación de autos en Ensenada está diseñado para que vendas tu auto rápido, seguro y al mejor precio en Baja California.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-2xl h-full border border-gray-700 hover:border-amber-500 transition-colors">
                                <div className="mb-6 p-4 bg-amber-500 rounded-full shadow-lg shadow-amber-500/20">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-600 transform -translate-y-1/2 z-0" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConsignProcess;