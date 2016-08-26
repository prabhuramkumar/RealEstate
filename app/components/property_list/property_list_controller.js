'use strict';

define([], function() {
	function PropertyListController($http, rootScope, propertyListService) {
		var controller = this;
		controller.isLoading = true;
		controller.propertyList = propertyListService.propertyList;
		
		propertyListService.getItems().catch(function(error){
        	controller.error = "Data Loading Error.";
        }).finally(function(){
        	controller.isLoading = false;
        });
	}

	PropertyListController.$inject = ['$http', '$rootScope', 'propertyListService'];

	return PropertyListController;
});
