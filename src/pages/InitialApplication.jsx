import React from "react";
import JexpoInitialApplication from "../components/Jexpo/JexpoInitialApplication.js";

export default function InitialAplication() {
	return (
		<div className="iframe-container">
			<iframe
				title="jexpo-initial-application"
				className="iframe-jexpo"
				srcDoc={JexpoInitialApplication}
				// src="https://docs.google.com/forms/d/e/1FAIpQLScSqN4U9W4HmGEitNmS06w-3ePJfmM3VdRVWTz8q76LPtQxhA/viewform?embedded=true"
			>
				Läser in …
			</iframe>
		</div>
	);
}
