import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Waves, Users, Recycle, Leaf, ShieldAlert } from 'lucide-react';
const WHATSAPP_NAYARIT =
  'https://api.whatsapp.com/send/?phone=5215555031691&text=%C2%A1Hola%21+Quiero+reservar+una+experiencia+de+turismo+responsable+en+Nayarit&type=phone_number';

const IMAGES = {
  logo: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/18bf0515d_LOGOBATALLAPORLAPLAYA.jpg',
  bay: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/d8abbb2dc_WhatsAppImage2026-10-22at1258303.jpeg',
  bayOld: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/68d523913_playalascocinas.jpg',
  surfBarrel: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/e25fd828e_surfplaya1.jpg',
  surf2: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/1acce3f0c_surf2.jpg',
  supSunset: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/67ec4fc95_WhatsAppImage2026-10-22at1258302.jpeg',
  fisherman: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/271aafe69_WhatsAppImage2026-10-22at1258281.jpeg',
  harborSelfie: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/5f0c9326e_WhatsAppImage2026-10-22at125830.jpeg',
  protestConstruction: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/e48cab2ac_playalascocinas1.jpg',
  protestSigns: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/aaffc7620_playalascocinas.jpg',
  rocks: 'https://media.base44.com/images/public/6a0001949163ade945a0c48b/bf9132ae5_piedrasplayalascocinas.jpg',
};

const PILLS_ES = [
  { icon: Waves, label: 'Océano vivo' },
  { icon: Users, label: 'Comunidad local' },
  { icon: Recycle, label: 'Economía circular' },
  { icon: Leaf, label: 'Playa protegida' },
];

const PILLS_EN = [
  { icon: Waves, label: 'Living ocean' },
  { icon: Users, label: 'Local community' },
  { icon: Recycle, label: 'Circular economy' },
  { icon: Leaf, label: 'Protected beach' },
];

const COLLAGE = [
  { url: IMAGES.surfBarrel, label: { es: 'Surf', en: 'Surf' } },
  { url: IMAGES.supSunset, label: { es: 'SUP Atardecer', en: 'SUP Sunset' } },
  { url: IMAGES.fisherman, label: { es: 'Pesca', en: 'Fishing' } },
  { url: IMAGES.harborSelfie, label: { es: 'Puerto', en: 'Harbor' } },
  { url: IMAGES.protestConstruction, label: { es: 'Defensa', en: 'Defense' } },
  { url: IMAGES.protestSigns, label: { es: 'Voces', en: 'Voices' } },
  { url: IMAGES.rocks, label: { es: 'Costa', en: 'Coast' } },
];

export default function TurismoNayaritBanner({ lang = 'es' }) {
  const isEs = lang === 'es';
  const pills = isEs ? PILLS_ES : PILLS_EN;

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-5 bg-cyan-600 rounded-full animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-700">
            {isEs ? 'Turismo Comunitario · Nayarit' : 'Community Tourism · Nayarit'}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-cyan-200/50"
        >
          {/* Hero background image */}
          <div className="relative">
            <img
              src={IMAGES.bay}
              alt={isEs ? 'Playa Cocinas, Punta de Mita, Nayarit' : 'Playa Cocinas, Punta de Mita, Nayarit'}
              className="w-full h-[300px] sm:h-[380px] lg:h-[440px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />

            {/* Logo badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
              <motion.img
                src={IMAGES.logo}
                alt={isEs ? 'Logo Batalla por la Playa' : 'Battle for the Beach logo'}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full object-cover border-2 border-white/70 shadow-2xl"
              />
            </div>

            {/* Title overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/90 text-amber-950 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldAlert className="w-3 h-3" />
                  {isEs ? 'Playa Cocinas · Punta de Mita' : 'Playa Cocinas · Punta de Mita'}
                </div>
                <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2 drop-shadow-lg">
                  {isEs ? 'Turismo Responsable' : 'Responsible Tourism'}
                  <span className="block text-cyan-300 text-base sm:text-2xl lg:text-3xl">
                    {isEs ? 'Nayarit, México' : 'Nayarit, Mexico'}
                  </span>
                </h2>
                <p className="text-white/85 text-sm sm:text-base max-w-lg leading-relaxed mb-3 drop-shadow">
                  {isEs
                    ? 'Visita este paraíso, ayúdanos a salvar la playa. La playa no se vende, se defiende. Turismo comunitario y economía circular en Punta de Mita.'
                    : 'Visit this paradise, help us save the beach. The beach is not for sale, it is defended. Community tourism and circular economy in Punta de Mita.'}
                </p>
              </motion.div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {pills.map((p, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-white bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20"
                  >
                    <p.icon className="w-3 h-3" />
                    {p.label}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link to="/playa">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-400 text-white font-bold text-sm shadow-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {isEs ? 'Reserva ahora' : 'Book now'}
                  </motion.button>
                </Link>
                <Link to="/playacocinas">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-bold text-sm shadow-lg transition-colors"
                  >
                    {isEs ? 'Conoce la batalla por la playa' : 'Discover the battle for the beach'}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>

          {/* Photo collage strip */}
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-0.5 bg-cyan-950 p-0.5">
            {COLLAGE.map((img, i) => (
              <div key={i} className="relative group overflow-hidden aspect-square">
                <img
                  src={img.url}
                  alt={img.label[isEs ? 'es' : 'en']}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="text-white text-[9px] sm:text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.label[isEs ? 'es' : 'en']}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}