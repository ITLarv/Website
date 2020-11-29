import React from "react";
import JexpoInitialApplication from "../components/Jexpo/JexpoInitialApplication.js";
import { useTranslation } from "react-i18next";

export default function InitialApplication() {
	const { t } = useTranslation();
	return (
		<div className="jexpo-container">
			<h1>{t("IA.HEADER")}</h1>
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
				Läser in...
			</iframe>
		</div>
	);
}
