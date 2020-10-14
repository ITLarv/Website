import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function InvidualMeetings() {
	const { t } = useTranslation();
	return (
		<>
			<h1>{t("IM.HEADER")}</h1>
			<p>{t("IM.STUDENTS.INFO_1")}</p>
			<p>{t("IM.STUDENTS.INFO_2")}</p>
			<p>{t("IM.STUDENTS.INFO_3")}</p>
			<p>{t("IM.STUDENTS.INFO_4")}</p>

			<a className="button" href="https://forms.gle/EJMax49CLeboeWHa6">
				{t("IM.STUDENTS.APPLY")}
			</a>
		</>
	);
}
