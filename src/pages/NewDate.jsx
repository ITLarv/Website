import React from "react";
import { Parallax } from "react-parallax";
import { useTranslation } from "react-i18next";
import bgImage from "../img/banner.jpg";

export default function Gallery() {
	const { t } = useTranslation();
	return (
		<div>
			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>{t("FAIR.NEWINFO_HEADER")}</h1>
				</Parallax>
			</div>
			<p>{t("FAIR.NEWINFO_1")}</p>
			<p>{t("FAIR.NEWINFO_2")}</p>
			<p>{t("FAIR.NEWINFO_3")}</p>
			<p>{t("FAIR.NEWINFO_4")}</p>
		</div>
	);
}
