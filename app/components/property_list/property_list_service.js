'use strict';

define([], function() {

	var Service = function ($http){
		var propertyList = {
			results: [],
			saved: []
		};

		function storePropertyValue(res){
	    	 propertyList.results = angular.copy(res.data.results);	
	         propertyList.saved = angular.copy(res.data.saved); 
		}

	    function getItems() {
	        return $http({
		     		method: 'get',
		     		url: '/api/properties'
		     	}).then(function(res){
		     		if(res){
			    		storePropertyValue(res);
			    	}
		        });
	    }

	    function addItem(property) {
	     	return $http({
			     		method: 'post',
			     		url: '/api/property',
			     		data: property,
			     		headers: { 'Content-Type': 'application/json' }
			     	}).then(function(res){
			     		if(res){
				    		storePropertyValue(res);
				    	}
		        	});
	    }

	    function deleteItem(property) {
	     	return $http({
			     		method: 'delete',
			     		url: '/api/property',
			     		data: property,
			     		headers: { 'Content-Type': 'application/json' }
			     	}).then(function(res){
			     		if(res){
				    		storePropertyValue(res);
				    	}
		        	});
	    }

	    return {
	    	deleteItem: deleteItem,
	    	addItem: addItem,
	    	getItems: getItems,
	    	propertyList: propertyList
	    }
	}

	return Service;	
});
