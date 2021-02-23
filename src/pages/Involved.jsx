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

				<div className="grey">
					<p>{t("GET_INVOLVED.INFO_1")}</p>
					<p>{t("GET_INVOLVED.INFO_2")}</p>
				</div>

				<div className="ButtonDiv">
					<NavLink className="button" to="/involved/volunteer">
						{t("GENERAL.VOLUNTEER")}
					</NavLink>
					<NavLink className="button" to="/involved/coordinator">
						{t("GENERAL.COORDINATOR")}
					</NavLink>
					<NavLink className="button" to="/involved/pg">
						{t("GENERAL.PG")}
					</NavLink>
				</div>
			</div>
		</>
	);
}
