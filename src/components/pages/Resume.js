import React, { useState } from 'react';
import { Document, Page, pdfjs} from 'react-pdf';
import resumePDF from '../../resume/ChelseaSextonResume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    return(
        <div>
            <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            <a href={resumePDF} target="blank">
                <button>Download PDF</button>
            </a>
            <div>
                
            </div>
        </div>
    )
}
