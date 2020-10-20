import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Prelarv() {
	const { t } = useTranslation();
	return (
		<div className="Prelarv">
			<h1>{t("PREP_WEEK.HEADER")}</h1>
			<p>{t("PREP_WEEK.INFO")}</p>

			<h1>{t("PREP_WEEK.ACTIVITIES.HEADER")}</h1>
			<p>{t("PREP_WEEK.ACTIVITIES.INFO")}</p>
			<ul>
				<li>{t("PREP_WEEK.ACTIVITIES.LIST_1")}</li>
				<li>{t("PREP_WEEK.ACTIVITIES.LIST_2")}</li>
				<li>{t("PREP_WEEK.ACTIVITIES.LIST_3")}</li>

				<li className="indentList">{t("PREP_WEEK.ACTIVITIES.LIST_3_1")}</li>
				<li className="indentList">{t("PREP_WEEK.ACTIVITIES.LIST_3_2")}</li>
				<li className="indentList">{t("PREP_WEEK.ACTIVITIES.LIST_3_3")}</li>

				<li>{t("PREP_WEEK.ACTIVITIES.LIST_4")}</li>
				<li>{t("PREP_WEEK.ACTIVITIES.LIST_5")}</li>
				<li>{t("PREP_WEEK.ACTIVITIES.LIST_6")}</li>
				<li>{t("PREP_WEEK.ACTIVITIES.LIST_7")}</li>
			</ul>

			<p>{t("PREP_WEEK.ACTIVITIES.MORE")}</p>

			<div className="ButtonDiv">
				<NavLink className="button" to="/home/calendar">
					{t("GENERAL.CALENDAR")}
				</NavLink>
				<NavLink className="button" to="/organizations">
					{t("GENERAL.ORGANIZATIONS")}
				</NavLink>
			</div>
		</div>
	);
}
