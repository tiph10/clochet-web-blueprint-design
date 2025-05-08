
import React from 'react';
import { Button } from "@/components/ui/button";
import { Home, Book, BarChart, Wallet } from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'ACCUEIL', icon: <Home size={18} /> },
  { id: 'project', label: 'LE PROJET', icon: <Book size={18} /> },
  { id: 'market', label: 'LE MARCHÉ', icon: <BarChart size={18} /> },
  { id: 'financial', label: 'ASPECTS FINANCIERS', icon: <Wallet size={18} /> },
];

interface NavItemsProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  isMobile?: boolean;
}

const NavItems: React.FC<NavItemsProps> = ({ activeSection, scrollToSection, isMobile = false }) => {
  return (
    <>
      {navItems.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          className={`
            ${isMobile ? 'flex items-center space-x-3 justify-start' : 'text-xs font-medium'} 
            ${activeSection === item.id ? 'text-beige-800 font-semibold' : 'text-beige-600'}
          `}
          onClick={() => scrollToSection(item.id)}
        >
          {isMobile && item.icon}
          {isMobile ? <span>{item.label}</span> : item.label}
        </Button>
      ))}
    </>
  );
};

export default NavItems;
