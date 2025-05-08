
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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
  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-beige-800">{title}</h3>
      )}
      
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className={`flex ${aspectRatio === "square" ? "aspect-square" : ""} items-center justify-center p-2`}>
                    <img 
                      src={src} 
                      alt={`Slide ${index + 1}`} 
                      className="rounded-md object-cover w-full h-full"
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
    </div>
  );
};

export default ImageCarousel;
