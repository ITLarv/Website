import React from "react";
import { NavLink } from "react-router-dom";
import { PGApplication } from "../config";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";

export default function FinalApplication() {
	const ApplicationOpen = PGApplication().open;
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
					<h1>{t("PG.HEADER")}</h1>
				</Parallax>
			</div>
			<p>{t("PG.INFO_1")}</p>
			<p>{t("PG.INFO_2")}</p>
			<p>{t("PG.INFO_3")}</p>
			{ApplicationOpen && (
				<div className="ButtonDiv">
					<NavLink className="button" to="/involved/pg/application">
						{t("PG.APPLY")}
					</NavLink>
				</div>
			)}

			<h3>PG</h3>
			<div className="dropdown-content">
				<ul>
					<li>{t("ROLES.PG.PL")}</li>
					<li>{t("ROLES.PG.VPL")}</li>
					<li>{t("ROLES.PG.FTG")}</li>
					<li>{t("ROLES.PG.SAMARBETE")}</li>
					<li>{t("ROLES.PG.EVENT")}</li>
					<li>{t("ROLES.PG.GRAFIK")}</li>
					<li>{t("ROLES.PG.IT")}</li>
					<li>{t("ROLES.PG.MÄSSA")}</li>
					<li>{t("ROLES.PG.LOGISTIK")}</li>
					<li>{t("ROLES.PG.BANKETT")}</li>
					<li>{t("ROLES.PG.REKRYTERING")}</li>
					<li>{t("ROLES.PG.SERVICE")}</li>
					<li>{t("ROLES.PG.PR")}</li>
					<li>{t("ROLES.PG.LOUNGE")}</li>
				</ul>
			</div>

			<h3>{t("ROLES.PG.VPL")}</h3>
			<p>{t("PG.VPL")}</p>
			<h3>{t("ROLES.PG.FTG")}</h3>
			<p>{t("PG.FTG")}</p>
			<h3>{t("ROLES.PG.SAMARBETE")}</h3>
			<p>{t("PG.SAMARBETE")}</p>
			<h3>{t("ROLES.PG.EVENT")}</h3>
			<p>{t("PG.EVENT")}</p>
			<h3>{t("ROLES.PG.GRAFIK")}</h3>
			<p>{t("PG.GRAFIK")}</p>
			<h3>{t("ROLES.PG.IT")}</h3>
			<p>{t("PG.IT")}</p>
			<h3>{t("ROLES.PG.MÄSSA")}</h3>
			<p>{t("PG.MÄSSA")}</p>
			<h3>{t("ROLES.PG.LOGISTIK")}</h3>
			<p>{t("PG.LOGISTIK")}</p>
			<h3>{t("ROLES.PG.BANKETT")}</h3>
			<p>{t("PG.BANKETT")}</p>
			<h3>{t("ROLES.PG.REKRYTERING")}</h3>
			<p>{t("PG.REKRYTERING")}</p>
			<h3>{t("ROLES.PG.SERVICE")}</h3>
			<p>{t("PG.SERVICE")}</p>
			<h3>{t("ROLES.PG.PR")}</h3>
			<p>{t("PG.PR")}</p>
			<h3>{t("ROLES.PG.LOUNGE")}</h3>
			<p>{t("PG.LOUNGE")}</p>

			{ApplicationOpen && (
				<div className="ButtonDiv">
					<NavLink className="button" to="/involved/pg/application">
						{t("PG.APPLY")}
					</NavLink>
				</div>
			)}
		</>
	);
}
