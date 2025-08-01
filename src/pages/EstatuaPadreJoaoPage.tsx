import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LazyImage from '../components/LazyImage';
import LazyIframe from '../components/LazyIframe';
import { X, Mail, Facebook, Linkedin, Send, MessageCircle } from 'lucide-react';

const EstatuaPadreJoaoPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Garantir que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const suggestedAttractions = [
    {
      id: 1,
      nome: 'Igreja Santa Efigênia',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/sao_goncalo_do_rio_abaixo.jpg',
      tipo: 'História'
    },
    {
      id: 2,
      nome: 'Casa do Artesão',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/casa_do_artesao_sao_goncalo_do_rio_abaixo.jpeg',
      tipo: 'História'
    },
    {
      id: 3,
      nome: 'Cachoeira do Tabuleiro',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/vista-por-cima.jpg',
      tipo: 'Natureza'
    },
    {
      id: 4,
      nome: 'Igreja Matriz de São Gonçalo do Amarante',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/sao_goncalo_do_rio_abaixo-1.jpg',
      tipo: 'História'
    },
    {
      id: 5,
      nome: 'Usina do Petí',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/usina_do_peti_sao_goncalo_do_rio_abaixo.jpeg',
      tipo: 'Natureza'
    },
    {
      id: 6,
      nome: 'Igreja de Nossa Senhora do Rosário',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/sao_goncalo_do_rio_abaixo-2-scaled.jpg',
      tipo: 'História'
    },
    {
      id: 7,
      nome: 'Poço do Quilombo',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_poco_do_quilombo_acervo_estrada_real.jpeg',
      tipo: 'Natureza'
    },
    {
      id: 8,
      nome: 'Museu do Diamante',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_museu_do_diamante_fachada_frontal.jpg',
      tipo: 'História'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Conteúdo Principal */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Texto à esquerda */}
            <div className="space-y-6">
              <div>
                <h2 
                  className="text-3xl md:text-4xl font-bold text-estrada-green mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Estátua e Caminho do Padre João
                </h2>
                <p 
                  className="text-xl text-amber-600 font-semibold mb-6"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  São Gonçalo do Rio Abaixo
                </p>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
                  Prestando uma homenagem ao Cônego João José Marques Guimarães, o padre João, a Prefeitura de São Gonçalo do Rio Abaixo construiu um monumento com 20 metros de altura, no bairro Patrimônio. A estátua foi modelada em concreto pelo artista plástico Genésio Gomes Moura, conhecido como Ceará.
                </p>
                
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
                  O Padre João nasceu em Morro Vermelho, município de Caeté, no dia 1º de março de 1890. Assumiu a Paróquia de São Gonçalo do Rio Abaixo em 1924, onde permaneceu como Pároco por meio século. Ficou na cidade por mais de 2 anos, deixando assim marcas permanentes nos costumes das famílias do município.
                </p>
                
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
                  Ele é um símbolo religioso da cidade, sendo, em razão dos inúmeros milagres que a ele são atribuídos. Para chegar na estátua busca o caminho apresenta um lastro de vida.
                </p>
              </div>
            </div>
            
            {/* Imagem à direita */}
            <div className="flex justify-center">
              <div className="relative">
                <LazyImage
                  src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/sao_goncalo_do_rio_abaixo.png"
                  alt="Estátua e Caminho do Padre João"
                  className="w-full max-w-md rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  onClick={openModal}
                />
              </div>
            </div>
          </div>
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
            <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white transition-colors duration-200">
              <X className="w-6 h-6" />
            </button>
            <button className="p-3 rounded-full bg-gray-100 hover:bg-green-500 hover:text-white transition-colors duration-200">
              <MessageCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 
            className="text-2xl font-bold text-estrada-green text-center mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Localização
          </h3>
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <LazyIframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11865.994630855754!2d-43.369742465998186!3d-19.82600896864994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5b2ffbafa4e61%3A0x2c7f13527cac9759!2sS%C3%A3o%20Gon%C3%A7alo%20do%20Rio%20Abaixo%2C%20MG%2C%2035935-000!5e1!3m2!1spt-BR!2sbr!4v1752688609131!5m2!1spt-BR!2sbr"
              title="Localização - São Gonçalo do Rio Abaixo"
            />
          </div>
        </div>
      </section>

      {/* Sugestões de outras atrações */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 
            className="text-3xl font-bold text-estrada-green text-center mb-12"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Você também pode gostar de:
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {suggestedAttractions.map((atracao) => (
              <div
                key={atracao.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <LazyImage
                    src={atracao.imagem}
                    alt={atracao.nome}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span 
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        atracao.tipo === 'História' 
                          ? 'bg-amber-100 text-amber-800' 
                          : 'bg-green-100 text-estrada-green'
                      }`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {atracao.tipo}
                    </span>
                  </div>
                  <h4 
                    className="font-semibold leading-tight text-center"
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      color: '#014421',
                      fontSize: '0.95rem',
                      lineHeight: '1.3'
                    }}
                  >
                    {atracao.nome}
                  </h4>
                </div>
              </div>
            ))}
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
        </div>
      </section>

      {/* Modal para imagem ampliada */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="w-8 h-8" strokeWidth={2} />
            </button>
            <img
              src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/sao_goncalo_do_rio_abaixo.png"
              alt="Estátua e Caminho do Padre João - Ampliada"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default EstatuaPadreJoaoPage;