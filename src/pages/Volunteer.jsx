import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Volunteer() {
	const { t } = useTranslation();
	return (
		<>
			<h1>{t("VOLUNTEERS.HEADER")}</h1>
			<p>{t("VOLUNTEERS.INFO_1")}</p>
			<p>{t("VOLUNTEERS.INFO_2")}.</p>

			<NavLink className="button" to="/involved/volunteer/application">
				{t("VOLUNTEERS.HEADER")}
			</NavLink>

			<h3>{t("VOLUNTEERS.POSITIONS")}</h3>
			<div className="dropdown-content">
				<ul>
					<li>{t("ROLES.VOLUNTEERS.FTG")}</li>
					{/* <li>{t("ROLES.VOLUNTEERS.EVENT")}</li> */}
					<li>{t("ROLES.VOLUNTEERS.IT")}</li>
					<li>{t("ROLES.VOLUNTEERS.LOUNGE")}</li>
					<li>{t("ROLES.VOLUNTEERS.SERVICE")}</li>
					<li>{t("ROLES.VOLUNTEERS.NATT")}</li>
					<li>{t("ROLES.VOLUNTEERS.CHAUFFÖR")}</li>
					<li>{t("ROLES.VOLUNTEERS.TI")}</li>
				</ul>
			</div>

			<h3>{t("ROLES.VOLUNTEERS.FTG")}</h3>
			<p>{t("VOLUNTEERS.FTG")}</p>
			<h3>{t("ROLES.VOLUNTEERS.IT")}</h3>
			<p>{t("VOLUNTEERS.IT")}</p>
			<h3>{t("ROLES.VOLUNTEERS.LOUNGE")}</h3>
			<p>{t("VOLUNTEERS.LOUNGE")}</p>
			<h3>{t("ROLES.VOLUNTEERS.SERVICE")}</h3>
			<p>{t("VOLUNTEERS.SERVICE")}</p>
			<h3>{t("ROLES.VOLUNTEERS.NATT")}</h3>
			<p>{t("VOLUNTEERS.NATT")}</p>
			<h3>{t("ROLES.VOLUNTEERS.CHAUFFÖR")}</h3>
			<p>{t("VOLUNTEERS.CHAUFFÖR")}</p>
			<h3>{t("ROLES.VOLUNTEERS.TI")}</h3>
			<p>{t("VOLUNTEERS.TI")}</p>

			<NavLink className="button" to="/involved/volunteer/application">
				{t("VOLUNTEERS.APPLY")}
			</NavLink>
		</>
	);
}
