import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Scale, Flame, Waves, ShieldAlert, Fish, MessageCircleHeart, Megaphone,
  Sparkles, Landmark, AlertTriangle, Wind, Droplets, Trash2, ArrowLeft,
} from 'lucide-react';
import SeoHead from '@/components/SEO/SeoHead';
import { getPageSeo } from '@/lib/seoConfig';
import GlobosHero from '@/components/anp/globos/GlobosHero';
import GlobosSection from '@/components/anp/globos/GlobosSection';
import ReglasANP from '@/components/anp/globos/ReglasANP';
import DictamenTable from '@/components/anp/globos/DictamenTable';
import VelasCompare from '@/components/anp/globos/VelasCompare';
import AfectacionesGrid from '@/components/anp/globos/AfectacionesGrid';
import FuentesList from '@/components/anp/globos/FuentesList';
import {
  GLOBOS_META, INTRO, CULTURA_CIVICA, REGLAS_CIERRE, GLOBOS_RIESGO,
  GLOBOS_ANTECEDENTE, CHINAMPAS, PROTECCION_CIVIL, AJOLOTE_NOTA,
  REFLEXION, LLAMADO, CONCLUSION, CIERRE_EDITORIAL, DATOS_ANP,
} from '@/lib/globosCantoyaContent';

const RIESGO_ICONOS = { wind: Wind, flame: Flame, droplet: Droplets, trash: Trash2 };

const seoFallback = {
  title: 'Globos de Cantoya y Velas Flotantes en Xochimilco | Observatorio del ANP — Santuario Ajolote',
  description:
    'Investigación jurídica y ambiental sobre la liberación de globos de Cantoya y velas flotantes en el ANP Ejidos de Xochimilco y San Gregorio Atlapulco: Ley de Cultura Cívica art. 28, Programa de Manejo 2018, protección civil y riesgo de incendios.',
  keywords: 'globos de cantoya Xochimilco, velas flotantes Xochimilco, ANP Xochimilco, Programa de Manejo 2018, Ley de Cultura Cívica CDMX, artículo 28 fracción VII, aeróstatos, incendios chinampas, protección civil, SEDEMA, ajolote, Ambystoma mexicanum, Santuario Ajolote, CIMA A.C.',
  canonical: 'https://axolotfinder.org/anp/globos-de-cantoya',
  ogImage: GLOBOS_META.imagenes.hero,
  ogType: 'article',
  lang: 'es',
  geo: { region: 'MX-CMX', placename: 'Xochimilco, Ciudad de México, México', position: '19.2671;-99.1750' },
};

export default function GlobosCantoyaPage() {
  const seo = getPageSeo('globosCantoya', 'es') || seoFallback;

  return (
    <div className="bg-white">
      <SeoHead {...seo} />
      <GlobosHero />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 -mt-6 relative z-10 space-y-14 sm:space-y-16">

        {/* ── Apertura ── */}
        <div className="grid lg:grid-cols-5 gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 space-y-4"
          >
            <p className="font-heading text-lg sm:text-xl text-slate-900 leading-snug font-medium">
              Entre los rituales turísticos, el riesgo de incendios y la protección legal del humedal
            </p>
            {INTRO.parrafos.map((p, i) => (
              <p key={i} className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">{p}</p>
            ))}
            <div className="rounded-2xl bg-gradient-to-r from-amber-50 to-rose-50 border-l-4 border-amber-500 px-5 py-4">
              <p className="text-sm font-semibold text-amber-900 leading-relaxed">{INTRO.remate}</p>
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200"
          >
            <img
              src={GLOBOS_META.imagenes.pareja}
              alt="Pareja en la ribera del canal de Xochimilco con linternas de papel durante una experiencia nocturna"
              className="w-full h-64 sm:h-80 object-cover"
              loading="lazy"
            />
            <figcaption className="bg-slate-900 text-slate-300 text-[10px] sm:text-[11px] px-4 py-2.5 leading-snug">
              Experiencias nocturnas con linternas y mensajes: atractivo visual, consecuencias materiales.
            </figcaption>
          </motion.figure>
        </div>

        {/* ── Datos clave ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {DATOS_ANP.map((d, i) => (
            <motion.div
              key={d.etiqueta}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm"
            >
              <p className="font-heading font-bold text-amber-700 text-sm sm:text-base leading-tight">{d.valor}</p>
              <p className="text-[11px] font-semibold text-slate-800 mt-1 leading-tight">{d.etiqueta}</p>
              <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">{d.detalle}</p>
            </motion.div>
          ))}
        </div>

        {/* ── I. Legislación vigente ── */}
        <GlobosSection id="legislacion" num="I" tone="amber" icon={Scale} title="Lo que establece la legislación vigente">
          <p className="text-sm text-slate-700 leading-relaxed">
            En el caso particular de Xochimilco existe una regulación adicional y más estricta: el{' '}
            <strong>Programa de Manejo del Área Natural Protegida Ejidos de Xochimilco y San Gregorio Atlapulco</strong>,
            publicado el 26 de febrero de 2018, que dejó sin efectos al programa de 2006.
          </p>

          <div className="rounded-3xl border-2 border-indigo-200 bg-indigo-50/60 p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-700 text-white flex items-center justify-center flex-shrink-0">
                <Landmark className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-indigo-600">{CULTURA_CIVICA.ley}</p>
                <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 leading-snug">{CULTURA_CIVICA.articulo}</h4>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{CULTURA_CIVICA.texto}</p>
            <p className="text-xs text-indigo-900 leading-relaxed mt-3 pt-3 border-t border-indigo-200">{CULTURA_CIVICA.lectura}</p>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed pt-2">
            Para el caso de globos de Cantoya y velas flotantes, destacan las siguientes disposiciones del Programa de Manejo:
          </p>

          <ReglasANP />

          <div className="space-y-3 pt-2">
            {REGLAS_CIERRE.map((p, i) => (
              <p key={i} className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p}</p>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>Un punto clave:</strong> una linterna LED recuperada íntegramente no se encuentra en la misma situación
              jurídica que una vela encendida abandonada en el canal. Su realización debe evaluarse conforme al lugar, las
              autorizaciones y las posibles afectaciones. Tampoco debe suponerse que un permiso de Protección Civil autoriza
              automáticamente actividades contrarias al Programa de Manejo: las obligaciones de seguridad y protección
              ambiental deben cumplirse conjuntamente.
            </p>
          </div>
        </GlobosSection>

        <DictamenTable />

        {/* ── II. Globos de Cantoya ── */}
        <GlobosSection id="globos" num="II" tone="rose" icon={Flame} title="Globos de Cantoya: el problema del fuego sin control">
          <p className="text-sm text-slate-700 leading-relaxed">
            El globo de Cantoya es un artefacto que asciende mediante el calentamiento del aire contenido en una estructura
            ligera, habitualmente fabricada con papel y provista de una fuente de calor. Una vez liberado, su desplazamiento
            depende fundamentalmente de las condiciones atmosféricas.
          </p>

          <figure className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200 relative">
            <img
              src={GLOBOS_META.imagenes.hero}
              alt="Cientos de globos de Cantoya encendidos ascendiendo hacia el cielo nocturno"
              className="w-full h-52 sm:h-80 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-3 text-[10px] sm:text-xs text-white/90 leading-snug">
              Un globo liberado deja de estar bajo el control directo del responsable de la actividad.
            </figcaption>
          </figure>

          <div className="grid sm:grid-cols-2 gap-3">
            {GLOBOS_RIESGO.map((r, i) => {
              const Icon = RIESGO_ICONOS[r.icono] || Flame;
              return (
                <motion.div
                  key={r.titulo}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-rose-200/80 bg-white p-4 hover:shadow-lg hover:border-rose-300 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-slate-900 mb-1.5">{r.titulo}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{r.texto}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-4 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-900 leading-relaxed">{GLOBOS_ANTECEDENTE}</p>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Desde el punto de vista de la protección civil, el lanzamiento libre de un artefacto que contiene fuego presenta un
            problema central: una vez liberado, deja de estar bajo el control directo del responsable de la actividad. Por estas
            razones, la liberación de globos de Cantoya con llama abierta dentro del ANP debe considerarse una actividad de
            riesgo elevado y de compatibilidad ambiental seriamente cuestionable.
          </p>
        </GlobosSection>

        {/* ── III. Velas flotantes ── */}
        <GlobosSection id="velas" num="III" tone="indigo" icon={Waves} title="Velas flotantes: dos actividades que no deben confundirse">
          <p className="text-sm text-slate-700 leading-relaxed">
            Las linternas flotantes representan una categoría diferente. Existen modelos que utilizan velas de combustión y
            otros que emplean iluminación LED. Las primeras contienen una fuente real de fuego. Las segundas utilizan
            dispositivos eléctricos que pueden reducir considerablemente el peligro de incendio, aunque no eliminan
            necesariamente los riesgos asociados con residuos.
          </p>
          <VelasCompare />
        </GlobosSection>

        {/* ── IV. Xochimilco no es un escenario desechable ── */}
        <GlobosSection id="chinampas" num="IV" tone="emerald" icon={Landmark} title="Xochimilco no es un escenario desechable">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="space-y-3">
              {CHINAMPAS.map((p, i) => (
                <p key={i} className="text-xs sm:text-sm text-slate-700 leading-relaxed">{p}</p>
              ))}
            </div>
            <figure className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200">
              <img
                src={GLOBOS_META.imagenes.canal}
                alt="Linternas flotantes encendidas sobre el agua oscura de un canal"
                className="w-full h-56 sm:h-72 object-cover"
                loading="lazy"
              />
              <figcaption className="bg-slate-900 text-slate-300 text-[10px] sm:text-[11px] px-4 py-2.5 leading-snug">
                Una vela, una base de papel o un soporte abandonado no desaparece por haber formado parte de una ceremonia.
              </figcaption>
            </figure>
          </div>
          <div className="rounded-2xl bg-emerald-900 text-emerald-50 p-5">
            <p className="font-heading text-sm sm:text-base font-bold leading-snug">
              «Una estructura quemada puede representar la pérdida de herramientas, materiales, infraestructura y recursos
              económicos de una familia chinampera.»
            </p>
            <p className="text-[11px] text-emerald-200/80 mt-2">Observatorio del ANP Xochimilco · Santuario Ajolote – CIMA A.C.</p>
          </div>
        </GlobosSection>

        {/* ── V. Protección civil ── */}
        <GlobosSection id="proteccion-civil" num="V" tone="slate" icon={ShieldAlert} title="Protección civil: responsabilidades de los organizadores">
          <p className="text-sm text-slate-700 leading-relaxed">{PROTECCION_CIVIL.intro}</p>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 mb-3">
              Un Programa Especial de Protección Civil contempla
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {PROTECCION_CIVIL.elementos.map((e) => (
                <div key={e} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                  <span>{e}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border-l-4 border-rose-500 bg-rose-50 px-5 py-4">
            <p className="text-xs text-rose-900 leading-relaxed">{PROTECCION_CIVIL.viento}</p>
          </div>

          <div className="space-y-3">
            {PROTECCION_CIVIL.cierre.map((p, i) => (
              <p key={i} className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p}</p>
            ))}
          </div>
        </GlobosSection>

        {/* ── VI. Afectaciones ── */}
        <GlobosSection id="ecosistema" num="VI" tone="emerald" icon={Fish} title="Posibles afectaciones al ecosistema acuático y al ajolote">
          <p className="text-sm text-slate-700 leading-relaxed">
            Los efectos ambientales deben analizarse por mecanismos diferenciados, no como una afirmación única.
          </p>
          <AfectacionesGrid />
          <div className="rounded-3xl border-2 border-teal-200 bg-teal-50/70 p-5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-700 text-white flex items-center justify-center flex-shrink-0">
                <Fish className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-teal-900 mb-1.5">Rigor sobre el ajolote</h4>
                <p className="text-xs text-teal-900/90 leading-relaxed">{AJOLOTE_NOTA}</p>
              </div>
            </div>
          </div>
        </GlobosSection>

        {/* ── VII. Reflexión ── */}
        <GlobosSection id="reflexion" num="VII" tone="amber" icon={MessageCircleHeart} title="Una reflexión ciudadana: ¿qué estamos celebrando realmente?">
          <div className="space-y-3">
            {REFLEXION.preguntas.map((q, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-white px-5 py-4 pl-12"
              >
                <span className="absolute left-4 top-2 font-heading text-4xl text-amber-300 leading-none">“</span>
                <p className="font-heading text-sm sm:text-base text-slate-900 leading-snug italic">{q}</p>
              </motion.blockquote>
            ))}
          </div>

          <div className="space-y-3 pt-2">
            {REFLEXION.parrafos.map((p, i) => (
              <p key={i} className="text-xs sm:text-sm text-slate-700 leading-relaxed">{p}</p>
            ))}
          </div>

          <div className="rounded-2xl bg-slate-900 px-5 py-4">
            <p className="font-heading text-sm sm:text-base font-bold text-amber-200 leading-snug">{REFLEXION.remate}</p>
          </div>
        </GlobosSection>

        {/* ── VIII. Llamado ciudadano ── */}
        <GlobosSection id="llamado" num="VIII" tone="rose" icon={Megaphone} title="Llamado ciudadano: dejemos de liberar fuego y residuos en el humedal">
          <p className="text-sm text-slate-700 leading-relaxed">
            Desde el Observatorio del Área Natural Protegida de Xochimilco hacemos un llamado a visitantes, prestadores de
            servicios turísticos, organizadores de experiencias nocturnas y autoridades para reconsiderar estas prácticas.
          </p>

          <div className="rounded-3xl border-2 border-rose-200 bg-white p-5 space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-rose-600">Solicitamos</p>
            {LLAMADO.pedidos.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-rose-600 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border-2 border-emerald-200 bg-emerald-50/70 p-5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-emerald-900 mb-1.5">Alternativas con el mismo significado</h4>
                <p className="text-xs text-emerald-900/90 leading-relaxed">{LLAMADO.alternativas}</p>
                <p className="text-xs font-semibold text-emerald-900 leading-relaxed mt-3 pt-3 border-t border-emerald-200">
                  {LLAMADO.cierre}
                </p>
              </div>
            </div>
          </div>
        </GlobosSection>

        {/* ── Conclusión ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl"
        >
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 px-6 py-6">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mb-4">Conclusión</h2>
            <div className="space-y-3">
              {CONCLUSION.map((p, i) => (
                <p key={i} className="text-xs sm:text-sm text-slate-200/90 leading-relaxed">{p}</p>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-white/15">
              <p className="font-heading text-sm sm:text-base text-amber-200 italic leading-snug">{CIERRE_EDITORIAL}</p>
              <p className="text-xs text-amber-100/80 mt-3 leading-relaxed">
                Si realmente amamos Xochimilco, debemos demostrarlo con nuestras acciones, no con objetos que lanzamos al cielo
                o abandonamos en sus canales.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── Fuentes ── */}
        <div>
          <h3 className="font-heading font-bold text-base text-slate-900 mb-3 flex items-center gap-2">
            <Scale className="w-4 h-4 text-amber-600" />
            Fundamentos jurídicos y fuentes consultadas
          </h3>
          <FuentesList />
        </div>

        {/* ── Firma editorial ── */}
        <div className="border-t border-slate-200 pt-6 text-center space-y-1.5">
          <p className="font-heading text-sm font-bold text-slate-900">Observatorio del ANP Xochimilco</p>
          <p className="text-[11px] text-slate-500">Santuario Ajolote · CIMA A.C. · {GLOBOS_META.fecha}</p>
          <p className="text-[11px] text-slate-400 max-w-2xl mx-auto leading-relaxed pt-2">
            Investigación jurídica, ambiental y de protección civil. Documento para divulgación y solicitud de supervisión
            institucional.
          </p>
          <div className="pt-4">
            <Link
              to="/anp"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Volver al Observatorio del ANP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}