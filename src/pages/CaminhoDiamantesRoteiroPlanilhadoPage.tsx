import React, { useState } from 'react';
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CaminhoBanner from '../components/CaminhoBanner';
import { MapPin, Download, AlertTriangle, ChevronDown } from 'lucide-react';

const CaminhoDiamantesRoteiroPlanilhadoPage: React.FC = () => {
  const [selectedTrecho, setSelectedTrecho] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  // Garantir que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const trechos = [
    'Diamantina → São Gonçalo do Rio das Pedras',
    'São Gonçalo do Rio das Pedras → Serro',
    'Serro → Alvorada de Minas',
    'Alvorada de Minas → Itapanhoacanga',
    'Itapanhoacanga → Santo Antônio do Norte (Tapera)',
    'Santo Antônio do Norte (Tapera) → Conceição do Mato Dentro',
    'Conceição do Mato Dentro → Morro do Pilar',
    'Morro do Pilar → Itambé do Mato Dentro',
    'Itambé do Mato Dentro → Ipoema',
    'Ipoema → Bom Jesus do Amparo',
    'Bom Jesus do Amparo → Cocais',
    'Cocais → Barão de Cocais',
    'Barão de Cocais → Santa Bárbara',
    'Santa Bárbara → Catas Altas',
    'Catas Altas → Santa Rita Durão',
    'Santa Rita Durão → Camargos',
    'Camargos → Mariana',
    'Mariana → Ouro Preto'
  ];

  // Filtrar trechos baseado na cidade de partida selecionada
  const filteredTrechos = selectedFilter 
    ? trechos.filter(trecho => trecho.startsWith(selectedFilter))
    : trechos;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* 1. Banner */}
      <CaminhoBanner 
        title="Caminho dos Diamantes"
        imageSrc="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/dicas-guia-ouro-preto-mg6.png"
      />
      
      {/* 2. Introdução do Caminho */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
              O Caminho dos Diamantes passou a ter grande importância a partir de 1729, quando as pedras preciosas de Diamantina ganharam destaque nas economias brasileira e portuguesa. Além da história de seus municípios, da cultura latente e da gastronomia típica, o Caminho dos Diamantes destaca-se pela beleza natural.
            </p>
            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
              Atrativos que somam aventura, natureza, história e cultura dão o tom das viagens pelo Caminho dos Diamantes da Estrada Real. O viajante percorre 395 km divididos em 18 planilhas na companhia da Reserva da Biosfera da Serra do Espinhaço e de suas paisagens exuberantes.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Selecione um Trecho - MOVIDO PARA CIMA */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Selecione um Trecho do Caminho dos Diamantes
          </h2>
          
          <div 
            className="text-center"
            style={{
              backgroundColor: '#E8F5E9',
              padding: '40px 20px',
              borderRadius: '12px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}
          >
            {/* Texto explicativo */}
            <p className="text-center text-lg text-gray-700 mb-8" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
              Os roteiros planilhados oferecem ao turista a possibilidade de percorrer os quatro caminhos de acordo com sua disponibilidade.
            </p>
            
            {/* Subtítulo */}
            <h3 className="text-2xl font-semibold text-green-800 text-center mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Ordenar pela Cidade de partida
            </h3>
            
            {/* Botões de filtro */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => {
                  setSelectedFilter(selectedFilter === 'Diamantina' ? '' : 'Diamantina');
                  setSelectedTrecho('');
                }}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedFilter === 'Diamantina'
                    ? 'bg-green-700 text-white shadow-md'
                    : 'bg-white text-green-700 border-2 border-green-700 hover:bg-green-50'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem' }}
              >
                Diamantina
              </button>
              <button
                onClick={() => {
                  setSelectedFilter(selectedFilter === 'Ouro Preto' ? '' : 'Ouro Preto');
                  setSelectedTrecho('');
                }}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedFilter === 'Ouro Preto'
                    ? 'bg-green-700 text-white shadow-md'
                    : 'bg-white text-green-700 border-2 border-green-700 hover:bg-green-50'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem' }}
              >
                Ouro Preto
              </button>
            </div>
            
            {/* Dropdown de trechos */}
            <div className="relative">
              <select
                value={selectedTrecho}
                onChange={(e) => setSelectedTrecho(e.target.value)}
                className="w-full p-5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-gray-50 text-gray-700 text-lg"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem' }}
              >
                <option value="">
                  {selectedFilter 
                    ? `Escolha um trecho partindo de ${selectedFilter}...` 
                    : 'Escolha um trecho para ver detalhes...'
                  }
                </option>
                {filteredTrechos.map((trecho, index) => (
                  <option key={index} value={trecho}>{trecho}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
            </div>
            
            {/* Indicador de filtro ativo */}
            {selectedFilter && (
              <div className="mt-4 text-center">
                <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Filtrando por: {selectedFilter}
                  <button
                    onClick={() => {
                      setSelectedFilter('');
                      setSelectedTrecho('');
                    }}
                    className="ml-2 text-green-600 hover:text-green-800"
                  >
                    ✕
                  </button>
                </span>
              </div>
            )}
            
            {/* Detalhes do trecho selecionado */}
            {selectedTrecho && (
              <div className="mt-8 p-8 bg-green-50 rounded-xl border-2 border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {selectedTrecho}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Informações detalhadas sobre este trecho estarão disponíveis em breve. 
                  Consulte o mapa e os recursos de download para mais informações sobre a rota.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Sentido do Caminho */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bloco 1 */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <MapPin className="w-6 h-6 text-amber-500" />
                Sentido Diamantina → Ouro Preto
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', lineHeight: '1.7' }}>
                Para quem percorre o caminho dos Diamantes no sentido Diamantina – Ouro Preto, 178,3 km serão entre subidas curtas e longas, sendo que uma das mais longas é a do trecho entre Itapanhoacanga a Santo Antônio do Norte, mas, como um todo, o nível de exigência física é menor. Em boa parte dos percursos existem poucas opções com áreas sombreadas, principalmente entre Diamantina e Bom Jesus do Amparo.
              </p>
            </div>

            {/* Bloco 2 */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <MapPin className="w-6 h-6 text-amber-500" />
                Sentido Ouro Preto → Diamantina
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', lineHeight: '1.7' }}>
                Para quem percorre no sentido Ouro Preto – Diamantina, dos 395 km, 173,3 km oscilam entre subidas curtas e longas, sendo que uma das mais longas é entre Santo Antônio do Norte e Itapanhoacanga e entre Serro e Diamantina, mas, como um todo, o nível de exigência física é maior. Normalmente os viajantes gastam em média 8 dias para percorrer de bicicleta e 27 dias a pé, mas isso varia com o tom que o turista quer dar para a sua viagem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Terreno e Condições */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Tipos de Terreno
          </h2>
          <div className="bg-amber-50 rounded-lg p-8">
            <p className="text-xl font-semibold text-gray-800 mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Dos 395 quilômetros:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">26%</span>
                </div>
                <p className="font-semibold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Asfaltados</p>
                <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>(105,9 km)</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">0,5%</span>
                </div>
                <p className="font-semibold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Trilha</p>
                <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>(2 km)</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">73,5%</span>
                </div>
                <p className="font-semibold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Estrada de Terra</p>
                <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>(289 km)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trechos com Asfalto ou Trilha */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Trechos que têm asfalto ou trilha
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <ul className="space-y-4">
              {[
                'São Gonçalo do Rio das Pedras – Milho Verde – Serro = 30,6 km em asfalto',
                'Serro – Alvorada de Minas = 18,8 km de asfalto',
                'Tapera - Conceição do Mato Dentro = 10 km de asfalto',
                'Itambé do Mato Dentro - Senhora do Carmo = 15,2 km de asfalto',
                'Ipoema – Bom Jesus do Amparo = 13 km de asfaltado',
                'Bom Jesus do Amparo - Cocais = 7 km de asfaltado',
                'Santa Bárbara - Catas Altas = 2 km de trilha',
                'Mariana – Ouro Preto = 11,3 km de asfalto'
              ].map((trecho, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', lineHeight: '1.6' }}>
                    {trecho}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Seção de ALERTA */}
      <section className="bg-yellow-50 border-l-4 border-red-500 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-red-200">
            <h2 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <AlertTriangle className="w-6 h-6" />
              ⚠️ Atenção!
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', lineHeight: '1.7' }}>
                Devido ao rompimento da Barragem de Mariana o trecho de Santa Rita Durão à Mariana está interditado, desta forma aconselhamos seguir uma das rotas alternativas:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-bold text-red-800 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Sentido Diamantina - Ouro Preto
                  </h4>
                  <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem' }}>
                    <li>• Iniciar a viagem em Diamantina e seguir rota alternativa para ciclistas, caminhantes e cavaleiros de Santa Rita Durão até Camargos;</li>
                    <li>• Quem estiver de carro deve iniciar a viagem em Diamantina até Santa Rita Durão e seguir pela MG 129 (53,6 Km) até Mariana.</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <h4 className="font-bold text-red-800 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Sentido Ouro Preto - Diamantina
                  </h4>
                  <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem' }}>
                    <li>• Iniciar a viagem em Ouro Preto e seguir rota alternativa para ciclistas, caminhantes e cavaleiros de Camargos até Santa Rita Durão;</li>
                    <li>• Quem estiver de carro deve iniciar a viagem em Ouro Preto, sentido Mariana e seguir pela MG 129 (53,6 Km) até Santa Rita Durão.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Outro alerta adicional:
                </h4>
                <p className="text-gray-700 mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem' }}>
                  Devido a obras na ponte do Rio Preto de Baixo, o trecho Morro do Pilar a Itambé do Mato Dentro estará interditado por 30 dias.
                </p>
                <p className="font-semibold text-orange-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Fiquem atentos ao desvio.
                </p>
                <p className="text-sm text-gray-600 mt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <strong>Orientações:</strong> Ponto de Carimbo Café com Arte
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Downloads e Recursos */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Downloads e Recursos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mapa */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/caminho_caminho_dos_diamantes_mapa.jpg"
                alt="Mapa do Caminho dos Diamantes"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Mapa do Caminho
                </h3>
                <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download do Mapa
                </button>
              </div>
            </div>

            {/* Altimetria */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/caminho_caminho_dos_diamantes_altimetria.jpg"
                alt="Altimetria do Caminho dos Diamantes"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Altimetria
                </h3>
                <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Altimetria
                </button>
              </div>
            </div>

            {/* Arquivos GPS */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Arquivos GPS
              </h3>
              <div className="space-y-3">
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download GTM
                </button>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download KML
                </button>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download GPX
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Arquivos podem ser convertidos usando Trackmaker ou similar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaminhoDiamantesRoteiroPlanilhadoPage;