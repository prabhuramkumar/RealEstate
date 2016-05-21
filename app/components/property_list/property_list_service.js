'use strict';

define([], function() {
	var propertyList =  {}, state = {error: '',
				isLoading: true};

	propertyList.storedData = "";

    propertyList.getItems = function($http) {
        return $http.get('/api/properties').then(function(res){
		    	if(res){
		          propertyList.storedData = res.data;
		          return propertyList.storedData;
		        }else{
		        	state.error = "Loading Properties Failed";
		        }
	        }).catch(function(error){
	        	state.error = "Data Loading Error."
	        }).finally(function(){
	        	state.isLoading = false;
	        })
    }

    propertyList.addItem = function($http, property) {
    	state.isLoading = true;
     	return $http.post('/api/property/'+parseInt(property.id)).then(function(res){
	 		if(res){
	 			propertyList.storedData.saved.push(property);
	  			propertyList.storedData.results.splice(propertyList.storedData.results.indexOf(property), 1);
	  		}else{
	  			state.error = "Adding Properties Failed";
	  		}
     	}).catch(function(error){
        	state.error = "Data Loading Error."
        }).finally(function(){
        	state.isLoading = false;
        })
    }

    propertyList.deleteItem = function($http, property) {
    	state.isLoading = true;
     	return $http.delete('/api/property/'+parseInt(property.id)).then(function(res){
     		if(res){
	 			propertyList.storedData.results.push(property);
	  			propertyList.storedData.saved.splice(propertyList.storedData.saved.indexOf(property), 1);
	  		}else{
	  			state.error = "Deleting Properties Failed";
	  		}
     	}).catch(function(error){
        	state.error = "Data Loading Error."
        }).finally(function(){
        	state.isLoading = false;
        })
    }

    return {
    	propertyList: propertyList,
    	state: state
    }
});
