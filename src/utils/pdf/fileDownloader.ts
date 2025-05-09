
import { saveAs } from 'file-saver';
import { toast } from "@/components/ui/use-toast";
import { generateSiteReport } from './pdfGenerator';

// Map of PDF file paths
const PDF_FILES = {
  business: '/photos/business plan.pdf',
  devis: '/photos/devis travaux.pdf',
  esthetique: '/photos/ESTHETIQUE.pdf',
  tresorerie: '/photos/TABLEAU DE TRESORERIE.pdf'
};

// Function to download a single PDF document
const downloadSinglePDF = async (url: string, filename: string): Promise<void> => {
  const response = await fetch(url);
  const blob = await response.blob();
  saveAs(blob, filename);
  
  toast({
    title: "Téléchargement réussi",
    description: `Le document ${filename} a été téléchargé sur votre appareil.`,
  });
};

// Function to download the generated site report
const downloadSiteReport = async (): Promise<void> => {
  const reportBlob = await generateSiteReport();
  saveAs(reportBlob, 'rapport-domaine-clochet.pdf');
  
  toast({
    title: "Rapport généré avec succès",
    description: "Le rapport a été téléchargé sur votre appareil.",
  });
};

// Function to download all PDFs
const downloadAllPDFs = async (): Promise<void> => {
  // Download all static PDFs
  for (const key of Object.keys(PDF_FILES) as Array<keyof typeof PDF_FILES>) {
    const url = PDF_FILES[key];
    const filename = url.split('/').pop() || 'document.pdf';
    // Fetch the PDF
    const response = await fetch(url);
    const blob = await response.blob();
    saveAs(blob, filename);
  }
  
  // Also download the report
  const reportBlob = await generateSiteReport();
  saveAs(reportBlob, 'rapport-domaine-clochet.pdf');
  
  toast({
    title: "Téléchargements réussis",
    description: "Tous les documents ont été téléchargés sur votre appareil.",
  });
};

// Function to handle downloads based on document type
export const handleDownload = async (type: 'all' | 'report' | 'business' | 'devis' | 'esthetique' | 'tresorerie'): Promise<void> => {
  try {
    if (type === 'report') {
      await downloadSiteReport();
    } else if (type === 'all') {
      await downloadAllPDFs();
    } else {
      // Download individual PDF
      const url = PDF_FILES[type as keyof typeof PDF_FILES];
      if (url) {
        const filename = url.split('/').pop() || 'document.pdf';
        await downloadSinglePDF(url, filename);
      }
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
