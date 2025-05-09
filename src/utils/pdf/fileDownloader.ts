
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

// Function to download a single PDF document with improved error handling
const downloadSinglePDF = async (url: string, filename: string): Promise<void> => {
  try {
    // Use fetch with proper response handling
    const response = await fetch(url, {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/pdf',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Ensure we're getting a valid PDF before proceeding
    const contentType = response.headers.get('Content-Type');
    if (contentType && !contentType.includes('application/pdf') && !contentType.includes('application/octet-stream')) {
      console.warn(`Expected PDF content but got ${contentType}`);
    }
    
    // Get the blob properly
    const blob = await response.blob();
    
    // Check if the blob size is reasonable for a PDF (>5KB to avoid corrupt placeholders)
    if (blob.size < 5000) {
      console.warn(`PDF file size is suspiciously small: ${blob.size} bytes for ${filename}`);
    }
    
    // Use saveAs to download the file
    saveAs(blob, filename);
    
    toast({
      title: "Téléchargement réussi",
      description: `Le document ${filename} a été téléchargé sur votre appareil.`,
    });
  } catch (error) {
    console.error(`Erreur lors du téléchargement de ${filename}:`, error);
    toast({
      title: "Erreur de téléchargement",
      description: `Impossible de télécharger ${filename}. Veuillez réessayer.`,
      variant: "destructive",
    });
  }
};

// Function to download the generated site report
const downloadSiteReport = async (): Promise<void> => {
  try {
    const reportBlob = await generateSiteReport();
    saveAs(reportBlob, 'rapport-domaine-clochet.pdf');
    
    toast({
      title: "Rapport généré avec succès",
      description: "Le rapport a été téléchargé sur votre appareil.",
    });
  } catch (error) {
    console.error('Erreur lors de la génération du rapport:', error);
    toast({
      title: "Erreur de génération de rapport",
      description: "Impossible de générer le rapport. Veuillez réessayer.",
      variant: "destructive",
    });
  }
};

// Function to download all PDFs with improved error handling
const downloadAllPDFs = async (): Promise<void> => {
  let successCount = 0;
  let failCount = 0;
  
  // Download all static PDFs
  for (const key of Object.keys(PDF_FILES) as Array<keyof typeof PDF_FILES>) {
    try {
      const url = PDF_FILES[key];
      const filename = url.split('/').pop() || 'document.pdf';
      
      // Use fetch with proper response handling
      const response = await fetch(url, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/pdf',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Get the blob properly
      const blob = await response.blob();
      
      // Check for suspicious file size
      if (blob.size < 5000) {
        console.warn(`PDF file size is suspiciously small: ${blob.size} bytes for ${filename}`);
      }
      
      // Use saveAs to download the file
      saveAs(blob, filename);
      successCount++;
    } catch (error) {
      console.error(`Erreur lors du téléchargement du PDF ${key}:`, error);
      failCount++;
    }
  }
  
  // Also download the report
  try {
    const reportBlob = await generateSiteReport();
    saveAs(reportBlob, 'rapport-domaine-clochet.pdf');
    successCount++;
  } catch (error) {
    console.error('Erreur lors de la génération du rapport:', error);
    failCount++;
  }
  
  // Show appropriate toast message
  if (failCount === 0) {
    toast({
      title: "Téléchargements réussis",
      description: "Tous les documents ont été téléchargés sur votre appareil.",
    });
  } else if (successCount === 0) {
    toast({
      title: "Échec des téléchargements",
      description: "Impossible de télécharger les documents. Veuillez réessayer.",
      variant: "destructive",
    });
  } else {
    toast({
      title: "Téléchargements partiellement réussis",
      description: `${successCount} documents téléchargés, ${failCount} échecs.`,
      variant: "destructive",
    });
  }
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
