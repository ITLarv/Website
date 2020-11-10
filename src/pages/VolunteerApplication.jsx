import React from "react";
import { VolunteerApplication } from "../config";
import { useTranslation } from "react-i18next";

export default function VolunteerAplication() {
	const { t } = useTranslation();
	const ApplicationOpen = VolunteerApplication().open;
	return (
		<>
			{ApplicationOpen && (
				<div className="iframe-container">
					<iframe
						title="volunteer-application"
						src="https://docs.google.com/forms/d/e/1FAIpQLSdeifunBO-RrU3EyjJ-PzxL6lKVlCcDs6uUZyJSnN5SoBOGMQ/viewform?embedded=true"
						width="640"
						height="2200"
						frameborder="0"
						marginheight="0"
						marginwidth="0"
					>
						Läser in …
					</iframe>
				</div>
			)}
			{!ApplicationOpen && (
				<>
					<h1>{t("VOLUNTEERS.APPLICATION_HEADER")}</h1>
					<p>{t("GET_INVOLVED.APPLICATION_CLOSED")}</p>
				</>
			)}
		</>
	);
}
