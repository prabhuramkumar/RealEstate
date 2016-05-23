'use strict';

define([], function() {
	function propertyDirective() {
		return {
			restrict: "E",
			scope: {
				saved: "=",
				property: "="
			},
			controller: 'propertyController',
			controllerAs: 'PropertyCtrl',
			templateUrl: 'app/components/property/_property.html'
		}
	}

	return propertyDirective;
});
