define(['angular',
  'propertyController',
	'propertyDirective',
  'propertyListService',
	'propertyListController'],
	
  function(angular, 
    propertyController,
  	propertyDirective, 
    propertyListService,
  	propertyListController) { 

    var propertyModule = angular.module('propertyModule', []);

    propertyModule.controller('propertyController', propertyController);
    propertyModule.directive('propertyDirective', propertyDirective);

    propertyModule.factory('propertyListService', ["$http", propertyListService]);

    propertyModule.controller('propertyListController', propertyListController);
});
