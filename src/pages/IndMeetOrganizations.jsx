import React from "react";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";

export default function InvidualMeetings() {
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
					<h1>{t("IM.HEADER")}</h1>
				</Parallax>
			</div>
			<h2>{t("IM.ORGANIZATIONS.HEADER_1")}</h2>
			<p>{t("IM.ORGANIZATIONS.INFO_1")}</p>

			<h2>{t("IM.ORGANIZATIONS.HEADER_2")}</h2>
			<p>{t("IM.ORGANIZATIONS.INFO_2")}</p>

			<h2>{t("IM.ORGANIZATIONS.HEADER_3")}</h2>
			<p>{t("IM.ORGANIZATIONS.INFO_3")}</p>

			<h2>{t("IM.ORGANIZATIONS.HEADER_4")}</h2>
			<p>{t("IM.ORGANIZATIONS.INFO_4")}</p>
			<div style={{ textAlign: "center" }}>
				<ul>
					<li>{t("IM.ORGANIZATIONS.INFO_4_1")}</li>
					<li>{t("IM.ORGANIZATIONS.INFO_4_2")}</li>
					<li>{t("IM.ORGANIZATIONS.INFO_4_3")}</li>
					<li>{t("IM.ORGANIZATIONS.INFO_4_4")}</li>
					<li>{t("IM.ORGANIZATIONS.INFO_4_5")}</li>
				</ul>
			</div>

			<h2>{t("IM.ORGANIZATIONS.HEADER_5")}</h2>
			<p>{t("IM.ORGANIZATIONS.INFO_5")}</p>
			<div className="ButtonDiv">
				<a
					className="button"
					href={t("IM.ORGANIZATIONS.LINK")}
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("IM.STUDENTS.APPLY")}
				</a>
			</div>
		</>
	);
}
