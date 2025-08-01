import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LazyImage from '../components/LazyImage';
import { ChevronLeft, ChevronRight, Mail, Facebook, Linkedin, Send, MessageCircle } from 'lucide-react';

const NaturezaPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCauso, setSelectedCauso] = useState<number | null>(null);
  
  // Garantir que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const causos = [
    {
      id: 1,
      titulo: 'Cachoeira do Tabuleiro',
      local: 'Conceição do Mato Dentro – MG',
      texto: 'Conceição do Mato Dentro possui a maior cachoeira de Minas Gerais, a Cachoeira do Tabuleiro. Com seus 273 metros de queda, é a 3ª maior do Brasil.',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/vista-por-cima.jpg'
    },
    {
      id: 2,
      titulo: 'A Lenda da Lagoa da Reta',
      local: 'Sabará – MG',
      texto: 'Havia uma casa de baile perto de onde passavam as procissões de quaresma. Certa vez, durante a passagem da procissão, contrariando as ordens do padre – que pediu para que a casa fosse fechada e não ligassem a música – as pessoas não deram atenção. Continuaram dançando, cantando e fazendo muito barulho. Ao passar pelo salão, o padre contrariado amaldiçoou aquele lugar. Levantou o crucifixo, dando continuidade à procissão, e a casa começou a afundar, levando junto todos os que participavam daquela festa. Nenhum deles voltou a ser visto e aquele misterioso movimento de terra foi imediatamente tomado pela água, transformando-se em uma lagoa sem fundo, atualmente conhecida como Lagoa da Reta.',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/80c7dda80416fa9230eb63d09f3e1a84.jpg'
    },
    {
      id: 3,
      titulo: 'O Santuário de Nossa Senhora da Piedade',
      local: 'Caeté – MG',
      texto: 'A origem do Santuário de Nossa Senhora da Piedade está ligada a muitas lendas. Uma delas diz que no século 17 chegaram à região dois fidalgos que queriam fundar um eremitério, eram eles: Bracarena e Lourenço. O primeiro chegou à Vila Nova da Rainha e, ao avistar a Serra da Piedade, rodeada de nuvens, achou que ali era apropriado para a construção de uma capela em louvor à santa de sua devoção. O povo, a princípio, julgou que Bracarena fosse louco. Boatos, no entanto, sobre curas e milagres começaram a surgir e o velho ermitão passou a ser admirado. Uma menina "muda de nascença" avistou várias vezes à noite a imagem da Virgem e ficou curada. Um escravo, picado de cobra, bebeu água da fonte e imediatamente se curou. Uma senhora que tinha a pele ferida ficou com o corpo completamente limpo depois de beber da mesma água. Os milagres convenceram o povo e então passaram a ajudar na construção da capela. Em 1770, como está gravado no sino da torre, o templo ficou pronto. A partir daí, a serra passou a ser chamada de Serra da Piedade e a receber visitantes do mundo todo.',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-16-de-jul.-de-2025-12_22_13.png'
    },
    {
      id: 4,
      titulo: 'A Cachoeira do Carteiro',
      local: 'Tiradentes – MG',
      texto: 'Seguindo pelo bairro do Cascalho, com uma caminhada de aproximadamente uma hora e meia, chega-se ao alto da Serra de São José. No caminho você passará diante de uma cruz onde foi morto um carteiro que trazia mensagem importante para a vila. Diz a lenda que quem passar por este caminho deverá jogar uma pedra ao pé da cruz. Logo em frente nos deparamos com algumas pequenas piscinas.',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/urubu-800x450-1.jpg'
    }
  ];

  const atrativos = [
    {
      id: 1,
      nome: 'Usina do Petí',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/usina_do_peti_sao_goncalo_do_rio_abaixo.jpeg',
      link: '/usina-peti'
    },
    {
      id: 2,
      nome: 'Poço do Quilombo',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_poco_do_quilombo_acervo_estrada_real.jpeg'
    },
    {
      id: 3,
      nome: 'Travessia Serra Fina',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_travessia_serra_fina_travessia_serra_fina_3.jpg'
    },
    {
      id: 4,
      nome: 'Pico Três Estados',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_pico_tres_estados_pico_dos_tres_estados_1.jpg'
    },
    {
      id: 5,
      nome: 'Pico do Itaguaré',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_pico_do_itaguare_pico_do_itaguare_3.jpg'
    },
    {
      id: 6,
      nome: 'Pico da Pedra da Mina',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_pico_da_pedra_da_mina_pico_da_pedra_da_mina_3.jpg'
    },
    {
      id: 7,
      nome: 'Pico do Capim Amarelo',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_pico_do_capim_amarelo_pico_do_capim_amarelo_5.jpg'
    },
    {
      id: 8,
      nome: 'Trilha ao Campo do Muro',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_trilha_ao_campo_do_muro_campo_do_muro2.jpg'
    },
    {
      id: 9,
      nome: 'Floresta Nacional de Passa Quatro',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_floresta_nacional_de_passa_quatro_floresta_nacional_4.jpg'
    },
    {
      id: 10,
      nome: 'Cachoeira da Gomeira',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_cachoeira_da_gomeira_cachoeira_da_gomeira_3.jpg'
    },
    {
      id: 11,
      nome: 'Poço Paraíso',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_poco_paraiso_poco_paraizo_3.jpg'
    },
    {
      id: 12,
      nome: 'Cachoeira da Encruza',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_cachoeira_da_encruza_cachoeira_da_encruza.jpg'
    },
    {
      id: 13,
      nome: 'Cachoeira do Andorinhão',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_cachoeira_do_andorinhao_cachoeira_do_andorinhao.jpg'
    },
    {
      id: 14,
      nome: 'Parque Nacional da Serra do Gandarela',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_parque_nacional_da_serra_do_gandarela_parque_nacional_da_serra_do_gandarela.jpeg'
    },
    {
      id: 15,
      nome: 'Cachoeira dos 5 Saltos',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_cachoeira_dos_5_saltos_cachoeira_dos_5_saltos-scaled.jpg'
    },
    {
      id: 16,
      nome: 'Represa da Ponte Preta',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_represa_da_ponte_preta_represa_ponte_preta_credtio_prefeitura_santos_dumont.jpg'
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
            backgroundImage: 'url(http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/8-melhores-cachoeiras-em-Minas-Gerais-2.jpeg)'
          }}
        >
          <div className="absolute inset-0 bg-black/75" />
        </div>
        
        <div className="relative text-center text-white px-4">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-4 uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            NATUREZA
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-200 mb-8"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Paisagens deslumbrantes esperam por você na Estrada Real
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
            Os caminhos da Estrada Real foram abençoados com alguns dos cenários mais bonitos do mundo. Os caminhos são contemplados com lugares celestiais como a Serra do Espinhaço, a Serra da Piedade e a Serra dos Órgãos. Para os amantes da natureza e do ecoturismo, a Estrada Real é o destino perfeito.
          </p>
        </div>
      </section>

      {/* 3. Seção de atrações naturais */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              color: '#014421'
            }}
          >
            Atrativos Naturais da Estrada Real
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {atrativos.map((atrativo) => (
              <div
                key={atrativo.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${atrativo.link ? 'cursor-pointer' : ''}`}
                onClick={() => atrativo.link && navigate(atrativo.link)}
              >
                <div className="h-48 overflow-hidden">
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

export { NaturezaPage };