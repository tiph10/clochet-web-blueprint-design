
import { jsPDF } from 'jspdf';

// Helper function to add the summary page to the PDF
export const addSummaryPageToDoc = (doc: jsPDF) => {
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
