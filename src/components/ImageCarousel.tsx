import React, { useState } from 'react';
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
import { X } from "lucide-react";

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

  const handleImageClick = (src: string) => {
    setOpenImage(src);
  };

  const handleCloseDialog = () => {
    setOpenImage(null);
  };

  const handleImageError = (src: string) => {
    console.error(`Erreur de chargement pour l'image: ${src}`);
    setImageErrors(prev => ({ ...prev, [src]: true }));
  };

  // Filtrer les images valides
  const validImages = images.filter(src => !imageErrors[src]);

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-beige-800">{title}</h3>
      )}
      
      {validImages.length > 0 ? (
        <Carousel className="w-full">
          <CarouselContent>
            {validImages.map((src, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className={`flex ${aspectRatio === "square" ? "aspect-square" : ""} items-center justify-center p-2`}>
                      <img 
                        src={src} 
                        alt={`Slide ${index + 1}`} 
                        className="rounded-md object-cover w-full h-full cursor-pointer"
                        onClick={() => handleImageClick(src)}
                        onError={() => handleImageError(src)}
                        loading="lazy" // Amélioration: chargement paresseux
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
      ) : (
        <div className="p-8 bg-cream-50 rounded-md text-center">
          <p className="text-olive-700">Aucune image disponible ou les images n'ont pas pu être chargées.</p>
        </div>
      )}
      
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
                  handleImageError(openImage);
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
