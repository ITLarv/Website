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
			<p>{t("IM.STUDENTS.INFO_1")}</p>
			<p>{t("IM.STUDENTS.INFO_2")}</p>
			<p>{t("IM.STUDENTS.INFO_3")}</p>
			<p>{t("IM.STUDENTS.INFO_4")}</p>

			<div className="ButtonDiv">
				<a
					className="button"
					href="https://forms.gle/EJMax49CLeboeWHa6"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("IM.STUDENTS.APPLY")}
				</a>
			</div>
		</>
	);
}
