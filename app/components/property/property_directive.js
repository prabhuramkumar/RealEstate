'use strict';

define([], function() {
	function propertyDirective() {
		return {
			restrict: "E",
			templateUrl: 'app/components/property/_property.html'
		}
	}

	return propertyDirective;
});
