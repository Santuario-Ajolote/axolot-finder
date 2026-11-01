import React from 'react';
import { FileText } from 'lucide-react';
import { FUENTES } from '@/lib/globosCantoyaContent';

export default function FuentesList() {
  return (
    <ol className="rounded-3xl border border-slate-200 bg-slate-50 p-5 space-y-2.5">
      {FUENTES.map((f, i) => (
        <li key={i} className="flex gap-3 text-[11px] sm:text-xs text-slate-600 leading-relaxed">
          <span className="flex-shrink-0 mt-0.5">
            <FileText className="w-3.5 h-3.5 text-slate-400" />
          </span>
          <span>
            <span className="font-mono text-slate-400 mr-1.5">{String(i + 1).padStart(2, '0')}</span>
            {f}
          </span>
        </li>
      ))}
    </ol>
  );
}