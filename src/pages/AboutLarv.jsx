import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function About() {
	const { t } = useTranslation();
	return (
		<>
			<h1>{t("ABOUT.HEADER")}</h1>
			<p>{t("ABOUT.INFO_1")}</p>
			<p>{t("ABOUT.INFO_2")}</p>
			<p>{t("ABOUT.INFO_3")}</p>
			<p>{t("ABOUT.INFO_4")}</p>

			<div className="twoButtons">
				<NavLink className="button" to="/students">
					{t("GENERAL.STUDENTS")}
				</NavLink>
				<NavLink className="button" to="/organizations">
					{t("GENERAL.ORGANIZATIONS")}
				</NavLink>
			</div>
		</>
	);
}
