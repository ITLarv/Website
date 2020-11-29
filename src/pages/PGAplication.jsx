import React from "react";
import { PGApplication } from "../config";

export default function PGAplication() {
	const ApplicationOpen = PGApplication().open;
	return (
		<>
			{ApplicationOpen && (
				<iframe
					title="pg-application"
					src="https://docs.google.com/forms/d/e/1FAIpQLSeUO_fwAw9OkecPPfB10VL9hBkiu9WSZw-PorIN2sT2E54Nbw/viewform?embedded=true"
					width="640"
					height="1433"
					frameborder="0"
					marginheight="0"
					marginwidth="0"
				>
					Läser in …
				</iframe>
			)}
			{!ApplicationOpen && (
				<>
					<h1>PG Application</h1>
					<p>
						The application is sadly not open at the moment. If there are any questions,
						please contact the <a href="pl@larv.org">Project Manager</a>
					</p>
				</>
			)}
		</>
	);
}
