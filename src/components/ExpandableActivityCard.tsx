import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ActivityDetails {
  id: number;
  name: string;
  description: string;
  image: string;
  address?: string;
  hours?: string;
  price?: string;
  tips?: string;
}

interface ExpandableActivityCardProps {
  activity: ActivityDetails;
}

const ExpandableActivityCard: React.FC<ExpandableActivityCardProps> = ({ activity }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src={activity.image} 
          alt={activity.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-green-800 mb-2">{activity.name}</h3>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-amber-600 hover:text-green-800 font-medium transition-colors duration-200"
        >
          {isExpanded ? 'Ver menos' : 'Ver mais'}
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        
        <div className={`mt-4 space-y-4 transition-all duration-300 ${isExpanded ? 'block' : 'hidden'}`}>
          <div className="text-gray-700">
            <p className="mb-4">{activity.description}</p>
            
            {activity.address && (
              <div className="mb-3">
                <h4 className="font-semibold text-green-800 mb-1">Endereço:</h4>
                <p>{activity.address}</p>
              </div>
            )}
            
            {activity.hours && (
              <div className="mb-3">
                <h4 className="font-semibold text-green-800 mb-1">Horário de Funcionamento:</h4>
                <p>{activity.hours}</p>
              </div>
            )}
            
            {activity.price && (
              <div className="mb-3">
                <h4 className="font-semibold text-green-800 mb-1">Visitação:</h4>
                <p>{activity.price}</p>
              </div>
            )}
            
            {activity.tips && (
              <div className="mb-3">
                <h4 className="font-semibold text-green-800 mb-1">Dicas Úteis:</h4>
                <p>{activity.tips}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableActivityCard;