define(['angular',
	'components/property/property_directive',
	'components/property_list/property_list_service',
	'components/property_list/property_list_controller'],
	
  function(angular, propertyDirective, propertyListService, propertyListController){
    var propertyModule = angular.module('propertyModule', []);

    propertyModule.directive('propertyDirective', propertyDirective);
    propertyModule.service('propertyListService', propertyListService);
    propertyModule.controller('propertyListService', propertyListService);
});
