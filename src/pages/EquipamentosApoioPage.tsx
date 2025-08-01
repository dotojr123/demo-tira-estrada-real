import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LazyImage from '../components/LazyImage';
import { Search, X, ChevronDown } from 'lucide-react';

const EquipamentosApoioPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategoria, setSelectedCategoria] = useState('');
  const [selectedCaminho, setSelectedCaminho] = useState('');
  const [selectedCidade, setSelectedCidade] = useState('');
  
  // Garantir que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categorias = [
    'Agência de Viagem e Operadoras',
    'Experiências',
    'Guias de Turismo',
    'Lojas de Artesanato e Souvenirs',
    'Transportadora Turística e Locadoras de Veículos',
    'Outros'
  ];

  const caminhos = [
    'Caminho dos Diamantes',
    'Caminho Novo',
    'Caminho Velho',
    'Caminho do Sabarabuçu'
  ];

  const cidades = [
    'Acuruí', 'Alvorada de Minas', 'Antônio Pereira', 'Baependi', 'Barão de Cocais', 
    'Barbacena', 'Bom Jesus do Amparo', 'Brumal', 'Cachoeira do Campo', 'Caeté', 
    'Carandaí', 'Carrancas', 'Casa Grande', 'Catas Altas', 'Caxambu', 'Cocais', 
    'Conceição do Mato Dentro', 'Congonhas', 'Conselheiro Lafaiete', 'Cruzília', 
    'Cunha', 'Diamantina', 'Entre Rios de Minas', 'Glaura', 'Guaratinguetá', 
    'Honório Bicalho', 'Ipoema', 'Itabirito', 'Itambé do Mato Dentro', 'Itamonte', 
    'Itanhandu', 'Itapanhoacanga', 'Itatiaia', 'Juiz de Fora', 'Lagoa Dourada', 
    'Lavras Novas', 'Magé', 'Mariana', 'Matias Barbosa', 'Miguel Burnier', 
    'Milho Verde', 'Morro do Pilar', 'Ouro Branco', 'Ouro Preto', 'Paraíba do Sul', 
    'Paraty', 'Passa Quatro', 'Petrópolis', 'Pouso Alto', 'Prados', 'Raposos', 
    'Rio Acima', 'Sabará', 'Santa Bárbara', 'Santo Antônio do Leite', 
    'Santo Antônio do Norte (Tapera)', 'Santos Dumont', 'São Bartolomeu', 
    'São Gonçalo do Rio das Pedras', 'São João Del Rei', 'São Lourenço', 
    'Secretário', 'Serra do Cipó – Santana do Riacho', 'Serro', 'Tiradentes'
  ];

  const equipamentos = [
    { id: 1, nome: 'Jeeptour Caminhos da Estrada Real', link: '/pacotes/jeeptour-caminhos-da-estrada-real-secretario-sebollas-caminho-novo' },
    { id: 2, nome: 'La Magie Decorações', link: '/equipamentos/la-magie-decoracoes' },
    { id: 3, nome: 'Chicas Empório' },
    { id: 4, nome: 'Centro Cultural e Museu Selaria Raimundo Nazário – Desde 1928' },
    { id: 5, nome: 'Agência de Turismo Estrada Real' },
    { id: 6, nome: 'Casa do Artesão' },
    { id: 7, nome: 'Palácio d\'Ouro' },
    { id: 8, nome: 'Lembrancinhas do Leite' },
    { id: 9, nome: 'dhama É tur' },
    { id: 10, nome: 'City Tour Caminhos de Tiradentes' },
    { id: 11, nome: 'Costurando com Amor' },
    { id: 12, nome: 'Ateliê Diego Mendonça' },
    { id: 13, nome: 'Solino Artesanato' },
    { id: 14, nome: 'Cantinho da Suculenta' },
    { id: 15, nome: 'Transcender Tur' },
    { id: 16, nome: 'Borandá Trekking' }
  ];

  // Filtrar equipamentos (por enquanto retorna todos, mas estrutura está pronta para filtros)
  const filteredEquipamentos = equipamentos.filter(equipamento => {
    // Aqui seria implementada a lógica de filtro baseada nos critérios selecionados
    return true;
  });

  const clearFilters = () => {
    setSelectedCategoria('');
    setSelectedCaminho('');
    setSelectedCidade('');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Banner */}
      <div className="relative h-[400px] md:h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://aromagel-worldexcellences.com/wp-content/uploads/2025/07/destaque_estrada_real_e_destaque_na_folha_de_sao_paulo_mirante_do_cruzeiro_em_diamantina.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-black/85" />
        </div>
        
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
        >
          <h1 
            className="text-4xl md:text-6xl font-bold mb-4 uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            EQUIPAMENTOS DE APOIO
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-200"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            ENCONTRE O QUE VOCÊ PRECISA NO SEU CAMINHO
          </p>
        </div>
      </div>

      {/* Filtros */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Categoria */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Categoria
                </label>
                <div className="relative">
                  <select
                    value={selectedCategoria}
                    onChange={(e) => setSelectedCategoria(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-estrada-green focus:border-transparent appearance-none bg-white"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <option value="">Selecione uma categoria</option>
                    {categorias.map((categoria, index) => (
                      <option key={index} value={categoria}>{categoria}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Caminho */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Caminho
                </label>
                <div className="relative">
                  <select
                    value={selectedCaminho}
                    onChange={(e) => setSelectedCaminho(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-estrada-green focus:border-transparent appearance-none bg-white"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <option value="">Selecione um caminho</option>
                    {caminhos.map((caminho, index) => (
                      <option key={index} value={caminho}>{caminho}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Cidade */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Cidade
                </label>
                <div className="relative">
                  <select
                    value={selectedCidade}
                    onChange={(e) => setSelectedCidade(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-estrada-green focus:border-transparent appearance-none bg-white"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <option value="">Selecione uma cidade</option>
                    {cidades.map((cidade, index) => (
                      <option key={index} value={cidade}>{cidade}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Botão de Busca */}
            <div className="text-center mt-8">
              <button
                className="bg-estrada-green hover:bg-green-800 text-white font-semibold py-3 px-12 rounded-lg transition-colors duration-200 mr-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Buscar
              </button>
              
              {(selectedCategoria || selectedCaminho || selectedCidade) && (
                <button
                  onClick={clearFilters}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Limpar Filtros
                </button>
              )}
            </div>

            {/* Filtros Ativos */}
            {(selectedCategoria || selectedCaminho || selectedCidade) && (
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 
                  className="text-lg font-semibold text-estrada-green mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Filtros Ativos:
                </h3>
                <div className="space-y-2 text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {selectedCategoria && (
                    <p><strong>Categoria:</strong> {selectedCategoria}</p>
                  )}
                  {selectedCaminho && (
                    <p><strong>Caminho:</strong> {selectedCaminho}</p>
                  )}
                  {selectedCidade && (
                    <p><strong>Cidade:</strong> {selectedCidade}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Grid de Equipamentos */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredEquipamentos.map((equipamento) => (
              <div
                key={equipamento.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ${equipamento.link ? 'cursor-pointer' : ''}`}
                onClick={() => {
                  if (equipamento.link) {
                    navigate(equipamento.link);
                  }
                }}
              >
                <div className="h-48 overflow-hidden">
                  <LazyImage
                    src="https://aromagel-worldexcellences.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-23-at-20.39.56.jpeg"
                    alt={equipamento.nome}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                <div className="p-4">
                  <h3 
                    className="font-semibold leading-tight text-center"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      color: '#014421',
                      fontSize: '0.95rem',
                      lineHeight: '1.3'
                    }}
                  >
                    {equipamento.nome}
                  </h3>
                  
                  <div style={{ textAlign: 'center', marginTop: '8px' }}>
                    <span
                      className="transition-colors duration-200"
                      style={{
                        color: '#EDA10E',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        textDecoration: 'none'
                      }}
                    >
                      Conhecer →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Botão Mais Sugestões */}
          <div className="text-center mt-12">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="border-2 border-green-800 text-estrada-green hover:bg-green-800 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Mais Sugestões
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EquipamentosApoioPage;