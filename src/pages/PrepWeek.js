import React from "react";
import { NavLink } from "react-router-dom";

export default function Prelarv() {
	return (
		<div className="Prelarv">
			<h1>Prep-week</h1>
			<p>
				Prep-week is another major part of the LARV project. This is a week held
				a couple of months before main week with the intent to prepare students
				for LARV. This is done through informative seminars regarding LARV, how
				to present yourself to companies, how to get started with and use
				LinkedIn, how to write a cover letter etc.. By hosting Prep-week
				awareness of LARV is increased and the students are made sure to be
				prepared to meet the attending organizations during LARV.{" "}
			</p>

			<h1>Activities during prep-week</h1>
			<p>Some of the activities that can be held during Prep-week are…</p>
			<ul>
				<li>Informative seminars about LARV</li>
				<li>Guest seminars from organizations</li>
				<li>Seminars from Career center:</li>

				<li className="indentList">How to write a cover letter</li>
				<li className="indentList">How to write an attractive CV</li>
				<li className="indentList">Mastering the elevator pitch</li>

				<li>Workshops</li>
				<li>LARV-pub at STUK for students</li>
				<li>Case solving</li>
				<li>Breakfast talks with organizations</li>
			</ul>

			<p>
				For more information about the different activities check out the
				calendar.
			</p>

			<NavLink className="button" to="/home/calendar">
				CALENDAR
			</NavLink>

			<p>
				Does your organization wish to be a part of Prep-week? Read more about
				in formation regarding organization attendance at our organizations
				page…
			</p>

			<NavLink className="button" to="/organizations">
				ORGANIZATIONS
			</NavLink>
		</div>
	);
}
