import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Scale, ShieldAlert, FileText, Sparkles, Check } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const COPY = {
  es: {
    tag: 'Nuevo · Super Agente Legal',
    eyebrow: 'Inteligencia artificial · Justicia ambiental',
    title: '¿Es legal esto',
    titleAccent: 'dentro del ANP?',
    lead: 'Pregúntale al abogado del Área Natural Protegida de Xochimilco: qué permite la ley, con qué artículo se sustenta, quién debe vigilarlo y cómo denunciar de verdad.',
    pills: [
      { icon: Scale, label: 'Ley y fundamento' },
      { icon: ShieldAlert, label: 'Autoridad responsable' },
      { icon: FileText, label: 'Borrador de denuncia' },
    ],
    cta: 'Hablar con el abogado del ANP',
    ctaSub: 'Gratis · 24/7 · En español',
    sources: 'Fuentes oficiales: SEDEMA · PAOT · PROFEPA · CONAGUA · CONANP · Gaceta CDMX',
    question: '¿Puedo construir una barda junto al canal?',
    answer: 'No sin autorización. El Programa de Manejo (2018) y la LGEEPA lo condicionan a evaluación de impacto ambiental.',
    answerTag: 'Respuesta con fundamento legal',
  },
  en: {
    tag: 'New · Legal Super Agent',
    eyebrow: 'Artificial intelligence · Environmental justice',
    title: 'Is this legal',
    titleAccent: 'inside the protected area?',
    lead: 'Ask the Xochimilco Protected Natural Area lawyer: what the law allows, which article backs it, who must enforce it and how to actually file a complaint.',
    pills: [
      { icon: Scale, label: 'Law and legal basis' },
      { icon: ShieldAlert, label: 'Responsible authority' },
      { icon: FileText, label: 'Complaint draft' },
    ],
    cta: 'Talk to the ANP lawyer',
    ctaSub: 'Free · 24/7 · In Spanish',
    sources: 'Official sources: SEDEMA · PAOT · PROFEPA · CONAGUA · CONANP · CDMX Gazette',
    question: 'Can I build a wall next to the canal?',
    answer: 'Not without authorization. The 2018 Management Program and the LGEEPA require an environmental impact review.',
    answerTag: 'Answer backed by law',
  },
};

export default function AbogadoANPBanner({ lang = 'es' }) {
  const c = COPY[lang === 'en' ? 'en' : 'es'];

  const track = () => {
    base44.analytics.track({ eventName: 'anp_agent_cta_click', properties: { source: 'home_banner' } });
  };

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-5 bg-amber-500 rounded-full animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700">{c.tag}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-300/30 bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-800"
        >
          {/* Glow decorativo */}
          <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-amber-400/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-teal-400/20 blur-3xl pointer-events-none" />
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 88% 12%, rgba(251,191,36,0.5) 0%, transparent 42%)' }}
          />

          <div className="relative grid lg:grid-cols-[1.35fr_1fr] gap-6 p-5 sm:p-8 lg:p-10 items-center">
            {/* Texto y CTA */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3 h-3 text-amber-300" />
                {c.eyebrow}
              </span>

              <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.05] mb-3">
                {c.title}
                <span className="block text-amber-300">{c.titleAccent}</span>
              </h2>

              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed max-w-xl mb-4">{c.lead}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {c.pills.map((p, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-white bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20"
                  >
                    <p.icon className="w-3 h-3 text-amber-300" />
                    {p.label}
                  </span>
                ))}
              </div>

              <Link to="/asistente-legal-anp" onClick={track} className="inline-block w-full sm:w-auto">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black text-sm sm:text-base shadow-xl border border-amber-200/60"
                >
                  <Scale className="w-4 h-4 sm:w-5 sm:h-5" />
                  {c.cta}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.span>
              </Link>
              <p className="text-emerald-200/70 text-[10px] sm:text-xs mt-2 font-medium">{c.ctaSub}</p>
            </div>

            {/* Tarjeta de conversación */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl bg-white/95 shadow-2xl p-3 sm:p-4 border border-white/40"
            >
              <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-emerald-100">
                <div className="w-7 h-7 rounded-lg bg-emerald-800 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-3.5 h-3.5 text-amber-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-emerald-950 leading-tight">Abogado del ANP</p>
                  <p className="text-[9px] text-emerald-700/70 leading-tight">Xochimilco · San Gregorio Atlapulco</p>
                </div>
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <p className="text-[10px] sm:text-xs text-emerald-950 font-semibold bg-emerald-50 rounded-xl rounded-br-sm px-3 py-2 mb-2 ml-4">
                {c.question}
              </p>
              <div className="text-[10px] sm:text-xs text-foreground/80 bg-muted/70 rounded-xl rounded-bl-sm px-3 py-2 mr-4">
                {c.answer}
              </div>
              <p className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-emerald-700 mt-2.5 ml-1">
                <Check className="w-3 h-3" />
                {c.answerTag}
              </p>
            </motion.div>
          </div>

          <p className="relative bg-emerald-950/60 border-t border-white/10 text-emerald-200/70 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider px-5 sm:px-10 py-2.5">
            {c.sources}
          </p>
        </motion.div>
      </div>
    </section>
  );
}