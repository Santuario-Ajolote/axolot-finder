import React from 'react';
import { motion } from 'framer-motion';
import { Check, AlertTriangle, CircleSlash, Scale } from 'lucide-react';
import { DICTAMEN } from '@/lib/globosCantoyaContent';

const ESTADOS = {
  si: {
    label: 'Prohibida',
    pill: 'bg-rose-100 text-rose-700 border-rose-200',
    icon: CircleSlash,
    row: 'bg-rose-50/40',
  },
  condicional: {
    label: 'Sí, según el caso',
    pill: 'bg-amber-100 text-amber-800 border-amber-200',
    icon: AlertTriangle,
    row: 'bg-amber-50/40',
  },
  no: {
    label: 'Sin prohibición general',
    pill: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    icon: Check,
    row: 'bg-emerald-50/40',
  },
};

export default function DictamenTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 overflow-hidden"
    >
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-5 py-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-amber-400/20 flex items-center justify-center flex-shrink-0">
          <Scale className="w-4 h-4 text-amber-300" />
        </div>
        <div>
          <h3 className="font-heading text-base sm:text-lg font-bold text-white leading-tight">
            Dictamen jurídico
          </h3>
          <p className="text-[11px] text-slate-300 mt-0.5">
            ¿Están prohibidos los globos de Cantoya y las velas flotantes en Xochimilco?
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">Actividad</th>
              <th className="px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">Estatus</th>
              <th className="px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 hidden sm:table-cell">Fundamento</th>
            </tr>
          </thead>
          <tbody>
            {DICTAMEN.map((d) => {
              const e = ESTADOS[d.estado];
              const Icon = e.icon;
              return (
                <tr key={d.actividad} className={`border-b border-slate-100 last:border-0 ${e.row}`}>
                  <td className="px-4 py-3 align-top">
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">{d.actividad}</p>
                    <p className="text-[11px] text-slate-600 leading-relaxed mt-1 sm:hidden">{d.fundamento}</p>
                  </td>
                  <td className="px-4 py-3 align-top">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold leading-tight ${e.pill}`}>
                      <Icon className="w-3 h-3 flex-shrink-0" />
                      {d.veredicto}
                    </span>
                  </td>
                  <td className="px-4 py-3 align-top hidden sm:table-cell">
                    <p className="text-[11px] text-slate-600 leading-relaxed">{d.fundamento}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="px-5 py-4 bg-slate-50 border-t border-slate-200">
        <p className="text-[11px] text-slate-600 leading-relaxed">
          La Ley de Cultura Cívica considera infracción elevar aeróstatos sin permiso de la autoridad competente. Un globo de
          Cantoya es físicamente un dispositivo aerostático de aire caliente, aunque corresponde a la autoridad confirmar su
          clasificación jurídica en un procedimiento concreto. SEDEMA publica entre las conductas prohibidas para visitantes
          de áreas naturales protegidas fumar, encender fogatas u hornillas y utilizar fuego.
        </p>
      </div>
    </motion.div>
  );
}