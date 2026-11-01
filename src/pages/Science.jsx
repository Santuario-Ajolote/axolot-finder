import React, { useState } from 'react';
import { useCollapseProgress } from '@/lib/useCollapseProgress';
import PageMeta from '@/components/SEO/PageMeta';
import { getPageSeo } from '@/lib/seoConfig';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, BookOpen, Microscope, Dna, Brain, Globe, FlaskConical, TreePine, Instagram, Facebook, Linkedin, Heart, Gavel, AlertTriangle, Plus, X, Map, Flower2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion as mot } from 'framer-motion';
import ArticleDetail from '@/components/science/ArticleDetail';
import GenomicaSection from '@/components/science/GenomicaSection';
import NeurobiologiaSection from '@/components/science/NeurobiologiaSection';
import MedicinaSection from '@/components/science/MedicinaSection';
import ConservacionSection from '@/components/science/ConservacionSection';
import DenunciasCIMA from '@/components/science/DenunciasCIMA';
import DemandaArcaTierra from '@/components/science/DemandaArcaTierra';
import ExtinctionClock from '@/components/science/ExtinctionClock';
import HistoriaXochimilcoInline from '@/components/science/HistoriaXochimilcoInline';
import ReportajeDrenajes from '@/components/reportajes/ReportajeDrenajes';
import NoticiasTab from '@/components/historia/NoticiasTab';
import SubmitPublicationForm from '@/components/science/SubmitPublicationForm';
import CommunityPublications from '@/components/science/CommunityPublications';
import ConservationMap from '@/pages/ConservationMap';


const DUMMERIL_ESPECIES = [
  { nombre: 'Ambystoma mexicanum', habitat: 'Lagos de Xochimilco y Chalco, CDMX', estado: 'En Peligro Crítico (IUCN)', descripcion: 'La especie tipo descrita por Duméril en 1866. Neoténica permanente en condiciones naturales. Endémica del sistema lacustre del Valle de México. Hoy funcionalmente extinta en la mayor parte de su rango original.', color: 'bg-emerald-100 text-emerald-800 border-emerald-200', borderColor: 'border-emerald-200', icon: '🫧' },
  { nombre: 'Ambystoma velasci', habitat: 'Altiplano mexicano — Jalisco, Zacatecas, Aguascalientes', estado: 'Vulnerable (IUCN)', descripcion: 'Documentada por Dugès en 1888. Especie de tierras altas del centro-norte de México. Puede completar metamorfosis en condiciones de sequía.', color: 'bg-blue-100 text-blue-800 border-blue-200', borderColor: 'border-blue-200', icon: '🦎' },
  { nombre: 'Ambystoma taylori', habitat: 'Lago de Alchichica, Puebla', estado: 'En Peligro Crítico (IUCN)', descripcion: 'Endémica del lago salino-alcalino de Alchichica. Única especie que tolera aguas salinas naturales.', color: 'bg-violet-100 text-violet-800 border-violet-200', borderColor: 'border-violet-200', icon: '🌊' },
  { nombre: 'Ambystoma dumerilii', habitat: 'Lago de Pátzcuaro, Michoacán', estado: 'En Peligro Crítico (IUCN)', descripcion: 'Nombrada en honor al propio Auguste Duméril por sus discípulos. Endémica del lago de Pátzcuaro, conocida localmente como "achoque".', color: 'bg-amber-100 text-amber-800 border-amber-200', borderColor: 'border-amber-200', icon: '🏔️' },
  { nombre: 'Ambystoma altamirani', habitat: 'Sierra de las Cruces y Nevado de Toluca', estado: 'En Peligro (IUCN)', descripcion: 'Especie de montaña de arroyos fríos de alta altitud. Habita en arroyos cristalinos por encima de los 2,800 msnm.', color: 'bg-cyan-100 text-cyan-800 border-cyan-200', borderColor: 'border-cyan-200', icon: '⛰️' },
  { nombre: 'Ambystoma lermaense', habitat: 'Cuenca del río Lerma, Estado de México', estado: 'En Peligro Crítico (IUCN)', descripcion: 'Endémica de la cuenca alta del río Lerma. Confirmada como especie independiente por análisis genéticos modernos.', color: 'bg-rose-100 text-rose-800 border-rose-200', borderColor: 'border-rose-200', icon: '🌿' },
  { nombre: 'Ambystoma granulosum', habitat: 'Cuencas altas de Michoacán y Guerrero', estado: 'En Peligro (IUCN)', descripcion: 'Especie de piel granulosa característica. Habita en humedales y arroyos de montaña en el occidente de México.', color: 'bg-green-100 text-green-800 border-green-200', borderColor: 'border-green-200', icon: '🍃' },
  { nombre: 'Ambystoma ordinarium', habitat: 'Michoacán — Sierra Madre Occidental', estado: 'En Peligro (IUCN)', descripcion: 'Conocida como "ajolote de Michoacán". Su estado de conservación es crítico a pesar de su nombre.', color: 'bg-orange-100 text-orange-800 border-orange-200', borderColor: 'border-orange-200', icon: '🌄' },
];

const DUMMERIL_TIMELINE = [
  { year: '1570s', event: 'Francisco Hernández documenta al axolotl en "Historia Natural de Nueva España" — primer registro occidental', color: 'bg-amber-500' },
  { year: '1834', event: 'Constant Duméril y Bibron publican "Erpétologie Générale" Vol. 1 — marco taxonómico para anfibios', color: 'bg-orange-500' },
  { year: '1863', event: '34 ajolotes de Xochimilco llegan al Museo Nacional de Historia Natural de París por encargo de Napoleón III', color: 'bg-blue-500' },
  { year: '1864', event: 'Auguste Duméril observa reproducción neoténica en laboratorio — primer reporte científico de neotenia', color: 'bg-primary' },
  { year: '1865', event: 'Marie von Chauvin induce metamorfosis completa con tiroxina — confirma naturaleza del Ambystoma', color: 'bg-violet-500' },
  { year: '1866', event: 'Duméril describe formalmente Ambystoma mexicanum — nombre científico vigente hasta hoy', color: 'bg-emerald-600' },
  { year: '1885', event: 'Julius Kollmann acuña el término "neotenia" para el fenómeno descrito por Duméril', color: 'bg-teal-500' },
  { year: '2018', event: 'Nowoshilow et al. secuencian el genoma completo (32 Gb) — todos los ejemplares descienden de los 34 de Xochimilco', color: 'bg-rose-600' },
];

const ENCYCLOPEDIA_SECTIONS = [
  {
    id: 'historia',
    icon: BookOpen,
    title: 'Historia Científica',
    color: 'bg-amber-100 text-amber-700',
    activeBg: 'bg-amber-600',
    headerBg: 'bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700',
    subtitle: 'Del lago azteca al laboratorio global — 3,000 años de historia',
    content: `El ajolote mexicano (Ambystoma mexicanum) es uno de los organismos más extraordinarios jamás estudiados por la biología. Neoténico por naturaleza, este anfibio endémico del sistema lacustre del Valle de México fascina desde el siglo XVI a naturalistas, médicos y biólogos de todo el mundo.

━━━ ÉPOCA PREHISPÁNICA ━━━

En la cosmovisión mexica, el ajolote era sagrado. Xólotl — deidad del rayo, de los gemelos y guía de los muertos al Mictlán — adoptaba la forma del ajolote como su nahual acuático. La dualidad Quetzalcóatl-Xólotl simbolizaba la transformación y el viaje entre mundos.

El Códice Badiano (1552), escrito por el médico indígena Martín de la Cruz, documenta el uso medicinal del ajolote: cocido con raíces de toloache y plumas de papagayo se usaba para tratar enfermedades respiratorias. Francisco Hernández, médico personal del rey Felipe II, lo describió en su "Historia Natural de Nueva España" (1570) como "axolotl" — literalmente "monstruo del agua" en náhuatl.

━━━ SIGLO XIX — EL AJOLOTE CONQUISTA EUROPA ━━━

La Intervención Francesa en México (1862–1867) tuvo una consecuencia científica inesperada. El naturalista Alfred Dugès envió 34 ejemplares de ajolotes al Museo Nacional de Historia Natural de París en 1863, por encargo de Napoleón III. Auguste Duméril los recibió para estudiar su ciclo de vida natural.

En 1864, Duméril observó algo que cambiaría la biología para siempre: los ajolotes parisinos se reprodujeron exitosamente sin completar nunca la metamorfosis. Nacían crías perfectamente formadas de padres que conservaban branquias externas y cuerpo acuático. Este fenómeno — la neotenia — generó un debate científico europeo que involucró a Darwin, Thomas Huxley y Ernst Haeckel.

En 1865, Marie von Chauvin logró inducir la metamorfosis en un ajolote mediante tiroxina, demostrando que era una salamandra del género Ambystoma con capacidad metamórfica latente. Este descubrimiento fundó el campo moderno de la biología del desarrollo.

━━━ SIGLO XX — LABORATORIO GLOBAL ━━━

El ajolote se convirtió en el modelo experimental más usado en embriología del siglo XX. Spemann y Mangold (Premio Nobel 1935) usaron ajolotes en experimentos de trasplante de organizador embrionario. La colonia de la UNAM, establecida en los años 50 bajo el Dr. Osorio Tafall, fue pionera en preservación ex situ.

En 1989 se estableció el Axolotl Colony de la Universidad de Kentucky (EE.UU.), que hoy mantiene más de 1,000 ajolotes de diversas líneas genéticas. En México, el ajolote estaba clasificado como "en peligro" desde los años 90, pero sin acciones concretas de conservación.

━━━ SIGLO XXI — PARADOJA CIENTÍFICA ━━━

En 2018, el consorcio liderado por Nowoshilow et al. publicó el ensamblaje completo del genoma del ajolote en Nature: 32 gigabases — el más grande jamás secuenciado en vertebrados, 10 veces mayor que el genoma humano. Este hito transformó la biología regenerativa mundial.

Paradoja contemporánea: mientras millones de ajolotes viven en laboratorios y acuarios de 60 países, los ajolotes silvestres de Xochimilco están funcionalmente extintos. El censo CIMA A.C. 2019–2023 registró solo 2 avistamientos confirmados en 595 entrevistas — una de las señales de alarma más graves en la historia de la conservación de anfibios en México.`,
    images: [
      { url: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/faa85d842_Ajolote_02.jpg', caption: 'Ambystoma mexicanum — fenotipo wild-type en hábitat natural' },
      { url: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/26f4afb9a_Ajolote.jpg', caption: 'Ajolote silvestre — branquias externas características de la neotenia' },
      { url: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/7849bda3f_urnpublicidaporg4f004dd6c1ae9170ec4795860c71b270Mexico_Axolotl_Fundraiser_05303.webp', caption: 'Ambystoma mexicanum — especie en peligro crítico de extinción' },
    ],
    dummerilContent: `━━━ 3,000 AÑOS DE HISTORIA DEL AGUA, LAS CHINAMPAS Y EL AJOLOTE ━━━

Del lago azteca al descubrimiento de Duméril en París — la historia científica e histórica del Ambystoma mexicanum y su hábitat en Xochimilco.

━━━ AUGUSTE DUMÉRIL — EL CIENTÍFICO QUE LLEVÓ AL AJOLOTE A EUROPA ━━━

En 1863, durante la Intervención Francesa en México, Napoleón III ordenó una expedición científica. Entre los especímenes enviados al Museo Nacional de Historia Natural de París se incluían 34 ajolotes vivos capturados en el lago de Xochimilco y el lago de Chalco.

Auguste Henri André Duméril (1812–1870), director adjunto del MNHN y autor junto con Bibron del monumental "Erpétologie Générale" (9 volúmenes), recibió los ejemplares. En 1864 observó algo que cambiaría la biología para siempre: los ajolotes parisinos se reprodujeron sin completar jamás la metamorfosis — la neotenia.

━━━ EL DESCUBRIMIENTO DE LA NEOTENIA — 1864 ━━━

Duméril publicó sus observaciones en los Nouvelles Archives du Muséum d'Histoire Naturelle, describiendo formalmente la especie como Ambystoma mexicanum. El fenómeno generó un debate científico europeo que involucró a Darwin, Huxley y Haeckel.

En 1865, la naturalista alemana Marie von Chauvin indujo la metamorfosis completa añadiendo tiroxina al agua, demostrando que el ajolote era una salamandra del género Ambystoma con capacidad metamórfica latente — bloqueada por el ambiente lacustre estable de Xochimilco.

━━━ LAS COLONIAS EUROPEAS Y EL AJOLOTE GLOBAL ━━━

Duméril distribuyó descendientes a laboratorios de toda Europa: Viena, Berlín, Londres, Praga y Cracovia. Todos los ajolotes de laboratorio del planeta descienden de aquellos 34 ejemplares de Xochimilco. La especie Ambystoma dumerilii del lago de Pátzcuaro fue nombrada en su honor por sus discípulos.`,
    dummerilImages: [
      { url: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/83ae416bf_11.JPG', caption: '3,000 Años de Historia del Agua, las Chinampas y el Ajolote — Del lago azteca al descubrimiento de Duméril en París' },
      { url: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/36c89d867_4iGvNqm8yQA7iOLUvC1a66YyPQSqWBtkiutb7LC8oyVsJOsnUdOPiUvOU9qUH-_6npY1z2NSZ6pR46nrfeLVfyWUm48n7vy4MxypZeEHJuQiu9Zr5-NKZA-LhqMOyOXRyFH6hvil8Fc7eGvnLwfTq0FivX8iHrLzvGnmJgHRayDHmm6sjI51ZDtbtvXIVh881.jpg', caption: 'Morfogénesis y regeneración de extremidades — Blastema, Cone, Palette, Early Diff' },
      { url: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/1eb33fe94_wOF3c6fbiAurnNpspI2iy3XDGaUrkjcmBoUy6_7t_S1Aadw78amK45UWml8UyB-Q-KCQo6Dz_ByoMjTXGvb4OdaPMtg_Pa-dGsYhBmn6SRQx4FWeDrS6kKV_8KIMXQ9ONAJ0i5GxxRMXJN9W4uoaqio_UuTKfWCBVu_h5Em7Kmw8XeJnb2Q14ExAIzYK4Hs8.jpg', caption: 'Secuenciación genómica — Wild-type vs d/d, ensamblaje con MARVEL assembler (32 Gb)' },
    ],
  },
  {
    id: 'genomica',
    icon: Dna,
    title: 'Genómica',
    color: 'bg-blue-100 text-blue-700',
    activeBg: 'bg-blue-600',
    headerBg: 'bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700',
    subtitle: 'Genoma de 32 Gb · El más grande secuenciado en vertebrados',
    content: '',
    richComponent: 'genomica',
  },
  {
    id: 'neurobiologia',
    icon: Brain,
    title: 'Neurobiología',
    color: 'bg-purple-100 text-purple-700',
    activeBg: 'bg-purple-600',
    headerBg: 'bg-gradient-to-r from-purple-700 via-violet-600 to-purple-700',
    subtitle: 'Regeneración cerebral y medular · Proyecto AxoBrain ERC',
    content: '',
    richComponent: 'neurobiologia',
  },
  {
    id: 'medicina',
    icon: FlaskConical,
    title: 'Medicina Regenerativa',
    color: 'bg-rose-100 text-rose-700',
    activeBg: 'bg-rose-600',
    headerBg: 'bg-gradient-to-r from-rose-700 via-red-600 to-rose-700',
    subtitle: 'Aplicaciones clínicas · Enzima AmbLOXe · Cicatrización',
    content: '',
    richComponent: 'medicina',
  },
  {
    id: 'conservacion',
    icon: TreePine,
    title: 'Conservación',
    color: 'bg-emerald-100 text-emerald-700',
    activeBg: 'bg-emerald-600',
    headerBg: 'bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700',
    subtitle: 'Xochimilco · CIMA A.C. · Santuario Ajolote · Extinción',
    content: '',
    richComponent: 'conservacion',
    extraComponent: 'conservacion',
  },
];





const RESEARCH_PAPERS = [
  {
    country: 'México', flag: '🇲🇽',
    institution: 'CIMA A.C. — Santuario Ajolote · Xochimilco',
    title: 'Censo Poblacional del Ajolote Silvestre en Xochimilco y Tláhuac 2019–2023',
    topic: 'Monitoreo poblacional quinquenal — IIB 6/25 · Solo 2 avistamientos confirmados en 595 entrevistas',
    tags: ['Conservación', 'Censo', 'Xochimilco'],
    url: 'https://bf827fdf-7af1-4af7-87e9-230750b0010a.usrfiles.com/ugd/bf827f_37a7043a62924655a87b9dbffeb170de.pdf',
    fullContent: `El Censo Poblacional 2019–2023 realizado por CIMA A.C. (Centro de Investigación de Monitoreo Ambiental) en colaboración con familias chinamperas de Xochimilco y Tláhuac constituye el documento de campo más completo sobre el estado real de las poblaciones silvestres de Ambystoma mexicanum en su hábitat original.

METODOLOGÍA:
• 595 entrevistas a pescadores, chinamperos y habitantes locales con conocimiento directo del humedal
• Monitoreos nocturnos y diurnos en 3 zonas: Canal Principal de Xochimilco, San Gregorio Atlapulco y Tláhuac
• Trampas no letales, observación directa y análisis de huellas ecológicas
• Período: 5 años (2019–2023)

RESULTADOS PRINCIPALES:
• Solo 2 avistamientos confirmados en todo el período de estudio
• Índice de Integridad Biótica (IIB): 6 / 25 — ecosistema gravemente alterado
• San Gregorio Atlapulco: única zona con presencia confirmada de la especie
• 2 de 3 zonas monitoreadas sin ningún registro de ajolote silvestre
• Reducción estimada >90% respecto a censos históricos de la UNAM

FACTORES DE COLAPSO IDENTIFICADOS:
• Contaminación severa y agua con oxígeno disuelto insuficiente para reproducción
• Especies invasoras dominantes: tilapia (Oreochromis niloticus) y carpa (Cyprinus carpio)
• Pérdida de chinampas activas y vegetación acuática nativa
• Turismo masivo no regulado y ruido en canales
• Desconexión hídrica entre sistemas lacustres

IMPLICACIONES:
Este censo confirma que Ambystoma mexicanum está funcionalmente extinto en la mayor parte de su rango histórico. Los 2 avistamientos en 5 años en 3 zonas representan una señal crítica de colapso poblacional que supera incluso las predicciones más pesimistas del modelo PVA. El censo fundamenta científicamente la urgencia de intervención inmediata y sirve como línea base para futuros programas de reintroducción.

ACCIONES DERIVADAS:
• Rescate de 11 familias genéticas históricas
• Programa de reproducción controlada (~800 ejemplares en 5 años)
• Denuncia formal ante PROFEPA por degradación del ANP Xochimilco
• Acción legal exitosa contra Arca Tierra (motores de gasolina en humedal)`,
  },
  {
    country: 'México', flag: '🇲🇽',
    institution: 'UNAM — Instituto de Investigaciones Biomédicas',
    title: 'Regeneración de Extremidades en Ajolotes',
    topic: 'Reactivación genética embrionaria durante regeneración',
    tags: ['Regeneración', 'Blastema'],
    url: 'https://unamglobal.unam.mx/regeneracion-de-las-extremidades-en-ajolotes-porque-ellos-si-y-nosotros-no/',
    fullContent: `Los investigadores del Instituto de Investigaciones Biomédicas de la UNAM han demostrado que las células cercanas a una amputación sufren procesos de desdiferenciación parcial y forman un blastema regenerativo. Este blastema contiene células progenitoras capaces de reconstruir tejidos complejos.

Las investigaciones indican que se activan genes embrionarios, aumentan señales morfogenéticas, y se reorganizan rutas moleculares asociadas con proliferación celular.

Resultados importantes:
• Formación del blastema regenerativo
• Reactivación de programas embrionarios
• Reconstrucción funcional de extremidades
• Conservación de organización anatómica

Importancia científica: Estos estudios ayudan a comprender cómo reactivar programas regenerativos en mamíferos, con potenciales aplicaciones en medicina humana para lesiones medulares y reconstrucción de tejidos.`,
  },
  {
    country: 'México', flag: '🇲🇽',
    institution: 'UNAM — Instituto de Biología',
    title: 'Conservación Genética y ADN Ambiental',
    topic: 'Monitoreo genético de poblaciones silvestres en Xochimilco',
    tags: ['Conservación', 'eDNA'],
    url: 'https://unamglobal.unam.mx/la-unam-acude-al-rescate-del-ajolote/',
    fullContent: `Los investigadores del Instituto de Biología de la UNAM utilizan ADN ambiental (eDNA) para detectar presencia de ajolotes sin necesidad de capturarlos físicamente. El análisis molecular del agua permite identificar fragmentos genéticos liberados por los organismos.

Resultados:
• Confirmación de colapso poblacional severo
• Disminución de diversidad genética
• Identificación de zonas críticas ecológicas
• Monitoreo no invasivo de poblaciones

El ADN ambiental representa una herramienta fundamental para conservación moderna, permitiendo evaluar el estado de las poblaciones sin intervención directa en el ecosistema.`,
  },
  {
    country: 'México', flag: '🇲🇽',
    institution: 'Cinvestav y LANGEBIO',
    title: 'DNA Repair During Regeneration in Ambystoma mexicanum',
    topic: 'Reparación del ADN durante regeneración acelerada',
    tags: ['ADN', 'Genómica'],
    url: 'https://pubmed.ncbi.nlm.nih.gov/33295131/',
    fullContent: `Este estudio investigó cómo el ajolote mantiene estabilidad genética durante proliferación celular extrema. Los investigadores encontraron activación de genes relacionados con reparación de ADN, estabilidad cromosómica, respuesta oxidativa y control celular.

Resultados principales:
• Reducción de daño oxidativo
• Reparación eficiente de rupturas genéticas
• Protección contra mutaciones
• Conservación funcional tisular

Importancia: Los mecanismos encontrados podrían ayudar a entender resistencia al cáncer y estabilidad regenerativa. La capacidad del ajolote de mantener integridad genómica durante regeneración masiva es única entre vertebrados.`,
  },
  {
    country: 'Alemania', flag: '🇩🇪',
    institution: 'Medizinische Hochschule Hannover',
    title: 'Ambystoma Mexicanum Bioregeneration Center',
    topic: 'Regeneración tisular y cicatrización — enzima AmbLOXe',
    tags: ['Medicina', 'Regeneración'],
    url: 'https://www.mhh.de/',
    fullContent: `El centro investiga moléculas regenerativas producidas por el ajolote durante reparación tisular. Uno de los descubrimientos más importantes fue la enzima AmbLOXe, relacionada con regeneración y curación acelerada.

Resultados:
• Identificación de AmbLOXe
• Estudios sobre reducción de fibrosis
• Análisis de regeneración cutánea
• Desarrollo experimental de aplicaciones biomédicas

La enzima AmbLOXe podría conducir al desarrollo de terapias para mejorar cicatrización humana. Su papel en la modulación de la matriz extracelular durante regeneración abre posibilidades para tratamientos de heridas crónicas y fibrosis.`,
  },
  {
    country: 'Austria', flag: '🇦🇹',
    institution: 'Research Institute of Molecular Pathology — ERC Synergy Grant',
    title: 'AxoBrain Project — Proyecto Europeo de Regeneración Cerebral',
    topic: 'Regeneración cerebral completa — atlas neuronal',
    tags: ['Neurobiología', 'CRISPR'],
    url: 'https://cordis.europa.eu/project/id/101118739',
    fullContent: `El proyecto AxoBrain busca mapear completamente el cerebro del ajolote y entender cómo reconstruye circuitos neuronales después de daño severo.

Metodologías utilizadas:
• Single-cell transcriptomics
• CRISPR perturbation
• Conectómica
• Multi-ómica
• Live imaging

Resultados esperados:
• Atlas neuronal completo del ajolote
• Identificación de células regenerativas clave
• Comprensión de neurogénesis regenerativa

Aplicaciones potenciales en Alzheimer, Parkinson, lesiones medulares y otras enfermedades neurodegenerativas.`,
  },
  {
    country: 'Países Bajos', flag: '🇳🇱',
    institution: 'Hubrecht Institute — Otsuki Group',
    title: 'Principles of Vertebrate Tissue Regeneration',
    topic: 'Principios universales de regeneración tisular',
    tags: ['Regeneración', 'Evolución'],
    url: 'https://www.hubrecht.eu/research-groups/otsuki-group/',
    fullContent: `El laboratorio Otsuki Group investiga cómo se organizan tejidos regenerativos y cómo las células controlan forma, tamaño y estructura durante regeneración.

Resultados:
• Identificación de patrones regenerativos universales
• Modelos de organización espacial tisular
• Estudios sobre control de crecimiento tisular

El objetivo es descubrir reglas universales de regeneración aplicables a medicina regenerativa humana. Estos principios podrían eventualmente usarse para inducir regeneración parcial en tejidos mamíferos dañados.`,
  },
  {
    country: 'Reino Unido', flag: '🇬🇧',
    institution: 'University of Edinburgh',
    title: 'Axolotl Regeneration Research — Lab para salud humana',
    topic: 'Envejecimiento, cáncer y células madre',
    tags: ['Oncología', 'Células madre'],
    url: 'https://www.ed.ac.uk/',
    fullContent: `La universidad desarrolló una colonia especializada de ajolotes para investigar cómo mantienen estabilidad celular mientras regeneran tejidos complejos.

Resultados:
• Estudios sobre resistencia al cáncer durante regeneración
• Investigación sobre envejecimiento celular
• Análisis de células madre regenerativas

Podría ayudar a comprender por qué el ajolote evita tumores agresivos durante regeneración intensa, con implicaciones directas para oncología y terapias de células madre en humanos.`,
  },
  {
    country: 'Alemania / Austria', flag: '🇩🇪',
    institution: 'TU Dresden · Max Planck Institute · Vienna Biocenter',
    title: 'Application and optimization of CRISPR–Cas9-mediated genome engineering in axolotl',
    topic: 'Edición genética CRISPR — mutaciones dirigidas, knockout génico',
    tags: ['CRISPR', 'Genómica'],
    url: 'https://www.nature.com/articles/s41596-018-0071-0',
    fullContent: `Los investigadores desarrollaron protocolos funcionales de edición genética en el ajolote utilizando Cas9 y ARN guía. Este trabajo transformó al ajolote en un modelo moderno de genética experimental.

Resultados:
• Mutaciones dirigidas con alta precisión
• Inserción de proteínas fluorescentes (GFP) para observación in vivo
• Knockout génico de genes regenerativos clave
• Generación de ajolotes transgénicos estables

Este trabajo permitió por primera vez manipular genes específicos en tiempo real durante el proceso regenerativo, abriendo una nueva era en la investigación del ajolote.`,
  },
  {
    country: 'Internacional', flag: '🌍',
    institution: 'Nature Scientific Reports',
    title: 'Identification of Mutant Genes and Introgressed Tiger Salamander DNA in the Laboratory Axolotl',
    topic: 'Genética del albinismo y pigmentación — gen TYR',
    tags: ['Genómica', 'Evolución'],
    url: 'https://www.nature.com/articles/s41598-017-00059-1',
    fullContent: `Los investigadores identificaron genes responsables de variantes pigmentarias y analizaron líneas híbridas de laboratorio.

Resultados:
• Identificación del gen TYR (tirosinasa) relacionado con albinismo
• Caracterización de mutaciones asociadas al leucismo
• Deleciones genéticas específicas en líneas de laboratorio
• ADN híbrido introgresado de salamandra tigre (Ambystoma tigrinum)

Estos hallazgos son importantes para comprender genética pigmentaria, diferenciación de melanocitos, y el origen genético de las líneas de laboratorio mundiales. También ayuda a detectar hibridación no deseada en programas de conservación.`,
  },
  {
    country: 'Internacional', flag: '🌍',
    institution: 'Nature — Lab Animal',
    title: 'New insights into axolotl brain regeneration',
    topic: 'Neurogénesis regenerativa — regeneración del telencéfalo',
    tags: ['Neurobiología', 'Cerebro'],
    url: 'https://www.nature.com/articles/s41684-022-01063-3',
    fullContent: `El estudio analizó en detalle cómo el ajolote regenera regiones cerebrales funcionales incluyendo el telencéfalo.

Resultados:
• Demostración de regeneración completa del telencéfalo
• Activación de células madre neurales endógenas
• Reactivación de programas embrionarios en tejido adulto
• Identificación de factores moleculares clave

Importancia: Potencial aplicación directa en tratamiento de neurodegeneración humana. El ajolote puede recuperar funciones cognitivas y motoras después de lesiones cerebrales severas que serían irreversibles en mamíferos.`,
  },
  {
    country: 'Internacional', flag: '🌍',
    institution: 'Nature Scientific Reports',
    title: 'Initial characterization of the large genome of the salamander Ambystoma mexicanum',
    topic: 'Genoma de ~32 Gb — el más grande secuenciado en vertebrados',
    tags: ['Genómica', 'Evolución'],
    url: 'https://www.nature.com/articles/srep16413',
    fullContent: `Este estudio realizó la caracterización inicial del gigantesco genoma del ajolote, uno de los más grandes conocidos en vertebrados.

Resultados científicos:
• Genoma de aproximadamente 32 gigabases (10x mayor que el humano)
• Expansión masiva de elementos repetitivos y transposones
• Conservación de genes regenerativos ancestrales
• Presencia de intrones gigantes únicos

Este trabajo fue fundamental para iniciar estudios modernos de transcriptómica y genética regenerativa, pavimentando el camino para el ensamblaje completo del genoma en 2018 por Nowoshilow et al.`,
  },
  {
    country: 'México', flag: '🇲🇽',
    institution: 'UAM — Instituto Nacional de Cancerología',
    title: 'Genomics and epigenomics of axolotl regeneration',
    topic: 'Genómica y epigenética regenerativa — plasticidad celular extrema',
    tags: ['Epigenética', 'Genómica'],
    url: 'https://www.researchgate.net/publication/349592061_Genomics_and_epigenomics_of_axolotl_regeneration',
    fullContent: `Esta revisión científica analiza cómo la transcriptómica, genómica y epigenética participan en la regeneración del ajolote.

El gigantesco genoma del ajolote contiene regiones repetitivas masivas, elementos móviles, secuencias regulatorias complejas y control epigenético multicapa.

Resultados importantes:
• Identificación de genes regenerativos específicos únicos del ajolote
• Activación transitoria de rutas embrionarias durante regeneración
• Regulación epigenética dinámica durante proceso regenerativo
• Cambios dinámicos de cromatina coordinados

La epigenética podría explicar la plasticidad celular extrema del ajolote, y potencialmente usarse para "despertar" programas regenerativos latentes en células humanas.`,
  },
  {
    country: 'Alemania', flag: '🇩🇪',
    institution: 'University of Regensburg — Frontiers in Cell and Developmental Biology',
    title: 'Cut and Paste: The Mexican Axolotl',
    topic: 'Historia científica de la investigación regenerativa desde el s. XIX',
    tags: ['Historia', 'Regeneración'],
    url: 'https://www.frontiersin.org/articles/10.3389/fcell.2022.786533/full',
    fullContent: `El artículo documenta la evolución histórica de la investigación del ajolote desde el siglo XIX hasta laboratorios modernos.

Resultados históricos documentados:
• Introducción del ajolote a Europa en 1864 por la expedición francesa
• Desarrollo de los primeros modelos regenerativos experimentales
• Avances históricos en injertos y embriología experimental
• Consolidación del ajolote como modelo experimental global

El ajolote fue fundamental en el desarrollo histórico de la biología regenerativa, siendo uno de los primeros organismos utilizados sistemáticamente para estudiar desarrollo y regeneración de tejidos complejos.`,
  },
  {
    country: 'China', flag: '🇨🇳',
    institution: 'Ocean University of China — International Journal of Developmental Biology',
    title: 'The genetic odyssey of axolotl regeneration: insights and innovations',
    topic: 'Genética molecular regenerativa — redes celulares coordinadas',
    tags: ['Genómica', 'CRISPR'],
    url: 'https://ijdb.ehu.eus/article/pdf/240111yl',
    fullContent: `La revisión analiza genes regenerativos, transcriptómica, CRISPR y comunicación celular durante regeneración del ajolote.

Resultados:
• Activación coordinada de programas embrionarios
• Coordinación molecular regenerativa multicapa
• Participación crítica del sistema inmunológico
• Regulación espacial tisular precisa

Demuestra que la regeneración depende de redes celulares complejas y altamente coordinadas, no de respuestas celulares individuales. La comunicación intercelular es fundamental para la regeneración exitosa.`,
  },
  {
    country: 'Argentina', flag: '🇦🇷',
    institution: 'Universidad Nacional de La Plata — Tesis Doctoral',
    title: 'Regeneración de tejidos: una aproximación de biología de sistemas',
    topic: 'Regeneración medular con modelado computacional y biología de sistemas',
    tags: ['Genómica', 'Regeneración'],
    url: 'https://sedici.unlp.edu.ar/handle/10915/139746',
    fullContent: `Tesis doctoral que utiliza biología computacional y modelado matemático para estudiar regeneración medular en ajolote.

Resultados:
• Activación y caracterización de células ependimales regenerativas
• Dinámica regenerativa modelada computacionalmente
• Reactivación de programas embrionarios documentada matemáticamente

Representa una de las investigaciones latinoamericanas más avanzadas sobre regeneración medular. Integra biología molecular con modelos matemáticos para predecir comportamiento regenerativo.`,
  },
  {
    country: 'EE.UU.', flag: '🇺🇸',
    institution: 'Harvard University — Tesis Doctoral',
    title: 'Insights into the mechanisms and limitations of axolotl limb regeneration',
    topic: 'Límites biológicos de la regeneración — genes críticos identificados',
    tags: ['Regeneración', 'Genómica'],
    url: 'https://dash.harvard.edu/handle/1/42061474',
    fullContent: `Tesis doctoral de Harvard que investiga los mecanismos y también los límites biológicos de la regeneración del ajolote.

Resultados:
• Identificación de genes críticos para el proceso regenerativo
• Documentación de límites relacionados con tamaño corporal del organismo
• Descripción de regulación espacial compleja durante regeneración

Hallazgo importante: incluso el ajolote posee límites biológicos regenerativos. La regeneración no es ilimitada y depende de múltiples factores moleculares y morfológicos. Este trabajo equilibra el entusiasmo regenerativo con rigor científico.`,
  },
  {
    country: 'Japón', flag: '🇯🇵',
    institution: 'Okayama University — Developmental Biology',
    title: 'Fgf- and Bmp-signaling regulate gill regeneration in axolotl',
    topic: 'Regeneración de branquias — señales FGF y BMP conservadas evolutivamente',
    tags: ['Señalización', 'Regeneración'],
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S0012160619301045',
    fullContent: `La investigación estudió la regeneración de branquias en ajolote, identificando el papel de las señales FGF y BMP.

Resultados:
• Identificación de señales FGF y BMP como reguladores clave
• Control molecular preciso de regeneración branquial
• Participación de vías moleculares conservadas evolutivamente en vertebrados

Importancia: Demuestra que rutas moleculares ancestrales controlan regeneración en vertebrados. La conservación evolutiva de estas vías sugiere que podrían activarse en otras especies, incluyendo mamíferos.`,
  },
];

const TAG_COLORS = {
  'Regeneración': 'bg-primary/10 text-primary', 'Blastema': 'bg-emerald-100 text-emerald-800',
  'Conservación': 'bg-amber-100 text-amber-800', 'Censo': 'bg-red-100 text-red-800', 'Xochimilco': 'bg-emerald-100 text-emerald-800', 'eDNA': 'bg-teal-100 text-teal-800',
  'ADN': 'bg-blue-100 text-blue-800', 'Genómica': 'bg-blue-100 text-blue-800',
  'Medicina': 'bg-rose-100 text-rose-800', 'CRISPR': 'bg-violet-100 text-violet-800',
  'Neurobiología': 'bg-purple-100 text-purple-800', 'Evolución': 'bg-cyan-100 text-cyan-800',
  'Oncología': 'bg-red-100 text-red-800', 'Células madre': 'bg-pink-100 text-pink-800',
  'Epigenética': 'bg-indigo-100 text-indigo-800', 'Historia': 'bg-amber-100 text-amber-800',
  'Señalización': 'bg-green-100 text-green-800', 'Cerebro': 'bg-purple-100 text-purple-800',
  'Cerebro': 'bg-purple-100 text-purple-800',
};

// Santuario Ajolote / CIMA A.C. conservation block
function SantuarioBlock() {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-6 rounded-2xl overflow-hidden border border-primary/20 shadow-lg">
      {/* Header with logos */}
      <div className="bg-gradient-to-br from-primary/10 via-emerald-50 to-amber-50 px-6 py-6">
        <div className="flex flex-wrap items-center gap-5 mb-5">
          <img src="https://media.base44.com/images/public/6a0001949163ade945a0c48b/f8c0d11d9_Ajoloteverdenegativo1.png"
            alt="Santuario Ajolote" className="h-14 w-14 rounded-xl object-contain bg-black p-1.5" />
          <img src="https://media.base44.com/images/public/6a0001949163ade945a0c48b/32b8deae4_logocircularilustrativotiendavegatalesverde.jpg"
            alt="Guardián del Ajolote CIMA A.C." className="h-14 w-14 rounded-full object-cover border-2 border-primary/20" />
          <img src="https://media.base44.com/images/public/6a0001949163ade945a0c48b/6b2e997f7_Logotipopositivo1.png"
            alt="Santuario Ajolote logotipo" className="h-10 object-contain" />
        </div>
        <blockquote className="text-primary font-heading font-semibold text-lg italic leading-snug mb-2">
          "No podemos salvar al ajolote si primero no salvamos el humedal."
        </blockquote>
        <p className="text-sm text-muted-foreground">— CIMA A.C. · Santuario Ajolote, Xochimilco</p>
      </div>

      <div className="p-6 space-y-5 bg-card">
        {/* About */}
        <div>
          <h3 className="font-heading font-bold text-lg mb-2">CIMA A.C. — Santuario Ajolote</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Organización civil con más de 5 años de trabajo comunitario en los humedales de Xochimilco y Tláhuac. Su proyecto integral de conservación genética integra restauración ecológica, economía circular, ciencia ciudadana y colaboración académica para proteger al ajolote mexicano en su hábitat natural.
          </p>
        </div>

        {/* Key facts grid */}
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { label: '11 familias genéticas', desc: 'Provenientes del humedal de Xochimilco y Tláhuac' },
            { label: '+180 ejemplares', desc: 'En conservación activa y exhibición comunitaria' },
            { label: '~800 ajolotes reproducidos', desc: 'En 5 años de programa de reproducción controlada' },
            { label: '+150 familias', desc: 'Vinculadas al Embarcadero Fernando Celada protegen el humedal' },
          ].map(f => (
            <div key={f.label} className="rounded-xl bg-primary/5 border border-primary/10 p-3">
              <p className="font-heading font-bold text-primary text-sm">{f.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* 6 ejes */}
        <div>
          <p className="font-medium text-sm mb-2">6 Ejes rectores del proyecto:</p>
          <div className="flex flex-wrap gap-1.5">
            {['Conservación genética', 'Restauración ecológica', 'Economía circular', 'Ciencia ciudadana', 'Educación ambiental', 'Colaboración académica'].map(e => (
              <span key={e} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">{e}</span>
            ))}
          </div>
        </div>

        {/* Collaborators */}
        <div>
          <p className="font-medium text-sm mb-2">Colaboraciones científicas:</p>
          <p className="text-sm text-muted-foreground">Laboratorio de Anfibios CORENA – SEDEMA CDMX · <strong>CINVESTAV</strong> (11 ejemplares donados para análisis genéticos, evaluación de endogamia, estudios de salud y parásitos)</p>
        </div>

        {/* Social media */}
        <div className="border-t border-border/50 pt-4">
          <p className="text-sm font-medium mb-3">Síguenos en redes sociales:</p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.instagram.com/santuarioajolote" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-200/50 hover:border-purple-300 transition-colors text-sm font-medium text-purple-700">
              <Instagram className="w-4 h-4" /> @santuarioajolote
            </a>
            <a href="https://www.tiktok.com/@santuarioajolote" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary border border-border/50 hover:border-foreground/20 transition-colors text-sm font-medium">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/></svg>
              @santuarioajolote
            </a>
            <a href="https://www.facebook.com/santuarioajolote" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-50 border border-blue-200/50 hover:border-blue-300 transition-colors text-sm font-medium text-blue-700">
              <Facebook className="w-4 h-4" /> Santuario Ajolote
            </a>
            <a href="https://www.linkedin.com/company/santuarioajolote" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-sky-50 border border-sky-200/50 hover:border-sky-300 transition-colors text-sm font-medium text-sky-700">
              <Linkedin className="w-4 h-4" /> Santuario Ajolote
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Science() {
  const { collapse, collapseStr } = useCollapseProgress();
  const [activeSection, setActiveSection] = useState('historia');
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [activeTab, setActiveTab] = useState('enciclopedia');
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const active = ENCYCLOPEDIA_SECTIONS.find(s => s.id === activeSection);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageMeta {...getPageSeo('ciencia', 'es')} />

      {/* ── Hero editorial header ── */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-teal-700 to-blue-800" />
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "url('https://media.base44.com/images/public/6a0001949163ade945a0c48b/faa85d842_Ajolote_02.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />

          <div className="relative z-10 px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              {/* Label strip */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  🔬 Ciencia
                </span>
                <span className="inline-flex items-center gap-1.5 bg-blue-400/20 border border-blue-400/40 text-blue-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  📚 Academia
                </span>
                <span className="inline-flex items-center gap-1.5 bg-red-400/20 border border-red-400/40 text-red-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  ⚖️ Gobierno
                </span>
                <span className="inline-flex items-center gap-1.5 bg-emerald-400/20 border border-emerald-400/40 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  🏛️ Historia
                </span>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
                Historia, Academia, Ciencia y Gobierno
              </h1>
              <p className="text-white/75 text-sm md:text-base max-w-xl leading-relaxed">
                Enciclopedia científica · Investigaciones internacionales · Acciones legales · Gobierno del <em>Ambystoma mexicanum</em>
              </p>
            </div>
            {/* Stats grid — 3 cols × 4 rows */}
            <div className="grid grid-cols-3 gap-1.5 shrink-0 w-[210px]">
              {[
                { n: '18', label: 'Publicaciones', color: 'bg-yellow-400/20 border-yellow-400/30 text-yellow-100' },
                { n: '9', label: 'Países', color: 'bg-blue-400/20 border-blue-400/30 text-blue-100' },
                { n: '32 Gb', label: 'Genoma', color: 'bg-emerald-400/20 border-emerald-400/30 text-emerald-100' },
                { n: '99.4%', label: 'Declive', color: 'bg-red-400/20 border-red-400/30 text-red-100' },
                { n: '60+', label: 'Labs globales', color: 'bg-cyan-400/20 border-cyan-400/30 text-cyan-100' },
                { n: '1864', label: 'Neotenia', color: 'bg-amber-400/20 border-amber-400/30 text-amber-100' },
                { n: collapse.toFixed(2) + '%', label: 'Colapso', color: 'bg-red-400/20 border-red-400/30 text-red-100' },
                { n: '2', label: 'Avistamientos', color: 'bg-red-400/20 border-red-400/30 text-red-100' },
                { n: '11', label: 'Familias gen.', color: 'bg-teal-400/20 border-teal-400/30 text-teal-100' },
                { n: '800+', label: 'Reproducidos', color: 'bg-orange-400/20 border-orange-400/30 text-orange-100' },
                { n: '34', label: 'A París 1863', color: 'bg-indigo-400/20 border-indigo-400/30 text-indigo-100' },
                { n: '10×', label: 'vs humano', color: 'bg-pink-400/20 border-pink-400/30 text-pink-100' },
              ].map(s => (
                <div key={s.n} className={`rounded-xl border px-1.5 py-2 text-center ${s.color}`}>
                  <p className="text-sm font-bold font-heading leading-tight">{s.n}</p>
                  <p className="text-[9px] mt-0.5 opacity-80 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        {/* Navigation tabs — pill style con colores por sección */}
        <div className="bg-white dark:bg-card rounded-2xl border border-border/60 shadow-sm p-2">
          <TabsList className="flex flex-wrap h-auto gap-1.5 p-0 bg-transparent">
            <TabsTrigger value="enciclopedia" className="rounded-xl flex items-center gap-2 px-4 py-2 text-sm font-semibold border border-transparent text-slate-500 hover:text-blue-700 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-700 data-[state=active]:shadow-md transition-all">
              <Microscope className="w-4 h-4" /> Enciclopedia Científica
            </TabsTrigger>
            <TabsTrigger value="investigaciones" className="rounded-xl flex items-center gap-2 px-4 py-2 text-sm font-semibold border border-transparent text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:border-emerald-700 data-[state=active]:shadow-md transition-all">
              <Globe className="w-4 h-4" /> Publicaciones
            </TabsTrigger>

            <TabsTrigger value="historia-xochimilco" className="rounded-xl flex items-center gap-2 px-4 py-2 text-sm font-semibold border border-transparent text-slate-500 hover:text-violet-700 hover:bg-violet-50 data-[state=active]:bg-violet-600 data-[state=active]:text-white data-[state=active]:border-violet-700 data-[state=active]:shadow-md transition-all">
              <BookOpen className="w-4 h-4" /> 🏛️ Historia Xochimilco
            </TabsTrigger>
            <TabsTrigger value="drenajes" className="rounded-xl flex items-center gap-2 px-4 py-2 text-sm font-semibold border border-transparent text-slate-500 hover:text-orange-700 hover:bg-orange-50 data-[state=active]:bg-orange-600 data-[state=active]:text-white data-[state=active]:border-orange-700 data-[state=active]:shadow-md transition-all">
              <AlertTriangle className="w-4 h-4" /> ☣️ Drenajes
            </TabsTrigger>
            <TabsTrigger value="cempasuchil" className="rounded-xl flex items-center gap-2 px-4 py-2 text-sm font-semibold border border-transparent text-slate-500 hover:text-orange-700 hover:bg-orange-50 data-[state=active]:bg-orange-600 data-[state=active]:text-white data-[state=active]:border-orange-700 data-[state=active]:shadow-md transition-all">
              <Flower2 className="w-4 h-4" /> 🌼 Cempasúchil
            </TabsTrigger>
            <TabsTrigger value="noticias" className="rounded-xl flex items-center gap-2 px-4 py-2 text-sm font-semibold border border-transparent text-slate-500 hover:text-blue-700 hover:bg-blue-50 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-700 data-[state=active]:shadow-md transition-all">
              📰 Noticias
            </TabsTrigger>
            <TabsTrigger value="mapa" className="rounded-xl flex items-center gap-2 px-4 py-2 text-sm font-bold border-2 border-cyan-400 text-cyan-700 hover:bg-cyan-50 data-[state=active]:bg-cyan-600 data-[state=active]:text-white data-[state=active]:border-cyan-700 data-[state=active]:shadow-md transition-all">
              <Map className="w-4 h-4" /> 🗺️ Mapa
            </TabsTrigger>

            </TabsList>
            </div>

        {/* ENCYCLOPEDIA */}
        <TabsContent value="enciclopedia">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground px-1 mb-1">Secciones</p>
              <div className="rounded-2xl border border-border/50 bg-white dark:bg-card shadow-sm overflow-hidden divide-y divide-border/40">
                {[
                  { id: 'historia', icon: BookOpen, title: 'Historia Científica', accent: 'bg-amber-500', light: 'bg-amber-50 text-amber-800', hover: 'hover:bg-amber-50 hover:text-amber-800', dot: 'bg-amber-500' },
                  { id: 'genomica', icon: Dna, title: 'Genómica', accent: 'bg-blue-600', light: 'bg-blue-50 text-blue-800', hover: 'hover:bg-blue-50 hover:text-blue-800', dot: 'bg-blue-500' },
                  { id: 'neurobiologia', icon: Brain, title: 'Neurobiología', accent: 'bg-violet-600', light: 'bg-violet-50 text-violet-800', hover: 'hover:bg-violet-50 hover:text-violet-800', dot: 'bg-violet-500' },
                  { id: 'medicina', icon: FlaskConical, title: 'Medicina Regenerativa', accent: 'bg-rose-600', light: 'bg-rose-50 text-rose-800', hover: 'hover:bg-rose-50 hover:text-rose-800', dot: 'bg-rose-500' },
                  { id: 'conservacion', icon: TreePine, title: 'Conservación', accent: 'bg-emerald-600', light: 'bg-emerald-50 text-emerald-800', hover: 'hover:bg-emerald-50 hover:text-emerald-800', dot: 'bg-emerald-500' },
                ].map((s) => {
                  const Icon = s.icon;
                  const isActive = activeSection === s.id && activeTab === 'enciclopedia';
                  return (
                    <button key={s.id} onClick={() => setActiveSection(s.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all text-sm font-medium group ${isActive ? s.light : `text-foreground/70 ${s.hover}`}`}>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${isActive ? s.accent : 'bg-muted group-hover:bg-muted/80'}`}>
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-muted-foreground'}`} />
                      </div>
                      <span className="flex-1">{s.title}</span>
                      {isActive && <span className={`w-2 h-2 rounded-full flex-shrink-0 ${s.dot}`} />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-3">
              {active && (
                <motion.div key={activeSection} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
                  <Card className="rounded-2xl border-border/50 shadow-sm overflow-hidden">
                    {/* Colored header strip */}
                    <div className={`${active.headerBg || 'bg-gradient-to-r from-blue-600 to-blue-700'} px-6 py-5 flex items-center gap-4`}>
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                        <active.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="font-heading text-2xl text-white">{active.title}</CardTitle>
                        {active.subtitle && <p className="text-white/70 text-xs mt-0.5">{active.subtitle}</p>}
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        {active.richComponent === 'genomica' && <GenomicaSection />}
                        {active.richComponent === 'neurobiologia' && <NeurobiologiaSection />}
                        {active.richComponent === 'medicina' && <MedicinaSection />}
                        {active.richComponent === 'conservacion' && <ConservacionSection />}
                        {!active.richComponent && (
                          <>
                            {active.images && (
                              <div className="grid grid-cols-3 gap-3 mb-4">
                                {active.images.map((img, i) => (
                                  <div key={i} className="rounded-xl overflow-hidden shadow-sm ring-1 ring-border/40">
                                    <img src={img.url} alt={img.caption} className="w-full h-36 object-cover" />
                                    <p className="text-xs text-muted-foreground mt-1 px-2 pb-2 text-center leading-tight">{img.caption}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                            {active.content.split('\n\n').map((para, i) => (
                              para.startsWith('━━━')
                                ? <h3 key={i} className="font-heading font-bold text-base text-primary pt-3 pb-1 border-b-2 border-primary/20 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                                    {para.replace(/━━━\s*/g, '').replace(/\s*━━━/g, '')}
                                  </h3>
                                : <p key={i} className="text-sm leading-7 text-foreground/90">{para}</p>
                            ))}
                            {active.dummerilContent && (
                              <div className="mt-6 space-y-4 border-t border-border/40 pt-6">
                                <div className="grid grid-cols-3 gap-3">
                                  {active.dummerilImages.map((img, i) => (
                                    <div key={i} className="rounded-xl overflow-hidden shadow-sm ring-1 ring-border/40">
                                      <img src={img.url} alt={img.caption} className="w-full h-36 object-cover" />
                                      <p className="text-xs text-muted-foreground mt-1 px-2 pb-2 text-center leading-tight">{img.caption}</p>
                                    </div>
                                  ))}
                                </div>
                                {active.dummerilContent.split('\n\n').map((para, i) => (
                                  para.startsWith('━━━')
                                    ? <h3 key={i} className="font-heading font-bold text-base text-primary pt-3 pb-1 border-b-2 border-primary/20 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                                        {para.replace(/━━━\s*/g, '').replace(/\s*━━━/g, '')}
                                      </h3>
                                    : <p key={i} className="text-sm leading-7 text-foreground/90">{para}</p>
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                  {active.id === 'historia' && (
                    <div className="mt-8 space-y-8">
                      {/* Especies Ambystoma */}
                      <div className="space-y-4">
                        <div className="rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 px-6 py-4 text-white">
                          <h2 className="font-heading text-lg font-bold mb-1">🔬 Especies del Género <em>Ambystoma</em> Documentadas desde Duméril</h2>
                          <p className="text-blue-100 text-xs">Las 8 especies más importantes a partir del trabajo taxonómico de Auguste Duméril · Museo de Historia Natural de París (1863–1866)</p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {DUMMERIL_ESPECIES.map((sp) => (
                            <div key={sp.nombre} className={`rounded-2xl border-2 p-4 space-y-2 bg-card ${sp.borderColor} hover:shadow-md transition-shadow`}>
                              <div className="flex items-start justify-between gap-1">
                                <span className="text-2xl">{sp.icon}</span>
                                <Badge className={`text-xs border ${sp.color} text-right`}>
                                  {sp.estado.includes('Crítico') ? '🔴' : sp.estado.includes('Peligro') ? '🟠' : '🟡'} {sp.estado}
                                </Badge>
                              </div>
                              <h3 className="font-heading font-bold text-sm italic leading-tight">{sp.nombre}</h3>
                              <p className="text-xs text-muted-foreground font-medium">{sp.habitat}</p>
                              <p className="text-xs text-foreground/80 leading-relaxed">{sp.descripcion}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm">
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-4">
                          <h3 className="font-heading font-bold text-lg text-white">📅 Línea del Tiempo — Auguste Duméril y el Ajolote</h3>
                        </div>
                        <div className="p-6 space-y-3 bg-amber-50/40">
                          {DUMMERIL_TIMELINE.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className={`w-16 flex-shrink-0 text-xs font-bold text-center py-1.5 rounded-lg text-white shadow-sm ${item.color}`}>{item.year}</div>
                              <div className="flex-1 bg-white/70 rounded-lg px-3 py-2 border border-border/30">
                                <p className="text-sm leading-relaxed text-foreground">{item.event}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {active.extraComponent === 'conservacion' && (
                    <>
                      <SantuarioBlock />
                      <div className="mt-6">
                        <ExtinctionClock />
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </TabsContent>

        {/* RESEARCH PAPERS — consultables con comentarios */}
        <TabsContent value="investigaciones">
          {/* Section header */}
          <div className="rounded-2xl bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 px-6 py-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h2 className="font-heading text-xl font-bold text-white mb-1">Publicaciones e Investigaciones Científicas</h2>
              <p className="text-emerald-100 text-sm">
                {RESEARCH_PAPERS.length} publicaciones de {new Set(RESEARCH_PAPERS.map(r => r.country)).size} países · Haz clic en cualquier artículo para leerlo y comentar
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 flex-wrap items-start sm:items-center">
              {['México 🇲🇽', 'Europa 🇪🇺', 'Internacional 🌍'].map(g => (
                <span key={g} className="text-xs bg-white/15 border border-white/20 text-white px-3 py-1 rounded-full font-medium">{g}</span>
              ))}
              <button
                onClick={() => setShowSubmitForm(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-emerald-800 text-sm font-bold hover:bg-emerald-50 transition-all shadow-md hover:shadow-lg hover:scale-105 shrink-0"
              >
                <Plus className="w-4 h-4" />
                Compartir Publicación / Share Research
              </button>
            </div>
          </div>

          {/* Submit modal */}
          <AnimatePresence>
            {showSubmitForm && (
              <mot.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={() => setShowSubmitForm(false)}>
                <mot.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  className="relative z-10 bg-card rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto"
                  onClick={e => e.stopPropagation()}
                >
                  <SubmitPublicationForm onClose={() => setShowSubmitForm(false)} />
                </mot.div>
              </mot.div>
            )}
          </AnimatePresence>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RESEARCH_PAPERS.map((paper, i) => (

              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                <Card
                  className="rounded-2xl border-border/50 hover:shadow-xl hover:border-emerald-300/60 transition-all h-full flex flex-col cursor-pointer group overflow-hidden"
                  onClick={() => setSelectedPaper(paper)}
                >
                  {/* Top accent bar */}
                  <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500" />
                  <CardHeader className="pb-2 pt-4">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{paper.flag || '🌍'}</span>
                        <Badge variant="outline" className="text-xs flex-shrink-0 bg-emerald-50 border-emerald-200 text-emerald-700">{paper.country}</Badge>
                      </div>
                      {paper.url && (
                        <a href={paper.url} target="_blank" rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="text-muted-foreground hover:text-emerald-600 transition-colors">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground font-semibold">{paper.institution}</p>
                    <CardTitle className="font-heading text-sm leading-snug mt-1.5 group-hover:text-emerald-700 transition-colors">{paper.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col flex-1">
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1 line-clamp-3">{paper.topic}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {paper.tags.map(tag => (
                        <span key={tag} className={`text-xs px-2 py-0.5 rounded-full font-medium ${TAG_COLORS[tag] || 'bg-secondary text-secondary-foreground'}`}>{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-border/40">
                      <span className="text-xs text-emerald-600 font-semibold group-hover:underline flex items-center gap-1">
                        Leer y comentar <span className="text-base">→</span>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Community publications from entity */}
          <CommunityPublications lang="es" />

        </TabsContent>

        {/* HISTORIA DE XOCHIMILCO */}
        <TabsContent value="historia-xochimilco">
          <div className="rounded-2xl bg-gradient-to-r from-primary via-teal-700 to-primary px-6 py-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white">🏛️ Historia de Xochimilco</h2>
                <p className="text-teal-100 text-xs mt-0.5">Archivo histórico comunitario · Documentos · Fotografías · Memoria colectiva</p>
              </div>
            </div>
          </div>
          <HistoriaXochimilcoInline />
        </TabsContent>



        {/* NOTICIAS AUTOMÁTICAS */}
        <TabsContent value="noticias">
          <div className="rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 px-6 py-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
                📰
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white">Noticias del Día</h2>
                <p className="text-blue-100 text-xs mt-0.5">Actualización automática diaria · Drenajes, calidad del agua y ajolote</p>
              </div>
            </div>
          </div>
          <NoticiasTab />
        </TabsContent>

        {/* REPORTAJE DRENAJES */}
        <TabsContent value="drenajes">
          <div className="rounded-2xl bg-gradient-to-r from-red-800 via-red-700 to-orange-800 px-6 py-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white">☣️ Análisis Regional del Drenaje y Descargas</h2>
                <p className="text-red-100 text-xs mt-0.5">Sistema Xochimilco–Tláhuac–Chalco · 11,000–20,000 conexiones contaminantes · Delitos ambientales tipificados · PDF completo: <a href="https://media.base44.com/files/public/6a0001949163ade945a0c48b/1fa884f9f_AnlisisregionaldeldrenajeydescargasenelsistemaXochimilco.pdf" target="_blank" rel="noopener noreferrer" className="underline text-yellow-300 hover:text-yellow-200">Descargar PDF ↓</a></p>
              </div>
            </div>
          </div>
          <ReportajeDrenajes compact={false} />
        </TabsContent>

        {/* CEMPASÚCHIL — BIOPIRATERÍA */}
        <TabsContent value="cempasuchil">
          <div className="rounded-2xl bg-gradient-to-r from-orange-600 via-amber-500 to-rose-600 px-6 py-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Flower2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white">🌼 Cempasúchil: Biopiratería y Soberanía Genética</h2>
                <p className="text-amber-100 text-xs mt-0.5">Investigación de temporada · Día de Muertos 2026 · Patentes, híbridos F1, insumos fitosanitarios y presión sobre el humedal</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border p-4 bg-card">
            <p className="text-sm text-muted-foreground mb-3">
              Investigación científica, periodística y cultural sobre la apropiación de recursos genéticos del cempasúchil, el mejoramiento empresarial, la dependencia de semillas F1, los kits fitosanitarios y la posible contaminación de los canales de Xochimilco. Incluye tablas, cronologías, expedientes de patentes, protocolos de muestreo y bibliografía completa.
            </p>
            <Link to="/observatorio-cempasuchil">
              <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
                Leer investigación completa <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </TabsContent>

        {/* MAPA DE CONSERVACIÓN */}
        <TabsContent value="mapa">
          <div className="rounded-2xl bg-gradient-to-r from-cyan-600 via-teal-600 to-cyan-700 px-6 py-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Map className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-white">🗺️ Observatorio de Conservación</h2>
                <p className="text-cyan-100 text-xs mt-0.5">Mapa interactivo · Avistamientos · Incidencias ambientales · Actores del humedal</p>
              </div>
            </div>
          </div>
          <ConservationMap />
        </TabsContent>

      </Tabs>

      <ArticleDetail
        paper={selectedPaper}
        open={!!selectedPaper}
        onOpenChange={(v) => { if (!v) setSelectedPaper(null); }}
      />
    </div>
  );
}