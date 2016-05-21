'use strict';

define(['propertyListService'], function(propertyListService) {
	function propertyDirective() {
		return {
			restrict: "E",
			scope: {
				saved: "=",
				property: "="
			},
			controller: 'propertyController',
			controllerAs: 'propertyCtrl',
			templateUrl: 'app/components/property/_property.html'
		}
	}

	return propertyDirective;
});
