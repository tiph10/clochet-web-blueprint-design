import React, { useEffect, useState } from 'react';
import ImageCarousel from './ImageCarousel';

interface PDFImageCarouselProps {
  title?: string;
}

const PDFImageCarousel: React.FC<PDFImageCarouselProps> = ({ title }) => {
  const [imagesExist, setImagesExist] = useState<boolean[]>(Array(16).fill(false));
  
  // Génération des chemins des images ESTHETIQUE de 1 à 16
  const baseImagePaths = Array.from({ length: 16 }, (_, i) => `/photos/ESTHETIQUE-${i + 1}.png`);
  
  useEffect(() => {
    // Vérifier quelles images existent réellement
    const checkImages = async () => {
      const results = await Promise.all(
        baseImagePaths.map(async (path) => {
          try {
            const response = await fetch(path, { method: 'HEAD' });
            return response.ok;
          } catch (error) {
            console.error(`Erreur lors de la vérification de l'image ${path}:`, error);
            return false;
          }
        })
      );
      
      setImagesExist(results);
    };
    
    checkImages();
  }, []);
  
  // Filtrer uniquement les images qui existent
  const images = baseImagePaths.filter((_, index) => imagesExist[index]);
  
  // Message de débogage pour aider à identifier les problèmes
  useEffect(() => {
    if (images.length === 0) {
      console.warn('Aucune image ESTHETIQUE n\'a été trouvée. Vérifiez les chemins et l\'accessibilité des fichiers.');
    } else {
      console.log(`${images.length} images ESTHETIQUE trouvées sur 16 attendues.`);
    }
  }, [images]);
  
  // Fallback si aucune image n'est disponible
  if (images.length === 0) {
    return (
      <div className="p-4 text-center">
        <p className="text-red-500 mb-2">Aucune image disponible pour la visualisation.</p>
        <p className="text-sm">Veuillez vérifier que les images existent dans le dossier "/photos/".</p>
      </div>
    );
  }
  
  return <ImageCarousel images={images} title={title} aspectRatio="auto" />;
};

export default PDFImageCarousel;
