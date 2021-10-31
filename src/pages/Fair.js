import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";

export default function Fair() {
	const { t } = useTranslation();
	return (
		<div className="Fair">
			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>{t("FAIR.HEADER")}</h1>
				</Parallax>
			</div>
			<h1>{t("FAIR.HEADER_2")}</h1>
			<p>{t("FAIR.INFO_1")}</p>
			<p>{t("FAIR.INFO_2")}</p>
			<p>{t("FAIR.INFO_3")}</p>
			<p>{t("FAIR.INFO_4")}</p>

			<div className="ButtonDiv">
				<NavLink className="button" to="/organizations">
					{t("GENERAL.ORGANIZATIONS")}
				</NavLink>
				{/* 
					<NavLink className="button" to="/organizations/initial-application">  // Inledande anmälan
						{t("GENERAL.IA")}
					</NavLink>*/}
			</div>
		</div>
	);
}
