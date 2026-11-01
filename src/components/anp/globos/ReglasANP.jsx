import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenCheck } from 'lucide-react';
import { REGLAS_ANP } from '@/lib/globosCantoyaContent';

export default function ReglasANP() {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {REGLAS_ANP.map((r, i) => (
        <motion.div
          key={r.regla}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="rounded-2xl border border-amber-200/70 bg-amber-50/50 p-4 hover:shadow-md hover:border-amber-300 transition-all"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center flex-shrink-0">
              <BookOpenCheck className="w-3.5 h-3.5" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">{r.regla}</span>
          </div>
          <h4 className="font-heading font-bold text-sm text-slate-900 mb-1.5 leading-snug">{r.titulo}</h4>
          <p className="text-xs text-slate-700 leading-relaxed">{r.texto}</p>
          <p className="text-[11px] text-amber-800/90 leading-relaxed mt-2 pt-2 border-t border-amber-200/70 italic">
            {r.nota}
          </p>
        </motion.div>
      ))}
    </div>
  );
}