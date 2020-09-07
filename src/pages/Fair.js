import React from "react";
import { NavLink } from "react-router-dom";

export default function Fair() {
	return (
		<div className="Fair">
			<h1>The Fair</h1>
			<p>
				The LARV-fair is the main event of LARV. This is a one day event where
				representatives from over 110 organizations travel to Luleå university
				of technology to meet the competence of tomorrow, the campus students.
				The fair often attracts over 2000 students and is usually held on the
				wednesday of the career week between 9 AM - 15 PM. Exhibitor
				representatives will during this time be available in their stall ready
				to interact with students. Because of the importance of the fair all
				students which study programs of technical faculty does not have any
				scheduled classes for that day. The fair is hosted at the campus and
				therefore utilizes a couple of its buildings. Because of this the
				available space is limited and not all exhibitors which wants to attend
				can be accommodated.
			</p>
			<p>
				Are you a organization looking to attend LARV? Read more about
				information regarding organization attendance at our organizations
				page...
			</p>

			<NavLink className="button" to="/organizations">
				ORGANIZATIONS
			</NavLink>
		</div>
	);
}
