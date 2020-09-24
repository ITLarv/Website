import React from "react";
import { NavLink } from "react-router-dom";

export default function Volunteer() {
	return (
		<>
			<h1>Volunteer</h1>
			<p>
				As a volunteer, you are primarily involved during LARV and Prep-week to
				assist with the practical aspects of the project. The volunteers are the
				ones who make it possible to carry out LARV according to the plan set by
				the project group and the coordinators. Similar to the coordinator
				posts, the tasks vary greatly between each type of volunteer. A service
				volunteer can, for example, be a receptionist or driver while a company
				volunteer has the task of contacting, meeting and taking care of two
				exhibitors before and during the fair. See the list below for a complete
				description of the different types of volunteers and their tasks.
			</p>
			<p>
				Since most volunteers are appointed a few months before LARV they are
				not primarily involved in planning the project. Instead, as a volunteer
				you have an impact on the project through evaluations, workshops and
				direct contact with the person in charge of your department. The period
				of involvement and work load is for a volunteer generally the shortest
				and mildest out of the commitments that LARV offers. Again, this depends
				greatly on the type of volunteer you are looking to become. Expected
				working hours amount to 5 hours a week but usually less. The position as
				host is therefore suitable for you who, for example, want to test an
				simpler, less time-consuming commitment or gain a superficial insight
				into LARV as a project.
			</p>

			<NavLink className="button" to="/involved/volunteer/application">
				Apply for volunteer here!
			</NavLink>

			<h3>Värdar</h3>
			<div className="dropdown-content">
				<ul>
					{/* <li>Event volunteer</li>
					<li>Reception volunteer</li>
					<li>Banquet volunteer</li>
					<li>Lounge volunteer</li>
					<li>Exhibition building volunteer</li>
					<li>Logistics volunteer</li>
					<li>Employer Relations volunteer</li>
					<li>Night guard volunteer</li>
					<li>The Incredibles</li> */}
					<li>Företagsvärd</li>
					<li>Teknikvärd</li>
					<li>Mässbyggnadsvärd</li>
					<li>Servicevärd</li>
					<li>Nattvakt</li>
					<li>Chafför</li>
					<li>Incredibles</li>
				</ul>
			</div>

			<h3>Företagsvärd</h3>
			<p>
				Som företagsvärd tilldelas du några specifika företag att vara
				kontaktperson för. Du kommer se till att deras anmälan är fullständig
				och hjälpa dem med eventuella frågor inför LARV. Är du social, öppen och
				vill utveckla din serviceförmåga? Då kommer du trivas och lyckas som
				företagsvärd. Har du frågor kring att vara företagsvärd, kontakta
				rekrytering@larv.org.
			</p>
			<h3>Teknikvärd</h3>
			<p>
				Som teknikvärd kommer du hjälpa de andra studenterna med det system som
				kommer att användas på årets LARV. Du kommer också arbeta med att se
				till att tekniken fungerar i launcerna samt klassrumen under LARV. Har
				du frågor kring att vara företagsvärd, kontakta it@larv.org.
			</p>
			<h3>Mässbyggnadsvärd</h3>
			<p>
				Som mässbyggare kommer man bära möbler, transportera gods, montera
				launcherna, och förbereda för de aktiviteter som kräver montering på
				campus under LARV. Även strömdragning ingår, där två personer kommer dra
				och tejpa fast förlängningskablar utifrån elschema. Har du några frågor
				kring att vara mässbyggnadsvärd, kontakta massbyggnad@larv.org
			</p>
			<h3>Servicevärd</h3>
			<p>
				Som servicevärd kommer du att stå i receptionen eller hälsa gäster
				välkomna till loungen. Du kommer även att hjälpa gästerna med allmänna
				frågor och se till att launchen ser presentabel ut under dagen. Har du
				god serviceförmåga och ett glatt humör? Då är denna post perfekt för
				dig! Har du frågor kring att vara loungevärd, kontakta service@larv.org
			</p>
			<h3>Nattvakt</h3>
			<p>
				Som nattvakt vaktar launcher och området under natten innan de skall
				användas. Har du några frågor kring att vara nattvakt, kontakta
				massbyggnad@larv.org
			</p>
			<h3>Chafför</h3>
			<p>
				Som chaufför kommer du att ansvara för att skjutsa
				företagsrepresentanter till och från aktiviteter som rör LARV under
				LARV-veckan både före och efter. God serviceförmåga, bra lokalkännedom,
				trygg bakom ratten samt positiv attityd är bra egenskaper för denna
				post. För att bli antagen är B-körkort ett krav! Har du några frågor
				kring att vara chaufför, kontakta service@larv.org
			</p>
			<h3>Incredibles</h3>
			<p>
				Att arbeta med gruppen ”The Incredibles” innebär att man inte kommer bli
				tilldelad en fast position, ens arbete kommer att vara tillgänglig och
				hjälpa till under LARV där det behövs då det behövs. Det finns inga
				grundläggande krav som behöver uppfyllas för att söka, B-körkort är
				meriterande. Har du några frågor kring att vara en del av The
				incredibles, kontakta rekrytering@larv.org
			</p>

			<NavLink className="button" to="/involved/volunteer/application">
				Apply for volunteer here!
			</NavLink>
		</>
	);
}
