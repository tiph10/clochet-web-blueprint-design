
import { saveAs } from 'file-saver';
import { toast } from "@/components/ui/use-toast";
import { generateSiteReport } from './pdfGenerator';

// Map of PDF file paths with public URL handling
const PDF_FILES = {
  business: '/photos/business plan.pdf',
  devis: '/photos/devis travaux.pdf',
  esthetique: '/photos/ESTHETIQUE.pdf',
  tresorerie: '/photos/TABLEAU DE TRESORERIE.pdf'
};

// Function to ensure we have the correct URL for environment
const getCorrectUrl = (url: string): string => {
  // Remove leading slash if it exists to prevent double slashes
  const cleanPath = url.startsWith('/') ? url.substring(1) : url;
  
  // If it's already a full URL, return it
  if (cleanPath.startsWith('http://') || cleanPath.startsWith('https://')) {
    return cleanPath;
  }
  
  // Handle different environments appropriately
  // In production, use the relative path which will be resolved against the base URL
  return cleanPath;
};

// Function to download a single PDF document with improved error handling
const downloadSinglePDF = async (url: string, filename: string): Promise<void> => {
  try {
    // Get the correct URL for the current environment
    const correctUrl = getCorrectUrl(url);
    console.log(`Attempting to download from: ${correctUrl}`);
    
    // Use fetch with proper response handling and cache busting
    const response = await fetch(correctUrl, {
      method: 'GET',
      cache: 'no-store', // Force fresh content instead of no-cache
      headers: {
        'Accept': 'application/pdf,application/octet-stream,*/*',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
      },
    });
    
    if (!response.ok) {
      console.error(`HTTP error status: ${response.status}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Get the blob properly
    const blob = await response.blob();
    
    // Debug information
    console.log(`Downloaded file size: ${blob.size} bytes for ${filename}`);
    console.log(`Content type: ${blob.type}`);
    
    // Check if the blob size is reasonable for a PDF (>5KB to avoid corrupt placeholders)
    if (blob.size < 5000) {
      console.warn(`PDF file size is suspiciously small: ${blob.size} bytes for ${filename}. This might indicate corruption.`);
      
      // Create a text representation if the file appears to be corrupt
      if (blob.size < 2000) {
        const text = await blob.text();
        console.error(`Content of suspicious file: ${text.substring(0, 100)}...`);
      }
    }
    
    // For extra safety, verify it's a PDF by checking the first bytes (PDF magic number)
    if (blob.size > 4) {
      const fileReader = new FileReader();
      
      fileReader.onloadend = function(e) {
        const arr = new Uint8Array(e.target?.result as ArrayBuffer).subarray(0, 4);
        const header = String.fromCharCode.apply(null, Array.from(arr));
        
        // Check PDF header signature
        if (header !== "%PDF") {
          console.error(`File doesn't have PDF header: ${header}`);
        } else {
          console.log("Valid PDF header detected");
        }
      };
      
      // Read the first few bytes
      const headerSlice = blob.slice(0, 4);
      fileReader.readAsArrayBuffer(headerSlice);
    }
    
    // Use saveAs to download the file
    saveAs(new Blob([blob], {type: 'application/pdf'}), filename);
    
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
      
      // Get the correct URL for the current environment
      const correctUrl = getCorrectUrl(url);
      console.log(`Attempting to download from: ${correctUrl} for key ${key}`);
      
      // Use fetch with proper response handling
      const response = await fetch(correctUrl, {
        method: 'GET',
        cache: 'no-store',
        headers: {
          'Accept': 'application/pdf,application/octet-stream,*/*',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
        },
      });
      
      if (!response.ok) {
        console.error(`HTTP error status for ${key}: ${response.status}`);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Get the blob properly
      const blob = await response.blob();
      
      // Debug information
      console.log(`Downloaded file ${key} size: ${blob.size} bytes`);
      console.log(`Content type for ${key}: ${blob.type}`);
      
      // Check for suspicious file size
      if (blob.size < 5000) {
        console.warn(`PDF file size is suspiciously small: ${blob.size} bytes for ${filename}`);
      }
      
      // Use saveAs to download the file
      saveAs(new Blob([blob], {type: 'application/pdf'}), filename);
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
