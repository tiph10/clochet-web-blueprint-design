
import { jsPDF } from 'jspdf';

// Helper function to add text fallback for a section when image capture fails
export const addTextFallbackForSection = (doc: jsPDF, section: { id: string, title: string }) => {
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
