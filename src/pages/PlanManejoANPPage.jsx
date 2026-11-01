import React from 'react';
import { motion } from 'framer-motion';
import { Landmark } from 'lucide-react';
import SeoHead from '@/components/SEO/SeoHead';
import { getPageSeo } from '@/lib/seoConfig';
import PlanManejoANP from '@/components/science/PlanManejoANP';

export default function PlanManejoANPPage() {
  const seo = getPageSeo('planManejoANP', 'es') || {
    title: 'Plan de Manejo ANP Xochimilco | Santuario Ajolote — Cumplimiento Legal y Fallas Institucionales',
    description: 'Análisis del Plan de Manejo del Área Natural Protegida de Xochimilco: fallas del Estado, malas prácticas turísticas, tabla comparativa Plan vs. Realidad, marco legal y denuncias de CIMA A.C.',
    keywords: 'Plan de Manejo ANP Xochimilco, ANP, Área Natural Protegida, CONANP, LGEEPA, NOM-059, CIMA A.C., conservación ajolote, fallas institucionales,Plan de Manejo Xochimilco 2019, Santuario Ajolote',
    canonical: 'https://axolotfinder.org/anp',
    ogImage: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/7c2ee6c6f_Logotipopositivo2.png',
    ogType: 'article',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SeoHead {...seo} />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 px-6 py-5 mb-6"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
            <Landmark className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-heading text-xl font-bold text-white">Plan de Manejo ANP Xochimilco</h1>
            <p className="text-yellow-100 text-xs mt-0.5">
              Área Natural Protegida · Cumplimiento legal · Fallas institucionales documentadas
            </p>
          </div>
        </div>
      </motion.div>

      <PlanManejoANP />
    </div>
  );
}