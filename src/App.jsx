import { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import { LanguageProvider } from '@/lib/LanguageContext';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n-config';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import AppLayout from '@/components/layout/AppLayout';
import useAnalyticsPageView from '@/hooks/useAnalyticsPageView';
import useSystemTheme from '@/hooks/useSystemTheme';

// Páginas cargadas bajo demanda — reduce el bundle inicial
const Home = lazy(() => import('@/pages/Home'));
const Sightings = lazy(() => import('@/pages/Sightings'));
const Genetics = lazy(() => import('@/pages/Genetics'));
const ConservationMap = lazy(() => import('@/pages/ConservationMap'));
const SpecimenProfile = lazy(() => import('@/pages/SpecimenProfile'));
const Science = lazy(() => import('@/pages/Science'));
const ForoArcaTierra = lazy(() => import('@/pages/ForoArcaTierra'));
const Forum = lazy(() => import('@/pages/Forum'));
const WildSightings = lazy(() => import('@/pages/WildSightings'));
const UserProfile = lazy(() => import('@/pages/UserProfile'));
const ModerationPanel = lazy(() => import('@/pages/ModerationPanel'));
const UserGallery = lazy(() => import('@/pages/UserGallery'));
const ChinampasVirtuales = lazy(() => import('@/pages/ChinampasVirtuales'));
const VideoGaleria = lazy(() => import('@/pages/VideoGaleria'));
const InfografiaAI = lazy(() => import('@/pages/InfografiaAI'));
const HistoriaXochimilco = lazy(() => import('@/pages/HistoriaXochimilco'));
const ReporteIncidencia = lazy(() => import('@/pages/ReporteIncidencia'));
const Actores = lazy(() => import('@/pages/Actores'));
const SantuarioAjolote = lazy(() => import('@/pages/SantuarioAjolote'));
const TurismoResponsable = lazy(() => import('@/pages/TurismoResponsable'));
const DiaDeMuertos = lazy(() => import('@/pages/DiaDeMuertos'));
const ReportajeDrenajesPage = lazy(() => import('@/pages/ReportajeDrenajesPage'));
const ZonaSacrificioPage = lazy(() => import('@/pages/ZonaSacrificio'));
const Voluntariado = lazy(() => import('@/pages/Voluntariado'));
const VoluntariadoRemotoPage = lazy(() => import('@/pages/VoluntariadoRemotoPage'));
const VoluntariadoBrigadasPage = lazy(() => import('@/pages/VoluntariadoBrigadasPage'));
const GuardianAjolote = lazy(() => import('@/pages/GuardianAjolote'));
const PublicarInstagram = lazy(() => import('@/pages/PublicarInstagram'));
const QuienesSomos = lazy(() => import('@/pages/QuienesSomos'));
const ProyectoDetalle = lazy(() => import('@/pages/ProyectoDetalle'));
const RescateChinampas = lazy(() => import('@/pages/RescateChinampas'));
const ChileChicuarote = lazy(() => import('@/pages/ChileChicuarote'));
const TortugaCasquito = lazy(() => import('@/pages/TortugaCasquito'));
const DenunciaContaminacionSanGregorio = lazy(() => import('@/pages/DenunciaContaminacionSanGregorio'));
const RedDeBiofiltros = lazy(() => import('@/pages/RedDeBiofiltros'));
const Acciones2026 = lazy(() => import('@/pages/Acciones2026'));
const Legal = lazy(() => import('@/pages/Legal'));
const CartaRamsar = lazy(() => import('@/pages/CartaRamsar'));
const LaboratorioCoyoacan = lazy(() => import('@/pages/LaboratorioCoyoacan'));
const MigracionSEO = lazy(() => import('@/pages/MigracionSEO'));
const ObservatorioCempasuchil = lazy(() => import('@/pages/ObservatorioCempasuchil'));
const LeyendaCempasuchil = lazy(() => import('@/pages/LeyendaCempasuchil'));
const FitomejoradoresNarrativa = lazy(() => import('@/pages/FitomejoradoresNarrativa'));
const CienciaMexicanaCempasuchil = lazy(() => import('@/pages/CienciaMexicanaCempasuchil'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const InformeColorimetriaSanGregorio = lazy(() => import('@/pages/InformeColorimetriaSanGregorio'));
const MonitoreoAtenco = lazy(() => import('@/pages/MonitoreoAtenco'));
const ReporteExtraordinarioAtenco = lazy(() => import('@/pages/ReporteExtraordinarioAtenco'));
const PlanManejoANPPage = lazy(() => import('@/pages/PlanManejoANPPage'));
const GlobosCantoyaPage = lazy(() => import('@/pages/GlobosCantoyaPage'));
const BatallaPorLaPlaya = lazy(() => import('@/pages/BatallaPorLaPlaya'));
const TurismoPlayaCocinas = lazy(() => import('@/pages/TurismoPlayaCocinas'));
const Playa = lazy(() => import('@/pages/Playa'));
const Clasificados = lazy(() => import('@/pages/Clasificados'));
const Noticias = lazy(() => import('@/pages/Noticias'));
const Kizaman = lazy(() => import('@/pages/Kizaman'));
const AsistenteLegalANP = lazy(() => import('@/pages/AsistenteLegalANP'));
const Cima = lazy(() => import('@/pages/Cima'));
const OAuthConsent = lazy(() => import('@/pages/OAuthConsent'));
const Entrevistas = lazy(() => import('@/pages/Entrevistas'));
const EntrevistaBastida = lazy(() => import('@/pages/EntrevistaBastida'));
const SosAtenco = lazy(() => import('@/pages/SosAtenco'));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
  </div>
);

const AuthenticatedApp = () => {
  useAnalyticsPageView();
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          <p className="text-sm text-muted-foreground">Cargando AxolotFinder...</p>
        </div>
      </div>
    );
  }

  // Allow public routes without login
  const publicRoutes = ['/voluntariado', '/oauth/consent'];
  const isPublicRoute = publicRoutes.some(r => window.location.pathname.startsWith(r));

  if (authError && !isPublicRoute) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Suspense fallback={<PageLoader />}>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sightings" element={<Sightings />} />
        <Route path="/genetics" element={<Genetics />} />
        <Route path="/map" element={<ConservationMap />} />
        <Route path="/genetics/:id" element={<SpecimenProfile />} />
        <Route path="/science" element={<Science />} />
        <Route path="/foro/arca-tierra" element={<ForoArcaTierra />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/wild-sightings" element={<WildSightings />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/moderation" element={<ModerationPanel />} />

        <Route path="/mi-galeria" element={<UserGallery />} />
        <Route path="/chinampas" element={<ChinampasVirtuales />} />
        <Route path="/video-galeria" element={<VideoGaleria />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/cima" element={<Cima />} />
        <Route path="/proyectos/rescate-7-chinampas" element={<RescateChinampas />} />
        <Route path="/proyectos/chile-chicuarote" element={<ChileChicuarote />} />
        <Route path="/proyectos/refugio-tortuga-casquito" element={<TortugaCasquito />} />
        <Route path="/denuncia-contaminacion-san-gregorio" element={<DenunciaContaminacionSanGregorio />} />
        <Route path="/red-de-biofiltros" element={<RedDeBiofiltros />} />
        <Route path="/acciones-2026" element={<Acciones2026 />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/acciones-legales" element={<Navigate to="/legal" replace />} />
        <Route path="/carta-ramsar" element={<CartaRamsar />} />
        <Route path="/migracion-seo" element={<MigracionSEO />} />
        <Route path="/observatorio-cempasuchil" element={<ObservatorioCempasuchil />} />
        <Route path="/leyenda-cempasuchil" element={<LeyendaCempasuchil />} />
        <Route path="/fitomejoradores" element={<FitomejoradoresNarrativa />} />
        <Route path="/ciencia-mexicana-cempasuchil" element={<CienciaMexicanaCempasuchil />} />
        <Route path="/proyectos/laboratorio-reproduccion-coyoacan" element={<LaboratorioCoyoacan />} />
        <Route path="/proyectos/:slug" element={<ProyectoDetalle />} />
        <Route path="/infografia-ai" element={<InfografiaAI />} />
        <Route path="/historia-xochimilco" element={<HistoriaXochimilco />} />
        <Route path="/reporte-incidencia" element={<ReporteIncidencia />} />
        <Route path="/actores" element={<Actores />} />
        <Route path="/santuario-ajolote" element={<SantuarioAjolote />} />
        <Route path="/turismo-responsable" element={<TurismoResponsable />} />
        <Route path="/dia-de-muertos" element={<DiaDeMuertos />} />
        <Route path="/reportaje-drenajes" element={<ReportajeDrenajesPage />} />
        <Route path="/zona-de-sacrificio" element={<ZonaSacrificioPage />} />
        <Route path="/voluntariado" element={<Voluntariado />} />
        <Route path="/voluntariado/remoto" element={<VoluntariadoRemotoPage />} />
        <Route path="/voluntariado/brigadas" element={<VoluntariadoBrigadasPage />} />
        <Route path="/certificado" element={<GuardianAjolote />} />
        <Route path="/publicar-instagram" element={<PublicarInstagram />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/informe-colorimetria-san-gregorio" element={<InformeColorimetriaSanGregorio />} />
        <Route path="/monitoreo-contaminantes-atenco" element={<MonitoreoAtenco />} />
        <Route path="/reporte-extraordinario-atenco" element={<ReporteExtraordinarioAtenco />} />
        <Route path="/anp" element={<PlanManejoANPPage />} />
        <Route path="/asistente-legal-anp" element={<AsistenteLegalANP />} />
        <Route path="/anp/globos-de-cantoya" element={<GlobosCantoyaPage />} />
        <Route path="/playacocinas" element={<BatallaPorLaPlaya />} />
        <Route path="/playacocinas/turismo" element={<TurismoPlayaCocinas />} />
        <Route path="/playa" element={<Playa />} />
        <Route path="/clasificados" element={<Clasificados />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/entrevistas" element={<Entrevistas />} />
        <Route path="/entrevistas/luis-abel-bastida-xochimilco" element={<EntrevistaBastida />} />
        <Route path="/sos-atenco" element={<SosAtenco />} />
        <Route path="/kizaman" element={<Kizaman />} />
      </Route>
      <Route path="/oauth/consent" element={<OAuthConsent />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </Suspense>
  );
};

function App() {
  useSystemTheme();

  return (
    <I18nextProvider i18n={i18n}>
      <AuthProvider>
        <LanguageProvider>
          <QueryClientProvider client={queryClientInstance}>
            <Router>
              <AuthenticatedApp />
            </Router>
            <Toaster />
          </QueryClientProvider>
        </LanguageProvider>
      </AuthProvider>
    </I18nextProvider>
  )
}

export default App