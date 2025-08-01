import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import LazyImage from './LazyImage';

interface CaminhoNovoCitiesListProps {
  title: string;
  subtitle: string;
  cities: string[];
}

const CaminhoNovoCitiesList: React.FC<CaminhoNovoCitiesListProps> = ({ title, subtitle, cities }) => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  
  // Filter cities based on search term
  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredCities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCities = filteredCities.slice(startIndex, endIndex);

  // Reset to page 1 when search term changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Aplicar filtro automático baseado no parâmetro de URL
  React.useEffect(() => {
    const cidadeParam = searchParams.get('cidade');
    if (cidadeParam && cities.includes(cidadeParam)) {
      setSearchTerm(cidadeParam);
      
      // Scroll para o card da cidade após um pequeno delay
      setTimeout(() => {
        const cityCards = document.querySelectorAll('[data-city-name]');
        const targetCard = Array.from(cityCards).find(card => 
          card.getAttribute('data-city-name')?.toLowerCase() === cidadeParam.toLowerCase()
        );
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          
          // Adicionar destaque temporário ao card
          const cardElement = targetCard as HTMLElement;
          cardElement.style.transform = 'scale(1.05)';
          cardElement.style.boxShadow = '0 8px 25px rgba(237, 161, 14, 0.4)';
          cardElement.style.transition = 'all 0.3s ease';
          
          // Remover destaque após 3 segundos
          setTimeout(() => {
            cardElement.style.transform = '';
            cardElement.style.boxShadow = '';
          }, 3000);
        }
      }, 500);
    }
  }, [searchParams, cities]);

  const generateSlug = (cityName: string) => {
    return cityName
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .replace(/-+/g, '-') // Remove hífens duplicados
      .trim();
  };

  // Single default image for all city cards
  const defaultCityImage = 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/paisagem-de-montanhas-cenicas-depois-da-chuva-carpatos-da-ucrania-2-scaled.jpg';

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of cities section
    document.getElementById('cities-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className="transition-colors duration-200"
          style={{
            padding: '8px 12px',
            margin: '0 2px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: i === currentPage ? '#1E4620' : '#E5E5E5',
            color: i === currentPage ? '#FFFFFF' : '#666666',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.875rem',
            fontWeight: i === currentPage ? '600' : '400',
            cursor: 'pointer'
          }}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <section className="bg-white" style={{ padding: '48px 24px' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 
            className="mb-4 text-left md:text-left"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '600',
              fontSize: '2rem',
              color: '#1E4620',
              textAlign: 'center'
            }}
          >
            <span className="md:hidden block text-center">{title}</span>
            <span className="hidden md:block text-left">{title}</span>
          </h2>
          
          <p 
            className="text-center md:text-left"
            style={{ 
              fontSize: '1rem',
              color: '#333333',
              fontFamily: 'Poppins, sans-serif',
              maxWidth: '800px',
              lineHeight: '1.6',
              marginBottom: '24px',
              textAlign: 'center',
              fontStyle: 'italic'
            }}
          >
            <span className="md:hidden block text-center">{subtitle}</span>
            <span className="hidden md:block text-left">{subtitle}</span>
          </p>
          
          {/* City Selection Dropdown */}
          <div 
            className="flex justify-center"
            style={{ marginTop: '16px', marginBottom: '24px' }}
          >
            <div 
              className="relative w-full md:max-w-[480px]"
            >
              <div className="relative">
                <select
                  value={searchTerm}
                  onChange={(e) => {
                    const selectedCity = e.target.value;
                    setSearchTerm(selectedCity);
                    
                    // Scroll to selected city card
                    if (selectedCity) {
                      setTimeout(() => {
                        const cityCards = document.querySelectorAll('[data-city-name]');
                        const targetCard = Array.from(cityCards).find(card => 
                          card.getAttribute('data-city-name')?.toLowerCase() === selectedCity.toLowerCase()
                        );
                        if (targetCard) {
                          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                      }, 100);
                    }
                  }}
                  className="w-full"
                  style={{
                    paddingLeft: '12px',
                    paddingRight: '12px',
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    border: '1px solid #CED4DA',
                    borderRadius: '4px',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1rem',
                    color: '#495057',
                    outline: 'none',
                    appearance: 'none'
                  }}
                >
                  <option value="">Selecione uma cidade...</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))}
                </select>
                <ChevronDown 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                  style={{ 
                    width: '16px', 
                    height: '16px', 
                    color: '#1E4620' 
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Cities Grid */}
        <div id="cities-grid" className="mb-8">
          {currentCities.length === 0 ? (
            <div 
              className="text-center py-12"
              style={{
                color: '#666666',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1rem'
              }}
            >
              Nenhuma cidade encontrada para "{searchTerm}". Tente outro termo de busca.
            </div>
          ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {currentCities.map((city, index) => (
              <div
                key={index}
                className="bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                style={{
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  overflow: 'hidden'
                }}
                data-city-name={city}
                onClick={() => window.location.href = `/caminhos/novo/${generateSlug(city)}`}
              >
                {/* City Image */}
                <div style={{ 
                  width: '100%', 
                  height: '200px', 
                  overflow: 'hidden',
                  margin: 0,
                  padding: 0
                }}>
                  <LazyImage
                    src={defaultCityImage}
                    alt={city}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* City Info */}
                <div style={{ padding: '16px' }}>
                  {/* City Name */}
                  <h3 
                    style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: '#1E4620',
                      margin: 0,
                      marginBottom: '8px',
                      textAlign: 'left'
                    }}
                  >
                    {city}
                  </h3>
                  
                  {/* Link - Centered below title */}
                  <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    <a
                      href={`/caminhos/novo/${generateSlug(city)}`}
                      className="transition-colors duration-200"
                      style={{
                        color: '#EDA10E',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#c59405';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#EDA10E';
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Conhecer →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
        
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              disabled={currentPage === 1}
              className="flex items-center gap-2 transition-colors duration-200"
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '4px',
                backgroundColor: currentPage === 1 ? '#E5E5E5' : '#1E4620',
                color: currentPage === 1 ? '#999999' : '#FFFFFF',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
              }}
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </button>
            
            {/* Page Numbers */}
            <div className="flex items-center">
              {renderPageNumbers()}
            </div>
            
            {/* Next Button */}
            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 transition-colors duration-200"
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '4px',
                backgroundColor: currentPage === totalPages ? '#E5E5E5' : '#1E4620',
                color: currentPage === totalPages ? '#999999' : '#FFFFFF',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
              }}
            >
              Próxima
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
        
        {/* Footer Note */}
        <p 
          className="text-center mt-6"
          style={{ 
            fontSize: '0.875rem',
            color: '#666666',
            fontFamily: 'Poppins, sans-serif',
            fontStyle: 'italic'
          }}
        >
          Clique no card ou no link "Conhecer →" para ver detalhes e roteiros da cidade.
        </p>
      </div>
    </section>
  );
};

export default CaminhoNovoCitiesList;