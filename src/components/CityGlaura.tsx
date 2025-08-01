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

const CityGlaura: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('activities');

  const tabs = [
    { id: 'activities', label: 'O QUE FAZER', icon: <Coffee className="w-5 h-5" /> },
    { id: 'accommodations', label: 'ONDE FICAR', icon: <Bed className="w-5 h-5" /> },
    { id: 'restaurants', label: 'ONDE COMER', icon: <Utensils className="w-5 h-5" /> },
    { id: 'support', label: 'PONTOS DE APOIO', icon: <Building className="w-5 h-5" /> },
  ];

  const cityInfo = {
    name: 'Glaura',
    state: 'Minas Gerais – Distrito de Ouro Preto',
    population: 'Aproximadamente 2.500 habitantes',
    area: 'Distrito de Ouro Preto',
    distances: {
      bh: '76 km',
      sp: '653,5 km',
      rj: '427,0 km',
      vitoria: '473,7 km',
      brasilia: '799,9 km',
      salvador: '1.497,6 km',
      goiania: '957,1 km'
    },
    description: `Glaura, também chamada de Casa Branca, é um dos distritos mais antigos de Ouro Preto, situado a 26 km da sede. Surgiu no século XVIII como ponto de passagem dos bandeirantes e foi palco das Guerras dos Emboabas. A Matriz de Santo Antônio, construída entre 1758 e 1764, é um dos principais marcos históricos. Outro símbolo do período colonial é o Chafariz de Dom Rodrigo, erguido em 1782.

A vila preserva tradições religiosas, como o Festival de Santo Antônio (julho) e a Festa do Rosário (outubro), com procissões, Dança das Fitas e congado. O distrito é conhecido pela hospitalidade, culinária típica e artesanato em taquara, couro, palha, bordados e azulejos pintados à mão.`,
    bannerImage: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/043_Glaura_MG_Foto-Bianca-Aun_08nov2017.jpg'
  };

  const historicalFacts = [
    'Até 1943 o distrito era chamado Casa Branca, mas foi renomeado "Glaura" em homenagem ao poema homônimo de Manoel Inácio da Silva Alvarenga, que exalta a natureza brasileira com imagens bucólicas.',
    'Passaram por Glaura figuras como Dom Pedro I (1830), Dom Pedro II (1881) e o naturalista francês Auguste de Saint-Hilaire (1817)'
  ];

  const vegetation = [
    'Mata Atlântica com campos de altitude',
    'Paisagens naturais preservadas',
    'Clima tropical de altitude',
    'Verões úmidos e invernos secos',
    '**Meses mais chuvosos: dezembro a março**'
  ];

  const activities = [
    {
      id: 1,
      name: 'Igreja Matriz de Santo Antônio da Casa Branca',
      description: 'Edificação barroca iniciada em 1751–1758, planejada pela Irmandade do Santíssimo Sacramento. Possui ornamentos em talha dourada (1ª fase do barroco), tombada pelo IPHAN em 1962. Em restauração recente com investimento de R$4,6 mi pela Vale e IPHAN.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-17-de-jul.-de-2025-15_11_28.png',
      address: 'Praça da Matriz, s/n, Glaura, Ouro Preto – MG',
      hours: 'Aberta diariamente das 8h às 18h (confirmação local recomendada). Missas celebradas aos 2º e 4º sábados do mês, às 19h.',
      price: 'Gratuita',
      tips: 'Acesso por ladeiras; prefira horários secos e evite carregamentos pesados de chuva. Evite fotografar dentro da capela durante as missas.'
    },
    {
      id: 2,
      name: 'Capela de Nossa Senhora das Mercês',
      description: 'Pequenina capela charmosa, datada do século XIX, com adorno decorado por cruz de madeira—marco na antiga Estrada Real.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-17-de-jul.-de-2025-15_16_27.png',
      address: 'Rua Direita, sem número, Glaura, Ouro Preto – MG',
      hours: 'Aberta diariamente, das 9h às 17h (sem garantias, verificar localmente)',
      price: 'Gratuita',
      tips: 'Visite em dias úteis para melhor apreciação; respeite o ambiente de silêncio e introspecção.'
    },
    {
      id: 3,
      name: 'Chafariz de Dom Rodrigo',
      description: 'Fonte histórica datada de 1782, construída por ordem de Dom Rodrigo de Menezes como ponto de parada de viajantes/bandeirantes.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/52b9d01a07c3299e9c6076d7edb7bc3e.jpg',
      address: 'Próximo à estrada principal de Glaura (BR-356)',
      hours: 'Livre acesso 24h',
      price: 'Gratuita',
      tips: 'Local ideal para fotos. Evite visitá-lo à noite devido à baixa iluminação e potencial insegurança.'
    },
    {
      id: 4,
      name: 'Museu do Chá (no Parque Estadual do Itacolomi)',
      description: 'Galpão com máquinas alemãs usadas para produção de chá preto exportado no início do século XX; inclui vídeos e painéis explicativos.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-17-de-jul.-de-2025-15_27_10.png',
      address: 'Fazenda São José do Manso – Parque Estadual do Itacolomi, Ouro Preto – MG',
      hours: 'Terça a sábado, 8h–17h; domingos e feriados, 8h–17h',
      price: 'Gratuito',
      tips: 'Combine a visita com as trilhas do parque; verifique acesso com trilheiros ou ranger local. Boa para famílias e interessados em história.'
    },
    {
      id: 5,
      name: 'Parque Estadual do Itacolomi',
      description: 'Área de proteção integral com 7.543 ha entre Ouro Preto e Mariana, que abriga o Museu do Chá, Casa Bandeirista e trilhas interpretativas.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/itacolomi-1.jpg',
      address: 'BR-356, saída de Ouro Preto, em direção a Glaura',
      hours: 'Aberto diariamente, do nascer ao pôr do sol; trilhas com início até 11h',
      price: 'Gratuita',
      tips: 'Use calçado firme, leve água e lanche, aplique protetor solar e repelente. As trilhas variam de 470 m (fácil) a 6 km (médio/alto). Reservas recomendadas.'
    }
  ];

  const accommodations = [
    {
      id: 1,
      name: 'Pousada Encanto de Glaura',
      type: 'gold',
      description: 'Atendimento personalizado em cenário bucólico próximo ao centro de Glaura. Oferece Wi-Fi, estacionamento, café da manhã e paisagem rural encantadora.',
      cnpj: '12.345.678/0001-90',
      razaoSocial: 'Pousada Encanto de Glaura LTDA',
      address: 'Rua Ana de Sá, 305, Glaura, Ouro Preto – MG, CEP 35408-000',
      email: 'contato@pousadaencantodeglaura.com.br',
      phone: '(31) 99211-9824 / 99211-9825',
      coordinates: '-20.385,-43.504',
      images: [
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-17-de-jul.-de-2025-15_40_18.png',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-17-de-jul.-de-2025-15_46_11.png',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/foto-pousada_0003.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-17-de-jul.-de-2025-15_50_22.png',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/a_pousada_01.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/restaurante.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/Restaurante-2.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/a_pousada_07.jpg'
      ]
    },
    {
      id: 2,
      name: 'Ninha Pousada',
      type: 'silver',
      description: 'Ideal para hospedagem tranquila em meio à natureza. Oferece Wi-Fi, vista da natureza e ambiente rural acolhedor.',
      cnpj: '98.765.432/0001-21',
      razaoSocial: 'Ninha Pousada LTDA',
      address: 'R. das Flôres, 78 - Engenho d\'Agua, Ouro Preto - MG, 35411-500',
      email: 'reservas@ninhapousada.com.br',
      phone: '(31) 99612-0395',
      coordinates: '-20.390,-43.510',
      images: [
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/566827076.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/566827631.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/529792400.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/2025-01-28.png',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/566830664.jpg'
      ]
    },
    {
      id: 3,
      name: 'Vila Glaura',
      type: 'bronze',
      description: 'Simplicidade, proximidade com atrações, avaliações positivas e reservas apenas nos fins de semana.',
      cnpj: '11.222.333/0001-44',
      razaoSocial: 'Vila Glaura Hospedagem LTDA',
      address: 'R. Pio XII, 28 - Glaura, Ouro Preto - MG, 35408-000',
      email: 'contato@vilaglaura.com.br',
      phone: '(31) 99347-5919',
      coordinates: '-20.385,-43.505',
      images: [
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/285941973.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/270432746.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/270434335.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/270434329.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/285318978.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/285320059.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/247033537.jpg'
      ]
    },
    {
      id: 4,
      name: 'Pousada Chalés Capadócia',
      type: 'silver',
      description: 'Chalés individuais em meio à natureza, estacionamento no local, Wi-Fi, café da manhã. Ambientes rústicos e tranquilos com vista para mata e clima de refúgio.',
      cnpj: '22.333.444/0001-55',
      razaoSocial: 'Chalés Capadócia LTDA',
      address: 'Rua Francisco Zacarias, 12 – Glaura, Ouro Preto – MG, CEP 35408-000',
      email: 'contato@chalescapadocia.com.br',
      phone: '(31) 97152-7760',
      coordinates: '-20.386,-43.506',
      images: [
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-17-de-jul.-de-2025-16_16_40.png',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed.png',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/IMG_20190511_070150_960.png',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/20190419_174936.png',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/20190526_082201.png',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/20190423_135051.png',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/IMG-20191212-WA0063-1.png'
      ]
    },
    {
      id: 5,
      name: 'Hotel Fazenda Recanto das Montanhas',
      type: 'gold',
      description: 'Hotel-fazenda com pensão completa, piscina, salão de jogos, cavalgadas, pesca, pedalinho e cachoeira. Ideal para famílias que buscam lazer em meio à natureza.',
      cnpj: '33.444.555/0001-66',
      razaoSocial: 'Hotel Fazenda Recanto das Montanhas LTDA',
      address: 'Fazenda Paiol – Glaura, Ouro Preto – MG, 35400-000',
      email: 'contato@recantodasmontanhas.com.br',
      phone: '☎️ (31) 3292-6034 · WhatsApp: (31) 9134-4424',
      coordinates: '-20.387,-43.507',
      images: [
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/hotel-fazenda-recanto.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/hotel-fazenda-recanto-1.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/hotel-fazenda-recanto-4.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/hotel-fazenda-recanto-5.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/hotel-fazenda-recanto-6.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/excelente-local-e-estrutura.jpg'
      ]
    },
    {
      id: 6,
      name: 'Hospedaria Freguesia de Santo Antônio',
      type: 'silver',
      description: 'Acomodações confortáveis em ambiente rural com vista para montanha. Oferece Wi-Fi grátis, estacionamento privativo, jardim, terraço ao ar livre e banheira de hidromassagem. Ideal para casais, famílias ou grupos.',
      cnpj: '44.555.666/0001-77',
      razaoSocial: 'Hospedaria Freguesia de Santo Antônio LTDA',
      address: 'R. Augusto César da Cruz, 78A – Glaura, Ouro Preto – MG, 35400-000',
      email: 'contato@freguesiastoantonio.com.br',
      phone: '📞 (31) 99602-1010',
      coordinates: '-20.388,-43.508',
      images: [
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/2025-04-03.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/2025-04-03-1.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/2025-04-03-2.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/2025-04-03-3.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/2025-04-03-4.jpg'
      ]
    },
    {
      id: 7,
      name: 'Pouso da Ailza',
      type: 'bronze',
      description: 'Charmosa e acolhedora, ideal para hospedagem tranquila com um toque caseiro. Oferece Wi-Fi e clima familiar – destaque para o famoso bolinho de chuva no café da manhã.',
      cnpj: '55.666.777/0001-88',
      razaoSocial: 'Pouso da Ailza LTDA',
      address: 'R. Manoel dos Santos Nazaré, 8 – Glaura, Ouro Preto – MG, 35400-000',
      email: 'contato@pousodaailza.com.br',
      phone: '📞 (31) 99700-3529',
      coordinates: '-20.389,-43.509',
      images: [
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-2.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-4.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-5.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/photo.jpg'
      ]
    }
  ];

  const restaurants = [
    {
      id: 1,
      name: 'Bar do Branco',
      description: 'Boteco típico com petiscos caseiros. Petiscos mineiros, ambiente simples e acolhedor.',
      address: 'R. Santo Antônio, 7 - Glaura, Ouro Preto - MG, 35400-000',
      hours: 'Domingo a sexta de 09h - 20h - Sábado de 09h - 22h',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-1.webp',
      images: [
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-1.webp',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-2.webp',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-3.webp',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-4.webp'
      ],
      phone: '(31) 3553-7105',
      instagram: '@bardobrancoglaura',
      cuisine: 'Petiscos mineiros',
    },
    {
      id: 2,
      name: 'Butekim Fi di Zé',
      description: 'Bar tradicional, ponto de carimbo do Passaporte da Estrada Real (1 kg de alimento não perecível). Petiscos e cervejas em ambiente informal e comunitário.',
      address: 'Praça da matriz, 03 - Glaura, Ouro Preto - MG, 35411-500',
      hours: 'Quinta-feira: 12h às 18h, Sexta-feira: 12h às 20h, Sábado: 10h às 23h, Domingo: 10h às 23h, Segunda, terça e quarta-feira: Fechado',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed.webp',
      images: [
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed.webp',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-7.webp',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-2-1.webp',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/2023-04-11-2.webp',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-1-1.webp',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/2023-04-11.webp',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-4-1.webp'
      ],
      phone: '(31) 98581-6077',
      instagram: '@butekim04',
      cuisine: 'Petiscos e cervejas',
    },
    {
      id: 3,
      name: 'Empório Caza Branca',
      description: 'Restaurante tipicamente mineiro; destaque para costelinha com molho barbecue. Culinária mineira, ambiente rústico e regional.',
      address: 'R. Augusto César da Cruz, 78 - Glaura, Ouro Preto - MG, 35400-000',
      hours: 'Não especificado — consultar',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-1-2.webp',
      images: [
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-1-2.webp',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-6-1.webp',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/MG_0104_WEB.webp',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-5-1.webp',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-2-2.webp',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-3-2.webp',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-8.webp'
      ],
      phone: '(31) 99751-4757',
      instagram: '@emporiocazabranca',
      cuisine: 'Culinária mineira',
    },
    {
      id: 4,
      name: 'Choperia Glaura',
      description: 'Choperia artesanal em estilo bar, serve cervejas especiais, petiscos e ambiente descontraído em praça central.',
      address: 'Praça Santo Antônio, nº 1, Loja B – Glaura, Ouro Preto – MG, 35411-500',
      hours: 'Não disponível',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-6.jpg',
      images: [
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-6.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-7.jpg',
        'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/unnamed-8.jpg'
      ],
      phone: 'Não disponível',
      instagram: '',
      cuisine: 'Chopp artesanal (IPA, Pilsen) e petiscos'
    }
  ];

  const supportPoints = [
    {
      id: 1,
      name: 'Prefeitura Municipal de Ouro Preto',
      contact: '(31) 3559-3200',
      address: 'Praça Barão do Rio Branco, 12 – Pilar, Ouro Preto – MG, CEP 35402-045'
    },
    {
      id: 2,
      name: 'SAMU',
      contact: '192',
      address: 'Atendimento de emergência médica'
    },
    {
      id: 3,
      name: 'Polícia Militar',
      contact: '190',
      address: 'Atendimento via Ouro Preto'
    },
    {
      id: 4,
      name: 'Corpo de Bombeiros',
      contact: '193',
      address: 'Ouro Preto'
    },
    {
      id: 5,
      name: 'Defesa Civil',
      contact: '(31) 3559-3200',
      address: 'Ouro Preto'
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
                src="https://satellites.pro/Brazil_map#-20.385,-43.504,14"
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

export default CityGlaura;