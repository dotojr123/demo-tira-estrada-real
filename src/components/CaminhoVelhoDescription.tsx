import React from 'react';

interface CaminhoVelhoDescriptionProps {
  title: string;
  description: string;
}

const CaminhoVelhoDescription: React.FC<CaminhoVelhoDescriptionProps> = ({ title, description }) => {
  return (
    <section className="bg-white" style={{ padding: '48px 24px' }}>
      <div className="max-w-[800px] mx-auto">
        <div className="text-center">
          {/* Title */}
          <h1 
            className="mb-4"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '700',
              fontSize: '2rem',
              color: '#1E4620'
            }}
          >
            {title}
          </h1>
          
          {/* Description */}
          <p 
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1rem',
              fontWeight: '400',
              color: '#333333',
              lineHeight: '1.6'
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaminhoVelhoDescription;