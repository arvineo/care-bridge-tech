import { useState, useEffect } from "react";

interface ImageCarouselProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  autoSwitchInterval?: number;
  className?: string;
}

const ImageCarousel = ({ 
  images, 
  autoSwitchInterval = 3000, 
  className = "" 
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoSwitchInterval);

    return () => clearInterval(interval);
  }, [images.length, autoSwitchInterval]);

  if (images.length === 0) {
    return <div className={`${className} flex items-center justify-center bg-muted`}>
      <p className="text-muted-foreground">No images available</p>
    </div>;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;