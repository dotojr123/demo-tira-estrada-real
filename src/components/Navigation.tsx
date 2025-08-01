import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import LazyImage from './LazyImage';

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEstradaRealDropdownOpen, setIsEstradaRealDropdownOpen] = useState(false);
  const [isCaminhosDropdownOpen, setIsCaminhosDropdownOpen] = useState(false);
  const [isRoteirosDropdownOpen, setIsRoteirosDropdownOpen] = useState(false);
  const [mobileEstradaRealOpen, setMobileEstradaRealOpen] = useState(false);
  const [mobileCaminhosOpen, setMobileCaminhosOpen] = useState(false);
  const [mobileRoteirosOpen, setMobileRoteirosOpen] = useState(false);

  const estradaRealSubmenuItems = [
    { name: 'História', path: '/historia' },
    { name: 'Gastronomia', path: '/gastronomia' },
    { name: 'Natureza', path: '/natureza' }
  ];

  const caminhosSubmenuItems = [
    { name: 'Caminho Novo', path: '/caminho-novo' },
    { name: 'Caminho Velho', path: '/caminho-velho' },
    { name: 'Caminho dos Diamantes', path: '/caminho-diamantes' },
    { name: 'Caminho do Sabarabuçu', path: '/caminho-sabarabucu' }
  ];

  const roteirosSubmenuItems = [
    { name: 'Diamantes', path: '/roteiro-planilhado/caminho-diamantes' },
    { name: 'Novo', path: '/roteiro-planilhado/caminho-novo' },
    { name: 'Velho', path: '/roteiro-planilhado/caminho-velho' },
    { name: 'Sabarabuçu', path: '/roteiro-planilhado/caminho-sabarabucu' }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          {/* Logo and Institutional Text */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-6 flex-1">
            <div 
              className="flex items-center gap-2 sm:gap-3 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <LazyImage
                src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/Logotipo-Marketing-Digital-Moderno-Azul-e-Amarelo-Post-para-Instagram-1.png"
                alt="Instituto Estrada Real"
                className="h-16 w-auto object-contain sm:h-20 md:h-24"
              />
              <div className="block">
                <div 
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-estrada-green"
                  style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.1' }}
                >
                  Estrada Real
                </div>
                <div 
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 italic"
                  style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.1' }}
                >
                  Uma estrada, seu destino
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-estrada-green hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          
          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-6 ml-6">
          <Link
            to="/"
            className={`text-lg font-medium transition-colors duration-200 ${
              location.pathname === '/' 
                ? 'text-amber-600' 
                : 'text-gray-600 hover:text-estrada-green'
            }`}
          >
            Início
          </Link>
          
          {/* A Estrada Real with Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsEstradaRealDropdownOpen(true)}
            onMouseLeave={() => setIsEstradaRealDropdownOpen(false)}
          >
            <Link
              to="/a-estrada-real"
              className={`flex items-center gap-1 text-lg font-medium transition-colors duration-200 ${
                location.pathname === '/a-estrada-real' || 
                location.pathname === '/historia' || 
                location.pathname === '/gastronomia' || 
                location.pathname === '/natureza'
                  ? 'text-amber-600'
                  : 'text-gray-600 hover:text-estrada-green'
              }`}
            >
              A Estrada Real
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                isEstradaRealDropdownOpen ? 'rotate-180' : ''
              }`} />
            </Link>
            
            {/* Dropdown Menu */}
            {isEstradaRealDropdownOpen && (
              <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                {estradaRealSubmenuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-amber-600 bg-amber-50'
                        : 'text-gray-700 hover:text-estrada-green hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Caminhos with Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsCaminhosDropdownOpen(true)}
            onMouseLeave={() => setIsCaminhosDropdownOpen(false)}
          >
            <Link
              to="/#caminhos"
              className={`flex items-center gap-1 text-lg font-medium transition-colors duration-200 ${
                location.pathname === '/caminho-novo' || 
                location.pathname === '/caminho-velho' || 
                location.pathname === '/caminho-diamantes' || 
                location.pathname === '/caminho-sabarabucu'
                  ? 'text-amber-600'
                  : 'text-gray-600 hover:text-estrada-green'
              }`}
              onClick={(e) => {
                // Se já estamos na página inicial, fazer scroll suave
                if (location.pathname === '/') {
                  e.preventDefault();
                  const caminhosSection = document.getElementById('caminhos');
                  if (caminhosSection) {
                    caminhosSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              Caminhos
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                isCaminhosDropdownOpen ? 'rotate-180' : ''
              }`} />
            </Link>
            
            {/* Dropdown Menu */}
            {isCaminhosDropdownOpen && (
              <div className="absolute top-full left-0 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                {caminhosSubmenuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-amber-600 bg-amber-50'
                        : 'text-gray-700 hover:text-estrada-green hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Roteiros Planilhados with Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsRoteirosDropdownOpen(true)}
            onMouseLeave={() => setIsRoteirosDropdownOpen(false)}
          >
            <span
              className={`flex items-center gap-1 text-lg font-medium transition-colors duration-200 cursor-pointer ${
                location.pathname.startsWith('/roteiro-planilhado/')
                  ? 'text-amber-600'
                  : 'text-gray-600 hover:text-estrada-green'
              }`}
            >
              Roteiros Planilhados
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                isRoteirosDropdownOpen ? 'rotate-180' : ''
              }`} />
            </span>
            
            {/* Dropdown Menu */}
            {isRoteirosDropdownOpen && (
              <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                {roteirosSubmenuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-amber-600 bg-amber-50'
                        : 'text-gray-700 hover:text-estrada-green hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Passaporte */}
          <Link
            to="/passaporte"
            className={`text-lg font-medium transition-colors duration-200 ${
              location.pathname === '/passaporte' 
                ? 'text-amber-600' 
                : 'text-gray-600 hover:text-estrada-green'
            }`}
          >
            Passaporte
          </Link>
          
          {/* Seja um parceiro */}
          <a
            href="https://mkt.institutoestradareal.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium transition-colors duration-200 text-gray-600 hover:text-estrada-green"
          >
            Seja um parceiro
          </a>
          
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              
              {/* Início */}
              <Link
                to="/"
                className={`block text-lg font-medium transition-colors duration-200 ${
                  location.pathname === '/' 
                    ? 'text-amber-600' 
                    : 'text-gray-600 hover:text-estrada-green'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </Link>

              {/* A Estrada Real with Mobile Dropdown */}
              <div>
                <button
                  className={`flex items-center justify-between w-full text-lg font-medium transition-colors duration-200 ${
                    location.pathname === '/a-estrada-real' || 
                    location.pathname === '/historia' || 
                    location.pathname === '/gastronomia' || 
                    location.pathname === '/natureza'
                      ? 'text-amber-600'
                      : 'text-gray-600 hover:text-estrada-green'
                  }`}
                  onClick={() => setMobileEstradaRealOpen(!mobileEstradaRealOpen)}
                >
                  A Estrada Real
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    mobileEstradaRealOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {mobileEstradaRealOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      to="/a-estrada-real"
                      className="block text-base text-gray-600 hover:text-estrada-green transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Ver Tudo
                    </Link>
                    {estradaRealSubmenuItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block text-base transition-colors duration-200 ${
                          location.pathname === item.path
                            ? 'text-amber-600'
                            : 'text-gray-600 hover:text-estrada-green'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Caminhos with Mobile Dropdown */}
              <div>
                <button
                  className={`flex items-center justify-between w-full text-lg font-medium transition-colors duration-200 ${
                    location.pathname === '/caminho-novo' || 
                    location.pathname === '/caminho-velho' || 
                    location.pathname === '/caminho-diamantes' || 
                    location.pathname === '/caminho-sabarabucu'
                      ? 'text-amber-600'
                      : 'text-gray-600 hover:text-estrada-green'
                  }`}
                  onClick={() => setMobileCaminhosOpen(!mobileCaminhosOpen)}
                >
                  Caminhos
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    mobileCaminhosOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {mobileCaminhosOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {caminhosSubmenuItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block text-base transition-colors duration-200 ${
                          location.pathname === item.path
                            ? 'text-amber-600'
                            : 'text-gray-600 hover:text-estrada-green'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Roteiros Planilhados with Mobile Dropdown */}
              <div>
                <button
                  className={`flex items-center justify-between w-full text-lg font-medium transition-colors duration-200 ${
                    location.pathname.startsWith('/roteiro-planilhado/')
                      ? 'text-amber-600'
                      : 'text-gray-600 hover:text-estrada-green'
                  }`}
                  onClick={() => setMobileRoteirosOpen(!mobileRoteirosOpen)}
                >
                  Roteiros Planilhados
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    mobileRoteirosOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {mobileRoteirosOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {roteirosSubmenuItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block text-base transition-colors duration-200 ${
                          location.pathname === item.path
                            ? 'text-amber-600'
                            : 'text-gray-600 hover:text-estrada-green'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Passaporte */}
              <Link
                to="/passaporte"
                className={`block text-lg font-medium transition-colors duration-200 ${
                  location.pathname === '/passaporte' 
                    ? 'text-amber-600' 
                    : 'text-gray-600 hover:text-estrada-green'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Passaporte
              </Link>

              {/* Seja um parceiro */}
              <a
                href="https://mkt.institutoestradareal.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-medium transition-colors duration-200 text-gray-600 hover:text-estrada-green"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Seja um parceiro
              </a>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation