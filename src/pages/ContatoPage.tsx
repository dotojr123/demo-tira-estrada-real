import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContatoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  // Garantir que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envio do formulário
    console.log('Formulário enviado:', formData);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="hero relative flex items-center justify-center"
        style={{
          height: '320px',
          backgroundImage: 'url("http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/mulher-que-trabalha-em-um-call-center-conversando-com-clientes-usando-fones-de-ouvido-e-microfone-scaled.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.80)' }}
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
        
        <div 
          className="relative z-10 text-center text-white px-4"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <h1 
            className="mb-4"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '800',
              fontSize: '48px',
              color: '#FFFFFF',
              lineHeight: '1.1'
            }}
          >
            <span className="md:hidden">CONTATO</span>
            <span className="hidden md:block" style={{ fontSize: '64px' }}>CONTATO</span>
          </h1>
          
          <h2 
            className="mb-4 italic"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              fontStyle: 'italic',
              fontSize: '22px',
              color: '#FFFFFFB3',
              lineHeight: '1.2'
            }}
          >
            <span className="md:hidden">FALE CONOSCO</span>
            <span className="hidden md:block" style={{ fontSize: '28px' }}>FALE CONOSCO</span>
          </h2>
          
          <div 
            className="text-right"
            style={{
              fontSize: '14px',
              color: '#FFFFFF99',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            QUEREMOS OUVIR VOCÊ
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-[960px] mx-auto">
          <div 
            className="grid gap-8"
            style={{
              gridTemplateColumns: '600px 300px',
              gap: '48px'
            }}
          >
            <style>
              {`
                @media (max-width: 768px) {
                  .grid {
                    grid-template-columns: 1fr !important;
                    gap: 32px !important;
                  }
                }
              `}
            </style>
            
            {/* Formulário */}
            <div 
              className="bg-white rounded-lg"
              style={{
                borderBottom: '4px solid #22543D',
                borderRadius: '6px',
                padding: '32px'
              }}
            >
              <h3 
                className="mb-6"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#22543D'
                }}
              >
                Envie sua mensagem
              </h3>
              
              <p 
                className="mb-8"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '16px',
                  color: '#444444',
                  lineHeight: '1.6'
                }}
              >
                Este é o formulário de contato direto com o Instituto Estrada Real. Basta preencher os campos abaixo e clicar em enviar. Em breve retornaremos sobre a sua mensagem.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div>
                  <label 
                    className="block mb-2"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#22543D'
                    }}
                  >
                    Nome*
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      height: '48px',
                      border: '2px solid #22543D',
                      borderRadius: '6px',
                      paddingLeft: '16px',
                      paddingRight: '16px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* E-mail */}
                <div>
                  <label 
                    className="block mb-2"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#22543D'
                    }}
                  >
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
                      border: '2px solid #22543D',
                      borderRadius: '6px',
                      paddingLeft: '16px',
                      paddingRight: '16px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Telefone */}
                <div>
                  <label 
                    className="block mb-2"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#22543D'
                    }}
                  >
                    Telefone*
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
                      border: '2px solid #22543D',
                      borderRadius: '6px',
                      paddingLeft: '16px',
                      paddingRight: '16px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Assunto */}
                <div>
                  <label 
                    className="block mb-2"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#22543D'
                    }}
                  >
                    Assunto*
                  </label>
                  <input
                    type="text"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      height: '48px',
                      border: '2px solid #22543D',
                      borderRadius: '6px',
                      paddingLeft: '16px',
                      paddingRight: '16px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Mensagem */}
                <div>
                  <label 
                    className="block mb-2"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#22543D'
                    }}
                  >
                    Mensagem*
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    style={{
                      width: '100%',
                      border: '2px solid #22543D',
                      borderRadius: '6px',
                      paddingLeft: '16px',
                      paddingRight: '16px',
                      paddingTop: '12px',
                      paddingBottom: '12px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '16px',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Botão Enviar */}
                <div className="text-center">
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

            {/* Aside - Outros Canais */}
            <div 
              className="bg-white rounded-lg"
              style={{
                borderBottom: '3px solid #0C5340',
                borderRadius: '6px',
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

          {/* Mapa */}
          <div 
            className="mt-12"
            style={{
              overflow: 'hidden',
              borderRadius: '8px',
              marginTop: '48px'
            }}
          >
            <iframe
              id="map-contato"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.7913338031826!2d-43.927511224772616!3d-19.933196181455873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699eaabf95e03%3A0x98de0bb5ae19d6dc!2sAv.%20do%20Contorno%2C%204456%20-%20Santa%20Efig%C3%AAnia%2C%20Belo%20Horizonte%20-%20MG%2C%2030110-028!5e0!3m2!1spt-BR!2sbr!4v1753189129063!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização - Instituto Estrada Real"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContatoPage;