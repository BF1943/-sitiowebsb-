import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calculator, ClipboardCheck, Camera, Users, DollarSign } from 'lucide-react';

const ConsignProcess = () => {
    const steps = [
        {
            icon: <MessageCircle className="h-8 w-8 text-white"/>,
            title: "1. Pre-evaluación por WhatsApp",
            description: "Nos compartes marca, modelo, año, versión, kilometraje, ciudad, fotos, factura, adeudos y condiciones generales. Hacemos una primera revisión."
        },
        {
            icon: <Calculator className="h-8 w-8 text-white"/>,
            title: "2. Estimación de monto neto",
            description: "Te orientamos sobre un monto neto razonable según mercado, demanda, condiciones de la unidad y kilometraje. Si tu expectativa está muy por encima del mercado, te lo decimos con claridad."
        },
        {
            icon: <ClipboardCheck className="h-8 w-8 text-white"/>,
            title: "3. Revisión física y contrato",
            description: "Si ambas partes están de acuerdo, se revisa físicamente el auto, se valida la documentación y se firma contrato de consignación con el monto neto pactado y las condiciones de venta."
        },
        {
            icon: <Camera className="h-8 w-8 text-white"/>,
            title: "4. Preparación y publicación",
            description: "Tomamos fotografías, preparamos la publicación, integramos el auto al inventario y lo promovemos en nuestros canales digitales."
        },
        {
            icon: <Users className="h-8 w-8 text-white"/>,
            title: "5. Atención a compradores",
            description: "Atendemos interesados, filtramos prospectos, mostramos el auto en nuestras instalaciones y gestionamos opciones de financiamiento cuando aplica."
        },
        {
            icon: <DollarSign className="h-8 w-8 text-white"/>,
            title: "6. Cierre y pago",
            description: "Cuando se concreta la venta, se realiza la documentación correspondiente, se confirma el pago y el propietario recibe el monto neto acordado en contrato."
        },
    ];

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo funciona el proceso de consignación</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        El proceso inicia con una evaluación comercial. No aceptamos autos únicamente porque el propietario quiera dejarlos en venta; primero revisamos si la unidad tiene condiciones reales para venderse.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConsignProcess;
