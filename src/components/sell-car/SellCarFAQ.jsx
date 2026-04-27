import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const sellCarFaqData = [
  {
    question: '¿Cómo funciona la cotización de mi auto?',
    answer:
      'Agendas una cita por WhatsApp o teléfono y llevas tu auto a nuestras instalaciones en Fracc. Costa Azul, Ensenada. En menos de 20 minutos un asesor revisa el vehículo y te entregamos una oferta clara basada en el mercado actual de Baja California. Si aceptas, el pago se realiza el mismo día.',
  },
  {
    question: '¿Qué documentos necesito para vender mi auto usado?',
    answer:
      'Necesitas factura original (o última factura si pasó por más de un dueño), tarjeta de circulación vigente, identificación oficial vigente y comprobante de domicilio reciente. Si tu auto todavía tiene financiamiento activo, también necesitamos el último estado de cuenta del banco para liquidar el saldo directamente con la financiera.',
  },
  {
    question: '¿Cómo se determina el valor de mercado de mi auto?',
    answer:
      'El avalúo considera año, modelo, versión, kilometraje, estado mecánico y de carrocería, historial de mantenimiento y demanda actual del modelo en Baja California. Es una valoración profesional, no un precio fijo de tabla: dos autos del mismo año pueden tener ofertas distintas según su estado real.',
  },
];

export default function SellCarFAQ() {
  return (
    <section className="bg-gray-50 py-20" aria-labelledby="faq-sellcar-title">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            id="faq-sellcar-title"
            className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
          >
            Preguntas frecuentes sobre cómo vender tu auto en Ensenada
          </h2>
          <p className="text-lg font-bold text-gray-600">
            Resolvemos las dudas más comunes sobre cotización, documentos y
            valor real de mercado al vender tu auto usado.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {sellCarFaqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`sellcar-faq-${index}`}
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
