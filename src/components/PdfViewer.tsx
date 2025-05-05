
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function changePage(offset: number) {
    if (!numPages) return;
    const newPage = pageNumber + offset;
    if (newPage >= 1 && newPage <= numPages) {
      setPageNumber(newPage);
    }
  }

  function changeScale(delta: number) {
    const newScale = Math.max(0.5, Math.min(2.5, scale + delta));
    setScale(newScale);
  }

  return (
    <div className="flex flex-col items-center">
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="py-8 flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-olive-700"></div>
          </div>
        }
        error={
          <div className="py-8 text-center text-red-500">
            Impossible de charger le PDF. Veuillez vérifier l'URL.
          </div>
        }
      >
        <Page 
          pageNumber={pageNumber} 
          scale={scale}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="shadow-md"
        />
      </Document>
      
      <div className="flex items-center justify-between w-full mt-4">
        <div className="flex space-x-2">
          <Button 
            onClick={() => changePage(-1)} 
            disabled={pageNumber <= 1}
            variant="outline"
            size="sm"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <span className="px-4 py-1 bg-cream-50 rounded-md text-sm">
            {pageNumber} / {numPages || '?'}
          </span>
          
          <Button 
            onClick={() => changePage(1)} 
            disabled={numPages === null || pageNumber >= numPages}
            variant="outline"
            size="sm"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            onClick={() => changeScale(-0.1)} 
            variant="outline"
            size="sm"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          
          <Button 
            onClick={() => changeScale(0.1)} 
            variant="outline"
            size="sm"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
