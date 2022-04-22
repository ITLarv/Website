import React from "react";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";
import backpack from "../img/competition/LC-backpack.png";
import headphones from "../img/competition/LC-hörlurar.png";
import card from "../img/competition/LC-lck.png";
import remarkable from "../img/competition/LC-remarkable.png";
import bag from "../img/competition/LC-weekendbag.png";
import nespresso from "../img/competition/Nespresso.png";

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

			<h1>{t("COMPETITION.HEADER_2")}</h1>
			<p>{t("COMPETITION.INFO_2_1")}</p>
			<p>{t("COMPETITION.INFO_2_2")}</p>
			<p>{t("COMPETITION.INFO_2_3")}</p>
			<p>{t("COMPETITION.INFO_2_4")}</p>
			<p>{t("COMPETITION.INFO_2_5")}</p>
			<p>{t("COMPETITION.INFO_2_6")}</p>
			<p>{t("COMPETITION.INFO_2_7")}</p>

			<h1>{t("COMPETITION.HEADER_4")}</h1>
			<h2>{t("COMPETITION.HEADER_4_1")}</h2>
			<p>{t("COMPETITION.INFO_4_1")}</p>

			<h2>{t("COMPETITION.HEADER_4_2")}</h2>
			<p>{t("COMPETITION.INFO_4_2")}</p>

			<h2>{t("COMPETITION.HEADER_4_3")}</h2>
			<p>{t("COMPETITION.INFO_4_3")}</p>

			<h2>{t("COMPETITION.HEADER_4_4")}</h2>
			<p>{t("COMPETITION.INFO_4_4")}</p>

			<h2>{t("COMPETITION.HEADER_4_5")}</h2>
			<p>{t("COMPETITION.INFO_4_5")}</p>

			<h2>{t("COMPETITION.HEADER_4_6")}</h2>
			<p>{t("COMPETITION.INFO_4_6")}</p>

			<h2>{t("COMPETITION.HEADER_4_7")}</h2>
			<p>{t("COMPETITION.INFO_4_7")}</p>

			<h2>{t("COMPETITION.HEADER_4_9")}</h2>
			<p>{t("COMPETITION.INFO_4_9")}</p>
			<p>{t("COMPETITION.INFO_4_9_1")}</p>
			<p>{t("COMPETITION.LEVEL_1")}</p>
			<p>{t("COMPETITION.LEVEL_2")}</p>
			<p>{t("COMPETITION.LEVEL_3")}</p>
			<p>{t("COMPETITION.LEVEL_4")}</p>

			<h2>{t("COMPETITION.HEADER_5")}</h2>
			<p>{t("COMPETITION.INFO_5_1_1")}</p>

			<ul>
				<p>{t("COMPETITION.INFO_5_1_2")}</p>
				<p>{t("COMPETITION.INFO_5_1_3")}</p>
				<p>{t("COMPETITION.INFO_5_1_4")}</p>
			</ul>

			<p>{t("COMPETITION.INFO_6")}</p>
			<ul>
				<p>{t("COMPETITION.FILL_1")}</p>
				<p>{t("COMPETITION.FILL_2")}</p>
				<p>{t("COMPETITION.FILL_3")}</p>
				<p>{t("COMPETITION.FILL_4")}</p>
				<p>{t("COMPETITION.FILL_5")}</p>
				<p>{t("COMPETITION.FILL_6")}</p>
				<p>{t("COMPETITION.FILL_7")}</p>
			</ul>

			<p>{t("COMPETITION.INFO_6_1")}</p>

			<p>{t("COMPETITION.INFO_6_2")}</p>

			<p>{t("COMPETITION.INFO_7_1")}</p>
			<p>{t("COMPETITION.INFO_7_2")}</p>
			<p>{t("COMPETITION.INFO_7_3")}</p>

			<h2>{t("COMPETITION.PRIZES_HEADER")}</h2>
			<h2>{t("COMPETITION.PRIZES_HEADER_1")}</h2>
			<div class="flex-container" style={{ width: "40%" }}>
				<div class="prize_pack">
					<img class="prize_pic" src={card} alt="" />
					<p>{t("COMPETITION.PRIZES_1_1")}</p>
				</div>
				<div class="prize_pack">
					<img class="prize_pic" src={backpack} alt="" />
					<p>{t("COMPETITION.PRIZES_1_2")}</p>
				</div>
			</div>

			<h2>{t("COMPETITION.PRIZES_HEADER_2")}</h2>
			<div class="flex-container" style={{ width: "40%" }}>
				<div class="prize_pack">
					<img class="prize_pic" src={bag} alt="" />
					<p>{t("COMPETITION.PRIZES_2_1")}</p>
				</div>
				<div class="prize_pack">
					<img class="prize_pic" src={headphones} alt="" />
					<p>{t("COMPETITION.PRIZES_2_2")}</p>
				</div>
			</div>

			<h2>{t("COMPETITION.PRIZES_HEADER_3")}</h2>
			<div class="flex-container" style={{ width: "40%" }}>
				<div class="prize_pack">
					<img class="prize_pic" src={nespresso} alt="" />
					<p>{t("COMPETITION.PRIZES_3")}</p>
				</div>
			</div>

			<h2>{t("COMPETITION.PRIZES_HEADER_4")}</h2>
			<div class="flex-container" style={{ width: "40%" }}>
				<div class="prize_pack">
					<img class="prize_pic" src={remarkable} alt="" />
					<p>{t("COMPETITION.PRIZES_4")}</p>
				</div>
			</div>
		</div>
	);
}
