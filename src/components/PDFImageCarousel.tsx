
import React, { useState, useEffect } from 'react';
import ImageCarousel from './ImageCarousel';

interface PDFImageCarouselProps {
  title?: string;
}

const PDFImageCarousel: React.FC<PDFImageCarouselProps> = ({ title }) => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);
  const [loadingError, setLoadingError] = useState<string | null>(null);
  
  useEffect(() => {
    // Création des chemins d'images avec gestion des problèmes de chemin
    const imageUrls = Array.from(
      { length: 16 }, 
      (_, i) => `/photos/ESTHETIQUE (${i + 1}).png`
    );
    
    // Vérification que les images sont valides avec meilleure gestion d'erreur
    const checkImages = async () => {
      try {
        console.log("Checking image availability...");
        const validImages: string[] = [];
        let loadFailures = 0;
        
        // Précharger toutes les images individuellement pour éviter un blocage complet en cas d'échec partiel
        for (const url of imageUrls) {
          try {
            const checkResult = await new Promise<boolean>((resolve) => {
              const img = new Image();
              
              img.onload = () => {
                console.log(`Successfully loaded: ${url}`);
                validImages.push(url);
                resolve(true);
              };
              
              img.onerror = () => {
                console.error(`Failed to load image: ${url}`);
                loadFailures++;
                resolve(false);
              };
              
              // Add cache busting to prevent browser cache issues
              img.src = `${url}?v=${new Date().getTime()}`;
              
              // Set a timeout to prevent hanging
              setTimeout(() => {
                if (!img.complete) {
                  console.warn(`Image load timeout: ${url}`);
                  resolve(false);
                }
              }, 5000);
            });
          } catch (imgError) {
            console.error(`Error checking image ${url}:`, imgError);
            loadFailures++;
          }
        }
        
        console.log(`Image check complete. Valid: ${validImages.length}, Failed: ${loadFailures}`);
        
        if (validImages.length > 0) {
          setImages(validImages);
          setImagesLoaded(true);
          setLoadingError(null);
        } else {
          setLoadingError("Impossible de charger les images. Veuillez réessayer ultérieurement.");
        }
      } catch (error) {
        console.error("Error checking images:", error);
        setLoadingError("Une erreur est survenue lors du chargement des images.");
      }
    };
    
    checkImages();
  }, []);
  
  if (loadingError) {
    return (
      <div className="flex flex-col justify-center items-center p-10 text-center">
        <div className="text-red-500 mb-4">{loadingError}</div>
        <button 
          className="px-4 py-2 bg-beige-600 text-white rounded hover:bg-beige-700"
          onClick={() => window.location.reload()}
        >
          Recharger la page
        </button>
      </div>
    );
  }
  
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
