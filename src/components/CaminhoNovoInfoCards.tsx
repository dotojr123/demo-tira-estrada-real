import React from 'react';

interface InfoMetric {
  icon: string;
  value: string;
  label: string;
}

const CaminhoNovoInfoCards: React.FC = () => {
  const desktopMetrics: InfoMetric[] = [
    {
      icon: '📍',
      value: '515 km',
      label: 'Distância'
    },
    {
      icon: '⏱️',
      value: '🚲 11 dias 🚗 6 dias 🚶 35 dias 🐎 18 dias',
      label: 'Tempo de Viagem'
    },
    {
      icon: '⛰️',
      value: '32% asfalto · 5% trilha · 63% estrada de terra',
      label: 'Tipos de terreno'
    },
    {
      icon: '📈',
      value: '223 km subidas e descidas',
      label: 'Desnível acumulado'
    }
  ];

  const mobileMetrics = [
    {
      title: 'Distância',
      value: '515 km'
    },
    {
      title: 'Tempo de viagem',
      items: ['🚴‍♂️ 11 dias', '🚗 6 dias', '🚶 35 dias', '🐎 18 dias']
    },
    {
      title: 'Tipos de terreno',
      items: ['🛣️ 32% asfalto', '🥾 5% trilha', '🚜 63% estrada de terra']
    },
    {
      title: 'Desnível acumulado',
      value: '223 km subidas e descidas'
    }
  ];

  return (
    <section className="bg-white">
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '32px 16px'
        }}
      >
        {/* Desktop Layout - Two Column */}
        <div 
          className="hidden md:grid md:grid-cols-2"
          style={{ gap: '32px' }}
        >
          {/* Left Column - Metrics Card */}
          <div
            style={{
              backgroundColor: '#F7F1E5',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              padding: '24px'
            }}
          >
            {/* Stack metrics vertically with 24px spacing */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {desktopMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-center md:items-center"
                  style={{ 
                    gap: '16px',
                    flexDirection: 'row'
                  }}
                >
                  {/* Icon */}
                  <div 
                    style={{ 
                      fontSize: '1.5rem',
                      color: '#1E4620',
                      flexShrink: 0
                    }}
                  >
                    {metric.icon}
                  </div>
                  
                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    {/* Value */}
                    <div 
                      style={{ 
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: '#1E4620',
                        fontFamily: 'Poppins, sans-serif',
                        lineHeight: '1.3',
                        marginBottom: '4px'
                      }}
                    >
                      {metric.value}
                    </div>
                    
                    {/* Label */}
                    <div 
                      style={{ 
                        fontSize: '0.875rem',
                        color: '#555555',
                        fontFamily: 'Poppins, sans-serif'
                      }}
                    >
                      {metric.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional info text */}
            <div 
              style={{
                marginTop: '24px',
                padding: '16px',
                backgroundColor: '#FFFFFF',
                borderRadius: '6px',
                textAlign: 'center'
              }}
            >
              <p 
                style={{
                  fontSize: '0.875rem',
                  color: '#333333',
                  fontFamily: 'Poppins, sans-serif',
                  lineHeight: '1.5',
                  margin: 0
                }}
              >
                Dos 515 km, 223 km são subidas e descidas. Ir de Ouro Preto a Porto Estrela exige menos esforço físico do que o caminho contrário.
              </p>
            </div>
          </div>
          
          {/* Right Column - Map */}
          <div
            style={{
              borderRadius: '8px',
              minHeight: '100%',
              height: 'auto'
            }}
          >
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1CgVlT_E5JDUfY4ESGMBvKfB_CROa1aI&ehbc=2E312F"
                width="100%"
                height="520"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mapa do Caminho Novo"
              />
            </div>
          </div>
        </div>
        
        {/* Mobile Layout - Single Column */}
        <div className="md:hidden">
          {/* Single Card with all metrics stacked */}
          <div
            style={{
              backgroundColor: '#F7F1E5',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              padding: '20px',
              marginBottom: '24px'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {mobileMetrics.map((metric, index) => (
                <div key={index}>
                  {/* Title without icon */}
                  <div 
                    className="mb-2"
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#1E4620',
                      fontFamily: 'Poppins, sans-serif',
                      textAlign: 'left'
                    }}
                  >
                    {metric.title}
                  </div>
                  
                  {/* Content */}
                  <div style={{ paddingLeft: '16px' }}>
                    {metric.value ? (
                      <div 
                        style={{
                          fontSize: '1rem',
                          color: '#333333',
                          fontFamily: 'Poppins, sans-serif'
                        }}
                      >
                        {metric.value}
                      </div>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {metric.items?.map((item, itemIndex) => (
                          <div 
                            key={itemIndex}
                            style={{
                              fontSize: '1rem',
                              color: '#333333',
                              fontFamily: 'Poppins, sans-serif'
                            }}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional info text for mobile */}
            <div 
              style={{
                marginTop: '20px',
                padding: '16px',
                backgroundColor: '#FFFFFF',
                borderRadius: '6px',
                textAlign: 'center'
              }}
            >
              <p 
                style={{
                  fontSize: '0.875rem',
                  color: '#333333',
                  fontFamily: 'Poppins, sans-serif',
                  lineHeight: '1.5',
                  margin: 0
                }}
              >
                Dos 515 km, 223 km são subidas e descidas. Ir de Ouro Preto a Porto Estrela exige menos esforço físico do que o caminho contrário.
              </p>
            </div>
          </div>
          
          {/* Mobile Map - Below metrics, before cities section */}
          <div style={{ marginTop: '24px' }}>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1CgVlT_E5JDUfY4ESGMBvKfB_CROa1aI&ehbc=2E312F"
                width="100%"
                height="520"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mapa do Caminho Novo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaminhoNovoInfoCards;