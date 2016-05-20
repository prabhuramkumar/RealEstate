'use strict';

define(['routes'], function(routes){
  	var initialize = function () {
	     var app = angular.module('app', ['commonModule','propertyModule', 'ui.router']);
	     app.config(routes);
	     angular.bootstrap(document,['app']);
 	};
 	return {
        initialize : initialize
    };
});
