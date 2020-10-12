import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Fair() {
	const { t } = useTranslation();
	return (
		<div className="Fair">
			<h1>{t("FAIR.HEADER")}</h1>
			<p>{t("FAIR.INFO_1")}</p>
			<p>{t("FAIR.INFO_2")}</p>

			<NavLink className="button" to="/organizations">
				{t("GENERAL.ORGANIZATIONS")}
			</NavLink>
		</div>
	);
}
