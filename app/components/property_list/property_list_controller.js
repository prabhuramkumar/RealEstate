'use strict';

define([], function() {
	function PropertyListController($http, rootScope, propertyListService) {
		var controller = this;
		controller.state = propertyListService.state;
		controller.propertyList = propertyListService.propertyList;
		propertyListService.getItems();
	}
	PropertyListController.$inject = ['$http', '$rootScope', 'propertyListService'];

	return PropertyListController;
});
