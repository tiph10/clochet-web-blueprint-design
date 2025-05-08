
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import NavItems from './navigation/NavItems';
import DownloadButton from './navigation/DownloadButton';
import MobileNavMenu from './navigation/MobileNavMenu';
import ScrollProgressBar from './navigation/ScrollProgressBar';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Determine active section
      const sections = ['home', 'project', 'market', 'financial'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <>
      <ScrollProgressBar scrollProgress={scrollProgress} />
      
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-beige-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-playfair text-beige-800 font-semibold text-lg">
            Le Clochet
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItems
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />
            
            <div className="flex items-center">
              <DownloadButton />
            </div>
          </div>
          
          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <MobileNavMenu 
          isOpen={isOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          closeMobileMenu={closeMobileMenu}
        />
      </nav>
    </>
  );
};

export default Navigation;
