import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LazyImage from '../components/LazyImage';
import { Search, X } from 'lucide-react';

const PacotesPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Garantir que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pacotes = [
    {
      id: 1,
      titulo: 'Jeeptour Caminhos da Estrada Real – (Secretário + Sebollas) – Caminho Novo',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/pacote_jeeptour_caminhos_da_estrada_real_secretario_sebollas_caminho_novo_jeeptour2jpg.jpg',
      slug: 'jeeptour-caminhos-da-estrada-real-secretario-sebollas-caminho-novo',
      link: '/pacotes/jeep-tour'
    },
    {
      id: 2,
      titulo: 'Serra do Caraça – Primórdios da Cozinha Mineira: Estrada Real',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/pacote_serra_do_caraca_primordios_da_cozinha_mineira_estrada_real_serra_do_caraca-scaled.jpg',
      slug: 'serra-caraca-primordios-cozinha-mineira-estrada-real'
    },
    {
      id: 3,
      titulo: 'Passeio 4 × 4 – Ouro Preto',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/pacote_passeio_4_x_4_ouro_preto_passeio.jpg',
      slug: 'passeio-4x4-ouro-preto'
    },
    {
      id: 4,
      titulo: 'City tour Ouro Preto',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/pacote_city_tour_ouro_preto_city_tour.jpg',
      slug: 'city-tour-ouro-preto'
    },
    {
      id: 5,
      titulo: 'Rapel em Ouro Preto',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/pacote_rapel_em_ouro_preto_rapel.jpg',
      slug: 'rapel-ouro-preto'
    },
    {
      id: 6,
      titulo: 'Caminho dos Escravos – Diamantina',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/pacote_caminho_dos_escravos_diamantina_capturar4jpg.jpg',
      slug: 'caminho-escravos-diamantina'
    },
    {
      id: 7,
      titulo: 'PARQUE ESTADUAL DO BIRIBIRI',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/pacote_parque_estadual_do_biribiri_capturar3jpg.jpg',
      slug: 'parque-estadual-biribiri'
    },
    {
      id: 8,
      titulo: 'Passeio Cultural em Diamantina',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/pacote_passeio_cultural_em_diamantina_capturar2jpg.jpg',
      slug: 'passeio-cultural-diamantina'
    },
    {
      id: 9,
      titulo: 'Serra do Caraça – Primórdios da Cozinha Mineira: Estrada Real (versão 2)',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/pacote_serra_do_caraca_primordios_da_cozinha_mineira_estrada_real_serra_do_caraca-1-scaled.jpg',
      slug: 'serra-caraca-primordios-cozinha-mineira-estrada-real-v2'
    },
    {
      id: 10,
      titulo: 'Serra da Piedade – Primórdios da Cozinha Mineira: Estrada Real',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/pacote_serra_da_piedade_primordios_da_cozinha_mineira_estrada_real_fazenda_germana.jpg',
      slug: 'serra-piedade-primordios-cozinha-mineira-estrada-real'
    }
  ];

  // Filtrar pacotes baseado no termo de busca
  const filteredPacotes = pacotes.filter(pacote =>
    pacote.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Função para limpar a busca
  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* 1. Banner de topo da página */}
      <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/vista-panoramica-carro-jipe-no-havai-scaled.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-black/85" />
        </div>
        
        <div 
          className="relative text-center text-white px-4"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <h1 
            className="text-4xl md:text-6xl font-bold mb-4 uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            PACOTES
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-200 mb-8 text-center"
            style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'center' }}
          >
            ESCOLHA SEU DESTINO
          </p>
          <div 
            className="text-center"
            style={{
              fontSize: '14px',
              color: '#FFFFFF99',
              fontFamily: 'Poppins, sans-serif',
              textAlign: 'center'
            }}
          >
            VIVA, EXPERIMENTE, DESCUBRA
          </div>
        </div>
      </div>

      {/* 2. Barra de Busca */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
              style={{ color: '#555555' }}
            />
            <input
              type="text"
              placeholder="Digite o nome do pacote…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
              style={{
                height: '56px',
                paddingLeft: '48px',
                paddingRight: searchTerm ? '48px' : '16px',
                border: '2px solid #1E4620',
                borderRadius: '8px',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1rem',
                fontWeight: '400',
                color: '#555555',
                outline: 'none'
              }}
            />
            
            {/* Botão de limpar */}
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          
          {/* Contador de resultados */}
          {searchTerm && (
            <div className="mt-4 text-center">
              <p 
                className="text-gray-600"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem' }}
              >
                {filteredPacotes.length} pacote{filteredPacotes.length !== 1 ? 's' : ''} encontrado{filteredPacotes.length !== 1 ? 's' : ''}
                {searchTerm && ` para "${searchTerm}"`}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. Grid de Pacotes */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {filteredPacotes.length === 0 ? (
            <div className="text-center py-16">
              <p 
                className="text-gray-600 text-lg"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Nenhum pacote encontrado para "{searchTerm}". Tente outro termo de busca.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPacotes.map((pacote) => (
                <div
                  key={pacote.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
                  onClick={() => {
                    if (pacote.link) {
                      navigate(pacote.link);
                    } else {
                      // Se não tem link específico, vai para página de detalhe genérica
                      console.log(`Pacote "${pacote.titulo}" ainda não tem página específica`);
                    }
                  }}
                  style={{
                    border: '2px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#1E4620';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                >
                  <div className="h-48 overflow-hidden">
                    <LazyImage
                      src={pacote.imagem}
                      alt={pacote.titulo}
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
                      {pacote.titulo}
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
          )}
        </div>
        
        {/* Botão Mais Sugestões */}
        <div className="text-center mt-12">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="border-2 border-estrada-green text-estrada-green hover:bg-estrada-green-light hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Mais Sugestões
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PacotesPage;