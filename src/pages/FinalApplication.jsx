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
				Jexpo.ExhibitorsFinalRegistration("app", { workspace: "2021" });
			},
		);
		console.info({ window });
	}, []);

	return (
		<div>
			<div id="app" className="jexpo jexpo-forms"></div>
			<div id="app-dialog" className="jexpo jexpo-forms"></div>
		</div>
	);
};
