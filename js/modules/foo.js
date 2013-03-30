
define(['router!m/foo'], function(params) {

	console.log("Foo module loaded...");

	return {
		hello: function() {
			console.log("Foo says hello");
		}
	};
});
