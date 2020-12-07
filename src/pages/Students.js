import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Students() {
	const { t } = useTranslation();
	return (
		<div className="Students">
			<h1>{t("STUDENTS.HEADER")}</h1>
			<p>{t("STUDENTS.INFO_1")}</p>

			<div className="ButtonDiv">
				<a
					className="button"
					href="https://fair.larv.org/sv/event/4547"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("PLATFORM.BUTTON")}
				</a>
			</div>

			<p>{t("STUDENTS.INFO_2")}</p>

			<div className="ButtonDiv">
				<NavLink className="button" to="/students/individual-meetings">
					{t("IM.HEADER")}
				</NavLink>
			</div>

			<h1>{t("GENERAL.GET_INVOLVED")}</h1>
			<p>{t("STUDENTS.INVOLVED")}</p>

			<div className="ButtonDiv">
				<NavLink className="button" to="/involved">
					{t("GENERAL.GET_INVOLVED")}
				</NavLink>
			</div>
		</div>
	);
}
