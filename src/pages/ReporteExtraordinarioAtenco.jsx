import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  AlertTriangle, Skull, FlaskConical, Droplets, Activity, Wind, Fish,
  Bird, ShieldAlert, Phone, Printer, ArrowRight, ArrowLeft, Microscope,
  HeartPulse, Scale, FileText, Globe, ChevronDown,
} from 'lucide-react';
import SeoHead from '@/components/SEO/SeoHead';
import { downloadElementAsPDF } from '@/lib/pdfExport';
import {
  VIDEOS, PARAMETROS_MUESTREO, OBSERVACIONES_AMBIENTALES,
  MEDIDAS_PRECAUTORIAS, HIPOTESIS_MECANISMOS, SECCIONES_REPORTE,
} from '@/lib/reporteExtraordinarioContent';

export default function ReporteExtraordinarioAtenco() {
  const [lang, setLang] = useState('es');
  const [downloading, setDownloading] = useState(false);
  const toggleLang = () => setLang(prev => (prev === 'es' ? 'en' : 'es'));
  const isEs = lang === 'es';

  const handlePrint = async () => {
    setDownloading(true);
    try {
      await downloadElementAsPDF('reporte-extraordinario', 'Reporte_Extraordinario_Atenco_30102026.pdf');
    } finally {
      setDownloading(false);
    }
  };

  const seo = {
    title: isEs
      ? 'Reporte Técnico Extraordinario · Mortandad de Peces y Fauna Silvestre | Santuario Ajolote'
      : 'Extraordinary Technical Report · Fish and Wildlife Mortality | Santuario Ajolote',
    description: isEs
      ? 'Informe preliminar de investigación ambiental, ecotoxicología y vigilancia ciudadana. Alteraciones fisicoquímicas del agua y posible relación con eventos de mortandad de peces y fauna silvestre en San Gregorio Atlapulco, Xochimilco. 30 de octubre de 2026. Santuario Ajolote A.C. y CIMA A.C.'
      : 'Preliminary environmental research, ecotoxicology and citizen monitoring report. Physicochemical alterations of water and possible relationship with fish and wildlife mortality events in San Gregorio Atlapulco, Xochimilco. October 30, 2026. Santuario Ajolote A.C. and CIMA A.C.',
    keywords: isEs
      ? 'mortandad de peces, San Gregorio Atlapulco, Xochimilco, drenaje Atenco, contaminación agua, anoxia, cloro residual, ecotoxicología, bromo, pH alcalino, gallareta, tilapia, ciencia ciudadana, Santuario Ajolote, CIMA A.C., PROFEPA, PAOT, Área Natural Protegida, ANP Xochimilco, monitoreo ambiental, salud pública, sulfuro de hidrógeno, amoniaco, oxidantes residuales, Ambystoma mexicanum, ajolote mexicano'
      : 'fish mortality, San Gregorio Atlapulco, Xochimilco, Atenco drainage, water pollution, anoxia, residual chlorine, ecotoxicology, bromine, alkaline pH, gallareta, tilapia, citizen science, Santuario Ajolote, CIMA A.C., PROFEPA, PAOT, Natural Protected Area, Xochimilco ANP, environmental monitoring, public health, hydrogen sulfide, ammonia, residual oxidants, Ambystoma mexicanum, Mexican axolotl',
    canonical: 'https://axolotfinder.org/reporte-extraordinario-atenco',
    alternateCanonical: 'https://axolotfinder.org/reporte-extraordinario-atenco',
    ogImage: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/078e2e2f5_aguasnegrasatenco.jpg',
    ogType: 'article',
    lang,
    geo: {
      region: 'MX-CMX',
      placename: 'San Gregorio Atlapulco, Xochimilco, Ciudad de México',
      position: '19.256054;-99.055806',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ScholarlyArticle',
          name: isEs
            ? 'Reporte Técnico Extraordinario: Alteraciones fisicoquímicas del agua y mortandad de peces en San Gregorio Atlapulco'
            : 'Extraordinary Technical Report: Physicochemical water alterations and fish mortality in San Gregorio Atlapulco',
          description: isEs
            ? 'Informe preliminar de investigación ambiental, ecotoxicología y vigilancia ciudadana. 30 de octubre de 2026.'
            : 'Preliminary environmental research, ecotoxicology and citizen monitoring report. October 30, 2026.',
          author: { '@type': 'Organization', name: 'Santuario Ajolote A.C. y CIMA A.C.' },
          datePublished: '2026-10-31',
          dateModified: '2026-10-31',
          about: [
            { '@type': 'Thing', name: 'Ambystoma mexicanum' },
            { '@type': 'Place', name: 'San Gregorio Atlapulco, Xochimilco', geo: { '@type': 'GeoCoordinates', latitude: 19.256054, longitude: -99.055806 } },
            { '@type': 'Thing', name: 'water quality monitoring' },
            { '@type': 'Thing', name: 'fish mortality' },
          ],
          keywords: ['water quality', 'fish mortality', 'anoxia', 'ecotoxicology', 'citizen science', 'Xochimilco', 'axolotl conservation', 'environmental monitoring'],
        },
        {
          '@type': 'Dataset',
          name: 'Reporte Extraordinario Atenco 30-10-2026',
          description: 'Tamizaje colorimétrico extraordinario en 4 puntos del embarcadero de Atenco con mortandad contemporánea de fauna.',
          creator: { '@type': 'Organization', name: 'Santuario Ajolote A.C. y CIMA A.C.' },
          datePublished: '2026-10-31',
          spatialCoverage: { '@type': 'Place', name: 'Embarcadero de Atenco, San Gregorio Atlapulco, Xochimilco, CDMX' },
          license: 'https://creativecommons.org/licenses/by-sa/4.0/',
          isAccessibleForFree: true,
        },
      ],
    },
  };

  return (
    <div id="reporte-extraordinario" className="min-h-screen bg-gradient-to-b from-red-50/40 via-white to-emerald-50/20">
      <SeoHead {...seo} />

      {/* ═══ HERO ═══ */}
      <header className="relative overflow-hidden border-b-4 border-red-600">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-emerald-950 to-stone-950" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://media.base44.com/images/public/6a0001949163ade945a0c48b/078e2e2f5_aguasnegrasatenco.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Top bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <Link to="/monitoreo-contaminantes-atenco" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-medium transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              {isEs ? 'Volver al Monitoreo 2024-2026' : 'Back to Monitoring 2024-2026'}
            </Link>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full animate-pulse">
                <AlertTriangle className="w-3 h-3" />
                {isEs ? 'Urgente' : 'Urgent'}
              </span>
              <button onClick={toggleLang} className="inline-flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20 transition-colors">
                <Globe className="w-3 h-3" />
                {isEs ? 'EN' : 'ES'}
              </button>
            </div>
          </div>

          {/* Classification badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/90 text-amber-950 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            <FileText className="w-3.5 h-3.5" />
            {isEs ? 'Informe preliminar de investigación ambiental' : 'Preliminary environmental research report'}
          </div>

          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 drop-shadow-lg">
            {isEs
              ? 'Reporte Técnico Extraordinario'
              : 'Extraordinary Technical Report'}
            <span className="block text-red-300 text-base sm:text-xl lg:text-2xl font-medium mt-2">
              {isEs
                ? 'Alteraciones fisicoquímicas del agua y posible relación con eventos de mortandad de peces y fauna silvestre'
                : 'Physicochemical water alterations and possible relationship with fish and wildlife mortality events'}
            </span>
          </h1>

          {/* Metadata grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            <MetaCard icon={FlaskConical} label={isEs ? 'Fecha de muestreo' : 'Sampling date'} value="30/10/2026" />
            <MetaCard icon={Droplets} label={isEs ? 'Zona de estudio' : 'Study area'} value={isEs ? 'Embarcadero de Atenco' : 'Atenco Dock'} />
            <MetaCard icon={Activity} label={isEs ? 'Organizaciones' : 'Organizations'} value="Santuario Ajolote · CIMA A.C." />
            <MetaCard icon={AlertTriangle} label={isEs ? 'Clasificación' : 'Classification'} value={isEs ? 'Urgente' : 'Urgent'} />
          </div>

          {/* Quick nav */}
          <div className="mt-6 flex flex-wrap gap-2">
            {SECCIONES_REPORTE.slice(0, 6).map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-[10px] sm:text-xs text-white/70 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-full border border-white/10 transition-colors">
                {s.num}. {isEs ? s.titulo : s.titulo_en}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* ═══ GOVERNMENT CALL BANNER ═══ */}
      <section className="bg-red-600 text-white py-4 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <ShieldAlert className="w-8 h-8 flex-shrink-0" />
          <p className="text-sm sm:text-base font-bold leading-snug">
            {isEs
              ? 'Llamado urgente al gobierno de la Ciudad de México, PROFEPA, PAOT y SACMEX: se requiere un monitoreo serio de contaminantes en toda el Área Natural Protegida de Xochimilco.'
              : 'Urgent call to the Mexico City government, PROFEPA, PAOT and SACMEX: serious contaminant monitoring is required across the entire Xochimilco Natural Protected Area.'}
          </p>
          <a href="#llamado" className="inline-flex items-center gap-1.5 bg-white text-red-700 font-bold text-xs px-4 py-2 rounded-lg hover:bg-red-50 transition-colors whitespace-nowrap">
            {isEs ? 'Ver llamado completo' : 'Read full call'}
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* 1. Antecedentes */}
        <Section id="antecedentes" num={1} title={isEs ? 'Antecedentes de la investigación' : 'Research background'} icon={Microscope} lang={lang}>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {isEs
              ? 'Entre septiembre de 2024 y septiembre de 2026, Santuario Ajolote y CIMA A.C. desarrollaron un programa de monitoreo ciudadano de calidad del agua en cuatro puntos estratégicos del sistema lacustre de San Gregorio Atlapulco.'
              : 'Between September 2024 and September 2026, Santuario Ajolote and CIMA A.C. developed a citizen water quality monitoring program at four strategic points in the lake system of San Gregorio Atlapulco.'}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {isEs
              ? 'Durante nueve eventos de muestreo se analizaron indicadores fisicoquímicos mediante tiras colorimétricas, mediciones con instrumentos portátiles y pruebas microbiológicas de detección de Escherichia coli.'
              : 'During nine sampling events, physicochemical indicators were analyzed using colorimetric strips, portable instrument measurements, and microbiological tests for Escherichia coli detection.'}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {isEs
              ? 'El informe histórico identificó diferencias recurrentes entre el agua exterior expuesta al drenaje de Atenco y el agua del interior de los sistemas de biofiltración, donde las lecturas de varios parámetros resultaron menores.'
              : 'The historical report identified recurrent differences between exterior water exposed to the Atenco drainage and interior water within the biofiltration systems, where several parameters showed lower readings.'}
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-3">
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>{isEs ? 'Nota:' : 'Note:'}</strong> {isEs
                ? 'El nuevo evento del 30 de octubre de 2026 adquiere especial relevancia al coincidir con reportes recientes de mortandad elevada de peces y cambios perceptibles en la calidad del agua.'
                : 'The new event of October 30, 2026 acquires special relevance by coinciding with recent reports of elevated fish mortality and perceptible changes in water quality.'}
            </p>
          </div>
        </Section>

        {/* 2. Evento de mortandad */}
        <Section id="evento-mortandad" num={2} title={isEs ? 'Descripción del evento de mortandad' : 'Mortality event description'} icon={Skull} lang={lang}>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {isEs
              ? 'Durante aproximadamente las últimas tres semanas, comprendidas principalmente entre el 9 y el 30 de octubre de 2026, integrantes del proyecto reportaron una mortandad elevada de peces en canales del entorno del embarcadero de Atenco.'
              : 'During approximately the last three weeks, mainly between October 9 and 30, 2026, project members reported elevated fish mortality in canals around the Atenco dock.'}
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Fish className="w-4 h-4 text-red-600" />
                <h4 className="text-xs font-bold text-red-700">{isEs ? 'Peces muertos' : 'Dead fish'}</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {isEs
                  ? 'Ejemplares muertos que aparentemente corresponden a tilapias adultas. Identificación taxonómica y número exacto pendientes de documentación.'
                  : 'Dead specimens apparently corresponding to adult tilapias. Taxonomic identification and exact number pending documentation.'}
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Bird className="w-4 h-4 text-orange-600" />
                <h4 className="text-xs font-bold text-orange-700">{isEs ? 'Ave acuática muerta' : 'Dead aquatic bird'}</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {isEs
                  ? 'Identificada visualmente como gallareta. No existe examen veterinario que permita atribuir su muerte a la misma causa que los peces.'
                  : 'Visually identified as gallareta. No veterinary exam exists to attribute its death to the same cause as the fish.'}
              </p>
            </div>
          </div>
          <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">{isEs ? 'Observaciones ambientales reportadas:' : 'Reported environmental observations:'}</h4>
          <ul className="space-y-1.5">
            {OBSERVACIONES_AMBIENTALES.map((obs, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                {isEs ? obs.es : obs.en}
              </li>
            ))}
          </ul>
        </Section>

        {/* 3. Muestreo extraordinario */}
        <Section id="muestreo" num={3} title={isEs ? 'Muestreo extraordinario del 30 de octubre de 2026' : 'Extraordinary sampling of October 30, 2026'} icon={FlaskConical} lang={lang}>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {isEs
              ? 'Se efectuaron cuatro muestreos en distintos puntos del sector del embarcadero de Atenco. De acuerdo con el registro de campo proporcionado, los cuatro presentaron el mismo resultado o alcanzaron las mismas categorías máximas de lectura.'
              : 'Four samplings were conducted at different points in the Atenco dock sector. According to the provided field record, all four presented the same result or reached the same maximum scale categories.'}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-red-100 rounded-lg overflow-hidden">
              <thead className="bg-red-50">
                <tr>
                  <th className="px-3 py-2 text-left font-bold text-red-800">{isEs ? 'Parámetro' : 'Parameter'}</th>
                  <th className="px-3 py-2 text-left font-bold text-red-800">{isEs ? 'Resultado' : 'Result'}</th>
                  <th className="px-3 py-2 text-left font-bold text-red-800">{isEs ? 'Interpretación inicial' : 'Initial interpretation'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {PARAMETROS_MUESTREO.map((p, i) => (
                  <tr key={i} className="hover:bg-red-50/40">
                    <td className="px-3 py-2 font-medium text-gray-700">{isEs ? p.parametro : p.parametro_en}</td>
                    <td className="px-3 py-2 text-red-700 font-bold">{p.resultado}</td>
                    <td className="px-3 py-2 text-gray-600">{isEs ? p.interpretacion : p.interpretacion_en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 mt-3">
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>{isEs ? 'Advertencia metodológica:' : 'Methodological warning:'}</strong> {isEs
                ? 'Las lecturas máximas de las tiras no deben interpretarse como concentraciones analíticas exactas. La saturación de una escala impide saber cuánto varía realmente la concentración entre las cuatro muestras. El hecho de que las cuatro muestras coincidan puede indicar una alteración extendida del agua, pero también es compatible con saturación de las tiras o interferencias metodológicas.'
                : 'Maximum strip readings should not be interpreted as exact analytical concentrations. Scale saturation prevents knowing how much the concentration actually varies between the four samples. The fact that all four samples coincide may indicate extended water alteration, but is also compatible with strip saturation or methodological interference.'}
            </p>
          </div>
        </Section>

        {/* 4. Evaluación ecotoxicológica */}
        <Section id="ecotoxicologia" num={4} title={isEs ? 'Evaluación ecotoxicológica de los resultados' : 'Ecotoxicological evaluation of results'} icon={HeartPulse} lang={lang}>
          <div className="space-y-3">
            <EcoCard icon={Droplets} color="red" title={isEs ? '4.1 Oxígeno disuelto: principal mecanismo potencial de mortalidad' : '4.1 Dissolved oxygen: main potential mortality mechanism'} lang={lang}>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">
                {isEs
                  ? 'La EPA considera que concentraciones inferiores a 5 mg/L pueden generar estrés en peces; valores inferiores a 3 mg/L son generalmente insuficientes. La mortalidad resulta especialmente probable cuando el oxígeno cae por debajo de 2 mg/L. Una concentración real de 0 mg/L equivale a una condición de anoxia, incompatible con la supervivencia sostenida de peces.'
                  : 'The EPA considers that concentrations below 5 mg/L can cause fish stress; values below 3 mg/L are generally insufficient. Mortality is especially likely when oxygen falls below 2 mg/L. A real concentration of 0 mg/L equals an anoxia condition, incompatible with sustained fish survival.'}
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {isEs
                  ? 'Las posibles causas locales de agotamiento de oxígeno incluyen: descargas con elevada carga de materia orgánica biodegradable, respiración y descomposición bacteriana, degradación de biomasa vegetal y algal, acumulación de sedimentos orgánicos y condiciones anaerobias, y escasa renovación del agua.'
                  : 'Possible local causes of oxygen depletion include: discharges with high biodegradable organic matter load, bacterial respiration and decomposition, plant and algal biomass degradation, accumulation of organic sediments and anaerobic conditions, and poor water renewal.'}
              </p>
            </EcoCard>

            <EcoCard icon={ShieldAlert} color="orange" title={isEs ? '4.2 Cloro libre y cloro total: posible toxicidad aguda' : '4.2 Free and total chlorine: possible acute toxicity'} lang={lang}>
              <p className="text-xs text-gray-600 leading-relaxed">
                {isEs
                  ? 'La EPA establece criterios recomendados para la protección de la vida acuática de agua dulce de 0.019 mg/L para exposición aguda y 0.011 mg/L para exposición crónica. Si un laboratorio confirmara 10 mg/L de cloro residual total, la concentración sería aproximadamente 526 veces la referencia numérica aguda de la EPA, una diferencia de extraordinaria importancia toxicológica.'
                  : 'The EPA establishes recommended criteria for freshwater aquatic life protection of 0.019 mg/L for acute exposure and 0.011 mg/L for chronic exposure. If a laboratory confirmed 10 mg/L of total residual chlorine, the concentration would be approximately 526 times the EPA acute numerical reference, a difference of extraordinary toxicological importance.'}
              </p>
            </EcoCard>

            <EcoCard icon={FlaskConical} color="amber" title={isEs ? '4.3 Bromo: necesidad de distinguirlo del cloro' : '4.3 Bromine: need to distinguish from chlorine'} lang={lang}>
              <p className="text-xs text-gray-600 leading-relaxed">
                {isEs
                  ? 'El valor de bromo 20 requiere interpretación cuidadosa y análisis serio de laboratorio. Es una señal preliminar de oxidantes, pero no prueba independiente de contaminación por bromo.'
                  : 'The bromine value of 20 requires careful interpretation and serious laboratory analysis. It is a preliminary signal of oxidants, but not independent proof of bromine contamination.'}
              </p>
            </EcoCard>

            <EcoCard icon={Activity} color="purple" title={isEs ? '4.4 pH 9 y posible incremento de toxicidad por amoniaco' : '4.4 pH 9 and possible increased ammonia toxicity'} lang={lang}>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">
                {isEs
                  ? 'El valor de pH 9 indica condiciones alcalinas. Su interacción más importante es con el amoniaco: al aumentar el pH se incrementa la proporción de NH₃, que resulta considerablemente más tóxica para los peces.'
                  : 'The pH value of 9 indicates alkaline conditions. Its most important interaction is with ammonia: as pH increases, the proportion of NH₃ increases, which is considerably more toxic to fish.'}
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <p className="text-xs text-purple-800 font-semibold">
                  {isEs
                    ? 'Hipótesis prioritaria: la combinación de poco oxígeno, materia orgánica y posible nitrógeno amoniacal podría explicar una parte importante de la mortandad.'
                    : 'Priority hypothesis: the combination of low oxygen, organic matter and possible ammonia nitrogen could explain an important part of the mortality.'}
                </p>
              </div>
            </EcoCard>

            <EcoCard icon={Droplets} color="blue" title={isEs ? '4.5 Dureza total de 425 mg/L' : '4.5 Total hardness of 425 mg/L'} lang={lang}>
              <p className="text-xs text-gray-600 leading-relaxed">
                {isEs
                  ? 'La dureza reportada indica una mineralización importante del agua. Es relevante para caracterizar la química del sistema, pero no permite atribuir directamente una mortandad masiva. Debe considerarse una variable ambiental complementaria.'
                  : 'The reported hardness indicates important water mineralization. It is relevant for characterizing the system chemistry, but does not directly attribute mass mortality. It should be considered a complementary environmental variable.'}
              </p>
            </EcoCard>

            <EcoCard icon={Wind} color="stone" title={isEs ? '4.6 Olores sulfurosos y posible presencia de sulfuro de hidrógeno' : '4.6 Sulfurous odors and possible hydrogen sulfide presence'} lang={lang}>
              <p className="text-xs text-gray-600 leading-relaxed">
                {isEs
                  ? 'Los olores descritos como podridos o semejantes al azufre son compatibles con la liberación de sulfuro de hidrógeno (H₂S). Este gas puede generarse durante la degradación anaerobia de materia orgánica. Puede resultar tóxico para organismos acuáticos y, en aire, concentraciones elevadas representan un riesgo importante.'
                  : 'Odors described as rotten or sulfur-like are compatible with the release of hydrogen sulfide (H₂S). This gas can be generated during anaerobic degradation of organic matter. It can be toxic to aquatic organisms and, in air, high concentrations represent an important risk.'}
              </p>
            </EcoCard>
          </div>
        </Section>

        {/* 5. Comparación histórica */}
        <Section id="comparacion" num={5} title={isEs ? 'Comparación con el monitoreo histórico 2024-2026' : 'Comparison with historical monitoring 2024-2026'} icon={Activity} lang={lang}>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {isEs
              ? 'El 30 de octubre presenta una combinación de especial relevancia: máximo de escala para indicadores oxidantes, aumento aparente del pH, oxígeno disuelto reportado como cero y mortandad contemporánea de peces. El resultado constituye una señal de posible agravamiento ambiental, que requiere repetición de las mediciones con métodos específicos.'
              : 'October 30 presents a combination of special relevance: maximum scale for oxidant indicators, apparent pH increase, dissolved oxygen reported as zero, and contemporary fish mortality. The result constitutes a signal of possible environmental aggravation, requiring repetition of measurements with specific methods.'}
          </p>
          <Link to="/monitoreo-contaminantes-atenco" className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 text-xs font-semibold transition-colors">
            {isEs ? 'Ver informe histórico completo 2024-2026' : 'View full historical report 2024-2026'}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Section>

        {/* 6. Hipótesis integradora */}
        <Section id="hipotesis" num={6} title={isEs ? 'Hipótesis integradora del evento' : 'Integrating hypothesis of the event'} icon={Microscope} lang={lang}>
          <div className="bg-emerald-900 text-white rounded-xl p-4 text-xs leading-relaxed mb-4">
            <p className="font-bold mb-2">{isEs ? 'Modelo ecotoxicológico preliminar:' : 'Preliminary ecotoxicological model:'}</p>
            <p className="leading-relaxed">
              {isEs
                ? 'Posible ingreso periódico de una carga contaminante → incremento de materia orgánica o sustancias químicas → alteración de procesos microbianos y fisicoquímicos → agotamiento de oxígeno y posible exposición a sustancias tóxicas → estrés, lesiones fisiológicas y mortandad de fauna acuática.'
                : 'Possible periodic entry of contaminant load → increase of organic matter or chemicals → alteration of microbial and physicochemical processes → oxygen depletion and possible exposure to toxic substances → stress, physiological injury and aquatic fauna mortality.'}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {HIPOTESIS_MECANISMOS.map((h) => (
              <div key={h.num} className="bg-white border border-gray-200 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center">{h.num}</span>
                  <h4 className="text-xs font-bold text-gray-700">{isEs ? h.titulo : h.titulo_en}</h4>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">{isEs ? h.desc : h.desc_en}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 7. Riesgo de salud pública */}
        <Section id="salud-publica" num={7} title={isEs ? 'Posible riesgo de salud pública' : 'Possible public health risk'} icon={HeartPulse} lang={lang}>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {isEs
              ? 'Las alteraciones observadas plantean un riesgo potencial para quienes utilizan los canales, especialmente personas que mantienen contacto directo con el agua o trabajan en las áreas afectadas.'
              : 'The observed alterations pose a potential risk for those who use the canals, especially people who maintain direct contact with water or work in the affected areas.'}
          </p>
          <ul className="space-y-1.5">
            {(isEs
              ? [
                  'Contacto de piel, ojos y mucosas con agua contaminada.',
                  'Ingestión accidental de agua durante actividades en los canales.',
                  'Consumo de peces procedentes de un área con mortandad sin evaluación sanitaria.',
                  'Exposición ocupacional de trabajadores que manipulan agua, lodos o fauna muerta.',
                  'Posible presencia de microorganismos fecales, oxidantes, sustancias químicas o toxinas biológicas aún no identificadas.',
                ]
              : [
                  'Skin, eye and mucous membrane contact with contaminated water.',
                  'Accidental water ingestion during canal activities.',
                  'Consumption of fish from an area with mortality without sanitary evaluation.',
                  'Occupational exposure of workers handling water, sludge or dead fauna.',
                  'Possible presence of fecal microorganisms, oxidants, chemicals or unidentified biological toxins.',
                ]
            ).map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* 8. Medidas precautorias */}
        <Section id="medidas" num={8} title={isEs ? 'Medidas precautorias recomendadas' : 'Recommended precautionary measures'} icon={ShieldAlert} lang={lang}>
          <div className="space-y-2">
            {MEDIDAS_PRECAUTORIAS.map((m, i) => (
              <div key={i} className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-2.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-gray-700 leading-relaxed">{isEs ? m.es : m.en}</p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-gray-500 mt-3 italic">
            {isEs
              ? 'Estas acciones son recomendaciones preventivas, no una declaración oficial de cierre sanitario.'
              : 'These actions are preventive recommendations, not an official sanitary closure declaration.'}
          </p>
        </Section>

        {/* 9. Conclusión científica */}
        <Section id="conclusion" num={9} title={isEs ? 'Conclusión científica' : 'Scientific conclusion'} icon={FlaskConical} lang={lang}>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {isEs
              ? 'El muestreo ciudadano realizado el 30 de octubre de 2026 en cuatro puntos del embarcadero de Atenco identifica una nueva situación de preocupación ambiental, caracterizada por lecturas máximas de diversos indicadores colorimétricos, pH alcalino y una medición reportada de oxígeno disuelto igual a cero.'
              : 'The citizen sampling conducted on October 30, 2026 at four points of the Atenco dock identifies a new situation of environmental concern, characterized by maximum readings of various colorimetric indicators, alkaline pH and a reported dissolved oxygen measurement of zero.'}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {isEs
              ? 'El agotamiento del oxígeno disuelto representa el mecanismo fisiológico más directamente compatible con la muerte de peces, siempre que la lectura de campo sea confirmada. La posible presencia de oxidantes residuales constituye otra hipótesis toxicológica importante.'
              : 'Dissolved oxygen depletion represents the physiological mechanism most directly compatible with fish death, provided the field reading is confirmed. The possible presence of residual oxidants constitutes another important toxicological hypothesis.'}
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-4">
            <p className="text-sm font-bold text-emerald-800 leading-relaxed">
              {isEs
                ? 'Existen indicios suficientemente preocupantes de un episodio de deterioro severo de la calidad del agua, potencialmente letal para la fauna acuática, que requieren respuesta institucional inmediata.'
                : 'There are sufficiently concerning indications of an episode of severe water quality deterioration, potentially lethal for aquatic fauna, requiring immediate institutional response.'}
            </p>
          </div>
        </Section>

        {/* 10. Llamado institucional */}
        <Section id="llamado" num={10} title={isEs ? 'Llamado institucional' : 'Institutional call'} icon={Scale} lang={lang}>
          <div className="bg-gradient-to-br from-red-600 to-emerald-800 text-white rounded-2xl p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-3">
              <ShieldAlert className="w-5 h-5" />
              <h3 className="font-heading text-base sm:text-lg font-bold">
                {isEs ? 'Solicitud urgente a las autoridades' : 'Urgent request to authorities'}
              </h3>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              {isEs
                ? 'Santuario Ajolote A.C. y CIMA A.C. solicitan a las autoridades ambientales, sanitarias y de gestión del agua la atención urgente de este evento, incluyendo inspección de campo, identificación de descargas, toma oficial de muestras, evaluación de fauna silvestre y establecimiento de medidas preventivas cuando correspondan.'
                : 'Santuario Ajolote A.C. and CIMA A.C. request that environmental, health and water management authorities urgently address this event, including field inspection, discharge identification, official sampling, wildlife evaluation and establishment of preventive measures where appropriate.'}
            </p>
            <p className="text-sm leading-relaxed mb-4">
              {isEs
                ? 'El objetivo es proteger la salud de las comunidades de San Gregorio Atlapulco, la integridad ecológica de los canales y las condiciones de supervivencia de la fauna del humedal, incluido el ajolote mexicano (Ambystoma mexicanum).'
                : 'The objective is to protect the health of the communities of San Gregorio Atlapulco, the ecological integrity of the canals and the survival conditions of the wetland fauna, including the Mexican axolotl (Ambystoma mexicanum).'}
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mt-4">
              <AuthorityCard name="PROFEPA" phone="01 800 776 3637" url="https://www.profepa.gob.mx/innovaportal/v/260/1/mx/denuncia_ciudadana.html" lang={lang} />
              <AuthorityCard name="PAOT" phone="55 5265 0780" url="https://www.paot.org.mx/centro/denuncia/index.html" lang={lang} />
              <AuthorityCard name="SACMEX" phone="55 5654 3210" url="https://www.sacmex.cdmx.gob.mx" lang={lang} />
            </div>
          </div>
        </Section>

        {/* 11. Evidencia en video */}
        <Section id="videos" num={11} title={isEs ? 'Evidencia en video' : 'Video evidence'} icon={FileText} lang={lang}>
          <div className="grid sm:grid-cols-2 gap-4">
            {VIDEOS.map((v, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <video controls className="w-full aspect-video object-cover bg-black" preload="metadata">
                  <source src={v.url} type="video/mp4" />
                </video>
                <div className="p-3">
                  <h4 className="text-xs font-bold text-gray-800 mb-1">{isEs ? v.titulo : v.titulo_en}</h4>
                  <p className="text-[11px] text-gray-600 leading-relaxed">{isEs ? v.desc : v.desc_en}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Footer */}
        <div className="border-t border-red-100 pt-6 text-center">
          <p className="text-xs text-muted-foreground mb-1">
            {isEs
              ? 'Documento de investigación ambiental preliminar. Los resultados colorimétricos ciudadanos no sustituyen análisis instrumentales, dictámenes ecotoxicológicos, peritajes de mortandad o resultados oficiales de cumplimiento normativo.'
              : 'Preliminary environmental research document. Citizen colorimetric results do not replace instrumental analyses, ecotoxicological assessments, mortality expert reports or official regulatory compliance results.'}
          </p>
          <p className="text-xs text-muted-foreground">
            {isEs ? 'Santuario Ajolote A.C. y CIMA A.C. · 30 de octubre de 2026' : 'Santuario Ajolote A.C. and CIMA A.C. · October 30, 2026'}
          </p>
          <button onClick={handlePrint} disabled={downloading} className="mt-4 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors no-print">
            <Printer className="w-4 h-4" /> {downloading ? (isEs ? 'Generando PDF...' : 'Generating PDF...') : (isEs ? 'Descargar PDF del Reporte' : 'Download Report PDF')}
          </button>
        </div>
      </div>
    </div>
  );
}

function MetaCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5 border border-white/10">
      <div className="flex items-center gap-1.5 mb-1">
        <Icon className="w-3 h-3 text-red-300" />
        <span className="text-[9px] font-bold uppercase tracking-wider text-white/60">{label}</span>
      </div>
      <p className="text-[11px] sm:text-xs font-semibold text-white leading-tight">{value}</p>
    </div>
  );
}

function Section({ id, num, title, icon: Icon, lang, children }) {
  return (
    <motion.section id={id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="scroll-mt-32">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4 text-red-600" />
        </div>
        <h2 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
          {num}. {title}
        </h2>
      </div>
      <div>{children}</div>
    </motion.section>
  );
}

function EcoCard({ icon: Icon, color, title, lang, children }) {
  const colorMap = {
    red: 'bg-red-50 border-red-200 text-red-700',
    orange: 'bg-orange-50 border-orange-200 text-orange-700',
    amber: 'bg-amber-50 border-amber-200 text-amber-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700',
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    stone: 'bg-stone-50 border-stone-200 text-stone-700',
  };
  return (
    <div className={`${colorMap[color]} border rounded-xl p-3`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4" />
        <h4 className="text-xs font-bold">{title}</h4>
      </div>
      {children}
    </div>
  );
}

function AuthorityCard({ name, phone, url, lang }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 rounded-xl p-3 border border-white/20 transition-colors block">
      <h4 className="text-sm font-bold text-white mb-1">{name}</h4>
      <div className="flex items-center gap-1 text-[11px] text-white/80">
        <Phone className="w-3 h-3" />
        {phone}
      </div>
      <p className="text-[10px] text-white/60 mt-1">{lang === 'es' ? 'Denunciar ahora' : 'File complaint now'}</p>
    </a>
  );
}