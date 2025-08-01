import React from 'react';

const DownloadsSection: React.FC = () => {
  const handleMapDownload = () => {
    // Implementar lógica de download do mapa
    console.log('Download do mapa da Estrada Real');
  };

  const handlePassportPointsDownload = () => {
    // Implementar lógica de download dos pontos de retirada
    console.log('Download dos pontos de retirada do passaporte');
  };

  return (
    <section 
      className="w-full"
      style={{ 
        backgroundColor: '#FFFFFF',
        paddingTop: '64px',
        paddingBottom: '64px'
      }}
    >
      <div 
        className="px-4"
        style={{ 
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* Título principal */}
        <h2 
          className="text-center"
          style={{ 
            fontFamily: 'Poppins, sans-serif',
            fontSize: '2rem',
            fontWeight: '600',
            color: '#DEA31A',
            textAlign: 'center',
            marginBottom: '8px'
          }}
        >
          DOWNLOADS
        </h2>
        
        {/* Subtítulo */}
        <p 
          className="text-center mx-auto"
          style={{ 
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1rem',
            fontWeight: '400',
            color: '#DEA31A',
            textAlign: 'center',
            width: '60%',
            maxWidth: '600px',
            marginBottom: '24px'
          }}
        >
          Baixe arquivos como mapas das cidades, pontos de retirada entre outros
        </p>
        
        {/* Container dos botões */}
        <div 
          style={{ 
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            marginTop: '16px',
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}
          className="flex flex-col md:flex-row items-center justify-center"
        >
          {/* Botão 1 - Mapa da Estrada Real */}
          <button
            onClick={handleMapDownload}
            className="transition-all duration-200"
            style={{
              backgroundColor: '#EA7E2F',
              color: '#FFFFFF',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '600',
              fontSize: '1rem',
              padding: '16px 32px',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#D16E28';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#EA7E2F';
            }}
          >
            MAPA DA ESTRADA REAL
          </button>
          
          {/* Botão 2 - Pontos de Retirada */}
          <button
            onClick={handlePassportPointsDownload}
            className="transition-all duration-200"
            style={{
              backgroundColor: '#EDA10E',
              color: '#FFFFFF',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '600',
              fontSize: '1rem',
              padding: '16px 32px',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#D9980A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#EDA10E';
            }}
          >
            PONTOS DE RETIRADA DO PASSAPORTE E PONTOS DE CARIMBO
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;