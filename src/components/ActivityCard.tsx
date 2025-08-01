import React from 'react';

interface Activity {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="md:w-1/3 h-56 md:h-auto overflow-hidden">
        <img 
          src={activity.image} 
          alt={activity.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-green-800 mb-2">{activity.name}</h3>
          <p className="text-gray-700 mb-4">{activity.description}</p>
        </div>
        
        <button className="bg-amber-500 hover:bg-green-800 text-white font-medium py-2 px-4 rounded transition-colors duration-200 self-start">
          Ver detalhes
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;