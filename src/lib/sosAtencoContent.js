const V = 'https://base44.app/api/apps/6a0001949163ade945a0c48b/files/mp/public/6a0001949163ade945a0c48b/';

export const SOS_PATH = '/sos-atenco';
export const SOS_URL = 'https://axolotfinder.org/sos-atenco';
export const EARTH_URL = 'https://earth.google.com/earth/d/1FC-ANf7IX0GATJaHPZltl_yLzF9gt4qs?usp=sharing';

export const VIDEOS = [
  { n: 1, src: V + '48d0768b1_WhatsAppVideo2026-11-20at133203.mp4' },
  { n: 2, src: V + '03a8aaaf2_WhatsAppVideo2026-11-20at133208.mp4' },
  { n: 3, src: V + 'f3ddf10b4_WhatsAppVideo2026-11-20at133213.mp4' },
  { n: 4, src: V + '0b3deac36_WhatsAppVideo2026-11-20at133214.mp4' },
  { n: 5, src: V + '271bbeb8a_WhatsAppVideo2026-11-20at133218.mp4' },
  { n: 6, src: V + 'b9fac5c75_5d63ea611_WhatsAppVideo2026-11-20at1746561.mp4' },
  { n: 7, src: V + '0d4ea6021_b946ea2b0_WhatsAppVideo2026-11-20at174657.mp4' },
  { n: 8, src: V + '944807961_319a49f6e_WhatsAppVideo2026-11-20at1746572.mp4' },
];

const IMG = {
  extend: V + '2e0f7971c_2a3a883ae_asiseextiendelacontamiancion.JPG',
  corredor: V + '5c5c9c981_bf9f0b516_extencioncontamianda.JPG',
};

export const READINGS = [
  { k: 'O₂', es: 'Oxígeno disuelto', en: 'Dissolved oxygen', v: '0', bad: true },
  { k: 'pH', es: 'pH', en: 'pH', v: '9', bad: true },
  { k: 'ALK', es: 'Alcalinidad', en: 'Alkalinity', v: 'MAX', bad: true },
  { k: 'Br', es: 'Bromo', en: 'Bromine', v: 'MAX', bad: true },
  { k: 'NO₂', es: 'Nitritos', en: 'Nitrites', v: 'MAX', bad: true },
  { k: 'NO₃', es: 'Nitratos', en: 'Nitrates', v: 'MAX', bad: true },
];

const es = {
  seoTitle: 'SOS Atenco: oxígeno cero y riesgo para los últimos ajolotes de Xochimilco | La Voz del Humedal',
  seoDesc: 'Reportaje especial: oxígeno disuelto en cero y pH 9 en los canales de Atenco, San Gregorio Atlapulco. Peces muertos y riesgo para los últimos ajolotes silvestres de Xochimilco.',
  alert: 'ALERTA AMBIENTAL · CONTINGENCIA EN CURSO',
  headline: 'SOS ATENCO',
  sub: 'Oxígeno en CERO en todos los puntos medidos. Peces muertos. ¿Y si esta agua alcanza a los últimos ajolotes de Xochimilco?',
  chips: ['O₂ = 0', 'pH 9', 'PECES MUERTOS', 'RIESGO DE EXTINCIÓN LOCAL'],
  cta: 'Leer el reportaje SOS',
  place: 'San Gregorio Atlapulco, Xochimilco · 20 de noviembre de 2026',
  byline: 'Por Redacción La Voz del Humedal',
  report: 'REPORTAJE ESPECIAL',
  videosTitle: 'Evidencia en video del 20 de noviembre',
  videosNote: 'Videos de campo sin audio, tomados por el equipo de Santuario Ajolote A.C. y CIMA A.C.',
  readingsTitle: 'Lecturas del recorrido del 20 de noviembre (puntos 1 a 5)',
  readingsNote: 'MAX = extremo de la escala de la tira reactiva; no permite saber cuánto más alta podría ser la lectura. El cero de oxígeno corresponde al parte general de todo el recorrido.',
  zoneTitle: 'Así se extiende la contaminación',
  zoneExtentLabel: 'Extensión del corredor muestreado',
  zoneExtent: '3 km aproximados',
  zoneExtentNote: 'Según el reporte de CIMA A.C., el muestreo exploratorio cubrió un corredor aproximado de 3 kilómetros, desde el Canal Nacional hacia el bordo próximo a la Laguna de San Gregorio Atlapulco, con los sectores agrícolas y cuerpos de agua de los parajes La Espejera, Tlamelaqui/Tlamelaca, Zacapa y Axoyopan.',
  zoneImagesNote: 'Imágenes demostrativas del recorrido: la red de canales y las siete estaciones de monitoreo del 20 de noviembre, marcadas a mano sobre la fotografía satelital. No son un levantamiento topográfico.',
  zoneImages: [
    {
      src: IMG.extend,
      caption: 'La red de canales recorrida, con las siete estaciones de monitoreo del 20 de noviembre y el embarcadero de Cuacontle al norte.',
    },
    {
      src: IMG.corredor,
      caption: 'Vista amplia: el corredor va del embarcadero de Atenco hacia los ramales de San Gregorio Atlapulco y San Luis Tlaxialtemalco.',
    },
  ],
  mapBtn: 'Ver el proyecto original en Google Earth',
  earthUrl: EARTH_URL,
  sourcesTitle: 'De dónde viene la información',
  sources: [
    'La Jornada · Aguas negras en San Luis Tlaxialtemalco, agosto de 2024',
    'La Jornada · Reclamo por obras inconclusas, junio de 2024',
    'La Jornada · Zanjas secas en San Gregorio, febrero de 2025',
    'Publimetro · Recorrido con productores, junio de 2024',
    'PAOT · Expediente 2010-0201-SPA-124, San Luis Tlaxialtemalco',
    'El Heraldo de México · Protesta por el Colector Actopan, diciembre de 2022',
    'La Razón · Reclamos de abasto de los pueblos, octubre de 2024',
    'El País · Entrevista a Luis Zambrano, mayo de 2026',
    'Grupo Animal · Resultados preliminares y ADN ambiental en Xochimilco',
    'UNAM Global · Estimaciones históricas del ajolote en Xochimilco',
    'Gaceta Oficial · Programa de Manejo de los Ejidos de Xochimilco y San Gregorio',
  ],
  sourcesNote: 'La reconstrucción de octubre y noviembre procede de los partes de Santuario Ajolote A.C. y CIMA A.C. Al cierre, el expediente no incluía un dictamen oficial sobre el episodio del 20 de noviembre. Ningún registro documenta un ajolote muerto.',
  related: 'Datos del monitoreo 2024–2026',
  related2: 'Reporte extraordinario del 30 de octubre',
  back: 'Volver a La Voz del Humedal',
  sections: [
    { kicker: 'SOS', title: '¿Y si esta agua alcanza a los últimos ajolotes de Xochimilco?', paras: [
      'Primero aparecieron los peces muertos. Después, el 30 de octubre, un instrumento marcó cero de oxígeno disuelto cerca del embarcadero de Atenco. Hoy, tres semanas después, el equipo de Santuario Ajolote A.C. y CIMA A.C. volvió a medir. Cambió de punto y obtuvo el mismo resultado. Según su parte de campo, el cero se repitió en todas las estaciones visitadas.',
      'Para las familias de San Gregorio Atlapulco, ese canal tiene orillas, entradas de agua y vecinos capaces de decir cuándo empezó a oler distinto. Para un ajolote que todavía viviera en un ramal conectado, la pregunta sería cuánto espacio le queda para sobrevivir si el agua en esas condiciones llega hasta allí.',
      'Éste es el SOS de Atenco. Si el episodio se prolonga o alcanza uno de los refugios que aún sostienen vida silvestre, podría matar a algunos de los últimos ajolotes de Xochimilco. Ningún registro presentado para este reportaje documenta un ajolote muerto. La urgencia consiste precisamente en llegar a tiempo para averiguar qué está pasando mientras todavía sea posible protegerlos.',
    ] },
    { kicker: 'LA SEÑAL DE OCTUBRE', title: 'El agua cambiaba durante dos o tres días', paras: [
      'En el entorno del embarcadero, integrantes del proyecto situaron las primeras observaciones de mortandad de esta serie principalmente entre el 9 y el 30 de octubre. Describieron peces que, por su aspecto, parecían tilapias adultas. También registraron un ave acuática identificada a simple vista como gallareta. El expediente carece de un conteo completo de peces y de un examen veterinario del ave.',
      'Quienes dieron aviso distinguían los episodios por el aspecto y por el olor. El agua se veía por momentos blanquecina, verdosa o café. Reportaron olor a materia en descomposición y, en ocasiones, a azufre. Al cabo de dos o tres días las señales podían desaparecer y luego volver. Una inspección cuando el agua ya se aclaró puede dejar sin registrar lo que las familias vieron durante días.',
      'El 30 de octubre se hicieron cuatro muestreos en el entorno de Atenco. El reporte extraordinario consignó pH 9 y oxígeno disuelto en cero. En las tiras, el bromo llegó a 20, el cloro libre y el total a 10 y la dureza total a 425, todos en el extremo de sus escalas. Sin verificar unidades, método y escala, convertirlos en concentraciones exactas daría una precisión que el registro no tiene.',
    ] },
    { kicker: 'DOS AÑOS DE MONITOREO', title: 'Lo que ya se sabía antes de encontrar los peces', paras: [
      'En septiembre de 2024, el equipo comunitario ya comparaba el agua que llegaba por el exterior de un sistema de biofiltros con la que encontraba dentro. La red histórica tenía cuatro estaciones. Entre septiembre de 2024 y septiembre de 2026 se hicieron nueve jornadas.',
      'En los primeros cinco puntos del 20 de noviembre, el equipo dictó el mismo conjunto de lecturas: oxígeno disuelto en cero, pH 9 y alcalinidad, bromo, nitritos y nitratos en el máximo de la escala; también presencia de hierro y de ácido cianúrico. En los puntos 6 y 7 dejó de observar las señales de ácido cianúrico y de un indicador dictado como «flor». Entre el quinto y el sexto hay un lugar concreto al que volver con los chinamperos.',
    ] },
    { kicker: 'EL AJOLOTE SILVESTRE', title: 'Todavía había una señal de vida', paras: [
      'En mayo de 2026, el ecólogo Luis Zambrano, del Instituto de Biología de la UNAM, explicó a El País que seguían existiendo ajolotes silvestres en Xochimilco, probablemente menos que en 2014. Una fase preliminar de la investigación detectó ADN ambiental de ajolote aun sin capturar ejemplares.',
      'La UNAM ha divulgado dos estimaciones históricas: unos 6,000 ajolotes por kilómetro cuadrado en 1998 y alrededor de 35 en 2014. Nadie puede convertirlas en un conteo del embarcadero en noviembre de 2026, pero explican por qué perder incluso un pequeño refugio podría tener consecuencias desproporcionadas.',
      'Podríamos estar presenciando una etapa de la desaparición del ajolote en vida silvestre. Afirmar hoy la extinción total de la especie borraría el dato más valioso que tenemos para actuar: todavía se han encontrado señales de vida en Xochimilco. La pregunta para la autoridad es qué hará con esa oportunidad.',
    ] },
    { kicker: 'LAS EXIGENCIAS DE ATENCO', title: 'Qué deben poder saber las familias al terminar la inspección', paras: [
      'Santuario Ajolote A.C. y CIMA A.C. solicitan que el Gobierno de la Ciudad de México y la Alcaldía Xochimilco coordinen hoy una inspección con las autoridades ambientales y del agua.',
      '¿Qué está entrando al canal? Recorrer las coladeras a cielo abierto señaladas por la comunidad, identificar quién las opera y tomar muestras en la salida y a ambos lados. La regla 30 del programa de manejo prohíbe verter aguas residuales dentro del área protegida.',
      '¿Hasta dónde llega y qué queda expuesto? Medir de nuevo el oxígeno con equipo independiente y a distintas horas, publicar el mapa por tramo y revisar los ramales que alimentan parcelas y refugios.',
      '¿Quién responderá? Entregar folio, dependencia responsable, resultados con fecha y método y calendario de seguimiento, y hacer públicos los resultados en los pueblos.',
      'Si uno de los últimos ajolotes silvestres de Xochimilco depende de un ramal conectado con Atenco, su suerte puede decidirse antes de que alguien vuelva a verlo. Ésa es la razón para acudir ahora.',
    ] },
  ],
};

const en = {
  ...es,
  seoTitle: 'SOS Atenco: zero oxygen and risk to the last axolotls of Xochimilco | La Voz del Humedal',
  seoDesc: 'Special report: dissolved oxygen at zero and pH 9 in the Atenco canals, San Gregorio Atlapulco. Dead fish and risk to the last wild axolotls of Xochimilco.',
  alert: 'ENVIRONMENTAL ALERT · ONGOING EMERGENCY',
  sub: 'Oxygen at ZERO at every point measured. Dead fish. What if this water reaches the last axolotls of Xochimilco?',
  chips: ['O₂ = 0', 'pH 9', 'DEAD FISH', 'LOCAL EXTINCTION RISK'],
  cta: 'Read the SOS report',
  place: 'San Gregorio Atlapulco, Xochimilco · November 20, 2026',
  byline: 'By La Voz del Humedal Newsroom',
  report: 'SPECIAL REPORT',
  videosTitle: 'Video evidence from November 20',
  videosNote: 'Field videos without audio, recorded by Santuario Ajolote A.C. and CIMA A.C.',
  readingsTitle: 'Readings from the November 20 survey (points 1 to 5)',
  readingsNote: 'MAX = top of the test-strip scale; it cannot show how much higher the real value is. The zero oxygen reading applies to the whole survey.',
  zoneTitle: 'How far the contamination extends',
  zoneExtentLabel: 'Length of the surveyed corridor',
  zoneExtent: 'About 3 km',
  zoneExtentNote: 'According to the CIMA A.C. report, the exploratory survey covered a corridor of roughly 3 kilometres, from the Canal Nacional toward the bank next to the San Gregorio Atlapulco lagoon, including the farmed areas and water bodies of the La Espejera, Tlamelaqui/Tlamelaca, Zacapa and Axoyopan parajes.',
  zoneImagesNote: 'Illustrative images of the survey: the canal network and the seven monitoring stations of November 20, marked by hand on the satellite photo. They are not a topographic survey.',
  zoneImages: [
    {
      src: IMG.extend,
      caption: 'The canal network surveyed, with the seven monitoring stations of November 20 and the Cuacontle pier to the north.',
    },
    {
      src: IMG.corredor,
      caption: 'Wider view: the corridor runs from the Atenco pier toward the branches of San Gregorio Atlapulco and San Luis Tlaxialtemalco.',
    },
  ],
  mapBtn: 'Open the original project in Google Earth',
  earthUrl: EARTH_URL,
  sourcesTitle: 'Where the information comes from',
  sourcesNote: 'The October and November reconstruction comes from field reports by Santuario Ajolote A.C. and CIMA A.C. At press time there was no official ruling on the November 20 episode. No record documents a dead axolotl.',
  related: 'Monitoring data 2024–2026',
  related2: 'Extraordinary report of October 30',
  back: 'Back to La Voz del Humedal',
  sections: [
    { kicker: 'SOS', title: 'What if this water reaches the last axolotls of Xochimilco?', paras: [
      'First came the dead fish. Then, on October 30, an instrument read zero dissolved oxygen near the Atenco pier. Three weeks later, the Santuario Ajolote A.C. and CIMA A.C. team measured again, at different points, and got the same result. According to their field report, zero was repeated at every station visited.',
      'This is the SOS of Atenco. If the episode persists or reaches one of the refuges that still sustain wild life, it could kill some of the last axolotls of Xochimilco. No record presented for this report documents a dead axolotl. The urgency lies in arriving in time to find out what is happening while protection is still possible.',
    ] },
    { kicker: 'THE OCTOBER SIGNAL', title: 'The water changed for two or three days at a time', paras: [
      'Between October 9 and 30, residents recorded dead fish that looked like adult tilapia and a coot. Water looked whitish, greenish or brown, with a smell of decay and sometimes sulfur. Signs vanished after two or three days and then returned, so an inspection after the water clears can miss what families saw.',
      'On October 30, four samplings in the Atenco area recorded pH 9 and dissolved oxygen at zero; test strips reached the top of their scales. Without verifying units and method, converting them to exact concentrations would be false precision.',
    ] },
    { kicker: 'TWO YEARS OF MONITORING', title: 'What was already known before the fish were found', paras: [
      'Between September 2024 and September 2026 the community team held nine monitoring days across a four-station network. On November 20, the first five points showed the same readings: zero oxygen, pH 9, and alkalinity, bromine, nitrites and nitrates at the top of the scale, plus iron and cyanuric acid. Between points 5 and 6 there is a concrete place to return to with the chinampa farmers.',
    ] },
    { kicker: 'THE WILD AXOLOTL', title: 'There was still a sign of life', paras: [
      'In May 2026, ecologist Luis Zambrano (UNAM) told El País that wild axolotls still exist in Xochimilco, probably fewer than in 2014. Preliminary work detected axolotl environmental DNA. UNAM estimates cite about 6,000 per km² in 1998 and about 35 in 2014.',
      'We may be witnessing a stage in the disappearance of the wild axolotl. Declaring total extinction today would erase the most valuable fact we have: signs of life still exist in Xochimilco. The question for the authorities is what they will do with that opportunity.',
    ] },
    { kicker: 'THE DEMANDS OF ATENCO', title: 'What families must be able to know after the inspection', paras: [
      'Santuario Ajolote A.C. and CIMA A.C. ask Mexico City’s government and the Xochimilco borough to coordinate an inspection today with environmental and water authorities: trace what enters the canal from open drains, re-measure oxygen with independent equipment at different hours, publish a stretch-by-stretch map, and deliver a case number, responsible agency, dated results and a follow-up schedule.',
      'If one of the last wild axolotls depends on a branch connected to Atenco, its fate may be decided before anyone sees it again. That is the reason to act now.',
    ] },
  ],
};

export const getSos = (lang) => (lang === 'es' ? es : en);