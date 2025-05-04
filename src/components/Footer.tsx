
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-olive-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-playfair text-xl font-semibold mb-2">Le Domaine du Clochet</h3>
            <p className="text-olive-200 text-sm">Une expérience agrotouristique d'exception</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <Button 
              onClick={scrollToTop}
              variant="outline" 
              size="icon"
              className="rounded-full border-olive-600 text-olive-100 hover:bg-olive-700 hover:text-white mb-4"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
            <p className="text-olive-200 text-sm">© 2025 Le Domaine du Clochet. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
