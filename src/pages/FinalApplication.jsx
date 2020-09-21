import React from "react";
import JexpoFinalApplication from "../components/Jexpo/JexpoFinalApplication.js";

export default function FinalApplication() {
	return (
		<div className="jexpo-container">
			<h1>Final Application</h1>
			<iframe
				title="jexpo-final-application"
				className="iframe-jexpo"
				srcDoc={JexpoFinalApplication}
				width="500"
				height="500"
				frameborder="0"
				marginheight="0"
				marginwidth="0"
			>
				Läser in …
			</iframe>
		</div>
	);
}
