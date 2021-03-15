import React from "react";
import { NavLink } from "react-router-dom";
import { PGApplication } from "../config";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";
import Dropdown from "./Dropdown";

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
			<div className="grey">
				<p>{t("PG.INFO_1")}</p>
				<p>{t("PG.INFO_2")}</p>
				<p>{t("PG.INFO_3")}</p>
				<p>{t("PG.INFO_4")}</p>
			</div>

			{ApplicationOpen && (
				<div className="ButtonDiv">
					<NavLink className="button" to="/involved/pg/application">
						{t("PG.APPLY")}
					</NavLink>
				</div>
			)}

			<div className="dropdown-container">
				<h1>{t("PG.POSITIONS")}</h1>
				<Dropdown h={t("ROLES.PG.VPL")} p={t("PG.VPL")} />
				<Dropdown h={t("ROLES.PG.FTG")} p={t("PG.FTG")} />
				<Dropdown h={t("ROLES.PG.SAMARBETE")} p={t("PG.SAMARBETE")} />
				<Dropdown h={t("ROLES.PG.EVENT")} p={t("PG.EVENT")} />
				<Dropdown h={t("ROLES.PG.GRAFIK")} p={t("PG.GRAFIK")} />
				<Dropdown h={t("ROLES.PG.IT")} p={t("PG.IT")} />
				<Dropdown h={t("ROLES.PG.MÄSSA")} p={t("PG.MÄSSA")} />
				<Dropdown h={t("ROLES.PG.LOGISTIK")} p={t("PG.LOGISTIK")} />
				<Dropdown h={t("ROLES.PG.BANKETT")} p={t("PG.BANKETT")} />
				<Dropdown h={t("ROLES.PG.REKRYTERING")} p={t("PG.REKRYTERING")} />
				<Dropdown h={t("ROLES.PG.SERVICE")} p={t("PG.SERVICE")} />
				<Dropdown h={t("ROLES.PG.PR")} p={t("PG.PR")} />
				<Dropdown h={t("ROLES.PG.LOUNGE")} p={t("PG.LOUNGE")} />
			</div>
		</>
	);
}
