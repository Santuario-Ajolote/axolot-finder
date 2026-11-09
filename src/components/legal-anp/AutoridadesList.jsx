import React from 'react';
import { Building2, ArrowUpRight } from 'lucide-react';

export default function AutoridadesList({ autoridades = [] }) {
  return (
    <div className="space-y-2">
      {autoridades.map((a) => (
        <div key={a.nombre} className="rounded-xl border border-border bg-white p-3.5">
          <div className="flex items-start gap-2">
            <Building2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-foreground leading-snug">{a.nombre}</p>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700 mt-0.5">{a.rol}</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed mt-2">{a.competencia}</p>
          <p className="text-[11px] text-foreground/70 mt-2">{a.contacto}</p>
          {a.url && (
            <a href={a.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-primary mt-2 hover:underline">
              Sitio oficial <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      ))}
    </div>
  );
}