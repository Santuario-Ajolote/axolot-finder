import React from 'react';
import { MapPin, ArrowUpRight, Landmark } from 'lucide-react';

export default function DatosANP({ anp, mapas = [], marcoLegal = [] }) {
  if (!anp) return null;

  const fichas = [
    { label: 'Categoría', value: anp.categoria },
    { label: 'Superficie', value: anp.superficie },
    { label: 'Decreto', value: anp.decreto },
    { label: 'Programa de Manejo', value: anp.programa },
    { label: 'Humedal internacional', value: anp.ramsar },
  ];

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4">
        <div className="flex items-start gap-2">
          <Landmark className="w-4 h-4 text-emerald-800 flex-shrink-0 mt-0.5" />
          <p className="text-sm font-bold text-emerald-950 leading-snug">{anp.nombre}</p>
        </div>
        <dl className="mt-3 space-y-2">
          {fichas.map((f) => (
            <div key={f.label}>
              <dt className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">{f.label}</dt>
              <dd className="text-xs text-foreground/80 leading-relaxed">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Mapas y polígono</p>
        <div className="flex flex-wrap gap-2">
          {mapas.map((m) => (
            <a
              key={m.nombre}
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full border border-emerald-200 bg-white px-3 py-1.5 hover:bg-emerald-50"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-700" /> {m.nombre}
              <ArrowUpRight className="w-3 h-3" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Marco legal aplicable</p>
        <div className="space-y-2">
          {marcoLegal.map((grupo) => (
            <details key={grupo.grupo} className="rounded-xl border border-border bg-white px-3.5 py-2.5">
              <summary className="text-sm font-bold text-foreground cursor-pointer">{grupo.grupo}</summary>
              <ul className="mt-2 space-y-2">
                {grupo.instrumentos.map((i) => (
                  <li key={i.nombre} className="text-xs leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">{i.nombre}.</span> {i.relevancia}
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}