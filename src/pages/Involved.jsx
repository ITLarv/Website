import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";

export default function Involved() {
	const { t } = useTranslation();
	return (
		<>
			<div className="involved">
				<div className="banner">
					<Parallax
						className="parallax"
						blur={0}
						bgImage={bgImage}
						bgImageAlt=""
						strength={300}
					>
						<h1>{t("GET_INVOLVED.HEADER")}</h1>
					</Parallax>
				</div>

				<div className="info">
					<p>{t("GET_INVOLVED.INFO_1")}</p>
					<p>{t("GET_INVOLVED.INFO_2")}</p>
				</div>

				<div className="threeColumns">
					<div className="column">
						<div className="ButtonDiv">
							<NavLink className="button" to="/involved/volunteer">
								{t("GENERAL.VOLUNTEER")}
							</NavLink>
						</div>
						<ul>
							<li>{t("ROLES.VOLUNTEERS.FTG")}</li>
							<li>{t("ROLES.VOLUNTEERS.EVENT")}</li>
							<li>{t("ROLES.VOLUNTEERS.IT")}</li>
							<li>{t("ROLES.VOLUNTEERS.MÄSSA")}</li>
							<li>{t("ROLES.VOLUNTEERS.SERVICE")}</li>
							<li>{t("ROLES.VOLUNTEERS.CHAUFFÖR")}</li>
							<li>{t("ROLES.VOLUNTEERS.NATT")}</li>
							<li>{t("ROLES.VOLUNTEERS.TI")}</li>
						</ul>
					</div>

					<div className="column">
						<div className="ButtonDiv">
							<NavLink className="button" to="/involved/coordinator">
								{t("GENERAL.COORDINATOR")}
							</NavLink>
						</div>
						<ul>
							<li>{t("ROLES.COORDINATORS.FTG")}</li>
							<li>{t("ROLES.COORDINATORS.SAMARBETE")}</li>
							<li>{t("ROLES.COORDINATORS.EVENT")}</li>
							<li>{t("ROLES.COORDINATORS.GRAFIK")}</li>
							<li>{t("ROLES.COORDINATORS.IT")}</li>
							<li>{t("ROLES.COORDINATORS.MÄSSA")}</li>
							<li>{t("ROLES.COORDINATORS.LOGISTIK")}</li>
							<li>{t("ROLES.COORDINATORS.BANKETT")}</li>
							<li>{t("ROLES.COORDINATORS.REKRYTERING")}</li>
							<li>{t("ROLES.COORDINATORS.SERVICE")}</li>
							<li>{t("ROLES.COORDINATORS.PR")}</li>
						</ul>
					</div>

					<div className="column">
						<div className="ButtonDiv">
							<NavLink className="button" to="/involved/pg">
								{t("GENERAL.PG")}
							</NavLink>
						</div>
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
				</div>
			</div>
		</>
	);
}
