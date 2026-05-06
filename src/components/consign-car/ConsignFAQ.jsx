import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { consignFaqData } from './consignFaqData';

const ConsignFAQ = () => {
  return (
    <section className="py-16 bg-brand-blue text-white" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 id="faq-title" className="text-3xl font-bold text-white mb-4">Preguntas frecuentes sobre consignación en Baja California</h2>
          <p className="text-gray-300">
            Resolvemos tus dudas sobre cómo funciona la consignación con Seminuevos Baja, desde la evaluación inicial hasta el cierre de venta.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {consignFaqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-700 rounded-lg px-4 bg-gray-800/50">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-amber-400 text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent forceMount className="text-gray-300 text-base leading-relaxed pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ConsignFAQ;
