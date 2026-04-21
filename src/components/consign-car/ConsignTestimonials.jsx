import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Miguel Ángel Ruiz",
    details: "Vendió Honda CR-V 2018",
    content: "Tenía mi camioneta parada 2 meses sin poder venderla. La llevé a consignación y en 2 semanas ya tenía el dinero en mi cuenta. Excelente servicio.",
    stars: 5,
  },
  {
    name: "Patricia Domínguez",
    details: "Vendió Nissan Versa 2020",
    content: "Me gustó que ellos se encargaron del papeleo y de mostrar el carro. Yo trabajo todo el día y no tengo tiempo para eso. Valió totalmente la pena.",
    stars: 5,
  },
  {
    name: "Fernando Soto",
    details: "Vendió Toyota Tacoma 2016",
    content: "Muy transparentes con la comisión. Acordamos un precio y eso fue lo que recibí. Sin vueltas ni regateos raros.",
    stars: 5,
  }
];

const ConsignTestimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Casos de Éxito</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Clientes que vendieron su auto usado en Ensenada con nosotros
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full relative overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 h-12 w-12 text-gray-100 -z-0" />
              <div className="flex mb-4 z-10">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic z-10 flex-grow">"{testimonial.content}"</p>
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-brand-blue font-medium">{testimonial.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsignTestimonials;