import React from "react";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";
import { useTranslation } from "react-i18next";

export default function Covid19() {
	const { t } = useTranslation();
	return (
		<div className="Covid19">
			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>{t("COVID19.HEADER")}</h1>
				</Parallax>
			</div>
			<h2>{t("COVID19.HEADER_1")}</h2>
			<p>{t("COVID19.INFO_1")}</p>
			<h1>{t("COVID19.HEADER_2")}</h1>
			<p>{t("COVID19.INFO_2_1")}</p>
			<p>{t("COVID19.INFO_2_2")}</p>
			<h2>{t("COVID19.HEADER_3")}</h2>
			<p>{t("COVID19.INFO_3")}</p>
			<h2>{t("COVID19.HEADER_4")}</h2>
			<p>{t("COVID19.INFO_4")}</p>
			<h2>{t("COVID19.HEADER_5")}</h2>
			<p>{t("COVID19.INFO_5")}</p>
			<h1>{t("COVID19.HEADER_6")}</h1>
			<h2>{t("COVID19.HEADER_7")}</h2>
			<p>{t("COVID19.INFO_6")}</p>
			<h2>{t("COVID19.HEADER_8")}</h2>
			<p>{t("COVID19.INFO_7")}</p>
			<h2>{t("COVID19.HEADER_9")}</h2>
			<p>{t("COVID19.INFO_8")}</p>
			<p>{t("COVID19.INFO_9")}</p>
			<h2>{t("COVID19.HEADER_10")}</h2>
			<p>{t("COVID19.INFO_10")}</p>
		</div>
	);
}
