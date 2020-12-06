import React from "react";
import { VolunteerApplication } from "../config";

export default function VolunteerNomination() {
	const NominationOpen = VolunteerApplication().nomination;
	return (
		<>
			{NominationOpen && (
				<div className="iframe-container">
					<iframe
						title="Volunteer Application"
						src="https://docs.google.com/forms/d/e/1FAIpQLSeWhWnMu2OZ04ls4pp5CJgtAbtTSmJthAHml_5ZEF47QEcHyA/viewform?embedded=true"
						width="640"
						height="4051"
						frameborder="0"
						marginheight="0"
						marginwidth="0"
					>
						Läser in...
					</iframe>
				</div>
			)}
			{!NominationOpen && (
				<>
					<h1>Volunteer Application</h1>
					<p>
						The application is sadly not open at the moment. If there are any questions
						about the application, please contact{" "}
						<a href="rekrytering@larv.org">Head of HR</a>
					</p>
				</>
			)}
		</>
	);
}
