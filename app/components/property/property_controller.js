define([], function() {
	function PropertyController(propertyListService) {
		var controller = this;

		controller.addProperty = function(property){
		    propertyListService.addItem(property).then(function(){
		    	 propertyListService.getItems();
		    });
		}

		controller.deleteProperty = function(property){
		  	propertyListService.deleteItem(property).then(function(){
		    	 propertyListService.getItems();
		    });
		}
	}

	PropertyController.$inject = ['propertyListService'];
	return PropertyController;
});