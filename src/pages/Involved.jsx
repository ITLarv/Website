import React from "react";
import { NavLink } from "react-router-dom";

export default function Involved() {
	return (
		<>
			<div className="involved">
				<h1>Get involved in LARV</h1>

				<p>
					Personal development, valuable experience, stimulating tasks and loads
					of fun. This is what an involvement in LARV offers you as a student,
					no matter if you are looking for something small to do on the side of
					the studies or something to completely throw yourself into. It's the
					140 involved students that makes LARV possible every year so take the
					chance to make your mark on the project!
				</p>
				<p>
					LARV offers different levels of involvement when it comes to the time
					required or the tasks which you will perform.{" "}
				</p>

				<div className="threeButtons">
					<NavLink className="button" to="/involved/volunteer">
						Volunteer
					</NavLink>
					<NavLink className="button" to="/involved/coordinator">
						Coordinator
					</NavLink>
					<NavLink className="button" to="/involved/pg">
						PG
					</NavLink>
				</div>

				<div className="dropdown">
					<h3>Volunteer</h3>
					<div className="dropdown-content">
						<ul>
							<li>Event volunteer</li>
							<li>Reception volunteer</li>
							<li>Banquet volunteer</li>
							<li>Lounge volunteer</li>
							<li>Exhibition building volunteer</li>
							<li>Logistics volunteer</li>
							<li>Employer Relations volunteer</li>
							<li>Night guard volunteer</li>
							<li>The Incredibles</li>
						</ul>
					</div>

					<h3>Coordinator</h3>
					<div className="dropdown-content">
						<ul>
							<li>Oranizations coordinator</li>
							<li>Banquet coordinator</li>
							<li>Event coordinator</li>
							<li>Logistics coordinator</li>
							<li>Career Fair coordinator</li>
							<li>Sponsorship and Lounge coordinator</li>
							<li>Service coordinator</li>
							<li>HR coordinator</li>
							<li>Graphics coordinator</li>
							<li>PR coordinator</li>
						</ul>
					</div>

					<h3>PG</h3>
					<div className="dropdown-content">
						<ul>
							<li>Project manager</li>
							<li>Deputy project manager</li>
							<li>Head of Banquet</li>
							<li>Head of Sponsorship</li>
							<li>Head of Events</li>
							<li>Head of Career fair</li>
							<li>Head of IT</li>
							<li>Head of Logistics</li>
							<li>Head of Lounge</li>
							<li>Head of PR</li>
							<li>Head of Employer Relations</li>
							<li>Head of HR</li>
							<li>Head of Services</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
