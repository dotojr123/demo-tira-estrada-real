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

const CityTiradentes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('activities');

  const tabs = [
    { id: 'activities', label: 'O QUE FAZER', icon: <Coffee className="w-5 h-5" /> },
    { id: 'accommodations', label: 'ONDE FICAR', icon: <Bed className="w-5 h-5" /> },
    { id: 'restaurants', label: 'ONDE COMER', icon: <Utensils className="w-5 h-5" /> },
    { id: 'support', label: 'PONTOS DE APOIO', icon: <Building className="w-5 h-5" /> },
  ];

  const cityInfo = {
    name: 'Tiradentes',
    state: 'Minas Gerais – Campo das Vertentes',
    population: '7.551 habitantes (Censo 2022)',
    area: '83,047 km²',
    distances: {
      bh: '203 km via BR-265',
      sp: '490 km via BR-381 e BR-265',
      rj: '330 km via BR-040 e BR-265',
      vitoria: '510 km via BR-262 e BR-265',
      brasilia: '870 km via BR-040',
      salvador: '1.210 km via BR-116 e BR-251',
      goiania: '890 km via BR-050 e BR-040'
    },
    description: `Relevo acidentado, cultura, entretenimento e muita história. Estamos falando de Tiradentes, simpática cidade mineira localizada a 203 km de Belo Horizonte.

Engastada no sopé da Serra São José, o município possui um acervo turístico, recreativo e cultural de dar inveja a qualquer outro lugar.

Dessas terras extraíram-se centenas de quilos de ouro e, nos anos iniciais de vida do arraial, a primitiva capela foi substituída por um magnífico templo, a Matriz de Santo Antônio, patrimônio cuidadosamente conservado juntamente com o centro histórico.

Essas características conferem à cidade um aspecto bucólico e romântico, atraindo muitos casais e famílias ao local.

Ainda assim, há certa badalação na região central da cidade, recheada de charmosas pousadas e estrelados restaurantes, que oferecem, além de momentos agradáveis, sabores inesquecíveis.

Trekking, cicloturismo, cavalgadas e rapel são algumas das aventuras proporcionadas pela cidade, que também oferece uma excepcional viagem a bordo de uma Maria Fumaça com destino à vizinha São João del-Rei.

Como se não bastassem as atrações turísticas tradicionais, a cidade conta ainda com eventos praticamente mensais, que agradam a todos os gostos. Entre os mais célebres, estão a Mostra de Cinema de Tiradentes e o Festival Internacional de Cultura e Gastronomia.

Grande polo turístico de Minas Gerais, Tiradentes atrai turistas de todo o mundo em busca de entretenimento e aconchego proporcionados pelos seus ares interioranos e temperaturas amenas.`,
    bannerImage: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/igreja-matriz-de-santo-antonio-tiradentes-mg-1200x675-1.jpg'
  };

  const activities = [
    {
      id: 1,
      name: 'Capela de São Francisco de Paula',
      description: 'Construída no século XVIII, esta charmosa capela se destaca por sua arquitetura simples e elegante, com detalhes em pedra e um interior acolhedor. Oferece uma vista panorâmica da cidade e da Serra de São José, sendo um local de contemplação e apreço pela arte sacra colonial.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/atrativo_capela_de_sao_francisco_de_paula_acervo_ier.jpg',
      address: 'Largo de São Francisco de Paula, s/n, Centro Histórico, Tiradentes, MG',
      hours: 'Aberta para visitação aos sábados, domingos e feriados, das 9h às 17h',
      price: 'Paga. Valor: R$ 5,00 (valor de referência, pode haver alterações)',
      tips: 'O acesso é feito a pé, subindo uma ladeira a partir do centro histórico. O final da tarde proporciona uma luz especial para fotos.'
    },
    {
      id: 2,
      name: 'Centro Cultural Yves Alves',
      description: 'Instalado em um belo casarão colonial, o centro cultural é um espaço dedicado à arte, cultura e história local. Abriga exposições temporárias e permanentes, apresentações musicais, teatrais e outras manifestações artísticas.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/unnamed.png',
      address: 'Rua da Câmara, 88, Centro Histórico, Tiradentes, MG',
      hours: 'De terça a domingo, das 10h às 18h',
      price: 'Geralmente gratuita para exposições, mas alguns eventos específicos podem ter cobrança de ingresso',
      tips: 'Localizado no coração do centro histórico, é facilmente acessível a pé. Verifique a programação para aproveitar alguma apresentação ou exposição especial.'
    },
    {
      id: 3,
      name: 'Chafariz de São José de Botas',
      description: 'Construído em 1749, este chafariz é um importante marco histórico de Tiradentes, servindo como fonte de água para a população no período colonial. Sua arquitetura em pedra e seus três canos de água são elementos característicos da época. A beleza do conjunto arquitetônico e a história que ele representa o tornam um ponto turístico interessante.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/atrativo_chafariz_de_sao_jose_de_botas_acervo_ier.jpg',
      address: 'Largo do Chafariz, s/n, Centro Histórico, Tiradentes, MG',
      hours: 'Área externa, acesso livre a qualquer horário',
      price: 'Gratuita',
      tips: 'Localizado no centro histórico, é uma parada rápida e interessante durante um passeio pela cidade.'
    },
    {
      id: 4,
      name: 'Igreja Matriz de Santo Antônio',
      description: 'Considerada um dos mais ricos exemplares do barroco mineiro, esta igreja do século XVIII impressiona pela sua fachada imponente, detalhes em ouro no interior e o órgão de tubos Arp Schnitger, um dos poucos existentes no Brasil. É um símbolo da história, da arte e da religiosidade de Tiradentes.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/atrativo_igreja_matriz_de_santo_antonio_acervo_ier.jpg',
      address: 'Largo da Matriz de Santo Antônio, s/n, Centro Histórico, Tiradentes, MG',
      hours: 'De terça a domingo, das 9h às 17h',
      price: 'Paga. Valor: R$ 12,00 (valor de referência, pode haver alterações)',
      tips: 'Chegue cedo para evitar filas, especialmente em feriados e alta temporada. Observe os detalhes da talha dourada e, se possível, assista a uma apresentação do órgão.'
    },
    {
      id: 5,
      name: 'Igreja Nossa Senhora do Rosário dos Pretos',
      description: 'Construída por escravizados no século XVIII, esta igreja possui uma arquitetura mais simples em comparação com a Matriz, mas carrega uma forte carga histórica e cultural. É um testemunho da fé e da resistência da população negra na época colonial.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/igreja-nossa-senhora-do-rosc3a1rio-640w-1.png',
      address: 'Largo do Rosário, s/n, Centro Histórico, Tiradentes, MG',
      hours: 'Aberta para visitação aos sábados, domingos e feriados, das 10h às 16h',
      price: 'Paga. Valor: R$ 5,00 (valor de referência, pode haver alterações)',
      tips: 'A igreja fica em uma parte mais alta do centro histórico, com acesso por ladeiras. Aprecie a vista da cidade a partir do largo.'
    },
    {
      id: 6,
      name: 'Museu da Liturgia',
      description: 'Instalado no antigo Recolhimento de Nossa Senhora da Conceição, este museu apresenta um acervo de objetos litúrgicos, paramentos, livros e documentos que contam a história da religiosidade na região.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/atrativo_museu_da_liturgia_acervo_ier.jpg',
      address: 'Rua da Conceição, 300, Centro Histórico, Tiradentes, MG',
      hours: 'De quarta a domingo, das 10h às 17h',
      price: 'Paga. Valor: R$ 8,00 (valor de referência, pode haver alterações)',
      tips: 'O museu está localizado em um casarão histórico bem preservado. Reserve um tempo para observar os detalhes dos objetos expostos.'
    },
    {
      id: 7,
      name: 'Museu de Sant\'Ana',
      description: 'Dedicado à imagem de Sant\'Ana, avó de Jesus, este museu abriga uma coleção de esculturas, pinturas e outros objetos de arte sacra que retratam a santa. É um espaço que valoriza a devoção popular e a arte religiosa.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/atrativo_museu_de_santana_acervo_ier.jpg',
      address: 'Rua Direita, 91, Centro Histórico, Tiradentes, MG',
      hours: 'De terça a domingo, das 10h às 17h',
      price: 'Paga. Valor: R$ 8,00 (valor de referência, pode haver alterações)',
      tips: 'O museu está localizado em uma rua charmosa do centro histórico. Aprecie a variedade de representações de Sant\'Ana.'
    },
    {
      id: 8,
      name: 'Museu Padre Toledo',
      description: 'Instalado na casa onde viveu o Padre João de Toledo, importante figura da Inconfidência Mineira, este museu preserva móveis, objetos pessoais e documentos da época, oferecendo um panorama sobre a vida cotidiana e os ideais daquele período histórico.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/atrativo_museu_padre_toledo_acervo_ier.jpg',
      address: 'Rua Padre Toledo, 52, Centro Histórico, Tiradentes, MG',
      hours: 'De terça a domingo, das 10h às 17h',
      price: 'Paga. Valor: R$ 8,00 (valor de referência, pode haver alterações)',
      tips: 'A casa preserva a atmosfera da época. Preste atenção aos detalhes da arquitetura e dos objetos expostos para imergir na história.'
    },
    {
      id: 9,
      name: 'Santuário da Santíssima Trindade',
      description: 'Localizado fora do centro histórico, este santuário é um importante centro de peregrinação, especialmente durante a festa da Santíssima Trindade. Sua arquitetura imponente e o ambiente de fé atraem muitos visitantes.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/atrativo_santuario_da_santissima_trindade_acervo_ier.jpg',
      address: 'Estrada para Bichinho, km 2, Tiradentes, MG',
      hours: 'Aberto diariamente, com horários de missa e visitação variados',
      price: 'Gratuita, mas doações são bem-vindas',
      tips: 'O acesso pode ser feito de carro ou de charrete a partir do centro. A festa da Santíssima Trindade, que ocorre após Pentecostes, é um evento marcante.'
    },
    {
      id: 10,
      name: 'Passeio de Maria Fumaça',
      description: 'Uma viagem nostálgica a bordo de uma locomotiva a vapor do século XIX, percorrendo um trecho da antiga Estrada de Ferro Oeste de Minas, ligando Tiradentes a São João del-Rei. Durante o percurso, é possível apreciar a paisagem rural e a arquitetura das estações. A viagem dura cerca de 40 minutos e percorre 12 km entre as duas cidades.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/maria-fumaca-minas-gerais-capa.jpg',
      address: 'Praça da Estação, s/n, Centro, Tiradentes, MG',
      hours: 'Horários variados, verificar disponibilidade',
      price: 'Tarifa inteira: R$ 86 (trecho único) ou R$ 172 (ida e volta). Meia-entrada disponível',
      tips: 'Compre os bilhetes com antecedência. Chegue cedo para apreciar a locomotiva.'
    },
    {
      id: 11,
      name: 'Serra de São José',
      description: 'Uma formação montanhosa que emoldura Tiradentes, oferecendo diversas trilhas com diferentes níveis de dificuldade e mirantes com vistas panorâmicas espetaculares da cidade e da região. A serra é uma área de proteção ambiental (APA) estadual, com altura variando entre 900m e 1.430m.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/@breno_castro-1080x675-1.jpg',
      address: 'Acesso por estradas vicinais próximas ao centro',
      hours: 'Recomenda-se iniciar as caminhadas pela manhã',
      price: 'Gratuita para acesso às trilhas',
      tips: 'Use calçados e roupas adequadas para trilha. Algumas trilhas exigem guia local.'
    },
    {
      id: 12,
      name: 'Cachoeira do Mangue',
      description: 'Uma cachoeira com águas cristalinas e piscinas naturais, ideal para um banho refrescante em meio à natureza. É um local tranquilo para relaxar e aproveitar o dia.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/Cachoeira-do-Mangue_YRewX9SUQOqjiyUfDV9p-768x432-1920w.png',
      address: 'Acesso pela estrada que liga Tiradentes a Santa Cruz de Minas (MG-338), com entrada sinalizada',
      hours: 'Aberta durante o dia',
      price: 'Pode haver taxa de estacionamento ou entrada',
      tips: 'O acesso é feito por estrada de terra em alguns trechos. Verifique as condições da estrada, especialmente em época de chuva.'
    },
    {
      id: 13,
      name: 'Cachoeira Paulo André',
      description: 'Outra bela opção de cachoeira na região, com quedas d\'água e poços para banho. O entorno natural proporciona um ambiente agradável para passar o dia.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/image.jpg',
      address: 'Acesso por estradas vicinais a partir de Tiradentes',
      hours: 'Aberta durante o dia',
      price: 'Pode haver taxa de acesso ou estacionamento',
      tips: 'Informe-se sobre a melhor rota de acesso e as condições da cachoeira antes de ir.'
    },
    {
      id: 14,
      name: 'Cachoeira do Bom Despacho',
      description: 'Uma cachoeira com fácil acesso e boa estrutura para visitantes, sendo uma opção popular para famílias. Possui áreas para banho e, às vezes, pequenas lanchonetes.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/Bom-Despacho-1920w.png',
      address: 'Próxima à estrada que liga Tiradentes a Coronel Xavier Chaves (MG-494)',
      hours: 'Aberta durante o dia',
      price: 'Pode haver taxa de entrada ou estacionamento',
      tips: 'Ideal para quem busca uma cachoeira com mais comodidades.'
    },
    {
      id: 15,
      name: 'Cachoeira do Índio',
      description: 'Uma cachoeira mais isolada, geralmente com trilha para acesso, proporcionando um contato mais íntimo com a natureza.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/Indio-a8965b26-2e5faa55-1920w.png',
      address: 'Acesso por estradas de terra a partir de Tiradentes',
      hours: 'Aberta durante o dia',
      price: 'Pode haver taxa de acesso',
      tips: 'Ideal para quem gosta de trilhas e busca um local mais preservado.'
    },
    {
      id: 16,
      name: 'Cachoeira dos Anjos',
      description: 'Uma cachoeira com beleza cênica, podendo ter poços para banho e áreas para relaxar.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/Anjos-1920w.jpg',
      address: 'Localizada em áreas rurais próximas a Tiradentes',
      hours: 'Aberta durante o dia',
      price: 'Pode haver taxa de acesso',
      tips: 'Informe-se sobre as condições de acesso antes de ir.'
    },
    {
      id: 17,
      name: 'Poço da Coca-Cola',
      description: 'Um poço de água com coloração escura, semelhante à Coca-Cola, devido à presença de minerais. É um local curioso e interessante para uma visita rápida.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/Poco-COca-Cola-640w.png',
      address: 'Confirmar localização exata com moradores locais',
      hours: 'Acesso livre, geralmente em áreas abertas',
      price: 'Gratuita (se em área pública)',
      tips: 'Pode ser combinado com a visita a alguma cachoeira próxima.'
    }
  ];

  const accommodations = [
    {
      id: 1,
      name: 'Pousada Solar dos Gerais',
      type: 'gold',
      description: 'Localizada em um casarão histórico do século XVIII, a Pousada Solar dos Gerais oferece uma experiência única de hospedagem em Tiradentes. Com vista privilegiada para a Serra de São José e decoração que mescla elementos coloniais com conforto contemporâneo, a pousada proporciona uma estadia memorável no coração do centro histórico.',
      cnpj: '12.345.678/0001-90',
      razaoSocial: 'Solar dos Gerais Hotelaria LTDA',
      address: 'Rua Direita, 123 - Centro Histórico, Tiradentes / MG, CEP 36325-000',
      email: 'contato@solardosgerais.com.br',
      phone: '(32) 3355-1234',
      coordinates: '-21.110,-44.174',
      images: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
        'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'
      ]
    },
    {
      id: 2,
      name: 'Pousada Vila Colonial',
      type: 'silver',
      description: 'A Pousada Vila Colonial oferece acomodações charmosas em um ambiente acolhedor, combinando a arquitetura histórica de Tiradentes com conforto moderno. Localizada próxima aos principais pontos turísticos, a pousada é perfeita para quem busca praticidade e hospitalidade mineira.',
      cnpj: '98.765.432/0001-21',
      razaoSocial: 'Vila Colonial Hospedagem LTDA',
      address: 'Rua do Chafariz, 456 - Centro, Tiradentes / MG, CEP 36325-000',
      email: 'reservas@vilacolonial.com.br',
      phone: '(32) 3355-5678',
      coordinates: '-21.111,-44.175',
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
      name: 'Tragaluz',
      description: 'Restaurante premiado que combina gastronomia contemporânea com ingredientes mineiros tradicionais. Ambiente sofisticado em casarão histórico.',
      address: 'Rua Direita, 234 - Centro Histórico, Tiradentes - MG',
      hours: 'Terça a Domingo: 12h às 23h',
      image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg'
    },
    {
      id: 2,
      name: 'Tempero da Terra',
      description: 'Culinária mineira autêntica servida em ambiente acolhedor. Especialidades incluem comida feita no fogão a lenha.',
      address: 'Rua da Praia, 567 - Centro, Tiradentes - MG',
      hours: 'Segunda a Domingo: 11h às 22h',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg'
    }
  ];

  const supportPoints = [
    {
      id: 1,
      name: 'Prefeitura Municipal',
      contact: '(32) 3355-1212',
      address: 'Rua Resende Costa, 71 - Centro'
    },
    {
      id: 2,
      name: 'Posto de Saúde',
      contact: '(32) 3355-1515',
      address: 'Rua São João, 100 - Centro'
    },
    {
      id: 3,
      name: 'Polícia Militar',
      contact: '(32) 3355-1190',
      address: 'Rua da Cadeia, 12 - Centro'
    }
  ];

  const renderAccommodation = (accommodation: typeof accommodations[0]) => {
    if (accommodation.type === 'gold') {
      return (
        <div className="mb-8">
          <AccommodationCard accommodation={accommodation} expanded={true} />
        </div>
      );
    }
    
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
                src="https://satellites.pro/Brazil_map#-21.116719,-44.173008,14"
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
          <Description description={cityInfo.description} />
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

export default CityTiradentes;