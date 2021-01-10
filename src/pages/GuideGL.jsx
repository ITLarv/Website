import React from "react";
import { Parallax } from "react-parallax";
import { NavLink } from "react-router-dom";
import bgImage from "../img/banner.jpg";
import { useTranslation } from "react-i18next";

export default function GuideGL() {
	const { t } = useTranslation();
	return (
		<div className="GuideGL">
			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>{t("GUIDE_GL.HEADER_1")}</h1>
				</Parallax>
			</div>
			<p>{t("GUIDE_GL.INFO_1")}</p>

			<h1>{t("GUIDE_GL.HEADER_2")}</h1>
			<p>{t("GUIDE_GL.INFO_2")}</p>
			<h2>{t("GUIDE_GL.SUBHEADER_1")}</h2>
			<p>{t("GUIDE_GL.INFO_3")}</p>

			<div className="ButtonDiv">
				<a
					className="button"
					href="https://fair.larv.org/sv/event/4547"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("PLATFORM.BUTTON")}
				</a>
			</div>

			<p>{t("GUIDE_GL.INFO_4")}</p>
			<h2>{t("GUIDE_GL.SUBHEADER_2")}</h2>
			<p>{t("GUIDE_GL.INFO_5")}</p>
			<h3>{t("GUIDE_GL.SUBSUBHEADER_1")}</h3>
			<p>{t("GUIDE_GL.INFO_6")}</p>
			<h3>{t("GUIDE_GL.SUBSUBHEADER_2")}</h3>
			<p>{t("GUIDE_GL.INFO_7")}</p>
			<h3>{t("GUIDE_GL.SUBSUBHEADER_3")}</h3>
			<p>{t("GUIDE_GL.INFO_8")}</p>
			<h2>{t("GUIDE_GL.SUBHEADER_3")}</h2>
			<p>{t("GUIDE_GL.INFO_9")}</p>

			<div className="ButtonDiv">
				<NavLink className="button" to="/fair/schedule">
					{t("GUIDE_GL.BUTTON_1")}
				</NavLink>
			</div>

			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>{t("GUIDE_GL.HEADER_3")}</h1>
				</Parallax>
			</div>
			<p>{t("GUIDE_GL.INFO_10")}</p>
			<p>{t("GUIDE_GL.INFO_11")}</p>

			<div className="ButtonDiv">
				<NavLink className="button" to="/fair/competition">
					{t("GUIDE_GL.BUTTON_2")}
				</NavLink>
			</div>

			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>{t("GUIDE_GL.HEADER_4")}</h1>
				</Parallax>
			</div>

			<p>{t("GUIDE_GL.INFO_12")}</p>
		</div>
	);
}
