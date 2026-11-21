import React from 'react';
import { Ruler, MapPin } from 'lucide-react';

export default function SosZonaAfectada({ c }) {
  return (
    <section className="space-y-4">
      <h2 className="border-l-8 border-red-600 pl-3 font-heading text-2xl font-black">{c.zoneTitle}</h2>

      <div className="border-2 border-red-700 bg-red-50 p-3">
        <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase text-red-900">
          <Ruler className="h-3.5 w-3.5" aria-hidden="true" /> {c.zoneExtentLabel}
        </p>
        <p className="font-heading text-2xl font-black text-red-700">{c.zoneExtent}</p>
        <p className="mt-1 text-sm leading-relaxed text-red-900">{c.zoneExtentNote}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {c.zoneImages.map((img) => (
          <figure key={img.src} className="space-y-1.5">
            <a href={img.src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden border-2 border-foreground">
              <img src={img.src} alt={img.caption} loading="lazy" className="w-full object-cover" />
            </a>
            <figcaption className="text-xs leading-snug text-muted-foreground">{img.caption}</figcaption>
          </figure>
        ))}
      </div>

      <p className="flex items-start gap-1.5 text-xs text-muted-foreground">
        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" /> {c.zoneImagesNote}
      </p>

      <a
        href={c.earthUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-2 bg-black px-4 py-2 text-sm font-bold text-yellow-300 hover:bg-neutral-800"
      >
        {c.mapBtn}
      </a>
    </section>
  );
}