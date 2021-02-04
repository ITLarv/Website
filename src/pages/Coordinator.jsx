import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";
import { CoordinatorApplication } from "../config";

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
			<p>{t("COORDINATORS.INFO_1")}</p>
			<p>{t("COORDINATORS.INFO_2")}</p>

			{ApplicationOpen && (
				<div className="ButtonDiv">
					<NavLink className="button" to="/involved/coordinator/application">
						{t("COORDINATORS.APPLY")}
					</NavLink>
				</div>
			)}

			<h3>{t("COORDINATORS.POSITIONS")}</h3>
			<div className="dropdown-content">
				<ul>
					<li>{t("ROLES.COORDINATORS.FTG")}</li>
					<li>{t("ROLES.COORDINATORS.EVENT")}</li>
					<li>{t("ROLES.COORDINATORS.GRAFIK")}</li>
					<li>{t("ROLES.COORDINATORS.IT")}</li>
					<li>{t("ROLES.COORDINATORS.MÄSSA")}</li>
					<li>{t("ROLES.COORDINATORS.REKRYTERING")}</li>
					<li>{t("ROLES.COORDINATORS.SERVICE")}</li>
					<li>{t("ROLES.COORDINATORS.PR")}</li>
				</ul>
			</div>

			<h3>{t("ROLES.COORDINATORS.FTG")}</h3>
			<p>{t("COORDINATORS.FTG")}</p>
			<h3>{t("ROLES.COORDINATORS.EVENT")}</h3>
			<p>{t("COORDINATORS.EVENT")}</p>
			<h3>{t("ROLES.COORDINATORS.GRAFIK")}</h3>
			<p>{t("COORDINATORS.GRAFIK")}</p>
			<h3>{t("ROLES.COORDINATORS.IT")}</h3>
			<p>{t("COORDINATORS.IT")}</p>
			<h3>IT-{t("ROLES.COORDINATORS.MÄSSA")}</h3>
			<p>{t("COORDINATORS.MÄSSA")}</p>
			<h3>{t("ROLES.COORDINATORS.REKRYTERING")}</h3>
			<p>{t("COORDINATORS.REKRYTERING")}</p>
			<h3>{t("ROLES.COORDINATORS.SERVICE")}</h3>
			<p>{t("COORDINATORS.SERVICE")}</p>
			<h3>{t("ROLES.COORDINATORS.PR")}</h3>
			<p>{t("COORDINATORS.PR")}</p>

			{ApplicationOpen && (
				<div className="ButtonDiv">
					<NavLink className="button" to="/involved/coordinator/application">
						{t("COORDINATORS.APPLY")}
					</NavLink>
				</div>
			)}
		</>
	);
}
