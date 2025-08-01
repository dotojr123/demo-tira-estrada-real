import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Smartphone, MapPin } from 'lucide-react';

const PassaportePage: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState<string[]>([]);
  const [pathCities, setPathCities] = useState<string[]>([]);

  // Função para detectar dispositivo e redirecionar para loja correspondente
  const redirectToStore = () => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    if (/android/i.test(userAgent)) {
      window.open('https://play.google.com/store/apps/details?id=br.com.institutoestradareal&pli=1', '_blank');
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      window.open('https://apps.apple.com/us/app/estrada-real/id1590139708', '_blank');
    } else {
      // Fallback para outros sistemas - abre Google Play por padrão
      window.open('https://play.google.com/store/apps/details?id=br.com.institutoestradareal&pli=1', '_blank');
    }
  };

  // Mapeamento de estados para cidades
  const stateCities: { [key: string]: string[] } = {
    'MG': [
      'Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora', 'Betim', 'Montes Claros',
      'Ribeirão das Neves', 'Uberaba', 'Governador Valadares', 'Ipatinga', 'Sete Lagoas',
      'Divinópolis', 'Santa Luzia', 'Ibirité', 'Poços de Caldas', 'Patos de Minas',
      'Teófilo Otoni', 'Sabará', 'Pouso Alegre', 'Barbacena', 'Varginha', 'Conselheiro Lafaiete',
      'Araguari', 'Itabira', 'Passos', 'Coronel Fabriciano', 'Muriaé', 'Ituiutaba',
      'Lavras', 'Nova Lima', 'Itajubá', 'Pará de Minas', 'Paracatu', 'Caratinga',
      'Nova Serrana', 'São João del-Rei', 'Patrocínio', 'Timóteo', 'Manhuaçu', 'Unaí',
      'Curvelo', 'Alfenas', 'João Monlevade', 'Três Corações', 'Viçosa', 'Cataguases',
      'Ouro Preto', 'Janaúba', 'São Sebastião do Paraíso', 'Januária', 'Formiga',
      'Esmeraldas', 'Pedro Leopoldo', 'Ponte Nova', 'Lagoa Santa', 'Mariana',
      'Frutal', 'Três Pontas', 'São Francisco', 'Pirapora', 'Campo Belo',
      'Leopoldina', 'Congonhas', 'Guaxupé', 'Lagoa da Prata', 'Conceição do Mato Dentro',
      'Tiradentes', 'Diamantina', 'Sabará', 'Serro'
    ],
    'RJ': [
      'Rio de Janeiro', 'São Gonçalo', 'Duque de Caxias', 'Nova Iguaçu', 'Niterói',
      'Belford Roxo', 'São João de Meriti', 'Campos dos Goytacazes', 'Petrópolis',
      'Volta Redonda', 'Magé', 'Macaé', 'Itaboraí', 'Cabo Frio', 'Angra dos Reis',
      'Nova Friburgo', 'Barra Mansa', 'Teresópolis', 'Mesquita', 'Nilópolis',
      'Maricá', 'Queimados', 'Rio das Ostras', 'Resende', 'Araruama',
      'Tanguá', 'Saquarema', 'Paracambi', 'Paraty', 'Três Rios',
      'Valença', 'Vassouras', 'Barra do Piraí', 'Rio Claro', 'Pinheiral'
    ],
    'SP': [
      'São Paulo', 'Guarulhos', 'Campinas', 'São Bernardo do Campo', 'Santo André',
      'Osasco', 'Ribeirão Preto', 'Sorocaba', 'Mauá', 'São José dos Campos',
      'Mogi das Cruzes', 'Diadema', 'Jundiaí', 'Carapicuíba', 'Piracicaba',
      'Bauru', 'São Vicente', 'Itaquaquecetuba', 'Franca', 'Guarujá',
      'Taubaté', 'Praia Grande', 'Limeira', 'Suzano', 'Taboão da Serra',
      'Sumaré', 'Barueri', 'Embu das Artes', 'São Carlos', 'Marília',
      'Indaiatuba', 'Cotia', 'Americana', 'Jacareí', 'Araraquara',
      'Santos', 'Hortolândia', 'Presidente Prudente', 'São José do Rio Preto',
      'Aparecida', 'Areias', 'Arujá', 'Bananal', 'Cachoeira Paulista',
      'Caçapava', 'Campos do Jordão', 'Canas', 'Cruzeiro', 'Cunha',
      'Guaratinguetá', 'Igaratá', 'Lagoinha', 'Lavrinhas', 'Lorena',
      'Natividade da Serra', 'Pindamonhangaba', 'Piquete', 'Potim',
      'Queluz', 'Redenção da Serra', 'Roseira', 'Santa Branca', 'Santa Isabel',
      'São Bento do Sapucaí', 'São José do Barreiro', 'São Luiz do Paraitinga',
      'Silveiras', 'Ubatuba'
    ],
    'ES': [
      'Vitória', 'Vila Velha', 'Cariacica', 'Serra', 'Cachoeiro de Itapemirim',
      'Linhares', 'São Mateus', 'Colatina', 'Guarapari', 'Viana',
      'Nova Venécia', 'Barra de São Francisco', 'Aracruz', 'Alegre',
      'Baixo Guandu', 'Conceição da Barra', 'Itapemirim', 'Marataízes',
      'Pedro Canário', 'Piúma', 'Santa Teresa', 'São Gabriel da Palha',
      'Sooretama', 'Venda Nova do Imigrante', 'Domingos Martins'
    ]
  };

  // Mapeamento de caminhos para cidades
  const pathCitiesMap: { [key: string]: string[] } = {
    'diamantes': [
      'Acaiaca', 'Alvinópolis', 'Alvorada de Minas', 'Antônio Pereira', 'Barão de Cocais',
      'Barra Longa', 'Bela Vista de Minas', 'Bento Rodrigues', 'Bom Jesus do Amparo', 'Brumal',
      'Camargos', 'Carmésia', 'Catas Altas', 'Cocais', 'Conceição do Mato Dentro',
      'Congonhas do Norte', 'Córregos', 'Couto de Magalhães de Minas', 'Datas', 'Diamantina'
    ],
    'novo': [
      'Alfredo Vasconcelos', 'Alto Rio Doce', 'Antônio Carlos', 'Areal', 'Barbacena',
      'Belmiro Braga', 'Bias Fortes', 'Capela Nova', 'Caranaíba', 'Carandaí',
      'Catas Altas da Noruega', 'Chácara', 'Chapada', 'Chiador', 'Cipotânea'
    ],
    'velho': [
      'Aparecida', 'Areias', 'Arujá', 'Bananal', 'Cachoeira Paulista', 'Caçapava',
      'Campos do Jordão', 'Canas', 'Cruzeiro', 'Cunha', 'Guaratinguetá', 'Igaratá',
      'Jacareí', 'Jambeiro', 'Lagoinha', 'Lavrinhas', 'Lorena'
    ],
    'sabarabucu': [
      'Acuruí', 'Brumadinho', 'Caeté', 'Cocais', 'Glaura', 'Honório Bicalho',
      'Itabirito', 'Morro Vermelho', 'Nova Lima', 'Raposos', 'Rio Acima', 'Sabará'
    ]
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const state = event.target.value;
    setSelectedState(state);
    setSelectedCity('');
    
    if (state && stateCities[state]) {
      setCities(stateCities[state].sort());
    } else {
      setCities([]);
    }
  };

  const handlePathChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const path = event.target.value;
    setSelectedPath(path);
    setSelectedCity('');
    
    if (path && pathCitiesMap[path]) {
      setPathCities(pathCitiesMap[path].sort());
    } else {
      setPathCities([]);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Mobile Banner - Nova imagem apenas para mobile */}
      <div className="md:hidden w-full overflow-hidden">
        <img
          src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/Design-sem-nome-1-1-e1752522441923.png"
          alt="Passaporte Estrada Real"
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            margin: '0'
          }}
        />
      </div>
      
      {/* Desktop Banner - Banner original apenas para desktop */}
      <div 
        className="hidden md:block relative w-full h-[400px] md:h-[500px]"
        style={{
          backgroundImage: 'url(http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/Design-sem-nome-6-e1752513599254.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Texto de Introdução */}
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            O Passaporte Estrada Real é um registro único e permite que você acompanhe e registre todas as suas experiências nos caminhos da Estrada Real. Para adquirir o seu, basta preencher o cadastro passaporte.
          </p>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            onClick={() => document.getElementById('cadastro-passaporte')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Preencher Cadastro Passaporte
          </button>
        </div>

        {/* Cartões Passaporte Virtual e Físico */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Passaporte Virtual */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-estrada-green">Passaporte Virtual</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              O passaporte é gratuito e individual, e você o terá no formato virtual; baixe o Aplicativo Estrada Real e adquira o seu! Preencha o Cadastro e tenha acesso a carimbos e certificados exclusivos.
            </p>
          </div>

          {/* Passaporte Físico */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-estrada-green">Passaporte Físico</h3>
            </div>
            <div className="text-gray-700 leading-relaxed mb-6">
              <p className="mb-4">Você também pode ter o passaporte no formato físico, basta solicitar e conferir os locais de retirada.</p>
              
              <p className="mb-2"><strong>1º: Preencha o Cadastro</strong> (O cadastro é único e você poderá preencher pelo Site ou Aplicativo).</p>
              
              <p className="mb-2"><strong>2º: Você irá receber um e-mail de confirmação</strong> com número gerado pelo sistema. Caso não receba este e-mail, entre em contato no e-mail passaporteestradareal@fiemg.com.br ou pelo telefone (31) 3263-4765, informando o número do seu CPF.</p>
              
              <p className="mb-4"><strong>3º: Apresente seu número de código</strong> (impresso ou digital), em um dos pontos de retirada de passaporte, juntamente com 1 kg de alimento não perecível (sugestões: leite em pó ou leite em caixa longa vida, arroz, feijão, massa de tomate, macarrão, óleo), que será doado a alguma instituição local.</p>
            </div>
            <button className="bg-estrada-green hover:bg-estrada-green-light text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
              Ver Pontos de Retirada
            </button>
          </div>
        </div>

        {/* Seção Encontre pontos de retirada */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16 text-center">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-estrada-green leading-tight">
              Pontos de retirada do<br />
              passaporte e de carimbo
            </h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Para saber exatamente qual o Ponto de Retirada de Passaporte e Ponto de Carimbo mais próximo de você, selecione um Caminho e uma cidade ou baixe a lista completa dos locais.
          </p>
          <button 
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            onClick={() => window.open('https://files.institutoestradareal.com.br/files/stamp-points-file/1752165090260/pontos_de_carimbo.pdf', '_blank')}
          >
            Pontos de retirada do passaporte e pontos de carimbo
          </button>
        </div>

        {/* Seção Carimbos, caminhos e certificados */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-estrada-green mb-4">Carimbos, caminhos e certificados</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ao longo da Estrada Real, você obtém carimbos de diversas cidades para preencher seu passaporte e, ao fim da jornada, conseguir um certificado para cada um dos quatro Caminhos.
          </p>
        </div>

        {/* Seção Como funcionam os carimbos? */}
        <div className="bg-estrada-green text-white rounded-xl p-8 mb-8" style={{ backgroundColor: '#1E4F2B' }}>
          <div className="text-center">
            <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Como funcionam os carimbos?</h2>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-4">
              Os carimbos são a prova de que você passou por determinada cidade. Durante o percurso, você encontrará Pontos para Check-in do Passaporte Virtual e diversos Pontos de Carimbo, para seu passaporte físico, espalhados por algumas cidades que fazem parte do Caminho.
            </p>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              Mas lembre, que para completar o passaporte físico, só será aceito um carimbo por cidade e que são cadastrados pelo Instituto Estrada Real. Portanto, conheça bem cada cidade, explore os Pontos de Carimbo e escolha o seu preferido para registrar sua aventura.
            </p>
          </div>
        </div>

        {/* Seção Como conseguir o certificado digital? */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="flex items-start">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-estrada-green mb-6">Como conseguir o certificado digital?</h2>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  <strong>Passaporte Virtual:</strong> Ao desbloquear todos os carimbos de cada caminho, você receberá automaticamente o certificado no seu aplicativo, por caminho.
                </p>
                
                <p className="text-gray-700 mb-6">
                  <strong>Passaporte Físico:</strong> Enviando um e-mail para passaporteestradareal@fiemg.com.br, com imagens da página inicial do passaporte e páginas com carimbos, para conferência, encaminhamos por e-mail o certificado que poderá ser impresso. Entretanto, para o passaporte físico cada Caminho exige seu número mínimo de carimbos:
                </p>
                
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Caminho dos Diamantes:</strong> 10 carimbos</li>
                  <li><strong>Caminho Novo:</strong> 08 carimbos</li>
                  <li><strong>Caminho Velho:</strong> 14 carimbos</li>
                  <li><strong>Caminho de Sabarabuçu:</strong> 04 carimbos</li>
                </ul>
              </div>
            </div>
            
            <div className="ml-8 flex-shrink-0 hidden md:block">
              <div className="bg-estrada-green w-20 h-20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Certificado Especial */}
        <div className="text-center mb-16">
          <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-estrada-green mb-4">Certificado Especial</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Os viajantes que percorrerem os 4 Caminhos da Estrada Real receberão um Certificado Especial.
          </p>
        </div>

        {/* Seção Conheça a Estrada Real - Passaporte */}
        <div className="bg-orange-500 rounded-xl p-8 mb-8">
          <div className="text-center text-white mb-8">
            <h2 className="mb-2">
              <div className="text-lg font-normal tracking-normal">Conheça a</div>
              <div className="text-4xl font-black tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>ESTRADA REAL</div>
              <div className="text-lg font-normal">Passaporte</div>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div>
              <label htmlFor="path-select" className="block text-white font-medium mb-2">
                Selecione o caminho...
              </label>
              <select
                id="path-select"
                value={selectedPath}
                onChange={handlePathChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-estrada-green focus:border-transparent text-gray-700"
              >
                <option value="">Escolha um caminho...</option>
                <option value="diamantes">Caminho dos Diamantes</option>
                <option value="novo">Caminho Novo</option>
                <option value="velho">Caminho Velho</option>
                <option value="sabarabucu">Caminho de Sabarabuçu</option>
              </select>
            </div>

            <div>
              <label htmlFor="path-city-select" className="block text-white font-medium mb-2">
                Selecione a cidade...
              </label>
              <select
                id="path-city-select"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-estrada-green focus:border-transparent text-gray-700"
                disabled={!selectedPath}
              >
                <option value="">Escolha uma cidade...</option>
                {pathCities.map((city, index) => (
                  <option key={index} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Mapa Interativo */}
        <div className="mb-16">
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1rLjsXl8dt3hVZWcc19erCnQhxOMAP8w&ehbc=2E312F"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Mapa dos Pontos de Passaporte"
            />
          </div>
        </div>

        {/* Botão Download PDF */}
        <div className="text-center mb-12">
          <button 
            className="bg-estrada-green hover:bg-estrada-green-light text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            onClick={() => window.open('https://files.institutoestradareal.com.br/files/stamp-points-file/1752165090260/pontos_de_carimbo.pdf', '_blank')}
          >
            Baixe o PDF com todos os pontos de retirada do passaporte
          </button>
        </div>

        {/* Formulário de Cadastro */}
        <div id="cadastro-passaporte" className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-estrada-green text-center mb-8">Cadastro do Passaporte</h2>
          
          <form className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Nacionalidade */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nacionalidade *</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-estrada-green focus:border-transparent">
                  <option value="">Selecione...</option>
                  <option value="brasil">Brasil</option>
                  <option value="estrangeiro">Estrangeiro</option>
                </select>
              </div>

              {/* E-mail */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">E-mail *</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-estrada-green focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Repita o E-mail */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Repita o E-mail *</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-estrada-green focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              {/* CPF */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">CPF *</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-estrada-green focus:border-transparent"
                  placeholder="000.000.000-00"
                />
              </div>

              {/* Nome */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nome *</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-estrada-green focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* Data de Nascimento */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Data de Nascimento *</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-estrada-green focus:border-transparent"
                />
              </div>

              {/* Gênero */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Gênero *</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-estrada-green focus:border-transparent">
                  <option value="">Selecione...</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              {/* Como percorrer */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Como percorrer *</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-estrada-green focus:border-transparent">
                  <option value="">Selecione...</option>
                  <option value="pe">A pé</option>
                  <option value="bicicleta">Bicicleta</option>
                  <option value="carro">Carro</option>
                  <option value="moto">Moto</option>
                  <option value="cavalo">Cavalo</option>
                </select>
              </div>

              {/* Estado */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Estado *</label>
                <select
                  value={selectedState}
                  onChange={handleStateChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-estrada-green focus:border-transparent"
                >
                  <option value="">Selecione...</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="SP">São Paulo</option>
                  <option value="ES">Espírito Santo</option>
                </select>
              </div>

              {/* Cidade */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Cidade *</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-estrada-green focus:border-transparent"
                  disabled={!selectedState}
                >
                  <option value="">Selecione uma cidade...</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Botão Enviar */}
            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-estrada-green hover:bg-estrada-green-light text-white font-semibold py-3 px-12 rounded-lg transition-colors duration-200"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>

        {/* Seção Baixar App Estrada Real */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16 text-center">
          {/* Título */}
          <h2 className="text-2xl md:text-3xl font-bold text-estrada-green mb-8">
            Baixar Aplicativo Estrada Real
          </h2>

          {/* Botão principal laranja */}
          <div>
            <button 
              onClick={redirectToStore}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-200 text-lg"
            >
              Download do Aplicativo
            </button>
          </div>

          {/* Ícones das lojas de aplicativos */}
          <div className="flex justify-center items-center gap-6 mt-8">
            {/* Apple Store */}
            <a 
              href="https://apps.apple.com/us/app/estrada-real/id1590139708"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-105"
            >
              <img
                src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/itunes-app-store-apple-logo-portable-network-graphics-png-favpng-UKEpRYur5ivzhqLqVM99XbTAq-e1752530439198.jpg"
                alt="Baixar na Apple Store"
                className="w-24 md:w-28 h-auto"
              />
            </a>

            {/* Google Play */}
            <a 
              href="https://play.google.com/store/apps/details?id=br.com.institutoestradareal&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-105"
            >
              <img
                src="http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/app-store-155321571-e1752530476624.png"
                alt="Baixar no Google Play"
                className="w-24 md:w-28 h-auto"
              />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PassaportePage;