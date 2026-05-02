import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  ArrowRight,
  Car,
  ShieldCheck,
  DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/hooks/useSEO';

export default function SeminuevosArticle() {
  const canonicalUrl = 'https://seminuevosbaja.com.mx/blog/seminuevos';
  const pageTitle =
    '¿Conviene Comprar un Seminuevo en Ensenada? Qué Revisar Antes | Seminuevos Baja';
  const pageDescription =
    'Descubre cuándo conviene comprar un seminuevo en Ensenada, qué revisar antes de elegir y por qué un auto revisado puede ser mejor compra que uno nuevo básico.';

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: '¿Conviene comprar un seminuevo en Ensenada? Qué revisar antes',
    description: pageDescription,
    mainEntityOfPage: canonicalUrl,
    url: canonicalUrl,
    image:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2072&auto=format&fit=crop',
    inLanguage: 'es-MX',
    author: {
      '@type': 'Organization',
      name: 'Seminuevos Baja'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Seminuevos Baja',
      url: 'https://seminuevosbaja.com.mx'
    },
    dateModified: '2026-04-20'
  };

  return (
    <>
      <PageSEO
        customConfig={{
          title: pageTitle,
          description: pageDescription,
          canonical: '/blog/seminuevos',
          ogType: 'article',
          ogImage:
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2072&auto=format&fit=crop',
          schema: articleSchema,
        }}
      />

      <div className="min-h-screen bg-slate-50 pb-16 pt-24">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.header {...fadeInUp} className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-bold tracking-wide text-brand-blue">
              GUÍA DE COMPRA 2026
            </span>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              ¿Conviene comprar un seminuevo en Ensenada?
            </h1>

            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-600">
              Antes de irte por el auto nuevo más básico o por una opción dudosa de particular,
              conviene revisar cuándo un <span className="font-semibold text-brand-blue">seminuevo</span>{' '}
              bien elegido puede ser una compra más inteligente.
            </p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2072&auto=format&fit=crop"
              alt="Autos seminuevos listos para entrega en Ensenada"
              className="h-[400px] w-full object-cover transition-transform duration-700 hover:scale-105"
              width="2072"
              height="1381"
              loading="eager"
              decoding="async"
            />
          </motion.div>

          <div className="prose prose-slate max-w-none prose-lg">
            <motion.section
              {...fadeInUp}
              className="mb-10 rounded-xl border border-slate-100 bg-white p-8 shadow-sm"
            >
              <h2 className="mb-6 flex items-center text-3xl font-bold text-brand-blue">
                <DollarSign className="mr-3 h-8 w-8 text-amber-500" />
                ¿Cuándo sí conviene un seminuevo?
              </h2>

              <p className="mb-6 text-slate-600">
                Un auto seminuevo suele tener sentido cuando quieres evitar la depreciación
                fuerte de un vehículo nuevo, acceder a mejor equipamiento por el mismo presupuesto
                y salir manejando sin depender de listas de espera.
              </p>

              <p className="mb-6 text-slate-600">
                No se trata de comprar “lo más barato”, sino de elegir una unidad que ya absorbió
                la parte más dura de la depreciación y que además esté revisada en lo mecánico y en lo legal.
              </p>

              <div className="mt-8">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-brand-blue to-blue-700 py-6 text-lg text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-blue-800 hover:to-blue-900 sm:w-auto"
                >
                  <Link to="/inventario">
                    Ver inventario actualizado <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.section>

            <motion.section {...fadeInUp} className="mb-12">
              <h2 className="mb-6 flex items-center text-3xl font-bold text-slate-900">
                <Car className="mr-3 h-8 w-8 text-amber-500" />
                Qué revisar antes de comprar un seminuevo
              </h2>

              <p className="mb-6 text-slate-600">
                En Ensenada y Baja California hay buenas oportunidades, pero también opciones que se ven bien en fotos
                y salen caras después. Antes de decidirte, revisa por lo menos estos puntos:
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-blue-100 bg-blue-50 p-6">
                  <h3 className="mb-3 text-xl font-bold text-brand-blue">Revisión mecánica</h3>
                  <p className="text-slate-700">
                    Motor, transmisión, suspensión, frenos y prueba de manejo. Lo importante no es que “se vea bonito”,
                    sino que no te deje un problema caro a las pocas semanas.
                  </p>
                </div>

                <div className="rounded-xl border border-amber-100 bg-amber-50 p-6">
                  <h3 className="mb-3 text-xl font-bold text-amber-700">
                    Situación legal y documental
                  </h3>
                  <p className="text-slate-700">
                    Factura, antecedentes, REPUVE y origen del vehículo. Comprar con papeles claros
                    evita dolores de cabeza con seguro, trámites y reventa futura.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section
              {...fadeInUp}
              className="relative mb-12 overflow-hidden rounded-2xl bg-slate-900 p-8 text-white shadow-2xl md:p-12"
            >
              <div className="relative z-10">
                <h2 className="mb-6 flex items-center text-3xl font-bold text-white">
                  <ShieldCheck className="mr-3 h-8 w-8 text-amber-400" />
                  Señales de una compra mejor pensada
                </h2>

                <p className="mb-8 text-lg text-gray-300">
                  Si un seminuevo cumple con estos puntos, normalmente ya estás viendo una opción
                  bastante más seria que muchas publicaciones improvisadas:
                </p>

                <ul className="mb-10 space-y-4">
                  {[
                    'Historial de mantenimiento razonablemente comprobable.',
                    'Sin golpes estructurales ocultos ni reparaciones sospechosas.',
                    'Interiores bien conservados y sin desgaste incoherente con el kilometraje.',
                    'Llantas, frenos y suspensión en estado congruente con el precio.',
                    'Prueba de manejo sin ruidos extraños ni alertas pendientes.'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 rounded-full bg-amber-500 p-1">
                        <CheckCircle className="h-4 w-4 text-slate-900" />
                      </div>
                      <span className="text-lg text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="w-full border-none bg-amber-500 px-8 py-6 text-lg font-bold text-slate-900 hover:bg-amber-400 sm:w-auto"
                >
                  <Link to="/inventario">Revisa el inventario actualizado</Link>
                </Button>
              </div>

              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-amber-600 opacity-20 blur-3xl"></div>
            </motion.section>

            <motion.section
              {...fadeInUp}
              className="rounded-2xl border border-slate-100 bg-white p-10 text-center shadow-lg"
            >
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Explora opciones disponibles ahora
              </h2>

              <p className="mx-auto mb-8 max-w-2xl text-slate-600">
                Si ya estás comparando seminuevos en Ensenada, lo más útil es ver opciones reales,
                revisar equipamiento, kilometraje y contexto de compra. El papel aguanta todo; el inventario no.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-auto bg-brand-blue px-8 py-6 text-lg font-bold text-white shadow-xl transition-all hover:bg-blue-800 hover:shadow-2xl"
                >
                  <Link to="/inventario">Ver autos seminuevos en Ensenada</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-auto border-2 border-brand-blue px-8 py-6 text-lg font-bold text-brand-blue hover:bg-blue-50"
                >
                  <Link to="/contacto">Agendar una cita</Link>
                </Button>
              </div>
            </motion.section>
          </div>
        </article>
      </div>
    </>
  );
}
