define([], function() {
	function PropertyController(propertyListService) {
		var controller = this;

		controller.addProperty = function(property){
			controller.isLoading = true;
		    propertyListService.addItem(property).catch(function(error){
	        	controller.error = "Adding property failed, Try again."
	        }).finally(function(){
	        	controller.isLoading = false;
	        });
		}

		controller.deleteProperty = function(property){
			controller.isLoading = true;
		  	propertyListService.deleteItem(property).catch(function(error){
	        	controller.error = "Deleting property failed, Try again."
	        }).finally(function(){
	        	controller.isLoading = false;
	        });
		}
	}

	PropertyController.$inject = ['propertyListService'];
	return PropertyController;
});