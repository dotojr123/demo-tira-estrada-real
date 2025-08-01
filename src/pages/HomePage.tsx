import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const cities = [
    {
      id: 1,
      name: 'Conceição do Mato Dentro',
      description: 'Portal do Caminho dos Diamantes, com a majestosa Cachoeira do Tabuleiro',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/Conceicao-do-Mato-Dentro.revistasagarana.fotocezarfelixCFX_0342-2.jpg',
      path: '/cidade/conceicao-do-mato-dentro'
    },
    {
      id: 2,
      name: 'Tiradentes',
      description: 'Cidade histórica com arquitetura colonial preservada e gastronomia premiada',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/igreja-matriz-de-santo-antonio-tiradentes-mg-1200x675-1.jpg',
      path: '/cidade/tiradentes'
    },
    {
      id: 3,
      name: 'São João del-Rei',
      description: 'A Terra onde os sinos falam, berço da música colonial mineira',
      image: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/igreja-sao-francisco-de-assis-sao-joao-del-rei-1200x675-1.jpg',
      path: '/cidade/sao-joao-del-rei'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/minas-gerais-1-1.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Descubra a Maior Rota Turística da América Latina!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Mais de 1.630 km de história, cultura e natureza.
          </p>
          <button 
            onClick={() => document.getElementById('cities')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold text-lg flex items-center gap-2 mx-auto transition-all duration-300 transform hover:scale-105"
          >
            Explore Agora
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Cities Section */}
      <div id="cities" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-estrada-green flex items-center justify-center gap-3 mb-4">
            <Compass className="w-8 h-8" />
            Conheça as Cidades da Estrada Real
          </h2>
          <p className="text-gray-600 text-lg">
            Explore destinos únicos cheios de história, cultura e belezas naturais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => (
            <div
              key={city.id}
              onClick={() => navigate(city.path)}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="relative h-64">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-estrada-green mb-2 group-hover:text-amber-600 transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {city.description}
                  </p>
                  <div className="flex items-center text-amber-500 font-medium">
                    Conhecer cidade
                    <ChevronRight className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;