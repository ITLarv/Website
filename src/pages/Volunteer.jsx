import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";
import { VolunteerApplication } from "../config";
import Dropdown from "./Dropdown";

export default function Volunteer() {
	const ApplicationOpen = VolunteerApplication().open;
	const { t } = useTranslation();
	return (
		<>
			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>{t("VOLUNTEERS.HEADER")}</h1>
				</Parallax>
			</div>
			<div className="grey">
				<p>{t("VOLUNTEERS.INFO_1")}</p>
				<p>{t("VOLUNTEERS.INFO_2")}.</p>
			</div>

			{ApplicationOpen && (
				<div className="ButtonDiv">
					<NavLink className="button" to="/involved/volunteer/application">
						{t("VOLUNTEERS.APPLY")}
					</NavLink>
				</div>
			)}

			<div className="dropdown-container">
				<h1>{t("VOLUNTEERS.POSITIONS")}</h1>
				<Dropdown h={t("ROLES.VOLUNTEERS.FTG")} p={t("VOLUNTEERS.FTG")} />
				<Dropdown h={t("ROLES.VOLUNTEERS.IT")} p={t("VOLUNTEERS.IT")} />
				<Dropdown h={t("ROLES.VOLUNTEERS.MÄSSA")} p={t("VOLUNTEERS.MÄSSA")} />
				<Dropdown h={t("ROLES.VOLUNTEERS.SERVICE")} p={t("VOLUNTEERS.SERVICE")} />
				<Dropdown h={t("ROLES.VOLUNTEERS.NATT")} p={t("VOLUNTEERS.NATT")} />
				<Dropdown h={t("ROLES.VOLUNTEERS.CHAUFFÖR")} p={t("VOLUNTEERS.CHAUFFÖR")} />
				<Dropdown h={t("ROLES.VOLUNTEERS.TI")} p={t("VOLUNTEERS.TI")} />
			</div>
		</>
	);
}
