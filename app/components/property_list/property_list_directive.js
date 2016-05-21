'use strict';

define([], function() {
	function propertyListDirective() {
		return {
			restrict: "E",
			templateUrl: 'app/components/property_list/_property_list.html'
		}
	}

	return propertyListDirective;
});
