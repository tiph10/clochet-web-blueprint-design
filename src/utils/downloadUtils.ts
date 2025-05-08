
import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';
import { toast } from "@/components/ui/use-toast";
import html2canvas from 'html2canvas';

// Function to generate a report PDF about the site
export const generateSiteReport = async () => {
  try {
    // Create new PDF document
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    });
    
    // Title page
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("RAPPORT COMPLET - DOMAINE DU CLOCHET", doc.internal.pageSize.width / 2, 20, { align: "center", maxWidth: 170 });
    
    // Capture the entire website content
    try {
      // We'll try to capture each section of the website
      const sections = ['home', 'project', 'market', 'financial'];
      let y = 40;
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          // Add a section title
          doc.setFontSize(16);
          doc.setFont("helvetica", "bold");
          doc.text(sectionId.toUpperCase(), 20, y);
          y += 10;
          
          // Capture the section content as an image
          const canvas = await html2canvas(section, {
            scale: 1,
            useCORS: true,
            allowTaint: true,
            logging: false
          });
          
          const imgData = canvas.toDataURL('image/png');
          const imgProps = doc.getImageProperties(imgData);
          const pdfWidth = doc.internal.pageSize.width - 40;
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          
          if (y + pdfHeight > doc.internal.pageSize.height - 20) {
            doc.addPage();
            y = 20;
          }
          
          doc.addImage(imgData, 'PNG', 20, y, pdfWidth, pdfHeight);
          y += pdfHeight + 20;
          
          if (y > doc.internal.pageSize.height - 30) {
            doc.addPage();
            y = 20;
          }
        }
      }
      
      // Add footer on last page
      doc.setFontSize(10);
      doc.setFont("helvetica", "italic");
      doc.text(`Domaine du Clochet - © ${new Date().getFullYear()}`, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 10, { align: "center" });
      
      return doc.output('blob');
    } catch (captureError) {
      console.error('Error capturing website content:', captureError);
      
      // Fallback to simple text report
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      
      const content = [
        "Le Domaine du Clochet représente une opportunité d'investissement unique dans le secteur agrotouristique",
        "en combinant tradition viticole et accueil touristique de qualité.",
        "",
        "PROJET:",
        "- Acquisition et rénovation d'un domaine viticole historique",
        "- Développement d'une offre œnotouristique complète",
        "- Création de gîtes et chambres d'hôtes haut de gamme",
        "",
        "MARCHÉ:",
        "- Croissance continue du tourisme expérientiel et de l'œnotourisme",
        "- Forte demande pour des séjours authentiques en milieu rural",
        "- Position géographique avantageuse dans une région viticole reconnue",
        "",
        "FINANCEMENT:",
        "- Montant total du projet: 1 100 000 €",
        "- Crédit-bail immobilier: 850 000 € + 250 000 € en financement à terme",
        "- Prêt bancaire moyen terme: 500 000 €",
        "",
        "Pour plus d'informations, veuillez consulter les documents détaillés.",
        "",
        `Domaine du Clochet - © ${new Date().getFullYear()}`
      ];
      
      let y = 40;
      for (const line of content) {
        if (y > 280) {
          doc.addPage();
          y = 20;
        }
        
        doc.text(line, 20, y);
        y += 8;
      }
      
      return doc.output('blob');
    }
  } catch (error) {
    console.error('Error generating PDF report:', error);
    const text = `RAPPORT COMPLET - DOMAINE DU CLOCHET\n\n
    Le Domaine du Clochet représente une opportunité d'investissement unique dans le secteur agrotouristique 
    en combinant tradition viticole et accueil touristique de qualité.\n\n
    PROJET:\n
    - Acquisition et rénovation d'un domaine viticole historique\n
    - Développement d'une offre œnotouristique complète\n
    - Création de gîtes et chambres d'hôtes haut de gamme\n\n
    MARCHÉ:\n
    - Croissance continue du tourisme expérientiel et de l'œnotourisme\n
    - Forte demande pour des séjours authentiques en milieu rural\n
    - Position géographique avantageuse dans une région viticole reconnue\n\n
    FINANCEMENT:\n
    - Montant total du projet: 1 100 000 €\n
    - Crédit-bail immobilier: 850 000 € + 250 000 € en financement à terme\n
    - Prêt bancaire moyen terme: 500 000 €\n\n
    Pour plus d'informations, veuillez consulter les documents détaillés.\n\n
    Domaine du Clochet - © ${new Date().getFullYear()}`;
    
    // Fallback to text file if PDF generation fails
    return new Blob([text], { type: 'text/plain;charset=utf-8' });
  }
};

// Function to handle downloads
export const handleDownload = async (type: 'all' | 'report' | 'business' | 'devis' | 'esthetique' | 'tresorerie') => {
  try {
    // Map of PDF file paths
    const pdfFiles = {
      business: '/photos/business plan.pdf',
      devis: '/photos/devis travaux.pdf',
      esthetique: '/photos/ESTHETIQUE.pdf',
      tresorerie: '/photos/TABLEAU DE TRESORERIE.pdf'
    };
    
    if (type === 'report') {
      const reportBlob = await generateSiteReport();
      saveAs(reportBlob, 'rapport-domaine-clochet.pdf');
      toast({
        title: "Rapport généré avec succès",
        description: "Le rapport a été téléchargé sur votre appareil.",
      });
    } else if (type === 'all') {
      // Download all PDFs
      for (const key of Object.keys(pdfFiles) as Array<keyof typeof pdfFiles>) {
        const url = pdfFiles[key];
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
    } else {
      // Download individual PDF
      const url = pdfFiles[type as keyof typeof pdfFiles];
      if (url) {
        const filename = url.split('/').pop() || 'document.pdf';
        const response = await fetch(url);
        const blob = await response.blob();
        saveAs(blob, filename);
        toast({
          title: "Téléchargement réussi",
          description: `Le document ${filename} a été téléchargé sur votre appareil.`,
        });
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
