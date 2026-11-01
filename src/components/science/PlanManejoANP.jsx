import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AlertTriangle, ChevronDown, ChevronUp, Scale, Landmark, FileX,
  Droplets, Fish, Building2, FlaskConical, Users, MapPin, ExternalLink,
  Waves, Music, Trash2, Car, Anchor, Home, Beer, Bike, Camera, Zap,
  Download, Gavel
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import DenunciasCIMA from './DenunciasCIMA';

// ─────────────────────────────────────────────
// DATOS
// ─────────────────────────────────────────────

const FALLAS_GOBIERNO = [
  {
    icon: FileX, color: 'bg-red-100 text-red-700',
    title: 'Incumplimiento del Plan de Manejo ANP',
    description: 'El Área Natural Protegida de Xochimilco cuenta con un Plan de Manejo oficialmente aprobado desde 2006 (actualizado en 2019). Sin embargo, la mayoría de sus disposiciones permanecen sin ejecutarse. Los programas de zonificación, restauración de chinampas y control de caudales establecidos en el Plan no se han implementado sistemáticamente.',
    ley: 'LGEEPA Art. 65 – Ley General del Equilibrio Ecológico y la Protección al Ambiente',
  },
  {
    icon: Droplets, color: 'bg-blue-100 text-blue-700',
    title: 'Contaminación no controlada de los canales',
    description: 'El Plan de Manejo establece obligaciones explícitas de saneamiento hídrico. Los canales de Xochimilco continúan recibiendo descargas de aguas residuales sin tratamiento, residuos domésticos y escorrentías urbanas cargadas de nitrógeno, fósforo y metales pesados. La CONAGUA y la SEDEMA tienen competencia legal para actuar, pero las acciones han sido mínimas y discontinuas.',
    ley: 'NOM-001-SEMARNAT-2021 – Límites de contaminantes en descargas a aguas nacionales',
  },
  {
    icon: Fish, color: 'bg-orange-100 text-orange-700',
    title: 'Control fallido de especies invasoras',
    description: 'La tilapia (Oreochromis niloticus) y la carpa (Cyprinus carpio) fueron introducidas con apoyo de programas gubernamentales de la década de 1970–1990. Ambas especies depredan huevos y larvas de ajolote, y compiten directamente por alimento. A pesar de reconocerse como amenaza crítica en el Plan de Manejo, no existe un programa de erradicación efectivo y financiado.',
    ley: 'Plan de Manejo ANP Xochimilco 2019 – Subprograma de Manejo y Restauración',
  },
  {
    icon: Building2, color: 'bg-yellow-100 text-yellow-700',
    title: 'Expansión urbana e invasión de la ANP',
    description: 'La mancha urbana de la CDMX ha avanzado sobre los límites del ANP durante décadas. Asentamientos irregulares, infraestructura turística no regulada y agricultura intensiva fragmentan los humedales. La PAOT registra violaciones sistemáticas al ordenamiento sin que deriven en sanciones efectivas.',
    ley: 'LGEEPA Art. 45 Bis – Protección de Áreas Naturales Protegidas',
  },
  {
    icon: FlaskConical, color: 'bg-purple-100 text-purple-700',
    title: 'Ausencia de monitoreo científico oficial',
    description: 'El Plan de Manejo obliga al gobierno a financiar monitoreo biológico periódico de las poblaciones silvestres. Los únicos censos disponibles los realizan investigadores de la UNAM con recursos propios. El INECC y CONANP no publican datos actualizados y verificables de densidad poblacional.',
    ley: 'Plan de Manejo ANP Xochimilco 2019 – Subprograma de Monitoreo Biológico',
  },
  {
    icon: Scale, color: 'bg-red-100 text-red-700',
    title: 'Falta de aplicación de la NOM-059',
    description: 'Ambystoma mexicanum está catalogado como "En Peligro de Extinción (P)" en la NOM-059-SEMARNAT-2010. Esta norma obliga a implementar medidas de protección especial, planes de recuperación de especies y restauración del hábitat. Ninguno de estos mecanismos ha sido activado plenamente para el ajolote silvestre.',
    ley: 'NOM-059-SEMARNAT-2010 – Protección ambiental, especies nativas en riesgo',
  },
];

const EVIDENCIA_COLAPSO = [
  { año: '1998', densidad: '6,000 ajolotes/km²', fuente: 'Contreras et al.' },
  { año: '2004', densidad: '1,000 ajolotes/km²', fuente: 'Contreras et al.' },
  { año: '2008', densidad: '100 ajolotes/km²', fuente: 'Ficetola et al.' },
  { año: '2014', densidad: '35 ajolotes/km²', fuente: 'Zambrano et al.' },
  { año: '2019–2023', densidad: '2 avistamientos / 595 entrevistas', fuente: 'CIMA A.C. — Censo Poblacional', cima: true },
  { año: '2024–2025', densidad: 'Captura: 0 | eDNA: Presente', fuente: 'UNAM — Censo con ADN ambiental', edna: true },
];

// Actividades turísticas/ilegales categorizadas
const MALAS_PRACTICAS = [
  {
    categoria: 'Contaminación Acústica y Residuos',
    color: 'border-orange-300 bg-orange-50',
    headerColor: 'bg-orange-100 text-orange-800',
    icon: Music,
    actividades: [
      {
        icon: Music,
        titulo: 'Trajineras con música a alto volumen',
        descripcion: 'Las trajineras operan con bocinas de alto impacto sonoro durante todo el día. El ruido sobre el agua penetra en el sustrato del canal y altera el comportamiento de reproducción, alimentación y desplazamiento del ajolote. Los estudios sobre contaminación acústica acuática demuestran que frecuencias >85 dB afectan la conducta de anfibios.',
        impacto: 'Perturbación conductual, huida de zonas de reproducción',
        ley: 'NOM-081-SEMARNAT – Límites máximos permisibles de ruido ambiental',
        ilegal: true,
      },
      {
        icon: Trash2,
        titulo: 'Basura masiva arrojada a los canales',
        descripcion: 'Botellas de plástico, unicel, colillas de cigarro, residuos de comida y envases de aluminio son arrojados directamente a los canales desde las trajineras y las orillas. Este residuo genera microplásticos, reduce el oxígeno disuelto, bloquea la luz solar necesaria para el fitoplancton y destruye el bentos donde habita el ajolote.',
        impacto: 'Destrucción de bentos, anoxia localizada, acumulación de microplásticos',
        ley: 'LGEEPA Art. 139 – Prohibición de depositar residuos en ANP',
        ilegal: true,
      },
      {
        icon: Beer,
        titulo: 'Venta y consumo de alcohol y drogas dentro de la ANP',
        descripcion: 'La venta masiva de alcohol se realiza diariamente dentro del ANP sin ningún control sanitario ni ambiental. El derrame de bebidas alcohólicas a los canales altera el pH del agua. Se han documentado residuos de etanol, sustancias psicoactivas y envases de vidrio en el fondo de los canales, representando riesgo físico y químico para la fauna acuática.',
        impacto: 'Alteración del pH, contaminación química, residuos físicos cortantes',
        ley: 'LGEEPA Art. 50 – Prohibición de actividades no compatibles con la conservación en ANP',
        ilegal: true,
      },
    ],
  },
  {
    categoria: 'Contaminación por Embarcaciones Motorizadas',
    color: 'border-red-300 bg-red-50',
    headerColor: 'bg-red-100 text-red-800',
    icon: Anchor,
    actividades: [
      {
        icon: Anchor,
        titulo: 'Lanchas de motor del Ayuntamiento',
        descripcion: 'El propio Ayuntamiento de Xochimilco opera embarcaciones de motor a gasolina dentro del ANP para labores de mantenimiento y vigilancia. Estas lanchas generan contaminación por hidrocarburos, turbulencia que erosiona las riberas de las chinampas y ruido subacuático. Contradicen el Plan de Manejo que promueve el uso de embarcaciones de propulsión limpia.',
        impacto: 'Contaminación por hidrocarburos, erosión de chinampas, ruido subacuático',
        ley: 'Plan de Manejo ANP 2019 – Subprograma de uso de embarcaciones',
        ilegal: false,
        nota: 'El Ayuntamiento violenta su propio Plan de Manejo',
      },
      {
        icon: Anchor,
        titulo: 'Lanchas de motor de propietarios de chinampas',
        descripcion: 'Muchos propietarios de chinampas utilizan lanchas con motores de gasolina de 2 tiempos para trasladarse, cargar materiales o transportar turistas de forma clandestina. Los motores de 2 tiempos son los más contaminantes existentes: depositan hasta 30% del combustible sin quemar directamente en el agua, generando una capa de hidrocarburo sobre la superficie que reduce el intercambio de oxígeno.',
        impacto: 'Capa de hidrocarburo, reducción de O₂ disuelto, mortalidad de invertebrados acuáticos',
        ley: 'NOM-041-SEMARNAT – Emisiones de vehículos automotores en uso',
        ilegal: true,
      },
      {
        icon: Waves,
        titulo: 'Kayaks sin control al amanecer',
        descripcion: 'Grupos de kayakistas acceden a los canales antes del amanecer, período crítico de actividad del ajolote. El movimiento de kayaks remueve el sedimento del fondo donde el ajolote deposita huevos y se alimenta. Los kayakistas pierden teléfonos celulares, botellas y objetos que se depositan en el fondo de los canales. No existe límite de cupo ni regulación de horarios ni zonas.',
        impacto: 'Remoción de sedimento, destrucción de huevos, residuos electrónicos en el bentos',
        ley: 'Plan de Manejo ANP 2019 – Zonificación de uso restringido',
        ilegal: true,
      },
    ],
  },
  {
    categoria: 'Eventos Masivos y Atracciones Ilegales',
    color: 'border-purple-300 bg-purple-50',
    headerColor: 'bg-purple-100 text-purple-800',
    icon: Music,
    actividades: [
      {
        icon: Music,
        titulo: 'Teatro de la Llorona, Casa Aló y eventos masivos nocturnos',
        descripcion: 'Eventos de entretenimiento como "Teatro de la Llorona" y "Casa Aló" instalan estructuras temporales, generadores, iluminación artificial intensa, bocinas y tráfico de miles de personas dentro de la zona de amortiguamiento del ANP. La iluminación artificial nocturna desoriente a anfibios nocturnos como el ajolote, que usa la oscuridad para cazar y reproducirse.',
        impacto: 'Contaminación lumínica, perturbación nocturna, pisoteo de riberas, residuos masivos',
        ley: 'LGEEPA Art. 47 – Compatibilidad de usos en ANP; Plan de Manejo Actividades Prohibidas',
        ilegal: true,
      },
      {
        icon: Music,
        titulo: 'Conciertos y espectáculos sin evaluación de impacto ambiental',
        descripcion: 'Con frecuencia se instalan escenarios para conciertos, festivales y espectáculos audiovisuales dentro y en las inmediaciones del ANP sin presentar Manifestación de Impacto Ambiental (MIA) ante la SEMARNAT. La LGEEPA obliga a cualquier obra o actividad dentro de una ANP a contar con autorización expresa.',
        impacto: 'Ruido extremo, iluminación, tráfico vehicular, residuos sólidos masivos',
        ley: 'LGEEPA Art. 28 – Obligatoriedad de MIA para actividades en ANP',
        ilegal: true,
      },
      {
        icon: Bike,
        titulo: 'Pista de aviones a gasolina de control remoto y campo de gotcha',
        descripcion: 'Dentro del polígono del ANP opera de facto una pista para aviones de control remoto a gasolina y un campo de gotcha (paintball). Los aviones a gasolina generan ruido de alta frecuencia, emisiones y riesgo de accidentes. El campo de gotcha introduce residuos de bolas de pintura con polietilenglicol y colorantes sintéticos que llegan a los canales por escorrentía.',
        impacto: 'Ruido, emisiones, residuos de polietilenglicol en el agua, perturbación de fauna',
        ley: 'LGEEPA Art. 50 – Actividades prohibidas en ANP; Plan de Manejo Uso Turístico',
        ilegal: true,
      },
      {
        icon: Camera,
        titulo: 'Casa de las Muñecas y atracciones turísticas sin permiso',
        descripcion: 'La "Isla de las Muñecas" y atracciones similares acumulan enormes cantidades de plástico, telas y residuos sintéticos que se deterioran con el clima y se fragmentan en microplásticos que caen a los canales. Estas instalaciones no cuentan con permisos de operación dentro del ANP ni presentaron MIA. Generan tráfico turístico permanente en zonas de conservación estricta.',
        impacto: 'Microplásticos, tráfico no regulado, cambio de uso de suelo de facto',
        ley: 'LGEEPA Art. 45 Bis y 50 – Restricciones de uso y permisos en ANP',
        ilegal: true,
      },
    ],
  },
  {
    categoria: 'Cambio de Uso de Suelo y Construcción Ilegal',
    color: 'border-yellow-300 bg-yellow-50',
    headerColor: 'bg-yellow-100 text-yellow-800',
    icon: Home,
    actividades: [
      {
        icon: Home,
        titulo: 'Construcción de casas de concreto ilegales en zona chinampeña',
        descripcion: 'La zona chinampeña — corazón del hábitat del ajolote — está siendo invadida sistemáticamente por construcciones de concreto ilegales. Se han detectado cientos de estructuras permanentes edificadas sobre chinampas o sus riberas sin ningún permiso de construcción ni autorización ambiental. Estas construcciones compactan el suelo, eliminan la vegetación riparia y desconectan los canales del sistema hídrico natural.',
        impacto: 'Destrucción directa de hábitat, impermeabilización, eliminación de vegetación ribereña',
        ley: 'LGEEPA Art. 45 Bis; PAOT – Ordenamiento Territorial CDMX; Plan de Manejo 2019',
        ilegal: true,
      },
      {
        icon: Car,
        titulo: 'Cambio de uso de suelo agrícola a turístico-comercial',
        descripcion: 'Las chinampas, diseñadas históricamente para agricultura de bajo impacto, están siendo reconvertidas ilegalmente para uso turístico, restaurantero y comercial. Se construyen muelles, embarcaderos, bodegas y hasta casas de renta vacacional sobre suelo de conservación. Este cambio de uso de suelo destruye el sistema hidráulico que regula los niveles de agua en los canales donde vive el ajolote.',
        impacto: 'Alteración del sistema hidráulico, pérdida de regulación hídrica, pérdida de hábitat',
        ley: 'LGEEPA Art. 47; Programa General de Ordenamiento Ecológico CDMX',
        ilegal: true,
      },
      {
        icon: Zap,
        titulo: 'Canchas de fútbol sobre zona de amortiguamiento',
        descripcion: 'Se han instalado canchas de fútbol y espacios de recreación con iluminación artificial, pasto sintético y pavimento sobre la zona de amortiguamiento del ANP. El pasto sintético libera partículas de caucho y microplásticos que se arrastran con la lluvia hacia los canales. La iluminación nocturna altera los ritmos circadianos de la fauna acuática y riparia.',
        impacto: 'Microplásticos de caucho, iluminación artificial nocturna, impermeabilización',
        ley: 'LGEEPA Art. 50; Plan de Manejo ANP – Zona de Amortiguamiento',
        ilegal: true,
      },
    ],
  },
];

// Tabla comparativa Plan de Manejo vs Realidad
const TABLA_COMPARATIVA = [
  {
    aspecto: 'Embarcaciones permitidas',
    planManejo: 'Solo embarcaciones de propulsión manual o eléctrica en zonas de conservación',
    realidad: 'Lanchas a gasolina del Ayuntamiento, chinamperos y operadores turísticos sin sanción',
    gravedad: 'alta',
  },
  {
    aspecto: 'Actividades en zona núcleo',
    planManejo: 'Prohibida toda actividad turística y comercial en zona núcleo',
    realidad: 'Trajineras, kayaks, turismo masivo sin restricción de zona',
    gravedad: 'alta',
  },
  {
    aspecto: 'Eventos especiales',
    planManejo: 'Requieren autorización expresa de CONANP y MIA ante SEMARNAT',
    realidad: 'Teatro de la Llorona, Casa Aló, conciertos sin MIA aprobada',
    gravedad: 'alta',
  },
  {
    aspecto: 'Construcción dentro del ANP',
    planManejo: 'Prohibida toda nueva construcción en zona chinampeña y de amortiguamiento',
    realidad: 'Cientos de casas de concreto, muelles y canchas construidas ilegalmente',
    gravedad: 'alta',
  },
  {
    aspecto: 'Manejo de residuos sólidos',
    planManejo: 'Prohibido depositar residuos en canales; operadores deben tener plan de manejo de residuos',
    realidad: 'Basura arrojada directamente a los canales desde trajineras y orillas a diario',
    gravedad: 'alta',
  },
  {
    aspecto: 'Consumo de alcohol',
    planManejo: 'Restricción de actividades incompatibles con la conservación en zonas de uso restringido',
    realidad: 'Venta y consumo masivo de alcohol dentro del ANP sin control ni horario',
    gravedad: 'media',
  },
  {
    aspecto: 'Ruido ambiental',
    planManejo: 'Actividades deben respetar NOM-081 de ruido; silencio en zonas de conservación',
    realidad: 'Músicos, bocinas, motores y espectáculos sin límite de decibeles',
    gravedad: 'alta',
  },
  {
    aspecto: 'Uso de suelo chinampeño',
    planManejo: 'Mantener uso agrícola tradicional; prohibido cambio a uso turístico sin autorización',
    realidad: 'Conversión masiva de chinampas a restaurantes, rentas vacacionales y atracciones',
    gravedad: 'alta',
  },
  {
    aspecto: 'Monitoreo de fauna',
    planManejo: 'Monitoreo biológico semestral financiado por CONANP y SEDEMA',
    realidad: 'Sin monitoreo oficial; solo censos realizados por UNAM con fondos propios',
    gravedad: 'alta',
  },
  {
    aspecto: 'Control de kayaks y actividades acuáticas',
    planManejo: 'Requiere cupo limitado, autorización y restricción de horarios en zonas sensibles',
    realidad: 'Acceso libre sin cupo ni horario; operación nocturna y al amanecer sin supervisión',
    gravedad: 'media',
  },
];

// ─────────────────────────────────────────────
// COMPONENTES REUTILIZABLES
// ─────────────────────────────────────────────

function FailureCard({ item, index }) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className="rounded-2xl border border-red-200/60 bg-card overflow-hidden"
    >
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-red-50/50 transition-colors"
      >
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-foreground leading-snug">{item.title}</p>
          <p className="text-xs text-muted-foreground mt-0.5 truncate">{item.ley}</p>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
            <div className="px-5 pb-5 pt-1 border-t border-red-100">
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.description}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
                <Scale className="w-3.5 h-3.5 flex-shrink-0" />
                {item.ley}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ActividadCard({ act, index }) {
  const [open, setOpen] = useState(false);
  const Icon = act.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="rounded-xl border border-border/50 bg-card overflow-hidden"
    >
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-start gap-3 px-4 py-3.5 text-left hover:bg-secondary/40 transition-colors"
      >
        <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Icon className="w-3.5 h-3.5 text-destructive" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-0.5">
            <p className="font-semibold text-sm text-foreground leading-snug">{act.titulo}</p>
            {act.ilegal
              ? <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">Ilegal</span>
              : <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">Violación institucional</span>
            }
          </div>
          <p className="text-xs text-muted-foreground line-clamp-1">{act.impacto}</p>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" /> : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
            <div className="px-4 pb-4 pt-1 border-t border-border/50 space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">{act.descripcion}</p>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-start gap-1.5 px-3 py-1.5 rounded-lg bg-destructive/5 border border-destructive/20 text-xs text-destructive font-medium">
                  <AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" />
                  <span>Impacto: {act.impacto}</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary border border-border/50 text-xs text-muted-foreground font-medium">
                <Scale className="w-3 h-3 flex-shrink-0" />
                {act.ley}
              </div>
              {act.nota && (
                <p className="text-xs italic text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">⚠ {act.nota}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────

export default function PlanManejoANP() {
  const [tabActivo, setTabActivo] = useState('gobierno');

  const tabs = [
    { id: 'gobierno', label: 'Fallas del Estado' },
    { id: 'turismo', label: 'Malas Prácticas Turísticas' },
    { id: 'denuncias', label: 'Denuncias CIMA A.C.' },
    { id: 'comparativa', label: 'Plan vs. Realidad' },
    { id: 'marco', label: 'Marco Legal' },
  ];

  return (
    <div className="space-y-8">

      {/* ── Banner principal ── */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-gradient-to-br from-red-600 to-red-800 text-white p-6 shadow-xl shadow-red-900/20"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold mb-1">Crisis Institucional y Turística: El ANP Xochimilco en Colapso</h2>
            <p className="text-red-100 text-sm leading-relaxed">
              La extinción del ajolote silvestre es el resultado de un doble fallo: el Estado que no ejecuta su propio Plan de Manejo, y un modelo turístico sin regulación que destruye el ecosistema diariamente. La responsabilidad es compartida entre gobierno, operadores turísticos, chinamperos motorizados y visitantes irresponsables.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── Tabla colapso poblacional ── */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
        <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-destructive/10 flex items-center justify-center">
            <AlertTriangle className="w-4 h-4 text-destructive" />
          </span>
          Colapso Documentado de la Población Silvestre
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-border/50">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-secondary/50">
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Año</th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Densidad estimada</th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Fuente</th>
                <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Variación</th>
              </tr>
            </thead>
            <tbody>
              {EVIDENCIA_COLAPSO.map((row, i) => {
                const isLast = i === EVIDENCIA_COLAPSO.length - 1;
                const isCima = !!row.cima;
                const isEdna = !!row.edna;
                return (
                  <tr key={row.año} className={`border-t border-border/50 ${isLast && isEdna ? 'bg-teal-50' : ''} ${isCima ? 'bg-amber-50' : ''}`}>
                    <td className={`px-4 py-3 font-mono font-bold ${isCima ? 'text-amber-800' : ''} ${isEdna ? 'text-teal-800' : ''}`}>{row.año}</td>
                    <td className={`px-4 py-3 font-semibold ${isCima ? 'text-amber-800 text-xs' : ''} ${isEdna ? 'text-teal-800' : ''}`}>{row.densidad}</td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">
                      {row.fuente}
                      {isCima && <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">CIMA A.C.</span>}
                      {isEdna && <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full bg-teal-100 text-teal-700 text-xs font-medium">eDNA</span>}
                    </td>
                    <td className="px-4 py-3">
                      {i > 0 && !isCima && !isEdna && (
                        <Badge className="bg-red-100 text-red-700 border-red-200 text-xs">↓</Badge>
                      )}
                      {isCima && (
                        <Badge className="bg-amber-100 text-amber-700 border-amber-200 text-xs whitespace-nowrap">Censo de campo</Badge>
                      )}
                      {isEdna && (
                        <Badge className="bg-teal-100 text-teal-700 border-teal-200 text-xs whitespace-nowrap">−99%+ | Supervivencia detectada</Badge>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-4 space-y-3">
          <p className="text-xs text-muted-foreground px-1 space-y-1">
            <span className="block">* El ANP fue establecida en 1992. El colapso del 99.9% se produjo <em>dentro</em> del período de protección legal — con el Plan de Manejo vigente y sin aplicarse.</span>
            <span className="block">* El censo de campo de CIMA A.C. (2019–2023) confirma la práctica extinción local: solo 2 avistamientos confirmados en 595 entrevistas a pescadores y chinamperos en 3 zonas monitoreadas (IIB: 6/25).</span>
            <span className="block">* El censo 2024–2025 de la UNAM mediante captura tradicional no encontró ejemplares, pero el ADN ambiental (eDNA) detectó presencia de ajolote en agua. Indica supervivencia en poblaciones microscópicas, refugiados en zonas restauradas. Demuestra que la restauración ecológica puede funcionar.</span>
          </p>
          
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-teal-200/60 bg-teal-50/50 p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <FlaskConical className="w-4 h-4 text-teal-700" />
              </div>
              <div className="text-xs space-y-2">
                <p className="font-semibold text-teal-900">Hallazgo clave del censo 2024–2025: ADN ambiental vs. captura directa</p>
                <p className="text-teal-800 leading-relaxed">
                  Las redes de captura tradicional no registraron ajolotes. Pero el análisis molecular de agua (eDNA) confirmó presencia en múltiples puntos. Esto significa:
                </p>
                <ul className="text-teal-700 space-y-1 ml-4 list-disc">
                  <li>Superviven individuos en poblaciones <strong>extremadamente pequeñas</strong></li>
                  <li>Refugiados en <strong>chinampas restauradas</strong> y zonas menos perturbadas</li>
                  <li>Áreas con mejor calidad de agua muestran <strong>mayor frecuencia de eDNA</strong></li>
                  <li><strong>La restauración ecológica puede funcionar</strong> — no es punto de no retorno</li>
                </ul>
                <p className="text-teal-800 italic pt-2 border-t border-teal-200">
                  Implicación: El problema principal es el ecosistema, no la genética. Restaurar agua, refugios y control de invasoras es más urgente que crianza en cautiverio.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Mapa ANP ── */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
        <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
            <MapPin className="w-4 h-4 text-primary" />
          </span>
          Zona del ANP — Xochimilco, Tláhuac y Milpa Alta
        </h3>
        <div className="rounded-2xl overflow-hidden border border-border/50 shadow-md">
          <iframe
            title="ANP Xochimilco"
            width="100%"
            height="380"
            frameBorder="0"
            scrolling="no"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-99.1800%2C19.2400%2C-98.9200%2C19.3600&layer=mapnik&marker=19.3000%2C-99.0900"
            className="w-full"
            style={{ minHeight: 280 }}
          />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {[
            { label: 'Superficie ANP', value: '~16,000 ha', desc: 'Sitio Ramsar desde 2004' },
            { label: 'Canales activos', value: '~170 km', desc: 'Red chinampeña' },
            { label: 'Superficie invadida', value: '>40%', desc: 'Urbanización informal' },
          ].map(f => (
            <div key={f.label} className="rounded-xl bg-primary/5 border border-primary/10 p-3 text-center">
              <p className="font-heading font-bold text-primary text-lg">{f.value}</p>
              <p className="text-xs font-medium text-foreground">{f.label}</p>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
        <a href="https://www.conanp.gob.mx/que_hacemos/guia_decretos.php" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline mt-2">
          <ExternalLink className="w-3 h-3" />
          Decreto y Plan de Manejo oficial — CONANP
        </a>
      </motion.div>

      {/* ── Descarga Plan de Manejo ── */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}
        className="flex flex-wrap items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4"
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <Download className="w-4 h-4 text-primary flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-foreground">Plan de Manejo ANP Xochimilco (2019)</p>
            <p className="text-xs text-muted-foreground">Documento oficial CONANP — Decreto de Área Natural Protegida</p>
          </div>
        </div>
        <a
          href="https://bf827fdf-7af1-4af7-87e9-230750b0010a.usrfiles.com/ugd/bf827f_eb86265e4d064d13bfe3c1a855c873b8.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors flex-shrink-0"
        >
          <Download className="w-3.5 h-3.5" />
          Descargar PDF oficial
        </a>
      </motion.div>

      {/* ── Navegación interna ── */}
      <div className="flex flex-wrap gap-2 border-b border-border/50 pb-1">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setTabActivo(t.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${tabActivo === t.id ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-secondary'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── TAB: Fallas del Estado ── */}
      {tabActivo === 'gobierno' && (
        <div>
          <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
            El Estado tiene obligaciones legales explícitas. A continuación se documentan los principales incumplimientos, las leyes violadas y su impacto directo en la extinción.
          </p>
          <div className="space-y-3">
            {FALLAS_GOBIERNO.map((item, i) => <FailureCard key={i} item={item} index={i} />)}
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <div className="flex items-start gap-3 mb-4">
              <Users className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
              <h4 className="font-heading font-bold text-amber-900">Lo que hace el Estado vs. la Sociedad Civil</h4>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/60 border border-amber-200 p-3">
                <p className="font-semibold text-amber-900 text-xs uppercase tracking-wider mb-1">Lo que DEBE hacer el Estado</p>
                <ul className="text-xs text-amber-800 space-y-1">
                  <li>• Ejecutar el Plan de Manejo ANP Xochimilco</li>
                  <li>• Financiar monitoreo biológico permanente</li>
                  <li>• Implementar control efectivo de invasoras</li>
                  <li>• Sanear los canales y controlar descargas</li>
                  <li>• Activar los mecanismos de la NOM-059</li>
                  <li>• Regular y sancionar el turismo ilegal</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white/60 border border-amber-200 p-3">
                <p className="font-semibold text-amber-900 text-xs uppercase tracking-wider mb-1">Lo que hace la sociedad civil (CIMA A.C.)</p>
                <ul className="text-xs text-amber-800 space-y-1">
                  <li>• Conservación genética sin apoyo gubernamental</li>
                  <li>• Restauración ecológica comunitaria</li>
                  <li>• Ciencia ciudadana y monitoreo voluntario</li>
                  <li>• Educación ambiental en escuelas y comunidades</li>
                  <li>• Presión política y visibilización internacional</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB: Malas Prácticas Turísticas ── */}
      {tabActivo === 'turismo' && (
        <div className="space-y-8">
          <div className="rounded-2xl bg-gradient-to-br from-orange-600 to-red-700 text-white p-5 shadow-lg">
            <div className="flex items-start gap-3">
              <Trash2 className="w-8 h-8 flex-shrink-0 opacity-90" />
              <div>
                <h3 className="font-heading font-bold text-lg mb-1">El Turismo sin Regulación Como Destructor del Ecosistema</h3>
                <p className="text-orange-100 text-sm leading-relaxed">
                  El modelo turístico de Xochimilco —diseñado para generar ingresos sin planificación ambiental— es una de las causas directas del colapso del hábitat del ajolote. Las siguientes actividades ocurren diariamente dentro del ANP con pleno conocimiento de las autoridades y sin consecuencias legales.
                </p>
              </div>
            </div>
          </div>

          {MALAS_PRACTICAS.map((cat, ci) => (
            <motion.div key={ci} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: ci * 0.08 }}>
              <div className={`rounded-2xl border-2 ${cat.color} overflow-hidden`}>
                <div className={`px-5 py-3 flex items-center gap-3 ${cat.headerColor}`}>
                  <cat.icon className="w-4 h-4 flex-shrink-0" />
                  <h4 className="font-heading font-bold text-sm">{cat.categoria}</h4>
                  <Badge className="ml-auto bg-white/60 text-inherit border-0 text-xs">
                    {cat.actividades.length} actividades documentadas
                  </Badge>
                </div>
                <div className="p-4 space-y-3 bg-card">
                  {cat.actividades.map((act, ai) => (
                    <ActividadCard key={ai} act={act} index={ai} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* ── TAB: Denuncias CIMA A.C. ── */}
      {tabActivo === 'denuncias' && <DenunciasCIMA />}

      {/* ── TAB: Plan vs Realidad ── */}
      {tabActivo === 'comparativa' && (
        <div>
          <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-destructive/10 border border-border/50 p-5 mb-6">
            <h3 className="font-heading font-bold text-lg mb-1 flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              Plan de Manejo ANP vs. Realidad Diaria
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La siguiente tabla contrasta lo que el Plan de Manejo vigente (2019) establece explícitamente versus lo que ocurre en el ANP Xochimilco de manera cotidiana y documentada. Esta brecha entre norma y práctica es la causa estructural del colapso del ajolote silvestre.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary/60">
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground w-1/4">Aspecto regulado</th>
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-primary w-3/8">
                    ✓ Plan de Manejo dice...
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider text-destructive w-3/8">
                    ✗ La realidad es...
                  </th>
                </tr>
              </thead>
              <tbody>
                {TABLA_COMPARATIVA.map((row, i) => (
                  <tr key={i} className={`border-t border-border/50 ${i % 2 === 0 ? '' : 'bg-secondary/20'}`}>
                    <td className="px-4 py-3.5 font-semibold text-xs text-foreground align-top">{row.aspecto}</td>
                    <td className="px-4 py-3.5 text-xs text-primary/80 bg-primary/5 align-top leading-relaxed">{row.planManejo}</td>
                    <td className="px-4 py-3.5 text-xs text-destructive/80 bg-destructive/5 align-top leading-relaxed">
                      {row.realidad}
                      <Badge className={`ml-2 text-xs ${row.gravedad === 'alta' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                        {row.gravedad === 'alta' ? 'Violación grave' : 'Violación moderada'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3 px-1 italic">
            Fuentes: Plan de Manejo ANP Xochimilco 2019 (CONANP), reportes de SEDEMA CDMX, monitoreos independientes UNAM 2018–2024, PAOT, reportes periodísticos verificados.
          </p>
        </div>
      )}

      {/* ── TAB: Marco Legal ── */}
      {tabActivo === 'marco' && (
        <div className="space-y-4">
          <h4 className="font-heading font-bold text-base mb-3 flex items-center gap-2">
            <Scale className="w-4 h-4 text-primary" />
            Marco Legal Aplicable — Leyes Violadas
          </h4>
          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            {[
              ['LGEEPA', 'Ley General del Equilibrio Ecológico y la Protección al Ambiente — Arts. 28, 45 Bis, 47, 50, 65, 139'],
              ['NOM-059-SEMARNAT-2010', 'Protección ambiental — Ambystoma mexicanum en categoría "P" (En Peligro)'],
              ['NOM-001-SEMARNAT-2021', 'Límites máximos de contaminantes en descargas a aguas nacionales'],
              ['NOM-081-SEMARNAT', 'Límites máximos permisibles de ruido ambiental por fuentes fijas'],
              ['Plan de Manejo ANP Xochimilco', 'Decreto 2006, actualizado 2019 — CONANP — Incumplido sistemáticamente'],
              ['Decreto Sitio Ramsar 1004', 'Xochimilco como humedal de importancia internacional (UNESCO, 2004)'],
              ['LGVS', 'Ley General de Vida Silvestre — Protección de especies en peligro de extinción'],
              ['Programa Gral. Ordenamiento Ecológico CDMX', 'Suelo de conservación — prohibición de cambio de uso de suelo no autorizado'],
              ['PAOT', 'Procuraduría Ambiental y del Ordenamiento Territorial — Competencia en violaciones a ANP'],
              ['Convenio RAMSAR', 'Obligaciones internacionales de México para humedales declarados de importancia global'],
            ].map(([nombre, desc]) => (
              <div key={nombre} className="rounded-lg bg-card border border-border/50 p-3">
                <p className="font-mono font-bold text-primary text-xs mb-1">{nombre}</p>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}