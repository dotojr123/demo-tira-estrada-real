import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CaminhoBanner from '../components/CaminhoBanner';
import CaminhoNovoDescription from '../components/CaminhoNovoDescription';
import CaminhoNovoInfoCards from '../components/CaminhoNovoInfoCards';
import CaminhoNovoCitiesList from '../components/CaminhoNovoCitiesList';
import CaminhoCTA from '../components/CaminhoCTA';

const CaminhoNovoPage: React.FC = () => {
  const cities = [
    'Alfredo Vasconcelos', 'Alto Rio Doce', 'Antônio Carlos', 'Areal', 'Barbacena', 'Belmiro Braga',
    'Bias Fortes', 'Capela Nova', 'Caranaíba', 'Carandaí', 'Catas Altas da Noruega', 'Chácara',
    'Chapada', 'Chiador', 'Cipotânea', 'Comendador Levy Gasparian', 'Conceição de Ibitipoca',
    'Conselheiro Lafaiete', 'Coronel Pacheco', 'Cristiano Otoni', 'Desterro do Melo',
    'Diogo de Vasconcelos', 'Ewbank da Câmara', 'Ibertioga', 'Inconfidência (Sebollas)',
    'Itaipava (distrito de Petrópolis)', 'Itatiaia', 'Itaverava', 'Juiz de Fora', 'Lamim',
    'Lavras Novas (distrito de Ouro Preto)', 'Lima Duarte', 'Magé', 'Matias Barbosa', 'Mercês',
    'Monte Serrat', 'Olaria', 'Oliveira Fortes', 'Ouro Branco', 'Ouro Preto', 'Paiva',
    'Paraíba do Sul', 'Pedro do Rio (distrito de Petrópolis)', 'Pedro Teixeira', 'Pequeri',
    'Petrópolis', 'Piau', 'Piranga', 'Porto Estrela', 'Presidente Bernardes', 'Queima Sangue',
    'Queluzito', 'Ressaquinha', 'Rio de Janeiro', 'Rio Espera', 'Rio Pomba', 'Santa Bárbara do Tugúrio',
    'Santa Rita de Ibitipoca', 'Santana do Deserto', 'Santana dos Montes', 'Santos Dumont',
    'Secretário', 'Senhora de Oliveira', 'Senhora dos Remédios', 'Simão Pereira', 'Três Rios'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <CaminhoBanner 
        title="Caminho Novo"
        imageSrc="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/DJI_0865-3_11zon-1-scaled-1.png"
      />
      
      <CaminhoNovoDescription
        title="Caminho Novo"
        description="O Caminho Novo foi aberto para ser uma alternativa mais rápida e fácil ao Caminho Velho. Ele guarda uma série de elementos da época das bandeiras e das primeiras explorações do território."
      />
      
      <CaminhoNovoInfoCards />
      
      <CaminhoNovoCitiesList
        title="Cidades no Caminho Novo"
        subtitle="Explore as cidades históricas que fazem parte deste trajeto da Estrada Real. Cada cidade oferece atrações únicas, gastronomia local e rica história."
        cities={cities}
      />
      
      <CaminhoCTA />
      
      <Footer />
    </div>
  );
};

export default CaminhoNovoPage;