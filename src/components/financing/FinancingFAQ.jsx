import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const financingFaqData = [
  {
    question: '¿Qué necesito para comprar un auto a crédito en Ensenada?',
    answer:
      'Identificación oficial vigente (INE o pasaporte), comprobante de domicilio reciente (luz o agua), comprobantes de ingresos de los últimos meses (nómina o estados de cuenta) y enganche desde el 10% del valor del vehículo. Trabajamos con BBVA, Banorte, Hey Banco y Crédito Go para encontrar la opción que mejor se ajuste a tu perfil.',
  },
  {
    question: '¿Puedo financiar un auto seminuevo sin historial de crédito?',
    answer:
      'Sí. Contamos con opciones de financiamiento por financiera para personas sin historial crediticio o sin comprobación de ingresos formal, en vehículos de hasta $350,000 MXN. Si trabajas por tu cuenta, recibes ingresos en efectivo o no tienes buró, evaluamos tu caso particular con condiciones específicas.',
  },
  {
    question: '¿El enganche depende del vehículo?',
    answer:
      'Sí. El enganche mínimo es del 10% pero puede variar según el modelo, año y precio del auto, y según el plazo elegido (hasta 60 meses). Un enganche mayor reduce la mensualidad y mejora las condiciones del crédito. Puedes usar el simulador en esta misma página para estimar tu pago antes de visitarnos.',
  },
];

export default function FinancingFAQ() {
  return (
    <section
      className="bg-gray-50 py-20"
      aria-labelledby="faq-financing-title"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            id="faq-financing-title"
            className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
          >
            Preguntas frecuentes sobre autos a crédito en Ensenada
          </h2>
          <p className="text-lg font-bold text-gray-600">
            Resolvemos las dudas más comunes sobre requisitos, enganche y
            condiciones del financiamiento para autos seminuevos.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {financingFaqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`financing-faq-${index}`}
              className="rounded-lg border bg-white px-4 shadow-sm"
            >
              <AccordionTrigger className="py-5 text-left font-bold text-gray-800 hover:text-amber-500">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
