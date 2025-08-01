import React from 'react';

const CaminhoCTA: React.FC = () => {
  const handlePlanTrip = () => {
    // Implementar lógica de planejamento de viagem
    console.log('Planeje sua viagem');
  };

  return (
    <section 
      className="w-full text-center"
      style={{ 
        backgroundColor: '#1E4620',
        padding: '64px 24px'
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Title */}
        <h2 
          className="mb-6"
          style={{ 
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '600',
            fontSize: '2rem',
            color: '#FFFFFF',
            marginBottom: '24px'
          }}
        >
          Pronto para viver essa aventura?
        </h2>
        
        {/* CTA Button */}
        <button
          onClick={handlePlanTrip}
          className="transition-colors duration-300"
          style={{
            backgroundColor: '#EDA10E',
            color: '#FFFFFF',
            padding: '12px 24px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '1.125rem',
            fontWeight: '600'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#D4881A';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#EDA10E';
          }}
        >
          Planeje sua viagem
        </button>
      </div>
    </section>
  );
};

export default CaminhoCTA;