'use strict';
define(['propertyModule'], function(){
    describe('#propertyListService', function() {
        var q, diferred, url, rootScope, http, data, getUrl, postUrl, propertyListService, diferredGet;
        beforeEach(module('propertyModule'));

        beforeEach(inject(function($http, $q, $rootScope){
            rootScope = $rootScope;
            diferred = $q.defer();
            diferredGet = $q.defer();
            http = $http;
            q = $q;

            getUrl= "/api/properties";
            postUrl= "/api/property";
        }));

        describe('#getItems', function(){

          it("should getItems have been called and return property list", inject(function(propertyListService) {
            data = {
                results: [{"id": "1"}, {"id": "2"}],
                saved: [{"id": "3"}, {"id": "4"}]
            }
            diferredGet.resolve(data);
            spyOn(http, "get").andReturn(diferredGet.promise);

            propertyListService.getItems().then(function() {
              expect(http.get).toHaveBeenCalledWith(getUrl);
              http.get().then(function(result){
                expect(result).toEqual(data);
              })
            });
            
          }));

        });

        describe('#addItem', function(){
            
          it("should addItem should add an item to the saved list and remove item from results list", inject(function(propertyListService) {
            data = {
                results: [{"id": "2"}],
                saved: [{"id": "1"}, {"id": "3"}, {"id": "4"}]
            }
            diferred.resolve(data);
            spyOn(http, "get").andReturn(diferred.promise);

            propertyListService.addItem(data.results[0]).then(function(){
                propertyListService.getItems().then(function() {
                  expect(http.get).toHaveBeenCalledWith(getUrl);
                  http.get().then(function(result){
                    expect(result).toEqual(data);
                  })
                });
            });
            
          }));

        });

        describe('#deleteItem', function(){
            
          it("should deleteItem should delete an item from the saved list and add it to the results list", inject(function(propertyListService) {
            data = {
                results: [{"id": "1"}, {"id": "2"}],
                saved: [{"id": "3"}, {"id": "4"}]
            }
            diferred.resolve(data);
            spyOn(http, "get").andReturn(diferred.promise);

            propertyListService.deleteItem(http, data.saved[0]).then(function(){
                propertyListService.getItems().then(function() {
                  expect(http.get).toHaveBeenCalledWith(getUrl);
                  http.get().then(function(result){
                    expect(result).toEqual(data);
                  })
                });  
            });
            
          }));

        });

    });
});
