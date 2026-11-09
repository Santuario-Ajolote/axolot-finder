// Base de referencia legal y directorio institucional del ANP de Xochimilco.
// Fuentes verificadas: SEDEMA CDMX, PAOT, PROFEPA, CONAGUA, CONANP, FGJCDMX.

export const ANP = {
  nombre: 'Área Natural Protegida "Ejidos de Xochimilco y San Gregorio Atlapulco" (ANP-EXSGA)',
  categoria: 'Zona Sujeta a Conservación Ecológica · Sistema de Áreas Naturales Protegidas de la Ciudad de México',
  alcaldia: 'Xochimilco, Ciudad de México',
  superficie: '2,522.43 hectáreas (25,224,300 m²)',
  decreto:
    'Decreto de modificación del polígono publicado en la Gaceta Oficial de la Ciudad de México el 8 de diciembre de 2006. Antecedente del polígono original: Diario Oficial de la Federación, 7 y 11 de mayo de 1992.',
  programa: 'Programa de Manejo publicado el 26 de febrero de 2018 (Gaceta Oficial de la Ciudad de México).',
  ramsar:
    'Sitio Ramsar 1363 "Sistema Lacustre Ejidos de Xochimilco y San Gregorio Atlapulco", designado el 2 de febrero de 2004, con 2,657 hectáreas.',
  fuente:
    'SEDEMA CDMX, ficha del área verde "Ejidos de Xochimilco y San Gregorio Atlapulco"; listado oficial de Sitios Ramsar de CONANP.',
};

export const MARCO_LEGAL = [
  {
    grupo: 'Federal',
    instrumentos: [
      { nombre: 'Constitución Política de los Estados Unidos Mexicanos', relevancia: 'Artículo 4º: derecho humano a un medio ambiente sano para el desarrollo y bienestar. Artículo 27: propiedad originaria de la Nación sobre aguas y bienes nacionales.' },
      { nombre: 'Ley General del Equilibrio Ecológico y la Protección al Ambiente (LGEEPA)', relevancia: 'Régimen de áreas naturales protegidas, ordenamiento ecológico, evaluación de impacto ambiental (art. 28 y siguientes) y denuncia popular (arts. 189 a 196).' },
      { nombre: 'Ley General de Vida Silvestre (LGVS)', relevancia: 'Protección de especies en riesgo, prohibición de aprovechamiento sin autorización, manejo de ejemplares y conservación de hábitat.' },
      { nombre: 'NOM-059-SEMARNAT-2010', relevancia: 'Lista de especies en riesgo. El ajolote (Ambystoma mexicanum) está catalogado como especie en peligro de extinción ("P").' },
      { nombre: 'Ley de Aguas Nacionales (LAN)', relevancia: 'Uso y descarga de aguas nacionales, permisos y concesiones, inspección y sanción por parte de CONAGUA.' },
      { nombre: 'NOM-001-SEMARNAT-2021', relevancia: 'Límites máximos permisibles de contaminantes en descargas de aguas residuales a cuerpos receptores nacionales.' },
      { nombre: 'Ley General de Desarrollo Forestal Sustentable (LGDFS)', relevancia: 'Aprovechamiento y cambio de uso de suelo en terrenos forestales; tala no autorizada.' },
      { nombre: 'Ley Federal de Responsabilidad Ambiental', relevancia: 'Obligación de reparar el daño ambiental y acción de responsabilidad ambiental ante tribunales federales.' },
      { nombre: 'Código Penal Federal, Título Vigésimo Quinto', relevancia: 'Delitos contra el ambiente y la gestión ambiental (arts. 414 a 423): ilícitos ambientales, tala, manejo ilegal de residuos peligrosos y de vida silvestre.' },
      { nombre: 'Convención Ramsar', relevancia: 'Tratado internacional del que México es parte; el humedal de Xochimilco está inscrito como sitio de importancia internacional.' },
    ],
  },
  {
    grupo: 'Ciudad de México',
    instrumentos: [
      { nombre: 'Constitución Política de la Ciudad de México', relevancia: 'Derecho a un medio ambiente sano, a la protección del patrimonio biocultural y a la participación ciudadana en decisiones ambientales.' },
      { nombre: 'Ley Ambiental de Protección a la Tierra en la Ciudad de México', relevancia: 'Áreas naturales protegidas locales, evaluación de impacto ambiental local, autorizaciones para obra o actividades dentro de ANP y denuncia ciudadana.' },
      { nombre: 'Ley de Aguas de la Ciudad de México', relevancia: 'Aprovechamiento, descargas y responsabilidades sobre el agua en la ciudad; obligaciones de SACMEX y de particulares.' },
      { nombre: 'Ley de Desarrollo Urbano de la Ciudad de México', relevancia: 'Usos de suelo permitidos, suelo de conservación, licencias y prohibición de fraccionamientos o construcciones fuera de norma.' },
      { nombre: 'Programa General de Ordenamiento Ecológico y Territorial (PGOET)', relevancia: 'Determina aptitud y restricciones del territorio, incluido el suelo de conservación.' },
      { nombre: 'Programa de Manejo del ANP-EXSGA (2018)', relevancia: 'Zonificación, usos permitidos, prohibiciones y acciones de conservación obligatorias para la autoridad del área.' },
      { nombre: 'Código Penal de la Ciudad de México', relevancia: 'Delitos ambientales locales de competencia de la Fiscalía General de Justicia de la Ciudad de México.' },
    ],
  },
];

export const AUTORIDADES = [
  {
    nombre: 'SEDEMA · Dirección General del Sistema de Áreas Naturales Protegidas y Áreas de Valor Ambiental',
    rol: 'Autoridad administradora del ANP',
    competencia:
      'Administra el ANP-EXSGA, aplica el Programa de Manejo, otorga o niega autorizaciones y evalúa el impacto ambiental de obras y actividades dentro del área.',
    contacto: 'Secretaría del Medio Ambiente de la Ciudad de México · av. Tlaxcoaque 8, Centro, Cuauhtémoc',
    url: 'https://sedema.cdmx.gob.mx',
  },
  {
    nombre: 'PAOT · Procuraduría Ambiental y del Ordenamiento Territorial de la CDMX',
    rol: 'Vigilancia y dictamen técnico local',
    competencia:
      'Recibe denuncias por daño a áreas verdes, arbolado, suelo de conservación, descargas de aguas residuales, animales y ruido; emite recomendaciones y dictámenes técnicos a las autoridades.',
    contacto: 'Medellín 202, col. Roma Sur, Cuauhtémoc, CP 06700 · Tel. 55 5265 0780 · L-J 9 a 18 h, V 9 a 15 h',
    url: 'https://paot.org.mx/denunciantes/inicia-tu-denuncia.php',
  },
  {
    nombre: 'PROFEPA · Procuraduría Federal de Protección al Ambiente',
    rol: 'Inspección y sanción federal',
    competencia:
      'Materia federal: vida silvestre (ajolote y otras especies en riesgo), descargas a aguas nacionales, impacto ambiental de obra federal, residuos peligrosos y aprovechamiento forestal.',
    contacto: 'Tel. 800 PROFEPA (800 776 3372) · denuncias@profepa.gob.mx',
    url: 'https://www.gob.mx/profepa/articulos/denuncia-ante-la-profepa',
  },
  {
    nombre: 'CONAGUA · Organismo de Cuenca Aguas del Valle de México',
    rol: 'Autoridad del agua',
    competencia:
      'Permisos de descarga, inspección de vertidos a canales y ríos considerados aguas nacionales, y sanción administrativa.',
    contacto: 'Tel. 55 5174 4000 · Portal PODAN de denuncias de aguas nacionales',
    url: 'https://app.conagua.gob.mx/podan/',
  },
  {
    nombre: 'FGJCDMX · Fiscalía de Investigación en Delitos Ambientales y en Materia de Protección Urbana (FIDAMPU)',
    rol: 'Investigación de delitos',
    competencia:
      'Investiga delitos ambientales del fuero común: daño o deterioro de ecosistemas, tala, contaminación, invasión de área natural protegida y ocupación irregular.',
    contacto: 'Denuncia digital y presencial · Emergencias 911',
    url: 'https://denunciadigital.cdmx.gob.mx/',
  },
  {
    nombre: 'CONANP · Comisión Nacional de Áreas Naturales Protegidas',
    rol: 'Autoridad federal de humedales Ramsar',
    competencia:
      'Coordinación del sitio Ramsar 1363 y del cumplimiento de los compromisos internacionales de conservación del humedal; canaliza con SEMARNAT y PROFEPA.',
    contacto: 'Atención ciudadana en línea',
    url: 'https://www.gob.mx/conanp',
  },
  {
    nombre: 'Alcaldía de Xochimilco · Área de Medio Ambiente',
    rol: 'Autoridad local de proximidad',
    competencia:
      'Residuos, arbolado urbano, comercio en vía pública, obras menores y reportes vecinales dentro de la demarcación; primera instancia para reportes cotidianos.',
    contacto: 'Oficinas de la Alcaldía de Xochimilco',
    url: 'https://xochimilco.cdmx.gob.mx',
  },
  {
    nombre: 'SACMEX · Sistema de Aguas de la Ciudad de México',
    rol: 'Operador del agua y el drenaje',
    competencia: 'Fugas, drenajes colapsados y descargas de la red pública; reporte de emergencias hídricas.',
    contacto: 'Atención ciudadana 55 5658 4000',
    url: 'https://www.sacmex.cdmx.gob.mx',
  },
];

export const CANALES = [
  {
    id: 'paot',
    nombre: 'PAOT · Denuncia en línea',
    ambito: 'Ciudad de México',
    para_que: 'Daño a áreas verdes, arbolado, suelo de conservación, descargas de aguas residuales, construcciones irregulares dentro del ANP.',
    telefono: '55 5265 0780',
    correo: '',
    url: 'https://paot.org.mx/denunciantes/inicia-tu-denuncia.php',
    requisitos: 'Nombre, correo y teléfono; domicilio del denunciante; datos del denunciado si se conocen; descripción de hechos, ubicación y evidencias.',
    fuente: 'paot.org.mx',
  },
  {
    id: 'sedema',
    nombre: 'SEDEMA · Denuncia ambiental',
    ambito: 'Ciudad de México',
    para_que: 'Establecimientos y actividades que contaminan, emisiones, descargas y afectaciones ambientales en la ciudad.',
    telefono: '',
    correo: '',
    url: 'https://sedema.cdmx.gob.mx/servicios/servicio/denuncia-ambiental',
    requisitos: 'Datos de contacto, descripción del hecho, ubicación y evidencia fotográfica.',
    fuente: 'sedema.cdmx.gob.mx',
  },
  {
    id: 'profepa',
    nombre: 'PROFEPA · Denuncia popular',
    ambito: 'Federal',
    para_que: 'Vida silvestre, especies en riesgo, descargas a aguas nacionales, impacto ambiental, residuos peligrosos y tala.',
    telefono: '800 776 3372',
    correo: 'denuncias@profepa.gob.mx',
    url: 'https://www.gob.mx/profepa/articulos/denuncia-ante-la-profepa',
    requisitos: 'Denunciante, denunciado, ubicación de los hechos y descripción con referencias; puedes pedir confidencialidad.',
    fuente: 'gob.mx/profepa',
  },
  {
    id: 'conagua',
    nombre: 'CONAGUA · Portal de Denuncias de Aguas Nacionales (PODAN)',
    ambito: 'Federal',
    para_que: 'Uso irregular del agua, descargas sin permiso y contaminación de canales, ríos y acuíferos.',
    telefono: '55 5174 4000',
    correo: '',
    url: 'https://app.conagua.gob.mx/podan/',
    requisitos: 'Datos de contacto, ubicación exacta del punto de descarga y descripción del vertido.',
    fuente: 'conagua.gob.mx',
  },
  {
    id: 'fgj',
    nombre: 'FGJCDMX · Denuncia digital',
    ambito: 'Ciudad de México',
    para_que: 'Delitos ambientales y de protección urbana que no ponen en riesgo tu integridad física.',
    telefono: '911',
    correo: '',
    url: 'https://denunciadigital.cdmx.gob.mx/',
    requisitos: 'Identificación, narración de hechos, ubicación y evidencias. Para flagrancia o riesgo, llama al 911.',
    fuente: 'fgjcdmx.gob.mx',
  },
  {
    id: 'conanp',
    nombre: 'CONANP · Atención ciudadana',
    ambito: 'Federal',
    para_que: 'Incumplimiento de compromisos del sitio Ramsar y afectaciones al humedal de importancia internacional.',
    telefono: '',
    correo: '',
    url: 'https://www.gob.mx/conanp',
    requisitos: 'Descripción técnica del impacto y ubicación dentro del polígono Ramsar.',
    fuente: 'gob.mx/conanp',
  },
  {
    id: 'alcaldia',
    nombre: 'Alcaldía Xochimilco · Medio Ambiente',
    ambito: 'Local',
    para_que: 'Residuos, poda o tala de arbolado urbano, obras menores y reportes vecinales.',
    telefono: '',
    correo: '',
    url: 'https://xochimilco.cdmx.gob.mx',
    requisitos: 'Narración del hecho, dirección y evidencia.',
    fuente: 'xochimilco.cdmx.gob.mx',
  },
];

export const MAPAS = [
  {
    nombre: 'Polígono del ANP-EXSGA (OpenStreetMap)',
    url: 'https://www.openstreetmap.org/relation/17495765',
    tipo: 'Polígono oficial',
  },
  {
    nombre: 'Observaciones de biodiversidad del ANP (Naturalista)',
    url: 'https://mexico.inaturalist.org/places/xochimilco-y-san-gregorio-atlapulco',
    tipo: 'Biodiversidad',
  },
  {
    nombre: 'Ubicación del ANP en Google Maps',
    url: 'https://www.google.com/maps/search/?api=1&query=Ejidos+de+Xochimilco+y+San+Gregorio+Atlapulco',
    tipo: 'Mapa',
  },
];

export const TIPOS_DENUNCIA = [
  { id: 'descarga', label: 'Descarga de aguas residuales o contaminación del agua', canales: ['conagua', 'profepa', 'paot'] },
  { id: 'construccion', label: 'Construcción, relleno o invasión dentro del ANP', canales: ['paot', 'sedema', 'fgj'] },
  { id: 'tala', label: 'Tala, poda o daño a arbolado y vegetación', canales: ['paot', 'profepa', 'alcaldia'] },
  { id: 'residuos', label: 'Basura, escombro o residuos peligrosos', canales: ['paot', 'profepa', 'alcaldia'] },
  { id: 'fauna', label: 'Daño, captura o comercio de ajolotes y vida silvestre', canales: ['profepa', 'fgj'] },
  { id: 'turismo', label: 'Turismo o actividad comercial irregular en canales', canales: ['paot', 'sedema', 'conagua'] },
];

export function buildContext() {
  const leyes = MARCO_LEGAL.map((g) => `${g.grupo}:\n${g.instrumentos.map((i) => `- ${i.nombre}: ${i.relevancia}`).join('\n')}`).join('\n\n');
  const aut = AUTORIDADES.map((a) => `- ${a.nombre} (${a.rol}). Competencia: ${a.competencia} Contacto: ${a.contacto}. ${a.url}`).join('\n');
  const can = CANALES.map((c) => `- ${c.nombre} [${c.ambito}]. Sirve para: ${c.para_que} Tel: ${c.telefono || 'no publicado'} Correo: ${c.correo || 'no publicado'} Web: ${c.url} Requisitos: ${c.requisitos}`).join('\n');
  return `DATOS DEL ANP\n${ANP.nombre}\nCategoría: ${ANP.categoria}\nSuperficie: ${ANP.superficie}\nDecreto: ${ANP.decreto}\nPrograma: ${ANP.programa}\nRamsar: ${ANP.ramsar}\n\nMARCO LEGAL\n${leyes}\n\nAUTORIDADES RESPONSABLES\n${aut}\n\nCANALES OFICIALES DE DENUNCIA\n${can}`;
}