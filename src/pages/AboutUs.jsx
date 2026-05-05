import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Shield, HeartHandshake as Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PageSEO } from '@/hooks/useSEO';

const AboutUs = () => {
    const pageTitle = 'Agencia de Autos en Ensenada | Seminuevos Baja - Compra y Venta Segura';
    const pageDescription = 'Somos una agencia de autos en Ensenada con aÃ±os de experiencia. Descubre por quÃ© somos la mejor opciÃ³n para comprar y vender autos seminuevos con seguridad y garantÃ­a.';
    
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AutoDealer",
        "name": "Seminuevos Baja",
        "image": "https://seminuevosbaja.com.mx/og-image.png",
        "description": "Somos una agencia de autos en Ensenada con años de experiencia. Descubre por qué somos la mejor opción para comprar y vender autos seminuevos.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Ensenada",
            "addressLocality": "Ensenada",
            "addressRegion": "Baja California",
            "postalCode": "22800",
            "addressCountry": "MX"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "31.8667",
            "longitude": "-116.5964"
        },
        "url": "https://seminuevosbaja.com.mx/quienes-somos/",
        "telephone": "+526469778808",
        "priceRange": "$$"
    };

    return (
        <>
            <PageSEO
                routeKey="about"
                customConfig={{
                    title: pageTitle,
                    description: pageDescription,
                    ogImage: '/og-image.png',
                    ogImageAlt: 'Agencia de autos Seminuevos Baja en Ensenada',
                    canonical: '/quienes-somos',
                    schema: jsonLd,
                }}
            />

            {/* Main Wrapper */}
            <div className="bg-gray-50 min-h-screen">

                {/* Hero / Header Section */}
                <section className="relative py-20 text-center bg-brand-blue text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
                        >
                            Agencia de Autos en Ensenada<br/>
                            <span className="text-amber-400 text-3xl md:text-5xl">Tu Mejor Opción para Comprar y Vender</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-medium"
                        >
                            Seguridad, garantía y confianza en tu agencia automotriz local.
                        </motion.p>
                    </div>
                </section>

                {/* Prominent Intro Section */}
                <section className="py-16 md:py-24 bg-white relative">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="bg-gradient-to-br from-white to-blue-50 border-l-8 border-amber-500 rounded-r-xl shadow-xl p-8 md:p-12 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                                <Shield className="w-40 h-40 text-brand-blue" />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-amber-100 rounded-full">
                                        <Shield className="w-8 h-8 text-amber-600" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        Por Qué Elegir Nuestra Agencia de Autos en Ensenada
                                    </h2>
                                </div>
                                <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium text-justify md:text-left mb-6">
                                    Bienvenido a <span className="font-bold text-brand-blue">Seminuevos Baja</span>, la <span className="font-bold text-gray-900">agencia de autos en Ensenada</span> que ha ganado la confianza de miles de clientes. Como <span className="font-bold text-gray-900">agencia automotriz en Ensenada</span> establecida, nos diferenciamos por ofrecer una experiencia transparente y segura.
                                </p>
                                <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium text-justify md:text-left">
                                    A diferencia del trato directo con particulares, en nuestra agencia obtienes <span className="font-bold text-amber-600">seguridad legal garantizada</span>, <span className="font-bold text-amber-600">documentación verificada</span> y <span className="font-bold text-amber-600">pólizas de garantía mecánica</span>. Somos la opción más fiable para quienes buscan autos seminuevos en la región.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* History Section */}
                <section className="py-16 bg-gray-50 text-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl font-bold mb-6 text-brand-blue">Trayectoria de nuestra Agencia Automotriz</h2>
                                <p className="text-lg mb-6 leading-relaxed text-gray-600">
                                    Nacimos de la pasión por los autos y el deseo de profesionalizar el mercado de vehículos en Baja California. Identificamos la necesidad de una <span className="font-semibold text-brand-blue">agencia de autos en Ensenada</span> donde la gente pudiera comprar y vender con total tranquilidad, eliminando los riesgos comunes de las transacciones informales.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-600 mb-6">
                                    Como la <span className="font-semibold text-brand-blue">mejor agencia automotriz en Ensenada</span>, conocemos profundamente el mercado local. Entendemos las necesidades específicas de los conductores de nuestra ciudad, desde la importancia de autos nacionales hasta la necesidad de vehículos confiables para carretera y ciudad.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-600">
                                    Desde nuestros inicios, hemos ayudado a cientos de familias a encontrar el auto perfecto y a muchos otros a vender el suyo sin complicaciones, construyendo una reputación sólida como la <span className="font-semibold text-brand-blue">agencia de autos seminuevos en Ensenada</span> más confiable.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <img className="rounded-2xl shadow-2xl w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-300" alt="Fachada de nuestra agencia de autos en Ensenada con clientes satisfechos" src="https://images.unsplash.com/photo-1703715558440-f3498f79cef5" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 bg-brand-blue text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Valores de nuestra Agencia de Autos en Ensenada</h2>
                            <p className="mt-4 text-xl text-blue-100">Lo que nos define como líderes en el mercado automotriz</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 h-full"
                            >
                                <Target className="h-14 w-14 mx-auto mb-6 text-amber-400" />
                                <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
                                <p className="text-gray-200 font-medium">Ser la agencia automotriz en Ensenada que ofrece la mejor selección de seminuevos garantizados, facilitando un proceso de compra-venta honesto y eficiente.</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 h-full"
                            >
                                <Shield className="h-14 w-14 mx-auto mb-6 text-amber-400" />
                                <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
                                <p className="text-gray-200 font-medium">Consolidarnos como la agencia de seminuevos líder en Baja California, reconocida por nuestra integridad, calidad y compromiso con la comunidad de Ensenada.</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 h-full"
                            >
                                <Handshake className="h-14 w-14 mx-auto mb-6 text-amber-400" />
                                <h3 className="text-2xl font-bold mb-4">Nuestros Valores</h3>
                                <p className="text-gray-200 font-medium">Honestidad, Transparencia y Servicio. Son los pilares que nos distinguen de cualquier otra agencia de autos en la región.</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-white text-center">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Visita hoy tu Agencia de Autos en Ensenada</h2>
                        <p className="text-xl text-gray-600 mb-10 font-medium">Ya sea que busques comprar, vender o consignar, Seminuevos Baja está aquí para ayudarte con el mejor servicio local.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild size="lg" className="px-8 py-6 text-lg">
                                <Link to="/inventario/">Ver autos seminuevos en Ensenada</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                                <Link to="/vender/">Vender mi Auto</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutUs;
