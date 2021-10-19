/* eslint-disable no-undef */
import React from "react";

export default () => {
	Jexpo.init(
		{
			lang: "sv",
			endpoint: "p18.jexpo.se/larv",
		},
		function () {
			Jexpo.dialog("app-dialog");
			Jexpo.RecruitmentsApplication("app", { workspace: "rekrytering-2022" });
		},
		[],
	);
	return (
		<div>
			<div id="app" class="jexpo jexpo-forms"></div>
			<div id="app-dialog" class="jexpo jexpo-forms"></div>
			<script
				type="text/javascript"
				src="https://storage.googleapis.com/jexpo-cdn/vendor-v18.min.js"
			></script>
			<script
				type="text/javascript"
				src="https://storage.googleapis.com/jexpo-cdn/plugins-v18.min.js"
			></script>
			<script></script>
		</div>
	);
};
