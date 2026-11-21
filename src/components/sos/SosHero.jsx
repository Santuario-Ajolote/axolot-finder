import React from 'react';
import { AlertTriangle, Skull, Droplets } from 'lucide-react';

export default function SosHero({ c }) {
  return (
    <header className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#facc15_0_22px,#111_22px_44px)] opacity-[0.18]" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-4 py-8 text-center sm:py-12">
        <p className="mx-auto inline-flex animate-pulse items-center gap-2 bg-yellow-400 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-black sm:text-sm">
          <AlertTriangle className="h-4 w-4" aria-hidden="true" /> {c.alert}
        </p>
        <div className="mt-4 flex items-center justify-center gap-3 sm:gap-6">
          <Skull className="h-10 w-10 text-yellow-400 sm:h-20 sm:w-20" aria-hidden="true" />
          <h1 className="font-heading text-6xl font-black leading-none tracking-tight text-red-600 sm:text-8xl md:text-9xl">{c.headline}</h1>
          <Droplets className="h-10 w-10 text-yellow-400 sm:h-20 sm:w-20" aria-hidden="true" />
        </div>
        <p className="mx-auto mt-4 max-w-3xl font-heading text-xl font-bold leading-snug sm:text-3xl">{c.sub}</p>
        <ul className="mt-5 flex flex-wrap justify-center gap-2">
          {c.chips.map((x) => (
            <li key={x} className="border-2 border-yellow-400 bg-red-700 px-3 py-1 text-xs font-black tracking-wide sm:text-sm">{x}</li>
          ))}
        </ul>
        <p className="mt-5 text-xs font-bold uppercase tracking-widest text-yellow-300">{c.report} · {c.place}</p>
      </div>
    </header>
  );
}