import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LazyImage from '../components/LazyImage';
import LazyIframe from '../components/LazyIframe';
import { ChevronDown } from 'lucide-react';

const GastronomiaPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedClassificacao, setSelectedClassificacao] = useState('');
  const [selectedCategoria, setSelectedCategoria] = useState('');
  const [selectedResultado, setSelectedResultado] = useState('');
  
  // Garantir que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classificacoes = ['Atrativo', 'Evento', 'Produto'];

  const categorias = [
    'Alambiques',
    'Bebidas',
    'Cogumelos',
    'Doces',
    'Equipamentos e Utensílios',
    'Festival Gastronômico',
    'Frutas',
    'Frutos do Mar',
    'Mercado',
    'Museu',
    'Óleos e Azeites',
    'Produtos e Embutidos',
    'Queijos',
    'Quitandas',
    'Receitas Especiais',
    'Restaurantes'
  ];

  const resultados = [
    'Águas minerais, Caxambu',
    'Águas minerais, São Lourenço',
    'Alambique, Coronel Xavier Chaves',
    'Azeite extra virgem orgânico, Delfim Moreira',
    'Azeite, Maria da Fé',
    'Biscoitos, São Tiago',
    'Cachaça, Itabirito',
    'Cachaça, Paraty',
    'Cachaça, Serro',
    'Cachaça, Ouro Preto',
    'Café, Cristina',
    'Cafés especiais, Carmo de Minas',
    'Caraça Bier Fest, Catas Altas',
    'Carne de lata, Glaura',
    'Carne de porco, Ponte Nova',
    'Cervejas artesanais, Nova Lima',
    'Cervejas artesanais, Santana dos Montes',
    'Circuito de Cervejas Artesanais, Juiz de Fora',
    'Circuito da Cerveja, Petrópolis',
    'Cogumelos, Carrancas',
    'Diamantina Gourmet',
    'Doces, Caxambu',
    'Doces, São Bartolomeu',
    'Doces, São Lourenço',
    'Feira Fundo de Quintal, Rio Acima',
    'Festa do café com biscoito, São Tiago',
    'Festa do pastel de angu, Itabirito',
    'Festa do pinhão, Cunha',
    'Festa do rocambole, Lagoa Dourada',
    'Festa Boa Mesa, Caxambu',
    'Festa café com música, Cristina',
    'Festival da banana, Itambé do Mato Dentro',
    'Festival da batata, Ouro Branco',
    'Festival da cachaça, cultura e sabores, Paraty',
    'Festival da jabuticaba, Sabará',
    'Festival das quitandas, Congonhas',
    'Festival da fruta, Guaratinguetá',
    'Festival de aromas e sabores, Itanhandu',
    'Festival de cultura e gastronomia, Tiradentes',
    'Festival do frango caipira, São Gonçalo do Rio das Pedras',
    'Festival de Ora-Pro-Nóbis, Sabará',
    'Festival Gastronômico e Cultural, Carrancas',
    'Festival Gastronômico, Passa 4',
    'Festival Happy Hour, São João del-Rei',
    'Fogão à Lenha Artesanal, São Gonçalo do Rio das Pedras',
    'Frango ao Molho Pardo, Diamantina',
    'Frutos do Mar, Paraty',
    'Fubá Suado, Conceição do Mato Dentro',
    'JF Sabores, Juiz de Fora',
    'Licores, Sabará',
    'Marmelo, Delfim Moreira',
    'Mel, Santa Bárbara',
    'Mercadinho Comunitário "Tá Caindo Fulô", Serra do Cipó',
    'Mercado Municipal, Diamantina',
    'Mercado Municipal, Juiz de Fora',
    'Morango, Alfredo Vasconcelos',
    'Morango, Datas',
    'Museu do Tropeiro e Poema, Morro do Pilar',
    'Panelas de Pedra Sabão, Cachoeira do Campo',
    'Pastéis JK, Diamantina',
    'Pastel de angu, Conceição do Mato Dentro',
    'Pastel de angu, Itabirito',
    'Pequi, Jaboticatuba',
    'Pinhão, Passa 4',
    'Produtos com jabuticaba, Sabará',
    'Queijo artesanal, Alagoa',
    'Queijo Catauá, Coronel Xavier Chaves',
    'Queijo da Caverna, Caeté',
    'Queijo do Reino, Santos Dumont',
    'Queijo do Serro, Serro',
    'Queijos finos, Cruzília',
    'Queijos, Ponte Nova',
    'Quintais e Quitandas, Morro do Pilar',
    'Quitandas, Caeté',
    'Quitandas, Catas Altas',
    'Quitandas, Diamantina',
    'Quitandas, Santa Bárbara',
    'Quitandas, Serro',
    'Restaurantes, Petrópolis',
    'Restaurantes, Tiradentes',
    'Rocambole, Lagoa Dourada',
    'Sabor de Boteco, Itanhandu',
    'Torresmo do Zé Loureto, Lavras Novas - Chapada',
    'Truta, Guaratinguetá',
    'Truta, Passa 4',
    'Vinho de jabuticaba, Catas Altas',
    'Vinho, Santana dos Montes'
  ];


  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* 1. Banner Principal */}
      <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-16-de-jul.-de-2025-11_36_39.png)'
          }}
        >
          <div className="absolute inset-0 bg-black/55" />
        </div>
        
        <div className="relative text-center text-white px-4">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-4 uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            GASTRONOMIA
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-200"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Apaixone-se pela gastronomia única da Estrada Real
          </p>
        </div>
      </div>

      {/* 2. Mapa Terroirs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <LazyImage
              src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-15-de-jul.-de-2025-20_07_29.png"
              alt="Mapa dos Terroirs da Estrada Real"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* 3. Texto Introdutório */}
      <section className="py-16 px-4" style={{ backgroundColor: '#EDA10E' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 text-white">
            <p 
              className="text-lg md:text-xl leading-relaxed"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                lineHeight: '1.8'
              }}
            >
              A Estrada Real tem na gastronomia uma de suas maiores atrações. São receitas, pratos e quitutes produzidos artesanalmente e com ingredientes únicos.
            </p>
            
            <p 
              className="text-lg md:text-xl leading-relaxed"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                lineHeight: '1.8'
              }}
            >
              E é justamente para valorizar toda essa riqueza que surgiu o Terroirs Estrada Real. Uma iniciativa que reúne os diversos terroirs encontrados ao longo da Estrada. Tanto em Minas Gerais, quanto no Rio de Janeiro e em São Paulo.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Bloco de Pesquisa */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p 
              className="text-lg text-estrada-green mb-2"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}
            >
              Explore a
            </p>
            <h2 
              className="text-4xl md:text-5xl font-bold text-estrada-green mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              ESTRADA REAL
            </h2>
            <p 
              className="text-lg text-estrada-green"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}
            >
              Pelos seus interesses
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Campo 1: Classificação */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Classificação
                </label>
                <div className="relative">
                  <select
                    value={selectedClassificacao}
                    onChange={(e) => setSelectedClassificacao(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-estrada-green focus:border-transparent appearance-none bg-white"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <option value="">Selecione uma Classificação</option>
                    {classificacoes.map((classificacao, index) => (
                      <option key={index} value={classificacao}>{classificacao}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Campo 2: Categoria */}
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
                    <option value="">Selecione uma Categoria</option>
                    {categorias.map((categoria, index) => (
                      <option key={index} value={categoria}>{categoria}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Campo 3: Resultado */}
              <div>
                <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Resultado
                </label>
                <div className="relative">
                  <select
                    value={selectedResultado}
                    onChange={(e) => setSelectedResultado(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-estrada-green focus:border-transparent appearance-none bg-white"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <option value="">Resultado</option>
                    {resultados.map((resultado, index) => (
                      <option key={index} value={resultado}>{resultado}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Botão de Busca */}
            <div className="text-center mt-8">
              <button
                className="bg-estrada-green hover:bg-estrada-green-light text-white font-semibold py-3 px-12 rounded-lg transition-colors duration-200"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Buscar
              </button>
            </div>

            {/* Resultado da Seleção */}
            {(selectedClassificacao || selectedCategoria || selectedResultado) && (
              <div className="mt-8 p-6 bg-estrada-green-50 rounded-lg border border-estrada-green-100">
                <h3 
                  className="text-lg font-semibold text-estrada-green mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Seleção Atual:
                </h3>
                <div className="space-y-2 text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {selectedClassificacao && (
                    <p><strong>Classificação:</strong> {selectedClassificacao}</p>
                  )}
                  {selectedCategoria && (
                    <p><strong>Categoria:</strong> {selectedCategoria}</p>
                  )}
                  {selectedResultado && (
                    <p><strong>Resultado:</strong> {selectedResultado}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Mapa Embedado */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <LazyIframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1h_1UlUQ8XwhXu226mjTPd5znZe0CT1A&ehbc=2E312F"
              width="100%"
              height="520"
              title="Mapa Gastronômico da Estrada Real"
            />
          </div>
        </div>
      </section>

      {/* 6. Seção Produtos Licenciados */}
      <section 
        className="relative py-20 px-4"
        style={{
          backgroundImage: 'url(http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/queijo-rustico-de-close-up-com-uvas-scaled.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Sobreposição laranja translúcida */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(242, 106, 27, 0.75)' }}
        />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 
            className="mb-8"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '800',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              lineHeight: '1.2'
            }}
          >
            <div 
              style={{ 
                fontSize: '1.5rem',
                marginBottom: '8px'
              }}
            >
              PRODUTOS
            </div>
            <div 
              style={{ 
                fontSize: '3rem'
              }}
              className="md:text-5xl"
            >
              LICENCIADOS
            </div>
          </h2>
          
          <button
            onClick={() => {
              // Redirecionar diretamente para a seção PRODUTOS da Estrada Real na home
              window.location.href = '/#produtos-estrada-real';
            }}
            className="transition-all duration-200 hover:bg-orange-600 hover:text-white"
            style={{ 
              backgroundColor: '#FFFFFF',
              color: '#F26A1B',
              border: '2px solid #F26A1B',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '700',
              fontSize: '1.125rem',
              padding: '12px 32px',
              borderRadius: '8px',
              cursor: 'pointer',
              textTransform: 'uppercase'
            }}
          >
            CONHEÇA
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GastronomiaPage;