
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Book, BarChart, Wallet, Mail } from "lucide-react";

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
      const sections = ['home', 'project', 'market', 'financial', 'contact'];
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

  const navItems = [
    { id: 'home', label: 'ACCUEIL', icon: <Home size={18} /> },
    { id: 'project', label: 'LE PROJET', icon: <Book size={18} /> },
    { id: 'market', label: 'LE MARCHÉ', icon: <BarChart size={18} /> },
    { id: 'financial', label: 'ASPECTS FINANCIERS', icon: <Wallet size={18} /> },
    { id: 'contact', label: 'CONTACT', icon: <Mail size={18} /> },
  ];

  return (
    <>
      <div className="progress-container">
        <div 
          className="progress-bar" 
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>
      
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-olive-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-playfair text-olive-800 font-semibold text-lg">
            Le Clochet
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Button 
                key={item.id}
                variant="ghost" 
                className={`text-xs font-medium ${activeSection === item.id ? 'text-olive-800 font-semibold' : 'text-olive-600'}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
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
        {isOpen && (
          <div className="fixed inset-0 bg-white z-50 pt-24">
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Button 
                    key={item.id}
                    variant="ghost" 
                    className={`flex items-center space-x-3 justify-start ${activeSection === item.id ? 'text-olive-800 font-semibold' : 'text-olive-600'}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
