import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";

export default function Students() {
	const { t } = useTranslation();
	return (
		<div className="Students">
			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>{t("STUDENTS.HEADER")}</h1>
				</Parallax>
			</div>
			<p>{t("STUDENTS.INFO_1")}</p>

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

			<p>{t("STUDENTS.INFO_2")}</p>

			<div className="ButtonDiv">
				<NavLink className="button" to="/students/individual-meetings">
					{t("IM.HEADER")}
				</NavLink>
			</div>

			<div classname="involved">
				<h1>{t("GENERAL.GET_INVOLVED")}</h1>
				<p>{t("STUDENTS.INVOLVED")}</p>

				<div className="ButtonDiv">
					<NavLink className="button" to="/involved">
						{t("GENERAL.GET_INVOLVED")}
					</NavLink>
				</div>
			</div>
		</div>
	);
}
