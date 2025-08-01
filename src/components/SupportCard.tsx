import React from 'react';
import { Building, Phone, MapPin } from 'lucide-react';

interface SupportPoint {
  id: number;
  name: string;
  contact: string;
  address: string;
}

interface SupportCardProps {
  point: SupportPoint;
}

const SupportCard: React.FC<SupportCardProps> = ({ point }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <Building className="w-6 h-6 text-green-800 mr-3" />
        <h3 className="text-lg font-semibold text-green-800">{point.name}</h3>
      </div>
      
      <div className="space-y-3 text-gray-700">
        <div className="flex items-start">
          <Phone className="w-5 h-5 text-amber-600 mr-2 mt-0.5" />
          <span>{point.contact}</span>
        </div>
        
        <div className="flex items-start">
          <MapPin className="w-5 h-5 text-amber-600 mr-2 mt-0.5" />
          <span>{point.address}</span>
        </div>
      </div>
    </div>
  );
};

export default SupportCard;