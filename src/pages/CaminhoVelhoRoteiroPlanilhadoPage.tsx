import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CaminhoBanner from '../components/CaminhoBanner';
import { MapPin, Download, AlertTriangle, ChevronDown } from 'lucide-react';

const CaminhoVelhoRoteiroPlanilhadoPage: React.FC = () => {
  const [selectedTrecho, setSelectedTrecho] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  // Garantir que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const trechos = [
    'Ouro Preto → São Bartolomeu',
    'São Bartolomeu → Glaura',
    'Glaura → Cachoeira do Campo',
    'Cachoeira do Campo → Santo Antônio do Leite',
    'Santo Antônio do Leite → Queluzito',
    'Queluzito → Carandaí',
    'Carandaí → Lagoa Dourada',
    'Lagoa Dourada → Prados',
    'Prados → Tiradentes',
    'Tiradentes → São João del-Rei',
    'São João del-Rei → São Sebastião da Vitória',
    'São Sebastião da Vitória → Madre de Deus de Minas',
    'Madre de Deus de Minas → Nazareno',
    'Nazareno → Barbacena',
    'Barbacena → Barroso',
    'Barroso → Cruzília',
    'Cruzília → Minduri',
    'Minduri → Aiuruoca',
    'Aiuruoca → Alagoa',
    'Alagoa → Pouso Alto',
    'Pouso Alto → Itamonte',
    'Itamonte → Passa Quatro',
    'Passa Quatro → Garganta do Embaú',
    'Garganta do Embaú → Vila do Embaú',
    'Vila do Embaú → Guaratinguetá',
    'Guaratinguetá → Cunha',
    'Cunha → Paraty'
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
        title="Caminho Velho"
        imageSrc="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/um-belo-arco-iris-na-natureza-scaled.jpg"
      />
      
      {/* 2. Introdução do Caminho */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
              Com muitas histórias para contar, o Caminho Velho foi a primeira via aberta oficialmente pela Coroa Portuguesa para o tráfego entre o litoral fluminense e a região mineradora.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
              São localidades de cultura típica de Minas Gerais, um combinado entre as raízes indígenas, africanas e europeias. Essa riqueza é responsável por atrativos como a arquitetura única de Ouro Preto, a gastronomia reconhecida internacionalmente de Tiradentes, as grandes estâncias hidrominerais do Circuito das Águas e a cultura latente de Paraty.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
              Os 710 km do Caminho Velho são divididos em 27 planilhas, onde em cada um dos trechos o turista terá a possibilidade de viver boas experiências.
            </p>
            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
              Dos 710 quilômetros: 10% asfaltado (75,5 km), 1,5% calçamento (10 km), 6% trilha (38 km), 82,5% estrada de terra (586,5 km).
            </p>
          </div>
        </div>
      </section>

      {/* 3. Selecione um Trecho - MOVIDO PARA CIMA */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Selecione um Trecho do Caminho Velho
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
                  setSelectedFilter(selectedFilter === 'Paraty' ? '' : 'Paraty');
                  setSelectedTrecho('');
                }}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedFilter === 'Paraty'
                    ? 'bg-green-700 text-white shadow-md'
                    : 'bg-white text-green-700 border-2 border-green-700 hover:bg-green-50'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem' }}
              >
                Paraty
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
              Dos 710 quilômetros:
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">10%</span>
                </div>
                <p className="font-semibold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Asfaltados</p>
                <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>(75,5 km)</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">1,5%</span>
                </div>
                <p className="font-semibold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Calçamento</p>
                <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>(10 km)</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">6%</span>
                </div>
                <p className="font-semibold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Trilha</p>
                <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>(38 km)</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">82,5%</span>
                </div>
                <p className="font-semibold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Estrada de Terra</p>
                <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>(586,5 km)</p>
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
                'Ouro Preto – São Bartolomeu = 18 km de trilha',
                'São Bartolomeu – Glaura = 3 km de trilha',
                'Glaura – Cachoeira do Campo = 7,5 km de asfalto',
                'Cachoeira do Campo – Santo Antônio do Leite = 5 km de asfalto',
                'Pequeri – São Brás do Suaçuí = 3 km de trilha',
                'Lagoa Dourada - Prados = 3 km de trilha',
                'Tiradentes – São João del-Rei = 10 km de calçamento',
                'São João del-Rei – São Sebastião da Vitória = 11 km de trilha',
                'Capivari - Itamonte = 4,5 km de trilha',
                'Passa Quatro - Garganta do Embaú = 1 km de trilha',
                'Garganta do Embaú – Vila do Embaú = 10 km de asfalto',
                'Vila do Embaú – Guaratinguetá = 7 km de asfalto',
                'Guaratinguetá – Cunha = 22 km de asfalto',
                'Cunha – Paraty = 24 km de asfalto'
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
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', lineHeight: '1.7' }}>
                O turista deve ficar atento ao campo de observações das planilhas, principalmente nos trechos de trilha, onde terá informações sobre o estado da trilha, se é possível percorrê-la com alforje e como evitá-las.
              </p>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', lineHeight: '1.7' }}>
                <strong>Dentre as trilhas mais difíceis está a que liga Ouro Preto a São Bartolomeu.</strong>
              </p>
            </div>
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
                  De <strong>Ouro Preto → Paraty</strong>, o viajante terá a altimetria a favor (1200 m ao nível do mar). Destaques: Capela do Saco → Carrancas e Guaratinguetá → Cunha.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', lineHeight: '1.6' }}>
                  De <strong>Paraty → Ouro Preto</strong>, o trajeto sobe de 0 m a 1200 m. Destaques: Paraty → Cunha, Vila do Embaú → Passa Quatro e São Bartolomeu → Ouro Preto.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', lineHeight: '1.6' }}>
                  Poucas áreas sombreadas, principalmente entre São João del-Rei e Cruzília.
                </span>
              </li>
            </ul>
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
                src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/caminho_caminho_velho_mapa_caminho_velho.jpg"
                alt="Mapa do Caminho Velho"
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
                src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/caminho_caminho_velho_altimetria.jpg"
                alt="Altimetria do Caminho Velho"
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

export default CaminhoVelhoRoteiroPlanilhadoPage;