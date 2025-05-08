import React, { useEffect, useState } from 'react';
import ImageCarousel from './ImageCarousel';

interface PDFImageCarouselProps {
  title?: string;
}

const PDFImageCarousel: React.FC<PDFImageCarouselProps> = ({ title }) => {
  const [validImages, setValidImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Différentes possibilités de chemins/formats à tester
    const possiblePaths = [
      // Format ESTHETIQUE-1.png, etc.
      Array.from({ length: 16 }, (_, i) => `/photos/ESTHETIQUE-${i + 1}.png`),
      // Format ESTHETIQUE/1.png, etc.
      Array.from({ length: 16 }, (_, i) => `/photos/ESTHETIQUE/${i + 1}.png`),
      // Format ESTHETIQUE_1.png, etc.
      Array.from({ length: 16 }, (_, i) => `/photos/ESTHETIQUE_${i + 1}.png`),
      // Format avec jpg au lieu de png
      Array.from({ length: 16 }, (_, i) => `/photos/ESTHETIQUE-${i + 1}.jpg`),
      // Autres chemins potentiels
      Array.from({ length: 16 }, (_, i) => `/assets/ESTHETIQUE-${i + 1}.png`),
      Array.from({ length: 16 }, (_, i) => `/images/ESTHETIQUE-${i + 1}.png`)
    ].flat();
    
    // Vérifier chaque chemin possible
    const checkPaths = async () => {
      const foundImages: string[] = [];
      
      for (const path of possiblePaths) {
        try {
          const response = await fetch(path, { method: 'HEAD' });
          if (response.ok) {
            foundImages.push(path);
            console.log(`Image trouvée: ${path}`);
          }
        } catch (error) {
          // Ignorer les erreurs silencieusement
        }
      }
      
      setValidImages(foundImages);
      setIsLoading(false);
      
      if (foundImages.length === 0) {
        console.error('Aucune image trouvée pour le PDF. Vérifiez les chemins et formats.');
      } else {
        console.log(`Total d'images trouvées: ${foundImages.length}`);
      }
    };
    
    checkPaths();
  }, []);
  
  if (isLoading) {
    return (
      <div className="py-8 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-beige-700"></div>
        <span className="ml-3">Recherche des images...</span>
      </div>
    );
  }
  
  if (validImages.length === 0) {
    // Image de secours fixe si aucune image n'est trouvée
    return (
      <div className="p-4 text-center">
        <p className="text-amber-600 mb-2">
          Les images de ce document ne sont pas disponibles actuellement.
        </p>
        <p className="text-sm">
          Veuillez vérifier l'existence des fichiers images ou contacter l'administrateur.
        </p>
        
        {/* Image de secours statique */}
        <div className="mt-4 p-6 border border-dashed border-amber-300 rounded-lg">
          <img 
            src="/fallback-placeholder.png" 
            alt="Image non disponible" 
            className="w-64 h-64 mx-auto object-contain opacity-50"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>
    );
  }
  
  return <ImageCarousel images={validImages} title={title} aspectRatio="auto" />;
};

export default PDFImageCarousel;
