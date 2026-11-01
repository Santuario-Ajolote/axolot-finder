import React from 'react';
import { motion } from 'framer-motion';

export default function GlobosSection({ id, num, title, kicker, icon: Icon, tone = 'amber', children }) {
  const tones = {
    amber: 'bg-amber-100 text-amber-700',
    rose: 'bg-rose-100 text-rose-700',
    indigo: 'bg-indigo-100 text-indigo-700',
    emerald: 'bg-emerald-100 text-emerald-700',
    slate: 'bg-slate-100 text-slate-700',
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-28"
    >
      <div className="flex items-start gap-3 mb-5">
        {num && (
          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 text-sm font-bold font-mono ${tones[tone]}`}>
            {num}
          </div>
        )}
        <div className="min-w-0">
          {kicker && (
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700 mb-1">{kicker}</p>
          )}
          <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight flex items-center gap-2">
            {Icon && <Icon className="w-5 h-5 text-amber-600 flex-shrink-0" />}
            {title}
          </h2>
        </div>
      </div>
      <div className="sm:pl-[52px] space-y-4">{children}</div>
    </motion.section>
  );
}