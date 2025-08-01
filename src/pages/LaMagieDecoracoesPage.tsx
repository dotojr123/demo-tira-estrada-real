import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Facebook, Linkedin, Send, MessageCircle, X } from 'lucide-react';

const LaMagieDecoracoesPage: React.FC = () => {
  // Garantir que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const suggestedAttractions = [
    {
      id: 1,
      nome: 'Chicas Empório',
      imagem: 'https://aromagel-worldexcellences.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-23-at-20.39.56.jpeg',
      tipo: 'Equipamento'
    },
    {
      id: 2,
      nome: 'Centro Cultural e Museu Selaria Raimundo Nazário',
      imagem: 'https://aromagel-worldexcellences.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-23-at-20.39.56.jpeg',
      tipo: 'Equipamento'
    },
    {
      id: 3,
      nome: 'Agência de Turismo Estrada Real',
      imagem: 'https://aromagel-worldexcellences.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-23-at-20.39.56.jpeg',
      tipo: 'Equipamento'
    },
    {
      id: 4,
      nome: 'Casa do Artesão',
      imagem: 'https://aromagel-worldexcellences.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-23-at-20.39.56.jpeg',
      tipo: 'Equipamento'
    },
    {
      id: 5,
      nome: 'Palácio d\'Ouro',
      imagem: 'https://aromagel-worldexcellences.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-23-at-20.39.56.jpeg',
      tipo: 'Equipamento'
    },
    {
      id: 6,
      nome: 'Lembrancinhas do Leite',
      imagem: 'https://aromagel-worldexcellences.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-23-at-20.39.56.jpeg',
      tipo: 'Equipamento'
    },
    {
      id: 7,
      nome: 'dhama É tur',
      imagem: 'https://aromagel-worldexcellences.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-23-at-20.39.56.jpeg',
      tipo: 'Equipamento'
    },
    {
      id: 8,
      nome: 'City Tour Caminhos de Tiradentes',
      imagem: 'https://aromagel-worldexcellences.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-23-at-20.39.56.jpeg',
      tipo: 'Equipamento'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Conteúdo Principal */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            {/* Título */}
            <div>
              <h1 
                className="text-3xl md:text-4xl font-bold text-estrada-green mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                La Magie Decorações
              </h1>
              <p 
                className="text-xl text-amber-600 font-semibold mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                🔸 Lojas de Artesanato e Souvenirs
              </p>
            </div>
            
            {/* Informações de Contato */}
            <div className="bg-estrada-green-50 rounded-xl p-8 max-w-2xl mx-auto">
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 
                    className="text-lg font-semibold text-estrada-green mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Endereço
                  </h3>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.6' }}>
                    Rua Duque de Caxias, 350 – Rosário – Rio Acima
                  </p>
                </div>
                
                <div>
                  <h3 
                    className="text-lg font-semibold text-estrada-green mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    E-mail
                  </h3>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.6' }}>
                    <a 
                      href="mailto:kellycordeiropimentel@gmail.com"
                      className="text-amber-600 hover:text-estrada-green transition-colors duration-200"
                    >
                      kellycordeiropimentel@gmail.com
                    </a>
                  </p>
                </div>
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
            <button className="p-3 rounded-full bg-gray-100 hover:bg-estrada-green-500 hover:text-white transition-colors duration-200">
              <MessageCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Sugestões de outros equipamentos */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 
            className="text-3xl font-bold text-estrada-green text-center mb-12"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Você também pode gostar de:
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {suggestedAttractions.map((equipamento) => (
              <div
                key={equipamento.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={equipamento.imagem}
                    alt={equipamento.nome}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span 
                      className="text-xs px-2 py-1 rounded-full font-medium bg-blue-100 text-blue-800"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {equipamento.tipo}
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
                    {equipamento.nome}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          
          {/* Botão Mais Sugestões */}
          <div className="text-center mt-12">
            <button 
              onClick={() => window.location.href = '/servicos/equipamentos-de-apoio'}
              className="border-2 border-estrada-green text-estrada-green hover:bg-estrada-green-light hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
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

export default LaMagieDecoracoesPage;