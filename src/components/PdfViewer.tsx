
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import ImageCarousel from './ImageCarousel';
import PDFImageCarousel from './PDFImageCarousel';

// Use specific version that matches our installed package
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfViewerProps {
  pdfUrl: string;
  fallbackImages?: string[];
  title?: string;
  useCarouselByDefault?: boolean;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ 
  pdfUrl, 
  fallbackImages, 
  title,
  useCarouselByDefault = true
}) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [error, setError] = useState<string | null>(null);
  
  // Utiliser le carrousel d'images par défaut si spécifié, ou si une erreur ou des images de fallback sont définies
  const useImageFallback = useCarouselByDefault || !!error || !!fallbackImages;

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(err: Error) {
    console.error('Erreur de chargement du PDF:', err);
    setError(`Erreur de chargement: ${err.message}`);
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

  // Si nous devons utiliser les images de fallback et qu'elles sont définies
  if (useImageFallback && fallbackImages && fallbackImages.length > 0) {
    return <ImageCarousel images={fallbackImages} title={title} />;
  }

  // Si nous devons utiliser les images de fallback mais aucune n'est définie, utiliser le carrousel d'ESTHETIQUE
  if (useImageFallback) {
    return <PDFImageCarousel title={title || "Visualisation du document"} />;
  }

  return (
    <div className="flex flex-col items-center">
      {error && (
        <div className="py-4 text-center text-red-500 mb-4">
          {error}
          <p className="mt-2 text-sm">Vérifiez que le chemin "{pdfUrl}" est correct.</p>
        </div>
      )}
      
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={
          <div className="py-8 flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-beige-700"></div>
          </div>
        }
        error={
          <div className="py-8 text-center text-red-500">
            Impossible de charger le PDF. Veuillez vérifier le chemin du fichier.
          </div>
        }
        options={{
          cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@' + pdfjs.version + '/cmaps/',
          cMapPacked: true,
        }}
      >
        {numPages && (
          <Page 
            pageNumber={pageNumber} 
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="shadow-md"
          />
        )}
      </Document>
      
      {numPages && (
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
      )}
    </div>
  );
};

export default PdfViewer;
