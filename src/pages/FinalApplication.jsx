import React from "react";
import JexpoFinalApplication from "../components/Jexpo/JexpoFinalApplication.js";

export default function FinalApplication() {
	return (
		<>
			<div className="iframe-container">
				<iframe
					title="Apply for volunteer"
					className="form"
					src="https://docs.google.com/forms/d/e/1FAIpQLScSqN4U9W4HmGEitNmS06w-3ePJfmM3VdRVWTz8q76LPtQxhA/viewform?embedded=true"
				>
					Läser in …
				</iframe>
			</div>
		</>
	);
}
