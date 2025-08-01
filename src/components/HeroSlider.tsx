import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LazyImage from './LazyImage';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  desktopImage: string;
  mobileImage: string;
}

const HeroSlider: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Descubra a Maior Rota Turística da América Latina!",
      subtitle: "Mais de 1.630 km de história, cultura e natureza",
      desktopImage: "http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-15-de-jul.-de-2025-14_44_24.png",
      mobileImage: "http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/foto-vertical-madrid-caravia-espanha-scaled.jpg"
    },
    {
      id: 2,
      title: "Explore Caminhos Históricos",
      subtitle: "Viaje no tempo através das antigas rotas do ouro e diamantes",
      desktopImage: "http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-15-de-jul.-de-2025-15_09_36.png",
      mobileImage: "http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/belas-arvores-e-pinheiros-scaled.jpg"
    },
    {
      id: 3,
      title: "Conheça Cidades Encantadoras",
      subtitle: "Cada cidade com seu charme único e hospitalidade brasileira",
      desktopImage: "http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/ChatGPT-Image-15-de-jul.-de-2025-15_14_28.png",
      mobileImage: "http://aromagel-worldexcellences.com/wp-content/uploads/2025/07/road-8284023_1280.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[400px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Desktop Image */}
          <div className="hidden md:block absolute inset-0">
            <LazyImage
              src={slide.desktopImage}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Mobile Image */}
          <div className="md:hidden absolute inset-0">
            <LazyImage
              src={slide.mobileImage}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Overlay - 30% black opacity covering 100% of banner */}
          <div 
            className="absolute inset-0" 
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          />
          
          {/* Content Container with proper padding */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ 
              paddingTop: '3rem', 
              paddingBottom: '3rem',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem'
            }}
          >
            <div className="text-center text-white max-w-4xl">
              {/* Title - sans-serif, bold (700), exact responsive sizes */}
              <h1 
                className="mb-4 leading-tight text-center"
                style={{ 
                  fontFamily: 'sans-serif', 
                  fontWeight: '700',
                  color: '#FFFFFF',
                  fontSize: '2rem' // Mobile: 2rem
                }}
              >
                <span className="md:hidden">{slide.title}</span>
                <span 
                  className="hidden md:block lg:hidden"
                  style={{ fontSize: '3rem' }} // Tablet: 3rem
                >
                  {slide.title}
                </span>
                <span 
                  className="hidden lg:block"
                  style={{ fontSize: '4rem' }} // Desktop: 4rem
                >
                  {slide.title}
                </span>
              </h1>
              
              {/* Subtitle - sans-serif, normal (400), exact responsive sizes */}
              <p 
                className="mb-6 text-center"
                style={{ 
                  fontFamily: 'sans-serif', 
                  fontWeight: '400',
                  color: '#FFFFFF',
                  fontSize: '1rem' // Mobile: 1rem
                }}
              >
                <span className="md:hidden">{slide.subtitle}</span>
                <span 
                  className="hidden md:block lg:hidden"
                  style={{ fontSize: '1.25rem' }} // Tablet: 1.25rem
                >
                  {slide.subtitle}
                </span>
                <span 
                  className="hidden lg:block"
                  style={{ fontSize: '1.5rem' }} // Desktop: 1.5rem
                >
                  {slide.subtitle}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-[10px] h-[10px] rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-white opacity-100' 
                : 'bg-white opacity-50 hover:opacity-70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;