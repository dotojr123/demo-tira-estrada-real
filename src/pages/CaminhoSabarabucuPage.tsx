import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CaminhoBanner from '../components/CaminhoBanner';
import CaminhoSabarabucuDescription from '../components/CaminhoSabarabucuDescription';
import CaminhoSabarabucuInfoCards from '../components/CaminhoSabarabucuInfoCards';
import CaminhoSabarabucuCitiesList from '../components/CaminhoSabarabucuCitiesList';
import CaminhoCTA from '../components/CaminhoCTA';

const CaminhoSabarabucuPage: React.FC = () => {
  const cities = [
    'Acuruí (MG)',
    'Brumadinho (MG)',
    'Caeté (MG)',
    'Cocais (MG)',
    'Glaura (MG)',
    'Honório Bicalho (MG)',
    'Itabirito (MG)',
    'Morro Vermelho (MG)',
    'Nova Lima (MG)',
    'Raposos (MG)',
    'Rio Acima (MG)',
    'Sabará (MG)'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <CaminhoBanner 
        title="Caminho de Sabarabuçu"
        imageSrc="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/campo-cercado-por-rochas-cobertas-de-vegetacao-sob-um-ceu-azul-e-luz-sol-na-italia-scaled.jpg"
      />
      
      <CaminhoSabarabucuDescription
        title="Caminho de Sabarabuçu"
        description="Há trezentos anos, viajantes avistaram um brilho no topo da Serra da Piedade e imaginaram ser ouro. Para chegar lá, criaram uma via alternativa, que originou o Caminho Sabarabuçu. Mas tiveram uma surpresa: o que refletia a luz solar era, na verdade, minério de ferro."
      />
      
      <CaminhoSabarabucuInfoCards />
      
      <CaminhoSabarabucuCitiesList
        title="Cidades no Caminho de Sabarabuçu"
        subtitle="Explore as cidades históricas que fazem parte deste trajeto da Estrada Real. Cada cidade oferece atrações únicas, gastronomia local e rica história."
        cities={cities}
      />
      
      <CaminhoCTA />
      
      <Footer />
    </div>
  );
};

export default CaminhoSabarabucuPage;