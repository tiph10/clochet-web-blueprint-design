
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { handleDownload } from '@/utils/downloadUtils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DownloadButtonProps {
  isMobile?: boolean;
  onDownload?: () => void;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ isMobile = false, onDownload }) => {
  const handleClickItem = (type: 'all' | 'report' | 'business' | 'devis' | 'esthetique' | 'tresorerie') => {
    handleDownload(type);
    if (onDownload) onDownload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`
            ${isMobile 
              ? 'flex items-center space-x-3 justify-start' 
              : 'text-xs font-medium'
            } text-beige-800 border-beige-600 hover:bg-beige-100
          `}
        >
          <Download size={18} />
          <span className={isMobile ? '' : 'ml-2'}>TÉLÉCHARGER</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border border-beige-200 shadow-md">
        <DropdownMenuItem onClick={() => handleClickItem('all')}>
          Tous les documents
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleClickItem('report')}>
          Rapport domaine du Clochet
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleClickItem('business')}>
          Business plan
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleClickItem('devis')}>
          Devis travaux
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleClickItem('esthetique')}>
          Esthétique
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleClickItem('tresorerie')}>
          Tableau de trésorerie
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DownloadButton;
