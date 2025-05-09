
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

// Helper function to capture subsections
export const captureSubsections = async (doc: jsPDF, subsections: Element[], standardWidth: number) => {
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
