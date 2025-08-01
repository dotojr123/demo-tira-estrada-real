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

const CityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('activities');

  const tabs = [
    { id: 'activities', label: 'O QUE FAZER', icon: <Coffee className="w-5 h-5" /> },
    { id: 'accommodations', label: 'ONDE FICAR', icon: <Bed className="w-5 h-5" /> },
    { id: 'restaurants', label: 'ONDE COMER', icon: <Utensils className="w-5 h-5" /> },
    { id: 'support', label: 'PONTOS DE APOIO', icon: <Building className="w-5 h-5" /> },
  ];

  const cityInfo = {
    name: 'Conceição do Mato Dentro',
    state: 'Minas Gerais – Região Central do Estado',
    population: '23.163 habitantes (Censo 2022)',
    area: '1.720,04 km²',
    distances: {
      bh: '167 km via MG-010 (passando por Lagoa Santa e Serra do Cipó)',
      sp: '700 km via BR-381 (Rodovia Fernão Dias)',
      rj: '530 km via BR-040 e MG-010',
      vitoria: '490 km via BR-262 e MG-010',
      salvador: '1.160 km via BR-101 e BR-116',
      brasilia: '770 km via BR-040',
      goiania: '870 km via BR-365 e BR-040',
      campoGrande: '1.390 km via BR-262 e BR-381'
    },
    description: `Conceição do Mato Dentro é um dos destinos mais encantadores da Estrada Real e guarda paisagens naturais de tirar o fôlego. Localizada no coração de Minas Gerais, a cidade é conhecida por ser o portal do Caminho dos Diamantes e abriga a majestosa Cachoeira do Tabuleiro, a maior de Minas e terceira maior do Brasil. Rica em história, cultura e natureza, Conceição é o destino ideal para quem busca experiências autênticas, trilhas, cachoeiras e a hospitalidade do povo mineiro.

Com uma herança colonial preservada, tradições religiosas vivas e uma gastronomia típica irresistível, o município se destaca como um importante polo do ecoturismo em Minas Gerais. Seja para descansar em meio às montanhas ou desbravar trilhas e quedas d'água, Conceição do Mato Dentro é o ponto de partida perfeito para explorar as belezas da Estrada Real.`,
    bannerImage: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/Conceicao-do-Mato-Dentro.revistasagarana.fotocezarfelixCFX_0342-2.jpg'
  };

  const historicalFacts = [
    'Fundada como arraial no século XVIII, em função da mineração de ouro',
    'Elevada a freguesia em 1724 e a município em 1840',
    'Uma das principais cidades do Caminho dos Diamantes, trajeto usado para escoamento de riquezas no período colonial',
    'Guarda igrejas e tradições religiosas seculares, como as festas do Rosário'
  ];

  const vegetation = [
    'Localizada na transição entre Mata Atlântica e Cerrado',
    'Apresenta formações únicas como campos rupestres, com grande biodiversidade',
    'Rica em nascentes e recursos hídricos',
    'Presença de áreas de preservação ambiental e parques naturais'
  ];

  const activities = [
    {
      id: 1,
      name: 'Mercado Municipal Maurílio Lages',
      description: 'O Mercado Municipal Maurílio Lages é uma construção eclética que encanta pela sua simplicidade e charme. Originalmente destinado aos produtores rurais, o espaço conquistou o apreço popular e hoje abriga feiras da agricultura familiar, exposições culturais e um restaurante que funciona diariamente. Os apreciadores de queijo podem visitar a loja especializada, com diversas opções da iguaria, inserida na renomada região produtiva do Queijo do Serro. Uma visita ao mercado proporciona uma imersão autêntica na cultura local. Ao lado, encontra-se uma loja de artesanato e outros produtos típicos, como doces caseiros, biscoitos artesanais e açúcar mascavo. A arquitetura do mercado se destaca por um volume retangular principal mais elevado, com um planejamento mais elaborado na fachada, e dois volumes posteriores mais baixos, com um tratamento mais simples e paredes lisas, conformando um formato em "U". O volume principal possui uma cobertura em telhas de barro em quatro águas, parcialmente oculta pela platibanda. Fortes marcações em colunas, marquise e cornijas realçam os aspectos de sua verticalidade e horizontalidade. Em 2002, o mercado foi amplamente restaurado, ganhando uma nova vida e preservando sua importância histórica e cultural.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/b60f7e77c330a6264efdb20010d96ebd.jpg',
      address: 'Largo do Rosário, s/n, Rosário, Conceição do Mato Dentro - MG, CEP 35.860-000',
      hours: 'Segunda, Terça, Quarta, Quinta, Sexta: 08:00 - 17:00\nSábado: 08:00 - 14:00\nDomingo, Feriado: Fechado',
      price: 'Franca. As visitas podem ser não guiadas ou guiadas.',
      tips: 'Aproveite para fotografar o local, fazer compras de produtos locais, desfrutar de refeições no restaurante e, se houver, participar de feiras e eventos. Não deixe de visitar a loja de queijos.'
    },
    {
      id: 2,
      name: 'Igreja Matriz de Nossa Senhora da Conceição',
      description: 'A Igreja Matriz de Nossa Senhora da Conceição é um dos principais pontos turísticos e um importante patrimônio arquitetônico de Conceição do Mato Dentro, servindo como uma referência central para a comunidade local. A igreja geralmente acolhe visitantes de segunda a domingo, oferecendo um espaço de contemplação e fé.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/ConceicaodoMatoDentre.revistasagaranafotocezarfelix-copia-1.jpg',
      address: 'Conceição do Mato Dentro - MG, 35860-000, Brasil',
      hours: 'Segunda a sábado: 8:00 - 17:00\nDomingo: 8:00 - 17:00\nFeriados: 8:00 - 17:00\nMissas: Sexta 15:00, Sábado 18:00 e 19:00, Domingo 8:00 e 18:00',
      price: 'Franca. A visita pode ser feita de forma autônoma ou com o acompanhamento de um guia.',
      tips: 'É recomendável verificar os horários das missas diretamente com a paróquia, especialmente em datas comemorativas e feriados.'
    },
    {
      id: 3,
      name: 'Capela de Nossa Senhora do Rosário dos Pretos',
      description: 'A Capela de Nossa Senhora do Rosário dos Pretos, localizada em Conceição do Mato Dentro, possui horários específicos tanto para a visitação da igreja quanto para a celebração de missas. Este local carrega uma rica história e é um ponto de interesse cultural na cidade.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/Conceicao-do-Mato-Dentro.revistasagarana.fotocezarfelixCFX_9850.jpg',
      address: 'Largo do Rosário, S/Nº, Bairro Rosário, Conceição do Mato Dentro - MG, CEP 35.860-000',
      hours: 'Segunda a Sexta-feira: 9h às 16h\nMissas: Domingo 11h, Segunda a Quinta 12h, Quarta 19h',
      price: 'Franca',
      tips: 'Consulte os horários das missas para participar de alguma celebração. A localização próxima ao Mercado Municipal facilita a visita aos dois pontos no mesmo passeio.'
    },
    {
      id: 4,
      name: 'Estação Ciência Anglo American',
      description: 'A Estação Ciência Anglo American é um espaço dedicado à divulgação científica e atividades educativas, promovido pela Anglo American em Conceição do Mato Dentro. O local oferece aos visitantes a oportunidade de aprender de forma interativa sobre diversos temas científicos e tecnológicos.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/caption.jpg',
      address: 'Rodovia MG-010, km 185, Conceição do Mato Dentro/MG',
      hours: 'Segunda a Sexta, das 9h às 15h',
      price: 'Gratuita. Para grupos de cinco pessoas ou mais, é necessário agendar a visita.',
      tips: 'Ideal para famílias, estudantes e todos os interessados em ciência. Se estiver em grupo, não se esqueça de agendar a visita.'
    },
    {
      id: 5,
      name: 'Parque Estadual Serra do Intendente',
      description: 'O Parque Estadual Serra do Intendente (PESI) está aninhado no grandioso maciço da Serra do Espinhaço, com seus limites inseridos na Reserva da Biosfera da Serra do Espinhaço, reconhecida pela UNESCO em 2005. Este parque é notável por sua rica biodiversidade, situada na transição entre os biomas da Mata Atlântica e do Cerrado, e pela abundância de recursos hídricos, abrigando 356 nascentes. A paisagem é marcada pela presença de imponentes cachoeiras, consideradas entre as maiores do estado, alcançando até 273 metros de altura. A famosa Cachoeira do Tabuleiro está localizada dentro do Parque Natural Municipal do Tabuleiro, uma unidade de conservação sobreposta ao PESI, com a gestão do atrativo sendo realizada pela Prefeitura Municipal de Conceição do Mato Dentro.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/atrativo_parque_estadual_serra_do_intendente_credito_evandro_rodney.jpg',
      address: 'MG-010, s/n, Conceição do Mato Dentro - MG, 35860-000, Brasil',
      hours: 'Diariamente: 8h às 16h\nHorários específicos para cada cachoeira',
      price: 'Paga para alguns atrativos (ex: Cachoeira do Tabuleiro)',
      tips: 'Consulte os horários específicos de entrada para cada cachoeira. O parque é ideal para os amantes do ecoturismo e para quem busca contato com a natureza e grandes cachoeiras.'
    },
    {
      id: 6,
      name: 'Parque Salão de Pedras',
      description: 'Um dos principais atrativos de Conceição do Mato Dentro, o Parque Salão de Pedras abrange uma área de 852 hectares na parte mais alta da encosta do Campo Grande. Elevado à categoria de Parque Municipal em 1999, integra desde 2005 a reserva da biosfera da Serra do Espinhaço. Sua vegetação corresponde ao campo-cerrado, com campos de altitude, matas de galeria e capões. A presença de corredeiras e piscinas naturais de águas límpidas, moldadas pelo relevo acidentado, cria um cenário de beleza cênica singular.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/9cdd8248432f1c02b597f34bc2efab1c-scaled.jpg',
      address: 'Conceição do Mato Dentro - MG, 35860-000, Brasil',
      hours: 'Aberto diariamente',
      price: 'Franca',
      tips: 'Ideal para ecoturismo, contemplação da natureza, prática de boulder e para apreciar o pôr do sol. Para atividades esportivas, procure a autorização e um guia local.'
    },
    {
      id: 7,
      name: 'Poço Azul',
      description: 'O Poçinho Azul recebe seu nome pela notável transparência azulada de suas águas. Ladeado por pequenos blocos rochosos, ele é formado por um riacho que nasce nas proximidades da Colina da Paz, dentro do Parque Municipal Salão de Pedras, criando uma pequena e convidativa piscina natural. A vegetação ao redor é composta por campo rupestre e cerrado, conferindo ao local uma beleza natural singular.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/1591648966zltydlk0IF.jpg',
      address: 'Vila São Francisco, s/n, Conceição do Mato Dentro - MG, CEP 35.860-000',
      hours: 'Diariamente, das 08:00 às 18:00',
      price: 'Franca. O atrativo não possui estrutura de apoio e é de livre acesso.',
      tips: 'Aproveite para nadar, observar pássaros, contemplar a natureza, praticar ioga, relaxar, caminhar e tirar fotografias neste belo local.'
    },
    {
      id: 8,
      name: 'Poço das Ninfas',
      description: 'O Poço das Ninfas encanta com suas águas claras e cristalinas, convidando a um mergulho revigorante. Sua proximidade com a cidade, aliada à beleza e qualidade de suas águas, o torna um atrativo local importante. Além do poço principal, os visitantes podem desfrutar de uma pequena cascata, perfeita para uma massagem natural relaxante.',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg',
      address: 'Parque Natural Municipal Salão de Pedras, Zona Rural - Córrego Pereira, Conceição do Mato Dentro - MG',
      hours: 'Diariamente, das 08:00 às 18:00',
      price: 'Franca. Não há estrutura de apoio à visitação.',
      tips: 'Ideal para banho, contemplação, prática de ioga, relaxamento, hidroginástica e caminhadas.'
    }
  ];

  const accommodations = [
    {
      id: 1,
      name: 'Pousada Serra do Cipó',
      type: 'gold',
      description: 'Localizada em meio à natureza exuberante da Serra do Cipó, oferece conforto e tranquilidade para os visitantes que buscam contato com a natureza.',
      cnpj: '12.345.678/0001-90',
      razaoSocial: 'Pousada Serra do Cipó LTDA',
      address: 'Estrada da Serra do Cipó, km 5, Conceição do Mato Dentro - MG, CEP 35860-000',
      email: 'contato@pousadaserraCipo.com.br',
      phone: '(31) 3868-1234',
      coordinates: '-19.036,-43.427',
      images: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
        'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'
      ]
    },
    {
      id: 2,
      name: 'Pousada Cachoeira do Tabuleiro',
      type: 'silver',
      description: 'Pousada familiar com vista privilegiada para as montanhas, oferecendo hospitalidade mineira e proximidade aos principais atrativos naturais.',
      cnpj: '98.765.432/0001-21',
      razaoSocial: 'Pousada Cachoeira do Tabuleiro LTDA',
      address: 'Rua das Cachoeiras, 123, Centro, Conceição do Mato Dentro - MG, CEP 35860-000',
      email: 'reservas@pousadatabuleiro.com.br',
      phone: '(31) 3868-5678',
      coordinates: '-19.037,-43.428',
      images: [
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
        'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg',
        'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg'
      ]
    }
  ];

  const restaurants = [
    {
      id: 1,
      name: 'Restaurante Sabor da Serra',
      description: 'Culinária mineira tradicional com ingredientes frescos da região. Especialidades incluem frango caipira, feijão tropeiro e doces caseiros.',
      address: 'Rua Principal, 456, Centro, Conceição do Mato Dentro - MG',
      hours: 'Segunda a Domingo: 11h às 22h',
      image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg',
      images: [
        'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg',
        'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg'
      ],
      phone: '(31) 3868-9012',
      instagram: '@sabordaserra',
      cuisine: 'Culinária mineira'
    },
    {
      id: 2,
      name: 'Café da Montanha',
      description: 'Cafeteria aconchegante com café especial da região e quitandas mineiras. Ambiente ideal para um lanche da tarde.',
      address: 'Praça da Matriz, 78, Centro, Conceição do Mato Dentro - MG',
      hours: 'Terça a Domingo: 8h às 18h',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
      images: [
        'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
        'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg'
      ],
      phone: '(31) 3868-3456',
      instagram: '@cafedamontanha',
      cuisine: 'Café e quitandas'
    }
  ];

  const supportPoints = [
    {
      id: 1,
      name: 'Prefeitura Municipal',
      contact: '(31) 3868-1122',
      address: 'Praça Getúlio Vargas, 100, Centro, Conceição do Mato Dentro - MG'
    },
    {
      id: 2,
      name: 'Hospital Municipal',
      contact: '(31) 3868-1500',
      address: 'Rua da Saúde, 200, Centro, Conceição do Mato Dentro - MG'
    },
    {
      id: 3,
      name: 'Polícia Militar',
      contact: '(31) 3868-1190',
      address: 'Rua Coronel Antônio Alves, 50, Centro'
    },
    {
      id: 4,
      name: 'Corpo de Bombeiros',
      contact: '193',
      address: 'Atendimento de emergência'
    },
    {
      id: 5,
      name: 'Centro de Informações Turísticas',
      contact: '(31) 3868-1300',
      address: 'Praça da Matriz, s/n, Centro'
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
            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://satellites.pro/Brazil_map#-19.036055,-43.427281,15"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full"
              />
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
                               city === 'sp' ? 'de São Paulo (SP)' :
                               city === 'rj' ? 'do Rio de Janeiro (RJ)' :
                               city === 'vitoria' ? 'de Vitória (ES)' :
                               city === 'salvador' ? 'de Salvador (BA)' :
                               city === 'brasilia' ? 'de Brasília (DF)' :
                               city === 'goiania' ? 'de Goiânia (GO)' :
                               city === 'campoGrande' ? 'de Campo Grande (MS)' : ''}
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

export default CityPage;