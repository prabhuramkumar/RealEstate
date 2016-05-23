define(['propertyModule', 'propertyListController'], function(){
    beforeEach(module('propertyModule'));
    var ctrl, scope, diferred, url, rootScope, state, data, propertyListController;
    data = {
            "results": [
                {
                    "price": "$526,500",
                    "id": "4"
                }
            ],
            "saved": [
                {
                    "price": "$826,500",
                    "id": "3"
                }
            ]
        }
    beforeEach(angular.mock.inject(function($rootScope, $controller, $q, $http){
        rootScope = $rootScope;
        ctrl = $controller;
        scope = $rootScope.$new();
        // surveyListService = {getSurveyList: function() {}};
        propertyList = jasmine.createSpyObj('propertyList', ['getItems']);
        propertyList.state = {isLoading: true, 
                                    error: ''};

        diferred = $q.defer();

        // spyOn(surveyListService, "getSurveyList").andReturn(diferred.promise);
        propertyList.getItems.andReturn(diferred.promise);

        propertyListController = ctrl('propertyListController', {
            propertyList: propertyList,
            $state: state,
            $rootScope: rootScope
        });

        
    }));

    describe('on getItems method call', function(){
        it('should state have intial values', function () {
            expect(propertyListController.state).toEqual(propertyList.state);
            
            // diferred.resolve();
            // rootScope.$apply();
            // console.log(propertyList.getItems());

            // expect(propertyList.getItems).toHaveBeenCalled();
            // expect(propertyListController.propertyResults).toEqual(data.results);
            // rootScope.$apply();
        });


        it('should state.go have been called with index + 1', function () {

        
        });
    });

});