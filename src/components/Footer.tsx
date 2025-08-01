import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <footer className="bg-green-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* Logo & Description */}
          <div>
            <button 
              onClick={() => handleNavigation('/')}
              className="text-2xl font-bold text-amber-400 flex items-center mb-4 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
            >
              <MapPin className="w-6 h-6 mr-2" />
              Estrada Real
            </button>
            <p className="text-gray-300 leading-relaxed">
              Explore os caminhos históricos de Minas Gerais e descubra as riquezas culturais 
              e naturais que o Brasil tem a oferecer.
            </p>
            
            <h3 className="text-lg font-semibold mb-3 mt-6 text-amber-400">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-amber-400" />
                <a href="mailto:contato@estradareal.org.br" className="text-gray-300 hover:text-white transition-colors duration-200">
                  contato@estradareal.org.br
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-amber-400" />
                <a href="tel:+553132345678" className="text-gray-300 hover:text-white transition-colors duration-200">
                  (31) 3234-5678
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-amber-400">
              <button 
                onClick={() => handleNavigation('/pacotes')}
                className="text-amber-400 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 font-semibold text-lg"
              >
                Pacotes
              </button>
            </h3>
            
            <h3 className="text-lg font-semibold mb-3 mt-4 text-amber-400">
              <button 
                onClick={() => handleNavigation('/servicos/equipamentos-de-apoio')}
                className="text-amber-400 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 font-semibold text-lg"
              >
                Equipamentos de Apoio
              </button>
            </h3>
            
            <h3 className="text-lg font-semibold mb-3 mt-4 text-amber-400">
              <button 
                onClick={() => handleNavigation('/passaporte')}
                className="text-amber-400 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 font-semibold text-lg"
              >
                Passaporte
              </button>
            </h3>
            
            <h3 className="text-lg font-semibold mb-3 mt-4 text-amber-400">
              <button 
                onClick={() => handleExternalLink('https://mkt.institutoestradareal.com.br/')}
                className="text-amber-400 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 font-semibold text-lg"
              >
                Seja um parceiro
              </button>
            </h3>
            
            <h3 className="text-lg font-semibold mb-3 mt-4 text-amber-400">
              <button 
                className="text-amber-400 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 font-semibold text-lg"
                onClick={() => {
                  // Navegar para a seção produtos na home
                  navigate('/');
                  setTimeout(() => {
                    const element = document.getElementById('produtos-estrada-real');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
              >
                Produtos licenciados
              </button>
            </h3>
          </div>
          
          {/* Paths & A Estrada Real */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-amber-400">Caminhos</h3>
            <ul className="space-y-1">
              <li>
                <button 
                  onClick={() => handleNavigation('/caminho-diamantes')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none p-0 text-left"
                >
                  Caminho dos Diamantes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/caminho-novo')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none p-0 text-left"
                >
                  Caminho Novo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/caminho-velho')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none p-0 text-left"
                >
                  Caminho Velho
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/caminho-sabarabucu')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none p-0 text-left"
                >
                  Caminho de Sabarabuçu
                </button>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-3 mt-6 text-amber-400">
              <button 
                onClick={() => handleNavigation('/a-estrada-real')}
                className="text-amber-400 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 font-semibold text-lg"
              >
                A Estrada Real
              </button>
            </h3>
            <ul className="space-y-1">
              <li>
                <button 
                  onClick={() => handleNavigation('/historia')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none p-0 text-left"
                >
                  História
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/gastronomia')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none p-0 text-left"
                >
                  Gastronomia
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/natureza')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none p-0 text-left"
                >
                  Natureza
                </button>
              </li>
            </ul>
          </div>
          
          {/* Agenda & Roteiros Planilhados */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-amber-400">
              <button 
                onClick={() => handleNavigation('/agenda/novo-evento')}
                className="text-amber-400 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 font-semibold text-lg"
              >
                Agenda
              </button>
            </h3>
            <ul className="space-y-1">
              <li>
                <button 
                  onClick={() => handleNavigation('/agenda/cadastrar-evento')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none p-0 text-left"
                >
                  Novo Evento
                </button>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-3 mt-4 text-amber-400">Roteiros Planilhados</h3>
            <ul className="space-y-1">
              <li>
                <button 
                  onClick={() => handleNavigation('/roteiro-planilhado/caminho-diamantes')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none p-0 text-left"
                >
                  Diamantes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/roteiro-planilhado/caminho-novo')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none p-0 text-left"
                >
                  Novo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/roteiro-planilhado/caminho-velho')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none p-0 text-left"
                >
                  Velho
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/roteiro-planilhado/caminho-sabarabucu')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none p-0 text-left"
                >
                  Sabarabuçu
                </button>
              </li>
            </ul>
          </div>
          
          {/* Services & Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-amber-400">
              <button 
                onClick={() => handleNavigation('/empreendimento')}
                className="text-amber-400 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 font-semibold text-lg"
              >
                Cadastre seu empreendimento
              </button>
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('/empreendimento/parceiros')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none p-0 text-left"
                >
                  Parceiros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/destaques')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none p-0 text-left"
                >
                  Destaques
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/contato')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none p-0 text-left"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Estrada Real. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;