import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Facebook, Phone, MapPin, MessageCircle, X } from 'lucide-react';

interface Accommodation {
  id: number;
  name: string;
  description?: string;
  image?: string;
  images?: string[];
  type?: string;
  address?: string;
  email?: string;
  phone?: string;
}

interface AccommodationCardProps {
  accommodation: Accommodation;
  expanded?: boolean;
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({ accommodation, expanded = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  
  const images = accommodation.images || (accommodation.image ? [accommodation.image] : []);

  // Auto-rotate images when not expanded
  useEffect(() => {
    if (!expanded && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images.length, expanded]);

  // Handle lightbox open
  const handleImageClick = (imageIndex: number) => {
    console.log('🖱️ Clique detectado na imagem:', imageIndex);
    setLightboxImageIndex(imageIndex);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
    console.log('✅ Lightbox aberto');
  };

  // Handle lightbox close
  const closeLightbox = () => {
    console.log('❌ Fechando lightbox');
    setIsLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Navigation functions
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

  // Keyboard navigation
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

  if (images.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-green-800 mb-2">{accommodation.name}</h3>
        <p className="text-gray-600">Sem imagens disponíveis</p>
      </div>
    );
  }

  if (expanded) {
    return (
      <>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Main Image Container */}
          <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden group">
            <div 
              className="w-full h-full cursor-pointer relative"
              onClick={() => handleImageClick(currentImageIndex)}
            >
              <img 
                src={images[currentImageIndex]} 
                alt={`${accommodation.name} - Imagem ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ 
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
              />
              
              {/* Hover overlay with click indicator */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  🔍 Clique para ampliar
                </div>
              </div>
            </div>
            
            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-white rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-white rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
              </>
            )}

            {/* Image indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-white scale-110' 
                        : 'bg-white bg-opacity-50 hover:bg-opacity-70'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-green-800">{accommodation.name}</h3>
              {accommodation.type === 'gold' && (
                <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Premium
                </span>
              )}
              {accommodation.type === 'silver' && (
                <span className="bg-gray-400 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Silver
                </span>
              )}
              {accommodation.type === 'bronze' && (
                <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Bronze
                </span>
              )}
            </div>

            {accommodation.description && (
              <p className="text-gray-600 mb-6">{accommodation.description}</p>
            )}

            <div className="space-y-3 text-gray-600">
              {accommodation.address && (
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-green-700 mt-1" />
                  <span>{accommodation.address}</span>
                </div>
              )}
              {accommodation.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-amber-500" />
                  <span>{accommodation.phone}</span>
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-6">
              <button className="p-2 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 transition-all">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors">
                <MapPin className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* LIGHTBOX MODAL */}
        {isLightboxOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center"
            style={{ zIndex: 99999 }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors duration-200 z-50"
            >
              <X size={32} strokeWidth={2} />
            </button>

            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevLightboxImage}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-50"
                >
                  <ChevronLeft size={48} strokeWidth={2} />
                </button>
                
                <button
                  onClick={nextLightboxImage}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-50"
                >
                  <ChevronRight size={48} strokeWidth={2} />
                </button>
              </>
            )}

            {/* Main image */}
            <img
              src={images[lightboxImageIndex]}
              alt={`${accommodation.name} - Imagem ${lightboxImageIndex + 1}`}
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
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
  }

  // Compact version for non-expanded cards
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="relative h-64 overflow-hidden group">
          <div 
            className="w-full h-full cursor-pointer"
            onClick={() => handleImageClick(currentImageIndex)}
          >
            <img 
              src={images[currentImageIndex]} 
              alt={`${accommodation.name} - Imagem ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ cursor: 'pointer' }}
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                🔍 Clique para ampliar
              </div>
            </div>
          </div>
          
          {images.length > 1 && (
            <>
              <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button 
                  onClick={prevImage}
                  className="ml-4 bg-white bg-opacity-90 hover:bg-white rounded-full p-2 transition-all duration-200 z-10"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-800" />
                </button>
                <button 
                  onClick={nextImage}
                  className="mr-4 bg-white bg-opacity-90 hover:bg-white rounded-full p-2 transition-all duration-200 z-10"
                >
                  <ChevronRight className="w-5 h-5 text-gray-800" />
                </button>
              </div>

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
                        : 'bg-white bg-opacity-50 hover:bg-opacity-70'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-xl font-semibold text-green-800 mb-2">{accommodation.name}</h3>
          <button className="text-sm text-amber-600 hover:text-green-800 font-medium transition-colors duration-200 flex items-center gap-1">
            Ver detalhes
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* LIGHTBOX MODAL FOR COMPACT CARDS */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center"
          style={{ zIndex: 99999 }}
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors duration-200 z-50"
          >
            <X size={32} strokeWidth={2} />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={prevLightboxImage}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-50"
              >
                <ChevronLeft size={48} strokeWidth={2} />
              </button>
              
              <button
                onClick={nextLightboxImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-50"
              >
                <ChevronRight size={48} strokeWidth={2} />
              </button>
            </>
          )}

          <img
            src={images[lightboxImageIndex]}
            alt={`${accommodation.name} - Imagem ${lightboxImageIndex + 1}`}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-lg font-medium">
              {lightboxImageIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AccommodationCard;