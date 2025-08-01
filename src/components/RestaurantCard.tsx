import React, { useState, useEffect } from 'react';
import { Clock, MapPin, ChevronLeft, ChevronRight, Instagram, Phone, X } from 'lucide-react';

interface Restaurant {
  id: number;
  name: string;
  description: string;
  image: string;
  images?: string[];
  address: string;
  hours: string;
  phone?: string;
  instagram?: string;
  cuisine?: string;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const images = restaurant.images || [restaurant.image];

  // Auto-rotation completely disabled - images are static

  // Handle lightbox open
  const handleImageClick = (imageIndex: number) => {
    console.log('🖱️ Clicou na imagem do restaurante:', imageIndex);
    setLightboxImageIndex(imageIndex);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
    console.log('✅ Lightbox aberto para restaurante');
  };

  // Handle lightbox close
  const closeLightbox = () => {
    console.log('❌ Fechando lightbox do restaurante');
    setIsLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextLightboxImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevLightboxImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevLightboxImage();
      } else if (e.key === 'ArrowRight') {
        nextLightboxImage();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isLightboxOpen]);

  return (
    <>
      <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Standardized image container with fixed height */}
        <div className="md:w-1/3 relative overflow-hidden group" style={{ height: '280px' }}>
          <div 
            className="w-full h-full cursor-pointer relative"
            onClick={() => handleImageClick(currentImageIndex)}
            style={{ 
              cursor: 'pointer',
              userSelect: 'none'
            }}
          >
            <img 
              src={images[currentImageIndex]} 
              alt={`${restaurant.name} - Imagem ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ 
                objectFit: 'cover',
                userSelect: 'none',
                display: 'block'
              }}
            />
            
            {/* Hover overlay with click indicator */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                🔍 Clique para ampliar
              </div>
            </div>
          </div>
          
          {/* Navigation arrows - only show if multiple images and on hover */}
          {images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-white rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
              >
                <ChevronLeft className="w-5 h-5 text-gray-800" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-white rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
              >
                <ChevronRight className="w-5 h-5 text-gray-800" />
              </button>

              {/* Image indicators */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-white scale-110' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      
        <div className="md:w-2/3 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-green-800 mb-2">{restaurant.name}</h3>
            <p className="text-gray-700 mb-4">{restaurant.description}</p>
            
            <div className="space-y-2 text-gray-600">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-500 mr-2 mt-0.5" />
                <span>{restaurant.address}</span>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-amber-500 mr-2 mt-0.5" />
                <span className="whitespace-pre-line">{restaurant.hours}</span>
              </div>
              {restaurant.phone && (
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-amber-500 mr-2 mt-0.5" />
                  <span>{restaurant.phone}</span>
                </div>
              )}
              {restaurant.cuisine && (
                <div className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-0.5">🍽️</span>
                  <span>{restaurant.cuisine}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-4 flex gap-3">
            {restaurant.instagram && (
              <button className="p-2 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 transition-all">
                <Instagram className="w-5 h-5" />
              </button>
            )}
            <button className="bg-amber-500 hover:bg-green-800 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
              Ver detalhes
            </button>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center"
          style={{ zIndex: 99999, position: 'fixed' }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors duration-200"
            style={{ zIndex: 100000 }}
          >
            <X size={32} strokeWidth={2} />
          </button>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevLightboxImage}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
                style={{ zIndex: 100000 }}
              >
                <ChevronLeft size={48} strokeWidth={2} />
              </button>
              
              <button
                onClick={nextLightboxImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
                style={{ zIndex: 100000 }}
              >
                <ChevronRight size={48} strokeWidth={2} />
              </button>
            </>
          )}

          {/* Main image */}
          <img
            src={images[lightboxImageIndex]}
            alt={`${restaurant.name} - Imagem ${lightboxImageIndex + 1}`}
            className="object-contain"
            onClick={(e) => e.stopPropagation()}
            style={{ 
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              userSelect: 'none'
            }}
          />

          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-lg font-medium">
              {lightboxImageIndex + 1} / {images.length}
            </div>
          )}

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto px-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxImageIndex(index);
                  }}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === lightboxImageIndex 
                      ? 'border-white scale-110' 
                      : 'border-white border-opacity-50 hover:border-opacity-80'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default RestaurantCard;