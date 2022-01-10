import React from "react";
//import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";
//import { calendar } from "../config";
import timeline from "../img/event/utkast_affisch.png";
import scania from "../img/event/Scania.jpg";
import pensions from "../img/event/Pensions.jpg";
import northvolt from "../img/event/Northvolt.png";
import sca from "../img/event/Sca.jpg";

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

			<h1>{t("EVENTSCHEDULE.HEADER_2")}</h1>
			<div class="flex-container">
				<div class="flex-item-left">
					<img class="in_text" src={scania} alt="" />
				</div>
				<div class="flex-item-right">
					<h2>{t("EVENTSCHEDULE.HEADER_2_1")}</h2>
					<p>{t("EVENTSCHEDULE.INFO_2_1")}</p>
					<p>{t("EVENTSCHEDULE.INFO_2_2")}</p>
					<ul>
						<li>{t("EVENTSCHEDULE.INFO_2_2_1")}</li>
						<li>{t("EVENTSCHEDULE.INFO_2_2_2")}</li>
						<li>{t("EVENTSCHEDULE.INFO_2_2_3")}</li>
						<li>{t("EVENTSCHEDULE.INFO_2_2_4")}</li>
					</ul>
					<h2>{t("EVENTSCHEDULE.INFO_2_3")}</h2>
					<p>{t("EVENTSCHEDULE.INFO_2_3_1")}</p>
					<p>{t("EVENTSCHEDULE.INFO_2_3_2")}</p>

					<p>{t("EVENTSCHEDULE.INFO_2_4")}</p>
					<p>{t("EVENTSCHEDULE.INFO_2_5_1")}</p>
					<p>{t("EVENTSCHEDULE.INFO_2_5_2")}</p>
					<p>{t("EVENTSCHEDULE.INFO_2_5_3")}</p>
					<p>{t("EVENTSCHEDULE.INFO_2_5_4")}</p>
				</div>
			</div>

			<div className="ButtonDiv">
				<a
					className="button"
					href={t("EVENTSCHEDULE.INFO_2_7")}
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("PREP_WEEK.ACTIVITIES.LINK_TEXT")}
				</a>
			</div>

			<h1>{t("EVENTSCHEDULE.HEADER_3")}</h1>
			<div class="flex-container">
				<div class="flex-item-left">
					<h2>{t("EVENTSCHEDULE.HEADER_3_1")}</h2>

					<p>{t("EVENTSCHEDULE.INFO_3_1")}</p>
					<p>{t("EVENTSCHEDULE.INFO_3_2")}</p>
					<p>{t("EVENTSCHEDULE.INFO_3_3")}</p>
					<p>{t("EVENTSCHEDULE.INFO_3_4")}</p>
					<p>{t("EVENTSCHEDULE.INFO_3_5")}</p>
					<p>{t("EVENTSCHEDULE.INFO_3_6")}</p>
					<p>{t("EVENTSCHEDULE.INFO_3_7")}</p>
				</div>
				<div class="flex-item-right">
					<img class="in_text" src={northvolt} alt="" />
				</div>
			</div>
			<div className="ButtonDiv">
				<a
					className="button"
					href={t("EVENTSCHEDULE.INFO_3_7")}
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("PREP_WEEK.ACTIVITIES.LINK_TEXT")}
				</a>
			</div>

			<h1>{t("EVENTSCHEDULE.HEADER_4")}</h1>
			<div class="flex-container">
				<div class="flex-item-left">
					<img class="in_text" src={pensions} alt="" />
				</div>
				<div class="flex-item-right">
					<p>{t("EVENTSCHEDULE.HEADER_4_1")}</p>
					<p>{t("EVENTSCHEDULE.INFO_4_1")}</p>
				</div>
			</div>

			<div className="ButtonDiv">
				<a
					className="button"
					href={t("EVENTSCHEDULE.INFO_4_2")}
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("PREP_WEEK.ACTIVITIES.LINK_TEXT")}
				</a>
			</div>

			<h1>{t("EVENTSCHEDULE.HEADER_5")}</h1>
			<div class="flex-container">
				<div class="flex-item-left">
					<h2>{t("EVENTSCHEDULE.HEADER_5_1")}</h2>
					<p>{t("EVENTSCHEDULE.INFO_5_1")}</p>
					<p>{t("EVENTSCHEDULE.INFO_5_2")}</p>
					<p>{t("EVENTSCHEDULE.INFO_5_3")}</p>
				</div>
				<div class="flex-item-right">
					<img class="in_text" src={sca} alt="" />
				</div>
			</div>

			<div className="ButtonDiv">
				<a
					className="button"
					href={t("EVENTSCHEDULE.INFO_5_5")}
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("PREP_WEEK.ACTIVITIES.LINK_TEXT")}
				</a>
			</div>
		</div>
	);
}
