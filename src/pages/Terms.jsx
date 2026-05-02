import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, FileText, Lock, Car, Wrench, HeartHandshake as Handshake, CreditCard, Mail, Phone, MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PageSEO } from '@/hooks/useSEO';

export default function Terms() {
  const currentDate = new Date().toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <PageSEO
        routeKey="terms"
        customConfig={{
          description:
            'Consulta los tÃ©rminos y condiciones de Seminuevos Baja: polÃ­ticas de compra, venta, consignaciÃ³n, garantÃ­a mecÃ¡nica y privacidad de nuestra agencia en Ensenada.',
        }}
      />

      <div className="min-h-screen bg-brand-blue pt-8 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav aria-label="breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-amber-500 transition-colors">Inicio</Link>
              </li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li className="text-white font-medium" aria-current="page">Términos y Condiciones</li>
            </ol>
          </nav>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-full mb-6">
              <Shield className="h-8 w-8 text-amber-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Términos y Condiciones</h1>
            <p className="text-gray-300 text-lg">Última actualización: {currentDate}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-10 mb-12"
          >
            <p className="text-gray-600 mb-8 leading-relaxed">
              Bienvenido a Seminuevos Baja. Los siguientes términos y condiciones regulan el uso de nuestro sitio web y los servicios que ofrecemos en nuestra agencia ubicada en Ensenada, Baja California. Al utilizar nuestro sitio web o contratar nuestros servicios, aceptas estos términos en su totalidad.
            </p>

            <Accordion type="single" collapsible className="w-full space-y-4">
              
              {/* 1. Términos y condiciones de uso del sitio */}
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6 py-2 bg-gray-50 data-[state=open]:bg-white transition-colors">
                <AccordionTrigger className="text-brand-gray-title hover:text-amber-600 font-bold text-lg text-left">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-amber-500" />
                    <span>1. Términos y condiciones de uso del sitio</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-4 pb-2">
                  <p className="mb-4">El contenido de las páginas de este sitio web es para su información general y uso exclusivo. Está sujeto a cambios sin previo aviso.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>El uso de cualquier información o material en este sitio web es bajo su propio riesgo, para lo cual no seremos responsables.</li>
                    <li>Será su propia responsabilidad asegurarse de que cualquier producto, servicio o información disponible a través de este sitio web cumpla con sus requisitos específicos.</li>
                    <li>Este sitio web contiene material que es de nuestra propiedad o está licenciado a nosotros. Este material incluye, pero no se limita a, el diseño, la disposición, el aspecto, la apariencia y los gráficos.</li>
                    <li>El uso no autorizado de este sitio web puede dar lugar a un reclamo por daños y perjuicios y/o ser un delito penal.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* 2. Política de privacidad */}
              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6 py-2 bg-gray-50 data-[state=open]:bg-white transition-colors">
                <AccordionTrigger className="text-brand-gray-title hover:text-amber-600 font-bold text-lg text-left">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-amber-500" />
                    <span>2. Política de Privacidad</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-4 pb-2">
                  <p className="mb-4">En Seminuevos Baja estamos comprometidos a garantizar que su privacidad esté protegida. Si le pedimos que proporcione cierta información por la cual pueda ser identificado al usar este sitio web, puede estar seguro de que solo se utilizará de acuerdo con esta declaración de privacidad.</p>
                  <p className="mb-4"><strong>Recopilación de datos:</strong> Podemos recopilar la siguiente información: nombre, información de contacto (incluyendo dirección de correo electrónico y número de teléfono), información demográfica como código postal, preferencias e intereses relacionados con la compra, venta o financiamiento de vehículos.</p>
                  <p><strong>Uso de la información:</strong> Requerimos esta información para comprender sus necesidades y brindarle un mejor servicio, en particular para: mantenimiento de registros internos, mejorar nuestros productos y servicios, y enviar periódicamente correos electrónicos promocionales u ofertas especiales si ha dado su consentimiento.</p>
                </AccordionContent>
              </AccordionItem>

              {/* 3. Términos de compra y venta de autos */}
              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6 py-2 bg-gray-50 data-[state=open]:bg-white transition-colors">
                <AccordionTrigger className="text-brand-gray-title hover:text-amber-600 font-bold text-lg text-left">
                  <div className="flex items-center gap-3">
                    <Car className="h-5 w-5 text-amber-500" />
                    <span>3. Términos de compra y venta de autos</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-4 pb-2">
                  <p className="mb-4"><strong>Compra de vehículos:</strong> Todos los vehículos ofertados en Seminuevos Baja están sujetos a disponibilidad e inspección previa. Los precios publicados pueden cambiar sin previo aviso. La reserva de un vehículo requiere de un apartado formal (depósito) que estará sujeto a los términos del contrato de apartado específico.</p>
                  <p><strong>Venta de vehículos (Compramos tu auto):</strong> Las ofertas de compra realizadas por Seminuevos Baja se basan en la inspección física y legal del vehículo. La oferta inicial en línea o telefónica es un estimado y puede variar tras la inspección física. Nos reservamos el derecho de rechazar la compra de cualquier vehículo que no cumpla con nuestros estándares mecánicos, estéticos o legales.</p>
                </AccordionContent>
              </AccordionItem>

              {/* 4. Información sobre garantías */}
              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6 py-2 bg-gray-50 data-[state=open]:bg-white transition-colors">
                <AccordionTrigger className="text-brand-gray-title hover:text-amber-600 font-bold text-lg text-left">
                  <div className="flex items-center gap-3">
                    <Wrench className="h-5 w-5 text-amber-500" />
                    <span>4. Información sobre garantías mecánicas</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-4 pb-2">
                  <p className="mb-4">En Seminuevos Baja ofrecemos una <strong>garantía mecánica de 12 meses</strong> para vehículos que cumplen con los requisitos estipulados al momento de la venta, brindando tranquilidad a nuestros clientes.</p>
                  <p className="mb-2">La garantía cubre <strong>11 sistemas clave</strong> del vehículo, sujetos a condiciones de uso normal:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 pl-2">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Motor</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Transmisión</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Diferencial</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Caja de cambios</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Sistema eléctrico</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Sistema de frenos</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Suspensión</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Dirección</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Aire acondicionado</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Calefacción</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div> Sistema de combustible</li>
                  </ul>
                  <p className="text-sm italic mt-4 text-gray-500">Nota: El desgaste por uso normal, piezas de mantenimiento (frenos, llantas, filtros, etc.) y daños por negligencia o accidentes no están cubiertos. Para hacer válida la garantía, el vehículo debe realizar sus mantenimientos programados en los tiempos y talleres autorizados.</p>
                </AccordionContent>
              </AccordionItem>

              {/* 5. Política de consignación */}
              <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6 py-2 bg-gray-50 data-[state=open]:bg-white transition-colors">
                <AccordionTrigger className="text-brand-gray-title hover:text-amber-600 font-bold text-lg text-left">
                  <div className="flex items-center gap-3">
                    <Handshake className="h-5 w-5 text-amber-500" />
                    <span>5. Política de Consignación</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-4 pb-2">
                  <p className="mb-4">El servicio de consignación está diseñado para facilitar la venta de su vehículo a través de nuestros canales de venta y ubicación física.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>El vehículo debe pasar una inspección mecánica y de documentación antes de ser aceptado en consignación.</li>
                    <li>Se firmará un contrato de consignación detallando el precio de venta acordado, el porcentaje de comisión o tarifa fija para Seminuevos Baja, y la vigencia del contrato.</li>
                    <li>Seminuevos Baja se compromete a promover el vehículo de manera profesional, incluyendo toma de fotografías, publicación en sitio web y redes sociales, y exhibición en el lote (sujeto a espacio).</li>
                    <li>El propietario mantendrá el seguro vigente del vehículo durante el periodo de consignación.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* 6. Términos de financiamiento */}
              <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6 py-2 bg-gray-50 data-[state=open]:bg-white transition-colors">
                <AccordionTrigger className="text-brand-gray-title hover:text-amber-600 font-bold text-lg text-left">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-amber-500" />
                    <span>6. Términos de Financiamiento</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-4 pb-2">
                  <p className="mb-4">Seminuevos Baja actúa como intermediario entre el cliente y las instituciones financieras o crediticias asociadas. No otorgamos crédito directamente.</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>La aprobación del crédito está sujeta a la evaluación del historial crediticio, capacidad de pago y políticas de la institución financiera elegida.</li>
                    <li>Los enganches, tasas de interés, plazos y comisiones por apertura variarán dependiendo del perfil del cliente y el vehículo seleccionado.</li>
                    <li>La calculadora de crédito disponible en nuestro sitio web es únicamente para fines ilustrativos y no representa una oferta vinculante o aprobación de crédito.</li>
                    <li>El cliente deberá proporcionar documentación veraz y comprobable (identificación, comprobante de ingresos, comprobante de domicilio, etc.) para el trámite.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">¿Tienes alguna duda sobre nuestros términos?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Si requieres más información sobre nuestras políticas, garantías o el proceso de compra/venta, nuestro equipo está listo para asesorarte.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center p-4">
                <MapPin className="h-6 w-6 text-amber-500 mb-2" />
                <h3 className="text-white font-semibold mb-1">Visítanos</h3>
                <p className="text-gray-400 text-sm text-center">Calle Delante #200, Fracc. Costa Azul, Ensenada, B.C.</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <Phone className="h-6 w-6 text-amber-500 mb-2" />
                <h3 className="text-white font-semibold mb-1">Llámanos</h3>
                <a href="tel:+526469778808" className="text-gray-400 text-sm hover:text-amber-500 transition-colors">646 977 8808</a>
              </div>
              <div className="flex flex-col items-center p-4">
                <Mail className="h-6 w-6 text-amber-500 mb-2" />
                <h3 className="text-white font-semibold mb-1">Escríbenos</h3>
                <a href="mailto:info@seminuevosbaja.com.mx" className="text-gray-400 text-sm hover:text-amber-500 transition-colors">info@seminuevosbaja.com.mx</a>
              </div>
            </div>

            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-8">
              <Link to="/contacto">Contactar a un Asesor</Link>
            </Button>
          </motion.div>

        </div>
      </div>
    </>
  );
}
