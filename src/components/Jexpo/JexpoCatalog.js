const JexpoCatalog = `
	<div id="catalogue" class="jexpo jexpo-forms"></div>
	<div id="app-dialog" class="jexpo jexpo-forms"></div>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-shim.min.js"></script>
	<script src="http://cdnjs.cloudflare.com/ajax/libs/dom4/1.8.3/dom4.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.1/es6-shim.min.js"></script>
	<script
		type="text/javascript"
		src="https://storage.googleapis.com/jexpo-cdn/vendors.min.js"
	></script>
	<script
		type="text/javascript"
		src="https://storage.googleapis.com/jexpo-cdn/plugins.min.js"
	></script>
	<script>
		Jexpo.init({
			lang: "sv",
			endpoint: "p18.jexpo.se/larv",
		});
		Jexpo.dialog("app-dialog");
		Jexpo.ExhibitorsCatalogue("catalogue", {
			workspace: "2021",
			search: [
				"name",
				"profile.weOffer",
				"profile.industry",
				"profile.desiredProgramme",
			],
			filter: ["published:true"],
		});
	</script>
`;

export default JexpoCatalog;
