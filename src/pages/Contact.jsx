import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Loader2,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { useToast } from '../components/ui/use-toast';
import GoogleMapEmbed from '../components/GoogleMapLocator';
import { useSupabase } from '../hooks/useSupabase';
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { PageSEO } from '@/hooks/useSEO';

const PAGE_URL = 'https://seminuevosbaja.com.mx/contacto';
const PAGE_IMAGE =
  'https://horizons-cdn.hostinger.com/6224f76d-ecf5-45af-9c0f-743e5ebf8984/f929719291db3722f5d8881d2469bbe0.png';
const BUSINESS_PHONE = '+526469778808';
const WHATSAPP_NUMBER = '526461616696';

function safeJsonLd(data) {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}

export default function Contact() {
  const pageTitle = 'Contacto | Seminuevos Baja Ensenada';
  const pageDescription =
    'Contáctanos para agendar una cita o resolver dudas sobre inventario, financiamiento, compra, venta o consignación de autos en Ensenada.';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const supabase = useSupabase();
  const { trackWhatsAppClick } = useGoogleAnalytics();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!supabase) {
      toast({
        variant: 'destructive',
        title: 'Error de conexión',
        description: 'No se puede conectar a la base de datos.'
      });
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        variant: 'destructive',
        title: 'Teléfono inválido',
        description: 'Por favor, introduce un número de teléfono de 10 dígitos.'
      });
      return;
    }

    setLoading(true);

    try {
      const leadData = {
        nombre: formData.name,
        telefono: formData.phone,
        email: formData.email,
        asunto: formData.subject,
        mensaje: formData.message
      };

      const { error } = await supabase.from('contacto_web').insert([leadData]);

      if (error) throw error;

      toast({
        title: '¡Mensaje enviado con éxito!',
        description: 'Gracias por contactarnos. Te responderemos pronto.',
        className: 'bg-brand-green-success text-white'
      });

      supabase.functions
        .invoke('send-contact-form-email', {
          body: leadData
        })
        .catch((error) => {
          console.error('Error sending email notification:', error);
        });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        variant: 'destructive',
        title: 'Error al enviar',
        description: 'Hubo un problema al enviar tu mensaje. Inténtalo nuevamente más tarde.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick('WhatsApp', 'Contact Page');
    const message =
      'Hola, me gustaría obtener más información desde la página de contacto de Seminuevos Baja.';
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Dirección',
      details: [
        'Calle Delante #200',
        'Fraccionamiento Costa Azul',
        'Ensenada, Baja California',
        'C.P. 22890'
      ],
      link: 'https://www.google.com/maps/place/Calle+Delante+200,+Fraccionamiento+Costa+Azul,+Ensenada,+Baja+California+22890'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Teléfonos',
      details: [
        {
          text: '+52 646 977 8808',
          href: 'tel:+526469778808'
        },
        {
          text: 'WhatsApp: +52 646 161 6696',
          href: 'https://wa.me/526461616696'
        }
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: [
        {
          text: 'info@seminuevosbaja.com.mx',
          href: 'mailto:info@seminuevosbaja.com.mx'
        }
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Horarios',
      details: [
        { text: 'Lunes a Viernes: 9:00 - 17:00' },
        { text: 'Sábados: 10:00 - 15:00' },
        { text: 'Domingos: Cerrado' }
      ]
    }
  ];

  const subjects = [
    'Consulta de inventario',
    'Vender mi auto',
    'Consignar mi auto',
    'Financiamiento',
    'Asesoría general',
    'Otro'
  ];

  const faqItems = [
    {
      question: '¿Dónde encontrar autos seminuevos en Ensenada con respaldo?',
      answer:
        'En Seminuevos Baja seleccionamos vehículos con historial claro y buenas condiciones mecánicas. Puedes visitarnos en nuestra sucursal de Ensenada o revisar el inventario actualizado en este sitio.'
    },
    {
      question: '¿Qué garantía ofrecen en sus autos seminuevos?',
      answer:
        'Nuestros vehículos pasan por revisión mecánica y legal. Dependiendo del caso, contamos con respaldo adicional para que compres con mayor tranquilidad.'
    },
    {
      question: '¿Puedo financiar un auto con ustedes?',
      answer:
        'Sí. Contamos con opciones de financiamiento para distintos perfiles. Si nos contactas, revisamos tu caso y te orientamos con la alternativa más conveniente.'
    }
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    name: 'Seminuevos Baja',
    alternateName: 'Seminuevos Ensenada',
    image: PAGE_IMAGE,
    logo: PAGE_IMAGE,
    telephone: BUSINESS_PHONE,
    email: 'info@seminuevosbaja.com.mx',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Delante #200, Fraccionamiento Costa Azul',
      addressLocality: 'Ensenada',
      addressRegion: 'Baja California',
      postalCode: '22890',
      addressCountry: 'MX'
    },
    url: PAGE_URL,
    description:
      'Contacto de Seminuevos Baja para inventario, financiamiento, compra, venta y consignación de autos en Ensenada.',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '15:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/seminuevosbaja',
      'https://www.instagram.com/seminuevosbaja'
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <>
      <PageSEO
        routeKey="contact"
        customConfig={{
          title: pageTitle,
          description: pageDescription,
          canonical: '/contacto',
          ogImage: PAGE_IMAGE,
          twitterImage: PAGE_IMAGE,
          ogImageAlt: 'Contacto de Seminuevos Baja en Ensenada',
          twitterImageAlt: 'Contacto de Seminuevos Baja en Ensenada',
          schema: localBusinessSchema
        }}
      />

      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
        />
      </Helmet>

      <div className="min-h-screen bg-brand-blue pb-16 pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="transition-colors hover:text-amber-500">
                  Inicio
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li className="font-medium text-white" aria-current="page">
                Contacto
              </li>
            </ol>
          </nav>

          <div className="mb-12 text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Contacto Seminuevos Baja
            </h1>
            <p className="mx-auto max-w-3xl text-lg font-semibold text-gray-300">
              Resolvemos dudas sobre inventario, financiamiento, compra, venta y consignación
              de autos en Ensenada. Te orientamos desde el primer contacto.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="mb-8 text-center text-2xl font-bold text-white">
              Información de contacto
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-xl border border-white/10 bg-gray-900/50 p-6 text-center transition-all duration-300 ${
                    info.link || info.details.some((d) => d.href)
                      ? 'hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10'
                      : ''
                  }`}
                >
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-gray-900 shadow-lg shadow-amber-500/20">
                    {info.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-white">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => {
                      if (info.link) {
                        return (
                          <a
                            key={idx}
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-amber-500"
                          >
                            {detail}
                          </a>
                        );
                      }

                      if (detail.href) {
                        const isWhatsApp = detail.href.includes('wa.me');
                        return (
                          <a
                            key={idx}
                            href={detail.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-amber-500"
                            onClick={() => {
                              if (isWhatsApp) {
                                trackWhatsAppClick('WhatsApp', 'Contact Page Info Card');
                              }
                            }}
                          >
                            {detail.text}
                          </a>
                        );
                      }

                      return (
                        <p key={idx} className="text-sm font-medium text-gray-300">
                          {detail.text}
                        </p>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl bg-white p-8 shadow-xl">
                <h2 className="mb-4 text-3xl font-bold text-brand-gray-title">
                  Formulario de consulta
                </h2>

                <p className="mb-8 text-sm leading-relaxed text-brand-gray-text">
                  Completa el formulario y te ayudamos con dudas sobre inventario,
                  financiamiento, compra, venta o consignación de autos en Ensenada.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-bold text-brand-gray-title">
                        Nombre completo *
                      </label>
                      <p className="mb-2 text-xs text-brand-gray-text">
                        Para dirigirnos a ti de forma personalizada.
                      </p>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Ej. Juan Pérez"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-bold text-brand-gray-title">
                        Teléfono *
                      </label>
                      <p className="mb-2 text-xs text-brand-gray-text">
                        10 dígitos para contactarte rápidamente.
                      </p>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Ej. 6461234567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-bold text-brand-gray-title">
                      Correo electrónico *
                    </label>
                    <p className="mb-2 text-xs text-brand-gray-text">
                      Donde enviaremos información detallada o seguimiento.
                    </p>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="ejemplo@correo.com"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-bold text-brand-gray-title">
                      Asunto de tu consulta *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="">Selecciona cómo podemos ayudarte</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-bold text-brand-gray-title">
                      Mensaje *
                    </label>
                    <p className="mb-2 text-xs text-brand-gray-text">
                      Cuéntanos qué necesitas y te respondemos con mayor claridad.
                    </p>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Cuéntanos más detalles..."
                      className="w-full resize-none rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-xl bg-amber-500 py-6 text-lg font-bold text-gray-900 shadow-lg transition-transform duration-200 hover:scale-[1.02] hover:bg-amber-600"
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="mr-2 h-5 w-5" />
                    )}
                    {loading ? 'Enviando mensaje...' : 'Enviar consulta ahora'}
                  </Button>
                </form>

                <div className="mt-8 border-t border-gray-200 pt-8">
                  <p className="mb-4 text-center text-lg font-bold text-brand-gray-title">
                    ¿Deseas una respuesta inmediata?
                  </p>
                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="w-full border-2 border-green-500 py-6 text-base font-bold text-green-600 hover:bg-green-50"
                  >
                    <MessageCircle className="mr-2 h-6 w-6" />
                    Contáctanos por WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-900/50 p-2 shadow-xl">
                <GoogleMapEmbed />
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-xl">
                <h2 className="mb-6 text-2xl font-bold text-white">
                  ¿Por qué contactarnos?
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-amber-500" />
                    <div>
                      <h3 className="font-bold text-white">Orientación clara</h3>
                      <p className="text-sm text-gray-400">
                        Te ayudamos a entender opciones de inventario, compra, venta o consignación
                        sin vueltas innecesarias.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-amber-500" />
                    <div>
                      <h3 className="font-bold text-white">Opciones de financiamiento</h3>
                      <p className="text-sm text-gray-400">
                        Podemos orientarte sobre crédito automotriz y el proceso para evaluar tu perfil.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-amber-500" />
                    <div>
                      <h3 className="font-bold text-white">Proceso más seguro</h3>
                      <p className="text-sm text-gray-400">
                        Buscamos que cada operación tenga revisión, claridad documental y acompañamiento
                        durante el proceso.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
                <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-500">
                  <Clock className="h-5 w-5" /> Atención personalizada
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  Si nuestros horarios no se ajustan a tu agenda, contáctanos y revisamos la
                  posibilidad de programar una cita.
                </p>
              </div>
            </motion.div>
          </div>

          <section className="mb-16">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-white">
                Preguntas frecuentes
              </h2>

              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index + 1}`}
                    className="rounded-lg border border-white/10 bg-gray-900/60 px-6 py-2"
                  >
                    <AccordionTrigger className="text-left font-bold text-white hover:text-amber-500">
                      <h3 className="m-0 p-0 text-lg font-bold">{item.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-2 leading-relaxed text-gray-300">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          <section className="border-t border-white/10 pt-16">
            <h2 className="mb-8 text-center text-2xl font-bold text-white">
              Recursos relacionados
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                to="/inventario"
                className="group block rounded-xl border border-white/5 bg-gray-900/40 p-4 text-center transition-colors hover:bg-gray-800"
              >
                <h3 className="font-semibold text-white transition-colors group-hover:text-amber-500">
                  Ver inventario
                </h3>
                <p className="mt-1 text-xs text-gray-400">
                  Explora autos disponibles
                </p>
              </Link>

              <Link
                to="/financiamiento"
                className="group block rounded-xl border border-white/5 bg-gray-900/40 p-4 text-center transition-colors hover:bg-gray-800"
              >
                <h3 className="font-semibold text-white transition-colors group-hover:text-amber-500">
                  Financiamiento automotriz
                </h3>
                <p className="mt-1 text-xs text-gray-400">Simula tu crédito en línea</p>
              </Link>

              <Link
                to="/vender"
                className="group block rounded-xl border border-white/5 bg-gray-900/40 p-4 text-center transition-colors hover:bg-gray-800"
              >
                <h3 className="font-semibold text-white transition-colors group-hover:text-amber-500">
                  Vender mi auto
                </h3>
                <p className="mt-1 text-xs text-gray-400">Conoce el proceso</p>
              </Link>

              <Link
                to="/consigna"
                className="group block rounded-xl border border-white/5 bg-gray-900/40 p-4 text-center transition-colors hover:bg-gray-800"
              >
                <h3 className="font-semibold text-white transition-colors group-hover:text-amber-500">
                  Consignación de autos
                </h3>
                <p className="mt-1 text-xs text-gray-400">Explora esta opción</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}