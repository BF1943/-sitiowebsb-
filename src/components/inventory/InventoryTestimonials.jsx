import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Carlos Méndez",
    car: "Compró Toyota Tacoma",
    text: "Excelente servicio. El auto estaba tal cual como en las fotos del inventario. El proceso de financiamiento fue muy rápido.",
    stars: 5
  },
  {
    name: "Andrea López",
    car: "Compró Honda Civic",
    text: "Me dio mucha confianza la garantía que ofrecen. Llevo 3 meses con mi Civic y funciona de maravilla. Recomendados en Ensenada.",
    stars: 5
  },
  {
    name: "Roberto Sánchez",
    car: "Compró Ford Ranger",
    text: "Buscaba una pickup para el trabajo y aquí encontré la mejor opción precio-calidad. La atención por WhatsApp fue inmediata.",
    stars: 5 // Changed from 4 to 5 stars as requested
  }
];

export default function InventoryTestimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < review.stars ? 'text-amber-500 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
              <div className="border-t pt-4 border-gray-100">
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-brand-blue font-semibold">{review.car}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}