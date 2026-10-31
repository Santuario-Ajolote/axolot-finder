import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FlaskConical, MapPin, Target, Microscope, Droplets, Waves, CloudRain,
  Leaf, AlertTriangle, FileText, Scale, Printer, Globe, Activity,
} from 'lucide-react';
import SeoHead from '@/components/SEO/SeoHead';
import MonitoreoHero from '@/components/monitoreo-atenco/MonitoreoHero';
import MonitoreoIndex from '@/components/monitoreo-atenco/MonitoreoIndex';
import MonitoreoPoints from '@/components/monitoreo-atenco/MonitoreoPoints';
import MonitoreoPhotos from '@/components/monitoreo-atenco/MonitoreoPhotos';
import MonitoreoDescargables from '@/components/monitoreo-atenco/MonitoreoDescargables';
import MonitoreoDenuncias from '@/components/monitoreo-atenco/MonitoreoDenuncias';
import MonitoreoContaminantesTable from '@/components/monitoreo-atenco/MonitoreoContaminantesTable';
import { CandlestickChart, TrendChart, DiferenciaBarChart, ConductividadTDSChart, EcoliChart } from '@/components/monitoreo-atenco/MonitoreoCharts';
import { PARAMETROS_COLORIMETRICOS, PARAMETROS_ELECTROQUIMICOS, RESUMEN_DIFERENCIAS } from '@/lib/informeColorimetriaContent';
import { RANGOS_AJOLOTE } from '@/lib/monitoreoAtencoContent';
import { downloadElementAsPDF } from '@/lib/pdfExport';

export default function MonitoreoAtenco() {
  const [lang, setLang] = useState('es');
  const [downloading, setDownloading] = useState(false);
  const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es');
  const handlePrint = async () => {
    setDownloading(true);
    try {
      await downloadElementAsPDF('monitoreo-informe', 'Monitoreo_Contaminantes_SanGregorio_2024-2026.pdf');
    } finally {
      setDownloading(false);
    }
  };

  const seo = {
    title: 'Monitoreo de Contaminantes — San Gregorio Atlapulco 2024-2026 | Santuario Ajolote · CIMA A.C.',
    description: 'Informe técnico-científico de monitoreo ambiental cronológico (2024-2026) en 4 puntos estratégicos de San Gregorio Atlapulco, Xochimilco. Tamizaje colorimétrico de 16 parámetros, E. coli, y mediciones electromagnéticas. Ciencia ciudadana, datos descargables y denuncia ciudadana ante PROFEPA y PAOT.',
    keywords: 'monitoreo contaminantes, San Gregorio Atlapulco, Xochimilco, drenaje Atenco, calidad del agua, tamizaje colorimétrico, E. coli, ajolote, Ambystoma mexicanum, ciencia ciudadana, CIMA A.C., PROFEPA, PAOT, biofiltros, conductividad, TDS, nitratos, cloro total, cromo VI, metales pesados',
    canonical: 'https://axolotfinder.org/monitoreo-contaminantes-atenco',
    ogImage: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/078e2e2f5_aguasnegrasatenco.jpg',
    ogType: 'article',
    lang: lang,
    geo: { region: 'MX-CMX', placename: 'San Gregorio Atlapulco, Xochimilco, Ciudad de México', position: '19.262849;-99.055480' },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ScholarlyArticle',
          name: 'Monitoreo de Contaminantes — San Gregorio Atlapulco 2024-2026',
          description: 'Informe técnico-científico de monitoreo ambiental cronológico de la calidad del agua en 4 puntos estratégicos de San Gregorio Atlapulco, Xochimilco.',
          author: { '@type': 'Organization', name: 'Santuario Ajolote · CIMA A.C.', url: 'https://axolotfinder.org' },
          datePublished: '2024-09-12',
          dateModified: '2026-10-05',
          about: [
            { '@type': 'Thing', name: 'Ambystoma mexicanum' },
            { '@type': 'Place', name: 'San Gregorio Atlapulco, Xochimilco', geo: { '@type': 'GeoCoordinates', latitude: 19.262849, longitude: -99.055480 } },
          ],
          keywords: ['water quality', 'biofiltration', 'citizen science', 'axolotl conservation', 'Xochimilco', 'E. coli', 'heavy metals'],
        },
        {
          '@type': 'Dataset',
          name: 'Monitoreo de Contaminantes San Gregorio Atlapulco 2024-2026',
          description: 'Tamizaje colorimétrico, biológico y electromagnético en 4 puntos de monitoreo durante 9 eventos de muestreo (2024-2026).',
          creator: { '@type': 'Organization', name: 'Santuario Ajolote · CIMA A.C.' },
          datePublished: '2026-10-05',
          spatialCoverage: { '@type': 'Place', name: 'San Gregorio Atlapulco, Xochimilco, CDMX' },
          license: 'https://creativecommons.org/licenses/by-sa/4.0/',
          isAccessibleForFree: true,
        },
      ],
    },
  };

  const nitrato = PARAMETROS_COLORIMETRICOS.find(p => p.key === 'nitrato');
  const cloroTotal = PARAMETROS_COLORIMETRICOS.find(p => p.key === 'cloro_total');
  const phParam = PARAMETROS_COLORIMETRICOS.find(p => p.key === 'ph');

  return (
    <div id="monitoreo-informe" className="min-h-screen bg-gradient-to-b from-emerald-50/30 to-white">
      <SeoHead {...seo} />
      <MonitoreoHero lang={lang} onToggleLang={toggleLang} onPrint={handlePrint} />
      <MonitoreoIndex lang={lang} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* 1. Resumen Ejecutivo */}
        <Section id="resumen" num={1} title={lang === 'es' ? 'Resumen Ejecutivo' : 'Executive Summary'} icon={FlaskConical} lang={lang}>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {lang === 'es'
              ? 'Durante septiembre de 2024 a septiembre de 2026 se realizó un tamizaje físico-químico y biológico del agua en cuatro puntos estratégicos de San Gregorio Atlapulco, Xochimilco: dos puntos exteriores afectados directamente por el drenaje Atenco, un punto interior dentro de los biofiltros construidos, y un punto medio exterior en la zona chinampera.'
              : 'From September 2024 to September 2026, a physical-chemical and biological water screening was conducted at four strategic points in San Gregorio Atlapulco, Xochimilco: two exterior points directly affected by the Atenco drainage, an interior point within the constructed biofilters, and a middle exterior point in the chinampa zone.'}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {lang === 'es'
              ? 'Se analizaron 16 parámetros mediante tiras colorimétricas, además de pH, ORP, conductividad, salinidad y TDS mediante medición electroquímica. Adicionalmente, se realizaron pruebas in situ de E. coli en los puntos exteriores, resultando positivas en los primeros dos muestreos.'
              : 'Sixteen parameters were analyzed using colorimetric strips, plus pH, ORP, conductivity, salinity, and TDS using electrochemical measurement. Additionally, in situ E. coli tests were performed at exterior points, testing positive in the first two samplings.'}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {lang === 'es'
              ? 'Los resultados muestran un patrón consistente: el agua exterior presenta de manera recurrente una mayor carga de diversos indicadores respecto al agua interior del biofiltro. El cloro total fue mayor en el exterior en 9 de 9 eventos; los nitratos en 8 de 9; la conductividad y el TDS en los 9 eventos.'
              : 'Results show a consistent pattern: exterior water recurrently presents a higher load of various indicators compared to interior biofilter water. Total chlorine was higher in the exterior in 9 of 9 events; nitrates in 8 of 9; conductivity and TDS in all 9 events.'}
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>{lang === 'es' ? 'Nota metodológica:' : 'Methodological note:'}</strong> {lang === 'es'
                ? 'Los resultados deben considerarse tamizaje y no diagnóstico químico definitivo. Las tiras colorimétricas no permiten establecer concentraciones analíticas precisas ni identificar el origen de los contaminantes. Tampoco permiten demostrar causalidad ecológica directa.'
                : 'Results should be considered screening, not definitive chemical diagnosis. Colorimetric strips do not allow establishing precise analytical concentrations or identifying contaminant sources, nor do they demonstrate direct ecological causality.'}
            </p>
          </div>
        </Section>

        {/* 2. Metodología */}
        <Section id="metodologia" num={2} title={lang === 'es' ? 'Metodología' : 'Methodology'} icon={Microscope} lang={lang}>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {lang === 'es'
              ? 'El monitoreo se realizó mediante tres métodos complementarios: (1) tiras colorimétricas de 16 parámetros para tamizaje físico-químico; (2) kit biológico in situ para detección de E. coli; (3) medición electromagnética con multiparámetro para ORP, conductividad, salinidad y TDS.'
              : 'Monitoring was conducted using three complementary methods: (1) 16-parameter colorimetric strips for physical-chemical screening; (2) in situ biological kit for E. coli detection; (3) electromagnetic measurement with multiparameter for ORP, conductivity, salinity, and TDS.'}
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="bg-cyan-50 rounded-xl p-3 border border-cyan-100">
              <h4 className="text-xs font-bold text-cyan-700 mb-1">{lang === 'es' ? 'Colorimétrico' : 'Colorimetric'}</h4>
              <p className="text-[11px] text-gray-600">{lang === 'es' ? '16 parámetros: pH, dureza, cloro total/libre, bromo, nitrato, nitrito, hierro, cromo VI, plomo, cobre, mercurio, fluoruro, carbonato, alcalinidad, ácido cianúrico.' : '16 parameters: pH, hardness, total/free chlorine, bromine, nitrate, nitrite, iron, chromium VI, lead, copper, mercury, fluoride, carbonate, alkalinity, cyanuric acid.'}</p>
            </div>
            <div className="bg-red-50 rounded-xl p-3 border border-red-100">
              <h4 className="text-xs font-bold text-red-700 mb-1">{lang === 'es' ? 'Biológico' : 'Biological'}</h4>
              <p className="text-[11px] text-gray-600">{lang === 'es' ? 'Kit in situ para detección de E. coli (coliformes fecales) en los 4 puntos de monitoreo.' : 'In situ kit for E. coli detection (fecal coliforms) at the 4 monitoring points.'}</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-3 border border-purple-100">
              <h4 className="text-xs font-bold text-purple-700 mb-1">{lang === 'es' ? 'Electromagnético' : 'Electromagnetic'}</h4>
              <p className="text-[11px] text-gray-600">{lang === 'es' ? 'pH, ORP (potencial de oxidación-reducción), conductividad, salinidad y TDS.' : 'pH, ORP (oxidation-reduction potential), conductivity, salinity, and TDS.'}</p>
            </div>
          </div>
        </Section>

        {/* 3. Puntos de Monitoreo */}
        <Section id="puntos" num={3} title={lang === 'es' ? 'Puntos de Monitoreo' : 'Monitoring Points'} icon={MapPin} lang={lang}>
          <MonitoreoPoints lang={lang} />
        </Section>

        {/* 4. Parámetros Analizados */}
        <Section id="parametros" num={4} title={lang === 'es' ? 'Parámetros Analizados' : 'Parameters Analyzed'} icon={Microscope} lang={lang}>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {lang === 'es'
              ? 'Se analizaron 21 parámetros en total: 16 colorimétricos y 5 electromagnéticos. Los rangos de referencia del ajolote mexicano (Ambystoma mexicanum) se incluyeron para evaluar la compatibilidad del agua con la supervivencia de la especie.'
              : 'A total of 21 parameters were analyzed: 16 colorimetric and 5 electromagnetic. Reference ranges for the Mexican axolotl (Ambystoma mexicanum) were included to assess water compatibility with species survival.'}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-emerald-100 rounded-lg overflow-hidden">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="px-3 py-2 text-left font-bold text-emerald-800">{lang === 'es' ? 'Parámetro' : 'Parameter'}</th>
                  <th className="px-3 py-2 text-left font-bold text-emerald-800">{lang === 'es' ? 'Unidad' : 'Unit'}</th>
                  <th className="px-3 py-2 text-left font-bold text-emerald-800">{lang === 'es' ? 'Rango ajolote' : 'Axolotl range'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {RANGOS_AJOLOTE.map((r, i) => (
                  <tr key={i} className="hover:bg-emerald-50/50">
                    <td className="px-3 py-2 font-medium text-gray-700">{r.parametro}</td>
                    <td className="px-3 py-2 text-gray-600">{r.rango}</td>
                    <td className="px-3 py-2 text-gray-500 text-[10px]">{r.fuente}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* 5. Resultados por Punto */}
        <Section id="resultados" num={5} title={lang === 'es' ? 'Resultados Principales' : 'Main Results'} icon={Waves} lang={lang}>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {lang === 'es'
              ? 'El patrón más consistente del estudio es la diferencia entre el agua exterior y el agua interior. Este resultado no depende de una sola fecha: el patrón se repite a lo largo de dos años y nueve eventos de muestreo.'
              : 'The most consistent pattern of the study is the difference between exterior and interior water. This result does not depend on a single date: the pattern repeats across two years and nine sampling events.'}
          </p>
          <DiferenciaBarChart />
        </Section>

        {/* 6. Tabla Detallada de Contaminantes */}
        <Section id="tabla-contaminantes" num={6} title={lang === 'es' ? 'Tabla Detallada de Contaminantes' : 'Detailed Contaminants Table'} icon={FlaskConical} lang={lang}>
          <MonitoreoContaminantesTable lang={lang} />
        </Section>

        {/* 7. Gráficas de Tendencia */}
        <Section id="tendencias" num={7} title={lang === 'es' ? 'Gráficas de Tendencia' : 'Trend Charts'} icon={Activity} lang={lang}>
          <div className="space-y-3">
            <TrendChart param={nitrato} color="#d97706" />
            <TrendChart param={cloroTotal} color="#16a34a" />
            <TrendChart param={phParam} color="#0891b2" />
            <ConductividadTDSChart />
          </div>
        </Section>

        {/* 8. Gráficas de Rango (Velas) */}
        <Section id="velas" num={8} title={lang === 'es' ? 'Gráficas de Rango (Velas)' : 'Range Charts (Candlesticks)'} icon={Microscope} lang={lang}>
          <CandlestickChart lang={lang} />
        </Section>

        {/* 9. E. coli */}
        <Section id="ecoli" num={9} title={lang === 'es' ? 'E. coli y Contaminación Biológica' : 'E. coli and Biological Contamination'} icon={AlertTriangle} lang={lang}>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {lang === 'es'
              ? 'La detección de E. coli (coliformes fecales) en los puntos exteriores confirma la presencia de contaminación de origen fecal en el sistema lacustre. Los puntos exteriores P1, P3 y P4 dieron positivo en los primeros dos muestreos, mientras que el punto interior P2 (dentro del biofiltro) resultó negativo.'
              : 'Detection of E. coli (fecal coliforms) at exterior points confirms the presence of fecal contamination in the lake system. Exterior points P1, P3, and P4 tested positive in the first two samplings, while interior point P2 (inside the biofilter) tested negative.'}
          </p>
          <EcoliChart lang={lang} />
        </Section>

        {/* 10. Evidencia Fotográfica */}
        <Section id="fotos" num={10} title={lang === 'es' ? 'Evidencia Fotográfica' : 'Photographic Evidence'} icon={Leaf} lang={lang}>
          <MonitoreoPhotos lang={lang} />
        </Section>

        {/* 11. Conclusiones */}
        <Section id="conclusiones" num={11} title={lang === 'es' ? 'Conclusiones' : 'Conclusions'} icon={FlaskConical} lang={lang}>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {lang === 'es'
              ? 'El presente estudio constituye un tamizaje físico-químico y biológico preliminar del agua en San Gregorio Atlapulco, Xochimilco, realizado entre septiembre de 2024 y septiembre de 2026. Los resultados muestran un patrón recurrente de mayor carga de diversos indicadores físico-químicos en los puntos exteriores respecto al interior del sistema de biofiltración.'
              : 'This study constitutes a preliminary physical-chemical and biological water screening in San Gregorio Atlapulco, Xochimilco, conducted between September 2024 and September 2026. Results show a recurrent pattern of higher loads of various physical-chemical indicators at exterior points compared to the interior of the biofiltration system.'}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {lang === 'es'
              ? 'La persistencia de estas diferencias durante nueve eventos de muestreo es compatible con una presión contaminante recurrente sobre el sistema, proveniente del drenaje Atenco.'
              : 'The persistence of these differences across nine sampling events is compatible with a recurrent contaminant pressure on the system, originating from the Atenco drainage.'}
          </p>
          <div className="bg-emerald-900 text-white rounded-xl p-4 text-xs leading-relaxed mb-3">
            <p className="font-bold mb-2">{lang === 'es' ? 'Cadena causal ecológicamente plausible:' : 'Ecologically plausible causal chain:'}</p>
            <p>{lang === 'es'
              ? 'actividad urbana/agropecuaria → entrada de contaminantes vía drenaje Atenco → acumulación en agua y sedimentos → exposición crónica del organismo → estrés fisiológico y alteración de supervivencia/reproducción → reducción de la capacidad de recuperación poblacional del ajolote mexicano'
              : 'urban/agricultural activity → contaminant entry via Atenco drainage → accumulation in water and sediments → chronic organism exposure → physiological stress and altered survival/reproduction → reduced population recovery capacity of the Mexican axolotl'}</p>
          </div>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-4">
            <p className="text-sm font-bold text-emerald-800">
              {lang === 'es'
                ? 'El ajolote no puede conservarse únicamente mediante reproducción en cautiverio. La conservación de Ambystoma mexicanum requiere conservar las condiciones ecológicas del sistema que todavía constituye su hábitat natural.'
                : 'The axolotl cannot be conserved solely through captive breeding. Conservation of Ambystoma mexicanum requires preserving the ecological conditions of the system that still constitutes its natural habitat.'}
            </p>
          </div>
        </Section>

        {/* 12. Descarga de Datos Originales */}
        <Section id="descargables" num={12} title={lang === 'es' ? 'Descarga de Datos Originales' : 'Download Original Data'} icon={FileText} lang={lang}>
          <MonitoreoDescargables lang={lang} />
        </Section>

        {/* 13. Denuncia Ciudadana */}
        <Section id="denuncias" num={13} title={lang === 'es' ? 'Denuncia Ciudadana' : 'Citizen Complaint'} icon={Scale} lang={lang}>
          <MonitoreoDenuncias lang={lang} />
        </Section>

        {/* Footer */}
        <div className="border-t border-emerald-100 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Monitoreo de Contaminantes — San Gregorio Atlapulco 2024-2026 · Santuario Ajolote · CIMA A.C.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {lang === 'es'
              ? 'Documento para divulgación científica, ciencia ciudadana y solicitud de monitoreo ambiental institucional'
              : 'Document for scientific dissemination, citizen science, and request for institutional environmental monitoring'}
          </p>
          <button onClick={handlePrint} disabled={downloading} className="mt-4 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors no-print">
            <Printer className="w-4 h-4" /> {downloading ? (lang === 'es' ? 'Generando PDF...' : 'Generating PDF...') : (lang === 'es' ? 'Descargar PDF del Informe' : 'Download Report PDF')}
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ id, num, title, icon: Icon, lang, children }) {
  return (
    <motion.section id={id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="scroll-mt-32">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4 text-emerald-600" />
        </div>
        <h2 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-emerald-900">
          {num}. {title}
        </h2>
      </div>
      <div>{children}</div>
    </motion.section>
  );
}