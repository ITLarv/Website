import React from "react";
import { useTranslation } from "react-i18next";

export default function InvidualMeetings() {
	const { t } = useTranslation();
	return (
		<>
			<h1>I{t("IM.HEADER")}</h1>
			<p>{t("IM.STUDENTS.INFO_1")}</p>
			<p>{t("IM.STUDENTS.INFO_2")}</p>
			<p>{t("IM.STUDENTS.INFO_3")}.</p>
		</>
	);
}
