import React from "react";
import { Parallax } from "react-parallax";
import bgImage from "../img/banner.jpg";
import { useTranslation } from "react-i18next";

export default function ScheduleFair() {
	const { t } = useTranslation();
	return (
		<div className="ScheduleFair">
			<div className="banner">
				<Parallax
					className="parallax"
					blur={0}
					bgImage={bgImage}
					bgImageAlt=""
					strength={300}
				>
					<h1>{t("SCHEDULE.HEADER")}</h1>
				</Parallax>
			</div>

			<h1>{t("WEEK.TUE")} 19/1</h1>
			<h2>Story of a talent who joined a startup company</h2>
			<h3>12:00-12:45 {t("SCHEDULE.BY")} Arctic Business Incubator</h3>

			<div className="ButtonDiv">
				<a
					className="button"
					href="https://fb.me/e/3Wx4tqN7f"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("PREP_WEEK.ACTIVITIES.LINK_TEXT")}
				</a>
			</div>

			<h1>{t("WEEK.WED")} 20/1</h1>
			<p>{t("SCHEDULE.INFO")}</p>

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

			<h2>Så presenterar du din idé</h2>
			<h3>10:00-10:30 {t("SCHEDULE.BY")} Venture Cup</h3>
			<p></p>

			<h2>Är du tillräckligt viktig på riktigt?</h2>
			<h3>11:00-11:40 {t("SCHEDULE.BY")} Pensionsmyndigheten</h3>
			<p></p>

			<h2>How to have fun at work - and being good at what you do</h2>
			<h3>12.00-12.45 {t("SCHEDULE.BY")} SKF</h3>
			<p></p>

			<h2>Värdet av rutiner och scheman</h2>
			<h3>14:00-14:20 {t("SCHEDULE.BY")} Lindbäcks bygg</h3>
		</div>
	);
}
