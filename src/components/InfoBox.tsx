import React, { ReactNode } from 'react';

interface InfoBoxProps {
  location: string;
  population: string;
  locationIcon: ReactNode;
  populationIcon: ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({ 
  location, 
  population, 
  locationIcon,
  populationIcon
}) => {
  return (
    <div className="lg:w-1/3 bg-amber-50 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-green-800 mb-4">Informações</h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          {locationIcon}
          <div>
            <p className="text-sm text-gray-600">Localização</p>
            <p className="text-base font-medium text-gray-800">{location}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {populationIcon}
          <div>
            <p className="text-sm text-gray-600">População</p>
            <p className="text-base font-medium text-gray-800">{population}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;