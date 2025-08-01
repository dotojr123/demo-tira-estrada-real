import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const EmpreendimentoPage: React.FC = () => {
  const [cnpj, setCnpj] = useState('');

  // Garantir que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCnpjSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirecionar para página de cadastro
    window.location.href = '/empreendimento/cadastro';
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:estradareal@estradareal.org.br';
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="hero relative flex flex-col items-center justify-center gap-8"
        style={{
          height: '320px',
          backgroundImage: 'url("http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/interior-restaurante-scaled.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.80)' }}
        />
        
        <style>
          {`
            @media (min-width: 768px) {
              .hero {
                height: 420px !important;
              }
            }
          `}
        </style>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 
            className="mb-4"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '800',
              fontSize: '48px',
              color: '#FFFFFF',
              lineHeight: '1.1'
            }}
          >
            <span className="md:hidden">CADASTRE</span>
            <span className="hidden md:block" style={{ fontSize: '64px' }}>CADASTRE</span>
          </h1>
          
          <h2 
            className="italic"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              fontStyle: 'italic',
              fontSize: '22px',
              color: '#FFFFFFB3',
              lineHeight: '1.2'
            }}
          >
            <span className="md:hidden">SEU EMPREENDIMENTO</span>
            <span className="hidden md:block" style={{ fontSize: '28px' }}>SEU EMPREENDIMENTO</span>
          </h2>
        </div>
      </section>

      {/* Main Content */}
      <section className="forme py-16 px-4">
        <div className="max-w-[960px] mx-auto">
          <div 
            className="grid gap-8 md:gap-12"
            style={{
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '48px'
            }}
          >
            <style>
              {`
                @media (max-width: 768px) {
                  .forme .grid {
                    grid-template-columns: 1fr !important;
                    gap: 32px !important;
                  }
                }
              `}
            </style>
            
            {/* Bloco 1 - Formulário CNPJ */}
            <div 
              className="bg-white rounded-lg"
              style={{
                borderBottom: '4px solid #22543D',
                borderRadius: '6px',
                padding: '32px'
              }}
            >
              <h3 
                className="mb-6"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#22543D'
                }}
              >
                Informe o CNPJ da sua empresa
              </h3>
              
              <form onSubmit={handleCnpjSubmit}>
                <div className="mb-6">
                  <label 
                    className="block mb-2"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#22543D'
                    }}
                  >
                    CNPJ*
                  </label>
                  <input
                    type="text"
                    value={cnpj}
                    onChange={(e) => setCnpj(e.target.value)}
                    placeholder="00.000.000/0000-00"
                    required
                    style={{
                      width: '100%',
                      height: '48px',
                      border: '2px solid #22543D',
                      borderRadius: '6px',
                      paddingLeft: '16px',
                      paddingRight: '16px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary transition-colors duration-200"
                  style={{
                    width: '100%',
                    height: '48px',
                    backgroundColor: '#F28C1D',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '6px',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#d97706';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F28C1D';
                  }}
                >
                  COMEÇAR
                </button>
              </form>
            </div>

            {/* Bloco 2 - Fale Conosco */}
            <div 
              className="bg-white rounded-lg"
              style={{
                borderBottom: '4px solid #22543D',
                borderRadius: '6px',
                padding: '32px'
              }}
            >
              <h3 
                className="mb-6"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#22543D'
                }}
              >
                FALE CONOSCO
              </h3>
              
              <p 
                className="mb-4"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  color: '#444444',
                  lineHeight: '1.6'
                }}
              >
                Um canal direto entre você e a Estrada Real.
              </p>
              
              <p 
                className="mb-8"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  color: '#444444',
                  lineHeight: '1.6'
                }}
              >
                Tem alguma dúvida ou sugestão? Entre em contato conosco.
              </p>
              
              <button
               onClick={() => window.location.href = '/contato'}
                className="btn-outline transition-all duration-200"
                style={{
                  width: '160px',
                  height: '48px',
                  border: '2px solid #22543D',
                  backgroundColor: 'transparent',
                  color: '#22543D',
                  borderRadius: '6px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(34, 84, 61, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                CLIQUE AQUI
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmpreendimentoPage;