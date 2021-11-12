import React from "react";
//import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";
//import { calendar } from "../config";
import timeline from "../img/prepweek/timeline.png";
import larvteam from "../img/prepweek/pg.png";
import vattenfall from "../img/prepweek/vattenfall.png";
import cv from "../img/prepweek/cv.png";
import quintus from "../img/prepweek/quintus.png";
import cv_foto from "../img/prepweek/cv_foto.png";
import pub from "../img/prepweek/pub.png";

export default function Prelarv() {
	const { t } = useTranslation();
	//const showCalendar = calendar().show;
	return (
		<div className="Prelarv">
			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>{t("PREP_WEEK.HEADER")}</h1>
				</Parallax>
			</div>

			<div className="grey">
				<h2>Förbered dig för LARV genom LARV PREP-WEEK!</h2>
			</div>

			<div>
				<h1 style={{ marginTop: "10px" }}>{t("PREP_WEEK.HEADER_2")}</h1>
				<p>{t("PREP_WEEK.INFO")}</p>
			</div>

			<h1>Eventschema</h1>
			<img id="evpic" src={timeline} alt="" />

			<h1>{t("PREP_WEEK.ACTIVITIES.EVENT_1.HEADER")}</h1>
			<div class="flex-container">
				<div class="flex-item-left">
					<img class="in_text" src={larvteam} alt="" />
				</div>
				<div class="flex-item-right">
					<p>{t("PREP_WEEK.ACTIVITIES.EVENT_1.INFO")}</p>
					<p>{t("PREP_WEEK.ACTIVITIES.EVENT_1.FREE")}</p>
				</div>
			</div>

			<div className="ButtonDiv">
				<a
					className="button"
					href={t("PREP_WEEK.ACTIVITIES.EVENT_1.LINK")}
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("PREP_WEEK.ACTIVITIES.LINK_TEXT")}
				</a>
			</div>

			<h1>{t("PREP_WEEK.ACTIVITIES.EVENT_2.HEADER")}</h1>
			<div class="flex-container">
				<div class="flex-item-left">
					<p>{t("PREP_WEEK.ACTIVITIES.EVENT_2.INFO")}</p>
					<p>{t("PREP_WEEK.ACTIVITIES.EVENT_2.FREE")}</p>
				</div>
				<div class="flex-item-right">
					<img class="in_text" src={vattenfall} alt="" />
				</div>
			</div>
			<div className="ButtonDiv">
				<a
					className="button"
					href={t("PREP_WEEK.ACTIVITIES.EVENT_2.LINK")}
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("PREP_WEEK.ACTIVITIES.LINK_TEXT")}
				</a>
			</div>

			<h1>{t("PREP_WEEK.ACTIVITIES.EVENT_3.HEADER")}</h1>
			<div class="flex-container">
				<div class="flex-item-left">
					<img class="in_text" src={cv} alt="" />
				</div>
				<div class="flex-item-right">
					<p>{t("PREP_WEEK.ACTIVITIES.EVENT_3.INFO_1")}</p>
					<p>{t("PREP_WEEK.ACTIVITIES.EVENT_3.INFO_2")}</p>
				</div>
			</div>

			<div className="ButtonDiv">
				<a
					className="button"
					href={t("PREP_WEEK.ACTIVITIES.EVENT_3.LINK")}
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("PREP_WEEK.ACTIVITIES.LINK_TEXT")}
				</a>
			</div>

			<h1>{t("PREP_WEEK.ACTIVITIES.EVENT_4.HEADER")}</h1>
			<div class="flex-container">
				<div class="flex-item-left">
					<p>{t("PREP_WEEK.ACTIVITIES.EVENT_4.INFO_1")}</p>
					<p>{t("PREP_WEEK.ACTIVITIES.EVENT_4.INFO_2")}</p>
					<p>{t("PREP_WEEK.ACTIVITIES.EVENT_4.FREE")}</p>
					<p>{t("PREP_WEEK.ACTIVITIES.EVENT_4.WHERE")}</p>
				</div>
				<div class="flex-item-right">
					<img class="in_text" src={quintus} alt="" />
				</div>
			</div>
			<h2>Tyvärr fullsatt</h2>

			<h1>{t("PREP_WEEK.ACTIVITIES.EVENT_5.HEADER")}</h1>
			<div class="flex-container">
				<div class="flex-item-left">
					<img class="in_text" src={cv_foto} alt="" />
				</div>
				<div class="flex-item-right">
					<p>{t("PREP_WEEK.ACTIVITIES.EVENT_5.INFO")}</p>
				</div>
			</div>

			<h1>{t("PREP_WEEK.ACTIVITIES.EVENT_6.HEADER")}</h1>
			<div class="flex-container">
				<div class="flex-item-left">
					<p>{t("PREP_WEEK.ACTIVITIES.EVENT_6.INFO_1")}</p>
					<p>{t("PREP_WEEK.ACTIVITIES.EVENT_6.INFO_2")}</p>
					<p>{t("PREP_WEEK.ACTIVITIES.EVENT_6.INFO_3")}</p>
					<p>{t("PREP_WEEK.ACTIVITIES.EVENT_6.INFO_4")}</p>
					<p>{t("PREP_WEEK.ACTIVITIES.EVENT_6.INFO_5")}</p>
					<p>{t("PREP_WEEK.ACTIVITIES.EVENT_6.INFO_6")}</p>
				</div>
				<div class="flex-item-right">
					<img class="in_text" src={pub} alt="" />
				</div>
			</div>

			<div className="ButtonDiv">
				<a
					className="button"
					href={t("PREP_WEEK.ACTIVITIES.EVENT_6.LINK")}
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("PREP_WEEK.ACTIVITIES.LINK_TEXT")}
				</a>
			</div>
		</div>
	);
}
