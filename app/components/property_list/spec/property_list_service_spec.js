'use strict';
define(['propertyModule'], function(){
    describe('#propertyListService', function() {
        var url, rootScope, http, propsList, getUrl, postUrl, propertyService, httpBackend;
        beforeEach(module('propertyModule'));

        beforeEach(inject(function($httpBackend, $rootScope, propertyListService){
            httpBackend = $httpBackend;
            rootScope = $rootScope;
            getUrl= "/api/properties";
            url= "/api/property";
            propertyService = propertyListService;
            propsList = {
                results: [{"id": "1"}, {"id": "2"}],
                saved: [{"id": "3"}, {"id": "4"}]
            }
        }));

        describe('#getItems', function(){

          it("should getItems have been called and return property list", function(done) {
            
            httpBackend.expectGET(getUrl).respond(propsList);
           
            propertyService.getItems().then(function(){
                expect(propertyService.propertyList).toEqual(propsList);
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

            propertyService.addItem({"id": "1"}).then(function(){
                
                expect(propertyService.propertyList).toEqual(propsList);
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
            propertyService.deleteItem({"id": "1"}).then(function(results){
                 expect(propertyService.propertyList).toEqual(propsList);
            });
            httpBackend.flush();
          }));

        });

    });
});
