/* eslint-disable no-undef */
import React from "react";
export default () => {
	React.useEffect(() => {
		Jexpo.init(
			{
				lang: "sv",
				endpoint: "p18.jexpo.se/larv",
			},
			function () {
				Jexpo.dialog("app-dialog");
				Jexpo.InitialRegistration("app", { workspace: "2023" });
			},
		);
		console.info({ window });
	}, []);

	return (
		<div>
			<div id="app"></div>
			<script type="text/javascript" src="https://sdk.v1.jexpo.se/jexpo.js"></script>
			<script>Jexpo("larv").mount("#app", "/bundle/widget-registration.js")</script>
			<p>
				Händer det inget efter att du klickat "skicka in"? Kolla din inkorg för
				bekräftelsemail. Detta är ett tecken på att vi mottagit er anmälan. Hör av er annars
				till anmalan@larv.org för att stämma av eller för hjälp med er anmälan!
			</p>
		</div>
	);
};
