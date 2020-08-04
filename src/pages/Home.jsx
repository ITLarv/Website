import React from "react";
import logo from "../img/logo-red-transparent.png";

export default function Home() {
	return (
		<>
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
			</div>
		</>
	);
}
