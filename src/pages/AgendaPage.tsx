import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AgendaPage: React.FC = () => {
  const [filterText, setFilterText] = useState('');
  const [filterDate, setFilterDate] = useState('');

  // Garantir que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCadastrarEvento = () => {
    window.location.href = '/agenda/cadastrar-evento';
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="hero relative flex flex-col items-center justify-center gap-4"
        style={{
          height: '320px',
          backgroundImage: 'url(http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/homem-sendo-dj-na-festa-tiro-medio-scaled.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.80)' }}
        />
        
        {/* Content */}
        <div className="text-center text-white px-4">
          {/* Mobile: 320px, Desktop: 420px */}
          <style>
            {`
              @media (min-width: 768px) {
                .hero {
                  height: 420px !important;
                }
              }
            `}
          </style>
          
          <h1 
            className="relative z-10 mb-4 uppercase"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '700',
              fontSize: '48px',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              lineHeight: '1.1'
            }}
          >
            <span className="md:hidden">AGENDA</span>
            <span className="hidden md:block" style={{ fontSize: '64px' }}>AGENDA</span>
          </h1>
          <h2 
            className="relative z-10 uppercase"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
             fontWeight: '600',
             fontStyle: 'italic',
              fontSize: '22px',
             color: '#FFFFFFB0',
              textTransform: 'uppercase',
              lineHeight: '1.2'
            }}
          >
            <span className="md:hidden">FIQUE POR DENTRO</span>
            <span className="hidden md:block" style={{ fontSize: '28px' }}>FIQUE POR DENTRO</span>
          </h2>
          
         {/* Frase centralizada */}
          <div 
           className="relative z-10 mt-4 text-center"
            style={{
             fontSize: '16px',
             color: '#FFFFFF99',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            VIVA, EXPERIMENTE, DESCUBRA
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-[960px] mx-auto px-4">
        
        {/* Seção Filtros */}
        <section className="filters" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
          <div className="grid grid-cols-1 gap-6" style={{ gridTemplateColumns: '1fr', '@media (min-width: 768px)': { gridTemplateColumns: '1fr 260px' } }}>
            <style>
              {`
                @media (min-width: 768px) {
                  .filters .grid {
                    grid-template-columns: 1fr 260px;
                  }
                }
              `}
            </style>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Filtro por texto */}
            <div>
              <input
                type="text"
                placeholder="Digite para filtrar…"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                style={{
                  width: '100%',
                  height: '56px',
                  border: '2px solid #22543D',
                  borderRadius: '8px',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>
            
            {/* Filtro por data */}
            <div>
              <input
                type="date"
                placeholder="Selecione uma data"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                style={{
                  width: '100%',
                  height: '56px',
                  border: '2px solid #22543D',
                  borderRadius: '8px',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>
            </div>
          </div>
        </section>

        {/* Seção Cadastro */}
        <section className="cadastro text-center" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
          <h3 
            className="mb-6"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '24px',
              fontWeight: '700',
              color: '#22543D'
            }}
          >
            Cadastre seu Evento
          </h3>
          <p 
            className="mb-8 mx-auto"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              color: '#444444',
              lineHeight: '1.6',
              maxWidth: '660px'
            }}
          >
           Envie as informações do evento para análise, se aprovado, divulgaremos no portal e no app Estrada Real.
          </p>
          <button
            onClick={handleCadastrarEvento}
            className="transition-colors duration-200"
            style={{
              backgroundColor: '#F28C1D',
              color: '#FFFFFF',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: '600',
              width: '260px',
              height: '56px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#d97706';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F28C1D';
            }}
          >
            Cadastrar meu evento
          </button>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default AgendaPage;