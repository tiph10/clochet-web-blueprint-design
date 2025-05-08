
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
      className="min-h-screen relative flex items-center justify-center w-full"
      style={{
        backgroundImage: 'url(/photos/domaine.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-beige-50/70 to-beige-100/70"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in [animation-delay:200ms] opacity-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-beige-800">Le Domaine du Clochet</h1>
          <p className="text-lg md:text-xl text-beige-700 max-w-2xl mx-auto mb-10">
            Une approche innovante pour valoriser un patrimoine agricole d'exception
          </p>
          <Button 
            onClick={handleScroll}
            className="bg-beige-600 hover:bg-beige-700 text-white px-8 py-6 rounded-md text-lg"
          >
            Découvrir
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Header;
