import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ParceirosPage: React.FC = () => {
  // Garantir que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partners = [
    {
      id: 1,
      name: 'Matriz Capital',
      logo: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/1b196931a23ff89e4317b2822c78ed20.webp'
    },
    {
      id: 2,
      name: 'Vinícola Estrada Real',
      logo: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/logo-estrada-real.jpg'
    },
    {
      id: 3,
      name: 'Terra Brasil Ecoturismo',
      logo: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/images.jpg'
    },
    {
      id: 4,
      name: 'Adventure Club',
      logo: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-22-de-jul.-de-2025-11_53_23.png'
    },
    {
      id: 5,
      name: 'Oikos Travel',
      logo: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-22-de-jul.-de-2025-11_53_23.png'
    },
    {
      id: 6,
      name: 'BH Convention & Visitors Bureau',
      logo: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/images.png'
    },
    {
      id: 7,
      name: 'Circuito Caminhos Verdes de MG',
      logo: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/logo.png'
    },
    {
      id: 8,
      name: 'Circuito Serra do Cipó',
      logo: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/circuito-serrado-cipo.jpg'
    },
    {
      id: 9,
      name: 'Circuito Trilha dos Inconfidentes',
      logo: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/images-1.png'
    },
    {
      id: 10,
      name: 'Fecomércio MG',
      logo: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/24-logo@mobile.png'
    },
    {
      id: 11,
      name: 'Governo de Minas',
      logo: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-1-e1753196234351.png'
    },
    {
      id: 12,
      name: 'Belotur',
      logo: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-22-de-jul.-de-2025-13_12_20-e1753200767419.png'
    },
    {
      id: 13,
      name: 'Abrasel',
      logo: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/abrasel-logotiposemal.png'
    },
    {
      id: 14,
      name: 'Instituto Cultural Vale',
      logo: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/images-2.png'
    },
    {
      id: 15,
      name: 'Circuito do Ouro',
      logo: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-22-de-jul.-de-2025-12_48_16.png'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="hero relative flex items-center justify-center"
        style={{
          height: '320px',
          backgroundImage: 'url("http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-22-de-jul.-de-2025-13_50_36.png")',
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
        
        <div 
          className="relative z-10 text-center text-white px-4"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
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
            <span className="md:hidden">PARCEIROS</span>
            <span className="hidden md:block" style={{ fontSize: '64px' }}>PARCEIROS</span>
          </h1>
          
          <h2 
            className="mb-4 italic"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              fontStyle: 'italic',
              fontSize: '22px',
              color: '#FFFFFFB3',
              lineHeight: '1.2'
            }}
          >
            <span className="md:hidden">UNINDO FORÇAS</span>
            <span className="hidden md:block" style={{ fontSize: '28px' }}>UNINDO FORÇAS</span>
          </h2>
          
          <div 
            className="text-right"
            style={{
              fontSize: '14px',
              color: '#FFFFFF99',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            REPRESENTATIVIDADE, SINERGIA E ALIANÇAS
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div 
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            padding: '0 16px'
          }}
        >
          <div 
            className="partners-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '32px'
            }}
          >
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="partner-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(12, 83, 64, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="logo-box">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                  />
                </div>
                <p 
                  className="caption"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '600',
                    color: '#22543D'
                  }}
                >
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CSS Styles */}
        <style jsx>{`
          .partner-card {
            aspect-ratio: 1/1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 24px;
            border: 2px solid #0C5340;
            border-radius: 6px;
            background-color: #FFFFFF;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          
          .logo-box {
            width: 100%;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .logo-box img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }
          
          .caption {
            margin-top: 12px;
            text-align: center;
            font-size: 16px;
            margin-bottom: 0;
          }
        `}</style>
      </section>

      <Footer />
    </div>
  );
};

export default ParceirosPage;