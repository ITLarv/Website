import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-red-transparent.png";
import Countdown from "react-countdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faSnapchatSquare } from "@fortawesome/free-brands-svg-icons";
import News from "./News";
import { Parallax } from "react-parallax";
import bgImage from "../img/header.jpg";

// Random component
const Completionist = () => <span>You are good to go!</span>;
const larvDate = Date.parse("18 Jan 2021 09:00:00");

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
	if (completed) {
		// Render a complete state
		return <Completionist />;
	} else {
		// Render a countdown
		return (
			<span className="countdown">
				{days}:{hours}:{minutes}:{seconds}
			</span>
		);
	}
};

export default function Home() {
	const { t } = useTranslation();
	return (
		<div className="home">
			<Parallax className="parallax" blur={0} bgImage={bgImage} bgImageAlt="" strength={300}>
				<div className="firstView">
					<img src={logo} className="logoLarge" alt="logotype" />
					<h1 className="titleLine">______________</h1>

					<div className="Icons">
						<a
							href="https://www.facebook.com/LARVLTU/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faFacebookSquare} className="icon" />
						</a>
						<a
							href="https://www.instagram.com/larv_teknologkaren/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faInstagramSquare} className="icon" />
						</a>
						<NavLink to="/snapchat">
							<FontAwesomeIcon icon={faSnapchatSquare} className="icon" />
						</NavLink>
					</div>

					<h1>{t("HOME.HEADER")}</h1>
					<h1>{t("HOME.DATE")}</h1>
					<h1>{t("HOME.FAIR")}</h1>

					<Countdown date={larvDate} renderer={renderer}></Countdown>
				</div>
			</Parallax>

			<div className="content">
				<div className="info">
					<h1>{t("HOME.HEADER_2")}</h1>
					<p>{t("HOME.INFO")}</p>
					<div className="ButtonDiv">
						<a
							className="button"
							href="https://fair.larv.org/sv/event/4547"
							target="_blank"
							rel="noopener noreferrer"
						>
							{t("PLATFORM.BUTTON")}
						</a>
						<NavLink className="button" to="/students">
							{t("GENERAL.STUDENTS")}
						</NavLink>
						<NavLink className="button" to="/organizations">
							{t("GENERAL.ORGANIZATIONS")}
						</NavLink>
					</div>
				</div>
				<div className="news">
					<News />
				</div>
			</div>
		</div>
	);
}
