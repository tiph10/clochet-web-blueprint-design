
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

// Helper function to add cover image to the PDF
export const addCoverImageToDoc = async (doc: jsPDF) => {
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
