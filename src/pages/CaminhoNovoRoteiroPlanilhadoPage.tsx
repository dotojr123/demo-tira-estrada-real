import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CaminhoBanner from '../components/CaminhoBanner';
import { MapPin, Download, AlertTriangle, ChevronDown } from 'lucide-react';

const CaminhoNovoRoteiroPlanilhadoPage: React.FC = () => {
  const [selectedTrecho, setSelectedTrecho] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  // Garantir que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const trechos = [
    'Ouro Preto → Lavras Novas',
    'Lavras Novas → Itatiaia',
    'Itatiaia → Ouro Branco',
    'Ouro Branco → Conselheiro Lafaiete',
    'Conselheiro Lafaiete → Queluzito',
    'Queluzito → Carandaí',
    'Carandaí → Ressaquinha',
    'Ressaquinha → Barbacena',
    'Barbacena → Antônio Carlos',
    'Antônio Carlos → Santos Dumont',
    'Santos Dumont → Ewbank da Câmara',
    'Ewbank da Câmara → Juiz de Fora',
    'Juiz de Fora → Matias Barbosa',
    'Matias Barbosa → Monte Serrat',
    'Monte Serrat → Paraíba do Sul',
    'Paraíba do Sul → Secretário',
    'Secretário → Petrópolis',
    'Petrópolis → Porto Estrela'
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
        title="Caminho Novo"
        imageSrc="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/DJI_0865-3_11zon-1-scaled-1.png"
      />
      
      {/* 2. Introdução do Caminho */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
              O Caminho Novo é o mais jovem da Estrada Real. Sua criação começou a ser definida em 1698, mas foi entre 1722 e 1725 que a rota estava finalmente definida. Repleto de atrativos turísticos, ele guarda dezenas de vestígios da época mineradora, um verdadeiro convite para o viajante. Aberto para ser alternativa mais rápida e fácil ao Caminho Velho, o Caminho Novo guarda para os turistas uma série de elementos da época das bandeiras e das primeiras explorações do território. São túneis, chafarizes e fazendas, hoje transformadas em confortáveis meios de hospedagem, que resgatam construções e costumes dos séculos 18 e 19.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
              Os 515 km do Caminho Novo são divididos em 18 planilhas, onde cada um dos trechos reserva ao viajante possibilidades de turismo que aliam atrativos naturais e culturais: um prato cheio para aguçar a criatividade de quem viaja por conta própria!
            </p>
            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
              Dos 515 quilômetros, 32% estão asfaltados (166 km), e 5% são trilhas (25 km). Os outros 63% são de estrada de terra (324 km).
            </p>
          </div>
        </div>
      </section>

      {/* 3. Selecione um Trecho - MOVIDO PARA CIMA */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Selecione um Trecho do Caminho Novo
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
              <button
                onClick={() => {
                  setSelectedFilter(selectedFilter === 'Porto Estrela' ? '' : 'Porto Estrela');
                  setSelectedTrecho('');
                }}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedFilter === 'Porto Estrela'
                    ? 'bg-green-700 text-white shadow-md'
                    : 'bg-white text-green-700 border-2 border-green-700 hover:bg-green-50'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem' }}
              >
                Porto Estrela
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
              Dos 515 quilômetros:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">32%</span>
                </div>
                <p className="font-semibold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Asfaltados</p>
                <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>(166 km)</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">5%</span>
                </div>
                <p className="font-semibold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Trilha</p>
                <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>(25 km)</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">63%</span>
                </div>
                <p className="font-semibold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Estrada de Terra</p>
                <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>(324 km)</p>
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
                'Ouro Preto – Lavras Novas = 17 km de trilha',
                'Lavras Novas – Chapada = 5 km de trilha',
                'Itatiaia – Ouro Branco = 5 km de asfalto',
                'Ouro Branco – Conselheiro Lafaiete = 7 km de asfalto',
                'Barbacena – Antônio Carlos = 8 km de asfalto',
                'Santos Dumont – Ewbank da Câmara = 3 km de trilha',
                'Ewbank da Câmara – Matias Barbosa = 25 km de asfalto',
                'Matias Barbosa – Simão Pereira – Monte Serrat = 24 km de asfalto',
                'Secretário – Pedro do Rio – Petrópolis = 34 km de asfalto',
                'Petrópolis – Porto Estrela = 31 km de calçamento e asfalto'
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

      {/* 6. Altimetria */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Altimetria
          </h2>
          <div className="bg-blue-50 rounded-lg p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', lineHeight: '1.6' }}>
                  Quem for de Ouro Preto para Porto Estrela terá a altimetria a favor: desce de 1200m ao nível do mar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', lineHeight: '1.6' }}>
                  Já quem for de Porto Estrela para Ouro Preto sobe de 0m a 1200m.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', lineHeight: '1.6' }}>
                  Ambas direções têm oscilações com subidas curtas e longas.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Seção de AVISOS */}
      <section className="bg-yellow-50 border-l-4 border-orange-500 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-orange-200">
            <h2 className="text-2xl font-bold text-orange-600 mb-6 flex items-center gap-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <AlertTriangle className="w-6 h-6" />
              Avisos Importantes
            </h2>
            
            <div className="space-y-6">
              <div className="bg-orange-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', lineHeight: '1.7' }}>
                  <strong>Importante:</strong> Não deixe de ficar atento na planilha no trecho entre Ewbank da Câmara a Juiz de Fora, pois devido a uma porteira fechada por cadeado, a planilha está indicando outro caminho.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', lineHeight: '1.7' }}>
                  Atenção especial aos campos de observações das planilhas, principalmente nos trechos de trilha, onde há informações sobre o estado da trilha e a possibilidade de fazê-la (ex: se dá para usar alforje), além de alternativas.
                </p>
                
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', lineHeight: '1.7' }}>
                  Nas rodovias do estado do Rio de Janeiro, onde há trechos asfaltados, a maioria <strong>não possui acostamento</strong>.
                </p>
              </div>

              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <h4 className="font-bold text-red-800 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  ⚠️ Aviso Importante em Destaque
                </h4>
                <p className="text-gray-700 mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem' }}>
                  Devido a obras de reformas e reparos nas vias de acesso, o Parque Estadual do Itacolomi ficará fechado a partir de janeiro de 2024, com previsão de reabertura em 2025.
                </p>
                <p className="text-gray-700 mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem' }}>
                  O desvio deverá ser feito pela MG-129 para carros e motos.
                </p>
                <p className="text-gray-700 mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem' }}>
                  Para caminhantes e ciclistas, o desvio pode ser feito pela Trilha do Barcelos (Wikiloc | Ouro Preto - Lavras Novas via Barcelos Trail).
                </p>
                <p className="font-semibold text-red-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  📌 O carimbo será disponibilizado na portaria.
                </p>
              </div>
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
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mapa */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/caminho_caminho_novo_mapa_caminho_novo.jpg"
                alt="Mapa do Caminho Novo"
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
                src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/caminho_caminho_novo_altimetria.jpg"
                alt="Altimetria do Caminho Novo"
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

export default CaminhoNovoRoteiroPlanilhadoPage;