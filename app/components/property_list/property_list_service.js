'use strict';

define([], function() {

	var Service = function ($http){
		var state = {
			error: '',
			isLoading: true
		};

		var propertyList = {
			results: [],
			saved: []
		};

		var dataError = "Data Loading Error.";

	    function getItems() {
	        return $http({
			     		method: 'get',
			     		url: '/api/properties'
			     	}).then(function(res){
			    	if(res){
				    	 propertyList.results = angular.copy(res.data.results);	
				         propertyList.saved = angular.copy(res.data.saved); 
				         return res.data;
			        }else{
			        	state.error = "Loading Properties Failed";
			        }
		        }).catch(function(error){
		        	state.error = dataError
		        }).finally(function(){
		        	state.isLoading = false;
		        });
	    }

	    function addItem(property) {
	    	state.isLoading = true;
	     	return $http({
			     		method: 'post',
			     		url: '/api/property',
			     		data: property,
			     		headers: { 'Content-Type': 'application/json' }
			     	}).catch(function(error){
			        	state.error = dataError
			        }).finally(function(){
			        	state.isLoading = false;
			        });
	    }

	    function deleteItem(property) {
	    	state.isLoading = true;
	     	return $http({
			     		method: 'delete',
			     		url: '/api/property',
			     		data: property,
			     		headers: { 'Content-Type': 'application/json' }
			     	}).catch(function(error){
			        	state.error = dataError
			        }).finally(function(){
			        	state.isLoading = false;
			        });
	    }

	    return {
	    	deleteItem: deleteItem,
	    	addItem: addItem,
	    	getItems: getItems,
	    	state: state,
	    	propertyList: propertyList
	    }
	}

	return Service;	
});
