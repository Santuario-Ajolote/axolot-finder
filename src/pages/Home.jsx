import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Dna, Users, Shield, Eye, BarChart3, Plus, Instagram, Youtube, Linkedin, Globe, Leaf, Heart } from 'lucide-react';

const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
);
import { useLang } from '@/lib/LanguageContext';
import { t } from '@/lib/i18n';

import ConservationBadges from '@/components/home/ConservationBadges';
import ReportajeDrenajes from '@/components/reportajes/ReportajeDrenajes';
import ZonaSacrificioBanner from '@/components/investigacion/ZonaSacrificioBanner';
import HomeExtinctionClock from '@/components/home/HomeExtinctionClock';
import WildSightingReport from '@/components/home/WildSightingReport';
import ContaminacionSanGregorioBanner from '@/components/home/ContaminacionSanGregorioBanner';
import InformeColorimetriaBanner from '@/components/home/InformeColorimetriaBanner';
import SalsaChicuaroteBanner from '@/components/home/SalsaChicuaroteBanner';
import MonitoreoAtencoBanner from '@/components/monitoreo-atenco/MonitoreoAtencoBanner';
import CempasuchilBanner from '@/components/home/CempasuchilBanner';
import AbogadoANPBanner from '@/components/home/AbogadoANPBanner';
import TurismoResponsableBanner from '@/components/home/TurismoResponsableBanner';
import TurismoNayaritBanner from '@/components/home/TurismoNayaritBanner';
import SocialLinks from '@/components/SEO/SocialLinks';
import CommunityFollowBanner from '@/components/home/CommunityFollowBanner';
import CartaRamsarBanner from '@/components/home/CartaRamsarBanner';
import InstagramFeed from '@/components/home/InstagramFeed';
import PageMeta from '@/components/SEO/PageMeta';
import { getPageSeo } from '@/lib/seoConfig';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';

export default function Home() {
  const { lang } = useLang();

  const { data: rawSightings = [] } = useQuery({
    queryKey: ['home-sightings'],
    queryFn: () => base44.entities.Sighting.list('-date_observed', 100),
  });

  const sightings = rawSightings.map(s => s.data || s);

  return (
    <div className="overflow-hidden">
      <PageMeta {...getPageSeo('home', lang)} />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Badge variant="secondary" className="mb-5 px-4 py-1.5 text-xs font-medium bg-primary/10 text-primary border-primary/20">
                {t(lang, 'hero_badge')}
              </Badge>
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                {t(lang, 'hero_headline_1')}
                <span className="block text-primary mt-1 text-2xl sm:text-3xl lg:text-4xl font-medium">{t(lang, 'hero_headline_2')}</span>

              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
                {t(lang, 'hero_desc')}
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/sightings">
                  <Button size="lg" className="rounded-xl px-6 h-12 text-base gap-2">
                    {t(lang, 'hero_btn_register')} <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/reporte-incidencia">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-6 h-12 rounded-xl border-2 border-amber-500 text-amber-800 bg-amber-50 hover:bg-amber-100 font-semibold text-base transition-colors cursor-pointer select-none">
                    <Shield className="w-4 h-4" />
                    {t(lang, 'nav_report')}
                  </motion.div>
                </Link>
              </div>
              <ConservationBadges />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center justify-center w-full"
            >
              <HomeExtinctionClock />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proyectos 2026 — Santuario Ajolote (reubicado a Quiénes Somos) */}

      {/* ═══ SUPER AGENTE — Abogado del ANP de Xochimilco ═══ */}
      <AbogadoANPBanner lang={lang} />

      {/* ═══ CAMPAÑA — Salsa de Chile Chicuarote: compra una botella, salva el humedal ═══ */}
      <SalsaChicuaroteBanner lang={lang} />

      {/* ═══ INVESTIGACIÓN DE TEMPORADA — Cempasúchil: Biopiratería y Soberanía Genética ═══ */}
      <CempasuchilBanner />

      {/* ═══ MONITOREO DE CONTAMINANTES — 4 Puntos · Drenaje Atenco 2024-2026 ═══ */}
      <MonitoreoAtencoBanner />

      {/* ═══ NUEVO INFORME CIENTÍFICO — Tamizaje Colorimétrico 2024-2026 ═══ */}
      <InformeColorimetriaBanner />

      {/* ═══ NOTA DE IMPORTANCIA CRÍTICA — Avistamiento de Ajolote Silvestre ═══ */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-6 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Nota de Importancia Crítica · Avistamiento Silvestre Confirmado</span>
          </div>
          <WildSightingReport />
        </div>
      </section>

      {/* NOTA PRINCIPAL — Reportaje Alcantarillas y Drenajes */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-6 bg-red-600 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-red-700">Investigación Principal — Santuario Ajolote</span>
          </div>
          <ReportajeDrenajes compact={true} />
        </div>
      </section>

      {/* Investigación Especial — Zona de Sacrificio */}
      <section className="py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-6 bg-amber-500 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Investigación Especial · Ecología de la Injusticia</span>
          </div>
          <ZonaSacrificioBanner />
        </div>
      </section>

      {/* Banner Carta a Ramsar */}
      <CartaRamsarBanner />

      {/* Banner Turismo Responsable Xochimilco */}
      <TurismoResponsableBanner />

      {/* Banner Turismo Responsable Nayarit */}
      <TurismoNayaritBanner lang={lang} />

      {/* Feed de Instagram */}
      <InstagramFeed />

      {/* Banner Únete a la Comunidad */}
      <CommunityFollowBanner />


    </div>
  );
}