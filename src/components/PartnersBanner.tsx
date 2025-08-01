import React from 'react';

const PartnersBanner: React.FC = () => {
  const handlePartnerClick = () => {
    window.location.href = 'https://mkt.institutoestradareal.com.br/';
  };

  return (
    <section 
      id="parceiro"
      className="relative w-full"
      style={{
        backgroundImage: 'url(http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/unnamed.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'rgba(0,0,0,.75)'
        }}
      />
      
      {/* Content Container */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-12 md:py-16"
        style={{ 
          paddingTop: '48px',
          paddingBottom: '48px'
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* H2 Title */}
          <h2 
            className="text-white mb-4"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '800',
              fontSize: '36px',
              lineHeight: '1.1',
              whiteSpace: 'nowrap'
            }}
          >
            <span 
              className="md:hidden"
              style={{ fontSize: '36px' }}
            >
              Seja Parceiro da Estrada Real
            </span>
            <span 
              className="hidden md:block"
              style={{ fontSize: '48px' }}
            >
              Seja Parceiro da Estrada Real
            </span>
          </h2>
          
          {/* H3 Sub-headline */}
          <h3 
            className="text-white mx-auto mb-4"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '500',
              fontSize: '20px',
              lineHeight: '1.4',
              maxWidth: '820px'
            }}
          >
              Destaque o seu negócio na maior rota turística<br />
              do Brasil e atraia mais turistas.
          </h3>
          
          {/* Benefits - Roteiro Style Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="hidden md:flex gap-4">
              <span
                className="transition-all duration-300"
                style={{
                  color: '#FFFFFF',
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '14px 32px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  fontFamily: 'Poppins, sans-serif',
                  margin: '0 8px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                  display: 'inline-block'
                }}
              >
                🌟 Visibilidade nos canais oficiais
              </span>
              <span
                className="transition-all duration-300"
                style={{
                  color: '#FFFFFF',
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '14px 32px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  fontFamily: 'Poppins, sans-serif',
                  margin: '0 8px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                  display: 'inline-block'
                }}
              >
                🏷️ Selo de Parceiro Oficial
              </span>
              <span
                className="transition-all duration-300"
                style={{
                  color: '#FFFFFF',
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '14px 32px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  fontFamily: 'Poppins, sans-serif',
                  margin: '0 8px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                  display: 'inline-block'
                }}
              >
                🧳 Turistas procurando pelo seu negócio
              </span>
            </div>
            
            {/* Mobile: Stacked */}
            <div className="md:hidden flex flex-col gap-3 max-w-sm">
              <span
                className="transition-all duration-300"
                style={{
                  color: '#FFFFFF',
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '12px 24px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  fontFamily: 'Poppins, sans-serif',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                  display: 'block',
                  textAlign: 'center'
                }}
              >
                🌟 Visibilidade nos canais oficiais
              </span>
              <span
                className="transition-all duration-300"
                style={{
                  color: '#FFFFFF',
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '12px 24px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  fontFamily: 'Poppins, sans-serif',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                  display: 'block',
                  textAlign: 'center'
                }}
              >
                🏷️ Selo de Parceiro Oficial
              </span>
              <span
                className="transition-all duration-300"
                style={{
                  color: '#FFFFFF',
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '12px 24px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  fontFamily: 'Poppins, sans-serif',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                  display: 'block',
                  textAlign: 'center'
                }}
              >
                🧳 Turistas procurando pelo seu negócio
              </span>
            </div>
          </div>
          
          {/* CTA Button */}
          <button
            onClick={handlePartnerClick}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg"
          >
            Quero ser parceiro
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersBanner;