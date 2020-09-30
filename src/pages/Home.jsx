import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-red-transparent.png";
import Countdown from "react-countdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

// Random component
const Completionist = () => <span>You are good to go!</span>;
const larvDate = Date.parse("20 Jan 2021 09:00:00");
//const larvDate = Date.parse("4 Sep 2020 12:00:00");

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
			<div className="firstView">
				<img src={logo} className="logoLarge" alt="logotype" />
				<h1 className="titleLine">__________</h1>

				<div className="twoIcons">
					<a href="https://www.instagram.com/larv_teknologkaren/">
						<FontAwesomeIcon icon={faInstagramSquare} className="icon" />
					</a>
					<a href="https://www.facebook.com/LARVLTU/">
						<FontAwesomeIcon icon={faFacebookSquare} className="icon" />
					</a>
				</div>

				<h1>{t("HOME.HEADER")}</h1>

				<Countdown date={larvDate} renderer={renderer}></Countdown>
			</div>

			<div className="content">
				<p>{t("HOME.INFO")}</p>
				<div className="twoButtons">
					<NavLink className="button" to="/students">
						{t("GENERAL.STUDENTS")}
					</NavLink>
					<NavLink className="button" to="/organizations">
						{t("GENERAL.ORGANIZATIONS")}
					</NavLink>
				</div>

				<h1>{t("HOME.NEWS")}</h1>
				<p>{t("HOME.NEWS_CONTENT")}</p>
				<div className="twoButtons">
					<NavLink className="button" to="/musicquiz1">
						{t("TEMP.MUSICQUIZ")}
					</NavLink>
					<NavLink className="button" to="/musicquiz2">
						{t("TEMP.MUSICQUIZ2")}
					</NavLink>
				</div>
			</div>
		</div>
	);
}
