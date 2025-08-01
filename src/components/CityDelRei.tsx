import React, { useState } from 'react';
import Banner from './Banner';
import Description from './Description';
import TabSection from './TabSection';
import Footer from './Footer';
import Navigation from './Navigation';
import { MapPin, Users, Coffee, Bed, Utensils, Building, Map, Ruler } from 'lucide-react';
import ExpandableActivityCard from './ExpandableActivityCard';
import AccommodationCard from './AccommodationCard';
import RestaurantCard from './RestaurantCard';
import SupportCard from './SupportCard';

const CityDelRei: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('activities');

  const tabs = [
    { id: 'activities', label: 'O QUE FAZER', icon: <Coffee className="w-5 h-5" /> },
    { id: 'accommodations', label: 'ONDE FICAR', icon: <Bed className="w-5 h-5" /> },
    { id: 'restaurants', label: 'ONDE COMER', icon: <Utensils className="w-5 h-5" /> },
    { id: 'support', label: 'PONTOS DE APOIO', icon: <Building className="w-5 h-5" /> },
  ];

  const cityInfo = {
    name: 'São João del-Rei',
    state: 'Minas Gerais – Região do Campo das Vertentes',
    population: '90.225 habitantes (Censo IBGE 2022)',
    area: '1.464,49 km²',
    distances: {
      bh: '184 km via BR-265',
      sp: '475 km via BR-381 e BR-265',
      rj: '335 km via BR-040 e BR-265',
      vitoria: '525 km via BR-262 e BR-265',
      brasilia: '870 km via BR-040',
      salvador: '1.190 km via BR-116 e BR-251',
      goiania: '890 km via BR-050 e BR-040'
    },
    description: `Considerada uma das cidades históricas mais emblemáticas de Minas Gerais, São João del-Rei é um verdadeiro mosaico entre passado e presente. Fundada no início do século XVIII, a cidade preserva um riquíssimo patrimônio histórico e cultural, com igrejas barrocas, casarões coloniais, ruas calçadas em pedra e construções neoclássicas que se mesclam à vida moderna.

Localizada a cerca de 185 km de Belo Horizonte, e rodeada pela Serra do Lenheiro, a cidade foi impulsionada pela exploração do ouro e tornou-se um importante polo político e religioso. Berço de figuras históricas como Tancredo Neves, é também reconhecida por suas festas tradicionais, bandas centenárias e museus que mantêm viva a memória do Brasil colonial.

A atmosfera charmosa e acolhedora atrai visitantes em busca de história, cultura, tranquilidade e natureza. O passeio de Maria Fumaça até Tiradentes é uma das experiências mais marcantes da região, com vistas panorâmicas e forte apelo nostálgico.

Com excelente infraestrutura turística, gastronomia premiada e uma população hospitaleira, São João del-Rei é hoje um dos destinos mais completos da Estrada Real. Ao longo do ano, a cidade celebra sua identidade com eventos religiosos e culturais como a Semana Santa, o Festival de Inverno e a Festa do Divino Espírito Santo, que encantam moradores e visitantes.`,
    bannerImage: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/igreja-sao-francisco-de-assis-sao-joao-del-rei-1200x675-1.jpg'
  };

  const historicalFacts = [
    'Fundada como Arraial Novo do Rio das Mortes em 1704',
    'Tornou-se vila em 1713 e cidade em 1838',
    'Importante centro de exploração de ouro em Minas Gerais',
    'Sede de importantes movimentos políticos e religiosos',
    'Berço do ex-presidente Tancredo Neves',
    'Patrimônio tombado pelo IPHAN'
  ];

  const vegetation = [
    'Localizada na transição entre Mata Atlântica e Cerrado',
    'Apresenta áreas de campos de altitude e matas ciliares',
    'Presença de campos rupestres na Serra do Lenheiro',
    'Diversidade de espécies nativas e boa preservação ambiental',
    'Rios e nascentes importantes para o ecossistema da Bacia do Rio Grande'
  ];

  const activities = [
    {
      id: 1,
      name: 'Igreja de São Francisco de Assis',
      description: 'Principal cartão-postal da cidade, com fachada em pedra-sabão atribuída a Aleijadinho e interior em estilo rococó mineiro. Possui lustres de cristal Baccarat e jardins com palmeiras imperiais. O túmulo do ex-presidente Tancredo Neves está no cemitério anexo.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/Matriz_de_So_Francisco_foto_site_prefeitura.jpg',
      address: 'Praça Frei Orlando, 170 – Centro',
      hours: 'Segunda a sábado: 08h às 17h\nDomingo: 08h às 14h30',
      price: 'Paga – R$ 6,00 (meia: R$ 3,00)\nEntrada gratuita durante as missas',
      tips: 'Visite no domingo às 9h15 para assistir à missa com música barroca. A entrada de turistas é pelo portão lateral.'
    }
  ];

  const accommodations = [];

  const restaurants = [];

  const supportPoints = [
    {
      id: 1,
      name: 'Prefeitura Municipal',
      contact: '(32) 3379-1500',
      address: 'Av. Hermílio Alves, 400 – Centro'
    },
    {
      id: 2,
      name: 'Hospital Nossa Senhora das Mercês',
      contact: '(32) 3379-1200',
      address: 'Rua Maria Tereza, 150 – Centro'
    },
    {
      id: 3,
      name: 'Polícia Militar',
      contact: '(32) 3372-1234',
      address: 'Rua José Giarola, 230 – Centro'
    },
    {
      id: 4,
      name: 'Terminal Rodoviário',
      contact: '',
      address: 'Rua José Giarola, s/n – Matosinhos'
    }
  ];

  const renderAccommodation = (accommodation: typeof accommodations[0]) => {
    return (
      <div className="mb-8">
        <AccommodationCard accommodation={accommodation} expanded={true} />
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'activities':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map(activity => (
                <ExpandableActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-green-800 flex items-center gap-2">
                <Map className="w-6 h-6" />
                Mapa Interativo de São João del-Rei
              </h2>
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://satellites.pro/Sao_Joao_del_Rei_map"
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        );
      case 'accommodations':
        return (
          <div className="space-y-6">
            {accommodations.map(accommodation => renderAccommodation(accommodation))}
          </div>
        );
      case 'restaurants':
        return (
          <div className="space-y-6">
            {restaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        );
      case 'support':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportPoints.map(point => (
              <SupportCard key={point.id} point={point} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Banner cityName={cityInfo.name} imageSrc={cityInfo.bannerImage} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <Description description={cityInfo.description} historicalFacts={historicalFacts} vegetation={vegetation} />
          <div className="lg:w-1/3 bg-amber-50 rounded-lg shadow-md p-6 h-fit sticky top-4">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Informações</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-800" />
                <div>
                  <p className="text-sm text-gray-600">Localização</p>
                  <p className="text-base font-medium text-gray-800">{cityInfo.state}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-green-800" />
                <div>
                  <p className="text-sm text-gray-600">População</p>
                  <p className="text-base font-medium text-gray-800">{cityInfo.population}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Ruler className="w-5 h-5 text-green-800" />
                <div>
                  <p className="text-sm text-gray-600">Área Territorial</p>
                  <p className="text-base font-medium text-gray-800">{cityInfo.area}</p>
                </div>
              </div>

              {Object.entries(cityInfo.distances).map(([city, distance]) => (
                <div key={city} className="flex items-center gap-3">
                  <Map className="w-5 h-5 text-green-800" />
                  <div>
                    <p className="text-sm text-gray-600">
                      Distância {city === 'bh' ? 'de BH' : 
                               city === 'sp' ? 'até São Paulo (SP)' :
                               city === 'rj' ? 'até Rio de Janeiro (RJ)' :
                               city === 'vitoria' ? 'até Vitória (ES)' :
                               city === 'brasilia' ? 'até Brasília (DF)' :
                               city === 'salvador' ? 'até Salvador (BA)' :
                               city === 'goiania' ? 'até Goiânia (GO)' : ''}
                    </p>
                    <p className="text-base font-medium text-gray-800">{distance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <TabSection
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        
        <div className="mt-8">
          {renderTabContent()}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CityDelRei;