import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* Logo & Description */}
          <div>
            <a href="/" className="text-2xl font-bold text-amber-400 flex items-center mb-4 hover:text-white transition-colors duration-200 cursor-pointer">
              <MapPin className="w-6 h-6 mr-2" />
              Estrada Real
            </a>
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
              <a href="/pacotes" className="text-amber-400 hover:text-white transition-colors duration-200 cursor-pointer">
                Pacotes
              </a>
            </h3>
            
            <h3 className="text-lg font-semibold mb-3 mt-4 text-amber-400">
              <a href="/servicos/equipamentos-de-apoio" className="text-amber-400 hover:text-white transition-colors duration-200 cursor-pointer">
                Equipamentos de Apoio
              </a>
            </h3>
            
            <h3 className="text-lg font-semibold mb-3 mt-4 text-amber-400">
              <a href="/passaporte" className="text-amber-400 hover:text-white transition-colors duration-200 cursor-pointer">
                Passaporte
              </a>
            </h3>
            
            <h3 className="text-lg font-semibold mb-3 mt-4 text-amber-400">
              <a href="https://mkt.institutoestradareal.com.br/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-white transition-colors duration-200 cursor-pointer">
                Seja um parceiro
              </a>
            </h3>
            
            <h3 className="text-lg font-semibold mb-3 mt-4 text-amber-400">
              <button 
                className="text-amber-400 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 font-semibold text-lg"
                onClick={() => {
                  // Navegar para a seção produtos na home
                  window.location.href = '/#produtos-estrada-real';
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
              <li><a href="/caminho-diamantes" className="text-gray-300 hover:text-white transition-colors duration-200">Caminho dos Diamantes</a></li>
              <li><a href="/caminho-novo" className="text-gray-300 hover:text-white transition-colors duration-200">Caminho Novo</a></li>
              <li><a href="/caminho-velho" className="text-gray-300 hover:text-white transition-colors duration-200">Caminho Velho</a></li>
              <li><a href="/caminho-sabarabucu" className="text-gray-300 hover:text-white transition-colors duration-200">Caminho de Sabarabuçu</a></li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-3 mt-6 text-amber-400">
              <a href="/a-estrada-real" className="text-amber-400 hover:text-white transition-colors duration-200 cursor-pointer">
                A Estrada Real
              </a>
            </h3>
            <ul className="space-y-1">
              <li><a href="/historia" className="text-gray-300 hover:text-white transition-colors duration-200">História</a></li>
              <li><a href="/gastronomia" className="text-gray-300 hover:text-white transition-colors duration-200">Gastronomia</a></li>
              <li><a href="/natureza" className="text-gray-300 hover:text-white transition-colors duration-200">Natureza</a></li>
            </ul>
          </div>
          
          {/* Agenda & Roteiros Planilhados */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-amber-400">
              <a href="/agenda/novo-evento" className="text-amber-400 hover:text-white transition-colors duration-200 cursor-pointer">
                Agenda
              </a>
            </h3>
            <ul className="space-y-1">
              <li><a href="/agenda/cadastrar-evento" className="text-gray-300 hover:text-white transition-colors duration-200">Novo Evento</a></li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-3 mt-4 text-amber-400">Roteiros Planilhados</h3>
            <ul className="space-y-1">
              <li><a href="/roteiro-planilhado/caminho-diamantes" className="text-gray-300 hover:text-white transition-colors duration-200">Diamantes</a></li>
              <li><a href="/roteiro-planilhado/caminho-novo" className="text-gray-300 hover:text-white transition-colors duration-200">Novo</a></li>
              <li><a href="/roteiro-planilhado/caminho-velho" className="text-gray-300 hover:text-white transition-colors duration-200">Velho</a></li>
              <li><a href="/roteiro-planilhado/caminho-sabarabucu" className="text-gray-300 hover:text-white transition-colors duration-200">Sabarabuçu</a></li>
            </ul>
          </div>
          
          {/* Services & Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-amber-400">
              <a href="/empreendimento" className="text-amber-400 hover:text-white transition-colors duration-200 cursor-pointer">
                Cadastre seu empreendimento
              </a>
            </h3>
            <ul className="space-y-2">
              <li><a href="/empreendimento/parceiros" className="text-gray-300 hover:text-white transition-colors duration-200">Parceiros</a></li>
              <li><a href="/destaques" className="text-gray-300 hover:text-white transition-colors duration-200">Destaques</a></li>
              <li><a href="/contato" className="text-gray-300 hover:text-white transition-colors duration-200">Contato</a></li>
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