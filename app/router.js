define(['ui-router'], function(app){
  'use strict';
  function routes($stateProvider) {
    $stateProvider.state('/', {
      url: '/',
      templateUrl: 'app/components/property_list/property_list_view.html'
      // controller: 'PropertyListCtrl',
      // controllerAs: 'PropertyListCtrl'
    })
  };

  routes.$inject=['$stateProvider'];
  return routes;
});
