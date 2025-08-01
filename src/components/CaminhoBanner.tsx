import React from 'react';

interface CaminhoBannerProps {
  title: string;
  imageSrc: string;
  subtitle?: string;
  subtitle?: string;
}

const CaminhoBanner: React.FC<CaminhoBannerProps> = ({ title, imageSrc, subtitle }) => {
  return (
    <div className="relative w-full flex items-center justify-center h-[400px] md:h-[400px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay - 40% black opacity */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }}
      />
      
      {/* Title and Subtitle */}
      <div 
        className="absolute inset-0 flex items-center justify-center px-4"
        style={{ paddingTop: '15%' }}
      >
        <div className="text-center max-w-4xl">
          <h1 
            className="text-center mb-4"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '700',
              color: '#FFFFFF',
              textAlign: 'center',
              margin: 0,
              padding: '0 1rem',
              lineHeight: '1.1',
              marginBottom: subtitle ? '16px' : 0
            }}
          >
            {/* Mobile: 3.5rem with line-height 1.1 */}
            <span className="md:hidden" style={{ fontSize: '3.5rem', lineHeight: '1.1' }}>
              {title}
            </span>
            {/* Desktop: 5rem */}
            <span className="hidden md:block" style={{ fontSize: '5rem' }}>
              {title}
            </span>
          </h1>
          
          {/* Subtitle */}
          {subtitle && (
            <p 
              className="text-center"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '400',
                color: '#FFFFFF',
                textAlign: 'center',
                margin: 0,
                padding: '0 1rem',
                lineHeight: '1.4',
                fontSize: '1.25rem'
              }}
            >
              <span className="md:hidden" style={{ fontSize: '1rem' }}>
                {subtitle}
              </span>
              <span className="hidden md:block" style={{ fontSize: '1.25rem' }}>
                {subtitle}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaminhoBanner;