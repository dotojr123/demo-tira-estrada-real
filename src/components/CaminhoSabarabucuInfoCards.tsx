import React from 'react';

interface InfoMetric {
  icon: string;
  value: string;
  label: string;
}

const CaminhoSabarabucuInfoCards: React.FC = () => {
  const desktopMetrics: InfoMetric[] = [
    {
      icon: '📍',
      value: '160 km',
      label: 'Distância'
    },
    {
      icon: '⏱️',
      value: '🚲 4 dias 🚗 2 dias 🚶 11 dias 🐎 6 dias',
      label: 'Tempo de Viagem'
    },
    {
      icon: '⛰️',
      value: '0% asfalto · 22.5% trilha · 77.5% estrada de terra',
      label: 'Tipos de terreno'
    },
    {
      icon: '📈',
      value: 'Dos 160 km, 77 km são subidas e descidas',
      label: 'Desnível acumulado'
    }
  ];

  const mobileMetrics = [
    {
      title: 'Distância',
      value: '160 km'
    },
    {
      title: 'Tempo de viagem',
      items: ['🚴‍♂️ 4 dias', '🚗 2 dias', '🚶 11 dias', '🐎 6 dias']
    },
    {
      title: 'Tipos de terreno',
      items: ['🛣️ 0% asfalto', '🥾 22,5% trilha', '🚜 77,5% estrada de terra']
    },
    {
      title: 'Desnível acumulado',
      value: 'Dos 160 km, 77 km são subidas e descidas'
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
                src="https://www.google.com/maps/d/u/0/embed?mid=1b0vZemQEueNGncj7UZ2Fv_ZQNhhingA&ehbc=2E312F"
                width="100%"
                height="520"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mapa do Caminho de Sabarabuçu"
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
          </div>
          
          {/* Mobile Map - Below metrics, before cities section */}
          <div style={{ marginTop: '24px' }}>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1b0vZemQEueNGncj7UZ2Fv_ZQNhhingA&ehbc=2E312F"
                width="100%"
                height="520"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mapa do Caminho de Sabarabuçu"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaminhoSabarabucuInfoCards;