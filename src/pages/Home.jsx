import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-red-transparent.png";

export default function Home() {
	return (
		<>
			var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
			<div className="firstView">
				<img src={logo} className="logo" alt="logotype" />
				<h1>Hometime</h1>
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
