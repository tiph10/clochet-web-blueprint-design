
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const handleScroll = () => {
    const projectSection = document.getElementById('project');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: 'url(/photos/domaine.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50/70 to-cream-100/70"></div>
      <div className="section-container text-center relative z-10">
        <div className="animate-fade-in [animation-delay:200ms] opacity-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-olive-800">Le Domaine du Clochet</h1>
          <p className="text-lg md:text-xl text-olive-700 max-w-2xl mx-auto mb-10">
            Une approche innovante pour valoriser un patrimoine agricole d'exception
          </p>
          <Button 
            onClick={handleScroll}
            className="bg-olive-600 hover:bg-olive-700 text-white px-8 py-6 rounded-md text-lg"
          >
            Découvrir
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Header;
