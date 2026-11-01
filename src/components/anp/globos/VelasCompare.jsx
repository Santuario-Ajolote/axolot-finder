import React from 'react';
import { Flame, Lightbulb, Info } from 'lucide-react';
import { VELAS, VELAS_NOTA } from '@/lib/globosCantoyaContent';

export default function VelasCompare() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        {VELAS.map((v) => {
          const isFlame = v.tipo === 'llama';
          const Icon = isFlame ? Flame : Lightbulb;
          return (
            <div
              key={v.tipo}
              className={`rounded-3xl border-2 p-5 ${
                isFlame ? 'border-rose-200 bg-rose-50/60' : 'border-emerald-200 bg-emerald-50/60'
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    isFlame ? 'bg-rose-600 text-white' : 'bg-emerald-600 text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 leading-snug">{v.nombre}</h4>
                  <p className={`text-[11px] font-semibold mt-0.5 ${isFlame ? 'text-rose-700' : 'text-emerald-700'}`}>
                    {v.resumen}
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {v.puntos.map((p, i) => (
                  <li key={i} className="flex gap-2 text-xs text-slate-700 leading-relaxed">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isFlame ? 'bg-rose-400' : 'bg-emerald-400'}`} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-start gap-3 rounded-2xl border border-indigo-200 bg-indigo-50/70 p-4">
        <Info className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-indigo-900 leading-relaxed">{VELAS_NOTA}</p>
      </div>
    </>
  );
}