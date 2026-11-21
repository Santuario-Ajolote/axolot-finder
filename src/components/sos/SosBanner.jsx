import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AlertTriangle, Skull } from 'lucide-react';
import { getSos, SOS_PATH } from '@/lib/sosAtencoContent';

export default function SosBanner() {
  const { i18n } = useTranslation();
  const lang = i18n?.language?.startsWith('es') ? 'es' : 'en';
  const c = getSos(lang);
  return (
    <section className="mx-auto w-full max-w-5xl px-3 py-3">
      <Link to={SOS_PATH} className="block overflow-hidden border-4 border-red-700 bg-black text-white shadow-lg hover:border-yellow-400">
        <div className="h-3 bg-[repeating-linear-gradient(-45deg,#facc15_0_14px,#111_14px_28px)]" aria-hidden="true" />
        <div className="p-4 text-center sm:p-6">
          <p className="inline-flex animate-pulse items-center gap-2 bg-yellow-400 px-2 py-1 text-[11px] font-black uppercase tracking-wider text-black sm:text-xs">
            <AlertTriangle className="h-4 w-4" aria-hidden="true" /> {c.alert}
          </p>
          <div className="mt-2 flex items-center justify-center gap-3">
            <Skull className="h-8 w-8 text-yellow-400 sm:h-14 sm:w-14" aria-hidden="true" />
            <h2 className="font-heading text-5xl font-black text-red-600 sm:text-7xl">{c.headline}</h2>
          </div>
          <p className="mx-auto mt-2 max-w-2xl font-heading text-lg font-bold leading-snug sm:text-2xl">{c.sub}</p>
          <span className="mt-4 inline-flex min-h-11 items-center bg-red-700 px-5 py-2 text-sm font-black uppercase tracking-wide">{c.cta} →</span>
        </div>
        <div className="h-3 bg-[repeating-linear-gradient(-45deg,#facc15_0_14px,#111_14px_28px)]" aria-hidden="true" />
      </Link>
    </section>
  );
}