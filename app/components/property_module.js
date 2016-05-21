define(['angular',
	'propertyController',
	'propertyDirective',
	'propertyListService',
	'propertyListController',
	'propertyListDirective'],
	
  function(angular, 
  	propertyController, 
  	propertyDirective, 
  	propertyListService, 
  	propertyListController,
  	propertyListDirective) { 

    var propertyModule = angular.module('propertyModule', []);

    propertyModule.controller('propertyController', propertyController);
    propertyModule.directive('propertyDirective', propertyDirective);

    propertyModule.factory('propertyListService', propertyListService);
    propertyModule.controller('propertyListController', propertyListController);
    propertyModule.directive('propertyListDirective', propertyListDirective);
});
