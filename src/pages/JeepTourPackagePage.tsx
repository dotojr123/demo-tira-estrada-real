import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LazyImage from '../components/LazyImage';
import { X, Mail, Facebook, Linkedin, Send, MessageCircle } from 'lucide-react';

const JeepTourPackagePage: React.FC = () => {
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
            {/* Coluna Esquerda - 600px */}
            <div className="space-y-6" style={{ maxWidth: '600px' }}>
              <div>
                <h1 
                  className="text-3xl md:text-4xl font-bold text-estrada-green mb-6"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Jeep Tour Caminhos da Estrada Real – (Secretário + Sebollas) – Caminho Novo
                </h1>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8', textAlign: 'justify' }}>
                  A bordo de um Jeep Tour, seu destino é um dos distritos históricos de Petrópolis. Cuja ocupação é mais antiga do que a fundação da própria cidade, datando de meados do século XVIII, nos tempos do Brasil Colônia.
                </p>
                
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8', textAlign: 'justify' }}>
                  Você vai percorrer em um jipe da Jeep Tour, ao ar livre, a charmosa vila de Secretário, que faz parte de uma variante do Caminho Novo da Estrada Real, que ligava o Rio de Janeiro à região das lavras e castas de ouro em Minas Gerais. A rota que era percorrida por tropeiros e animais de carga, começava ao fundo da Baía de Guanabara no extinto Porto da Estrela, subia a Serra percorrendo o interior do que hoje é a cidade de Petrópolis e seguia por Secretário, Fagundes e Sebollas rumo a Paraíba do Sul, por onde seguiam o caminho original.
                </p>
                
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8', textAlign: 'justify' }}>
                  Nossa aventura seguirá contemplando a natureza dessa região, até chegar à delicada igreja local, que fica pertinho do museu dedicado a Tiradentes. O mártir, que por inúmeras vezes usou esta mesma rota em suas idas e vindas entre o Rio de Janeiro e Minas, na articulação da Inconfidência Mineira. Você ouvirá relatos no vilarejo de que partes dos seus restos mortais, esquartejado, foram expostos na região como forma de lembrar à população o que acontecia aos traidores da Coroa. E nosso passeio continua, com visitas a novos locais da região, como uma moderníssima fábrica de queijos, uma deliciosa produção de doces artesanais e até um vinhedo no estilo europeu!
                </p>
                
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8', textAlign: 'justify' }}>
                  O passeio tem duração de 8 h aproximadamente e inclui almoço no tradicional da roça.
                </p>
                
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem', lineHeight: '1.8', textAlign: 'justify' }}>
                  <strong>OBS:</strong> Este tour também pode ser feito em mountain bike. Possuímos equipamentos (bicicletas, capacetes e transporte específico para bicicletas e ciclistas) para locação e equipe treinada para guiamentos.
                </p>
              </div>

              {/* Seção de Compartilhamento */}
              <div className="py-8">
                <h3 
                  className="text-2xl font-bold text-estrada-green mb-8"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Compartilhe esta página
                </h3>
                
                <div className="flex justify-start gap-4">
                  <button className="p-3 rounded-full bg-gray-100 hover:bg-estrada-green-light hover:text-white transition-colors duration-200">
                    <Mail className="w-6 h-6" />
                  </button>
                  <button className="p-3 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    <Facebook className="w-6 h-6" />
                  </button>
                  <button className="p-3 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </button>
                  <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white transition-colors duration-200">
                    <X className="w-6 h-6" />
                  </button>
                  <button className="p-3 rounded-full bg-gray-100 hover:bg-blue-700 hover:text-white transition-colors duration-200">
                    <Linkedin className="w-6 h-6" />
                  </button>
                  <button className="p-3 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white transition-colors duration-200">
                    <Send className="w-6 h-6" />
                  </button>
                  <button className="p-3 rounded-full bg-gray-100 hover:bg-green-500 hover:text-white transition-colors duration-200">
                    <MessageCircle className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Linha divisória */}
              <div 
                className="w-full"
                style={{ 
                  height: '1px', 
                  backgroundColor: '#006b5b',
                  margin: '32px 0'
                }}
              />

              {/* Bloco de contato e botão */}
              <div className="space-y-6">
                <div className="space-y-3 text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', lineHeight: '1.6' }}>
                  <p><strong>Endereço:</strong> Rua João Ricardo, 24 – São Cristóvão – RJ</p>
                  <p><strong>Contato:</strong> (21) 99314-5009</p>
                  <p><strong>Telefone:</strong> (21) 2108-5800</p>
                  <p><strong>Celular:</strong> (24) 99868-7125 (Filial Petrópolis – Sobre Terra & Cia)</p>
                  <p><strong>E-mail:</strong> reservas@jeeptour.com.br</p>
                  <p><strong>Website:</strong> www.jeeptour.com.br</p>
                </div>
                
                <div className="pt-4">
                  <a
                    href="https://www.jeeptour.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-estrada-green hover:bg-estrada-green-light text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                    style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem' }}
                  >
                    ACESSE
                  </a>
                </div>
              </div>
            </div>
            
            {/* Coluna Direita - 470px */}
            <div className="flex justify-center" style={{ maxWidth: '470px' }}>
              <div className="relative w-full">
                <LazyImage
                  src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/pacote_jeeptour_caminhos_da_estrada_real_secretario_sebollas_caminho_novo_jeeptour2jpg.jpg"
                  alt="Jeep Tour Caminhos da Estrada Real"
                  className="w-full rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  style={{ 
                    aspectRatio: '16/9',
                    objectFit: 'cover',
                    border: '2px solid #006b5b'
                  }}
                  onClick={openModal}
                />
              </div>
            </div>
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
              src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/pacote_jeeptour_caminhos_da_estrada_real_secretario_sebollas_caminho_novo_jeeptour2jpg.jpg"
              alt="Jeep Tour Caminhos da Estrada Real - Ampliada"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default JeepTourPackagePage;