import React from "react";
import JexpoInitialApplication from "../components/Jexpo/JexpoInitialApplication.js";

export default function InitialApplication() {
	return (
		<div className="jexpo-container">
			<h1>Initial Application</h1>
			<iframe
				title="jexpo-initial-application"
				className="iframe-jexpo"
				srcDoc={JexpoInitialApplication}
				width="500"
				height="300"
				frameborder="0"
				marginheight="0"
				marginwidth="0"
			>
				Läser in …
			</iframe>
		</div>
	);
}
