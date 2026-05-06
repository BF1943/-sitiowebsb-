import React from 'react';
import { ClipboardList, FileSignature, TrendingUp, Wallet, AlertCircle } from 'lucide-react';

const ConsignFees = () => {
    const flowSteps = [
        {
            icon: <ClipboardList className="h-6 w-6 text-brand-blue" />,
            title: 'Evaluación comercial',
            description: 'Revisamos marca, modelo, año, versión, kilometraje, condiciones, documentación y demanda real de mercado.'
        },
        {
            icon: <FileSignature className="h-6 w-6 text-brand-blue" />,
            title: 'Monto neto acordado',
            description: 'Te proponemos un monto neto razonable. Si aceptas, ese monto queda establecido por contrato.'
        },
        {
            icon: <TrendingUp className="h-6 w-6 text-brand-blue" />,
            title: 'Precio comercial final',
            description: 'Publicamos el auto a un precio comercial superior. La diferencia es la utilidad de Seminuevos Baja por gestión y promoción.'
        },
        {
            icon: <Wallet className="h-6 w-6 text-brand-blue" />,
            title: 'Tú recibes el monto neto',
            description: 'Al concretarse la venta, recibes exactamente el monto neto acordado en contrato.'
        }
    ];

    return (
        <section className="py-16 bg-gray-50 border-y border-gray-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Monto neto claro desde el inicio</h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-5 text-gray-700 text-lg leading-relaxed mb-12">
                    <p>
                        En Seminuevos Baja no trabajamos con una comisión confusa ni con cargos sorpresa para el propietario.
                    </p>
                    <p>
                        Primero evaluamos tu auto de acuerdo con su marca, modelo, año, versión, kilometraje, condiciones generales, documentación y demanda real en el mercado.
                    </p>
                    <p>
                        Con base en esa revisión, te proponemos un monto neto de venta. Si estás de acuerdo, ese monto queda establecido por contrato.
                    </p>
                    <p>
                        Después, Seminuevos Baja publica el auto a un precio comercial final. La diferencia entre el monto neto pactado y el precio final de venta corresponde a nuestra utilidad por la promoción, atención a compradores, negociación, financiamiento y cierre de la operación.
                    </p>
                    <p>
                        Así sabes desde el inicio cuánto recibirías por tu auto si se vende.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {flowSteps.map((step, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                            <div className="mb-4 inline-flex p-3 bg-blue-50 rounded-full">
                                {step.icon}
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
                    <div className="flex items-start">
                        <AlertCircle className="h-6 w-6 text-amber-600 mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Aceptación sujeta a evaluación comercial</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                No todos los autos son candidatos para consignación. Para aceptar una unidad, el precio esperado debe estar dentro de un rango razonable de mercado.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Si el propietario busca un precio muy por encima del valor real del auto, lo correcto es ajustar la expectativa antes de firmar. Publicar un auto con precio inflado solo reduce las posibilidades de venta y hace perder tiempo a ambas partes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsignFees;
