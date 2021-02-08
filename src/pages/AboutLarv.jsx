import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";

export default function About() {
	const { t } = useTranslation();
	return (
		<div className="about">
			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>{t("ABOUT.HEADER")}</h1>
				</Parallax>
			</div>

			<p>{t("ABOUT.INFO_1")}</p>
			<p>{t("ABOUT.INFO_2")}</p>
			<p>{t("ABOUT.INFO_3")}</p>
			<p>{t("ABOUT.INFO_4")}</p>

			<div className="ButtonDiv">
				<NavLink className="button" to="/students">
					{t("GENERAL.STUDENTS")}
				</NavLink>
				<NavLink className="button" to="/organizations">
					{t("GENERAL.ORGANIZATIONS")}
				</NavLink>
			</div>
		</div>
	);
}
