'use strict';

define(['propertyListService'], function(propertyListService) {
	function PropertyListController($http) {
		var controller = this;
		var propertyList = 	propertyListService.propertyList;
		controller.state = propertyListService.state;
		
		 propertyList.getItems($http).then(function(data){
		 	controller.propertyResults = propertyList.storedData.results;
		    controller.propertySaved = propertyList.storedData.saved;
		    controller.state = propertyListService.state;
		 });
	}

	PropertyListController.$inject = ['$http'];

	return PropertyListController;
});
