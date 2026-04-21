import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ConsignFees = () => {
    return (
        <section className="py-16 bg-gray-50 border-y border-gray-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Comisiones Claras para Consignar tu Auto en Ensenada</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            En Seminuevos Baja, la agencia de consignación de autos en Ensenada más transparente, no hay letras chiquitas ni costos ocultos. Consignar tu auto con nosotros es claro desde el primer día.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-900">Sin costo por ingreso</h3>
                                    <p className="text-gray-600">La inspección, toma de fotografías y publicación inicial son totalmente gratuitas.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-900">Comisión solo por éxito</h3>
                                    <p className="text-gray-600">Solo cobramos una comisión pactada previamente cuando tu auto se vende. Si no se vende, no pagas.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-900">Precio Neto Garantizado</h3>
                                    <p className="text-gray-600">Acordamos un monto neto que tú recibirás. Nosotros sumamos nuestra comisión al precio final de venta.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="text-xl font-bold text-brand-blue mb-4 text-center">Ejemplo de Venta</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between p-3 bg-gray-50 rounded">
                                <span className="text-gray-600">Precio Mercado:</span>
                                <span className="font-bold text-gray-900">$250,000 MXN</span>
                            </div>
                            <div className="flex justify-between p-3 bg-gray-50 rounded">
                                <span className="text-gray-600">Gastos Admin y Marketing:</span>
                                <span className="font-bold text-green-600 font-mono">INCLUIDO</span>
                            </div>
                            <div className="border-t border-gray-200 my-2 pt-2 flex justify-between p-3 bg-amber-50 rounded border border-amber-100">
                                <span className="font-bold text-gray-900">Tú Recibes:</span>
                                <span className="font-bold text-amber-600 text-lg">$230,000 MXN*</span>
                            </div>
                            <p className="text-xs text-gray-400 mt-2 text-center">
                                *Montos aproximados y sujetos a negociación específica por unidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsignFees;