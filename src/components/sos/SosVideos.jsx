import React from 'react';
import { VIDEOS } from '@/lib/sosAtencoContent';

export default function SosVideos({ c }) {
  return (
    <section className="space-y-3">
      <h2 className="border-l-8 border-red-600 pl-3 font-heading text-2xl font-black">{c.videosTitle}</h2>
      <p className="text-sm text-muted-foreground">{c.videosNote}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {VIDEOS.map((v) => (
          <figure key={v.n} className="overflow-hidden border-2 border-foreground bg-black">
            <video src={v.src} muted loop playsInline controls preload="metadata" className="aspect-video w-full object-cover" aria-label={`${c.videosTitle} ${v.n}`} />
            <figcaption className="bg-red-700 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-white">Video {v.n} · 20/11/2026</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}