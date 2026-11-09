import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Scale, Loader2, AlertTriangle } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SeoHead from '@/components/SEO/SeoHead';
import { getPageSeo } from '@/lib/seoConfig';
import LegalChat from '@/components/legal-anp/LegalChat';
import CanalesOficiales from '@/components/legal-anp/CanalesOficiales';
import AutoridadesList from '@/components/legal-anp/AutoridadesList';
import DatosANP from '@/components/legal-anp/DatosANP';
import BorradorDenuncia from '@/components/legal-anp/BorradorDenuncia';

const SEO_FALLBACK = {
  title: 'Abogado del ANP Xochimilco | Consulta legal y denuncias ambientales — Santuario Ajolote',
  description:
    'Asistente legal del Área Natural Protegida Ejidos de Xochimilco y San Gregorio Atlapulco: qué es legal dentro del ANP, fundamento jurídico, autoridades responsables, canales oficiales de denuncia y borradores de denuncia popular.',
  keywords: 'ANP Xochimilco, asesoría legal ambiental, denuncia ambiental CDMX, PROFEPA, PAOT, CONAGUA, LGEEPA, Plan de Manejo, ejidos de Xochimilco',
  canonical: 'https://axolotfinder.org/asistente-legal-anp',
  ogType: 'website',
};

export default function AsistenteLegalANP() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const seo = getPageSeo('asistenteLegalANP', 'es') || SEO_FALLBACK;

  useEffect(() => {
    base44.functions
      .invoke('anpLegalConsult', { mode: 'directorio' })
      .then((res) => {
        if (res.data?.error) setError('No se pudo cargar el directorio oficial.');
        else setData(res.data);
      })
      .catch(() => setError('No se pudo cargar el directorio oficial.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SeoHead {...seo} />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-800 px-5 py-5 sm:px-6 sm:py-6 mb-5"
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
            <Scale className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-heading text-xl sm:text-2xl font-bold text-white leading-tight">Abogado del ANP de Xochimilco</h1>
            <p className="text-emerald-100 text-xs sm:text-sm mt-1 leading-relaxed">
              Consulta qué es legal dentro del Área Natural Protegida, con qué ley se sustenta, quién es la autoridad responsable y
              cómo presentar una denuncia real.
            </p>
          </div>
        </div>
      </motion.div>

      <Tabs defaultValue="consulta" className="w-full">
        <TabsList className="grid grid-cols-3 w-full h-auto p-1 bg-emerald-50">
          <TabsTrigger value="consulta" className="text-xs sm:text-sm py-2">Consultar</TabsTrigger>
          <TabsTrigger value="directorio" className="text-xs sm:text-sm py-2">Directorio</TabsTrigger>
          <TabsTrigger value="denuncia" className="text-xs sm:text-sm py-2">Denunciar</TabsTrigger>
        </TabsList>

        <TabsContent value="consulta" className="mt-4">
          <LegalChat />
        </TabsContent>

        <TabsContent value="directorio" className="mt-4 space-y-4">
          {loading && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground py-8 justify-center">
              <Loader2 className="w-4 h-4 animate-spin" /> Cargando directorio oficial…
            </div>
          )}
          {error && <p className="text-sm text-red-600">{error}</p>}
          {data && (
            <>
              <DatosANP anp={data.anp} mapas={data.mapas} marcoLegal={data.marcoLegal} />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Canales oficiales de denuncia</p>
                <CanalesOficiales canales={data.canales} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Responsables del manejo del ANP</p>
                <AutoridadesList autoridades={data.autoridades} />
              </div>
            </>
          )}
        </TabsContent>

        <TabsContent value="denuncia" className="mt-4">
          <BorradorDenuncia tipos={data?.tiposDenuncia || []} />
        </TabsContent>
      </Tabs>

      <p className="flex items-start gap-1.5 text-[11px] text-muted-foreground bg-muted/60 rounded-xl px-3 py-2.5 mt-5 leading-relaxed">
        <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
        Orientación informativa basada en fuentes oficiales; no sustituye la asesoría de una persona abogada ni la representación legal.
        Ante riesgo inmediato o flagrancia, llama al 911.
      </p>
    </div>
  );
}