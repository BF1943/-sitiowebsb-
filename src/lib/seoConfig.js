const DEFAULT_OG_IMAGE =
  'https://images.unsplash.com/photo-1473165816037-490771a08a44?w=1200&q=75&auto=format';

export const seoConfig = {
  home: {
    title: 'Seminuevos Ensenada | Autos Nacionales con Garantía | Seminuevos Baja',
    description:
      'Seminuevos Ensenada con autos nacionales, garantía mecánica y opciones de financiamiento. Compra, vende o consigna tu auto con Seminuevos Baja.',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Autos seminuevos nacionales en Ensenada',
    ogType: 'website',
    canonical: '/',
  },

  inventory: {
    title: 'Autos Seminuevos en Ensenada | Inventario | Seminuevos Baja',
    description:
      'Explora nuestro inventario de autos seminuevos en Ensenada: SUVs, sedanes y pickups nacionales con garantía mecánica, financiamiento y documentación en orden.',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Inventario de autos seminuevos en Ensenada',
    ogType: 'website',
    canonical: '/inventario',
  },

  sellCar: {
    title: 'Vende tu Auto en Ensenada | Avalúo Profesional | Seminuevos Baja',
    description:
      'Vende tu auto en Ensenada con avalúo profesional, revisión ágil y oferta con precio real de mercado. Atención clara y proceso rápido en Seminuevos Baja.',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Servicio para vender tu auto en Ensenada',
    ogType: 'website',
    canonical: '/vender',
  },

  consignCar: {
    title: 'Consigna tu Auto en Ensenada | Mejor Precio | Seminuevos Baja',
    description:
      'Consigna tu auto en Ensenada con mayor exposición, atención profesional y acompañamiento durante la venta. Obtén una mejor oportunidad de precio con Seminuevos Baja.',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Servicio de consignación de autos en Ensenada',
    ogType: 'website',
    canonical: '/consigna',
  },

  consignFromTijuana: {
    title: 'Consigna tu Auto desde Tijuana | Seminuevos Baja',
    description:
      'Si en Tijuana te ofrecen menos de lo esperado, consigna tu auto con Seminuevos Baja y mejora tu oportunidad de venta en Ensenada.',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Consignación de autos desde Tijuana en Ensenada',
    ogType: 'website',
    canonical: '/consigna-desde-tijuana',
  },

  financing: {
    title: 'Financiamiento de Autos en Ensenada | Seminuevos Baja',
    description:
      'Consulta opciones de financiamiento para autos seminuevos en Ensenada. Simula tu crédito, conoce enganches y revisa pagos mensuales con Seminuevos Baja.',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Financiamiento para autos seminuevos en Ensenada',
    ogType: 'website',
    canonical: '/financiamiento',
  },

  earnMoney: {
    title: 'Programa de Referidos | Gana Dinero | Seminuevos Baja',
    description:
      'Gana dinero refiriendo compradores y vendedores de autos en Ensenada con el programa de referidos de Seminuevos Baja.',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Programa de referidos de Seminuevos Baja',
    ogType: 'website',
    canonical: '/gana-dinero',
  },

  about: {
    title: 'Agencia de Autos en Ensenada | Seminuevos Baja',
    description:
      'Conoce Seminuevos Baja, agencia de autos en Ensenada enfocada en compra, venta y consignación de autos nacionales con atención profesional.',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Agencia de autos Seminuevos Baja en Ensenada',
    ogType: 'website',
    canonical: '/quienes-somos',
  },

  blog: {
    title: 'Blog de Autos Seminuevos en Ensenada | Seminuevos Baja',
    description:
      'Lee guías y consejos sobre compra, venta, consignación, financiamiento y seguridad para autos seminuevos en Ensenada y Baja California.',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Blog de autos seminuevos en Ensenada',
    ogType: 'website',
    canonical: '/blog',
  },

  contact: {
    title: 'Contacto | Autos Seminuevos en Ensenada | Seminuevos Baja',
    description:
      'Contáctanos para resolver dudas sobre inventario, financiamiento, compra, venta o consignación de autos en Ensenada.',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Contacto de Seminuevos Baja en Ensenada',
    ogType: 'website',
    canonical: '/contacto',
  },

  terms: {
    title: 'Términos y Condiciones | Seminuevos Baja',
    description:
      'Consulta los términos y condiciones del sitio web y de los servicios de Seminuevos Baja.',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Términos y condiciones de Seminuevos Baja',
    ogType: 'website',
    canonical: '/terminos',
  },

  admin: {
    title: 'Administración | Seminuevos Baja',
    description: 'Área administrativa de Seminuevos Baja.',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Área administrativa de Seminuevos Baja',
    ogType: 'website',
    canonical: '/admin',
    noindex: true,
    nofollow: true,
  },
};

export default seoConfig;