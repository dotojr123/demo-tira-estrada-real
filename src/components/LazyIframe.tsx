import React, { useState, useRef, useEffect } from 'react';

interface LazyIframeProps {
  src: string;
  width?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  allowFullScreen?: boolean;
  loading?: 'lazy' | 'eager';
}

const LazyIframe: React.FC<LazyIframeProps> = ({
  src,
  width = "100%",
  height = "520",
  className = '',
  style = {},
  title = "Mapa",
  allowFullScreen = true,
  loading = 'lazy'
}) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      ref={iframeRef}
      className={`relative ${className}`}
      style={{ width, height, ...style }}
    >
      {!isInView ? (
        <div 
          className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg"
          style={{ minHeight: height }}
        >
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-2"></div>
            <p className="text-gray-600 text-sm">Carregando mapa...</p>
          </div>
        </div>
      ) : (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center rounded-lg z-10">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-2"></div>
                <p className="text-gray-600 text-sm">Carregando mapa...</p>
              </div>
            </div>
          )}
          <iframe
            src={src}
            width={width}
            height={height}
            style={{ border: 0, ...style }}
            allowFullScreen={allowFullScreen}
            loading={loading}
            title={title}
            onLoad={handleLoad}
            className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </>
      )}
    </div>
  );
};

export default LazyIframe;