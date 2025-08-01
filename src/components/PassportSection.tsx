import React from 'react';
import { useNavigate } from 'react-router-dom';
import LazyImage from './LazyImage';

const PassportSection: React.FC = () => {
  const navigate = useNavigate();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Erro ao carregar imagem do passaporte');
    // Fallback image in case of error
    e.currentTarget.src = 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg';
  };

  const handleImageLoad = () => {
    console.log('Imagem do passaporte carregada com sucesso');
  };

  return (
    <section className="bg-[#2A5D3B]">
      {/* Desktop Layout */}
      <div 
        className="hidden md:flex w-full max-w-[1200px] mx-auto"
        style={{
          height: '400px',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '32px',
          paddingRight: '0'
        }}
      >
        {/* Text Column */}
        <div 
          style={{ 
            maxWidth: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingRight: '32px'
          }}
        >
          <h2 
            className="text-[2.5rem] font-bold text-white mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Garanta seu Passaporte<br />Estrada Real
          </h2>
          
          <p 
            className="text-[1.125rem] text-white mb-6"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}
          >
            Registre cada cidade visitada, cole os carimbos<br />oficiais e ganhe descontos exclusivos.
          </p>
          
          <button
            onClick={() => navigate('/passaporte')}
            className="bg-[#F5A623] hover:bg-[#D4881A] text-white px-6 py-3 rounded-lg font-semibold text-[16px] transition-colors duration-300 self-start"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Tire seu Passaporte
          </button>
        </div>
        
        {/* Image Column - Colada à direita */}
        <div 
          style={{ 
            height: '100%',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <LazyImage
            src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/Design-sem-nome-1-e1751998426639.png"
            alt="Passaporte Estrada Real"
            className="object-contain"
            style={{
              height: '100%',
              width: 'auto',
              objectPosition: 'center'
            }}
          />
        </div>
      </div>
      
      {/* Mobile Layout */}
      <div 
        className="md:hidden flex flex-col items-center text-center px-4 py-8"
        style={{ gap: '24px' }}
      >
        {/* Imagem no mobile */}
        <div>
          <LazyImage
            src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/Design-sem-nome-1-e1751998426639.png"
            alt="Passaporte Estrada Real"
            className="w-80 h-96 md:w-96 md:h-[450px] lg:w-[400px] lg:h-[500px] object-contain"
          />
        </div>
        
        {/* Texto no mobile */}
        <div>
          <h2 
            className="text-[2.5rem] font-bold text-white mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Garanta seu Passaporte<br />Estrada Real
          </h2>
          
          <p 
            className="text-[1.125rem] text-white mb-6"
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}
          >
            Registre cada cidade visitada, cole os carimbos<br />oficiais e ganhe descontos exclusivos.
          </p>
          
          <button
            onClick={() => navigate('/passaporte')}
            className="bg-[#F5A623] hover:bg-[#D4881A] text-white px-6 py-3 rounded-lg font-semibold text-[16px] transition-colors duration-300"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Tire seu Passaporte
          </button>
        </div>
      </div>
    </section>
  );
};

export default PassportSection;