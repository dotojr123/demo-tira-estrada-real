import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DestaquesPage: React.FC = () => {
  // Garantir que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const destaques = [
    {
      id: 1,
      titulo: 'Salão de Artes "Tiradentes Grão Prior da Liberdade"',
      data: '25 ago 2023',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/atrativo_casa_de_tiradentes_fazenda_carreiras_acervo_estrada_real.jpg',
      slug: 'salao-artes-tiradentes-grao-prior-liberdade'
    },
    {
      id: 2,
      titulo: 'PROTOCOLO DE ATENDIMENTO, LIMPEZA E HIGIENIZAÇÃO COVID-19…',
      data: '10 nov 2020',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/destaque_protocolo_de_atendimento_limpeza_e_higienizacao_covid19_para_o_setor_de_hospedagem_em_minas_gerais_protocolopng.png',
      slug: 'protocolo-atendimento-limpeza-higienizacao-covid19'
    },
    {
      id: 3,
      titulo: 'Festival Cultura e Gastronomia Conceição do Mato Dentro',
      data: '15 jan 2020',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/destaque_festival_cultura_e_gastronomia_conceicao_do_mato_dentro_festival-scaled.jpg',
      slug: 'festival-cultura-gastronomia-conceicao-mato-dentro'
    },
    {
      id: 4,
      titulo: 'Peregrinação',
      data: '17 nov 2019',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/destaque_peregrinacao_nha_chica.jpg',
      slug: 'peregrinacao'
    },
    {
      id: 5,
      titulo: '#partiu Estrada Real',
      data: '31 jan 2019',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/destaque_partiu_estrada_real_foto_wladimir_togumi-scaled.jpg',
      slug: 'partiu-estrada-real'
    },
    {
      id: 6,
      titulo: 'Estrada Real é tema de programa do canal Off',
      data: '21 dez 2018',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/destaque_estrada_real_e_tema_de_programa_do_canal_off_foto_brou_aventuras.jpg',
      slug: 'estrada-real-tema-programa-canal-off'
    },
    {
      id: 7,
      titulo: 'Natureza do Sabor – Encontro Gastronômico da Serra do Cipó',
      data: '08 out 2018',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/destaque_natureza_do_sabor_encontro_gastronomico_da_serra_do_cipo_natureza_do_sabor_2018.png',
      slug: 'natureza-sabor-encontro-gastronomico-serra-cipo'
    },
    {
      id: 8,
      titulo: 'III Salão Nacional do Turismo Religioso e Romaria',
      data: '23 jul 2018',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/destaque_iii_salao_nacional_do_turismo_religioso_e_romaria_caete_ignsdapiedade_02.jpg',
      slug: 'iii-salao-nacional-turismo-religioso-romaria'
    },
    {
      id: 9,
      titulo: 'Instituto ER lança novo Passaporte para maior rota turística do país',
      data: '21 set 2017',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/destaque_instituto_estrada_real_lanca_novo_passaporte_para_maior_rota_turistica_do_pais_passaporte-scaled.jpg',
      slug: 'instituto-er-lanca-novo-passaporte-maior-rota-turistica-pais'
    },
    {
      id: 10,
      titulo: 'Estrada Real participa do II Salão Nacional do Turismo Religioso',
      data: '05 set 2017',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/destaque_estrada_real_participa_do_ii_salao_nacional_do_turismo_religioso_salao_nacional_do_turismo_religioso.jpg',
      slug: 'estrada-real-participa-ii-salao-nacional-turismo-religioso'
    },
    {
      id: 11,
      titulo: 'Estrada Real sobre Rodas',
      data: '30 ago 2017',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/destaque_estrada_real_sobre_rodas_caminho_dos_diamantes.jpg',
      slug: 'estrada-real-sobre-rodas'
    },
    {
      id: 12,
      titulo: '11º Seminário Internacional de Sustentabilidade',
      data: '29 ago 2017',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/destaque_11_seminario_internacional_de_sustentabilidade_seminario.png',
      slug: '11-seminario-internacional-sustentabilidade'
    },
    {
      id: 13,
      titulo: 'JORNAL ESTRADA REAL Nº 12',
      data: '21 nov 2017',
      imagem: 'http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/destaque_jornal_estrada_real_n_12_img_0091_cachoeira_grande_credito_joao_miranda.jpg',
      slug: 'jornal-estrada-real-n-12'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="hero relative flex items-center justify-center"
        style={{
          height: '320px',
          backgroundImage: 'url("http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/gettyimages-1368744023-612x612-1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay preto 80% */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.86)' }}
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
            <span className="md:hidden">DESTAQUES</span>
            <span className="hidden md:block" style={{ fontSize: '64px' }}>DESTAQUES</span>
          </h1>
          
          <h2 
            className="mb-4 italic"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              fontStyle: 'italic',
              fontSize: '22px',
              color: '#D9D9D9',
              lineHeight: '1.2'
            }}
          >
            <span className="md:hidden">FIQUE POR DENTRO</span>
            <span className="hidden md:block" style={{ fontSize: '28px', color: '#D9D9D9' }}>FIQUE POR DENTRO</span>
          </h2>
          
          <div 
            className="text-center"
            style={{
              fontSize: '14px',
              color: '#FFFFFF',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            TUDO QUE ACONTECE NA ESTRADA REAL
          </div>
        </div>
      </section>

      {/* Destaques Grid */}
      <section style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div 
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            padding: '0 16px'
          }}
        >
          <div 
            className="destaques-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '32px'
            }}
          >
            {destaques.map((destaque) => (
              <div
                key={destaque.id}
                className="destaque-card"
                onClick={() => window.location.href = destaque.slug === 'salao-artes-tiradentes-grao-prior-liberdade' ? '/destaques/salao-de-artes-tiradentes-grao-prior-da-liberdade' : `/destaques/${destaque.slug}`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 74, 159, 0.15)';
                  const titulo = e.currentTarget.querySelector('.destaque-titulo') as HTMLElement;
                  if (titulo) {
                    titulo.style.textDecoration = 'underline';
                  }
                  const card = e.currentTarget.querySelector('.destaque-card-inner') as HTMLElement;
                  if (card) {
                    card.style.borderBottomColor = '#22543D';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  const titulo = e.currentTarget.querySelector('.destaque-titulo') as HTMLElement;
                  if (titulo) {
                    titulo.style.textDecoration = 'none';
                  }
                  const card = e.currentTarget.querySelector('.destaque-card-inner') as HTMLElement;
                  if (card) {
                    card.style.borderBottomColor = '#0C5340';
                  }
                }}
              >
                <div 
                  className="destaque-card-inner"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: '24px',
                    border: '2px solid #0C5340',
                    borderRadius: '6px',
                    backgroundColor: '#FFFFFF',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-bottom-color 0.2s ease',
                    cursor: 'pointer',
                    height: '100%'
                  }}
                >
                  <div 
                    className="image-box"
                    style={{
                      width: '100%',
                      height: '128px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}
                  >
                    <img
                      src={destaque.imagem}
                      alt={destaque.titulo}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  
                  <div 
                    className="data"
                    style={{
                      fontSize: '14px',
                      color: '#666666',
                      fontFamily: 'Poppins, sans-serif',
                      marginBottom: '8px',
                      textAlign: 'center'
                    }}
                  >
                    {destaque.data}
                  </div>
                  
                  <h3 
                    className="destaque-titulo"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '600',
                      color: '#22543D',
                      fontSize: '16px',
                      textAlign: 'center',
                      lineHeight: '1.3',
                      margin: '0',
                      transition: 'text-decoration 0.2s ease'
                    }}
                  >
                    {destaque.titulo}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Botão Mais Sugestões */}
        <div className="text-center mt-12">
          <button 
            onClick={() => window.location.href = '#'}
            className="transition-colors duration-200"
            style={{
              width: '200px',
              height: '48px',
              border: '2px solid #22543D',
              backgroundColor: 'transparent',
              color: '#22543D',
              borderRadius: '6px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#22543D';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#22543D';
            }}
          >
            MAIS SUGESTÕES
          </button>
        </div>
        
        {/* CSS Styles */}
        <style jsx>{`
          @media (min-width: 1280px) {
            .destaques-grid {
              grid-template-columns: repeat(4, 1fr) !important;
            }
          }
          
          @media (min-width: 1024px) and (max-width: 1279px) {
            .destaques-grid {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
          
          @media (min-width: 768px) and (max-width: 1023px) {
            .destaques-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          
          @media (max-width: 767px) {
            .destaques-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      <Footer />
    </div>
  );
};

export default DestaquesPage;