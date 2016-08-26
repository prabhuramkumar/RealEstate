define([], function() {
	function PropertyController(propertyListService) {
		var controller = this;

		controller.addProperty = function(property){
		    propertyListService.addItem(property);
		}

		controller.deleteProperty = function(property){
		  	propertyListService.deleteItem(property);
		}
	}

	PropertyController.$inject = ['propertyListService'];
	return PropertyController;
});