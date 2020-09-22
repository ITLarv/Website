import React from "react";
import { NavLink } from "react-router-dom";

export default function Companies() {
	return (
		<div className="Companies">
			<h1>Let LARV help you find the competence of tomorrow!</h1>
			<p>
				LARV is a platform where you as an organization is able to meet the
				students of Luleå university of technology. We offer a great many
				different ways for your organization to interact with students and excel
				in providing services within the areas of recruitment and employer
				branding. The services we offer are listed below. When signing up for an
				event in relation to LARV marketing of the event is included in the
				price. If you as an organization has certain requirements regarding
				marketing we will take that into consideration.
			</p>

			<p>
				Are you an organization interested in LARV? Sign up for the initial
				application here. Available untill october 23rd.
			</p>

			<NavLink className="button" to="/organizations/initial-application">
				Initial Application
			</NavLink>

			<h1>The fair</h1>
			<p>
				The LARV-fair is perhaps the event which provides the most value during
				LARV and is a must for organizations that are serious about recruiting
				and introducing themselves to students. Many students which attend LARV
				are not informed about all the different opportunities which exists post
				graduation. By meeting them early in their career you can make a lasting
				impression and provide your organization with new thinking and ambition.{" "}
			</p>
			<p>
				The fair often attracts over 2000 students and is usually held on the
				wednesday of the career week between 9 AM - 15 PM. Exhibitor
				representatives are expected to be available in their stall ready to
				interact with students during a majority of this time. Because of the
				importance of the fair all students which study programs of technical
				faculty does not have any scheduled classes for that day. The fair is
				hosted at the campus and therefore utilizes a couple of its buildings.
				Because of this the available space is limited and not all exhibitors
				which wants to attend can be accommodated. Make sure that your
				organization notifies us as soon as possible to increase the chances of
				securing a spot for this years fair!
			</p>

			<h2>Base package and price</h2>
			<p>
				Bellow is a list of everything included in the base package offered to
				the participating organizations. When designing events, a dialog with
				the project group will be established for further details.
			</p>
			<h3>Price for the base package: 24.000 sek</h3>
			<ul>
				<li>Access to and help with setting up a digital fair stand</li>
				<li>A spread in our digital fair catalog</li>
				<li>Marketing leading up to the fair</li>
				<li>Access to the individual meetings service</li>
				<li>
					The oppuprtunity to send keychains, water bottles, cloth bags, and
					other merchandice that can be distributed on site during the fair
				</li>

				<li>
					Access to a contact person before, during and after the far who can
					anwer any questions you may have
				</li>
			</ul>
			<p>
				There are a handful of additional extras available to those who want to
				stand out during the fair. See the full product catalog for more
				information.{" "}
			</p>

			<h2>Event portfolio</h2>
			<p>
				An event portfolio will be published here soon. Thank you for your
				patience.
			</p>
		</div>
	);
}
