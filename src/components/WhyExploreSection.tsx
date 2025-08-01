import React from 'react';
import { MapPin, Utensils, Bed, Calendar } from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyExploreSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: <MapPin className="w-8 h-8 text-[#E8A317]" />,
      title: "Roteiros Detalhados",
      description: "Descubra as melhores rotas, pontos turísticos e atrações em cada cidade da Estrada Real."
    },
    {
      id: 2,
      icon: <Utensils className="w-8 h-8 text-[#E8A317]" />,
      title: "Gastronomia Local",
      description: "Conheça os melhores restaurantes e saboreie a autêntica culinária mineira e caiçara."
    },
    {
      id: 3,
      icon: <Bed className="w-8 h-8 text-[#E8A317]" />,
      title: "Hospedagens Selecionadas",
      description: "Encontre as melhores opções de hospedagem, de pousadas charmosas a hotéis históricos."
    },
    {
      id: 4,
      icon: <Calendar className="w-8 h-8 text-[#E8A317]" />,
      title: "Eventos e Festivais",
      description: "Fique por dentro de todos os eventos culturais e festivais que acontecem ao longo da rota."
    }
  ];

  return (
    <section className="py-12 px-4 bg-[#F8F2E8]">
      <div className="max-w-[1200px] mx-auto">
        <h2 
          className="text-[32px] font-bold text-[#2A5D3B] text-center mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Por que explorar a Estrada Real?
        </h2>
        
        <p 
          className="text-[18px] text-[#4A4A4A] text-center max-w-[700px] mx-auto mb-12"
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}
        >
          Uma experiência única que combina história, cultura, gastronomia e paisagens deslumbrantes em uma das rotas mais importantes do Brasil colonial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#F1F1F1] rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              
              <h4 
                className="text-[18px] font-semibold text-[#2A5D3B] text-center mb-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {feature.title}
              </h4>
              
              <p 
                className="text-[14px] text-[#4A4A4A] text-center"
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyExploreSection;