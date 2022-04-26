import React from "react";
import page1 from "../img/larv-guide/page1.png";
import page2 from "../img/larv-guide/page2.png";
import page3 from "../img/larv-guide/page3.png";
import page4 from "../img/larv-guide/page4.png";
import page5 from "../img/larv-guide/page5.png";
import page6 from "../img/larv-guide/page6.png";
import page7 from "../img/larv-guide/page7.png";

export default function GuideGL() {
	return (
		<div className="larvGuide">
			<img src={page1} alt="" />
			<img src={page2} alt="" />
			<img src={page3} alt="" />
			<img src={page4} alt="" />
			<img src={page5} alt="" />
			<img src={page6} alt="" />
			<img src={page7} alt="" />
		</div>
	);
}

/*
import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";
import { useTranslation } from "react-i18next";

import { Document, Page, pdfjs } from "react-pdf";
import contract from "../content/LARV-GUIDE.pdf";

export default function GuideGL() {
	const { t } = useTranslation();
	const [numPages, setNumPages] = useState(null);
	//const [pageNumber] = useState(1);

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
		<div className="GuideGL">
			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>{t("GUIDE_GL.HEADER_1")}</h1>
				</Parallax>
				<div className="pdf">
					<Document file={contract} onLoadSuccess={onDocumentLoadSuccess}>
						<Page pageNumber={2} />
					</Document>
					<p>Page 2 of {numPages}</p>

					<Document file={contract} onLoadSuccess={onDocumentLoadSuccess}>
						<Page pageNumber={3} />
					</Document>
					<p>Page 2 of {numPages}</p>

					<Document file={contract} onLoadSuccess={onDocumentLoadSuccess}>
						<Page pageNumber={4} />
					</Document>
					<p>Page 2 of {numPages}</p>

					<Document file={contract} onLoadSuccess={onDocumentLoadSuccess}>
						<Page pageNumber={5} />
					</Document>
					<p>Page 2 of {numPages}</p>

					<Document file={contract} onLoadSuccess={onDocumentLoadSuccess}>
						<Page pageNumber={6} />
					</Document>
					<p>Page 2 of {numPages}</p>

					<Document file={contract} onLoadSuccess={onDocumentLoadSuccess}>
						<Page pageNumber={7} />
					</Document>
					<p>Page 2 of {numPages}</p>

					<Document file={contract} onLoadSuccess={onDocumentLoadSuccess}>
						<Page pageNumber={8} />
					</Document>
					<p>Page 2 of {numPages}</p>
				</div>
			</div>
		</div>
	);
}
*/
