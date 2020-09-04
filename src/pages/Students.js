import React from "react";
import { NavLink } from "react-router-dom";

export default function Students() {
	return (
		<div className="Students">
			<h1>Students</h1>
			<p>
				Are you a student at LTU that want to take their career to the next
				level? Then LARV is for you! LARV is the annual career week hosted by
				the student union of engineering with the purpose of making sure you get
				all the tools you need to start your career and connect with your dream
				employer. Through inspiring, informative seminars and workshops, tips
				and tricks from experienced professionals and opportunities to meet your
				favourite employers LARV will help you acquire career defining
				experience and connections. Read more about what LARV is on the “about
				LARV” page. The most important event during LARV is the LARV-fair. This
				is a one day event where over 110 organizations attend LTU to form
				connections with students. Visit our “FAIR” page to learn more about the
				fair and which companies which previously attended LARV.{" "}
			</p>
			<p>
				Are you a student at LTU that want to take their career to the next
				level? Then LARV is for you! LARV is the annual career week hosted by
				the student union of engineering with the purpose of making sure you get
				all the tools you need to start your career and connect with your dream
				employer. Through inspiring, informative seminars and workshops, tips
				and tricks from experienced professionals and opportunities to meet your
				favourite employers LARV will help you acquire career defining
				experience and connections. Read more about what LARV is on the “about
				LARV” page. The most important event during LARV is the LARV-fair. This
				is a one day event where over 110 organizations attend LTU to form
				connections with students. Visit our “FAIR” page to learn more about the
				fair and which companies which previously attended LARV.
			</p>
			<p>
				Interested in booking a meeting? Read more about individual meetings and
				how to sign up here….
			</p>

			<NavLink className="button" to="/students/individual-meetings">
				Individual Meetings
			</NavLink>

			<h1>Get involved!</h1>
			<p>
				Want to get all the benefits mentioned above as well as develop skills
				such as leadership, teamwork, responsibility, planning and much more?
				Then an involvement in the LARV project is right for you! LARV is made
				possible by the 140 students which are involved in the project. LARV
				offers different levels of involvement when it comes to the time
				required or the tasks which you will perform. There is something for
				everyone and no matter which type of involvement you choose you will
				have an noticeable impact on the project as well as gain valuable
				personal experience. Does this sounds interesting to you? Read more
				about the different types of involvement LARV offers here...
			</p>

			<NavLink className="button" to="/students/involved">
				Get Involved
			</NavLink>
		</div>
	);
}
