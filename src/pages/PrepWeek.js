import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";
//import { calendar } from "../config";

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
			<p>{t("PREP_WEEK.INFO")}</p>

			<h1>{t("PREP_WEEK.ACTIVITIES.HEADER")}</h1>

			<h2>{t("PREP_WEEK.ACTIVITIES.EVENT_2.HEADER")}</h2>
			<h3>{t("PREP_WEEK.ACTIVITIES.EVENT_2.LOC_TIME")}</h3>
			<p>{t("PREP_WEEK.ACTIVITIES.EVENT_2.INFO_1")}</p>
			<p>{t("PREP_WEEK.ACTIVITIES.EVENT_2.INFO_2")}</p>
			<div className="ButtonDiv">
				<a
					className="button"
					href="https://fb.me/e/5WudSXeDy"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("PREP_WEEK.ACTIVITIES.LINK_TEXT")}
				</a>
			</div>

			<h2>{t("PREP_WEEK.ACTIVITIES.EVENT_3.HEADER")}</h2>
			<h3>{t("PREP_WEEK.ACTIVITIES.EVENT_3.LOC_TIME")}</h3>
			<p>{t("PREP_WEEK.ACTIVITIES.EVENT_3.INFO_1")}</p>
			<p>{t("PREP_WEEK.ACTIVITIES.EVENT_3.INFO_2")}</p>
			<div className="ButtonDiv">
				<a
					className="button"
					href="https://fb.me/e/33Rw5IJXe"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("PREP_WEEK.ACTIVITIES.LINK_TEXT")}
				</a>
			</div>

			<h2>{t("PREP_WEEK.ACTIVITIES.EVENT_4.HEADER")}</h2>
			<h3>{t("PREP_WEEK.ACTIVITIES.EVENT_4.LOC_TIME")}</h3>
			<p>{t("PREP_WEEK.ACTIVITIES.EVENT_4.INFO_1")}</p>
			<p>{t("PREP_WEEK.ACTIVITIES.EVENT_4.INFO_2")}</p>
			<div className="ButtonDiv">
				<a
					className="button"
					href="https://fb.me/e/3wELGiJUS"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("PREP_WEEK.ACTIVITIES.LINK_TEXT")}
				</a>
			</div>

			<h2>{t("PREP_WEEK.ACTIVITIES.EVENT_5.HEADER")}</h2>
			<h3>{t("PREP_WEEK.ACTIVITIES.EVENT_5.LOC_TIME")}</h3>
			<p>{t("PREP_WEEK.ACTIVITIES.EVENT_5.INFO_1")}</p>
			<p>{t("PREP_WEEK.ACTIVITIES.EVENT_5.INFO_2")}</p>
			<div className="ButtonDiv">
				<a
					className="button"
					href="https://fb.me/e/fo1cO29jS"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("PREP_WEEK.ACTIVITIES.LINK_TEXT")}
				</a>
			</div>

			<h2>{t("PREP_WEEK.ACTIVITIES.EVENT_6.HEADER")}</h2>
			<h3>{t("PREP_WEEK.ACTIVITIES.EVENT_6.LOC_TIME")}</h3>
			<p>{t("PREP_WEEK.ACTIVITIES.EVENT_6.INFO_1")}</p>
			<div className="ButtonDiv">
				<a
					className="button"
					href="https://fb.me/e/3phvbL3no"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("PREP_WEEK.ACTIVITIES.LINK_TEXT")}
				</a>
			</div>

			<h2>{t("PREP_WEEK.ACTIVITIES.EVENT_7.HEADER")}</h2>
			<h3>{t("PREP_WEEK.ACTIVITIES.EVENT_7.LOC_TIME")}</h3>
			<p>{t("PREP_WEEK.ACTIVITIES.EVENT_7.INFO_1")}</p>
			<p>{t("PREP_WEEK.ACTIVITIES.EVENT_7.INFO_2")}</p>
			<p>{t("PREP_WEEK.ACTIVITIES.EVENT_7.INFO_3")}</p>
			<p>{t("PREP_WEEK.ACTIVITIES.EVENT_7.INFO_4")}</p>
			<div className="ButtonDiv">
				<a
					className="button"
					href="https://fb.me/e/1MGMdpguc"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("PREP_WEEK.ACTIVITIES.LINK_TEXT")}
				</a>
			</div>

			<h1>{t("PREP_WEEK.CONTESTS.HEADER")}</h1>

			<h2>{t("PREP_WEEK.CONTESTS.CONTEST_1.HEADER")}</h2>
			<p>{t("PREP_WEEK.CONTESTS.CONTEST_1.INFO_1")}</p>
			<p>{t("PREP_WEEK.CONTESTS.CONTEST_1.INFO_2")}</p>
			<p>{t("PREP_WEEK.CONTESTS.CONTEST_1.INFO_3")}</p>
			<p>{t("PREP_WEEK.CONTESTS.CONTEST_1.INFO_4")}</p>

			<h2>{t("PREP_WEEK.CONTESTS.CONTEST_2.HEADER")}</h2>
			<p>{t("PREP_WEEK.CONTESTS.CONTEST_2.INFO_1")}</p>
			<div className="ButtonDiv">
				<NavLink className="button" to="/involved/volunteer/nomination">
					{t("PREP_WEEK.CONTESTS.CONTEST_2.BUTTON")}
				</NavLink>
			</div>

			<h2>{t("PREP_WEEK.CONTESTS.CONTEST_3.HEADER")}</h2>
			<p>{t("PREP_WEEK.CONTESTS.CONTEST_3.INFO_1")}</p>
			<ul>
				<li>{t("PREP_WEEK.CONTESTS.CONTEST_3.LI_1")}</li>
				<li>{t("PREP_WEEK.CONTESTS.CONTEST_3.LI_2")}</li>
				<li>{t("PREP_WEEK.CONTESTS.CONTEST_3.LI_3")}</li>
			</ul>
		</div>
	);
}
