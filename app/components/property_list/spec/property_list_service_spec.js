'use strict';
define(['propertyListService'], function(propertyListService){
    describe('#propertyListService', function() {
        var q, diferred, url, rootScope, http;

        beforeEach(angular.mock.inject(function($http, $q, $rootScope){
            rootScope = $rootScope;
            diferred = $q.defer();
            // service = $service;
            http = $http;
            q = $q;

            url= "/api/properties";
        }));

        describe('on getItems method call', function(){
          it("should getItems have been called and return property list", function (){
            spyOn(http, "get").andReturn(diferred.promise);
            diferred.resolve({"data": "some"});

            propertyListService.getItems(http).then(function(result) {
              expect(http.get).toHaveBeenCalledWith(url);
              expect(result).not.toEqual("some");
            });
          });
        });

    });
});
