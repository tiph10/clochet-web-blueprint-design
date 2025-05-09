
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { captureEntireSection } from './sectionCapture';
import { captureSubsections } from './subsectionCapture';
import { addTextFallbackForSection } from './textFallback';

// Helper function to add website sections to the PDF
export const addSectionsToDoc = async (doc: jsPDF) => {
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
