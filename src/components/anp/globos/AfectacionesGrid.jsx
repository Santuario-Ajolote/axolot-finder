import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Flame, Moon, FlaskConical } from 'lucide-react';
import { AFECTACIONES } from '@/lib/globosCantoyaContent';

const ICONOS = [Trash2, Flame, Moon, FlaskConical];

export default function AfectacionesGrid() {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {AFECTACIONES.map((a, i) => {
        const Icon = ICONOS[i] || FlaskConical;
        return (
          <motion.div
            key={a.n}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group relative rounded-2xl border border-slate-200 bg-white p-4 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100 transition-all"
          >
            <span className="absolute top-3 right-4 font-heading text-3xl font-bold text-slate-100 group-hover:text-amber-100 transition-colors">
              {a.n}
            </span>
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
              <Icon className="w-4 h-4" />
            </div>
            <h4 className="font-heading font-bold text-sm text-slate-900 mb-1.5 relative">{a.titulo}</h4>
            <p className="text-xs text-slate-600 leading-relaxed relative">{a.texto}</p>
          </motion.div>
        );
      })}
    </div>
  );
}