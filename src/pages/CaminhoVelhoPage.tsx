import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CaminhoBanner from '../components/CaminhoBanner';
import CaminhoVelhoDescription from '../components/CaminhoVelhoDescription';
import CaminhoVelhoInfoCards from '../components/CaminhoVelhoInfoCards';
import CaminhoVelhoCitiesList from '../components/CaminhoVelhoCitiesList';
import CaminhoCTA from '../components/CaminhoCTA';

const CaminhoVelhoPage: React.FC = () => {
  const cities = [
    'Aiuruoca', 'Alagoa', 'Andrelândia', 'Angra dos Reis', 'Aparecida', 'Areias', 'Arujá',
    'Baependi', 'Bananal', 'Barbacena', 'Barra do Piraí', 'Barra Mansa', 'Barroso',
    'Bocaina de Minas', 'Cachoeira do Campo', 'Cachoeira Paulista', 'Caçapava', 'Campos do Jordão',
    'Canas', 'Capivari', 'Carandaí', 'Carrancas', 'Carvalhos', 'Conceição do Rio Verde',
    'Cruzeiro', 'Cruzília', 'Cunha', 'Garganta do Embaú', 'Glaura', 'Guaratinguetá',
    'Igaratá', 'Ingaí', 'Itamonte', 'Itanhandu', 'Itatiaia', 'Jacareí', 'Jambeiro',
    'Jesuânia', 'Lagoa Dourada', 'Lagoinha', 'Lavrinhas', 'Liberdade', 'Lorena',
    'Madre de Deus de Minas', 'Minduri', 'Natividade da Serra', 'Nazareno', 'Ouro Preto',
    'Paraty', 'Passa Quatro', 'Passa Vinte', 'Pequeri', 'Pindamonhangaba', 'Pinheiral',
    'Piquete', 'Piraí', 'Porto Real', 'Potim', 'Pouso Alto', 'Prados', 'Quatis', 'Queluz',
    'Queluzito', 'Redenção da Serra', 'Resende', 'Rio Claro', 'Rio das Flores', 'Roseira',
    'Santa Branca', 'Santa Isabel', 'Santo Antônio do Leite', 'São Bartolomeu', 'São Bento do Sapucaí',
    'São Brás do Suaçuí', 'São João del-Rei', 'São José do Barreiro', 'São José dos Campos',
    'São Lourenço', 'São Luiz do Paraitinga', 'São Sebastião da Vitória', 'São Sebastião do Rio Verde',
    'São Thomé das Letras', 'Seritinga', 'Serranos', 'Silveiras', 'Soledade de Minas',
    'Taubaté', 'Tiradentes', 'Tremembé', 'Ubatuba', 'Valença', 'Vassouras', 'Vila do Embaú',
    'Virgínia', 'Volta Redonda'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <CaminhoBanner 
        title="Caminho Velho"
        imageSrc="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/um-belo-arco-iris-na-natureza-scaled.jpg"
      />
      
      <CaminhoVelhoDescription
        title="Caminho Velho"
        description="Foi a primeira via aberta oficialmente pela Coroa Portuguesa para ligar o litoral fluminense à região produtora de ouro no interior de Minas Gerais. Na época, no século 17, o percurso levava 60 dias para ser feito pelos tropeiros a cavalo."
      />
      
      <CaminhoVelhoInfoCards />
      
      <CaminhoVelhoCitiesList
        title="Cidades no Caminho Velho"
        subtitle="Explore as cidades históricas que fazem parte deste trajeto da Estrada Real. Cada cidade oferece atrações únicas, gastronomia local e rica história."
        cities={cities}
      />
      
      <CaminhoCTA />
      
      <Footer />
    </div>
  );
};

export default CaminhoVelhoPage;