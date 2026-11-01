// ═══════════════════════════════════════════════════════════════
// SEO Configuration — Santuario Ajolote · CIMA A.C.
// Dominios: www.axolotfinder.org · www.santuarioajolote.com
// Plataforma: axolotofinder.base44.app
// ═══════════════════════════════════════════════════════════════

import { GEO_ENTITIES, GEO_SECONDARY_TERMS, GEO_DOMAINS } from '@/lib/geoSemanticMap';

export const PRIMARY_DOMAIN = 'https://axolotfinder.org';
// axolotfinder.org es el dominio canónico principal
export const ALTERNATE_DOMAIN = 'https://axolotfinder.org';

// Palabras clave base — presentes en TODAS las páginas
// Incluye entidades del mapa semántico GEO (prioridad 1 y 2)
const GEO_KEYWORDS_ES = GEO_ENTITIES
  .filter(e => e.prioridad <= 2)
  .map(e => e.entidad)
  .join(', ');
const GEO_KEYWORDS_EN = 'axolotl sanctuary, axolotl rescue, Mexican axolotl, Ambystoma mexicanum, Xochimilco, ecological tourism Xochimilco, axolotl conservation, CIMA A.C., chinampas, wetland, citizen science, bioremediation, biofilter, ecotourism, environmental conservation, biodiversity';

export const BASE_KEYWORDS_ES = `Santuario Ajolote, AxolotFinder, santuario del ajolote, rescate del ajolote, turismo ecológico en Xochimilco, ajolote mexicano, Ambystoma mexicanum, Xochimilco, conservación ajolote, CIMA A.C., ${GEO_KEYWORDS_ES}`;
export const BASE_KEYWORDS_EN = `Santuario Ajolote, AxolotFinder, axolotl sanctuary, axolotl rescue, ecological tourism Xochimilco, Mexican axolotl, Ambystoma mexicanum, Xochimilco conservation, CIMA A.C., ${GEO_KEYWORDS_EN}`;

// ═════ Schema.org — Entidad principal del proyecto ═════
// Santuario Ajolote como Project, relacionado con CIMA A.C. como founder
export const SANTUARIO_AJOLOTE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Project',
  name: 'Santuario Ajolote',
  alternateName: 'AxolotFinder',
  description: 'Santuario Ajolote · Axolot Finder: unimos ciencia, comunidad y turismo comunitario para rescatar al ajolote mexicano (Ambystoma mexicanum) y restaurar su hábitat en Xochimilco. Proyectos científicos, biofiltros, chinampas y conservación del humedal.',
  url: 'https://axolotofinder.base44.app',
  image: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/7c2ee6c6f_Logotipopositivo2.png',
  sameAs: [
    'https://www.wikidata.org/wiki/Q141493672',
    'https://axolotfinder.org/',
    'https://www.santuarioajolote.com',
    'https://www.cimaac.org/',
  ],
  keywords: GEO_ENTITIES.map(e => e.entidad).join(', '),
  knowsAbout: [
    ...new Set([
      ...GEO_ENTITIES.map(e => e.entidad),
      ...GEO_SECONDARY_TERMS,
    ]),
  ].slice(0, 50),
  location: {
    '@type': 'Place',
    name: 'Xochimilco',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Xochimilco',
      addressRegion: 'Ciudad de México',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.2671,
      longitude: -99.1750,
    },
  },
  founder: {
    '@type': 'Organization',
    name: 'Comunidad Independiente de Manejo Ambiental (CIMA A.C.)',
    alternateName: 'CIMA A.C.',
    url: 'https://www.cimaac.org/',
  },
  about: {
    '@type': 'Thing',
    name: 'Ambystoma mexicanum',
    sameAs: 'https://www.wikidata.org/wiki/Q41229',
  },
};

// Geo presets — coordenadas de las zonas clave del proyecto
export const GEO_PRESETS = {
  xochimilco: {
    region: 'MX-CMX',
    placename: 'Xochimilco, Ciudad de México, México',
    position: '19.2671;-99.1750',
    latitude: 19.2671,
    longitude: -99.1750,
  },
  sanGregorio: {
    region: 'MX-CMX',
    placename: 'San Gregorio Atlapulco, Xochimilco, Ciudad de México',
    position: '19.2571;-99.1069',
    latitude: 19.2571,
    longitude: -99.1069,
  },
  coyoacan: {
    region: 'MX-CMX',
    placename: 'Coyoacán, Ciudad de México, México',
    position: '19.3466;-99.1619',
    latitude: 19.3466,
    longitude: -99.1619,
  },
  cdmx: {
    region: 'MX-CMX',
    placename: 'Ciudad de México, México',
    position: '19.4326;-99.1332',
    latitude: 19.4326,
    longitude: -99.1332,
  },
};

// Helper: construir URL canónica para el dominio principal
export const buildCanonical = (path) => `${PRIMARY_DOMAIN}${path}`;
export const buildAlternate = (path) => `${ALTERNATE_DOMAIN}${path}`;

// Helper: combinar keywords base + específicas
const mergeKeywords = (specific, lang = 'es') => {
  const base = lang === 'en' ? BASE_KEYWORDS_EN : BASE_KEYWORDS_ES;
  return specific ? `${specific}, ${base}` : base;
};

// ═════ Configuración por página — bilingüe ES/EN ═════
export const PAGE_SEO = {
  home: {
    path: '/',
    titleEs: 'Santuario Ajolote · Axolot Finder — Ciencia, Turismo Comunitario y Rescate del Ajolote en Xochimilco',
    titleEn: 'Santuario Ajolote · Axolot Finder — Science, Community Tourism and Axolotl Rescue in Xochimilco',
    descEs: 'Santuario Ajolote · Axolot Finder: unimos ciencia, comunidad y turismo comunitario para rescatar al ajolote mexicano (Ambystoma mexicanum) y restaurar su hábitat en Xochimilco. Proyectos científicos, biofiltros, chinampas y conservación del humedal.',
    descEn: 'Santuario Ajolote · Axolot Finder: we unite science, community and community tourism to rescue the Mexican axolotl (Ambystoma mexicanum) and restore its habitat in Xochimilco. Scientific projects, biofilters, chinampas and wetland conservation.',
    keywordsEs: 'Santuario Ajolote, Axolot Finder, rescate del ajolote, ajolote mexicano, Ambystoma mexicanum, Xochimilco, turismo comunitario, turismo ecológico, proyectos científicos, biofiltros, chinampas, conservación ajolote, extinción ajolote, CIMA A.C.',
    keywordsEn: 'Santuario Ajolote, Axolot Finder, axolotl rescue, Mexican axolotl, Ambystoma mexicanum, Xochimilco, community tourism, ecological tourism, scientific projects, biofilters, chinampas, axolotl conservation, CIMA A.C.',
    geo: GEO_PRESETS.xochimilco,
    ogImage: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/7c2ee6c6f_Logotipopositivo2.png',
    schemaType: 'WebSite',
    priority: 1.0,
  },

  quienesSomos: {
    path: '/quienes-somos',
    titleEs: 'Quiénes Somos | Santuario Ajolote · CIMA A.C. — Conservación del Ajolote en Xochimilco',
    titleEn: 'Who We Are | Santuario Ajolote · CIMA A.C. — Axolotl Conservation in Xochimilco',
    descEs: 'CIMA A.C. (Santuario Ajolote): asociación civil mexicana dedicada al rescate del ajolote mexicano y la restauración del humedal de Xochimilco desde 2019. Ciencia, comunidad y defensa legal.',
    descEn: 'CIMA A.C. (Santuario Ajolote): Mexican civil association dedicated to axolotl rescue and Xochimilco wetland restoration since 2019. Science, community and legal defense.',
    keywordsEs: 'CIMA A.C., Santuario Ajolote, santuario del ajolote, conservación del ajolote, Xochimilco, Ambystoma mexicanum, restauración de humedales, bioremediación, chinampas, denuncia ambiental',
    keywordsEn: 'CIMA A.C., axolotl sanctuary, axolotl conservation, Xochimilco, Ambystoma mexicanum, wetland restoration, bioremediation, chinampas, environmental complaints',
    geo: GEO_PRESETS.xochimilco,
    ogImage: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/bdd5a0a28_CIMA_LOGO_f-01.png',
    schemaType: 'NGO',
    priority: 0.9,
  },

  turismoResponsable: {
    path: '/turismo-responsable',
    titleEs: 'Turismo Ecológico en Xochimilco | Santuario Ajolote — Turismo que Rescata al Ajolote',
    titleEn: 'Ecological Tourism in Xochimilco | Santuario Ajolote — Tourism that Rescues the Axolotl',
    descEs: 'Turismo ecológico y comunitario en Xochimilco: trajineras con remo manual, chinampas vivas y rescate del ajolote. 100% sin fines de lucro. Santuario Ajolote · CIMA A.C.',
    descEn: 'Ecological and community tourism in Xochimilco: manual-rowing trajineras, living chinampas and axolotl rescue. 100% non-profit. Santuario Ajolote · CIMA A.C.',
    keywordsEs: 'turismo ecológico en Xochimilco, turismo responsable, trajineras, Santuario Ajolote, rescate del ajolote, chinampas, turismo comunitario, Xochimilco tours, ecoturismo',
    keywordsEn: 'ecological tourism Xochimilco, responsible tourism, trajineras, axolotl sanctuary, axolotl rescue, chinampas, community tourism, Xochimilco tours, ecotourism',
    geo: GEO_PRESETS.xochimilco,
    ogImage: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/7de240820_images.jpg',
    schemaType: 'TouristAttraction',
    priority: 0.9,
  },

  acciones2026: {
    path: '/acciones-2026',
    titleEs: 'Acciones 2026 | Santuario Ajolote — Proyectos de Conservación en Xochimilco',
    titleEn: 'Actions 2026 | Santuario Ajolote — Conservation Projects in Xochimilco',
    descEs: 'Proyectos 2026 del Santuario Ajolote: rescate del hábitat del ajolote, tortuga casquito, chile chicuarote, red de biofiltros y laboratorio de reproducción en Coyoacán.',
    descEn: '2026 projects of Santuario Ajolote: axolotl habitat rescue, casquito turtle, chicuarote chili, biofilter network and reproduction laboratory in Coyoacán.',
    keywordsEs: 'Acciones 2026, Santuario Ajolote, rescate del ajolote, proyectos conservación, Xochimilco, tortuga casquito, chile chicuarote, biofiltros, laboratorio genética',
    keywordsEn: 'Actions 2026, axolotl sanctuary, axolotl rescue, conservation projects, Xochimilco, casquito turtle, chicuarote chili, biofilters, genetics laboratory',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'CollectionPage',
    priority: 0.8,
  },

  rescateChinampas: {
    path: '/proyectos/rescate-7-chinampas',
    titleEs: 'Rescate del Hábitat del Ajolote · 7 Chinampas | Santuario Ajolote — Xochimilco',
    titleEn: 'Axolotl Habitat Rescue · 7 Chinampas | Santuario Ajolote — Xochimilco',
    descEs: 'Restauración hidrológica y recuperación de chinampas en San Gregorio Atlapulco, Xochimilco. Proyecto del Santuario Ajolote para rescatar el hábitat del ajolote mexicano.',
    descEn: 'Hydrological restoration and chinampa recovery in San Gregorio Atlapulco, Xochimilco. Santuario Ajolote project to rescue the Mexican axolotl habitat.',
    keywordsEs: 'rescate del ajolote, chinampas, San Gregorio Atlapulco, Santuario Ajolote, restauración hidrológica, humedal Xochimilco, conservación ajolote',
    keywordsEn: 'axolotl rescue, chinampas, San Gregorio Atlapulco, axolotl sanctuary, hydrological restoration, Xochimilco wetland, axolotl conservation',
    geo: GEO_PRESETS.sanGregorio,
    ogImage: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/165dbce81_canaldelossabinos.jpeg',
    schemaType: 'Project',
    priority: 0.8,
  },

  chileChicuarote: {
    path: '/proyectos/chile-chicuarote',
    titleEs: 'Chile Chicuarote · Rescate Biocultural | Santuario Ajolote — Xochimilco',
    titleEn: 'Chicuarote Chili · Biocultural Rescue | Santuario Ajolote — Xochimilco',
    descEs: 'Rescate del chile chicuarote nativo de Xochimilco: agricultura tradicional, economía circular y conservación biocultural. Un proyecto del Santuario Ajolote · CIMA A.C.',
    descEn: 'Rescue of the native chicuarote chili of Xochimilco: traditional agriculture, circular economy and biocultural conservation. A Santuario Ajolote · CIMA A.C. project.',
    keywordsEs: 'chile chicuarote, Santuario Ajolote, Xochimilco, rescate del ajolote, agricultura tradicional, economía circular, chinampas, semillas nativas',
    keywordsEn: 'chicuarote chili, axolotl sanctuary, Xochimilco, axolotl rescue, traditional agriculture, circular economy, chinampas, native seeds',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'Project',
    priority: 0.7,
  },

  tortugaCasquito: {
    path: '/proyectos/refugio-tortuga-casquito',
    titleEs: 'Refugio Tortuga Casquito | Santuario Ajolote — Conservación en Xochimilco',
    titleEn: 'Casquito Turtle Refuge | Santuario Ajolote — Conservation in Xochimilco',
    descEs: 'Refugio de la tortuga casquito (Kinosternon integrum) en Xochimilco. Investigación, conservación y educación ambiental del Santuario Ajolote · CIMA A.C.',
    descEn: 'Casquito turtle (Kinosternon integrum) refuge in Xochimilco. Research, conservation and environmental education by Santuario Ajolote · CIMA A.C.',
    keywordsEs: 'tortuga casquito, Santuario Ajolote, Xochimilco, conservación, rescate del ajolote, fauna nativa, Kinosternon integrum, refugio tortugas',
    keywordsEn: 'casquito turtle, axolotl sanctuary, Xochimilco, conservation, axolotl rescue, native fauna, Kinosternon integrum, turtle refuge',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'Project',
    priority: 0.7,
  },

  redBiofiltros: {
    path: '/red-de-biofiltros',
    titleEs: 'Red de Biofiltros para Xochimilco | Santuario Ajolote — San Gregorio Atlapulco',
    titleEn: 'Biofilter Network for Xochimilco | Santuario Ajolote — San Gregorio Atlapulco',
    descEs: 'Infraestructura ecológica de bajo costo para restaurar el agua de los canales de Xochimilco: biofiltros, humedales artificiales y estaciones solares en San Gregorio Atlapulco.',
    descEn: 'Low-cost ecological infrastructure to restore Xochimilco canal water: biofilters, artificial wetlands and solar stations in San Gregorio Atlapulco.',
    keywordsEs: 'biofiltros, Santuario Ajolote, rescate del ajolote, San Gregorio Atlapulco, humedales artificiales, energía solar, calidad del agua, Xochimilco',
    keywordsEn: 'biofilters, axolotl sanctuary, axolotl rescue, San Gregorio Atlapulco, artificial wetlands, solar energy, water quality, Xochimilco',
    geo: GEO_PRESETS.sanGregorio,
    schemaType: 'EnvironmentalProject',
    priority: 0.8,
  },

  laboratorioCoyoacan: {
    path: '/proyectos/laboratorio-reproduccion-coyoacan',
    titleEs: 'Laboratorio de Reproducción Genética | Santuario Ajolote — Coyoacán',
    titleEn: 'Genetic Reproduction Laboratory | Santuario Ajolote — Coyoacán',
    descEs: 'Laboratorio de reproducción y conservación genética del ajolote mexicano en Coyoacán. Conecta la ciencia con las cooperativas de Xochimilco. Santuario Ajolote · CIMA A.C.',
    descEn: 'Mexican axolotl reproduction and genetic conservation laboratory in Coyoacán. Connecting science with Xochimilco cooperatives. Santuario Ajolote · CIMA A.C.',
    keywordsEs: 'laboratorio ajolote, reproducción genética, Santuario Ajolote, Coyoacán, rescate del ajolote, conservación genética, Ambystoma mexicanum, CIMA A.C.',
    keywordsEn: 'axolotl laboratory, genetic reproduction, axolotl sanctuary, Coyoacán, axolotl rescue, genetic conservation, Ambystoma mexicanum, CIMA A.C.',
    geo: GEO_PRESETS.coyoacan,
    schemaType: 'Project',
    priority: 0.8,
  },

  ciencia: {
    path: '/science',
    titleEs: 'Ciencia del Ajolote | Santuario Ajolote — Investigación, Genética y Conservación',
    titleEn: 'Axolotl Science | Santuario Ajolote — Research, Genetics and Conservation',
    descEs: 'Ciencia del ajolote mexicano: biología, regeneración, genómica y conservación en Xochimilco. Investigaciones sobre Ambystoma mexicanum. Santuario Ajolote · CIMA A.C.',
    descEn: 'Mexican axolotl science: biology, regeneration, genomics and conservation in Xochimilco. Research on Ambystoma mexicanum. Santuario Ajolote · CIMA A.C.',
    keywordsEs: 'ciencia ajolote, Santuario Ajolote, rescate del ajolote, Ambystoma mexicanum, regeneración, genómica, conservación Xochimilco, biología axolotl',
    keywordsEn: 'axolotl science, axolotl sanctuary, axolotl rescue, Ambystoma mexicanum, regeneration, genomics, Xochimilco conservation, axolotl biology',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'WebApplication',
    priority: 0.8,
  },

  genetica: {
    path: '/genetics',
    titleEs: 'Genética del Ajolote | Santuario Ajolote — Diversidad Genética Ambystoma mexicanum',
    titleEn: 'Axolotl Genetics | Santuario Ajolote — Ambystoma mexicanum Genetic Diversity',
    descEs: 'Base de datos genética del ajolote mexicano para prevenir su extinción. Linajes, diversidad genética y compatibilidad reproductiva. Santuario Ajolote · CIMA A.C.',
    descEn: 'Mexican axolotl genetic database to prevent extinction. Lineages, genetic diversity and reproductive compatibility. Santuario Ajolote · CIMA A.C.',
    keywordsEs: 'genética ajolote, Santuario Ajolote, rescate del ajolote, Ambystoma mexicanum ADN, diversidad genética, linajes, reproducción, conservación genética',
    keywordsEn: 'axolotl genetics, axolotl sanctuary, axolotl rescue, Ambystoma mexicanum DNA, genetic diversity, lineages, reproduction, genetic conservation',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'WebApplication',
    priority: 0.7,
  },

  avistamientos: {
    path: '/sightings',
    titleEs: 'Avistamientos del Ajolote | Santuario Ajolote — Ciencia Ciudadana en Xochimilco',
    titleEn: 'Axolotl Sightings | Santuario Ajolote — Citizen Science in Xochimilco',
    descEs: 'Registra avistamientos del ajolote mexicano en Xochimilco. Cada reporte ayuda al rescate del ajolote. Ciencia ciudadana del Santuario Ajolote · CIMA A.C.',
    descEn: 'Report Mexican axolotl sightings in Xochimilco. Each report helps axolotl rescue. Citizen science by Santuario Ajolote · CIMA A.C.',
    keywordsEs: 'avistamiento ajolote, Santuario Ajolote, rescate del ajolote, ciencia ciudadana, Xochimilco, registro ajolote, Ambystoma mexicanum',
    keywordsEn: 'axolotl sighting, axolotl sanctuary, axolotl rescue, citizen science, Xochimilco, axolotl registry, Ambystoma mexicanum',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'WebApplication',
    priority: 0.7,
  },

  mapa: {
    path: '/map',
    titleEs: 'Mapa del Ajolote en Xochimilco | Santuario Ajolote — Humedal Interactivo',
    titleEn: 'Axolotl Map in Xochimilco | Santuario Ajolote — Interactive Wetland',
    descEs: 'Mapa interactivo del hábitat del ajolote en Xochimilco: avistamientos, zonas de conservación y actores. Santuario Ajolote · CIMA A.C.',
    descEn: 'Interactive map of axolotl habitat in Xochimilco: sightings, conservation zones and actors. Santuario Ajolote · CIMA A.C.',
    keywordsEs: 'mapa ajolote, Santuario Ajolote, rescate del ajolote, Xochimilco, hábitat ajolote, humedal, zonas conservación, Ambystoma mexicanum',
    keywordsEn: 'axolotl map, axolotl sanctuary, axolotl rescue, Xochimilco, axolotl habitat, wetland, conservation zones, Ambystoma mexicanum',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'WebApplication',
    priority: 0.7,
  },

  ajoloteSilvestre: {
    path: '/wild-sightings',
    titleEs: 'Ajolote Silvestre en Xochimilco | Santuario Ajolote — Ver Ajolote en su Hábitat',
    titleEn: 'Wild Axolotl in Xochimilco | Santuario Ajolote — See the Axolotl in its Habitat',
    descEs: '¿Viste un ajolote silvestre en Xochimilco? Reporta tu avistamiento y contribuye al rescate del ajolote mexicano. Santuario Ajolote · CIMA A.C.',
    descEn: 'Did you see a wild axolotl in Xochimilco? Report your sighting and contribute to Mexican axolotl rescue. Santuario Ajolote · CIMA A.C.',
    keywordsEs: 'ajolote silvestre, Santuario Ajolote, rescate del ajolote, Xochimilco, avistamiento, canales, Ambystoma mexicanum, hábitat natural',
    keywordsEn: 'wild axolotl, axolotl sanctuary, axolotl rescue, Xochimilco, sighting, canals, Ambystoma mexicanum, natural habitat',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'WebApplication',
    priority: 0.7,
  },

  foro: {
    path: '/forum',
    titleEs: 'Comunidad Santuario Ajolote | Foro de Conservación del Ajolote en Xochimilco',
    titleEn: 'Santuario Ajolote Community | Axolotl Conservation Forum in Xochimilco',
    descEs: 'Únete a la comunidad del Santuario Ajolote: foro de debate, ciencia ciudadana y colaboración para el rescate del ajolote mexicano en Xochimilco.',
    descEn: 'Join the Santuario Ajolote community: discussion forum, citizen science and collaboration for Mexican axolotl rescue in Xochimilco.',
    keywordsEs: 'foro ajolote, Santuario Ajolote, rescate del ajolote, comunidad, Xochimilco, ciencia ciudadana, conservación, Ambystoma mexicanum',
    keywordsEn: 'axolotl forum, axolotl sanctuary, axolotl rescue, community, Xochimilco, citizen science, conservation, Ambystoma mexicanum',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'WebApplication',
    priority: 0.6,
  },

  reporteIncidencia: {
    path: '/reporte-incidencia',
    titleEs: 'Reporta una Incidencia Ambiental | Santuario Ajolote — Denuncia en Xochimilco',
    titleEn: 'Report an Environmental Incident | Santuario Ajolote — Report in Xochimilco',
    descEs: 'Reporta contaminación, derrames o daño ambiental en Xochimilco. El Santuario Ajolote canaliza tu denuncia a las autoridades competentes. CIMA A.C.',
    descEn: 'Report pollution, spills or environmental damage in Xochimilco. Santuario Ajolote channels your complaint to the authorities. CIMA A.C.',
    keywordsEs: 'denuncia ambiental, Santuario Ajolote, rescate del ajolote, contaminación Xochimilco, reporte incidencia, daño ambiental, PROF EPA, CIMA A.C.',
    keywordsEn: 'environmental complaint, axolotl sanctuary, axolotl rescue, Xochimilco pollution, incident report, environmental damage, PROFEPA, CIMA A.C.',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'WebApplication',
    priority: 0.7,
  },

  denunciaSanGregorio: {
    path: '/denuncia-contaminacion-san-gregorio',
    titleEs: 'Denuncia Contaminación San Gregorio | Santuario Ajolote — Xochimilco',
    titleEn: 'San Gregorio Pollution Complaint | Santuario Ajolote — Xochimilco',
    descEs: 'Denuncia ciudadana por contaminación en San Gregorio Atlapulco, Xochimilco. El Santuario Ajolote documenta y da seguimiento legal a cada reporte.',
    descEn: 'Citizen complaint for pollution in San Gregorio Atlapulco, Xochimilco. Santuario Ajolote documents and legally follows up on each report.',
    keywordsEs: 'denuncia contaminación, Santuario Ajolote, rescate del ajolote, San Gregorio Atlapulco, Xochimilco, contaminación canales, daño ambiental',
    keywordsEn: 'pollution complaint, axolotl sanctuary, axolotl rescue, San Gregorio Atlapulco, Xochimilco, canal pollution, environmental damage',
    geo: GEO_PRESETS.sanGregorio,
    schemaType: 'WebPage',
    priority: 0.7,
  },

  reportajeDrenajes: {
    path: '/reportaje-drenajes',
    titleEs: 'Reportaje Drenajes y Contaminación | Santuario Ajolote — Investigación Xochimilco',
    titleEn: 'Drainage and Pollution Report | Santuario Ajolote — Xochimilco Investigation',
    descEs: 'Investigación del Santuario Ajolote sobre drenajes, descargas ilegales y contaminación en el humedal de Xochimilco. Datos, mapas y denuncias.',
    descEn: 'Santuario Ajolote investigation on drainage, illegal discharges and pollution in the Xochimilco wetland. Data, maps and complaints.',
    keywordsEs: 'drenajes Xochimilco, Santuario Ajolote, rescate del ajolote, contaminación humedal, descargas ilegales, investigación ambiental, canales',
    keywordsEn: 'Xochimilco drainage, axolotl sanctuary, axolotl rescue, wetland pollution, illegal discharges, environmental investigation, canals',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'Article',
    priority: 0.8,
  },

  zonaSacrificio: {
    path: '/zona-de-sacrificio',
    titleEs: 'Zona de Sacrificio | Santuario Ajolote — Ecología de la Injusticia en Xochimilco',
    titleEn: 'Sacrifice Zone | Santuario Ajolote — Ecology of Injustice in Xochimilco',
    descEs: 'Investigación especial del Santuario Ajolote sobre la ecología de la injusticia ambiental en Xochimilco y su impacto en el ajolote mexicano.',
    descEn: 'Santuario Ajolote special investigation on the ecology of environmental injustice in Xochimilco and its impact on the Mexican axolotl.',
    keywordsEs: 'zona de sacrificio, Santuario Ajolote, rescate del ajolote, injusticia ambiental, Xochimilco, ecología, contaminación, impacto social',
    keywordsEn: 'sacrifice zone, axolotl sanctuary, axolotl rescue, environmental injustice, Xochimilco, ecology, pollution, social impact',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'Article',
    priority: 0.7,
  },

  actores: {
    path: '/actores',
    titleEs: 'Actores Ambientales en Xochimilco | Santuario Ajolote — Mapa de Agentes',
    titleEn: 'Environmental Actors in Xochimilco | Santuario Ajolote — Agents Map',
    descEs: 'Directorio de actores ambientales en Xochimilco: quienes protegen y quienes dañan el hábitat del ajolote. Santuario Ajolote · CIMA A.C.',
    descEn: 'Directory of environmental actors in Xochimilco: who protects and who damages the axolotl habitat. Santuario Ajolote · CIMA A.C.',
    keywordsEs: 'actores ambientales, Santuario Ajolote, rescate del ajolote, Xochimilco, agentes conservación, denuncia ambiental, mapa actores',
    keywordsEn: 'environmental actors, axolotl sanctuary, axolotl rescue, Xochimilco, conservation agents, environmental complaint, actors map',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'WebPage',
    priority: 0.6,
  },

  santuarioAjolote: {
    path: '/santuario-ajolote',
    titleEs: 'Santuario Ajolote · CIMA A.C. — Rescate del Ajolote Mexicano en Xochimilco',
    titleEn: 'Santuario Ajolote · CIMA A.C. — Mexican Axolotl Rescue in Xochimilco',
    descEs: 'El Santuario Ajolote es la iniciativa de CIMA A.C. para rescatar al ajolote mexicano (Ambystoma mexicanum) y restaurar su hábitat en Xochimilco. Dona y participa.',
    descEn: 'Santuario Ajolote is CIMA A.C.\'s initiative to rescue the Mexican axolotl (Ambystoma mexicanum) and restore its habitat in Xochimilco. Donate and participate.',
    keywordsEs: 'Santuario Ajolote, CIMA A.C., rescate del ajolote, donar ajolote, conservación, Xochimilco, Ambystoma mexicanum, voluntariado',
    keywordsEn: 'Santuario Ajolote, CIMA A.C., axolotl rescue, donate axolotl, conservation, Xochimilco, Ambystoma mexicanum, volunteering',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'NGO',
    priority: 0.9,
  },

  voluntariado: {
    path: '/voluntariado',
    titleEs: 'Voluntariado Santuario Ajolote | Rescate del Ajolote en Xochimilco',
    titleEn: 'Santuario Ajolote Volunteering | Axolotl Rescue in Xochimilco',
    descEs: 'Únete al voluntariado del Santuario Ajolote: brigadas presenciales y unidades remotas para el rescate del ajolote y la restauración de Xochimilco.',
    descEn: 'Join the Santuario Ajolote volunteering: on-site brigades and remote units for axolotl rescue and Xochimilco restoration.',
    keywordsEs: 'voluntariado, Santuario Ajolote, rescate del ajolote, brigadas, Xochimilco, conservación, voluntarios, CIMA A.C., medio ambiente',
    keywordsEn: 'volunteering, axolotl sanctuary, axolotl rescue, brigades, Xochimilco, conservation, volunteers, CIMA A.C., environment',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'WebPage',
    priority: 0.7,
  },

  voluntariadoRemoto: {
    path: '/voluntariado/remoto',
    titleEs: 'Voluntariado Remoto | Santuario Ajolote — Unidad de Operaciones Especiales',
    titleEn: 'Remote Volunteering | Santuario Ajolote — Special Operations Unit',
    descEs: 'Voluntariado remoto del Santuario Ajolote: unidad de operaciones especiales para apoyar el rescate del ajolote desde cualquier lugar del mundo.',
    descEn: 'Remote volunteering at Santuario Ajolote: special operations unit to support axolotl rescue from anywhere in the world.',
    keywordsEs: 'voluntariado remoto, Santuario Ajolote, rescate del ajolote, operaciones especiales, voluntariado virtual, Xochimilco, CIMA A.C.',
    keywordsEn: 'remote volunteering, axolotl sanctuary, axolotl rescue, special operations, virtual volunteering, Xochimilco, CIMA A.C.',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'WebPage',
    priority: 0.6,
  },

  voluntariadoBrigadas: {
    path: '/voluntariado/brigadas',
    titleEs: 'Brigadas de Conservación | Santuario Ajolote — Voluntariado Presencial',
    titleEn: 'Conservation Brigades | Santuario Ajolote — On-site Volunteering',
    descEs: 'Brigadas presenciales del Santuario Ajolote en Xochimilco: restauración de chinampas, monitoreo del ajolote y trabajo de campo con la comunidad.',
    descEn: 'On-site brigades of Santuario Ajolote in Xochimilco: chinampa restoration, axolotl monitoring and fieldwork with the community.',
    keywordsEs: 'brigadas, Santuario Ajolote, rescate del ajolote, voluntariado presencial, Xochimilco, restauración chinampas, trabajo de campo',
    keywordsEn: 'brigades, axolotl sanctuary, axolotl rescue, on-site volunteering, Xochimilco, chinampa restoration, fieldwork',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'WebPage',
    priority: 0.6,
  },

  historiaXochimilco: {
    path: '/historia-xochimilco',
    titleEs: 'Historia de Xochimilco | Santuario Ajolote — Patrimonio, Chinampas y Ajolote',
    titleEn: 'History of Xochimilco | Santuario Ajolote — Heritage, Chinampas and Axolotl',
    descEs: 'Historia de Xochimilco: patrimonio UNESCO, chinampas prehispánicas y el ajolote mexicano. Archivo histórico del Santuario Ajolote · CIMA A.C.',
    descEn: 'History of Xochimilco: UNESCO heritage, pre-Hispanic chinampas and the Mexican axolotl. Historical archive of Santuario Ajolote · CIMA A.C.',
    keywordsEs: 'historia Xochimilco, Santuario Ajolote, rescate del ajolote, chinampas prehispánicas, patrimonio UNESCO, archivo histórico, ajolote',
    keywordsEn: 'Xochimilco history, axolotl sanctuary, axolotl rescue, pre-Hispanic chinampas, UNESCO heritage, historical archive, axolotl',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'Article',
    priority: 0.6,
  },

  chinampasVirtuales: {
    path: '/chinampas',
    titleEs: 'Chinampas Virtuales | Santuario Ajolote — Adopción de Parcelas en Xochimilco',
    titleEn: 'Virtual Chinampas | Santuario Ajolote — Parcel Adoption in Xochimilco',
    descEs: 'Adopta una parcela virtual de chinampa en Xochimilco y financia el rescate del hábitat del ajolote. Economía circular y conservación. Santuario Ajolote.',
    descEn: 'Adopt a virtual chinampa parcel in Xochimilco and fund axolotl habitat rescue. Circular economy and conservation. Santuario Ajolote.',
    keywordsEs: 'chinampas virtuales, Santuario Ajolote, rescate del ajolote, parcelas, Xochimilco, adopción, economía circular, conservación',
    keywordsEn: 'virtual chinampas, axolotl sanctuary, axolotl rescue, parcels, Xochimilco, adoption, circular economy, conservation',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'WebApplication',
    priority: 0.6,
  },

  galeriaUsuario: {
    path: '/mi-galeria',
    titleEs: 'Mi Galería | Santuario Ajolote — Mis Coleccionables del Ajolote',
    titleEn: 'My Gallery | Santuario Ajolote — My Axolotl Collectibles',
    descEs: 'Tu galería personal de coleccionables digitales del ajolote mexicano. Santuario Ajolote · CIMA A.C.',
    descEn: 'Your personal gallery of Mexican axolotl digital collectibles. Santuario Ajolote · CIMA A.C.',
    keywordsEs: 'galería, Santuario Ajolote, rescate del ajolote, coleccionables, ajolote mexicano, CIMA A.C.',
    keywordsEn: 'gallery, axolotl sanctuary, axolotl rescue, collectibles, Mexican axolotl, CIMA A.C.',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'WebPage',
    priority: 0.4,
  },

  perfilUsuario: {
    path: '/profile',
    titleEs: 'Mi Perfil | Santuario Ajolote — Ciudadano Científico del Ajolote',
    titleEn: 'My Profile | Santuario Ajolote — Axolotl Citizen Scientist',
    descEs: 'Tu perfil en el Santuario Ajolote: avistamientos, reportes, ajolopesos y contribuciones al rescate del ajolote mexicano.',
    descEn: 'Your profile at Santuario Ajolote: sightings, reports, axolopesos and contributions to Mexican axolotl rescue.',
    keywordsEs: 'perfil usuario, Santuario Ajolote, rescate del ajolote, ciudadano científico, ajolopesos, avistamientos, conservación',
    keywordsEn: 'user profile, axolotl sanctuary, axolotl rescue, citizen scientist, axolopesos, sightings, conservation',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'WebPage',
    priority: 0.4,
  },

  infografiaAI: {
    path: '/infografia-ai',
    titleEs: 'Infografías con IA | Santuario Ajolote — Ciencia del Ajolote en Xochimilco',
    titleEn: 'AI Infographics | Santuario Ajolote — Axolotl Science in Xochimilco',
    descEs: 'Infografías generadas con IA sobre el ajolote mexicano, su hábitat y conservación en Xochimilco. Santuario Ajolote · CIMA A.C.',
    descEn: 'AI-generated infographics about the Mexican axolotl, its habitat and conservation in Xochimilco. Santuario Ajolote · CIMA A.C.',
    keywordsEs: 'infografías IA, Santuario Ajolote, rescate del ajolote, inteligencia artificial, ciencia, Xochimilco, Ambystoma mexicanum, conservación',
    keywordsEn: 'AI infographics, axolotl sanctuary, axolotl rescue, artificial intelligence, science, Xochimilco, Ambystoma mexicanum, conservation',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'WebApplication',
    priority: 0.5,
  },

  videoGaleria: {
    path: '/video-galeria',
    titleEs: 'Videoteca | Santuario Ajolote — Videos del Ajolote y Xochimilco',
    titleEn: 'Video Library | Santuario Ajolote — Axolotl and Xochimilco Videos',
    descEs: 'Videoteca del Santuario Ajolote: documentales, investigaciones y videos del ajolote mexicano y su hábitat en Xochimilco.',
    descEn: 'Santuario Ajolote video library: documentaries, research and videos of the Mexican axolotl and its habitat in Xochimilco.',
    keywordsEs: 'videoteca, Santuario Ajolote, rescate del ajolote, videos, documentales, Xochimilco, Ambystoma mexicanum, conservación',
    keywordsEn: 'video library, axolotl sanctuary, axolotl rescue, videos, documentaries, Xochimilco, Ambystoma mexicanum, conservation',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'WebPage',
    priority: 0.5,
  },

  moderacion: {
    path: '/moderation',
    titleEs: 'Panel de Moderación | Santuario Ajolote — Administración',
    titleEn: 'Moderation Panel | Santuario Ajolote — Administration',
    descEs: 'Panel de moderación del Santuario Ajolote: verificación de avistamientos, reportes y contenido comunitario. CIMA A.C.',
    descEn: 'Santuario Ajolote moderation panel: verification of sightings, reports and community content. CIMA A.C.',
    keywordsEs: 'moderación, Santuario Ajolote, rescate del ajolote, panel administración, verificación, CIMA A.C.',
    keywordsEn: 'moderation, axolotl sanctuary, axolotl rescue, admin panel, verification, CIMA A.C.',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'WebPage',
    priority: 0.3,
  },

  reporteExtraordinarioAtenco: {
    path: '/reporte-extraordinario-atenco',
    titleEs: 'Reporte Técnico Extraordinario · Mortandad de Peces y Fauna Silvestre | Santuario Ajolote',
    titleEn: 'Extraordinary Technical Report · Fish and Wildlife Mortality | Santuario Ajolote',
    descEs: 'Informe preliminar de investigación ambiental, ecotoxicología y vigilancia ciudadana. Alteraciones fisicoquímicas del agua y posible relación con eventos de mortandad de peces y fauna silvestre en San Gregorio Atlapulco, Xochimilco. 30 de octubre de 2026. Santuario Ajolote A.C. y CIMA A.C.',
    descEn: 'Preliminary environmental research, ecotoxicology and citizen monitoring report. Physicochemical water alterations and possible relationship with fish and wildlife mortality events in San Gregorio Atlapulco, Xochimilco. October 30, 2026. Santuario Ajolote A.C. and CIMA A.C.',
    keywordsEs: 'mortandad de peces, San Gregorio Atlapulco, Xochimilco, drenaje Atenco, contaminación agua, anoxia, cloro residual, ecotoxicología, bromo, pH alcalino, gallareta, tilapia, ciencia ciudadana, Santuario Ajolote, CIMA A.C., PROFEPA, PAOT, Área Natural Protegida, ANP Xochimilco, monitoreo ambiental, salud pública, sulfuro de hidrógeno, amoniaco, oxidantes residuales, Ambystoma mexicanum, ajolote mexicano',
    keywordsEn: 'fish mortality, San Gregorio Atlapulco, Xochimilco, Atenco drainage, water pollution, anoxia, residual chlorine, ecotoxicology, bromine, alkaline pH, gallareta, tilapia, citizen science, Santuario Ajolote, CIMA A.C., PROFEPA, PAOT, Natural Protected Area, Xochimilco ANP, environmental monitoring, public health, hydrogen sulfide, ammonia, residual oxidants, Ambystoma mexicanum, Mexican axolotl',
    geo: GEO_PRESETS.sanGregorio,
    ogImage: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/078e2e2f5_aguasnegrasatenco.jpg',
    schemaType: 'ScholarlyArticle',
    priority: 0.95,
  },

  observatorioCempasuchil: {
    path: '/observatorio-cempasuchil',
    titleEs: 'Observatorio Cempasúchil: Biopiratería, Toxicología y Soberanía Genética | Santuario Ajolote',
    titleEn: 'Cempasúchil Observatory: Biopiracy, Toxicology and Genetic Sovereignty | Santuario Ajolote',
    descEs: 'Investigación científica sobre cempasúchil en Xochimilco: biopiratería, patentes, híbridos F1, toxicología ambiental, ecotoxicología y efectos sobre el ajolote mexicano (Ambystoma mexicanum). Plaguicidas, fungicidas, eutrofización y conservación del humedal. Día de Muertos 2026.',
    descEn: 'Scientific research on cempasúchil in Xochimilco: biopiracy, patents, F1 hybrids, environmental toxicology, ecotoxicology and effects on the Mexican axolotl (Ambystoma mexicanum). Pesticides, fungicides, eutrophication and wetland conservation. Day of the Dead 2026.',
    keywordsEs: 'cempasúchil, biopiratería, Tagetes erecta, Xochimilco, Día de Muertos, patentes, híbridos F1, semillas, agroquímicos, humedal, soberanía genética, chinampas, San Gregorio Atlapulco, toxicología ambiental, ecotoxicología, ajolote, Ambystoma mexicanum, plaguicidas, fungicidas, clorpirifos, malatión, organoclorados, eutrofización, salud pública, residuos químicos, conservación del ajolote',
    keywordsEn: 'cempasúchil, biopiracy, Tagetes erecta, Xochimilco, Day of the Dead, patents, F1 hybrids, seeds, agrochemicals, wetland, genetic sovereignty, chinampas, San Gregorio Atlapulco, environmental toxicology, ecotoxicology, axolotl, Ambystoma mexicanum, pesticides, fungicides, chlorpyrifos, malathion, organochlorines, eutrophication, public health, chemical residues, axolotl conservation',
    geo: GEO_PRESETS.sanGregorio,
    ogImage: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/daadc9032_Cempaschilbajoescrutinioeditorial.png',
    schemaType: 'ScholarlyArticle',
    priority: 0.9,
  },

  planManejoANP: {
    path: '/anp',
    titleEs: 'Plan de Manejo ANP Xochimilco | Santuario Ajolote — Cumplimiento Legal y Fallas Institucionales',
    titleEn: 'ANP Management Plan Xochimilco | Santuario Ajolote — Legal Compliance and Institutional Failures',
    descEs: 'Análisis del Plan de Manejo del Área Natural Protegida de Xochimilco: fallas del Estado, malas prácticas turísticas, tabla comparativa Plan vs. Realidad, marco legal y denuncias de CIMA A.C.',
    descEn: 'Analysis of the Xochimilco Natural Protected Area Management Plan: state failures, bad tourism practices, Plan vs. Reality comparative table, legal framework and CIMA A.C. complaints.',
    keywordsEs: 'Plan de Manejo ANP Xochimilco, Área Natural Protegida, CONANP, LGEEPA, NOM-059, CIMA A.C., conservación ajolote, fallas institucionales, Santuario Ajolote',
    keywordsEn: 'ANP Management Plan Xochimilco, Natural Protected Area, CONANP, LGEEPA, NOM-059, CIMA A.C., axolotl conservation, institutional failures, Santuario Ajolote',
    geo: GEO_PRESETS.xochimilco,
    ogImage: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/7c2ee6c6f_Logotipopositivo2.png',
    schemaType: 'Article',
    priority: 0.9,
  },

  proyectoDetalle: {
    path: '/proyectos/:slug',
    titleEs: 'Proyecto | Santuario Ajolote — Conservación del Ajolote en Xochimilco',
    titleEn: 'Project | Santuario Ajolote — Axolotl Conservation in Xochimilco',
    descEs: 'Proyecto de conservación del Santuario Ajolote para el rescate del ajolote mexicano y la restauración del hábitat en Xochimilco.',
    descEn: 'Santuario Ajolote conservation project for Mexican axolotl rescue and habitat restoration in Xochimilco.',
    keywordsEs: 'proyecto, Santuario Ajolote, rescate del ajolote, conservación, Xochimilco, Ambystoma mexicanum, CIMA A.C.',
    keywordsEn: 'project, axolotl sanctuary, axolotl rescue, conservation, Xochimilco, Ambystoma mexicanum, CIMA A.C.',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'Project',
    priority: 0.5,
  },

  specimenProfile: {
    path: '/genetics/:id',
    titleEs: 'Especimen de Ajolote | Santuario Ajolote — Registro Genético',
    titleEn: 'Axolotl Specimen | Santuario Ajolote — Genetic Record',
    descEs: 'Registro genético de especimen de ajolote mexicano (Ambystoma mexicanum). Linaje, diversidad genética y estado de salud. Santuario Ajolote.',
    descEn: 'Mexican axolotl (Ambystoma mexicanum) specimen genetic record. Lineage, genetic diversity and health status. Santuario Ajolote.',
    keywordsEs: 'especimen ajolote, Santuario Ajolote, rescate del ajolote, registro genético, Ambystoma mexicanum, linaje, genética',
    keywordsEn: 'axolotl specimen, axolotl sanctuary, axolotl rescue, genetic record, Ambystoma mexicanum, lineage, genetics',
    geo: GEO_PRESETS.xochimilco,
    schemaType: 'WebPage',
    priority: 0.4,
  },

  // ═══ Aliases — compatible con nombres usados en los componentes de página ═══
  userGallery: undefined, // placeholder, resolved below
  chinampas: undefined,
  userProfile: undefined,
  moderationPanel: undefined,
};

// Resolver aliases a configuración existente
PAGE_SEO.userGallery = PAGE_SEO.galeriaUsuario;
PAGE_SEO.chinampas = PAGE_SEO.chinampasVirtuales;
PAGE_SEO.userProfile = PAGE_SEO.perfilUsuario;
PAGE_SEO.moderationPanel = PAGE_SEO.moderacion;

// Helper: obtener SEO completo para una página
export const getPageSeo = (pageKey, lang = 'es') => {
  const config = PAGE_SEO[pageKey];
  if (!config) return null;

  const isEs = lang === 'es';
  const title = isEs ? config.titleEs : config.titleEn;
  const description = isEs ? config.descEs : config.descEn;
  const keywords = mergeKeywords(isEs ? config.keywordsEs : config.keywordsEn, lang);
  const canonical = buildCanonical(config.path);
  const alternateCanonical = buildAlternate(config.path);
  const ogImage = config.ogImage || 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/7c2ee6c6f_Logotipopositivo2.png';

  const geo = config.geo ? {
    region: config.geo.region,
    placename: config.geo.placename,
    position: config.geo.position,
  } : null;

  // Schema.org con contexto geolocalizado — @graph combina la entidad
  // principal (Santuario Ajolote) con el schema específico de cada página
  let schema = null;
  if (config.schemaType) {
    schema = {
      '@context': 'https://schema.org',
      '@graph': [
        SANTUARIO_AJOLOTE_SCHEMA,
        {
          '@type': config.schemaType,
          name: title,
          description,
          url: canonical,
          image: ogImage,
          ...(config.geo && {
            geo: {
              '@type': 'GeoCoordinates',
              latitude: config.geo.latitude,
              longitude: config.geo.longitude,
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: config.geo.placename.split(',')[0],
              addressRegion: 'Ciudad de México',
              addressCountry: 'MX',
            },
          }),
          provider: {
            '@type': 'Organization',
            name: 'Santuario Ajolote · CIMA A.C.',
            url: PRIMARY_DOMAIN,
            logo: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/7c2ee6c6f_Logotipopositivo2.png',
          },
        },
      ],
    };
  }

  return {
    title,
    description,
    keywords,
    canonical,
    alternateCanonical,
    ogImage,
    ogType: config.schemaType === 'Article' ? 'article' : 'website',
    lang,
    geo,
    schema,
  };
};

// Legacy: mantener compatibilidad con nombres antiguos de seoConfig
export const seoConfig = {
  home: { title: PAGE_SEO.home.titleEs, description: PAGE_SEO.home.descEs, keywords: PAGE_SEO.home.keywordsEs, ogImage: PAGE_SEO.home.ogImage, canonical: buildCanonical('/'), schemaType: PAGE_SEO.home.schemaType, priority: PAGE_SEO.home.priority },
  map: { title: PAGE_SEO.mapa.titleEs, description: PAGE_SEO.mapa.descEs, keywords: PAGE_SEO.mapa.keywordsEs, ogImage: PAGE_SEO.mapa.ogImage, canonical: buildCanonical('/map'), schemaType: PAGE_SEO.mapa.schemaType },
  sightings: { title: PAGE_SEO.avistamientos.titleEs, description: PAGE_SEO.avistamientos.descEs, keywords: PAGE_SEO.avistamientos.keywordsEs, ogImage: PAGE_SEO.avistamientos.ogImage, canonical: buildCanonical('/sightings'), schemaType: PAGE_SEO.avistamientos.schemaType },
  genetics: { title: PAGE_SEO.genetica.titleEs, description: PAGE_SEO.genetica.descEs, keywords: PAGE_SEO.genetica.keywordsEs, ogImage: PAGE_SEO.genetica.ogImage, canonical: buildCanonical('/genetics'), schemaType: PAGE_SEO.genetica.schemaType },
  projects: { title: PAGE_SEO.acciones2026.titleEs, description: PAGE_SEO.acciones2026.descEs, keywords: PAGE_SEO.acciones2026.keywordsEs, ogImage: PAGE_SEO.acciones2026.ogImage, canonical: buildCanonical('/acciones-2026'), schemaType: PAGE_SEO.acciones2026.schemaType },
  science: { title: PAGE_SEO.ciencia.titleEs, description: PAGE_SEO.ciencia.descEs, keywords: PAGE_SEO.ciencia.keywordsEs, ogImage: PAGE_SEO.ciencia.ogImage, canonical: buildCanonical('/science'), schemaType: PAGE_SEO.ciencia.schemaType },
  forum: { title: PAGE_SEO.foro.titleEs, description: PAGE_SEO.foro.descEs, keywords: PAGE_SEO.foro.keywordsEs, ogImage: PAGE_SEO.foro.ogImage, canonical: buildCanonical('/forum'), schemaType: PAGE_SEO.foro.schemaType },
  wildSightings: { title: PAGE_SEO.ajoloteSilvestre.titleEs, description: PAGE_SEO.ajoloteSilvestre.descEs, keywords: PAGE_SEO.ajoloteSilvestre.keywordsEs, ogImage: PAGE_SEO.ajoloteSilvestre.ogImage, canonical: buildCanonical('/wild-sightings'), schemaType: PAGE_SEO.ajoloteSilvestre.schemaType },
};

// Schema helpers
export const createSchema = (type, data) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type
  };
  return { ...baseSchema, ...data };
};

export const donationSchema = {
  '@context': 'https://schema.org',
  '@type': 'DonateAction',
  'name': 'Dona para salvar al ajolote mexicano — Santuario Ajolote',
  'description': 'Apoya la conservación del ajolote mexicano (Ambystoma mexicanum) y la protección del humedal de Xochimilco, CDMX. Santuario Ajolote · CIMA A.C.',
  'target': {
    '@type': 'EntryPoint',
    'urlTemplate': `${PRIMARY_DOMAIN}/santuario-ajolote`,
    'actionPlatform': ['DesktopWebPlatform', 'MobileWebPlatform']
  },
  'potentialAction': {
    '@type': 'TradeAction',
    'priceCurrency': 'USD',
    'price': 'variable'
  }
};

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': items.map((item, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'name': item.name,
    'item': item.url
  }))
});