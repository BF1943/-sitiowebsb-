import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ConsignFAQ = () => {
  const faqData = [
    {
      question: "¿Qué documentos necesito para consignar mi auto?",
      answer: "Para iniciar el trámite necesitas: Factura original (o secuencia de facturas), tarjeta de circulación vigente, identificación oficial (INE/Pasaporte) y comprobante de domicilio. Si el auto aún se está pagando, contáctanos para evaluar el caso."
    },
    {
      question: "¿Cuánto tiempo tarda en venderse un auto en consignación?",
      answer: "El tiempo promedio es de 2 a 4 semanas. Esto depende de la demanda del modelo y de fijar un precio competitivo. Gracias a nuestro marketing digital e IA, reducimos significativamente los tiempos de espera comparado con la venta tradicional."
    },
    {
      question: "¿Puedo seguir usando mi auto mientras está en venta?",
      answer: "Para garantizar la seguridad y disponibilidad inmediata para mostrarlo a compradores potenciales, requerimos que el vehículo permanezca en nuestras instalaciones resguardado durante el periodo de consignación."
    },
    {
      question: "¿Qué pasa si mi auto no se vende?",
      answer: "Si al finalizar el contrato de consignación (generalmente 60 o 90 días) el auto no se ha vendido, puedes retirarlo sin costo alguno o podemos reevaluar la estrategia de precio. Nuestro objetivo es vender, no tener autos parados."
    },
    {
      question: "¿Aceptan autos que aún se deben al banco o financiera?",
      answer: "Sí. Aceptamos autos con adeudo. Al concretarse la venta, liquidamos directamente el saldo con el banco o financiera y te entregamos la diferencia."
    }
  ];

  return (
    <section className="py-16 bg-brand-blue text-white" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 id="faq-title" className="text-3xl font-bold text-white mb-4">Preguntas frecuentes sobre consignación de autos en Ensenada</h2>
          <p className="text-gray-300">
            Resolvemos tus dudas sobre dónde vender tu auto a buen precio en Ensenada mediante consignación profesional.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-700 rounded-lg px-4 bg-gray-800/50">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-amber-400 text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed pb-4">
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