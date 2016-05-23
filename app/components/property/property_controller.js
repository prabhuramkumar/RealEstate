define(['propertyListService'], function(propertyListService) {
	function PropertyController($http) {
		var controller = this;
		
		controller.addProperty = function(property){
		    propertyListService.addItem($http, property).then(function(){
		    	 propertyListService.getItems($http);
		    });
		}

		controller.deleteProperty = function(property){
		  	propertyListService.deleteItem($http, property).then(function(){
		    	 propertyListService.getItems($http);
		    });
		}
	}

	PropertyController.$inject = ['$http'];
	return PropertyController;
});