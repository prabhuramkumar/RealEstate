define(['propertyListService'], function(propertyListService) {
	function PropertyController($http){
		controller = this;
		var propertyList = propertyListService.propertyList;
		
		controller.addProperty = function(property){
		    propertyList.addItem($http ,property);
		}

		controller.deleteProperty = function(property){
		  	propertyList.deleteItem($http ,property);
		}
	}

	PropertyController.$inject = ['$http'];
	return PropertyController;
});


