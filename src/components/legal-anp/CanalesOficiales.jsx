import React from 'react';
import { Phone, Mail, ArrowUpRight, ShieldAlert } from 'lucide-react';

export default function CanalesOficiales({ canales = [] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {canales.map((c) => (
        <div key={c.id} className="rounded-2xl border border-border bg-white p-4 shadow-sm">
          <div className="flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-foreground leading-snug">{c.nombre}</p>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-red-700 mt-0.5">{c.ambito}</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed mt-2">{c.para_que}</p>
          <div className="flex flex-wrap items-center gap-3 mt-3">
            {c.telefono && (
              <a href={`tel:${c.telefono.replace(/\s/g, '')}`} className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900">
                <Phone className="w-3.5 h-3.5" /> {c.telefono}
              </a>
            )}
            {c.correo && (
              <a href={`mailto:${c.correo}`} className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900">
                <Mail className="w-3.5 h-3.5" /> {c.correo}
              </a>
            )}
            {c.url && (
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline">
                Abrir canal <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
          {c.requisitos && <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">Requisitos: {c.requisitos}</p>}
        </div>
      ))}
    </div>
  );
}