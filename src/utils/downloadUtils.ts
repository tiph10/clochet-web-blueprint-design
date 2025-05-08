
import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';
import { toast } from "@/components/ui/use-toast";

// Function to generate a report PDF about the site
export const generateSiteReport = () => {
  try {
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("RAPPORT COMPLET - DOMAINE DU CLOCHET", 20, 20, { align: "center", maxWidth: 170 });
    
    // Content
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
    
    let y = 30;
    for (const line of content) {
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
      
      doc.text(line, 20, y);
      y += 8;
    }
    
    return doc.output('blob');
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
export const handleDownload = async (type: 'all' | 'report') => {
  try {
    if (type === 'report') {
      const reportBlob = generateSiteReport();
      saveAs(reportBlob, 'rapport-domaine-clochet.pdf');
      toast({
        title: "Rapport généré avec succès",
        description: "Le rapport a été téléchargé sur votre appareil.",
      });
    } else if (type === 'all') {
      const pdfUrls = [
        '/photos/business plan.pdf',
        '/photos/DEVIS TRAVAUX.pdf',
        '/photos/ESTHETIQUE.pdf',
        '/photos/TABLEAU DE TRESORERIE.pdf'
      ];
      
      // Download each PDF sequentially
      for (const url of pdfUrls) {
        const filename = url.split('/').pop() || 'document.pdf';
        // Fetch the PDF
        const response = await fetch(url);
        const blob = await response.blob();
        saveAs(blob, filename);
      }
      
      // Also download the report
      const reportBlob = generateSiteReport();
      saveAs(reportBlob, 'rapport-domaine-clochet.pdf');
      
      toast({
        title: "Téléchargements réussis",
        description: "Tous les documents ont été téléchargés sur votre appareil.",
      });
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
