import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LazyImage from '../components/LazyImage';
import { X, Mail, Facebook, Linkedin, Send, MessageCircle } from 'lucide-react';

const SalaoArtesPage: React.FC = () => {
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
                <h1 
                  className="text-3xl md:text-4xl font-bold text-estrada-green mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Salão de Artes "Tiradentes Grão Prior da Liberdade"
                </h1>
                <h3 
                  className="text-xl text-amber-600 font-semibold mb-6"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Edição Ouro Branco
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
                  Está aberto o Salão de Artes "Tiradentes Grão Prior da Liberdade" – Edição Ouro Branco, sediado na Fazenda Carreiras, com curadoria de Gladstone Lopes (Grão Prior do Priorado dos Inconfidentes).
                </p>
                
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
                  <a 
                    href="https://www.jornalespacohorizonte.com.br/post/sal%C3%A3o-de-artes-tiradentes-gr%C3%A3o-prior-da-liberdade-edi%C3%A7%C3%A3o-ouro-branco" 
                    target="_blank" 
                    rel="noopener"
                    className="text-amber-600 hover:text-estrada-green font-medium transition-colors duration-200"
                  >
                    Leia a matéria completa ↗
                  </a>
                </p>
              </div>
            </div>
            
            {/* Imagem à direita */}
            <div className="flex justify-center">
              <div className="relative">
                <LazyImage
                  src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_casa_de_tiradentes_fazenda_carreiras_acervo_estrada_real.jpg"
                  alt="Salão de Artes Tiradentes Grão Prior da Liberdade"
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
            <button className="p-3 rounded-full bg-gray-100 hover:bg-estrada-green-light hover:text-white transition-colors duration-200">
              <MessageCircle className="w-6 h-6" />
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
              src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_casa_de_tiradentes_fazenda_carreiras_acervo_estrada_real.jpg"
              alt="Salão de Artes Tiradentes Grão Prior da Liberdade - Ampliada"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default SalaoArtesPage;