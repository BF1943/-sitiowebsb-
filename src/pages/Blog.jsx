import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar,
  User,
  ArrowRight,
  Shield,
  AlertCircle,
  MapPin,
  ShieldAlert,
  ShoppingCart,
  CheckCircle,
  Car,
  TrendingUp,
  ShieldCheck,
  TrendingDown
} from 'lucide-react';
import { PageSEO } from '@/hooks/useSEO';

const PAGE_URL = 'https://seminuevosbaja.com.mx/blog';
const PAGE_IMAGE =
  'https://seminuevosbaja.com.mx/og-image.png';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const pageTitle = 'Blog de Autos Seminuevos en Ensenada | Guías y Consejos';
  const pageDescription =
    'Guías y artículos sobre compra, venta, consignación, financiamiento y seguridad para autos seminuevos en Ensenada y Baja California.';

  const featuredPost = {
    id: 1,
    title: 'Los 10 Mejores Autos Seminuevos para Comprar en Tijuana y Ensenada en 2025',
    excerpt:
      '¿Buscas un auto seminuevo confiable en Baja California? Descubre nuestro Top 10 de autos (2020-2025) ideales para las calles de Tijuana y Ensenada.',
    author: 'Equipo Seminuevos Baja',
    date: '7 de Octubre, 2025',
    readTime: '10 min',
    category: 'Guías de Compra',
    image:
      'https://images.unsplash.com/photo-1684734184331-439ade2d8f84?q=80&w=800&auto=format&fit=crop',
    url: '/blog/mejores-seminuevos-tijuana-ensenada-2025'
  };

  const posts = [
    {
      id: 18,
      title: '¿Te ofrecen poco por tu auto en Tijuana? Conoce una mejor opción en Ensenada',
      excerpt:
        'Si en Tijuana las ofertas por tu auto están por debajo de lo esperado, revisa por qué pasa y cuándo tiene sentido explorar una mejor opción de venta en Ensenada.',
      author: 'Equipo Seminuevos Baja',
      date: '8 de Abril, 2026',
      readTime: '7 min',
      category: 'Guías de Venta',
      icon: <TrendingDown className="h-5 w-5" />,
      image:
        'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=75&auto=format',
      url: '/consigna-desde-tijuana'
    },
    {
      id: 17,
      title: '¿Qué es la Consignación de Autos? Venta Segura en Ensenada',
      excerpt:
        'Descubre cómo funciona la consignación de autos en Ensenada y por qué puede ser una alternativa más segura y conveniente para vender tu vehículo.',
      author: 'Equipo Seminuevos Baja',
      date: '6 de Abril, 2026',
      readTime: '6 min',
      category: 'Guías de Venta',
      icon: <ShieldCheck className="h-5 w-5" />,
      image:
        'https://images.unsplash.com/photo-1560179707-f14e90ef3dab?q=80&w=1974&auto=format&fit=crop',
      url: '/blog/consignacion-autos-segura'
    },
    {
      id: 16,
      title: 'Vender mi Auto Financiado en Ensenada',
      excerpt:
        'Descubre cómo Seminuevos Baja compra autos financiados. Pagamos directamente al banco y tú recibes la diferencia. Rápido y seguro.',
      author: 'Equipo Seminuevos Baja',
      date: '4 de Marzo, 2026',
      readTime: '7 min',
      category: 'Guías de Venta',
      icon: <TrendingUp className="h-5 w-5" />,
      image:
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop',
      url: '/blog/vender-auto-financiado'
    },
    {
      id: 15,
      title: 'Seminuevos listos para entrega inmediata: Tu mejor opción inteligente',
      excerpt:
        'Descubre por qué comprar seminuevos puede ser una gran decisión hoy. Vehículos revisados, documentación clara y listos para entrega inmediata.',
      author: 'Equipo Seminuevos Baja',
      date: '19 de Febrero, 2026',
      readTime: '5 min',
      category: 'Guías de Compra',
      icon: <Car className="h-5 w-5" />,
      image:
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2072&auto=format&fit=crop',
      url: '/blog/seminuevos'
    },
    {
      id: 14,
      title: 'Venta de Carros en Ensenada: cómo elegir un seminuevo con respaldo',
      excerpt:
        'Guía para comprar autos en Ensenada con respaldo, revisión legal y opciones de financiamiento. Conoce qué revisar antes de elegir un seminuevo.',
      author: 'Equipo Seminuevos Baja',
      date: '17 de Febrero, 2026',
      readTime: '6 min',
      category: 'Guías de Compra',
      icon: <CheckCircle className="h-5 w-5" />,
      image:
        'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop',
      url: '/blog/venta-carros-ensenada'
    },
    {
      id: 13,
      title: '¿Buscas Yardas de Carros en Ensenada? Por Qué es Mejor Comprar en una Agencia Establecida',
      excerpt:
        'Descubre por qué comprar en una agencia profesional es mejor que en yardas informales. Garantía, seguridad y transparencia en cada compra.',
      author: 'Equipo Seminuevos Baja',
      date: '11 de Febrero, 2026',
      readTime: '8 min',
      category: 'Guías de Compra',
      icon: <ShoppingCart className="h-5 w-5" />,
      image:
        'https://images.unsplash.com/photo-1549666012-706f9d45e412?q=80&w=2070&auto=format&fit=crop',
      url: '/blog/yardas-carros-ensenada'
    },
    {
      id: 11,
      title: "Autos por Decreto: El 'Punto Ciego' del Seguro que Puede Costarte tu Patrimonio",
      excerpt:
        '¿Crees que tu auto regularizado está totalmente protegido? Descubre las letras chiquitas que podrían dejarte sin auto y sin dinero en caso de siniestro.',
      author: 'Equipo Seminuevos Baja',
      date: '08 de Enero, 2026',
      readTime: '8 min',
      category: 'Seguridad',
      icon: <ShieldAlert className="h-5 w-5" />,
      image:
        'https://images.unsplash.com/photo-1635770311537-814d4368536e?q=80&w=800&auto=format&fit=crop',
      url: '/blog/autos-por-decreto-seguro-punto-ciego'
    },
    {
      id: 10,
      title: 'Ruta del Vino: ¿Qué auto necesitas realmente para el Valle de Guadalupe?',
      excerpt:
        '¿Planeas visitar el Valle? Descubre si tu auto está listo para los caminos de terracería y cuáles son las mejores opciones para disfrutar la experiencia sin preocupaciones.',
      author: 'Equipo Seminuevos Baja',
      date: '05 de Diciembre, 2025',
      readTime: '8 min',
      category: 'Turismo',
      icon: <MapPin className="h-5 w-5" />,
      image:
        'https://images.unsplash.com/photo-1533658590623-d343c8b4183d?q=80&w=800&auto=format&fit=crop',
      url: '/blog/ruta-del-vino-valle-de-guadalupe-auto-ideal'
    },
    {
      id: 9,
      title: 'Autos "Chocolate" vs. Nacionales en BC: La Verdad',
      excerpt:
        'Descubre los riesgos y costos ocultos de los autos chocolate. Compara con la seguridad de un auto nacional y toma una mejor decisión.',
      author: 'Equipo Seminuevos Baja',
      date: '19 de Noviembre, 2025',
      readTime: '9 min',
      category: 'Seguridad',
      icon: <AlertCircle className="h-5 w-5" />,
      image:
        'https://images.unsplash.com/photo-1553440569-b2dcba423693?q=80&w=800&auto=format&fit=crop',
      url: '/blog/autos-chocolate-vs-nacionales'
    },
    {
      id: 8,
      title: 'Comprar un Auto Seminuevo en BC sin Ser Estafado',
      excerpt:
        'Guía para evitar fraudes. Aprende a revisar el REPUVE, inspeccionar el auto y elegir modelos más seguros en Baja California.',
      author: 'Equipo Seminuevos Baja',
      date: '13 de Octubre, 2025',
      readTime: '7 min',
      category: 'Seguridad',
      icon: <AlertCircle className="h-5 w-5" />,
      image:
        'https://images.unsplash.com/photo-1595872018818-97555653a011?q=80&w=800&auto=format&fit=crop',
      url: '/blog/comprar-auto-seminuevo-sin-ser-estafado'
    },
    {
      id: 7,
      title: 'Guía Definitiva de Seminuevos en Ensenada: Compra Segura',
      excerpt:
        'Descubre cómo comprar un seminuevo en Ensenada sin riesgos. Comparamos agencias formales contra opciones informales y te damos mejores criterios de compra.',
      author: 'Equipo Seminuevos Baja',
      date: '10 de Octubre, 2025',
      readTime: '8 min',
      category: 'Guías de Compra',
      icon: <Shield className="h-5 w-5" />,
      image:
        'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop',
      url: '/blog/guia-seminuevos-ensenada'
    }
  ];

  const categories = ['Todos', ...new Set(posts.map((post) => post.category))];

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'Todos') return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  const getCategoryCount = (categoryName) => {
    if (categoryName === 'Todos') return posts.length;
    return posts.filter((post) => post.category === categoryName).length;
  };

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog de Seminuevos Baja',
    url: PAGE_URL,
    description: pageDescription,
    publisher: {
      '@type': 'Organization',
      name: 'Seminuevos Baja',
      logo: {
        '@type': 'ImageObject',
        url: PAGE_IMAGE
      }
    }
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: filteredPosts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://seminuevosbaja.com.mx${post.url}`,
      name: post.title
    }))
  };

  return (
    <>
      <PageSEO
        routeKey="blog"
        customConfig={{
          title: pageTitle,
          description: pageDescription,
          canonical: '/blog',
          ogImage: PAGE_IMAGE,
          twitterImage: PAGE_IMAGE,
          ogImageAlt: 'Blog de autos seminuevos en Ensenada',
          twitterImageAlt: 'Blog de autos seminuevos en Ensenada',
          schema: blogSchema
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="min-h-screen bg-brand-blue pb-16 pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Blog de Autos Seminuevos en Ensenada
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-bold text-gray-300">
              Guías y artículos para ayudarte a comprar, vender, consignar o financiar
              un auto con mejores criterios en Ensenada y Baja California.
            </p>
          </div>

          <section className="mb-16">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden rounded-lg bg-gray-900/50 shadow-lg"
            >
              <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
                <div className="order-2 p-8 lg:order-1 lg:p-12">
                  <div className="mb-4 flex items-center space-x-4">
                    <span className="rounded-full bg-amber-500 px-3 py-1 text-sm font-bold text-brand-blue">
                      Artículo destacado
                    </span>
                    <span className="text-sm font-bold text-gray-300">
                      {featuredPost.category}
                    </span>
                  </div>

                  <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                    {featuredPost.title}
                  </h2>

                  <p className="mb-6 text-lg font-bold text-gray-300">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-bold text-gray-300">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-amber-500" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-amber-500" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime} de lectura</span>
                  </div>

                  <Link
                    to={featuredPost.url}
                    className="inline-flex items-center space-x-2 rounded-lg bg-amber-500 px-6 py-3 font-bold text-brand-blue transition-colors hover:bg-amber-400"
                  >
                    <span>Leer artículo completo</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="order-1 lg:order-2">
                  <img
                    className="h-64 w-full object-cover lg:h-full"
                    alt="Fotografía profesional de auto seminuevo en carretera de Baja California"
                    src={featuredPost.image}
                    loading="eager"
                  />
                </div>
              </div>
            </motion.article>
          </section>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <aside className="lg:col-span-1">
              <div className="mb-8 rounded-lg bg-gray-900/50 p-6 shadow-lg">
                <h2 className="mb-4 text-lg font-semibold text-white">Categorías</h2>
                <ul className="space-y-2">
                  {categories.map((category, index) => {
                    const isActive = activeCategory === category;

                    return (
                      <li key={index}>
                        <button
                          type="button"
                          onClick={() => setActiveCategory(category)}
                          className={`flex w-full items-center justify-between rounded px-3 py-2 text-left font-bold transition-colors ${
                            isActive
                              ? 'bg-amber-500 text-brand-blue'
                              : 'text-gray-300 hover:bg-white/10'
                          }`}
                          aria-pressed={isActive}
                        >
                          <span>{category}</span>
                          <span
                            className={`text-sm font-bold ${
                              isActive ? 'text-brand-blue' : 'text-gray-400'
                            }`}
                          >
                            ({getCategoryCount(category)})
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mb-8 rounded-lg bg-gray-900/50 p-6 shadow-lg">
                <h2 className="mb-4 text-lg font-semibold text-white">
                  Recursos clave
                </h2>
                <div className="space-y-3">
                  <Link
                    to="/inventario/"
                    className="block rounded px-3 py-2 font-bold text-gray-300 transition-colors hover:bg-white/10 hover:text-amber-500"
                  >
                    Ver inventario en Ensenada
                  </Link>
                  <Link
                    to="/financiamiento"
                    className="block rounded px-3 py-2 font-bold text-gray-300 transition-colors hover:bg-white/10 hover:text-amber-500"
                  >
                    Simular crédito automotriz
                  </Link>
                  <Link
                    to="/vender"
                    className="block rounded px-3 py-2 font-bold text-gray-300 transition-colors hover:bg-white/10 hover:text-amber-500"
                  >
                    Vender mi auto
                  </Link>
                  <Link
                    to="/consigna"
                    className="block rounded px-3 py-2 font-bold text-gray-300 transition-colors hover:bg-white/10 hover:text-amber-500"
                  >
                    Consignación de autos
                  </Link>
                </div>
              </div>

              <div className="rounded-lg bg-gray-900/50 p-6 shadow-lg">
                <h2 className="mb-4 text-lg font-semibold text-white">
                  ¿Necesitas ayuda?
                </h2>
                <p className="mb-4 font-bold text-gray-300">
                  Si estás comparando opciones para comprar o vender tu auto, te
                  asesoramos directamente.
                </p>
                <Link
                  to="/contacto"
                  className="block w-full rounded-lg bg-amber-500 py-2 text-center font-bold text-brand-blue transition-colors hover:bg-amber-400"
                >
                  Contactar ahora
                </Link>
              </div>
            </aside>

            <main className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-white">
                  {activeCategory === 'Todos'
                    ? 'Todos los artículos'
                    : `Artículos de ${activeCategory}`}
                </h2>
                <p className="text-sm font-bold text-gray-400">
                  {filteredPosts.length} resultado{filteredPosts.length === 1 ? '' : 's'}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="flex flex-col overflow-hidden rounded-lg bg-gray-900/50 transition-shadow hover:shadow-xl"
                  >
                    <Link to={post.url} className="block h-48 w-full">
                      <img
                        className="h-full w-full object-cover"
                        alt={post.title}
                        src={post.image}
                        loading="lazy"
                        decoding="async"
                      />
                    </Link>

                    <div className="flex flex-grow flex-col p-6">
                      <div className="mb-3 flex items-center space-x-2">
                        {post.icon &&
                          React.cloneElement(post.icon, {
                            className: 'h-5 w-5 text-amber-500'
                          })}
                        <span className="text-sm font-medium text-amber-500">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="mb-3 min-h-[3.75rem] line-clamp-2 text-xl font-semibold text-white">
                        <Link to={post.url}>{post.title}</Link>
                      </h3>

                      <p className="mb-4 line-clamp-3 flex-grow font-bold text-gray-300">
                        {post.excerpt}
                      </p>

                      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-sm font-bold text-gray-300">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                          <span>{post.author}</span>
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>

                      <div className="mt-auto">
                        <Link
                          to={post.url}
                          aria-label={`Leer artículo: ${post.title}`}
                          className="inline-flex items-center space-x-2 font-bold text-amber-500 transition-colors hover:text-amber-400"
                        >
                          <span>Leer artículo completo</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
