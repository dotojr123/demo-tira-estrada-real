import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const EmpreendimentoCadastroPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('bienal');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [serviceType, setServiceType] = useState('hospedagem');
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    areaNegocio: '',
    razaoSocial: '',
    nomeFantasia: '',
    nomeResponsavel: '',
    documento: '',
    telefone: '',
    cep: '',
    estado: '',
    cidade: '',
    logradouro: '',
    numero: '',
    bairro: '',
    complemento: '',
    email: '',
    repetirEmail: '',
    senha: '',
    repetirSenha: ''
  });

  // Garantir que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Cadastro enviado:', { 
      ...formData, 
      serviceType, 
      plano: selectedPlan 
    });
  };

  const areasNegocio = [
    'Albergue',
    'Alojamento Coletivo',
    'Alojamento de Floresta',
    'Cama e Café',
    'Camping',
    'Colônia de Férias',
    'Estalagem/Hospedaria',
    'Flat/Apart-Hotel',
    'Hospedagem Conventual (Mosteiro/Seminário/Convento)',
    'Hospedagem Familiar',
    'Hotel',
    'Hotel de Trânsito',
    'Hotel Fazenda',
    'Hotel Histórico',
    'Motel',
    'Outros',
    'Pensão',
    'Pousada',
    'Resort',
    'Spa'
  ];

  const estados = [
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'ES', label: 'Espírito Santo' }
  ];

  const plans = [
    {
      id: 'ouro',
      name: 'OURO',
      price: 'R$ 400,00/mês',
      color: '#FFD700',
      textColor: '#B99628',
      subtitle: 'Todos os itens do plano Prata e com novos itens para incrementar seu perfil.',
      priceDetails: [
        'R$ 4.800,00 com pagamento em até 12x.',
        'Pagamento com Cartão de Crédito,<br />Cartão de Débito, Boleto.'
      ],
      features: [
        'Categoria',
        'CNPJ',
        'Razão Social',
        'Nome Fantasia',
        'Nome do Responsável',
        'Documento do Responsável',
        'Telefone do Responsável',
        'CEP',
        'Estado',
        'Cidade',
        'Logradouro',
        'Número',
        'Bairro',
        'Complemento',
        'E-mail',
        'Site',
        'Instagram',
        'Facebook',
        'WhatsApp',
        'Descrição completa',
        'Até 10 fotos'
      ]
    },
    {
      id: 'prata',
      name: 'PRATA',
      price: 'R$ 200,00/mês',
      color: '#C0C0C0',
      textColor: '#9E9E9E',
      subtitle: 'Todos os itens do plano Gratuito e com novos itens para incrementar seu perfil.',
      priceDetails: [
        'R$ 2.400,00 com pagamento em até 12x.',
        'Pagamento com Cartão de Crédito,<br />Cartão de Débito, Boleto.'
      ],
      features: [
        'Categoria',
        'CNPJ',
        'Razão Social',
        'Nome Fantasia',
        'Nome do Responsável',
        'Telefone do Responsável',
        'CEP',
        'Estado',
        'Cidade',
        'E-mail',
        'Site',
        'Instagram',
        'Descrição básica',
        'Até 5 fotos'
      ]
    },
    {
      id: 'gratuito',
      name: 'GRATUITO',
      price: 'R$ 0,00',
      color: '#BFBFBF',
      textColor: '#6B7280',
      features: [
        'Nome Fantasia',
        'Telefone',
        'Cidade',
        'E-mail',
        'Descrição básica',
        'Até 2 fotos'
      ]
    }
  ];

  const plansAnual = [
    {
      id: 'ouro-anual',
      name: 'OURO',
      price: 'R$ 200,00/mês',
      color: '#FFD700',
      textColor: '#B59A27',
      subtitle: 'Todos os itens do plano Prata e com novos itens para incrementar seu perfil.',
      priceDetails: [
        'R$ 2.400,00 com pagamento em até 12x.',
        'Pagamento com Cartão de Crédito,<br />Cartão de Débito, Boleto.'
      ],
      features: [
        'Categoria',
        'CNPJ',
        'Razão Social',
        'Nome Fantasia',
        'Endereço',
        'E-mail',
        'Telefone',
        'Site',
        'Descrição 1000 carac.',
        'Localização',
        'Redes sociais',
        'Até 10 fotos'
      ]
    },
    {
      id: 'prata-anual',
      name: 'PRATA',
      price: 'R$ 100,00/mês',
      color: '#C0C0C0',
      textColor: '#9E9E9E',
      subtitle: 'Todos os itens do plano Gratuito e com novos itens para incrementar seu perfil.',
      priceDetails: [
        'R$ 1.200,00 com pagamento em até 12x.',
        'Pagamento com Cartão de Crédito,<br />Cartão de Débito, Boleto.'
      ],
      features: [
        'Categoria',
        'CNPJ',
        'Razão Social',
        'Nome Fantasia',
        'Endereço',
        'E-mail',
        'Telefone',
        'Site',
        'Descrição 500 carac.',
        'Até 5 fotos'
      ]
    }
  ];

  const serviceTypes = [
    { id: 'hospedagem', label: 'HOSPEDAGEM' },
    { id: 'alimentacao', label: 'ALIMENTAÇÃO' },
    { id: 'equipamentos', label: 'EQUIPAMENTOS DE APOIO' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="hero relative flex items-center justify-center"
        style={{
          height: '280px',
          backgroundImage: 'url(https://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-22-de-jul.-de-2025-13_50_36.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))' }}
        />
        
        <style>
          {`
            @media (min-width: 768px) {
              .hero {
                height: 280px !important;
              }
            }
          `}
        </style>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 
            className="mb-4"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '800',
              color: '#FFFFFF',
              lineHeight: '1.1'
            }}
          >
            <span className="md:hidden" style={{ fontSize: '48px' }}>CADASTRE</span>
            <span className="hidden md:block" style={{ fontSize: '64px' }}>CADASTRE</span>
          </h1>
          
          <h2 
            className="italic"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              fontStyle: 'italic',
              fontSize: '22px',
              color: '#FFFFFFB3',
              lineHeight: '1.2'
            }}
          >
            <span className="md:hidden">SEU EMPREENDIMENTO</span>
            <span className="hidden md:block" style={{ fontSize: '28px' }}>SEU EMPREENDIMENTO</span>
          </h2>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-[1200px] mx-auto px-4">
          <div 
            className="grid grid-cols-1 gap-8 items-start"
            style={{
              gridTemplateColumns: 'repeat(1, 1fr)',
              gap: '32px'
            }}
          >
            <style>
              {`
                @media (min-width: 1024px) {
                  .wrapper-form {
                    display: grid !important;
                    grid-template-columns: 2fr 460px !important;
                    gap: 48px !important;
                    align-items: start !important;
                  }
                }
              `}
            </style>
            
            <div className="wrapper-form grid grid-cols-1 lg:grid-cols-[2fr_460px] gap-8 lg:gap-12 items-start">
            <div className="w-full">
              <form onSubmit={handleSubmit} className="space-y-12">
                
                {/* Seção 1: Sobre o estabelecimento */}
                <div className="bg-white rounded-lg p-8 border-b-4 border-estrada-green">
                  <h3 
                    className="text-2xl font-bold text-estrada-green mb-6"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Sobre o estabelecimento
                  </h3>
                  
                  {/* Pergunta sobre tipo de serviço */}
                  <div className="mb-8">
                    <p 
                      className="text-lg font-semibold text-gray-800 mb-4"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Qual é o tipo de serviço que sua empresa oferece?
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      {serviceTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setServiceType(type.id)}
                          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                            serviceType === type.id
                              ? 'bg-estrada-green text-white'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                    
                    {/* Campo hidden para service_type */}
                    <input type="hidden" name="service_type" value={serviceType} />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Área de negócio */}
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Área de negócio*
                      </label>
                      <div className="relative">
                        <select
                          name="areaNegocio"
                          value={formData.areaNegocio}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: '100%',
                            height: '48px',
                            border: '2px solid #0C5340',
                            borderRadius: '6px',
                            paddingLeft: '16px',
                            paddingRight: '40px',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '1rem',
                            outline: 'none',
                            appearance: 'none',
                            backgroundColor: 'white'
                          }}
                        >
                          <option value="">Selecione...</option>
                          {areasNegocio.map((area, index) => (
                            <option key={index} value={area}>{area}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Razão social */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Razão social*
                      </label>
                      <input
                        type="text"
                        name="razaoSocial"
                        value={formData.razaoSocial}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #0C5340',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    {/* Nome fantasia */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Nome fantasia*
                      </label>
                      <input
                        type="text"
                        name="nomeFantasia"
                        value={formData.nomeFantasia}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #0C5340',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    {/* Nome do responsável */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Nome do responsável*
                      </label>
                      <input
                        type="text"
                        name="nomeResponsavel"
                        value={formData.nomeResponsavel}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #0C5340',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    {/* Documento do responsável */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Documento do responsável*
                      </label>
                      <input
                        type="text"
                        name="documento"
                        value={formData.documento}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #0C5340',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    {/* Telefone do responsável */}
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Telefone do responsável*
                      </label>
                      <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #0C5340',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Seção 2: Endereço */}
                <div className="bg-white rounded-lg p-8 border-b-4 border-estrada-green">
                  <h3 
                    className="text-2xl font-bold text-estrada-green mb-6"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Endereço
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* CEP */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        CEP*
                      </label>
                      <input
                        type="text"
                        name="cep"
                        value={formData.cep}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #0C5340',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    {/* Estado */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Estado*
                      </label>
                      <div className="relative">
                        <select
                          name="estado"
                          value={formData.estado}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: '100%',
                            height: '48px',
                            border: '2px solid #0C5340',
                            borderRadius: '6px',
                            paddingLeft: '16px',
                            paddingRight: '40px',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '1rem',
                            outline: 'none',
                            appearance: 'none',
                            backgroundColor: 'white'
                          }}
                        >
                          <option value="">Selecione...</option>
                          {estados.map((estado) => (
                            <option key={estado.value} value={estado.value}>{estado.label}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Cidade */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Cidade*
                      </label>
                      <input
                        type="text"
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #0C5340',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    {/* Logradouro */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Logradouro*
                      </label>
                      <input
                        type="text"
                        name="logradouro"
                        value={formData.logradouro}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #0C5340',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    {/* Número */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Número*
                      </label>
                      <input
                        type="text"
                        name="numero"
                        value={formData.numero}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #0C5340',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    {/* Bairro */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Bairro*
                      </label>
                      <input
                        type="text"
                        name="bairro"
                        value={formData.bairro}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #0C5340',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    {/* Complemento */}
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Complemento
                      </label>
                      <input
                        type="text"
                        name="complemento"
                        value={formData.complemento}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #0C5340',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Seção 3: Dados para login */}
                <div className="bg-white rounded-lg p-8 border-b-4 border-estrada-green">
                  <h3 
                    className="text-2xl font-bold text-estrada-green mb-6"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Dados para login
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* E-mail */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        E-mail*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #0C5340',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    {/* Repita e-mail */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Repita e-mail*
                      </label>
                      <input
                        type="email"
                        name="repetirEmail"
                        value={formData.repetirEmail}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #0C5340',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    {/* Senha */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Senha*
                      </label>
                      <input
                        type="password"
                        name="senha"
                        value={formData.senha}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #0C5340',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    {/* Repita senha */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Repita senha*
                      </label>
                      <input
                        type="password"
                        name="repetirSenha"
                        value={formData.repetirSenha}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #0C5340',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Seção 4: Pacotes */}
                <div className="bg-white rounded-lg p-8 border-b-4 border-estrada-green">
                  <h3 
                    className="text-2xl font-bold text-estrada-green mb-6"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Escolha seu plano
                  </h3>
                  
                  {/* Tabs centralizadas */}
                  <div className="flex justify-center flex-wrap gap-2 mb-8">
                    <button
                      type="button"
                      onClick={() => setActiveTab('bienal')}
                      className={`px-6 py-3 rounded-full font-semibold transition-colors duration-200 ${
                        activeTab === 'bienal'
                          ? 'bg-estrada-green text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Bienal
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('anual')}
                      className={`px-6 py-3 rounded-full font-semibold transition-colors duration-200 ${
                        activeTab === 'anual'
                          ? 'bg-estrada-green text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Anual
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('mensal')}
                      className={`px-6 py-3 rounded-full font-semibold transition-colors duration-200 ${
                        activeTab === 'mensal'
                          ? 'bg-estrada-green text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Mensal
                    </button>
                  </div>

                  {/* Tab Content */}
                  {activeTab === 'bienal' && (
                    <div className="space-y-6 max-w-[440px] mx-auto">
                      {plans.map((plan) => (
                        <div
                          key={plan.id}
                          className="border-2 rounded-lg"
                          style={{ 
                            borderColor: '#0C5340',
                            borderRadius: '8px',
                            width: '100%',
                            padding: '28px',
                            boxShadow: '0 2px 6px rgba(12, 83, 64, 0.14)'
                          }}
                        >
                          {/* Título */}
                          <h4 
                            className="mb-4"
                            style={{ 
                              fontFamily: 'Poppins, sans-serif',
                              fontSize: '24px',
                              fontWeight: '800',
                              color: plan.textColor
                            }}
                          >
                            {plan.name}
                          </h4>
                          
                          {/* Subtítulo (apenas para OURO e PRATA) */}
                          {plan.subtitle && (
                            <p 
                              className="mb-6 max-w-full"
                              style={{ 
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '15px',
                                color: '#333333',
                                lineHeight: '1.4',
                                textAlign: 'center'
                              }}
                            >
                              {plan.subtitle}
                            </p>
                          )}
                          
                          {/* Preço (apenas para OURO e PRATA) */}
                          {plan.priceDetails ? (
                            <div className="mb-6 text-center">
                              <div 
                                className="mb-2"
                                style={{ 
                                  fontFamily: 'Poppins, sans-serif',
                                  fontSize: '32px',
                                  fontWeight: 'bold',
                                  color: '#000000'
                                }}
                              >
                                {plan.price}
                              </div>
                              <div className="space-y-1">
                                {plan.priceDetails.map((detail, index) => (
                                  <div 
                                    key={index}
                                    className="max-w-full"
                                    style={{ 
                                      fontFamily: 'Poppins, sans-serif',
                                      fontSize: '13px',
                                      color: '#444444',
                                      margin: 0,
                                      textAlign: 'center',
                                      marginBottom: index === plan.priceDetails.length - 1 ? '24px' : '0'
                                    }}
                                    dangerouslySetInnerHTML={{ __html: detail }}
                                  />
                                ))}
                              </div>
                            </div>
                          ) : (
                            <p 
                              className="text-lg font-semibold mb-4"
                              style={{ 
                                fontFamily: 'Poppins, sans-serif',
                                color: '#333333'
                              }}
                            >
                              {plan.price}
                            </p>
                          )}
                          
                          {/* Checkbox */}
                          <div className="mb-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name="plano"
                                value={plan.id}
                                checked={selectedPlan === plan.id}
                                onChange={(e) => setSelectedPlan(e.target.value)}
                                className="w-4 h-4"
                              />
                              <span 
                                className="font-medium"
                                style={{ fontFamily: 'Poppins, sans-serif', color: '#0C5340' }}
                              >
                                QUERO ESSE PLANO
                              </span>
                            </label>
                          </div>
                          
                          {/* Termos (apenas para OURO e PRATA) */}
                          {plan.priceDetails && (
                            <div className="mb-4">
                              <p 
                                style={{ 
                                  fontFamily: 'Poppins, sans-serif',
                                  fontSize: '12px',
                                  color: '#333333',
                                  margin: 0
                                }}
                              >
                                Ao selecionar o plano, você concorda com os{' '}
                                <a 
                                  href="#"
                                  style={{ 
                                    color: '#0C5340',
                                    textDecoration: 'underline'
                                  }}
                                >
                                  TERMOS DE USO
                                </a>
                                .
                              </p>
                            </div>
                          )}
                          
                          {/* Link termos antigo (apenas para GRATUITO) */}
                          {!plan.priceDetails && (
                            <div className="mb-4">
                              <a 
                                href="#"
                                className="text-sm text-blue-600 hover:text-blue-800 underline"
                                style={{ fontFamily: 'Poppins, sans-serif' }}
                              >
                                Ver termos e condições
                              </a>
                            </div>
                          )}
                          
                          {/* Botão expansor */}
                          <button
                            type="button"
                            onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                            className="w-full font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                            style={{ 
                              fontFamily: 'Poppins, sans-serif',
                              backgroundColor: '#0C5340',
                              color: '#FFFFFF',
                              borderRadius: '4px',
                              padding: '10px 18px',
                              border: 'none',
                              cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#09402E';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#0C5340';
                            }}
                          >
                            {expandedPlan === plan.id ? 'OCULTAR' : 'O QUE O PLANO OFERECE'}
                            {expandedPlan === plan.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                          
                          {/* Features expandidas */}
                          {expandedPlan === plan.id && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              {plan.id === 'gratuito' ? (
                                <p 
                                  className="text-gray-700"
                                  style={{ 
                                    fontFamily: 'Poppins, sans-serif', 
                                    fontSize: '0.9rem',
                                    textAlign: 'center',
                                    margin: 0
                                  }}
                                >
                                  Todos os itens básicos para incrementar seu perfil.
                                </p>
                              ) : (
                                <ul className="space-y-2">
                                  {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                      <span className="text-estrada-green font-bold">✓</span>
                                      <span 
                                        className="text-gray-700"
                                        style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem' }}
                                      >
                                        {feature}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'anual' && (
                    <div className="space-y-6 max-w-[440px] mx-auto">
                      {plansAnual.map((plan) => (
                        <div
                          key={plan.id}
                          className="border-2 rounded-lg"
                          style={{ 
                            borderColor: '#0C5340',
                            borderRadius: '8px',
                            width: '100%',
                            padding: '28px',
                            boxShadow: '0 2px 6px rgba(12, 83, 64, 0.14)'
                          }}
                        >
                          {/* Título */}
                          <h4 
                            className="mb-4"
                            style={{ 
                              fontFamily: 'Poppins, sans-serif',
                              fontSize: '24px',
                              fontWeight: '800',
                              color: plan.textColor
                            }}
                          >
                            {plan.name}
                          </h4>
                          
                          {/* Subtítulo */}
                          <p 
                            className="mb-6 max-w-full"
                            style={{ 
                              fontFamily: 'Poppins, sans-serif',
                              fontSize: '15px',
                              color: '#333333',
                              lineHeight: '1.4',
                              textAlign: 'center'
                            }}
                          >
                            {plan.subtitle}
                          </p>
                          
                          {/* Preço */}
                          <div className="mb-6 text-center">
                            <div 
                              className="mb-2"
                              style={{ 
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '32px',
                                fontWeight: 'bold',
                                color: '#000000'
                              }}
                            >
                              {plan.price}
                            </div>
                            <div className="space-y-1">
                              {plan.priceDetails.map((detail, index) => (
                                <div 
                                  key={index}
                                  className="max-w-full"
                                  style={{ 
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '13px',
                                    color: '#444444',
                                    margin: 0,
                                    textAlign: 'center',
                                    marginBottom: index === plan.priceDetails.length - 1 ? '24px' : '0'
                                  }}
                                  dangerouslySetInnerHTML={{ __html: detail }}
                                />
                              ))}
                            </div>
                          </div>
                          
                          {/* Checkbox */}
                          <div className="mb-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name="plano"
                                value={plan.id}
                                checked={selectedPlan === plan.id}
                                onChange={(e) => setSelectedPlan(e.target.value)}
                                className="w-4 h-4"
                              />
                              <span 
                                className="font-medium"
                                style={{ fontFamily: 'Poppins, sans-serif', color: '#0C5340' }}
                              >
                                QUERO ESSE PLANO
                              </span>
                            </label>
                          </div>
                          
                          {/* Termos */}
                          <div className="mb-4">
                            <p 
                              style={{ 
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '12px',
                                color: '#333333',
                                margin: 0
                              }}
                            >
                              Ao selecionar o plano, você concorda com os{' '}
                              <a 
                                href="#"
                                style={{ 
                                  color: '#0C5340',
                                  textDecoration: 'underline'
                                }}
                              >
                                TERMOS DE USO
                              </a>
                              .
                            </p>
                          </div>
                          
                          {/* Botão expansor */}
                          <button
                            type="button"
                            onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                            className="w-full font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                            style={{ 
                              fontFamily: 'Poppins, sans-serif',
                              backgroundColor: '#0C5340',
                              color: '#FFFFFF',
                              borderRadius: '4px',
                              padding: '10px 18px',
                              border: 'none',
                              cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#09402E';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#0C5340';
                            }}
                          >
                            {expandedPlan === plan.id ? 'OCULTAR' : 'O QUE O PLANO OFERECE'}
                            {expandedPlan === plan.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                          
                          {/* Features expandidas */}
                          {expandedPlan === plan.id && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <ul className="space-y-2">
                                {plan.features.map((feature, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <span className="text-estrada-green font-bold">✓</span>
                                    <span 
                                      className="text-gray-700"
                                      style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem' }}
                                    >
                                      {feature}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                      
                      {/* Card GRATUITO para aba Anual */}
                      <div
                        className="border-2 rounded-lg"
                        style={{ 
                          borderColor: '#0C5340',
                          borderRadius: '8px',
                          width: '100%',
                          padding: '28px',
                          boxShadow: '0 2px 6px rgba(12, 83, 64, 0.14)'
                        }}
                      >
                        {/* Título */}
                        <h4 
                          className="mb-4"
                          style={{ 
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '24px',
                            fontWeight: '800',
                            color: '#6B7280'
                          }}
                        >
                          GRATUITO
                        </h4>
                        
                        {/* Preço */}
                        <p 
                          className="text-lg font-semibold mb-4"
                          style={{ 
                            fontFamily: 'Poppins, sans-serif',
                            color: '#333333'
                          }}
                        >
                          R$ 0,00
                        </p>
                        
                        {/* Checkbox */}
                        <div className="mb-4">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="plano"
                              value="gratuito-anual"
                              checked={selectedPlan === 'gratuito-anual'}
                              onChange={(e) => setSelectedPlan(e.target.value)}
                              className="w-4 h-4"
                            />
                            <span 
                              className="font-medium"
                              style={{ fontFamily: 'Poppins, sans-serif', color: '#0C5340' }}
                            >
                              QUERO ESSE PLANO
                            </span>
                          </label>
                        </div>
                        
                        {/* Link termos */}
                        <div className="mb-4">
                          <a 
                            href="#"
                            className="text-sm text-blue-600 hover:text-blue-800 underline"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                          >
                            Ver termos e condições
                          </a>
                        </div>
                        
                        {/* Botão expansor */}
                        <button
                          type="button"
                          onClick={() => setExpandedPlan(expandedPlan === 'gratuito-anual' ? null : 'gratuito-anual')}
                          className="w-full font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                          style={{ 
                            fontFamily: 'Poppins, sans-serif',
                            backgroundColor: '#0C5340',
                            color: '#FFFFFF',
                            borderRadius: '4px',
                            padding: '10px 18px',
                            border: 'none',
                            cursor: 'pointer'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#09402E';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#0C5340';
                          }}
                        >
                          {expandedPlan === 'gratuito-anual' ? 'OCULTAR' : 'O QUE O PLANO OFERECE'}
                          {expandedPlan === 'gratuito-anual' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        
                        {/* Features expandidas */}
                        {expandedPlan === 'gratuito-anual' && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p 
                              className="text-gray-700"
                              style={{ 
                                fontFamily: 'Poppins, sans-serif', 
                                fontSize: '0.9rem',
                                textAlign: 'center',
                                margin: 0
                              }}
                            >
                              Todos os itens básicos para incrementar seu perfil.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {activeTab === 'mensal' && (
                    <div className="space-y-6 max-w-[440px] mx-auto">
                      {/* OURO Card */}
                      <div
                        className="border-2 rounded-lg"
                        style={{ 
                          borderColor: '#0C5340',
                          borderRadius: '8px',
                          width: '100%',
                          padding: '28px',
                          boxShadow: '0 2px 6px rgba(12, 83, 64, 0.14)'
                        }}
                      >
                        {/* Título */}
                        <h4 
                          className="mb-4"
                          style={{ 
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '24px',
                            fontWeight: '800',
                            color: '#B49500'
                          }}
                        >
                          OURO
                        </h4>
                        
                        {/* Subtítulo */}
                        <p 
                          className="mb-6 max-w-full"
                          style={{ 
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '15px',
                            color: '#333333',
                            lineHeight: '1.4',
                            textAlign: 'center'
                          }}
                        >
                          Todos os itens do plano Prata e com novos itens para incrementar seu perfil.
                        </p>
                        
                        {/* Preço */}
                        <div className="mb-6 text-center">
                          <div 
                            className="mb-2"
                            style={{ 
                              fontFamily: 'Poppins, sans-serif',
                              fontSize: '32px',
                              fontWeight: 'bold',
                              color: '#000000'
                            }}
                          >
                            R$ 499,00<span style={{ fontSize: '18px', fontWeight: '400' }}>/mês</span>
                          </div>
                          <div className="space-y-1">
                            <div 
                              className="max-w-full"
                              style={{ 
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '13px',
                                color: '#444444',
                                margin: 0,
                                textAlign: 'center',
                                marginBottom: '0'
                              }}
                            >
                              – Pagamento recorrente.<br />
                              – Pagamento com Cartão de Crédito.
                            </div>
                          </div>
                        </div>
                        
                        {/* Checkbox */}
                        <div className="mb-4">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="plano"
                              value="mensal-ouro"
                              checked={selectedPlan === 'mensal-ouro'}
                              onChange={(e) => setSelectedPlan(e.target.value)}
                              className="w-4 h-4"
                            />
                            <span 
                              className="font-medium"
                              style={{ fontFamily: 'Poppins, sans-serif', color: '#0C5340' }}
                            >
                              QUERO ESSE PLANO
                            </span>
                          </label>
                        </div>
                        
                        {/* Termos */}
                        <div className="mb-4">
                          <p 
                            style={{ 
                              fontFamily: 'Poppins, sans-serif',
                              fontSize: '12px',
                              color: '#333333',
                              margin: 0
                            }}
                          >
                            Ao selecionar o plano, você concorda com os{' '}
                            <a 
                              href="#"
                              style={{ 
                                color: '#0C5340',
                                textDecoration: 'underline'
                              }}
                            >
                              TERMOS DE USO
                            </a>
                            .
                          </p>
                        </div>
                        
                        {/* Botão expansor */}
                        <button
                          type="button"
                          onClick={() => setExpandedPlan(expandedPlan === 'mensal-ouro' ? null : 'mensal-ouro')}
                          className="w-full font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                          style={{ 
                            fontFamily: 'Poppins, sans-serif',
                            backgroundColor: '#0C5340',
                            color: '#FFFFFF',
                            borderRadius: '4px',
                            padding: '10px 18px',
                            border: 'none',
                            cursor: 'pointer'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#09402E';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#0C5340';
                          }}
                        >
                          {expandedPlan === 'mensal-ouro' ? 'OCULTAR' : 'O QUE O PLANO OFERECE'}
                          {expandedPlan === 'mensal-ouro' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        
                        {/* Features expandidas */}
                        {expandedPlan === 'mensal-ouro' && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <ul className="space-y-2">
                              {[
                                'Categoria',
                                'CNPJ',
                                'Razão Social',
                                'Nome Fantasia',
                                'Endereço',
                                'E-mail de Contato',
                                'Telefone',
                                'Site',
                                'Descrição até 1.000 caracteres',
                                'Localização (latitude/longitude) e como chegar',
                                'Redes sociais',
                                'Até 10 fotos'
                              ].map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <span className="text-estrada-green font-bold">✓</span>
                                  <span 
                                    className="text-gray-700"
                                    style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem' }}
                                  >
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* GRATUITO Card */}
                      <div
                        className="border-2 rounded-lg"
                        style={{ 
                          borderColor: '#0C5340',
                          borderRadius: '8px',
                          width: '100%',
                          padding: '28px',
                          boxShadow: '0 2px 6px rgba(12, 83, 64, 0.14)'
                        }}
                      >
                        {/* Título */}
                        <h4 
                          className="mb-4"
                          style={{ 
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '24px',
                            fontWeight: '800',
                            color: '#6B7280'
                          }}
                        >
                          GRATUITO
                        </h4>
                        
                        {/* Preço */}
                        <p 
                          className="text-lg font-semibold mb-4"
                          style={{ 
                            fontFamily: 'Poppins, sans-serif',
                            color: '#333333'
                          }}
                        >
                          R$ 0,00
                        </p>
                        
                        {/* Checkbox */}
                        <div className="mb-4">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="plano"
                              value="mensal-gratuito"
                              checked={selectedPlan === 'mensal-gratuito'}
                              onChange={(e) => setSelectedPlan(e.target.value)}
                              className="w-4 h-4"
                            />
                            <span 
                              className="font-medium"
                              style={{ fontFamily: 'Poppins, sans-serif', color: '#0C5340' }}
                            >
                              QUERO ESSE PLANO
                            </span>
                          </label>
                        </div>
                        
                        {/* Link termos */}
                        <div className="mb-4">
                          <a 
                            href="#"
                            className="text-sm text-blue-600 hover:text-blue-800 underline"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                          >
                            Ver termos e condições
                          </a>
                        </div>
                        
                        {/* Botão expansor */}
                        <button
                          type="button"
                          onClick={() => setExpandedPlan(expandedPlan === 'mensal-gratuito' ? null : 'mensal-gratuito')}
                          className="w-full font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                          style={{ 
                            fontFamily: 'Poppins, sans-serif',
                            backgroundColor: '#0C5340',
                            color: '#FFFFFF',
                            borderRadius: '4px',
                            padding: '10px 18px',
                            border: 'none',
                            cursor: 'pointer'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#09402E';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#0C5340';
                          }}
                        >
                          {expandedPlan === 'mensal-gratuito' ? 'OCULTAR' : 'O QUE O PLANO OFERECE'}
                          {expandedPlan === 'mensal-gratuito' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        
                        {/* Features expandidas */}
                        {expandedPlan === 'mensal-gratuito' && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p 
                              className="text-gray-700"
                              style={{ 
                                fontFamily: 'Poppins, sans-serif', 
                                fontSize: '0.9rem',
                                textAlign: 'center',
                                margin: 0
                              }}
                            >
                              Todos os itens básicos para incrementar seu perfil.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Botão Final */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="transition-colors duration-200"
                    style={{
                      width: '100%',
                      height: '48px',
                      backgroundColor: '#F28C1D',
                      color: '#FFFFFF',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      fontWeight: '600',
                      borderRadius: '6px',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#d97706';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#F28C1D';
                    }}
                  >
                    ENVIAR
                  </button>
                </div>
              </form>
            </div>
            
            {/* Coluna B - Card FALE CONOSCO (25% desktop) */}
            <aside className="w-full card-fale">
              <div 
                className="card-fale bg-white mx-auto"
                style={{
                  maxWidth: '340px',
                  width: '100%',
                  padding: '32px',
                  border: '2px solid #006249',
                  borderRadius: '8px',
                  textAlign: 'center',
                  lineHeight: '1.55'
                }}
              >
                <h3 
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.35rem',
                    fontWeight: '700',
                    color: '#006249',
                    margin: '0 0 1.4rem 0',
                    textTransform: 'uppercase'
                  }}
                >
                  FALE CONOSCO
                </h3>
                <div style={{ fontSize: '1rem', fontFamily: 'Poppins, sans-serif' }}>
                  <p 
                    className="text-gray-700"
                    style={{ 
                      margin: '0 0 1.25rem 0',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      color: '#444444',
                      lineHeight: '1.6'
                    }}
                  >
                    Um canal direto entre você e a Estrada Real.
                  </p>
                  
                  <p 
                    className="mb-6 text-center"
                    style={{
                      margin: '0 0 1.25rem 0',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      color: '#444444',
                      lineHeight: '1.6'
                    }}
                  >
                    Tem alguma dúvida ou sugestão?<br />
                    Entre em contato conosco.
                  </p>
                  
                  <div className="text-center" style={{ marginTop: '0.5rem' }}>
                    <button
                      className="transition-all duration-200"
                      style={{
                        width: '160px',
                        height: '48px',
                        backgroundColor: '#FFFFFF',
                        color: '#006249',
                        border: '2px solid #006249',
                        borderRadius: '6px',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        outline: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#006249';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                        e.currentTarget.style.color = '#006249';
                      }}
                    >
                      CLIQUE AQUI
                    </button>
                  </div>
                </div>
              </div>
            </aside>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmpreendimentoCadastroPage;