
import { jsPDF } from 'jspdf';
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
    await addCoverImageToDoc(doc);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text(`© ${new Date().getFullYear()} Domaine du Clochet`, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - 10, { align: "center" });
    
    // Capture each section of the website
    await addSectionsToDoc(doc);
    
    // Add a summary page at the end
    addSummaryPageToDoc(doc);
    
    return doc.output('blob');
  } catch (error) {
    console.error('Error generating PDF report:', error);
    return createFallbackPDF(error);
  }
};

// Helper function to add cover image to the PDF
const addCoverImageToDoc = async (doc: jsPDF) => {
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
};

// Helper function to add website sections to the PDF
const addSectionsToDoc = async (doc: jsPDF) => {
  const sections = [
    { id: 'project', title: 'LE PROJET' },
    { id: 'market', title: 'ÉTUDE DE MARCHÉ' },
    { id: 'financial', title: 'ASPECTS FINANCIERS' }
  ];
  
  // Common HTML width to maintain aspect ratio
  const standardWidth = 1200; // Common desktop width
  
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
      
      // If no subsections found, capture the entire section
      const subsections = Array.from(sectionElement.children).filter(
        el => el.tagName !== 'SCRIPT' && el.classList.contains('section-container')
      );
      
      if (subsections.length === 0) {
        await captureEntireSection(doc, sectionElement, standardWidth);
      } else {
        // Process subsections individually
        await captureSubsections(doc, subsections, standardWidth);
      }
    } catch (error) {
      console.error(`Error processing section ${section.id}:`, error);
      addTextFallbackForSection(doc, section);
    }
  }
};

// Helper function to capture an entire section
const captureEntireSection = async (doc: jsPDF, sectionElement: HTMLElement, standardWidth: number) => {
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
    splitImageAcrossPages(doc, imgData, imgWidth, imgHeight);
  } else {
    // The image fits on a single page
    doc.addImage(imgData, 'JPEG', 20, 30, imgWidth, imgHeight);
  }
};

// Helper function to split a large image across multiple pages
const splitImageAcrossPages = (doc: jsPDF, imgData: string, imgWidth: number, imgHeight: number) => {
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
};

// Helper function to capture subsections
const captureSubsections = async (doc: jsPDF, subsections: Element[], standardWidth: number) => {
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
};

// Helper function to add text fallback for a section when image capture fails
const addTextFallbackForSection = (doc: jsPDF, section: { id: string, title: string }) => {
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
};

// Helper function to add the summary page to the PDF
const addSummaryPageToDoc = (doc: jsPDF) => {
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
};

// Create a fallback PDF if the complex one fails
const createFallbackPDF = (error: any) => {
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
};
