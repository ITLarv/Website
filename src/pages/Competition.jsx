import React from "react";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";

export default function Competition() {
	const { t } = useTranslation();
	return (
		<div className="Competition">
			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>{t("COMPETITION.HEADER_1")}</h1>
				</Parallax>
			</div>
			<p>{t("COMPETITION.INFO_1")}</p>

			<h1>{t("COMPETITION.PRIZES.HEADER")}</h1>
			<h2>{t("COMPETITION.PRIZES.SUBHEADER_1")}</h2>
			<p>{t("COMPETITION.PRIZES.INFO_1")}</p>
			<h2>{t("COMPETITION.PRIZES.SUBHEADER_2")}</h2>
			<p>{t("COMPETITION.PRIZES.INFO_2")}</p>

			<h3>{t("COMPETITION.PRIZES.LIST_1")}</h3>
			<ul>
				<li>{t("COMPETITION.PRIZES.SUBLIST_1")}</li>
				<li>{t("COMPETITION.PRIZES.SUBLIST_2")}</li>
			</ul>
			<h3>{t("COMPETITION.PRIZES.LIST_2")}</h3>
			<ul>
				<li>{t("COMPETITION.PRIZES.SUBLIST_3")}</li>
				<li>{t("COMPETITION.PRIZES.SUBLIST_4")}</li>
			</ul>
			<h3>{t("COMPETITION.PRIZES.LIST_3")}</h3>
			<ul>
				<li>{t("COMPETITION.PRIZES.SUBLIST_5")}</li>
				<li>{t("COMPETITION.PRIZES.SUBLIST_6")}</li>
				<li>{t("COMPETITION.PRIZES.SUBLIST_7")}</li>
			</ul>

			<p>{t("COMPETITION.PRIZES.INFO_3")}</p>

			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>{t("COMPETITION.POINTS.HEADER")}</h1>
				</Parallax>
			</div>
			<p>{t("COMPETITION.POINTS.INFO_1")}</p>
			<h3>{t("COMPETITION.POINTS.SUBSUBHEADER_1")}</h3>
			<ul>
				<li>{t("COMPETITION.POINTS.LIST_1")}</li>
			</ul>
			<h3>{t("COMPETITION.POINTS.SUBSUBHEADER_2")}</h3>
			<ul>
				<li>{t("COMPETITION.POINTS.LIST_2")}</li>
				<li>{t("COMPETITION.POINTS.LIST_3")}</li>
			</ul>
			<h3>{t("COMPETITION.POINTS.SUBSUBHEADER_3")}</h3>
			<ul>
				<li>{t("COMPETITION.POINTS.LIST_4")}</li>
				<li>{t("COMPETITION.POINTS.LIST_5")}</li>
				<li>{t("COMPETITION.POINTS.LIST_6")}</li>
				<li>{t("COMPETITION.POINTS.LIST_7")}</li>
				<li>{t("COMPETITION.POINTS.LIST_8")}</li>
				<li>{t("COMPETITION.POINTS.LIST_9")}</li>
			</ul>
			<h3>{t("COMPETITION.POINTS.SUBSUBHEADER_4")}</h3>
			<ul>
				<li>{t("COMPETITION.POINTS.LIST_10")}</li>
				<li>{t("COMPETITION.POINTS.LIST_11")}</li>
				<li>{t("COMPETITION.POINTS.LIST_12")}</li>
			</ul>
			<h3>{t("COMPETITION.POINTS.SUBSUBHEADER_5")}</h3>
			<ul>
				<li>{t("COMPETITION.POINTS.LIST_13")}</li>
				<li>{t("COMPETITION.POINTS.LIST_14")}</li>
				<li>{t("COMPETITION.POINTS.LIST_15")}</li>
				<li>{t("COMPETITION.POINTS.LIST_16")}</li>
			</ul>
			<p>{t("COMPETITION.POINTS.INFO_2")}</p>

			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>{t("COMPETITION.HEADER_2")}</h1>
				</Parallax>
			</div>
			<h2>{t("COMPETITION.SUBHEADER_1")}</h2>
			<p>{t("COMPETITION.INFO_2")}</p>
			<h2>{t("COMPETITION.SUBHEADER_2")}</h2>
			<p>{t("COMPETITION.INFO_3")}</p>
			<h2>{t("COMPETITION.SUBHEADER_3")}</h2>
			<p>{t("COMPETITION.INFO_4")}</p>
			<p>{t("COMPETITION.INFO_5")}</p>

			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>{t("COMPETITION.HEADER_3")}</h1>
				</Parallax>
			</div>
			<h2>{t("COMPETITION.SUBHEADER_4")}</h2>
			<p>{t("COMPETITION.INFO_6")}</p>
			<h2>{t("COMPETITION.SUBHEADER_5")}</h2>
			<p>{t("COMPETITION.INFO_7")}</p>
			<ul>
				<li>{t("COMPETITION.LIST_1")}</li>
				<li>{t("COMPETITION.LIST_2")}</li>
				<li>{t("COMPETITION.LIST_3")}</li>
				<li>{t("COMPETITION.LIST_4")}</li>
				<li>{t("COMPETITION.LIST_5")}</li>
			</ul>

			<h1>{t("COMPETITION.HEADER_4")}</h1>
			<p>{t("COMPETITION.INFO_8")}</p>
			<h1>{t("COMPETITION.HEADER_5")}</h1>
			<p>{t("COMPETITION.INFO_9")}</p>
			<p>{t("COMPETITION.INFO_10")}</p>
		</div>
	);
}
