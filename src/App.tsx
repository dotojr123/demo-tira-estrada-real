import React, { Suspense, lazy } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Lazy load components for better performance
const NewHomePage = lazy(() => import('./pages/NewHomePage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const CityPage = lazy(() => import('./components/CityPage'));
const CityTiradentes = lazy(() => import('./components/CityTiradentes'));
const CityDelRei = lazy(() => import('./components/CityDelRei'));
const CityGlaura = lazy(() => import('./components/CityGlaura'));
const CityOuroPreto = lazy(() => import('./components/CityOuroPreto'));
const CaminhoDiamantesPage = lazy(() => import('./pages/CaminhoDiamantesPage'));
const CaminhoNovoPage = lazy(() => import('./pages/CaminhoNovoPage'));
const CaminhoVelhoPage = lazy(() => import('./pages/CaminhoVelhoPage'));
const CaminhoSabarabucuPage = lazy(() => import('./pages/CaminhoSabarabucuPage'));
const PassaportePage = lazy(() => import('./pages/PassaportePage'));
const CaminhoDiamantesRoteiroPage = lazy(() => import('./pages/CaminhoDiamantesRoteiroPlanilhadoPage'));
const CaminhoNovoRoteiroPlanilhadoPage = lazy(() => import('./pages/CaminhoNovoRoteiroPlanilhadoPage'));
const CaminhoVelhoRoteiroPlanilhadoPage = lazy(() => import('./pages/CaminhoVelhoRoteiroPlanilhadoPage'));
const CaminhoSabarabucuRoteiroPlanilhadoPage = lazy(() => import('./pages/CaminhoSabarabucuRoteiroPlanilhadoPage'));
const AEstradaRealPage = lazy(() => import('./pages/AEstradaRealPage').then(module => ({ default: module.AEstradaRealPage })));
const HistoriaPage = lazy(() => import('./pages/HistoriaPage'));
const NaturezaPage = lazy(() => import('./pages/NaturezaPage').then(module => ({ default: module.NaturezaPage })));
const GastronomiaPage = lazy(() => import('./pages/GastronomiaPage'));
const EstatuaPadreJoaoPage = lazy(() => import('./pages/EstatuaPadreJoaoPage'));
const UsinaPetiPage = lazy(() => import('./pages/UsinaPetiPage'));
const AgendaPage = lazy(() => import('./pages/AgendaPage'));
const CadastrarEventoPage = lazy(() => import('./pages/CadastrarEventoPage'));
const EmpreendimentoPage = lazy(() => import('./pages/EmpreendimentoPage'));
const ContatoPage = lazy(() => import('./pages/ContatoPage'));
const ParceirosPage = lazy(() => import('./pages/ParceirosPage'));
const EmpreendimentoCadastroPage = lazy(() => import('./pages/EmpreendimentoCadastroPage'));
const DestaquesPage = lazy(() => import('./pages/DestaquesPage'));
const SalaoArtesPage = lazy(() => import('./pages/SalaoArtesPage'));
const PacotesPage = lazy(() => import('./pages/PacotesPage'));
const JeepTourPackagePage = lazy(() => import('./pages/JeepTourPackagePage'));
const EquipamentosApoioPage = lazy(() => import('./pages/EquipamentosApoioPage'));
const LaMagieDecoracoesPage = lazy(() => import('./pages/LaMagieDecoracoesPage'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
      <p className="text-gray-600 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Carregando...
      </p>
    </div>
  </div>
);
// Component to handle scroll to top on route changes
const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle anchor links
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    
    // Check if the current path starts with /caminho or /caminhos
    if (location.pathname.startsWith('/caminho')) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<NewHomePage />} />
            <Route path="/caminhos" element={<HomePage />} />
            <Route path="/cidade/conceicao-do-mato-dentro" element={<CityPage />} />
            <Route path="/cidade/tiradentes" element={<CityTiradentes />} />
            <Route path="/cidade/sao-joao-del-rei" element={<CityDelRei />} />
            <Route path="/cidade/glaura" element={<CityGlaura />} />
            <Route path="/caminhos/velho/ouro-preto" element={<CityOuroPreto />} />
            <Route path="/caminho-diamantes" element={<CaminhoDiamantesPage />} />
            <Route path="/caminho-novo" element={<CaminhoNovoPage />} />
            <Route path="/caminho-velho" element={<CaminhoVelhoPage />} />
            <Route path="/caminho-sabarabucu" element={<CaminhoSabarabucuPage />} />
            <Route path="/passaporte" element={<PassaportePage />} />
            <Route path="/roteiro-planilhado/caminho-diamantes" element={<CaminhoDiamantesRoteiroPage />} />
            <Route path="/roteiro-planilhado/caminho-novo" element={<CaminhoNovoRoteiroPlanilhadoPage />} />
            <Route path="/roteiro-planilhado/caminho-velho" element={<CaminhoVelhoRoteiroPlanilhadoPage />} />
            <Route path="/roteiro-planilhado/caminho-sabarabucu" element={<CaminhoSabarabucuRoteiroPlanilhadoPage />} />
            <Route path="/a-estrada-real" element={<AEstradaRealPage />} />
            <Route path="/historia" element={<HistoriaPage />} />
            <Route path="/natureza" element={<NaturezaPage />} />
            <Route path="/gastronomia" element={<GastronomiaPage />} />
            <Route path="/estatua-padre-joao" element={<EstatuaPadreJoaoPage />} />
            <Route path="/usina-peti" element={<UsinaPetiPage />} />
            <Route path="/agenda/novo-evento" element={<AgendaPage />} />
            <Route path="/agenda/cadastrar-evento" element={<CadastrarEventoPage />} />
            <Route path="/empreendimento" element={<EmpreendimentoPage />} />
            <Route path="/empreendimento/parceiros" element={<ParceirosPage />} />
            <Route path="/empreendimento/cadastro" element={<EmpreendimentoCadastroPage />} />
            <Route path="/destaques" element={<DestaquesPage />} />
            <Route path="/destaques/salao-de-artes-tiradentes-grao-prior-da-liberdade" element={<SalaoArtesPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="/pacotes" element={<PacotesPage />} />
            <Route path="/pacotes/jeeptour-caminhos-da-estrada-real-secretario-sebollas-caminho-novo" element={<JeepTourPackagePage />} />
            <Route path="/servicos/equipamentos-de-apoio" element={<EquipamentosApoioPage />} />
            <Route path="/empreendimento/cadastro" element={<EmpreendimentoCadastroPage />} />
            <Route path="/equipamentos/la-magie-decoracoes" element={<LaMagieDecoracoesPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;