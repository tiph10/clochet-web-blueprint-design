
import React from 'react';
import ImageCarousel from './ImageCarousel';

interface PDFImageCarouselProps {
  title?: string;
}

const PDFImageCarousel: React.FC<PDFImageCarouselProps> = ({ title }) => {
  // Génération des chemins des images ESTHETIQUE de 1 à 16
  const images = Array.from({ length: 16 }, (_, i) => `/photos/ESTHETIQUE (${i + 1}).png`);
  
  return <ImageCarousel images={images} title={title} />;
};

export default PDFImageCarousel;
