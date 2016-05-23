'use strict';

define([], function() {

	var  state = {
		error: '',
		isLoading: true
	};

	var propertyList = {
		results: [],
		saved: []
	};


     function getItems($http) {
        return $http.get('/api/properties').then(function(res){
		    	if(res){
		    	 propertyList.results = angular.copy(res.data.results);	
		         propertyList.saved = angular.copy(res.data.saved); 
		         return res.data;
		        }else{
		        	state.error = "Loading Properties Failed";
		        }
	        }).catch(function(error){
	        	state.error = "Data Loading Error."
	        }).finally(function(){
	        	state.isLoading = false;
	        })
    }

    function addItem($http, property) {
    	state.isLoading = true;
     	return $http({
		     		method: 'post',
		     		url: '/api/property',
		     		data: property,
		     		headers: { 'Content-Type': 'application/json' }
		     	}).catch(function(error){
		        	state.error = "Data Loading Error."
		        }).finally(function(){
		        	state.isLoading = false;
		        })
    }

    function deleteItem($http, property) {
    	state.isLoading = true;
     	return $http({
		     		method: 'delete',
		     		url: '/api/property',
		     		data: property,
		     		headers: { 'Content-Type': 'application/json' }
		     	}).catch(function(error){
		        	state.error = "Data Loading Error."
		        }).finally(function(){
		        	state.isLoading = false;
		        })
    }


    return {
    	deleteItem: deleteItem,
    	addItem: addItem,
    	getItems: getItems,
    	state: state,
    	propertyList: propertyList
    }
});
