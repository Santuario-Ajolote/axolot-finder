// Reporte Técnico Extraordinario — 30 de octubre de 2026
// Alteraciones fisicoquímicas del agua y posible relación con eventos de mortandad de peces y fauna silvestre
// San Gregorio Atlapulco, Xochimilco · Santuario Ajolote A.C. y CIMA A.C.

export const VIDEOS = [
  {
    url: 'https://media.base44.com/videos/public/6a0001949163ade945a0c48b/3d2b384d1_WhatsAppVideo2026-10-30at205825.mp4',
    titulo: 'Canal de Atenco — Coloración y olor alterado',
    titulo_en: 'Atenco Canal — Altered color and odor',
    desc: 'Registro del estado del agua con coloración blanquecina, verdosa y café. Olores intensos a descomposición orgánica.',
    desc_en: 'Record of water state with whitish, greenish and brown coloration. Intense odors of organic decomposition.',
  },
  {
    url: 'https://media.base44.com/videos/public/6a0001949163ade945a0c48b/6e1f629e9_WhatsAppVideo2026-10-31at115105.mp4',
    titulo: 'Embarcadero de Atenco — Mortandad de peces',
    titulo_en: 'Atenco Dock — Fish mortality',
    desc: 'Ejemplares muertos observados en canales del entorno del embarcadero de Atenco, aparentemente tilapias adultas.',
    desc_en: 'Dead specimens observed in canals around the Atenco dock, apparently adult tilapias.',
  },
  {
    url: 'https://media.base44.com/videos/public/6a0001949163ade945a0c48b/eb1061e84_WhatsAppVideo2026-10-31at115107.mp4',
    titulo: 'Fauna silvestre afectada — Ave acuática',
    titulo_en: 'Affected wildlife — Aquatic bird',
    desc: 'Ave acuática muerta identificada visualmente como gallareta. Requiere investigación veterinaria independiente.',
    desc_en: 'Dead aquatic bird visually identified as gallareta. Requires independent veterinary investigation.',
  },
  {
    url: 'https://media.base44.com/videos/public/6a0001949163ade945a0c48b/1cf98957d_WhatsAppVideo2026-10-31at115327.mp4',
    titulo: 'Muestreo extraordinario — Tiras colorimétricas',
    titulo_en: 'Extraordinary sampling — Colorimetric strips',
    desc: 'Cuatro muestreos en distintos puntos del embarcadero de Atenco. Todos con resultados máximos de escala.',
    desc_en: 'Four samplings at different points of the Atenco dock. All with maximum scale results.',
  },
  {
    url: 'https://media.base44.com/videos/public/6a0001949163ade945a0c48b/06da478c0_WhatsAppVideo2026-10-31at115326.mp4',
    titulo: 'Alteración intermitente del agua',
    titulo_en: 'Intermittent water alteration',
    desc: 'Episodios de alteración que persisten dos o tres días, seguidos de desaparición temporal y nuevos episodios.',
    desc_en: 'Alteration episodes persisting two or three days, followed by temporary disappearance and new episodes.',
  },
  {
    url: 'https://media.base44.com/videos/public/6a0001949163ade945a0c48b/e754c29db_WhatsAppVideo2026-10-31at115331.mp4',
    titulo: 'Estado crítico del canal — Llamado institucional',
    titulo_en: 'Critical canal state — Institutional call',
    desc: 'Evidencia visual del deterioro severo de la calidad del agua que requiere respuesta institucional inmediata.',
    desc_en: 'Visual evidence of severe water quality deterioration requiring immediate institutional response.',
  },
];

export const PARAMETROS_MUESTREO = [
  { parametro: 'Bromo', parametro_en: 'Bromine', resultado: '20 (máx. escala)', interpretacion: 'Respuesta oxidante elevada', interpretacion_en: 'Elevated oxidant response' },
  { parametro: 'Cloro libre', parametro_en: 'Free chlorine', resultado: '10 (máx. escala)', interpretacion: 'Posible oxidante residual', interpretacion_en: 'Possible residual oxidant' },
  { parametro: 'Cloro total', parametro_en: 'Total chlorine', resultado: '10 (máx. escala)', interpretacion: 'Posible oxidante residual', interpretacion_en: 'Possible residual oxidant' },
  { parametro: 'Dureza total', parametro_en: 'Total hardness', resultado: '425 (máx. escala)', interpretacion: 'Agua muy dura; constante', interpretacion_en: 'Very hard water; constant' },
  { parametro: 'pH', parametro_en: 'pH', resultado: '9', interpretacion: 'Condición alcalina, potencialmente estresante', interpretacion_en: 'Alkaline condition, potentially stressful' },
  { parametro: 'Oxígeno disuelto', parametro_en: 'Dissolved oxygen', resultado: '0', interpretacion: 'Posible anoxia aguda', interpretacion_en: 'Possible acute anoxia' },
];

export const OBSERVACIONES_AMBIENTALES = [
  { es: 'Coloración blanquecina, verdosa y café del agua, con variaciones entre episodios.', en: 'Whitish, greenish and brown water coloration, with variations between episodes.' },
  { es: 'Olores sumamente intensos a descomposición orgánica, materia podrida y compuestos de olor sulfuroso.', en: 'Extremely intense odors of organic decomposition, rotting matter and sulfur-odor compounds.' },
  { es: 'Episodios de alteración aparente que persisten aproximadamente dos o tres días.', en: 'Apparent alteration episodes persisting approximately two or three days.' },
  { es: 'Desaparición temporal de las manifestaciones visibles y olfativas, seguida de nuevos episodios.', en: 'Temporary disappearance of visible and olfactory manifestations, followed by new episodes.' },
  { es: 'Presencia de peces muertos coincidente con el periodo de alteraciones.', en: 'Presence of dead fish coinciding with the period of alterations.' },
];

export const MEDIDAS_PRECAUTORIAS = [
  { es: 'Evitar el contacto directo innecesario con el agua visiblemente alterada.', en: 'Avoid unnecessary direct contact with visibly altered water.' },
  { es: 'Mantener alejados a niños, mascotas y animales domésticos de los sitios con peces muertos, espuma o coloración anormal.', en: 'Keep children, pets and domestic animals away from sites with dead fish, foam or abnormal coloration.' },
  { es: 'No consumir ni comercializar peces encontrados muertos ni utilizar esos ejemplares como alimento animal.', en: 'Do not consume or commercialize dead fish or use these specimens as animal feed.' },
  { es: 'Recomendar a las personas que pescan en la zona abstenerse precautoriamente de consumir peces capturados en el sector afectado.', en: 'Recommend that people who fish in the area precautionarily abstain from consuming fish caught in the affected sector.' },
  { es: 'Utilizar protección personal adecuada durante trabajos esenciales en el canal.', en: 'Use adequate personal protection during essential work in the canal.' },
  { es: 'Evitar manipular aves muertas, lodos sospechosos o descargas desconocidas.', en: 'Avoid handling dead birds, suspicious sludge or unknown discharges.' },
  { es: 'Solicitar a las autoridades una evaluación del agua utilizada en actividades agrícolas del área afectada.', en: 'Request authorities to evaluate water used in agricultural activities in the affected area.' },
];

export const HIPOTESIS_MECANISMOS = [
  { num: 1, titulo: 'Hipoxia o anoxia', titulo_en: 'Hypoxia or anoxia', desc: 'Privación de oxígeno suficiente para causar muerte directa.', desc_en: 'Oxygen deprivation sufficient to cause direct death.' },
  { num: 2, titulo: 'Oxidantes residuales', titulo_en: 'Residual oxidants', desc: 'Posible lesión branquial y alteración fisiológica si se confirma la presencia de cloro u otras sustancias oxidantes.', desc_en: 'Possible gill injury and physiological alteration if presence of chlorine or other oxidizing substances is confirmed.' },
  { num: 3, titulo: 'Amoniaco y sulfuros', titulo_en: 'Ammonia and sulfides', desc: 'Posible toxicidad secundaria asociada a alcalinidad y degradación anaerobia.', desc_en: 'Possible secondary toxicity associated with alkalinity and anaerobic degradation.' },
  { num: 4, titulo: 'Proliferaciones algales o microbianas', titulo_en: 'Algal or microbial blooms', desc: 'Posibles cambios en coloración, oxígeno y liberación de sustancias nocivas.', desc_en: 'Possible changes in coloration, oxygen and release of harmful substances.' },
];

export const SECCIONES_REPORTE = [
  { num: 1, id: 'antecedentes', titulo: 'Antecedentes de la investigación', titulo_en: 'Research background' },
  { num: 2, id: 'evento-mortandad', titulo: 'Descripción del evento de mortandad', titulo_en: 'Mortality event description' },
  { num: 3, id: 'muestreo', titulo: 'Muestreo extraordinario del 30 de octubre de 2026', titulo_en: 'Extraordinary sampling of October 30, 2026' },
  { num: 4, id: 'ecotoxicologia', titulo: 'Evaluación ecotoxicológica', titulo_en: 'Ecotoxicological evaluation' },
  { num: 5, id: 'comparacion', titulo: 'Comparación con el monitoreo histórico', titulo_en: 'Comparison with historical monitoring' },
  { num: 6, id: 'hipotesis', titulo: 'Hipótesis integradora del evento', titulo_en: 'Integrating hypothesis of the event' },
  { num: 7, id: 'salud-publica', titulo: 'Posible riesgo de salud pública', titulo_en: 'Possible public health risk' },
  { num: 8, id: 'medidas', titulo: 'Medidas precautorias recomendadas', titulo_en: 'Recommended precautionary measures' },
  { num: 9, id: 'conclusion', titulo: 'Conclusión científica', titulo_en: 'Scientific conclusion' },
  { num: 10, id: 'llamado', titulo: 'Llamado institucional', titulo_en: 'Institutional call' },
  { num: 11, id: 'videos', titulo: 'Evidencia en video', titulo_en: 'Video evidence' },
];