import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import { LanguageProvider } from '@/lib/LanguageContext';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n-config';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import AppLayout from '@/components/layout/AppLayout';
import Home from '@/pages/Home';
import Sightings from '@/pages/Sightings';
import Genetics from '@/pages/Genetics';
import ConservationMap from '@/pages/ConservationMap';
import SpecimenProfile from '@/pages/SpecimenProfile';
import Science from '@/pages/Science';
import Forum from '@/pages/Forum';
import WildSightings from '@/pages/WildSightings.jsx';
import UserProfile from '@/pages/UserProfile';
import ModerationPanel from '@/pages/ModerationPanel.jsx';

import UserGallery from '@/pages/UserGallery';
import ChinampasVirtuales from '@/pages/ChinampasVirtuales';
import VideoGaleria from '@/pages/VideoGaleria';
import InfografiaAI from '@/pages/InfografiaAI';
import HistoriaXochimilco from '@/pages/HistoriaXochimilco';
import ReporteIncidencia from '@/pages/ReporteIncidencia';
import Actores from '@/pages/Actores';
import SantuarioAjolote from '@/pages/SantuarioAjolote';
import TurismoResponsable from '@/pages/TurismoResponsable';
import DiaDeMuertos from '@/pages/DiaDeMuertos';
import ReportajeDrenajesPage from '@/pages/ReportajeDrenajesPage';

import ZonaSacrificioPage from '@/pages/ZonaSacrificio';

import Voluntariado from '@/pages/Voluntariado';
import VoluntariadoRemotoPage from '@/pages/VoluntariadoRemotoPage';
import VoluntariadoBrigadasPage from '@/pages/VoluntariadoBrigadasPage';
import GuardianAjolote from '@/pages/GuardianAjolote';
import PublicarInstagram from '@/pages/PublicarInstagram';
import QuienesSomos from '@/pages/QuienesSomos';
import ProyectoDetalle from '@/pages/ProyectoDetalle';
import RescateChinampas from '@/pages/RescateChinampas';
import ChileChicuarote from '@/pages/ChileChicuarote';
import TortugaCasquito from '@/pages/TortugaCasquito';
import DenunciaContaminacionSanGregorio from '@/pages/DenunciaContaminacionSanGregorio';
import RedDeBiofiltros from '@/pages/RedDeBiofiltros';
import Acciones2026 from '@/pages/Acciones2026';
import AccionesLegales from '@/pages/AccionesLegales';
import CartaRamsar from '@/pages/CartaRamsar';
import LaboratorioCoyoacan from '@/pages/LaboratorioCoyoacan';
import MigracionSEO from '@/pages/MigracionSEO';
import ObservatorioCempasuchil from '@/pages/ObservatorioCempasuchil';
import LeyendaCempasuchil from '@/pages/LeyendaCempasuchil';
import FitomejoradoresNarrativa from '@/pages/FitomejoradoresNarrativa';
import CienciaMexicanaCempasuchil from '@/pages/CienciaMexicanaCempasuchil';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import InformeColorimetriaSanGregorio from '@/pages/InformeColorimetriaSanGregorio';
import MonitoreoAtenco from '@/pages/MonitoreoAtenco';
import ReporteExtraordinarioAtenco from '@/pages/ReporteExtraordinarioAtenco';
import PlanManejoANPPage from '@/pages/PlanManejoANPPage';
import GlobosCantoyaPage from '@/pages/GlobosCantoyaPage';
import BatallaPorLaPlaya from '@/pages/BatallaPorLaPlaya';
import TurismoPlayaCocinas from '@/pages/TurismoPlayaCocinas';
import Playa from '@/pages/Playa';
import useAnalyticsPageView from '@/hooks/useAnalyticsPageView';

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
  const publicRoutes = ['/voluntariado'];
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
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sightings" element={<Sightings />} />
        <Route path="/genetics" element={<Genetics />} />
        <Route path="/map" element={<ConservationMap />} />
        <Route path="/genetics/:id" element={<SpecimenProfile />} />
        <Route path="/science" element={<Science />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/wild-sightings" element={<WildSightings />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/moderation" element={<ModerationPanel />} />

        <Route path="/mi-galeria" element={<UserGallery />} />
        <Route path="/chinampas" element={<ChinampasVirtuales />} />
        <Route path="/video-galeria" element={<VideoGaleria />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/proyectos/rescate-7-chinampas" element={<RescateChinampas />} />
        <Route path="/proyectos/chile-chicuarote" element={<ChileChicuarote />} />
        <Route path="/proyectos/refugio-tortuga-casquito" element={<TortugaCasquito />} />
        <Route path="/denuncia-contaminacion-san-gregorio" element={<DenunciaContaminacionSanGregorio />} />
        <Route path="/red-de-biofiltros" element={<RedDeBiofiltros />} />
        <Route path="/acciones-2026" element={<Acciones2026 />} />
        <Route path="/acciones-legales" element={<AccionesLegales />} />
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
        <Route path="/anp/globos-de-cantoya" element={<GlobosCantoyaPage />} />
        <Route path="/playacocinas" element={<BatallaPorLaPlaya />} />
        <Route path="/playacocinas/turismo" element={<TurismoPlayaCocinas />} />
        <Route path="/playa" element={<Playa />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
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