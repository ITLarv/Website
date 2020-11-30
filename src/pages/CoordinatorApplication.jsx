import React from "react";
import { CoordinatorApplication } from "../config";
import { useTranslation } from "react-i18next";

export default function CoordinatorAplication() {
	const { t } = useTranslation();
	const ApplicationOpen = CoordinatorApplication().open;
	return (
		<>
			{ApplicationOpen && (
				<iframe
					title="coordinator-application"
					src="https://docs.google.com/forms/d/e/1FAIpQLSfuRoLOfZuLdtqAhg7Q9mhOqZaHePj4X9vVcGcSjTBUJgn2pQ/viewform?embedded=true"
					width="640"
					height="1920"
					frameborder="0"
					marginheight="0"
					marginwidth="0"
				>
					Läser in...
				</iframe>
			)}
			{!ApplicationOpen && (
				<>
					<h1>{t("COORDINATORS.APPLICATION_HEADER")}</h1>
					<p>{t("GET_INVOLVED.APPLICATION_CLOSED")}</p>
				</>
			)}
		</>
	);
}
