import React from "react";
import { VolunteerApplication } from "../config";

export default function VolunteerAplication() {
	const ApplicationOpen = VolunteerApplication().open;
	return (
		<>
			{ApplicationOpen && (
				<div className="iframe-container">
					<iframe
						title="volunteer-application"
						src="https://docs.google.com/forms/d/e/1FAIpQLSdeifunBO-RrU3EyjJ-PzxL6lKVlCcDs6uUZyJSnN5SoBOGMQ/viewform?embedded=true"
						width="640"
						height="2200"
						frameborder="0"
						marginheight="0"
						marginwidth="0"
					>
						Läser in …
					</iframe>
				</div>
			)}
			{!ApplicationOpen && (
				<>
					<h1>Volunteer Application</h1>
					<p>
						The application is sadly not open at the moment. If there are any
						questions about the application, please contact{" "}
						<a href="mailto:rekrytering@larv.org">Head of HR</a>
					</p>
				</>
			)}
		</>
	);
}
