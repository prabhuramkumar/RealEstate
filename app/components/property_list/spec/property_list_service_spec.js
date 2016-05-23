'use strict';
define(['propertyListService'], function(propertyListService){
    describe('#propertyListService', function() {
        var q, diferred, url, rootScope, http, data, getUrl, postUrl, propertyListService;

        beforeEach(inject(function($http, $q, $rootScope){
            rootScope = $rootScope;
            diferred = $q.defer();
            // service = $service;
            http = $http;
            q = $q;

            console.log("***********************************");
            console.log(typeof(propertyListService));
            propertyListServiceObj = propertyListService();


            getUrl= "/api/properties";
            postUrl= "/api/property";
        }));

        describe('#getItems', function(){

          it("should getItems have been called and return property list", function (done) {
            data = {
                results: [{"id": "1"}, {"id": "2"}],
                saved: [{"id": "3"}, {"id": "4"}]
            }
            diferred.resolve(data);
            spyOn(http, "get").andReturn(diferred.promise);

            propertyListServiceObj.getItems(http).then(function(result) {
              expect(http.get).toHaveBeenCalledWith(getUrl);
              expect(result).toEqual(data);
              done();
            });
          });

        });

        describe('#addItem', function(){
            
          it("should addItem should add an item to the saved list and remove item from results list", function (done) {
            data = {
                results: [{"id": "2"}],
                saved: [{"id": "1"}, {"id": "3"}, {"id": "4"}]
            }
            diferred.resolve(data);
            spyOn(http, "get").andReturn(diferred.promise);

            propertyListServiceObj.addItem(http, data.results[0]).then(function(){
                propertyListService.getItems(http).then(function(result) {
                  expect(http.get).toHaveBeenCalledWith(getUrl);
                  expect(result).toEqual(data);
                  done();
                });
            });
            
          });

        });

        describe('#deleteItem', function(){
            
          it("should deleteItem should delete an item from the saved list and add it to the results list", function (done) {
            data = {
                results: [{"id": "1"}, {"id": "2"}],
                saved: [{"id": "3"}, {"id": "4"}]
            }
            diferred.resolve(data);
            spyOn(http, "get").andReturn(diferred.promise);

            propertyListServiceObj.deleteItem(http, data.saved[0]).then(function(){
                propertyListService.getItems(http).then(function(result) {
                  expect(http.get).toHaveBeenCalledWith(getUrl);
                  expect(result).toEqual(data);
                  done();
                });  
            });
            
          });

        });

    });
});
