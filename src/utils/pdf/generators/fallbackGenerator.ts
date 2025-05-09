
import { jsPDF } from 'jspdf';

// Create a fallback PDF if the complex one fails
export const createFallbackPDF = (error: any) => {
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
