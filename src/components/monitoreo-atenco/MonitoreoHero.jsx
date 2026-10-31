import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Microscope, Calendar, MapPin, FlaskConical, Languages, Printer, Skull, ArrowRight, AlertTriangle, Droplets, Activity, ShieldAlert } from 'lucide-react';
import { META, I18N } from '@/lib/monitoreoAtencoContent';

export default function MonitoreoHero({ lang, onToggleLang, onPrint }) {
  const t = I18N[lang];
  const isEs = lang === 'es';

  return (
    <section className="relative overflow-hidden">
      {/* ═══ EXTRAORDINARY REPORT ALERT STRIP ═══ */}
      <div className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15"
          style={{ backgroundImage: 'url(https://media.base44.com/images/public/6a0001949163ade945a0c48b/078e2e2f5_aguasnegrasatenco.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center animate-pulse flex-shrink-0">
                <Skull className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-left">
                <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-red-200">{isEs ? '30 oct 2026 · Urgente' : 'Oct 30 2026 · Urgent'}</span>
                <span className="block text-sm sm:text-base font-bold text-white leading-tight">{isEs ? 'Reporte Técnico Extraordinario' : 'Extraordinary Technical Report'}</span>
              </div>
            </div>
            <p className="text-[11px] sm:text-xs text-white/90 leading-snug flex-1">
              {isEs
                ? <><strong className="text-white">Mortandad de peces y fauna silvestre</strong> en San Gregorio Atlapulco. Oxígeno disuelto en cero, oxidantes al máximo. Llamado urgente al gobierno para monitoreo serio en toda el ANP.</>
                : <><strong className="text-white">Fish and wildlife mortality</strong> in San Gregorio Atlapulco. Dissolved oxygen at zero, oxidants at maximum. Urgent call to government for serious monitoring across the entire ANP.</>}
            </p>
            <Link to="/reporte-extraordinario-atenco"
              className="inline-flex items-center gap-1.5 bg-white text-red-700 font-bold text-xs sm:text-sm px-4 py-2 sm:py-2.5 rounded-lg whitespace-nowrap hover:bg-red-50 transition-colors shadow-md flex-shrink-0">
              {isEs ? 'Ver reporte' : 'View report'} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ═══ MAIN HERO ═══ */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'url(https://media.base44.com/images/public/6a0001949163ade945a0c48b/8e2196b82_atenco.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/60 to-transparent" />

        {/* Decorative blobs */}
        <div className="absolute top-10 right-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-18">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-emerald-500/30 text-emerald-100 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-400/30">
                <FlaskConical className="w-3 h-3" /> {isEs ? 'Ciencia Ciudadana' : 'Citizen Science'}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-amber-500/30 text-amber-100 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber-400/30">
                <Microscope className="w-3 h-3" /> CIMA A.C.
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3">
              {isEs ? META.titulo : 'Pollutant Monitoring — San Gregorio Atlapulco 2024-2026'}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-emerald-100/90 max-w-3xl leading-relaxed mb-5">
              {isEs
                ? `Monitoreo ambiental cronológico de la calidad del agua en ${META.puntos_count} puntos estratégicos del sistema lacustre de Xochimilco. ${META.eventos_count} eventos de muestreo, ${META.parametros_count} parámetros analizados mediante tamizaje colorimétrico, biológico y electromagnético.`
                : `Chronological environmental monitoring of water quality at ${META.puntos_count} strategic points in the Xochimilco lake system. ${META.eventos_count} sampling events, ${META.parametros_count} parameters analyzed by colorimetric, biological, and electromagnetic screening.`}
            </p>

            {/* Metadata row */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-5">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <Calendar className="w-4 h-4 text-amber-300 flex-shrink-0" />
                <span className="text-emerald-50">{isEs ? META.periodo : 'September 2024 – September 2026'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <MapPin className="w-4 h-4 text-amber-300 flex-shrink-0" />
                <span className="text-emerald-50">{isEs ? META.zona : 'San Gregorio Atlapulco, Xochimilco, Mexico City'}</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 max-w-lg">
              <StatCard icon={MapPin} value={META.puntos_count} label={isEs ? 'Puntos' : 'Points'} />
              <StatCard icon={Activity} value={META.eventos_count} label={isEs ? 'Eventos' : 'Events'} />
              <StatCard icon={FlaskConical} value={META.parametros_count} label={isEs ? 'Parámetros' : 'Parameters'} />
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <button onClick={onPrint} className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors no-print shadow-lg">
                <Printer className="w-4 h-4" /> {t.download_pdf}
              </button>
              <Link to="/reporte-extraordinario-atenco"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors no-print shadow-lg animate-pulse">
                <AlertTriangle className="w-4 h-4" /> {isEs ? 'Reporte Extraordinario 30/10/2026' : 'Extraordinary Report Oct 30 2026'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button onClick={onToggleLang} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-xl text-sm border border-white/20 transition-colors no-print">
                <Languages className="w-4 h-4" /> {isEs ? 'English' : 'Español'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/10 text-center">
      <div className="flex items-center justify-center gap-1 mb-0.5">
        <Icon className="w-3 h-3 text-amber-300" />
        <span className="text-lg sm:text-xl font-bold text-white">{value}</span>
      </div>
      <span className="text-[9px] sm:text-[10px] font-medium text-emerald-200/80 uppercase tracking-wider">{label}</span>
    </div>
  );
}