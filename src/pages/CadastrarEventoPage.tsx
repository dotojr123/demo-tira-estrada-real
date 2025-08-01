import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ChevronDown } from 'lucide-react';

const CadastrarEventoPage: React.FC = () => {
  const [entradaFranca, setEntradaFranca] = useState(false);
  const [selectedEstado, setSelectedEstado] = useState('');
  const [selectedCidade, setSelectedCidade] = useState('');
  const [cidades, setCidades] = useState<string[]>([]);
  const [datas, setDatas] = useState([{ data: '', inicio: '', fim: '' }]);
  const [links, setLinks] = useState(['']);

  // Garantir que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mapeamento de estados para cidades (simplificado)
  const estadoCidades: { [key: string]: string[] } = {
    'MG': [
      'Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora', 'Betim', 'Montes Claros',
      'Conceição do Mato Dentro', 'Tiradentes', 'São João del-Rei', 'Diamantina', 'Ouro Preto',
      'Mariana', 'Sabará', 'Serro', 'Santa Bárbara', 'Caeté', 'Nova Lima', 'Itabirito'
    ],
    'RJ': [
      'Rio de Janeiro', 'São Gonçalo', 'Duque de Caxias', 'Nova Iguaçu', 'Niterói',
      'Petrópolis', 'Volta Redonda', 'Magé', 'Macaé', 'Cabo Frio', 'Angra dos Reis',
      'Nova Friburgo', 'Barra Mansa', 'Teresópolis', 'Paraty', 'Três Rios', 'Valença'
    ],
    'SP': [
      'São Paulo', 'Guarulhos', 'Campinas', 'São Bernardo do Campo', 'Santo André',
      'Aparecida', 'Areias', 'Bananal', 'Cachoeira Paulista', 'Caçapava', 'Campos do Jordão',
      'Cruzeiro', 'Cunha', 'Guaratinguetá', 'Jacareí', 'Lorena', 'Pindamonhangaba', 'Taubaté'
    ],
    'ES': [
      'Vitória', 'Vila Velha', 'Cariacica', 'Serra', 'Cachoeiro de Itapemirim',
      'Linhares', 'São Mateus', 'Colatina', 'Guarapari', 'Viana'
    ]
  };

  const handleEstadoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const estado = event.target.value;
    setSelectedEstado(estado);
    setSelectedCidade('');
    
    if (estado && estadoCidades[estado]) {
      setCidades(estadoCidades[estado].sort());
    } else {
      setCidades([]);
    }
  };

  const adicionarData = () => {
    setDatas([...datas, { data: '', inicio: '', fim: '' }]);
  };

  const adicionarLink = () => {
    setLinks([...links, '']);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envio do formulário
    console.log('Formulário enviado');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="hero relative flex items-center justify-center"
        style={{
          height: '320px',
          backgroundImage: 'url("http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/homem-sendo-dj-na-festa-tiro-medio-scaled.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.70)' }}
        />
        
        <style>
          {`
            @media (min-width: 768px) {
              .hero {
                height: 420px !important;
              }
            }
          `}
        </style>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 
            className="mb-4 uppercase"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '800',
              fontSize: '48px',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              lineHeight: '1.1'
            }}
          >
            <span className="md:hidden">NOVO EVENTO</span>
            <span className="hidden md:block" style={{ fontSize: '64px' }}>NOVO EVENTO</span>
          </h1>
          
          <h2 
            className="mb-4 uppercase"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              fontStyle: 'italic',
              fontSize: '22px',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              lineHeight: '1.2'
            }}
          >
            <span className="md:hidden">ENVIE SEU EVENTO</span>
            <span className="hidden md:block" style={{ fontSize: '28px' }}>ENVIE SEU EVENTO</span>
          </h2>
          
          <div 
            className="text-center"
            style={{
              fontSize: '14px',
              color: '#FFFFFFB3',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            VIVA, EXPERIMENTE, DESCUBRA
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <style>
          {`
            @media (max-width: 1023px) {
              .form-grid {
                grid-template-columns: 1fr !important;
              }
            }
            @media (min-width: 1024px) {
              .form-grid {
                grid-template-columns: 1fr 320px !important;
                gap: 64px !important;
              }
            }
          `}
        </style>
        
        <div className="form-wrapper" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
          <div className="form-grid grid gap-8">
            
            {/* Formulário */}
            <div>
              <h2 
                className="mb-4"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#22543D'
                }}
              >
                Envie seu Evento
              </h2>
              
              <p 
                className="mb-8"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  color: '#444444',
                  lineHeight: '1.6'
                }}
              >
                Este é o formulário de contato direto com o Instituto Estrada Real. Basta preencher os campos abaixo e clicar em enviar. Em breve retornaremos sobre o seu evento.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome do responsável */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Nome do responsável*
                  </label>
                  <input
                    type="text"
                    required
                    style={{
                      width: '100%',
                      height: '48px',
                      border: '2px solid #22543D',
                      borderRadius: '6px',
                      paddingLeft: '16px',
                      paddingRight: '16px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* E-mail do responsável */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    E-mail do responsável*
                  </label>
                  <input
                    type="email"
                    required
                    style={{
                      width: '100%',
                      height: '48px',
                      border: '2px solid #22543D',
                      borderRadius: '6px',
                      paddingLeft: '16px',
                      paddingRight: '16px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Telefone do responsável */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Telefone do responsável*
                  </label>
                  <input
                    type="tel"
                    required
                    style={{
                      width: '100%',
                      height: '48px',
                      border: '2px solid #22543D',
                      borderRadius: '6px',
                      paddingLeft: '16px',
                      paddingRight: '16px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Entrada Franca */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="entradaFranca"
                    checked={entradaFranca}
                    onChange={(e) => setEntradaFranca(e.target.checked)}
                    required
                    className="w-5 h-5"
                  />
                  <label htmlFor="entradaFranca" className="text-gray-700 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Entrada Franca*
                  </label>
                </div>

                {/* Imagem de divulgação */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Imagem de divulgação do evento
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    style={{
                      width: '100%',
                      border: '2px dashed #22543D',
                      borderRadius: '6px',
                      padding: '12px 16px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Nome do evento */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Nome do evento*
                  </label>
                  <input
                    type="text"
                    required
                    style={{
                      width: '100%',
                      height: '48px',
                      border: '2px solid #22543D',
                      borderRadius: '6px',
                      paddingLeft: '16px',
                      paddingRight: '16px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Descrição do evento */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Descrição do evento*
                  </label>
                  <textarea
                    required
                    rows={4}
                    style={{
                      width: '100%',
                      border: '2px solid #22543D',
                      borderRadius: '6px',
                      paddingLeft: '16px',
                      paddingRight: '16px',
                      paddingTop: '12px',
                      paddingBottom: '12px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Data(s) do evento */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Data(s) do evento
                  </label>
                  {datas.map((dataItem, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <input
                        type="date"
                        value={dataItem.data}
                        onChange={(e) => {
                          const newDatas = [...datas];
                          newDatas[index].data = e.target.value;
                          setDatas(newDatas);
                        }}
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #22543D',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                      <input
                        type="time"
                        placeholder="Horário de início"
                        value={dataItem.inicio}
                        onChange={(e) => {
                          const newDatas = [...datas];
                          newDatas[index].inicio = e.target.value;
                          setDatas(newDatas);
                        }}
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #22543D',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                      <input
                        type="time"
                        placeholder="Horário de término"
                        value={dataItem.fim}
                        onChange={(e) => {
                          const newDatas = [...datas];
                          newDatas[index].fim = e.target.value;
                          setDatas(newDatas);
                        }}
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #22543D',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={adicionarData}
                    className="btn-sec transition-colors duration-200"
                    style={{
                      display: 'block',
                      width: '160px',
                      height: '40px',
                      margin: '12px 0 24px',
                      border: '2px solid #22543D',
                      backgroundColor: 'transparent',
                      color: '#22543D',
                      borderRadius: '6px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}
                  >
                    Adicionar data
                  </button>
                </div>

                {/* Link(s) de divulgação */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Link(s) de divulgação
                  </label>
                  {links.map((link, index) => (
                    <div key={index} className="mb-4">
                      <input
                        type="url"
                        value={link}
                        onChange={(e) => {
                          const newLinks = [...links];
                          newLinks[index] = e.target.value;
                          setLinks(newLinks);
                        }}
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #22543D',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={adicionarLink}
                    className="btn-sec transition-colors duration-200"
                    style={{
                      display: 'block',
                      width: '160px',
                      height: '40px',
                      margin: '12px 0 24px',
                      border: '2px solid #22543D',
                      backgroundColor: 'transparent',
                      color: '#22543D',
                      borderRadius: '6px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}
                  >
                    Adicionar link
                  </button>
                </div>

                {/* Endereço */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      CEP*
                    </label>
                    <input
                      type="text"
                      required
                      style={{
                        width: '100%',
                        height: '48px',
                        border: '2px solid #22543D',
                        borderRadius: '6px',
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '1rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Estado*
                    </label>
                    <div className="relative">
                      <select
                        value={selectedEstado}
                        onChange={handleEstadoChange}
                        required
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #22543D',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '40px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none',
                          appearance: 'none',
                          backgroundColor: 'white',
                          boxSizing: 'border-box'
                        }}
                      >
                        <option value="">Selecione...</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="SP">São Paulo</option>
                        <option value="ES">Espírito Santo</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Cidade*
                    </label>
                    <div className="relative">
                      <select
                        value={selectedCidade}
                        onChange={(e) => setSelectedCidade(e.target.value)}
                        required
                        disabled={!selectedEstado}
                        style={{
                          width: '100%',
                          height: '48px',
                          border: '2px solid #22543D',
                          borderRadius: '6px',
                          paddingLeft: '16px',
                          paddingRight: '40px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1rem',
                          outline: 'none',
                          appearance: 'none',
                          backgroundColor: selectedEstado ? 'white' : '#f9f9f9',
                          boxSizing: 'border-box'
                        }}
                      >
                        <option value="">Selecione uma cidade...</option>
                        {cidades.map((cidade, index) => (
                          <option key={index} value={cidade}>{cidade}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Logradouro*
                    </label>
                    <input
                      type="text"
                      required
                      style={{
                        width: '100%',
                        height: '48px',
                        border: '2px solid #22543D',
                        borderRadius: '6px',
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '1rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Número*
                    </label>
                    <input
                      type="text"
                      required
                      style={{
                        width: '100%',
                        height: '48px',
                        border: '2px solid #22543D',
                        borderRadius: '6px',
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '1rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Bairro*
                    </label>
                    <input
                      type="text"
                      required
                      style={{
                        width: '100%',
                        height: '48px',
                        border: '2px solid #22543D',
                        borderRadius: '6px',
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '1rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Complemento
                  </label>
                  <input
                    type="text"
                    style={{
                      width: '100%',
                      height: '48px',
                      border: '2px solid #22543D',
                      borderRadius: '6px',
                      paddingLeft: '16px',
                      paddingRight: '16px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Botão Enviar */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    className="transition-colors duration-200"
                    style={{
                      backgroundColor: '#F28C1D',
                      color: '#FFFFFF',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      fontWeight: '600',
                      width: '220px',
                      height: '56px',
                      borderRadius: '8px',
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
                    Enviar
                  </button>
                </div>
              </form>
            </div>

            {/* Aside - Outros Canais */}
            <div 
              className="aside-contact bg-white rounded-lg"
              style={{
                borderBottom: '3px solid #0C5340',
                padding: '24px',
                alignSelf: 'start'
              }}
            >
              <h3 
                className="mb-6"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#22543D'
                }}
              >
                OUTROS CANAIS
              </h3>
              
              <div className="space-y-4" style={{ fontSize: '16px', fontFamily: 'Poppins, sans-serif' }}>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">E-mail:</p>
                  <p className="text-gray-700">estradareal@estradareal.org.br</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Endereço:</p>
                  <p className="text-gray-700">Av. do Contorno, 4456 - Funcionários, Belo Horizonte - MG • 38082-049</p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Telefone:</p>
                  <p className="text-gray-700">31 3263-4765</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CadastrarEventoPage;