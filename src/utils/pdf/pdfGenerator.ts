
import { jsPDF } from 'jspdf';
import { addCoverImageToDoc } from './generators/coverGenerator';
import { addSectionsToDoc } from './generators/sectionsGenerator';
import { addSummaryPageToDoc } from './generators/summaryGenerator';
import { createFallbackPDF } from './generators/fallbackGenerator';

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
