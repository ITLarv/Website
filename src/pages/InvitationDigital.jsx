import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../content/LARV-digital-inbjudan.pdf";

export default function MyApp() {
	const [numPages, setNumPages] = useState(null);

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
			<Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
				{Array.apply(null, Array(numPages))
					.map((x, i) => i + 1)
					.map((page) => (
						<Page pageNumber={page} />
					))}
			</Document>
		</div>
	);
}
