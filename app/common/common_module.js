define(['angular',
	'errorDirective',
	'loaderDirective'],
	
  function(angular, errorDirective, loaderDirective){
    var commonModule = angular.module('commonModule', []);
    commonModule.directive('errorDirective', errorDirective);
    commonModule.directive('loaderDirective', loaderDirective);
});
