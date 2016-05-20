'use strict';

define([], function() {
	function loaderDirective() {
		return {
			restrict: "E",
			templateUrl: 'app/common/loader/_loader.html'
		}
	}

	return loaderDirective;
});
