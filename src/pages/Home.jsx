import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-red-transparent.png";
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>You are good to go!</span>;
const date = () => "2021-02-01T01:02:03";

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
	if (completed) {
		// Render a complete state
		return <Completionist />;
	} else {
		// Render a countdown
		return (
			<span>
				{days}:{hours}:{minutes}:{seconds}
			</span>
		);
	}
};

export default function Home() {
	return (
		<>
			<div className="firstView">
				<img src={logo} className="logo" alt="logotype" />
				<h1>Home</h1>

				<Countdown date={date} renderer={renderer}></Countdown>

				<p>
					LARV, short for Luleå arbetsmarknadsvecka, is the largest event held
					annually at Luleå university of technology. LARV is a project
					dedicated to help students advance their professional careers and to
					help employers find the competence of tomorrow. This is done through a
					week filled with career related events, inspiring seminars and most
					importantly a fair involving over 110 organisations and 2000 students.
				</p>
				<div className="twoButtons">
					<NavLink className="button" to="/students">
						Students
					</NavLink>
					<NavLink className="button" to="/organizations">
						Oranizations
					</NavLink>
				</div>
				<h1>News</h1>
			</div>
		</>
	);
}
