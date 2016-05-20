'use strict';

define(function() {
	function errorDirective() {
		return {
			restrict: "E",
			scope: {
				message: '='
			},
			templateUrl: 'app/common/error/_error.html'
		}
	}

	return errorDirective;
});