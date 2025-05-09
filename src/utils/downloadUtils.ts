import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';
import { toast } from "@/components/ui/use-toast";
import html2canvas from 'html2canvas';

// Function to generate a report PDF about the site
export const generateSiteReport = async () => {
  try {
    // Create new PDF document - using A4 landscape for better webpage capture
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
      compress: true
    });
    
    // Title page
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("DOMAINE DU CLOCHET", doc.internal.pageSize.width / 2, 30, { align: "center" });
    doc.setFontSize(18);
    doc.setFont("helvetica", "normal");
    doc.text("Rapport complet", doc.internal.pageSize.width / 2, 45, { align: "center" });
    
    // Add a cover image if available
    try {
      const coverImage = document.querySelector('#home') as HTMLElement;
      if (coverImage) {
        const canvas = await html2canvas(coverImage, {
          scale: 2, // Optimal setting for balance of quality vs performance
          useCORS: true, // Enable loading cross-origin images
          allowTaint: true, // Allow cross-origin images to taint canvas
          logging: false, // Disable logging to console
          imageTimeout: 15000, // Increased timeout for images
          height: Math.min(coverImage.scrollHeight, 800)
        });
        const imgData = canvas.toDataURL('image/jpeg', 0.95); // Higher quality JPEG
        const imgWidth = doc.internal.pageSize.width - 40;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        doc.addImage(imgData, 'JPEG', 20, 60, imgWidth, Math.min(imgHeight, 120));
      }
    } catch (error) {
      console.error('Error adding cover image:', error);
    }
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text(`© ${new Date().getFullYear()} Domaine du Clochet`, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 10, { align: "center" });
    
    // Capture each section of the website
    const sections = [
      { id: 'project', title: 'LE PROJET' },
      { id: 'market', title: 'ÉTUDE DE MARCHÉ' },
      { id: 'financial', title: 'ASPECTS FINANCIERS' }
    ];
    
    for (const section of sections) {
      try {
        const sectionElement = document.getElementById(section.id);
        if (!sectionElement) continue;
        
        // Add a new page for each section
        doc.addPage();
        
        // Section title
        doc.setFontSize(20);
        doc.setFont("helvetica", "bold");
        doc.text(section.title, doc.internal.pageSize.width / 2, 20, { align: "center" });
        
        // Using common HTML width to maintain aspect ratio
        const standardWidth = 1200; // Common desktop width
        
        // For each section, we'll capture individual subsections/components to ensure better quality
        const subsections = Array.from(sectionElement.children).filter(
          el => el.tagName !== 'SCRIPT' && el.classList.contains('section-container')
        );
        
        // If no subsections found, capture the entire section
        if (subsections.length === 0) {
          // Capture the section with higher quality settings
          const canvas = await html2canvas(sectionElement, {
            scale: 2, // Balance of quality and performance
            useCORS: true,
            allowTaint: true, 
            logging: false,
            width: standardWidth, // Fixed width for consistency
            windowWidth: standardWidth,
            imageTimeout: 15000
          });
          
          const imgData = canvas.toDataURL('image/jpeg', 0.95);
          const imgWidth = doc.internal.pageSize.width - 40;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          
          // If the image is too tall, split it across multiple pages
          if (imgHeight > doc.internal.pageSize.height - 40) {
            // We need to split the image across multiple pages
            const pageHeight = doc.internal.pageSize.height - 40;
            let heightLeft = imgHeight;
            let position = 30; // Initial y-position on first page
            let pageCount = 1;
            
            // Add the image to the first page
            doc.addImage(imgData, 'JPEG', 20, position, imgWidth, imgHeight);
            
            heightLeft -= pageHeight - position;
            
            // Add new pages as needed
            while (heightLeft > 0) {
              position = 20; // Reset position for new pages
              doc.addPage();
              pageCount++;
              
              // Add another part of the same image
              doc.addImage(imgData, 'JPEG', 20, position - imgHeight + pageHeight * (pageCount - 1), imgWidth, imgHeight);
              
              heightLeft -= pageHeight;
            }
          } else {
            // The image fits on a single page
            doc.addImage(imgData, 'JPEG', 20, 30, imgWidth, imgHeight);
          }
        } else {
          // Process subsections individually (usually the section-container is the first child)
          const container = subsections[0];
          let yPosition = 30;
          
          // Iterate through children of container
          const children = Array.from(container.children).filter(
            child => child.tagName !== 'SCRIPT' && getComputedStyle(child).display !== 'none'
          );
          
          for (const childElement of children) {
            // Skip very small elements
            if (childElement.clientHeight < 20) continue;
            
            // Capture each subsection with optimized settings
            const canvas = await html2canvas(childElement as HTMLElement, {
              scale: 2,
              useCORS: true,
              allowTaint: true,
              logging: false,
              width: standardWidth,
              windowWidth: standardWidth,
              imageTimeout: 15000
            });
            
            const imgData = canvas.toDataURL('image/jpeg', 0.95);
            const imgWidth = doc.internal.pageSize.width - 40;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            
            // Check if we need to add a new page
            if (yPosition + imgHeight > doc.internal.pageSize.height - 20) {
              doc.addPage();
              yPosition = 20;
            }
            
            // Add the image to the current page
            doc.addImage(imgData, 'JPEG', 20, yPosition, imgWidth, imgHeight);
            yPosition += imgHeight + 10;
          }
        }
      } catch (error) {
        console.error(`Error processing section ${section.id}:`, error);
        
        // Add a text fallback for failed sections
        doc.addPage();
        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");
        doc.text(`${section.title} (texte seulement)`, 20, 30);
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text("Impossible de capturer cette section en format graphique.", 20, 45);
        
        // Add some basic text content based on the section
        let y = 60;
        if (section.id === 'project') {
          const projectTexts = [
            "Le Domaine du Clochet est un haras d'exception situé au cœur du Var,",
            "alliant bien-être équin, préservation du patrimoine et hébergement haut de gamme.",
            "Le domaine propose:",
            "• Six gîtes luxueux",
            "• Trois chambres d'hôtes au cœur des chevaux",
            "• Des installations équestres professionnelles",
            "• Une grange événementielle pour séminaires et mariages"
          ];
          for (const line of projectTexts) {
            doc.text(line, 20, y);
            y += 8;
          }
        } else if (section.id === 'market') {
          const marketTexts = [
            "Le marché du tourisme en PACA:",
            "• 32M de visiteurs annuels",
            "• Segment de l'œnotourisme en croissance continue",
            "• Position stratégique entre Verdon et Méditerranée",
            "• Clientèle CSP+ en recherche d'authenticité",
            "• Positionnement unique sur le secteur équestre"
          ];
          for (const line of marketTexts) {
            doc.text(line, 20, y);
            y += 8;
          }
        } else if (section.id === 'financial') {
          const financialTexts = [
            "Aspects financiers du projet:",
            "• Investissement total: 1 692 960 €",
            "• Financement: Crédit-bail (850 000 €) + terme (250 000 €) + prêt (500 000 €)",
            "• Structure juridique optimisée: EURL, micro-entreprise et micro-BA",
            "• Revenu annuel projeté: 331 004 € (année 1) à 400 500 € (année 3)",
            "• Trésorerie après 15 ans: 1 395 887 €"
          ];
          for (const line of financialTexts) {
            doc.text(line, 20, y);
            y += 8;
          }
        }
      }
    }
    
    // Add a summary page at the end
    doc.addPage();
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("SYNTHÈSE", doc.internal.pageSize.width / 2, 20, { align: "center" });
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    
    const summaryText = [
      "Le Domaine du Clochet représente une opportunité d'investissement unique dans le secteur agrotouristique",
      "en combinant tradition viticole et accueil touristique de qualité.",
      "",
      "Points clés du projet:",
      "- Acquisition et rénovation d'un domaine historique à Ampus (Var)",
      "- Développement d'une offre d'hébergement haut de gamme (6 gîtes, 3 chambres d'hôtes)",
      "- Installations équestres professionnelles et approche éthique du bien-être animal",
      "- Espace événementiel pour séminaires et mariages",
      "",
      "Marché:",
      "- Position unique entre les Gorges du Verdon et la côte méditerranéenne",
      "- Croissance continue du tourisme expérientiel et de l'œnotourisme (+8,4%/an)",
      "- Forte demande pour des séjours authentiques en milieu rural",
      "- Clientèle CSP+ urbaine et internationale",
      "",
      "Chiffres clés:",
      "- Investissement total: 1 692 960 €",
      "- Chiffre d'affaires année 1: 331 004 €",
      "- Taux d'occupation cible: 42% (année 1) à 59% (année 3)",
      "- Retour sur investissement: 10-12 ans",
      "",
      "Une opportunité rare de créer un lieu d'exception alliant tradition, bien-être animal et séjours haut de gamme."
    ];
    
    let y = 40;
    for (const line of summaryText) {
      doc.text(line, 20, y);
      y += 8;
    }
    
    // Final page footer
    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text(`Domaine du Clochet - © ${new Date().getFullYear()}`, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 10, { align: "center" });
    
    return doc.output('blob');
  } catch (error) {
    console.error('Error generating PDF report:', error);
    
    // Create a simple fallback PDF if the complex one fails
    try {
      const doc = new jsPDF();
      doc.setFontSize(20);
      doc.text("RAPPORT - DOMAINE DU CLOCHET", 20, 20);
      
      doc.setFontSize(12);
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
        "Pour plus d'informations, veuillez consulter le site web complet.",
        "",
        `Domaine du Clochet - © ${new Date().getFullYear()}`
      ];
      
      let y = 40;
      for (const line of content) {
        doc.text(line, 20, y);
        y += 8;
      }
      
      return doc.output('blob');
    } catch (fallbackError) {
      console.error('Error generating fallback PDF:', fallbackError);
      return new Blob([`RAPPORT DOMAINE DU CLOCHET\n\nUne erreur est survenue lors de la génération du PDF. Veuillez réessayer ultérieurement.\n\n© ${new Date().getFullYear()} Domaine du Clochet`], { type: 'text/plain;charset=utf-8' });
    }
  }
};

// Function to handle downloads - gardant la fonction originale, mais en utilisant notre nouvelle fonction generateSiteReport
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
