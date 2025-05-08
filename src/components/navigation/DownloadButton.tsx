
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { handleDownload } from '@/utils/downloadUtils';

interface DownloadButtonProps {
  isMobile?: boolean;
  onDownload?: () => void;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ isMobile = false, onDownload }) => {
  const handleClick = () => {
    handleDownload('all');
    if (onDownload) onDownload();
  };

  return (
    <Button
      variant="outline"
      className={`
        ${isMobile 
          ? 'flex items-center space-x-3 justify-start' 
          : 'text-xs font-medium'
        } text-beige-800 border-beige-600 hover:bg-beige-100
      `}
      onClick={handleClick}
    >
      <Download size={18} />
      <span className={isMobile ? '' : 'ml-2'}>TÉLÉCHARGER</span>
    </Button>
  );
};

export default DownloadButton;
