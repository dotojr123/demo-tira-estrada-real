import React from 'react';
import { MapPin, Clock, Users, Camera, Mountain, Coffee, Calendar, Car } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import LazyImage from './LazyImage';
import ExpandableActivityCard from './ExpandableActivityCard';

interface Activity {
  id: number;
  name: string;
  description: string;
  image: string;
  category: 'historic' | 'nature' | 'cultural' | 'adventure' | 'gastronomy';
  duration: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tips: string[];
}

const CityOuroPreto: React.FC = () => {
  const cityInfo = {
    name: 'Ouro Preto',
    state: 'Minas Gerais',
    population: '74.281',
    area: '1.245 km²',
    altitude: '1.179 m',
    description: `Ouro Preto é uma das cidades históricas mais importantes do Brasil, reconhecida como Patrimônio Mundial da Humanidade pela UNESCO. Capital de Minas Gerais durante o período colonial, preserva um conjunto arquitetônico barroco excepcional, com igrejas ornamentadas com talha dourada e obras de Aleijadinho. Suas ladeiras de pedra, casarões coloniais e museus contam a história da mineração e da arte sacra brasileira.`,
    founded: '1711',
    heritage: 'Patrimônio Mundial da UNESCO (1980)'
  };

  const activities: Activity[] = [
    {
      id: 1,
      name: 'Igreja de São Francisco de Assis',
      description: 'Obra-prima do barroco brasileiro projetada por Aleijadinho, com talha dourada e pinturas de Ataíde.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/atrativo_igreja_de_sao_francisco_de_assis_acervo_ier.jpg',
      category: 'historic',
      duration: '1-2 horas',
      difficulty: 'easy',
      tips: ['Visitação das 8h30 às 12h e 13h30 às 17h', 'Taxa de entrada R$ 15', 'Fotografias permitidas sem flash']
    },
    {
      id: 2,
      name: 'Museu da Inconfidência',
      description: 'Antigo prédio da Câmara e Cadeia, hoje museu dedicado ao movimento da Inconfidência Mineira.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/atrativo_museu_da_inconfidencia_acervo_ier.jpg',
      category: 'historic',
      duration: '2-3 horas',
      difficulty: 'easy',
      tips: ['Entrada gratuita', 'Visitas guiadas disponíveis', 'Acervo com peças originais do século XVIII']
    },
    {
      id: 3,
      name: 'Igreja Matriz do Pilar',
      description: 'Uma das igrejas mais ricas em ouro do Brasil, com interior totalmente revestido em talha dourada.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/atrativo_igreja_matriz_do_pilar_acervo_ier.jpg',
      category: 'historic',
      duration: '1-2 horas',
      difficulty: 'easy',
      tips: ['Mais de 400kg de ouro nas decorações', 'Museu de Arte Sacra anexo', 'Vista panorâmica da torre']
    },
    {
      id: 4,
      name: 'Mina da Passagem',
      description: 'Antiga mina de ouro aberta à visitação, descida de 120 metros em trolley pelos túneis subterrâneos.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/atrativo_mina_da_passagem_acervo_ier.jpg',
      category: 'adventure',
      duration: '2-3 horas',
      difficulty: 'medium',
      tips: ['Temperatura constante de 18°C', 'Levar agasalho', 'Reservas recomendadas']
    },
    {
      id: 5,
      name: 'Casa dos Contos',
      description: 'Antiga casa de fundição e contadoria, hoje museu que conta a história da mineração e economia colonial.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/atrativo_casa_dos_contos_acervo_ier.jpg',
      category: 'historic',
      duration: '1-2 horas',
      difficulty: 'easy',
      tips: ['Sede do antigo posto fiscal', 'Exposição sobre história monetária', 'Arquitetura colonial preservada']
    },
    {
      id: 6,
      name: 'Parque Estadual do Itacolomi',
      description: 'Unidade de conservação com trilhas, cachoeiras e vista panorâmica do Pico do Itacolomi.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/atrativo_parque_itacolomi_acervo_ier.jpg',
      category: 'nature',
      duration: '4-6 horas',
      difficulty: 'hard',
      tips: ['Trilha exige preparo físico', 'Levar água e lanche', 'Vista espetacular do alto']
    },
    {
      id: 7,
      name: 'Teatro Municipal',
      description: 'Um dos mais antigos teatros do Brasil, inaugurado em 1770, com arquitetura única e programação cultural.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/atrativo_teatro_municipal_acervo_ier.jpg',
      category: 'cultural',
      duration: '1-2 horas',
      difficulty: 'easy',
      tips: ['Visitas guiadas disponíveis', 'Programação cultural regular', 'Arquitetura colonial preservada']
    },
    {
      id: 8,
      name: 'Feira de Pedra Sabão',
      description: 'Traditional feira com artesanato local, especialmente peças em pedra sabão e produtos típicos.',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/atrativo_feira_pedra_sabao_acervo_ier.jpg',
      category: 'cultural',
      duration: '1-2 horas',
      difficulty: 'easy',
      tips: ['Funciona diariamente na Praça Tiradentes', 'Peças artesanais únicas', 'Preços negociáveis']
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos', icon: Camera },
    { id: 'historic', name: 'Histórico', icon: Clock },
    { id: 'nature', name: 'Natureza', icon: Mountain },
    { id: 'cultural', name: 'Cultural', icon: Users },
    { id: 'adventure', name: 'Aventura', icon: Car },
    { id: 'gastronomy', name: 'Gastronomia', icon: Coffee }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredActivities = selectedCategory === 'all' 
    ? activities 
    : activities.filter(activity => activity.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <LazyImage
          src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/cidade_ouro_preto_banner.jpg"
          alt="Vista panorâmica de Ouro Preto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 
              className="text-4xl md:text-6xl font-bold text-estrada-green mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {cityInfo.name}
            </h1>
            <p 
              className="text-xl md:text-2xl"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {cityInfo.heritage}
            </p>
          </div>
        </div>
      </section>

      {/* City Info Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="text-3xl md:text-4xl font-bold text-estrada-green mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Sobre {cityInfo.name}
              </h2>
              <p 
                className="text-gray-700 text-lg leading-relaxed mb-8"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {cityInfo.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-estrada-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="text-estrada-green" size={20} />
                    <span className="font-semibold text-estrada-green">População</span>
                  </div>
                  <span className="text-gray-700">{cityInfo.population}</span>
                </div>
                <div className="bg-estrada-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="text-estrada-green" size={20} />
                    <span className="font-semibold text-estrada-green">Altitude</span>
                  </div>
                  <span className="text-gray-700">{cityInfo.altitude}</span>
                </div>
                <div className="bg-estrada-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="text-estrada-green" size={20} />
                    <span className="font-semibold text-estrada-green">Fundação</span>
                  </div>
                  <span className="text-gray-700">{cityInfo.founded}</span>
                </div>
                <div className="bg-estrada-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Mountain className="text-estrada-green" size={20} />
                    <span className="font-semibold text-estrada-green">Área</span>
                  </div>
                  <span className="text-gray-700">{cityInfo.area}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <LazyImage
                src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/cidade_ouro_preto_info.jpg"
                alt="Centro histórico de Ouro Preto"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-estrada-green text-center mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            O que fazer em {cityInfo.name}
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-estrada-green text-white'
                      : 'bg-white text-estrada-green border border-estrada-green hover:bg-estrada-green hover:text-white'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <IconComponent size={16} />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map((activity) => (
              <ExpandableActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CityOuroPreto;