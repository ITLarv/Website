import React from "react";
import { useTranslation } from "react-i18next";

export default function InvidualMeetings() {
	const { t } = useTranslation();
	return (
		<>
			<h1>{t("IM.HEADER")}</h1>
			<p>{t("IM.ORGANIZATIONS.INFO_1")}</p>
			<p>{t("IM.ORGANIZATIONS.INFO_2")}</p>
			<p>{t("IM.ORGANIZATIONS.INFO_3")}.</p>
			<p>{t("IM.ORGANIZATIONS.INFO_4")}.</p>
		</>
	);
}
