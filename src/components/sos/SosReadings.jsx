import React from 'react';
import { READINGS } from '@/lib/sosAtencoContent';

export default function SosReadings({ c, lang }) {
  return (
    <section className="space-y-3">
      <h2 className="border-l-8 border-red-600 pl-3 font-heading text-2xl font-black">{c.readingsTitle}</h2>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {READINGS.map((r) => (
          <div key={r.k} className="border-2 border-red-700 bg-red-50 p-3 text-center">
            <p className="text-xs font-bold uppercase text-red-900">{r.k} · {r[lang]}</p>
            <p className="font-heading text-4xl font-black text-red-700">{r.v}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">{c.readingsNote}</p>
    </section>
  );
}