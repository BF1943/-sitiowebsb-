import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Méndez",
    role: "Vendedor Particular",
    content: "Intenté vender mi Mazda 3 por Facebook y solo perdí tiempo. En Seminuevos Baja me atendieron en 30 minutos y me pagaron lo justo. Muy recomendado.",
    stars: 5,
    imageAlt: "Foto de perfil de cliente satisfecho Carlos"
  },
  {
    name: "Ana Lucía Torres",
    role: "Vendedora",
    content: "Me daba miedo vender mi camioneta por mi cuenta. Aquí me sentí segura todo el tiempo. El avalúo fue gratis y el trato muy amable.",
    stars: 5,
    imageAlt: "Foto de perfil de cliente satisfecha Ana"
  },
  {
    name: "Roberto Vega",
    role: "Cliente Recurrente",
    content: "Es el segundo auto que les vendo. Son serios, no te hacen dar vueltas y el dinero cayó a mi cuenta antes de firmar. Excelente servicio en Ensenada.",
    stars: 5,
    imageAlt: "Foto de perfil de cliente satisfecho Roberto"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold tracking-wider uppercase text-sm">Testimonios Reales</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Lo que dicen quienes ya vendieron su auto en Ensenada
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 relative"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                {/* Avatars removed as requested, keeping only text */}
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;