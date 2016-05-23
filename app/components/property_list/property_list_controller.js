'use strict';

define(['propertyListService'], function(propertyListService) {
	function PropertyListController($http, rootScope) {
		var controller = this;
		controller.state = propertyListService.state;
		controller.propertyList = propertyListService.propertyList;
		propertyListService.getItems($http);
	}

	PropertyListController.$inject = ['$http', '$rootScope'];

	return PropertyListController;
});
