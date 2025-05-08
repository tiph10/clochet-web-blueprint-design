import React, { useState, useEffect } from 'react';
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
import { X, AlertTriangle } from "lucide-react";

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
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  
  // Réinitialiser les erreurs d'image quand les images changent
  useEffect(() => {
    setImageErrors({});
  }, [images]);

  const handleImageClick = (src: string) => {
    setOpenImage(src);
  };
  
  const handleCloseDialog = () => {
    setOpenImage(null);
  };
  
  const handleImageError = (src: string) => {
    setImageErrors(prev => ({
      ...prev,
      [src]: true
    }));
    console.error(`Erreur de chargement de l'image: ${src}`);
  };

  // Filtrer les images avec des erreurs
  const validImages = images.filter(src => !imageErrors[src]);
  
  if (validImages.length === 0) {
    return (
      <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
        {title && (
          <h3 className="text-xl font-semibold mb-4 text-beige-800">{title}</h3>
        )}
        <div className="p-8 text-center text-red-500 border border-red-200 rounded-lg w-full">
          <AlertTriangle className="mx-auto h-12 w-12 mb-4" />
          <p className="font-medium">Aucune image n'a pu être chargée.</p>
          <p className="text-sm mt-2">Veuillez vérifier les chemins d'accès aux images.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-beige-800">{title}</h3>
      )}
      
      <Carousel className="w-full">
        <CarouselContent>
          {validImages.map((src, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className={`flex ${aspectRatio === "square" ? "aspect-square" : "aspect-auto min-h-[200px]"} items-center justify-center p-2`}>
                    <img 
                      src={src} 
                      alt={`Slide ${index + 1}`} 
                      className="rounded-md object-contain w-full h-full cursor-pointer" 
                      onClick={() => handleImageClick(src)}
                      onError={() => handleImageError(src)}
                    />
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
                src={openImage} 
                alt="Image agrandie" 
                className="w-full h-auto max-h-[80vh]" 
                onError={() => {
                  console.error(`Erreur lors de l'agrandissement de l'image: ${openImage}`);
                  handleCloseDialog();
                }}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageCarousel;
