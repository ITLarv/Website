import React from "react";
import { CoordinatorApplication } from "../config";

export default function CoordinatorAplication() {
	const ApplicationOpen = CoordinatorApplication().open;
	return (
		<>
			{ApplicationOpen && (
				<iframe
					title="coordinator-application"
					src="https://docs.google.com/forms/d/e/1FAIpQLSfuRoLOfZuLdtqAhg7Q9mhOqZaHePj4X9vVcGcSjTBUJgn2pQ/viewform?embedded=true"
					width="640"
					height="1920"
					frameborder="0"
					marginheight="0"
					marginwidth="0"
				>
					Läser in …
				</iframe>
			)}
			{!ApplicationOpen && (
				<>
					<h1>Coordinatior Application</h1>
					<p>
						The application is sadly not open at the moment. If there are any
						questions about the application, please contact{" "}
						<a href="rekrytering@larv.org">Head of HR</a>
					</p>
				</>
			)}
		</>
	);
}
