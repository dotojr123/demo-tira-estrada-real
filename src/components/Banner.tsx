import React from 'react';

interface BannerProps {
  cityName: string;
  imageSrc: string;
}

const Banner: React.FC<BannerProps> = ({ cityName, imageSrc }) => {
  return (
    <div className="relative h-80 lg:h-96 w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${imageSrc})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-55"></div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold text-center drop-shadow-lg">
          {cityName}
        </h1>
      </div>
    </div>
  );
};

export default Banner;