define(['angular',
	'common/error/error_directive',
	'common/loader/loader_directive'],
	
  function(angular, errorDirective, loaderDirective){
    var commonModule = angular.module('commonModule', []);
    commonModule.directive('errorDirective', errorDirective);
    commonModule.directive('loaderDirective', loaderDirective);
});
