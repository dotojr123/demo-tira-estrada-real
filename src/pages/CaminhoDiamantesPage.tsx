import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CaminhoBanner from '../components/CaminhoBanner';
import CaminhoDescription from '../components/CaminhoDescription';
import CaminhoInfoCards from '../components/CaminhoInfoCards';
import CaminhoCitiesList from '../components/CaminhoCitiesList';
import CaminhoCTA from '../components/CaminhoCTA';

const CaminhoDiamantesPage: React.FC = () => {
  const cities = [
    'Acaiaca', 'Alvinópolis', 'Alvorada de Minas', 'Antônio Pereira', 'Barão de Cocais',
    'Barra Longa', 'Bela Vista de Minas', 'Bento Rodrigues', 'Bocaiúva', 'Bom Jesus do Amparo',
    'Botumirim', 'Brumal', 'Camargos', 'Cantagalo', 'Capitão Enéas', 'Carmésia',
    'Carmópolis de Minas', 'Catas Altas', 'Cocais', 'Coluna', 'Conceição do Mato Dentro',
    'Congonhas do Norte', 'Córregos', 'Couto de Magalhães de Minas', 'Cristália', 'Datas',
    'Diamantina', 'Dom Joaquim', 'Dores de Guanhães', 'Felício dos Santos', 'Ferros',
    'Francisco Sá', 'Frei Lagonegro', 'Gouveia', 'Grão Mogol', 'Guanhães', 'Ipoema',
    'Itacambira', 'Itambé do Mato Dentro', 'Itapanhoacanga', 'Mariana', 'Materlândia',
    'Matias Cardoso', 'Milho Verde', 'Montes Claros', 'Morro do Pilar', 'Olhos-d\'Água',
    'Ouro Preto', 'Passagem de Mariana', 'Paulistas', 'Peçanha', 'Presidente Kubitschek',
    'Rio do Peixe', 'Rio Vermelho', 'Sabinópolis', 'Santa Bárbara', 'Santa Rita Durão',
    'Santo Antônio do Norte', 'São Domingos do Prata', 'São Gonçalo do Rio das Pedras',
    'São José do Goiabal', 'São Pedro do Suaçuí', 'São Sebastião do Rio Preto', 'Sem-Peixe',
    'Senhora do Carmo', 'Senhora do Porto', 'Serro', 'Tapera', 'Virginópolis'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <CaminhoBanner 
        title="Caminho dos Diamantes"
        imageSrc="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/dicas-guia-ouro-preto-mg6.png"
      />
      
      <CaminhoDescription
        title="Caminho dos Diamantes"
        description="O Caminho dos Diamantes é uma das rotas mais fascinantes da Estrada Real, conectando a histórica Diamantina ao coração de Minas Gerais. Esta rota preserva a memória dos caminhos percorridos pelos tropeiros que transportavam diamantes e outras riquezas durante o período colonial brasileiro."
      />
      
      <CaminhoInfoCards />
      
      <CaminhoCitiesList
        title="Cidades no Caminho dos Diamantes"
        subtitle="Explore as cidades históricas que fazem parte deste trajeto da Estrada Real. Cada cidade oferece atrações únicas, gastronomia local e rica história."
        cities={cities}
      />
      
      <CaminhoCTA />
      
      <Footer />
    </div>
  );
};

export default CaminhoDiamantesPage;