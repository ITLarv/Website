import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Students() {
	const { t } = useTranslation();
	return (
		<div className="Students">
			<h1>{t("STUDENTS.HEADER")}</h1>
			<p>{t("STUDENTS.INFO_1")}</p>
			<p>{t("STUDENTS.INFO_2")}</p>

			<NavLink className="button" to="/students/individual-meetings">
				{t("IM.HEADER")}
			</NavLink>

			<h1>{t("GENERAL.GET_INVOLVED")}</h1>
			<p>{t("STUDENTS.INVOLVED")}.</p>

			<NavLink className="button" to="/involved">
				{t("GENERAL.GET_INVOLVED")}
			</NavLink>
		</div>
	);
}
