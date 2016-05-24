'use strict';
define(['propertyModule'], function(){
    describe('#propertyListService', function() {
        var url, rootScope, http, propsList, getUrl, postUrl,propertyList, httpBackend;
        beforeEach(module('propertyModule'));

        beforeEach(inject(function($httpBackend, $rootScope, propertyListService){
            httpBackend = $httpBackend;
            rootScope = $rootScope;
            getUrl= "/api/properties";
            url= "/api/property";
            propertyList = propertyListService;
        }));

        describe('#getItems', function(){

          it("should getItems have been called and return property list", function(done) {
            propsList = {
                "data":{
                    results: [{"id": "1"}, {"id": "2"}],
                    saved: [{"id": "3"}, {"id": "4"}]
                }
            }
            httpBackend.expectGET(getUrl).respond(propsList);
           
            propertyList.getItems().then(function(results){
                expect(results.data).toEqual(propsList.data);
            });
            httpBackend.flush();
          });

        });

        describe('#addItem', function(){
            
          it("should addItem should add an item to the saved list and remove item from results list", inject(function(propertyListService) {
            
            propsList = {
                results: [{"id": "2"}],
                saved: [{"id": "1"}, {"id": "3"}, {"id": "4"}]
            }
            httpBackend.expectPOST(url).respond(propsList);

            propertyListService.addItem({"id": "1"}).then(function(results){
                
                expect(results.data).toEqual(propsList);
            });
            httpBackend.flush();
          }));

        });

        describe('#deleteItem', function(){
            
          it("should deleteItem should delete an item from the saved list and add it to the results list", inject(function(propertyListService) {
            propsList = {
                results: [{"id": "1"}, {"id": "2"}],
                saved: [{"id": "3"}, {"id": "4"}]
            }
            httpBackend.expectDELETE(url).respond(propsList);
            propertyListService.deleteItem({"id": "1"}).then(function(results){
                 expect(results.data).toEqual(propsList);
            });
            httpBackend.flush();
          }));

        });

    });
});
