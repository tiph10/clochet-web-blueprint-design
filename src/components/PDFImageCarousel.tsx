
import React, { useState, useEffect } from 'react';
import ImageCarousel from './ImageCarousel';

interface PDFImageCarouselProps {
  title?: string;
}

const PDFImageCarousel: React.FC<PDFImageCarouselProps> = ({ title }) => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);
  
  useEffect(() => {
    // Création des chemins d'images à l'intérieur du useEffect pour éviter les conflits
    const imageUrls = Array.from(
      { length: 16 }, 
      (_, i) => `/photos/ESTHETIQUE (${i + 1}).png`
    );
    
    // Vérification que les images sont valides
    const checkImages = async () => {
      try {
        // Précharger toutes les images pour s'assurer qu'elles sont disponibles
        const promises = imageUrls.map(url => {
          return new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => {
              console.error(`Failed to load image: ${url}`);
              resolve();
            };
            img.src = url;
          });
        });
        
        await Promise.all(promises);
        setImages(imageUrls);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };
    
    checkImages();
  }, []);
  
  if (!imagesLoaded) {
    return (
      <div className="flex justify-center items-center p-10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-beige-700"></div>
      </div>
    );
  }
  
  return <ImageCarousel images={images} title={title} />;
};

export default PDFImageCarousel;
