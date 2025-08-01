import React from 'react';
import { History, Leaf } from 'lucide-react';

interface DescriptionProps {
  description: string;
  historicalFacts?: string[];
  vegetation?: string[];
}

const Description: React.FC<DescriptionProps> = ({ description, historicalFacts, vegetation }) => {
  return (
    <div className="lg:w-2/3">
      <div className="space-y-8">
        {/* Main Text */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          {description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Historical Facts */}
        {historicalFacts && (
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <History className="w-6 h-6" />
              Curiosidades sobre a cidade
            </h3>
            <ul className="space-y-3">
              {historicalFacts.map((fact, index) => (
                <li key={index} className="text-gray-700">
                  <div className="mb-3">
                    <h4 className="font-bold text-gray-800 mb-2">
                      {index === 0 ? 'Origem do nome "Glaura"' : 'Visitas ilustres'}
                    </h4>
                    <p className="leading-relaxed">{fact}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Vegetation */}
        {vegetation && (
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <Leaf className="w-6 h-6" />
              Vegetação e Clima
            </h3>
            <ul className="space-y-3">
              {vegetation.map((item, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-amber-500 mr-3">•</span>
                  <span dangerouslySetInnerHTML={{ 
                    __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                  }} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Description;