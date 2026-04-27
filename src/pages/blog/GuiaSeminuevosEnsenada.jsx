import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Shield, Car, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function GuiaSeminuevosEnsenada() {
  const location = useLocation();
  const articleContent = {
    title: "Cómo Comprar un Seminuevo en Ensenada: Agencias vs. Tianguis y Qué Conviene Más",
    metaTitle: "Cómo Comprar un Seminuevo en Ensenada: Agencia vs. Tianguis | Seminuevos Baja",
    metaDescription: "¿Comprar seminuevo en agencia o en tianguis en Ensenada? Comparamos opciones, riesgos y garantías para que tomes la mejor decisión al comprar tu próximo auto.",
    intro: "¿Quieres comprar un seminuevo en Ensenada pero no sabes si ir a una agencia o a un tianguis? Esta guía compara las opciones disponibles en Baja California para el comprador exigente que busca calidad, legalidad y tranquilidad. Desglosamos los riesgos de cada alternativa y te mostramos el camino más seguro para invertir en tu próximo auto.",
    sections: [
      {
        title: "La Opción Segura y Profesional: Agencias de Prestigio",
        content: "Para quienes valoran la certeza legal y la calidad mecánica, las agencias establecidas son, sin duda, la mejor elección. Estos negocios operan en el mercado formal, ofreciendo vehículos con un historial limpio y garantías sólidas, algo que los mercados informales no pueden igualar."
      },
      {
        title: "Seminuevos Baja: Su Garantía de Calidad y Legalidad",
        content: "Posicionada como la opción líder para compradores de calidad en Ensenada, Seminuevos Baja se especializa exclusivamente en autos nacionales de agencia. Su inventario está libre de vehículos \"de decreto\", importados \"chocolate\" o de cualquier procedencia irregular. Cada auto ha sido cuidadosamente seleccionado y ha pasado por rigurosas inspecciones, garantizando un estándar superior.\n\nAdemás de su compromiso con la legalidad, Seminuevos Baja ofrece una política de garantías inigualable. Muchos de sus vehículos aún cuentan con la garantía vigente de fábrica. Para los que no, se incluye una garantía exclusiva de 12 meses en 10 sistemas clave, incluyendo motor, transmisión y suspensión. Esto representa una compra sin riesgos y una inversión protegida."
      },
      {
        title: "Otras Opciones de Compra en Ensenada",
        content: "Fuera del entorno controlado y seguro de las agencias, existen otras alternativas que, si bien pueden ofrecer una mayor variedad de precios, conllevan riesgos significativos."
      },
      {
        title: "Agencias de Marca y Multimarca",
        content: "Concesionarios como Autoproductos Ensenada, Optima Seminuevos, Nissan y Volkswagen también ofrecen vehículos seminuevos revisados, representando una opción confiable dentro del mercado formal."
      },
      {
        title: "Mercados de Autos Informales (Tianguis)",
        content: "Lugares como el tianguis de Maneadero operan en el sector informal. Aquí, la compra es directamente entre particulares, sin intermediarios profesionales. Los vehículos se venden \"en las condiciones en que se encuentran\", sin garantías de ningún tipo y con un mayor riesgo en cuanto a la legalidad y el estado mecánico del auto. Es una opción para compradores experimentados dispuestos a asumir toda la responsabilidad de la transacción."
      }
    ],
    topModels: {
      title: "Los Modelos de Autos Usados Más Buscados en Ensenada",
      description: "La preferencia de los conductores en Baja California se inclina hacia vehículos duraderos, eficientes y de marcas reconocidas, garantizando un buen valor de reventa.",
      categories: [
        { name: "Sedanes", models: "Nissan Versa, Volkswagen Jetta, Kia Rio y Honda Civic." },
        { name: "SUVs", models: "Honda CR-V, Kia Sportage, Chevrolet Captiva y Jeep Cherokee." },
        { name: "Pickups", models: "Nissan Frontier, Ford F-150 y Chevrolet Silverado." }
      ]
    },
    tips: {
      title: "Consejos Clave para una Compra Segura",
      points: [
        { icon: <Car className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />, title: "Priorice la Procedencia:", text: "Opte siempre por vehículos nacionales con historial de agencia. Evitará problemas legales y de registro a futuro." },
        { icon: <Shield className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />, title: "Exija Garantía:", text: "Una agencia seria siempre respaldará sus vehículos. Una garantía en motor y transmisión es el mínimo indispensable para una compra segura." },
        { icon: <FileText className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />, title: "Verifique Documentación:", text: "Revise la factura original, el historial de tenencias y consulte el estatus del auto en el Registro Público Vehicular (REPUVE)." },
        { icon: <CheckCircle className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />, title: "Realice una Inspección Profesional:", text: "Aun comprando en un lugar de confianza, nunca está de más una revisión por parte de su mecánico personal." }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes (FAQs) para el Comprador Inteligente",
      questions: [
        { q: "¿Cuál es la principal diferencia entre comprar en Seminuevos Baja y en un tianguis?", a: "La diferencia es total: Seminuevos Baja opera en el mercado formal, vende solo autos nacionales de agencia con garantía y respaldo legal. Un tianguis es un mercado informal, con transacciones entre particulares, sin garantías y con mayores riesgos." },
        { q: "¿Los autos de Seminuevos Baja son importados?", a: "No. Todos los autos en Seminuevos Baja son vehículos nacionales vendidos originalmente por agencias en México, lo que asegura su legalidad y facilidad para cualquier trámite futuro." },
        { q: "¿Qué debo verificar legalmente al comprar un auto usado en Baja California?", a: "Es crucial revisar el historial del vehículo en el REPUVE para descartar reportes derobo y verificar que no tenga adeudos. Una agencia formal como Seminuevos Baja realiza estas verificaciones por usted." }
      ]
    }
  };

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{articleContent.metaTitle}</title>
        <meta name="description" content={articleContent.metaDescription} />
        <meta property="og:title" content={articleContent.metaTitle} />
        <meta property="og:description" content={articleContent.metaDescription} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content="Cómo Comprar un Seminuevo en Ensenada: Agencia vs. Tianguis | Seminuevos Baja" />
        <meta name="twitter:description" content="¿Comprar seminuevo en agencia o en tianguis en Ensenada? Comparamos opciones, riesgos y garantías para que tomes la mejor decisión al comprar tu próximo auto." />
        <link rel="canonical" href={`https://seminuevosbaja.com.mx${location.pathname}`} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta property="og:url" content={`https://seminuevosbaja.com.mx${location.pathname}`} />
        <meta property="og:image" content="https://seminuevosbaja.com.mx/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="Seminuevos Baja" />
      </Helmet>

      <div className="bg-brand-blue text-white py-12 md:py-16">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <header className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-6 leading-tight">
              {articleContent.title}
            </h1>
            <div className="w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl mb-6">
              <img className="w-full h-full object-cover" alt="Comprar seminuevo en agencia en Ensenada — comparativa agencia vs tianguis" src="https://images.unsplash.com/photo-1656912988940-8fd625032209" />
            </div>
            <p className="text-lg text-gray-300 font-bold mb-4">
              {articleContent.intro}
            </p>
          </header>

          {articleContent.sections.map((section, index) => (
            <section key={index} className="my-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-400">{section.title}</h2>
              <div className="space-y-4 text-gray-300 font-bold whitespace-pre-wrap">{section.content}</div>
            </section>
          ))}

          <section className="my-12 p-6 bg-gray-900/50 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-amber-400">{articleContent.topModels.title}</h2>
            <p className="text-gray-300 font-bold mb-6">{articleContent.topModels.description}</p>
            <div className="space-y-4">
              {articleContent.topModels.categories.map((cat, index) => (
                <p key={index} className="text-gray-300 font-bold"><strong className="text-white">{cat.name}:</strong> {cat.models}</p>
              ))}
            </div>
          </section>

          <section className="my-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-amber-400">{articleContent.tips.title}</h2>
            <div className="space-y-4">
              {articleContent.tips.points.map((tip, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-900/50 rounded-lg">
                  {tip.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-white">{tip.title}</h3>
                    <p className="text-gray-300 font-bold">{tip.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="my-12 p-6 bg-gray-900/50 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-amber-400">{articleContent.faq.title}</h2>
            <div className="space-y-6">
              {articleContent.faq.questions.map((item, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.q}</h3>
                  <p className="text-gray-300 font-bold">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <footer className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-amber-400">¿Listo para encontrar tu auto ideal?</h2>
            <p className="text-lg text-gray-300 mb-6 font-bold">Explora nuestro inventario de autos nacionales, seleccionados y con garantía. La confianza que buscas está aquí.</p>
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <Button asChild size="lg">
                <Link to="/inventario">Ver autos seminuevos en Ensenada</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-blue">
                <Link to="/contacto">Hablar con un Asesor</Link>
              </Button>
            </div>
          </footer>
        </motion.article>
      </div>
    </>
  );
}