import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LazyImage from '../components/LazyImage';
import { Download } from 'lucide-react';

export const AEstradaRealPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Garantir que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMapDownload = () => {
    window.open('https://files.institutoestradareal.com.br/images/public/mapa_estrada_real.jpg', '_blank');
  };

  const caminhos = [
    {
      id: 1,
      name: 'Caminho dos Diamantes',
      description: 'O caminho tinha a intenção de conectar a sede da Capitania, Ouro Preto, à principal cidade de exploração de diamantes, Diamantina.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/Design-sem-nome-2-e1752005916396.png',
      link: '/caminho-diamantes'
    },
    {
      id: 2,
      name: 'Caminho Novo',
      description: 'Criado para servir como um caminho mais seguro ao porto do Rio de Janeiro, principalmente porque as cargas estavam sujeitas a ataques piratas na rota marítima entre Paraty e Rio.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/Design-sem-nome-3-e1752005952206.png',
      link: '/caminho-novo'
    },
    {
      id: 3,
      name: 'Caminho Velho',
      description: 'Também chamado de Caminho do Ouro, foi o primeiro trajeto determinado pela Coroa Portuguesa e liga Ouro Preto a Paraty.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-15-de-jul.-de-2025-14_17_40.png',
      link: '/caminho-velho'
    },
    {
      id: 4,
      name: 'Caminho do Sabarabuçu',
      description: 'Distrito de Ouro Preto, o lugar é cercado por esplêndidas paisagens de montanha e lendas que permeiam o imaginário popular.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-15-de-jul.-de-2025-14_27_35.png',
      link: '/caminho-sabarabucu'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* 1. Banner Inicial (Hero Section) */}
      <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: 'url(http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-15-de-jul.-de-2025-11_57_45.png)',
            backgroundPosition: 'center 60%'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative text-center text-white px-4">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            A ESTRADA REAL
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-200 italic"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Uma estrada, seu destino.
          </p>
        </div>
      </div>

      {/* 2. Seção: HISTÓRIA */}
      <section 
        className="py-20 px-4"
        style={{
          background: 'linear-gradient(135deg, #1E4620 0%, #2A5D3B 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl font-bold text-white mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            HISTÓRIA
          </h2>
          
          <div className="space-y-6 text-white leading-relaxed">
            <p 
              className="text-lg md:text-xl"
              style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.8' }}
            >
              A Estrada Real é a maior rota turística do país. São mais de 1.630 quilômetros de extensão, passando por Minas Gerais, Rio de Janeiro e São Paulo. Hoje, ela resgata as tradições do percurso valorizando a identidade e as belezas da região.
            </p>
            
            <p 
              className="text-lg md:text-xl"
              style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.8' }}
            >
              A sua história surge em meados do século 18, quando a Coroa Portuguesa decidiu oficializar os caminhos para o trânsito de ouro e diamantes de Minas Gerais até os portos do Rio de Janeiro. As trilhas que foram delegadas pela realeza ganharam o nome de Estrada Real.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Seção: CAMINHOS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl font-bold text-green-800 text-center mb-12"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            CAMINHOS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {caminhos.map((caminho) => (
              <div
                key={caminho.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => navigate(caminho.link)}
              >
                <div className="h-48 overflow-hidden">
                  <LazyImage
                    src={caminho.image}
                    alt={caminho.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold text-green-800 mb-4"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {caminho.name}
                  </h3>
                  <p 
                    className="text-gray-700 leading-relaxed"
                    style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.6' }}
                  >
                    {caminho.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Seção: MAPA */}
      <section 
        className="py-20 px-4 relative"
        style={{
          backgroundImage: 'url(https://files.institutoestradareal.com.br/images/public/mapa_estrada_real.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl font-bold text-white mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            MAPA
          </h2>
          
          <p 
            className="text-xl text-white mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Baixe o mapa com todas as cidades da Estrada Real
          </p>
          
          <button
            onClick={handleMapDownload}
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center gap-3 mx-auto shadow-lg"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem' }}
          >
            <Download className="w-6 h-6" />
            DOWNLOAD
          </button>
        </div>
      </section>

      {/* 5. Seção: SINALIZAÇÃO */}
      <section 
        className="py-20 px-4"
        style={{ backgroundColor: '#FFF3CD' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl font-bold text-center mb-12"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#856404' }}
          >
            Sinalização
          </h2>
          
          {/* Layout em duas colunas */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Coluna da esquerda - Texto */}
            <div className="space-y-6 text-gray-800">
              <p 
                className="text-lg leading-relaxed"
                style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.8' }}
              >
                Nos eixos principais dos caminhos – Velho, Novo, dos Diamantes e Sabarabuçu – estão situados marcos da Estrada Real. Eles estão sempre presentes onde há pontos de bifurcação ou em locais que geram dúvidas ao viajante sobre a continuação da trilha.
              </p>
              
              <p 
                className="text-lg leading-relaxed font-semibold"
                style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.8' }}
              >
                Para não se confundir, aí vão algumas dicas:
              </p>
              
              <p 
                className="text-lg leading-relaxed"
                style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.8' }}
              >
                A ponta superior do marco não indica para onde você deve ir. Siga o caminho em que o marco está. No caso de uma bifurcação, se o marco estiver à esquerda da via, é para seguir à esquerda.
              </p>
            </div>
            
            {/* Coluna da direita - Imagem */}
            <div className="flex justify-center">
              <LazyImage
                src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/estrada_real_1.jpg"
                alt="Marco da Estrada Real"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Seção: TRÊS BANNERS (História, Gastronomia, Natureza) */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Banner 1 - HISTÓRIA */}
            <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: 'url(http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-15-de-jul.-de-2025-15_51_22.png)'
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-75" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h3 
                  className="text-3xl font-extrabold text-white mb-4 uppercase"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  HISTÓRIA
                </h3>
                <p 
                  className="text-white text-lg mb-6 leading-relaxed"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Viva a história em cada pedacinho da Estrada Real
                </p>
                <button
                  onClick={() => navigate('/historia')}
                  className="border border-white text-white px-8 py-3 rounded transition-all duration-200 hover:bg-white hover:text-black"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
                >
                  ACESSE
                </button>
              </div>
            </div>

            {/* Banner 2 - GASTRONOMIA */}
            <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: 'url(http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-15-de-jul.-de-2025-16_00_47.png)'
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-75" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h3 
                  className="text-3xl font-extrabold text-white mb-4 uppercase"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  GASTRONOMIA
                </h3>
                <p 
                  className="text-white text-lg mb-6 leading-relaxed"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Apaixone-se pela gastronomia única da Estrada Real
                </p>
                <button
                  onClick={() => navigate('/gastronomia')}
                  className="border border-white text-white px-8 py-3 rounded transition-all duration-200 hover:bg-white hover:text-black"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
                >
                  ACESSE
                </button>
              </div>
            </div>

            {/* Banner 3 - NATUREZA */}
            <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: 'url(http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-15-de-jul.-de-2025-16_09_27.png)'
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-75" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h3 
                  className="text-3xl font-extrabold text-white mb-4 uppercase"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  NATUREZA
                </h3>
                <p 
                  className="text-white text-lg mb-6 leading-relaxed"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Viva a história em cada pedacinho da Estrada Real
                </p>
                <button
                  onClick={() => navigate('/natureza')}
                  className="border border-white text-white px-8 py-3 rounded transition-all duration-200 hover:bg-white hover:text-black"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
                >
                  ACESSE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Seção: INSTITUCIONAL */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl font-bold text-green-800 mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            INSTITUCIONAL
          </h2>
          
          <p 
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
            style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.8' }}
          >
            Criado em 1999, o Instituto Estrada Real tem como objetivo organizar, fomentar e gerenciar o produto turístico Estrada Real. O Instituto está ligado ao Sistema FIEMG e conta com uma equipe multidisciplinar, que tornou o destino reconhecido no Brasil e no mundo.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};