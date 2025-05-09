
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { splitImageAcrossPages } from './imageUtils';

// Helper function to capture an entire section
export const captureEntireSection = async (doc: jsPDF, sectionElement: HTMLElement, standardWidth: number) => {
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
