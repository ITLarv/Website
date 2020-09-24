import React from "react";
import { NavLink } from "react-router-dom";

export default function Coordinator() {
	return (
		<>
			<h1>Coordinator</h1>
			<p>
				As a coordinator, you become your supervisor's helping hand. You are
				tasked with helping him/her with things where they need support. This
				can be anything from small tasks such as answering emails or booking
				halls to being responsible for post-specific projects or acting as a
				advisor for new ideas. A coordinator's duties are therefore very much
				dependent on which post they are to assist and what is planned for that
				post that specific year. A company coordinator may, for example, be
				responsible for contacting a certain number of companies prior to the
				fair while banquet coordinators may be responsible for booking food and
				drinks. More examples of specific tasks can be found below. Coordinators
				also work closely with the project group and will therefore also be
				involved in planning and carrying out the project at a higher level.
				This means, for example, being able to take part in workshops, lectures,
				team building exercises and other extras that can be planned for the
				project group and its coordinators.
			</p>
			<p>
				A position as coordinator means that you have to take more
				responsibility for your work and put more time into the project than if
				you were a volunteer. As with the volunteers, the workload differs
				greatly between the different types of coordinators. You can be expected
				to spend between 3-10 hours per week on your involvement as a
				coordinator. A coordinator position is therefore suitable for you who,
				for example, want to develop your ability to collaborate with others and
				take on more responsibility, work on larger projects or want to gain a
				deeper insight into exactly how LARV is planned.{" "}
			</p>

			<NavLink className="button" to="/involved/coordinator/application">
				Apply for Coordinator here!
			</NavLink>

			<h3>Koordinatorer</h3>
			<div className="dropdown-content">
				<ul>
					{/* <li>Oranizations coordinator</li>
					<li>Banquet coordinator</li>
					<li>Event coordinator</li>
					<li>Logistics coordinator</li>
					<li>Career Fair coordinator</li>
					<li>Sponsorship and Lounge coordinator</li>
					<li>Service coordinator</li>
					<li>HR coordinator</li>
					<li>Graphics coordinator</li>
					<li>PR coordinator</li> */}
					<li>Rekryteringskoordinator</li>
					<li>Mässbyggnadskoordinator</li>
					<li>Grafiskkoordinator</li>
					<li>Marknadsföringskoordinator</li>
					<li>IT-koordinator</li>
					<li>Företagskoordinator</li>
					<li>Servicekoordinator</li>
					<li>Eventkoordinator</li>
				</ul>
			</div>

			<h3>Rekryteringskoordinator</h3>
			<p>
				Som rekryteringskoordinator hjälper du rekryteringsansvarig att
				rekrytera LARV Crew (koordinatorer och värdar). Vill du lära dig mer om
				hur du rekryterar rätt person till rätt ställe, är detta en post för
				dig! Har du några frågor om att vara rekryteringskoordinator, kontakta
				rekrytering@larv.org.
			</p>
			<h3>Mässbyggnadskoordinator</h3>
			<p>
				Som mässbyggnadskoordinator kommer du att hjälpa mässbyggnadsansvarig
				med planering och utförande av launcher samt logistik. Har du några
				frågor kring att vara mässbyggnadskoordinator, kontakta
				massbyggnad@larv.org.
			</p>
			<h3>Grafiskkoordinator</h3>
			<p>
				Som grafisk koordinator har du ett nära samarbete med vår grafiskt
				ansvariga. Du kommer att hjälpa till med olika grafiska arbeten som
				ansvarig gör för marknadsföring och de andra i projektgruppen. Har du
				några frågor kring att vara grafisk koordinator, kontakta
				grafiker@larv.org.
			</p>
			<h3>Marknadsföringskoordinator</h3>
			<p>
				Som marknadsföringskoordinator kommer du att hjälpa
				marknadsföringsansvarig med att marknadsföra de olika aktiviteterna som
				har med LARV att göra. Detta sker på olika plattformar och du kommer att
				jobba nära ansvarig med att få LARV att synas på LTU. Har du frågor om
				att vara marknadsföringskoordinator, kontakta pr@larv.org.
			</p>
			<h3>IT-koordinator</h3>
			<p>
				Som IT-koordinator hjälper du IT-ansvarig med att utveckla hemsidan, du
				har kontakt med teknikvärdarna, hjälper resten av projektgruppen med
				webservice samt ser till att tekniken fungerar under LARV. Har du frågor
				om att vara IT-koordinator, kontakta it@larv.org.
			</p>
			<h3>Företagskoordinator</h3>
			<p>
				Som företagskoordinator kommer du att tillsammans med de
				företagsansvariga med uppgifterna att kontakta företag till LARV, hjälpa
				till med innovationsrummet samt arbeta med att söka sponsring.
				Grundstenen i jobbet är att ha den initiala kontakten och pitcha till
				företag varför just de ska komma till LARV. Har du några frågor om att
				vara företagskoordinator, kontakta rekrytering@larv.org.
			</p>
			<h3>Servicekoordinator</h3>
			<p>
				En servicekoordinator hjälper serviceansvarig med att lotsa rätt
				personer till rätt plats, vid rätt tidpunkt. Som servicekoordinator
				hjälper du även till att anordna personliga samtal mellan studenter och
				företag. Har du några frågor om att vara servicekoordinator, kontakta
				service@larv.org.
			</p>
			<h3>Eventkoordinator</h3>
			<p>
				Vill du lära dig hur du anordnar event för andra? Som eventkoordinator
				planerar du tillsammans med eventansvarig event kring LARV, detta gäller
				både innan och under själva LARV-veckan. Det kan vara allt från en
				awesome LARV-pub till att fixa de bästa lunchföreläsningarna! Tveka inte
				att söka idag! Har du frågor kring att vara eventkoordinator, kontakta
				revent@larv.org.
			</p>

			<NavLink className="button" to="/involved/coordinator/application">
				Apply for Coordinator here!
			</NavLink>
		</>
	);
}
