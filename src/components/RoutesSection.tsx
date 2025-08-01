import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RoutesSection() {
  const navigate = useNavigate();

  const routes = [
    { id: 'diamantes', name: 'Diamantes', link: '/caminho-diamantes' },
    { id: 'novo', name: 'Novo', link: '/caminho-novo' },
    { id: 'velho', name: 'Velho', link: '/caminho-velho' },
    { id: 'sabarabucu', name: 'Sabarabuçu', link: '/caminho-sabarabucu' }
  ];

  return (
    <>
      {/* Gradient transition from Passport section */}
      <div 
        className="w-full h-16"
        style={{
          background: 'linear-gradient(to bottom, #2A5D3B 0%, rgba(42, 93, 59, 0.8) 50%, rgba(42, 93, 59, 0.6) 100%)'
        }}
      />
      
      <section 
        className="relative w-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/Design-sem-nome-e1752769429120.jpg)',
          minHeight: '500px'
        }}
      >
        {/* Dark overlay for text readability */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}
        />
        
        {/* Decorative top border */}
        <div 
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #EDA10E 50%, transparent 100%)'
          }}
        />
        
        {/* Content */}
        <div 
          className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4"
          style={{ paddingTop: '60px', paddingBottom: '60px' }}
        >
          {/* Label with subtle background */}
          <div 
            className="mb-4 px-6 py-2 rounded-full"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <p 
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1rem',
                fontWeight: '500',
                color: '#FFFFFF',
                margin: 0
              }}
            >
              ACESSE
            </p>
          </div>
          
          {/* Main Title with enhanced styling */}
          <div className="mb-6">
            <h2 
              className="uppercase mb-4"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontSize: '3rem',
                fontWeight: '700',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                lineHeight: '1.1',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
              }}
            >
              ROTEIROS
            </h2>
            
            {/* Enhanced underline with gradient */}
            <div 
              className="mx-auto rounded-full"
              style={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #EDA10E 0%, #F5A623 100%)',
                boxShadow: '0 2px 8px rgba(237, 161, 14, 0.4)'
              }}
            />
          </div>
          
          {/* Subtitle with background */}
          <div 
            className="mb-8 px-8 py-3 rounded-full"
            style={{
              backgroundColor: 'rgba(237, 161, 14, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(237, 161, 14, 0.3)'
            }}
          >
            <p 
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#FFFFFF',
                margin: 0,
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
              }}
            >
              PLANILHADOS
            </p>
          </div>
          
          {/* Buttons Container with enhanced styling */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {/* Desktop: Single row */}
            <div className="hidden md:flex gap-4">
              {routes.map((route) => (
                <button
                  key={route.id}
                  className="route-button transition-all duration-300 transform hover:scale-105"
                  style={{
                    color: '#FFFFFF',
                    border: '2px solid rgba(255, 255, 255, 0.8)',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    padding: '18px 48px',
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    fontFamily: 'Poppins, sans-serif',
                    cursor: 'pointer',
                    margin: '0 12px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(237, 161, 14, 0.9)';
                    e.currentTarget.style.borderColor = '#EDA10E';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(237, 161, 14, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                  }}
                  onClick={() => navigate(`/roteiro-planilhado${route.link}`)}
                >
                  {route.name}
                </button>
              ))}
            </div>
            
            {/* Mobile: 2x2 Grid */}
            <div className="md:hidden grid grid-cols-2 gap-6 max-w-md">
              {routes.map((route) => (
                <button
                  key={route.id}
                  className="route-button transition-all duration-300 transform hover:scale-105"
                  style={{
                    color: '#FFFFFF',
                    border: '2px solid rgba(255, 255, 255, 0.8)',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    padding: '14px 28px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    fontFamily: 'Poppins, sans-serif',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(237, 161, 14, 0.9)';
                    e.currentTarget.style.borderColor = '#EDA10E';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(237, 161, 14, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                  }}
                  onClick={() => navigate(`/roteiro-planilhado${route.link}`)}
                >
                  {route.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative bottom border */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #EDA10E 50%, transparent 100%)'
          }}
        />
      </section>
      
      {/* Gradient transition to Products section */}
      <div 
        className="w-full h-16"
        style={{
          background: 'linear-gradient(to bottom, rgba(42, 93, 59, 0.6) 0%, rgba(42, 93, 59, 0.3) 50%, transparent 100%)'
        }}
      />
    </>
  );
}