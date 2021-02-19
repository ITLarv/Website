import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";
import { CoordinatorApplication } from "../config";
import Dropdown from "./Dropdown";

export default function Coordinator() {
	const ApplicationOpen = CoordinatorApplication().open;
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
					<h1>{t("COORDINATORS.HEADER")}</h1>
				</Parallax>
			</div>
			<div className="grey">
				<p>{t("COORDINATORS.INFO_1")}</p>
				<p>{t("COORDINATORS.INFO_2")}</p>
			</div>

			{ApplicationOpen && (
				<div className="ButtonDiv">
					<NavLink className="button" to="/involved/coordinator/application">
						{t("COORDINATORS.APPLY")}
					</NavLink>
				</div>
			)}

			<div className="dropdown-container">
				<h1>{t("COORDINATORS.POSITIONS")}</h1>
				<Dropdown h={t("ROLES.COORDINATORS.FTG")} p={t("COORDINATORS.FTG")} />
				<Dropdown h={t("ROLES.COORDINATORS.EVENT")} p={t("COORDINATORS.EVENT")} />
				<Dropdown h={t("ROLES.COORDINATORS.IT")} p={t("COORDINATORS.IT")} />
				<Dropdown h={t("ROLES.COORDINATORS.MÄSSA")} p={t("COORDINATORS.MÄSSA")} />
				<Dropdown h={t("ROLES.COORDINATORS.SERVICE")} p={t("COORDINATORS.SERVICE")} />
				<Dropdown h={t("ROLES.COORDINATORS.GRAFIK")} p={t("COORDINATORS.GRAFIK")} />
				<Dropdown
					h={t("ROLES.COORDINATORS.REKRYTERING")}
					p={t("COORDINATORS.REKRYTERING")}
				/>
				<Dropdown h={t("ROLES.COORDINATORS.PR")} p={t("COORDINATORS.PR")} />
			</div>
		</>
	);
}
