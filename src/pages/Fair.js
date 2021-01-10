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
			<p>{t("FAIR.INFO_1")}</p>
			<p>{t("FAIR.INFO_2")}</p>

			<div className="ButtonDiv">
				<a
					className="button"
					href="https://fair.larv.org/sv/event/4547"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("PLATFORM.BUTTON")}
				</a>
				<NavLink className="button" to="/students/guide">
					{t("GUIDE_GL.BUTTON")}
				</NavLink>
			</div>

			<h2>{t("FAIR.HEADER_2")}</h2>
			<p>{t("FAIR.INFO_3")}</p>
			<p>{t("FAIR.INFO_4")}</p>
			<p>{t("FAIR.INFO_5")}</p>
			<p>{t("FAIR.INFO_6")}</p>
			<p>{t("FAIR.INFO_7")}</p>

			<div className="ButtonDiv">
				<NavLink className="button" to="/organizations">
					{t("GENERAL.ORGANIZATIONS")}
				</NavLink>
				<NavLink className="button" to="/organizations/initial-application">
					{t("GENERAL.IA")}
				</NavLink>
			</div>

			<h2>{t("FAIR.HEADER_3")}</h2>
			<p>{t("FAIR.INFO_8")}</p>
		</div>
	);
}
