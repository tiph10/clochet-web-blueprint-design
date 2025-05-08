
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ProjectSection from '../components/ProjectSection';
import MarketSection from '../components/MarketSection';
import FinancialSection from '../components/FinancialSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation />
      <Header />
      <ProjectSection />
      <MarketSection />
      <FinancialSection />
      <Footer />
    </div>
  );
};

export default Index;
