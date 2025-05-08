
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Book, BarChart, Wallet, Download } from "lucide-react";
import { saveAs } from 'file-saver';
import { toast } from "@/components/ui/use-toast";
import { jsPDF } from 'jspdf';

// Function to generate a report PDF about the site
const generateSiteReport = () => {
  try {
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("RAPPORT COMPLET - DOMAINE DU CLOCHET", 20, 20, { align: "center", maxWidth: 170 });
    
    // Content
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    
    const content = [
      "Le Domaine du Clochet représente une opportunité d'investissement unique dans le secteur agrotouristique",
      "en combinant tradition viticole et accueil touristique de qualité.",
      "",
      "PROJET:",
      "- Acquisition et rénovation d'un domaine viticole historique",
      "- Développement d'une offre œnotouristique complète",
      "- Création de gîtes et chambres d'hôtes haut de gamme",
      "",
      "MARCHÉ:",
      "- Croissance continue du tourisme expérientiel et de l'œnotourisme",
      "- Forte demande pour des séjours authentiques en milieu rural",
      "- Position géographique avantageuse dans une région viticole reconnue",
      "",
      "FINANCEMENT:",
      "- Montant total du projet: 1 100 000 €",
      "- Crédit-bail immobilier: 850 000 € + 250 000 € en financement à terme",
      "- Prêt bancaire moyen terme: 500 000 €",
      "",
      "Pour plus d'informations, veuillez consulter les documents détaillés.",
      "",
      `Domaine du Clochet - © ${new Date().getFullYear()}`
    ];
    
    let y = 30;
    for (const line of content) {
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
      
      doc.text(line, 20, y);
      y += 8;
    }
    
    return doc.output('blob');
  } catch (error) {
    console.error('Error generating PDF report:', error);
    const text = `RAPPORT COMPLET - DOMAINE DU CLOCHET\n\n
    Le Domaine du Clochet représente une opportunité d'investissement unique dans le secteur agrotouristique 
    en combinant tradition viticole et accueil touristique de qualité.\n\n
    PROJET:\n
    - Acquisition et rénovation d'un domaine viticole historique\n
    - Développement d'une offre œnotouristique complète\n
    - Création de gîtes et chambres d'hôtes haut de gamme\n\n
    MARCHÉ:\n
    - Croissance continue du tourisme expérientiel et de l'œnotourisme\n
    - Forte demande pour des séjours authentiques en milieu rural\n
    - Position géographique avantageuse dans une région viticole reconnue\n\n
    FINANCEMENT:\n
    - Montant total du projet: 1 100 000 €\n
    - Crédit-bail immobilier: 850 000 € + 250 000 € en financement à terme\n
    - Prêt bancaire moyen terme: 500 000 €\n\n
    Pour plus d'informations, veuillez consulter les documents détaillés.\n\n
    Domaine du Clochet - © ${new Date().getFullYear()}`;
    
    // Fallback to text file if PDF generation fails
    return new Blob([text], { type: 'text/plain;charset=utf-8' });
  }
};

// Function to handle downloads
const handleDownload = async (type: 'all' | 'report') => {
  try {
    if (type === 'report') {
      const reportBlob = generateSiteReport();
      saveAs(reportBlob, 'rapport-domaine-clochet.pdf');
      toast({
        title: "Rapport généré avec succès",
        description: "Le rapport a été téléchargé sur votre appareil.",
      });
    } else if (type === 'all') {
      const pdfUrls = [
        '/photos/business plan.pdf',
        '/photos/DEVIS TRAVAUX.pdf',
        '/photos/ESTHETIQUE.pdf',
        '/photos/TABLEAU DE TRESORERIE.pdf'
      ];
      
      // Download each PDF sequentially
      for (const url of pdfUrls) {
        const filename = url.split('/').pop() || 'document.pdf';
        // Fetch the PDF
        const response = await fetch(url);
        const blob = await response.blob();
        saveAs(blob, filename);
      }
      
      // Also download the report
      const reportBlob = generateSiteReport();
      saveAs(reportBlob, 'rapport-domaine-clochet.pdf');
      
      toast({
        title: "Téléchargements réussis",
        description: "Tous les documents ont été téléchargés sur votre appareil.",
      });
    }
  } catch (error) {
    console.error('Erreur lors du téléchargement:', error);
    toast({
      title: "Erreur de téléchargement",
      description: "Une erreur s'est produite lors du téléchargement des documents.",
      variant: "destructive",
    });
  }
};

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

  const navItems = [
    { id: 'home', label: 'ACCUEIL', icon: <Home size={18} /> },
    { id: 'project', label: 'LE PROJET', icon: <Book size={18} /> },
    { id: 'market', label: 'LE MARCHÉ', icon: <BarChart size={18} /> },
    { id: 'financial', label: 'ASPECTS FINANCIERS', icon: <Wallet size={18} /> },
  ];

  return (
    <>
      <div className="progress-container">
        <div 
          className="progress-bar" 
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>
      
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-beige-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-playfair text-beige-800 font-semibold text-lg">
            Le Clochet
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Button 
                key={item.id}
                variant="ghost" 
                className={`text-xs font-medium ${activeSection === item.id ? 'text-beige-800 font-semibold' : 'text-beige-600'}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
            
            <div className="flex items-center">
              <Button
                variant="outline"
                className="text-xs font-medium text-beige-800 border-beige-600 hover:bg-beige-100"
                onClick={() => handleDownload('all')}
              >
                <Download size={18} />
                <span className="ml-2">TÉLÉCHARGER</span>
              </Button>
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
        {isOpen && (
          <div className="fixed inset-0 bg-white z-50 pt-24">
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Button 
                    key={item.id}
                    variant="ghost" 
                    className={`flex items-center space-x-3 justify-start ${activeSection === item.id ? 'text-beige-800 font-semibold' : 'text-beige-600'}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Button>
                ))}
                <Button 
                  variant="outline" 
                  className="flex items-center space-x-3 justify-start text-beige-800 border-beige-600 hover:bg-beige-100"
                  onClick={() => {
                    handleDownload('all');
                    setIsOpen(false);
                  }}
                >
                  <Download size={18} />
                  <span>TÉLÉCHARGER</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
