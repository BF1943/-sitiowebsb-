import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function InventoryFAQ() {
  return (
    <section className="py-16 bg-white" aria-labelledby="inventory-faq-title">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 id="inventory-faq-title" className="text-3xl font-bold text-gray-900">Preguntas Frecuentes sobre Compra</h2>
          <p className="text-gray-600 mt-2">Resolvemos tus dudas antes de comprar tu seminuevo.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          <AccordionItem value="item-1" className="border rounded-lg px-4 bg-gray-50">
            <AccordionTrigger className="text-left font-bold text-gray-800">¿Qué marcas de autos manejan en inventario?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Manejamos una amplia variedad de marcas incluyendo Toyota, Honda, Nissan, Ford, Chevrolet, Volkswagen, Mazda y Jeep. Nuestro stock se actualiza semanalmente con las mejores opciones del mercado en Ensenada.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg px-4 bg-gray-50">
            <AccordionTrigger className="text-left font-bold text-gray-800">¿Los autos tienen garantía?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Sí, absolutamente. Todos nuestros vehículos cuentan con garantía. Dependiendo del modelo, pueden tener garantía de fábrica vigente o nuestra garantía extendida de 12 meses que cubre motor y transmisión para tu tranquilidad.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg px-4 bg-gray-50">
            <AccordionTrigger className="text-left font-bold text-gray-800">¿Cuáles son los requisitos para financiamiento?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Los requisitos básicos son: Identificación oficial (INE/Pasaporte), comprobante de domicilio reciente (luz/agua), y comprobantes de ingresos de los últimos 3 meses (nómina o estados de cuenta). El proceso es rápido y te ayudamos en cada paso.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border rounded-lg px-4 bg-gray-50">
            <AccordionTrigger className="text-left font-bold text-gray-800">¿Puedo dar mi auto a cuenta?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              ¡Claro que sí! Aceptamos tu auto actual como parte del pago (Trade-in). Realizamos un avalúo justo y transparente para descontar ese valor del precio de tu nuevo seminuevo.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}