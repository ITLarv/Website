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
			<p>
				Föreläsningen kommer handla om Venture Cup, vår nästa tävling och konkreta tips hur
				man arbetar med en pitch och ett pitch deck. Som min kollega skrev, bra redskap att
				ha med sig inför framtida presentationer och intervjuer när man söker jobb eller ska
				starta eget.
			</p>
			<p></p>

			<h2>Är du tillräckligt viktig på riktigt?</h2>
			<h3>11:00-11:40 {t("SCHEDULE.BY")} Pensionsmyndigheten</h3>
			<p>
				Cecilia Tiger Fogman och Martina Pulvere berättar om varför Pensionsmyndighetens
				uppdrag faktiskt berör alla. Både Cecilia och Martina har pluggat teknik på LTU och
				idag arbetar de på olika sätt med systemutveckling och ledarskap på
				Pensionsmyndighetens IT-avdelning i Luleå. De delar med sig av sina erfarenheter och
				svarar på frågor om hur det är att jobba med samhällsviktig IT-utveckling i staten.
			</p>
			<p></p>

			<h2>How to have fun at work - and being good at what you do</h2>
			<h3>12.00-12.45 {t("SCHEDULE.BY")} SKF</h3>
			<p>
				The SKF reprecentative Dr Victoria Van Camp will answer the questions "What does one
				have to think about as a newcomer in the work life?", "The way to success" and "How
				to compete as a newcomer with those that are more experienced" in the presentation.
			</p>
			<p></p>

			<h2>Värdet av rutiner och scheman</h2>
			<h3>14:00-14:20 {t("SCHEDULE.BY")} Lindbäcks bygg</h3>
		</div>
	);
}
