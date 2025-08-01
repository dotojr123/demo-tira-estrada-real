import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CaminhoBanner from '../components/CaminhoBanner';
import { MapPin, Download, AlertTriangle, ChevronDown } from 'lucide-react';

const CaminhoSabarabucuRoteiroPlanilhadoPage: React.FC = () => {
  const [selectedTrecho, setSelectedTrecho] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  // Garantir que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const trechos = [
    'Cocais → Caeté',
    'Caeté → Sabará',
    'Sabará → Raposos',
    'Raposos → Honório Bicalho',
    'Honório Bicalho → Rio Acima',
    'Rio Acima → Glaura'
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
        title="Caminho de Sabarabuçu"
        imageSrc="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/campo-cercado-por-rochas-cobertas-de-vegetacao-sob-um-ceu-azul-e-luz-sol-na-italia-scaled.jpg"
      />
      
      {/* 2. Introdução do Caminho */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
              Há cerca de trezentos anos, as serras íngremes do trecho, cortadas por cursos d'água como o rio das Velhas, eram vistas como verdadeiros tesouros, onde seria possível achar ouro e outras pedras preciosas. Essa crença se devia ao brilho que a atual Serra da Piedade (antigo Pico de Sabarabuçu) tem. O que os bandeirantes imaginavam ser ouro é, na verdade, o minério de ferro do topo da montanha, que reflete a luz do sol. Para chegar até a serra que reluzia, esses viajantes buscaram uma rota alternativa entre Ouro Preto, no Caminho Velho, e Barão de Cocais, no Caminho dos Diamantes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
              Foi aí que surgiu o Caminho de Sabarabuçu. O caminho segue margeando o rio das Velhas e tem a Serra da Piedade, do alto dos seus 1.762 metros, como um dos atrativos. Além da mítica história da serra que reluz, ela servia também como referência de localização para a chegada às minas a partir de Raposos, Sabará e Caeté.
            </p>
            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
              Os 160 km do Caminho de Sabarabuçu estão divididos em 6 trechos, com atrativos turísticos que vão do turismo natural ao histórico, cultural e religioso – são dezenas de igrejas e festas populares.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Selecione um Trecho - MOVIDO PARA CIMA */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Selecione um Trecho do Caminho de Sabarabuçu
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
                  setSelectedFilter(selectedFilter === 'Cocais' ? '' : 'Cocais');
                  setSelectedTrecho('');
                }}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedFilter === 'Cocais'
                    ? 'bg-green-700 text-white shadow-md'
                    : 'bg-white text-green-700 border-2 border-green-700 hover:bg-green-50'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem' }}
              >
                Cocais
              </button>
              <button
                onClick={() => {
                  setSelectedFilter(selectedFilter === 'Glaura' ? '' : 'Glaura');
                  setSelectedTrecho('');
                }}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedFilter === 'Glaura'
                    ? 'bg-green-700 text-white shadow-md'
                    : 'bg-white text-green-700 border-2 border-green-700 hover:bg-green-50'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem' }}
              >
                Glaura
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

      {/* 4. Tipos de Terreno */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Tipos de Terreno
          </h2>
          <div className="bg-amber-50 rounded-lg p-8">
            <p className="text-xl font-semibold text-gray-800 mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Dos 160 quilômetros:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">22,5%</span>
                </div>
                <p className="font-semibold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Trilha</p>
                <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>(36 km)</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">77,5%</span>
                </div>
                <p className="font-semibold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Estrada de Terra</p>
                <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>(124 km)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trechos com Trilha */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Trechos que têm trilha
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <ul className="space-y-4">
              {[
                'Morro Vermelho – Sabará = 20 km de trilha',
                'Sabará – Raposos = 3 km de trilha',
                'Raposos – Honório Bicalho = 13 km de trilha'
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

      {/* 6. Orientações */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-blue-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Orientações Importantes
            </h2>
            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', lineHeight: '1.7' }}>
              O turista deve ficar atento ao campo de observações das planilhas, especialmente nos trechos de trilha. Lá ele encontrará informações sobre o estado das trilhas, possibilidade de uso de alforje e formas de evitar o trajeto, se necessário. <strong>Dentre as trilhas mais difíceis, destaca-se a que liga Morro Vermelho a Sabará.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 7. Altimetria */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Altimetria
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', lineHeight: '1.6' }}>
                  Sentido <strong>Cocais → Glaura</strong>: subida total de 77 km com trechos longos, principalmente entre Cocais e Glaura. Boa parte tem áreas sombreadas, exceto entre Rio Acima e Glaura.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', lineHeight: '1.6' }}>
                  Sentido <strong>Glaura → Cocais</strong>: 76 km de subidas curtas e longas.
                </span>
              </li>
            </ul>
            
            <div className="mt-6 p-6 bg-orange-50 rounded-lg border border-orange-200">
              <h4 className="font-bold text-orange-800 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                ⚠️ Atenção:
              </h4>
              <p className="text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem' }}>
                Ponte sobre o córrego do Feijão entre Honório Bicalho e Rio Acima interditada para manutenção. Seguir pela MG-030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Downloads e Recursos */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Downloads e Recursos
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Mapa 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/caminho_caminho_do_sabarabucu_mapa_caminho_sabarabucu.jpg"
                alt="Mapa do Caminho de Sabarabuçu"
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

            {/* Mapa 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/caminho_caminho_do_sabarabucu_mapa.jpg"
                alt="Mapa Alternativo do Caminho de Sabarabuçu"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Mapa Alternativo
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
                src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/caminho_caminho_do_sabarabucu_altimetria.jpg"
                alt="Altimetria do Caminho de Sabarabuçu"
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

export default CaminhoSabarabucuRoteiroPlanilhadoPage;