
import React from 'react';
import NavItems from './NavItems';
import DownloadButton from './DownloadButton';

interface MobileNavMenuProps {
  isOpen: boolean;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  closeMobileMenu: () => void;
}

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ 
  isOpen, 
  activeSection, 
  scrollToSection,
  closeMobileMenu
}) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-white z-50 pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-6">
          <NavItems 
            activeSection={activeSection} 
            scrollToSection={scrollToSection} 
            isMobile={true} 
          />
          <DownloadButton isMobile={true} onDownload={closeMobileMenu} />
        </div>
      </div>
    </div>
  );
};

export default MobileNavMenu;
