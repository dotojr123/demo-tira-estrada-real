import React from 'react';
import LazyImage from './LazyImage';

interface Product {
  id: number;
  company: string;
  product: string;
  email: string;
  phone: string;
  website: string;
  image: string;
}

const ProductsSection: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      company: "Três Corações",
      product: "Café Premium",
      email: "vanessacb@3coracoes.com.br",
      phone: "(31) 98481-6984",
      website: "http://www.3coracoes.com.br",
      image: "http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/download-2.png"
    },
    {
      id: 2,
      company: "Gellak",
      product: "Mineirices Estrada Real",
      email: "atendimento@gellak.com.br",
      phone: "31 3773-2132",
      website: "http://www.gellak.com.br/",
      image: "http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/download-_1_.png"
    },
    {
      id: 3,
      company: "Queijo Serro",
      product: "Queijo Especial",
      email: "presidencia@coopserro.com.br",
      phone: "(38) 99712-090",
      website: "http://www.coopserro.com.br/",
      image: "http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/download-_2_.png"
    },
    {
      id: 4,
      company: "Vinícola Estrada Real",
      product: "Vinho Primeira Estrada",
      email: "pedro@vitaceabrasil.com.br",
      phone: "(35) 99932-3376",
      website: "https://www.vinicolaestradareal.com.br/",
      image: "http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/download-3.png"
    },
    {
      id: 5,
      company: "Resin Arts",
      product: "Mini Marco ER",
      email: "contato@resinarts.com.br",
      phone: "(19) 99782-6838",
      website: "https://www.resinarts.com.br/",
      image: "http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/download-_1_-1.png"
    },
    {
      id: 6,
      company: "Arco Abatido",
      product: "Janelas da Estrada Real",
      email: "arcoabatido@gmail.com",
      phone: "(32) 98469-3000",
      website: "https://www.arcoabatido.com/",
      image: "http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/download-4.png"
    },
    {
      id: 7,
      company: "Cutelaria Grochoeller",
      product: "Faca Tropeira",
      email: "cutelariagrochoeller@gmail.com",
      phone: "+55 31 98271-0586",
      website: "https://cutelariagrochoeller.com.br/",
      image: "http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/download-_2__1.png"
    }
  ];

  const formatPhoneForTel = (phone: string) => {
    // Remove all non-numeric characters and add +55 if not present
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.startsWith('55')) {
      return `+${cleaned}`;
    }
    return `+55${cleaned}`;
  };

  const formatWebsiteDisplay = (website: string) => {
    return website.replace(/^https?:\/\//, '').replace(/\/$/, '');
  };

  return (
    <section id="produtos-estrada-real" className="w-full">
      {/* Banner Section */}
      <div 
        className="relative w-full"
        style={{ 
          minHeight: '160px',
          backgroundImage: 'url(http://aromagel-worldexcellences.com/wp-content/uploads/2025/05/unnamed.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay escurecido suave e translúcido */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(2px)'
          }}
        />
        
        {/* Content */}
        <div 
          className="relative z-10 flex items-center justify-between px-4 md:px-8"
          style={{ paddingTop: '24px', paddingBottom: '24px', minHeight: '160px' }}
        >
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Left side - Main titles */}
            <div className="flex-1">
              {/* PRODUTOS */}
              <h1 
                className="uppercase italic mb-2"
                style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '3rem',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  fontStyle: 'italic',
                  textTransform: 'uppercase',
                  lineHeight: '1.1',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
                }}
              >
                PRODUTOS
              </h1>
              
              {/* da Estrada Real */}
              <h2 
                className="italic"
                style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '2.5rem',
                  fontWeight: '400',
                  color: '#FFFFFF',
                  fontStyle: 'italic',
                  lineHeight: '1.1',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
                }}
              >
                da Estrada Real
              </h2>
            </div>
            
            {/* Right side - Auxiliary phrase */}
            <div className="text-right" style={{ padding: '16px' }}>
              <p 
                style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  letterSpacing: '0.05em',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
                }}
              >
                TUDO QUE ACONTECE NA<br />ESTRADA REAL
              </p>
            </div>
          </div>
          
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center justify-center text-center w-full" style={{ gap: '8px' }}>
            {/* PRODUTOS */}
            <h1 
              className="uppercase italic mb-2"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontSize: '2.75rem',
                fontWeight: '600',
                color: '#FFFFFF',
                fontStyle: 'italic',
                textTransform: 'uppercase',
                lineHeight: '1.1',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
              }}
            >
              PRODUTOS
            </h1>
            
            {/* da Estrada Real */}
            <h2 
              className="italic"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontSize: '2.25rem',
                fontWeight: '400',
                color: '#FFFFFF',
                fontStyle: 'italic',
                lineHeight: '1.1',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
              }}
            >
              da Estrada Real
            </h2>
            
            {/* TUDO QUE ACONTECE NA ESTRADA REAL */}
            <p 
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#FFFFFF',
                letterSpacing: '0.05em',
                textAlign: 'center',
                lineHeight: '1.2',
                marginTop: '8px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
              }}
            >
              TUDO QUE ACONTECE NA<br/>ESTRADA REAL
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid Section */}
      <div 
        className="px-4"
        style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '40px 20px',
          backgroundColor: '#F7F7F7'
        }}
      >
        {/* Desktop Grid: 3 columns */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ 
                borderRadius: '4px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                minHeight: '420px'
              }}
            >
              {/* Image with consistent size */}
              <div style={{ width: '100%', height: '180px', overflow: 'hidden', margin: 0, padding: 0, background: 'none' }}>
                <LazyImage
                  src={product.image}
                  alt={product.company}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Separator line */}
              <div style={{ height: '1px', backgroundColor: '#E0E0E0' }} />
              
              {/* Text Content */}
              <div style={{ padding: '16px' }}>
                {/* Company Name - Increased size and weight */}
                <h3 
                  style={{ 
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#1E4620',
                    marginBottom: '8px'
                  }}
                >
                  {product.company}
                </h3>
                
                {/* Product - Increased size */}
                <p 
                  style={{ 
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.125rem',
                    fontStyle: 'italic',
                    color: '#555555',
                    marginBottom: '16px'
                  }}
                >
                  {product.product}
                </p>
                
                {/* Contact Info with labels */}
                <div style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                  <p style={{ marginBottom: '8px' }}>
                    <strong style={{ color: '#000000' }}>E-mail:</strong>{' '}
                    <a 
                      href={`mailto:${product.email}`}
                      className="hover:underline transition-colors duration-200"
                      style={{ 
                        color: '#000000',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#EDA10E';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#000000';
                      }}
                    >
                      {product.email}
                    </a>
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    <strong style={{ color: '#000000' }}>Telefone:</strong>{' '}
                    <a 
                      href={`tel:${formatPhoneForTel(product.phone)}`}
                      style={{ 
                        color: '#000000',
                        textDecoration: 'none'
                      }}
                      className="hover:underline transition-colors duration-200"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#EDA10E';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#000000';
                      }}
                    >
                      {product.phone}
                    </a>
                  </p>
                  <p>
                    <strong style={{ color: '#000000' }}>Site:</strong>{' '}
                    <a 
                      href={product.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline transition-colors duration-200"
                      style={{ 
                        color: '#000000',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#EDA10E';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#000000';
                      }}
                    >
                      {formatWebsiteDisplay(product.website)}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet Grid: 2 columns */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ 
                borderRadius: '4px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                minHeight: '420px'
              }}
            >
              {/* Image with consistent size */}
              <div style={{ width: '100%', height: '180px', overflow: 'hidden', margin: 0, padding: 0, background: 'none' }}>
                <LazyImage
                  src={product.image}
                  alt={product.company}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Separator line */}
              <div style={{ height: '1px', backgroundColor: '#E0E0E0' }} />
              
              {/* Text Content */}
              <div style={{ padding: '16px' }}>
                {/* Company Name - Increased size and weight */}
                <h3 
                  style={{ 
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#1E4620',
                    marginBottom: '8px'
                  }}
                >
                  {product.company}
                </h3>
                
                {/* Product - Increased size */}
                <p 
                  style={{ 
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.125rem',
                    fontStyle: 'italic',
                    color: '#555555',
                    marginBottom: '16px'
                  }}
                >
                  {product.product}
                </p>
                
                {/* Contact Info with labels */}
                <div style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                  <p style={{ marginBottom: '8px' }}>
                    <strong style={{ color: '#000000' }}>E-mail:</strong>{' '}
                    <a 
                      href={`mailto:${product.email}`}
                      className="hover:underline transition-colors duration-200"
                      style={{ 
                        color: '#000000',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#EDA10E';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#000000';
                      }}
                    >
                      {product.email}
                    </a>
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    <strong style={{ color: '#000000' }}>Telefone:</strong>{' '}
                    <a 
                      href={`tel:${formatPhoneForTel(product.phone)}`}
                      style={{ 
                        color: '#000000',
                        textDecoration: 'none'
                      }}
                      className="hover:underline transition-colors duration-200"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#EDA10E';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#000000';
                      }}
                    >
                      {product.phone}
                    </a>
                  </p>
                  <p>
                    <strong style={{ color: '#000000' }}>Site:</strong>{' '}
                    <a 
                      href={product.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline transition-colors duration-200"
                      style={{ 
                        color: '#000000',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#EDA10E';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#000000';
                      }}
                    >
                      {formatWebsiteDisplay(product.website)}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Grid: 1 column */}
        <div className="md:hidden grid grid-cols-1 gap-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ 
                borderRadius: '4px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                minHeight: '420px'
              }}
            >
              {/* Image with consistent size */}
              <div style={{ width: '100%', height: '180px', overflow: 'hidden', margin: 0, padding: 0, background: 'none' }}>
                <LazyImage
                  src={product.image}
                  alt={product.company}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Separator line */}
              <div style={{ height: '1px', backgroundColor: '#E0E0E0' }} />
              
              {/* Text Content */}
              <div style={{ padding: '16px' }}>
                {/* Company Name - Increased size and weight */}
                <h3 
                  style={{ 
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#1E4620',
                    marginBottom: '8px'
                  }}
                >
                  {product.company}
                </h3>
                
                {/* Product - Increased size */}
                <p 
                  style={{ 
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.125rem',
                    fontStyle: 'italic',
                    color: '#555555',
                    marginBottom: '16px'
                  }}
                >
                  {product.product}
                </p>
                
                {/* Contact Info with labels */}
                <div style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                  <p style={{ marginBottom: '8px' }}>
                    <strong style={{ color: '#000000' }}>E-mail:</strong>{' '}
                    <a 
                      href={`mailto:${product.email}`}
                      className="hover:underline transition-colors duration-200"
                      style={{ 
                        color: '#000000',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#EDA10E';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#000000';
                      }}
                    >
                      {product.email}
                    </a>
                  </p>
                  <p style={{ marginBottom: '8px' }}>
                    <strong style={{ color: '#000000' }}>Telefone:</strong>{' '}
                    <a 
                      href={`tel:${formatPhoneForTel(product.phone)}`}
                      style={{ 
                        color: '#000000',
                        textDecoration: 'none'
                      }}
                      className="hover:underline transition-colors duration-200"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#EDA10E';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#000000';
                      }}
                    >
                      {product.phone}
                    </a>
                  </p>
                  <p>
                    <strong style={{ color: '#000000' }}>Site:</strong>{' '}
                    <a 
                      href={product.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline transition-colors duration-200"
                      style={{ 
                        color: '#000000',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#EDA10E';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#000000';
                      }}
                    >
                      {formatWebsiteDisplay(product.website)}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;