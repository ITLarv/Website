import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import contract from "../content/LARV_IA_avtal_2021.pdf";

export default function MyApp() {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	useEffect(() => {
		function setPDFWorker() {
			pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
		}
		setPDFWorker();
	}, []);

	return (
		<div className="pdf">
			<Document file={contract} onLoadSuccess={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} />
			</Document>
			<p>
				Page {pageNumber} of {numPages}
			</p>
		</div>
	);
}
