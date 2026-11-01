import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Flame, Landmark, CalendarDays, ChevronRight } from 'lucide-react';
import { GLOBOS_META } from '@/lib/globosCantoyaContent';

export default function GlobosHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo nocturno ilustrado */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-slate-900 to-amber-950" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url('${GLOBOS_META.imagenes.hero}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/90 via-slate-950/80 to-amber-950/95" />

      {/* Puntos de luz decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { l: '8%', t: '18%', s: 6, d: 0 },
          { l: '22%', t: '34%', s: 4, d: 0.6 },
          { l: '41%', t: '12%', s: 5, d: 1.2 },
          { l: '63%', t: '26%', s: 7, d: 0.3 },
          { l: '78%', t: '14%', s: 4, d: 1.8 },
          { l: '90%', t: '32%', s: 5, d: 0.9 },
        ].map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-amber-300"
            style={{ left: p.l, top: p.t, width: p.s, height: p.s }}
            animate={{ opacity: [0.2, 1, 0.2], y: [0, -8, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: p.d, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 sm:pt-14 sm:pb-20">
        {/* Migaja */}
        <nav className="flex flex-wrap items-center gap-1.5 text-[11px] sm:text-xs text-amber-200/70 mb-6">
          <Link to="/" className="hover:text-amber-100 transition-colors">Inicio</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/anp" className="hover:text-amber-100 transition-colors">Observatorio ANP</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-amber-100/90">Globos y velas flotantes</span>
        </nav>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 backdrop-blur-sm px-3 py-1.5 mb-5">
            <Flame className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-amber-200">
              Investigación jurídica y ambiental
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] max-w-3xl">
            Globos de Cantoya y velas flotantes
          </h1>
          <p className="font-heading text-lg sm:text-xl lg:text-2xl text-amber-200/95 italic leading-snug mt-3 max-w-3xl">
            Actividades que no pueden estar por encima de la ley en Xochimilco
          </p>

          <p className="text-sm sm:text-base text-slate-200/85 leading-relaxed mt-6 max-w-2xl">
            {GLOBOS_META.bajada}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-300/80">
            <span className="inline-flex items-center gap-2">
              <Landmark className="w-4 h-4 text-amber-300" />
              Observatorio del ANP Xochimilco
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-amber-300" />
              {GLOBOS_META.byline}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Transición a la página */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}