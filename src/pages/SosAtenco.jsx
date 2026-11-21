import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SeoHead from '@/components/SEO/SeoHead';
import SosHero from '@/components/sos/SosHero';
import SosVideos from '@/components/sos/SosVideos';
import SosReadings from '@/components/sos/SosReadings';
import SosZonaAfectada from '@/components/sos/SosZonaAfectada';
import { getSos, SOS_URL } from '@/lib/sosAtencoContent';

export default function SosAtenco() {
  const { i18n } = useTranslation();
  const lang = i18n?.language?.startsWith('es') ? 'es' : 'en';
  const c = getSos(lang);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: c.seoTitle,
    description: c.seoDesc,
    datePublished: '2026-11-20',
    inLanguage: lang,
    author: { '@type': 'Organization', name: 'La Voz del Humedal · Santuario Ajolote' },
    publisher: { '@type': 'Organization', name: 'Santuario Ajolote' },
    mainEntityOfPage: SOS_URL,
    contentLocation: { '@type': 'Place', name: 'Atenco, San Gregorio Atlapulco, Xochimilco', geo: { '@type': 'GeoCoordinates', latitude: 19.2, longitude: -99.04 } },
  };

  return (
    <div className="min-h-screen bg-background">
      <SeoHead title={c.seoTitle} description={c.seoDesc} canonical={SOS_URL} alternateCanonical={SOS_URL} ogType="article" schema={schema}
        keywords="Atenco, ajolote, Xochimilco, oxígeno disuelto, contaminación, San Gregorio Atlapulco, extinción" />
      <SosHero c={c} />
      <main className="mx-auto max-w-3xl space-y-10 px-4 py-8">
        <Link to="/noticias" className="text-sm font-bold underline">← {c.back}</Link>
        <p className="text-xs font-bold uppercase tracking-widest text-red-700">{c.byline}</p>
        <SosVideos c={c} />
        <SosReadings c={c} lang={lang} />
        {c.sections.map((s) => (
          <article key={s.kicker} className="space-y-3">
            <p className="text-xs font-black uppercase tracking-widest text-red-700">{s.kicker}</p>
            <h2 className="font-heading text-3xl font-black leading-tight">{s.title}</h2>
            {s.paras.map((p, i) => <p key={i} className="text-base leading-relaxed sm:text-lg">{p}</p>)}
          </article>
        ))}
        <SosZonaAfectada c={c} />
        <section className="space-y-2 border-t-2 border-foreground pt-6">
          <h2 className="font-heading text-2xl font-black">{c.sourcesTitle}</h2>
          <p className="text-sm text-muted-foreground">{c.sourcesNote}</p>
          <ul className="list-inside list-disc space-y-1 text-sm">
            {c.sources.map((s, i) => <li key={s}>[{i + 1}] {s}</li>)}
          </ul>
          <p className="flex flex-wrap gap-4 pt-2 text-sm font-bold underline">
            <Link to="/monitoreo-contaminantes-atenco">{c.related}</Link>
            <Link to="/reporte-extraordinario-atenco">{c.related2}</Link>
          </p>
        </section>
      </main>
    </div>
  );
}