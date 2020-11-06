import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Quiz1() {
	const { t } = useTranslation();
	return (
		<>
			<h1>LARV-Pub - Quiz</h1>
			<div className="ButtonDiv">
				<NavLink className="button" to="/quiz/one">
					Etapp 1
				</NavLink>
				<NavLink className="button" to="/quiz/two">
					Etapp 2
				</NavLink>
				<NavLink className="button" to="/quiz/three">
					Etapp 3
				</NavLink>
			</div>
		</>
	);
}
