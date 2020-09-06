import React from "react";
import JexpoInitialApplication from "../components/Jexpo/JexpoInitialApplication.js";

export default function InledandeAnmalan() {
	return (
		<div>
			<h1>Initial Application</h1>
			<p>
				The initial application is the first step for your organization to be a
				part of LARV!
			</p>
			<iframe
				srcDoc={JexpoInitialApplication}
				title="Jexpo Initial Application"
			/>
		</div>
	);
}
