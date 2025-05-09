
import React, { useState, useEffect, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogClose
} from "@/components/ui/dialog";
import { X, AlertCircle } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  title?: string;
  aspectRatio?: "square" | "auto";
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  title, 
  aspectRatio = "square" 
}) => {
  const [openImage, setOpenImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Fonction améliorée pour précharger les images avec gestion d'erreur
  const preloadImages = useCallback(() => {
    console.log(`Preloading ${images.length} images`);
    const imageCache: Record<string, boolean> = {};
    const failedCache: Record<string, boolean> = {};
    
    // Préchargement avec cache busting
    images.forEach((src) => {
      // Add cache busting parameter
      const cacheBustSrc = `${src}?v=${new Date().getTime()}`;
      const img = new Image();
      
      img.onload = () => {
        console.log(`Successfully loaded image: ${src}`);
        setLoadedImages(prev => ({
          ...prev,
          [src]: true
        }));
        imageCache[src] = true;
      };
      
      img.onerror = (error) => {
        console.error(`Error loading image ${src}:`, error);
        setFailedImages(prev => ({
          ...prev,
          [src]: true
        }));
        failedCache[src] = true;
        imageCache[src] = false;
      };
      
      // Start loading with cache busting
      img.src = cacheBustSrc;
      imageCache[src] = false;
    });
    
    setLoadedImages(imageCache);
    setFailedImages(failedCache);
  }, [images]);

  // Appliquer le préchargement au montage du composant
  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  const handleImageClick = (src: string) => {
    setOpenImage(src);
  };

  const handleCloseDialog = () => {
    setOpenImage(null);
  };
  
  const handleRetryImage = (src: string) => {
    // Reset the status for this image
    setFailedImages(prev => ({
      ...prev,
      [src]: false
    }));
    
    // Try loading again with a new timestamp
    const img = new Image();
    img.onload = () => {
      setLoadedImages(prev => ({
        ...prev,
        [src]: true
      }));
    };
    img.onerror = () => {
      setFailedImages(prev => ({
        ...prev,
        [src]: true
      }));
    };
    img.src = `${src}?v=${new Date().getTime()}`;
  };

  // Ajouter un compteur d'images chargées pour le débogage
  const loadedCount = Object.values(loadedImages).filter(Boolean).length;
  const failedCount = Object.values(failedImages).filter(Boolean).length;
  
  console.log(`Carousel status: ${loadedCount}/${images.length} loaded, ${failedCount} failed`);

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-beige-800">{title}</h3>
      )}
      
      {/* Status display for debugging */}
      <div className="w-full mb-2 text-sm text-gray-500 text-center">
        {loadedCount}/{images.length} images chargées
        {failedCount > 0 && (
          <span className="text-red-500 ml-2">
            ({failedCount} échecs)
          </span>
        )}
      </div>
      
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={`${src}-${index}`} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className={`flex ${aspectRatio === "square" ? "aspect-square" : ""} items-center justify-center p-2`}>
                    {loadedImages[src] ? (
                      <img 
                        src={`${src}?v=${new Date().getTime()}`} 
                        alt={`Slide ${index + 1}`} 
                        className="rounded-md object-cover w-full h-full cursor-pointer"
                        onClick={() => handleImageClick(src)}
                      />
                    ) : failedImages[src] ? (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 rounded-md p-4 text-center">
                        <AlertCircle className="h-8 w-8 text-red-500 mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Impossible de charger l'image</p>
                        <button 
                          onClick={() => handleRetryImage(src)} 
                          className="text-xs px-2 py-1 bg-beige-600 text-white rounded hover:bg-beige-700"
                        >
                          Réessayer
                        </button>
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-md">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-beige-700"></div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 lg:-left-12" />
        <CarouselNext className="right-0 lg:-right-12" />
      </Carousel>

      {/* Image Lightbox Dialog */}
      <Dialog open={!!openImage} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-4xl p-0 bg-transparent border-0">
          <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-1">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="overflow-hidden rounded-lg">
            {openImage && (
              <img 
                src={`${openImage}?v=${new Date().getTime()}`} 
                alt="Image agrandie" 
                className="w-full h-auto max-h-[80vh]" 
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageCarousel;
