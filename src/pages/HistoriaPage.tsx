import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LazyImage from '../components/LazyImage';
import { ChevronLeft, ChevronRight, Mail, Facebook, Linkedin, Send, MessageCircle } from 'lucide-react';

const HistoriaPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCauso, setSelectedCauso] = useState<number | null>(null);
  
  // Garantir que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const causos = [
    {
      id: 1,
      titulo: 'A origem do nome Milho Verde',
      local: 'Milho Verde (MG)',
      texto: 'Atualmente, há duas versões sobre a história de Milho Verde. Uma delas conta sobre a passagem de bandeirantes na região. Depois de muito andar, alguns deles com fome pararam na casa de um habitante local. Este habitante, Sr. Modesto, ofereceu a eles abrigo e a única coisa que tinha como alimento: milho verde. Em outra versão, contam que apareceu na região, por volta de 1711, um português natural da Província do Minho. Seu nome, Rodrigues Milho Verde. Esse português veio à procura de ouro e diamante, abundantes nas regiões próximas. Por meio dele, várias pessoas vieram com o mesmo objetivo, formando assim o povoado.',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/Milho-Verde-Serro-Minas-Gerais-770x450-1.jpg'
    },
    {
      id: 2,
      titulo: 'A mulher da rua Direita',
      local: 'Mariana (MG)',
      texto: 'Na cidade de Mariana, uma alma penada de uma mulher é vista perambulando pela cidade à noite. Moradores e diversos turistas juram já ter visto a assombração na Rua Direita. Segundo os relatos, a mulher aparece como uma andarilha, de roupas sujas e esfarrapadas. Mas, ao se aproximarem do vulto, a figura se transforma em uma senhora bem vestida e cheia de joias. Pesquisadores do folclore da cidade creem que a mulher possa ser o fantasma de uma senhora rica do século 18.',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/tiradentes-2-9.jpg'
    },
    {
      id: 3,
      titulo: 'A lenda da Igreja Nossa Senhora do Rosário',
      local: 'Sabará (MG)',
      texto: 'Conta a lenda que a Igreja do Rosário estava no meio de sua construção quando a princesa Izabel assinou a Lei Áurea e libertou os escravos. Com medo da princesa se arrepender e dos senhores não os deixarem ir embora, os escravos saíram correndo em busca da tão sonhada liberdade, deixando a igreja inacabada. Os senhores ricos da época tentaram prosseguir a construção da igreja, mas não conseguiam. Eles ordenavam que subissem algumas paredes durante o dia e as almas dos escravos que haviam morrido durante os 118 anos gastos na construção dessa igreja derrubavam tudo durante a noite.',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/rosario.png'
    },
    {
      id: 4,
      titulo: 'Cabelos Dourados',
      local: 'Ouro Preto (MG)',
      texto: 'Conta-se que os escravos, quando trabalhavam na extração do ouro, escondiam parte do pó dourado em seus cabelos. Para retirar o ouro, colocavam os cabelos numa bacia com água e o ouro se depositava. Dizem que, dessa forma, muitos escravos compraram a sua liberdade.',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/img_0388_3.png'
    },
    {
      id: 5,
      titulo: 'O sino condenado',
      local: 'São João del Rei (MG)',
      texto: 'Todos os sinos de São João del Rei têm nome. Em 1930, o Jerônimo, um sino, foi preso e condenado à fundição, porque matou o sineiro com uma pancada. De seu bronze nasceu o Francisco, que badala na Igreja de São Francisco de Assis.',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/img_3841.jpg'
    }
  ];
  const atrativos = [
    {
      id: 1,
      nome: 'Estátua e Caminho do Padre João',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/sao_goncalo_do_rio_abaixo.png',
      link: '/estatua-padre-joao'
    },
    {
      id: 2,
      nome: 'Igreja Santa Efigênia',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/sao_goncalo_do_rio_abaixo.jpg'
    },
    {
      id: 3,
      nome: 'Casa do Artesão',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/casa_do_artesao_sao_goncalo_do_rio_abaixo.jpeg'
    },
    {
      id: 4,
      nome: 'Cruzeiro da Igreja Matriz',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/sao_goncalo_do_rio_abaixo-1.jpg'
    },
    {
      id: 5,
      nome: 'Igreja Matriz de São Gonçalo do Amarante',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/sao_goncalo_do_rio_abaixo-1.jpg'
    },
    {
      id: 6,
      nome: 'Igreja de Nossa Senhora do Rosário',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/sao_goncalo_do_rio_abaixo-2-scaled.jpg'
    },
    {
      id: 7,
      nome: 'Túnel da Mantiqueira',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_tunel_da_mantiqueira_tunel_da_mantiqueira_1.jpg'
    },
    {
      id: 8,
      nome: 'Núcleo Histórico de Passa Quatro',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_nucleo_historico_de_passa_quatro_centro_historico_3.jpg'
    },
    {
      id: 9,
      nome: 'Museu do Diamante',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_museu_do_diamante_fachada_frontal.jpg'
    },
    {
      id: 10,
      nome: 'Memorial Histórico Cultural',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_memorial_historico_cultural_memorial_02.png'
    },
    {
      id: 11,
      nome: 'Museu Regional de Caeté',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_museu_regional_de_caete_museu_regional_de_caete.jpg'
    },
    {
      id: 12,
      nome: 'Igreja Matriz Nossa Senhora das Dores',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_igreja_matriz_nossa_senhora_das_dores_igreja_matriz_nossa_senhora_das_dores.jpg'
    },
    {
      id: 13,
      nome: 'Igreja Matriz Nossa Senhora do Desterro',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_igreja_matriz_nossa_senhora_do_desterro_igreja_matriz_nossa_senhora_do_desterro.jpg'
    },
    {
      id: 14,
      nome: 'Igreja de Nossa Senhora do Rosário (Desterro do Melo)',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_igreja_de_nossa_senhora_do_rosario_igreja_do_rosario_desterro_do_melo.jpg'
    },
    {
      id: 15,
      nome: 'Igreja Nossa Senhora dos Prazeres',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/Design-sem-nome-3-e1752005952206.png'
    },
    {
      id: 16,
      nome: 'Feirinha de Itaipava',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_feirinha_de_itaipava_feirinha_de_itaipava.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* 1. Banner de topo da página */}
      <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-15-de-jul.-de-2025-15_51_22.png)'
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative text-center text-white px-4">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-4 uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            HISTÓRIA
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-200 mb-8"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Viva a história em cada pedacinho da Estrada Real
          </p>
        </div>
      </div>

      {/* 2. Bloco de introdução textual */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold text-estrada-green mb-8"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Viva a história em cada pedacinho<br />da Estrada Real
          </h2>
          
          <p 
            className="text-lg md:text-xl leading-relaxed text-gray-700"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              lineHeight: '1.8'
            }}
          >
            Histórias e memórias permeiam cada canto da Estrada Real. Os caminhos são ricos não só das histórias que contam nos livros, mas daquelas que são passadas no boca a boca por gerações. As rotas da ER estão intimamente ligadas à própria história do Brasil e quem percorrê-la terá a chance de levar na bagagem séculos de lutas, conquistas e descobertas que foram fundamentais para o desenvolvimento do país.
          </p>
        </div>
      </section>

      {/* 3. Seção de atrações históricas */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              color: '#014421'
            }}
          >
            Atrações Históricas da Estrada Real
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {atrativos.map((atrativo) => (
              <div
                key={atrativo.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div 
                  style={{
                    height: '200px'
                  }}
                  className={atrativo.link ? "cursor-pointer" : ""}
                  onClick={() => atrativo.link && navigate(atrativo.link)}
                >
                  <LazyImage
                    src={atrativo.imagem}
                    alt={atrativo.nome}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                <div className="p-4">
                  <h3 
                    className="text-center font-semibold leading-tight"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      color: '#014421',
                      fontSize: '0.95rem',
                      lineHeight: '1.3'
                    }}
                  >
                    {atrativo.nome}
                  </h3>
                  
                  <div style={{ textAlign: 'center', marginTop: '8px' }}>
                    <span
                      className={`transition-colors duration-200 ${atrativo.link ? 'cursor-pointer' : ''}`}
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
        </div>
        
        {/* Botão Mais Sugestões */}
        <div className="text-center mt-12">
          <button className="border-2 border-estrada-green text-estrada-green hover:bg-estrada-green-light hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Mais Sugestões
          </button>
        </div>
      </section>

      {/* Seção Curiosidades e Causos */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F8F2E8' }}>
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#024731'
            }}
          >
            CURIOSIDADES E 'CAUSOS'
          </h2>
          
          {/* Bolinhas com texto sobreposto */}
          <div className="flex justify-center gap-6 mb-8 flex-wrap">
            {causos.map((causo) => (
              <button
                key={causo.id}
                onClick={() => setSelectedCauso(selectedCauso === causo.id ? null : causo.id)}
                className={`relative w-48 h-48 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                  selectedCauso === causo.id 
                    ? 'border-estrada-green scale-110' 
                    : 'border-gray-300 hover:border-estrada-green'
                } mb-4`}
              >
                <img
                  src={causo.imagem}
                  alt={causo.local}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center px-2">
                    <h4 
                      className="text-white font-bold text-sm leading-tight"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {causo.titulo}
                    </h4>
                    <p 
                      className="text-white text-xs mt-1"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {causo.local}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {/* Conteúdo sempre visível */}
          {/* Conteúdo do causo selecionado */}
          {selectedCauso && (
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
              {causos.map((causo) => (
                selectedCauso === causo.id && (
                  <div key={causo.id} className="text-center">
                    <h3 
                      className="text-2xl font-bold text-estrada-green mb-2"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {causo.titulo}
                    </h3>
                    <p 
                      className="text-lg text-amber-600 mb-6 font-semibold"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {causo.local}
                    </p>
                    <p 
                      className="text-gray-700 leading-relaxed text-lg"
                      style={{ 
                        fontFamily: 'Poppins, sans-serif',
                        lineHeight: '1.8'
                      }}
                    >
                      {causo.texto}
                    </p>
                  </div>
                )
              ))}
            </div>
          )}
          
          {/* Botões de navegação */}
          {selectedCauso && (
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={() => {
                  if (selectedCauso) {
                    const currentIndex = causos.findIndex(c => c.id === selectedCauso);
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : causos.length - 1;
                    setSelectedCauso(causos[prevIndex].id);
                  }
                }}
                className="flex items-center gap-2 border-2 border-estrada-green text-estrada-green hover:bg-estrada-green-light hover:text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
                Anterior
              </button>
              
              <button 
                onClick={() => {
                  if (selectedCauso) {
                    const currentIndex = causos.findIndex(c => c.id === selectedCauso);
                    const nextIndex = currentIndex < causos.length - 1 ? currentIndex + 1 : 0;
                    setSelectedCauso(causos[nextIndex].id);
                  }
                }}
                className="flex items-center gap-2 border-2 border-estrada-green text-estrada-green hover:bg-estrada-green-light hover:text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Próximo
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Seção de Compartilhamento */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 
            className="text-2xl font-bold text-estrada-green mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Compartilhe esta página
          </h3>
          
          <div className="flex justify-center gap-4">
            <button className="p-3 rounded-full bg-gray-100 hover:bg-estrada-green-light hover:text-white transition-colors duration-200">
              <Mail className="w-6 h-6" />
            </button>
            <button className="p-3 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors duration-200">
              <Facebook className="w-6 h-6" />
            </button>
            <button className="p-3 rounded-full bg-gray-100 hover:bg-blue-700 hover:text-white transition-colors duration-200">
              <Linkedin className="w-6 h-6" />
            </button>
            <button className="p-3 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white transition-colors duration-200">
              <Send className="w-6 h-6" />
            </button>
            <button className="p-3 rounded-full bg-gray-100 hover:bg-estrada-green-light hover:text-white transition-colors duration-200">
              <MessageCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HistoriaPage;