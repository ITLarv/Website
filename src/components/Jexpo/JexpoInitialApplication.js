const JexpoInitialApplication = `
	<div id="app" class="jexpo jexpo-forms" style="clear: both;text-align: left;max-width: 500px;margin: 0 auto;"></div>
	<div id="app-dialog" class="jexpo jexpo-forms"></div>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-shim.min.js"></script>
	<script src="http://cdnjs.cloudflare.com/ajax/libs/dom4/1.8.3/dom4.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.1/es6-shim.min.js"></script>
	<script type="text/javascript" src="https://storage.googleapis.com/jexpo-cdn/vendor-v18.min.js"></script>
	<script type="text/javascript" src="https://storage.googleapis.com/jexpo-cdn/plugins-v18.min.js"></script>
	<script>
		Jexpo.init({
			lang:'sv'
			, endpoint:'p18.jexpo.se/larv'
		}, function(){
		  Jexpo.dialog('app-dialog');
		  Jexpo.InitialRegistration('app', {workspace:'2020'});
		});
	</script>
`;

export default JexpoInitialApplication;
