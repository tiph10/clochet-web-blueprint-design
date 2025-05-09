
import { jsPDF } from 'jspdf';

// Helper function to split a large image across multiple pages
export const splitImageAcrossPages = (doc: jsPDF, imgData: string, imgWidth: number, imgHeight: number) => {
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
