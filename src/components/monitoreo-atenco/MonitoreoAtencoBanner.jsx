import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, Droplets, FlaskRound, Activity } from 'lucide-react';

// Mini bar chart comparing exterior vs interior for key contaminants
function MiniContaminantBar({ label, extPct, color }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[9px] text-white/70 w-14 shrink-0 truncate">{label}</span>
      <div className="flex-1 h-3 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full rounded-full transition-all" style={{ width: `${extPct}%`, backgroundColor: color }} />
      </div>
      <span className="text-[9px] font-bold text-white w-6 text-right">{extPct}%</span>
    </div>
  );
}

export default function MonitoreoAtencoBanner() {
  return (
    <section className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Warning label */}
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">Alerta Ambiental · Ciencia Ciudadana</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-950 via-emerald-950 to-blue-950 p-4 sm:p-5">

          {/* Background image */}
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'url(https://media.base44.com/images/public/6a0001949163ade945a0c48b/078e2e2f5_aguasnegrasatenco.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />

          <div className="relative grid sm:grid-cols-2 gap-4 items-center">
            {/* Left: Title + description */}
            <div>
              <div className="inline-flex items-center gap-1 bg-red-500/20 text-red-200 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-red-400/30 mb-2">
                <FlaskRound className="w-3 h-3" /> Informe Técnico 2024-2026
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white leading-tight mb-1.5">
                Monitoreo de Contaminantes
                <span className="block text-emerald-300 text-sm sm:text-base font-medium mt-0.5">San Gregorio Atlapulco · 4 puntos · 9 eventos</span>
              </h2>
              <p className="text-xs text-white/80 leading-relaxed mb-3 max-w-md">
                Tamizaje colorimétrico, biológico y electromagnético. E. coli detectada en puntos exteriores. Datos descargables y denuncia ciudadana ante PROFEPA y PAOT.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link to="/monitoreo-contaminantes-atenco"
                  className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 py-2 rounded-lg text-xs transition-colors">
                  Ver informe <ArrowRight className="w-3 h-3" />
                </Link>
                <Link to="/monitoreo-contaminantes-atenco#descargables"
                  className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-lg text-xs border border-white/20 transition-colors">
                  Descargar datos
                </Link>
              </div>
            </div>

            {/* Right: Key contaminant mini-charts */}
            <div className="bg-black/20 rounded-xl p-3 border border-white/10">
              <div className="flex items-center gap-1.5 mb-2.5">
                <Activity className="w-3 h-3 text-amber-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/80">Exterior &gt; Interior (% eventos)</span>
              </div>
              <div className="space-y-1.5">
                <MiniContaminantBar label="Cloro total" extPct={100} color="#ef4444" />
                <MiniContaminantBar label="Conductividad" extPct={100} color="#3b82f6" />
                <MiniContaminantBar label="TDS" extPct={100} color="#3b82f6" />
                <MiniContaminantBar label="Cloro libre" extPct={89} color="#ef4444" />
                <MiniContaminantBar label="Nitrato" extPct={89} color="#ef4444" />
                <MiniContaminantBar label="Nitrito" extPct={78} color="#f59e0b" />
                <MiniContaminantBar label="Cromo VI" extPct={67} color="#f59e0b" />
                <MiniContaminantBar label="E. coli" extPct={75} color="#ef4444" />
              </div>
              <div className="flex items-center gap-3 mt-2.5 pt-2 border-t border-white/10">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-[8px] text-white/60">Crítico</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-[8px] text-white/60">Moderado</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-[8px] text-white/60">Físico</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}